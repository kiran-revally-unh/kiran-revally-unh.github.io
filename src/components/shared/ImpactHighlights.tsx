import React from 'react';

import H, { hLevel } from './H';

const ImpactHighlights = (): React.ReactElement => {
  const highlights: string[] = [
    'Designed and evolved enterprise frontend platforms for data-intensive applications.',
    'Improved reliability and observability for mission-critical UIs in production.',
    'Drove test automation and CI/CD practices for faster, safer releases.',
    'Standardized reusable UI components and design systems across teams.',
    'Partnered with product, backend, QA, and DevOps to deliver stable, maintainable solutions.',
  ];

  return (
    <section className="mt-10">
      <H level={hLevel.h2} className="mb-4 font-extrabold uppercase tracking-widest">
        Impact Highlights
      </H>
      <ul className="list-disc list-inside space-y-2 font-light">
        {highlights.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  );
};

export default ImpactHighlights;
