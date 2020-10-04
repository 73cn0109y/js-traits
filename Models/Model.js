class Model {
  get createdAtColumn() {
    return 'created_at';
  }

  get updatedAtColumn() {
    return 'updated_at';
  }

  $attributes = {};
  $original = {};

  toJSON() {
    return this.$attributes;
  }
}

module.exports = Model;
