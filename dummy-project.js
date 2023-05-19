const DUMMY_PROJECTS = [
  {
    id: "p1",
    title: "Full Stack Visited Place App",
    description:
      "Everyone can learn to code! Yes, everyone! In this live event, we are going to go through all the key basics and get you started with programming as well.",
    tech: "Somestreet 25, 12345 San Somewhereo",
    date: "2021-05-12",
    link: "some link",
    image: "images/visited-places.jpeg",
    isFeatured: false,
  },
  {
    id: "p2",
    title: "5G Synergieregion",
    description:
      "We know: Networking is no fun if you are an introvert person. That's why we came up with this event - it'll be so much easier. Promised!",
    tech: "New Wall Street 5, 98765 New Work",
    date: "2021-05-30",
    link: "some link",
    image: "images/5g.png",
    isFeatured: true,
  },
  {
    id: "p3",
    title: "HardHat Blockchain App",
    description:
      "You probably need no help with networking in general. But focusing your energy correctly - that is something where most people can improve.",
    tech: "My Street 12, 10115 Broke City",
    date: "2022-04-10",
    link: "some link",
    image: "images/front-page-1.jpg",
    isFeatured: true,
  },
  {
    id: "p4",
    title: "HardHat Blockchain App",
    description:
      "You probably need no help with networking in general. But focusing your energy correctly - that is something where most people can improve.",
    tech: "My Street 12, 10115 Broke City",
    date: "2022-04-10",
    link: "some link",
    image: "images/front-page-2",
    isFeatured: true,
  },
  {
    id: "p5",
    title: "Full Stack Visited Place App",
    description:
      "Everyone can learn to code! Yes, everyone! In this live event, we are going to go through all the key basics and get you started with programming as well.",
    tech: "Somestreet 25, 12345 San Somewhereo",
    date: "2021-05-12",
    link: "some link",
    image: "images/visited-places.jpeg",
    isFeatured: false,
  },
  {
    id: "p6",
    title: "5G Synergieregion",
    description:
      "We know: Networking is no fun if you are an introvert person. That's why we came up with this event - it'll be so much easier. Promised!",
    tech: "New Wall Street 5, 98765 New Work",
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
    const projectDate = new Date(project).date;
    return (
      projectDate.getFullYear() === year && projectDate.getMonth() === month - 1
    );
  });

  return filteredProject;
}

export function getProjectById(id) {
  return DUMMY_PROJECTS.find((project) => project.id === id);
}
