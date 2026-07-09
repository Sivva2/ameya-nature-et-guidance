// components/JsonLd.tsx

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Ameya Nature & Guidance",
  description:
    "Dalysé Larain, voyante professionnelle en Essonne. Voyance par téléphone, à domicile, bains de déblocage et rituels de réussite.",
  url: "https://ameya-nature-guidance.fr",
  telephone: "+33635168162",
  address: {
    "@type": "PostalAddress",
    streetAddress: "38 Sentier de la Provode",
    addressLocality: "Varennes-Jarcy",
    postalCode: "91480",
    addressCountry: "FR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 48.6833,
    longitude: 2.5833,
  },
  areaServed: {
    "@type": "GeoCircle",
    geoMidpoint: {
      "@type": "GeoCoordinates",
      latitude: 48.6833,
      longitude: 2.5833,
    },
    geoRadius: "50000",
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ],
    opens: "09:00",
    closes: "20:00",
  },
  priceRange: "€€",
  knowsLanguage: "fr",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Prestations de voyance",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Voyance par téléphone" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Voyance à domicile" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Bains de déblocage" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Rituels de réussite" },
      },
    ],
  },
};

export default function JsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
