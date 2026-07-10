import Image from "next/image";
import { motion } from "framer-motion";
import Me1 from "@/public/image/me/gerard.jpg";
import Me2 from "@/public/image/me/gerard.jpg";
import Me3 from "@/public/image/me/gerard.jpg";
import Hr from "@/components/Hr";

function Title() {
	return (
		<div className="mt-10 flex flex-col justify-start items-center w-full pl-10 md:pl-32">
			<div className="flex justify-center items-center flex-col my-5 self-start ">
				<Hr variant="long"></Hr>
				<h1 className="text-3xl font-bold mt-3">¿Quién soy?</h1>
			</div>
		</div>
	);
}

export default function About() {
	return (
		<>
			<Title />
			<div className="relative mx-auto container gap-4 px-10 grid grid-cols-1 md:grid-cols-2 mb-10">
				<div className="flex justify-center items-start flex-col mb-5 ">
					<div className="images relative w-full  aspect-square">
						<div className="absolute top-28 left-10 w-[50%]  aspect-square grayscale hover:grayscale-0 transition-all ease duration-300">
							<motion.div
								initial={{ opacity: 0, scale: 0.5, x: 100 }}
								whileInView={{
									opacity: 1,
									scale: 1,
									x: 0,
								}}
								className="relative w-full h-full">
								<Image
									src={Me1}
									alt="Gerard Moreno"
									fill
									sizes="(max-width: 768px) 80vw, 40vw"
									className="object-cover"
									placeholder="blur"
								/>
							</motion.div>
						</div>
						<div className="absolute top-16 right-28 w-[30%]  aspect-square grayscale hover:grayscale-0 transition-all ease duration-300">
							<motion.div
								initial={{
									opacity: 0,
									scale: 0.5,
									x: -100,
								}}
								whileInView={{
									opacity: 1,
									scale: 1,
									x: 0,
								}}
								transition={{ delay: 0.3 }}
								className="relative w-full h-full">
								<Image
									src={Me2}
									alt="Gerard Moreno"
									fill
									sizes="(max-width: 768px) 60vw, 25vw"
									className="object-cover"
									placeholder="blur"
								/>
							</motion.div>
						</div>
						<div className="absolute bottom-16 right-20 w-[40%]  aspect-square grayscale hover:grayscale-0 transition-all ease duration-300">
							<motion.div
								initial={{
									opacity: 0,
									scale: 0.5,
									x: -100,
								}}
								whileInView={{
									opacity: 1,
									scale: 1,
									x: 0,
								}}
								transition={{
									delay: 0.5,
								}}
								className="relative w-full h-full">
								<Image
									src={Me3}
									alt="Gerard Moreno"
									fill
									sizes="(max-width: 768px) 80vw, 35vw"
									className="object-cover"
									placeholder="blur"
								/>
							</motion.div>
						</div>
					</div>
				</div>
				<motion.div
					className="flex justify-center items-start flex-col mb-5 md:px-10"
					initial={{
						opacity: 0,
						x: 200,
					}}
					whileInView={{
						opacity: 1,
						x: 0,
					}}
					transition={{
						delay: 0.5,

						type: "spring",
					}}>
					<h2 className="text-2xl font-bold tracking-wider mb-3">
						Gerard Moreno Oliva
					</h2>
					<p className="text-gray-600 text-justify title text-lg leading-relaxed">
						No soy programador de formación, pero diseño, pruebo,
						despliego y mantengo herramientas de{" "}
						<span className="text-black font-medium">
							automatización de procesos
						</span>{" "}
						mediante desarrollo asistido por IA. Con más de 15
						años de experiencia en{" "}
						<span className="text-black font-medium">
							atención al cliente, coordinación de oficina y
							operaciones
						</span>
						, identifico procesos manuales del día a día de una
						empresa y construyo soluciones reales para
						eliminarlos.
						<br />
						<br />
						Actualmente trabajo en{" "}
						<span className="text-black font-medium">
							Keller Williams
						</span>{" "}
						coordinando oficina y marketing, donde he
						desarrollado sistemas de automatización con{" "}
						<span className="text-black font-medium">
							Google Apps Script
						</span>{" "}
						(reparto automático de leads, gestión de mandatos),{" "}
						<span className="text-black font-medium">
							AppSheet
						</span>{" "}
						(gestión de reservas y limpieza) y agentes de{" "}
						<span className="text-black font-medium">
							IA generativa
						</span>{" "}
						(generación de contenido editorial). En paralelo,
						soy fotógrafo y creador de contenido audiovisual
						autónomo desde 2024, trabajando con inmobiliarias,
						restaurantes, concesionarios, campos de golf,
						eventos y un ayuntamiento.
					</p>
				</motion.div>
			</div>
		</>
	);
}
