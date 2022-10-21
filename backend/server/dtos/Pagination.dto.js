const Dto = require("../../lib/Dto");

class PaginationDto extends Dto {
  constructor() {
    const name = "PaginationDto";

    const scheme = {
      page: { type: "NUMBER", defaultVal: 1 },
      rowsPerPage: { type: "NUMBER", defaultVal: 10 },
    };
    super(scheme, name);
  }
}

module.exports = PaginationDto;
