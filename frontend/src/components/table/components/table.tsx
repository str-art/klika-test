import classNames from "../../../utils/classname";
import { Column, LabelType } from "./column/column";

export type Row = {
  [key: string]: string | number | boolean;
};

export type TableProps<T extends Row> = {
  className?: string;
  rows: T[];
  labels?: LabelType<T>[];
  orderBy?: Array<keyof T>;
};

export const Table = <T extends Row>({
  className = "",
  rows,
  labels = [],
  orderBy = [],
}: TableProps<T>) => {
  return (
    <div className={classNames("table", className)}>
      {labels.map(({ value, text }, index) => (
        <Column<T>
          key={index}
          useOrder={orderBy.includes(String(value))}
          rows={rows}
          columnName={value}
          label={text}
        ></Column>
      ))}
    </div>
  );
};
