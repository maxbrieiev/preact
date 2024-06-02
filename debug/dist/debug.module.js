import { Fragment as n, options as e, Component as t } from 'preact';
import 'preact/devtools';
var o = {};
function r() {
	o = {};
}
function a(e) {
	return e.type === n
		? 'Fragment'
		: 'function' == typeof e.type
			? e.type.displayName || e.type.name
			: 'string' == typeof e.type
				? e.type
				: '#text';
}
var i = [],
	s = [];
function c() {
	return i.length > 0 ? i[i.length - 1] : null;
}
var l = !0;
function u(e) {
	return 'function' == typeof e.type && e.type != n;
}
function f(n) {
	for (var e = [n], t = n; null != t.__o; ) e.push(t.__o), (t = t.__o);
	return e.reduce(function (n, e) {
		n += '  in ' + a(e);
		var t = e.__source;
		return (
			t
				? (n += ' (at ' + t.fileName + ':' + t.lineNumber + ')')
				: l &&
					console.warn(
						'Add @babel/plugin-transform-react-jsx-source to get a more detailed component stack. Note that you should not add it to production builds of your App for bundle size reasons.'
					),
			(l = !1),
			n + '\n'
		);
	}, '');
}
var p = 'function' == typeof WeakMap;
function d(n) {
	var e = [];
	return n.__k
		? (n.__k.forEach(function (n) {
				n && 'function' == typeof n.type
					? e.push.apply(e, d(n))
					: n && 'string' == typeof n.type && e.push(n.type);
			}),
			e)
		: e;
}
function h(n) {
	return n
		? 'function' == typeof n.type
			? null === n.__
				? null !== n.__e && null !== n.__e.parentNode
					? n.__e.parentNode.localName
					: ''
				: h(n.__)
			: n.type
		: '';
}
var v = t.prototype.setState;
function y(n) {
	return (
		'table' === n ||
		'tfoot' === n ||
		'tbody' === n ||
		'thead' === n ||
		'td' === n ||
		'tr' === n ||
		'th' === n
	);
}
t.prototype.setState = function (n, e) {
	return (
		null == this.__v &&
			null == this.state &&
			console.warn(
				'Calling "this.setState" inside the constructor of a component is a no-op and might be a bug in your application. Instead, set "this.state = {}" directly.\n\n' +
					f(c())
			),
		v.call(this, n, e)
	);
};
var m =
		/^(address|article|aside|blockquote|details|div|dl|fieldset|figcaption|figure|footer|form|h1|h2|h3|h4|h5|h6|header|hgroup|hr|main|menu|nav|ol|p|pre|search|section|table|ul)$/,
	b = t.prototype.forceUpdate;
function w(n) {
	var e = n.props,
		t = a(n),
		o = '';
	for (var r in e)
		if (e.hasOwnProperty(r) && 'children' !== r) {
			var i = e[r];
			'function' == typeof i &&
				(i = 'function ' + (i.displayName || i.name) + '() {}'),
				(i =
					Object(i) !== i || i.toString
						? i + ''
						: Object.prototype.toString.call(i)),
				(o += ' ' + r + '=' + JSON.stringify(i));
		}
	var s = e.children;
	return '<' + t + o + (s && s.length ? '>..</' + t + '>' : ' />');
}
(t.prototype.forceUpdate = function (n) {
	return (
		null == this.__v
			? console.warn(
					'Calling "this.forceUpdate" inside the constructor of a component is a no-op and might be a bug in your application.\n\n' +
						f(c())
				)
			: null == this.__P &&
				console.warn(
					'Can\'t call "this.forceUpdate" on an unmounted component. This is a no-op, but it indicates a memory leak in your application. To fix, cancel all subscriptions and asynchronous tasks in the componentWillUnmount method.\n\n' +
						f(this.__v)
				),
		b.call(this, n)
	);
}),
	(function () {
		!(function () {
			var n = e.__b,
				t = e.diffed,
				o = e.__,
				r = e.vnode,
				a = e.__r;
			(e.diffed = function (n) {
				u(n) && s.pop(), i.pop(), t && t(n);
			}),
				(e.__b = function (e) {
					u(e) && i.push(e), n && n(e);
				}),
				(e.__ = function (n, e) {
					(s = []), o && o(n, e);
				}),
				(e.vnode = function (n) {
					(n.__o = s.length > 0 ? s[s.length - 1] : null), r && r(n);
				}),
				(e.__r = function (n) {
					u(n) && s.push(n), a && a(n);
				});
		})();
		var n = !1,
			t = e.__b,
			r = e.diffed,
			c = e.vnode,
			l = e.__r,
			v = e.__e,
			b = e.__,
			g = e.__h,
			E = p
				? {
						useEffect: new WeakMap(),
						useLayoutEffect: new WeakMap(),
						lazyPropTypes: new WeakMap()
					}
				: null,
			k = [];
		(e.__e = function (n, e, t, o) {
			if (e && e.__c && 'function' == typeof n.then) {
				var r = n;
				n = new Error('Missing Suspense. The throwing component was: ' + a(e));
				for (var i = e; i; i = i.__)
					if (i.__c && i.__c.__c) {
						n = r;
						break;
					}
				if (n instanceof Error) throw n;
			}
			try {
				((o = o || {}).componentStack = f(e)),
					v(n, e, t, o),
					'function' != typeof n.then &&
						setTimeout(function () {
							throw n;
						});
			} catch (n) {
				throw n;
			}
		}),
			(e.__ = function (n, e) {
				if (!e)
					throw new Error(
						'Undefined parent passed to render(), this is the second argument.\nCheck if the element is available in the DOM/has the correct id.'
					);
				var t;
				switch (e.nodeType) {
					case 1:
					case 11:
					case 9:
						t = !0;
						break;
					default:
						t = !1;
				}
				if (!t) {
					var o = a(n);
					throw new Error(
						'Expected a valid HTML node as a second argument to render.\tReceived ' +
							e +
							' instead: render(<' +
							o +
							' />, ' +
							e +
							');'
					);
				}
				b && b(n, e);
			}),
			(e.__b = function (e) {
				var r = e.type;
				if (((n = !0), void 0 === r))
					throw new Error(
						'Undefined component passed to createElement()\n\nYou likely forgot to export your component or might have mixed up default and named imports' +
							w(e) +
							'\n\n' +
							f(e)
					);
				if (null != r && 'object' == typeof r) {
					if (void 0 !== r.__k && void 0 !== r.__e)
						throw new Error(
							'Invalid type passed to createElement(): ' +
								r +
								'\n\nDid you accidentally pass a JSX literal as JSX twice?\n\n  let My' +
								a(e) +
								' = ' +
								w(r) +
								';\n  let vnode = <My' +
								a(e) +
								' />;\n\nThis usually happens when you export a JSX literal and not the component.\n\n' +
								f(e)
						);
					throw new Error(
						'Invalid type passed to createElement(): ' +
							(Array.isArray(r) ? 'array' : r)
					);
				}
				if (
					void 0 !== e.ref &&
					'function' != typeof e.ref &&
					'object' != typeof e.ref &&
					!('$$typeof' in e)
				)
					throw new Error(
						'Component\'s "ref" property should be a function, or an object created by createRef(), but got [' +
							typeof e.ref +
							'] instead\n' +
							w(e) +
							'\n\n' +
							f(e)
					);
				if ('string' == typeof e.type)
					for (var i in e.props)
						if (
							'o' === i[0] &&
							'n' === i[1] &&
							'function' != typeof e.props[i] &&
							null != e.props[i]
						)
							throw new Error(
								'Component\'s "' +
									i +
									'" property should be a function, but got [' +
									typeof e.props[i] +
									'] instead\n' +
									w(e) +
									'\n\n' +
									f(e)
							);
				if ('function' == typeof e.type && e.type.propTypes) {
					if (
						'Lazy' === e.type.displayName &&
						E &&
						!E.lazyPropTypes.has(e.type)
					) {
						var s =
							'PropTypes are not supported on lazy(). Use propTypes on the wrapped component itself. ';
						try {
							var c = e.type();
							E.lazyPropTypes.set(e.type, !0),
								console.warn(s + 'Component wrapped in lazy() is ' + a(c));
						} catch (n) {
							console.warn(
								s +
									"We will log the wrapped component's name once it is loaded."
							);
						}
					}
					var l = e.props;
					e.type.__f &&
						delete (l = (function (n, e) {
							for (var t in e) n[t] = e[t];
							return n;
						})({}, l)).ref,
						(function (n, e, t, r, a) {
							Object.keys(n).forEach(function (t) {
								var i;
								try {
									i = n[t](
										e,
										t,
										r,
										'prop',
										null,
										'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED'
									);
								} catch (n) {
									i = n;
								}
								i &&
									!(i.message in o) &&
									((o[i.message] = !0),
									console.error(
										'Failed prop type: ' + i.message + ((a && '\n' + a()) || '')
									));
							});
						})(e.type.propTypes, l, 0, a(e), function () {
							return f(e);
						});
				}
				t && t(e);
			});
		var _,
			T = 0;
		(e.__r = function (e) {
			l && l(e), (n = !0);
			var t = e.__c;
			if ((t === _ ? T++ : (T = 1), T >= 25))
				throw new Error(
					'Too many re-renders. This is limited to prevent an infinite loop which may lock up your browser. The component causing this is: ' +
						a(e)
				);
			_ = t;
		}),
			(e.__h = function (e, t, o) {
				if (!e || !n)
					throw new Error('Hook can only be invoked from render methods.');
				g && g(e, t, o);
			});
		var I = function (n, e) {
				return {
					get: function () {
						var t = 'get' + n + e;
						k &&
							k.indexOf(t) < 0 &&
							(k.push(t),
							console.warn('getting vnode.' + n + ' is deprecated, ' + e));
					},
					set: function () {
						var t = 'set' + n + e;
						k &&
							k.indexOf(t) < 0 &&
							(k.push(t),
							console.warn('setting vnode.' + n + ' is not allowed, ' + e));
					}
				};
			},
			j = {
				nodeName: I('nodeName', 'use vnode.type'),
				attributes: I('attributes', 'use vnode.props'),
				children: I('children', 'use vnode.props.children')
			},
			O = Object.create({}, j);
		(e.vnode = function (n) {
			var e = n.props;
			if (null !== n.type && null != e && ('__source' in e || '__self' in e)) {
				var t = (n.props = {});
				for (var o in e) {
					var r = e[o];
					'__source' === o
						? (n.__source = r)
						: '__self' === o
							? (n.__self = r)
							: (t[o] = r);
				}
			}
			(n.__proto__ = O), c && c(n);
		}),
			(e.diffed = function (e) {
				var t,
					o = e.type,
					i = e.__;
				if (
					(e.__k &&
						e.__k.forEach(function (n) {
							if ('object' == typeof n && n && void 0 === n.type) {
								var t = Object.keys(n).join(',');
								throw new Error(
									'Objects are not valid as a child. Encountered an object with the keys {' +
										t +
										'}.\n\n' +
										f(e)
								);
							}
						}),
					e.__c === _ && (T = 0),
					'string' == typeof o &&
						(y(o) || 'p' === o || 'a' === o || 'button' === o))
				) {
					var s = h(i);
					if ('' !== s)
						'table' === o && 'td' !== s && y(s)
							? (console.log(s, i.__e),
								console.error(
									'Improper nesting of table. Your <table> should not have a table-node parent.' +
										w(e) +
										'\n\n' +
										f(e)
								))
							: ('thead' !== o && 'tfoot' !== o && 'tbody' !== o) ||
									'table' === s
								? 'tr' === o && 'thead' !== s && 'tfoot' !== s && 'tbody' !== s
									? console.error(
											'Improper nesting of table. Your <tr> should have a <thead/tbody/tfoot> parent.' +
												w(e) +
												'\n\n' +
												f(e)
										)
									: 'td' === o && 'tr' !== s
										? console.error(
												'Improper nesting of table. Your <td> should have a <tr> parent.' +
													w(e) +
													'\n\n' +
													f(e)
											)
										: 'th' === o &&
											'tr' !== s &&
											console.error(
												'Improper nesting of table. Your <th> should have a <tr>.' +
													w(e) +
													'\n\n' +
													f(e)
											)
								: console.error(
										'Improper nesting of table. Your <thead/tbody/tfoot> should have a <table> parent.' +
											w(e) +
											'\n\n' +
											f(e)
									);
					else if ('p' === o) {
						var c = d(e).filter(function (n) {
							return m.test(n);
						});
						c.length &&
							console.error(
								'Improper nesting of paragraph. Your <p> should not have ' +
									c.join(', ') +
									'as child-elements.' +
									w(e) +
									'\n\n' +
									f(e)
							);
					} else
						('a' !== o && 'button' !== o) ||
							(-1 !== d(e).indexOf(o) &&
								console.error(
									'Improper nesting of interactive content. Your <' +
										o +
										'> should not have other ' +
										('a' === o ? 'anchor' : 'button') +
										' tags as child-elements.' +
										w(e) +
										'\n\n' +
										f(e)
								));
				}
				if (((n = !1), r && r(e), null != e.__k))
					for (var l = [], u = 0; u < e.__k.length; u++) {
						var p = e.__k[u];
						if (p && null != p.key) {
							var v = p.key;
							if (-1 !== l.indexOf(v)) {
								console.error(
									'Following component has two or more children with the same key attribute: "' +
										v +
										'". This may cause glitches and misbehavior in rendering process. Component: \n\n' +
										w(e) +
										'\n\n' +
										f(e)
								);
								break;
							}
							l.push(v);
						}
					}
				if (null != e.__c && null != e.__c.__H) {
					var b = e.__c.__H.__;
					if (b)
						for (var g = 0; g < b.length; g += 1) {
							var E = b[g];
							if (E.__H)
								for (var k = 0; k < E.__H.length; k++)
									if ((t = E.__H[k]) != t) {
										var I = a(e);
										throw new Error(
											'Invalid argument passed to hook. Hooks should not be called with NaN in the dependency array. Hook index ' +
												g +
												' in component ' +
												I +
												' was called with NaN.'
										);
									}
						}
				}
			});
	})();
export { r as resetPropWarnings };
//# sourceMappingURL=debug.module.js.map
