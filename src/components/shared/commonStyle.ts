import { Button, styled } from "@mui/material";

export const MainBtnStyled = styled(Button)(({ theme }) => ({
	background: `linear-gradient(180deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.light} 200%)`,
	transition: "all 0.8s ease-in-out !important",
	backgroundColor: `${theme.palette.primary.main} !important`,
	"&:hover": {
		background: `${theme.palette.primary.main} !important`,
	},
}));
