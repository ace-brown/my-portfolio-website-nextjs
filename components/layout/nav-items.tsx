type NavItem = {
  title: string;
  path: string;
};

export const NAV_ITEMS: NavItem[] = [
  { title: "Home", path: "/" },
  { title: "Projects", path: "/projects" },
  { title: "About", path: "/about" },
  { title: "Contact", path: "/contact" },
];

export function isActivePath(currentPath: string, itemPath: string) {
  return itemPath === "/"
    ? currentPath === "/"
    : currentPath.startsWith(itemPath);
}
