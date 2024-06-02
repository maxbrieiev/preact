!(function (n, e) {
	'object' == typeof exports && 'undefined' != typeof module
		? e(exports, require('preact'), require('preact/devtools'))
		: 'function' == typeof define && define.amd
			? define(['exports', 'preact', 'preact/devtools'], e)
			: e(((n || self).preactDebug = {}), n.preact);
})(this, function (n, e) {
	var t = {};
	function o(n) {
		return n.type === e.Fragment
			? 'Fragment'
			: 'function' == typeof n.type
				? n.type.displayName || n.type.name
				: 'string' == typeof n.type
					? n.type
					: '#text';
	}
	var r = [],
		a = [];
	function i() {
		return r.length > 0 ? r[r.length - 1] : null;
	}
	var s = !0;
	function c(n) {
		return 'function' == typeof n.type && n.type != e.Fragment;
	}
	function l(n) {
		for (var e = [n], t = n; null != t.__o; ) e.push(t.__o), (t = t.__o);
		return e.reduce(function (n, e) {
			n += '  in ' + o(e);
			var t = e.__source;
			return (
				t
					? (n += ' (at ' + t.fileName + ':' + t.lineNumber + ')')
					: s &&
						console.warn(
							'Add @babel/plugin-transform-react-jsx-source to get a more detailed component stack. Note that you should not add it to production builds of your App for bundle size reasons.'
						),
				(s = !1),
				n + '\n'
			);
		}, '');
	}
	var u = 'function' == typeof WeakMap;
	function f(n) {
		var e = [];
		return n.__k
			? (n.__k.forEach(function (n) {
					n && 'function' == typeof n.type
						? e.push.apply(e, f(n))
						: n && 'string' == typeof n.type && e.push(n.type);
				}),
				e)
			: e;
	}
	function p(n) {
		return n
			? 'function' == typeof n.type
				? null === n.__
					? null !== n.__e && null !== n.__e.parentNode
						? n.__e.parentNode.localName
						: ''
					: p(n.__)
				: n.type
			: '';
	}
	var d = e.Component.prototype.setState;
	function h(n) {
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
	e.Component.prototype.setState = function (n, e) {
		return (
			null == this.__v &&
				null == this.state &&
				console.warn(
					'Calling "this.setState" inside the constructor of a component is a no-op and might be a bug in your application. Instead, set "this.state = {}" directly.\n\n' +
						l(i())
				),
			d.call(this, n, e)
		);
	};
	var v =
			/^(address|article|aside|blockquote|details|div|dl|fieldset|figcaption|figure|footer|form|h1|h2|h3|h4|h5|h6|header|hgroup|hr|main|menu|nav|ol|p|pre|search|section|table|ul)$/,
		y = e.Component.prototype.forceUpdate;
	function m(n) {
		var e = n.props,
			t = o(n),
			r = '';
		for (var a in e)
			if (e.hasOwnProperty(a) && 'children' !== a) {
				var i = e[a];
				'function' == typeof i &&
					(i = 'function ' + (i.displayName || i.name) + '() {}'),
					(i =
						Object(i) !== i || i.toString
							? i + ''
							: Object.prototype.toString.call(i)),
					(r += ' ' + a + '=' + JSON.stringify(i));
			}
		var s = e.children;
		return '<' + t + r + (s && s.length ? '>..</' + t + '>' : ' />');
	}
	(e.Component.prototype.forceUpdate = function (n) {
		return (
			null == this.__v
				? console.warn(
						'Calling "this.forceUpdate" inside the constructor of a component is a no-op and might be a bug in your application.\n\n' +
							l(i())
					)
				: null == this.__P &&
					console.warn(
						'Can\'t call "this.forceUpdate" on an unmounted component. This is a no-op, but it indicates a memory leak in your application. To fix, cancel all subscriptions and asynchronous tasks in the componentWillUnmount method.\n\n' +
							l(this.__v)
					),
			y.call(this, n)
		);
	}),
		(function () {
			!(function () {
				var n = e.options.__b,
					t = e.options.diffed,
					o = e.options.__,
					i = e.options.vnode,
					s = e.options.__r;
				(e.options.diffed = function (n) {
					c(n) && a.pop(), r.pop(), t && t(n);
				}),
					(e.options.__b = function (e) {
						c(e) && r.push(e), n && n(e);
					}),
					(e.options.__ = function (n, e) {
						(a = []), o && o(n, e);
					}),
					(e.options.vnode = function (n) {
						(n.__o = a.length > 0 ? a[a.length - 1] : null), i && i(n);
					}),
					(e.options.__r = function (n) {
						c(n) && a.push(n), s && s(n);
					});
			})();
			var n = !1,
				i = e.options.__b,
				s = e.options.diffed,
				d = e.options.vnode,
				y = e.options.__r,
				b = e.options.__e,
				w = e.options.__,
				g = e.options.__h,
				E = u
					? {
							useEffect: new WeakMap(),
							useLayoutEffect: new WeakMap(),
							lazyPropTypes: new WeakMap()
						}
					: null,
				k = [];
			(e.options.__e = function (n, e, t, r) {
				if (e && e.__c && 'function' == typeof n.then) {
					var a = n;
					n = new Error(
						'Missing Suspense. The throwing component was: ' + o(e)
					);
					for (var i = e; i; i = i.__)
						if (i.__c && i.__c.__c) {
							n = a;
							break;
						}
					if (n instanceof Error) throw n;
				}
				try {
					((r = r || {}).componentStack = l(e)),
						b(n, e, t, r),
						'function' != typeof n.then &&
							setTimeout(function () {
								throw n;
							});
				} catch (n) {
					throw n;
				}
			}),
				(e.options.__ = function (n, e) {
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
						var r = o(n);
						throw new Error(
							'Expected a valid HTML node as a second argument to render.\tReceived ' +
								e +
								' instead: render(<' +
								r +
								' />, ' +
								e +
								');'
						);
					}
					w && w(n, e);
				}),
				(e.options.__b = function (e) {
					var r = e.type;
					if (((n = !0), void 0 === r))
						throw new Error(
							'Undefined component passed to createElement()\n\nYou likely forgot to export your component or might have mixed up default and named imports' +
								m(e) +
								'\n\n' +
								l(e)
						);
					if (null != r && 'object' == typeof r) {
						if (void 0 !== r.__k && void 0 !== r.__e)
							throw new Error(
								'Invalid type passed to createElement(): ' +
									r +
									'\n\nDid you accidentally pass a JSX literal as JSX twice?\n\n  let My' +
									o(e) +
									' = ' +
									m(r) +
									';\n  let vnode = <My' +
									o(e) +
									' />;\n\nThis usually happens when you export a JSX literal and not the component.\n\n' +
									l(e)
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
								m(e) +
								'\n\n' +
								l(e)
						);
					if ('string' == typeof e.type)
						for (var a in e.props)
							if (
								'o' === a[0] &&
								'n' === a[1] &&
								'function' != typeof e.props[a] &&
								null != e.props[a]
							)
								throw new Error(
									'Component\'s "' +
										a +
										'" property should be a function, but got [' +
										typeof e.props[a] +
										'] instead\n' +
										m(e) +
										'\n\n' +
										l(e)
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
									console.warn(s + 'Component wrapped in lazy() is ' + o(c));
							} catch (n) {
								console.warn(
									s +
										"We will log the wrapped component's name once it is loaded."
								);
							}
						}
						var u = e.props;
						e.type.__f &&
							delete (u = (function (n, e) {
								for (var t in e) n[t] = e[t];
								return n;
							})({}, u)).ref,
							(function (n, e, o, r, a) {
								Object.keys(n).forEach(function (o) {
									var i;
									try {
										i = n[o](
											e,
											o,
											r,
											'prop',
											null,
											'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED'
										);
									} catch (n) {
										i = n;
									}
									i &&
										!(i.message in t) &&
										((t[i.message] = !0),
										console.error(
											'Failed prop type: ' +
												i.message +
												((a && '\n' + a()) || '')
										));
								});
							})(e.type.propTypes, u, 0, o(e), function () {
								return l(e);
							});
					}
					i && i(e);
				});
			var T,
				_ = 0;
			(e.options.__r = function (e) {
				y && y(e), (n = !0);
				var t = e.__c;
				if ((t === T ? _++ : (_ = 1), _ >= 25))
					throw new Error(
						'Too many re-renders. This is limited to prevent an infinite loop which may lock up your browser. The component causing this is: ' +
							o(e)
					);
				T = t;
			}),
				(e.options.__h = function (e, t, o) {
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
			(e.options.vnode = function (n) {
				var e = n.props;
				if (
					null !== n.type &&
					null != e &&
					('__source' in e || '__self' in e)
				) {
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
				(n.__proto__ = O), d && d(n);
			}),
				(e.options.diffed = function (e) {
					var t,
						r = e.type,
						a = e.__;
					if (
						(e.__k &&
							e.__k.forEach(function (n) {
								if ('object' == typeof n && n && void 0 === n.type) {
									var t = Object.keys(n).join(',');
									throw new Error(
										'Objects are not valid as a child. Encountered an object with the keys {' +
											t +
											'}.\n\n' +
											l(e)
									);
								}
							}),
						e.__c === T && (_ = 0),
						'string' == typeof r &&
							(h(r) || 'p' === r || 'a' === r || 'button' === r))
					) {
						var i = p(a);
						if ('' !== i)
							'table' === r && 'td' !== i && h(i)
								? (console.log(i, a.__e),
									console.error(
										'Improper nesting of table. Your <table> should not have a table-node parent.' +
											m(e) +
											'\n\n' +
											l(e)
									))
								: ('thead' !== r && 'tfoot' !== r && 'tbody' !== r) ||
										'table' === i
									? 'tr' === r &&
										'thead' !== i &&
										'tfoot' !== i &&
										'tbody' !== i
										? console.error(
												'Improper nesting of table. Your <tr> should have a <thead/tbody/tfoot> parent.' +
													m(e) +
													'\n\n' +
													l(e)
											)
										: 'td' === r && 'tr' !== i
											? console.error(
													'Improper nesting of table. Your <td> should have a <tr> parent.' +
														m(e) +
														'\n\n' +
														l(e)
												)
											: 'th' === r &&
												'tr' !== i &&
												console.error(
													'Improper nesting of table. Your <th> should have a <tr>.' +
														m(e) +
														'\n\n' +
														l(e)
												)
									: console.error(
											'Improper nesting of table. Your <thead/tbody/tfoot> should have a <table> parent.' +
												m(e) +
												'\n\n' +
												l(e)
										);
						else if ('p' === r) {
							var c = f(e).filter(function (n) {
								return v.test(n);
							});
							c.length &&
								console.error(
									'Improper nesting of paragraph. Your <p> should not have ' +
										c.join(', ') +
										'as child-elements.' +
										m(e) +
										'\n\n' +
										l(e)
								);
						} else
							('a' !== r && 'button' !== r) ||
								(-1 !== f(e).indexOf(r) &&
									console.error(
										'Improper nesting of interactive content. Your <' +
											r +
											'> should not have other ' +
											('a' === r ? 'anchor' : 'button') +
											' tags as child-elements.' +
											m(e) +
											'\n\n' +
											l(e)
									));
					}
					if (((n = !1), s && s(e), null != e.__k))
						for (var u = [], d = 0; d < e.__k.length; d++) {
							var y = e.__k[d];
							if (y && null != y.key) {
								var b = y.key;
								if (-1 !== u.indexOf(b)) {
									console.error(
										'Following component has two or more children with the same key attribute: "' +
											b +
											'". This may cause glitches and misbehavior in rendering process. Component: \n\n' +
											m(e) +
											'\n\n' +
											l(e)
									);
									break;
								}
								u.push(b);
							}
						}
					if (null != e.__c && null != e.__c.__H) {
						var w = e.__c.__H.__;
						if (w)
							for (var g = 0; g < w.length; g += 1) {
								var E = w[g];
								if (E.__H)
									for (var k = 0; k < E.__H.length; k++)
										if ((t = E.__H[k]) != t) {
											var I = o(e);
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
		})(),
		(n.resetPropWarnings = function () {
			t = {};
		});
});
//# sourceMappingURL=debug.umd.js.map
