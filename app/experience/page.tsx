import { SectionCard } from "@/components/section-card";
import { experiences } from "@/lib/site-data";

export const metadata = {
  title: "Experience | Lucas Chen",
};

export default function ExperiencePage() {
  return (
    <SectionCard title="Experience">
      <div className="space-y-10">
        {experiences.map((experience) => (
          <article key={experience.title}>
            {experience.href ? (
              <a
                href={experience.href}
                target="_blank"
                rel="noreferrer"
                className="link-hit-block"
              >
                <h2 className="text-lg font-bold">{experience.title}</h2>
                <p className="mt-2">{experience.description}</p>
              </a>
            ) : (
              <>
                <h2 className="text-lg font-bold">{experience.title}</h2>
                <p className="mt-2">{experience.description}</p>
              </>
            )}
          </article>
        ))}
      </div>
    </SectionCard>
  );
}
