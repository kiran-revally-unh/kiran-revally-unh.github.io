import { Profile } from '../types/Profile';
import { socialLinks } from './socialLinks';

export const profile: Profile = {
  firstName: 'Kiran',
  lastName: 'Revally',
  position: 'Principal Software Engineer',
  summary: [
    'Principal Software Engineer focused on enterprise-scale, production-grade web applications.',
    'Specializing in Angular/TypeScript, complex data-driven UIs, and frontend architecture.',
    'Hands-on across design, development, CI/CD automation, and production reliability.',
  ],
  location: {
    name: 'Boston, MA • Open to remote opportunities',
  },
  tags: [
    { name: 'Enterprise Frontend' },
    { name: 'UI Systems' },
    { name: 'Angular' },
    { name: 'TypeScript' },
    { name: 'Automation' },
    { name: 'CI/CD' },
  ],
  socialLinks,
};
