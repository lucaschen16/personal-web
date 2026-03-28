import { socialLinks } from "@/lib/site-data";

export default function HomePage() {
  return (
    <div className="space-y-10">
      <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
        Lucas Chen
      </h1>
      <p className="text-base leading-relaxed sm:text-[17px] sm:leading-7">
        I&apos;m an incoming Systems Design Engineering student at the{" "}
        <a href="https://uwaterloo.ca" target="_blank" rel="noreferrer">
          University of Waterloo
        </a>
        . I&apos;m interested in software, design, and building useful things.
      </p>
      <section className="space-y-4 pt-2">
        <h2 className="text-xl font-bold sm:text-2xl">Socials</h2>
        <ul className="list-none text-base leading-relaxed sm:text-[17px] sm:leading-7">
          {socialLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="link-hit-block"
                target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                rel={link.href.startsWith("mailto:") ? undefined : "noreferrer"}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
