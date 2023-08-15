import { SecondPage } from "@/src/layouts";

type IProps = {
	params: {
		lng: string;
	};
};

export default function Page({ params: { lng } }: IProps) {
	return (
		<SecondPage
			params={{
				lng: lng,
			}}
		/>
	);
}
