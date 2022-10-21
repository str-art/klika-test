const Dto = require("../../lib/Dto");

class SongOrderDto extends Dto {
  constructor() {
    const check = (value) => {
      if (!["ASC", "DESC"].includes(value)) {
        throw Error("Bad Request: Неверное значение порядка");
      }
    };

    const scheme = {
      title: { type: "STRING", check },
      authorName: { type: "STRING", check },
      year: { type: "STRING", check },
      genre: { type: "STRING", check },
    };
    super(scheme, "SongOrderDto");
  }
}

module.exports = SongOrderDto;
