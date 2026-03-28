type SectionCardProps = {
  title: string;
  eyebrow?: string;
  children: React.ReactNode;
};

export function SectionCard({ title, eyebrow, children }: SectionCardProps) {
  return (
    <section className="space-y-6">
      {eyebrow ? (
        <p className="text-sm font-normal text-ink">{eyebrow}</p>
      ) : null}
      <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">{title}</h1>
      <div className="text-base leading-relaxed sm:text-[17px] sm:leading-7">{children}</div>
    </section>
  );
}
