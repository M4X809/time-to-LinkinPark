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
		<>
			<Link to="/past" className="absolute top-0 right-0 m-5 rounded-xl bg-white/10 p-2 hover:bg-white/15">
				Past Events
			</Link>{" "}
			<PeopleSelect />
			<h1 className="mb-1 text-center text-4xl font-bold">
				Time until... {selectedPerson ? `für ${selectedPerson}` : "für alle"}
			</h1>
			{!hideAll ? <FutureEvents /> : <p className="text-center text-2xl font-bold">Timer werden synchronisiert...</p>}
		</>
	);
}
