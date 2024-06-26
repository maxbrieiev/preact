!(function (n, l) {
	'object' == typeof exports && 'undefined' != typeof module
		? l(exports)
		: 'function' == typeof define && define.amd
			? define(['exports'], l)
			: l(((n || self).preact = {}));
})(this, function (n) {
	var l,
		u,
		t,
		i,
		o,
		e,
		f,
		r,
		c,
		s,
		h,
		a,
		p = 65536,
		v = 1 << 17,
		d = {},
		y = [],
		w = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,
		_ = Array.isArray;
	function g(n, l) {
		for (var u in l) n[u] = l[u];
		return n;
	}
	function b(n) {
		var l = n.parentNode;
		l && l.removeChild(n);
	}
	function m(n, u, t) {
		var i,
			o,
			e,
			f = {};
		for (e in u)
			'key' == e ? (i = u[e]) : 'ref' == e ? (o = u[e]) : (f[e] = u[e]);
		if (
			(arguments.length > 2 &&
				(f.children = arguments.length > 3 ? l.call(arguments, 2) : t),
			'function' == typeof n && null != n.defaultProps)
		)
			for (e in n.defaultProps) void 0 === f[e] && (f[e] = n.defaultProps[e]);
		return k(n, f, i, o, null);
	}
	function k(n, l, i, o, e) {
		var f = {
			type: n,
			props: l,
			key: i,
			ref: o,
			__k: null,
			__: null,
			__b: 0,
			__e: null,
			__d: void 0,
			__c: null,
			constructor: void 0,
			__v: null == e ? ++t : e,
			__i: -1,
			__u: 0
		};
		return null == e && null != u.vnode && u.vnode(f), f;
	}
	function x(n) {
		return n.children;
	}
	function C(n, l) {
		(this.props = n), (this.context = l);
	}
	function M(n, l) {
		if (null == l) return n.__ ? M(n.__, n.__i + 1) : null;
		for (var u; l < n.__k.length; l++)
			if (null != (u = n.__k[l]) && null != u.__e) return u.__e;
		return 'function' == typeof n.type ? M(n) : null;
	}
	function P(n) {
		var l, u;
		if (null != (n = n.__) && null != n.__c) {
			for (n.__e = n.__c.base = null, l = 0; l < n.__k.length; l++)
				if (null != (u = n.__k[l]) && null != u.__e) {
					n.__e = n.__c.base = u.__e;
					break;
				}
			return P(n);
		}
	}
	function S(n) {
		((!n.__d && (n.__d = !0) && o.push(n) && !T.__r++) ||
			e !== u.debounceRendering) &&
			((e = u.debounceRendering) || f)(T);
	}
	function T() {
		var n, l, t, i, e, f, c, s;
		for (o.sort(r); (n = o.shift()); )
			n.__d &&
				((l = o.length),
				(i = void 0),
				(f = (e = (t = n).__v).__e),
				(c = []),
				(s = []),
				t.__P &&
					(((i = g({}, e)).__v = e.__v + 1),
					u.vnode && u.vnode(i),
					O(
						t.__P,
						i,
						e,
						t.__n,
						t.__P.namespaceURI,
						32 & e.__u ? [f] : null,
						c,
						null == f ? M(e) : f,
						!!(32 & e.__u),
						s
					),
					(i.__v = e.__v),
					(i.__.__k[i.__i] = i),
					z(c, i, s),
					i.__e != f && P(i)),
				o.length > l && o.sort(r));
		T.__r = 0;
	}
	function $(n, l, u, t, i, o, e, f, r, c, s) {
		var h,
			a,
			v,
			w,
			_,
			g = (t && t.__k) || y,
			b = l.length;
		for (u.__d = r, I(u, l, g), r = u.__d, h = 0; h < b; h++)
			null != (v = u.__k[h]) &&
				'boolean' != typeof v &&
				'function' != typeof v &&
				((a = -1 === v.__i ? d : g[v.__i] || d),
				(v.__i = h),
				O(n, v, a, i, o, e, f, r, c, s),
				(w = v.__e),
				v.ref &&
					a.ref != v.ref &&
					(a.ref && V(a.ref, null, v), s.push(v.ref, v.__c || w, v)),
				null == _ && null != w && (_ = w),
				v.__u & p || a.__k === v.__k
					? (r && !r.isConnected && (r = M(a)), (r = H(v, r, n)))
					: 'function' == typeof v.type && void 0 !== v.__d
						? (r = v.__d)
						: w && (r = w.nextSibling),
				(v.__d = void 0),
				(v.__u &= -196609));
		(u.__d = r), (u.__e = _);
	}
	function I(n, l, u) {
		var t,
			i,
			o,
			e,
			f,
			r = l.length,
			c = u.length,
			s = c,
			h = 0;
		for (n.__k = [], t = 0; t < r; t++)
			(e = t + h),
				null !=
				(i = n.__k[t] =
					null == (i = l[t]) || 'boolean' == typeof i || 'function' == typeof i
						? null
						: 'string' == typeof i ||
								'number' == typeof i ||
								'bigint' == typeof i ||
								i.constructor == String
							? k(null, i, null, null, null)
							: _(i)
								? k(x, { children: i }, null, null, null)
								: void 0 === i.constructor && i.__b > 0
									? k(i.type, i.props, i.key, i.ref ? i.ref : null, i.__v)
									: i)
					? ((i.__ = n),
						(i.__b = n.__b + 1),
						(f = L(i, u, e, s)),
						(i.__i = f),
						(o = null),
						-1 !== f && (s--, (o = u[f]) && (o.__u |= v)),
						null == o || null === o.__v
							? (-1 == f && h--, 'function' != typeof i.type && (i.__u |= p))
							: f !== e &&
								(f === e + 1
									? h++
									: f > e
										? s > r - e
											? (h += f - e)
											: h--
										: f < e
											? f == e - 1 && (h = f - e)
											: (h = 0),
								f !== t + h && (i.__u |= p)))
					: (o = u[e]) &&
						null == o.key &&
						o.__e &&
						0 == (o.__u & v) &&
						(o.__e == n.__d && (n.__d = M(o)), q(o, o, !1), (u[e] = null), s--);
		if (s)
			for (t = 0; t < c; t++)
				null != (o = u[t]) &&
					0 == (o.__u & v) &&
					(o.__e == n.__d && (n.__d = M(o)), q(o, o));
	}
	function H(n, l, u) {
		var t, i;
		if ('function' == typeof n.type) {
			for (t = n.__k, i = 0; t && i < t.length; i++)
				t[i] && ((t[i].__ = n), (l = H(t[i], l, u)));
			return l;
		}
		n.__e != l && (u.insertBefore(n.__e, l || null), (l = n.__e));
		do {
			l = l && l.nextSibling;
		} while (null != l && 8 === l.nodeType);
		return l;
	}
	function L(n, l, u, t) {
		var i = n.key,
			o = n.type,
			e = u - 1,
			f = u + 1,
			r = l[u];
		if (null === r || (r && i == r.key && o === r.type && 0 == (r.__u & v)))
			return u;
		if (t > (null != r && 0 == (r.__u & v) ? 1 : 0))
			for (; e >= 0 || f < l.length; ) {
				if (e >= 0) {
					if ((r = l[e]) && 0 == (r.__u & v) && i == r.key && o === r.type)
						return e;
					e--;
				}
				if (f < l.length) {
					if ((r = l[f]) && 0 == (r.__u & v) && i == r.key && o === r.type)
						return f;
					f++;
				}
			}
		return -1;
	}
	function j(n, l, u) {
		'-' === l[0]
			? n.setProperty(l, null == u ? '' : u)
			: (n[l] =
					null == u ? '' : 'number' != typeof u || w.test(l) ? u : u + 'px');
	}
	function A(n, l, u, t, i) {
		var o;
		n: if ('style' === l)
			if ('string' == typeof u) n.style.cssText = u;
			else {
				if (('string' == typeof t && (n.style.cssText = t = ''), t))
					for (l in t) (u && l in u) || j(n.style, l, '');
				if (u) for (l in u) (t && u[l] === t[l]) || j(n.style, l, u[l]);
			}
		else if ('o' === l[0] && 'n' === l[1])
			(o = l !== (l = l.replace(/(PointerCapture)$|Capture$/i, '$1'))),
				(l =
					l.toLowerCase() in n || 'onFocusOut' === l || 'onFocusIn' === l
						? l.toLowerCase().slice(2)
						: l.slice(2)),
				n.l || (n.l = {}),
				(n.l[l + o] = u),
				u
					? t
						? (u.u = t.u)
						: ((u.u = c), n.addEventListener(l, o ? h : s, o))
					: n.removeEventListener(l, o ? h : s, o);
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
					n[l] = null == u ? '' : u;
					break n;
				} catch (n) {}
			'function' == typeof u ||
				(null == u || (!1 === u && '-' !== l[4])
					? n.removeAttribute(l)
					: n.setAttribute(l, 'popover' == l && 1 == u ? '' : u));
		}
	}
	function F(n) {
		return function (l) {
			if (this.l) {
				var t = this.l[l.type + n];
				if (null == l.t) l.t = c++;
				else if (l.t < t.u) return;
				return t(u.event ? u.event(l) : l);
			}
		};
	}
	function O(n, l, t, i, o, e, f, r, c, s) {
		var h,
			a,
			p,
			v,
			d,
			y,
			w,
			b,
			m,
			k,
			M,
			P,
			S,
			T,
			I,
			H,
			L = l.type;
		if (void 0 !== l.constructor) return null;
		128 & t.__u && ((c = !!(32 & t.__u)), (e = [(r = l.__e = t.__e)])),
			(h = u.__b) && h(l);
		n: if ('function' == typeof L)
			try {
				if (
					((b = l.props),
					(m = 'prototype' in L && L.prototype.render),
					(k = (h = L.contextType) && i[h.__c]),
					(M = h ? (k ? k.props.value : h.__) : i),
					t.__c
						? (w = (a = l.__c = t.__c).__ = a.__E)
						: (m
								? (l.__c = a = new L(b, M))
								: ((l.__c = a = new C(b, M)),
									(a.constructor = L),
									(a.render = B)),
							k && k.sub(a),
							(a.props = b),
							a.state || (a.state = {}),
							(a.context = M),
							(a.__n = i),
							(p = a.__d = !0),
							(a.__h = []),
							(a._sb = [])),
					m && null == a.__s && (a.__s = a.state),
					m &&
						null != L.getDerivedStateFromProps &&
						(a.__s == a.state && (a.__s = g({}, a.__s)),
						g(a.__s, L.getDerivedStateFromProps(b, a.__s))),
					(v = a.props),
					(d = a.state),
					(a.__v = l),
					p)
				)
					m &&
						null == L.getDerivedStateFromProps &&
						null != a.componentWillMount &&
						a.componentWillMount(),
						m && null != a.componentDidMount && a.__h.push(a.componentDidMount);
				else {
					if (
						(m &&
							null == L.getDerivedStateFromProps &&
							b !== v &&
							null != a.componentWillReceiveProps &&
							a.componentWillReceiveProps(b, M),
						!a.__e &&
							((null != a.shouldComponentUpdate &&
								!1 === a.shouldComponentUpdate(b, a.__s, M)) ||
								l.__v === t.__v))
					) {
						for (
							l.__v !== t.__v &&
								((a.props = b), (a.state = a.__s), (a.__d = !1)),
								l.__e = t.__e,
								l.__k = t.__k,
								l.__k.forEach(function (n) {
									n && (n.__ = l);
								}),
								P = 0;
							P < a._sb.length;
							P++
						)
							a.__h.push(a._sb[P]);
						(a._sb = []), a.__h.length && f.push(a);
						break n;
					}
					null != a.componentWillUpdate && a.componentWillUpdate(b, a.__s, M),
						m &&
							null != a.componentDidUpdate &&
							a.__h.push(function () {
								a.componentDidUpdate(v, d, y);
							});
				}
				if (
					((a.context = M),
					(a.props = b),
					(a.__P = n),
					(a.__e = !1),
					(S = u.__r),
					(T = 0),
					m)
				) {
					for (
						a.state = a.__s,
							a.__d = !1,
							S && S(l),
							h = a.render(a.props, a.state, a.context),
							I = 0;
						I < a._sb.length;
						I++
					)
						a.__h.push(a._sb[I]);
					a._sb = [];
				} else
					do {
						(a.__d = !1),
							S && S(l),
							(h = a.render(a.props, a.state, a.context)),
							(a.state = a.__s);
					} while (a.__d && ++T < 25);
				(a.state = a.__s),
					null != a.getChildContext && (i = g(g({}, i), a.getChildContext())),
					m &&
						!p &&
						null != a.getSnapshotBeforeUpdate &&
						(y = a.getSnapshotBeforeUpdate(v, d)),
					$(
						n,
						_(
							(H =
								null != h && h.type === x && null == h.key
									? h.props.children
									: h)
						)
							? H
							: [H],
						l,
						t,
						i,
						o,
						e,
						f,
						r,
						c,
						s
					),
					(a.base = l.__e),
					(l.__u &= -161),
					a.__h.length && f.push(a),
					w && (a.__E = a.__ = null);
			} catch (n) {
				(l.__v = null),
					c || null != e
						? ((l.__e = r), (l.__u |= c ? 160 : 32), (e[e.indexOf(r)] = null))
						: ((l.__e = t.__e), (l.__k = t.__k)),
					u.__e(n, l, t);
			}
		else
			null == e && l.__v === t.__v
				? ((l.__k = t.__k), (l.__e = t.__e))
				: (l.__e = N(t.__e, l, t, i, o, e, f, c, s));
		(h = u.diffed) && h(l);
	}
	function z(n, l, t) {
		l.__d = void 0;
		for (var i = 0; i < t.length; i++) V(t[i], t[++i], t[++i]);
		u.__c && u.__c(l, n),
			n.some(function (l) {
				try {
					(n = l.__h),
						(l.__h = []),
						n.some(function (n) {
							n.call(l);
						});
				} catch (n) {
					u.__e(n, l.__v);
				}
			});
	}
	function N(n, u, t, i, o, e, f, r, c) {
		var s,
			h,
			a,
			p,
			v,
			y,
			w,
			g = t.props,
			m = u.props,
			k = u.type;
		if (
			('svg' === k
				? (o = 'http://www.w3.org/2000/svg')
				: 'math' === k
					? (o = 'http://www.w3.org/1998/Math/MathML')
					: o || (o = 'http://www.w3.org/1999/xhtml'),
			null != e)
		)
			for (s = 0; s < e.length; s++)
				if (
					(v = e[s]) &&
					'setAttribute' in v == !!k &&
					(k ? v.localName === k : 3 === v.nodeType)
				) {
					(n = v), (e[s] = null);
					break;
				}
		if (null == n) {
			if (null === k) return document.createTextNode(m);
			(n = document.createElementNS(o, k, m.is && m)), (e = null), (r = !1);
		}
		if (null === k) g === m || (r && n.data === m) || (n.data = m);
		else {
			if (
				((e = e && l.call(n.childNodes)), (g = t.props || d), !r && null != e)
			)
				for (g = {}, s = 0; s < n.attributes.length; s++)
					g[(v = n.attributes[s]).name] = v.value;
			for (s in g)
				if (((v = g[s]), 'children' == s));
				else if ('dangerouslySetInnerHTML' == s) a = v;
				else if ('key' !== s && !(s in m)) {
					if (
						('value' == s && 'defaultValue' in m) ||
						('checked' == s && 'defaultChecked' in m)
					)
						continue;
					A(n, s, null, v, o);
				}
			for (s in m)
				(v = m[s]),
					'children' == s
						? (p = v)
						: 'dangerouslySetInnerHTML' == s
							? (h = v)
							: 'value' == s
								? (y = v)
								: 'checked' == s
									? (w = v)
									: 'key' === s ||
										(r && 'function' != typeof v) ||
										g[s] === v ||
										A(n, s, v, g[s], o);
			if (h)
				r ||
					(a && (h.__html === a.__html || h.__html === n.innerHTML)) ||
					(n.innerHTML = h.__html),
					(u.__k = []);
			else if (
				(a && (n.innerHTML = ''),
				$(
					n,
					_(p) ? p : [p],
					u,
					t,
					i,
					'foreignObject' === k ? 'http://www.w3.org/1999/xhtml' : o,
					e,
					f,
					e ? e[0] : t.__k && M(t, 0),
					r,
					c
				),
				null != e)
			)
				for (s = e.length; s--; ) null != e[s] && b(e[s]);
			r ||
				((s = 'value'),
				void 0 !== y &&
					(y !== n[s] ||
						('progress' === k && !y) ||
						('option' === k && y !== g[s])) &&
					A(n, s, y, g[s], o),
				(s = 'checked'),
				void 0 !== w && w !== n[s] && A(n, s, w, g[s], o));
		}
		return n;
	}
	function V(n, l, t) {
		try {
			'function' == typeof n ? n(l) : (n.current = l);
		} catch (n) {
			u.__e(n, t);
		}
	}
	function q(n, l, t) {
		var i, o;
		if (
			(u.unmount && u.unmount(n),
			(i = n.ref) && ((i.current && i.current !== n.__e) || V(i, null, l)),
			null != (i = n.__c))
		) {
			if (i.componentWillUnmount)
				try {
					i.componentWillUnmount();
				} catch (n) {
					u.__e(n, l);
				}
			i.base = i.__P = null;
		}
		if ((i = n.__k))
			for (o = 0; o < i.length; o++)
				i[o] && q(i[o], l, t || 'function' != typeof n.type);
		t || null == n.__e || b(n.__e), (n.__c = n.__ = n.__e = n.__d = void 0);
	}
	function B(n, l, u) {
		return this.constructor(n, u);
	}
	function D(n, t, i) {
		var o, e, f, r;
		u.__ && u.__(n, t),
			(e = (o = 'function' == typeof i) ? null : (i && i.__k) || t.__k),
			(f = []),
			(r = []),
			O(
				t,
				(n = ((!o && i) || t).__k = m(x, null, [n])),
				e || d,
				d,
				t.namespaceURI,
				!o && i ? [i] : e ? null : t.firstChild ? l.call(t.childNodes) : null,
				f,
				!o && i ? i : e ? e.__e : t.firstChild,
				o,
				r
			),
			z(f, n, r);
	}
	(l = y.slice),
		(u = {
			__e: function (n, l, u, t) {
				for (var i, o, e; (l = l.__); )
					if ((i = l.__c) && !i.__)
						try {
							if (
								((o = i.constructor) &&
									null != o.getDerivedStateFromError &&
									(i.setState(o.getDerivedStateFromError(n)), (e = i.__d)),
								null != i.componentDidCatch &&
									(i.componentDidCatch(n, t || {}), (e = i.__d)),
								e)
							)
								return (i.__E = i);
						} catch (l) {
							n = l;
						}
				throw n;
			}
		}),
		(t = 0),
		(i = function (n) {
			return null != n && null == n.constructor;
		}),
		(C.prototype.setState = function (n, l) {
			var u;
			(u =
				null != this.__s && this.__s !== this.state
					? this.__s
					: (this.__s = g({}, this.state))),
				'function' == typeof n && (n = n(g({}, u), this.props)),
				n && g(u, n),
				null != n && this.__v && (l && this._sb.push(l), S(this));
		}),
		(C.prototype.forceUpdate = function (n) {
			this.__v && ((this.__e = !0), n && this.__h.push(n), S(this));
		}),
		(C.prototype.render = x),
		(o = []),
		(f =
			'function' == typeof Promise
				? Promise.prototype.then.bind(Promise.resolve())
				: setTimeout),
		(r = function (n, l) {
			return n.__v.__b - l.__v.__b;
		}),
		(T.__r = 0),
		(c = 0),
		(s = F(!1)),
		(h = F(!0)),
		(a = 0),
		(n.Component = C),
		(n.Fragment = x),
		(n.cloneElement = function (n, u, t) {
			var i,
				o,
				e,
				f,
				r = g({}, n.props);
			for (e in (n.type && n.type.defaultProps && (f = n.type.defaultProps), u))
				'key' == e
					? (i = u[e])
					: 'ref' == e
						? (o = u[e])
						: (r[e] = void 0 === u[e] && void 0 !== f ? f[e] : u[e]);
			return (
				arguments.length > 2 &&
					(r.children = arguments.length > 3 ? l.call(arguments, 2) : t),
				k(n.type, r, i || n.key, o || n.ref, null)
			);
		}),
		(n.createContext = function (n, l) {
			var u = {
				__c: (l = '__cC' + a++),
				__: n,
				Consumer: function (n, l) {
					return n.children(l);
				},
				Provider: function (n) {
					var u, t;
					return (
						this.getChildContext ||
							((u = []),
							((t = {})[l] = this),
							(this.getChildContext = function () {
								return t;
							}),
							(this.componentWillUnmount = function () {
								u = null;
							}),
							(this.shouldComponentUpdate = function (n) {
								this.props.value !== n.value &&
									u.some(function (n) {
										(n.__e = !0), S(n);
									});
							}),
							(this.sub = function (n) {
								u.push(n);
								var l = n.componentWillUnmount;
								n.componentWillUnmount = function () {
									u && u.splice(u.indexOf(n), 1), l && l.call(n);
								};
							})),
						n.children
					);
				}
			};
			return (u.Provider.__ = u.Consumer.contextType = u);
		}),
		(n.createElement = m),
		(n.createRef = function () {
			return { current: null };
		}),
		(n.h = m),
		(n.hydrate = function n(l, u) {
			D(l, u, n);
		}),
		(n.isValidElement = i),
		(n.options = u),
		(n.render = D),
		(n.toChildArray = function n(l, u) {
			return (
				(u = u || []),
				null == l ||
					'boolean' == typeof l ||
					(_(l)
						? l.some(function (l) {
								n(l, u);
							})
						: u.push(l)),
				u
			);
		});
});
//# sourceMappingURL=preact.umd.js.map
