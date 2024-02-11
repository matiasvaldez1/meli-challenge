import * as Yup from "yup";
import { omit } from "lodash";
import { ensureArray } from "@/lib/utils";

interface StringParams {
  trimmed?: boolean;
  max?: number | [number, string];
}

export const formErrors = {
  REQUIRED: "Campo requerido.",
  INVALID_DATE: "Fecha no válida.",
  MAX_LENGTH: "Maximo ${max} caracteres.",
  INCORRECT_PERIOD: "Periodo incorrecto.",
};

export const supportedFileExtensions = ["pdf", "png", "jpg"];

export const _yup = {
  ...omit(Yup, ["string"]),
  string: function ({ trimmed = true, max = 255 }: StringParams = {}) {
    let schema = Yup.string();
    if (trimmed) schema = schema.trim();
    if (max) {
      const [maxLen, message] = ensureArray(max);
      schema = schema.max(maxLen, (message as string) ?? formErrors.MAX_LENGTH);
    }

    return schema;
  },
};
