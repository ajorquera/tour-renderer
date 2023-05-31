'use strict';
var Ee, A, hn, oe, He, ve = {}, un = [], Tn = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Ht(t, e) {
    for (var i in e)
        t[i] = e[i];
    return t
}
function dn(t) {
    var e = t.parentNode;
    e && e.removeChild(t)
}
function Se(t, e, i) {
    var c, _, l, w = {};
    for (l in e)
        l == "key" ? c = e[l] : l == "ref" ? _ = e[l] : w[l] = e[l];
    if (arguments.length > 2 && (w.children = arguments.length > 3 ? Ee.call(arguments, 2) : i),
    typeof t == "function" && t.defaultProps != null)
        for (l in t.defaultProps)
            w[l] === void 0 && (w[l] = t.defaultProps[l]);
    return _e(t, w, c, _, null)
}
function _e(t, e, i, c, _) {
    var l = {
        type: t,
        props: e,
        key: i,
        ref: c,
        __k: null,
        __: null,
        __b: 0,
        __e: null,
        __d: void 0,
        __c: null,
        __h: null,
        constructor: void 0,
        __v: _ ?? ++hn
    };
    return _ == null && A.vnode != null && A.vnode(l),
    l
}
function $t(t) {
    return t.children
}
function At(t, e) {
    this.props = t,
    this.context = e
}
function ie(t, e) {
    if (e == null)
        return t.__ ? ie(t.__, t.__.__k.indexOf(t) + 1) : null;
    for (var i; e < t.__k.length; e++)
        if ((i = t.__k[e]) != null && i.__e != null)
            return i.__e;
    return typeof t.type == "function" ? ie(t) : null
}
function _n(t) {
    var e, i;
    if ((t = t.__) != null && t.__c != null) {
        for (t.__e = t.__c.base = null,
        e = 0; e < t.__k.length; e++)
            if ((i = t.__k[e]) != null && i.__e != null) {
                t.__e = t.__c.base = i.__e;
                break
            }
        return _n(t)
    }
}
function Be(t) {
    (!t.__d && (t.__d = !0) && oe.push(t) && !ye.__r++ || He !== A.debounceRendering) && ((He = A.debounceRendering) || setTimeout)(ye)
}
function ye() {
    for (var t; ye.__r = oe.length; )
        t = oe.sort(function(e, i) {
            return e.__v.__b - i.__v.__b
        }),
        oe = [],
        t.some(function(e) {
            var i, c, _, l, w, I;
            e.__d && (w = (l = (i = e).__v).__e,
            (I = i.__P) && (c = [],
            (_ = Ht({}, l)).__v = l.__v + 1,
            Ae(I, l, _, i.__n, I.ownerSVGElement !== void 0, l.__h != null ? [w] : null, c, w ?? ie(l), l.__h),
            vn(c, l),
            l.__e != w && _n(l)))
        })
}
function fn(t, e, i, c, _, l, w, I, H, W) {
    var u, Y, D, b, B, at, X, Q = c && c.__k || un, ht = Q.length;
    for (i.__k = [],
    u = 0; u < e.length; u++)
        if ((b = i.__k[u] = (b = e[u]) == null || typeof b == "boolean" ? null : typeof b == "string" || typeof b == "number" || typeof b == "bigint" ? _e(null, b, null, null, b) : Array.isArray(b) ? _e($t, {
            children: b
        }, null, null, null) : b.__b > 0 ? _e(b.type, b.props, b.key, b.ref ? b.ref : null, b.__v) : b) != null) {
            if (b.__ = i,
            b.__b = i.__b + 1,
            (D = Q[u]) === null || D && b.key == D.key && b.type === D.type)
                Q[u] = void 0;
            else
                for (Y = 0; Y < ht; Y++) {
                    if ((D = Q[Y]) && b.key == D.key && b.type === D.type) {
                        Q[Y] = void 0;
                        break
                    }
                    D = null
                }
            Ae(t, b, D = D || ve, _, l, w, I, H, W),
            B = b.__e,
            (Y = b.ref) && D.ref != Y && (X || (X = []),
            D.ref && X.push(D.ref, null, b),
            X.push(Y, b.__c || B, b)),
            B != null ? (at == null && (at = B),
            typeof b.type == "function" && b.__k === D.__k ? b.__d = H = pn(b, H, t) : H = mn(t, b, D, Q, B, H),
            typeof i.type == "function" && (i.__d = H)) : H && D.__e == H && H.parentNode != t && (H = ie(D))
        }
    for (i.__e = at,
    u = ht; u--; )
        Q[u] != null && gn(Q[u], Q[u]);
    if (X)
        for (u = 0; u < X.length; u++)
            yn(X[u], X[++u], X[++u])
}
function pn(t, e, i) {
    for (var c, _ = t.__k, l = 0; _ && l < _.length; l++)
        (c = _[l]) && (c.__ = t,
        e = typeof c.type == "function" ? pn(c, e, i) : mn(i, c, c, _, c.__e, e));
    return e
}
function ge(t, e) {
    return e = e || [],
    t == null || typeof t == "boolean" || (Array.isArray(t) ? t.some(function(i) {
        ge(i, e)
    }) : e.push(t)),
    e
}
function mn(t, e, i, c, _, l) {
    var w, I, H;
    if (e.__d !== void 0)
        w = e.__d,
        e.__d = void 0;
    else if (i == null || _ != l || _.parentNode == null)
        t: if (l == null || l.parentNode !== t)
            t.appendChild(_),
            w = null;
        else {
            for (I = l,
            H = 0; (I = I.nextSibling) && H < c.length; H += 1)
                if (I == _)
                    break t;
            t.insertBefore(_, l),
            w = l
        }
    return w !== void 0 ? w : _.nextSibling
}
function Ln(t, e, i, c, _) {
    var l;
    for (l in i)
        l === "children" || l === "key" || l in e || we(t, l, null, i[l], c);
    for (l in e)
        _ && typeof e[l] != "function" || l === "children" || l === "key" || l === "value" || l === "checked" || i[l] === e[l] || we(t, l, e[l], i[l], c)
}
function ze(t, e, i) {
    e[0] === "-" ? t.setProperty(e, i) : t[e] = i == null ? "" : typeof i != "number" || Tn.test(e) ? i : i + "px"
}
function we(t, e, i, c, _) {
    var l;
    t: if (e === "style")
        if (typeof i == "string")
            t.style.cssText = i;
        else {
            if (typeof c == "string" && (t.style.cssText = c = ""),
            c)
                for (e in c)
                    i && e in i || ze(t.style, e, "");
            if (i)
                for (e in i)
                    c && i[e] === c[e] || ze(t.style, e, i[e])
        }
    else if (e[0] === "o" && e[1] === "n")
        l = e !== (e = e.replace(/Capture$/, "")),
        e = e.toLowerCase()in t ? e.toLowerCase().slice(2) : e.slice(2),
        t.l || (t.l = {}),
        t.l[e + l] = i,
        i ? c || t.addEventListener(e, l ? Ve : Ge, l) : t.removeEventListener(e, l ? Ve : Ge, l);
    else if (e !== "dangerouslySetInnerHTML") {
        if (_)
            e = e.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
        else if (e !== "href" && e !== "list" && e !== "form" && e !== "tabIndex" && e !== "download" && e in t)
            try {
                t[e] = i ?? "";
                break t
            } catch {}
        typeof i == "function" || (i == null || i === !1 && e.indexOf("-") == -1 ? t.removeAttribute(e) : t.setAttribute(e, i))
    }
}
function Ge(t) {
    this.l[t.type + !1](A.event ? A.event(t) : t)
}
function Ve(t) {
    this.l[t.type + !0](A.event ? A.event(t) : t)
}
function Ae(t, e, i, c, _, l, w, I, H) {
    var W, u, Y, D, b, B, at, X, Q, ht, yt, wt, K, m, a, J = e.type;
    if (e.constructor !== void 0)
        return null;
    i.__h != null && (H = i.__h,
    I = e.__e = i.__e,
    e.__h = null,
    l = [I]),
    (W = A.__b) && W(e);
    try {
        t: if (typeof J == "function") {
            if (X = e.props,
            Q = (W = J.contextType) && c[W.__c],
            ht = W ? Q ? Q.props.value : W.__ : c,
            i.__c ? at = (u = e.__c = i.__c).__ = u.__E : ("prototype"in J && J.prototype.render ? e.__c = u = new J(X,ht) : (e.__c = u = new At(X,ht),
            u.constructor = J,
            u.render = Cn),
            Q && Q.sub(u),
            u.props = X,
            u.state || (u.state = {}),
            u.context = ht,
            u.__n = c,
            Y = u.__d = !0,
            u.__h = [],
            u._sb = []),
            u.__s == null && (u.__s = u.state),
            J.getDerivedStateFromProps != null && (u.__s == u.state && (u.__s = Ht({}, u.__s)),
            Ht(u.__s, J.getDerivedStateFromProps(X, u.__s))),
            D = u.props,
            b = u.state,
            Y)
                J.getDerivedStateFromProps == null && u.componentWillMount != null && u.componentWillMount(),
                u.componentDidMount != null && u.__h.push(u.componentDidMount);
            else {
                if (J.getDerivedStateFromProps == null && X !== D && u.componentWillReceiveProps != null && u.componentWillReceiveProps(X, ht),
                !u.__e && u.shouldComponentUpdate != null && u.shouldComponentUpdate(X, u.__s, ht) === !1 || e.__v === i.__v) {
                    for (u.props = X,
                    u.state = u.__s,
                    e.__v !== i.__v && (u.__d = !1),
                    u.__v = e,
                    e.__e = i.__e,
                    e.__k = i.__k,
                    e.__k.forEach(function(st) {
                        st && (st.__ = e)
                    }),
                    yt = 0; yt < u._sb.length; yt++)
                        u.__h.push(u._sb[yt]);
                    u._sb = [],
                    u.__h.length && w.push(u);
                    break t
                }
                u.componentWillUpdate != null && u.componentWillUpdate(X, u.__s, ht),
                u.componentDidUpdate != null && u.__h.push(function() {
                    u.componentDidUpdate(D, b, B)
                })
            }
            if (u.context = ht,
            u.props = X,
            u.__v = e,
            u.__P = t,
            wt = A.__r,
            K = 0,
            "prototype"in J && J.prototype.render) {
                for (u.state = u.__s,
                u.__d = !1,
                wt && wt(e),
                W = u.render(u.props, u.state, u.context),
                m = 0; m < u._sb.length; m++)
                    u.__h.push(u._sb[m]);
                u._sb = []
            } else
                do
                    u.__d = !1,
                    wt && wt(e),
                    W = u.render(u.props, u.state, u.context),
                    u.state = u.__s;
                while (u.__d && ++K < 25);
            u.state = u.__s,
            u.getChildContext != null && (c = Ht(Ht({}, c), u.getChildContext())),
            Y || u.getSnapshotBeforeUpdate == null || (B = u.getSnapshotBeforeUpdate(D, b)),
            a = W != null && W.type === $t && W.key == null ? W.props.children : W,
            fn(t, Array.isArray(a) ? a : [a], e, i, c, _, l, w, I, H),
            u.base = e.__e,
            e.__h = null,
            u.__h.length && w.push(u),
            at && (u.__E = u.__ = null),
            u.__e = !1
        } else
            l == null && e.__v === i.__v ? (e.__k = i.__k,
            e.__e = i.__e) : e.__e = Rn(i.__e, e, i, c, _, l, w, H);
        (W = A.diffed) && W(e)
    } catch (st) {
        e.__v = null,
        (H || l != null) && (e.__e = I,
        e.__h = !!H,
        l[l.indexOf(I)] = null),
        A.__e(st, e, i)
    }
}
function vn(t, e) {
    A.__c && A.__c(e, t),
    t.some(function(i) {
        try {
            t = i.__h,
            i.__h = [],
            t.some(function(c) {
                c.call(i)
            })
        } catch (c) {
            A.__e(c, i.__v)
        }
    })
}
function Rn(t, e, i, c, _, l, w, I) {
    var H, W, u, Y = i.props, D = e.props, b = e.type, B = 0;
    if (b === "svg" && (_ = !0),
    l != null) {
        for (; B < l.length; B++)
            if ((H = l[B]) && "setAttribute"in H == !!b && (b ? H.localName === b : H.nodeType === 3)) {
                t = H,
                l[B] = null;
                break
            }
    }
    if (t == null) {
        if (b === null)
            return document.createTextNode(D);
        t = _ ? document.createElementNS("http://www.w3.org/2000/svg", b) : document.createElement(b, D.is && D),
        l = null,
        I = !1
    }
    if (b === null)
        Y === D || I && t.data === D || (t.data = D);
    else {
        if (l = l && Ee.call(t.childNodes),
        W = (Y = i.props || ve).dangerouslySetInnerHTML,
        u = D.dangerouslySetInnerHTML,
        !I) {
            if (l != null)
                for (Y = {},
                B = 0; B < t.attributes.length; B++)
                    Y[t.attributes[B].name] = t.attributes[B].value;
            (u || W) && (u && (W && u.__html == W.__html || u.__html === t.innerHTML) || (t.innerHTML = u && u.__html || ""))
        }
        if (Ln(t, D, Y, _, I),
        u)
            e.__k = [];
        else if (B = e.props.children,
        fn(t, Array.isArray(B) ? B : [B], e, i, c, _ && b !== "foreignObject", l, w, l ? l[0] : i.__k && ie(i, 0), I),
        l != null)
            for (B = l.length; B--; )
                l[B] != null && dn(l[B]);
        I || ("value"in D && (B = D.value) !== void 0 && (B !== t.value || b === "progress" && !B || b === "option" && B !== Y.value) && we(t, "value", B, Y.value, !1),
        "checked"in D && (B = D.checked) !== void 0 && B !== t.checked && we(t, "checked", B, Y.checked, !1))
    }
    return t
}
function yn(t, e, i) {
    try {
        typeof t == "function" ? t(e) : t.current = e
    } catch (c) {
        A.__e(c, i)
    }
}
function gn(t, e, i) {
    var c, _;
    if (A.unmount && A.unmount(t),
    (c = t.ref) && (c.current && c.current !== t.__e || yn(c, null, e)),
    (c = t.__c) != null) {
        if (c.componentWillUnmount)
            try {
                c.componentWillUnmount()
            } catch (l) {
                A.__e(l, e)
            }
        c.base = c.__P = null,
        t.__c = void 0
    }
    if (c = t.__k)
        for (_ = 0; _ < c.length; _++)
            c[_] && gn(c[_], e, i || typeof t.type != "function");
    i || t.__e == null || dn(t.__e),
    t.__ = t.__e = t.__d = void 0
}
function Cn(t, e, i) {
    return this.constructor(t, i)
}
function In(t, e, i) {
    var c, _, l;
    A.__ && A.__(t, e),
    _ = (c = typeof i == "function") ? null : i && i.__k || e.__k,
    l = [],
    Ae(e, t = (!c && i || e).__k = Se($t, null, [t]), _ || ve, ve, e.ownerSVGElement !== void 0, !c && i ? [i] : _ ? null : e.firstChild ? Ee.call(e.childNodes) : null, l, !c && i ? i : _ ? _.__e : e.firstChild, c),
    vn(l, t)
}
Ee = un.slice,
A = {
    __e: function(t, e, i, c) {
        for (var _, l, w; e = e.__; )
            if ((_ = e.__c) && !_.__)
                try {
                    if ((l = _.constructor) && l.getDerivedStateFromError != null && (_.setState(l.getDerivedStateFromError(t)),
                    w = _.__d),
                    _.componentDidCatch != null && (_.componentDidCatch(t, c || {}),
                    w = _.__d),
                    w)
                        return _.__E = _
                } catch (I) {
                    t = I
                }
        throw t
    }
},
hn = 0,
At.prototype.setState = function(t, e) {
    var i;
    i = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Ht({}, this.state),
    typeof t == "function" && (t = t(Ht({}, i), this.props)),
    t && Ht(i, t),
    t != null && this.__v && (e && this._sb.push(e),
    Be(this))
}
,
At.prototype.forceUpdate = function(t) {
    this.__v && (this.__e = !0,
    t && this.__h.push(t),
    Be(this))
}
,
At.prototype.render = $t,
oe = [],
ye.__r = 0;
var De, rt, Re, We, re = 0, wn = [], fe = [], Ye = A.__b, Xe = A.__r, $e = A.diffed, qe = A.__c, je = A.unmount;
function En(t, e) {
    A.__h && A.__h(rt, t, re || e),
    re = 0;
    var i = rt.__H || (rt.__H = {
        __: [],
        __h: []
    });
    return t >= i.__.length && i.__.push({
        __V: fe
    }),
    i.__[t]
}
function On(t) {
    return re = 1,
    Sn(bn, t)
}
function Sn(t, e, i) {
    var c = En(De++, 2);
    if (c.t = t,
    !c.__c && (c.__ = [i ? i(e) : bn(void 0, e), function(l) {
        var w = c.__N ? c.__N[0] : c.__[0]
          , I = c.t(w, l);
        w !== I && (c.__N = [I, c.__[1]],
        c.__c.setState({}))
    }
    ],
    c.__c = rt,
    !rt.u)) {
        rt.u = !0;
        var _ = rt.shouldComponentUpdate;
        rt.shouldComponentUpdate = function(l, w, I) {
            if (!c.__c.__H)
                return !0;
            var H = c.__c.__H.__.filter(function(u) {
                return u.__c
            });
            if (H.every(function(u) {
                return !u.__N
            }))
                return !_ || _.call(this, l, w, I);
            var W = !1;
            return H.forEach(function(u) {
                if (u.__N) {
                    var Y = u.__[0];
                    u.__ = u.__N,
                    u.__N = void 0,
                    Y !== u.__[0] && (W = !0)
                }
            }),
            !(!W && c.__c.props === l) && (!_ || _.call(this, l, w, I))
        }
    }
    return c.__N || c.__
}
function Nn(t) {
    return re = 5,
    Fe(function() {
        return {
            current: t
        }
    }, [])
}
function Fe(t, e) {
    var i = En(De++, 7);
    return Fn(i.__H, e) ? (i.__V = t(),
    i.i = e,
    i.__h = t,
    i.__V) : i.__
}
function ne(t, e) {
    return re = 8,
    Fe(function() {
        return t
    }, e)
}
function An() {
    for (var t; t = wn.shift(); )
        if (t.__P && t.__H)
            try {
                t.__H.__h.forEach(pe),
                t.__H.__h.forEach(Ne),
                t.__H.__h = []
            } catch (e) {
                t.__H.__h = [],
                A.__e(e, t.__v)
            }
}
A.__b = function(t) {
    rt = null,
    Ye && Ye(t)
}
,
A.__r = function(t) {
    Xe && Xe(t),
    De = 0;
    var e = (rt = t.__c).__H;
    e && (Re === rt ? (e.__h = [],
    rt.__h = [],
    e.__.forEach(function(i) {
        i.__N && (i.__ = i.__N),
        i.__V = fe,
        i.__N = i.i = void 0
    })) : (e.__h.forEach(pe),
    e.__h.forEach(Ne),
    e.__h = [])),
    Re = rt
}
,
A.diffed = function(t) {
    $e && $e(t);
    var e = t.__c;
    e && e.__H && (e.__H.__h.length && (wn.push(e) !== 1 && We === A.requestAnimationFrame || ((We = A.requestAnimationFrame) || Dn)(An)),
    e.__H.__.forEach(function(i) {
        i.i && (i.__H = i.i),
        i.__V !== fe && (i.__ = i.__V),
        i.i = void 0,
        i.__V = fe
    })),
    Re = rt = null
}
,
A.__c = function(t, e) {
    e.some(function(i) {
        try {
            i.__h.forEach(pe),
            i.__h = i.__h.filter(function(c) {
                return !c.__ || Ne(c)
            })
        } catch (c) {
            e.some(function(_) {
                _.__h && (_.__h = [])
            }),
            e = [],
            A.__e(c, i.__v)
        }
    }),
    qe && qe(t, e)
}
,
A.unmount = function(t) {
    je && je(t);
    var e, i = t.__c;
    i && i.__H && (i.__H.__.forEach(function(c) {
        try {
            pe(c)
        } catch (_) {
            e = _
        }
    }),
    i.__H = void 0,
    e && A.__e(e, i.__v))
}
;
var Ze = typeof requestAnimationFrame == "function";
function Dn(t) {
    var e, i = function() {
        clearTimeout(c),
        Ze && cancelAnimationFrame(e),
        setTimeout(t)
    }, c = setTimeout(i, 100);
    Ze && (e = requestAnimationFrame(i))
}
function pe(t) {
    var e = rt
      , i = t.__c;
    typeof i == "function" && (t.__c = void 0,
    i()),
    rt = e
}
function Ne(t) {
    var e = rt;
    t.__c = t.__(),
    rt = e
}
function Fn(t, e) {
    return !t || t.length !== e.length || e.some(function(i, c) {
        return i !== t[c]
    })
}
function bn(t, e) {
    return typeof e == "function" ? e(t) : e
}
function kn(t, e) {
    for (var i in e)
        t[i] = e[i];
    return t
}
function Ke(t, e) {
    for (var i in t)
        if (i !== "__source" && !(i in e))
            return !0;
    for (var c in e)
        if (c !== "__source" && t[c] !== e[c])
            return !0;
    return !1
}
function Je(t) {
    this.props = t
}
(Je.prototype = new At).isPureReactComponent = !0,
Je.prototype.shouldComponentUpdate = function(t, e) {
    return Ke(this.props, t) || Ke(this.state, e)
}
;
var Qe = A.__b;
A.__b = function(t) {
    t.type && t.type.__f && t.ref && (t.props.ref = t.ref,
    t.ref = null),
    Qe && Qe(t)
}
;
var Un = A.__e;
A.__e = function(t, e, i, c) {
    if (t.then) {
        for (var _, l = e; l = l.__; )
            if ((_ = l.__c) && _.__c)
                return e.__e == null && (e.__e = i.__e,
                e.__k = i.__k),
                _.__c(t, e)
    }
    Un(t, e, i, c)
}
;
var tn = A.unmount;
function Pn(t, e, i) {
    return t && (t.__c && t.__c.__H && (t.__c.__H.__.forEach(function(c) {
        typeof c.__c == "function" && c.__c()
    }),
    t.__c.__H = null),
    (t = kn({}, t)).__c != null && (t.__c.__P === i && (t.__c.__P = e),
    t.__c = null),
    t.__k = t.__k && t.__k.map(function(c) {
        return Pn(c, e, i)
    })),
    t
}
function xn(t, e, i) {
    return t && (t.__v = null,
    t.__k = t.__k && t.__k.map(function(c) {
        return xn(c, e, i)
    }),
    t.__c && t.__c.__P === e && (t.__e && i.insertBefore(t.__e, t.__d),
    t.__c.__e = !0,
    t.__c.__P = i)),
    t
}
function Ce() {
    this.__u = 0,
    this.t = null,
    this.__b = null
}
function Mn(t) {
    var e = t.__.__c;
    return e && e.__a && e.__a(t)
}
function de() {
    this.u = null,
    this.o = null
}
A.unmount = function(t) {
    var e = t.__c;
    e && e.__R && e.__R(),
    e && t.__h === !0 && (t.type = null),
    tn && tn(t)
}
,
(Ce.prototype = new At).__c = function(t, e) {
    var i = e.__c
      , c = this;
    c.t == null && (c.t = []),
    c.t.push(i);
    var _ = Mn(c.__v)
      , l = !1
      , w = function() {
        l || (l = !0,
        i.__R = null,
        _ ? _(I) : I())
    };
    i.__R = w;
    var I = function() {
        if (!--c.__u) {
            if (c.state.__a) {
                var W = c.state.__a;
                c.__v.__k[0] = xn(W, W.__c.__P, W.__c.__O)
            }
            var u;
            for (c.setState({
                __a: c.__b = null
            }); u = c.t.pop(); )
                u.forceUpdate()
        }
    }
      , H = e.__h === !0;
    c.__u++ || H || c.setState({
        __a: c.__b = c.__v.__k[0]
    }),
    t.then(w, w)
}
,
Ce.prototype.componentWillUnmount = function() {
    this.t = []
}
,
Ce.prototype.render = function(t, e) {
    if (this.__b) {
        if (this.__v.__k) {
            var i = document.createElement("div")
              , c = this.__v.__k[0].__c;
            this.__v.__k[0] = Pn(this.__b, i, c.__O = c.__P)
        }
        this.__b = null
    }
    var _ = e.__a && Se($t, null, t.fallback);
    return _ && (_.__h = null),
    [Se($t, null, e.__a ? null : t.children), _]
}
;
var en = function(t, e, i) {
    if (++i[1] === i[0] && t.o.delete(e),
    t.props.revealOrder && (t.props.revealOrder[0] !== "t" || !t.o.size))
        for (i = t.u; i; ) {
            for (; i.length > 3; )
                i.pop()();
            if (i[1] < i[0])
                break;
            t.u = i = i[2]
        }
};
(de.prototype = new At).__a = function(t) {
    var e = this
      , i = Mn(e.__v)
      , c = e.o.get(t);
    return c[0]++,
    function(_) {
        var l = function() {
            e.props.revealOrder ? (c.push(_),
            en(e, t, c)) : _()
        };
        i ? i(l) : l()
    }
}
,
de.prototype.render = function(t) {
    this.u = null,
    this.o = new Map;
    var e = ge(t.children);
    t.revealOrder && t.revealOrder[0] === "b" && e.reverse();
    for (var i = e.length; i--; )
        this.o.set(e[i], this.u = [1, 0, this.u]);
    return t.children
}
,
de.prototype.componentDidUpdate = de.prototype.componentDidMount = function() {
    var t = this;
    this.o.forEach(function(e, i) {
        en(t, i, e)
    })
}
;
var Hn = typeof Symbol < "u" && Symbol.for && Symbol.for("react.element") || 60103
  , Bn = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/
  , zn = typeof document < "u"
  , Gn = function(t) {
    return (typeof Symbol < "u" && typeof Symbol() == "symbol" ? /fil|che|rad/i : /fil|che|ra/i).test(t)
};
At.prototype.isReactComponent = {},
["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(t) {
    Object.defineProperty(At.prototype, t, {
        configurable: !0,
        get: function() {
            return this["UNSAFE_" + t]
        },
        set: function(e) {
            Object.defineProperty(this, t, {
                configurable: !0,
                writable: !0,
                value: e
            })
        }
    })
});
var nn = A.event;
function Vn() {}
function Wn() {
    return this.cancelBubble
}
function Yn() {
    return this.defaultPrevented
}
A.event = function(t) {
    return nn && (t = nn(t)),
    t.persist = Vn,
    t.isPropagationStopped = Wn,
    t.isDefaultPrevented = Yn,
    t.nativeEvent = t
}
;
var on = {
    configurable: !0,
    get: function() {
        return this.class
    }
}
  , rn = A.vnode;
A.vnode = function(t) {
    var e = t.type
      , i = t.props
      , c = i;
    if (typeof e == "string") {
        var _ = e.indexOf("-") === -1;
        for (var l in c = {},
        i) {
            var w = i[l];
            zn && l === "children" && e === "noscript" || l === "value" && "defaultValue"in i && w == null || (l === "defaultValue" && "value"in i && i.value == null ? l = "value" : l === "download" && w === !0 ? w = "" : /ondoubleclick/i.test(l) ? l = "ondblclick" : /^onchange(textarea|input)/i.test(l + e) && !Gn(i.type) ? l = "oninput" : /^onfocus$/i.test(l) ? l = "onfocusin" : /^onblur$/i.test(l) ? l = "onfocusout" : /^on(Ani|Tra|Tou|BeforeInp|Compo)/.test(l) ? l = l.toLowerCase() : _ && Bn.test(l) ? l = l.replace(/[A-Z0-9]/g, "-$&").toLowerCase() : w === null && (w = void 0),
            /^oninput$/i.test(l) && (l = l.toLowerCase(),
            c[l] && (l = "oninputCapture")),
            c[l] = w)
        }
        e == "select" && c.multiple && Array.isArray(c.value) && (c.value = ge(i.children).forEach(function(I) {
            I.props.selected = c.value.indexOf(I.props.value) != -1
        })),
        e == "select" && c.defaultValue != null && (c.value = ge(i.children).forEach(function(I) {
            I.props.selected = c.multiple ? c.defaultValue.indexOf(I.props.value) != -1 : c.defaultValue == I.props.value
        })),
        t.props = c,
        i.class != i.className && (on.enumerable = "className"in i,
        i.className != null && (c.class = i.className),
        Object.defineProperty(c, "className", on))
    }
    t.$$typeof = Hn,
    rn && rn(t)
}
;
var an = A.__r;
A.__r = function(t) {
    an && an(t),
    t.__c
}
;
var Xn = 0;
function Ot(t, e, i, c, _) {
    var l, w, I = {};
    for (w in e)
        w == "ref" ? l = e[w] : I[w] = e[w];
    var H = {
        type: t,
        props: I,
        key: i,
        ref: l,
        __k: null,
        __: null,
        __b: 0,
        __e: null,
        __d: void 0,
        __c: null,
        __h: null,
        constructor: void 0,
        __v: --Xn,
        __source: _,
        __self: c
    };
    if (typeof t == "function" && (l = t.defaultProps))
        for (w in l)
            I[w] === void 0 && (I[w] = l[w]);
    return A.vnode && A.vnode(H),
    H
}
window.libpannellum = function(t, e, i) {
    function c(u) {
        function Y(h, d) {
            return h.level == 1 && d.level != 1 ? -1 : d.level == 1 && h.level != 1 ? 1 : d.timestamp - h.timestamp
        }
        function D(h, d) {
            return h.level != d.level ? h.level - d.level : h.diff - d.diff
        }
        function b(h, d, z, T, y, f) {
            this.vertices = h,
            this.side = d,
            this.level = z,
            this.x = T,
            this.y = y,
            this.path = f.replace("%s", d).replace("%l", z).replace("%x", T).replace("%y", y)
        }
        function B(h, d, z, T, y) {
            var f, L = d.vertices;
            f = yt(h, L.slice(0, 3));
            var p = yt(h, L.slice(3, 6))
              , N = yt(h, L.slice(6, 9))
              , L = yt(h, L.slice(9, 12))
              , R = f[0] + p[0] + N[0] + L[0];
            if (R == -4 || R == 4 ? f = !1 : (R = f[1] + p[1] + N[1] + L[1],
            f = R == -4 || R == 4 ? !1 : f[2] + p[2] + N[2] + L[2] != 4),
            f) {
                for (f = d.vertices,
                p = f[0] + f[3] + f[6] + f[9],
                N = f[1] + f[4] + f[7] + f[10],
                L = f[2] + f[5] + f[8] + f[11],
                R = Math.sqrt(p * p + N * N + L * L),
                L = Math.asin(L / R),
                p = Math.atan2(N, p) - T,
                p += p > Math.PI ? -2 * Math.PI : p < -Math.PI ? 2 * Math.PI : 0,
                p = Math.abs(p),
                d.diff = Math.acos(Math.sin(z) * Math.sin(L) + Math.cos(z) * Math.cos(L) * Math.cos(p)),
                p = !1,
                N = 0; N < m.nodeCache.length; N++)
                    if (m.nodeCache[N].path == d.path) {
                        p = !0,
                        m.nodeCache[N].timestamp = m.nodeCacheTimestamp++,
                        m.nodeCache[N].diff = d.diff,
                        m.currentNodes.push(m.nodeCache[N]);
                        break
                    }
                if (p || (d.timestamp = m.nodeCacheTimestamp++,
                m.currentNodes.push(d),
                m.nodeCache.push(d)),
                d.level < m.level) {
                    var L = P.cubeResolution * Math.pow(2, d.level - P.maxLevel)
                      , p = Math.ceil(L * P.invTileResolution) - 1
                      , N = L % P.tileResolution * 2
                      , $ = 2 * L % P.tileResolution;
                    $ === 0 && ($ = P.tileResolution),
                    N === 0 && (N = 2 * P.tileResolution),
                    R = .5,
                    (d.x == p || d.y == p) && (R = 1 - P.tileResolution / (P.tileResolution + $));
                    var G = 1 - R
                      , L = []
                      , nt = R
                      , lt = R
                      , q = R
                      , Z = G
                      , E = G
                      , V = G;
                    for ($ < P.tileResolution && (d.x == p && d.y != p ? (E = lt = .5,
                    (d.side == "d" || d.side == "u") && (V = q = .5)) : d.x != p && d.y == p && (Z = nt = .5,
                    d.side == "l" || d.side == "r") && (V = q = .5)),
                    N <= P.tileResolution && (d.x == p && (nt = 0,
                    Z = 1,
                    d.side == "l" || d.side == "r") && (q = 0,
                    V = 1),
                    d.y == p && (lt = 0,
                    E = 1,
                    d.side == "d" || d.side == "u") && (q = 0,
                    V = 1)),
                    $ = [f[0], f[1], f[2], f[0] * nt + f[3] * Z, f[1] * R + f[4] * G, f[2] * q + f[5] * V, f[0] * nt + f[6] * Z, f[1] * lt + f[7] * E, f[2] * q + f[8] * V, f[0] * R + f[9] * G, f[1] * lt + f[10] * E, f[2] * q + f[11] * V],
                    $ = new b($,d.side,d.level + 1,2 * d.x,2 * d.y,P.fullpath),
                    L.push($),
                    d.x == p && N <= P.tileResolution || ($ = [f[0] * nt + f[3] * Z, f[1] * R + f[4] * G, f[2] * q + f[5] * V, f[3], f[4], f[5], f[3] * R + f[6] * G, f[4] * lt + f[7] * E, f[5] * q + f[8] * V, f[0] * nt + f[6] * Z, f[1] * lt + f[7] * E, f[2] * q + f[8] * V],
                    $ = new b($,d.side,d.level + 1,2 * d.x + 1,2 * d.y,P.fullpath),
                    L.push($)),
                    d.x == p && N <= P.tileResolution || d.y == p && N <= P.tileResolution || ($ = [f[0] * nt + f[6] * Z, f[1] * lt + f[7] * E, f[2] * q + f[8] * V, f[3] * R + f[6] * G, f[4] * lt + f[7] * E, f[5] * q + f[8] * V, f[6], f[7], f[8], f[9] * nt + f[6] * Z, f[10] * R + f[7] * G, f[11] * q + f[8] * V],
                    $ = new b($,d.side,d.level + 1,2 * d.x + 1,2 * d.y + 1,P.fullpath),
                    L.push($)),
                    d.y == p && N <= P.tileResolution || ($ = [f[0] * R + f[9] * G, f[1] * lt + f[10] * E, f[2] * q + f[11] * V, f[0] * nt + f[6] * Z, f[1] * lt + f[7] * E, f[2] * q + f[8] * V, f[9] * nt + f[6] * Z, f[10] * R + f[7] * G, f[11] * q + f[8] * V, f[9], f[10], f[11]],
                    $ = new b($,d.side,d.level + 1,2 * d.x,2 * d.y + 1,P.fullpath),
                    L.push($)),
                    d = 0; d < L.length; d++)
                        B(h, L[d], z, T)
                }
            }
        }
        function at() {
            return [-1, 1, -1, 1, 1, -1, 1, -1, -1, -1, -1, -1, 1, 1, 1, -1, 1, 1, -1, -1, 1, 1, -1, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, -1, -1, -1, -1, -1, -1, 1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1]
        }
        function X(h, d, z) {
            var T = Math.sin(d);
            if (d = Math.cos(d),
            z == "x")
                return [h[0], d * h[1] + T * h[2], d * h[2] - T * h[1], h[3], d * h[4] + T * h[5], d * h[5] - T * h[4], h[6], d * h[7] + T * h[8], d * h[8] - T * h[7]];
            if (z == "y")
                return [d * h[0] - T * h[2], h[1], d * h[2] + T * h[0], d * h[3] - T * h[5], h[4], d * h[5] + T * h[3], d * h[6] - T * h[8], h[7], d * h[8] + T * h[6]];
            if (z == "z")
                return [d * h[0] + T * h[1], d * h[1] - T * h[0], h[2], d * h[3] + T * h[4], d * h[4] - T * h[3], h[5], d * h[6] + T * h[7], d * h[7] - T * h[6], h[8]]
        }
        function Q(h) {
            return [h[0], h[4], h[8], h[12], h[1], h[5], h[9], h[13], h[2], h[6], h[10], h[14], h[3], h[7], h[11], h[15]]
        }
        function ht(h) {
            ae(h, h.path + "." + P.extension, function(d, z) {
                h.texture = d,
                h.textureLoaded = z ? 2 : 1
            }, Vt.crossOrigin)
        }
        function yt(h, d) {
            var y = [h[0] * d[0] + h[1] * d[1] + h[2] * d[2], h[4] * d[0] + h[5] * d[1] + h[6] * d[2], h[11] + h[8] * d[0] + h[9] * d[1] + h[10] * d[2], 1 / (h[12] * d[0] + h[13] * d[1] + h[14] * d[2])]
              , z = y[0] * y[3]
              , T = y[1] * y[3]
              , y = y[2] * y[3]
              , f = [0, 0, 0];
            return -1 > z && (f[0] = -1),
            1 < z && (f[0] = 1),
            -1 > T && (f[1] = -1),
            1 < T && (f[1] = 1),
            (-1 > y || 1 < y) && (f[2] = 1),
            f
        }
        function wt() {
            console.log("Reducing canvas size due to error 1286!"),
            K.width = Math.round(K.width / 2),
            K.height = Math.round(K.height / 2)
        }
        var K = e.createElement("canvas");
        K.style.width = K.style.height = "100%",
        u.appendChild(K);
        var m, a, J, st, Tt, mt, Gt, Dt, P, j, tt, St, jt, Et, Bt, Vt;
        this.init = function(h, d, z, T, y, f, p, N) {
            function L(Z) {
                if ($) {
                    var E = Z * Z * 4
                      , V = new Uint8ClampedArray(E)
                      , ot = N.backgroundColor ? N.backgroundColor : [0, 0, 0];
                    ot[0] *= 255,
                    ot[1] *= 255,
                    ot[2] *= 255;
                    for (var n = 0; n < E; n++)
                        V[n++] = ot[0],
                        V[n++] = ot[1],
                        V[n++] = ot[2];
                    for (Z = new ImageData(V,Z,Z),
                    R = 0; 6 > R; R++)
                        P[R].width == 0 && (P[R] = Z)
                }
            }
            if (d === i && (d = "equirectangular"),
            d != "equirectangular" && d != "cubemap" && d != "multires")
                throw console.log("Error: invalid image type specified!"),
                {
                    type: "config error"
                };
            if (j = d,
            P = h,
            tt = z,
            Vt = N || {},
            m) {
                if (J && (a.detachShader(m, J),
                a.deleteShader(J)),
                st && (a.detachShader(m, st),
                a.deleteShader(st)),
                a.bindBuffer(a.ARRAY_BUFFER, null),
                a.bindBuffer(a.ELEMENT_ARRAY_BUFFER, null),
                m.texture && a.deleteTexture(m.texture),
                m.nodeCache)
                    for (h = 0; h < m.nodeCache.length; h++)
                        a.deleteTexture(m.nodeCache[h].texture);
                a.deleteProgram(m),
                m = i
            }
            Dt = i;
            var R, $ = !1, G;
            if (j == "cubemap")
                for (R = 0; 6 > R; R++)
                    0 < P[R].width ? (G === i && (G = P[R].width),
                    G != P[R].width && console.log("Cube faces have inconsistent widths: " + G + " vs. " + P[R].width)) : $ = !0;
            if (j == "cubemap" && (G & G - 1) !== 0 && (navigator.userAgent.toLowerCase().match(/(iphone|ipod|ipad).* os 8_/) || navigator.userAgent.toLowerCase().match(/(iphone|ipod|ipad).* os 9_/) || navigator.userAgent.toLowerCase().match(/(iphone|ipod|ipad).* os 10_/) || navigator.userAgent.match(/Trident.*rv[ :]*11\./)) || (a || (a = K.getContext("experimental-webgl", {
                alpha: !1,
                depth: !1
            })),
            a && a.getError() == 1286 && wt()),
            !a && (j == "multires" && P.hasOwnProperty("fallbackPath") || j == "cubemap") && ("WebkitAppearance"in e.documentElement.style || navigator.userAgent.match(/Trident.*rv[ :]*11\./) || navigator.appVersion.indexOf("MSIE 10") !== -1)) {
                mt && u.removeChild(mt),
                mt = e.createElement("div"),
                mt.className = "pnlm-world",
                T = P.basePath ? P.basePath + P.fallbackPath : P.fallbackPath;
                var nt = "frblud".split("")
                  , lt = 0;
                y = function() {
                    var E = e.createElement("canvas");
                    E.className = "pnlm-face pnlm-" + nt[this.side] + "face",
                    mt.appendChild(E);
                    var V = E.getContext("2d");
                    E.style.width = this.width + 4 + "px",
                    E.style.height = this.height + 4 + "px",
                    E.width = this.width + 4,
                    E.height = this.height + 4,
                    V.drawImage(this, 2, 2);
                    var ot = V.getImageData(0, 0, E.width, E.height), n = ot.data, O, S;
                    for (O = 2; O < E.width - 2; O++)
                        for (S = 0; 4 > S; S++)
                            n[4 * (O + E.width) + S] = n[4 * (O + 2 * E.width) + S],
                            n[4 * (O + E.width * (E.height - 2)) + S] = n[4 * (O + E.width * (E.height - 3)) + S];
                    for (O = 2; O < E.height - 2; O++)
                        for (S = 0; 4 > S; S++)
                            n[4 * (O * E.width + 1) + S] = n[4 * (O * E.width + 2) + S],
                            n[4 * ((O + 1) * E.width - 2) + S] = n[4 * ((O + 1) * E.width - 3) + S];
                    for (S = 0; 4 > S; S++)
                        n[4 * (E.width + 1) + S] = n[4 * (2 * E.width + 2) + S],
                        n[4 * (2 * E.width - 2) + S] = n[4 * (3 * E.width - 3) + S],
                        n[4 * (E.width * (E.height - 2) + 1) + S] = n[4 * (E.width * (E.height - 3) + 2) + S],
                        n[4 * (E.width * (E.height - 1) - 2) + S] = n[4 * (E.width * (E.height - 2) - 3) + S];
                    for (O = 1; O < E.width - 1; O++)
                        for (S = 0; 4 > S; S++)
                            n[4 * O + S] = n[4 * (O + E.width) + S],
                            n[4 * (O + E.width * (E.height - 1)) + S] = n[4 * (O + E.width * (E.height - 2)) + S];
                    for (O = 1; O < E.height - 1; O++)
                        for (S = 0; 4 > S; S++)
                            n[O * E.width * 4 + S] = n[4 * (O * E.width + 1) + S],
                            n[4 * ((O + 1) * E.width - 1) + S] = n[4 * ((O + 1) * E.width - 2) + S];
                    for (S = 0; 4 > S; S++)
                        n[S] = n[4 * (E.width + 1) + S],
                        n[4 * (E.width - 1) + S] = n[4 * (2 * E.width - 2) + S],
                        n[E.width * (E.height - 1) * 4 + S] = n[4 * (E.width * (E.height - 2) + 1) + S],
                        n[4 * (E.width * E.height - 1) + S] = n[4 * (E.width * (E.height - 1) - 2) + S];
                    V.putImageData(ot, 0, 0),
                    q.call(this)
                }
                ;
                var q = function() {
                    0 < this.width ? (Tt === i && (Tt = this.width),
                    Tt != this.width && console.log("Fallback faces have inconsistent widths: " + Tt + " vs. " + this.width)) : $ = !0,
                    lt++,
                    lt == 6 && (Tt = this.width,
                    u.appendChild(mt),
                    p())
                }
                  , $ = !1;
                for (R = 0; 6 > R; R++)
                    f = new Image,
                    f.crossOrigin = Vt.crossOrigin ? Vt.crossOrigin : "anonymous",
                    f.side = R,
                    f.onload = y,
                    f.onerror = q,
                    f.src = j == "multires" ? T.replace("%s", nt[R]) + "." + P.extension : P[R].src;
                L(Tt)
            } else {
                if (!a)
                    throw console.log("Error: no WebGL support detected!"),
                    {
                        type: "no webgl"
                    };
                for (j == "cubemap" && L(G),
                P.fullpath = P.basePath ? P.basePath + P.path : P.path,
                P.invTileResolution = 1 / P.tileResolution,
                h = at(),
                Gt = [],
                R = 0; 6 > R; R++)
                    Gt[R] = h.slice(12 * R, 12 * R + 12),
                    h = at();
                if (h = 0,
                j == "equirectangular") {
                    if (h = a.getParameter(a.MAX_TEXTURE_SIZE),
                    Math.max(P.width / 2, P.height) > h)
                        throw console.log("Error: The image is too big; it's " + P.width + "px wide, but this device's maximum supported size is " + 2 * h + "px."),
                        {
                            type: "webgl size error",
                            width: P.width,
                            maxWidth: 2 * h
                        }
                } else if (j == "cubemap" && G > a.getParameter(a.MAX_CUBE_MAP_TEXTURE_SIZE))
                    throw console.log("Error: The image is too big; it's " + G + "px wide, but this device's maximum supported size is " + h + "px."),
                    {
                        type: "webgl size error",
                        width: G,
                        maxWidth: h
                    };
                if (N === i || N.horizonPitch === i && N.horizonRoll === i || (Dt = [N.horizonPitch == i ? 0 : N.horizonPitch, N.horizonRoll == i ? 0 : N.horizonRoll]),
                G = a.TEXTURE_2D,
                a.viewport(0, 0, a.drawingBufferWidth, a.drawingBufferHeight),
                a.getShaderPrecisionFormat && (d = a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.HIGH_FLOAT)) && 1 > d.precision && (w = w.replace("highp", "mediump")),
                J = a.createShader(a.VERTEX_SHADER),
                d = _,
                j == "multires" && (d = l),
                a.shaderSource(J, d),
                a.compileShader(J),
                st = a.createShader(a.FRAGMENT_SHADER),
                d = H,
                j == "cubemap" ? (G = a.TEXTURE_CUBE_MAP,
                d = I) : j == "multires" && (d = W),
                a.shaderSource(st, d),
                a.compileShader(st),
                m = a.createProgram(),
                a.attachShader(m, J),
                a.attachShader(m, st),
                a.linkProgram(m),
                a.getShaderParameter(J, a.COMPILE_STATUS) || console.log(a.getShaderInfoLog(J)),
                a.getShaderParameter(st, a.COMPILE_STATUS) || console.log(a.getShaderInfoLog(st)),
                a.getProgramParameter(m, a.LINK_STATUS) || console.log(a.getProgramInfoLog(m)),
                a.useProgram(m),
                m.drawInProgress = !1,
                d = N.backgroundColor ? N.backgroundColor : [0, 0, 0],
                a.clearColor(d[0], d[1], d[2], 1),
                a.clear(a.COLOR_BUFFER_BIT),
                m.texCoordLocation = a.getAttribLocation(m, "a_texCoord"),
                a.enableVertexAttribArray(m.texCoordLocation),
                j != "multires" ? (St || (St = a.createBuffer()),
                a.bindBuffer(a.ARRAY_BUFFER, St),
                a.bufferData(a.ARRAY_BUFFER, new Float32Array([-1, 1, 1, 1, 1, -1, -1, 1, 1, -1, -1, -1]), a.STATIC_DRAW),
                a.vertexAttribPointer(m.texCoordLocation, 2, a.FLOAT, !1, 0, 0),
                m.aspectRatio = a.getUniformLocation(m, "u_aspectRatio"),
                a.uniform1f(m.aspectRatio, a.drawingBufferWidth / a.drawingBufferHeight),
                m.psi = a.getUniformLocation(m, "u_psi"),
                m.theta = a.getUniformLocation(m, "u_theta"),
                m.f = a.getUniformLocation(m, "u_f"),
                m.h = a.getUniformLocation(m, "u_h"),
                m.v = a.getUniformLocation(m, "u_v"),
                m.vo = a.getUniformLocation(m, "u_vo"),
                m.rot = a.getUniformLocation(m, "u_rot"),
                a.uniform1f(m.h, T / (2 * Math.PI)),
                a.uniform1f(m.v, y / Math.PI),
                a.uniform1f(m.vo, f / Math.PI * 2),
                j == "equirectangular" && (m.backgroundColor = a.getUniformLocation(m, "u_backgroundColor"),
                a.uniform4fv(m.backgroundColor, d.concat([1]))),
                m.texture = a.createTexture(),
                a.bindTexture(G, m.texture),
                j == "cubemap" ? (a.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X, 0, a.RGB, a.RGB, a.UNSIGNED_BYTE, P[1]),
                a.texImage2D(a.TEXTURE_CUBE_MAP_NEGATIVE_X, 0, a.RGB, a.RGB, a.UNSIGNED_BYTE, P[3]),
                a.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_Y, 0, a.RGB, a.RGB, a.UNSIGNED_BYTE, P[4]),
                a.texImage2D(a.TEXTURE_CUBE_MAP_NEGATIVE_Y, 0, a.RGB, a.RGB, a.UNSIGNED_BYTE, P[5]),
                a.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_Z, 0, a.RGB, a.RGB, a.UNSIGNED_BYTE, P[0]),
                a.texImage2D(a.TEXTURE_CUBE_MAP_NEGATIVE_Z, 0, a.RGB, a.RGB, a.UNSIGNED_BYTE, P[2])) : P.width <= h ? (a.uniform1i(a.getUniformLocation(m, "u_splitImage"), 0),
                a.texImage2D(G, 0, a.RGB, a.RGB, a.UNSIGNED_BYTE, P)) : (a.uniform1i(a.getUniformLocation(m, "u_splitImage"), 1),
                T = e.createElement("canvas"),
                T.width = P.width / 2,
                T.height = P.height,
                T = T.getContext("2d"),
                T.drawImage(P, 0, 0),
                y = T.getImageData(0, 0, P.width / 2, P.height),
                a.texImage2D(G, 0, a.RGB, a.RGB, a.UNSIGNED_BYTE, y),
                m.texture2 = a.createTexture(),
                a.activeTexture(a.TEXTURE1),
                a.bindTexture(G, m.texture2),
                a.uniform1i(a.getUniformLocation(m, "u_image1"), 1),
                T.drawImage(P, -P.width / 2, 0),
                y = T.getImageData(0, 0, P.width / 2, P.height),
                a.texImage2D(G, 0, a.RGB, a.RGB, a.UNSIGNED_BYTE, y),
                a.texParameteri(G, a.TEXTURE_WRAP_S, a.CLAMP_TO_EDGE),
                a.texParameteri(G, a.TEXTURE_WRAP_T, a.CLAMP_TO_EDGE),
                a.texParameteri(G, a.TEXTURE_MIN_FILTER, a.LINEAR),
                a.texParameteri(G, a.TEXTURE_MAG_FILTER, a.LINEAR),
                a.activeTexture(a.TEXTURE0)),
                a.texParameteri(G, a.TEXTURE_WRAP_S, a.CLAMP_TO_EDGE),
                a.texParameteri(G, a.TEXTURE_WRAP_T, a.CLAMP_TO_EDGE),
                a.texParameteri(G, a.TEXTURE_MIN_FILTER, a.LINEAR),
                a.texParameteri(G, a.TEXTURE_MAG_FILTER, a.LINEAR)) : (m.vertPosLocation = a.getAttribLocation(m, "a_vertCoord"),
                a.enableVertexAttribArray(m.vertPosLocation),
                jt || (jt = a.createBuffer()),
                Et || (Et = a.createBuffer()),
                Bt || (Bt = a.createBuffer()),
                a.bindBuffer(a.ARRAY_BUFFER, Et),
                a.bufferData(a.ARRAY_BUFFER, new Float32Array([0, 0, 1, 0, 1, 1, 0, 1]), a.STATIC_DRAW),
                a.bindBuffer(a.ELEMENT_ARRAY_BUFFER, Bt),
                a.bufferData(a.ELEMENT_ARRAY_BUFFER, new Uint16Array([0, 1, 2, 0, 2, 3]), a.STATIC_DRAW),
                m.perspUniform = a.getUniformLocation(m, "u_perspMatrix"),
                m.cubeUniform = a.getUniformLocation(m, "u_cubeMatrix"),
                m.level = -1,
                m.currentNodes = [],
                m.nodeCache = [],
                m.nodeCacheTimestamp = 0),
                T = a.getError(),
                T !== 0)
                    throw console.log("Error: Something went wrong with WebGL!", T),
                    {
                        type: "webgl error"
                    };
                p()
            }
        }
        ,
        this.destroy = function() {
            if (u !== i && (K !== i && u.contains(K) && u.removeChild(K),
            mt !== i && u.contains(mt) && u.removeChild(mt)),
            a) {
                var h = a.getExtension("WEBGL_lose_context");
                h && h.loseContext()
            }
        }
        ,
        this.resize = function() {
            var h = t.devicePixelRatio || 1;
            K.width = K.clientWidth * h,
            K.height = K.clientHeight * h,
            a && (a.getError() == 1286 && wt(),
            a.viewport(0, 0, a.drawingBufferWidth, a.drawingBufferHeight),
            j != "multires" && a.uniform1f(m.aspectRatio, K.clientWidth / K.clientHeight))
        }
        ,
        this.resize(),
        this.setPose = function(h, d) {
            Dt = [h, d]
        }
        ,
        this.render = function(h, d, z, T) {
            var y, f = 0;
            if (T === i && (T = {}),
            T.roll && (f = T.roll),
            Dt !== i) {
                y = Dt[0];
                var p = Dt[1]
                  , N = h
                  , L = d
                  , R = Math.cos(p) * Math.sin(h) * Math.sin(y) + Math.cos(h) * (Math.cos(y) * Math.cos(d) + Math.sin(p) * Math.sin(y) * Math.sin(d))
                  , $ = -Math.sin(h) * Math.sin(p) + Math.cos(h) * Math.cos(p) * Math.sin(d);
                h = Math.cos(p) * Math.cos(y) * Math.sin(h) + Math.cos(h) * (-Math.cos(d) * Math.sin(y) + Math.cos(y) * Math.sin(p) * Math.sin(d)),
                h = Math.asin(Math.max(Math.min(h, 1), -1)),
                d = Math.atan2($, R),
                y = [Math.cos(N) * (Math.sin(p) * Math.sin(y) * Math.cos(L) - Math.cos(y) * Math.sin(L)), Math.cos(N) * Math.cos(p) * Math.cos(L), Math.cos(N) * (Math.cos(y) * Math.sin(p) * Math.cos(L) + Math.sin(L) * Math.sin(y))],
                p = [-Math.cos(h) * Math.sin(d), Math.cos(h) * Math.cos(d)],
                p = Math.acos(Math.max(Math.min((y[0] * p[0] + y[1] * p[1]) / (Math.sqrt(y[0] * y[0] + y[1] * y[1] + y[2] * y[2]) * Math.sqrt(p[0] * p[0] + p[1] * p[1])), 1), -1)),
                0 > y[2] && (p = 2 * Math.PI - p),
                f += p
            }
            if (a || j != "multires" && j != "cubemap") {
                if (j != "multires")
                    z = 2 * Math.atan(Math.tan(.5 * z) / (a.drawingBufferWidth / a.drawingBufferHeight)),
                    z = 1 / Math.tan(.5 * z),
                    a.uniform1f(m.psi, d),
                    a.uniform1f(m.theta, h),
                    a.uniform1f(m.rot, f),
                    a.uniform1f(m.f, z),
                    tt === !0 && j == "equirectangular" && (a.bindTexture(a.TEXTURE_2D, m.texture),
                    a.texImage2D(a.TEXTURE_2D, 0, a.RGB, a.RGB, a.UNSIGNED_BYTE, P)),
                    a.drawArrays(a.TRIANGLES, 0, 6);
                else {
                    for (y = a.drawingBufferWidth / a.drawingBufferHeight,
                    p = 2 * Math.atan(Math.tan(z / 2) * a.drawingBufferHeight / a.drawingBufferWidth),
                    p = 1 / Math.tan(p / 2),
                    y = [p / y, 0, 0, 0, 0, p, 0, 0, 0, 0, 100.1 / -99.9, 20 / -99.9, 0, 0, -1, 0],
                    p = 1; p < P.maxLevel && a.drawingBufferWidth > P.tileResolution * Math.pow(2, p - 1) * Math.tan(z / 2) * .707; )
                        p++;
                    if (m.level = p,
                    p = [1, 0, 0, 0, 1, 0, 0, 0, 1],
                    p = X(p, -f, "z"),
                    p = X(p, -h, "x"),
                    p = X(p, d, "y"),
                    p = [p[0], p[1], p[2], 0, p[3], p[4], p[5], 0, p[6], p[7], p[8], 0, 0, 0, 0, 1],
                    a.uniformMatrix4fv(m.perspUniform, !1, new Float32Array(Q(y))),
                    a.uniformMatrix4fv(m.cubeUniform, !1, new Float32Array(Q(p))),
                    f = [y[0] * p[0], y[0] * p[1], y[0] * p[2], 0, y[5] * p[4], y[5] * p[5], y[5] * p[6], 0, y[10] * p[8], y[10] * p[9], y[10] * p[10], y[11], -p[8], -p[9], -p[10], 0],
                    m.nodeCache.sort(Y),
                    200 < m.nodeCache.length && m.nodeCache.length > m.currentNodes.length + 50)
                        for (y = m.nodeCache.splice(200, m.nodeCache.length - 200),
                        p = 0; p < y.length; p++)
                            a.deleteTexture(y[p].texture);
                    for (m.currentNodes = [],
                    p = "fbudlr".split(""),
                    y = 0; 6 > y; y++)
                        N = new b(Gt[y],p[y],1,0,0,P.fullpath),
                        B(f, N, h, d);
                    for (m.currentNodes.sort(D),
                    h = Lt.length - 1; 0 <= h; h--)
                        m.currentNodes.indexOf(Lt[h].node) === -1 && (Lt[h].node.textureLoad = !1,
                        Lt.splice(h, 1));
                    if (Lt.length === 0) {
                        for (h = 0; h < m.currentNodes.length; h++)
                            if (d = m.currentNodes[h],
                            !d.texture && !d.textureLoad) {
                                d.textureLoad = !0,
                                setTimeout(ht, 0, d);
                                break
                            }
                    }
                    if (!m.drawInProgress) {
                        for (m.drawInProgress = !0,
                        a.clear(a.COLOR_BUFFER_BIT),
                        h = 0; h < m.currentNodes.length; h++)
                            1 < m.currentNodes[h].textureLoaded && (a.bindBuffer(a.ARRAY_BUFFER, jt),
                            a.bufferData(a.ARRAY_BUFFER, new Float32Array(m.currentNodes[h].vertices), a.STATIC_DRAW),
                            a.vertexAttribPointer(m.vertPosLocation, 3, a.FLOAT, !1, 0, 0),
                            a.bindBuffer(a.ARRAY_BUFFER, Et),
                            a.vertexAttribPointer(m.texCoordLocation, 2, a.FLOAT, !1, 0, 0),
                            a.bindTexture(a.TEXTURE_2D, m.currentNodes[h].texture),
                            a.drawElements(a.TRIANGLES, 6, a.UNSIGNED_SHORT, 0));
                        m.drawInProgress = !1
                    }
                }
                if (T.returnImage !== i)
                    return K.toDataURL("image/png")
            } else
                for (y = Tt / 2,
                T = {
                    f: "translate3d(-" + (y + 2) + "px, -" + (y + 2) + "px, -" + y + "px)",
                    b: "translate3d(" + (y + 2) + "px, -" + (y + 2) + "px, " + y + "px) rotateX(180deg) rotateZ(180deg)",
                    u: "translate3d(-" + (y + 2) + "px, -" + y + "px, " + (y + 2) + "px) rotateX(270deg)",
                    d: "translate3d(-" + (y + 2) + "px, " + y + "px, -" + (y + 2) + "px) rotateX(90deg)",
                    l: "translate3d(-" + y + "px, -" + (y + 2) + "px, " + (y + 2) + "px) rotateX(180deg) rotateY(90deg) rotateZ(180deg)",
                    r: "translate3d(" + y + "px, -" + (y + 2) + "px, -" + (y + 2) + "px) rotateY(270deg)"
                },
                z = 1 / Math.tan(z / 2),
                z = z * K.clientWidth / 2 + "px",
                d = "perspective(" + z + ") translateZ(" + z + ") rotateX(" + h + "rad) rotateY(" + d + "rad) ",
                z = Object.keys(T),
                h = 0; 6 > h; h++)
                    (f = mt.querySelector(".pnlm-" + z[h] + "face")) && (f.style.webkitTransform = d + T[z[h]],
                    f.style.transform = d + T[z[h]])
        }
        ,
        this.isLoading = function() {
            if (a && j == "multires") {
                for (var h = 0; h < m.currentNodes.length; h++)
                    if (!m.currentNodes[h].textureLoaded)
                        return !0
            }
            return !1
        }
        ,
        this.getCanvas = function() {
            return K
        }
        ;
        var Lt = []
          , ae = function() {
            function h() {
                var p = this;
                this.texture = this.callback = null,
                this.image = new Image,
                this.image.crossOrigin = y || "anonymous";
                var N = function() {
                    if (0 < p.image.width && 0 < p.image.height) {
                        var L = p.image;
                        a.bindTexture(a.TEXTURE_2D, p.texture),
                        a.texImage2D(a.TEXTURE_2D, 0, a.RGB, a.RGB, a.UNSIGNED_BYTE, L),
                        a.texParameteri(a.TEXTURE_2D, a.TEXTURE_MAG_FILTER, a.LINEAR),
                        a.texParameteri(a.TEXTURE_2D, a.TEXTURE_MIN_FILTER, a.LINEAR),
                        a.texParameteri(a.TEXTURE_2D, a.TEXTURE_WRAP_S, a.CLAMP_TO_EDGE),
                        a.texParameteri(a.TEXTURE_2D, a.TEXTURE_WRAP_T, a.CLAMP_TO_EDGE),
                        a.bindTexture(a.TEXTURE_2D, null),
                        p.callback(p.texture, !0)
                    } else
                        p.callback(p.texture, !1);
                    Lt.length ? (L = Lt.shift(),
                    p.loadTexture(L.src, L.texture, L.callback)) : T[z++] = p
                };
                this.image.addEventListener("load", N),
                this.image.addEventListener("error", N)
            }
            function d(p, N, L, R) {
                this.node = p,
                this.src = N,
                this.texture = L,
                this.callback = R
            }
            var z = 4, T = {}, y;
            h.prototype.loadTexture = function(p, N, L) {
                this.texture = N,
                this.callback = L,
                this.image.src = p
            }
            ;
            for (var f = 0; f < z; f++)
                T[f] = new h;
            return function(p, N, L, R) {
                return y = R,
                R = a.createTexture(),
                z ? T[--z].loadTexture(N, R, L) : Lt.push(new d(p,N,R,L)),
                R
            }
        }()
    }
    var _ = "attribute vec2 a_texCoord;varying vec2 v_texCoord;void main() {gl_Position = vec4(a_texCoord, 0.0, 1.0);v_texCoord = a_texCoord;}"
      , l = "attribute vec3 a_vertCoord;attribute vec2 a_texCoord;uniform mat4 u_cubeMatrix;uniform mat4 u_perspMatrix;varying mediump vec2 v_texCoord;void main(void) {gl_Position = u_perspMatrix * u_cubeMatrix * vec4(a_vertCoord, 1.0);v_texCoord = a_texCoord;}"
      , w = `precision highp float;
uniform float u_aspectRatio;
uniform float u_psi;
uniform float u_theta;
uniform float u_f;
uniform float u_h;
uniform float u_v;
uniform float u_vo;
uniform float u_rot;
const float PI = 3.14159265358979323846264;
uniform sampler2D u_image0;
uniform sampler2D u_image1;
uniform bool u_splitImage;
uniform samplerCube u_imageCube;
varying vec2 v_texCoord;
uniform vec4 u_backgroundColor;
void main() {
float x = v_texCoord.x * u_aspectRatio;
float y = v_texCoord.y;
float sinrot = sin(u_rot);
float cosrot = cos(u_rot);
float rot_x = x * cosrot - y * sinrot;
float rot_y = x * sinrot + y * cosrot;
float sintheta = sin(u_theta);
float costheta = cos(u_theta);
float a = u_f * costheta - rot_y * sintheta;
float root = sqrt(rot_x * rot_x + a * a);
float lambda = atan(rot_x / root, a / root) + u_psi;
float phi = atan((rot_y * costheta + u_f * sintheta) / root);`
      , I = w + `float cosphi = cos(phi);
gl_FragColor = textureCube(u_imageCube, vec3(cosphi*sin(lambda), sin(phi), cosphi*cos(lambda)));
}`
      , H = w + `lambda = mod(lambda + PI, PI * 2.0) - PI;
vec2 coord = vec2(lambda / PI, phi / (PI / 2.0));
if(coord.x < -u_h || coord.x > u_h || coord.y < -u_v + u_vo || coord.y > u_v + u_vo)
gl_FragColor = u_backgroundColor;
else {
if(u_splitImage) {
if(coord.x < 0.0)
gl_FragColor = texture2D(u_image0, vec2((coord.x + u_h) / u_h, (-coord.y + u_v + u_vo) / (u_v * 2.0)));
else
gl_FragColor = texture2D(u_image1, vec2((coord.x + u_h) / u_h - 1.0, (-coord.y + u_v + u_vo) / (u_v * 2.0)));
} else {
gl_FragColor = texture2D(u_image0, vec2((coord.x + u_h) / (u_h * 2.0), (-coord.y + u_v + u_vo) / (u_v * 2.0)));
}
}
}`
      , W = "varying mediump vec2 v_texCoord;uniform sampler2D u_sampler;void main(void) {gl_FragColor = texture2D(u_sampler, v_texCoord);}";
    return {
        renderer: function(u, Y, D, b) {
            return new c(u)
        }
    }
}(window, document);
window.pannellum = function(t, e, i) {
    function c(_, l) {
        function w() {
            var o = e.createElement("div");
            if (o.innerHTML = "<!--[if lte IE 9]><i></i><![endif]-->",
            o.getElementsByTagName("i").length == 1)
                u();
            else {
                zt = n.hfov,
                Qt = n.pitch;
                var r;
                if (n.type == "cubemap") {
                    for (ft = [],
                    o = 0; 6 > o; o++)
                        ft.push(new Image),
                        ft[o].crossOrigin = n.crossOrigin;
                    M.load.lbox.style.display = "block",
                    M.load.lbar.style.display = "none"
                } else if (n.type == "multires")
                    o = JSON.parse(JSON.stringify(n.multiRes)),
                    n.basePath && n.multiRes.basePath && !/^(?:[a-z]+:)?\/\//i.test(n.multiRes.basePath) ? o.basePath = n.basePath + n.multiRes.basePath : n.multiRes.basePath ? o.basePath = n.multiRes.basePath : n.basePath && (o.basePath = n.basePath),
                    ft = o;
                else if (n.dynamic === !0)
                    ft = n.panorama;
                else {
                    if (n.panorama === i) {
                        u(n.strings.noPanoramaError);
                        return
                    }
                    ft = new Image
                }
                if (n.type == "cubemap")
                    for (var s = 6, v = function() {
                        s--,
                        s === 0 && H()
                    }, g = function(xt) {
                        var pt = e.createElement("a");
                        pt.href = xt.target.src,
                        pt.textContent = pt.href,
                        u(n.strings.fileAccessError.replace("%s", pt.outerHTML))
                    }, o = 0; o < ft.length; o++)
                        r = n.cubeMap[o],
                        r == "null" ? (console.log("Will use background instead of missing cubemap face " + o),
                        v()) : (n.basePath && !I(r) && (r = n.basePath + r),
                        ft[o].onload = v,
                        ft[o].onerror = g,
                        ft[o].src = Z(r));
                else if (n.type == "multires")
                    H();
                else if (r = "",
                n.basePath && (r = n.basePath),
                n.dynamic !== !0) {
                    r = I(n.panorama) ? n.panorama : r + n.panorama,
                    ft.onload = function() {
                        t.URL.revokeObjectURL(this.src),
                        H()
                    }
                    ;
                    var x = new XMLHttpRequest;
                    x.onloadend = function() {
                        if (x.status != 200) {
                            var F = e.createElement("a");
                            F.href = r,
                            F.textContent = F.href,
                            u(n.strings.fileAccessError.replace("%s", F.outerHTML))
                        }
                        W(this.response),
                        M.load.msg.innerHTML = ""
                    }
                    ,
                    x.onprogress = function(F) {
                        if (F.lengthComputable) {
                            M.load.lbarFill.style.width = F.loaded / F.total * 100 + "%";
                            var xt, pt;
                            1e6 < F.total ? (xt = "MB",
                            pt = (F.loaded / 1e6).toFixed(2),
                            F = (F.total / 1e6).toFixed(2)) : 1e3 < F.total ? (xt = "kB",
                            pt = (F.loaded / 1e3).toFixed(1),
                            F = (F.total / 1e3).toFixed(1)) : (xt = "B",
                            pt = F.loaded,
                            F = F.total),
                            M.load.msg.innerHTML = pt + " / " + F + " " + xt
                        } else
                            M.load.lbox.style.display = "block",
                            M.load.lbar.style.display = "none"
                    }
                    ;
                    try {
                        x.open("GET", r, !0)
                    } catch {
                        u(n.strings.malformedURLError)
                    }
                    x.responseType = "blob",
                    x.setRequestHeader("Accept", "image/*,*/*;q=0.9"),
                    x.withCredentials = n.crossOrigin === "use-credentials",
                    x.send()
                }
                n.draggable && it.classList.add("pnlm-grab"),
                it.classList.remove("pnlm-grabbing"),
                ue = n.dynamicUpdate === !0,
                n.dynamic && ue && (ft = n.panorama,
                H())
            }
        }
        function I(o) {
            return /^(?:[a-z]+:)?\/\//i.test(o) || o[0] == "/" || o.slice(0, 5) == "blob:"
        }
        function H() {
            O || (O = new libpannellum.renderer(ct)),
            be || (be = !0,
            gt.addEventListener("mousedown", b, !1),
            e.addEventListener("mousemove", X, !1),
            e.addEventListener("mouseup", Q, !1),
            n.mouseZoom && (it.addEventListener("mousewheel", J, !1),
            it.addEventListener("DOMMouseScroll", J, !1)),
            n.doubleClickZoom && gt.addEventListener("dblclick", B, !1),
            _.addEventListener("mozfullscreenchange", p, !1),
            _.addEventListener("webkitfullscreenchange", p, !1),
            _.addEventListener("msfullscreenchange", p, !1),
            _.addEventListener("fullscreenchange", p, !1),
            t.addEventListener("resize", j, !1),
            t.addEventListener("orientationchange", j, !1),
            n.disableKeyboardCtrl || (_.addEventListener("keydown", st, !1),
            _.addEventListener("keyup", mt, !1),
            _.addEventListener("blur", Tt, !1)),
            e.addEventListener("mouseleave", Q, !1),
            e.documentElement.style.pointerAction === "" && e.documentElement.style.touchAction === "" ? (gt.addEventListener("pointerdown", K, !1),
            gt.addEventListener("pointermove", m, !1),
            gt.addEventListener("pointerup", a, !1),
            gt.addEventListener("pointerleave", a, !1)) : (gt.addEventListener("touchstart", ht, !1),
            gt.addEventListener("touchmove", yt, !1),
            gt.addEventListener("touchend", wt, !1)),
            t.navigator.pointerEnabled && (_.style.touchAction = "none")),
            Vt(),
            L(n.hfov),
            setTimeout(function() {}, 500)
        }
        function W(o) {
            var r = new FileReader;
            r.addEventListener("loadend", function() {
                var s = r.result;
                if (navigator.userAgent.toLowerCase().match(/(iphone|ipod|ipad).* os 8_/)) {
                    var v = s.indexOf("\xFF\xC2");
                    (0 > v || 65536 < v) && u(n.strings.iOS8WebGLError)
                }
                if (v = s.indexOf("<x:xmpmeta"),
                -1 < v && n.ignoreGPanoXMP !== !0) {
                    var g = s.substring(v, s.indexOf("</x:xmpmeta>") + 12)
                      , _t = function(Xt) {
                        var It;
                        return 0 <= g.indexOf(Xt + '="') ? (It = g.substring(g.indexOf(Xt + '="') + Xt.length + 2),
                        It = It.substring(0, It.indexOf('"'))) : 0 <= g.indexOf(Xt + ">") && (It = g.substring(g.indexOf(Xt + ">") + Xt.length + 1),
                        It = It.substring(0, It.indexOf("<"))),
                        It !== i ? Number(It) : null
                    }
                      , s = _t("GPano:FullPanoWidthPixels")
                      , v = _t("GPano:CroppedAreaImageWidthPixels")
                      , x = _t("GPano:FullPanoHeightPixels")
                      , F = _t("GPano:CroppedAreaImageHeightPixels")
                      , xt = _t("GPano:CroppedAreaTopPixels")
                      , pt = _t("GPano:PoseHeadingDegrees")
                      , Mt = _t("GPano:PosePitchDegrees")
                      , _t = _t("GPano:PoseRollDegrees");
                    s !== null && v !== null && x !== null && F !== null && xt !== null && (0 > Ct.indexOf("haov") && (n.haov = v / s * 360),
                    0 > Ct.indexOf("vaov") && (n.vaov = F / x * 180),
                    0 > Ct.indexOf("vOffset") && (n.vOffset = -180 * ((xt + F / 2) / x - .5)),
                    pt !== null && 0 > Ct.indexOf("northOffset") && (n.northOffset = pt,
                    n.compass !== !1 && (n.compass = !0)),
                    Mt !== null && _t !== null && (0 > Ct.indexOf("horizonPitch") && (n.horizonPitch = Mt),
                    0 > Ct.indexOf("horizonRoll") && (n.horizonRoll = _t)))
                }
                ft.src = t.URL.createObjectURL(o)
            }),
            r.readAsBinaryString !== i ? r.readAsBinaryString(o) : r.readAsText(o)
        }
        function u(o) {
            o === i && (o = n.strings.genericWebGLError),
            M.errorMsg.innerHTML = "<p>" + o + "</p>",
            k.load.style.display = "none",
            M.load.box.style.display = "none",
            M.errorMsg.style.display = "table",
            ce = !0,
            et = i,
            ct.style.display = "none",
            V("error", o)
        }
        function Y(o) {
            var r = D(o);
            Nt.style.left = r.x + "px",
            Nt.style.top = r.y + "px",
            clearTimeout(Y.t1),
            clearTimeout(Y.t2),
            Nt.style.display = "block",
            Nt.style.opacity = 1,
            Y.t1 = setTimeout(function() {
                Nt.style.opacity = 0
            }, 2e3),
            Y.t2 = setTimeout(function() {
                Nt.style.display = "none"
            }, 2500),
            o.preventDefault()
        }
        function D(o) {
            var r = _.getBoundingClientRect()
              , s = {};
            return s.x = (o.clientX || o.pageX) - r.left,
            s.y = (o.clientY || o.pageY) - r.top,
            s
        }
        function b(o) {
            if (o.preventDefault(),
            _.focus(),
            et && n.draggable) {
                var r = D(o);
                if (n.hotSpotDebug) {
                    var s = at(o);
                    console.log("Pitch: " + s[0] + ", Yaw: " + s[1] + ", Center Pitch: " + n.pitch + ", Center Yaw: " + n.yaw + ", HFOV: " + n.hfov)
                }
                R(),
                nt(),
                n.roll = 0,
                U.hfov = 0,
                Ft = !0,
                ut = Date.now(),
                Zt = r.x,
                Kt = r.y,
                se = n.yaw,
                le = n.pitch,
                it.classList.add("pnlm-grabbing"),
                it.classList.remove("pnlm-grab"),
                V("mousedown", o),
                tt()
            }
        }
        function B(o) {
            n.minHfov === n.hfov ? ot.setHfov(zt, 1e3) : (o = at(o),
            ot.lookAt(o[0], o[1], n.minHfov, 1e3))
        }
        function at(o) {
            var g = D(o);
            o = O.getCanvas();
            var x = o.clientWidth
              , F = o.clientHeight;
            o = g.x / x * 2 - 1;
            var F = (1 - g.y / F * 2) * F / x
              , r = 1 / Math.tan(n.hfov * Math.PI / 360)
              , s = Math.sin(n.pitch * Math.PI / 180)
              , v = Math.cos(n.pitch * Math.PI / 180)
              , g = r * v - F * s
              , x = Math.sqrt(o * o + g * g)
              , F = 180 * Math.atan((F * v + r * s) / x) / Math.PI;
            return o = 180 * Math.atan2(o / x, g / x) / Math.PI + n.yaw,
            -180 > o && (o += 360),
            180 < o && (o -= 360),
            [F, o]
        }
        function X(o) {
            if (Ft && et) {
                ut = Date.now();
                var s = O.getCanvas()
                  , r = s.clientWidth
                  , s = s.clientHeight;
                o = D(o);
                var v = 180 * (Math.atan(Zt / r * 2 - 1) - Math.atan(o.x / r * 2 - 1)) / Math.PI * n.hfov / 90 + se;
                U.yaw = (v - n.yaw) % 360 * .2,
                n.yaw = v,
                r = 360 * Math.atan(Math.tan(n.hfov / 360 * Math.PI) * s / r) / Math.PI,
                r = 180 * (Math.atan(o.y / s * 2 - 1) - Math.atan(Kt / s * 2 - 1)) / Math.PI * r / 90 + le,
                U.pitch = .2 * (r - n.pitch),
                n.pitch = r
            }
        }
        function Q(o) {
            Ft && (Ft = !1,
            15 < Date.now() - ut && (U.pitch = U.yaw = 0),
            it.classList.add("pnlm-grab"),
            it.classList.remove("pnlm-grabbing"),
            ut = Date.now(),
            V("mouseup", o))
        }
        function ht(o) {
            if (et && n.draggable) {
                R(),
                nt(),
                n.roll = 0,
                U.hfov = 0;
                var r = D(o.targetTouches[0]);
                if (Zt = r.x,
                Kt = r.y,
                o.targetTouches.length == 2) {
                    var s = D(o.targetTouches[1]);
                    Zt += .5 * (s.x - r.x),
                    Kt += .5 * (s.y - r.y),
                    Jt = Math.sqrt((r.x - s.x) * (r.x - s.x) + (r.y - s.y) * (r.y - s.y))
                }
                Ft = !0,
                ut = Date.now(),
                se = n.yaw,
                le = n.pitch,
                V("touchstart", o),
                tt()
            }
        }
        function yt(o) {
            if (n.draggable && (o.preventDefault(),
            et && (ut = Date.now()),
            Ft && et)) {
                var r = D(o.targetTouches[0])
                  , s = r.x
                  , v = r.y;
                o.targetTouches.length == 2 && Jt != -1 && (o = D(o.targetTouches[1]),
                s += .5 * (o.x - r.x),
                v += .5 * (o.y - r.y),
                r = Math.sqrt((r.x - o.x) * (r.x - o.x) + (r.y - o.y) * (r.y - o.y)),
                L(n.hfov + .1 * (Jt - r)),
                Jt = r),
                r = n.hfov / 360 * n.touchPanSpeedCoeffFactor,
                s = (Zt - s) * r + se,
                U.yaw = (s - n.yaw) % 360 * .2,
                n.yaw = s,
                v = (v - Kt) * r + le,
                U.pitch = .2 * (v - n.pitch),
                n.pitch = v
            }
        }
        function wt() {
            Ft = !1,
            150 < Date.now() - ut && (U.pitch = U.yaw = 0),
            Jt = -1,
            ut = Date.now(),
            V("touchend", event)
        }
        function K(o) {
            o.pointerType == "touch" && et && n.draggable && (kt.push(o.pointerId),
            Yt.push({
                clientX: o.clientX,
                clientY: o.clientY
            }),
            o.targetTouches = Yt,
            ht(o),
            o.preventDefault())
        }
        function m(o) {
            if (o.pointerType == "touch" && n.draggable) {
                for (var r = 0; r < kt.length; r++)
                    if (o.pointerId == kt[r]) {
                        Yt[r].clientX = o.clientX,
                        Yt[r].clientY = o.clientY,
                        o.targetTouches = Yt,
                        yt(o),
                        o.preventDefault();
                        break
                    }
            }
        }
        function a(o) {
            if (o.pointerType == "touch") {
                for (var r = !1, s = 0; s < kt.length; s++)
                    o.pointerId == kt[s] && (kt[s] = i),
                    kt[s] && (r = !0);
                r || (kt = [],
                Yt = [],
                wt()),
                o.preventDefault()
            }
        }
        function J(o) {
            et && (n.mouseZoom != "fullscreenonly" || Wt) && (o.preventDefault(),
            R(),
            ut = Date.now(),
            o.wheelDeltaY ? (L(n.hfov - .05 * o.wheelDeltaY),
            U.hfov = 0 > o.wheelDelta ? 1 : -1) : o.wheelDelta ? (L(n.hfov - .05 * o.wheelDelta),
            U.hfov = 0 > o.wheelDelta ? 1 : -1) : o.detail && (L(n.hfov + 1.5 * o.detail),
            U.hfov = 0 < o.detail ? 1 : -1),
            tt())
        }
        function st(o) {
            R(),
            ut = Date.now(),
            nt(),
            n.roll = 0;
            var r = o.which || o.keycode;
            0 > n.capturedKeyNumbers.indexOf(r) || (o.preventDefault(),
            r == 27 ? Wt && f() : Gt(r, !0))
        }
        function Tt() {
            for (var o = 0; 10 > o; o++)
                C[o] = !1
        }
        function mt(o) {
            var r = o.which || o.keycode;
            0 > n.capturedKeyNumbers.indexOf(r) || (o.preventDefault(),
            Gt(r, !1))
        }
        function Gt(o, r) {
            var s = !1;
            switch (o) {
            case 109:
            case 189:
            case 17:
            case 173:
                C[0] != r && (s = !0),
                C[0] = r;
                break;
            case 107:
            case 187:
            case 16:
            case 61:
                C[1] != r && (s = !0),
                C[1] = r;
                break;
            case 38:
                C[2] != r && (s = !0),
                C[2] = r;
                break;
            case 87:
                C[6] != r && (s = !0),
                C[6] = r;
                break;
            case 40:
                C[3] != r && (s = !0),
                C[3] = r;
                break;
            case 83:
                C[7] != r && (s = !0),
                C[7] = r;
                break;
            case 37:
                C[4] != r && (s = !0),
                C[4] = r;
                break;
            case 65:
                C[8] != r && (s = !0),
                C[8] = r;
                break;
            case 39:
                C[5] != r && (s = !0),
                C[5] = r;
                break;
            case 68:
                C[9] != r && (s = !0),
                C[9] = r
            }
            s && r && (Rt = typeof performance < "u" && performance.now() ? performance.now() : Date.now(),
            tt())
        }
        function Dt() {
            if (et) {
                var o = !1, r = n.pitch, s = n.yaw, v = n.hfov, g;
                g = typeof performance < "u" && performance.now() ? performance.now() : Date.now(),
                Rt === i && (Rt = g);
                var x = (g - Rt) * n.hfov / 1700
                  , x = Math.min(x, 1);
                if (C[0] && n.keyboardZoom === !0 && (L(n.hfov + (.8 * U.hfov + .5) * x),
                o = !0),
                C[1] && n.keyboardZoom === !0 && (L(n.hfov + (.8 * U.hfov - .2) * x),
                o = !0),
                (C[2] || C[6]) && (n.pitch += (.8 * U.pitch + .2) * x,
                o = !0),
                (C[3] || C[7]) && (n.pitch += (.8 * U.pitch - .2) * x,
                o = !0),
                (C[4] || C[8]) && (n.yaw += (.8 * U.yaw - .2) * x,
                o = !0),
                (C[5] || C[9]) && (n.yaw += (.8 * U.yaw + .2) * x,
                o = !0),
                o && (ut = Date.now()),
                n.autoRotate) {
                    if (.001 < g - Rt) {
                        var o = (g - Rt) / 1e3
                          , F = (U.yaw / o * x - .2 * n.autoRotate) * o
                          , F = (0 < -n.autoRotate ? 1 : -1) * Math.min(Math.abs(n.autoRotate * o), Math.abs(F));
                        n.yaw += F
                    }
                    n.autoRotateStopDelay && (n.autoRotateStopDelay -= g - Rt,
                    0 >= n.autoRotateStopDelay && (n.autoRotateStopDelay = !1,
                    Pt = n.autoRotate,
                    n.autoRotate = 0))
                }
                dt.pitch && (P("pitch"),
                r = n.pitch),
                dt.yaw && (P("yaw"),
                s = n.yaw),
                dt.hfov && (P("hfov"),
                v = n.hfov),
                0 < x && !n.autoRotate && (o = 1 - n.friction,
                C[4] || C[5] || C[8] || C[9] || dt.yaw || (n.yaw += U.yaw * x * o),
                C[2] || C[3] || C[6] || C[7] || dt.pitch || (n.pitch += U.pitch * x * o),
                C[0] || C[1] || dt.hfov || L(n.hfov + U.hfov * x * o)),
                Rt = g,
                0 < x && (U.yaw = .8 * U.yaw + (n.yaw - s) / x * .2,
                U.pitch = .8 * U.pitch + (n.pitch - r) / x * .2,
                U.hfov = .8 * U.hfov + (n.hfov - v) / x * .2,
                r = n.autoRotate ? Math.abs(n.autoRotate) : 5,
                U.yaw = Math.min(r, Math.max(U.yaw, -r)),
                U.pitch = Math.min(r, Math.max(U.pitch, -r)),
                U.hfov = Math.min(r, Math.max(U.hfov, -r))),
                C[0] && C[1] && (U.hfov = 0),
                (C[2] || C[6]) && (C[3] || C[7]) && (U.pitch = 0),
                (C[4] || C[8]) && (C[5] || C[9]) && (U.yaw = 0)
            }
        }
        function P(o) {
            var r = dt[o]
              , s = Math.min(1, Math.max((Date.now() - r.startTime) / 1e3 / (r.duration / 1e3), 0))
              , s = r.startPosition + n.animationTimingFunction(s) * (r.endPosition - r.startPosition);
            (r.endPosition > r.startPosition && s >= r.endPosition || r.endPosition < r.startPosition && s <= r.endPosition || r.endPosition === r.startPosition) && (s = r.endPosition,
            U[o] = 0,
            delete dt[o]),
            n[o] = s
        }
        function j() {
            p("resize")
        }
        function tt() {
            Pe || (Pe = !0,
            St())
        }
        function St() {
            if (!Ue)
                if (jt(),
                he && clearTimeout(he),
                Ft || bt === !0)
                    requestAnimationFrame(St);
                else if (C[0] || C[1] || C[2] || C[3] || C[4] || C[5] || C[6] || C[7] || C[8] || C[9] || n.autoRotate || dt.pitch || dt.yaw || dt.hfov || .01 < Math.abs(U.yaw) || .01 < Math.abs(U.pitch) || .01 < Math.abs(U.hfov))
                    Dt(),
                    0 <= n.autoRotateInactivityDelay && Pt && Date.now() - ut > n.autoRotateInactivityDelay && !n.autoRotate && (n.autoRotate = Pt,
                    ot.lookAt(Qt, i, zt, 3e3)),
                    requestAnimationFrame(St);
                else if (O && (O.isLoading() || n.dynamic === !0 && ue))
                    requestAnimationFrame(St);
                else {
                    V("animatefinished", {
                        pitch: ot.getPitch(),
                        yaw: ot.getYaw(),
                        hfov: ot.getHfov()
                    }),
                    Pe = !1,
                    Rt = i;
                    var o = n.autoRotateInactivityDelay - (Date.now() - ut);
                    0 < o ? he = setTimeout(function() {
                        n.autoRotate = Pt,
                        ot.lookAt(Qt, i, zt, 3e3),
                        tt()
                    }, o) : 0 <= n.autoRotateInactivityDelay && Pt && (n.autoRotate = Pt,
                    ot.lookAt(Qt, i, zt, 3e3),
                    tt())
                }
        }
        function jt() {
            var o;
            if (et) {
                var r = O.getCanvas();
                n.autoRotate !== !1 && (360 < n.yaw ? n.yaw -= 360 : -360 > n.yaw && (n.yaw += 360)),
                o = n.yaw;
                var s = 0;
                if (n.avoidShowingBackground) {
                    var v = n.hfov / 2
                      , g = 180 * Math.atan2(Math.tan(v / 180 * Math.PI), r.width / r.height) / Math.PI;
                    n.vaov > n.haov ? Math.min(Math.cos((n.pitch - v) / 180 * Math.PI), Math.cos((n.pitch + v) / 180 * Math.PI)) : s = v * (1 - Math.min(Math.cos((n.pitch - g) / 180 * Math.PI), Math.cos((n.pitch + g) / 180 * Math.PI)))
                }
                var v = n.maxYaw - n.minYaw
                  , g = -180
                  , x = 180;
                360 > v && (g = n.minYaw + n.hfov / 2 + s,
                x = n.maxYaw - n.hfov / 2 - s,
                v < n.hfov && (g = x = (g + x) / 2),
                n.yaw = Math.max(g, Math.min(x, n.yaw))),
                n.autoRotate === !1 && (360 < n.yaw ? n.yaw -= 360 : -360 > n.yaw && (n.yaw += 360)),
                n.autoRotate !== !1 && o != n.yaw && Rt !== i && (n.autoRotate *= -1),
                o = 2 * Math.atan(Math.tan(n.hfov / 180 * Math.PI * .5) / (r.width / r.height)) / Math.PI * 180,
                r = n.minPitch + o / 2,
                s = n.maxPitch - o / 2,
                n.maxPitch - n.minPitch < o && (r = s = (r + s) / 2),
                isNaN(r) && (r = -90),
                isNaN(s) && (s = 90),
                n.pitch = Math.max(r, Math.min(s, n.pitch)),
                O.render(n.pitch * Math.PI / 180, n.yaw * Math.PI / 180, n.hfov * Math.PI / 180, {
                    roll: n.roll * Math.PI / 180
                }),
                n.hotSpots.forEach(z),
                n.compass && (te.style.transform = "rotate(" + (-n.yaw - n.northOffset) + "deg)",
                te.style.webkitTransform = "rotate(" + (-n.yaw - n.northOffset) + "deg)")
            }
        }
        function Et(o, r, s, v) {
            this.w = o,
            this.x = r,
            this.y = s,
            this.z = v
        }
        function Bt(o) {
            var r;
            r = o.alpha;
            var s = o.beta;
            o = o.gamma,
            s = [s ? s * Math.PI / 180 / 2 : 0, o ? o * Math.PI / 180 / 2 : 0, r ? r * Math.PI / 180 / 2 : 0],
            r = [Math.cos(s[0]), Math.cos(s[1]), Math.cos(s[2])],
            s = [Math.sin(s[0]), Math.sin(s[1]), Math.sin(s[2])],
            r = new Et(r[0] * r[1] * r[2] - s[0] * s[1] * s[2],s[0] * r[1] * r[2] - r[0] * s[1] * s[2],r[0] * s[1] * r[2] + s[0] * r[1] * s[2],r[0] * r[1] * s[2] + s[0] * s[1] * r[2]),
            r = r.multiply(new Et(Math.sqrt(.5),-Math.sqrt(.5),0,0)),
            s = t.orientation ? -t.orientation * Math.PI / 180 / 2 : 0,
            r = r.multiply(new Et(Math.cos(s),0,-Math.sin(s),0)).toEulerAngles(),
            typeof bt == "number" && 10 > bt ? bt += 1 : bt === 10 ? (ke = r[2] / Math.PI * 180 + n.yaw,
            bt = !0,
            requestAnimationFrame(St)) : (n.pitch = r[0] / Math.PI * 180,
            n.roll = -r[1] / Math.PI * 180,
            n.yaw = -r[2] / Math.PI * 180 + ke)
        }
        function Vt() {
            try {
                var o = {};
                n.horizonPitch !== i && (o.horizonPitch = n.horizonPitch * Math.PI / 180),
                n.horizonRoll !== i && (o.horizonRoll = n.horizonRoll * Math.PI / 180),
                n.backgroundColor !== i && (o.backgroundColor = n.backgroundColor),
                O.init(ft, n.type, n.dynamic, n.haov * Math.PI / 180, n.vaov * Math.PI / 180, n.vOffset * Math.PI / 180, Lt, o),
                n.dynamic !== !0 && (ft = i)
            } catch (r) {
                if (r.type == "webgl error" || r.type == "no webgl")
                    u();
                else if (r.type == "webgl size error")
                    u(n.strings.textureSizeError.replace("%s", r.width).replace("%s", r.maxWidth));
                else
                    throw u(n.strings.unknownError),
                    r
            }
        }
        function Lt() {
            if (n.sceneFadeDuration && O.fadeImg !== i) {
                O.fadeImg.style.opacity = 0;
                var o = O.fadeImg;
                delete O.fadeImg,
                setTimeout(function() {
                    ct.removeChild(o),
                    V("scenechangefadedone")
                }, n.sceneFadeDuration)
            }
            te.style.display = n.compass ? "inline" : "none",
            h(),
            M.load.box.style.display = "none",
            S !== i && (ct.removeChild(S),
            S = i),
            et = !0,
            V("load"),
            tt()
        }
        function ae(o) {
            o.pitch = Number(o.pitch) || 0,
            o.yaw = Number(o.yaw) || 0;
            var r = e.createElement("div");
            r.className = "pnlm-hotspot-base",
            r.className = o.cssClass ? r.className + (" " + o.cssClass) : r.className + (" pnlm-hotspot pnlm-sprite pnlm-" + q(o.type));
            var s = e.createElement("span");
            o.text && (s.innerHTML = q(o.text));
            var v;
            if (o.video) {
                v = e.createElement("video");
                var g = o.video;
                n.basePath && !I(g) && (g = n.basePath + g),
                v.src = Z(g),
                v.controls = !0,
                v.style.width = o.width + "px",
                ct.appendChild(r),
                s.appendChild(v)
            } else if (o.image) {
                g = o.image,
                n.basePath && !I(g) && (g = n.basePath + g),
                v = e.createElement("a"),
                v.href = Z(o.URL ? o.URL : g, !0),
                v.target = "_blank",
                s.appendChild(v);
                var x = e.createElement("img");
                x.src = Z(g),
                x.style.width = o.width + "px",
                x.style.paddingTop = "5px",
                ct.appendChild(r),
                v.appendChild(x),
                s.style.maxWidth = "initial"
            } else if (o.URL) {
                if (v = e.createElement("a"),
                v.href = Z(o.URL, !0),
                o.attributes)
                    for (g in o.attributes)
                        v.setAttribute(g, o.attributes[g]);
                else
                    v.target = "_blank";
                ct.appendChild(v),
                r.className += " pnlm-pointer",
                s.className += " pnlm-pointer",
                v.appendChild(r)
            } else
                o.sceneId && (r.onclick = r.ontouchend = function() {
                    return r.clicked || (r.clicked = !0,
                    G(o.sceneId, o.targetPitch, o.targetYaw, o.targetHfov)),
                    !1
                }
                ,
                r.className += " pnlm-pointer",
                s.className += " pnlm-pointer"),
                ct.appendChild(r);
            o.createTooltipFunc ? o.createTooltipFunc(r, o.createTooltipArgs) : (o.text || o.video || o.image) && (r.classList.add("pnlm-tooltip"),
            r.appendChild(s),
            s.style.width = s.scrollWidth - 20 + "px",
            s.style.marginLeft = -(s.scrollWidth - r.offsetWidth) / 2 + "px",
            s.style.marginTop = -s.scrollHeight - 12 + "px"),
            o.clickHandlerFunc && (r.addEventListener("click", function(F) {
                o.clickHandlerFunc(F, o.clickHandlerArgs)
            }, "false"),
            r.className += " pnlm-pointer",
            s.className += " pnlm-pointer"),
            o.div = r
        }
        function h() {
            xe || (n.hotSpots ? (n.hotSpots = n.hotSpots.sort(function(o, r) {
                return o.pitch < r.pitch
            }),
            n.hotSpots.forEach(ae)) : n.hotSpots = [],
            xe = !0,
            n.hotSpots.forEach(z))
        }
        function d() {
            var o = n.hotSpots;
            if (xe = !1,
            delete n.hotSpots,
            o)
                for (var r = 0; r < o.length; r++) {
                    var s = o[r].div;
                    if (s) {
                        for (; s.parentNode && s.parentNode != ct; )
                            s = s.parentNode;
                        ct.removeChild(s)
                    }
                    delete o[r].div
                }
        }
        function z(o) {
            var r = Math.sin(o.pitch * Math.PI / 180)
              , s = Math.cos(o.pitch * Math.PI / 180)
              , v = Math.sin(n.pitch * Math.PI / 180)
              , g = Math.cos(n.pitch * Math.PI / 180)
              , x = Math.cos((-o.yaw + n.yaw) * Math.PI / 180)
              , F = r * v + s * x * g;
            if (90 >= o.yaw && -90 < o.yaw && 0 >= F || (90 < o.yaw || -90 >= o.yaw) && 0 >= F)
                o.div.style.visibility = "hidden";
            else {
                var xt = Math.sin((-o.yaw + n.yaw) * Math.PI / 180)
                  , pt = Math.tan(n.hfov * Math.PI / 360);
                o.div.style.visibility = "visible";
                var _t = O.getCanvas()
                  , Mt = _t.clientWidth
                  , _t = _t.clientHeight
                  , r = [-Mt / pt * xt * s / F / 2, -Mt / pt * (r * g - s * x * v) / F / 2]
                  , s = Math.sin(n.roll * Math.PI / 180)
                  , v = Math.cos(n.roll * Math.PI / 180)
                  , r = [r[0] * v - r[1] * s, r[0] * s + r[1] * v];
                r[0] += (Mt - o.div.offsetWidth) / 2,
                r[1] += (_t - o.div.offsetHeight) / 2,
                Mt = "translate(" + r[0] + "px, " + r[1] + "px) translateZ(9999px) rotate(" + n.roll + "deg)",
                o.scale && (Mt += " scale(" + zt / n.hfov / F + ")"),
                o.div.style.webkitTransform = Mt,
                o.div.style.MozTransform = Mt,
                o.div.style.transform = Mt
            }
        }
        function T(o) {
            n = {};
            var r, s, v = "haov vaov vOffset northOffset horizonPitch horizonRoll".split(" ");
            Ct = [];
            for (r in Me)
                Me.hasOwnProperty(r) && (n[r] = Me[r]);
            for (r in l.default)
                if (l.default.hasOwnProperty(r))
                    if (r == "strings")
                        for (s in l.default.strings)
                            l.default.strings.hasOwnProperty(s) && (n.strings[s] = q(l.default.strings[s]));
                    else
                        n[r] = l.default[r],
                        0 <= v.indexOf(r) && Ct.push(r);
            if (o !== null && o !== "" && l.scenes && l.scenes[o]) {
                var g = l.scenes[o];
                for (r in g)
                    if (g.hasOwnProperty(r))
                        if (r == "strings")
                            for (s in g.strings)
                                g.strings.hasOwnProperty(s) && (n.strings[s] = q(g.strings[s]));
                        else
                            n[r] = g[r],
                            0 <= v.indexOf(r) && Ct.push(r);
                n.scene = o
            }
            for (r in l)
                if (l.hasOwnProperty(r))
                    if (r == "strings")
                        for (s in l.strings)
                            l.strings.hasOwnProperty(s) && (n.strings[s] = q(l.strings[s]));
                    else
                        n[r] = l[r],
                        0 <= v.indexOf(r) && Ct.push(r)
        }
        function y(o) {
            if ((o = o || !1) && "preview"in n) {
                var r = n.preview;
                n.basePath && !I(r) && (r = n.basePath + r),
                S = e.createElement("div"),
                S.className = "pnlm-preview-img",
                S.style.backgroundImage = "url('" + Z(r).replace(/"/g, "%22").replace(/'/g, "%27") + "')",
                ct.appendChild(S)
            }
            var r = n.title
              , s = n.author;
            o && ("previewTitle"in n && (n.title = n.previewTitle),
            "previewAuthor"in n && (n.author = n.previewAuthor)),
            n.hasOwnProperty("title") || (M.title.innerHTML = ""),
            n.hasOwnProperty("author") || (M.author.innerHTML = ""),
            n.hasOwnProperty("title") || n.hasOwnProperty("author") || (M.container.style.display = "none"),
            k.load.innerHTML = "<p>" + n.strings.loadButtonLabel + "</p>",
            M.load.boxp.innerHTML = n.strings.loadingLabel;
            for (var v in n)
                if (n.hasOwnProperty(v))
                    switch (v) {
                    case "title":
                        M.title.innerHTML = q(n[v]),
                        M.container.style.display = "inline";
                        break;
                    case "author":
                        var g = q(n[v]);
                        n.authorURL && (g = e.createElement("a"),
                        g.href = Z(n.authorURL, !0),
                        g.target = "_blank",
                        g.innerHTML = q(n[v]),
                        g = g.outerHTML),
                        M.author.innerHTML = n.strings.bylineLabel.replace("%s", g),
                        M.container.style.display = "inline";
                        break;
                    case "fallback":
                        g = e.createElement("a"),
                        g.href = Z(n[v], !0),
                        g.target = "_blank",
                        g.textContent = "Click here to view this panorama in an alternative viewer.";
                        var x = e.createElement("p");
                        x.textContent = "Your browser does not support WebGL.",
                        x.appendChild(e.createElement("br")),
                        x.appendChild(g),
                        M.errorMsg.innerHTML = "",
                        M.errorMsg.appendChild(x);
                        break;
                    case "hfov":
                        L(Number(n[v]));
                        break;
                    case "autoLoad":
                        n[v] === !0 && O === i && (M.load.box.style.display = "inline",
                        k.load.style.display = "none",
                        w());
                        break;
                    case "showZoomCtrl":
                        k.zoom.style.display = n[v] && n.showControls != !1 ? "block" : "none";
                        break;
                    case "showFullscreenCtrl":
                        k.fullscreen.style.display = n[v] && n.showControls != !1 && ("fullscreen"in e || "mozFullScreen"in e || "webkitIsFullScreen"in e || "msFullscreenElement"in e) ? "block" : "none";
                        break;
                    case "hotSpotDebug":
                        Te.style.display = n[v] ? "block" : "none";
                        break;
                    case "showControls":
                        n[v] || (k.orientation.style.display = "none",
                        k.zoom.style.display = "none",
                        k.fullscreen.style.display = "none");
                        break;
                    case "orientationOnByDefault":
                        n[v] && lt()
                    }
            o && (r ? n.title = r : delete n.title,
            s ? n.author = s : delete n.author)
        }
        function f() {
            if (et && !ce)
                if (Wt)
                    e.exitFullscreen ? e.exitFullscreen() : e.mozCancelFullScreen ? e.mozCancelFullScreen() : e.webkitCancelFullScreen ? e.webkitCancelFullScreen() : e.msExitFullscreen && e.msExitFullscreen();
                else
                    try {
                        _.requestFullscreen ? _.requestFullscreen() : _.mozRequestFullScreen ? _.mozRequestFullScreen() : _.msRequestFullscreen ? _.msRequestFullscreen() : _.webkitRequestFullScreen()
                    } catch {}
        }
        function p(o) {
            e.fullscreenElement || e.fullscreen || e.mozFullScreen || e.webkitIsFullScreen || e.msFullscreenElement ? (k.fullscreen.classList.add("pnlm-fullscreen-toggle-button-active"),
            Wt = !0) : (k.fullscreen.classList.remove("pnlm-fullscreen-toggle-button-active"),
            Wt = !1),
            o !== "resize" && V("fullscreenchange", Wt),
            O.resize(),
            L(n.hfov),
            tt()
        }
        function N(o) {
            var r = n.minHfov;
            if (n.type == "multires" && O && !n.multiResMinHfov && (r = Math.min(r, O.getCanvas().width / (n.multiRes.cubeResolution / 90 * .9))),
            r > n.maxHfov)
                return console.log("HFOV bounds do not make sense (minHfov > maxHfov)."),
                n.hfov;
            var s = n.hfov
              , s = o < r ? r : o > n.maxHfov ? n.maxHfov : o;
            return n.avoidShowingBackground && O && (o = O.getCanvas(),
            s = Math.min(s, 360 * Math.atan(Math.tan((n.maxPitch - n.minPitch) / 360 * Math.PI) / o.height * o.width) / Math.PI)),
            s
        }
        function L(o) {
            n.hfov = N(o),
            V("zoomchange", n.hfov)
        }
        function R() {
            dt = {},
            Pt = n.autoRotate ? n.autoRotate : Pt,
            n.autoRotate = !1
        }
        function $() {
            ce && (M.load.box.style.display = "none",
            M.errorMsg.style.display = "none",
            ce = !1,
            ct.style.display = "block",
            V("errorcleared")),
            et = !1,
            k.load.style.display = "none",
            M.load.box.style.display = "inline",
            w()
        }
        function G(o, r, s, v, g) {
            et || (g = !0),
            et = !1,
            dt = {};
            var x, F;
            if (n.sceneFadeDuration && !g && (x = O.render(n.pitch * Math.PI / 180, n.yaw * Math.PI / 180, n.hfov * Math.PI / 180, {
                returnImage: !0
            }),
            x !== i)) {
                g = new Image,
                g.className = "pnlm-fade-img",
                g.style.transition = "opacity " + n.sceneFadeDuration / 1e3 + "s",
                g.style.width = "100%",
                g.style.height = "100%",
                g.onload = function() {
                    G(o, r, s, v, !0)
                }
                ,
                g.src = x,
                ct.appendChild(g),
                O.fadeImg = g;
                return
            }
            g = r === "same" ? n.pitch : r,
            x = s === "same" ? n.yaw : s === "sameAzimuth" ? n.yaw + (n.northOffset || 0) - (l.scenes[o].northOffset || 0) : s,
            F = v === "same" ? n.hfov : v,
            d(),
            T(o),
            U.yaw = U.pitch = U.hfov = 0,
            y(),
            g !== i && (n.pitch = g),
            x !== i && (n.yaw = x),
            F !== i && (n.hfov = F),
            V("scenechange", o),
            $()
        }
        function nt() {
            t.removeEventListener("deviceorientation", Bt),
            k.orientation.classList.remove("pnlm-orientation-button-active"),
            bt = !1
        }
        function lt() {
            typeof DeviceMotionEvent.requestPermission == "function" ? DeviceOrientationEvent.requestPermission().then(function(o) {
                o == "granted" && (bt = 1,
                t.addEventListener("deviceorientation", Bt),
                k.orientation.classList.add("pnlm-orientation-button-active"))
            }) : (bt = 1,
            t.addEventListener("deviceorientation", Bt),
            k.orientation.classList.add("pnlm-orientation-button-active"))
        }
        function q(o) {
            return l.escapeHTML ? String(o).split(/&/g).join("&amp;").split('"').join("&quot;").split("'").join("&#39;").split("<").join("&lt;").split(">").join("&gt;").split("/").join("&#x2f;").split(`
`).join("<br>") : String(o).split(`
`).join("<br>")
        }
        function Z(o, r) {
            try {
                var s = decodeURIComponent(E(o)).replace(/[^\w:]/g, "").toLowerCase()
            } catch {
                return "about:blank"
            }
            return s.indexOf("javascript:") === 0 || s.indexOf("vbscript:") === 0 ? (console.log("Script URL removed."),
            "about:blank") : r && s.indexOf("data:") === 0 ? (console.log("Data URI removed from link."),
            "about:blank") : o
        }
        function E(o) {
            return o.replace(/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig, function(r, s) {
                return s = s.toLowerCase(),
                s === "colon" ? ":" : s.charAt(0) === "#" ? s.charAt(1) === "x" ? String.fromCharCode(parseInt(s.substring(2), 16)) : String.fromCharCode(+s.substring(1)) : ""
            })
        }
        function V(o) {
            if (o in vt)
                for (var r = vt[o].length; 0 < r; r--)
                    vt[o][vt[o].length - r].apply(null, [].slice.call(arguments, 1))
        }
        var ot = this, n, O, S, Ft = !1, ut = Date.now(), Zt = 0, Kt = 0, Jt = -1, se = 0, le = 0, C = Array(10), Wt = !1, et, ce = !1, be = !1, ft, Rt, U = {
            yaw: 0,
            pitch: 0,
            hfov: 0
        }, Pe = !1, bt = !1, ke = 0, he, Pt = 0, zt, Qt, dt = {}, vt = {}, Ct = [], ue = !1, xe = !1, Ue = !1, Me = {
            hfov: 100,
            minHfov: 50,
            multiResMinHfov: !1,
            maxHfov: 120,
            pitch: 0,
            minPitch: i,
            maxPitch: i,
            yaw: 0,
            minYaw: -180,
            maxYaw: 180,
            roll: 0,
            haov: 360,
            vaov: 180,
            vOffset: 0,
            autoRotate: !1,
            autoRotateInactivityDelay: -1,
            autoRotateStopDelay: i,
            type: "equirectangular",
            northOffset: 0,
            showFullscreenCtrl: !0,
            dynamic: !1,
            dynamicUpdate: !1,
            doubleClickZoom: !0,
            keyboardZoom: !0,
            mouseZoom: !0,
            showZoomCtrl: !0,
            autoLoad: !1,
            showControls: !0,
            orientationOnByDefault: !1,
            hotSpotDebug: !1,
            backgroundColor: [0, 0, 0],
            avoidShowingBackground: !1,
            animationTimingFunction: function(o) {
                return .5 > o ? 2 * o * o : -1 + (4 - 2 * o) * o
            },
            draggable: !0,
            disableKeyboardCtrl: !1,
            crossOrigin: "anonymous",
            touchPanSpeedCoeffFactor: 1,
            capturedKeyNumbers: [16, 17, 27, 37, 38, 39, 40, 61, 65, 68, 83, 87, 107, 109, 173, 187, 189],
            friction: .15,
            strings: {
                loadButtonLabel: "Click to<br>Load<br>Panorama",
                loadingLabel: "Loading...",
                bylineLabel: "by %s",
                noPanoramaError: "No panorama image was specified.",
                fileAccessError: "The file %s could not be accessed.",
                malformedURLError: "There is something wrong with the panorama URL.",
                iOS8WebGLError: "Due to iOS 8's broken WebGL implementation, only progressive encoded JPEGs work for your device (this panorama uses standard encoding).",
                genericWebGLError: "Your browser does not have the necessary WebGL support to display this panorama.",
                textureSizeError: "This panorama is too big for your device! It's %spx wide, but your device only supports images up to %spx wide. Try another device. (If you're the author, try scaling down the image.)",
                unknownError: "Unknown error. Check developer console."
            }
        };
        _ = typeof _ == "string" ? e.getElementById(_) : _,
        _.classList.add("pnlm-container"),
        _.tabIndex = 0;
        var it = e.createElement("div");
        it.className = "pnlm-ui",
        _.appendChild(it);
        var ct = e.createElement("div");
        ct.className = "pnlm-render-container",
        _.appendChild(ct);
        var gt = e.createElement("div");
        gt.className = "pnlm-dragfix",
        it.appendChild(gt);
        var Nt = e.createElement("span");
        Nt.className = "pnlm-about-msg",
        Nt.innerHTML = '<a href="https://pannellum.org/" target="_blank">Pannellum</a> 2.5.6',
        it.appendChild(Nt),
        gt.addEventListener("contextmenu", Y);
        var M = {}
          , Te = e.createElement("div");
        Te.className = "pnlm-sprite pnlm-hot-spot-debug-indicator",
        it.appendChild(Te),
        M.container = e.createElement("div"),
        M.container.className = "pnlm-panorama-info",
        M.title = e.createElement("div"),
        M.title.className = "pnlm-title-box",
        M.container.appendChild(M.title),
        M.author = e.createElement("div"),
        M.author.className = "pnlm-author-box",
        M.container.appendChild(M.author),
        it.appendChild(M.container),
        M.load = {},
        M.load.box = e.createElement("div"),
        M.load.box.className = "pnlm-load-box",
        M.load.boxp = e.createElement("p"),
        M.load.box.appendChild(M.load.boxp),
        M.load.lbox = e.createElement("div"),
        M.load.lbox.className = "pnlm-lbox",
        M.load.lbox.innerHTML = '<div class="pnlm-loading"></div>',
        M.load.box.appendChild(M.load.lbox),
        M.load.lbar = e.createElement("div"),
        M.load.lbar.className = "pnlm-lbar",
        M.load.lbarFill = e.createElement("div"),
        M.load.lbarFill.className = "pnlm-lbar-fill",
        M.load.lbar.appendChild(M.load.lbarFill),
        M.load.box.appendChild(M.load.lbar),
        M.load.msg = e.createElement("p"),
        M.load.msg.className = "pnlm-lmsg",
        M.load.box.appendChild(M.load.msg),
        it.appendChild(M.load.box),
        M.errorMsg = e.createElement("div"),
        M.errorMsg.className = "pnlm-error-msg pnlm-info-box",
        it.appendChild(M.errorMsg);
        var k = {};
        k.container = e.createElement("div"),
        k.container.className = "pnlm-controls-container",
        it.appendChild(k.container),
        k.load = e.createElement("div"),
        k.load.className = "pnlm-load-button",
        k.load.addEventListener("click", function() {
            y(),
            $()
        }),
        it.appendChild(k.load),
        k.zoom = e.createElement("div"),
        k.zoom.className = "pnlm-zoom-controls pnlm-controls",
        k.zoomIn = e.createElement("div"),
        k.zoomIn.className = "pnlm-zoom-in pnlm-sprite pnlm-control",
        k.zoomIn.addEventListener("click", function() {
            et && (L(n.hfov - 5),
            tt())
        }),
        k.zoom.appendChild(k.zoomIn),
        k.zoomOut = e.createElement("div"),
        k.zoomOut.className = "pnlm-zoom-out pnlm-sprite pnlm-control",
        k.zoomOut.addEventListener("click", function() {
            et && (L(n.hfov + 5),
            tt())
        }),
        k.zoom.appendChild(k.zoomOut),
        k.container.appendChild(k.zoom),
        k.fullscreen = e.createElement("div"),
        k.fullscreen.addEventListener("click", f),
        k.fullscreen.className = "pnlm-fullscreen-toggle-button pnlm-sprite pnlm-fullscreen-toggle-button-inactive pnlm-controls pnlm-control",
        (e.fullscreenEnabled || e.mozFullScreenEnabled || e.webkitFullscreenEnabled || e.msFullscreenEnabled) && k.container.appendChild(k.fullscreen),
        k.orientation = e.createElement("div"),
        k.orientation.addEventListener("click", function(o) {
            bt ? nt() : lt()
        }),
        k.orientation.addEventListener("mousedown", function(o) {
            o.stopPropagation()
        }),
        k.orientation.addEventListener("touchstart", function(o) {
            o.stopPropagation()
        }),
        k.orientation.addEventListener("pointerdown", function(o) {
            o.stopPropagation()
        }),
        k.orientation.className = "pnlm-orientation-button pnlm-orientation-button-inactive pnlm-sprite pnlm-controls pnlm-control";
        var Le = !1;
        t.DeviceOrientationEvent && location.protocol == "https:" && 0 <= navigator.userAgent.toLowerCase().indexOf("mobi") && (k.container.appendChild(k.orientation),
        Le = !0);
        var te = e.createElement("div");
        te.className = "pnlm-compass pnlm-controls pnlm-control",
        it.appendChild(te),
        l.firstScene ? T(l.firstScene) : l.default && l.default.firstScene ? T(l.default.firstScene) : T(null),
        y(!0);
        var kt = []
          , Yt = [];
        Et.prototype.multiply = function(o) {
            return new Et(this.w * o.w - this.x * o.x - this.y * o.y - this.z * o.z,this.x * o.w + this.w * o.x + this.y * o.z - this.z * o.y,this.y * o.w + this.w * o.y + this.z * o.x - this.x * o.z,this.z * o.w + this.w * o.z + this.x * o.y - this.y * o.x)
        }
        ,
        Et.prototype.toEulerAngles = function() {
            var o = Math.atan2(2 * (this.w * this.x + this.y * this.z), 1 - 2 * (this.x * this.x + this.y * this.y))
              , r = Math.asin(2 * (this.w * this.y - this.z * this.x))
              , s = Math.atan2(2 * (this.w * this.z + this.x * this.y), 1 - 2 * (this.y * this.y + this.z * this.z));
            return [o, r, s]
        }
        ,
        this.isLoaded = function() {
            return Boolean(et)
        }
        ,
        this.getPitch = function() {
            return n.pitch
        }
        ,
        this.setPitch = function(o, r, s, v) {
            return ut = Date.now(),
            1e-6 >= Math.abs(o - n.pitch) ? (typeof s == "function" && s(v),
            this) : ((r = r == i ? 1e3 : Number(r)) ? (dt.pitch = {
                startTime: Date.now(),
                startPosition: n.pitch,
                endPosition: o,
                duration: r
            },
            typeof s == "function" && setTimeout(function() {
                s(v)
            }, r)) : n.pitch = o,
            tt(),
            this)
        }
        ,
        this.getPitchBounds = function() {
            return [n.minPitch, n.maxPitch]
        }
        ,
        this.setPitchBounds = function(o) {
            return n.minPitch = Math.max(-90, Math.min(o[0], 90)),
            n.maxPitch = Math.max(-90, Math.min(o[1], 90)),
            this
        }
        ,
        this.getYaw = function() {
            return (n.yaw + 540) % 360 - 180
        }
        ,
        this.setYaw = function(o, r, s, v) {
            return ut = Date.now(),
            1e-6 >= Math.abs(o - n.yaw) ? (typeof s == "function" && s(v),
            this) : (r = r == i ? 1e3 : Number(r),
            o = (o + 180) % 360 - 180,
            r ? (180 < n.yaw - o ? o += 360 : 180 < o - n.yaw && (o -= 360),
            dt.yaw = {
                startTime: Date.now(),
                startPosition: n.yaw,
                endPosition: o,
                duration: r
            },
            typeof s == "function" && setTimeout(function() {
                s(v)
            }, r)) : n.yaw = o,
            tt(),
            this)
        }
        ,
        this.getYawBounds = function() {
            return [n.minYaw, n.maxYaw]
        }
        ,
        this.setYawBounds = function(o) {
            return n.minYaw = Math.max(-360, Math.min(o[0], 360)),
            n.maxYaw = Math.max(-360, Math.min(o[1], 360)),
            this
        }
        ,
        this.getHfov = function() {
            return n.hfov
        }
        ,
        this.setHfov = function(o, r, s, v) {
            return ut = Date.now(),
            1e-6 >= Math.abs(o - n.hfov) ? (typeof s == "function" && s(v),
            this) : ((r = r == i ? 1e3 : Number(r)) ? (dt.hfov = {
                startTime: Date.now(),
                startPosition: n.hfov,
                endPosition: N(o),
                duration: r
            },
            typeof s == "function" && setTimeout(function() {
                s(v)
            }, r)) : L(o),
            tt(),
            this)
        }
        ,
        this.getHfovBounds = function() {
            return [n.minHfov, n.maxHfov]
        }
        ,
        this.setHfovBounds = function(o) {
            return n.minHfov = Math.max(0, o[0]),
            n.maxHfov = Math.max(0, o[1]),
            this
        }
        ,
        this.lookAt = function(o, r, s, v, g, x) {
            return v = v == i ? 1e3 : Number(v),
            o !== i && 1e-6 < Math.abs(o - n.pitch) && (this.setPitch(o, v, g, x),
            g = i),
            r !== i && 1e-6 < Math.abs(r - n.yaw) && (this.setYaw(r, v, g, x),
            g = i),
            s !== i && 1e-6 < Math.abs(s - n.hfov) && (this.setHfov(s, v, g, x),
            g = i),
            typeof g == "function" && g(x),
            this
        }
        ,
        this.getNorthOffset = function() {
            return n.northOffset
        }
        ,
        this.setNorthOffset = function(o) {
            return n.northOffset = Math.min(360, Math.max(0, o)),
            tt(),
            this
        }
        ,
        this.getHorizonRoll = function() {
            return n.horizonRoll
        }
        ,
        this.setHorizonRoll = function(o) {
            return n.horizonRoll = Math.min(90, Math.max(-90, o)),
            O.setPose(n.horizonPitch * Math.PI / 180, n.horizonRoll * Math.PI / 180),
            tt(),
            this
        }
        ,
        this.getHorizonPitch = function() {
            return n.horizonPitch
        }
        ,
        this.setHorizonPitch = function(o) {
            return n.horizonPitch = Math.min(90, Math.max(-90, o)),
            O.setPose(n.horizonPitch * Math.PI / 180, n.horizonRoll * Math.PI / 180),
            tt(),
            this
        }
        ,
        this.startAutoRotate = function(o, r) {
            return o = o || Pt || 1,
            r = r === i ? Qt : r,
            n.autoRotate = o,
            ot.lookAt(r, i, zt, 3e3),
            tt(),
            this
        }
        ,
        this.stopAutoRotate = function() {
            return Pt = n.autoRotate ? n.autoRotate : Pt,
            n.autoRotate = !1,
            n.autoRotateInactivityDelay = -1,
            this
        }
        ,
        this.stopMovement = function() {
            R(),
            U = {
                yaw: 0,
                pitch: 0,
                hfov: 0
            }
        }
        ,
        this.getRenderer = function() {
            return O
        }
        ,
        this.setUpdate = function(o) {
            return ue = o === !0,
            O === i ? H() : tt(),
            this
        }
        ,
        this.mouseEventToCoords = function(o) {
            return at(o)
        }
        ,
        this.loadScene = function(o, r, s, v) {
            return et !== !1 && G(o, r, s, v),
            this
        }
        ,
        this.getScene = function() {
            return n.scene
        }
        ,
        this.addScene = function(o, r) {
            return l.scenes[o] = r,
            this
        }
        ,
        this.removeScene = function(o) {
            return n.scene === o || !l.scenes.hasOwnProperty(o) ? !1 : (delete l.scenes[o],
            !0)
        }
        ,
        this.toggleFullscreen = function() {
            return f(),
            this
        }
        ,
        this.getConfig = function() {
            return n
        }
        ,
        this.getContainer = function() {
            return _
        }
        ,
        this.addHotSpot = function(o, r) {
            if (r === i && n.scene === i)
                n.hotSpots.push(o);
            else {
                var s = r !== i ? r : n.scene;
                if (l.scenes.hasOwnProperty(s))
                    l.scenes[s].hasOwnProperty("hotSpots") || (l.scenes[s].hotSpots = [],
                    s == n.scene && (n.hotSpots = l.scenes[s].hotSpots)),
                    l.scenes[s].hotSpots.push(o);
                else
                    throw "Invalid scene ID!"
            }
            return (r === i || n.scene == r) && (ae(o),
            et && z(o)),
            this
        }
        ,
        this.removeHotSpot = function(o, r) {
            if (r === i || n.scene == r) {
                if (!n.hotSpots)
                    return !1;
                for (var s = 0; s < n.hotSpots.length; s++)
                    if (n.hotSpots[s].hasOwnProperty("id") && n.hotSpots[s].id === o) {
                        for (var v = n.hotSpots[s].div; v.parentNode != ct; )
                            v = v.parentNode;
                        return ct.removeChild(v),
                        delete n.hotSpots[s].div,
                        n.hotSpots.splice(s, 1),
                        !0
                    }
            } else if (l.scenes.hasOwnProperty(r)) {
                if (!l.scenes[r].hasOwnProperty("hotSpots"))
                    return !1;
                for (s = 0; s < l.scenes[r].hotSpots.length; s++)
                    if (l.scenes[r].hotSpots[s].hasOwnProperty("id") && l.scenes[r].hotSpots[s].id === o)
                        return l.scenes[r].hotSpots.splice(s, 1),
                        !0
            } else
                return !1
        }
        ,
        this.resize = function() {
            O && j()
        }
        ,
        this.isLoaded = function() {
            return et
        }
        ,
        this.isOrientationSupported = function() {
            return Le || !1
        }
        ,
        this.stopOrientation = function() {
            nt()
        }
        ,
        this.startOrientation = function() {
            Le && lt()
        }
        ,
        this.isOrientationActive = function() {
            return Boolean(bt)
        }
        ,
        this.on = function(o, r) {
            return vt[o] = vt[o] || [],
            vt[o].push(r),
            this
        }
        ,
        this.off = function(o, r) {
            if (!o)
                return vt = {},
                this;
            if (r) {
                var s = vt[o].indexOf(r);
                0 <= s && vt[o].splice(s, 1),
                vt[o].length == 0 && delete vt[o]
            } else
                delete vt[o];
            return this
        }
        ,
        this.destroy = function() {
            Ue = !0,
            clearTimeout(he),
            O && O.destroy(),
            be && (e.removeEventListener("mousemove", X, !1),
            e.removeEventListener("mouseup", Q, !1),
            _.removeEventListener("mozfullscreenchange", p, !1),
            _.removeEventListener("webkitfullscreenchange", p, !1),
            _.removeEventListener("msfullscreenchange", p, !1),
            _.removeEventListener("fullscreenchange", p, !1),
            t.removeEventListener("resize", j, !1),
            t.removeEventListener("orientationchange", j, !1),
            _.removeEventListener("keydown", st, !1),
            _.removeEventListener("keyup", mt, !1),
            _.removeEventListener("blur", Tt, !1),
            e.removeEventListener("mouseleave", Q, !1)),
            _.innerHTML = "",
            _.classList.remove("pnlm-container")
        }
    }
    return {
        viewer: function(_, l) {
            return new c(_,l)
        }
    }
}(window, document);
const Ie = ()=>new Date().valueOf().toString();
class $n {
    constructor() {
        const e = new Promise((i,c)=>{
            this.resolve = i,
            this.reject = c
        }
        );
        this.promise = e
    }
}
const qn = t=>{
    const [e,i] = On(t)
      , c = ne(_=>{
        i(typeof _ == "boolean" ? _ : !e)
    }
    , []);
    return [e, c]
}
;
var jn = Object.defineProperty
  , Zn = Object.defineProperties
  , Kn = Object.getOwnPropertyDescriptors
  , sn = Object.getOwnPropertySymbols
  , Jn = Object.prototype.hasOwnProperty
  , Qn = Object.prototype.propertyIsEnumerable
  , ln = (t,e,i)=>e in t ? jn(t, e, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: i
}) : t[e] = i
  , Oe = (t,e)=>{
    for (var i in e || (e = {}))
        Jn.call(e, i) && ln(t, i, e[i]);
    if (sn)
        for (var i of sn(e))
            Qn.call(e, i) && ln(t, i, e[i]);
    return t
}
  , to = (t,e)=>Zn(t, Kn(e));
const Ut = {
    container: {
        borderRadius: "5%",
        backgroundColor: "rgba(0,0,0,.7)",
        color: "white",
        padding: "5px 10px",
        margin: 0,
        maxWidth: 400
    },
    titleContainer: {
        display: "flex",
        justifyContent: "space-between"
    },
    title: {
        margin: 0,
        overflow: "hidden"
    },
    description: {
        margin: 0,
        marginTop: 10
    },
    button: {
        backgroundColor: "transparent",
        color: "white",
        borderRadius: "15%",
        borderStyle: "outset",
        padding: "2px 5px"
    },
    editContainer: {
        marginTop: 10,
        display: "flex",
        justifyContent: "center"
    }
}
  , cn = ({title: t, description: e, isEdit: i, sanitized: c, id: _})=>{
    const [l,w] = qn(!1)
      , I = Nn(null)
      , H = ne(()=>{
        l === !1 && (w(!0),
        u("TOGGLE_INFO_ELEMENT"))
    }
    , [])
      , W = Fe(()=>{
        let b;
        return c ? b = {
            dangerouslySetInnerHTML: {
                __html: e
            }
        } : b = {
            children: e
        },
        b
    }
    , [c, e])
      , u = ne((b,B)=>{
        const at = new CustomEvent(b,{
            bubbles: !0,
            detail: Oe({
                id: _
            }, B)
        });
        I.current.dispatchEvent(at)
    }
    , [I.current, _])
      , Y = ne(b=>{
        b.stopPropagation(),
        w(!1),
        u("TOGGLE_INFO_ELEMENT")
    }
    , [])
      , D = ne(b=>{
        b.stopPropagation();
        const B = I.current
          , at = B.querySelector("h4").textContent
          , X = B.querySelector("p").textContent;
        w(!1),
        u("UPDATE_INFO_ELEMENT", {
            title: at,
            description: X
        })
    }
    , []);
    return Ot("div", {
        ref: I,
        style: Ut.container,
        onClick: H,
        children: [Ot("div", {
            style: Ut.titleContainer,
            children: [Ot("h4", {
                contentEditable: l && i,
                style: Ut.title,
                children: t
            }), l && Ot("button", {
                style: Ut.button,
                onClick: Y,
                children: "X"
            })]
        }), Ot("p", Oe({
            contentEditable: i,
            style: to(Oe({}, Ut.description), {
                display: l ? "block" : "none"
            })
        }, W)), i && l && Ot("div", {
            style: Ut.editContainer,
            children: [Ot("button", {
                onClick: D,
                style: Ut.button,
                children: "Guardar"
            }), "\xA0", Ot("button", {
                onClick: ()=>u("DELETE_INFO_ELEMENT"),
                style: Ut.button,
                children: "Borrar"
            })]
        })]
    })
}
;
class ee {
    constructor(e=[], i="id") {
        this._prop = i,
        this._array = e,
        this.table = this._arrayToDict(this._array)
    }
    add(e) {
        return this._array.push(e),
        this.table[e[this._prop]] = e,
        this
    }
    delete(e) {
        return (typeof e == "string" || typeof e == "number") && (e = this.get(e)),
        e ? (this._array.forEach((i,c)=>{
            i[this._prop] === e[this._prop] && this._array.splice(c, 1)
        }
        ),
        delete this.table[e[this._prop]]) : !1
    }
    get(e=0) {
        return e ? this.table[e] : this._array[e]
    }
    get length() {
        return this._array.length
    }
    get array() {
        return this._array
    }
    _arrayToDict(e) {
        return e.reduce((i,c)=>(i[c[this._prop]] = c,
        i), {})
    }
}
const me = class {
    constructor(t, e, i={}) {
        this._classPrefix = "tr",
        this._onUpdateInfoListeners = [],
        this._onDeleteInfoListeners = [],
        this._tour = t,
        this._options = Object.assign({}, me.DEFAULTS, i),
        typeof e == "string" && (e = document.querySelector(e)),
        this._validateTour(),
        this._dom = e,
        this._onLoad = i.onLoad,
        this._init()
    }
    get panos() {
        return this._panos
    }
    destroy() {
        this._viewer.destroy()
    }
    addInfoUpdateListener(t) {
        this._onUpdateInfoListeners.push(t)
    }
    addInfoDeleteListener(t) {
        this._onDeleteInfoListeners.push(t)
    }
    selectPOVInViewer() {
        return this._isLoaded ? (this._isSelectingPOV = !0,
        this._selectPOVDeferred = new $n,
        this.toggleControls(!1),
        this._dom.classList.add(this._createClass("selecting-pov")),
        this._selectPOVDeferred.promise.then(()=>{
            this.toggleControls(!0),
            this._dom.classList.remove(this._createClass("selecting-pov"))
        }
        ),
        this._selectPOVDeferred.promise) : Promise.reject(new Error("viewer not loaded"))
    }
    toggleControls(t) {
        this._dom.querySelector(".pnlm-controls-container").classList.toggle(this._createClass("hide"), !t),
        this._dom.querySelector(".pnlm-panorama-info").classList.toggle(this._createClass("hide"), !t)
    }
    addDOM(t) {
        t.classList.add(me.CLASSES.DOM_ELEMENT),
        this._dom.appendChild(t)
    }
    deleteDOM(t) {
        this._dom.removeChild(t)
    }
    addOverlay(t, e) {
        const i = {
            id: Ie(),
            pitch: e.pitch,
            yaw: e.yaw,
            type: "info",
            createTooltipFunc: c=>{
                c.appendChild(t)
            }
        };
        return this._viewer.addHotSpot(i),
        i
    }
    deleteOverlay(t) {
        let e;
        typeof t == "object" ? e = t.id : e = t,
        this._viewer.removeHotSpot(e)
    }
    forceToRender() {
        this._viewer.setPitch(this._viewer.getPitch() + .1)
    }
    addInfoElement(t) {
        let {id: e, title: i, description: c, POV: _} = t;
        e = e || Ie();
        const l = this.getPano()
          , w = {
            id: e,
            POV: _,
            title: i,
            description: c,
            infoElement: Ot(cn, {
                isEdit: this._options.editMode,
                title: i,
                description: c,
                id: e
            })
        };
        l.infoElements.add(w),
        this._addInfoToViewer(w)
    }
    deleteInfoElement(t) {
        const e = this.getPano();
        typeof t == "string" && (t = e.infoElements.get(t)),
        e.infoElements.delete(t),
        this.deleteOverlay(t)
    }
    getPano(t=this._viewer.getScene()) {
        return this._panos.get(t)
    }
    setPano(t) {
        let e = typeof t == "object" ? t.id : t;
        return this._viewer.loadScene(e)
    }
    getCurrentPano() {
        return this.getPano()
    }
    getPOV() {
        const t = {
            pitch: 0,
            yaw: 0
        };
        return this._viewer && (t.yaw = this._viewer.getYaw(),
        t.pitch = this._viewer.getPitch()),
        t
    }
    deleteLink(t) {
        const e = this.getPano();
        typeof t == "string" && (t = e.links.get(t)),
        e.links.delete(t.id),
        this._viewer.removeHotSpot(t.id),
        this.forceToRender()
    }
    getLink(t) {
        return this.getPano().links.get(t)
    }
    createLinkTo(t, e=this.getPOV(), i={
        pitch: 0,
        yaw: 0
    }, c) {
        if (!this._isLoaded)
            return console.info("Viewer not loaded");
        if (typeof t != "object" && (t = this.getPano(t)),
        !t)
            throw new Error("parameter missing: pano");
        const _ = {
            POV: e,
            id: c || Ie(),
            targetPOV: i,
            to: t
        };
        this.getCurrentPano().links.add(_),
        this._addLink(_);
        const w = new CustomEvent("newLink",{
            detail: _
        });
        return this._dom.dispatchEvent(w),
        _
    }
    isFirstPano() {
        return this.getCurrentPano() === this._first
    }
    setFirstPano(t) {
        this._first = t
    }
    _init() {
        this._processTour(),
        this._initViewer(),
        this._setListeners()
    }
    _initViewer() {
        const t = {
            autoLoad: this._options.autoLoad,
            autoRotate: this._options.autoRotate,
            showControls: this._options.showControls,
            keyboardZoom: this._options.keyboardZoom,
            mouseZoom: this._options.mouseZoom,
            disableKeyboardCtrl: !0,
            default: {
                firstScene: this._first.id,
                pitch: this._first.POV.pitch,
                sceneFadeDuration: 1e3,
                yaw: this._first.POV.yaw
            },
            hfov: 120,
            scenes: this._pannellumPanos.table
        };
        this._preview && (t.preview = this._preview.url),
        this._viewer = pannellum.viewer(this._dom, t)
    }
    _createClass(t) {
        return `${this._classPrefix}-${t}`
    }
    _processPanos() {
        const t = this._tour.panos || this._tour.photoSpheres;
        this._panos = new ee(t.map(e=>({
            id: e.id,
            infoElements: new ee(e.infoElements),
            name: e.name,
            POV: e.POV,
            url: e.link
        }))),
        t.forEach(e=>{
            const i = this._panos.get(e.id);
            e.links = e.links || [],
            e.infoElements = e.infoElements || [],
            i.links = new ee(e.links.map(this._transformToLink.bind(this))),
            i.infoElements = new ee(e.infoElements.map(this._transformToInfo.bind(this)))
        }
        ),
        this._pannellumPanos = new ee(this._panos.array.map(this._transformToPannellumPano.bind(this)))
    }
    _validateTour() {
        const t = this._tour && (this._tour.panos || this._tour.photoSpheres);
        if (!t || !t.length)
            throw new Error(me.ERRORS.INVALID_TOUR);
        const e = this._tour.images && this._tour.images[0];
        e && (this._preview = {
            url: e.link,
            name: e.name,
            id: e.id
        }),
        this._tour.POV || (this._tour.POV = {
            yaw: 0,
            pitch: 0
        })
    }
    _processTour() {
        this._name = this._tour.name,
        this._description = this._tour.description,
        this._processPanos(),
        this._tour.firstPhotoSphereId ? this._first = this._panos.get(this._tour.firstPhotoSphereId) : this._first = this._panos.get(),
        this._first.POV = this._tour.POV
    }
    _setListeners() {
        this._viewer.on("load", this._onLoadPano.bind(this)),
        this._viewer.on("mousedown", this._onClick.bind(this)),
        this._viewer.on("touchstart", this._onClick.bind(this)),
        this._dom.addEventListener("TOGGLE_INFO_ELEMENT", this.forceToRender.bind(this)),
        this._dom.addEventListener("UPDATE_INFO_ELEMENT", this._updateInfoListener.bind(this)),
        this._dom.addEventListener("DELETE_INFO_ELEMENT", this._deleteInfoListener.bind(this))
    }
    _deleteInfoListener(t) {
        const e = t.detail;
        this.deleteInfoElement(e.id),
        this._onDeleteInfoListeners.forEach(i=>{
            i(e)
        }
        )
    }
    _updateInfoListener(t) {
        const e = t.detail
          , i = this.getPano().infoElements.get(e.id);
        i.title = e.title,
        i.description = e.description,
        this._onUpdateInfoListeners.forEach(c=>{
            c(i)
        }
        )
    }
    _onClick(t) {
        if (!this._isSelectingPOV)
            return;
        const e = t.targetTouches && t.targetTouches[0] || t
          , i = this._viewer.mouseEventToCoords(e)
          , c = {
            pitch: i[0],
            yaw: i[1]
        };
        this._isSelectingPOV = !1,
        this._selectPOVDeferred.resolve(c),
        this._selectPOVDeferred = null
    }
    _onLoadPano(t) {
        this._isLoaded = !0,
        this._options.noLinks || this._setLinks(),
        this._setInfos();
        const e = new Event("load");
        this._dom.dispatchEvent(e),
        typeof this._onLoad == "function" && this._onLoad()
    }
    _setLinks() {
        this.getCurrentPano().links.array.forEach(e=>{
            this._addLink(e)
        }
        )
    }
    _setInfos() {
        this.getPano().infoElements.array.forEach(e=>{
            this._addInfoToViewer(e)
        }
        )
    }
    _addInfoToViewer(t) {
        this._viewer.addHotSpot(this._transformToPannellumOverlay(t))
    }
    _addLink(t) {
        this._viewer.removeHotSpot(t.id),
        this._viewer.addHotSpot(this._transformToPannellumLink(t))
    }
    _transformToLink(t) {
        const e = this._panos.get(t.toPhotoSphereId || t.toId);
        return {
            POV: t.POV,
            id: t.id,
            targetPOV: t.targetPOV,
            to: e
        }
    }
    _transformToInfo(t) {
        const {POV: e, id: i, name: c, description: _} = t;
        return {
            title: c,
            description: _,
            POV: e,
            id: i,
            infoElement: Ot(cn, {
                isEdit: this._options.editMode,
                id: i,
                title: c,
                description: _
            })
        }
    }
    _transformToPannellumOverlay(t) {
        return {
            id: t.id,
            pitch: t.POV.pitch,
            yaw: t.POV.yaw,
            type: "info",
            cssClass: "n",
            createTooltipFunc: e=>In(t.infoElement, e)
        }
    }
    _transformToPannellumLink(t) {
        return {
            id: t.id,
            pitch: t.POV.pitch,
            sceneId: t.to && t.to.id,
            targetPitch: t.targetPOV.pitch,
            targetYaw: t.targetPOV.yaw,
            text: t.to && t.to.name,
            type: "scene",
            yaw: t.POV.yaw
        }
    }
    _transformToPannellumPano(t) {
        const e = {
            id: t.id,
            panorama: t.url,
            type: "equirectangular"
        };
        return this._options.noTitle || (e.title = t.name),
        t.POV && (e.pitch = t.POV.pitch,
        e.yaw = t.POV.yaw),
        t.links && t.links.length,
        e
    }
}
;
let qt = me;
qt.EVENTS = Object.assign({
    UPDATE_INFO_ELEMENT: "UPDATE_INFO_ELEMENT",
    TOGGLE_INFO_ELEMENT: "TOGGLE_INFO_ELEMENT",
    DELETE_INFO_ELEMENT: "DELETE_INFO_ELEMENT"
}, {
    CREATE_INFO_ELEMENT: "CREATE_INFO_ELEMENT",
    CREATE_LINK: "CREATE_LINK",
    DELETE_LINK: "DELETE_LINK"
});
qt.CLASSES = {
    DOM_ELEMENT: "dom-element"
};
qt.ERRORS = {
    INVALID_TOUR: "The properties of the tour are not valid"
};
qt.DEFAULTS = {
    autoLoad: !1,
    autoRotate: void 0,
    showControls: !0
};
window.TourRenderer = qt;
var eo = qt;
window.onload = ()=>{
    new eo(window.tour,document.getElementById("tour"),{
        ...tourOptions,
        autoLoad: tourOptions.autoLoad !== "false"
    })
}
;
