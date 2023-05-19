import React from "react";

import { getFeaturedProject } from "../dummy-project";

export default function HomePage() {
  const featuredProjects = getFeaturedProject();

  return (
    <div>
      <ul>
        {featuredProjects.map((project) => (
          <li>{project}</li>
        ))}
      </ul>
    </div>
  );
}
