import "./globals.css";
import { Poppins, Jost } from "next/font/google";
import Navbar from "@/components/Navbar";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;
import { Analytics } from "@vercel/analytics/react";
import ClientTopProgressBar from "@/components/ClientTopProgressBar";

const poppins = Poppins({
	subsets: ["latin"],
	weight: ["300", "400", "500", "600", "700"],
	style: ["normal", "italic"],
	display: "swap",
	variable: "--font-poppins",
});

const jost = Jost({
	subsets: ["latin"],
	weight: ["400", "500", "600", "700"],
	display: "swap",
	variable: "--font-jost",
});

export const metadata = {
	metadataBase: new URL("https://gerardmoreno.vercel.app"),
	title: "Gerard Moreno | Portfolio",

	description:
		"Gerard Moreno, Automatización de Procesos y Operaciones con IA para PYMES. Google Apps Script, AppSheet, agentes de IA y aplicaciones web.",

	author: "Gerard Moreno Oliva",
	siteUrl: "https://gerardmoreno.vercel.app",
	applicationName: "Gerard Moreno",

	keywords: [
		"gerard moreno",
		"automatización de procesos",
		"automatización con IA",
		"google apps script",
		"appsheet",
		"operaciones pyme",
		"gerardmedano",
	],

	openGraph: {
		type: "website",
		url: "https://gerardmoreno.vercel.app",
		title: "Gerard Moreno | Portfolio",
		siteName: "Gerard Moreno | Portfolio",
		description: "Automatización de Procesos y Operaciones con IA para PYMES.",
		images: [
			{
				url: "/og-image-rev.png",
				alt: "Gerard Moreno Portfolio",
				width: 1200,
				height: 630,
			},
		],
	},
};

const jsonLd = {
	"@context": "https://schema.org",
	"@type": "Person",
	name: "Gerard Moreno Oliva",
	url: "https://gerardmoreno.vercel.app",
	jobTitle: "Automatización de Procesos y Operaciones con IA para PYMES",
	worksFor: [{ "@type": "Organization", name: "Keller Williams" }],
	sameAs: [
		"https://github.com/gerardmedano",
		"https://www.instagram.com/gerardmedano",
	],
};

export default function RootLayout({ children }) {
	return (
		<html lang="es" className={`${poppins.variable} ${jost.variable}`}>
			<body>
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
				/>
				<ClientTopProgressBar />
				<Navbar />
				{children}
				<Analytics />
			</body>
		</html>
	);
}
