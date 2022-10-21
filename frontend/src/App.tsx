import React from "react";
import "./App.css";
import * as data from "test.json";
import Table from "./components/table";
import { UpdateType } from "./components/table/components/paginated-table";
import axios from "axios";

type SongInfo = {
  authorName: string;
  year: number;
  genre: string;
  title: string;
};

function App() {
  const update: UpdateType<SongInfo> = (
    pageSettings = { page: 1, rowsPerPage: 10 },
    filter = {},
    order = {}
  ) => {
    return axios
      .post("/api/song/list", {
        pageSettings,
        filter,
        order,
      })
      .then(({ data }) => data)
      .catch((err) => {
        alert("Не удалось загрузить ряды");
        return { page: 1, rows: [], totalPages: 0 };
      });
  };

  return (
    <div className="App">
      <Table
        className="test"
        labels={[
          { value: "title", text: "Название" },
          { value: "year", text: "Год" },
          { value: "authorName", text: "Автор" },
          { value: "genre", text: "Жанр" },
        ]}
        filters={{
          authorName: { label: "Поиск по автору", type: "text" },
          year: { type: "number", label: "Поиск по году" },
          genre: { type: "text", label: "Поиск по жанру" },
        }}
        orderBy={["year", "authorName", "title", "genre"]}
        update={update}
      ></Table>
    </div>
  );
}

export default App;
