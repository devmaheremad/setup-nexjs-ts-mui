import React from "react";
import { useTranslation } from "@src/i18n";
import { Footer } from "@/src/app/[lng]/components/Footer";
import Link from "next/link";

type IProps = {
	params: {
		lng: string;
	};
};

const SecondPage = async ({ params: { lng } }: IProps) => {
	// eslint-disable-next-line react-hooks/rules-of-hooks
	const { t } = await useTranslation(lng, "second-page");

	return (
		<>
			<h1>{t("title")}</h1>
			<Link href={`/${lng}`}>{t("back-to-home")}</Link>
			<Footer lng={lng} />
		</>
	);
};

export default SecondPage;
