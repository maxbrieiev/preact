var n,
	l,
	t,
	u,
	i,
	o,
	r,
	e,
	f,
	c,
	s,
	h,
	a = {},
	p = [],
	v = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,
	y = Array.isArray;
function d(n, l) {
	for (var t in l) n[t] = l[t];
	return n;
}
function w(n) {
	var l = n.parentNode;
	l && l.removeChild(n);
}
function _(l, t, u) {
	var i,
		o,
		r,
		e = {};
	for (r in t)
		'key' == r ? (i = t[r]) : 'ref' == r ? (o = t[r]) : (e[r] = t[r]);
	if (
		(arguments.length > 2 &&
			(e.children = arguments.length > 3 ? n.call(arguments, 2) : u),
		'function' == typeof l && null != l.defaultProps)
	)
		for (r in l.defaultProps) void 0 === e[r] && (e[r] = l.defaultProps[r]);
	return g(l, e, i, o, null);
}
function g(n, u, i, o, r) {
	var e = {
		type: n,
		props: u,
		key: i,
		ref: o,
		__k: null,
		__: null,
		__b: 0,
		__e: null,
		__d: void 0,
		__c: null,
		constructor: void 0,
		__v: null == r ? ++t : r,
		__i: -1,
		__u: 0
	};
	return null == r && null != l.vnode && l.vnode(e), e;
}
function x(n) {
	return n.children;
}
function k(n, l) {
	(this.props = n), (this.context = l);
}
function m(n, l) {
	if (null == l) return n.__ ? m(n.__, n.__i + 1) : null;
	for (var t; l < n.__k.length; l++)
		if (null != (t = n.__k[l]) && null != t.__e) return t.__e;
	return 'function' == typeof n.type ? m(n) : null;
}
function b(n) {
	var l, t;
	if (null != (n = n.__) && null != n.__c) {
		for (n.__e = n.__c.base = null, l = 0; l < n.__k.length; l++)
			if (null != (t = n.__k[l]) && null != t.__e) {
				n.__e = n.__c.base = t.__e;
				break;
			}
		return b(n);
	}
}
function C(n) {
	((!n.__d && (n.__d = !0) && i.push(n) && !M.__r++) ||
		o !== l.debounceRendering) &&
		((o = l.debounceRendering) || r)(M);
}
function M() {
	var n, t, u, o, r, f, c, s;
	for (i.sort(e); (n = i.shift()); )
		n.__d &&
			((t = i.length),
			(o = void 0),
			(f = (r = (u = n).__v).__e),
			(c = []),
			(s = []),
			u.__P &&
				(((o = d({}, r)).__v = r.__v + 1),
				l.vnode && l.vnode(o),
				A(
					u.__P,
					o,
					r,
					u.__n,
					u.__P.namespaceURI,
					32 & r.__u ? [f] : null,
					c,
					null == f ? m(r) : f,
					!!(32 & r.__u),
					s
				),
				(o.__v = r.__v),
				(o.__.__k[o.__i] = o),
				F(c, o, s),
				o.__e != f && b(o)),
			i.length > t && i.sort(e));
	M.__r = 0;
}
function P(n, l, t, u, i, o, r, e, f, c, s) {
	var h,
		v,
		y,
		d,
		w,
		_ = (u && u.__k) || p,
		g = l.length;
	for (t.__d = f, S(t, l, _), f = t.__d, h = 0; h < g; h++)
		null != (y = t.__k[h]) &&
			'boolean' != typeof y &&
			'function' != typeof y &&
			((v = -1 === y.__i ? a : _[y.__i] || a),
			(y.__i = h),
			A(n, y, v, i, o, r, e, f, c, s),
			(d = y.__e),
			y.ref &&
				v.ref != y.ref &&
				(v.ref && j(v.ref, null, y), s.push(y.ref, y.__c || d, y)),
			null == w && null != d && (w = d),
			65536 & y.__u || v.__k === y.__k
				? (f && !f.isConnected && (f = m(v)), (f = $(y, f, n)))
				: 'function' == typeof y.type && void 0 !== y.__d
					? (f = y.__d)
					: d && (f = d.nextSibling),
			(y.__d = void 0),
			(y.__u &= -196609));
	(t.__d = f), (t.__e = w);
}
function S(n, l, t) {
	var u,
		i,
		o,
		r,
		e,
		f = l.length,
		c = t.length,
		s = c,
		h = 0;
	for (n.__k = [], u = 0; u < f; u++)
		(r = u + h),
			null !=
			(i = n.__k[u] =
				null == (i = l[u]) || 'boolean' == typeof i || 'function' == typeof i
					? null
					: 'string' == typeof i ||
							'number' == typeof i ||
							'bigint' == typeof i ||
							i.constructor == String
						? g(null, i, null, null, null)
						: y(i)
							? g(x, { children: i }, null, null, null)
							: void 0 === i.constructor && i.__b > 0
								? g(i.type, i.props, i.key, i.ref ? i.ref : null, i.__v)
								: i)
				? ((i.__ = n),
					(i.__b = n.__b + 1),
					(e = I(i, t, r, s)),
					(i.__i = e),
					(o = null),
					-1 !== e && (s--, (o = t[e]) && (o.__u |= 131072)),
					null == o || null === o.__v
						? (-1 == e && h--, 'function' != typeof i.type && (i.__u |= 65536))
						: e !== r &&
							(e === r + 1
								? h++
								: e > r
									? s > f - r
										? (h += e - r)
										: h--
									: e < r
										? e == r - 1 && (h = e - r)
										: (h = 0),
							e !== u + h && (i.__u |= 65536)))
				: (o = t[r]) &&
					null == o.key &&
					o.__e &&
					0 == (131072 & o.__u) &&
					(o.__e == n.__d && (n.__d = m(o)), z(o, o, !1), (t[r] = null), s--);
	if (s)
		for (u = 0; u < c; u++)
			null != (o = t[u]) &&
				0 == (131072 & o.__u) &&
				(o.__e == n.__d && (n.__d = m(o)), z(o, o));
}
function $(n, l, t) {
	var u, i;
	if ('function' == typeof n.type) {
		for (u = n.__k, i = 0; u && i < u.length; i++)
			u[i] && ((u[i].__ = n), (l = $(u[i], l, t)));
		return l;
	}
	n.__e != l && (t.insertBefore(n.__e, l || null), (l = n.__e));
	do {
		l = l && l.nextSibling;
	} while (null != l && 8 === l.nodeType);
	return l;
}
function I(n, l, t, u) {
	var i = n.key,
		o = n.type,
		r = t - 1,
		e = t + 1,
		f = l[t];
	if (null === f || (f && i == f.key && o === f.type && 0 == (131072 & f.__u)))
		return t;
	if (u > (null != f && 0 == (131072 & f.__u) ? 1 : 0))
		for (; r >= 0 || e < l.length; ) {
			if (r >= 0) {
				if ((f = l[r]) && 0 == (131072 & f.__u) && i == f.key && o === f.type)
					return r;
				r--;
			}
			if (e < l.length) {
				if ((f = l[e]) && 0 == (131072 & f.__u) && i == f.key && o === f.type)
					return e;
				e++;
			}
		}
	return -1;
}
function H(n, l, t) {
	'-' === l[0]
		? n.setProperty(l, null == t ? '' : t)
		: (n[l] =
				null == t ? '' : 'number' != typeof t || v.test(l) ? t : t + 'px');
}
function L(n, l, t, u, i) {
	var o;
	n: if ('style' === l)
		if ('string' == typeof t) n.style.cssText = t;
		else {
			if (('string' == typeof u && (n.style.cssText = u = ''), u))
				for (l in u) (t && l in t) || H(n.style, l, '');
			if (t) for (l in t) (u && t[l] === u[l]) || H(n.style, l, t[l]);
		}
	else if ('o' === l[0] && 'n' === l[1])
		(o = l !== (l = l.replace(/(PointerCapture)$|Capture$/i, '$1'))),
			(l =
				l.toLowerCase() in n || 'onFocusOut' === l || 'onFocusIn' === l
					? l.toLowerCase().slice(2)
					: l.slice(2)),
			n.l || (n.l = {}),
			(n.l[l + o] = t),
			t
				? u
					? (t.t = u.t)
					: ((t.t = f), n.addEventListener(l, o ? s : c, o))
				: n.removeEventListener(l, o ? s : c, o);
	else {
		if ('http://www.w3.org/2000/svg' == i)
			l = l.replace(/xlink(H|:h)/, 'h').replace(/sName$/, 's');
		else if (
			'width' != l &&
			'height' != l &&
			'href' != l &&
			'list' != l &&
			'form' != l &&
			'tabIndex' != l &&
			'download' != l &&
			'rowSpan' != l &&
			'colSpan' != l &&
			'role' != l &&
			'popover' != l &&
			l in n
		)
			try {
				n[l] = null == t ? '' : t;
				break n;
			} catch (n) {}
		'function' == typeof t ||
			(null == t || (!1 === t && '-' !== l[4])
				? n.removeAttribute(l)
				: n.setAttribute(l, 'popover' == l && 1 == t ? '' : t));
	}
}
function T(n) {
	return function (t) {
		if (this.l) {
			var u = this.l[t.type + n];
			if (null == t.u) t.u = f++;
			else if (t.u < u.t) return;
			return u(l.event ? l.event(t) : t);
		}
	};
}
function A(n, t, u, i, o, r, e, f, c, s) {
	var h,
		a,
		p,
		v,
		w,
		_,
		g,
		m,
		b,
		C,
		M,
		S,
		$,
		I,
		H,
		L,
		T = t.type;
	if (void 0 !== t.constructor) return null;
	128 & u.__u && ((c = !!(32 & u.__u)), (r = [(f = t.__e = u.__e)])),
		(h = l.__b) && h(t);
	n: if ('function' == typeof T)
		try {
			if (
				((m = t.props),
				(b = 'prototype' in T && T.prototype.render),
				(C = (h = T.contextType) && i[h.__c]),
				(M = h ? (C ? C.props.value : h.__) : i),
				u.__c
					? (g = (a = t.__c = u.__c).__ = a.__E)
					: (b
							? (t.__c = a = new T(m, M))
							: ((t.__c = a = new k(m, M)),
								(a.constructor = T),
								(a.render = N)),
						C && C.sub(a),
						(a.props = m),
						a.state || (a.state = {}),
						(a.context = M),
						(a.__n = i),
						(p = a.__d = !0),
						(a.__h = []),
						(a._sb = [])),
				b && null == a.__s && (a.__s = a.state),
				b &&
					null != T.getDerivedStateFromProps &&
					(a.__s == a.state && (a.__s = d({}, a.__s)),
					d(a.__s, T.getDerivedStateFromProps(m, a.__s))),
				(v = a.props),
				(w = a.state),
				(a.__v = t),
				p)
			)
				b &&
					null == T.getDerivedStateFromProps &&
					null != a.componentWillMount &&
					a.componentWillMount(),
					b && null != a.componentDidMount && a.__h.push(a.componentDidMount);
			else {
				if (
					(b &&
						null == T.getDerivedStateFromProps &&
						m !== v &&
						null != a.componentWillReceiveProps &&
						a.componentWillReceiveProps(m, M),
					!a.__e &&
						((null != a.shouldComponentUpdate &&
							!1 === a.shouldComponentUpdate(m, a.__s, M)) ||
							t.__v === u.__v))
				) {
					for (
						t.__v !== u.__v && ((a.props = m), (a.state = a.__s), (a.__d = !1)),
							t.__e = u.__e,
							t.__k = u.__k,
							t.__k.forEach(function (n) {
								n && (n.__ = t);
							}),
							S = 0;
						S < a._sb.length;
						S++
					)
						a.__h.push(a._sb[S]);
					(a._sb = []), a.__h.length && e.push(a);
					break n;
				}
				null != a.componentWillUpdate && a.componentWillUpdate(m, a.__s, M),
					b &&
						null != a.componentDidUpdate &&
						a.__h.push(function () {
							a.componentDidUpdate(v, w, _);
						});
			}
			if (
				((a.context = M),
				(a.props = m),
				(a.__P = n),
				(a.__e = !1),
				($ = l.__r),
				(I = 0),
				b)
			) {
				for (
					a.state = a.__s,
						a.__d = !1,
						$ && $(t),
						h = a.render(a.props, a.state, a.context),
						H = 0;
					H < a._sb.length;
					H++
				)
					a.__h.push(a._sb[H]);
				a._sb = [];
			} else
				do {
					(a.__d = !1),
						$ && $(t),
						(h = a.render(a.props, a.state, a.context)),
						(a.state = a.__s);
				} while (a.__d && ++I < 25);
			(a.state = a.__s),
				null != a.getChildContext && (i = d(d({}, i), a.getChildContext())),
				b &&
					!p &&
					null != a.getSnapshotBeforeUpdate &&
					(_ = a.getSnapshotBeforeUpdate(v, w)),
				P(
					n,
					y(
						(L =
							null != h && h.type === x && null == h.key ? h.props.children : h)
					)
						? L
						: [L],
					t,
					u,
					i,
					o,
					r,
					e,
					f,
					c,
					s
				),
				(a.base = t.__e),
				(t.__u &= -161),
				a.__h.length && e.push(a),
				g && (a.__E = a.__ = null);
		} catch (n) {
			(t.__v = null),
				c || null != r
					? ((t.__e = f), (t.__u |= c ? 160 : 32), (r[r.indexOf(f)] = null))
					: ((t.__e = u.__e), (t.__k = u.__k)),
				l.__e(n, t, u);
		}
	else
		null == r && t.__v === u.__v
			? ((t.__k = u.__k), (t.__e = u.__e))
			: (t.__e = O(u.__e, t, u, i, o, r, e, c, s));
	(h = l.diffed) && h(t);
}
function F(n, t, u) {
	t.__d = void 0;
	for (var i = 0; i < u.length; i++) j(u[i], u[++i], u[++i]);
	l.__c && l.__c(t, n),
		n.some(function (t) {
			try {
				(n = t.__h),
					(t.__h = []),
					n.some(function (n) {
						n.call(t);
					});
			} catch (n) {
				l.__e(n, t.__v);
			}
		});
}
function O(l, t, u, i, o, r, e, f, c) {
	var s,
		h,
		p,
		v,
		d,
		_,
		g,
		x = u.props,
		k = t.props,
		b = t.type;
	if (
		('svg' === b
			? (o = 'http://www.w3.org/2000/svg')
			: 'math' === b
				? (o = 'http://www.w3.org/1998/Math/MathML')
				: o || (o = 'http://www.w3.org/1999/xhtml'),
		null != r)
	)
		for (s = 0; s < r.length; s++)
			if (
				(d = r[s]) &&
				'setAttribute' in d == !!b &&
				(b ? d.localName === b : 3 === d.nodeType)
			) {
				(l = d), (r[s] = null);
				break;
			}
	if (null == l) {
		if (null === b) return document.createTextNode(k);
		(l = document.createElementNS(o, b, k.is && k)), (r = null), (f = !1);
	}
	if (null === b) x === k || (f && l.data === k) || (l.data = k);
	else {
		if (((r = r && n.call(l.childNodes)), (x = u.props || a), !f && null != r))
			for (x = {}, s = 0; s < l.attributes.length; s++)
				x[(d = l.attributes[s]).name] = d.value;
		for (s in x)
			if (((d = x[s]), 'children' == s));
			else if ('dangerouslySetInnerHTML' == s) p = d;
			else if ('key' !== s && !(s in k)) {
				if (
					('value' == s && 'defaultValue' in k) ||
					('checked' == s && 'defaultChecked' in k)
				)
					continue;
				L(l, s, null, d, o);
			}
		for (s in k)
			(d = k[s]),
				'children' == s
					? (v = d)
					: 'dangerouslySetInnerHTML' == s
						? (h = d)
						: 'value' == s
							? (_ = d)
							: 'checked' == s
								? (g = d)
								: 'key' === s ||
									(f && 'function' != typeof d) ||
									x[s] === d ||
									L(l, s, d, x[s], o);
		if (h)
			f ||
				(p && (h.__html === p.__html || h.__html === l.innerHTML)) ||
				(l.innerHTML = h.__html),
				(t.__k = []);
		else if (
			(p && (l.innerHTML = ''),
			P(
				l,
				y(v) ? v : [v],
				t,
				u,
				i,
				'foreignObject' === b ? 'http://www.w3.org/1999/xhtml' : o,
				r,
				e,
				r ? r[0] : u.__k && m(u, 0),
				f,
				c
			),
			null != r)
		)
			for (s = r.length; s--; ) null != r[s] && w(r[s]);
		f ||
			((s = 'value'),
			void 0 !== _ &&
				(_ !== l[s] ||
					('progress' === b && !_) ||
					('option' === b && _ !== x[s])) &&
				L(l, s, _, x[s], o),
			(s = 'checked'),
			void 0 !== g && g !== l[s] && L(l, s, g, x[s], o));
	}
	return l;
}
function j(n, t, u) {
	try {
		'function' == typeof n ? n(t) : (n.current = t);
	} catch (n) {
		l.__e(n, u);
	}
}
function z(n, t, u) {
	var i, o;
	if (
		(l.unmount && l.unmount(n),
		(i = n.ref) && ((i.current && i.current !== n.__e) || j(i, null, t)),
		null != (i = n.__c))
	) {
		if (i.componentWillUnmount)
			try {
				i.componentWillUnmount();
			} catch (n) {
				l.__e(n, t);
			}
		i.base = i.__P = null;
	}
	if ((i = n.__k))
		for (o = 0; o < i.length; o++)
			i[o] && z(i[o], t, u || 'function' != typeof n.type);
	u || null == n.__e || w(n.__e), (n.__c = n.__ = n.__e = n.__d = void 0);
}
function N(n, l, t) {
	return this.constructor(n, t);
}
function V(t, u, i) {
	var o, r, e, f;
	l.__ && l.__(t, u),
		(r = (o = 'function' == typeof i) ? null : (i && i.__k) || u.__k),
		(e = []),
		(f = []),
		A(
			u,
			(t = ((!o && i) || u).__k = _(x, null, [t])),
			r || a,
			a,
			u.namespaceURI,
			!o && i ? [i] : r ? null : u.firstChild ? n.call(u.childNodes) : null,
			e,
			!o && i ? i : r ? r.__e : u.firstChild,
			o,
			f
		),
		F(e, t, f);
}
(n = p.slice),
	(l = {
		__e: function (n, l, t, u) {
			for (var i, o, r; (l = l.__); )
				if ((i = l.__c) && !i.__)
					try {
						if (
							((o = i.constructor) &&
								null != o.getDerivedStateFromError &&
								(i.setState(o.getDerivedStateFromError(n)), (r = i.__d)),
							null != i.componentDidCatch &&
								(i.componentDidCatch(n, u || {}), (r = i.__d)),
							r)
						)
							return (i.__E = i);
					} catch (l) {
						n = l;
					}
			throw n;
		}
	}),
	(t = 0),
	(u = function (n) {
		return null != n && null == n.constructor;
	}),
	(k.prototype.setState = function (n, l) {
		var t;
		(t =
			null != this.__s && this.__s !== this.state
				? this.__s
				: (this.__s = d({}, this.state))),
			'function' == typeof n && (n = n(d({}, t), this.props)),
			n && d(t, n),
			null != n && this.__v && (l && this._sb.push(l), C(this));
	}),
	(k.prototype.forceUpdate = function (n) {
		this.__v && ((this.__e = !0), n && this.__h.push(n), C(this));
	}),
	(k.prototype.render = x),
	(i = []),
	(r =
		'function' == typeof Promise
			? Promise.prototype.then.bind(Promise.resolve())
			: setTimeout),
	(e = function (n, l) {
		return n.__v.__b - l.__v.__b;
	}),
	(M.__r = 0),
	(f = 0),
	(c = T(!1)),
	(s = T(!0)),
	(h = 0),
	(exports.Component = k),
	(exports.Fragment = x),
	(exports.cloneElement = function (l, t, u) {
		var i,
			o,
			r,
			e,
			f = d({}, l.props);
		for (r in (l.type && l.type.defaultProps && (e = l.type.defaultProps), t))
			'key' == r
				? (i = t[r])
				: 'ref' == r
					? (o = t[r])
					: (f[r] = void 0 === t[r] && void 0 !== e ? e[r] : t[r]);
		return (
			arguments.length > 2 &&
				(f.children = arguments.length > 3 ? n.call(arguments, 2) : u),
			g(l.type, f, i || l.key, o || l.ref, null)
		);
	}),
	(exports.createContext = function (n, l) {
		var t = {
			__c: (l = '__cC' + h++),
			__: n,
			Consumer: function (n, l) {
				return n.children(l);
			},
			Provider: function (n) {
				var t, u;
				return (
					this.getChildContext ||
						((t = []),
						((u = {})[l] = this),
						(this.getChildContext = function () {
							return u;
						}),
						(this.componentWillUnmount = function () {
							t = null;
						}),
						(this.shouldComponentUpdate = function (n) {
							this.props.value !== n.value &&
								t.some(function (n) {
									(n.__e = !0), C(n);
								});
						}),
						(this.sub = function (n) {
							t.push(n);
							var l = n.componentWillUnmount;
							n.componentWillUnmount = function () {
								t && t.splice(t.indexOf(n), 1), l && l.call(n);
							};
						})),
					n.children
				);
			}
		};
		return (t.Provider.__ = t.Consumer.contextType = t);
	}),
	(exports.createElement = _),
	(exports.createRef = function () {
		return { current: null };
	}),
	(exports.h = _),
	(exports.hydrate = function n(l, t) {
		V(l, t, n);
	}),
	(exports.isValidElement = u),
	(exports.options = l),
	(exports.render = V),
	(exports.toChildArray = function n(l, t) {
		return (
			(t = t || []),
			null == l ||
				'boolean' == typeof l ||
				(y(l)
					? l.some(function (l) {
							n(l, t);
						})
					: t.push(l)),
			t
		);
	});
//# sourceMappingURL=preact.js.map
