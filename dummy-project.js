const DUMMY_PROJECTS = [
  {
    id: "p1",
    title: "Visited Place App",
    description: "Everyone can learn to code! Yes, everyone!",
    descriptionFull:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
    tech: "HTML, CSS, ReactJs, MongoDB, Git",
    date: "2021-02-12",
    link: "some link",
    image: "images/visited-places.jpeg",
    isFeatured: false,
  },
  {
    id: "p2",
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
    isFeatured: false,
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
    isFeatured: true,
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
    isFeatured: true,
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
    isFeatured: true,
  },
  {
    id: "p12",
    title: "5G Website",
    description: "Networking is no fun if you are an introvert person.",
    tech: "HTML, CSS, NextJs, MongoDB, Git",
    date: "2021-05-30",
    link: "some link",
    image: "images/5g.png",
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
