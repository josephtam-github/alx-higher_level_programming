#!/usr/bin/node
exports.callMeMoby = function callMeMoby (num, func) {
  for (let i = 0; i < num; i++) {
    func();
  }
};
