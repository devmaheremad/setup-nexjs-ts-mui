import Image from "next/image";
import { Box, SxProps } from "@mui/material";

type ImageBoxProps = {
	src: string;
	alt: string;
	width?: number;
	height?: number;
	borderRadius?: string;
	className?: string;
	objectFitCover?: boolean;
	sx?: SxProps;
};

const ImageBox = ({
	height,
	width,
	borderRadius,
	alt,
	src,
	className,
	objectFitCover,
	sx,
}: ImageBoxProps) => {
	return (
		<Box
			className={className}
			sx={{
				height: `${height}px`,
				width: `${width}px`,
				borderRadius: borderRadius,
				position: "relative",
				...sx,
			}}
		>
			<Image
				src={src}
				alt={alt}
				fill
				sizes="100%"
				style={{ objectFit: objectFitCover ? "cover" : "contain" }}
			/>
		</Box>
	);
};

export default ImageBox;
