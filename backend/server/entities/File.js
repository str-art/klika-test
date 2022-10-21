const Entity = require("../../lib/Entity");

class File extends Entity {
  constructor(database) {
    const name = "File";
    const scheme = {
      id: { type: "integer", isPK: true, default: "nextval('UUID')" },
      name: { type: "varchar(256)" },
    };
    super(database, name, scheme);
  }
}

module.exports = File;
