import { useContext } from "react";
import classNames from "../../../../../utils/classname";
import { FilterInput } from "./fiter-input";
import { TableContext } from "../../../context";

type FilterInputType = {
  label: string;
  type: "text" | "select" | "number";
  options?: string[];
};

export type FilterType<T extends Object> = {
  [key in keyof T]?: FilterInputType;
};

export type FilterValue<T extends Object> = {
  [K in keyof T]?: any;
};

export const Filter = <T extends Object>({
  className = "",
  filterBy,
}: {
  className?: string;
  filterBy: FilterType<T>;
}) => {
  const { updateFilter } = useContext(TableContext);

  const injectInputs = () => {
    return Object.entries(filterBy).map((value) => {
      const [field, { label, type }] = value;

      if (!label) {
        return null;
      }

      return (
        <FilterInput
          key={field}
          title={label}
          type={type}
          field={field}
          onClick={(value) => updateFilter(field, value)}
        />
      );
    });
  };

  return (
    <>
      {Object.keys(filterBy).length > 0 ? (
        <div className={classNames("filter", className)}>{injectInputs()}</div>
      ) : null}
    </>
  );
};
