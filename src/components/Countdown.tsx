import { useCallback, useState } from "react";
import SlotCounter from "react-slot-counter";
import { useTimer } from "react-use-precision-timer";

interface CountdownProps {
	targetDate: Date;
	title: string;
}

export function Countdown({ targetDate, title }: CountdownProps) {
	const [timeValues, setTimeValues] = useState({
		days: "00",
		hours: "00",
		minutes: "00",
		seconds: "00",
	});

	const updateCountdown = useCallback(() => {
		const now = new Date();
		const difference = targetDate.getTime() - now.getTime();

		if (difference <= 0) {
			setTimeValues({ days: "00", hours: "00", minutes: "00", seconds: "00" });
			return;
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

		setTimeValues({ days, hours, minutes, seconds });
	}, [targetDate]);

	useTimer({ delay: 1000, startImmediately: true }, updateCountdown);

	return (
		<div>
			<h1 className="text-center text-4xl font-bold">{title}</h1>
			<div className="flex flex-col items-center gap-4 md:flex-row">
				<div className="flex items-center gap-2">
					<SlotCounter value={timeValues.days} charClassName="text-4xl" duration={0.5} />
					<span className="text-4xl">Tage</span>
				</div>
				<div className="flex items-center gap-2">
					<SlotCounter value={timeValues.hours} charClassName="text-4xl" duration={0.5} />
					<span className="text-4xl">Stunden</span>
				</div>
				<div className="flex items-center gap-2">
					<SlotCounter value={timeValues.minutes} charClassName="text-4xl" duration={0.5} />
					<span className="text-4xl">Minuten</span>
				</div>
				<div className="flex items-center gap-2">
					<SlotCounter value={timeValues.seconds} charClassName="text-4xl" duration={0.5} />
					<span className="text-4xl">Sekunden</span>
				</div>
			</div>
		</div>
	);
}
