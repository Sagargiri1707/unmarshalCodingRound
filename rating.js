module.exports = function (page_index, query_index) {
  let max_val = 8;
  return (max_val - page_index) * (max_val - query_index);
};
