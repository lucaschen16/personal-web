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
    href: "https://www.linkedin.com/in/lucaschen2/",
    label: "LinkedIn",
  },
  { href: "https://x.com/_lucaschen", label: "X" },
  { href: "mailto:lucaschen416@gmail.com", label: "Email" },
];

export const projects: Project[] = [
  {
    title: "Volume Gesture",
    href: "https://github.com/lucaschen16/volume-gesture",
    description:
      "Real-time webcam app that maps a hand gesture to system volume. Uses MediaPipe landmarks, OpenCV for capture and feedback, and thumb–index distance as a continuous volume scale.",
  },
  {
    title: "AI Portfolio Builder",
    href: "https://github.com/lucaschen16/ai-portfolio-builder",
    description:
      "Flask web app with a REST API for answering natural-language questions about financial news. Modular Blueprints, environment-based config, and LLM agents that retrieve and summarize news.",
  },
  {
    title: "Autonomous Robot Navigation Stack",
    href: "https://github.com/lucaschen16/wato_asd_training",
    description:
      "Four-node ROS 2 pipeline in C++17 that turns lidar scans into point-to-point navigation in simulation. Occupancy-grid costmap, A* pathfinding with replanning, tested in Gazebo and visualized in Foxglove.",
  },
  {
    title: "Student Registration System",
    href: "https://github.com/lucaschen16/StudentRegistration",
    description:
      "Android app for student registration and course information with email-and-password authentication. Kotlin, XML layouts, and SQL to persist records across screens.",
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
