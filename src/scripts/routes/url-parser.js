const UrlParser = {
  parseActiveUrlWithCombiner() {
    return this._urlCombiner(this._parseUrl());
  },

  parseActiveUrlWithoutCombiner() {
    return this._parseUrl();
  },

  _parseUrl() {
    const [, resource, id, verb] = window.location.hash
      .slice(1)
      .toLowerCase()
      .split("/");
    return {
      resource: resource || null,
      id: id || null,
      verb: verb || null,
    };
  },

  _urlCombiner({ resource, id, verb }) {
    return (
      (resource ? `/${resource}` : "/") +
      (id ? "/:id" : "") +
      (verb ? `/${verb}` : "")
    );
  },
};

export default UrlParser;
