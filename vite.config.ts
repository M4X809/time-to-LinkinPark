import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig(() => {
	return {
		plugins: [
			VitePWA({
				registerType: "autoUpdate",
				workbox: {
					maximumFileSizeToCacheInBytes: 10 * 1024 * 1024, // 10MB
				},
			}),
			react({
				babel: {
					plugins: [["babel-plugin-react-compiler"]],
				},
			}),
			tailwindcss(),
		],
		// ...
	};
});
