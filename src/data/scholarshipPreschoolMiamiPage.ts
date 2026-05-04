import {
  Baby,
  BookOpenCheck,
  HandCoins,
  HeartHandshake,
  ShieldCheck
} from "@lucide/astro";

export const supportPrograms = [
    {
        name: "School Readiness Program",
        organization: "Early Learning Coalition",
        description:
        "Financial assistance for eligible families who need help accessing early education and care, including preschool and childcare support while parents work, attend school, or meet program requirements.",
        logo: "/images/scholarships/elc-logo.webp",
        href: "https://www.elcmdm.org/o/elmdm/page/school-readiness",
        accent: "bee",
        bestFor: "Eligible families needing preschool or childcare tuition support",
    },
    {
        name: "Families Forward Child Care Scholarships",
        organization: "The Children’s Trust",
        description:
        "Scholarship support for Miami-Dade families who may not qualify for some childcare subsidies but still need help affording quality preschool and early learning care.",
        logo: "/images/scholarships/childrens-trust-logo.webp",
        href: "https://www.thechildrenstrust.org/parent/programs/",
        accent: "wing",
        bestFor: "Families seeking additional preschool affordability support",
    },
    {
        name: "Voluntary Prekindergarten Program",
        organization: "Florida VPK",
        description:
        "Florida’s free prekindergarten program helps eligible 4-year-old children build early literacy, math, classroom routines, and kindergarten-readiness skills.",
        logo: "/images/scholarships/elc-logo.webp",
        href: "https://familyservices.floridaearlylearning.com/",
        accent: "bee",
        bestFor: "Families with eligible 4-year-old preschool children",
    },
];

export const highlights = [
    {
        title: "Preschool Tuition Help",
        description:
        "Explore programs that may help eligible families afford preschool care.",
        icon: HandCoins,
        gradient: "bee-gradient",
    },
    {
        title: "Kindergarten Readiness",
        description:
        "Support children as they build early learning and classroom skills.",
        icon: BookOpenCheck,
        gradient: "wing-gradient",
    },
    {
        title: "Miami Family Guidance",
        description:
        "Helpful pathways for families comparing preschool scholarship options.",
        icon: HeartHandshake,
        gradient: "bee-gradient",
    },
];

export const steps = [
    {
        title: "Identify your child’s preschool stage",
        description:
        "Preschool support may depend on your child’s age, readiness level, family needs, and whether your child may qualify for VPK or other early learning assistance.",
    },
    {
        title: "Compare the main support programs",
        description:
        "Families often review School Readiness, Families Forward, and VPK when looking for preschool scholarships or early learning assistance in Miami.",
    },
    {
        title: "Connect with your preferred Mini Me location",
        description:
        "Our team can help you ask the right questions, understand enrollment next steps, and choose the location that best fits your family.",
    },
];

export const whoThisHelps = [
    "Parents searching for preschool scholarships in Miami",
    "Families looking for preschool financial assistance in Miami-Dade",
    "Parents comparing VPK, School Readiness, ELC, and Children’s Trust options",
    "Families near Fontainebleau, Tamiami, Kendall, Westchester, Homestead, and nearby Miami communities",
];

export const relatedPages = [
    {
        title: "Daycare Scholarships in Miami",
        description:
        "Explore childcare assistance and daycare scholarship options for younger children and working families.",
        href: "/scholarships/daycare-miami",
        icon: Baby,
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
        question: "Are there preschool scholarships available in Miami?",
        answer:
        "Yes. Miami-Dade families may be able to explore preschool and early learning support through programs such as School Readiness, Families Forward Child Care Scholarships, and VPK for eligible 4-year-old children.",
    },
    {
        question: "Is VPK the same as preschool?",
        answer:
        "VPK is a specific Florida prekindergarten program for eligible children, usually focused on the year before kindergarten. Preschool can be a broader term that includes early learning programs for children before kindergarten, including children who may not yet be VPK age.",
    },
    {
        question: "Can preschool scholarships help with tuition?",
        answer:
        "Some assistance programs may help eligible families with early education and childcare costs. Program rules, eligibility, and coverage vary, so families should apply or confirm directly through the official scholarship provider.",
    },
    {
        question: "Does Mini Me Learning Center accept families using preschool assistance programs?",
        answer:
        "Mini Me Learning Centers welcomes families exploring preschool scholarships, VPK, School Readiness, Children’s Trust support, and other early learning assistance options. Contact your preferred location for the most helpful next step.",
    },
];
