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
    title: "E-Commerce Dashboard",
    description: "Dashboard d'administration avec gestion des commandes et analytics en temps réel.",
    url: "https://dashboard.example.com",
    github: "https://github.com/username/dashboard",
    screenshot: "/screenshots/placeholder-1.svg",
    tags: ["React", "TypeScript", "Tailwind"],
  },
  {
    title: "API REST Blog",
    description: "API RESTful avec authentification JWT, CRUD articles et commentaires.",
    url: "https://api-blog.example.com",
    github: "https://github.com/username/blog-api",
    screenshot: "/screenshots/placeholder-2.svg",
    tags: ["Node.js", "Express", "PostgreSQL"],
  },
  {
    title: "Weather App",
    description: "Application météo avec géolocalisation et prévisions sur 7 jours.",
    url: "https://weather.example.com",
    github: "https://github.com/username/weather",
    screenshot: "/screenshots/placeholder-3.svg",
    tags: ["Vue.js", "API", "CSS"],
  },
  {
    title: "Portfolio Photographe",
    description: "Site vitrine avec galerie responsive et lazy loading d'images.",
    url: "https://photo.example.com",
    github: "https://github.com/username/photo-portfolio",
    screenshot: "/screenshots/placeholder-4.svg",
    tags: ["Astro", "GSAP", "Markdown"],
  },
  {
    title: "Chat Temps Réel",
    description: "Messagerie instantanée avec WebSockets et salons privés.",
    url: "https://chat.example.com",
    github: "https://github.com/username/chat-app",
    screenshot: "/screenshots/placeholder-5.svg",
    tags: ["Socket.io", "React", "MongoDB"],
  },
  {
    title: "Photobooth",
    description: "Site Vitrine pour un prestataire de service de photobooth pour évènnements",
    url: "https://photobooth.sbohui.fr",
    github: "https://github.com/SaidBOHUI/photobooth",
    screenshot: "/screenshots/placeholder-6.svg",
    tags: ["React", "Typescript", "Tailwind"],
  },
];

export const profile = {
  name: "Said Bohui",
  role: "Développeur Full Stack",
  github: "https://github.com/SaidBOHUI",
  description:
    "Je construis des applications web modernes. Voici mes projets hébergés sur mon serveur — cliquez pour les explorer.",
};
