import {
  BookOpenCheck,
  CheckCircle2,
  HandCoins
} from "@lucide/astro";

export const scholarshipCategories = [
  {
    name: "Early Learning Coalition",
    shortName: "ELC",
    description:
      "Programs that help eligible families access childcare assistance, VPK, school readiness support, and early learning resources.",
    logo: "/images/scholarships/elc-logo.webp",
    href: "https://www.elcmdm.org/",
    accent: "bee",
    programs: [
      {
        name: "School Readiness Program",
        description:
          "Childcare tuition assistance for eligible families, helping children prepare for school while parents work, attend school, or meet program requirements.",
        logo: "/images/scholarships/elc-logo.webp",
        href: "https://www.elcmdm.org/o/elmdm/page/school-readiness",
      },
      {
        name: "Voluntary Prekindergarten Program",
        description:
          "Florida’s free VPK program helps 4-year-old children build early learning, classroom routines, and school-readiness skills before kindergarten.",
        logo: "/images/scholarships/elc-logo.webp",
        href: "https://familyservices.floridaearlylearning.com/",
      },
      {
        name: "School Readiness Match Program",
        description:
          "A childcare assistance option connected to qualifying employees and participating early care and education providers.",
        logo: "/images/scholarships/elc-logo.webp",
        href: "https://www.elcmdm.org/page/school-readiness-program-match",
      },
    ],
  },
  {
    name: "The Children’s Trust",
    shortName: "Children’s Trust",
    description:
      "Community-funded programs that support children, families, teachers, and early learning providers across Miami-Dade County.",
    logo: "/images/scholarships/childrens-trust-logo.webp",
    href: "https://www.thechildrenstrust.org/",
    accent: "wing",
    programs: [
      {
        name: "Thrive by 5",
        description:
          "An integrated system of support for young children, families, teachers, and early learning providers.",
        logo: "/images/scholarships/childrens-trust-logo.webp",
        href: "https://www.thechildrenstrust.org/about-us/what-we-fund/thrive-by-5/",
      },
      {
        name: "Families Forward Child Care Scholarships",
        description:
          "Scholarship support for families who may not qualify for other childcare subsidies but still need help affording quality childcare.",
        logo: "/images/scholarships/childrens-trust-logo.webp",
        href: "https://www.thechildrenstrust.org/parent/programs/",
      },
    ],
  },
  {
    name: "Step Up For Students",
    shortName: "Step Up",
    description:
      "Florida scholarship options that help families access private education, unique abilities support, reading support, and other educational choices.",
    logo: "/images/scholarships/step-up-logo.webp",
    href: "https://www.stepupforstudents.org/scholarships/",
    accent: "bee",
    programs: [
      {
        name: "Florida Tax Credit Scholarship",
        description:
          "A scholarship pathway that may help eligible Florida students access private school or other educational options.",
        logo: "/images/scholarships/step-up-logo.webp",
        href: "https://www.stepupforstudents.org/scholarships/private-school/",
      },
      {
        name: "Family Empowerment Scholarship for Educational Options",
        description:
          "A Florida scholarship option that helps eligible families choose the learning environment that best fits their child.",
        logo: "/images/scholarships/step-up-logo.webp",
        href: "https://www.stepupforstudents.org/scholarships/private-school/",
      },
      {
        name: "Family Empowerment Scholarship for Unique Abilities",
        description:
          "A scholarship that helps eligible students with unique abilities access educational services, supports, and learning options.",
        logo: "/images/scholarships/step-up-logo.webp",
        href: "https://www.stepupforstudents.org/scholarships/unique-abilities/",
      },
      {
        name: "Personalized Education Program",
        description:
          "A Step Up option for eligible Florida students who are not full-time private or public school students.",
        logo: "/images/scholarships/step-up-logo.webp",
        href: "https://www.stepupforstudents.org/scholarships/personalized-education-program/",
      },
      {
        name: "New Worlds Scholarship Accounts",
        description:
          "A reading and math support scholarship account program for eligible students who need targeted academic support.",
        logo: "/images/scholarships/step-up-logo.webp",
        href: "https://www.stepupforstudents.org/scholarships/new-worlds-scholarship-accounts/",
      },
    ],
  },
];

export const highlights = [
  {
    title: "Childcare Support",
    description: "Helpful programs for eligible families.",
    icon: HandCoins,
    gradient: "bee-gradient",
  },
  {
    title: "School Readiness",
    description: "Preparing children for the next step.",
    icon: BookOpenCheck,
    gradient: "wing-gradient",
  },
  {
    title: "Family Guidance",
    description: "Our team can help point you forward.",
    icon: CheckCircle2,
    gradient: "bee-gradient",
  },
];

export const steps = [
  {
    title: "Explore your options",
    description:
      "Review the scholarship and assistance programs that may apply to your child and family.",
  },
  {
    title: "Contact your preferred center",
    description:
      "Reach out to the Mini Me location closest to you for guidance and enrollment information.",
  },
  {
    title: "Apply through the program",
    description:
      "Some programs require families to apply directly through the scholarship or assistance provider.",
  },
];
