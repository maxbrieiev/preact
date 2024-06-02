!(function (n, t) {
	'object' == typeof exports && 'undefined' != typeof module
		? t(exports, require('preact'))
		: 'function' == typeof define && define.amd
			? define(['exports', 'preact'], t)
			: t(((n || self).preactHooks = {}), n.preact);
})(this, function (n, t) {
	var u,
		r,
		i,
		o,
		f = 0,
		c = [],
		e = [],
		a = t.options,
		v = a.__b,
		l = a.__r,
		d = a.diffed,
		s = a.__c,
		p = a.unmount,
		h = a.__;
	function y(n, t) {
		a.__h && a.__h(r, n, f || t), (f = 0);
		var u = r.__H || (r.__H = { __: [], __h: [] });
		return n >= u.__.length && u.__.push({ __V: e }), u.__[n];
	}
	function m(n) {
		return (f = 1), _(P, n);
	}
	function _(n, t, i) {
		var o = y(u++, 2);
		if (
			((o.t = n),
			!o.__c &&
				((o.__ = [
					i ? i(t) : P(void 0, t),
					function (n) {
						var t = o.__N ? o.__N[0] : o.__[0],
							u = o.t(t, n);
						t !== u && ((o.__N = [u, o.__[1]]), o.__c.setState({}));
					}
				]),
				(o.__c = r),
				!r.u))
		) {
			var f = function (n, t, u) {
				if (!o.__c.__H) return !0;
				var r = o.__c.__H.__.filter(function (n) {
					return !!n.__c;
				});
				if (
					r.every(function (n) {
						return !n.__N;
					})
				)
					return !c || c.call(this, n, t, u);
				var i = !1;
				return (
					r.forEach(function (n) {
						if (n.__N) {
							var t = n.__[0];
							(n.__ = n.__N), (n.__N = void 0), t !== n.__[0] && (i = !0);
						}
					}),
					!(!i && o.__c.props === n) && (!c || c.call(this, n, t, u))
				);
			};
			r.u = !0;
			var c = r.shouldComponentUpdate,
				e = r.componentWillUpdate;
			(r.componentWillUpdate = function (n, t, u) {
				if (this.__e) {
					var r = c;
					(c = void 0), f(n, t, u), (c = r);
				}
				e && e.call(this, n, t, u);
			}),
				(r.shouldComponentUpdate = f);
		}
		return o.__N || o.__;
	}
	function T(n, t) {
		var i = y(u++, 4);
		!a.__s && j(i.__H, t) && ((i.__ = n), (i.i = t), r.__h.push(i));
	}
	function b(n, t) {
		var r = y(u++, 7);
		return j(r.__H, t) ? ((r.__V = n()), (r.i = t), (r.__h = n), r.__V) : r.__;
	}
	function q() {
		for (var n; (n = c.shift()); )
			if (n.__P && n.__H)
				try {
					n.__H.__h.forEach(F), n.__H.__h.forEach(g), (n.__H.__h = []);
				} catch (t) {
					(n.__H.__h = []), a.__e(t, n.__v);
				}
	}
	(a.__b = function (n) {
		(r = null), v && v(n);
	}),
		(a.__ = function (n, t) {
			n && t.__k && t.__k.__m && (n.__m = t.__k.__m), h && h(n, t);
		}),
		(a.__r = function (n) {
			l && l(n), (u = 0);
			var t = (r = n.__c).__H;
			t &&
				(i === r
					? ((t.__h = []),
						(r.__h = []),
						t.__.forEach(function (n) {
							n.__N && (n.__ = n.__N), (n.__V = e), (n.__N = n.i = void 0);
						}))
					: (t.__h.forEach(F), t.__h.forEach(g), (t.__h = []), (u = 0))),
				(i = r);
		}),
		(a.diffed = function (n) {
			d && d(n);
			var t = n.__c;
			t &&
				t.__H &&
				(t.__H.__h.length &&
					((1 !== c.push(t) && o === a.requestAnimationFrame) ||
						((o = a.requestAnimationFrame) || A)(q)),
				t.__H.__.forEach(function (n) {
					n.i && (n.__H = n.i),
						n.__V !== e && (n.__ = n.__V),
						(n.i = void 0),
						(n.__V = e);
				})),
				(i = r = null);
		}),
		(a.__c = function (n, t) {
			t.some(function (n) {
				try {
					n.__h.forEach(F),
						(n.__h = n.__h.filter(function (n) {
							return !n.__ || g(n);
						}));
				} catch (u) {
					t.some(function (n) {
						n.__h && (n.__h = []);
					}),
						(t = []),
						a.__e(u, n.__v);
				}
			}),
				s && s(n, t);
		}),
		(a.unmount = function (n) {
			p && p(n);
			var t,
				u = n.__c;
			u &&
				u.__H &&
				(u.__H.__.forEach(function (n) {
					try {
						F(n);
					} catch (n) {
						t = n;
					}
				}),
				(u.__H = void 0),
				t && a.__e(t, u.__v));
		});
	var x = 'function' == typeof requestAnimationFrame;
	function A(n) {
		var t,
			u = function () {
				clearTimeout(r), x && cancelAnimationFrame(t), setTimeout(n);
			},
			r = setTimeout(u, 100);
		x && (t = requestAnimationFrame(u));
	}
	function F(n) {
		var t = r,
			u = n.__c;
		'function' == typeof u && ((n.__c = void 0), u()), (r = t);
	}
	function g(n) {
		var t = r;
		(n.__c = n.__()), (r = t);
	}
	function j(n, t) {
		return (
			!n ||
			n.length !== t.length ||
			t.some(function (t, u) {
				return t !== n[u];
			})
		);
	}
	function P(n, t) {
		return 'function' == typeof t ? t(n) : t;
	}
	(n.useCallback = function (n, t) {
		return (
			(f = 8),
			b(function () {
				return n;
			}, t)
		);
	}),
		(n.useContext = function (n) {
			var t = r.context[n.__c],
				i = y(u++, 9);
			return (
				(i.c = n),
				t ? (null == i.__ && ((i.__ = !0), t.sub(r)), t.props.value) : n.__
			);
		}),
		(n.useDebugValue = function (n, t) {
			a.useDebugValue && a.useDebugValue(t ? t(n) : n);
		}),
		(n.useEffect = function (n, t) {
			var i = y(u++, 3);
			!a.__s && j(i.__H, t) && ((i.__ = n), (i.i = t), r.__H.__h.push(i));
		}),
		(n.useErrorBoundary = function (n) {
			var t = y(u++, 10),
				i = m();
			return (
				(t.__ = n),
				r.componentDidCatch ||
					(r.componentDidCatch = function (n, u) {
						t.__ && t.__(n, u), i[1](n);
					}),
				[
					i[0],
					function () {
						i[1](void 0);
					}
				]
			);
		}),
		(n.useId = function () {
			var n = y(u++, 11);
			if (!n.__) {
				for (var t = r.__v; null !== t && !t.__m && null !== t.__; ) t = t.__;
				var i = t.__m || (t.__m = [0, 0]);
				n.__ = 'P' + i[0] + '-' + i[1]++;
			}
			return n.__;
		}),
		(n.useImperativeHandle = function (n, t, u) {
			(f = 6),
				T(
					function () {
						return 'function' == typeof n
							? (n(t()),
								function () {
									return n(null);
								})
							: n
								? ((n.current = t()),
									function () {
										return (n.current = null);
									})
								: void 0;
					},
					null == u ? u : u.concat(n)
				);
		}),
		(n.useLayoutEffect = T),
		(n.useMemo = b),
		(n.useReducer = _),
		(n.useRef = function (n) {
			return (
				(f = 5),
				b(function () {
					return { current: n };
				}, [])
			);
		}),
		(n.useState = m);
});
//# sourceMappingURL=hooks.umd.js.map
