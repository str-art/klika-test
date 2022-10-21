const Controller = require("../../lib/Controller");

class SongControler extends Controller {
  constructor(server, services, dtos) {
    super("song", server);
    this.dtos = dtos;

    this.services = services;

    this.use("post", "list", this.validatePagination);

    this.use("post", "list", this.validateFilters);

    this.use("post", "list", this.validateOrder);

    this.on("post", "list", this.getSongsList);
  }

  validatePagination(req) {
    const { pageSettings = {} } = req.body;

    req.body.pageSettings = this.dtos.PaginationDto.validate(pageSettings);
  }

  validateFilters(req) {
    let { filter = {} } = req.body;

    filter = this.dtos.SongFilterDto.validate(filter);

    if (filter.authorName) {
      filter.name = filter.authorName;
      delete filter.authorName;
    }

    req.body.filter = filter;
  }

  validateOrder(req) {
    const { order = {} } = req.body;

    req.body.order = this.dtos.SongOrderDto.validate(order);
  }

  async getSongsList({ body }) {
    const { pageSettings, filter, order } = body;

    const { page, rowsPerPage: rows } = pageSettings;

    const list = await this.services.SongService.getSongList(
      page,
      rows,
      filter,
      order
    );

    return list;
  }
}

module.exports = SongControler;
