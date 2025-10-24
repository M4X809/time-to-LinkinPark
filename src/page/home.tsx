import { Link } from "react-router-dom";
import { Countdown } from "../components/Countdown";
import { PeopleSelect } from "../components/PeopleSelect";
import { useSelectedPerson } from "../context/SelectedPersonContext";

const FutureEvents = () => {
	return (
		<>
			<Countdown targetDate={new Date("2025-12-09T20:00:00")} title="Bad Omens Concert 2025" person={["J.", "S."]} />
			<Countdown
				targetDate={new Date("2026-06-03T18:30:00")}
				title="Linkin Park Concert 2026"
				person={["J.", "S.", "K."]}
			/>
			<Countdown
				targetDate={new Date("2026-02-21T19:00:00")}
				title="Motionless in White Concert 2026"
				person={["J.", "S.", "K."]}
			/>
		</>
	);
};

export default function Home() {
	const { selectedPerson, hideAll } = useSelectedPerson();

	return (
		<div className="relative w-full max-w-4xl">
			{/* Navigation and Controls */}
			<div className="mb-8 flex justify-between">
				<PeopleSelect />
				<Link
					to="/past"
					className="rounded-xl bg-white/10 p-3 text-sm font-medium transition-colors hover:bg-white/15 sm:p-4 sm:text-base"
				>
					Past Events
				</Link>
			</div>

			{/* Main Content */}
			<div className="space-y-8">
				<h1 className="text-center text-2xl font-bold sm:text-3xl lg:text-4xl">
					Time until... {selectedPerson ? `for ${selectedPerson}` : "for all"}
				</h1>
				{!hideAll ? (
					<FutureEvents />
				) : (
					<p className="text-center text-lg font-bold sm:text-xl lg:text-2xl">Timer werden synchronisiert...</p>
				)}
			</div>
		</div>
	);
}
