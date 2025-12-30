import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

export type ContactType = 'email' | 'phone' | 'location';

export interface ContactInfo {
  title: string;
  value: string;
  icon: IconDefinition;
  type: ContactType;
  coordinates?: [number, number]; // [longitude, latitude] for location
}

export interface SocialNetwork {
  title: string;
  link: string;
  icon: IconDefinition;
}

