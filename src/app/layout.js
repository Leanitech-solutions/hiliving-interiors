import "./globals.css";

export const metadata = {
  title: "HiLiving Interiors | Luxury Home Interiors & Custom Creations in Bangalore",
  description:
    "Award-winning interior design studio in Bangalore. We specialize in bespoke residential interiors, modular kitchens, living room creations, bedroom spaces, and end-to-end execution with a 10-year warranty.",
  keywords: [
    "Interior Designer Bangalore",
    "Luxury Home Interiors",
    "Modular Kitchen Bangalore",
    "HiLiving Interiors",
    "Living Room Interior",
    "Custom Wardrobes",
    "JP Nagar Interior Designers",
    "Lavelle Road Interior Design",
  ],
  openGraph: {
    title: "HiLiving Interiors | Crafted for Life",
    description:
      "Crafting timeless residential interiors in Bangalore since 2010. 15+ years of experience, 900+ projects delivered.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Caveat:wght@400;500;600;700&family=Manrope:wght@300;400;500;600;700;800&family=Montserrat:wght@400;500;600;700;800&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
