class SoftDeletes {
  get deletedAtColumn() {
    return 'deleted_at';
  }
}

module.exports = SoftDeletes;
