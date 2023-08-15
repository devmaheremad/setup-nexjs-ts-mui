import { CustomIconButtonProps } from "@/types";
import { IconButton, Typography } from "@mui/material";
import React from "react";

const CustomIconButton = ({
	alignItems,
	ariaLabel,
	borderRadius,
	display,
	gap,
	onClick,
	sx,
	px,
	btnIcon,
	btnText,
	hideBtnTextInXs,
}: CustomIconButtonProps) => {
	return (
		<IconButton
			aria-label={ariaLabel}
			onClick={onClick}
			sx={{
				...sx,
				borderRadius: borderRadius || "8px",
				display: display || "flex",
				alignItems: alignItems || "center",
				gap: gap || "12px",
				px: px || "12px",
			}}
		>
			{btnIcon && btnIcon}
			<Typography
				fontSize={14}
				textTransform={"capitalize"}
				display={{ xs: hideBtnTextInXs ? "none" : "block", md: "block" }}
			>
				{btnText}
			</Typography>
		</IconButton>
	);
};

export default CustomIconButton;
