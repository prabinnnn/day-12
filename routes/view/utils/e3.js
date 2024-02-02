let range = function (start_num, end_num) {
  let list = [];

  // Ensure start_num is less than end_num
  if (start_num >= end_num) {
    return list;
  }

  for (var i = start_num + 1; i < end_num; i++) {
    list.push(i);
  }

  return list;
};
