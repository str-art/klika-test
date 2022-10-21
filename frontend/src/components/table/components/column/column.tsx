import { useContext } from "react";
import classNames from "../../../../utils/classname";
import { Cell } from "../cell";
import { Row } from "../table";
import { TableContext } from "../../context";
import { OrderButton } from "./components/order-button";

export type LabelType<T extends Row> = {
  value: keyof T;
  text: string;
};

type ColumnProps<T extends Row> = {
  columnName: keyof T;
  label: string;
  rows: T[];
  className?: string;
  useOrder?: boolean;
};

export const Column = <T extends Row>({
  className = "",
  useOrder = false,
  rows,
  columnName,
  label,
}: ColumnProps<T>) => {
  const { updateOrder } = useContext(TableContext);

  return (
    <Cell className={classNames("column", className)}>
      <Cell className={classNames("header")}>
        <h3>{label}</h3>
        {useOrder && (
          <OrderButton
            changeOrder={(value) => updateOrder(String(columnName), value)}
          />
        )}
      </Cell>
      {rows.map((row, index) => (
        <Cell key={index}>{row[columnName] || " "}</Cell>
      ))}
    </Cell>
  );
};
