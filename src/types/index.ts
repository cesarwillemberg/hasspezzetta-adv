export interface NavItem {
  key: string;
  href: string;
}

export interface Lawyer {
  id: string;
  name: string;
  specialty: string;
  bio: string;
  imageUrl: string;
  linkedin?: string;
}

export interface Service {
  id: string;
  titleKey: string;
  descKey: string;
  icon: string;
}
