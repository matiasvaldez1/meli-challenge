/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/rules-of-hooks */
import AutocompleteInput from "@/components/autocomplete-input";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import _ from "lodash";
import { useToast } from "@/hooks/use-toast";
import { ToastAction } from "@radix-ui/react-toast";
import { useNavigate } from "react-router-dom";
import { PATH_NAMES } from "@/router/paths";
import useIncidentRegistrationForm from "./hooks/use-incident-registration-formik";

const IncidentRegistrationForm = ({ onSubmit }: { onSubmit: () => void }) => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const form = useIncidentRegistrationForm(onSubmit);

  const handleSendRegister = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    const validateForm = await form.validateForm();
    if (!_.isEmpty(validateForm)) {
      form.setTouched(validateForm as any);
      return;
    }
    await form.submitForm();
    toast({
      title: "Registro enviado.",
      description: "El registro ha sido enviado exitosamente.",
      variant: "default",
      action: (
        <ToastAction
          onClick={() => navigate(PATH_NAMES.home)}
          altText="Volver al inicio"
        >
          Volver al inicio
        </ToastAction>
      ),
    });
  };

  return (
    <form className="md:w-6/12 mx-auto py-10 flex flex-col gap-6 overflow-x-hidden">
      <Label className="m-4">
        <p className="text-black font-semibold text-base">
          Nombre del Informante
        </p>
        <Input
          onChange={form.handleChange}
          onBlur={form.handleBlur}
          value={form.values.informantName}
          name="informantName"
          placeholder="John Doe"
          className="mt-2"
        />
        {form.errors.informantName && form.touched.informantName && (
          <div className="text-red-600 font-semibold mt-2">
            {form.errors.informantName}
          </div>
        )}
      </Label>
      <Label className="m-4">
        <p className="text-black font-semibold text-base">
          Título del Incidente
        </p>
        <Input
          onChange={form.handleChange}
          onBlur={form.handleBlur}
          value={form.values.incidentTitle}
          name="incidentTitle"
          placeholder="Titulo del incidente"
          className="mt-2"
        />
        {form.errors.incidentTitle && form.touched.incidentTitle && (
          <div className="text-red-600 font-semibold mt-2">
            {form.errors.incidentTitle}
          </div>
        )}
      </Label>
      <Label className="m-4">
        <p className="text-black font-semibold text-base">
          Descripción del Incidente
        </p>
        <Textarea
          onChange={form.handleChange}
          onBlur={form.handleBlur}
          value={form.values.incidentDescription}
          name="incidentDescription"
          placeholder="El incidente comenzó cuando..."
          className="mt-2"
        />
        {form.errors.incidentDescription && form.touched.incidentDescription && (
          <div className="text-red-600 font-semibold mt-2">
            {form.errors.incidentDescription}
          </div>
        )}
      </Label>
      <Label className="m-4">
        <p className="text-black font-semibold text-base">
          Centro de Distribución del Incidente
        </p>
        <AutocompleteInput
          onChange={form.handleChange}
          onBlur={form.handleBlur}
          value={form.values.incidentDistributionCenter}
          name="incidentDistributionCenter"
          placeholder="Av Rivadavia 2000..."
          onSetLocation={(val) =>
            form.setFieldValue("incidentDistributionCenter", val)
          }
        />
        {form.errors.incidentDistributionCenter &&
          form.touched.incidentDistributionCenter && (
            <div className="text-red-600 font-semibold mt-2">
              {form.errors.incidentDistributionCenter}
            </div>
          )}
      </Label>
      <Label className="m-4">
        <p className="text-black font-semibold text-base">
          Carga de Evidencias
        </p>
        <Input
          onChange={(event) => {
            form.setFieldValue("evidenceUpload", event.target.files?.[0]);
          }}
          onBlur={form.handleBlur}
          value={(form.values.evidenceUpload as any)?.fileName}
          name="evidenceUpload"
          className="mt-2"
          type="file"
        />
        {form.errors.evidenceUpload && form.touched.evidenceUpload && (
          <div className="text-red-600 font-semibold mt-2">
            {form.errors.evidenceUpload as any}
          </div>
        )}
      </Label>
      <Label className="m-4">
        <p className="text-black font-semibold text-base">
          Fecha del Incidente
        </p>
        <Input
          onChange={form.handleChange}
          onBlur={form.handleBlur}
          value={form.values.incidentDate}
          name="incidentDate"
          className="mt-2"
          type="date"
        />
        {form.errors.incidentDate && form.touched.incidentDate && (
          <div className="text-red-600 font-semibold mt-2">
            {form.errors.incidentDate}
          </div>
        )}
      </Label>
      <Label className="m-4">
        <p className="text-black font-semibold text-base">
          Fecha de cierre del incidente
        </p>
        <Input
          onChange={form.handleChange}
          onBlur={form.handleBlur}
          value={form.values.incidentClosingDate}
          name="incidentClosingDate"
          className="mt-2"
          type="date"
        />
        {form.errors.incidentClosingDate && form.touched.incidentClosingDate && (
          <div className="text-red-600 font-semibold mt-2">
            {form.errors.incidentClosingDate}
          </div>
        )}
      </Label>
      <Label className="m-4">
        <p className="text-black font-semibold text-base">
          Observación del incidente
        </p>
        <Textarea
          onChange={form.handleChange}
          onBlur={form.handleBlur}
          value={form.values.incidentObservation}
          name="incidentObservation"
          placeholder="El incidente se podria haber evitado con..."
          className="mt-2"
        />
        {form.errors.incidentObservation && form.touched.incidentObservation && (
          <div className="text-red-600 font-semibold mt-2">
            {form.errors.incidentObservation}
          </div>
        )}
      </Label>
      <div className="flex justify-end p-12">
        <Button
          size={"lg"}
          type="submit"
          className="bg-brand-primary font-bold text-base"
          onClick={handleSendRegister}
        >
          Confirmar registro
        </Button>
      </div>
    </form>
  );
};

export default IncidentRegistrationForm;
