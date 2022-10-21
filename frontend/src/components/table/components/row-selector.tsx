import { useContext } from "react";
import { TableContext } from "../context";
import classNames from "../../../utils/classname";

const RowSelector = () => {
  const { updatePageSettings, pageSettings } = useContext(TableContext);

  const step = 10;

  const max = 50;

  const setButtons = () => {
    let buttons = [];
    for (let i = step; i <= max; i += step) {
      buttons.push(
        <button
          className={classNames("row-selecctor", "button", {
            active: i === pageSettings.rowsPerPage,
          })}
          key={i}
          onClick={() => {
            updatePageSettings("rowsPerPage", i);
          }}
        >
          {i}
        </button>
      );
    }
    return buttons;
  };

  return (
    <div className={classNames("row-selector", "container")}>
      <h3>Отображать рядов</h3>
      <div className={classNames("row-selector", "buttons")}>
        {setButtons()}
      </div>
    </div>
  );
};

export default RowSelector;
