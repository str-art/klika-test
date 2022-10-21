module.exports = (() => {
  function escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  }

  String.prototype.replaceAll = function (find, replace) {
    return this.replace(new RegExp(escapeRegExp(find), "g"), replace);
  };
})();
