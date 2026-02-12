export interface Site {
	title: string;
	description: string;
	url: string;
	github?: string;
	screenshot: string;
	tags: string[];
}

export const sites: Site[] = [
	{
		title: "Photobooth",
		description: "Site Vitrine pour un prestataire de service de photobooth pour évènnements.",
		url: "https://photobooth.sbohui.fr",
		github: "https://github.com/SaidBOHUI/photobooth",
		screenshot: "/screenshots/photobooth3.webp",
		tags: ["React", "Typescript", "Tailwind"],
	},
	{
		title: "Reconnaissance de chiffre",
		description: "Tu dessine un chiffre et il te dit duquel il s'agit",
		url: "https://digiteye.sbohui.fr",
		github: "https://github.com/SaidBOHUI/digitRefonte",
		screenshot: "/screenshots/digitR.png",
		tags: ["fastApi", "Python, TensorFlow"],
	},
	{
		title: "Pokedex",
		description: "Récupération d'informations sur les pokemons par API",
		url: "https://pokedex.sbohui.fr",
		github: "https://github.com/SaidBOHUI/pokedexV2",
		screenshot: "/screenshots/pokedex.webp",
		tags: ["React", "ViteJs", "Typescript"],
	},
	// {
	// 	title: "E-Commerce Dashboard",
	// 	description: "Dashboard d'administration avec gestion des commandes et analytics en temps réel.",
	// 	url: "https://dashboard.example.com",
	// 	github: "https://github.com/SaidBOHUI/dashboard",
	// 	screenshot: "/screenshots/placeholder-1.svg",
	// 	tags: ["React", "TypeScript", "Tailwind"],
	// },
	{
		title: "Gestionnaire de citations (En développement et privé car je compte le commercialiser)",
		description: "Application de gestion de citations, tu peux créer ton compte, ajouter des citations et même te les représenter en portrait",
		url: "https://looquote.sbohui.fr",
		// github: "https://github.com/SaidBOHUI/Looquote",
		github: "privé car à but de commercialisation",
		screenshot: "/screenshots/looquote.webp",
		tags: ["NextJs", "Typescript", "Shadcn UI", "AWS S3"],
	},
	{
		title: "Machine Learning (projet suivant)",
		description: "Tu dépose un image d'un chien et il te dis de quelle race il s'agit",
		url: "https://whichdog.sbohui.fr",
		github: "https://github.com/SaidBOHUI/whichdog",
		screenshot: "/screenshots/placeholder-5.svg",
		// tags: ["Socket.io", "React", "MongoDB"],
		tags: [],
	},
	{
		title: "Là où les vents nous mènent 🍃",
		description: "N'hésitez pas à me proposez des idées pour de futurs projets 😉",
		url: "https://photo.example.com",
		github: "https://github.com/SaidBOHUI/photo-portfolio",
		screenshot: "/screenshots/placeholder-4.svg",
		tags: [],
		// tags: ["Astro", "GSAP", "Markdown"],
	},
];

export const profile = {
	name: "Said Bohui",
	role: "Développeur Full Stack",
	github: "https://github.com/SaidBOHUI",
	description:
		"Je construis des applications web modernes. Voici mes projets hébergés sur mon serveur — cliquez pour les explorer.",
};
