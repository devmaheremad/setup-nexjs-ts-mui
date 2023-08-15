import { Stack, Typography, alpha, useTheme } from "@mui/material";
import React from "react";

const Loading = () => {
	const theme = useTheme();
	return (
		<Stack
			position={"absolute"}
			top={0}
			left={0}
			width={"100vw"}
			height={"100vh"}
			bgcolor={alpha(theme.palette.secondary.main, 0.4)}
			justifyContent={"center"}
			alignItems={"center"}
			sx={{
				backdropFilter: "blur(15px)",
			}}
		>
			<Typography variant="h4" color={"white"}>
				Loading...
			</Typography>
		</Stack>
	);
};

export default Loading;
