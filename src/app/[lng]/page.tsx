import { Home } from "@/src/layouts";

type IProps = {
	params: {
		lng: string;
	};
};

export default function Page({ params: { lng } }: IProps) {
	return (
		<Home
			params={{
				lng: lng,
			}}
		/>
	);
}
