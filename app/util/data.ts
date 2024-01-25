type Anchor = {
  name: string;
  href: string;
};

export const navbarAnchors: Anchor[] = [
  {
    name: "home",
    href: "/",
  },

  {
    name: "blog",
    href: "/blog",
  },
  {
    name: "library",
    href: "/library",
  },
] as const;

export const currentYear = new Date().getFullYear();
