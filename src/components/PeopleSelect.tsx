import { Box, Select } from "@mantine/core";
import { useSelectedPerson } from "../context/SelectedPersonContext";

export const people = ["J.", "S.", "K."] as const;

export function PeopleSelect() {
	const { selectedPerson, setSelectedPerson } = useSelectedPerson();

	return (
		<Box className="absolute top-0 left-0 m-5 rounded-xl bg-white/10 p-2 hover:bg-white/15">
			<Select
				data={people}
				value={selectedPerson}
				onChange={(value) => setSelectedPerson(value as (typeof people)[number] | null)}
				placeholder="Wähle eine Person"
			/>
		</Box>
	);
}
