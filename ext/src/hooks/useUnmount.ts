import { useEffect } from "react";

export const useUnmount = (func: (...args: any[]) => void) => {
  useEffect(() => () => func(), []);
};
