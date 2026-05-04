export const miniMeLocations = {
    "mini-me-1": {
        slug: "mini-me-1",
        name: "Mini Me Learning Center 1",
        area: "Fontainebleau",
        city: "Miami",
        state: "FL",
        zip: "33174",
        image: "/images/locations/mini-me-1.webp",
        url: "https://minimelearning.org/locations/mini-me-1",
        primaryKeyword: "Daycare in Fontainebleau FL",
        title: "Daycare in Fontainebleau, FL | Mini Me Learning Center",
        description:
        "Mini Me Learning Center in Fontainebleau, FL provides caring early childhood education, preschool programs, VPK, and daycare services for families near Miami, FIU, and Westchester.",
        address: "9851 SW 1st St, Fontainebleau, Florida 33174, United States",
        phone: "+13052272289",
        email: "minimelc1@att.net",
        nearbyAreas: ["Fontainebleau", "Westchester", "FIU Area", "Sweetwater", "Doral"],
        services: [
        "Infant care",
        "Toddler care",
        "Preschool programs",
        "VPK preparation",
        "Early childhood education",
        "After-school support",
        ],
        intro:
        "Our Fontainebleau area location serves families in Fontainebleau, Westchester, the FIU area, Sweetwater, Doral, and nearby Miami neighborhoods with a warm, structured, and nurturing environment where children can learn, play, and grow with confidence.",
        mapEmbedUrl: "",
    },

    "mini-me-2": {
        slug: "mini-me-2",
        name: "Mini Me Learning Center 2",
        area: "Tamiami / Westchester",
        city: "Miami",
        state: "FL",
        zip: "33175",
        image: "/images/locations/mini-me-2.webp",
        url: "https://minimelearning.org/locations/mini-me-2",
        primaryKeyword: "Daycare near Tamiami and Westchester",
        title: "Daycare near Tamiami & Westchester | Mini Me Learning Center",
        description:
        "Mini Me Learning Center near Tamiami and Westchester offers daycare, preschool, VPK preparation, and early childhood education for families in Southwest Miami.",
        address: "11865 Southwest 26th Street, Miami, Florida 33175, United States",
        phone: "+13052279111",
        email: "minimedaycare@bellsouth.net",
        nearbyAreas: ["Tamiami", "Westchester", "SW 26th St", "Coral Way", "Kendall"],
        services: [
        "Infant care",
        "Toddler care",
        "Preschool programs",
        "VPK preparation",
        "Early learning activities",
        "School readiness support",
        ],
        intro:
        "Our Tamiami and Westchester area location serves families near Tamiami, Westchester, SW 26th Street, Coral Way, Kendall, and surrounding Southwest Miami neighborhoods with dependable childcare, caring teachers, and a strong early learning foundation.",
        mapEmbedUrl: "",
    },

    "mini-me-3": {
        slug: "mini-me-3",
        name: "Mini Me Learning Center 3",
        area: "West Kendall",
        city: "Miami",
        state: "FL",
        zip: "33193",
        image: "/images/locations/mini-me-3.webp",
        url: "https://minimelearning.org/locations/mini-me-3",
        primaryKeyword: "Daycare in West Kendall",
        title: "Daycare in West Kendall, FL | Mini Me Learning Center",
        description:
        "Mini Me Learning Center in West Kendall provides daycare, preschool, VPK, and early childhood education for families near Kendall, SW 152nd Ave, and Miami 33193.",
        address: "7300 SW 152 Ave, Miami, Florida 33193, United States",
        phone: "+13053882098",
        email: "minimelc3@att.net",
        nearbyAreas: ["West Kendall", "Kendall", "SW 152nd Ave", "The Hammocks", "Country Walk"],
        services: [
        "Infant care",
        "Toddler care",
        "Preschool programs",
        "VPK readiness",
        "Creative learning",
        "Social and emotional development",
        ],
        intro:
        "Our West Kendall location serves families in West Kendall, Kendall, The Hammocks, Country Walk, SW 152nd Avenue, and nearby Miami 33193 neighborhoods with age-appropriate learning, daily routines, creative activities, and a caring team focused on every child’s growth.",
        mapEmbedUrl: "",
    },

    "mini-me-4": {
        slug: "mini-me-4",
        name: "Mini Me Learning Center 4",
        area: "Homestead",
        city: "Homestead",
        state: "FL",
        zip: "33032",
        image: "/images/locations/mini-me-4.webp",
        url: "https://minimelearning.org/locations/mini-me-4",
        primaryKeyword: "Daycare in Homestead FL",
        title: "Daycare in Homestead, FL | Mini Me Learning Center",
        description:
        "Mini Me Learning Center in Homestead, FL offers daycare, preschool, VPK preparation, and early childhood education for families in South Dade and Homestead 33032.",
        address: "15260 SW 280 St, Homestead, Florida 33032, United States",
        phone: "+17864108991",
        email: "minimelc4@att.net",
        nearbyAreas: ["Homestead", "South Dade", "Naranja", "Princeton", "Florida City"],
        services: [
        "Infant care",
        "Toddler care",
        "Preschool programs",
        "VPK preparation",
        "Kindergarten readiness",
        "Early childhood education",
        ],
        intro:
        "Our Homestead location serves families in Homestead, South Dade, Naranja, Princeton, Florida City, and nearby communities with a safe, welcoming, and educational childcare environment close to home.",
        mapEmbedUrl: "",
    },
};

export type MiniMeLocationSlug = keyof typeof miniMeLocations;

export const miniMeLocationList = Object.values(miniMeLocations);

export const getMiniMeLocation = (slug: MiniMeLocationSlug) => miniMeLocations[slug];