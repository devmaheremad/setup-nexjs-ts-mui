import React from "react";
import Link from "next/link";
import { useTranslation } from "@src/i18n";
import { Button } from "@mui/material";
import { Footer } from "@/src/app/[lng]/components/Footer";

type IProps = {
	params: {
		lng: string;
	};
};

const Home = async ({ params: { lng } }: IProps) => {
	// eslint-disable-next-line react-hooks/rules-of-hooks
	const { t } = await useTranslation(lng);

	return (
		<>
			<h1>{t("title")}</h1>
			<Link href={`/${lng}/second-page`}>{t("to-second-page")}</Link>
			<br />
			<Link href={`/${lng}/client-page`}>{t("to-client-page")}</Link>
			<Footer lng={lng} />
			<Button variant="contained">Contained</Button>
		</>
	);
};

export default Home;
