!(function (n, t) {
	'object' == typeof exports && 'undefined' != typeof module
		? t(exports, require('preact'))
		: 'function' == typeof define && define.amd
			? define(['exports', 'preact'], t)
			: t(((n || self).preactTestUtils = {}), n.preact);
})(this, function (n, t) {
	function e() {
		return (
			(t.options.t = t.options.debounceRendering),
			(t.options.debounceRendering = function (n) {
				return (t.options.o = n);
			}),
			function () {
				return t.options.o && t.options.o();
			}
		);
	}
	var r = function (n) {
			return null != n && 'function' == typeof n.then;
		},
		o = 0;
	function i() {
		t.options.o && (t.options.o(), delete t.options.o),
			void 0 !== t.options.t
				? ((t.options.debounceRendering = t.options.t), delete t.options.t)
				: (t.options.debounceRendering = void 0);
	}
	(n.act = function (n) {
		if (++o > 1) {
			try {
				var f = n();
				if (r(f))
					return f.then(
						function () {
							--o;
						},
						function (n) {
							throw (--o, n);
						}
					);
			} catch (n) {
				throw (--o, n);
			}
			return --o, Promise.resolve();
		}
		var u,
			c,
			l = t.options.requestAnimationFrame,
			a = e();
		t.options.requestAnimationFrame = function (n) {
			return (u = n);
		};
		var d,
			h,
			p = function () {
				try {
					for (a(); u; ) (c = u), (u = null), c(), a();
				} catch (n) {
					d || (d = n);
				} finally {
					i();
				}
				(t.options.requestAnimationFrame = l), --o;
			};
		try {
			h = n();
		} catch (n) {
			d = n;
		}
		if (r(h))
			return h.then(p, function (n) {
				throw (p(), n);
			});
		if ((p(), d)) throw d;
		return Promise.resolve();
	}),
		(n.setupRerender = e),
		(n.teardown = i);
});
//# sourceMappingURL=testUtils.umd.js.map
