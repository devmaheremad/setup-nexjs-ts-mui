import React from "react";
import { IconButton, useTheme } from "@mui/material";

type IProps = {
	children: React.ReactNode;
	onClick: () => void;
};

export default function IconBox({ children, onClick }: IProps) {
	const theme = useTheme();

	return (
		<IconButton
			onClick={onClick}
			sx={{ background: `${theme.palette.primary.main}`, borderRadius: "8px" }}
		>
			{children}
		</IconButton>
	);
}
