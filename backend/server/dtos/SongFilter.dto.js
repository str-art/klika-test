const Dto = require("../../lib/Dto");

class SongFilterDto extends Dto {
  constructor() {
    const name = "SongFilterDto";

    const scheme = {
      authorName: { type: "STRING" },
      year: { type: "NUMBER" },
      genre: { type: "STRING" },
    };
    super(scheme, name);
  }
}

module.exports = SongFilterDto;
