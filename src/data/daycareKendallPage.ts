import {
  Baby,
  BookOpenCheck,
  GraduationCap,
  HandCoins,
  HeartHandshake,
  MapPin,
  Phone,
  School,
  ShieldCheck
} from "@lucide/astro";

export const nearbyAreas = [
    "Kendall",
    "West Kendall",
    "Dadeland",
    "The Crossings",
    "Sunset",
    "Tamiami",
    "Kendale Lakes",
    "Westchester",
];

export const highlights = [
    {
        title: "Caring Daycare",
        description:
        "A warm early learning environment for growing children.",
        icon: Baby,
        gradient: "bee-gradient",
    },
    {
        title: "Preschool Readiness",
        description:
        "Helping children build confidence before kindergarten.",
        icon: BookOpenCheck,
        gradient: "wing-gradient",
    },
    {
        title: "Family Guidance",
        description:
        "Support for enrollment, locations, and program questions.",
        icon: HeartHandshake,
        gradient: "bee-gradient",
    },
];

export const programs = [
    {
        title: "Daycare & Early Learning",
        description:
        "A nurturing environment where children can learn, play, build routines, and grow socially and emotionally.",
        icon: Baby,
    },
    {
        title: "Preschool Preparation",
        description:
        "Age-appropriate learning experiences that support early literacy, communication, independence, and classroom confidence.",
        icon: School,
    },
    {
        title: "VPK Support",
        description:
        "Guidance for families exploring Florida’s free Voluntary Prekindergarten Program for eligible 4-year-old children.",
        icon: GraduationCap,
    },
    {
        title: "School Readiness Guidance",
        description:
        "Helpful direction for families exploring ELC School Readiness and childcare assistance options.",
        icon: ShieldCheck,
    },
];

export const whyFamiliesChoose = [
    {
        title: "Convenient for Kendall families",
        description:
        "Mini Me Learning Centers serves families across Miami-Dade, including parents looking for daycare near Kendall, Tamiami, Westchester, and surrounding communities.",
        icon: MapPin,
    },
    {
        title: "Early learning with structure",
        description:
        "Children benefit from routines, guided activities, social interaction, and age-appropriate classroom experiences.",
        icon: BookOpenCheck,
    },
    {
        title: "Support from the first call",
        description:
        "Our team can help answer questions about enrollment, programs, locations, and next steps for your child.",
        icon: Phone,
    },
];

export const steps = [
    {
        title: "Find the closest Mini Me location",
        description:
        "Start by reviewing the Mini Me Learning Center location that works best for your home, commute, or daily routine near Kendall.",
    },
    {
        title: "Ask about availability",
        description:
        "Contact the center to ask about age groups, classroom availability, enrollment requirements, and program options.",
    },
    {
        title: "Schedule a visit or next step",
        description:
        "Families are encouraged to connect with the team, ask questions, and take the next step toward enrollment.",
    },
];

export const relatedPages = [
    {
        title: "Daycare Scholarships in Miami",
        description:
        "Explore childcare assistance and daycare scholarship options for eligible families in Miami-Dade.",
        href: "/scholarships/daycare-miami",
        icon: HandCoins,
    },
    {
        title: "Preschool Scholarships in Miami",
        description:
        "Learn about preschool financial assistance and early learning support options.",
        href: "/scholarships/preschool-miami",
        icon: School,
    },
    {
        title: "VPK in Miami",
        description:
        "Learn about Florida’s free VPK program and kindergarten-readiness support.",
        href: "/scholarships/vpk-miami",
        icon: GraduationCap,
    },
];

export const faqs = [
    {
        question: "Is Mini Me Learning Center a good option for families looking for daycare near Kendall?",
        answer:
        "Mini Me Learning Centers serves families across Miami-Dade and is a helpful option for parents searching for daycare, preschool, VPK, and early learning support near Kendall and nearby communities.",
    },
    {
        question: "What should I ask when looking for daycare in Kendall?",
        answer:
        "Parents should ask about age groups, availability, classroom routines, curriculum, safety practices, enrollment documents, tuition, meals, schedules, and whether the center can guide families exploring VPK or childcare assistance.",
    },
    {
        question: "Does Mini Me offer preschool and VPK support?",
        answer:
        "Mini Me Learning Centers welcomes families exploring daycare, preschool, VPK, School Readiness, and other early learning support options. Contact your preferred location for details.",
    },
    {
        question: "How do I enroll my child?",
        answer:
        "The best first step is to contact the Mini Me Learning Center location closest to your family. The team can answer questions about availability, required documents, age groups, and next steps.",
    },
];
