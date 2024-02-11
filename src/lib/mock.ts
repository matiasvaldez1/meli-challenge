export const mockDistributionControlCenterCards = [
  {
    title: "Reporte de incidentes",
    description:
      "Llená el formulario y reportá incidentes en el centro de distribucion.",
    iconPath: "/incidents.svg",
    // Asumiendo que el value de la propiedad redirectPath vendría del backend, no hay necesidad de
    // usar la variable PATH_NAMES
    redirectPath: "/incident_registration",
  },
  {
    title: "Estadísticas",
    description:
      "Medí las metricas de tu centro de distribucion y comparalas con otros.",
    iconPath: "/statistics.svg",
  },
  {
    title: "Proovedores",
    description:
      "Encontrá toda la información relevante sobre los proovedores de nuestros centros acá.",
    iconPath: "/suppliers.svg",
  },
  {
    title: "Productos",
    description:
      "Toda la información relevante a los productos que llegan y salen de tu centro.",
    iconPath: "/products.svg",
  },
  {
    title: "Envíos",
    description:
      "Seguí todos los envíos de tu centro de distribucion en tiempo real",
    iconPath: "/shipments.svg",
  },
];
