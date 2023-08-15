import { PaletteMode } from "@mui/material";

declare module "@mui/material/styles" {
	interface Palette {
		// dark: Palette["primary"];
	}

	// allow configuration using `createTheme`
	interface PaletteOptions {
		// dark?: PaletteOptions["primary"];
	}
}

export const getDesignTokens = (mode: PaletteMode) => ({
	palette: {
		mode,
		...(mode === "dark"
			? {
					// palette values for dark
					primary: {
						main: "#66ff00",
					},
			  }
			: {
					// palette values for blue dark
					primary: {
						main: "#ff0088",
					},
			  }),
	},
});
