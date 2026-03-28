import { SectionCard } from "@/components/section-card";
import { projects } from "@/lib/site-data";

export const metadata = {
  title: "Projects | Lucas Chen",
};

export default function ProjectsPage() {
  return (
    <SectionCard title="Projects">
      <div className="space-y-10">
        {projects.map((project) => (
          <article key={project.title}>
            <a href={project.href} target="_blank" rel="noreferrer" className="link-hit-block">
              <h2 className="text-lg font-bold">{project.title}</h2>
              <p className="mt-2">{project.description}</p>
            </a>
          </article>
        ))}
      </div>
    </SectionCard>
  );
}
