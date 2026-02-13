export interface Site {
	title: string;
	description: string;
	url: string;
	github?: string;
	screenshot: string;
	tags: string[];
	status: "online" | "offline"
}

export const sites: Site[] = [
	{
		title: "Photobooth",
		description: "Plateforme vitrine interactive pour un prestataire de services photobooth, conçue pour présenter les offres et faciliter la prise de contact pour des événements.",
		url: "https://photobooth.sbohui.fr",
		github: "https://github.com/SaidBOHUI/photobooth",
		screenshot: "/screenshots/photobooth3.webp",
		tags: ["React", "Typescript", "Tailwind"],
		status: "online"
	},
	{
		title: "Reconnaissance de chiffre",
		description: "Application d'intelligence artificielle permettant d'identifier des chiffres tracés à la main, mettant en avant l'intégration d'un moteur de prédiction en temps réel.",
		url: "https://digiteye.sbohui.fr",
		github: "https://github.com/SaidBOHUI/digitRefonte",
		screenshot: "/screenshots/digitR.png",
		tags: ["fastApi", "Python", "TensorFlow"],
		status: "online"
	},
	{
		title: "Pokedex",
		description: "Interface d'exploration de données utilisant l'API PokeAPI, optimisée pour un affichage fluide et une recherche dynamique parmi une large base de données.",
		url: "https://pokedex.sbohui.fr",
		github: "https://github.com/SaidBOHUI/pokedexV2",
		screenshot: "/screenshots/pokedex.webp",
		tags: ["React", "ViteJs", "Typescript"],
		status: "online"
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
		title: "Gestionnaire de citations (En cours de développement)",
		// title: "Gestionnaire de citations (En développement et privé car je compte le commercialiser)",
		description: "Application de gestion de citations, tu peux créer ton compte, ajouter des citations et même les organiser dans un espace personnel sécurisé et cloud.",
		url: "https://looquote.sbohui.fr",
		// github: "https://github.com/SaidBOHUI/Looquote",
		github: "https://github.com/SaidBOHUI/Looquote",
		screenshot: "/screenshots/looquote.webp",
		tags: ["NextJs", "Typescript", "Shadcn UI", "AWS S3"],
		status: "offline"
	},
	{
		title: "Machine Learning (projet suivant)",
		description: "Outil de reconnaissance visuelle capable d'identifier des races canines à partir d'images, focalisé sur le traitement de la donnée et la classification automatique.",
		url: "https://whichdog.sbohui.fr",
		github: "https://github.com/SaidBOHUI/whichdog",
		screenshot: "/screenshots/placeholder-5.svg",
		// tags: ["Socket.io", "React", "MongoDB"],
		tags: [],
		status: "offline"
	},
	{
		title: "Là où les vents nous mènent 🍃",
		description: "N'hésitez pas à me proposez des idées pour de futurs projets 😉",
		url: "https://photo.example.com",
		github: "https://github.com/SaidBOHUI/photo-portfolio",
		screenshot: "/screenshots/placeholder-4.svg",
		tags: [],
		// tags: ["Astro", "GSAP", "Markdown"],
		status: "offline"
	},
];

export const profile = {
	name: "Said Bohui",
	role: "Développeur Full Stack",
	github: "https://github.com/SaidBOHUI",
	description:
		"Développeur fullstack passionné. Actuellement à la recherche d'une opportunité (disponible immédiatement). Voici mes projets hébergés sur mon serveur — cliquez pour les explorer.",
};
