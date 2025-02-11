export const menuItems = [
    { name: "HOME", href: "/" },
    { name: "ABOUT", href: "/about" },
    { name: "PARTNERS", href: "/partners" },
    { name: "BOOK A STAND", href: "/book" },
    { name: "CONTACT US", href: "/contact" },
    { name: "FAQS", href: "/faqs" },
    { name: "MEDIA GALLERY", href: "/media" },
  ] as const;
  
  export type MenuItem = (typeof menuItems)[number];