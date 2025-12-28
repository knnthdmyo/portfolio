import { useMemo } from 'react';
import { ContactService } from '@/services';

export const useContact = () => {
  const contactInfo = useMemo(() => ContactService.getContactInfo(), []);
  const socialNetworks = useMemo(() => ContactService.getSocialNetworks(), []);
  const email = useMemo(() => ContactService.getEmail(), []);

  return {
    contactInfo,
    socialNetworks,
    email,
  };
};

