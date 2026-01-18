import React from 'react';
import HyperLink from './HyperLink';
import type { Link } from '../../types/Link';
import { routes } from '../../constants/routes';

const Greeting = (): React.ReactElement => {
  const projectsLink: Link = {
    url: `${routes.projects.path}/`,
  };

  const projectsLinkElement = (
    <span className="inline-block">
      <HyperLink link={projectsLink} className="underline underline-offset-2">projects</HyperLink>
    </span>
  );

  return (
    <p className="font-light">
      Hi there! I&apos;m Kiran, a Principal Software Engineer focused on enterprise frontend platforms.
      I design and build Angular and React based UI systems for large-scale, data-intensive
      applications, with a strong emphasis on performance, reliability, and developer experience.
      Explore my {projectsLinkElement} to see selected work across UI platforms, automation,
      and tooling for modern enterprise systems.
    </p>
  );
};

export default Greeting;
