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
		<>
			<Link to="/" className="absolute top-0 right-0 m-5 rounded-xl bg-white/10 p-2 hover:bg-white/15">
				Future Events
			</Link>{" "}
			<PeopleSelect />
			<h1 className="mb-1 text-center text-4xl font-bold">
				Time since... {selectedPerson ? `for ${selectedPerson}` : "for all"}
			</h1>
			{!hideAll ? <PastEvents /> : <p className="text-center text-2xl font-bold">Timer werden synchronisiert...</p>}
		</>
	);
}
