var r = require('preact');
function t() {
	return (
		(r.options.t = r.options.debounceRendering),
		(r.options.debounceRendering = function (t) {
			return (r.options.o = t);
		}),
		function () {
			return r.options.o && r.options.o();
		}
	);
}
var n = function (r) {
		return null != r && 'function' == typeof r.then;
	},
	o = 0;
function e() {
	r.options.o && (r.options.o(), delete r.options.o),
		void 0 !== r.options.t
			? ((r.options.debounceRendering = r.options.t), delete r.options.t)
			: (r.options.debounceRendering = void 0);
}
(exports.act = function (u) {
	if (++o > 1) {
		try {
			var i = u();
			if (n(i))
				return i.then(
					function () {
						--o;
					},
					function (r) {
						throw (--o, r);
					}
				);
		} catch (r) {
			throw (--o, r);
		}
		return --o, Promise.resolve();
	}
	var c,
		f,
		a = r.options.requestAnimationFrame,
		l = t();
	r.options.requestAnimationFrame = function (r) {
		return (c = r);
	};
	var h,
		v,
		p = function () {
			try {
				for (l(); c; ) (f = c), (c = null), f(), l();
			} catch (r) {
				h || (h = r);
			} finally {
				e();
			}
			(r.options.requestAnimationFrame = a), --o;
		};
	try {
		v = u();
	} catch (r) {
		h = r;
	}
	if (n(v))
		return v.then(p, function (r) {
			throw (p(), r);
		});
	if ((p(), h)) throw h;
	return Promise.resolve();
}),
	(exports.setupRerender = t),
	(exports.teardown = e);
//# sourceMappingURL=testUtils.js.map
