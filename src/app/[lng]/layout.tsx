"use client";

import { dir } from "i18next";
import { languages } from "@src/i18n/settings";
export async function generateStaticParams() {
	return languages.map((lng) => ({ lng }));
}
import "@src/styles/globals.scss";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import ThemeRegistry from "@/src/components/Theme/ThemeRegistry/ThemeRegistry";
import { Loading } from "@/src/components/shared";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
	icons: {
		icon: "/assets/icons/favicon.ico",
	},
};

type IProps = {
	children: React.ReactNode;
	params: {
		lng: string;
	};
};

export default function RootLayout({ children, params: { lng } }: IProps) {
	const router = useRouter();
	const [isLoading, setIsLoading] = useState(true);
	useEffect(() => {
		if (!localStorage.getItem("authToken")) {
			router.push(`/${lng}`);
		}
		// When we recived API response we will use async await
		setTimeout(() => {
			setIsLoading(false);
		}, 200);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<html lang={lng} dir={dir(lng)}>
			<body className={inter.className}>
				<ThemeRegistry>
					{children}
					{/* <button onClick={colorMode}>change theme</button> */}
				</ThemeRegistry>
				{isLoading && <Loading />}
			</body>
		</html>
	);
}