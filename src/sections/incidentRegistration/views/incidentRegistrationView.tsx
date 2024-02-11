import IncidentRegistrationForm from "../incidentRegistrationForm";

const IncidentRegistrationView = () => {
  return (
    <IncidentRegistrationForm onSubmit={() => console.log("Submitted! ✅")} />
  );
};

export default IncidentRegistrationView;
