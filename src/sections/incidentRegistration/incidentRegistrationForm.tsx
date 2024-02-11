/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/rules-of-hooks */
import AutocompleteInput from "@/components/autocomplete-input";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useFormik } from "formik";
import {
  supportedFileExtensions,
  useFileExtensionValidator,
  useFileSizeValidator,
  useValidationSchema,
} from "./hooks";
import _ from "lodash";
import { useToast } from "@/components/ui/use-toast";
import { ToastAction } from "@radix-ui/react-toast";
import { useNavigate } from "react-router-dom";
import { PATH_NAMES } from "@/router/paths";

const IncidentRegistrationForm = ({ onSubmit }: { onSubmit: () => void }) => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const f = useFormik({
    initialValues: {
      informantName: "",
      incidentTitle: "",
      incidentDescription: "",
      incidentDistributionCenter: "",
      evidenceUpload: "",
      incidentDate: "",
      incidentClosingDate: "",
      incidentObservation: "",
    },
    validationSchema: useValidationSchema((yup, E) => ({
      informantName: yup.string().required(E.REQUIRED),
      incidentTitle: yup.string().required(E.REQUIRED),
      incidentDescription: yup.string().required(E.REQUIRED),
      incidentDistributionCenter: yup.string().required(E.REQUIRED),
      evidenceUpload: yup
        .mixed()
        .test(
          "supported",
          `Tipo de archivo no soportado, utilizar extensiones ${supportedFileExtensions.join(
            ", "
          )}.`,
          (evidenceUpload) => {
            return (
              !evidenceUpload ||
              useFileExtensionValidator(evidenceUpload, supportedFileExtensions)
            );
          }
        )
        .test(
          "dimensions",
          `Tamaño máximo excedido. Hasta 10MB.`,
          (evidenceUpload: any) => {
            return !evidenceUpload || useFileSizeValidator(evidenceUpload, 10);
          }
        ),
      incidentDate: yup.string().required(E.REQUIRED),
      incidentClosingDate: yup.string(),
      incidentObservation: yup.string(),
    })),
    onSubmit: onSubmit,
  });

  const handleSendRegister = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    const validateForm = await f.validateForm();
    if (!_.isEmpty(validateForm)) {
      f.setTouched(validateForm as any);
      return;
    }
    await f.submitForm();
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
          onChange={f.handleChange}
          onBlur={f.handleBlur}
          value={f.values.informantName}
          name="informantName"
          placeholder="John Doe"
          className="mt-2"
        />
        {f.errors.informantName && f.touched.informantName && (
          <div className="text-red-600 font-semibold mt-2">
            {f.errors.informantName}
          </div>
        )}
      </Label>
      <Label className="m-4">
        <p className="text-black font-semibold text-base">
          Título del Incidente
        </p>
        <Input
          onChange={f.handleChange}
          onBlur={f.handleBlur}
          value={f.values.incidentTitle}
          name="incidentTitle"
          placeholder="Titulo del incidente"
          className="mt-2"
        />
        {f.errors.incidentTitle && f.touched.incidentTitle && (
          <div className="text-red-600 font-semibold mt-2">
            {f.errors.incidentTitle}
          </div>
        )}
      </Label>
      <Label className="m-4">
        <p className="text-black font-semibold text-base">
          Descripción del Incidente
        </p>
        <Textarea
          onChange={f.handleChange}
          onBlur={f.handleBlur}
          value={f.values.incidentDescription}
          name="incidentDescription"
          placeholder="El incidente comenzó cuando..."
          className="mt-2"
        />
        {f.errors.incidentDescription && f.touched.incidentDescription && (
          <div className="text-red-600 font-semibold mt-2">
            {f.errors.incidentDescription}
          </div>
        )}
      </Label>
      <Label className="m-4">
        <p className="text-black font-semibold text-base">
          Centro de Distribución del Incidente
        </p>
        <AutocompleteInput
          onChange={f.handleChange}
          onBlur={f.handleBlur}
          value={f.values.incidentDistributionCenter}
          name="incidentDistributionCenter"
          placeholder="Av Rivadavia 2000..."
          onSetLocation={(val) =>
            f.setFieldValue("incidentDistributionCenter", val)
          }
        />
        {f.errors.incidentDistributionCenter &&
          f.touched.incidentDistributionCenter && (
            <div className="text-red-600 font-semibold mt-2">
              {f.errors.incidentDistributionCenter}
            </div>
          )}
      </Label>
      <Label className="m-4">
        <p className="text-black font-semibold text-base">
          Carga de Evidencias
        </p>
        <Input
          onChange={(event) => {
            f.setFieldValue("evidenceUpload", event.target.files?.[0]);
          }}
          onBlur={f.handleBlur}
          value={(f.values.evidenceUpload as any)?.fileName}
          name="evidenceUpload"
          className="mt-2"
          type="file"
        />
        {f.errors.evidenceUpload && f.touched.evidenceUpload && (
          <div className="text-red-600 font-semibold mt-2">
            {f.errors.evidenceUpload}
          </div>
        )}
      </Label>
      <Label className="m-4">
        <p className="text-black font-semibold text-base">
          Fecha del Incidente
        </p>
        <Input
          onChange={f.handleChange}
          onBlur={f.handleBlur}
          value={f.values.incidentDate}
          name="incidentDate"
          className="mt-2"
          type="datetime-local"
        />
        {f.errors.incidentDate && f.touched.incidentDate && (
          <div className="text-red-600 font-semibold mt-2">
            {f.errors.incidentDate}
          </div>
        )}
      </Label>
      <Label className="m-4">
        <p className="text-black font-semibold text-base">
          Fecha de cierre del incidente
        </p>
        <Input
          onChange={f.handleChange}
          onBlur={f.handleBlur}
          value={f.values.incidentClosingDate}
          name="incidentClosingDate"
          className="mt-2"
          type="datetime-local"
        />
        {f.errors.incidentClosingDate && f.touched.incidentClosingDate && (
          <div className="text-red-600 font-semibold mt-2">
            {f.errors.incidentClosingDate}
          </div>
        )}
      </Label>
      <Label className="m-4">
        <p className="text-black font-semibold text-base">
          Observación del incidente
        </p>
        <Textarea
          onChange={f.handleChange}
          onBlur={f.handleBlur}
          value={f.values.incidentObservation}
          name="incidentObservation"
          placeholder="El incidente se podria haber evitado con..."
          className="mt-2"
        />
        {f.errors.incidentObservation && f.touched.incidentObservation && (
          <div className="text-red-600 font-semibold mt-2">
            {f.errors.incidentObservation}
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
