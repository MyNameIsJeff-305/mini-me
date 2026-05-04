import {
  Baby,
  BookOpenCheck,
  ClipboardCheck,
  GraduationCap,
  HandCoins,
  HeartHandshake,
  School
} from "@lucide/astro";

export const supportPrograms = [
    {
        name: "School Readiness Program",
        organization: "Early Learning Coalition",
        description:
        "Florida’s School Readiness Program offers childcare tuition assistance for eligible families who need early education and care while parents work, attend school, or meet program requirements.",
        logo: "/images/scholarships/elc-logo.webp",
        href: "https://www.elcmdm.org/o/elmdm/page/school-readiness",
        accent: "bee",
        bestFor: "Eligible families needing help paying for childcare or early learning",
    },
    {
        name: "Florida Family Portal",
        organization: "Florida Early Learning",
        description:
        "The Family Portal is the online starting point where families can apply for School Readiness, VPK, and other early learning services in Florida.",
        logo: "/images/scholarships/elc-logo.webp",
        href: "https://familyservices.floridaearlylearning.com/",
        accent: "wing",
        bestFor: "Families ready to begin or manage an early learning application",
    },
    {
        name: "Child Care Resource & Referral",
        organization: "Early Learning Coalition",
        description:
        "A helpful ELC service that can guide families looking for early care and education programs, provider information, and childcare-related resources.",
        logo: "/images/scholarships/elc-logo.webp",
        href: "https://www.elcmdm.org/page/help-finding-child-care",
        accent: "bee",
        bestFor: "Families comparing childcare providers and early learning options",
    },
];

export const highlights = [
    {
        title: "Tuition Assistance",
        description:
        "School Readiness may help eligible families with childcare costs.",
        icon: HandCoins,
        gradient: "bee-gradient",
    },
    {
        title: "Early Learning Support",
        description:
        "The program helps children prepare for future school success.",
        icon: BookOpenCheck,
        gradient: "wing-gradient",
    },
    {
        title: "Family Stability",
        description:
        "Support for families balancing work, school, and childcare needs.",
        icon: HeartHandshake,
        gradient: "bee-gradient",
    },
];

export const steps = [
    {
        title: "Check basic program fit",
        description:
        "School Readiness is designed for eligible families who need help accessing early education and care. Requirements can include family income, child age, and parent work or school activity.",
    },
    {
        title: "Apply through the official Family Portal",
        description:
        "Families usually begin by applying online through Florida’s Early Learning Family Portal or by contacting the Early Learning Coalition for guidance.",
    },
    {
        title: "Contact your preferred Mini Me location",
        description:
        "Once you are exploring School Readiness, our team can help answer enrollment questions and guide you toward the right Mini Me location.",
    },
];

export const whoThisHelps = [
    "Parents searching for School Readiness in Miami",
    "Families looking for ELC childcare assistance in Miami-Dade",
    "Parents who need help paying for daycare, preschool, or early learning care",
    "Families near Fontainebleau, Tamiami, Kendall, Westchester, Homestead, and nearby Miami communities",
];

export const programBenefits = [
    {
        title: "Helps with childcare affordability",
        description:
        "School Readiness can help eligible families reduce the cost of early education and childcare.",
        icon: HandCoins,
    },
    {
        title: "Supports working and studying parents",
        description:
        "The program is designed to support eligible families while parents work, attend school, or meet program requirements.",
        icon: ClipboardCheck,
    },
    {
        title: "Prepares children for school",
        description:
        "Early learning experiences help children build social, emotional, communication, and classroom-readiness skills.",
        icon: GraduationCap,
    },
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
];

export const faqs = [
    {
        question: "What is the School Readiness Program?",
        answer:
        "The School Readiness Program is a Florida early learning assistance program that helps eligible families access early education and childcare so children can build a strong foundation for future school success.",
    },
    {
        question: "Does School Readiness help pay for childcare?",
        answer:
        "Yes. School Readiness may provide financial assistance for eligible families who need help paying for early education and care. Eligibility and coverage can vary, so families should confirm directly through the official program provider.",
    },
    {
        question: "How do I apply for School Readiness in Miami?",
        answer:
        "Families in Miami-Dade can begin by visiting the Florida Early Learning Family Portal or contacting the Early Learning Coalition of Miami-Dade/Monroe for guidance.",
    },
    {
        question: "Does Mini Me Learning Center accept families using School Readiness?",
        answer:
        "Mini Me Learning Centers welcomes families exploring School Readiness, VPK, childcare assistance, and other early learning support options. Contact your preferred location for enrollment guidance and next steps.",
    },
];
