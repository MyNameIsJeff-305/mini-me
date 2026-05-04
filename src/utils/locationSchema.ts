type MiniMeLocation = {
    slug: string;
    name: string;
    area: string;
    city: string;
    state: string;
    zip: string;
    url: string;
    image: string;
    primaryKeyword: string;
    title: string;
    description: string;
    address: string;
    phone: string;
    email: string;
    nearbyAreas: string[];
    services: string[];
    intro: string;
    mapEmbedUrl: string;
};

function formatPhoneForSchema(phone: string) {
    const digits = phone.replace(/\D/g, "");

    if (digits.length === 10) {
        return `+1${digits}`;
    }

    if (digits.length === 11 && digits.startsWith("1")) {
        return `+${digits}`;
    }

    return phone;
}

function getStreetAddress(fullAddress: string) {
    return fullAddress.split(",")[0]?.trim() || fullAddress;
}

export function createChildCareSchema(location: MiniMeLocation) {
    return {
        "@context": "https://schema.org",
        "@type": "ChildCare",
        "@id": `${location.url}#childcare`,
        name: location.name,
        url: location.url,
        image: `https://minimelearning.org${location.image}`,
        description: location.description,
        telephone: formatPhoneForSchema(location.phone),
        email: location.email,
        address: {
        "@type": "PostalAddress",
        streetAddress: getStreetAddress(location.address),
        addressLocality: location.city,
        addressRegion: location.state,
        postalCode: location.zip,
        addressCountry: "US",
        },
        areaServed: location.nearbyAreas,
        parentOrganization: {
        "@type": "Organization",
        "@id": "https://minimelearning.org/#organization",
        name: "Mini Me Learning Centers",
        url: "https://minimelearning.org",
        },
        makesOffer: location.services.map((service) => ({
        "@type": "Offer",
        itemOffered: {
            "@type": "Service",
            name: service,
        },
        })),
    };
}