/* eslint-disable @typescript-eslint/no-explicit-any */
const useFileSizeValidator = (file: any, maxSizeInMB: number) => {
  if (!file) return false;
  const maxSizeInBytes = maxSizeInMB * 1024 * 1024;
  return file.size <= maxSizeInBytes;
};

export default useFileSizeValidator;
