import Title from "../ui/title";

const Footer = () => {
  return (
    <div className="w-10/12 mx-auto py-14">
      <div className="flex flex-col xl:flex-row justify-between">
        <Title
          text="Guía sobre la plataforma de control de centros de distribución"
          size="14"
          className="text-left cursor-pointer"
        />
        <Title
          text="Otros centros de distribución"
          size="14"
          className="cursor-pointer"
        />
        <Title text="Accesibilidad" size="14" className="cursor-pointer" />
        <Title text="Ayuda" size="14" className="cursor-pointer" />
        <Title
          text="Información sobre seguros"
          size="14"
          className="cursor-pointer"
        />
      </div>
      <Title
        text="Copyright © 1999-2024 MercadoLibre S.R.L."
        size="14"
        className="text-gray-400 opacity-80"
      />
      <Title
        text="Ramon Falcon 6200, La Matanza, Gran Buenos Aires"
        size="14"
        className="text-gray-400 opacity-80"
      />
    </div>
  );
};

export default Footer;
