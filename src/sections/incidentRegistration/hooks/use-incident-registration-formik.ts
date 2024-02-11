/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { useFormik, FormikHelpers } from "formik";
import {
  useValidationSchema,
} from "./use-validation-schema";
import { supportedFileExtensions } from "../utils";
import useFileExtensionValidator from "./use-file-extesion-validator";
import useFileSizeValidator from "./use-file-size-validator";

interface FormValues {
  informantName: string;
  incidentTitle: string;
  incidentDescription: string;
  incidentDistributionCenter: string;
  evidenceUpload: any;
  incidentDate: string;
  incidentClosingDate?: string;
  incidentObservation?: string;
}

const useIncidentRegistrationForm = (
  onSubmit: (
    values: FormValues,
    formikHelpers: FormikHelpers<FormValues>
  ) => void
) => {
  const [initialValues] = useState<FormValues>({
    informantName: "",
    incidentTitle: "",
    incidentDescription: "",
    incidentDistributionCenter: "",
    evidenceUpload: "",
    incidentDate: "",
  });

  const formik = useFormik({
    initialValues,
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
    onSubmit,
  });

  return formik;
};

export default useIncidentRegistrationForm;
