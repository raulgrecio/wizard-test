import React from "react";

import "./Section.scss";

interface SectionProps {
  title: string;
  description: string;
}

export function Section({ title, description }: SectionProps) {
  return (
    <section className={"Section"}>
      <p className={"Section-title"}>{title}</p>
      <p>{description}</p>
    </section>
  );
}
