export const SITE = {
  name: "Kazem Abdi Dehnoei",
  shortName: "Kazem Abdi",
  url: "https://my-portfolio-website-nextjs.vercel.app",
  description:
    "Portfolio of Kazem Abdi Dehnoei, a web developer in Stuttgart, Germany, building responsive web apps with React, Next.js and Node.js.",
  email: "kazem_abdi@yahoo.com",
  github: "https://github.com/ace-brown",
  linkedin: "https://www.linkedin.com/in/kazem-a-3373b1a8/",
  ogImage: "/images/kazem-abdi.jpg",
};

// Project dates are ISO strings (YYYY-MM-DD), so format in UTC to avoid
// showing the previous day in timezones behind UTC.
export function formatDate(isoDate: string) {
  return new Date(isoDate).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
}

export function monthName(month: number) {
  return new Date(Date.UTC(2000, month - 1, 1)).toLocaleDateString("en-US", {
    month: "long",
    timeZone: "UTC",
  });
}
