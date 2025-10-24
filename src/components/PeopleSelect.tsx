import { Box, Select } from "@mantine/core";
import { useSelectedPerson } from "../context/SelectedPersonContext";

export const people = ["J.", "S.", "K."] as const;

export function PeopleSelect() {
	const { selectedPerson, setSelectedPerson } = useSelectedPerson();

	return (
		<Box className="rounded-xl bg-white/10 p-2 transition-colors hover:bg-white/15 sm:p-3">
			<Select
				data={people}
				value={selectedPerson}
				onChange={(value) => setSelectedPerson(value as (typeof people)[number] | null)}
				placeholder="Choose a person"
				size="sm"
				className="min-w-[140px] sm:min-w-[160px]"
			/>
		</Box>
	);
}
