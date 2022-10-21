const Entity = require("../../lib/Entity");

class Song extends Entity {
  constructor(database) {
    const scheme = {
      id: { type: "integer", isPK: true, default: "nextval('UUID')" },
      title: { type: "varchar(64)", required: true },
      author: {
        type: "integer",
        foreignKey: { table: "Person", column: "id" },
        required: true,
      },
      year: { type: "integer" },
      genre: { type: "varchar(64)" },
    };

    const name = "Song";

    super(database, name, scheme);
  }
}

module.exports = Song;
