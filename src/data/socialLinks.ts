// @flow
import { socialLinkTypes } from '../types/SocialLink';
import type { SocialLink } from '../types/SocialLink';

export const socialLinks: SocialLink[] = [
  {
    type: socialLinkTypes.linkedIn,
    url: 'https://www.linkedin.com/in/revally-kiran/',
    secondary: false,
    caption: 'Kiran Revally on LinkedIn',
  },
  {
    type: socialLinkTypes.gitHub,
    url: 'https://github.com/kiran-revally-unh',
    secondary: false,
    caption: 'Kiran Revally on GitHub',
  },
];
