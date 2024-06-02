var n = require('preact'),
	t = require('preact/hooks');
function e(n, t) {
	for (var e in t) n[e] = t[e];
	return n;
}
function r(n, t) {
	for (var e in n) if ('__source' !== e && !(e in t)) return !0;
	for (var r in t) if ('__source' !== r && n[r] !== t[r]) return !0;
	return !1;
}
function u(n, t) {
	(this.props = n), (this.context = t);
}
function o(t, e) {
	function u(n) {
		var t = this.props.ref,
			u = t == n.ref;
		return (
			!u && t && (t.call ? t(null) : (t.current = null)),
			e ? !e(this.props, n) || !u : r(this.props, n)
		);
	}
	function o(e) {
		return (this.shouldComponentUpdate = u), n.createElement(t, e);
	}
	return (
		(o.displayName = 'Memo(' + (t.displayName || t.name) + ')'),
		(o.prototype.isReactComponent = !0),
		(o.__f = !0),
		o
	);
}
((u.prototype = new n.Component()).isPureReactComponent = !0),
	(u.prototype.shouldComponentUpdate = function (n, t) {
		return r(this.props, n) || r(this.state, t);
	});
var i = n.options.__b;
n.options.__b = function (n) {
	n.type && n.type.__f && n.ref && ((n.props.ref = n.ref), (n.ref = null)),
		i && i(n);
};
var c =
	('undefined' != typeof Symbol &&
		Symbol.for &&
		Symbol.for('react.forward_ref')) ||
	3911;
function l(n) {
	function t(t) {
		var r = e({}, t);
		return delete r.ref, n(r, t.ref || null);
	}
	return (
		(t.$$typeof = c),
		(t.render = t),
		(t.prototype.isReactComponent = t.__f = !0),
		(t.displayName = 'ForwardRef(' + (n.displayName || n.name) + ')'),
		t
	);
}
var f = function (t, e) {
		return null == t ? null : n.toChildArray(n.toChildArray(t).map(e));
	},
	a = {
		map: f,
		forEach: f,
		count: function (t) {
			return t ? n.toChildArray(t).length : 0;
		},
		only: function (t) {
			var e = n.toChildArray(t);
			if (1 !== e.length) throw 'Children.only';
			return e[0];
		},
		toArray: n.toChildArray
	},
	s = n.options.__e;
n.options.__e = function (n, t, e, r) {
	if (n.then)
		for (var u, o = t; (o = o.__); )
			if ((u = o.__c) && u.__c)
				return null == t.__e && ((t.__e = e.__e), (t.__k = e.__k)), u.__c(n, t);
	s(n, t, e, r);
};
var p = n.options.unmount;
function h(n, t, r) {
	return (
		n &&
			(n.__c &&
				n.__c.__H &&
				(n.__c.__H.__.forEach(function (n) {
					'function' == typeof n.__c && n.__c();
				}),
				(n.__c.__H = null)),
			null != (n = e({}, n)).__c &&
				(n.__c.__P === r && (n.__c.__P = t), (n.__c = null)),
			(n.__k =
				n.__k &&
				n.__k.map(function (n) {
					return h(n, t, r);
				}))),
		n
	);
}
function v(n, t, e) {
	return (
		n &&
			e &&
			((n.__v = null),
			(n.__k =
				n.__k &&
				n.__k.map(function (n) {
					return v(n, t, e);
				})),
			n.__c &&
				n.__c.__P === t &&
				(n.__e && e.appendChild(n.__e), (n.__c.__e = !0), (n.__c.__P = e))),
		n
	);
}
function d() {
	(this.__u = 0), (this.t = null), (this.__b = null);
}
function m(n) {
	var t = n.__.__c;
	return t && t.__a && t.__a(n);
}
function x(t) {
	var e, r, u;
	function o(o) {
		if (
			(e ||
				(e = t()).then(
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
		return n.createElement(r, o);
	}
	return (o.displayName = 'Lazy'), (o.__f = !0), o;
}
function b() {
	(this.u = null), (this.o = null);
}
(n.options.unmount = function (n) {
	var t = n.__c;
	t && t.__R && t.__R(), t && 32 & n.__u && (n.type = null), p && p(n);
}),
	((d.prototype = new n.Component()).__c = function (n, t) {
		var e = t.__c,
			r = this;
		null == r.t && (r.t = []), r.t.push(e);
		var u = m(r.__v),
			o = !1,
			i = function () {
				o || ((o = !0), (e.__R = null), u ? u(c) : c());
			};
		e.__R = i;
		var c = function () {
			if (!--r.__u) {
				if (r.state.__a) {
					var n = r.state.__a;
					r.__v.__k[0] = v(n, n.__c.__P, n.__c.__O);
				}
				var t;
				for (r.setState({ __a: (r.__b = null) }); (t = r.t.pop()); )
					t.forceUpdate();
			}
		};
		r.__u++ || 32 & t.__u || r.setState({ __a: (r.__b = r.__v.__k[0]) }),
			n.then(i, i);
	}),
	(d.prototype.componentWillUnmount = function () {
		this.t = [];
	}),
	(d.prototype.render = function (t, e) {
		if (this.__b) {
			if (this.__v.__k) {
				var r = document.createElement('div'),
					u = this.__v.__k[0].__c;
				this.__v.__k[0] = h(this.__b, r, (u.__O = u.__P));
			}
			this.__b = null;
		}
		var o = e.__a && n.createElement(n.Fragment, null, t.fallback);
		return (
			o && (o.__u &= -33),
			[n.createElement(n.Fragment, null, e.__a ? null : t.children), o]
		);
	});
var y = function (n, t, e) {
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
function _(n) {
	return (
		(this.getChildContext = function () {
			return n.context;
		}),
		n.children
	);
}
function g(t) {
	var e = this,
		r = t.i;
	(e.componentWillUnmount = function () {
		n.render(null, e.l), (e.l = null), (e.i = null);
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
		n.render(n.createElement(_, { context: e.context }, t.__v), e.l);
}
function S(t, e) {
	var r = n.createElement(g, { __v: t, i: e });
	return (r.containerInfo = e), r;
}
((b.prototype = new n.Component()).__a = function (n) {
	var t = this,
		e = m(t.__v),
		r = t.o.get(n);
	return (
		r[0]++,
		function (u) {
			var o = function () {
				t.props.revealOrder ? (r.push(u), y(t, n, r)) : u();
			};
			e ? e(o) : o();
		}
	);
}),
	(b.prototype.render = function (t) {
		(this.u = null), (this.o = new Map());
		var e = n.toChildArray(t.children);
		t.revealOrder && 'b' === t.revealOrder[0] && e.reverse();
		for (var r = e.length; r--; ) this.o.set(e[r], (this.u = [1, 0, this.u]));
		return t.children;
	}),
	(b.prototype.componentDidUpdate = b.prototype.componentDidMount =
		function () {
			var n = this;
			this.o.forEach(function (t, e) {
				y(n, e, t);
			});
		});
var E =
		('undefined' != typeof Symbol &&
			Symbol.for &&
			Symbol.for('react.element')) ||
		60103,
	C =
		/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,
	O = /^on(Ani|Tra|Tou|BeforeInp|Compo)/,
	R = /[A-Z0-9]/g,
	w = 'undefined' != typeof document,
	j = function (n) {
		return (
			'undefined' != typeof Symbol && 'symbol' == typeof Symbol()
				? /fil|che|rad/
				: /fil|che|ra/
		).test(n);
	};
function I(t, e, r) {
	return (
		null == e.__k && (e.textContent = ''),
		n.render(t, e),
		'function' == typeof r && r(),
		t ? t.__c : null
	);
}
function N(t, e, r) {
	return n.hydrate(t, e), 'function' == typeof r && r(), t ? t.__c : null;
}
(n.Component.prototype.isReactComponent = {}),
	[
		'componentWillMount',
		'componentWillReceiveProps',
		'componentWillUpdate'
	].forEach(function (t) {
		Object.defineProperty(n.Component.prototype, t, {
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
var k = n.options.event;
function M() {}
function T() {
	return this.cancelBubble;
}
function A() {
	return this.defaultPrevented;
}
n.options.event = function (n) {
	return (
		k && (n = k(n)),
		(n.persist = M),
		(n.isPropagationStopped = T),
		(n.isDefaultPrevented = A),
		(n.nativeEvent = n)
	);
};
var D,
	L = {
		enumerable: !1,
		configurable: !0,
		get: function () {
			return this.class;
		}
	},
	F = n.options.vnode;
n.options.vnode = function (t) {
	'string' == typeof t.type &&
		(function (t) {
			var e = t.props,
				r = t.type,
				u = {};
			for (var o in e) {
				var i = e[o];
				if (
					!(
						('value' === o && 'defaultValue' in e && null == i) ||
						(w && 'children' === o && 'noscript' === r) ||
						'class' === o ||
						'className' === o
					)
				) {
					var c = o.toLowerCase();
					'defaultValue' === o && 'value' in e && null == e.value
						? (o = 'value')
						: 'download' === o && !0 === i
							? (i = '')
							: 'translate' === c && 'no' === i
								? (i = !1)
								: 'ondoubleclick' === c
									? (o = 'ondblclick')
									: 'onchange' !== c ||
											('input' !== r && 'textarea' !== r) ||
											j(e.type)
										? 'onfocus' === c
											? (o = 'onfocusin')
											: 'onblur' === c
												? (o = 'onfocusout')
												: O.test(o)
													? (o = c)
													: -1 === r.indexOf('-') && C.test(o)
														? (o = o.replace(R, '-$&').toLowerCase())
														: null === i && (i = void 0)
										: (c = o = 'oninput'),
						'oninput' === c && u[(o = c)] && (o = 'oninputCapture'),
						(u[o] = i);
				}
			}
			'select' == r &&
				u.multiple &&
				Array.isArray(u.value) &&
				(u.value = n.toChildArray(e.children).forEach(function (n) {
					n.props.selected = -1 != u.value.indexOf(n.props.value);
				})),
				'select' == r &&
					null != u.defaultValue &&
					(u.value = n.toChildArray(e.children).forEach(function (n) {
						n.props.selected = u.multiple
							? -1 != u.defaultValue.indexOf(n.props.value)
							: u.defaultValue == n.props.value;
					})),
				e.class && !e.className
					? ((u.class = e.class), Object.defineProperty(u, 'className', L))
					: ((e.className && !e.class) || (e.class && e.className)) &&
						(u.class = u.className = e.className),
				(t.props = u);
		})(t),
		(t.$$typeof = E),
		F && F(t);
};
var U = n.options.__r;
n.options.__r = function (n) {
	U && U(n), (D = n.__c);
};
var V = n.options.diffed;
n.options.diffed = function (n) {
	V && V(n);
	var t = n.props,
		e = n.__e;
	null != e &&
		'textarea' === n.type &&
		'value' in t &&
		t.value !== e.value &&
		(e.value = null == t.value ? '' : t.value),
		(D = null);
};
var W = {
	ReactCurrentDispatcher: {
		current: {
			readContext: function (n) {
				return D.__n[n.__c].props.value;
			},
			useCallback: t.useCallback,
			useContext: t.useContext,
			useDebugValue: t.useDebugValue,
			useDeferredValue: Q,
			useEffect: t.useEffect,
			useId: t.useId,
			useImperativeHandle: t.useImperativeHandle,
			useInsertionEffect: nn,
			useLayoutEffect: t.useLayoutEffect,
			useMemo: t.useMemo,
			useReducer: t.useReducer,
			useRef: t.useRef,
			useState: t.useState,
			useSyncExternalStore: en,
			useTransition: X
		}
	}
};
function P(t) {
	return n.createElement.bind(null, t);
}
function z(n) {
	return !!n && n.$$typeof === E;
}
function B(t) {
	return z(t) && t.type === n.Fragment;
}
function H(n) {
	return (
		!!n &&
		!!n.displayName &&
		('string' == typeof n.displayName || n.displayName instanceof String) &&
		n.displayName.startsWith('Memo(')
	);
}
function q(t) {
	return z(t) ? n.cloneElement.apply(null, arguments) : t;
}
function Z(t) {
	return !!t.__k && (n.render(null, t), !0);
}
function Y(n) {
	return (n && (n.base || (1 === n.nodeType && n))) || null;
}
var $ = function (n, t) {
		return n(t);
	},
	G = function (n, t) {
		return n(t);
	},
	J = n.Fragment;
function K(n) {
	n();
}
function Q(n) {
	return n;
}
function X() {
	return [!1, K];
}
var nn = t.useLayoutEffect,
	tn = z;
function en(n, e) {
	var r = e(),
		u = t.useState({ p: { __: r, h: e } }),
		o = u[0].p,
		i = u[1];
	return (
		t.useLayoutEffect(
			function () {
				(o.__ = r), (o.h = e), rn(o) && i({ p: o });
			},
			[n, r, e]
		),
		t.useEffect(
			function () {
				return (
					rn(o) && i({ p: o }),
					n(function () {
						rn(o) && i({ p: o });
					})
				);
			},
			[n]
		),
		r
	);
}
function rn(n) {
	var t,
		e,
		r = n.h,
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
var un = {
	useState: t.useState,
	useId: t.useId,
	useReducer: t.useReducer,
	useEffect: t.useEffect,
	useLayoutEffect: t.useLayoutEffect,
	useInsertionEffect: nn,
	useTransition: X,
	useDeferredValue: Q,
	useSyncExternalStore: en,
	startTransition: K,
	useRef: t.useRef,
	useImperativeHandle: t.useImperativeHandle,
	useMemo: t.useMemo,
	useCallback: t.useCallback,
	useContext: t.useContext,
	useDebugValue: t.useDebugValue,
	version: '17.0.2',
	Children: a,
	render: I,
	hydrate: N,
	unmountComponentAtNode: Z,
	createPortal: S,
	createElement: n.createElement,
	createContext: n.createContext,
	createFactory: P,
	cloneElement: q,
	createRef: n.createRef,
	Fragment: n.Fragment,
	isValidElement: z,
	isElement: tn,
	isFragment: B,
	isMemo: H,
	findDOMNode: Y,
	Component: n.Component,
	PureComponent: u,
	memo: o,
	forwardRef: l,
	flushSync: G,
	unstable_batchedUpdates: $,
	StrictMode: J,
	Suspense: d,
	SuspenseList: b,
	lazy: x,
	__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: W
};
Object.defineProperty(exports, 'Component', {
	enumerable: !0,
	get: function () {
		return n.Component;
	}
}),
	Object.defineProperty(exports, 'Fragment', {
		enumerable: !0,
		get: function () {
			return n.Fragment;
		}
	}),
	Object.defineProperty(exports, 'createContext', {
		enumerable: !0,
		get: function () {
			return n.createContext;
		}
	}),
	Object.defineProperty(exports, 'createElement', {
		enumerable: !0,
		get: function () {
			return n.createElement;
		}
	}),
	Object.defineProperty(exports, 'createRef', {
		enumerable: !0,
		get: function () {
			return n.createRef;
		}
	}),
	(exports.Children = a),
	(exports.PureComponent = u),
	(exports.StrictMode = J),
	(exports.Suspense = d),
	(exports.SuspenseList = b),
	(exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = W),
	(exports.cloneElement = q),
	(exports.createFactory = P),
	(exports.createPortal = S),
	(exports.default = un),
	(exports.findDOMNode = Y),
	(exports.flushSync = G),
	(exports.forwardRef = l),
	(exports.hydrate = N),
	(exports.isElement = tn),
	(exports.isFragment = B),
	(exports.isMemo = H),
	(exports.isValidElement = z),
	(exports.lazy = x),
	(exports.memo = o),
	(exports.render = I),
	(exports.startTransition = K),
	(exports.unmountComponentAtNode = Z),
	(exports.unstable_batchedUpdates = $),
	(exports.useDeferredValue = Q),
	(exports.useInsertionEffect = nn),
	(exports.useSyncExternalStore = en),
	(exports.useTransition = X),
	(exports.version = '17.0.2'),
	Object.keys(t).forEach(function (n) {
		'default' === n ||
			exports.hasOwnProperty(n) ||
			Object.defineProperty(exports, n, {
				enumerable: !0,
				get: function () {
					return t[n];
				}
			});
	});
//# sourceMappingURL=compat.js.map
