export default function classNames(
  ...args: ({ [key: string]: boolean } | string)[]
): string {
  return args
    .map((value) => {
      switch (typeof value) {
        case "string": {
          return value;
        }
        case "object": {
          const args = Object.entries(value)
            .filter(([, __value]) => __value)
            .map(([key]) => key);
          return classNames(...args);
        }
        default: {
          return null;
        }
      }
    })
    .filter((className) => className !== null)
    .join(" ");
}
