import { ContactInfo, SocialNetwork } from '@/models';
import { faFacebook, faGithub, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faAt, faLocationDot, faMobileScreen } from "@fortawesome/free-solid-svg-icons";

const CONTACT_DATA: ContactInfo[] = [
  { title: 'Email', value: 'donkennethgdemayo@gmail.com', icon: faAt },
  { title: 'Phone', value: '+639761604020', icon: faMobileScreen },
  { title: 'Location', value: 'Philippines', icon: faLocationDot },
];

const SOCIAL_NETWORKS_DATA: SocialNetwork[] = [
  { title: 'GitHub', link: 'https://github.com/knnthdmyo', icon: faGithub },
  { title: 'LinkedIn', link: 'https://www.linkedin.com/in/kennethgdemayo/', icon: faLinkedin },
  { title: 'Facebook', link: 'https://www.facebook.com/knnthdmyo/', icon: faFacebook },
  { title: 'Instagram', link: 'https://www.instagram.com/knnthdmyo/', icon: faInstagram },
];

export const ContactService = {
  getContactInfo(): ContactInfo[] {
    return CONTACT_DATA;
  },

  getSocialNetworks(): SocialNetwork[] {
    return SOCIAL_NETWORKS_DATA;
  },

  getEmail(): string {
    return CONTACT_DATA.find(c => c.title === 'Email')?.value || '';
  },
};

