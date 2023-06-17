const DUMMY_PROJECTS = [
  {
    id: "p1",
    title: "5G Website",
    description: "Networking is no fun if you are an introvert person.",
    descriptionFull: `During my previous working student position at Fraunhofer IAT Institute, I had the opportunity to develop a website called "5G Synergieregion". This website was created using HTML, CSS, JavaScript, PHP, and the WordPress API. The main features of the website included a search functionality, captivating animations, and an image slider. The search functionality allowed users to easily find relevant information within the website. The animations added an engaging and interactive element to enhance the user experience. Additionally, the image slider showcased visually appealing content to capture the attention of visitors. Overall, the project provided valuable experience in utilizing various web technologies to create an informative and visually appealing website.`,
    tech: "HTML, CSS, JavaScript, PHP",
    date: "2022-07-01",
    link: "https://fly5g.de",
    image: "images/5g.png",
    isFeatured: true,
  },
  {
    id: "p2",
    title: "Visited Place App",
    description: "Everyone can learn to code! Yes, everyone!",
    descriptionFull: `The "Visited Places App" is a website built using React, Node.js, and MongoDB. Users can sign up and create an account to manage their visited places. They can add photos, edit details, and delete entries. The app provides a user-friendly interface for easy navigation and offers search and filtering options. It utilizes MongoDB for efficient data storage and retrieval. The Visited Places App is a great tool for travelers to document and share their experiences.`,
    tech: "HTML, CSS, ReactJs, MongoDB, NodeJS",
    date: "2021-02-01",
    link: "https://github.com/ace-brown/Full-stack-visited-places-app/tree/main",
    image: "images/visited-places.jpeg",
    isFeatured: true,
  },
  {
    id: "p3",
    title: "Blockchain App",
    description: "You probably need no help with networking in general.",
    descriptionFull:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
    tech: "HTML, CSS, ReactJs, Solidity, HardHat",
    date: "2022-04-10",
    link: "some link",
    image: "images/front-page-1.JPG",
    isFeatured: true,
  },
  {
    id: "p4",
    title: "Blockchain App",
    description: "You probably need no help with networking in general.",
    descriptionFull:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
    tech: "HTML, CSS, ReactJs, Solidity, HardHat",
    date: "2021-02-10",
    link: "some link",
    image: "images/front-page-2.JPG",
    isFeatured: true,
  },
  {
    id: "p5",
    title: "Visited Place App",
    description: "Everyone can learn to code! Yes, everyone!",
    descriptionFull:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
    tech: "Somestreet 25, 12345 San Somewhereo",
    date: "2021-05-12",
    link: "some link",
    image: "images/visited-places.jpeg",
    isFeatured: true,
  },
  {
    id: "p6",
    title: "5G Website",
    description: "Networking is no fun if you are an introvert person.",
    descriptionFull:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
    tech: "HTML, CSS, NextJs, MongoDB, Git",
    date: "2021-02-30",
    link: "some link",
    image: "images/5g.png",
    isFeatured: true,
  },
  {
    id: "p7",
    title: "5G Website",
    description: "Networking is no fun if you are an introvert person.",
    descriptionFull:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
    tech: "HTML, CSS, NextJs, MongoDB, Git",
    date: "2021-05-30",
    link: "some link",
    image: "images/5g.png",
    isFeatured: true,
  },
  {
    id: "p68",
    title: "5G Website",
    description: "Networking is no fun if you are an introvert person.",
    descriptionFull:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
    tech: "HTML, CSS, NextJs, MongoDB, Git",
    date: "2021-05-30",
    link: "some link",
    image: "images/5g.png",
    isFeatured: true,
  },
  {
    id: "p9",
    title: "5G Website",
    description: "Networking is no fun if you are an introvert person.",
    descriptionFull:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
    tech: "HTML, CSS, NextJs, MongoDB, Git",
    date: "2021-05-30",
    link: "some link",
    image: "images/5g.png",
    isFeatured: false,
  },
  {
    id: "p10",
    title: "5G Website",
    description: "Networking is no fun if you are an introvert person.",
    descriptionFull:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
    tech: "HTML, CSS, NextJs, MongoDB, Git",
    date: "2021-05-30",
    link: "some link",
    image: "images/5g.png",
    isFeatured: false,
  },
  {
    id: "p11",
    title: "5G Website",
    description: "Networking is no fun if you are an introvert person.",
    descriptionFull:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
    tech: "HTML, CSS, NextJs, MongoDB, Git",
    date: "2021-02-03",
    link: "some link",
    image: "images/5g.png",
    isFeatured: false,
  },
  {
    id: "p12",
    title: "5G Website",
    description: "Networking is no fun if you are an introvert person.",
    tech: "HTML, CSS, NextJs, MongoDB, Git",
    date: "2021-05-30",
    link: "some link",
    image: "images/5g.png",
    isFeatured: false,
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
