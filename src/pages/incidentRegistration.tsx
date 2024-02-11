import Head from "@/components/head";
import IncidentRegistrationView from "@/sections/incidentRegistration/views/incidentRegistrationView";

const IncidentRegistrationPage = () => {
  return (
    <>
      <Head
        title="Registro de incidentes"
        description="Una página para que nuestros centros de distribucion puedan enviar reportes de incidentes a los centros de control."
      />
      <IncidentRegistrationView />
    </>
  );
};

export default IncidentRegistrationPage;
