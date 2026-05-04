import {
  BookOpen,
  GraduationCap,
  HeartHandshake,
  ShieldCheck
} from "@lucide/astro";

export const heroSlides = [
  {
    image: "/images/hero/mini-me-classroom-1.webp",
    alt: "Children learning inside a Mini Me classroom",
    label: "Learn · Play · Grow",
  },
  {
    image: "/images/hero/mini-me-classroom-2.webp",
    alt: "Early learning activities at Mini Me Learning Centers",
    label: "Bright Beginnings",
  },
  {
    image: "/images/hero/mini-me-play-1.webp",
    alt: "Children enjoying playful learning activities",
    label: "Playful Learning",
  },
  {
    image: "/images/hero/mini-me-teacher-1.webp",
    alt: "Teacher supporting children in a warm classroom",
    label: "Caring Teachers",
  },
  {
    image: "/images/hero/mini-me-center-1.webp",
    alt: "Welcoming Mini Me Learning Center environment",
    label: "Safe · Warm · Trusted",
  },
];

export const stats = [
  { value: "1999", label: "Established" },
  { value: "4", label: "Learning Centers" },
  { value: "25+", label: "Years Serving Families" },
];

export const programs = [
  {
    title: "Early Learning",
    description:
      "A warm introduction to learning where children build confidence, curiosity, communication skills, and a love for discovering new things.",
    icon: BookOpen,
  },
  {
    title: "School Readiness",
    description:
      "Daily routines, guided activities, and age-appropriate lessons that help children develop the skills they need for kindergarten and beyond.",
    icon: GraduationCap,
  },
  {
    title: "Safe Childcare",
    description:
      "A caring, structured, and secure environment where families can feel confident their children are protected, supported, and loved.",
    icon: ShieldCheck,
  },
  {
    title: "Inclusive Support",
    description:
      "A welcoming approach that respects every child’s personality, learning style, and developmental needs while helping them feel seen and valued.",
    icon: HeartHandshake,
  },
];

export const locations = [
  {
    name: "Mini Me Learning Center I",
    address: "9851 SW 1st St, Fountainebleau, FL 33174",
    email: "Minimelc1@att.net",
    phone: "(305) 227-2289",
    slug: "/locations/mini-me-1",
    image: "/images/locations/mini-me-1.webp",
  },
  {
    name: "Mini Me Learning Center II",
    address: "11865 Southwest 26th Street, Miami, FL 33175",
    email: "Minimedaycare@bellsouth.net",
    phone: "(305) 227-9111",
    slug: "/locations/mini-me-2",
    image: "/images/locations/mini-me-2.webp",
  },
  {
    name: "Mini Me Learning Center III",
    address: "7300 SW 152 Ave, Miami, FL 33193",
    email: "Minimelc3@att.net",
    phone: "(305) 388-2098",
    slug: "/locations/mini-me-3",
    image: "/images/locations/mini-me-3.webp",
  },
  {
    name: "Mini Me Learning Center IV",
    address: "15260 SW 280 St, Homestead, FL 33032",
    email: "Minimelc4@att.net",
    phone: "(786) 410-8991",
    slug: "/locations/mini-me-4",
    image: "/images/locations/mini-me-4.webp",
  },
];

export const steps = [
  {
    title: "Choose a location",
    description:
      "Find the Mini Me Learning Center closest to your family, work, or daily routine.",
  },
  {
    title: "Schedule a visit",
    description:
      "Tour the center, meet the team, and ask questions about programs, classrooms, and availability.",
  },
  {
    title: "Begin enrollment",
    description:
      "Get guidance on the next steps so your child can begin their learning journey with confidence.",
  },
];

export const faqs = [
  {
    question: "How many Mini Me Learning Centers are available?",
    answer:
      "Mini Me Learning Centers currently has four locations serving families across Miami and South Florida.",
  },
  {
    question: "Can parents schedule a visit before enrolling?",
    answer:
      "Yes. The homepage encourages parents to schedule a visit and connect with the right location.",
  },
  {
    question: "Does Mini Me support early learning and childcare?",
    answer:
      "Yes. Mini Me is positioned as a warm early learning and childcare environment focused on growth, care, and school readiness.",
  },
];
