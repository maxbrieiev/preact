import {
	Component as n,
	createElement as t,
	options as e,
	toChildArray as r,
	Fragment as u,
	render as o,
	hydrate as i,
	createContext as l,
	createRef as c,
	cloneElement as f
} from 'preact';
export {
	Component,
	Fragment,
	createContext,
	createElement,
	createRef
} from 'preact';
import {
	useCallback as a,
	useContext as s,
	useDebugValue as h,
	useEffect as v,
	useId as d,
	useImperativeHandle as p,
	useLayoutEffect as m,
	useMemo as y,
	useReducer as _,
	useRef as b,
	useState as S
} from 'preact/hooks';
export * from 'preact/hooks';
function g(n, t) {
	for (var e in t) n[e] = t[e];
	return n;
}
function E(n, t) {
	for (var e in n) if ('__source' !== e && !(e in t)) return !0;
	for (var r in t) if ('__source' !== r && n[r] !== t[r]) return !0;
	return !1;
}
function C(n, t) {
	(this.props = n), (this.context = t);
}
function x(n, e) {
	function r(n) {
		var t = this.props.ref,
			r = t == n.ref;
		return (
			!r && t && (t.call ? t(null) : (t.current = null)),
			e ? !e(this.props, n) || !r : E(this.props, n)
		);
	}
	function u(e) {
		return (this.shouldComponentUpdate = r), t(n, e);
	}
	return (
		(u.displayName = 'Memo(' + (n.displayName || n.name) + ')'),
		(u.prototype.isReactComponent = !0),
		(u.__f = !0),
		u
	);
}
((C.prototype = new n()).isPureReactComponent = !0),
	(C.prototype.shouldComponentUpdate = function (n, t) {
		return E(this.props, n) || E(this.state, t);
	});
var R = e.__b;
e.__b = function (n) {
	n.type && n.type.__f && n.ref && ((n.props.ref = n.ref), (n.ref = null)),
		R && R(n);
};
var w =
	('undefined' != typeof Symbol &&
		Symbol.for &&
		Symbol.for('react.forward_ref')) ||
	3911;
function k(n) {
	function t(t) {
		var e = g({}, t);
		return delete e.ref, n(e, t.ref || null);
	}
	return (
		(t.$$typeof = w),
		(t.render = t),
		(t.prototype.isReactComponent = t.__f = !0),
		(t.displayName = 'ForwardRef(' + (n.displayName || n.name) + ')'),
		t
	);
}
var I = function (n, t) {
		return null == n ? null : r(r(n).map(t));
	},
	N = {
		map: I,
		forEach: I,
		count: function (n) {
			return n ? r(n).length : 0;
		},
		only: function (n) {
			var t = r(n);
			if (1 !== t.length) throw 'Children.only';
			return t[0];
		},
		toArray: r
	},
	M = e.__e;
e.__e = function (n, t, e, r) {
	if (n.then)
		for (var u, o = t; (o = o.__); )
			if ((u = o.__c) && u.__c)
				return null == t.__e && ((t.__e = e.__e), (t.__k = e.__k)), u.__c(n, t);
	M(n, t, e, r);
};
var T = e.unmount;
function A(n, t, e) {
	return (
		n &&
			(n.__c &&
				n.__c.__H &&
				(n.__c.__H.__.forEach(function (n) {
					'function' == typeof n.__c && n.__c();
				}),
				(n.__c.__H = null)),
			null != (n = g({}, n)).__c &&
				(n.__c.__P === e && (n.__c.__P = t), (n.__c = null)),
			(n.__k =
				n.__k &&
				n.__k.map(function (n) {
					return A(n, t, e);
				}))),
		n
	);
}
function D(n, t, e) {
	return (
		n &&
			e &&
			((n.__v = null),
			(n.__k =
				n.__k &&
				n.__k.map(function (n) {
					return D(n, t, e);
				})),
			n.__c &&
				n.__c.__P === t &&
				(n.__e && e.appendChild(n.__e), (n.__c.__e = !0), (n.__c.__P = e))),
		n
	);
}
function L() {
	(this.__u = 0), (this.t = null), (this.__b = null);
}
function O(n) {
	var t = n.__.__c;
	return t && t.__a && t.__a(n);
}
function F(n) {
	var e, r, u;
	function o(o) {
		if (
			(e ||
				(e = n()).then(
					function (n) {
						r = n.default || n;
					},
					function (n) {
						u = n;
					}
				),
			u)
		)
			throw u;
		if (!r) throw e;
		return t(r, o);
	}
	return (o.displayName = 'Lazy'), (o.__f = !0), o;
}
function U() {
	(this.u = null), (this.o = null);
}
(e.unmount = function (n) {
	var t = n.__c;
	t && t.__R && t.__R(), t && 32 & n.__u && (n.type = null), T && T(n);
}),
	((L.prototype = new n()).__c = function (n, t) {
		var e = t.__c,
			r = this;
		null == r.t && (r.t = []), r.t.push(e);
		var u = O(r.__v),
			o = !1,
			i = function () {
				o || ((o = !0), (e.__R = null), u ? u(l) : l());
			};
		e.__R = i;
		var l = function () {
			if (!--r.__u) {
				if (r.state.__a) {
					var n = r.state.__a;
					r.__v.__k[0] = D(n, n.__c.__P, n.__c.__O);
				}
				var t;
				for (r.setState({ __a: (r.__b = null) }); (t = r.t.pop()); )
					t.forceUpdate();
			}
		};
		r.__u++ || 32 & t.__u || r.setState({ __a: (r.__b = r.__v.__k[0]) }),
			n.then(i, i);
	}),
	(L.prototype.componentWillUnmount = function () {
		this.t = [];
	}),
	(L.prototype.render = function (n, e) {
		if (this.__b) {
			if (this.__v.__k) {
				var r = document.createElement('div'),
					o = this.__v.__k[0].__c;
				this.__v.__k[0] = A(this.__b, r, (o.__O = o.__P));
			}
			this.__b = null;
		}
		var i = e.__a && t(u, null, n.fallback);
		return i && (i.__u &= -33), [t(u, null, e.__a ? null : n.children), i];
	});
var V = function (n, t, e) {
	if (
		(++e[1] === e[0] && n.o.delete(t),
		n.props.revealOrder && ('t' !== n.props.revealOrder[0] || !n.o.size))
	)
		for (e = n.u; e; ) {
			for (; e.length > 3; ) e.pop()();
			if (e[1] < e[0]) break;
			n.u = e = e[2];
		}
};
function W(n) {
	return (
		(this.getChildContext = function () {
			return n.context;
		}),
		n.children
	);
}
function P(n) {
	var e = this,
		r = n.i;
	(e.componentWillUnmount = function () {
		o(null, e.l), (e.l = null), (e.i = null);
	}),
		e.i && e.i !== r && e.componentWillUnmount(),
		e.l ||
			((e.i = r),
			(e.l = {
				nodeType: 1,
				parentNode: r,
				childNodes: [],
				appendChild: function (n) {
					this.childNodes.push(n), e.i.appendChild(n);
				},
				insertBefore: function (n, t) {
					this.childNodes.push(n), e.i.appendChild(n);
				},
				removeChild: function (n) {
					this.childNodes.splice(this.childNodes.indexOf(n) >>> 1, 1),
						e.i.removeChild(n);
				}
			})),
		o(t(W, { context: e.context }, n.__v), e.l);
}
function j(n, e) {
	var r = t(P, { __v: n, i: e });
	return (r.containerInfo = e), r;
}
((U.prototype = new n()).__a = function (n) {
	var t = this,
		e = O(t.__v),
		r = t.o.get(n);
	return (
		r[0]++,
		function (u) {
			var o = function () {
				t.props.revealOrder ? (r.push(u), V(t, n, r)) : u();
			};
			e ? e(o) : o();
		}
	);
}),
	(U.prototype.render = function (n) {
		(this.u = null), (this.o = new Map());
		var t = r(n.children);
		n.revealOrder && 'b' === n.revealOrder[0] && t.reverse();
		for (var e = t.length; e--; ) this.o.set(t[e], (this.u = [1, 0, this.u]));
		return n.children;
	}),
	(U.prototype.componentDidUpdate = U.prototype.componentDidMount =
		function () {
			var n = this;
			this.o.forEach(function (t, e) {
				V(n, e, t);
			});
		});
var z =
		('undefined' != typeof Symbol &&
			Symbol.for &&
			Symbol.for('react.element')) ||
		60103,
	B =
		/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,
	H = /^on(Ani|Tra|Tou|BeforeInp|Compo)/,
	Z = /[A-Z0-9]/g,
	Y = 'undefined' != typeof document,
	$ = function (n) {
		return (
			'undefined' != typeof Symbol && 'symbol' == typeof Symbol()
				? /fil|che|rad/
				: /fil|che|ra/
		).test(n);
	};
function q(n, t, e) {
	return (
		null == t.__k && (t.textContent = ''),
		o(n, t),
		'function' == typeof e && e(),
		n ? n.__c : null
	);
}
function G(n, t, e) {
	return i(n, t), 'function' == typeof e && e(), n ? n.__c : null;
}
(n.prototype.isReactComponent = {}),
	[
		'componentWillMount',
		'componentWillReceiveProps',
		'componentWillUpdate'
	].forEach(function (t) {
		Object.defineProperty(n.prototype, t, {
			configurable: !0,
			get: function () {
				return this['UNSAFE_' + t];
			},
			set: function (n) {
				Object.defineProperty(this, t, {
					configurable: !0,
					writable: !0,
					value: n
				});
			}
		});
	});
var J = e.event;
function K() {}
function Q() {
	return this.cancelBubble;
}
function X() {
	return this.defaultPrevented;
}
e.event = function (n) {
	return (
		J && (n = J(n)),
		(n.persist = K),
		(n.isPropagationStopped = Q),
		(n.isDefaultPrevented = X),
		(n.nativeEvent = n)
	);
};
var nn,
	tn = {
		enumerable: !1,
		configurable: !0,
		get: function () {
			return this.class;
		}
	},
	en = e.vnode;
e.vnode = function (n) {
	'string' == typeof n.type &&
		(function (n) {
			var t = n.props,
				e = n.type,
				u = {};
			for (var o in t) {
				var i = t[o];
				if (
					!(
						('value' === o && 'defaultValue' in t && null == i) ||
						(Y && 'children' === o && 'noscript' === e) ||
						'class' === o ||
						'className' === o
					)
				) {
					var l = o.toLowerCase();
					'defaultValue' === o && 'value' in t && null == t.value
						? (o = 'value')
						: 'download' === o && !0 === i
							? (i = '')
							: 'translate' === l && 'no' === i
								? (i = !1)
								: 'ondoubleclick' === l
									? (o = 'ondblclick')
									: 'onchange' !== l ||
											('input' !== e && 'textarea' !== e) ||
											$(t.type)
										? 'onfocus' === l
											? (o = 'onfocusin')
											: 'onblur' === l
												? (o = 'onfocusout')
												: H.test(o)
													? (o = l)
													: -1 === e.indexOf('-') && B.test(o)
														? (o = o.replace(Z, '-$&').toLowerCase())
														: null === i && (i = void 0)
										: (l = o = 'oninput'),
						'oninput' === l && u[(o = l)] && (o = 'oninputCapture'),
						(u[o] = i);
				}
			}
			'select' == e &&
				u.multiple &&
				Array.isArray(u.value) &&
				(u.value = r(t.children).forEach(function (n) {
					n.props.selected = -1 != u.value.indexOf(n.props.value);
				})),
				'select' == e &&
					null != u.defaultValue &&
					(u.value = r(t.children).forEach(function (n) {
						n.props.selected = u.multiple
							? -1 != u.defaultValue.indexOf(n.props.value)
							: u.defaultValue == n.props.value;
					})),
				t.class && !t.className
					? ((u.class = t.class), Object.defineProperty(u, 'className', tn))
					: ((t.className && !t.class) || (t.class && t.className)) &&
						(u.class = u.className = t.className),
				(n.props = u);
		})(n),
		(n.$$typeof = z),
		en && en(n);
};
var rn = e.__r;
e.__r = function (n) {
	rn && rn(n), (nn = n.__c);
};
var un = e.diffed;
e.diffed = function (n) {
	un && un(n);
	var t = n.props,
		e = n.__e;
	null != e &&
		'textarea' === n.type &&
		'value' in t &&
		t.value !== e.value &&
		(e.value = null == t.value ? '' : t.value),
		(nn = null);
};
var on = {
		ReactCurrentDispatcher: {
			current: {
				readContext: function (n) {
					return nn.__n[n.__c].props.value;
				},
				useCallback: a,
				useContext: s,
				useDebugValue: h,
				useDeferredValue: bn,
				useEffect: v,
				useId: d,
				useImperativeHandle: p,
				useInsertionEffect: gn,
				useLayoutEffect: m,
				useMemo: y,
				useReducer: _,
				useRef: b,
				useState: S,
				useSyncExternalStore: Cn,
				useTransition: Sn
			}
		}
	},
	ln = '17.0.2';
function cn(n) {
	return t.bind(null, n);
}
function fn(n) {
	return !!n && n.$$typeof === z;
}
function an(n) {
	return fn(n) && n.type === u;
}
function sn(n) {
	return (
		!!n &&
		!!n.displayName &&
		('string' == typeof n.displayName || n.displayName instanceof String) &&
		n.displayName.startsWith('Memo(')
	);
}
function hn(n) {
	return fn(n) ? f.apply(null, arguments) : n;
}
function vn(n) {
	return !!n.__k && (o(null, n), !0);
}
function dn(n) {
	return (n && (n.base || (1 === n.nodeType && n))) || null;
}
var pn = function (n, t) {
		return n(t);
	},
	mn = function (n, t) {
		return n(t);
	},
	yn = u;
function _n(n) {
	n();
}
function bn(n) {
	return n;
}
function Sn() {
	return [!1, _n];
}
var gn = m,
	En = fn;
function Cn(n, t) {
	var e = t(),
		r = S({ h: { __: e, v: t } }),
		u = r[0].h,
		o = r[1];
	return (
		m(
			function () {
				(u.__ = e), (u.v = t), xn(u) && o({ h: u });
			},
			[n, e, t]
		),
		v(
			function () {
				return (
					xn(u) && o({ h: u }),
					n(function () {
						xn(u) && o({ h: u });
					})
				);
			},
			[n]
		),
		e
	);
}
function xn(n) {
	var t,
		e,
		r = n.v,
		u = n.__;
	try {
		var o = r();
		return !(
			((t = u) === (e = o) && (0 !== t || 1 / t == 1 / e)) ||
			(t != t && e != e)
		);
	} catch (n) {
		return !0;
	}
}
var Rn = {
	useState: S,
	useId: d,
	useReducer: _,
	useEffect: v,
	useLayoutEffect: m,
	useInsertionEffect: gn,
	useTransition: Sn,
	useDeferredValue: bn,
	useSyncExternalStore: Cn,
	startTransition: _n,
	useRef: b,
	useImperativeHandle: p,
	useMemo: y,
	useCallback: a,
	useContext: s,
	useDebugValue: h,
	version: '17.0.2',
	Children: N,
	render: q,
	hydrate: G,
	unmountComponentAtNode: vn,
	createPortal: j,
	createElement: t,
	createContext: l,
	createFactory: cn,
	cloneElement: hn,
	createRef: c,
	Fragment: u,
	isValidElement: fn,
	isElement: En,
	isFragment: an,
	isMemo: sn,
	findDOMNode: dn,
	Component: n,
	PureComponent: C,
	memo: x,
	forwardRef: k,
	flushSync: mn,
	unstable_batchedUpdates: pn,
	StrictMode: yn,
	Suspense: L,
	SuspenseList: U,
	lazy: F,
	__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: on
};
export {
	N as Children,
	C as PureComponent,
	yn as StrictMode,
	L as Suspense,
	U as SuspenseList,
	on as __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
	hn as cloneElement,
	cn as createFactory,
	j as createPortal,
	Rn as default,
	dn as findDOMNode,
	mn as flushSync,
	k as forwardRef,
	G as hydrate,
	En as isElement,
	an as isFragment,
	sn as isMemo,
	fn as isValidElement,
	F as lazy,
	x as memo,
	q as render,
	_n as startTransition,
	vn as unmountComponentAtNode,
	pn as unstable_batchedUpdates,
	bn as useDeferredValue,
	gn as useInsertionEffect,
	Cn as useSyncExternalStore,
	Sn as useTransition,
	ln as version
};
//# sourceMappingURL=compat.module.js.map
