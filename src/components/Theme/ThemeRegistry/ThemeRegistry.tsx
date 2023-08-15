"use client";

import {
	ThemeProvider,
	createTheme,
	responsiveFontSizes,
} from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { NextAppDirEmotionCacheProvider } from "@src/components/Theme/ThemeRegistry/EmotionCache";
import { getDesignTokens } from "@src/components/Theme/ThemeRegistry/theme";
import React from "react";
import { PaletteMode } from "@mui/material";
// import useStore from "@/store";

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

export default function ThemeRegistry({
	children,
}: {
	children: React.ReactNode;
}) {
	const [mode, setMode] = React.useState<PaletteMode>("light");
	const colorMode = React.useMemo(
		() => ({
			// The dark mode switch would invoke this method
			toggleColorMode: () => {
				setMode((prevMode: PaletteMode) =>
					prevMode === "light" ? "dark" : "light"
				);
			},
		}),
		[]
	);

	// Update the theme only if the mode changes
	const theme = React.useMemo(
		() => responsiveFontSizes(createTheme(getDesignTokens(mode))),
		[mode]
	);

	return (
		<NextAppDirEmotionCacheProvider options={{ key: "mui" }}>
			<ColorModeContext.Provider value={colorMode}>
				<ThemeProvider theme={theme}>
					<CssBaseline />
					{children}
				</ThemeProvider>
			</ColorModeContext.Provider>
		</NextAppDirEmotionCacheProvider>
	);
}
