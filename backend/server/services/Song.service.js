const Service = require("../../lib/Service");

class SongService extends Service {
  constructor(database) {
    super(database, "SongService");
  }

  async getSongList(page = 1, rows = 10, filter = {}, order = {}) {
    let query = `
    SELECT
        COALESCE(S."title",'Неизвестно') "title",
        S."year",
        COALESCE(S."genre",'Неизвестно') "genre",
        COALESCE(P."name",'Не указано') "authorName"
    FROM
        "Song" S
    LEFT JOIN
        "Person" P ON
        P."id" = S."author"
    `;

    if (Object.keys(filter).length > 0) {
      const whereClause =
        this.database.entities.Song.__buildWhereClause(filter);
      query = query.concat(whereClause);
    }

    if (Object.keys(order).length > 0) {
      const orderClause = this.database.entities.Song.__buildOrderClause(order);
      query = query.concat(orderClause);
    }

    const list = await this.database.entities.Song.paginate(
      query,
      filter,
      page,
      rows
    );

    return list;
  }
}

module.exports = SongService;
