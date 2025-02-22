export const menuList: Array<any> = [
  {
    label: "Productos",
    submenu: [
      {
        label: "Streamby",
        description: "Almacena y administra archivos para tus proyectos de software",
        href: "https://streamby.vercel.app"
      },
    ]
  }, {
    label: "Aplicaciones",
    submenu: [
      {
        label: "Nhexa TV",
        description: "Streaming",
        href: "#"
      }, {
        label: "Nhexa Play",
        description: "Audio y música",
        href: "#"
      }, {
        label: "Nhexa Merch",
        description: "E-commerce",
        href: "#"
      }
    ]
  }, {
    label: "Soporte técnico",
    href: "#",
  }, {
    label: "Contacto",
    route: "/contact",
  }
];