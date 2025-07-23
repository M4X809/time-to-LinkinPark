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
				manifest: {
					name: "Time to...",
					short_name: "Time to...",
					description: "Time to...",
					theme_color: "#0D1117",
					background_color: "#0D1117",
					icons: [
						{
							src: "/timeTo.png",
							sizes: "192x192",
							type: "image/png",
						},
					],
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
