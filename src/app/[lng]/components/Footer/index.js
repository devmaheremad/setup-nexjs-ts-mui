import { useTranslation } from "@src/i18n";
import { FooterBase } from "@src/app/[lng]/components/Footer/FooterBase";

export const Footer = async ({ lng }) => {
	// eslint-disable-next-line react-hooks/rules-of-hooks
	const { t } = await useTranslation(lng, "footer");
	return <FooterBase t={t} lng={lng} />;
};
