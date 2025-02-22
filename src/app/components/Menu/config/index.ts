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
        label: "Nhexa Vision",
        description: "Streaming",
        route: "#"
      }, {
        label: "Nhexa Pod",
        description: "Audio y música",
        route: "#"
      }, {
        label: "Nhexa Merch",
        description: "E-commerce",
        route: "#"
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