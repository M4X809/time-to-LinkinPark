import { Link } from "react-router-dom";
import { CountUp } from "../components/CountUp";
import { PeopleSelect } from "../components/PeopleSelect";
import { useSelectedPerson } from "../context/SelectedPersonContext";

const PastEvents = () => {
	return (
		<>
			<CountUp startDate={new Date("2024-09-22T00:00:00")} title="Linkin Park 2024" person={["J.", "S."]} />
			<CountUp startDate={new Date("2025-06-16T00:00:00")} title="Linkin Park 2025" person={["J.", "S.", "K."]} />
			<CountUp startDate={new Date("2025-07-16T18:45:00")} title="Imagine Dragons Concert 2025" person={["K."]} />
		</>
	);
};

export default function Past() {
	const { selectedPerson, hideAll } = useSelectedPerson();

	return (
		<div className="relative w-full max-w-4xl">
			{/* Navigation and Controls */}
			<div className="mb-8 flex items-center justify-between">
				<PeopleSelect />
				<Link
					to="/past"
					className="rounded-xl bg-white/10 p-3 text-sm font-medium transition-colors hover:bg-white/15 sm:p-4 sm:text-base"
				>
					Future Events
				</Link>
			</div>

			{/* Main Content */}
			<div className="space-y-8">
				<h1 className="text-center text-2xl font-bold sm:text-3xl lg:text-4xl">
					Time since... {selectedPerson ? `for ${selectedPerson}` : "for all"}
				</h1>
				{!hideAll ? (
					<PastEvents />
				) : (
					<p className="text-center text-lg font-bold sm:text-xl lg:text-2xl">Timer werden synchronisiert...</p>
				)}
			</div>
		</div>
	);
}
