import { Metadata } from "next";

export const bookWiseConfig = {
  title: {
    default: "Book Wise | Ordering & Delivery",
    template: `%s | Book Wise`,
  },
  url: "https://book-wise.vercel.app",
  description:
    "BookWise is a smart and intuitive University Library Management System designed to streamline the way academic institutions organize, access, and manage their digital and physical collections. Built for efficiency and scalability, BookWise empowers students, faculty, and librarians with seamless book tracking, real-time availability, and easy borrowing processes—all through a modern, user-friendly interface. Whether you're reserving a textbook, managing inventory, or exploring the latest academic resources, BookWise delivers a powerful, organized, and accessible library experience tailored for the modern university.",
  locale: "en_US", // pt_BR, es_ES, fr_FR, de_DE, it_IT, ja_JP, ko_KR, zh_CN, zh_TW
  icons: {
    icon: [
      {
        url: "../app/favicon.ico",
        href: "../app/favicon.ico",
      },
    ],
  },
};

export const bookWiseMetadata: Metadata = {
  metadataBase: new URL(bookWiseConfig.url),
  title: {
    default: bookWiseConfig.title.default,
    template: bookWiseConfig.title.template,
  },
  description: bookWiseConfig.description,
  openGraph: {
    title: `${bookWiseConfig.title.default}`,
    description: bookWiseConfig.description,
    url: bookWiseConfig.url,
    siteName: `${bookWiseConfig.title.default}`,
    locale: bookWiseConfig.locale,
    type: "website",
  },
};
