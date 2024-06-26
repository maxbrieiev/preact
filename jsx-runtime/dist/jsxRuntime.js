var r = require('preact'),
	e = /["&<]/;
function t(r) {
	if (0 === r.length || !1 === e.test(r)) return r;
	for (var t = 0, n = 0, o = '', f = ''; n < r.length; n++) {
		switch (r.charCodeAt(n)) {
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
		n !== t && (o += r.slice(t, n)), (o += f), (t = n + 1);
	}
	return n !== t && (o += r.slice(t, n)), o;
}
var n = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,
	o = 0,
	f = Array.isArray;
function i(e, t, n, f, i, u) {
	t || (t = {});
	var a,
		c,
		p = t;
	if ('ref' in p)
		for (c in ((p = {}), t)) 'ref' == c ? (a = t[c]) : (p[c] = t[c]);
	var l = {
		type: e,
		props: p,
		key: n,
		ref: a,
		__k: null,
		__: null,
		__b: 0,
		__e: null,
		__d: void 0,
		__c: null,
		constructor: void 0,
		__v: --o,
		__i: -1,
		__u: 0,
		__source: i,
		__self: u
	};
	if ('function' == typeof e && (a = e.defaultProps))
		for (c in a) void 0 === p[c] && (p[c] = a[c]);
	return r.options.vnode && r.options.vnode(l), l;
}
var u = {},
	a = /[A-Z]/g;
Object.defineProperty(exports, 'Fragment', {
	enumerable: !0,
	get: function () {
		return r.Fragment;
	}
}),
	(exports.jsx = i),
	(exports.jsxAttr = function (e, o) {
		if (r.options.attr) {
			var f = r.options.attr(e, o);
			if ('string' == typeof f) return f;
		}
		if ('ref' === e || 'key' === e) return '';
		if ('style' === e && 'object' == typeof o) {
			var i = '';
			for (var c in o) {
				var p = o[c];
				if (null != p && '' !== p) {
					var l =
							'-' == c[0]
								? c
								: u[c] || (u[c] = c.replace(a, '-$&').toLowerCase()),
						_ = ';';
					'number' != typeof p ||
						l.startsWith('--') ||
						n.test(l) ||
						(_ = 'px;'),
						(i = i + l + ':' + p + _);
				}
			}
			return e + '="' + i + '"';
		}
		return null == o ||
			!1 === o ||
			'function' == typeof o ||
			'object' == typeof o
			? ''
			: !0 === o
				? e
				: e + '="' + t(o) + '"';
	}),
	(exports.jsxDEV = i),
	(exports.jsxEscape = function r(e) {
		if (null == e || 'boolean' == typeof e || 'function' == typeof e)
			return null;
		if ('object' == typeof e) {
			if (void 0 === e.constructor) return e;
			if (f(e)) {
				for (var n = 0; n < e.length; n++) e[n] = r(e[n]);
				return e;
			}
		}
		return t('' + e);
	}),
	(exports.jsxTemplate = function (e) {
		var t = i(r.Fragment, { tpl: e, exprs: [].slice.call(arguments, 1) });
		return (t.key = t.__v), t;
	}),
	(exports.jsxs = i);
//# sourceMappingURL=jsxRuntime.js.map
