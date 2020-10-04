class CrudApi {
  static list() {
    return new Promise(resolve => setTimeout(resolve([]), 2000));
  }
}

module.exports = CrudApi;
