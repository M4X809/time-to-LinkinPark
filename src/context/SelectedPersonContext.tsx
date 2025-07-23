import type React from "react";
import { createContext, useContext, useState, useEffect, useRef } from "react";

export const people = ["J.", "S.", "K."] as const;
type Person = (typeof people)[number] | null;

interface SelectedPersonContextType {
	selectedPerson: Person;
	setSelectedPerson: (person: Person) => void;
	hideAll: boolean;
}

const SelectedPersonContext = createContext<SelectedPersonContextType | undefined>(undefined);

export const SelectedPersonProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	const [selectedPerson, setSelectedPersonState] = useState<Person>(() => {
		const stored = localStorage.getItem("selectedPeople");
		return stored ? (stored as Person) : null;
	});

	const [hideAll, setHideAll] = useState(false);
	const hideAllTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
	const isFirstRender = useRef(true);

	const setSelectedPerson = (person: Person) => {
		setSelectedPersonState(person);
		if (person) {
			localStorage.setItem("selectedPeople", person);
		} else {
			localStorage.removeItem("selectedPeople");
		}
	};

	// Only set hideAll on selectedPerson change after initial mount
	// biome-ignore lint/correctness/useExhaustiveDependencies: When selectedPerson changes, set hideAll to true for 1s, debounce the falling edge
	useEffect(() => {
		if (isFirstRender.current) {
			isFirstRender.current = false;
			return;
		}
		setHideAll(true);
		if (hideAllTimeout.current) {
			clearTimeout(hideAllTimeout.current);
		}
		hideAllTimeout.current = setTimeout(() => {
			setHideAll(false);
			hideAllTimeout.current = null;
		}, 500);

		return () => {
			if (hideAllTimeout.current) {
				clearTimeout(hideAllTimeout.current);
				hideAllTimeout.current = null;
			}
		};
	}, [selectedPerson]);

	useEffect(() => {
		const handler = () => {
			const stored = localStorage.getItem("selectedPeople");
			setSelectedPersonState(stored ? (stored as Person) : null);
		};
		window.addEventListener("storage", handler);
		return () => window.removeEventListener("storage", handler);
	}, []);

	return (
		<SelectedPersonContext.Provider value={{ selectedPerson, setSelectedPerson, hideAll }}>
			{children}
		</SelectedPersonContext.Provider>
	);
};

export function useSelectedPerson() {
	const context = useContext(SelectedPersonContext);
	if (!context) throw new Error("useSelectedPerson must be used within a SelectedPersonProvider");
	return context;
}
