!(function (e, r) {
	'object' == typeof exports && 'undefined' != typeof module
		? r(exports, require('preact'))
		: 'function' == typeof define && define.amd
			? define(['exports', 'preact'], r)
			: r(((e || self).jsxRuntime = {}), e.preact);
})(this, function (e, r) {
	var n = /["&<]/;
	function t(e) {
		if (0 === e.length || !1 === n.test(e)) return e;
		for (var r = 0, t = 0, o = '', f = ''; t < e.length; t++) {
			switch (e.charCodeAt(t)) {
				case 34:
					f = '&quot;';
					break;
				case 38:
					f = '&amp;';
					break;
				case 60:
					f = '&lt;';
					break;
				default:
					continue;
			}
			t !== r && (o += e.slice(r, t)), (o += f), (r = t + 1);
		}
		return t !== r && (o += e.slice(r, t)), o;
	}
	var o = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,
		f = 0,
		i = Array.isArray;
	function u(e, n, t, o, i, u) {
		n || (n = {});
		var a,
			c,
			l = n;
		if ('ref' in l)
			for (c in ((l = {}), n)) 'ref' == c ? (a = n[c]) : (l[c] = n[c]);
		var p = {
			type: e,
			props: l,
			key: t,
			ref: a,
			__k: null,
			__: null,
			__b: 0,
			__e: null,
			__d: void 0,
			__c: null,
			constructor: void 0,
			__v: --f,
			__i: -1,
			__u: 0,
			__source: i,
			__self: u
		};
		if ('function' == typeof e && (a = e.defaultProps))
			for (c in a) void 0 === l[c] && (l[c] = a[c]);
		return r.options.vnode && r.options.vnode(p), p;
	}
	var a = {},
		c = /[A-Z]/g;
	Object.defineProperty(e, 'Fragment', {
		enumerable: !0,
		get: function () {
			return r.Fragment;
		}
	}),
		(e.jsx = u),
		(e.jsxAttr = function (e, n) {
			if (r.options.attr) {
				var f = r.options.attr(e, n);
				if ('string' == typeof f) return f;
			}
			if ('ref' === e || 'key' === e) return '';
			if ('style' === e && 'object' == typeof n) {
				var i = '';
				for (var u in n) {
					var l = n[u];
					if (null != l && '' !== l) {
						var p =
								'-' == u[0]
									? u
									: a[u] || (a[u] = u.replace(c, '-$&').toLowerCase()),
							_ = ';';
						'number' != typeof l ||
							p.startsWith('--') ||
							o.test(p) ||
							(_ = 'px;'),
							(i = i + p + ':' + l + _);
					}
				}
				return e + '="' + i + '"';
			}
			return null == n ||
				!1 === n ||
				'function' == typeof n ||
				'object' == typeof n
				? ''
				: !0 === n
					? e
					: e + '="' + t(n) + '"';
		}),
		(e.jsxDEV = u),
		(e.jsxEscape = function e(r) {
			if (null == r || 'boolean' == typeof r || 'function' == typeof r)
				return null;
			if ('object' == typeof r) {
				if (void 0 === r.constructor) return r;
				if (i(r)) {
					for (var n = 0; n < r.length; n++) r[n] = e(r[n]);
					return r;
				}
			}
			return t('' + r);
		}),
		(e.jsxTemplate = function (e) {
			var n = u(r.Fragment, { tpl: e, exprs: [].slice.call(arguments, 1) });
			return (n.key = n.__v), n;
		}),
		(e.jsxs = u);
});
//# sourceMappingURL=jsxRuntime.umd.js.map
