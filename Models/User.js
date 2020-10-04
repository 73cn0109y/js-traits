const Traits = require('./Traits/BaseTrait');
const Model = require('./Model');
const SoftDeletes = require('./Traits/SoftDeletes');
const CrudApi = require('./Traits/CrudApi');

class User extends Traits(
    Model,
    CrudApi,
    SoftDeletes,
) {
  isDev() {
    return false;
  }
}

module.exports = User;
