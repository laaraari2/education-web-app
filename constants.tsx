
import { NavItem, Program, Testimonial } from './types';

export const NAV_ITEMS: NavItem[] = [
  { id: 'home', label: { ar: 'الرئيسية', fr: 'Accueil' }, href: 'home' },
  { id: 'about', label: { ar: 'عن المؤسسة', fr: 'À Propos' }, href: 'about' },
  { id: 'programs', label: { ar: 'الأسلاك التعليمية', fr: 'Cycles' }, href: 'programs' },
  { id: 'campus', label: { ar: 'الحياة المدرسية', fr: 'Vie Scolaire' }, href: 'campus' },
  { id: 'admissions', label: { ar: 'التسجيل', fr: 'Admissions' }, href: 'admissions' },
  { id: 'contact', label: { ar: 'اتصل بنا', fr: 'Contact' }, href: 'contact' },
];

export const AWARDS = [
  {
    id: 1,
    title: { ar: 'شريك كامبريدج الدولي', fr: 'Partenaire Cambridge' },
    icon: 'Award',
    image: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/5a/Cambridge_Assessment_International_Education_Logo.svg/1200px-Cambridge_Assessment_International_Education_Logo.svg.png'
  },
  {
    id: 2,
    title: { ar: 'علامة الجودة الفرنسية', fr: 'Label FrancÉducation' },
    icon: 'ShieldCheck',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Label_FrancEducation_Logo.png/640px-Label_FrancEducation_Logo.png'
  },
  {
    id: 3,
    title: { ar: 'شهادة الجودة ISO 9001', fr: 'Certification ISO 9001' },
    icon: 'CheckCircle2',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/ISO_9001_Logo.svg/1024px-ISO_9001_Logo.svg.png'
  },
  {
    id: 4,
    title: { ar: 'مدرسة مايكروسوفت النموذجية', fr: 'Microsoft Showcase School' },
    icon: 'Cpu',
    image: 'https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageMedia/RE4OAg6?ver=cf33'
  }
];

export const ADVANTAGES = [
  {
    id: 1,
    title: { ar: 'بيئة ذكية 100%', fr: 'Campus Intelligent' },
    desc: { ar: 'استخدام الألواح التفاعلية والذكاء الاصطناعي في التعليم.', fr: 'Tableaux interactifs et IA intégrés au cursus.' },
    icon: 'Cpu'
  },
  {
    id: 2,
    title: { ar: 'ثلاث لغات حية', fr: 'Trilinguisme' },
    desc: { ar: 'إتقان العربية، الفرنسية، والإنجليزية منذ التعليم الأولي.', fr: 'Maîtrise de l\'Arabe, Français et Anglais dès la maternelle.' },
    icon: 'Languages'
  },
  {
    id: 3,
    title: { ar: 'أندية الابتكار', fr: 'Innovation Hub' },
    desc: { ar: 'أندية للروبوتيك، الشطرنج، والبرمجة لتنمية الذكاء.', fr: 'Clubs de robotique, échecs et codage pour l\'éveil.' },
    icon: 'Lightbulb'
  }
];

export const PROGRAMS: Program[] = [
  {
    id: 'maternelle',
    title: { ar: 'التعليم الأولي', fr: 'Maternelle' },
    description: {
      ar: 'منهج "مونتيسوري" المطور لتنمية مهارات الطفل اللغوية والاجتماعية في بيئة محفزة.',
      fr: 'Pédagogie active pour l\'éveil sensoriel et l\'autonomie précoce de l\'enfant.'
    },
    icon: 'Baby',
    image: 'https://images.unsplash.com/photo-1540479859555-17af45c78602?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'primaire',
    title: { ar: 'التعليم الابتدائي', fr: 'Primaire' },
    description: {
      ar: 'تركيز على التميز العلمي واللغوي مع مواكبة فردية لكل تلميذ لضمان التفوق.',
      fr: 'Socle d\'excellence bilingue avec un suivi personnalisé pour chaque talent.'
    },
    icon: 'BookOpen',
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'secondaire',
    title: { ar: 'الثانوي والإعدادي', fr: 'Collège & Lycée' },
    description: {
      ar: 'توجيه جامعي استراتيجي ومختبرات علمية متطورة تفتح آفاق المدارس الكبرى.',
      fr: 'Orientation stratégique et laboratoires de pointe pour intégrer les grandes écoles.'
    },
    icon: 'GraduationCap',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    author: 'أمين العلمي',
    role: { ar: 'خريج - طالب مهندس', fr: 'Alumni - Élève Ingénieur' },
    content: {
      ar: 'العمران لم تكن مجرد مدرسة، بل كانت المشتل الذي نما فيه طموحي للوصول لأكبر مدارس الهندسة العالمية.',
      fr: 'Al Oumrane a été le tremplin idéal pour mon parcours d\'excellence en école d\'ingénieurs.'
    },
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=150',
    achievement: { ar: 'مقبول في Polytechnique Paris', fr: 'Admis à Polytechnique Paris' }
  },
  {
    id: '2',
    author: 'سارة لمراني',
    role: { ar: 'ولية أمر', fr: 'Parent d\'élève' },
    content: {
      ar: 'أكثر ما يميز المؤسسة هو التوازن بين الصرامة الأكاديمية والتربية على القيم الأخلاقية والوطنية.',
      fr: 'Ce qui distingue l\'école, c\'est l\'équilibre entre rigueur et éducation aux valeurs.'
    },
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150',
    achievement: { ar: 'أم لثلاثة تلاميذ متفوقين', fr: 'Mère de 3 élèves excellents' }
  },
  {
    id: '3',
    author: 'ياسين منصور',
    role: { ar: 'خريج - دكتور صيدلي', fr: 'Alumni - Docteur en Pharmacie' },
    content: {
      ar: 'الأساس المتين الذي تلقيته في المواد العلمية واللغات مكنني من التفوق في مساري الجامعي بكل سلاسة.',
      fr: 'La base solide en sciences et langues m\'a permis d\'exceller dans mon parcours universitaire.'
    },
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150',
    achievement: { ar: 'خريج كلية الطب والصيدلة', fr: 'Lauréat de la FMP' }
  },
  {
    id: '4',
    author: 'ليلى بناني',
    role: { ar: 'خريجة - مدرسة الحكامة', fr: 'Alumni - Sciences Po' },
    content: {
      ar: 'نادي الخطابة والمناظرة بالمدرسة صقل شخصيتي وجعلني أثق في قدراتي القيادية منذ وقت مبكر.',
      fr: 'Le club de débat a forgé ma personnalité et ma confiance en mes capacités de leadership.'
    },
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150',
    achievement: { ar: 'مقبولة في Sciences Po', fr: 'Admise à Sciences Po' }
  }
];

export const TOUR_STATIONS = [
  {
    id: 'theater',
    title: { ar: 'قاعة المسرح', fr: 'Salle de Théâtre' },
    description: { ar: 'قاعة مجهزة للعروض المسرحية والحفلات المدرسية. تم تقديم مسرحيات: إيزيس، الأميرة الصغيرة، أنتيجون.', fr: 'Salle équipée pour spectacles et événements. Pièces présentées: Isis, La Petite Princesse, Antigone.' },
    image: '/images/theater.png'
  },
  {
    id: 'computer-lab',
    title: { ar: 'قاعة الإعلاميات', fr: 'Salle Informatique' },
    description: { ar: 'قاعة مجهزة بأحدث الحواسيب لتعلم البرمجة والتكنولوجيا.', fr: 'Salle équipée d\'ordinateurs modernes pour l\'apprentissage du codage et des technologies.' },
    image: '/images/computer_lab.png'
  },
  {
    id: 'library',
    title: { ar: 'المكتبة المدرسية', fr: 'Bibliothèque' },
    description: { ar: 'مكتبة غنية بالكتب العلمية والأدبية بالعربية والفرنسية والإنجليزية.', fr: 'Bibliothèque riche en ouvrages scientifiques et littéraires en arabe, français et anglais.' },
    image: '/images/library.png'
  },
  {
    id: 'playground',
    title: { ar: 'الملعب الرياضي', fr: 'Terrain de Sport' },
    description: { ar: 'ملعب رياضي متعدد الاستخدامات لكرة القدم وكرة السلة والأنشطة البدنية.', fr: 'Terrain polyvalent pour football, basketball et activités physiques.' },
    image: '/images/playground.png'
  },
  {
    id: 'classroom',
    title: { ar: 'الفصل الدراسي', fr: 'Salle de Classe' },
    description: { ar: 'فصول ذكية مجهزة بسبورات تفاعلية وتقنيات حديثة للتعليم.', fr: 'Classes intelligentes avec tableaux interactifs et technologies modernes.' },
    image: '/images/classroom.png'
  },
  {
    id: 'science-lab',
    title: { ar: 'المختبر العلمي', fr: 'Laboratoire Scientifique' },
    description: { ar: 'مختبر مجهز للتجارب العلمية في الفيزياء والكيمياء وعلوم الحياة.', fr: 'Laboratoire équipé pour expériences en physique, chimie et SVT.' },
    image: '/images/lab.png'
  },
  {
    id: 'swimming-pool',
    title: { ar: 'المسبح', fr: 'Piscine' },
    description: { ar: 'مسبح مغطى للسباحة والرياضة المائية تحت إشراف مدربين محترفين.', fr: 'Piscine couverte pour natation et sports aquatiques sous supervision professionnelle.' },
    image: 'https://images.unsplash.com/photo-1541534741688-6078c64b52d2?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'pedagogical-farm',
    title: { ar: 'الضيعة البيداغوجية', fr: 'Ferme Pédagogique' },
    description: { ar: 'ضيعة تعليمية يزورها التلاميذ يوم السبت للتعرف على الزراعة والحيوانات.', fr: 'Ferme éducative visitée le samedi pour découvrir l\'agriculture et les animaux.' },
    image: 'https://images.unsplash.com/photo-1500076656116-558758c991c1?auto=format&fit=crop&q=80&w=1200'
  }
];

