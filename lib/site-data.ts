export type NavItem = {
  href: string;
  label: string;
};

export type SocialLink = {
  href: string;
  label: string;
};

export type Project = {
  title: string;
  href: string;
  description: string;
};

export type ExperienceItem = {
  title: string;
  href?: string;
  description: string;
};

export const navItems: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/experience", label: "Experience" },
  { href: "/writing", label: "Writing" },
];

export const socialLinks: SocialLink[] = [
  { href: "https://github.com/lucaschen16", label: "GitHub" },
  {
    href: "https://www.linkedin.com/in/lucas-chen-977aba285/",
    label: "LinkedIn",
  },
  { href: "https://x.com/_lucaschen", label: "X" },
  { href: "mailto:lucaschen416@gmail.com", label: "Email" },
];

export const projects: Project[] = [
  {
    title: "Valorant Information Website",
    href: "https://github.com/lucaschen16/Valorant-Website",
    description:
      "A website about Valorant with information on agents, maps, and game features. Built to practice front-end structure, styling, and interactivity.",
  },
  {
    title: "Disease Spread Simulation",
    href: "https://github.com/lucaschen16/DiseaseSim",
    description:
      "A simulation project using object-oriented programming concepts like inheritance and polymorphism. Models people, diseases, cures, and regions.",
  },
  {
    title: "Battleship Game",
    href: "https://github.com/lucaschen16/Battleship",
    description:
      "A Java-based Battleship game with grid-based ship placement and turn-based gameplay. Implemented game logic for tracking hits, misses, and win conditions.",
  },
];

export const experiences: ExperienceItem[] = [
  {
    title: "VolunTrack",
    href: "https://voluntracks.com",
    description:
      "Built and optimized a user profile page with CSS and JavaScript, improving UI responsiveness. Worked with a team to implement new UI components and supported design using Figma.",
  },
];
