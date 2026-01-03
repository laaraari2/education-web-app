
export type Language = 'ar' | 'fr';

export interface NavItem {
  id: string;
  label: { ar: string; fr: string };
  href: string;
}

export interface Program {
  id: string;
  title: { ar: string; fr: string };
  description: { ar: string; fr: string };
  icon: string;
  image: string;
}

export interface Testimonial {
  id: string;
  author: string;
  role: { ar: string; fr: string };
  content: { ar: string; fr: string };
  avatar: string;
  achievement?: { ar: string; fr: string }; // الحقل الجديد لإنجازات الخريجين
}
