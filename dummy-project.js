const DUMMY_PROJECTS = [
  {
    id: "p1",
    title: "payperchain.io",
    descriptionFull: 'Payperchain.io is a responsive website I developed using Next.js with the app router feature during my employment. The site includes internationalization for both German and English languages, supports light and dark mode, and integrates Resend for email functionality. It is optimized for all devices with a modern, user-friendly design. The project demonstrates advanced Next.js capabilities and ensures a seamless user experience across different platforms.',
    tech: "Next.js, CSS, next-intl, Resend",
    date: "August 12, 2024",
    link: "https://payperchain.io",
    image: "images/payperchain.png",
    isFeatured: true,
  },
  {
    id: "p2",
    title: "5G Syner Website",
    descriptionFull: `During my previous working student position at Fraunhofer IAT Institute, I had the opportunity to develop a website called "5G Synergieregion". This website was created using HTML, CSS, JavaScript, PHP, and the WordPress API. The main features of the website included a search functionality, captivating animations, and an image slider. The search functionality allowed users to easily find relevant information within the website. The animations added an engaging and interactive element to enhance the user experience. Additionally, the image slider showcased visually appealing content to capture the attention of visitors. Overall, the project provided valuable experience in utilizing various web technologies to create an informative and visually appealing website.`,
    tech: "HTML, CSS, JavaScript, PHP",
    date: "September 03, 2022",
    link: "https://fly5g.de",
    image: "images/fly5g.png",
    isFeatured: true,
  },
  {
    id: "p3",
    title: "Portfolio Website",
    descriptionFull: `Welcome to the current website you are viewing! This platform serves as a showcase for my projects and career accomplishments. Built upon Next.js, this website combines performance, interactivity, and modern web development practices.
       Here, you will find a curated collection of my projects, highlighting my skills and expertise in various areas. From web development to data analysis and beyond, each project represents a milestone in my professional journey.
       Next.js, a powerful React framework, empowers this website with features like server-side rendering, static site generation, and seamless client-side transitions. This ensures fast page loads, optimal user experience, and efficient navigation.`,
    tech: "HTML, CSS, ReactJS, NextJS",
    date: "June 10, 2023",
    link: "https://github.com/ace-brown/my-portfolio-website-nextjs",
    image: "images/portfolio.jpg",
    isFeatured: true,
  },

  {
    id: "p4",
    title: "Car Dealership CA",
    descriptionFull: `I have created a client-side React website named "Car Dealership" that offers a seamless browsing experience for car enthusiasts. The front-end is built using HTML, CSS, and React, ensuring a smooth and interactive user interface. Thanks to the CSS grid and the "autofit" grid property, the website is mobile-responsive, adapting beautifully to various screen sizes. To enhance the navigation experience, the website incorporates a hamburger menu, providing easy access to different sections and features. The mobile optimization ensures that users can effortlessly explore the car inventory, view details, and engage with the website on their mobile devices.`,
    tech: "HTML, CSS, ReactJS",
    date: "March 10, 2022",
    link: "https://github.com/ace-brown/ReactJS-car-dealership",
    image: "images/car-dealership.png",
    isFeatured: true,
  },
  {
    id: "p5",
    title: "My first Shape NFT",
    description: "Everyone can learn to code! Yes, everyone!",
    descriptionFull: `In this project, I proudly present my first Non-Fungible Token (NFT) creation. NFTs are unique digital assets that hold distinct properties and cannot be exchanged on a one-to-one basis. Using Python and Solidity, I developed an ERC20-based NFT, showcasing my skills in blockchain development. While the NFT I created does not possess any financial value, it serves as a valuable educational resource. Through this project, I gained insights into the technical intricacies of NFT creation, smart contract development, and the underlying principles of blockchain technology. By experimenting with Python and Solidity, I expanded my knowledge in programming languages commonly used in the blockchain ecosystem. This project allowed me to dive into the exciting realm of NFTs and gain practical experience in their creation.`,
    tech: "Solidity and Python",
    date: "November 03, 2021",
    link: "https://github.com/ace-brown/my-first-nft",
    image: "images/bitcoin.jpg",
    isFeatured: true,
  },

  {
    id: "p6",
    title: "Visited Place App",
    description: "Everyone can learn to code! Yes, everyone!",
    descriptionFull: `The "Visited Places App" is a website built using React, Node.js, and MongoDB. Users can sign up and create an account to manage their visited places. They can add photos, edit details, and delete entries. The app provides a user-friendly interface for easy navigation and offers search and filtering options. It utilizes MongoDB for efficient data storage and retrieval. The Visited Places App is a great tool for travelers to document and share their experiences.`,
    tech: "HTML, CSS, ReactJS, NodeJS",
    date: "July 11, 2022",
    link: "https://github.com/ace-brown/Full-stack-visited-places-app/tree/main",
    image: "images/visited-places.jpg",
    isFeatured: true,
  },
  {
    id: "p7",
    title: "Playing with Grid",
    descriptionFull: ` The focus of this project lies in harnessing the power of CSS Grid and Flexbox. By leveraging these layout techniques, the development process becomes incredibly efficient and flexible.
     With CSS Grid, we achieve a robust and responsive layout system, allowing for complex grid structures and precise control over the placement of elements. This ensures adaptability across different screen sizes.
     By combining HTML and CSS with the strategic use of Grid and Flexbox, this project demonstrates the potential for creating visually appealing and user-friendly web pages. Experience the power of modern front-end development techniques, and unlock the ability to craft stunning layouts with ease.`,
    tech: "HTML, CSS",
    date: "January 15, 2021",
    link: "https://github.com/ace-brown/Playing-with-grids",
    image: "images/playing-with-grid.jpg",
    isFeatured: false,
  },

  {
    id: "p8",
    title: "German class App",
    descriptionFull:
      "Introducing a simple frontend page built with HTML, CSS, and React.js. This page centers around my German language studies, where I incorporate daily goal-setting to enhance my learning process. Inspired by this concept, I developed an app that allows users to add goals, which are then listed for reference. Each goal can be easily deleted if desired, providing a streamlined and organized approach to tracking progress. With this app, staying focused and motivated becomes more manageable, fostering an effective learning environment for my German language journey.",
    tech: "HTML, CSS, ReactJS",
    date: "April 05, 2021",
    link: "https://github.com/ace-brown/german_class_objectives_app",
    image: "images/german-todo.png",
    isFeatured: false,
  },
  {
    id: "p9",
    title: "Image Carousel JS",
    descriptionFull:
      "Presenting a simple frontend image carousel created using HTML, CSS, and JavaScript. This interactive component allows seamless sliding of images, enhancing the visual experience for users. Through the use of intuitive navigation controls, users can effortlessly navigate through the carousel and view different images. The combination of HTML, CSS, and JavaScript powers the smooth transitions and dynamic functionality of the image carousel. Experience the beauty of a captivating image showcase with this user-friendly and engaging frontend component. Elevate your website's visual appeal and captivate your audience with the simplicity and elegance of this image carousel.",
    tech: "HTML, CSS, JavaScript",
    date: "May 22, 2021",
    link: "https://github.com/ace-brown/JavaScript-image-shop",
    image: "images/img-shop.jpg",
    isFeatured: false,
  },
  {
    id: "p10",
    title: "Blockchain App",
    descriptionFull: `I have developed a decentralized application (DApp) that combines both front-end and back-end technologies. The front-end is built using HTML, CSS, and JS to provide a user-friendly interface. On the back-end, I utilized Solidity and Hardhat to create smart contracts and handle blockchain interactions.With the Blockchain App, users can seamlessly connect their wallets, such as MetaMask, to interact with the blockchain. They have the ability to fund their accounts with coins and withdraw them as needed. It offers a seamless experience for users to navigate the world of decentralized finance (DeFi) and leverage the benefits of blockchain technology.`,
    tech: "CSS, JS, Solidity, Hardhat",
    date: "July 23, 2022",
    link: "https://github.com/ace-brown/hardhat-fundme-frontend",
    image: "images/hardhat-img.png",
    isFeatured: true,
  },
];

export function getFeaturedProject() {
  return DUMMY_PROJECTS.filter((project) => project.isFeatured);
}

export function getAllProject() {
  return DUMMY_PROJECTS;
}

export function getFilteredProject(dateFilter) {
  const { year, month } = dateFilter;

  let filteredProject = DUMMY_PROJECTS.filter((project) => {
    const projectDate = new Date(project.date);
    return (
      projectDate.getFullYear() === year && projectDate.getMonth() === month - 1
    );
  });

  return filteredProject;
}

export function getProjectById(id) {
  return DUMMY_PROJECTS.find((project) => project.id === id);
}
