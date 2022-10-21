const Entity = require("../../lib/Entity");

class Person extends Entity {
  constructor(database) {
    const scheme = {
      id: { type: "integer", isPK: true, default: "nextval('UUID')" },
      name: { type: "varchar(32)", required: true },
    };

    const name = "Person";

    super(database, name, scheme);
  }
}

module.exports = Person;
