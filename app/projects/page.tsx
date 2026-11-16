import { SectionCard } from "@/components/section-card";
import { projects } from "@/lib/site-data";

export const metadata = {
  title: "Projects | Lucas Chen",
};

function ProjectBody({ title, description }: { title: string; description: string }) {
  return (
    <>
      <h2 className="text-base font-bold leading-snug">{title}</h2>
      <p className="mt-1 text-sm leading-snug">{description}</p>
    </>
  );
}

export default function ProjectsPage() {
  return (
    <SectionCard title="Projects">
      <div className="space-y-3">
        {projects.map((project) => (
          <article key={project.title}>
            {project.href ? (
              <a
                href={project.href}
                target="_blank"
                rel="noreferrer"
                className="-mx-2 block rounded-sm px-2 py-1.5"
              >
                <ProjectBody title={project.title} description={project.description} />
              </a>
            ) : (
              <ProjectBody title={project.title} description={project.description} />
            )}
          </article>
        ))}
      </div>
    </SectionCard>
  );
}
