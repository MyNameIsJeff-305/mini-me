import {
  BookOpenCheck,
  HandCoins,
  HeartHandshake,
  School,
  ShieldCheck
} from "@lucide/astro";

export const supportPrograms = [
    {
        name: "School Readiness Program",
        organization: "Early Learning Coalition",
        description:
        "Childcare tuition assistance for eligible families who need help accessing early learning and care while parents work, attend school, or meet program requirements.",
        logo: "/images/scholarships/elc-logo.webp",
        href: "https://www.elcmdm.org/o/elmdm/page/school-readiness",
        accent: "bee",
        bestFor: "Eligible families needing daycare tuition support",
    },
    {
        name: "Families Forward Child Care Scholarships",
        organization: "The Children’s Trust",
        description:
        "Scholarship support for Miami-Dade families who may not qualify for some childcare subsidies but still need help affording quality early learning.",
        logo: "/images/scholarships/childrens-trust-logo.webp",
        href: "https://www.thechildrenstrust.org/parent/programs/",
        accent: "wing",
        bestFor: "Families seeking additional childcare affordability support",
    },
    {
        name: "Voluntary Prekindergarten Program",
        organization: "Florida VPK",
        description:
        "Florida’s free VPK program helps eligible 4-year-old children build early academic, social, and classroom-readiness skills before kindergarten.",
        logo: "/images/scholarships/elc-logo.webp",
        href: "https://familyservices.floridaearlylearning.com/",
        accent: "bee",
        bestFor: "Families with eligible 4-year-old children",
    },
];

export const highlights = [
    {
        title: "Daycare Tuition Help",
        description:
        "Explore programs that may help reduce childcare costs for eligible families.",
        icon: HandCoins,
        gradient: "bee-gradient",
    },
    {
        title: "Miami Family Support",
        description:
        "Scholarship options connected to Miami-Dade early learning resources.",
        icon: HeartHandshake,
        gradient: "wing-gradient",
    },
    {
        title: "Early Learning Pathways",
        description:
        "Support for daycare, preschool readiness, VPK, and school preparation.",
        icon: BookOpenCheck,
        gradient: "bee-gradient",
    },
];

export const steps = [
    {
        title: "Start with your child’s age and needs",
        description:
        "Daycare assistance options may depend on your child’s age, your family situation, work or school schedule, and program eligibility.",
    },
    {
        title: "Review the main scholarship programs",
        description:
        "Families in Miami often begin by looking at ELC School Readiness, The Children’s Trust Families Forward, and VPK for eligible children.",
    },
    {
        title: "Contact your preferred Mini Me location",
        description:
        "Our team can help you understand which program questions to ask and where to begin the enrollment conversation.",
    },
];

export const whoThisHelps = [
    "Parents looking for daycare scholarships in Miami",
    "Families searching for childcare assistance near Fontainebleau, Tamiami, Kendall, Westchester, or Homestead",
    "Parents comparing ELC, School Readiness, VPK, and Children’s Trust options",
    "Families who need help understanding where to begin the application process",
];

export const relatedPages = [
    {
        title: "Preschool Scholarships in Miami",
        description:
        "Explore scholarship and early learning support options for preschool-age children.",
        href: "/scholarships/preschool-miami",
        icon: School,
    },
    {
        title: "VPK in Miami",
        description:
        "Learn about Florida’s free VPK program and how it supports kindergarten readiness.",
        href: "/scholarships/vpk-miami",
        icon: BookOpenCheck,
    },
    {
        title: "School Readiness in Miami",
        description:
        "Learn more about childcare tuition assistance through the School Readiness Program.",
        href: "/scholarships/school-readiness-miami",
        icon: ShieldCheck,
    },
];

export const faqs = [
    {
        question: "Are there daycare scholarships available in Miami?",
        answer:
        "Yes. Families in Miami-Dade may be able to explore childcare assistance programs such as School Readiness through the Early Learning Coalition, Families Forward Child Care Scholarships through The Children’s Trust, and VPK for eligible 4-year-old children.",
    },
    {
        question: "Does Mini Me Learning Center help families using childcare assistance?",
        answer:
        "Mini Me Learning Centers welcomes families exploring childcare assistance, daycare scholarships, VPK, School Readiness, and other early learning support options. The best next step is to contact your preferred location for guidance.",
    },
    {
        question: "Do I apply through Mini Me or through the scholarship program?",
        answer:
        "Many scholarship and assistance programs require families to apply directly through the official program provider. Mini Me can help point you toward the right place to begin and answer questions about enrollment at our centers.",
    },
    {
        question: "Which daycare scholarship is best for my family?",
        answer:
        "The right option depends on your child’s age, family eligibility, income guidelines, work or school schedule, and the specific program requirements. Families often begin by reviewing ELC School Readiness, Children’s Trust Families Forward, and VPK if their child is eligible.",
    },
];
