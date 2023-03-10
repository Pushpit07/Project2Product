import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
	return (
		<div className="w-screen h-screen flex flex-col relative items-center justify-center">
			<div className="absolute w-full h-full">
				<Image src={"/bg-4.jpg"} alt="bg env" priority fill style={{ objectFit: "cover" }}></Image>
			</div>
			<div className="z-10 flex flex-col items-center justify-center space-y-7 w-full h-full backdrop-blur-[2px] backdrop-brightness-75">
				<h1 className="font-primary tracking-wide font-semibold text-6xl text-white">Project2Product</h1>
				<Link href={"/generate"} passHref>
					<button className="rounded-3xl px-8 py-2 bg-transparent border border-white text-center font-primary text-white ">Enter the magical portal</button>
				</Link>
			</div>
		</div>
	);
}
