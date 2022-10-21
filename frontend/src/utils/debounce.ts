export const debounce = <T>(func: (...args: T[]) => unknown) => {
  let timer: ReturnType<typeof setTimeout> | null;

  return function (...args: T[]) {
    if (timer !== null) {
      clearTimeout(timer);
    }

    timer = setTimeout(() => {
      timer = null;

      console.log(args);

      func(...args);
    }, 500);
  };
};
