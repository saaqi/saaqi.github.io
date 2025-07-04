interface Store {
	darkMode: boolean;
}

export const store: Store = $state({
	// Shared state for the application
	darkMode: false
});
