import classNames from "../../../../../utils/classname";
import { useState } from "react";

export type Order = "ASC" | "DESC" | null;

export const OrderButton = ({
  changeOrder,
}: {
  changeOrder: (value: Exclude<Order, null>) => unknown;
}) => {
  const [active, setActive] = useState<Order>(null);

  const updateOrder = (value: Exclude<Order, null>) => {
    setActive((prev) => {
      if (prev === value) {
        return null;
      }
      return value;
    });

    changeOrder(value);
  };

  return (
    <div className={classNames("order-buttons", "container")}>
      <button
        className={classNames("order-button", { active: active === "ASC" })}
        onClick={() => {
          updateOrder("ASC");
        }}
      ></button>
      <button
        className={classNames("order-button", { active: active === "DESC" })}
        onClick={() => updateOrder("DESC")}
      ></button>
    </div>
  );
};
