import type { StaticImageData } from "next/image";

import payperchainImg from "../public/images/payperchain.png";
import fly5gImg from "../public/images/fly5g.png";
import portfolioImg from "../public/images/portfolio.jpg";
import carDealershipImg from "../public/images/car-dealership.png";
import bitcoinImg from "../public/images/bitcoin.jpg";
import visitedPlacesImg from "../public/images/visited-places.jpg";
import playingWithGridImg from "../public/images/playing-with-grid.jpg";
import germanTodoImg from "../public/images/german-todo.png";
import imgShopImg from "../public/images/img-shop.jpg";
import hardhatImg from "../public/images/hardhat-img.png";

export type Project = {
  id: string;
  title: string;
  descriptionFull: string;
  tech: string;
  /** ISO date, YYYY-MM-DD */
  date: string;
  link: string;
  image: StaticImageData;
  isFeatured: boolean;
};

const PROJECTS: Project[] = [
  {
    id: "p1",
    title: "payperchain.io",
    descriptionFull:
      "Payperchain.io is a responsive website I developed using Next.js with the app router feature during my employment. The site includes internationalization for both German and English languages, supports light and dark mode, and integrates Resend for email functionality. It is optimized for all devices with a modern, user-friendly design. The project demonstrates advanced Next.js capabilities and ensures a seamless user experience across different platforms.",
    tech: "Next.js, CSS, next-intl, Resend",
    date: "2024-08-12",
    link: "https://payperchain.io",
    image: payperchainImg,
    isFeatured: true,
  },
  {
    id: "p2",
    title: "5G Syner Website",
    descriptionFull: `During my previous working student position at Fraunhofer IAT Institute, I had the opportunity to develop a website called "5G Synergieregion". This website was created using HTML, CSS, JavaScript, PHP, and the WordPress API. The main features of the website included a search functionality, captivating animations, and an image slider. The search functionality allowed users to easily find relevant information within the website. The animations added an engaging and interactive element to enhance the user experience. Additionally, the image slider showcased visually appealing content to capture the attention of visitors. Overall, the project provided valuable experience in utilizing various web technologies to create an informative and visually appealing website.`,
    tech: "HTML, CSS, JavaScript, PHP",
    date: "2022-09-03",
    link: "https://fly5g.de",
    image: fly5gImg,
    isFeatured: true,
  },
  {
    id: "p3",
    title: "Portfolio Website",
    descriptionFull: `The website you are viewing right now. It is built with Next.js and TypeScript and showcases my projects and career milestones.
       Project pages are statically generated at build time, images are optimized with next/image, and the layout is fully responsive with CSS Modules, CSS Grid and Flexbox. It supports light and dark mode, includes a filter to browse projects by date, and has a contact form that sends email through Resend.`,
    tech: "TypeScript, React, Next.js, CSS Modules",
    date: "2023-06-10",
    link: "https://github.com/ace-brown/my-portfolio-website-nextjs",
    image: portfolioImg,
    isFeatured: true,
  },
  {
    id: "p4",
    title: "Car Dealership CA",
    descriptionFull: `I have created a client-side React website named "Car Dealership" that offers a seamless browsing experience for car enthusiasts. The front-end is built using HTML, CSS, and React, ensuring a smooth and interactive user interface. Thanks to the CSS grid and the "autofit" grid property, the website is mobile-responsive, adapting beautifully to various screen sizes. To enhance the navigation experience, the website incorporates a hamburger menu, providing easy access to different sections and features. The mobile optimization ensures that users can effortlessly explore the car inventory, view details, and engage with the website on their mobile devices.`,
    tech: "HTML, CSS, ReactJS",
    date: "2022-03-10",
    link: "https://github.com/ace-brown/ReactJS-car-dealership",
    image: carDealershipImg,
    isFeatured: true,
  },
  {
    id: "p5",
    title: "My first Shape NFT",
    descriptionFull: `In this project, I proudly present my first Non-Fungible Token (NFT) creation. NFTs are unique digital assets that hold distinct properties and cannot be exchanged on a one-to-one basis. Using Python and Solidity, I developed an ERC-721 NFT, showcasing my skills in blockchain development. While the NFT I created does not possess any financial value, it serves as a valuable educational resource. Through this project, I gained insights into the technical intricacies of NFT creation, smart contract development, and the underlying principles of blockchain technology. By experimenting with Python and Solidity, I expanded my knowledge in programming languages commonly used in the blockchain ecosystem. This project allowed me to dive into the exciting realm of NFTs and gain practical experience in their creation.`,
    tech: "Solidity and Python",
    date: "2021-11-03",
    link: "https://github.com/ace-brown/my-first-nft",
    image: bitcoinImg,
    isFeatured: true,
  },
  {
    id: "p6",
    title: "Visited Place App",
    descriptionFull: `The "Visited Places App" is a website built using React, Node.js, and MongoDB. Users can sign up and create an account to manage their visited places. They can add photos, edit details, and delete entries. The app provides a user-friendly interface for easy navigation and offers search and filtering options. It utilizes MongoDB for efficient data storage and retrieval. The Visited Places App is a great tool for travelers to document and share their experiences.`,
    tech: "HTML, CSS, ReactJS, NodeJS",
    date: "2022-07-11",
    link: "https://github.com/ace-brown/Full-stack-visited-places-app/tree/main",
    image: visitedPlacesImg,
    isFeatured: true,
  },
  {
    id: "p7",
    title: "Playing with Grid",
    descriptionFull: ` The focus of this project lies in harnessing the power of CSS Grid and Flexbox. By leveraging these layout techniques, the development process becomes incredibly efficient and flexible.
     With CSS Grid, we achieve a robust and responsive layout system, allowing for complex grid structures and precise control over the placement of elements. This ensures adaptability across different screen sizes.
     By combining HTML and CSS with the strategic use of Grid and Flexbox, this project demonstrates the potential for creating visually appealing and user-friendly web pages.`,
    tech: "HTML, CSS",
    date: "2021-01-15",
    link: "https://github.com/ace-brown/Playing-with-grids",
    image: playingWithGridImg,
    isFeatured: false,
  },
  {
    id: "p8",
    title: "German class App",
    descriptionFull:
      "Introducing a simple frontend page built with HTML, CSS, and React.js. This page centers around my German language studies, where I incorporate daily goal-setting to enhance my learning process. Inspired by this concept, I developed an app that allows users to add goals, which are then listed for reference. Each goal can be easily deleted if desired, providing a streamlined and organized approach to tracking progress. With this app, staying focused and motivated becomes more manageable, fostering an effective learning environment for my German language journey.",
    tech: "HTML, CSS, ReactJS",
    date: "2021-04-05",
    link: "https://github.com/ace-brown/german_class_objectives_app",
    image: germanTodoImg,
    isFeatured: false,
  },
  {
    id: "p9",
    title: "Image Carousel JS",
    descriptionFull:
      "A frontend image carousel built with HTML, CSS, and JavaScript. Users can slide through images with simple navigation controls, and CSS transitions keep the movement between images smooth.",
    tech: "HTML, CSS, JavaScript",
    date: "2021-05-22",
    link: "https://github.com/ace-brown/JavaScript-image-shop",
    image: imgShopImg,
    isFeatured: false,
  },
  {
    id: "p10",
    title: "Blockchain App",
    descriptionFull: `I have developed a decentralized application (DApp) that combines both front-end and back-end technologies. The front-end is built using HTML, CSS, and JS to provide a user-friendly interface. On the back-end, I utilized Solidity and Hardhat to create smart contracts and handle blockchain interactions. With the Blockchain App, users can seamlessly connect their wallets, such as MetaMask, to interact with the blockchain. They have the ability to fund their accounts with coins and withdraw them as needed. It offers a seamless experience for users to navigate the world of decentralized finance (DeFi) and leverage the benefits of blockchain technology.`,
    tech: "CSS, JS, Solidity, Hardhat",
    date: "2022-07-23",
    link: "https://github.com/ace-brown/hardhat-fundme-frontend",
    image: hardhatImg,
    isFeatured: true,
  },
];

function yearOf(project: Project) {
  return new Date(project.date).getUTCFullYear();
}

// newest first
const SORTED_PROJECTS = [...PROJECTS].sort((a, b) =>
  b.date.localeCompare(a.date),
);

export function getFeaturedProjects() {
  return SORTED_PROJECTS.filter((project) => project.isFeatured);
}

export function getAllProjects() {
  return SORTED_PROJECTS;
}

/** Projects from a year, or from one month of that year when `month` is given. */
export function getFilteredProjects({
  year,
  month,
}: {
  year: number;
  month?: number;
}) {
  return SORTED_PROJECTS.filter((project) => {
    const projectDate = new Date(project.date);
    return (
      projectDate.getUTCFullYear() === year &&
      (month === undefined || projectDate.getUTCMonth() === month - 1)
    );
  });
}

export function getProjectById(id: string) {
  return PROJECTS.find((project) => project.id === id);
}

/** The next project in date order, wrapping around to the newest. */
export function getNextProject(id: string) {
  const index = SORTED_PROJECTS.findIndex((project) => project.id === id);
  return SORTED_PROJECTS[(index + 1) % SORTED_PROJECTS.length];
}

/** Every year that has at least one project, newest first. */
export function getProjectYears() {
  return [...new Set(PROJECTS.map(yearOf))].sort((a, b) => b - a);
}

/** Months (1–12) of a year that have at least one project, in calendar order. */
export function getProjectMonths(year: number) {
  return [
    ...new Set(
      getFilteredProjects({ year }).map(
        (project) => new Date(project.date).getUTCMonth() + 1,
      ),
    ),
  ].sort((a, b) => a - b);
}

/** Whole years since the first project, for the "years building" stat. */
export function getYearsBuilding() {
  const firstYear = Math.min(...PROJECTS.map(yearOf));
  return new Date().getUTCFullYear() - firstYear;
}

/** Tech names from a project's comma-separated `tech` string. */
export function getTechList(project: Project) {
  return project.tech
    .split(/,| and /)
    .map((tech) => tech.trim())
    .filter(Boolean);
}
