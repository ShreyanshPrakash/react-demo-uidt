'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
app.set('port', process.env.PORT || 5000);
app.get('/', function (req, res) {
	res.sendFile('./index.html', { root: __dirname });
});
app.use(_express2.default.static(__dirname));
app.listen(app.get('port'));