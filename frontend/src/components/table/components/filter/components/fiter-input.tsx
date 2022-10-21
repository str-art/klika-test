import { debounce } from "../../../../../utils/debounce";

export const FilterInput = (
  props: Partial<HTMLInputElement> & {
    field: string;
    onClick: (value: string | number | undefined) => unknown;
  }
) => {
  const { title, type, field, onClick } = props;

  const handleInput = (
    parseInput: (val: string) => number | string | undefined
  ) => {
    return (e: React.ChangeEvent<HTMLInputElement>) => {
      console.log(e);
      const value = parseInput(e.target.value);

      onClick(value);
    };
  };
  const makeInput = () => {
    switch (type) {
      case "number": {
        const parseInput = (val: string) => {
          const num = parseInt(val);
          if (Number.isNaN(num)) {
            return;
          }
          return num;
        };

        const handler = handleInput(parseInput);
        return (
          <input id={field} type={type} onChange={debounce(handler)}></input>
        );
      }
      default: {
        const parseInput = (value: string) => {
          return value.length === 0 ? undefined : value;
        };

        const handler = handleInput(parseInput);

        return (
          <input id={field} type={type} onChange={debounce(handler)}></input>
        );
      }
    }
  };

  return (
    <form>
      <label htmlFor={field}>{title}</label>
      {makeInput()}
    </form>
  );
};
