import {
  Baby,
  BriefcaseBusiness,
  GraduationCap
} from "@lucide/astro";

export const locations = [
    {
        id: "mini-me-1",
        name: "Mini Me Learning Center I",
        address: "9851 SW 1st St, Fountainebleau, FL 33174",
        email: "Minimelc1@att.net",
        phone: "(305) 227-2289",
        image: "/images/locations/mini-me-1.webp",
        area: "Fountainebleau",
        mapQuery: "9851 SW 1st St, Fountainebleau, FL 33174",
    },
    {
        id: "mini-me-2",
        name: "Mini Me Learning Center II",
        address: "11865 Southwest 26th Street, Miami, FL 33175",
        email: "Minimedaycare@bellsouth.net",
        phone: "(305) 227-9111",
        image: "/images/locations/mini-me-2.webp",
        area: "Westchester / Tamiami",
        mapQuery: "11865 Southwest 26th Street, Miami, FL 33175",
    },
    {
        id: "mini-me-3",
        name: "Mini Me Learning Center III",
        address: "7300 SW 152 Ave, Miami, FL 33193",
        email: "Minimelc3@att.net",
        phone: "(305) 388-2098",
        image: "/images/locations/mini-me-3.webp",
        area: "Kendall / West Kendall",
        mapQuery: "7300 SW 152 Ave, Miami, FL 33193",
    },
    {
        id: "mini-me-4",
        name: "Mini Me Learning Center IV",
        address: "15260 SW 280 St, Homestead, FL 33032",
        email: "Minimelc4@att.net",
        phone: "(786) 410-8991",
        image: "/images/locations/mini-me-4.webp",
        area: "Homestead",
        mapQuery: "15260 SW 280 St, Homestead, FL 33032",
    },
];

export const contactReasons = [
    {
        icon: Baby,
        title: "Enrollment Questions",
        description:
        "Ask about availability, programs, age groups, or the enrollment process.",
    },
    {
        icon: GraduationCap,
        title: "Programs & Learning",
        description:
        "Learn more about classroom experiences, VPK, preschool, and childcare options.",
    },
    {
        icon: BriefcaseBusiness,
        title: "Careers",
        description:
        "Interested in joining the Mini Me team? Send us a message or apply online.",
    },
    ];

export const faqs = [
    {
        question: "Can I schedule a tour?",
        answer:
        "Yes. Send us a message with your preferred location and our team will help you with the next steps.",
    },
    {
        question: "Can I ask about enrollment availability?",
        answer:
        "Absolutely. Please include your child’s age, preferred start date, and the location you’re interested in.",
    },
    {
        question: "Can I contact a specific location?",
        answer:
        "Yes. Select your preferred location in the form so your message can be routed properly.",
    },
];
