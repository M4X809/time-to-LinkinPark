import { Link } from "react-router-dom";
import { CountUp } from "../components/CountUp";

export default function Past() {
	return (
		<>
			<Link to="/" className="absolute top-0 right-0 m-5 rounded-xl bg-white/10 p-2 hover:bg-white/15">
				Future Events
			</Link>{" "}
			<h1 className="mb-1 text-center text-4xl font-bold">Time since...</h1>
			<CountUp startDate={new Date("2024-09-22T00:00:00")} title="Linkin Park 2024" />
			<CountUp startDate={new Date("2025-06-16T00:00:00")} title="Linkin Park 2025" />
		</>
	);
}
