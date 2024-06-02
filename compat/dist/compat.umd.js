!(function (n, e) {
	'object' == typeof exports && 'undefined' != typeof module
		? e(exports, require('preact'), require('preact/hooks'))
		: 'function' == typeof define && define.amd
			? define(['exports', 'preact', 'preact/hooks'], e)
			: e(((n || self).preactCompat = {}), n.preact, n.preactHooks);
})(this, function (n, e, t) {
	function r(n, e) {
		for (var t in e) n[t] = e[t];
		return n;
	}
	function u(n, e) {
		for (var t in n) if ('__source' !== t && !(t in e)) return !0;
		for (var r in e) if ('__source' !== r && n[r] !== e[r]) return !0;
		return !1;
	}
	function o(n, e) {
		(this.props = n), (this.context = e);
	}
	function i(n, t) {
		function r(n) {
			var e = this.props.ref,
				r = e == n.ref;
			return (
				!r && e && (e.call ? e(null) : (e.current = null)),
				t ? !t(this.props, n) || !r : u(this.props, n)
			);
		}
		function o(t) {
			return (this.shouldComponentUpdate = r), e.createElement(n, t);
		}
		return (
			(o.displayName = 'Memo(' + (n.displayName || n.name) + ')'),
			(o.prototype.isReactComponent = !0),
			(o.__f = !0),
			o
		);
	}
	((o.prototype = new e.Component()).isPureReactComponent = !0),
		(o.prototype.shouldComponentUpdate = function (n, e) {
			return u(this.props, n) || u(this.state, e);
		});
	var c = e.options.__b;
	e.options.__b = function (n) {
		n.type && n.type.__f && n.ref && ((n.props.ref = n.ref), (n.ref = null)),
			c && c(n);
	};
	var f =
		('undefined' != typeof Symbol &&
			Symbol.for &&
			Symbol.for('react.forward_ref')) ||
		3911;
	function l(n) {
		function e(e) {
			var t = r({}, e);
			return delete t.ref, n(t, e.ref || null);
		}
		return (
			(e.$$typeof = f),
			(e.render = e),
			(e.prototype.isReactComponent = e.__f = !0),
			(e.displayName = 'ForwardRef(' + (n.displayName || n.name) + ')'),
			e
		);
	}
	var a = function (n, t) {
			return null == n ? null : e.toChildArray(e.toChildArray(n).map(t));
		},
		s = {
			map: a,
			forEach: a,
			count: function (n) {
				return n ? e.toChildArray(n).length : 0;
			},
			only: function (n) {
				var t = e.toChildArray(n);
				if (1 !== t.length) throw 'Children.only';
				return t[0];
			},
			toArray: e.toChildArray
		},
		h = e.options.__e;
	e.options.__e = function (n, e, t, r) {
		if (n.then)
			for (var u, o = e; (o = o.__); )
				if ((u = o.__c) && u.__c)
					return (
						null == e.__e && ((e.__e = t.__e), (e.__k = t.__k)), u.__c(n, e)
					);
		h(n, e, t, r);
	};
	var d = e.options.unmount;
	function v(n, e, t) {
		return (
			n &&
				(n.__c &&
					n.__c.__H &&
					(n.__c.__H.__.forEach(function (n) {
						'function' == typeof n.__c && n.__c();
					}),
					(n.__c.__H = null)),
				null != (n = r({}, n)).__c &&
					(n.__c.__P === t && (n.__c.__P = e), (n.__c = null)),
				(n.__k =
					n.__k &&
					n.__k.map(function (n) {
						return v(n, e, t);
					}))),
			n
		);
	}
	function p(n, e, t) {
		return (
			n &&
				t &&
				((n.__v = null),
				(n.__k =
					n.__k &&
					n.__k.map(function (n) {
						return p(n, e, t);
					})),
				n.__c &&
					n.__c.__P === e &&
					(n.__e && t.appendChild(n.__e), (n.__c.__e = !0), (n.__c.__P = t))),
			n
		);
	}
	function m() {
		(this.__u = 0), (this.t = null), (this.__b = null);
	}
	function b(n) {
		var e = n.__.__c;
		return e && e.__a && e.__a(n);
	}
	function y(n) {
		var t, r, u;
		function o(o) {
			if (
				(t ||
					(t = n()).then(
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
			if (!r) throw t;
			return e.createElement(r, o);
		}
		return (o.displayName = 'Lazy'), (o.__f = !0), o;
	}
	function _() {
		(this.u = null), (this.o = null);
	}
	(e.options.unmount = function (n) {
		var e = n.__c;
		e && e.__R && e.__R(), e && 32 & n.__u && (n.type = null), d && d(n);
	}),
		((m.prototype = new e.Component()).__c = function (n, e) {
			var t = e.__c,
				r = this;
			null == r.t && (r.t = []), r.t.push(t);
			var u = b(r.__v),
				o = !1,
				i = function () {
					o || ((o = !0), (t.__R = null), u ? u(c) : c());
				};
			t.__R = i;
			var c = function () {
				if (!--r.__u) {
					if (r.state.__a) {
						var n = r.state.__a;
						r.__v.__k[0] = p(n, n.__c.__P, n.__c.__O);
					}
					var e;
					for (r.setState({ __a: (r.__b = null) }); (e = r.t.pop()); )
						e.forceUpdate();
				}
			};
			r.__u++ || 32 & e.__u || r.setState({ __a: (r.__b = r.__v.__k[0]) }),
				n.then(i, i);
		}),
		(m.prototype.componentWillUnmount = function () {
			this.t = [];
		}),
		(m.prototype.render = function (n, t) {
			if (this.__b) {
				if (this.__v.__k) {
					var r = document.createElement('div'),
						u = this.__v.__k[0].__c;
					this.__v.__k[0] = v(this.__b, r, (u.__O = u.__P));
				}
				this.__b = null;
			}
			var o = t.__a && e.createElement(e.Fragment, null, n.fallback);
			return (
				o && (o.__u &= -33),
				[e.createElement(e.Fragment, null, t.__a ? null : n.children), o]
			);
		});
	var g = function (n, e, t) {
		if (
			(++t[1] === t[0] && n.o.delete(e),
			n.props.revealOrder && ('t' !== n.props.revealOrder[0] || !n.o.size))
		)
			for (t = n.u; t; ) {
				for (; t.length > 3; ) t.pop()();
				if (t[1] < t[0]) break;
				n.u = t = t[2];
			}
	};
	function S(n) {
		return (
			(this.getChildContext = function () {
				return n.context;
			}),
			n.children
		);
	}
	function E(n) {
		var t = this,
			r = n.i;
		(t.componentWillUnmount = function () {
			e.render(null, t.l), (t.l = null), (t.i = null);
		}),
			t.i && t.i !== r && t.componentWillUnmount(),
			t.l ||
				((t.i = r),
				(t.l = {
					nodeType: 1,
					parentNode: r,
					childNodes: [],
					appendChild: function (n) {
						this.childNodes.push(n), t.i.appendChild(n);
					},
					insertBefore: function (n, e) {
						this.childNodes.push(n), t.i.appendChild(n);
					},
					removeChild: function (n) {
						this.childNodes.splice(this.childNodes.indexOf(n) >>> 1, 1),
							t.i.removeChild(n);
					}
				})),
			e.render(e.createElement(S, { context: t.context }, n.__v), t.l);
	}
	function C(n, t) {
		var r = e.createElement(E, { __v: n, i: t });
		return (r.containerInfo = t), r;
	}
	((_.prototype = new e.Component()).__a = function (n) {
		var e = this,
			t = b(e.__v),
			r = e.o.get(n);
		return (
			r[0]++,
			function (u) {
				var o = function () {
					e.props.revealOrder ? (r.push(u), g(e, n, r)) : u();
				};
				t ? t(o) : o();
			}
		);
	}),
		(_.prototype.render = function (n) {
			(this.u = null), (this.o = new Map());
			var t = e.toChildArray(n.children);
			n.revealOrder && 'b' === n.revealOrder[0] && t.reverse();
			for (var r = t.length; r--; ) this.o.set(t[r], (this.u = [1, 0, this.u]));
			return n.children;
		}),
		(_.prototype.componentDidUpdate = _.prototype.componentDidMount =
			function () {
				var n = this;
				this.o.forEach(function (e, t) {
					g(n, t, e);
				});
			});
	var x =
			('undefined' != typeof Symbol &&
				Symbol.for &&
				Symbol.for('react.element')) ||
			60103,
		O =
			/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,
		R = /^on(Ani|Tra|Tou|BeforeInp|Compo)/,
		w = /[A-Z0-9]/g,
		j = 'undefined' != typeof document,
		T = function (n) {
			return (
				'undefined' != typeof Symbol && 'symbol' == typeof Symbol()
					? /fil|che|rad/
					: /fil|che|ra/
			).test(n);
		};
	function k(n, t, r) {
		return (
			null == t.__k && (t.textContent = ''),
			e.render(n, t),
			'function' == typeof r && r(),
			n ? n.__c : null
		);
	}
	function I(n, t, r) {
		return e.hydrate(n, t), 'function' == typeof r && r(), n ? n.__c : null;
	}
	(e.Component.prototype.isReactComponent = {}),
		[
			'componentWillMount',
			'componentWillReceiveProps',
			'componentWillUpdate'
		].forEach(function (n) {
			Object.defineProperty(e.Component.prototype, n, {
				configurable: !0,
				get: function () {
					return this['UNSAFE_' + n];
				},
				set: function (e) {
					Object.defineProperty(this, n, {
						configurable: !0,
						writable: !0,
						value: e
					});
				}
			});
		});
	var N = e.options.event;
	function M() {}
	function A() {
		return this.cancelBubble;
	}
	function D() {
		return this.defaultPrevented;
	}
	e.options.event = function (n) {
		return (
			N && (n = N(n)),
			(n.persist = M),
			(n.isPropagationStopped = A),
			(n.isDefaultPrevented = D),
			(n.nativeEvent = n)
		);
	};
	var L,
		F = {
			enumerable: !1,
			configurable: !0,
			get: function () {
				return this.class;
			}
		},
		U = e.options.vnode;
	e.options.vnode = function (n) {
		'string' == typeof n.type &&
			(function (n) {
				var t = n.props,
					r = n.type,
					u = {};
				for (var o in t) {
					var i = t[o];
					if (
						!(
							('value' === o && 'defaultValue' in t && null == i) ||
							(j && 'children' === o && 'noscript' === r) ||
							'class' === o ||
							'className' === o
						)
					) {
						var c = o.toLowerCase();
						'defaultValue' === o && 'value' in t && null == t.value
							? (o = 'value')
							: 'download' === o && !0 === i
								? (i = '')
								: 'translate' === c && 'no' === i
									? (i = !1)
									: 'ondoubleclick' === c
										? (o = 'ondblclick')
										: 'onchange' !== c ||
												('input' !== r && 'textarea' !== r) ||
												T(t.type)
											? 'onfocus' === c
												? (o = 'onfocusin')
												: 'onblur' === c
													? (o = 'onfocusout')
													: R.test(o)
														? (o = c)
														: -1 === r.indexOf('-') && O.test(o)
															? (o = o.replace(w, '-$&').toLowerCase())
															: null === i && (i = void 0)
											: (c = o = 'oninput'),
							'oninput' === c && u[(o = c)] && (o = 'oninputCapture'),
							(u[o] = i);
					}
				}
				'select' == r &&
					u.multiple &&
					Array.isArray(u.value) &&
					(u.value = e.toChildArray(t.children).forEach(function (n) {
						n.props.selected = -1 != u.value.indexOf(n.props.value);
					})),
					'select' == r &&
						null != u.defaultValue &&
						(u.value = e.toChildArray(t.children).forEach(function (n) {
							n.props.selected = u.multiple
								? -1 != u.defaultValue.indexOf(n.props.value)
								: u.defaultValue == n.props.value;
						})),
					t.class && !t.className
						? ((u.class = t.class), Object.defineProperty(u, 'className', F))
						: ((t.className && !t.class) || (t.class && t.className)) &&
							(u.class = u.className = t.className),
					(n.props = u);
			})(n),
			(n.$$typeof = x),
			U && U(n);
	};
	var V = e.options.__r;
	e.options.__r = function (n) {
		V && V(n), (L = n.__c);
	};
	var W = e.options.diffed;
	e.options.diffed = function (n) {
		W && W(n);
		var e = n.props,
			t = n.__e;
		null != t &&
			'textarea' === n.type &&
			'value' in e &&
			e.value !== t.value &&
			(t.value = null == e.value ? '' : e.value),
			(L = null);
	};
	var P = {
			ReactCurrentDispatcher: {
				current: {
					readContext: function (n) {
						return L.__n[n.__c].props.value;
					},
					useCallback: t.useCallback,
					useContext: t.useContext,
					useDebugValue: t.useDebugValue,
					useDeferredValue: nn,
					useEffect: t.useEffect,
					useId: t.useId,
					useImperativeHandle: t.useImperativeHandle,
					useInsertionEffect: tn,
					useLayoutEffect: t.useLayoutEffect,
					useMemo: t.useMemo,
					useReducer: t.useReducer,
					useRef: t.useRef,
					useState: t.useState,
					useSyncExternalStore: un,
					useTransition: en
				}
			}
		},
		z = '17.0.2';
	function B(n) {
		return e.createElement.bind(null, n);
	}
	function H(n) {
		return !!n && n.$$typeof === x;
	}
	function q(n) {
		return H(n) && n.type === e.Fragment;
	}
	function Z(n) {
		return (
			!!n &&
			!!n.displayName &&
			('string' == typeof n.displayName || n.displayName instanceof String) &&
			n.displayName.startsWith('Memo(')
		);
	}
	function Y(n) {
		return H(n) ? e.cloneElement.apply(null, arguments) : n;
	}
	function $(n) {
		return !!n.__k && (e.render(null, n), !0);
	}
	function G(n) {
		return (n && (n.base || (1 === n.nodeType && n))) || null;
	}
	var J = function (n, e) {
			return n(e);
		},
		K = function (n, e) {
			return n(e);
		},
		Q = e.Fragment;
	function X(n) {
		n();
	}
	function nn(n) {
		return n;
	}
	function en() {
		return [!1, X];
	}
	var tn = t.useLayoutEffect,
		rn = H;
	function un(n, e) {
		var r = e(),
			u = t.useState({ h: { __: r, v: e } }),
			o = u[0].h,
			i = u[1];
		return (
			t.useLayoutEffect(
				function () {
					(o.__ = r), (o.v = e), on(o) && i({ h: o });
				},
				[n, r, e]
			),
			t.useEffect(
				function () {
					return (
						on(o) && i({ h: o }),
						n(function () {
							on(o) && i({ h: o });
						})
					);
				},
				[n]
			),
			r
		);
	}
	function on(n) {
		var e,
			t,
			r = n.v,
			u = n.__;
		try {
			var o = r();
			return !(
				((e = u) === (t = o) && (0 !== e || 1 / e == 1 / t)) ||
				(e != e && t != t)
			);
		} catch (n) {
			return !0;
		}
	}
	var cn = {
		useState: t.useState,
		useId: t.useId,
		useReducer: t.useReducer,
		useEffect: t.useEffect,
		useLayoutEffect: t.useLayoutEffect,
		useInsertionEffect: tn,
		useTransition: en,
		useDeferredValue: nn,
		useSyncExternalStore: un,
		startTransition: X,
		useRef: t.useRef,
		useImperativeHandle: t.useImperativeHandle,
		useMemo: t.useMemo,
		useCallback: t.useCallback,
		useContext: t.useContext,
		useDebugValue: t.useDebugValue,
		version: z,
		Children: s,
		render: k,
		hydrate: I,
		unmountComponentAtNode: $,
		createPortal: C,
		createElement: e.createElement,
		createContext: e.createContext,
		createFactory: B,
		cloneElement: Y,
		createRef: e.createRef,
		Fragment: e.Fragment,
		isValidElement: H,
		isElement: rn,
		isFragment: q,
		isMemo: Z,
		findDOMNode: G,
		Component: e.Component,
		PureComponent: o,
		memo: i,
		forwardRef: l,
		flushSync: K,
		unstable_batchedUpdates: J,
		StrictMode: Q,
		Suspense: m,
		SuspenseList: _,
		lazy: y,
		__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: P
	};
	Object.defineProperty(n, 'Component', {
		enumerable: !0,
		get: function () {
			return e.Component;
		}
	}),
		Object.defineProperty(n, 'Fragment', {
			enumerable: !0,
			get: function () {
				return e.Fragment;
			}
		}),
		Object.defineProperty(n, 'createContext', {
			enumerable: !0,
			get: function () {
				return e.createContext;
			}
		}),
		Object.defineProperty(n, 'createElement', {
			enumerable: !0,
			get: function () {
				return e.createElement;
			}
		}),
		Object.defineProperty(n, 'createRef', {
			enumerable: !0,
			get: function () {
				return e.createRef;
			}
		}),
		(n.Children = s),
		(n.PureComponent = o),
		(n.StrictMode = Q),
		(n.Suspense = m),
		(n.SuspenseList = _),
		(n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = P),
		(n.cloneElement = Y),
		(n.createFactory = B),
		(n.createPortal = C),
		(n.default = cn),
		(n.findDOMNode = G),
		(n.flushSync = K),
		(n.forwardRef = l),
		(n.hydrate = I),
		(n.isElement = rn),
		(n.isFragment = q),
		(n.isMemo = Z),
		(n.isValidElement = H),
		(n.lazy = y),
		(n.memo = i),
		(n.render = k),
		(n.startTransition = X),
		(n.unmountComponentAtNode = $),
		(n.unstable_batchedUpdates = J),
		(n.useDeferredValue = nn),
		(n.useInsertionEffect = tn),
		(n.useSyncExternalStore = un),
		(n.useTransition = en),
		(n.version = z),
		Object.keys(t).forEach(function (e) {
			'default' === e ||
				n.hasOwnProperty(e) ||
				Object.defineProperty(n, e, {
					enumerable: !0,
					get: function () {
						return t[e];
					}
				});
		});
});
//# sourceMappingURL=compat.umd.js.map
