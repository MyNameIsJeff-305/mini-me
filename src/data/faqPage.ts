import {
  CalendarDays,
  CheckCircle2,
  HeartHandshake,
  MapPin,
  School,
  ShieldCheck
} from "@lucide/astro";

export const faqCategories = [
    {
        title: "Enrollment & Visits",
        description:
        "Helpful answers for parents who are exploring Mini Me, planning a visit, or preparing to begin enrollment.",
        icon: CalendarDays,
        faqs: [
        {
            question: "How do I enroll my child at Mini Me Learning Center?",
            answer:
            "The best first step is to contact the Mini Me Learning Center location closest to your family. Our team can answer questions about availability, age groups, required documents, and the next steps for enrollment.",
        },
        {
            question: "How can I schedule a daycare tour?",
            answer:
            "Families can schedule a daycare tour by contacting the Mini Me Learning Center location they are interested in. During the visit, parents can tour the center, meet the team, ask questions about classrooms and routines, and learn more about enrollment availability.",
        },
        {
            question: "Can I schedule a visit before enrolling?",
            answer:
            "Yes. Families are encouraged to schedule a visit, tour the center, meet the team, and ask questions before making an enrollment decision.",
        },
        {
            question: "Do all locations have the same availability?",
            answer:
            "Availability may vary by location, classroom, and age group. We recommend contacting the specific center you are interested in so the team can provide the most accurate information.",
        },
        {
            question: "Do you help families apply for School Readiness?",
            answer:
            "Our team can guide families with general information about School Readiness and help point parents in the right direction for the application process. Since requirements and eligibility can vary, families should contact their preferred Mini Me location for support and next steps.",
        },
        ],
    },
    {
        title: "Programs & Early Learning",
        description:
        "Learn more about the care, structure, and early education approach children experience at Mini Me.",
        icon: School,
        faqs: [
        {
            question: "Do you offer VPK in Miami?",
            answer:
            "Yes. Mini Me Learning Center offers VPK preparation and early learning support for children in Miami and South Florida. Families should contact their preferred location to ask about current VPK availability, schedules, and enrollment requirements.",
        },
        {
            question: "What age groups do you accept?",
            answer:
            "Mini Me Learning Center welcomes young children across early childhood age groups, including infants, toddlers, preschool-age children, and children preparing for kindergarten. Exact age availability may vary by location and classroom.",
        },
        {
            question: "What ages does Mini Me Learning Center accept?",
            answer:
            "Mini Me Learning Center welcomes young children across early childhood age groups. Exact age availability may vary by location and program, so families should contact their preferred center for current openings.",
        },
        {
            question: "Do you offer preschool and early learning programs?",
            answer:
            "Yes. Mini Me Learning Center offers preschool and early learning programs designed to support children’s social, emotional, creative, and academic development in a caring and structured environment.",
        },
        {
            question: "Does Mini Me offer early learning programs?",
            answer:
            "Yes. Mini Me Learning Center focuses on early learning, childcare, school readiness, and age-appropriate development in a warm and structured environment.",
        },
        {
            question: "Do you help children prepare for kindergarten?",
            answer:
            "Yes. Our programs are designed to support school readiness through daily routines, guided activities, social development, communication skills, and early learning experiences.",
        },
        ],
    },
    {
        title: "Safety, Care & Daily Routine",
        description:
        "Answers about the caring environment, daily support, and peace of mind families look for in a daycare.",
        icon: ShieldCheck,
        faqs: [
        {
            question: "Is Mini Me Learning Center a safe environment?",
            answer:
            "Safety, care, and structure are important parts of the Mini Me experience. Our centers are designed to provide a nurturing environment where children feel protected, supported, and comfortable.",
        },
        {
            question: "What makes Mini Me different from other daycare centers?",
            answer:
            "Mini Me combines childcare, early learning, and a warm family-focused environment. Children are encouraged to learn, play, explore, and grow with confidence while being supported by caring educators.",
        },
        {
            question: "Do children receive meals or snacks?",
            answer:
            "Meal and snack details may vary by location and program. Please contact your preferred Mini Me Learning Center to ask about food policies, daily routines, and any family requirements.",
        },
        ],
    },
    {
        title: "Locations & Contact",
        description:
        "Find answers about our centers, service areas, and the best way to contact the Mini Me team.",
        icon: MapPin,
        faqs: [
        {
            question: "How many Mini Me Learning Centers are available?",
            answer:
            "Mini Me Learning Centers currently has four convenient locations serving families across Miami, Fontainebleau, Tamiami, Kendall, Homestead, and nearby South Florida communities.",
        },
        {
            question: "How do I find the closest Mini Me location?",
            answer:
            "You can visit the Locations page to compare addresses, phone numbers, and details for each Mini Me Learning Center.",
        },
        {
            question: "Which Mini Me location is closest to Kendall?",
            answer:
            "Families near Kendall may find Mini Me Learning Center III in West Kendall or Mini Me Learning Center II near Tamiami and Westchester convenient, depending on their home, school, or work route.",
        },
        {
            question: "Which Mini Me location is closest to Homestead?",
            answer:
            "Families in Homestead, South Dade, Naranja, Princeton, and Florida City can contact Mini Me Learning Center IV, located in Homestead, for daycare, preschool, and early learning information.",
        },
        {
            question: "Can I contact a specific location directly?",
            answer:
            "Yes. Each Mini Me Learning Center has its own phone number and email so families can contact the location that is most convenient for them.",
        },
        ],
    },
];

export const quickAnswers = [
    {
        title: "Four locations",
        description: "Serving families across Miami and Homestead.",
        icon: MapPin,
    },
    {
        title: "Established since 1999",
        description: "Trusted early learning care for South Florida families.",
        icon: CheckCircle2,
    },
    {
        title: "Parent-friendly support",
        description: "Easy next steps for visits, questions, and enrollment.",
        icon: HeartHandshake,
    },
];

export const locations = [
    {
        name: "Mini Me Learning Center I",
        phone: "(305) 227-2289",
        email: "Minimelc1@att.net",
        slug: "/locations/mini-me-1",
    },
    {
        name: "Mini Me Learning Center II",
        phone: "(305) 227-9111",
        email: "Minimedaycare@bellsouth.net",
        slug: "/locations/mini-me-2",
    },
    {
        name: "Mini Me Learning Center III",
        phone: "(305) 388-2098",
        email: "Minimelc3@att.net",
        slug: "/locations/mini-me-3",
    },
    {
        name: "Mini Me Learning Center IV",
        phone: "(786) 410-8991",
        email: "Minimelc4@att.net",
        slug: "/locations/mini-me-4",
    },
];
