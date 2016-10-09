var path = require('path');

var _root = path.resolve(__dirname, '..'); //回到上一层目录, 也就是项目运行的根目录

function root(args) {
    args = Array.prototype.slice.call(arguments, 0);
    return path.join.apply(path, [_root].concat(args));
}

exports.root = root;
