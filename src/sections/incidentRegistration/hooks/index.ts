/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import * as Yup from "yup";
import { omit } from "lodash";
import { useMemo } from "react";
import { ensureArray } from "@/lib/utils";

export const formErrors = {
  REQUIRED: "Campo requerido.",
  INVALID_DATE: "Fecha no válida.",
  MAX_LENGTH: "Maximo ${max} caracteres.",
  INCORRECT_PERIOD: "Periodo incorrecto.",
};

export const supportedFileExtensions = ['pdf', 'png', 'jpg'];

const _yup = {
  ...omit(Yup, ["string"]),
  string: function ({ trimmed = true, max = 255 }: StringParams = {}) {
    let schema = Yup.string();
    if (trimmed) schema = schema.trim();
    if (max) {
      const [maxLen, message] = ensureArray(max);
      schema = schema.max(
        maxLen,
        (message as string) ??
        formErrors.MAX_LENGTH
      );
    }

    return schema;
  },
};

interface StringParams {
  trimmed?: boolean;
  max?: number | [number, string];
}

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

export const useFileExtensionValidator = (
  file: any,
  allowedExtensions: string[]
) => {
  if(!file) return false
  return allowedExtensions.includes(file.name.toLowerCase().split(".").pop()!);
};

export const useFileSizeValidator = (file: any, maxSizeInMB: number) => {
  if (!file) return false;
  const maxSizeInBytes = maxSizeInMB * 1024 * 1024;
  return file.size <= maxSizeInBytes;
};


