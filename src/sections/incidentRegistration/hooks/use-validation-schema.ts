/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { _yup, formErrors } from "@/sections/incidentRegistration/utils";
import { useMemo } from "react";
import * as Yup from "yup";

export function useValidationErrors() {
  return formErrors;
}

export function useValidationSchema(
  schemaCreator: (
    yup: typeof Yup,
    errors: typeof formErrors
  ) => Record<string, Yup.Schema<any>>,
  deps: any[] = []
) {
  const errors = useValidationErrors();
  return useMemo(() => Yup.object(schemaCreator(_yup, errors)), deps);
}
