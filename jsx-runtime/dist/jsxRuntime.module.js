import { options as r, Fragment as e } from 'preact';
export { Fragment } from 'preact';
var t = /["&<]/;
function n(r) {
	if (0 === r.length || !1 === t.test(r)) return r;
	for (var e = 0, n = 0, o = '', f = ''; n < r.length; n++) {
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
		n !== e && (o += r.slice(e, n)), (o += f), (e = n + 1);
	}
	return n !== e && (o += r.slice(e, n)), o;
}
var o = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,
	f = 0,
	i = Array.isArray;
function u(e, t, n, o, i, u) {
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
		__v: --f,
		__i: -1,
		__u: 0,
		__source: i,
		__self: u
	};
	if ('function' == typeof e && (a = e.defaultProps))
		for (c in a) void 0 === p[c] && (p[c] = a[c]);
	return r.vnode && r.vnode(l), l;
}
function a(r) {
	var t = u(e, { tpl: r, exprs: [].slice.call(arguments, 1) });
	return (t.key = t.__v), t;
}
var c = {},
	p = /[A-Z]/g;
function l(e, t) {
	if (r.attr) {
		var f = r.attr(e, t);
		if ('string' == typeof f) return f;
	}
	if ('ref' === e || 'key' === e) return '';
	if ('style' === e && 'object' == typeof t) {
		var i = '';
		for (var u in t) {
			var a = t[u];
			if (null != a && '' !== a) {
				var l =
						'-' == u[0]
							? u
							: c[u] || (c[u] = u.replace(p, '-$&').toLowerCase()),
					_ = ';';
				'number' != typeof a || l.startsWith('--') || o.test(l) || (_ = 'px;'),
					(i = i + l + ':' + a + _);
			}
		}
		return e + '="' + i + '"';
	}
	return null == t || !1 === t || 'function' == typeof t || 'object' == typeof t
		? ''
		: !0 === t
			? e
			: e + '="' + n(t) + '"';
}
function _(r) {
	if (null == r || 'boolean' == typeof r || 'function' == typeof r) return null;
	if ('object' == typeof r) {
		if (void 0 === r.constructor) return r;
		if (i(r)) {
			for (var e = 0; e < r.length; e++) r[e] = _(r[e]);
			return r;
		}
	}
	return n('' + r);
}
export {
	u as jsx,
	l as jsxAttr,
	u as jsxDEV,
	_ as jsxEscape,
	a as jsxTemplate,
	u as jsxs
};
//# sourceMappingURL=jsxRuntime.module.js.map
