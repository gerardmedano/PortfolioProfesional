import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap, faLanguage } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

function Wrapper({ children }) {
	return (
		<div className="mx-auto container gap-10 p-10 grid grid-cols-1 my-10">
			<motion.div
				className="flex justify-center items-start flex-col mb-5"
				initial={{ opacity: 0, y: 50 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ delay: 0.3, duration: 0.8, type: "spring", stiffness: 100 }}>
				{children}
			</motion.div>
		</div>
	);
}

const education = [
	{
		icon: faGraduationCap,
		date: "Mayo - Junio 2026 · 150 horas",
		title: "Aplica la IA en tu Empresa — Nivel Intermedio",
		subtitle: "Generación Digital Pymes / EOI · MOBA Skill Training · Vigo",
		description:
			"Fundamentos estratégicos, marketing y ventas con IA, atención al cliente y chatbots, automatización de procesos, finanzas y ciberseguridad/ética en el uso de la IA.",
	},
	{
		icon: faGraduationCap,
		date: "Finalizado hasta 1º",
		title: "Bachillerato LOGSE",
		subtitle: "",
		description: "",
	},
	{
		icon: faLanguage,
		date: "Cursos varios",
		title: "Idiomas",
		subtitle: "",
		description:
			"Alemán para recepción · Ruso para recepción · First in English by Cambridge, cursado en Blackburn, Reino Unido.",
	},
];

export default function Education() {
	return (
		<Wrapper>
			<section className="grid gap-8 md:gap-12 w-full">
				<motion.div
					className="text-center space-y-2"
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}>
					<h1 className="text-3xl md:text-4xl font-bold tracking-tighter">
						Formación
					</h1>
					<p className="text-muted-foreground max-w-[800px] mx-auto">
						Formación reciente en IA aplicada, junto con mi base educativa e idiomas.
					</p>
				</motion.div>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-5">
					{education.map((item, index) => (
						<motion.div
							key={index}
							className="bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl p-6 shadow-lg hover:bg-white/30 transition-all duration-300 hover:shadow-xl"
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: index * 0.15 }}>
							<div className="w-12 h-12 rounded-full bg-gradient-to-r from-gray-700 to-gray-900 flex items-center justify-center mb-4">
								<FontAwesomeIcon icon={item.icon} className="text-white h-5 w-5" />
							</div>
							<div className="text-xs text-gray-500 mb-1">{item.date}</div>
							<h3 className="font-semibold text-lg mb-1">{item.title}</h3>
							{item.subtitle && (
								<p className="text-sm text-gray-600 mb-2">{item.subtitle}</p>
							)}
							{item.description && (
								<p className="text-sm text-gray-600 leading-relaxed">
									{item.description}
								</p>
							)}
						</motion.div>
					))}
				</div>
			</section>
		</Wrapper>
	);
}
