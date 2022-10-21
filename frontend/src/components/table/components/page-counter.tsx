import classNames from "../../../utils/classname";
import { useContext } from "react";
import { TableContext } from "../context";

export const PageCounter = () => {
  const { pageSettings, updatePageSettings } = useContext(TableContext);

  const { currentPage, totalPages, rowsPerPage } = pageSettings;

  const step = 5;

  const selectPage = (page: number) => {
    updatePageSettings("currentPage", page);
  };

  const setButtons = () => {
    let buttons = [];

    let start = currentPage - step;

    if (start + step * 2 > totalPages) {
      start = totalPages - step * 2;
    }

    if (start < 1) {
      start = 1;
    }

    let end = start + step * 2 - 1;

    if (end > totalPages) {
      end = totalPages;
    }

    for (let i = start; i <= end; i++) {
      buttons.push(
        <button
          key={i}
          className={classNames("page-selector", {
            current: currentPage === i,
          })}
          type="button"
          onClick={() => selectPage(i)}
        >
          {i}
        </button>
      );
    }

    return buttons;
  };

  return (
    <div className="page-counter">
      <button
        className={classNames("page-selector", "arrow", "left")}
        type="button"
        disabled={currentPage <= 1}
        onClick={() => selectPage(currentPage - 1)}
      ></button>
      <div className="page-buttons">{setButtons()}</div>
      <button
        className={classNames("page-selector", "arrow", "right")}
        type="button"
        disabled={currentPage >= totalPages}
        onClick={() => selectPage(currentPage + 1)}
      ></button>
    </div>
  );
};
