var n,
	t,
	r,
	u,
	o = require('preact'),
	i = 0,
	f = [],
	c = [],
	e = o.options,
	a = e.__b,
	v = e.__r,
	s = e.diffed,
	l = e.__c,
	p = e.unmount,
	x = e.__;
function d(n, r) {
	e.__h && e.__h(t, n, i || r), (i = 0);
	var u = t.__H || (t.__H = { __: [], __h: [] });
	return n >= u.__.length && u.__.push({ __V: c }), u.__[n];
}
function m(n) {
	return (i = 1), h(b, n);
}
function h(r, u, o) {
	var i = d(n++, 2);
	if (
		((i.t = r),
		!i.__c &&
			((i.__ = [
				o ? o(u) : b(void 0, u),
				function (n) {
					var t = i.__N ? i.__N[0] : i.__[0],
						r = i.t(t, n);
					t !== r && ((i.__N = [r, i.__[1]]), i.__c.setState({}));
				}
			]),
			(i.__c = t),
			!t.u))
	) {
		var f = function (n, t, r) {
			if (!i.__c.__H) return !0;
			var u = i.__c.__H.__.filter(function (n) {
				return !!n.__c;
			});
			if (
				u.every(function (n) {
					return !n.__N;
				})
			)
				return !c || c.call(this, n, t, r);
			var o = !1;
			return (
				u.forEach(function (n) {
					if (n.__N) {
						var t = n.__[0];
						(n.__ = n.__N), (n.__N = void 0), t !== n.__[0] && (o = !0);
					}
				}),
				!(!o && i.__c.props === n) && (!c || c.call(this, n, t, r))
			);
		};
		t.u = !0;
		var c = t.shouldComponentUpdate,
			e = t.componentWillUpdate;
		(t.componentWillUpdate = function (n, t, r) {
			if (this.__e) {
				var u = c;
				(c = void 0), f(n, t, r), (c = u);
			}
			e && e.call(this, n, t, r);
		}),
			(t.shouldComponentUpdate = f);
	}
	return i.__N || i.__;
}
function y(r, u) {
	var o = d(n++, 4);
	!e.__s && V(o.__H, u) && ((o.__ = r), (o.o = u), t.__h.push(o));
}
function _(t, r) {
	var u = d(n++, 7);
	return V(u.__H, r) ? ((u.__V = t()), (u.o = r), (u.__h = t), u.__V) : u.__;
}
function q() {
	for (var n; (n = f.shift()); )
		if (n.__P && n.__H)
			try {
				n.__H.__h.forEach(T), n.__H.__h.forEach(P), (n.__H.__h = []);
			} catch (t) {
				(n.__H.__h = []), e.__e(t, n.__v);
			}
}
(e.__b = function (n) {
	(t = null), a && a(n);
}),
	(e.__ = function (n, t) {
		n && t.__k && t.__k.__m && (n.__m = t.__k.__m), x && x(n, t);
	}),
	(e.__r = function (u) {
		v && v(u), (n = 0);
		var o = (t = u.__c).__H;
		o &&
			(r === t
				? ((o.__h = []),
					(t.__h = []),
					o.__.forEach(function (n) {
						n.__N && (n.__ = n.__N), (n.__V = c), (n.__N = n.o = void 0);
					}))
				: (o.__h.forEach(T), o.__h.forEach(P), (o.__h = []), (n = 0))),
			(r = t);
	}),
	(e.diffed = function (n) {
		s && s(n);
		var o = n.__c;
		o &&
			o.__H &&
			(o.__H.__h.length &&
				((1 !== f.push(o) && u === e.requestAnimationFrame) ||
					((u = e.requestAnimationFrame) || F)(q)),
			o.__H.__.forEach(function (n) {
				n.o && (n.__H = n.o),
					n.__V !== c && (n.__ = n.__V),
					(n.o = void 0),
					(n.__V = c);
			})),
			(r = t = null);
	}),
	(e.__c = function (n, t) {
		t.some(function (n) {
			try {
				n.__h.forEach(T),
					(n.__h = n.__h.filter(function (n) {
						return !n.__ || P(n);
					}));
			} catch (r) {
				t.some(function (n) {
					n.__h && (n.__h = []);
				}),
					(t = []),
					e.__e(r, n.__v);
			}
		}),
			l && l(n, t);
	}),
	(e.unmount = function (n) {
		p && p(n);
		var t,
			r = n.__c;
		r &&
			r.__H &&
			(r.__H.__.forEach(function (n) {
				try {
					T(n);
				} catch (n) {
					t = n;
				}
			}),
			(r.__H = void 0),
			t && e.__e(t, r.__v));
	});
var A = 'function' == typeof requestAnimationFrame;
function F(n) {
	var t,
		r = function () {
			clearTimeout(u), A && cancelAnimationFrame(t), setTimeout(n);
		},
		u = setTimeout(r, 100);
	A && (t = requestAnimationFrame(r));
}
function T(n) {
	var r = t,
		u = n.__c;
	'function' == typeof u && ((n.__c = void 0), u()), (t = r);
}
function P(n) {
	var r = t;
	(n.__c = n.__()), (t = r);
}
function V(n, t) {
	return (
		!n ||
		n.length !== t.length ||
		t.some(function (t, r) {
			return t !== n[r];
		})
	);
}
function b(n, t) {
	return 'function' == typeof t ? t(n) : t;
}
(exports.useCallback = function (n, t) {
	return (
		(i = 8),
		_(function () {
			return n;
		}, t)
	);
}),
	(exports.useContext = function (r) {
		var u = t.context[r.__c],
			o = d(n++, 9);
		return (
			(o.c = r),
			u ? (null == o.__ && ((o.__ = !0), u.sub(t)), u.props.value) : r.__
		);
	}),
	(exports.useDebugValue = function (n, t) {
		e.useDebugValue && e.useDebugValue(t ? t(n) : n);
	}),
	(exports.useEffect = function (r, u) {
		var o = d(n++, 3);
		!e.__s && V(o.__H, u) && ((o.__ = r), (o.o = u), t.__H.__h.push(o));
	}),
	(exports.useErrorBoundary = function (r) {
		var u = d(n++, 10),
			o = m();
		return (
			(u.__ = r),
			t.componentDidCatch ||
				(t.componentDidCatch = function (n, t) {
					u.__ && u.__(n, t), o[1](n);
				}),
			[
				o[0],
				function () {
					o[1](void 0);
				}
			]
		);
	}),
	(exports.useId = function () {
		var r = d(n++, 11);
		if (!r.__) {
			for (var u = t.__v; null !== u && !u.__m && null !== u.__; ) u = u.__;
			var o = u.__m || (u.__m = [0, 0]);
			r.__ = 'P' + o[0] + '-' + o[1]++;
		}
		return r.__;
	}),
	(exports.useImperativeHandle = function (n, t, r) {
		(i = 6),
			y(
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
				null == r ? r : r.concat(n)
			);
	}),
	(exports.useLayoutEffect = y),
	(exports.useMemo = _),
	(exports.useReducer = h),
	(exports.useRef = function (n) {
		return (
			(i = 5),
			_(function () {
				return { current: n };
			}, [])
		);
	}),
	(exports.useState = m);
//# sourceMappingURL=hooks.js.map
