import {
  Baby,
  BookOpenCheck,
  GraduationCap,
  HandCoins,
  HeartHandshake,
  School,
  ShieldCheck
} from "@lucide/astro";

export const supportPrograms = [
    {
        name: "Voluntary Prekindergarten Program",
        organization: "Florida VPK",
        description:
        "Florida’s free Voluntary Prekindergarten Program helps eligible 4-year-old children build early literacy, math, social, emotional, and classroom-readiness skills before kindergarten.",
        logo: "/images/scholarships/elc-logo.webp",
        href: "https://familyservices.floridaearlylearning.com/",
        accent: "bee",
        bestFor: "Florida children who are 4 years old on or before September 1",
    },
    {
        name: "Florida Family Portal",
        organization: "Florida Early Learning",
        description:
        "The Family Portal is the official online starting point where families can apply for VPK, School Readiness, and other early learning services in Florida.",
        logo: "/images/scholarships/elc-logo.webp",
        href: "https://familyservices.floridaearlylearning.com/",
        accent: "wing",
        bestFor: "Families ready to apply for a VPK Certificate of Eligibility",
    },
    {
        name: "VPK Help",
        organization: "Early Learning Coalition",
        description:
        "A helpful resource for families in Miami-Dade and Monroe looking for VPK information, registration steps, provider guidance, and early learning support.",
        logo: "/images/scholarships/elc-logo.webp",
        href: "https://www.vpkhelp.org/",
        accent: "bee",
        bestFor: "Parents who want help understanding VPK registration steps",
    },
];

export const highlights = [
    {
        title: "Free Pre-K Program",
        description:
        "VPK is free for eligible Florida children before kindergarten.",
        icon: HandCoins,
        gradient: "bee-gradient",
    },
    {
        title: "Kindergarten Readiness",
        description:
        "Children build early learning, social, and classroom skills.",
        icon: BookOpenCheck,
        gradient: "wing-gradient",
    },
    {
        title: "Family Choice",
        description:
        "Families can choose from participating VPK providers.",
        icon: HeartHandshake,
        gradient: "bee-gradient",
    },
];

export const steps = [
    {
        title: "Confirm your child’s eligibility",
        description:
        "VPK is generally for Florida children who are 4 years old on or before September 1 of the school year they enroll.",
    },
    {
        title: "Apply for a VPK Certificate",
        description:
        "Families usually apply through Florida’s Early Learning Family Portal and receive a Certificate of Eligibility if approved.",
    },
    {
        title: "Contact your preferred Mini Me location",
        description:
        "After you begin the VPK process, our team can help answer enrollment questions and guide you toward the right Mini Me location.",
    },
];

export const whoThisHelps = [
    "Parents searching for VPK in Miami",
    "Families looking for free prekindergarten in Miami-Dade",
    "Parents comparing VPK, preschool, daycare, and School Readiness options",
    "Families near Fontainebleau, Tamiami, Kendall, Westchester, Homestead, and nearby Miami communities",
];

export const programBenefits = [
    {
        title: "Builds early literacy skills",
        description:
        "VPK helps children practice language, vocabulary, listening, stories, letters, and early reading readiness.",
        icon: BookOpenCheck,
    },
    {
        title: "Supports classroom confidence",
        description:
        "Children practice routines, group participation, following directions, and becoming comfortable in a learning environment.",
        icon: School,
    },
    {
        title: "Prepares children for kindergarten",
        description:
        "VPK gives children a stronger foundation before entering kindergarten by supporting academic, social, and emotional growth.",
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
        title: "School Readiness in Miami",
        description:
        "Learn more about childcare tuition assistance through the School Readiness Program.",
        href: "/scholarships/school-readiness",
        icon: ShieldCheck,
    },
];

export const faqs = [
    {
        question: "What is VPK?",
        answer:
        "VPK stands for Voluntary Prekindergarten. It is Florida’s free prekindergarten program designed to help eligible children prepare for kindergarten through early learning experiences.",
    },
    {
        question: "Who is eligible for VPK in Florida?",
        answer:
        "Children are generally eligible for VPK if they live in Florida and are 4 years old on or before September 1 of the school year they enroll. Some families may also have the option to postpone enrollment depending on the child’s birthday.",
    },
    {
        question: "Is VPK free in Miami?",
        answer:
        "Yes. VPK is a free Florida program for eligible children. Families should apply through the official Florida Early Learning Family Portal or contact the Early Learning Coalition for guidance.",
    },
    {
        question: "How do I apply for VPK in Miami?",
        answer:
        "Families can usually begin by applying online through Florida’s Early Learning Family Portal. If approved, families receive a VPK Certificate of Eligibility, which is used to enroll with a participating VPK provider.",
    },
    {
        question: "Does Mini Me Learning Center offer support for families exploring VPK?",
        answer:
        "Mini Me Learning Centers welcomes families exploring VPK, preschool, daycare, School Readiness, and other early learning support options. Contact your preferred location for enrollment guidance and next steps.",
    },
];
