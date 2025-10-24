import { type people, useSelectedPerson } from "../context/SelectedPersonContext";
import { useCallback, useState, useEffect } from "react";
import SlotCounter from "react-slot-counter";
import { useTimer } from "react-use-precision-timer";

interface CountUpProps {
	startDate: Date;
	title: string;
	person: (typeof people)[number] | null | (typeof people)[number][];
}

const calculateElapsedTimeValues = (start: Date) => {
	const now = new Date();
	const difference = now.getTime() - start.getTime();

	if (difference <= 0) {
		return { days: "00", hours: "00", minutes: "00", seconds: "00" };
	}

	const days = Math.floor(difference / (1000 * 60 * 60 * 24))
		.toString()
		.padStart(2, "0");
	const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
		.toString()
		.padStart(2, "0");
	const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
		.toString()
		.padStart(2, "0");
	const seconds = Math.floor((difference % (1000 * 60)) / 1000)
		.toString()
		.padStart(2, "0");

	return { days, hours, minutes, seconds };
};

export function CountUp({ startDate, title, person }: CountUpProps) {
	const { selectedPerson } = useSelectedPerson();

	const shouldRender =
		selectedPerson === person || selectedPerson === null || (Array.isArray(person) && person.includes(selectedPerson));

	const [timeValues, setTimeValues] = useState(() => calculateElapsedTimeValues(startDate));

	const updateCountUp = useCallback(() => {
		setTimeValues(calculateElapsedTimeValues(startDate));
	}, [startDate]);

	const timer = useTimer({ delay: 1000, startImmediately: shouldRender }, updateCountUp);

	useEffect(() => {
		if (!shouldRender) {
			timer.stop();
		} else {
			timer.start();
		}

		return () => {
			timer.stop();
		};
	}, [timer, shouldRender]);

	if (!shouldRender) return null;

	return (
		<div className="mx-auto w-full max-w-2xl">
			<h1 className="mb-6 text-center text-xl font-bold sm:text-2xl lg:text-3xl">{title}</h1>
			<div className="grid grid-cols-2 gap-4 sm:flex sm:flex-col sm:items-center sm:gap-6 lg:flex-row lg:justify-center">
				<div className="flex flex-col items-center gap-1 rounded-lg bg-white/5 p-3 sm:flex-row sm:gap-2">
					<SlotCounter
						value={timeValues.days}
						charClassName="text-2xl sm:text-3xl lg:text-4xl"
						duration={0.5}
						sequentialAnimationMode
						direction="top-down"
					/>
					<span className="text-sm sm:text-lg lg:text-xl">Days</span>
				</div>
				<div className="flex flex-col items-center gap-1 rounded-lg bg-white/5 p-3 sm:flex-row sm:gap-2">
					<SlotCounter
						value={timeValues.hours}
						charClassName="text-2xl sm:text-3xl lg:text-4xl"
						duration={0.5}
						sequentialAnimationMode
						direction="top-down"
					/>
					<span className="text-sm sm:text-lg lg:text-xl">Hours</span>
				</div>
				<div className="flex flex-col items-center gap-1 rounded-lg bg-white/5 p-3 sm:flex-row sm:gap-2">
					<SlotCounter
						value={timeValues.minutes}
						charClassName="text-2xl sm:text-3xl lg:text-4xl"
						duration={0.5}
						sequentialAnimationMode
						direction="top-down"
					/>
					<span className="text-sm sm:text-lg lg:text-xl">Minutes</span>
				</div>
				<div className="flex flex-col items-center gap-1 rounded-lg bg-white/5 p-3 sm:flex-row sm:gap-2">
					<SlotCounter
						value={timeValues.seconds}
						charClassName="text-2xl sm:text-3xl lg:text-4xl"
						duration={0.5}
						sequentialAnimationMode
						direction="top-down"
					/>
					<span className="text-sm sm:text-lg lg:text-xl">Seconds</span>
				</div>
			</div>
		</div>
	);
}
