import classNames from "../../../utils/classname";

type CellProps = {
  className?: string;
  children: React.ReactNode;
};

export const Cell = ({ className = "", children }: CellProps) => {
  return <div className={classNames("cell", className)}>{children}</div>;
};
