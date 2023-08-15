import { SxProps } from "@mui/material";
import { MainBtnStyled } from "./commonStyle";

type IProps = {
	color?: "primary" | "secondary" | "error" | "info" | "success" | "warning";
	width?: string;
	height?: string;
	sx?: SxProps;
	borderRadius?: string;
	children?: React.ReactNode;
	type?: "button" | "submit" | "reset";
};

const MainBtn = ({
	sx,
	color,
	width,
	borderRadius,
	height,
	children,
	type,
}: IProps) => {
	return (
		<MainBtnStyled
			type={type}
			color={color}
			variant="contained"
			sx={{ width: width || "100%", borderRadius, height: height, ...sx }}
		>
			{children}
		</MainBtnStyled>
	);
};

export default MainBtn;
