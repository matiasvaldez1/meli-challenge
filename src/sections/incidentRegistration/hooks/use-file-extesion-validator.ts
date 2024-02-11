/* eslint-disable @typescript-eslint/no-explicit-any */
const useFileExtensionValidator = (file: any, allowedExtensions: string[]) => {
  if (!file) return false;
  return allowedExtensions.includes(file.name.toLowerCase().split(".").pop()!);
};

export default useFileExtensionValidator;
