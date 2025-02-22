export const menuList: Array<any> = [
  {
    label: "Servicios",
    submenu: [
      {
        label: "Estudio de Grabación",
        description: "Grabación, Mezcla y Masterización",
        route: "/records"
      }, {
        label: "Back&Amp",
        description: "Backline y Amplificación para eventos",
        route: "/back-amp"
      }, {
        label: "Sala de Ensayo",
        description: "Accede a nuestros planes con tu banda",
        route: "/sala-de-ensayo"
      }
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