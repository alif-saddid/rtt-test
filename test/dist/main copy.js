/*! For license information please see main.js.LICENSE.txt */
(() => {
    var t = {
            963: (t, e, n) => {
                var r, i, s;
                t.exports =
                    ((r = Math.floor),
                    (i = Math.abs),
                    (s = Math.pow),
                    (function t(e, n, r) {
                        function i(o, a) {
                            if (!n[o]) {
                                if (!e[o]) {
                                    if (s) return s(o, !0);
                                    var c = new Error("Cannot find module '" + o + "'");
                                    throw ((c.code = "MODULE_NOT_FOUND"), c);
                                }
                                var l = (n[o] = { exports: {} });
                                e[o][0].call(
                                    l.exports,
                                    function (t) {
                                        return i(e[o][1][t] || t);
                                    },
                                    l,
                                    l.exports,
                                    t,
                                    e,
                                    n,
                                    r
                                );
                            }
                            return n[o].exports;
                        }
                        for (var s = void 0, o = 0; o < r.length; o++) i(r[o]);
                        return i;
                    })(
                        {
                            1: [
                                function (t, e, n) {
                                    "use strict";
                                    function r(t) {
                                        var e = t.length;
                                        if (0 < e % 4) throw new Error("Invalid string. Length must be a multiple of 4");
                                        var n = t.indexOf("=");
                                        return -1 === n && (n = e), [n, n === e ? 0 : 4 - (n % 4)];
                                    }
                                    function i(t) {
                                        return o[63 & (t >> 18)] + o[63 & (t >> 12)] + o[63 & (t >> 6)] + o[63 & t];
                                    }
                                    function s(t, e, n) {
                                        for (var r, s = [], o = e; o < n; o += 3) (r = (16711680 & (t[o] << 16)) + (65280 & (t[o + 1] << 8)) + (255 & t[o + 2])), s.push(i(r));
                                        return s.join("");
                                    }
                                    (n.byteLength = function (t) {
                                        var e = r(t),
                                            n = e[0],
                                            i = e[1];
                                        return (3 * (n + i)) / 4 - i;
                                    }),
                                        (n.toByteArray = function (t) {
                                            var e,
                                                n,
                                                i = r(t),
                                                s = i[0],
                                                o = i[1],
                                                l = new c(
                                                    (function (t, e, n) {
                                                        return (3 * (e + n)) / 4 - n;
                                                    })(0, s, o)
                                                ),
                                                h = 0,
                                                u = 0 < o ? s - 4 : s;
                                            for (n = 0; n < u; n += 4)
                                                (e = (a[t.charCodeAt(n)] << 18) | (a[t.charCodeAt(n + 1)] << 12) | (a[t.charCodeAt(n + 2)] << 6) | a[t.charCodeAt(n + 3)]),
                                                    (l[h++] = 255 & (e >> 16)),
                                                    (l[h++] = 255 & (e >> 8)),
                                                    (l[h++] = 255 & e);
                                            return (
                                                2 === o && ((e = (a[t.charCodeAt(n)] << 2) | (a[t.charCodeAt(n + 1)] >> 4)), (l[h++] = 255 & e)),
                                                1 === o && ((e = (a[t.charCodeAt(n)] << 10) | (a[t.charCodeAt(n + 1)] << 4) | (a[t.charCodeAt(n + 2)] >> 2)), (l[h++] = 255 & (e >> 8)), (l[h++] = 255 & e)),
                                                l
                                            );
                                        }),
                                        (n.fromByteArray = function (t) {
                                            for (var e, n = t.length, r = n % 3, i = [], a = 16383, c = 0, l = n - r; c < l; c += a) i.push(s(t, c, c + a > l ? l : c + a));
                                            return (
                                                1 === r ? ((e = t[n - 1]), i.push(o[e >> 2] + o[63 & (e << 4)] + "==")) : 2 === r && ((e = (t[n - 2] << 8) + t[n - 1]), i.push(o[e >> 10] + o[63 & (e >> 4)] + o[63 & (e << 2)] + "=")),
                                                i.join("")
                                            );
                                        });
                                    for (var o = [], a = [], c = "undefined" == typeof Uint8Array ? Array : Uint8Array, l = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", h = 0, u = l.length; h < u; ++h)
                                        (o[h] = l[h]), (a[l.charCodeAt(h)] = h);
                                    (a[45] = 62), (a[95] = 63);
                                },
                                {},
                            ],
                            2: [function () {}, {}],
                            3: [
                                function (t, e, n) {
                                    (function () {
                                        (function () {
                                            "use strict";
                                            var e = String.fromCharCode,
                                                r = Math.min;
                                            function i(t) {
                                                if (2147483647 < t) throw new RangeError('The value "' + t + '" is invalid for option "size"');
                                                var e = new Uint8Array(t);
                                                return (e.__proto__ = o.prototype), e;
                                            }
                                            function o(t, e, n) {
                                                if ("number" == typeof t) {
                                                    if ("string" == typeof e) throw new TypeError('The "string" argument must be of type string. Received type number');
                                                    return l(t);
                                                }
                                                return a(t, e, n);
                                            }
                                            function a(t, e, n) {
                                                if ("string" == typeof t)
                                                    return (function (t, e) {
                                                        if ((("string" != typeof e || "" === e) && (e = "utf8"), !o.isEncoding(e))) throw new TypeError("Unknown encoding: " + e);
                                                        var n = 0 | d(t, e),
                                                            r = i(n),
                                                            s = r.write(t, e);
                                                        return s !== n && (r = r.slice(0, s)), r;
                                                    })(t, e);
                                                if (ArrayBuffer.isView(t)) return h(t);
                                                if (null == t) throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof t);
                                                if (F(t, ArrayBuffer) || (t && F(t.buffer, ArrayBuffer)))
                                                    return (function (t, e, n) {
                                                        if (0 > e || t.byteLength < e) throw new RangeError('"offset" is outside of buffer bounds');
                                                        if (t.byteLength < e + (n || 0)) throw new RangeError('"length" is outside of buffer bounds');
                                                        var r;
                                                        return ((r = void 0 === e && void 0 === n ? new Uint8Array(t) : void 0 === n ? new Uint8Array(t, e) : new Uint8Array(t, e, n)).__proto__ = o.prototype), r;
                                                    })(t, e, n);
                                                if ("number" == typeof t) throw new TypeError('The "value" argument must not be of type number. Received type number');
                                                var r = t.valueOf && t.valueOf();
                                                if (null != r && r !== t) return o.from(r, e, n);
                                                var s = (function (t) {
                                                    if (o.isBuffer(t)) {
                                                        var e = 0 | u(t.length),
                                                            n = i(e);
                                                        return 0 === n.length || t.copy(n, 0, 0, e), n;
                                                    }
                                                    return void 0 === t.length ? ("Buffer" === t.type && Array.isArray(t.data) ? h(t.data) : void 0) : "number" != typeof t.length || B(t.length) ? i(0) : h(t);
                                                })(t);
                                                if (s) return s;
                                                if ("undefined" != typeof Symbol && null != Symbol.toPrimitive && "function" == typeof t[Symbol.toPrimitive]) return o.from(t[Symbol.toPrimitive]("string"), e, n);
                                                throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof t);
                                            }
                                            function c(t) {
                                                if ("number" != typeof t) throw new TypeError('"size" argument must be of type number');
                                                if (0 > t) throw new RangeError('The value "' + t + '" is invalid for option "size"');
                                            }
                                            function l(t) {
                                                return c(t), i(0 > t ? 0 : 0 | u(t));
                                            }
                                            function h(t) {
                                                for (var e = 0 > t.length ? 0 : 0 | u(t.length), n = i(e), r = 0; r < e; r += 1) n[r] = 255 & t[r];
                                                return n;
                                            }
                                            function u(t) {
                                                if (t >= 2147483647) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + (2147483647).toString(16) + " bytes");
                                                return 0 | t;
                                            }
                                            function d(t, e) {
                                                if (o.isBuffer(t)) return t.length;
                                                if (ArrayBuffer.isView(t) || F(t, ArrayBuffer)) return t.byteLength;
                                                if ("string" != typeof t) throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof t);
                                                var n = t.length,
                                                    r = 2 < arguments.length && !0 === arguments[2];
                                                if (!r && 0 === n) return 0;
                                                for (var i = !1; ; )
                                                    switch (e) {
                                                        case "ascii":
                                                        case "latin1":
                                                        case "binary":
                                                            return n;
                                                        case "utf8":
                                                        case "utf-8":
                                                            return U(t).length;
                                                        case "ucs2":
                                                        case "ucs-2":
                                                        case "utf16le":
                                                        case "utf-16le":
                                                            return 2 * n;
                                                        case "hex":
                                                            return n >>> 1;
                                                        case "base64":
                                                            return P(t).length;
                                                        default:
                                                            if (i) return r ? -1 : U(t).length;
                                                            (e = ("" + e).toLowerCase()), (i = !0);
                                                    }
                                            }
                                            function f(t, e, n) {
                                                var r = !1;
                                                if (((void 0 === e || 0 > e) && (e = 0), e > this.length)) return "";
                                                if (((void 0 === n || n > this.length) && (n = this.length), 0 >= n)) return "";
                                                if ((n >>>= 0) <= (e >>>= 0)) return "";
                                                for (t || (t = "utf8"); ; )
                                                    switch (t) {
                                                        case "hex":
                                                            return T(this, e, n);
                                                        case "utf8":
                                                        case "utf-8":
                                                            return S(this, e, n);
                                                        case "ascii":
                                                            return R(this, e, n);
                                                        case "latin1":
                                                        case "binary":
                                                            return A(this, e, n);
                                                        case "base64":
                                                            return C(this, e, n);
                                                        case "ucs2":
                                                        case "ucs-2":
                                                        case "utf16le":
                                                        case "utf-16le":
                                                            return D(this, e, n);
                                                        default:
                                                            if (r) throw new TypeError("Unknown encoding: " + t);
                                                            (t = (t + "").toLowerCase()), (r = !0);
                                                    }
                                            }
                                            function p(t, e, n) {
                                                var r = t[e];
                                                (t[e] = t[n]), (t[n] = r);
                                            }
                                            function g(t, e, n, r, i) {
                                                if (0 === t.length) return -1;
                                                if (
                                                    ("string" == typeof n ? ((r = n), (n = 0)) : 2147483647 < n ? (n = 2147483647) : -2147483648 > n && (n = -2147483648),
                                                    B((n = +n)) && (n = i ? 0 : t.length - 1),
                                                    0 > n && (n = t.length + n),
                                                    n >= t.length)
                                                ) {
                                                    if (i) return -1;
                                                    n = t.length - 1;
                                                } else if (0 > n) {
                                                    if (!i) return -1;
                                                    n = 0;
                                                }
                                                if (("string" == typeof e && (e = o.from(e, r)), o.isBuffer(e))) return 0 === e.length ? -1 : y(t, e, n, r, i);
                                                if ("number" == typeof e)
                                                    return (
                                                        (e &= 255), "function" == typeof Uint8Array.prototype.indexOf ? (i ? Uint8Array.prototype.indexOf.call(t, e, n) : Uint8Array.prototype.lastIndexOf.call(t, e, n)) : y(t, [e], n, r, i)
                                                    );
                                                throw new TypeError("val must be string, number or Buffer");
                                            }
                                            function y(t, e, n, r, i) {
                                                function s(t, e) {
                                                    return 1 === a ? t[e] : t.readUInt16BE(e * a);
                                                }
                                                var o,
                                                    a = 1,
                                                    c = t.length,
                                                    l = e.length;
                                                if (void 0 !== r && ("ucs2" === (r = (r + "").toLowerCase()) || "ucs-2" === r || "utf16le" === r || "utf-16le" === r)) {
                                                    if (2 > t.length || 2 > e.length) return -1;
                                                    (a = 2), (c /= 2), (l /= 2), (n /= 2);
                                                }
                                                if (i) {
                                                    var h = -1;
                                                    for (o = n; o < c; o++)
                                                        if (s(t, o) !== s(e, -1 === h ? 0 : o - h)) -1 !== h && (o -= o - h), (h = -1);
                                                        else if ((-1 === h && (h = o), o - h + 1 === l)) return h * a;
                                                } else
                                                    for (n + l > c && (n = c - l), o = n; 0 <= o; o--) {
                                                        for (var u = !0, d = 0; d < l; d++)
                                                            if (s(t, o + d) !== s(e, d)) {
                                                                u = !1;
                                                                break;
                                                            }
                                                        if (u) return o;
                                                    }
                                                return -1;
                                            }
                                            function b(t, e, n, r) {
                                                n = +n || 0;
                                                var i = t.length - n;
                                                r ? (r = +r) > i && (r = i) : (r = i);
                                                var s = e.length;
                                                r > s / 2 && (r = s / 2);
                                                for (var o, a = 0; a < r; ++a) {
                                                    if (B((o = parseInt(e.substr(2 * a, 2), 16)))) return a;
                                                    t[n + a] = o;
                                                }
                                                return a;
                                            }
                                            function w(t, e, n, r) {
                                                return j(U(e, t.length - n), t, n, r);
                                            }
                                            function m(t, e, n, r) {
                                                return j(
                                                    (function (t) {
                                                        for (var e = [], n = 0; n < t.length; ++n) e.push(255 & t.charCodeAt(n));
                                                        return e;
                                                    })(e),
                                                    t,
                                                    n,
                                                    r
                                                );
                                            }
                                            function _(t, e, n, r) {
                                                return m(t, e, n, r);
                                            }
                                            function v(t, e, n, r) {
                                                return j(P(e), t, n, r);
                                            }
                                            function E(t, e, n, r) {
                                                return j(
                                                    (function (t, e) {
                                                        for (var n, r, i, s = [], o = 0; o < t.length && !(0 > (e -= 2)); ++o) (r = (n = t.charCodeAt(o)) >> 8), (i = n % 256), s.push(i), s.push(r);
                                                        return s;
                                                    })(e, t.length - n),
                                                    t,
                                                    n,
                                                    r
                                                );
                                            }
                                            function C(t, e, n) {
                                                return 0 === e && n === t.length ? W.fromByteArray(t) : W.fromByteArray(t.slice(e, n));
                                            }
                                            function S(t, e, n) {
                                                n = r(t.length, n);
                                                for (var i = [], s = e; s < n; ) {
                                                    var o,
                                                        a,
                                                        c,
                                                        l,
                                                        h = t[s],
                                                        u = null,
                                                        d = 239 < h ? 4 : 223 < h ? 3 : 191 < h ? 2 : 1;
                                                    s + d <= n &&
                                                        (1 === d
                                                            ? 128 > h && (u = h)
                                                            : 2 === d
                                                            ? 128 == (192 & (o = t[s + 1])) && 127 < (l = ((31 & h) << 6) | (63 & o)) && (u = l)
                                                            : 3 === d
                                                            ? ((o = t[s + 1]), (a = t[s + 2]), 128 == (192 & o) && 128 == (192 & a) && 2047 < (l = ((15 & h) << 12) | ((63 & o) << 6) | (63 & a)) && (55296 > l || 57343 < l) && (u = l))
                                                            : 4 === d &&
                                                              ((o = t[s + 1]),
                                                              (a = t[s + 2]),
                                                              (c = t[s + 3]),
                                                              128 == (192 & o) && 128 == (192 & a) && 128 == (192 & c) && 65535 < (l = ((15 & h) << 18) | ((63 & o) << 12) | ((63 & a) << 6) | (63 & c)) && 1114112 > l && (u = l))),
                                                        null === u ? ((u = 65533), (d = 1)) : 65535 < u && ((u -= 65536), i.push(55296 | (1023 & (u >>> 10))), (u = 56320 | (1023 & u))),
                                                        i.push(u),
                                                        (s += d);
                                                }
                                                return k(i);
                                            }
                                            function k(t) {
                                                var n = t.length;
                                                if (n <= 4096) return e.apply(String, t);
                                                for (var r = "", i = 0; i < n; ) r += e.apply(String, t.slice(i, (i += 4096)));
                                                return r;
                                            }
                                            function R(t, n, i) {
                                                var s = "";
                                                i = r(t.length, i);
                                                for (var o = n; o < i; ++o) s += e(127 & t[o]);
                                                return s;
                                            }
                                            function A(t, n, i) {
                                                var s = "";
                                                i = r(t.length, i);
                                                for (var o = n; o < i; ++o) s += e(t[o]);
                                                return s;
                                            }
                                            function T(t, e, n) {
                                                var r = t.length;
                                                (!e || 0 > e) && (e = 0), (!n || 0 > n || n > r) && (n = r);
                                                for (var i = "", s = e; s < n; ++s) i += M(t[s]);
                                                return i;
                                            }
                                            function D(t, n, r) {
                                                for (var i = t.slice(n, r), s = "", o = 0; o < i.length; o += 2) s += e(i[o] + 256 * i[o + 1]);
                                                return s;
                                            }
                                            function O(t, e, n) {
                                                if (0 != t % 1 || 0 > t) throw new RangeError("offset is not uint");
                                                if (t + e > n) throw new RangeError("Trying to access beyond buffer length");
                                            }
                                            function L(t, e, n, r, i, s) {
                                                if (!o.isBuffer(t)) throw new TypeError('"buffer" argument must be a Buffer instance');
                                                if (e > i || e < s) throw new RangeError('"value" argument is out of bounds');
                                                if (n + r > t.length) throw new RangeError("Index out of range");
                                            }
                                            function x(t, e, n, r) {
                                                if (n + r > t.length) throw new RangeError("Index out of range");
                                                if (0 > n) throw new RangeError("Index out of range");
                                            }
                                            function I(t, e, n, r, i) {
                                                return (e = +e), (n >>>= 0), i || x(t, 0, n, 4), q.write(t, e, n, r, 23, 4), n + 4;
                                            }
                                            function N(t, e, n, r, i) {
                                                return (e = +e), (n >>>= 0), i || x(t, 0, n, 8), q.write(t, e, n, r, 52, 8), n + 8;
                                            }
                                            function M(t) {
                                                return 16 > t ? "0" + t.toString(16) : t.toString(16);
                                            }
                                            function U(t, e) {
                                                e = e || 1 / 0;
                                                for (var n, r = t.length, i = null, s = [], o = 0; o < r; ++o) {
                                                    if (55295 < (n = t.charCodeAt(o)) && 57344 > n) {
                                                        if (!i) {
                                                            if (56319 < n) {
                                                                -1 < (e -= 3) && s.push(239, 191, 189);
                                                                continue;
                                                            }
                                                            if (o + 1 === r) {
                                                                -1 < (e -= 3) && s.push(239, 191, 189);
                                                                continue;
                                                            }
                                                            i = n;
                                                            continue;
                                                        }
                                                        if (56320 > n) {
                                                            -1 < (e -= 3) && s.push(239, 191, 189), (i = n);
                                                            continue;
                                                        }
                                                        n = 65536 + (((i - 55296) << 10) | (n - 56320));
                                                    } else i && -1 < (e -= 3) && s.push(239, 191, 189);
                                                    if (((i = null), 128 > n)) {
                                                        if (0 > (e -= 1)) break;
                                                        s.push(n);
                                                    } else if (2048 > n) {
                                                        if (0 > (e -= 2)) break;
                                                        s.push(192 | (n >> 6), 128 | (63 & n));
                                                    } else if (65536 > n) {
                                                        if (0 > (e -= 3)) break;
                                                        s.push(224 | (n >> 12), 128 | (63 & (n >> 6)), 128 | (63 & n));
                                                    } else {
                                                        if (!(1114112 > n)) throw new Error("Invalid code point");
                                                        if (0 > (e -= 4)) break;
                                                        s.push(240 | (n >> 18), 128 | (63 & (n >> 12)), 128 | (63 & (n >> 6)), 128 | (63 & n));
                                                    }
                                                }
                                                return s;
                                            }
                                            function P(t) {
                                                return W.toByteArray(
                                                    (function (t) {
                                                        if (2 > (t = (t = t.split("=")[0]).trim().replace(H, "")).length) return "";
                                                        for (; 0 != t.length % 4; ) t += "=";
                                                        return t;
                                                    })(t)
                                                );
                                            }
                                            function j(t, e, n, r) {
                                                for (var i = 0; i < r && !(i + n >= e.length || i >= t.length); ++i) e[i + n] = t[i];
                                                return i;
                                            }
                                            function F(t, e) {
                                                return t instanceof e || (null != t && null != t.constructor && null != t.constructor.name && t.constructor.name === e.name);
                                            }
                                            function B(t) {
                                                return t != t;
                                            }
                                            var W = t("base64-js"),
                                                q = t("ieee754");
                                            (n.Buffer = o),
                                                (n.SlowBuffer = function (t) {
                                                    return +t != t && (t = 0), o.alloc(+t);
                                                }),
                                                (n.INSPECT_MAX_BYTES = 50),
                                                (n.kMaxLength = 2147483647),
                                                (o.TYPED_ARRAY_SUPPORT = (function () {
                                                    try {
                                                        var t = new Uint8Array(1);
                                                        return (
                                                            (t.__proto__ = {
                                                                __proto__: Uint8Array.prototype,
                                                                foo: function () {
                                                                    return 42;
                                                                },
                                                            }),
                                                            42 === t.foo()
                                                        );
                                                    } catch (t) {
                                                        return !1;
                                                    }
                                                })()),
                                                o.TYPED_ARRAY_SUPPORT ||
                                                    "undefined" == typeof console ||
                                                    "function" != typeof console.error ||
                                                    console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."),
                                                Object.defineProperty(o.prototype, "parent", {
                                                    enumerable: !0,
                                                    get: function () {
                                                        return o.isBuffer(this) ? this.buffer : void 0;
                                                    },
                                                }),
                                                Object.defineProperty(o.prototype, "offset", {
                                                    enumerable: !0,
                                                    get: function () {
                                                        return o.isBuffer(this) ? this.byteOffset : void 0;
                                                    },
                                                }),
                                                "undefined" != typeof Symbol && null != Symbol.species && o[Symbol.species] === o && Object.defineProperty(o, Symbol.species, { value: null, configurable: !0, enumerable: !1, writable: !1 }),
                                                (o.poolSize = 8192),
                                                (o.from = function (t, e, n) {
                                                    return a(t, e, n);
                                                }),
                                                (o.prototype.__proto__ = Uint8Array.prototype),
                                                (o.__proto__ = Uint8Array),
                                                (o.alloc = function (t, e, n) {
                                                    return (function (t, e, n) {
                                                        return c(t), 0 >= t || void 0 === e ? i(t) : "string" == typeof n ? i(t).fill(e, n) : i(t).fill(e);
                                                    })(t, e, n);
                                                }),
                                                (o.allocUnsafe = function (t) {
                                                    return l(t);
                                                }),
                                                (o.allocUnsafeSlow = function (t) {
                                                    return l(t);
                                                }),
                                                (o.isBuffer = function (t) {
                                                    return null != t && !0 === t._isBuffer && t !== o.prototype;
                                                }),
                                                (o.compare = function (t, e) {
                                                    if ((F(t, Uint8Array) && (t = o.from(t, t.offset, t.byteLength)), F(e, Uint8Array) && (e = o.from(e, e.offset, e.byteLength)), !o.isBuffer(t) || !o.isBuffer(e)))
                                                        throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
                                                    if (t === e) return 0;
                                                    for (var n = t.length, i = e.length, s = 0, a = r(n, i); s < a; ++s)
                                                        if (t[s] !== e[s]) {
                                                            (n = t[s]), (i = e[s]);
                                                            break;
                                                        }
                                                    return n < i ? -1 : i < n ? 1 : 0;
                                                }),
                                                (o.isEncoding = function (t) {
                                                    switch ((t + "").toLowerCase()) {
                                                        case "hex":
                                                        case "utf8":
                                                        case "utf-8":
                                                        case "ascii":
                                                        case "latin1":
                                                        case "binary":
                                                        case "base64":
                                                        case "ucs2":
                                                        case "ucs-2":
                                                        case "utf16le":
                                                        case "utf-16le":
                                                            return !0;
                                                        default:
                                                            return !1;
                                                    }
                                                }),
                                                (o.concat = function (t, e) {
                                                    if (!Array.isArray(t)) throw new TypeError('"list" argument must be an Array of Buffers');
                                                    if (0 === t.length) return o.alloc(0);
                                                    var n;
                                                    if (void 0 === e) for (e = 0, n = 0; n < t.length; ++n) e += t[n].length;
                                                    var r = o.allocUnsafe(e),
                                                        i = 0;
                                                    for (n = 0; n < t.length; ++n) {
                                                        var s = t[n];
                                                        if ((F(s, Uint8Array) && (s = o.from(s)), !o.isBuffer(s))) throw new TypeError('"list" argument must be an Array of Buffers');
                                                        s.copy(r, i), (i += s.length);
                                                    }
                                                    return r;
                                                }),
                                                (o.byteLength = d),
                                                (o.prototype._isBuffer = !0),
                                                (o.prototype.swap16 = function () {
                                                    var t = this.length;
                                                    if (0 != t % 2) throw new RangeError("Buffer size must be a multiple of 16-bits");
                                                    for (var e = 0; e < t; e += 2) p(this, e, e + 1);
                                                    return this;
                                                }),
                                                (o.prototype.swap32 = function () {
                                                    var t = this.length;
                                                    if (0 != t % 4) throw new RangeError("Buffer size must be a multiple of 32-bits");
                                                    for (var e = 0; e < t; e += 4) p(this, e, e + 3), p(this, e + 1, e + 2);
                                                    return this;
                                                }),
                                                (o.prototype.swap64 = function () {
                                                    var t = this.length;
                                                    if (0 != t % 8) throw new RangeError("Buffer size must be a multiple of 64-bits");
                                                    for (var e = 0; e < t; e += 8) p(this, e, e + 7), p(this, e + 1, e + 6), p(this, e + 2, e + 5), p(this, e + 3, e + 4);
                                                    return this;
                                                }),
                                                (o.prototype.toString = function () {
                                                    var t = this.length;
                                                    return 0 === t ? "" : 0 === arguments.length ? S(this, 0, t) : f.apply(this, arguments);
                                                }),
                                                (o.prototype.toLocaleString = o.prototype.toString),
                                                (o.prototype.equals = function (t) {
                                                    if (!o.isBuffer(t)) throw new TypeError("Argument must be a Buffer");
                                                    return this === t || 0 === o.compare(this, t);
                                                }),
                                                (o.prototype.inspect = function () {
                                                    var t = "",
                                                        e = n.INSPECT_MAX_BYTES;
                                                    return (
                                                        (t = this.toString("hex", 0, e)
                                                            .replace(/(.{2})/g, "$1 ")
                                                            .trim()),
                                                        this.length > e && (t += " ... "),
                                                        "<Buffer " + t + ">"
                                                    );
                                                }),
                                                (o.prototype.compare = function (t, e, n, i, s) {
                                                    if ((F(t, Uint8Array) && (t = o.from(t, t.offset, t.byteLength)), !o.isBuffer(t)))
                                                        throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof t);
                                                    if ((void 0 === e && (e = 0), void 0 === n && (n = t ? t.length : 0), void 0 === i && (i = 0), void 0 === s && (s = this.length), 0 > e || n > t.length || 0 > i || s > this.length))
                                                        throw new RangeError("out of range index");
                                                    if (i >= s && e >= n) return 0;
                                                    if (i >= s) return -1;
                                                    if (e >= n) return 1;
                                                    if (this === t) return 0;
                                                    for (var a = (s >>>= 0) - (i >>>= 0), c = (n >>>= 0) - (e >>>= 0), l = r(a, c), h = this.slice(i, s), u = t.slice(e, n), d = 0; d < l; ++d)
                                                        if (h[d] !== u[d]) {
                                                            (a = h[d]), (c = u[d]);
                                                            break;
                                                        }
                                                    return a < c ? -1 : c < a ? 1 : 0;
                                                }),
                                                (o.prototype.includes = function (t, e, n) {
                                                    return -1 !== this.indexOf(t, e, n);
                                                }),
                                                (o.prototype.indexOf = function (t, e, n) {
                                                    return g(this, t, e, n, !0);
                                                }),
                                                (o.prototype.lastIndexOf = function (t, e, n) {
                                                    return g(this, t, e, n, !1);
                                                }),
                                                (o.prototype.write = function (t, e, n, r) {
                                                    if (void 0 === e) (r = "utf8"), (n = this.length), (e = 0);
                                                    else if (void 0 === n && "string" == typeof e) (r = e), (n = this.length), (e = 0);
                                                    else {
                                                        if (!isFinite(e)) throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
                                                        (e >>>= 0), isFinite(n) ? ((n >>>= 0), void 0 === r && (r = "utf8")) : ((r = n), (n = void 0));
                                                    }
                                                    var i = this.length - e;
                                                    if (((void 0 === n || n > i) && (n = i), (0 < t.length && (0 > n || 0 > e)) || e > this.length)) throw new RangeError("Attempt to write outside buffer bounds");
                                                    r || (r = "utf8");
                                                    for (var s = !1; ; )
                                                        switch (r) {
                                                            case "hex":
                                                                return b(this, t, e, n);
                                                            case "utf8":
                                                            case "utf-8":
                                                                return w(this, t, e, n);
                                                            case "ascii":
                                                                return m(this, t, e, n);
                                                            case "latin1":
                                                            case "binary":
                                                                return _(this, t, e, n);
                                                            case "base64":
                                                                return v(this, t, e, n);
                                                            case "ucs2":
                                                            case "ucs-2":
                                                            case "utf16le":
                                                            case "utf-16le":
                                                                return E(this, t, e, n);
                                                            default:
                                                                if (s) throw new TypeError("Unknown encoding: " + r);
                                                                (r = ("" + r).toLowerCase()), (s = !0);
                                                        }
                                                }),
                                                (o.prototype.toJSON = function () {
                                                    return { type: "Buffer", data: Array.prototype.slice.call(this._arr || this, 0) };
                                                }),
                                                (o.prototype.slice = function (t, e) {
                                                    var n = this.length;
                                                    0 > (t = ~~t) ? 0 > (t += n) && (t = 0) : t > n && (t = n), 0 > (e = void 0 === e ? n : ~~e) ? 0 > (e += n) && (e = 0) : e > n && (e = n), e < t && (e = t);
                                                    var r = this.subarray(t, e);
                                                    return (r.__proto__ = o.prototype), r;
                                                }),
                                                (o.prototype.readUIntLE = function (t, e, n) {
                                                    (t >>>= 0), (e >>>= 0), n || O(t, e, this.length);
                                                    for (var r = this[t], i = 1, s = 0; ++s < e && (i *= 256); ) r += this[t + s] * i;
                                                    return r;
                                                }),
                                                (o.prototype.readUIntBE = function (t, e, n) {
                                                    (t >>>= 0), (e >>>= 0), n || O(t, e, this.length);
                                                    for (var r = this[t + --e], i = 1; 0 < e && (i *= 256); ) r += this[t + --e] * i;
                                                    return r;
                                                }),
                                                (o.prototype.readUInt8 = function (t, e) {
                                                    return (t >>>= 0), e || O(t, 1, this.length), this[t];
                                                }),
                                                (o.prototype.readUInt16LE = function (t, e) {
                                                    return (t >>>= 0), e || O(t, 2, this.length), this[t] | (this[t + 1] << 8);
                                                }),
                                                (o.prototype.readUInt16BE = function (t, e) {
                                                    return (t >>>= 0), e || O(t, 2, this.length), (this[t] << 8) | this[t + 1];
                                                }),
                                                (o.prototype.readUInt32LE = function (t, e) {
                                                    return (t >>>= 0), e || O(t, 4, this.length), (this[t] | (this[t + 1] << 8) | (this[t + 2] << 16)) + 16777216 * this[t + 3];
                                                }),
                                                (o.prototype.readUInt32BE = function (t, e) {
                                                    return (t >>>= 0), e || O(t, 4, this.length), 16777216 * this[t] + ((this[t + 1] << 16) | (this[t + 2] << 8) | this[t + 3]);
                                                }),
                                                (o.prototype.readIntLE = function (t, e, n) {
                                                    (t >>>= 0), (e >>>= 0), n || O(t, e, this.length);
                                                    for (var r = this[t], i = 1, o = 0; ++o < e && (i *= 256); ) r += this[t + o] * i;
                                                    return r >= (i *= 128) && (r -= s(2, 8 * e)), r;
                                                }),
                                                (o.prototype.readIntBE = function (t, e, n) {
                                                    (t >>>= 0), (e >>>= 0), n || O(t, e, this.length);
                                                    for (var r = e, i = 1, o = this[t + --r]; 0 < r && (i *= 256); ) o += this[t + --r] * i;
                                                    return o >= (i *= 128) && (o -= s(2, 8 * e)), o;
                                                }),
                                                (o.prototype.readInt8 = function (t, e) {
                                                    return (t >>>= 0), e || O(t, 1, this.length), 128 & this[t] ? -1 * (255 - this[t] + 1) : this[t];
                                                }),
                                                (o.prototype.readInt16LE = function (t, e) {
                                                    (t >>>= 0), e || O(t, 2, this.length);
                                                    var n = this[t] | (this[t + 1] << 8);
                                                    return 32768 & n ? 4294901760 | n : n;
                                                }),
                                                (o.prototype.readInt16BE = function (t, e) {
                                                    (t >>>= 0), e || O(t, 2, this.length);
                                                    var n = this[t + 1] | (this[t] << 8);
                                                    return 32768 & n ? 4294901760 | n : n;
                                                }),
                                                (o.prototype.readInt32LE = function (t, e) {
                                                    return (t >>>= 0), e || O(t, 4, this.length), this[t] | (this[t + 1] << 8) | (this[t + 2] << 16) | (this[t + 3] << 24);
                                                }),
                                                (o.prototype.readInt32BE = function (t, e) {
                                                    return (t >>>= 0), e || O(t, 4, this.length), (this[t] << 24) | (this[t + 1] << 16) | (this[t + 2] << 8) | this[t + 3];
                                                }),
                                                (o.prototype.readFloatLE = function (t, e) {
                                                    return (t >>>= 0), e || O(t, 4, this.length), q.read(this, t, !0, 23, 4);
                                                }),
                                                (o.prototype.readFloatBE = function (t, e) {
                                                    return (t >>>= 0), e || O(t, 4, this.length), q.read(this, t, !1, 23, 4);
                                                }),
                                                (o.prototype.readDoubleLE = function (t, e) {
                                                    return (t >>>= 0), e || O(t, 8, this.length), q.read(this, t, !0, 52, 8);
                                                }),
                                                (o.prototype.readDoubleBE = function (t, e) {
                                                    return (t >>>= 0), e || O(t, 8, this.length), q.read(this, t, !1, 52, 8);
                                                }),
                                                (o.prototype.writeUIntLE = function (t, e, n, r) {
                                                    (t = +t), (e >>>= 0), (n >>>= 0), r || L(this, t, e, n, s(2, 8 * n) - 1, 0);
                                                    var i = 1,
                                                        o = 0;
                                                    for (this[e] = 255 & t; ++o < n && (i *= 256); ) this[e + o] = 255 & (t / i);
                                                    return e + n;
                                                }),
                                                (o.prototype.writeUIntBE = function (t, e, n, r) {
                                                    (t = +t), (e >>>= 0), (n >>>= 0), r || L(this, t, e, n, s(2, 8 * n) - 1, 0);
                                                    var i = n - 1,
                                                        o = 1;
                                                    for (this[e + i] = 255 & t; 0 <= --i && (o *= 256); ) this[e + i] = 255 & (t / o);
                                                    return e + n;
                                                }),
                                                (o.prototype.writeUInt8 = function (t, e, n) {
                                                    return (t = +t), (e >>>= 0), n || L(this, t, e, 1, 255, 0), (this[e] = 255 & t), e + 1;
                                                }),
                                                (o.prototype.writeUInt16LE = function (t, e, n) {
                                                    return (t = +t), (e >>>= 0), n || L(this, t, e, 2, 65535, 0), (this[e] = 255 & t), (this[e + 1] = t >>> 8), e + 2;
                                                }),
                                                (o.prototype.writeUInt16BE = function (t, e, n) {
                                                    return (t = +t), (e >>>= 0), n || L(this, t, e, 2, 65535, 0), (this[e] = t >>> 8), (this[e + 1] = 255 & t), e + 2;
                                                }),
                                                (o.prototype.writeUInt32LE = function (t, e, n) {
                                                    return (t = +t), (e >>>= 0), n || L(this, t, e, 4, 4294967295, 0), (this[e + 3] = t >>> 24), (this[e + 2] = t >>> 16), (this[e + 1] = t >>> 8), (this[e] = 255 & t), e + 4;
                                                }),
                                                (o.prototype.writeUInt32BE = function (t, e, n) {
                                                    return (t = +t), (e >>>= 0), n || L(this, t, e, 4, 4294967295, 0), (this[e] = t >>> 24), (this[e + 1] = t >>> 16), (this[e + 2] = t >>> 8), (this[e + 3] = 255 & t), e + 4;
                                                }),
                                                (o.prototype.writeIntLE = function (t, e, n, r) {
                                                    if (((t = +t), (e >>>= 0), !r)) {
                                                        var i = s(2, 8 * n - 1);
                                                        L(this, t, e, n, i - 1, -i);
                                                    }
                                                    var o = 0,
                                                        a = 1,
                                                        c = 0;
                                                    for (this[e] = 255 & t; ++o < n && (a *= 256); ) 0 > t && 0 === c && 0 !== this[e + o - 1] && (c = 1), (this[e + o] = 255 & (((t / a) >> 0) - c));
                                                    return e + n;
                                                }),
                                                (o.prototype.writeIntBE = function (t, e, n, r) {
                                                    if (((t = +t), (e >>>= 0), !r)) {
                                                        var i = s(2, 8 * n - 1);
                                                        L(this, t, e, n, i - 1, -i);
                                                    }
                                                    var o = n - 1,
                                                        a = 1,
                                                        c = 0;
                                                    for (this[e + o] = 255 & t; 0 <= --o && (a *= 256); ) 0 > t && 0 === c && 0 !== this[e + o + 1] && (c = 1), (this[e + o] = 255 & (((t / a) >> 0) - c));
                                                    return e + n;
                                                }),
                                                (o.prototype.writeInt8 = function (t, e, n) {
                                                    return (t = +t), (e >>>= 0), n || L(this, t, e, 1, 127, -128), 0 > t && (t = 255 + t + 1), (this[e] = 255 & t), e + 1;
                                                }),
                                                (o.prototype.writeInt16LE = function (t, e, n) {
                                                    return (t = +t), (e >>>= 0), n || L(this, t, e, 2, 32767, -32768), (this[e] = 255 & t), (this[e + 1] = t >>> 8), e + 2;
                                                }),
                                                (o.prototype.writeInt16BE = function (t, e, n) {
                                                    return (t = +t), (e >>>= 0), n || L(this, t, e, 2, 32767, -32768), (this[e] = t >>> 8), (this[e + 1] = 255 & t), e + 2;
                                                }),
                                                (o.prototype.writeInt32LE = function (t, e, n) {
                                                    return (t = +t), (e >>>= 0), n || L(this, t, e, 4, 2147483647, -2147483648), (this[e] = 255 & t), (this[e + 1] = t >>> 8), (this[e + 2] = t >>> 16), (this[e + 3] = t >>> 24), e + 4;
                                                }),
                                                (o.prototype.writeInt32BE = function (t, e, n) {
                                                    return (
                                                        (t = +t),
                                                        (e >>>= 0),
                                                        n || L(this, t, e, 4, 2147483647, -2147483648),
                                                        0 > t && (t = 4294967295 + t + 1),
                                                        (this[e] = t >>> 24),
                                                        (this[e + 1] = t >>> 16),
                                                        (this[e + 2] = t >>> 8),
                                                        (this[e + 3] = 255 & t),
                                                        e + 4
                                                    );
                                                }),
                                                (o.prototype.writeFloatLE = function (t, e, n) {
                                                    return I(this, t, e, !0, n);
                                                }),
                                                (o.prototype.writeFloatBE = function (t, e, n) {
                                                    return I(this, t, e, !1, n);
                                                }),
                                                (o.prototype.writeDoubleLE = function (t, e, n) {
                                                    return N(this, t, e, !0, n);
                                                }),
                                                (o.prototype.writeDoubleBE = function (t, e, n) {
                                                    return N(this, t, e, !1, n);
                                                }),
                                                (o.prototype.copy = function (t, e, n, r) {
                                                    if (!o.isBuffer(t)) throw new TypeError("argument should be a Buffer");
                                                    if ((n || (n = 0), r || 0 === r || (r = this.length), e >= t.length && (e = t.length), e || (e = 0), 0 < r && r < n && (r = n), r === n)) return 0;
                                                    if (0 === t.length || 0 === this.length) return 0;
                                                    if (0 > e) throw new RangeError("targetStart out of bounds");
                                                    if (0 > n || n >= this.length) throw new RangeError("Index out of range");
                                                    if (0 > r) throw new RangeError("sourceEnd out of bounds");
                                                    r > this.length && (r = this.length), t.length - e < r - n && (r = t.length - e + n);
                                                    var i = r - n;
                                                    if (this === t && "function" == typeof Uint8Array.prototype.copyWithin) this.copyWithin(e, n, r);
                                                    else if (this === t && n < e && e < r) for (var s = i - 1; 0 <= s; --s) t[s + e] = this[s + n];
                                                    else Uint8Array.prototype.set.call(t, this.subarray(n, r), e);
                                                    return i;
                                                }),
                                                (o.prototype.fill = function (t, e, n, r) {
                                                    if ("string" == typeof t) {
                                                        if (("string" == typeof e ? ((r = e), (e = 0), (n = this.length)) : "string" == typeof n && ((r = n), (n = this.length)), void 0 !== r && "string" != typeof r))
                                                            throw new TypeError("encoding must be a string");
                                                        if ("string" == typeof r && !o.isEncoding(r)) throw new TypeError("Unknown encoding: " + r);
                                                        if (1 === t.length) {
                                                            var i = t.charCodeAt(0);
                                                            (("utf8" === r && 128 > i) || "latin1" === r) && (t = i);
                                                        }
                                                    } else "number" == typeof t && (t &= 255);
                                                    if (0 > e || this.length < e || this.length < n) throw new RangeError("Out of range index");
                                                    if (n <= e) return this;
                                                    var s;
                                                    if (((e >>>= 0), (n = void 0 === n ? this.length : n >>> 0), t || (t = 0), "number" == typeof t)) for (s = e; s < n; ++s) this[s] = t;
                                                    else {
                                                        var a = o.isBuffer(t) ? t : o.from(t, r),
                                                            c = a.length;
                                                        if (0 === c) throw new TypeError('The value "' + t + '" is invalid for argument "value"');
                                                        for (s = 0; s < n - e; ++s) this[s + e] = a[s % c];
                                                    }
                                                    return this;
                                                });
                                            var H = /[^+/0-9A-Za-z-_]/g;
                                        }.call(this));
                                    }.call(this, t("buffer").Buffer));
                                },
                                { "base64-js": 1, buffer: 3, ieee754: 9 },
                            ],
                            4: [
                                function (t, e, n) {
                                    (function (r) {
                                        (function () {
                                            (n.formatArgs = function (t) {
                                                if (((t[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + t[0] + (this.useColors ? "%c " : " ") + "+" + e.exports.humanize(this.diff)), !this.useColors))
                                                    return;
                                                const n = "color: " + this.color;
                                                t.splice(1, 0, n, "color: inherit");
                                                let r = 0,
                                                    i = 0;
                                                t[0].replace(/%[a-zA-Z%]/g, (t) => {
                                                    "%%" === t || (r++, "%c" === t && (i = r));
                                                }),
                                                    t.splice(i, 0, n);
                                            }),
                                                (n.save = function (t) {
                                                    try {
                                                        t ? n.storage.setItem("debug", t) : n.storage.removeItem("debug");
                                                    } catch (t) {}
                                                }),
                                                (n.load = function () {
                                                    let t;
                                                    try {
                                                        t = n.storage.getItem("debug");
                                                    } catch (t) {}
                                                    return !t && void 0 !== r && "env" in r && (t = r.env.DEBUG), t;
                                                }),
                                                (n.useColors = function () {
                                                    return (
                                                        !("undefined" == typeof window || !window.process || ("renderer" !== window.process.type && !window.process.__nwjs)) ||
                                                        (!("undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) &&
                                                            (("undefined" != typeof document && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance) ||
                                                                ("undefined" != typeof window && window.console && (window.console.firebug || (window.console.exception && window.console.table))) ||
                                                                ("undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && 31 <= parseInt(RegExp.$1, 10)) ||
                                                                ("undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/))))
                                                    );
                                                }),
                                                (n.storage = (function () {
                                                    try {
                                                        return localStorage;
                                                    } catch (t) {}
                                                })()),
                                                (n.destroy = (() => {
                                                    let t = !1;
                                                    return () => {
                                                        t || ((t = !0), console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."));
                                                    };
                                                })()),
                                                (n.colors = [
                                                    "#0000CC",
                                                    "#0000FF",
                                                    "#0033CC",
                                                    "#0033FF",
                                                    "#0066CC",
                                                    "#0066FF",
                                                    "#0099CC",
                                                    "#0099FF",
                                                    "#00CC00",
                                                    "#00CC33",
                                                    "#00CC66",
                                                    "#00CC99",
                                                    "#00CCCC",
                                                    "#00CCFF",
                                                    "#3300CC",
                                                    "#3300FF",
                                                    "#3333CC",
                                                    "#3333FF",
                                                    "#3366CC",
                                                    "#3366FF",
                                                    "#3399CC",
                                                    "#3399FF",
                                                    "#33CC00",
                                                    "#33CC33",
                                                    "#33CC66",
                                                    "#33CC99",
                                                    "#33CCCC",
                                                    "#33CCFF",
                                                    "#6600CC",
                                                    "#6600FF",
                                                    "#6633CC",
                                                    "#6633FF",
                                                    "#66CC00",
                                                    "#66CC33",
                                                    "#9900CC",
                                                    "#9900FF",
                                                    "#9933CC",
                                                    "#9933FF",
                                                    "#99CC00",
                                                    "#99CC33",
                                                    "#CC0000",
                                                    "#CC0033",
                                                    "#CC0066",
                                                    "#CC0099",
                                                    "#CC00CC",
                                                    "#CC00FF",
                                                    "#CC3300",
                                                    "#CC3333",
                                                    "#CC3366",
                                                    "#CC3399",
                                                    "#CC33CC",
                                                    "#CC33FF",
                                                    "#CC6600",
                                                    "#CC6633",
                                                    "#CC9900",
                                                    "#CC9933",
                                                    "#CCCC00",
                                                    "#CCCC33",
                                                    "#FF0000",
                                                    "#FF0033",
                                                    "#FF0066",
                                                    "#FF0099",
                                                    "#FF00CC",
                                                    "#FF00FF",
                                                    "#FF3300",
                                                    "#FF3333",
                                                    "#FF3366",
                                                    "#FF3399",
                                                    "#FF33CC",
                                                    "#FF33FF",
                                                    "#FF6600",
                                                    "#FF6633",
                                                    "#FF9900",
                                                    "#FF9933",
                                                    "#FFCC00",
                                                    "#FFCC33",
                                                ]),
                                                (n.log = console.debug || console.log || (() => {})),
                                                (e.exports = t("./common")(n));
                                            const { formatters: i } = e.exports;
                                            i.j = function (t) {
                                                try {
                                                    return JSON.stringify(t);
                                                } catch (t) {
                                                    return "[UnexpectedJSONParseError]: " + t.message;
                                                }
                                            };
                                        }.call(this));
                                    }.call(this, t("_process")));
                                },
                                { "./common": 5, _process: 12 },
                            ],
                            5: [
                                function (t, e) {
                                    e.exports = function (e) {
                                        function n(t) {
                                            function e(...t) {
                                                if (!e.enabled) return;
                                                const r = e,
                                                    s = +new Date(),
                                                    o = s - (i || s);
                                                (r.diff = o), (r.prev = i), (r.curr = s), (i = s), (t[0] = n.coerce(t[0])), "string" != typeof t[0] && t.unshift("%O");
                                                let a = 0;
                                                (t[0] = t[0].replace(/%([a-zA-Z%])/g, (e, i) => {
                                                    if ("%%" === e) return "%";
                                                    a++;
                                                    const s = n.formatters[i];
                                                    if ("function" == typeof s) {
                                                        const n = t[a];
                                                        (e = s.call(r, n)), t.splice(a, 1), a--;
                                                    }
                                                    return e;
                                                })),
                                                    n.formatArgs.call(r, t),
                                                    (r.log || n.log).apply(r, t);
                                            }
                                            let i,
                                                s = null;
                                            return (
                                                (e.namespace = t),
                                                (e.useColors = n.useColors()),
                                                (e.color = n.selectColor(t)),
                                                (e.extend = r),
                                                (e.destroy = n.destroy),
                                                Object.defineProperty(e, "enabled", {
                                                    enumerable: !0,
                                                    configurable: !1,
                                                    get: () => (null === s ? n.enabled(t) : s),
                                                    set: (t) => {
                                                        s = t;
                                                    },
                                                }),
                                                "function" == typeof n.init && n.init(e),
                                                e
                                            );
                                        }
                                        function r(t, e) {
                                            const r = n(this.namespace + (void 0 === e ? ":" : e) + t);
                                            return (r.log = this.log), r;
                                        }
                                        function s(t) {
                                            return t
                                                .toString()
                                                .substring(2, t.toString().length - 2)
                                                .replace(/\.\*\?$/, "*");
                                        }
                                        return (
                                            (n.debug = n),
                                            (n.default = n),
                                            (n.coerce = function (t) {
                                                return t instanceof Error ? t.stack || t.message : t;
                                            }),
                                            (n.disable = function () {
                                                const t = [...n.names.map(s), ...n.skips.map(s).map((t) => "-" + t)].join(",");
                                                return n.enable(""), t;
                                            }),
                                            (n.enable = function (t) {
                                                let e;
                                                n.save(t), (n.names = []), (n.skips = []);
                                                const r = ("string" == typeof t ? t : "").split(/[\s,]+/),
                                                    i = r.length;
                                                for (e = 0; e < i; e++) r[e] && ("-" === (t = r[e].replace(/\*/g, ".*?"))[0] ? n.skips.push(new RegExp("^" + t.substr(1) + "$")) : n.names.push(new RegExp("^" + t + "$")));
                                            }),
                                            (n.enabled = function (t) {
                                                if ("*" === t[t.length - 1]) return !0;
                                                let e, r;
                                                for (e = 0, r = n.skips.length; e < r; e++) if (n.skips[e].test(t)) return !1;
                                                for (e = 0, r = n.names.length; e < r; e++) if (n.names[e].test(t)) return !0;
                                                return !1;
                                            }),
                                            (n.humanize = t("ms")),
                                            (n.destroy = function () {
                                                console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
                                            }),
                                            Object.keys(e).forEach((t) => {
                                                n[t] = e[t];
                                            }),
                                            (n.names = []),
                                            (n.skips = []),
                                            (n.formatters = {}),
                                            (n.selectColor = function (t) {
                                                let e = 0;
                                                for (let n = 0; n < t.length; n++) (e = (e << 5) - e + t.charCodeAt(n)), (e |= 0);
                                                return n.colors[i(e) % n.colors.length];
                                            }),
                                            n.enable(n.load()),
                                            n
                                        );
                                    };
                                },
                                { ms: 11 },
                            ],
                            6: [
                                function (t, e) {
                                    "use strict";
                                    function n(t, e) {
                                        for (const n in e) Object.defineProperty(t, n, { value: e[n], enumerable: !0, configurable: !0 });
                                        return t;
                                    }
                                    e.exports = function (t, e, r) {
                                        if (!t || "string" == typeof t) throw new TypeError("Please pass an Error to err-code");
                                        r || (r = {}), "object" == typeof e && ((r = e), (e = "")), e && (r.code = e);
                                        try {
                                            return n(t, r);
                                        } catch (e) {
                                            (r.message = t.message), (r.stack = t.stack);
                                            const i = function () {};
                                            return (i.prototype = Object.create(Object.getPrototypeOf(t))), n(new i(), r);
                                        }
                                    };
                                },
                                {},
                            ],
                            7: [
                                function (t, e) {
                                    "use strict";
                                    function n() {
                                        n.init.call(this);
                                    }
                                    function r(t) {
                                        if ("function" != typeof t) throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof t);
                                    }
                                    function i(t) {
                                        return void 0 === t._maxListeners ? n.defaultMaxListeners : t._maxListeners;
                                    }
                                    function s(t, e, n, s) {
                                        var o, a, c;
                                        if (
                                            (r(n),
                                            void 0 === (a = t._events)
                                                ? ((a = t._events = Object.create(null)), (t._eventsCount = 0))
                                                : (void 0 !== a.newListener && (t.emit("newListener", e, n.listener ? n.listener : n), (a = t._events)), (c = a[e])),
                                            void 0 === c)
                                        )
                                            (c = a[e] = n), ++t._eventsCount;
                                        else if (("function" == typeof c ? (c = a[e] = s ? [n, c] : [c, n]) : s ? c.unshift(n) : c.push(n), 0 < (o = i(t)) && c.length > o && !c.warned)) {
                                            c.warned = !0;
                                            var l = new Error("Possible EventEmitter memory leak detected. " + c.length + " " + e + " listeners added. Use emitter.setMaxListeners() to increase limit");
                                            (l.name = "MaxListenersExceededWarning"),
                                                (l.emitter = t),
                                                (l.type = e),
                                                (l.count = c.length),
                                                (function (t) {
                                                    console && console.warn && console.warn(t);
                                                })(l);
                                        }
                                        return t;
                                    }
                                    function o() {
                                        if (!this.fired) return this.target.removeListener(this.type, this.wrapFn), (this.fired = !0), 0 === arguments.length ? this.listener.call(this.target) : this.listener.apply(this.target, arguments);
                                    }
                                    function a(t, e, n) {
                                        var r = { fired: !1, wrapFn: void 0, target: t, type: e, listener: n },
                                            i = o.bind(r);
                                        return (i.listener = n), (r.wrapFn = i), i;
                                    }
                                    function c(t, e, n) {
                                        var r = t._events;
                                        if (void 0 === r) return [];
                                        var i = r[e];
                                        return void 0 === i
                                            ? []
                                            : "function" == typeof i
                                            ? n
                                                ? [i.listener || i]
                                                : [i]
                                            : n
                                            ? (function (t) {
                                                  for (var e = Array(t.length), n = 0; n < e.length; ++n) e[n] = t[n].listener || t[n];
                                                  return e;
                                              })(i)
                                            : h(i, i.length);
                                    }
                                    function l(t) {
                                        var e = this._events;
                                        if (void 0 !== e) {
                                            var n = e[t];
                                            if ("function" == typeof n) return 1;
                                            if (void 0 !== n) return n.length;
                                        }
                                        return 0;
                                    }
                                    function h(t, e) {
                                        for (var n = Array(e), r = 0; r < e; ++r) n[r] = t[r];
                                        return n;
                                    }
                                    function u(t, e, n, r) {
                                        if ("function" == typeof t.on) r.once ? t.once(e, n) : t.on(e, n);
                                        else {
                                            if ("function" != typeof t.addEventListener) throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof t);
                                            t.addEventListener(e, function i(s) {
                                                r.once && t.removeEventListener(e, i), n(s);
                                            });
                                        }
                                    }
                                    var d,
                                        f = "object" == typeof Reflect ? Reflect : null,
                                        p =
                                            f && "function" == typeof f.apply
                                                ? f.apply
                                                : function (t, e, n) {
                                                      return Function.prototype.apply.call(t, e, n);
                                                  };
                                    d =
                                        f && "function" == typeof f.ownKeys
                                            ? f.ownKeys
                                            : Object.getOwnPropertySymbols
                                            ? function (t) {
                                                  return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t));
                                              }
                                            : function (t) {
                                                  return Object.getOwnPropertyNames(t);
                                              };
                                    var g =
                                        Number.isNaN ||
                                        function (t) {
                                            return t != t;
                                        };
                                    (e.exports = n),
                                        (e.exports.once = function (t, e) {
                                            return new Promise(function (n, r) {
                                                function i(n) {
                                                    t.removeListener(e, s), r(n);
                                                }
                                                function s() {
                                                    "function" == typeof t.removeListener && t.removeListener("error", i), n([].slice.call(arguments));
                                                }
                                                u(t, e, s, { once: !0 }),
                                                    "error" !== e &&
                                                        (function (t, e, n) {
                                                            "function" == typeof t.on && u(t, "error", e, n);
                                                        })(t, i, { once: !0 });
                                            });
                                        }),
                                        (n.EventEmitter = n),
                                        (n.prototype._events = void 0),
                                        (n.prototype._eventsCount = 0),
                                        (n.prototype._maxListeners = void 0);
                                    var y = 10;
                                    Object.defineProperty(n, "defaultMaxListeners", {
                                        enumerable: !0,
                                        get: function () {
                                            return y;
                                        },
                                        set: function (t) {
                                            if ("number" != typeof t || 0 > t || g(t)) throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + t + ".");
                                            y = t;
                                        },
                                    }),
                                        (n.init = function () {
                                            (void 0 === this._events || this._events === Object.getPrototypeOf(this)._events) && ((this._events = Object.create(null)), (this._eventsCount = 0)),
                                                (this._maxListeners = this._maxListeners || void 0);
                                        }),
                                        (n.prototype.setMaxListeners = function (t) {
                                            if ("number" != typeof t || 0 > t || g(t)) throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + t + ".");
                                            return (this._maxListeners = t), this;
                                        }),
                                        (n.prototype.getMaxListeners = function () {
                                            return i(this);
                                        }),
                                        (n.prototype.emit = function (t) {
                                            for (var e = [], n = 1; n < arguments.length; n++) e.push(arguments[n]);
                                            var r = "error" === t,
                                                i = this._events;
                                            if (void 0 !== i) r = r && void 0 === i.error;
                                            else if (!r) return !1;
                                            if (r) {
                                                var s;
                                                if ((0 < e.length && (s = e[0]), s instanceof Error)) throw s;
                                                var o = new Error("Unhandled error." + (s ? " (" + s.message + ")" : ""));
                                                throw ((o.context = s), o);
                                            }
                                            var a = i[t];
                                            if (void 0 === a) return !1;
                                            if ("function" == typeof a) p(a, this, e);
                                            else {
                                                var c = a.length,
                                                    l = h(a, c);
                                                for (n = 0; n < c; ++n) p(l[n], this, e);
                                            }
                                            return !0;
                                        }),
                                        (n.prototype.addListener = function (t, e) {
                                            return s(this, t, e, !1);
                                        }),
                                        (n.prototype.on = n.prototype.addListener),
                                        (n.prototype.prependListener = function (t, e) {
                                            return s(this, t, e, !0);
                                        }),
                                        (n.prototype.once = function (t, e) {
                                            return r(e), this.on(t, a(this, t, e)), this;
                                        }),
                                        (n.prototype.prependOnceListener = function (t, e) {
                                            return r(e), this.prependListener(t, a(this, t, e)), this;
                                        }),
                                        (n.prototype.removeListener = function (t, e) {
                                            var n, i, s, o, a;
                                            if ((r(e), void 0 === (i = this._events))) return this;
                                            if (void 0 === (n = i[t])) return this;
                                            if (n === e || n.listener === e) 0 == --this._eventsCount ? (this._events = Object.create(null)) : (delete i[t], i.removeListener && this.emit("removeListener", t, n.listener || e));
                                            else if ("function" != typeof n) {
                                                for (s = -1, o = n.length - 1; 0 <= o; o--)
                                                    if (n[o] === e || n[o].listener === e) {
                                                        (a = n[o].listener), (s = o);
                                                        break;
                                                    }
                                                if (0 > s) return this;
                                                0 === s
                                                    ? n.shift()
                                                    : (function (t, e) {
                                                          for (; e + 1 < t.length; e++) t[e] = t[e + 1];
                                                          t.pop();
                                                      })(n, s),
                                                    1 === n.length && (i[t] = n[0]),
                                                    void 0 !== i.removeListener && this.emit("removeListener", t, a || e);
                                            }
                                            return this;
                                        }),
                                        (n.prototype.off = n.prototype.removeListener),
                                        (n.prototype.removeAllListeners = function (t) {
                                            var e, n, r;
                                            if (void 0 === (n = this._events)) return this;
                                            if (void 0 === n.removeListener)
                                                return (
                                                    0 === arguments.length
                                                        ? ((this._events = Object.create(null)), (this._eventsCount = 0))
                                                        : void 0 !== n[t] && (0 == --this._eventsCount ? (this._events = Object.create(null)) : delete n[t]),
                                                    this
                                                );
                                            if (0 === arguments.length) {
                                                var i,
                                                    s = Object.keys(n);
                                                for (r = 0; r < s.length; ++r) "removeListener" !== (i = s[r]) && this.removeAllListeners(i);
                                                return this.removeAllListeners("removeListener"), (this._events = Object.create(null)), (this._eventsCount = 0), this;
                                            }
                                            if ("function" == typeof (e = n[t])) this.removeListener(t, e);
                                            else if (void 0 !== e) for (r = e.length - 1; 0 <= r; r--) this.removeListener(t, e[r]);
                                            return this;
                                        }),
                                        (n.prototype.listeners = function (t) {
                                            return c(this, t, !0);
                                        }),
                                        (n.prototype.rawListeners = function (t) {
                                            return c(this, t, !1);
                                        }),
                                        (n.listenerCount = function (t, e) {
                                            return "function" == typeof t.listenerCount ? t.listenerCount(e) : l.call(t, e);
                                        }),
                                        (n.prototype.listenerCount = l),
                                        (n.prototype.eventNames = function () {
                                            return 0 < this._eventsCount ? d(this._events) : [];
                                        });
                                },
                                {},
                            ],
                            8: [
                                function (t, e) {
                                    e.exports = function () {
                                        if ("undefined" == typeof globalThis) return null;
                                        var t = {
                                            RTCPeerConnection: globalThis.RTCPeerConnection || globalThis.mozRTCPeerConnection || globalThis.webkitRTCPeerConnection,
                                            RTCSessionDescription: globalThis.RTCSessionDescription || globalThis.mozRTCSessionDescription || globalThis.webkitRTCSessionDescription,
                                            RTCIceCandidate: globalThis.RTCIceCandidate || globalThis.mozRTCIceCandidate || globalThis.webkitRTCIceCandidate,
                                        };
                                        return t.RTCPeerConnection ? t : null;
                                    };
                                },
                                {},
                            ],
                            9: [
                                function (t, e, n) {
                                    (n.read = function (t, e, n, r, i) {
                                        var o,
                                            a,
                                            c = 8 * i - r - 1,
                                            l = (1 << c) - 1,
                                            h = l >> 1,
                                            u = -7,
                                            d = n ? i - 1 : 0,
                                            f = n ? -1 : 1,
                                            p = t[e + d];
                                        for (d += f, o = p & ((1 << -u) - 1), p >>= -u, u += c; 0 < u; o = 256 * o + t[e + d], d += f, u -= 8);
                                        for (a = o & ((1 << -u) - 1), o >>= -u, u += r; 0 < u; a = 256 * a + t[e + d], d += f, u -= 8);
                                        if (0 === o) o = 1 - h;
                                        else {
                                            if (o === l) return a ? NaN : (1 / 0) * (p ? -1 : 1);
                                            (a += s(2, r)), (o -= h);
                                        }
                                        return (p ? -1 : 1) * a * s(2, o - r);
                                    }),
                                        (n.write = function (t, e, n, o, a, c) {
                                            var l,
                                                h,
                                                u,
                                                d = Math.LN2,
                                                f = Math.log,
                                                p = 8 * c - a - 1,
                                                g = (1 << p) - 1,
                                                y = g >> 1,
                                                b = 23 === a ? s(2, -24) - s(2, -77) : 0,
                                                w = o ? 0 : c - 1,
                                                m = o ? 1 : -1,
                                                _ = 0 > e || (0 === e && 0 > 1 / e) ? 1 : 0;
                                            for (
                                                e = i(e),
                                                    isNaN(e) || e === 1 / 0
                                                        ? ((h = isNaN(e) ? 1 : 0), (l = g))
                                                        : ((l = r(f(e) / d)),
                                                          1 > e * (u = s(2, -l)) && (l--, (u *= 2)),
                                                          2 <= (e += 1 <= l + y ? b / u : b * s(2, 1 - y)) * u && (l++, (u /= 2)),
                                                          l + y >= g ? ((h = 0), (l = g)) : 1 <= l + y ? ((h = (e * u - 1) * s(2, a)), (l += y)) : ((h = e * s(2, y - 1) * s(2, a)), (l = 0)));
                                                8 <= a;
                                                t[n + w] = 255 & h, w += m, h /= 256, a -= 8
                                            );
                                            for (l = (l << a) | h, p += a; 0 < p; t[n + w] = 255 & l, w += m, l /= 256, p -= 8);
                                            t[n + w - m] |= 128 * _;
                                        });
                                },
                                {},
                            ],
                            10: [
                                function (t, e) {
                                    e.exports =
                                        "function" == typeof Object.create
                                            ? function (t, e) {
                                                  e && ((t.super_ = e), (t.prototype = Object.create(e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } })));
                                              }
                                            : function (t, e) {
                                                  if (e) {
                                                      t.super_ = e;
                                                      var n = function () {};
                                                      (n.prototype = e.prototype), (t.prototype = new n()), (t.prototype.constructor = t);
                                                  }
                                              };
                                },
                                {},
                            ],
                            11: [
                                function (t, e) {
                                    var n = Math.round;
                                    function r(t) {
                                        var e = i(t);
                                        return 864e5 <= e ? n(t / 864e5) + "d" : 36e5 <= e ? n(t / 36e5) + "h" : 6e4 <= e ? n(t / 6e4) + "m" : 1e3 <= e ? n(t / 1e3) + "s" : t + "ms";
                                    }
                                    function s(t) {
                                        var e = i(t);
                                        return 864e5 <= e ? o(t, e, 864e5, "day") : 36e5 <= e ? o(t, e, 36e5, "hour") : 6e4 <= e ? o(t, e, 6e4, "minute") : 1e3 <= e ? o(t, e, 1e3, "second") : t + " ms";
                                    }
                                    function o(t, e, r, i) {
                                        return n(t / r) + " " + i + (e >= 1.5 * r ? "s" : "");
                                    }
                                    e.exports = function (t, e) {
                                        e = e || {};
                                        var n = typeof t;
                                        if ("string" == n && 0 < t.length)
                                            return (function (t) {
                                                if (!(100 < (t += "").length)) {
                                                    var e = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(t);
                                                    if (e) {
                                                        var n = parseFloat(e[1]),
                                                            r = (e[2] || "ms").toLowerCase();
                                                        return "years" === r || "year" === r || "yrs" === r || "yr" === r || "y" === r
                                                            ? 315576e5 * n
                                                            : "weeks" === r || "week" === r || "w" === r
                                                            ? 6048e5 * n
                                                            : "days" === r || "day" === r || "d" === r
                                                            ? 864e5 * n
                                                            : "hours" === r || "hour" === r || "hrs" === r || "hr" === r || "h" === r
                                                            ? 36e5 * n
                                                            : "minutes" === r || "minute" === r || "mins" === r || "min" === r || "m" === r
                                                            ? 6e4 * n
                                                            : "seconds" === r || "second" === r || "secs" === r || "sec" === r || "s" === r
                                                            ? 1e3 * n
                                                            : "milliseconds" === r || "millisecond" === r || "msecs" === r || "msec" === r || "ms" === r
                                                            ? n
                                                            : void 0;
                                                    }
                                                }
                                            })(t);
                                        if ("number" === n && isFinite(t)) return e.long ? s(t) : r(t);
                                        throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(t));
                                    };
                                },
                                {},
                            ],
                            12: [
                                function (t, e) {
                                    function n() {
                                        throw new Error("setTimeout has not been defined");
                                    }
                                    function r() {
                                        throw new Error("clearTimeout has not been defined");
                                    }
                                    function i(t) {
                                        if (l === setTimeout) return setTimeout(t, 0);
                                        if ((l === n || !l) && setTimeout) return (l = setTimeout), setTimeout(t, 0);
                                        try {
                                            return l(t, 0);
                                        } catch (e) {
                                            try {
                                                return l.call(null, t, 0);
                                            } catch (e) {
                                                return l.call(this, t, 0);
                                            }
                                        }
                                    }
                                    function s() {
                                        p && d && ((p = !1), d.length ? (f = d.concat(f)) : (g = -1), f.length && o());
                                    }
                                    function o() {
                                        if (!p) {
                                            var t = i(s);
                                            p = !0;
                                            for (var e = f.length; e; ) {
                                                for (d = f, f = []; ++g < e; ) d && d[g].run();
                                                (g = -1), (e = f.length);
                                            }
                                            (d = null),
                                                (p = !1),
                                                (function (t) {
                                                    if (h === clearTimeout) return clearTimeout(t);
                                                    if ((h === r || !h) && clearTimeout) return (h = clearTimeout), clearTimeout(t);
                                                    try {
                                                        h(t);
                                                    } catch (e) {
                                                        try {
                                                            return h.call(null, t);
                                                        } catch (e) {
                                                            return h.call(this, t);
                                                        }
                                                    }
                                                })(t);
                                        }
                                    }
                                    function a(t, e) {
                                        (this.fun = t), (this.array = e);
                                    }
                                    function c() {}
                                    var l,
                                        h,
                                        u = (e.exports = {});
                                    !(function () {
                                        try {
                                            l = "function" == typeof setTimeout ? setTimeout : n;
                                        } catch (t) {
                                            l = n;
                                        }
                                        try {
                                            h = "function" == typeof clearTimeout ? clearTimeout : r;
                                        } catch (t) {
                                            h = r;
                                        }
                                    })();
                                    var d,
                                        f = [],
                                        p = !1,
                                        g = -1;
                                    (u.nextTick = function (t) {
                                        var e = Array(arguments.length - 1);
                                        if (1 < arguments.length) for (var n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
                                        f.push(new a(t, e)), 1 !== f.length || p || i(o);
                                    }),
                                        (a.prototype.run = function () {
                                            this.fun.apply(null, this.array);
                                        }),
                                        (u.title = "browser"),
                                        (u.browser = !0),
                                        (u.env = {}),
                                        (u.argv = []),
                                        (u.version = ""),
                                        (u.versions = {}),
                                        (u.on = c),
                                        (u.addListener = c),
                                        (u.once = c),
                                        (u.off = c),
                                        (u.removeListener = c),
                                        (u.removeAllListeners = c),
                                        (u.emit = c),
                                        (u.prependListener = c),
                                        (u.prependOnceListener = c),
                                        (u.listeners = function () {
                                            return [];
                                        }),
                                        (u.binding = function () {
                                            throw new Error("process.binding is not supported");
                                        }),
                                        (u.cwd = function () {
                                            return "/";
                                        }),
                                        (u.chdir = function () {
                                            throw new Error("process.chdir is not supported");
                                        }),
                                        (u.umask = function () {
                                            return 0;
                                        });
                                },
                                {},
                            ],
                            13: [
                                function (t, e) {
                                    (function (t) {
                                        (function () {
                                            let n;
                                            e.exports =
                                                "function" == typeof queueMicrotask
                                                    ? queueMicrotask.bind("undefined" == typeof window ? t : window)
                                                    : (t) =>
                                                          (n || (n = Promise.resolve())).then(t).catch((t) =>
                                                              setTimeout(() => {
                                                                  throw t;
                                                              }, 0)
                                                          );
                                        }.call(this));
                                    }.call(this, void 0 === n.g ? ("undefined" == typeof self ? ("undefined" == typeof window ? {} : window) : self) : n.g));
                                },
                                {},
                            ],
                            14: [
                                function (t, e) {
                                    (function (n, r) {
                                        (function () {
                                            "use strict";
                                            var i = t("safe-buffer").Buffer,
                                                s = r.crypto || r.msCrypto;
                                            e.exports =
                                                s && s.getRandomValues
                                                    ? function (t, e) {
                                                          if (t > 4294967295) throw new RangeError("requested too many random bytes");
                                                          var r = i.allocUnsafe(t);
                                                          if (0 < t)
                                                              if (65536 < t) for (var o = 0; o < t; o += 65536) s.getRandomValues(r.slice(o, o + 65536));
                                                              else s.getRandomValues(r);
                                                          return "function" == typeof e
                                                              ? n.nextTick(function () {
                                                                    e(null, r);
                                                                })
                                                              : r;
                                                      }
                                                    : function () {
                                                          throw new Error("Secure random number generation is not supported by this browser.\nUse Chrome, Firefox or Internet Explorer 11");
                                                      };
                                        }.call(this));
                                    }.call(this, t("_process"), void 0 === n.g ? ("undefined" == typeof self ? ("undefined" == typeof window ? {} : window) : self) : n.g));
                                },
                                { _process: 12, "safe-buffer": 30 },
                            ],
                            15: [
                                function (t, e) {
                                    "use strict";
                                    function n(t, e, n) {
                                        function r(t, n, r) {
                                            return "string" == typeof e ? e : e(t, n, r);
                                        }
                                        n || (n = Error);
                                        var s = (function (t) {
                                            function e(e, n, i) {
                                                return t.call(this, r(e, n, i)) || this;
                                            }
                                            return (
                                                (function (t, e) {
                                                    (t.prototype = Object.create(e.prototype)), (t.prototype.constructor = t), (t.__proto__ = e);
                                                })(e, t),
                                                e
                                            );
                                        })(n);
                                        (s.prototype.name = n.name), (s.prototype.code = t), (i[t] = s);
                                    }
                                    function r(t, e) {
                                        if (Array.isArray(t)) {
                                            var n = t.length;
                                            return (
                                                (t = t.map(function (t) {
                                                    return t + "";
                                                })),
                                                2 < n
                                                    ? "one of ".concat(e, " ").concat(t.slice(0, n - 1).join(", "), ", or ") + t[n - 1]
                                                    : 2 === n
                                                    ? "one of ".concat(e, " ").concat(t[0], " or ").concat(t[1])
                                                    : "of ".concat(e, " ").concat(t[0])
                                            );
                                        }
                                        return "of ".concat(e, " ").concat(t + "");
                                    }
                                    var i = {};
                                    n(
                                        "ERR_INVALID_OPT_VALUE",
                                        function (t, e) {
                                            return 'The value "' + e + '" is invalid for option "' + t + '"';
                                        },
                                        TypeError
                                    ),
                                        n(
                                            "ERR_INVALID_ARG_TYPE",
                                            function (t, e, n) {
                                                var i, s;
                                                if (
                                                    ("string" == typeof e &&
                                                    (function (t, e, n) {
                                                        return t.substr(!n || 0 > n ? 0 : +n, e.length) === e;
                                                    })(e, "not ")
                                                        ? ((i = "must not be"), (e = e.replace(/^not /, "")))
                                                        : (i = "must be"),
                                                    (function (t, e, n) {
                                                        return (void 0 === n || n > t.length) && (n = t.length), t.substring(n - e.length, n) === e;
                                                    })(t, " argument"))
                                                )
                                                    s = "The ".concat(t, " ").concat(i, " ").concat(r(e, "type"));
                                                else {
                                                    var o = (function (t, e, n) {
                                                        return "number" != typeof n && (n = 0), !(n + e.length > t.length) && -1 !== t.indexOf(e, n);
                                                    })(t, ".")
                                                        ? "property"
                                                        : "argument";
                                                    s = 'The "'.concat(t, '" ').concat(o, " ").concat(i, " ").concat(r(e, "type"));
                                                }
                                                return s + ". Received type ".concat(typeof n);
                                            },
                                            TypeError
                                        ),
                                        n("ERR_STREAM_PUSH_AFTER_EOF", "stream.push() after EOF"),
                                        n("ERR_METHOD_NOT_IMPLEMENTED", function (t) {
                                            return "The " + t + " method is not implemented";
                                        }),
                                        n("ERR_STREAM_PREMATURE_CLOSE", "Premature close"),
                                        n("ERR_STREAM_DESTROYED", function (t) {
                                            return "Cannot call " + t + " after a stream was destroyed";
                                        }),
                                        n("ERR_MULTIPLE_CALLBACK", "Callback called multiple times"),
                                        n("ERR_STREAM_CANNOT_PIPE", "Cannot pipe, not readable"),
                                        n("ERR_STREAM_WRITE_AFTER_END", "write after end"),
                                        n("ERR_STREAM_NULL_VALUES", "May not write null values to stream", TypeError),
                                        n(
                                            "ERR_UNKNOWN_ENCODING",
                                            function (t) {
                                                return "Unknown encoding: " + t;
                                            },
                                            TypeError
                                        ),
                                        n("ERR_STREAM_UNSHIFT_AFTER_END_EVENT", "stream.unshift() after end event"),
                                        (e.exports.codes = i);
                                },
                                {},
                            ],
                            16: [
                                function (t, e) {
                                    (function (n) {
                                        (function () {
                                            "use strict";
                                            function r(t) {
                                                return this instanceof r
                                                    ? (a.call(this, t),
                                                      c.call(this, t),
                                                      (this.allowHalfOpen = !0),
                                                      void (t && (!1 === t.readable && (this.readable = !1), !1 === t.writable && (this.writable = !1), !1 === t.allowHalfOpen && ((this.allowHalfOpen = !1), this.once("end", i)))))
                                                    : new r(t);
                                            }
                                            function i() {
                                                this._writableState.ended || n.nextTick(s, this);
                                            }
                                            function s(t) {
                                                t.end();
                                            }
                                            var o =
                                                Object.keys ||
                                                function (t) {
                                                    var e = [];
                                                    for (var n in t) e.push(n);
                                                    return e;
                                                };
                                            e.exports = r;
                                            var a = t("./_stream_readable"),
                                                c = t("./_stream_writable");
                                            t("inherits")(r, a);
                                            for (var l, h = o(c.prototype), u = 0; u < h.length; u++) (l = h[u]), r.prototype[l] || (r.prototype[l] = c.prototype[l]);
                                            Object.defineProperty(r.prototype, "writableHighWaterMark", {
                                                enumerable: !1,
                                                get: function () {
                                                    return this._writableState.highWaterMark;
                                                },
                                            }),
                                                Object.defineProperty(r.prototype, "writableBuffer", {
                                                    enumerable: !1,
                                                    get: function () {
                                                        return this._writableState && this._writableState.getBuffer();
                                                    },
                                                }),
                                                Object.defineProperty(r.prototype, "writableLength", {
                                                    enumerable: !1,
                                                    get: function () {
                                                        return this._writableState.length;
                                                    },
                                                }),
                                                Object.defineProperty(r.prototype, "destroyed", {
                                                    enumerable: !1,
                                                    get: function () {
                                                        return void 0 !== this._readableState && void 0 !== this._writableState && this._readableState.destroyed && this._writableState.destroyed;
                                                    },
                                                    set: function (t) {
                                                        void 0 === this._readableState || void 0 === this._writableState || ((this._readableState.destroyed = t), (this._writableState.destroyed = t));
                                                    },
                                                });
                                        }.call(this));
                                    }.call(this, t("_process")));
                                },
                                { "./_stream_readable": 18, "./_stream_writable": 20, _process: 12, inherits: 10 },
                            ],
                            17: [
                                function (t, e) {
                                    "use strict";
                                    function n(t) {
                                        return this instanceof n ? void r.call(this, t) : new n(t);
                                    }
                                    e.exports = n;
                                    var r = t("./_stream_transform");
                                    t("inherits")(n, r),
                                        (n.prototype._transform = function (t, e, n) {
                                            n(null, t);
                                        });
                                },
                                { "./_stream_transform": 19, inherits: 10 },
                            ],
                            18: [
                                function (t, e) {
                                    (function (n, r) {
                                        (function () {
                                            "use strict";
                                            function i(e, n, r) {
                                                (E = E || t("./_stream_duplex")),
                                                    (e = e || {}),
                                                    "boolean" != typeof r && (r = n instanceof E),
                                                    (this.objectMode = !!e.objectMode),
                                                    r && (this.objectMode = this.objectMode || !!e.readableObjectMode),
                                                    (this.highWaterMark = N(this, e, "readableHighWaterMark", r)),
                                                    (this.buffer = new x()),
                                                    (this.length = 0),
                                                    (this.pipes = null),
                                                    (this.pipesCount = 0),
                                                    (this.flowing = null),
                                                    (this.ended = !1),
                                                    (this.endEmitted = !1),
                                                    (this.reading = !1),
                                                    (this.sync = !0),
                                                    (this.needReadable = !1),
                                                    (this.emittedReadable = !1),
                                                    (this.readableListening = !1),
                                                    (this.resumeScheduled = !1),
                                                    (this.paused = !0),
                                                    (this.emitClose = !1 !== e.emitClose),
                                                    (this.autoDestroy = !!e.autoDestroy),
                                                    (this.destroyed = !1),
                                                    (this.defaultEncoding = e.defaultEncoding || "utf8"),
                                                    (this.awaitDrain = 0),
                                                    (this.readingMore = !1),
                                                    (this.decoder = null),
                                                    (this.encoding = null),
                                                    e.encoding && (!D && (D = t("string_decoder/").StringDecoder), (this.decoder = new D(e.encoding)), (this.encoding = e.encoding));
                                            }
                                            function s(e) {
                                                if (((E = E || t("./_stream_duplex")), !(this instanceof s))) return new s(e);
                                                var n = this instanceof E;
                                                (this._readableState = new i(e, this, n)),
                                                    (this.readable = !0),
                                                    e && ("function" == typeof e.read && (this._read = e.read), "function" == typeof e.destroy && (this._destroy = e.destroy)),
                                                    k.call(this);
                                            }
                                            function o(t, e, n, r, i) {
                                                C("readableAddChunk", e);
                                                var s,
                                                    o = t._readableState;
                                                if (null === e)
                                                    (o.reading = !1),
                                                        (function (t, e) {
                                                            if ((C("onEofChunk"), !e.ended)) {
                                                                if (e.decoder) {
                                                                    var n = e.decoder.end();
                                                                    n && n.length && (e.buffer.push(n), (e.length += e.objectMode ? 1 : n.length));
                                                                }
                                                                (e.ended = !0), e.sync ? h(t) : ((e.needReadable = !1), !e.emittedReadable && ((e.emittedReadable = !0), u(t)));
                                                            }
                                                        })(t, o);
                                                else if ((i || (s = c(o, e)), s)) B(t, s);
                                                else if (o.objectMode || (e && 0 < e.length))
                                                    if (
                                                        ("string" == typeof e ||
                                                            o.objectMode ||
                                                            Object.getPrototypeOf(e) === R.prototype ||
                                                            (e = (function (t) {
                                                                return R.from(t);
                                                            })(e)),
                                                        r)
                                                    )
                                                        o.endEmitted ? B(t, new F()) : a(t, o, e, !0);
                                                    else if (o.ended) B(t, new P());
                                                    else {
                                                        if (o.destroyed) return !1;
                                                        (o.reading = !1), o.decoder && !n ? ((e = o.decoder.write(e)), o.objectMode || 0 !== e.length ? a(t, o, e, !1) : d(t, o)) : a(t, o, e, !1);
                                                    }
                                                else r || ((o.reading = !1), d(t, o));
                                                return !o.ended && (o.length < o.highWaterMark || 0 === o.length);
                                            }
                                            function a(t, e, n, r) {
                                                e.flowing && 0 === e.length && !e.sync
                                                    ? ((e.awaitDrain = 0), t.emit("data", n))
                                                    : ((e.length += e.objectMode ? 1 : n.length), r ? e.buffer.unshift(n) : e.buffer.push(n), e.needReadable && h(t)),
                                                    d(t, e);
                                            }
                                            function c(t, e) {
                                                var n;
                                                return (
                                                    (function (t) {
                                                        return R.isBuffer(t) || t instanceof A;
                                                    })(e) ||
                                                        "string" == typeof e ||
                                                        void 0 === e ||
                                                        t.objectMode ||
                                                        (n = new U("chunk", ["string", "Buffer", "Uint8Array"], e)),
                                                    n
                                                );
                                            }
                                            function l(t, e) {
                                                return 0 >= t || (0 === e.length && e.ended)
                                                    ? 0
                                                    : e.objectMode
                                                    ? 1
                                                    : t == t
                                                    ? (t > e.highWaterMark &&
                                                          (e.highWaterMark = (function (t) {
                                                              return 1073741824 <= t ? (t = 1073741824) : (t--, (t |= t >>> 1), (t |= t >>> 2), (t |= t >>> 4), (t |= t >>> 8), (t |= t >>> 16), t++), t;
                                                          })(t)),
                                                      t <= e.length ? t : e.ended ? e.length : ((e.needReadable = !0), 0))
                                                    : e.flowing && e.length
                                                    ? e.buffer.head.data.length
                                                    : e.length;
                                            }
                                            function h(t) {
                                                var e = t._readableState;
                                                C("emitReadable", e.needReadable, e.emittedReadable), (e.needReadable = !1), e.emittedReadable || (C("emitReadable", e.flowing), (e.emittedReadable = !0), n.nextTick(u, t));
                                            }
                                            function u(t) {
                                                var e = t._readableState;
                                                C("emitReadable_", e.destroyed, e.length, e.ended),
                                                    !e.destroyed && (e.length || e.ended) && (t.emit("readable"), (e.emittedReadable = !1)),
                                                    (e.needReadable = !e.flowing && !e.ended && e.length <= e.highWaterMark),
                                                    b(t);
                                            }
                                            function d(t, e) {
                                                e.readingMore || ((e.readingMore = !0), n.nextTick(f, t, e));
                                            }
                                            function f(t, e) {
                                                for (; !e.reading && !e.ended && (e.length < e.highWaterMark || (e.flowing && 0 === e.length)); ) {
                                                    var n = e.length;
                                                    if ((C("maybeReadMore read 0"), t.read(0), n === e.length)) break;
                                                }
                                                e.readingMore = !1;
                                            }
                                            function p(t) {
                                                var e = t._readableState;
                                                (e.readableListening = 0 < t.listenerCount("readable")), e.resumeScheduled && !e.paused ? (e.flowing = !0) : 0 < t.listenerCount("data") && t.resume();
                                            }
                                            function g(t) {
                                                C("readable nexttick read 0"), t.read(0);
                                            }
                                            function y(t, e) {
                                                C("resume", e.reading), e.reading || t.read(0), (e.resumeScheduled = !1), t.emit("resume"), b(t), e.flowing && !e.reading && t.read(0);
                                            }
                                            function b(t) {
                                                var e = t._readableState;
                                                for (C("flow", e.flowing); e.flowing && null !== t.read(); );
                                            }
                                            function w(t, e) {
                                                return 0 === e.length
                                                    ? null
                                                    : (e.objectMode
                                                          ? (n = e.buffer.shift())
                                                          : !t || t >= e.length
                                                          ? ((n = e.decoder ? e.buffer.join("") : 1 === e.buffer.length ? e.buffer.first() : e.buffer.concat(e.length)), e.buffer.clear())
                                                          : (n = e.buffer.consume(t, e.decoder)),
                                                      n);
                                                var n;
                                            }
                                            function m(t) {
                                                var e = t._readableState;
                                                C("endReadable", e.endEmitted), e.endEmitted || ((e.ended = !0), n.nextTick(_, e, t));
                                            }
                                            function _(t, e) {
                                                if ((C("endReadableNT", t.endEmitted, t.length), !t.endEmitted && 0 === t.length && ((t.endEmitted = !0), (e.readable = !1), e.emit("end"), t.autoDestroy))) {
                                                    var n = e._writableState;
                                                    (!n || (n.autoDestroy && n.finished)) && e.destroy();
                                                }
                                            }
                                            function v(t, e) {
                                                for (var n = 0, r = t.length; n < r; n++) if (t[n] === e) return n;
                                                return -1;
                                            }
                                            var E;
                                            (e.exports = s), (s.ReadableState = i), t("events").EventEmitter;
                                            var C,
                                                S = function (t, e) {
                                                    return t.listeners(e).length;
                                                },
                                                k = t("./internal/streams/stream"),
                                                R = t("buffer").Buffer,
                                                A = r.Uint8Array || function () {},
                                                T = t("util");
                                            C = T && T.debuglog ? T.debuglog("stream") : function () {};
                                            var D,
                                                O,
                                                L,
                                                x = t("./internal/streams/buffer_list"),
                                                I = t("./internal/streams/destroy"),
                                                N = t("./internal/streams/state").getHighWaterMark,
                                                M = t("../errors").codes,
                                                U = M.ERR_INVALID_ARG_TYPE,
                                                P = M.ERR_STREAM_PUSH_AFTER_EOF,
                                                j = M.ERR_METHOD_NOT_IMPLEMENTED,
                                                F = M.ERR_STREAM_UNSHIFT_AFTER_END_EVENT;
                                            t("inherits")(s, k);
                                            var B = I.errorOrDestroy,
                                                W = ["error", "close", "destroy", "pause", "resume"];
                                            Object.defineProperty(s.prototype, "destroyed", {
                                                enumerable: !1,
                                                get: function () {
                                                    return void 0 !== this._readableState && this._readableState.destroyed;
                                                },
                                                set: function (t) {
                                                    this._readableState && (this._readableState.destroyed = t);
                                                },
                                            }),
                                                (s.prototype.destroy = I.destroy),
                                                (s.prototype._undestroy = I.undestroy),
                                                (s.prototype._destroy = function (t, e) {
                                                    e(t);
                                                }),
                                                (s.prototype.push = function (t, e) {
                                                    var n,
                                                        r = this._readableState;
                                                    return r.objectMode ? (n = !0) : "string" == typeof t && ((e = e || r.defaultEncoding) !== r.encoding && ((t = R.from(t, e)), (e = "")), (n = !0)), o(this, t, e, !1, n);
                                                }),
                                                (s.prototype.unshift = function (t) {
                                                    return o(this, t, null, !0, !1);
                                                }),
                                                (s.prototype.isPaused = function () {
                                                    return !1 === this._readableState.flowing;
                                                }),
                                                (s.prototype.setEncoding = function (e) {
                                                    D || (D = t("string_decoder/").StringDecoder);
                                                    var n = new D(e);
                                                    (this._readableState.decoder = n), (this._readableState.encoding = this._readableState.decoder.encoding);
                                                    for (var r = this._readableState.buffer.head, i = ""; null !== r; ) (i += n.write(r.data)), (r = r.next);
                                                    return this._readableState.buffer.clear(), "" !== i && this._readableState.buffer.push(i), (this._readableState.length = i.length), this;
                                                }),
                                                (s.prototype.read = function (t) {
                                                    C("read", t), (t = parseInt(t, 10));
                                                    var e = this._readableState,
                                                        n = t;
                                                    if ((0 !== t && (e.emittedReadable = !1), 0 === t && e.needReadable && ((0 === e.highWaterMark ? 0 < e.length : e.length >= e.highWaterMark) || e.ended)))
                                                        return C("read: emitReadable", e.length, e.ended), 0 === e.length && e.ended ? m(this) : h(this), null;
                                                    if (0 === (t = l(t, e)) && e.ended) return 0 === e.length && m(this), null;
                                                    var r,
                                                        i = e.needReadable;
                                                    return (
                                                        C("need readable", i),
                                                        (0 === e.length || e.length - t < e.highWaterMark) && C("length less than watermark", (i = !0)),
                                                        e.ended || e.reading
                                                            ? C("reading or ended", (i = !1))
                                                            : i && (C("do read"), (e.reading = !0), (e.sync = !0), 0 === e.length && (e.needReadable = !0), this._read(e.highWaterMark), (e.sync = !1), !e.reading && (t = l(n, e))),
                                                        null === (r = 0 < t ? w(t, e) : null) ? ((e.needReadable = e.length <= e.highWaterMark), (t = 0)) : ((e.length -= t), (e.awaitDrain = 0)),
                                                        0 === e.length && (!e.ended && (e.needReadable = !0), n !== t && e.ended && m(this)),
                                                        null !== r && this.emit("data", r),
                                                        r
                                                    );
                                                }),
                                                (s.prototype._read = function () {
                                                    B(this, new j("_read()"));
                                                }),
                                                (s.prototype.pipe = function (t, e) {
                                                    function r(t, e) {
                                                        C("onunpipe"), t === u && e && !1 === e.hasUnpiped && ((e.hasUnpiped = !0), s());
                                                    }
                                                    function i() {
                                                        C("onend"), t.end();
                                                    }
                                                    function s() {
                                                        C("cleanup"),
                                                            t.removeListener("close", c),
                                                            t.removeListener("finish", l),
                                                            t.removeListener("drain", p),
                                                            t.removeListener("error", a),
                                                            t.removeListener("unpipe", r),
                                                            u.removeListener("end", i),
                                                            u.removeListener("end", h),
                                                            u.removeListener("data", o),
                                                            (g = !0),
                                                            d.awaitDrain && (!t._writableState || t._writableState.needDrain) && p();
                                                    }
                                                    function o(e) {
                                                        C("ondata");
                                                        var n = t.write(e);
                                                        C("dest.write", n),
                                                            !1 === n &&
                                                                (((1 === d.pipesCount && d.pipes === t) || (1 < d.pipesCount && -1 !== v(d.pipes, t))) && !g && (C("false write response, pause", d.awaitDrain), d.awaitDrain++), u.pause());
                                                    }
                                                    function a(e) {
                                                        C("onerror", e), h(), t.removeListener("error", a), 0 === S(t, "error") && B(t, e);
                                                    }
                                                    function c() {
                                                        t.removeListener("finish", l), h();
                                                    }
                                                    function l() {
                                                        C("onfinish"), t.removeListener("close", c), h();
                                                    }
                                                    function h() {
                                                        C("unpipe"), u.unpipe(t);
                                                    }
                                                    var u = this,
                                                        d = this._readableState;
                                                    switch (d.pipesCount) {
                                                        case 0:
                                                            d.pipes = t;
                                                            break;
                                                        case 1:
                                                            d.pipes = [d.pipes, t];
                                                            break;
                                                        default:
                                                            d.pipes.push(t);
                                                    }
                                                    (d.pipesCount += 1), C("pipe count=%d opts=%j", d.pipesCount, e);
                                                    var f = (e && !1 === e.end) || t === n.stdout || t === n.stderr ? h : i;
                                                    d.endEmitted ? n.nextTick(f) : u.once("end", f), t.on("unpipe", r);
                                                    var p = (function (t) {
                                                        return function () {
                                                            var e = t._readableState;
                                                            C("pipeOnDrain", e.awaitDrain), e.awaitDrain && e.awaitDrain--, 0 === e.awaitDrain && S(t, "data") && ((e.flowing = !0), b(t));
                                                        };
                                                    })(u);
                                                    t.on("drain", p);
                                                    var g = !1;
                                                    return (
                                                        u.on("data", o),
                                                        (function (t, e, n) {
                                                            "function" == typeof t.prependListener
                                                                ? t.prependListener(e, n)
                                                                : t._events && t._events[e]
                                                                ? Array.isArray(t._events[e])
                                                                    ? t._events[e].unshift(n)
                                                                    : (t._events[e] = [n, t._events[e]])
                                                                : t.on(e, n);
                                                        })(t, "error", a),
                                                        t.once("close", c),
                                                        t.once("finish", l),
                                                        t.emit("pipe", u),
                                                        d.flowing || (C("pipe resume"), u.resume()),
                                                        t
                                                    );
                                                }),
                                                (s.prototype.unpipe = function (t) {
                                                    var e = this._readableState,
                                                        n = { hasUnpiped: !1 };
                                                    if (0 === e.pipesCount) return this;
                                                    if (1 === e.pipesCount) return (t && t !== e.pipes) || (t || (t = e.pipes), (e.pipes = null), (e.pipesCount = 0), (e.flowing = !1), t && t.emit("unpipe", this, n)), this;
                                                    if (!t) {
                                                        var r = e.pipes,
                                                            i = e.pipesCount;
                                                        (e.pipes = null), (e.pipesCount = 0), (e.flowing = !1);
                                                        for (var s = 0; s < i; s++) r[s].emit("unpipe", this, { hasUnpiped: !1 });
                                                        return this;
                                                    }
                                                    var o = v(e.pipes, t);
                                                    return -1 === o || (e.pipes.splice(o, 1), (e.pipesCount -= 1), 1 === e.pipesCount && (e.pipes = e.pipes[0]), t.emit("unpipe", this, n)), this;
                                                }),
                                                (s.prototype.on = function (t, e) {
                                                    var r = k.prototype.on.call(this, t, e),
                                                        i = this._readableState;
                                                    return (
                                                        "data" === t
                                                            ? ((i.readableListening = 0 < this.listenerCount("readable")), !1 !== i.flowing && this.resume())
                                                            : "readable" == t &&
                                                              !i.endEmitted &&
                                                              !i.readableListening &&
                                                              ((i.readableListening = i.needReadable = !0),
                                                              (i.flowing = !1),
                                                              (i.emittedReadable = !1),
                                                              C("on readable", i.length, i.reading),
                                                              i.length ? h(this) : !i.reading && n.nextTick(g, this)),
                                                        r
                                                    );
                                                }),
                                                (s.prototype.addListener = s.prototype.on),
                                                (s.prototype.removeListener = function (t, e) {
                                                    var r = k.prototype.removeListener.call(this, t, e);
                                                    return "readable" === t && n.nextTick(p, this), r;
                                                }),
                                                (s.prototype.removeAllListeners = function (t) {
                                                    var e = k.prototype.removeAllListeners.apply(this, arguments);
                                                    return ("readable" === t || void 0 === t) && n.nextTick(p, this), e;
                                                }),
                                                (s.prototype.resume = function () {
                                                    var t = this._readableState;
                                                    return (
                                                        t.flowing ||
                                                            (C("resume"),
                                                            (t.flowing = !t.readableListening),
                                                            (function (t, e) {
                                                                e.resumeScheduled || ((e.resumeScheduled = !0), n.nextTick(y, t, e));
                                                            })(this, t)),
                                                        (t.paused = !1),
                                                        this
                                                    );
                                                }),
                                                (s.prototype.pause = function () {
                                                    return (
                                                        C("call pause flowing=%j", this._readableState.flowing),
                                                        !1 !== this._readableState.flowing && (C("pause"), (this._readableState.flowing = !1), this.emit("pause")),
                                                        (this._readableState.paused = !0),
                                                        this
                                                    );
                                                }),
                                                (s.prototype.wrap = function (t) {
                                                    var e = this,
                                                        n = this._readableState,
                                                        r = !1;
                                                    for (var i in (t.on("end", function () {
                                                        if ((C("wrapped end"), n.decoder && !n.ended)) {
                                                            var t = n.decoder.end();
                                                            t && t.length && e.push(t);
                                                        }
                                                        e.push(null);
                                                    }),
                                                    t.on("data", function (i) {
                                                        C("wrapped data"), n.decoder && (i = n.decoder.write(i)), (n.objectMode && null == i) || !(n.objectMode || (i && i.length)) || e.push(i) || ((r = !0), t.pause());
                                                    }),
                                                    t))
                                                        void 0 === this[i] &&
                                                            "function" == typeof t[i] &&
                                                            (this[i] = (function (e) {
                                                                return function () {
                                                                    return t[e].apply(t, arguments);
                                                                };
                                                            })(i));
                                                    for (var s = 0; s < W.length; s++) t.on(W[s], this.emit.bind(this, W[s]));
                                                    return (
                                                        (this._read = function (e) {
                                                            C("wrapped _read", e), r && ((r = !1), t.resume());
                                                        }),
                                                        this
                                                    );
                                                }),
                                                "function" == typeof Symbol &&
                                                    (s.prototype[Symbol.asyncIterator] = function () {
                                                        return void 0 === O && (O = t("./internal/streams/async_iterator")), O(this);
                                                    }),
                                                Object.defineProperty(s.prototype, "readableHighWaterMark", {
                                                    enumerable: !1,
                                                    get: function () {
                                                        return this._readableState.highWaterMark;
                                                    },
                                                }),
                                                Object.defineProperty(s.prototype, "readableBuffer", {
                                                    enumerable: !1,
                                                    get: function () {
                                                        return this._readableState && this._readableState.buffer;
                                                    },
                                                }),
                                                Object.defineProperty(s.prototype, "readableFlowing", {
                                                    enumerable: !1,
                                                    get: function () {
                                                        return this._readableState.flowing;
                                                    },
                                                    set: function (t) {
                                                        this._readableState && (this._readableState.flowing = t);
                                                    },
                                                }),
                                                (s._fromList = w),
                                                Object.defineProperty(s.prototype, "readableLength", {
                                                    enumerable: !1,
                                                    get: function () {
                                                        return this._readableState.length;
                                                    },
                                                }),
                                                "function" == typeof Symbol &&
                                                    (s.from = function (e, n) {
                                                        return void 0 === L && (L = t("./internal/streams/from")), L(s, e, n);
                                                    });
                                        }.call(this));
                                    }.call(this, t("_process"), void 0 === n.g ? ("undefined" == typeof self ? ("undefined" == typeof window ? {} : window) : self) : n.g));
                                },
                                {
                                    "../errors": 15,
                                    "./_stream_duplex": 16,
                                    "./internal/streams/async_iterator": 21,
                                    "./internal/streams/buffer_list": 22,
                                    "./internal/streams/destroy": 23,
                                    "./internal/streams/from": 25,
                                    "./internal/streams/state": 27,
                                    "./internal/streams/stream": 28,
                                    _process: 12,
                                    buffer: 3,
                                    events: 7,
                                    inherits: 10,
                                    "string_decoder/": 31,
                                    util: 2,
                                },
                            ],
                            19: [
                                function (t, e) {
                                    "use strict";
                                    function n(t, e) {
                                        var n = this._transformState;
                                        n.transforming = !1;
                                        var r = n.writecb;
                                        if (null === r) return this.emit("error", new c());
                                        (n.writechunk = null), (n.writecb = null), null != e && this.push(e), r(t);
                                        var i = this._readableState;
                                        (i.reading = !1), (i.needReadable || i.length < i.highWaterMark) && this._read(i.highWaterMark);
                                    }
                                    function r(t) {
                                        return this instanceof r
                                            ? (u.call(this, t),
                                              (this._transformState = { afterTransform: n.bind(this), needTransform: !1, transforming: !1, writecb: null, writechunk: null, writeencoding: null }),
                                              (this._readableState.needReadable = !0),
                                              (this._readableState.sync = !1),
                                              t && ("function" == typeof t.transform && (this._transform = t.transform), "function" == typeof t.flush && (this._flush = t.flush)),
                                              void this.on("prefinish", i))
                                            : new r(t);
                                    }
                                    function i() {
                                        var t = this;
                                        "function" != typeof this._flush || this._readableState.destroyed
                                            ? s(this, null, null)
                                            : this._flush(function (e, n) {
                                                  s(t, e, n);
                                              });
                                    }
                                    function s(t, e, n) {
                                        if (e) return t.emit("error", e);
                                        if ((null != n && t.push(n), t._writableState.length)) throw new h();
                                        if (t._transformState.transforming) throw new l();
                                        return t.push(null);
                                    }
                                    e.exports = r;
                                    var o = t("../errors").codes,
                                        a = o.ERR_METHOD_NOT_IMPLEMENTED,
                                        c = o.ERR_MULTIPLE_CALLBACK,
                                        l = o.ERR_TRANSFORM_ALREADY_TRANSFORMING,
                                        h = o.ERR_TRANSFORM_WITH_LENGTH_0,
                                        u = t("./_stream_duplex");
                                    t("inherits")(r, u),
                                        (r.prototype.push = function (t, e) {
                                            return (this._transformState.needTransform = !1), u.prototype.push.call(this, t, e);
                                        }),
                                        (r.prototype._transform = function (t, e, n) {
                                            n(new a("_transform()"));
                                        }),
                                        (r.prototype._write = function (t, e, n) {
                                            var r = this._transformState;
                                            if (((r.writecb = n), (r.writechunk = t), (r.writeencoding = e), !r.transforming)) {
                                                var i = this._readableState;
                                                (r.needTransform || i.needReadable || i.length < i.highWaterMark) && this._read(i.highWaterMark);
                                            }
                                        }),
                                        (r.prototype._read = function () {
                                            var t = this._transformState;
                                            null === t.writechunk || t.transforming ? (t.needTransform = !0) : ((t.transforming = !0), this._transform(t.writechunk, t.writeencoding, t.afterTransform));
                                        }),
                                        (r.prototype._destroy = function (t, e) {
                                            u.prototype._destroy.call(this, t, function (t) {
                                                e(t);
                                            });
                                        });
                                },
                                { "../errors": 15, "./_stream_duplex": 16, inherits: 10 },
                            ],
                            20: [
                                function (t, e) {
                                    (function (n, r) {
                                        (function () {
                                            "use strict";
                                            function i(t) {
                                                var e = this;
                                                (this.next = null),
                                                    (this.entry = null),
                                                    (this.finish = function () {
                                                        !(function (t, e, n) {
                                                            var r = t.entry;
                                                            for (t.entry = null; r; ) {
                                                                var i = r.callback;
                                                                e.pendingcb--, i(n), (r = r.next);
                                                            }
                                                            e.corkedRequestsFree.next = t;
                                                        })(e, t);
                                                    });
                                            }
                                            function s() {}
                                            function o(e, n, r) {
                                                (_ = _ || t("./_stream_duplex")),
                                                    (e = e || {}),
                                                    "boolean" != typeof r && (r = n instanceof _),
                                                    (this.objectMode = !!e.objectMode),
                                                    r && (this.objectMode = this.objectMode || !!e.writableObjectMode),
                                                    (this.highWaterMark = A(this, e, "writableHighWaterMark", r)),
                                                    (this.finalCalled = !1),
                                                    (this.needDrain = !1),
                                                    (this.ending = !1),
                                                    (this.ended = !1),
                                                    (this.finished = !1),
                                                    (this.destroyed = !1);
                                                var s = !1 === e.decodeStrings;
                                                (this.decodeStrings = !s),
                                                    (this.defaultEncoding = e.defaultEncoding || "utf8"),
                                                    (this.length = 0),
                                                    (this.writing = !1),
                                                    (this.corked = 0),
                                                    (this.sync = !0),
                                                    (this.bufferProcessing = !1),
                                                    (this.onwrite = function (t) {
                                                        d(n, t);
                                                    }),
                                                    (this.writecb = null),
                                                    (this.writelen = 0),
                                                    (this.bufferedRequest = null),
                                                    (this.lastBufferedRequest = null),
                                                    (this.pendingcb = 0),
                                                    (this.prefinished = !1),
                                                    (this.errorEmitted = !1),
                                                    (this.emitClose = !1 !== e.emitClose),
                                                    (this.autoDestroy = !!e.autoDestroy),
                                                    (this.bufferedRequestCount = 0),
                                                    (this.corkedRequestsFree = new i(this));
                                            }
                                            function a(e) {
                                                var n = this instanceof (_ = _ || t("./_stream_duplex"));
                                                return n || v.call(a, this)
                                                    ? ((this._writableState = new o(e, this, n)),
                                                      (this.writable = !0),
                                                      e &&
                                                          ("function" == typeof e.write && (this._write = e.write),
                                                          "function" == typeof e.writev && (this._writev = e.writev),
                                                          "function" == typeof e.destroy && (this._destroy = e.destroy),
                                                          "function" == typeof e.final && (this._final = e.final)),
                                                      void C.call(this))
                                                    : new a(e);
                                            }
                                            function c(t, e) {
                                                var r = new M();
                                                P(t, r), n.nextTick(e, r);
                                            }
                                            function l(t, e, r, i) {
                                                var s;
                                                return null === r ? (s = new N()) : "string" != typeof r && !e.objectMode && (s = new D("chunk", ["string", "Buffer"], r)), !s || (P(t, s), n.nextTick(i, s), !1);
                                            }
                                            function h(t, e, n, r, i, s) {
                                                if (!n) {
                                                    var o = (function (t, e, n) {
                                                        return t.objectMode || !1 === t.decodeStrings || "string" != typeof e || (e = S.from(e, n)), e;
                                                    })(e, r, i);
                                                    r !== o && ((n = !0), (i = "buffer"), (r = o));
                                                }
                                                var a = e.objectMode ? 1 : r.length;
                                                e.length += a;
                                                var c = e.length < e.highWaterMark;
                                                if ((c || (e.needDrain = !0), e.writing || e.corked)) {
                                                    var l = e.lastBufferedRequest;
                                                    (e.lastBufferedRequest = { chunk: r, encoding: i, isBuf: n, callback: s, next: null }),
                                                        l ? (l.next = e.lastBufferedRequest) : (e.bufferedRequest = e.lastBufferedRequest),
                                                        (e.bufferedRequestCount += 1);
                                                } else u(t, e, !1, a, r, i, s);
                                                return c;
                                            }
                                            function u(t, e, n, r, i, s, o) {
                                                (e.writelen = r), (e.writecb = o), (e.writing = !0), (e.sync = !0), e.destroyed ? e.onwrite(new I("write")) : n ? t._writev(i, e.onwrite) : t._write(i, s, e.onwrite), (e.sync = !1);
                                            }
                                            function d(t, e) {
                                                var r = t._writableState,
                                                    i = r.sync,
                                                    s = r.writecb;
                                                if ("function" != typeof s) throw new L();
                                                if (
                                                    ((function (t) {
                                                        (t.writing = !1), (t.writecb = null), (t.length -= t.writelen), (t.writelen = 0);
                                                    })(r),
                                                    e)
                                                )
                                                    !(function (t, e, r, i, s) {
                                                        --e.pendingcb, r ? (n.nextTick(s, i), n.nextTick(w, t, e), (t._writableState.errorEmitted = !0), P(t, i)) : (s(i), (t._writableState.errorEmitted = !0), P(t, i), w(t, e));
                                                    })(t, r, i, e, s);
                                                else {
                                                    var o = g(r) || t.destroyed;
                                                    o || r.corked || r.bufferProcessing || !r.bufferedRequest || p(t, r), i ? n.nextTick(f, t, r, o, s) : f(t, r, o, s);
                                                }
                                            }
                                            function f(t, e, n, r) {
                                                n ||
                                                    (function (t, e) {
                                                        0 === e.length && e.needDrain && ((e.needDrain = !1), t.emit("drain"));
                                                    })(t, e),
                                                    e.pendingcb--,
                                                    r(),
                                                    w(t, e);
                                            }
                                            function p(t, e) {
                                                e.bufferProcessing = !0;
                                                var n = e.bufferedRequest;
                                                if (t._writev && n && n.next) {
                                                    var r = e.bufferedRequestCount,
                                                        s = Array(r),
                                                        o = e.corkedRequestsFree;
                                                    o.entry = n;
                                                    for (var a = 0, c = !0; n; ) (s[a] = n), n.isBuf || (c = !1), (n = n.next), (a += 1);
                                                    (s.allBuffers = c),
                                                        u(t, e, !0, e.length, s, "", o.finish),
                                                        e.pendingcb++,
                                                        (e.lastBufferedRequest = null),
                                                        o.next ? ((e.corkedRequestsFree = o.next), (o.next = null)) : (e.corkedRequestsFree = new i(e)),
                                                        (e.bufferedRequestCount = 0);
                                                } else {
                                                    for (; n; ) {
                                                        var l = n.chunk,
                                                            h = n.encoding,
                                                            d = n.callback;
                                                        if ((u(t, e, !1, e.objectMode ? 1 : l.length, l, h, d), (n = n.next), e.bufferedRequestCount--, e.writing)) break;
                                                    }
                                                    null === n && (e.lastBufferedRequest = null);
                                                }
                                                (e.bufferedRequest = n), (e.bufferProcessing = !1);
                                            }
                                            function g(t) {
                                                return t.ending && 0 === t.length && null === t.bufferedRequest && !t.finished && !t.writing;
                                            }
                                            function y(t, e) {
                                                t._final(function (n) {
                                                    e.pendingcb--, n && P(t, n), (e.prefinished = !0), t.emit("prefinish"), w(t, e);
                                                });
                                            }
                                            function b(t, e) {
                                                e.prefinished || e.finalCalled || ("function" != typeof t._final || e.destroyed ? ((e.prefinished = !0), t.emit("prefinish")) : (e.pendingcb++, (e.finalCalled = !0), n.nextTick(y, t, e)));
                                            }
                                            function w(t, e) {
                                                var n = g(e);
                                                if (n && (b(t, e), 0 === e.pendingcb && ((e.finished = !0), t.emit("finish"), e.autoDestroy))) {
                                                    var r = t._readableState;
                                                    (!r || (r.autoDestroy && r.endEmitted)) && t.destroy();
                                                }
                                                return n;
                                            }
                                            function m(t, e, r) {
                                                (e.ending = !0), w(t, e), r && (e.finished ? n.nextTick(r) : t.once("finish", r)), (e.ended = !0), (t.writable = !1);
                                            }
                                            var _;
                                            (e.exports = a), (a.WritableState = o);
                                            var v,
                                                E = { deprecate: t("util-deprecate") },
                                                C = t("./internal/streams/stream"),
                                                S = t("buffer").Buffer,
                                                k = r.Uint8Array || function () {},
                                                R = t("./internal/streams/destroy"),
                                                A = t("./internal/streams/state").getHighWaterMark,
                                                T = t("../errors").codes,
                                                D = T.ERR_INVALID_ARG_TYPE,
                                                O = T.ERR_METHOD_NOT_IMPLEMENTED,
                                                L = T.ERR_MULTIPLE_CALLBACK,
                                                x = T.ERR_STREAM_CANNOT_PIPE,
                                                I = T.ERR_STREAM_DESTROYED,
                                                N = T.ERR_STREAM_NULL_VALUES,
                                                M = T.ERR_STREAM_WRITE_AFTER_END,
                                                U = T.ERR_UNKNOWN_ENCODING,
                                                P = R.errorOrDestroy;
                                            t("inherits")(a, C),
                                                (o.prototype.getBuffer = function () {
                                                    for (var t = this.bufferedRequest, e = []; t; ) e.push(t), (t = t.next);
                                                    return e;
                                                }),
                                                (function () {
                                                    try {
                                                        Object.defineProperty(o.prototype, "buffer", {
                                                            get: E.deprecate(
                                                                function () {
                                                                    return this.getBuffer();
                                                                },
                                                                "_writableState.buffer is deprecated. Use _writableState.getBuffer instead.",
                                                                "DEP0003"
                                                            ),
                                                        });
                                                    } catch (t) {}
                                                })(),
                                                "function" == typeof Symbol && Symbol.hasInstance && "function" == typeof Function.prototype[Symbol.hasInstance]
                                                    ? ((v = Function.prototype[Symbol.hasInstance]),
                                                      Object.defineProperty(a, Symbol.hasInstance, {
                                                          value: function (t) {
                                                              return !!v.call(this, t) || (!(this !== a) && t && t._writableState instanceof o);
                                                          },
                                                      }))
                                                    : (v = function (t) {
                                                          return t instanceof this;
                                                      }),
                                                (a.prototype.pipe = function () {
                                                    P(this, new x());
                                                }),
                                                (a.prototype.write = function (t, e, n) {
                                                    var r = this._writableState,
                                                        i = !1,
                                                        o =
                                                            !r.objectMode &&
                                                            (function (t) {
                                                                return S.isBuffer(t) || t instanceof k;
                                                            })(t);
                                                    return (
                                                        o &&
                                                            !S.isBuffer(t) &&
                                                            (t = (function (t) {
                                                                return S.from(t);
                                                            })(t)),
                                                        "function" == typeof e && ((n = e), (e = null)),
                                                        o ? (e = "buffer") : !e && (e = r.defaultEncoding),
                                                        "function" != typeof n && (n = s),
                                                        r.ending ? c(this, n) : (o || l(this, r, t, n)) && (r.pendingcb++, (i = h(this, r, o, t, e, n))),
                                                        i
                                                    );
                                                }),
                                                (a.prototype.cork = function () {
                                                    this._writableState.corked++;
                                                }),
                                                (a.prototype.uncork = function () {
                                                    var t = this._writableState;
                                                    t.corked && (t.corked--, !t.writing && !t.corked && !t.bufferProcessing && t.bufferedRequest && p(this, t));
                                                }),
                                                (a.prototype.setDefaultEncoding = function (t) {
                                                    if (
                                                        ("string" == typeof t && (t = t.toLowerCase()),
                                                        !(-1 < ["hex", "utf8", "utf-8", "ascii", "binary", "base64", "ucs2", "ucs-2", "utf16le", "utf-16le", "raw"].indexOf((t + "").toLowerCase())))
                                                    )
                                                        throw new U(t);
                                                    return (this._writableState.defaultEncoding = t), this;
                                                }),
                                                Object.defineProperty(a.prototype, "writableBuffer", {
                                                    enumerable: !1,
                                                    get: function () {
                                                        return this._writableState && this._writableState.getBuffer();
                                                    },
                                                }),
                                                Object.defineProperty(a.prototype, "writableHighWaterMark", {
                                                    enumerable: !1,
                                                    get: function () {
                                                        return this._writableState.highWaterMark;
                                                    },
                                                }),
                                                (a.prototype._write = function (t, e, n) {
                                                    n(new O("_write()"));
                                                }),
                                                (a.prototype._writev = null),
                                                (a.prototype.end = function (t, e, n) {
                                                    var r = this._writableState;
                                                    return (
                                                        "function" == typeof t ? ((n = t), (t = null), (e = null)) : "function" == typeof e && ((n = e), (e = null)),
                                                        null != t && this.write(t, e),
                                                        r.corked && ((r.corked = 1), this.uncork()),
                                                        r.ending || m(this, r, n),
                                                        this
                                                    );
                                                }),
                                                Object.defineProperty(a.prototype, "writableLength", {
                                                    enumerable: !1,
                                                    get: function () {
                                                        return this._writableState.length;
                                                    },
                                                }),
                                                Object.defineProperty(a.prototype, "destroyed", {
                                                    enumerable: !1,
                                                    get: function () {
                                                        return void 0 !== this._writableState && this._writableState.destroyed;
                                                    },
                                                    set: function (t) {
                                                        this._writableState && (this._writableState.destroyed = t);
                                                    },
                                                }),
                                                (a.prototype.destroy = R.destroy),
                                                (a.prototype._undestroy = R.undestroy),
                                                (a.prototype._destroy = function (t, e) {
                                                    e(t);
                                                });
                                        }.call(this));
                                    }.call(this, t("_process"), void 0 === n.g ? ("undefined" == typeof self ? ("undefined" == typeof window ? {} : window) : self) : n.g));
                                },
                                { "../errors": 15, "./_stream_duplex": 16, "./internal/streams/destroy": 23, "./internal/streams/state": 27, "./internal/streams/stream": 28, _process: 12, buffer: 3, inherits: 10, "util-deprecate": 32 },
                            ],
                            21: [
                                function (t, e) {
                                    (function (n) {
                                        (function () {
                                            "use strict";
                                            function r(t, e, n) {
                                                return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (t[e] = n), t;
                                            }
                                            function i(t, e) {
                                                return { value: t, done: e };
                                            }
                                            function s(t) {
                                                var e = t[l];
                                                if (null !== e) {
                                                    var n = t[g].read();
                                                    null !== n && ((t[f] = null), (t[l] = null), (t[h] = null), e(i(n, !1)));
                                                }
                                            }
                                            function o(t) {
                                                n.nextTick(s, t);
                                            }
                                            var a,
                                                c = t("./end-of-stream"),
                                                l = Symbol("lastResolve"),
                                                h = Symbol("lastReject"),
                                                u = Symbol("error"),
                                                d = Symbol("ended"),
                                                f = Symbol("lastPromise"),
                                                p = Symbol("handlePromise"),
                                                g = Symbol("stream"),
                                                y = Object.getPrototypeOf(function () {}),
                                                b = Object.setPrototypeOf(
                                                    ((a = {
                                                        get stream() {
                                                            return this[g];
                                                        },
                                                        next: function () {
                                                            var t = this,
                                                                e = this[u];
                                                            if (null !== e) return Promise.reject(e);
                                                            if (this[d]) return Promise.resolve(i(void 0, !0));
                                                            if (this[g].destroyed)
                                                                return new Promise(function (e, r) {
                                                                    n.nextTick(function () {
                                                                        t[u] ? r(t[u]) : e(i(void 0, !0));
                                                                    });
                                                                });
                                                            var r,
                                                                s = this[f];
                                                            if (s)
                                                                r = new Promise(
                                                                    (function (t, e) {
                                                                        return function (n, r) {
                                                                            t.then(function () {
                                                                                return e[d] ? void n(i(void 0, !0)) : void e[p](n, r);
                                                                            }, r);
                                                                        };
                                                                    })(s, this)
                                                                );
                                                            else {
                                                                var o = this[g].read();
                                                                if (null !== o) return Promise.resolve(i(o, !1));
                                                                r = new Promise(this[p]);
                                                            }
                                                            return (this[f] = r), r;
                                                        },
                                                    }),
                                                    r(a, Symbol.asyncIterator, function () {
                                                        return this;
                                                    }),
                                                    r(a, "return", function () {
                                                        var t = this;
                                                        return new Promise(function (e, n) {
                                                            t[g].destroy(null, function (t) {
                                                                return t ? void n(t) : void e(i(void 0, !0));
                                                            });
                                                        });
                                                    }),
                                                    a),
                                                    y
                                                );
                                            e.exports = function (t) {
                                                var e,
                                                    n = Object.create(
                                                        b,
                                                        (r((e = {}), g, { value: t, writable: !0 }),
                                                        r(e, l, { value: null, writable: !0 }),
                                                        r(e, h, { value: null, writable: !0 }),
                                                        r(e, u, { value: null, writable: !0 }),
                                                        r(e, d, { value: t._readableState.endEmitted, writable: !0 }),
                                                        r(e, p, {
                                                            value: function (t, e) {
                                                                var r = n[g].read();
                                                                r ? ((n[f] = null), (n[l] = null), (n[h] = null), t(i(r, !1))) : ((n[l] = t), (n[h] = e));
                                                            },
                                                            writable: !0,
                                                        }),
                                                        e)
                                                    );
                                                return (
                                                    (n[f] = null),
                                                    c(t, function (t) {
                                                        if (t && "ERR_STREAM_PREMATURE_CLOSE" !== t.code) {
                                                            var e = n[h];
                                                            return null !== e && ((n[f] = null), (n[l] = null), (n[h] = null), e(t)), void (n[u] = t);
                                                        }
                                                        var r = n[l];
                                                        null !== r && ((n[f] = null), (n[l] = null), (n[h] = null), r(i(void 0, !0))), (n[d] = !0);
                                                    }),
                                                    t.on("readable", o.bind(null, n)),
                                                    n
                                                );
                                            };
                                        }.call(this));
                                    }.call(this, t("_process")));
                                },
                                { "./end-of-stream": 24, _process: 12 },
                            ],
                            22: [
                                function (t, e) {
                                    "use strict";
                                    function n(t, e) {
                                        var n = Object.keys(t);
                                        if (Object.getOwnPropertySymbols) {
                                            var r = Object.getOwnPropertySymbols(t);
                                            e &&
                                                (r = r.filter(function (e) {
                                                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                                                })),
                                                n.push.apply(n, r);
                                        }
                                        return n;
                                    }
                                    function r(t, e, n) {
                                        return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (t[e] = n), t;
                                    }
                                    function i(t, e) {
                                        for (var n, r = 0; r < e.length; r++) ((n = e[r]).enumerable = n.enumerable || !1), (n.configurable = !0), "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n);
                                    }
                                    function s(t, e, n) {
                                        o.prototype.copy.call(t, e, n);
                                    }
                                    var o = t("buffer").Buffer,
                                        a = t("util").inspect,
                                        c = (a && a.custom) || "inspect";
                                    e.exports = (function () {
                                        function t() {
                                            (function (t, e) {
                                                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                                            })(this, t),
                                                (this.head = null),
                                                (this.tail = null),
                                                (this.length = 0);
                                        }
                                        return (
                                            (function (t, e, n) {
                                                e && i(t.prototype, e), n && i(t, n);
                                            })(t, [
                                                {
                                                    key: "push",
                                                    value: function (t) {
                                                        var e = { data: t, next: null };
                                                        0 < this.length ? (this.tail.next = e) : (this.head = e), (this.tail = e), ++this.length;
                                                    },
                                                },
                                                {
                                                    key: "unshift",
                                                    value: function (t) {
                                                        var e = { data: t, next: this.head };
                                                        0 === this.length && (this.tail = e), (this.head = e), ++this.length;
                                                    },
                                                },
                                                {
                                                    key: "shift",
                                                    value: function () {
                                                        if (0 !== this.length) {
                                                            var t = this.head.data;
                                                            return (this.head = 1 === this.length ? (this.tail = null) : this.head.next), --this.length, t;
                                                        }
                                                    },
                                                },
                                                {
                                                    key: "clear",
                                                    value: function () {
                                                        (this.head = this.tail = null), (this.length = 0);
                                                    },
                                                },
                                                {
                                                    key: "join",
                                                    value: function (t) {
                                                        if (0 === this.length) return "";
                                                        for (var e = this.head, n = "" + e.data; (e = e.next); ) n += t + e.data;
                                                        return n;
                                                    },
                                                },
                                                {
                                                    key: "concat",
                                                    value: function (t) {
                                                        if (0 === this.length) return o.alloc(0);
                                                        for (var e = o.allocUnsafe(t >>> 0), n = this.head, r = 0; n; ) s(n.data, e, r), (r += n.data.length), (n = n.next);
                                                        return e;
                                                    },
                                                },
                                                {
                                                    key: "consume",
                                                    value: function (t, e) {
                                                        var n;
                                                        return (
                                                            t < this.head.data.length
                                                                ? ((n = this.head.data.slice(0, t)), (this.head.data = this.head.data.slice(t)))
                                                                : (n = t === this.head.data.length ? this.shift() : e ? this._getString(t) : this._getBuffer(t)),
                                                            n
                                                        );
                                                    },
                                                },
                                                {
                                                    key: "first",
                                                    value: function () {
                                                        return this.head.data;
                                                    },
                                                },
                                                {
                                                    key: "_getString",
                                                    value: function (t) {
                                                        var e = this.head,
                                                            n = 1,
                                                            r = e.data;
                                                        for (t -= r.length; (e = e.next); ) {
                                                            var i = e.data,
                                                                s = t > i.length ? i.length : t;
                                                            if (((r += s === i.length ? i : i.slice(0, t)), 0 == (t -= s))) {
                                                                s === i.length ? (++n, (this.head = e.next ? e.next : (this.tail = null))) : ((this.head = e), (e.data = i.slice(s)));
                                                                break;
                                                            }
                                                            ++n;
                                                        }
                                                        return (this.length -= n), r;
                                                    },
                                                },
                                                {
                                                    key: "_getBuffer",
                                                    value: function (t) {
                                                        var e = o.allocUnsafe(t),
                                                            n = this.head,
                                                            r = 1;
                                                        for (n.data.copy(e), t -= n.data.length; (n = n.next); ) {
                                                            var i = n.data,
                                                                s = t > i.length ? i.length : t;
                                                            if ((i.copy(e, e.length - t, 0, s), 0 == (t -= s))) {
                                                                s === i.length ? (++r, (this.head = n.next ? n.next : (this.tail = null))) : ((this.head = n), (n.data = i.slice(s)));
                                                                break;
                                                            }
                                                            ++r;
                                                        }
                                                        return (this.length -= r), e;
                                                    },
                                                },
                                                {
                                                    key: c,
                                                    value: function (t, e) {
                                                        return a(
                                                            this,
                                                            (function (t) {
                                                                for (var e, i = 1; i < arguments.length; i++)
                                                                    (e = null == arguments[i] ? {} : arguments[i]),
                                                                        i % 2
                                                                            ? n(Object(e), !0).forEach(function (n) {
                                                                                  r(t, n, e[n]);
                                                                              })
                                                                            : Object.getOwnPropertyDescriptors
                                                                            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e))
                                                                            : n(Object(e)).forEach(function (n) {
                                                                                  Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(e, n));
                                                                              });
                                                                return t;
                                                            })({}, e, { depth: 0, customInspect: !1 })
                                                        );
                                                    },
                                                },
                                            ]),
                                            t
                                        );
                                    })();
                                },
                                { buffer: 3, util: 2 },
                            ],
                            23: [
                                function (t, e) {
                                    (function (t) {
                                        (function () {
                                            "use strict";
                                            function n(t, e) {
                                                i(t, e), r(t);
                                            }
                                            function r(t) {
                                                (t._writableState && !t._writableState.emitClose) || (t._readableState && !t._readableState.emitClose) || t.emit("close");
                                            }
                                            function i(t, e) {
                                                t.emit("error", e);
                                            }
                                            e.exports = {
                                                destroy: function (e, s) {
                                                    var o = this,
                                                        a = this._readableState && this._readableState.destroyed,
                                                        c = this._writableState && this._writableState.destroyed;
                                                    return a || c
                                                        ? (s ? s(e) : e && (this._writableState ? !this._writableState.errorEmitted && ((this._writableState.errorEmitted = !0), t.nextTick(i, this, e)) : t.nextTick(i, this, e)), this)
                                                        : (this._readableState && (this._readableState.destroyed = !0),
                                                          this._writableState && (this._writableState.destroyed = !0),
                                                          this._destroy(e || null, function (e) {
                                                              !s && e
                                                                  ? o._writableState
                                                                      ? o._writableState.errorEmitted
                                                                          ? t.nextTick(r, o)
                                                                          : ((o._writableState.errorEmitted = !0), t.nextTick(n, o, e))
                                                                      : t.nextTick(n, o, e)
                                                                  : s
                                                                  ? (t.nextTick(r, o), s(e))
                                                                  : t.nextTick(r, o);
                                                          }),
                                                          this);
                                                },
                                                undestroy: function () {
                                                    this._readableState && ((this._readableState.destroyed = !1), (this._readableState.reading = !1), (this._readableState.ended = !1), (this._readableState.endEmitted = !1)),
                                                        this._writableState &&
                                                            ((this._writableState.destroyed = !1),
                                                            (this._writableState.ended = !1),
                                                            (this._writableState.ending = !1),
                                                            (this._writableState.finalCalled = !1),
                                                            (this._writableState.prefinished = !1),
                                                            (this._writableState.finished = !1),
                                                            (this._writableState.errorEmitted = !1));
                                                },
                                                errorOrDestroy: function (t, e) {
                                                    var n = t._readableState,
                                                        r = t._writableState;
                                                    (n && n.autoDestroy) || (r && r.autoDestroy) ? t.destroy(e) : t.emit("error", e);
                                                },
                                            };
                                        }.call(this));
                                    }.call(this, t("_process")));
                                },
                                { _process: 12 },
                            ],
                            24: [
                                function (t, e) {
                                    "use strict";
                                    function n() {}
                                    var r = t("../../../errors").codes.ERR_STREAM_PREMATURE_CLOSE;
                                    e.exports = function t(e, i, s) {
                                        if ("function" == typeof i) return t(e, null, i);
                                        i || (i = {}),
                                            (s = (function (t) {
                                                var e = !1;
                                                return function () {
                                                    if (!e) {
                                                        e = !0;
                                                        for (var n = arguments.length, r = Array(n), i = 0; i < n; i++) r[i] = arguments[i];
                                                        t.apply(this, r);
                                                    }
                                                };
                                            })(s || n));
                                        var o = i.readable || (!1 !== i.readable && e.readable),
                                            a = i.writable || (!1 !== i.writable && e.writable),
                                            c = function () {
                                                e.writable || h();
                                            },
                                            l = e._writableState && e._writableState.finished,
                                            h = function () {
                                                (a = !1), (l = !0), o || s.call(e);
                                            },
                                            u = e._readableState && e._readableState.endEmitted,
                                            d = function () {
                                                (o = !1), (u = !0), a || s.call(e);
                                            },
                                            f = function (t) {
                                                s.call(e, t);
                                            },
                                            p = function () {
                                                var t;
                                                return o && !u
                                                    ? ((e._readableState && e._readableState.ended) || (t = new r()), s.call(e, t))
                                                    : a && !l
                                                    ? ((e._writableState && e._writableState.ended) || (t = new r()), s.call(e, t))
                                                    : void 0;
                                            },
                                            g = function () {
                                                e.req.on("finish", h);
                                            };
                                        return (
                                            (function (t) {
                                                return t.setHeader && "function" == typeof t.abort;
                                            })(e)
                                                ? (e.on("complete", h), e.on("abort", p), e.req ? g() : e.on("request", g))
                                                : a && !e._writableState && (e.on("end", c), e.on("close", c)),
                                            e.on("end", d),
                                            e.on("finish", h),
                                            !1 !== i.error && e.on("error", f),
                                            e.on("close", p),
                                            function () {
                                                e.removeListener("complete", h),
                                                    e.removeListener("abort", p),
                                                    e.removeListener("request", g),
                                                    e.req && e.req.removeListener("finish", h),
                                                    e.removeListener("end", c),
                                                    e.removeListener("close", c),
                                                    e.removeListener("finish", h),
                                                    e.removeListener("end", d),
                                                    e.removeListener("error", f),
                                                    e.removeListener("close", p);
                                            }
                                        );
                                    };
                                },
                                { "../../../errors": 15 },
                            ],
                            25: [
                                function (t, e) {
                                    e.exports = function () {
                                        throw new Error("Readable.from is not available in the browser");
                                    };
                                },
                                {},
                            ],
                            26: [
                                function (t, e) {
                                    "use strict";
                                    function n(t) {
                                        if (t) throw t;
                                    }
                                    function r(e, n, r, i) {
                                        i = (function (t) {
                                            var e = !1;
                                            return function () {
                                                e || ((e = !0), t.apply(void 0, arguments));
                                            };
                                        })(i);
                                        var s = !1;
                                        e.on("close", function () {
                                            s = !0;
                                        }),
                                            void 0 === a && (a = t("./end-of-stream")),
                                            a(e, { readable: n, writable: r }, function (t) {
                                                return t ? i(t) : ((s = !0), void i());
                                            });
                                        var o = !1;
                                        return function (t) {
                                            if (!s)
                                                return o
                                                    ? void 0
                                                    : ((o = !0),
                                                      (function (t) {
                                                          return t.setHeader && "function" == typeof t.abort;
                                                      })(e)
                                                          ? e.abort()
                                                          : "function" == typeof e.destroy
                                                          ? e.destroy()
                                                          : void i(t || new h("pipe")));
                                        };
                                    }
                                    function i(t) {
                                        t();
                                    }
                                    function s(t, e) {
                                        return t.pipe(e);
                                    }
                                    function o(t) {
                                        return t.length && "function" == typeof t[t.length - 1] ? t.pop() : n;
                                    }
                                    var a,
                                        c = t("../../../errors").codes,
                                        l = c.ERR_MISSING_ARGS,
                                        h = c.ERR_STREAM_DESTROYED;
                                    e.exports = function () {
                                        for (var t = arguments.length, e = Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                                        var a = o(e);
                                        if ((Array.isArray(e[0]) && (e = e[0]), 2 > e.length)) throw new l("streams");
                                        var c,
                                            h = e.map(function (t, n) {
                                                var s = n < e.length - 1;
                                                return r(t, s, 0 < n, function (t) {
                                                    c || (c = t), t && h.forEach(i), s || (h.forEach(i), a(c));
                                                });
                                            });
                                        return e.reduce(s);
                                    };
                                },
                                { "../../../errors": 15, "./end-of-stream": 24 },
                            ],
                            27: [
                                function (t, e) {
                                    "use strict";
                                    var n = t("../../../errors").codes.ERR_INVALID_OPT_VALUE;
                                    e.exports = {
                                        getHighWaterMark: function (t, e, i, s) {
                                            var o = (function (t, e, n) {
                                                return null == t.highWaterMark ? (e ? t[n] : null) : t.highWaterMark;
                                            })(e, s, i);
                                            if (null != o) {
                                                if (!isFinite(o) || r(o) !== o || 0 > o) throw new n(s ? i : "highWaterMark", o);
                                                return r(o);
                                            }
                                            return t.objectMode ? 16 : 16384;
                                        },
                                    };
                                },
                                { "../../../errors": 15 },
                            ],
                            28: [
                                function (t, e) {
                                    e.exports = t("events").EventEmitter;
                                },
                                { events: 7 },
                            ],
                            29: [
                                function (t, e, n) {
                                    ((n = e.exports = t("./lib/_stream_readable.js")).Stream = n),
                                        (n.Readable = n),
                                        (n.Writable = t("./lib/_stream_writable.js")),
                                        (n.Duplex = t("./lib/_stream_duplex.js")),
                                        (n.Transform = t("./lib/_stream_transform.js")),
                                        (n.PassThrough = t("./lib/_stream_passthrough.js")),
                                        (n.finished = t("./lib/internal/streams/end-of-stream.js")),
                                        (n.pipeline = t("./lib/internal/streams/pipeline.js"));
                                },
                                {
                                    "./lib/_stream_duplex.js": 16,
                                    "./lib/_stream_passthrough.js": 17,
                                    "./lib/_stream_readable.js": 18,
                                    "./lib/_stream_transform.js": 19,
                                    "./lib/_stream_writable.js": 20,
                                    "./lib/internal/streams/end-of-stream.js": 24,
                                    "./lib/internal/streams/pipeline.js": 26,
                                },
                            ],
                            30: [
                                function (t, e, n) {
                                    function r(t, e) {
                                        for (var n in t) e[n] = t[n];
                                    }
                                    function i(t, e, n) {
                                        return o(t, e, n);
                                    }
                                    var s = t("buffer"),
                                        o = s.Buffer;
                                    o.from && o.alloc && o.allocUnsafe && o.allocUnsafeSlow ? (e.exports = s) : (r(s, n), (n.Buffer = i)),
                                        (i.prototype = Object.create(o.prototype)),
                                        r(o, i),
                                        (i.from = function (t, e, n) {
                                            if ("number" == typeof t) throw new TypeError("Argument must not be a number");
                                            return o(t, e, n);
                                        }),
                                        (i.alloc = function (t, e, n) {
                                            if ("number" != typeof t) throw new TypeError("Argument must be a number");
                                            var r = o(t);
                                            return void 0 === e ? r.fill(0) : "string" == typeof n ? r.fill(e, n) : r.fill(e), r;
                                        }),
                                        (i.allocUnsafe = function (t) {
                                            if ("number" != typeof t) throw new TypeError("Argument must be a number");
                                            return o(t);
                                        }),
                                        (i.allocUnsafeSlow = function (t) {
                                            if ("number" != typeof t) throw new TypeError("Argument must be a number");
                                            return s.SlowBuffer(t);
                                        });
                                },
                                { buffer: 3 },
                            ],
                            31: [
                                function (t, e, n) {
                                    "use strict";
                                    function r(t) {
                                        var e;
                                        switch (
                                            ((this.encoding = (function (t) {
                                                var e = (function (t) {
                                                    if (!t) return "utf8";
                                                    for (var e; ; )
                                                        switch (t) {
                                                            case "utf8":
                                                            case "utf-8":
                                                                return "utf8";
                                                            case "ucs2":
                                                            case "ucs-2":
                                                            case "utf16le":
                                                            case "utf-16le":
                                                                return "utf16le";
                                                            case "latin1":
                                                            case "binary":
                                                                return "latin1";
                                                            case "base64":
                                                            case "ascii":
                                                            case "hex":
                                                                return t;
                                                            default:
                                                                if (e) return;
                                                                (t = ("" + t).toLowerCase()), (e = !0);
                                                        }
                                                })(t);
                                                if ("string" != typeof e && (d.isEncoding === f || !f(t))) throw new Error("Unknown encoding: " + t);
                                                return e || t;
                                            })(t)),
                                            this.encoding)
                                        ) {
                                            case "utf16le":
                                                (this.text = o), (this.end = a), (e = 4);
                                                break;
                                            case "utf8":
                                                (this.fillLast = s), (e = 4);
                                                break;
                                            case "base64":
                                                (this.text = c), (this.end = l), (e = 3);
                                                break;
                                            default:
                                                return (this.write = h), void (this.end = u);
                                        }
                                        (this.lastNeed = 0), (this.lastTotal = 0), (this.lastChar = d.allocUnsafe(e));
                                    }
                                    function i(t) {
                                        return 127 >= t ? 0 : 6 == t >> 5 ? 2 : 14 == t >> 4 ? 3 : 30 == t >> 3 ? 4 : 2 == t >> 6 ? -1 : -2;
                                    }
                                    function s(t) {
                                        var e = this.lastTotal - this.lastNeed,
                                            n = (function (t, e) {
                                                if (128 != (192 & e[0])) return (t.lastNeed = 0), "�";
                                                if (1 < t.lastNeed && 1 < e.length) {
                                                    if (128 != (192 & e[1])) return (t.lastNeed = 1), "�";
                                                    if (2 < t.lastNeed && 2 < e.length && 128 != (192 & e[2])) return (t.lastNeed = 2), "�";
                                                }
                                            })(this, t);
                                        return void 0 === n
                                            ? this.lastNeed <= t.length
                                                ? (t.copy(this.lastChar, e, 0, this.lastNeed), this.lastChar.toString(this.encoding, 0, this.lastTotal))
                                                : (t.copy(this.lastChar, e, 0, t.length), void (this.lastNeed -= t.length))
                                            : n;
                                    }
                                    function o(t, e) {
                                        if (0 == (t.length - e) % 2) {
                                            var n = t.toString("utf16le", e);
                                            if (n) {
                                                var r = n.charCodeAt(n.length - 1);
                                                if (55296 <= r && 56319 >= r) return (this.lastNeed = 2), (this.lastTotal = 4), (this.lastChar[0] = t[t.length - 2]), (this.lastChar[1] = t[t.length - 1]), n.slice(0, -1);
                                            }
                                            return n;
                                        }
                                        return (this.lastNeed = 1), (this.lastTotal = 2), (this.lastChar[0] = t[t.length - 1]), t.toString("utf16le", e, t.length - 1);
                                    }
                                    function a(t) {
                                        var e = t && t.length ? this.write(t) : "";
                                        if (this.lastNeed) {
                                            var n = this.lastTotal - this.lastNeed;
                                            return e + this.lastChar.toString("utf16le", 0, n);
                                        }
                                        return e;
                                    }
                                    function c(t, e) {
                                        var n = (t.length - e) % 3;
                                        return 0 == n
                                            ? t.toString("base64", e)
                                            : ((this.lastNeed = 3 - n),
                                              (this.lastTotal = 3),
                                              1 == n ? (this.lastChar[0] = t[t.length - 1]) : ((this.lastChar[0] = t[t.length - 2]), (this.lastChar[1] = t[t.length - 1])),
                                              t.toString("base64", e, t.length - n));
                                    }
                                    function l(t) {
                                        var e = t && t.length ? this.write(t) : "";
                                        return this.lastNeed ? e + this.lastChar.toString("base64", 0, 3 - this.lastNeed) : e;
                                    }
                                    function h(t) {
                                        return t.toString(this.encoding);
                                    }
                                    function u(t) {
                                        return t && t.length ? this.write(t) : "";
                                    }
                                    var d = t("safe-buffer").Buffer,
                                        f =
                                            d.isEncoding ||
                                            function (t) {
                                                switch ((t = "" + t) && t.toLowerCase()) {
                                                    case "hex":
                                                    case "utf8":
                                                    case "utf-8":
                                                    case "ascii":
                                                    case "binary":
                                                    case "base64":
                                                    case "ucs2":
                                                    case "ucs-2":
                                                    case "utf16le":
                                                    case "utf-16le":
                                                    case "raw":
                                                        return !0;
                                                    default:
                                                        return !1;
                                                }
                                            };
                                    (n.StringDecoder = r),
                                        (r.prototype.write = function (t) {
                                            if (0 === t.length) return "";
                                            var e, n;
                                            if (this.lastNeed) {
                                                if (void 0 === (e = this.fillLast(t))) return "";
                                                (n = this.lastNeed), (this.lastNeed = 0);
                                            } else n = 0;
                                            return n < t.length ? (e ? e + this.text(t, n) : this.text(t, n)) : e || "";
                                        }),
                                        (r.prototype.end = function (t) {
                                            var e = t && t.length ? this.write(t) : "";
                                            return this.lastNeed ? e + "�" : e;
                                        }),
                                        (r.prototype.text = function (t, e) {
                                            var n = (function (t, e, n) {
                                                var r = e.length - 1;
                                                if (r < n) return 0;
                                                var s = i(e[r]);
                                                return 0 <= s
                                                    ? (0 < s && (t.lastNeed = s - 1), s)
                                                    : --r < n || -2 === s
                                                    ? 0
                                                    : 0 <= (s = i(e[r]))
                                                    ? (0 < s && (t.lastNeed = s - 2), s)
                                                    : --r < n || -2 === s
                                                    ? 0
                                                    : 0 <= (s = i(e[r]))
                                                    ? (0 < s && (2 === s ? (s = 0) : (t.lastNeed = s - 3)), s)
                                                    : 0;
                                            })(this, t, e);
                                            if (!this.lastNeed) return t.toString("utf8", e);
                                            this.lastTotal = n;
                                            var r = t.length - (n - this.lastNeed);
                                            return t.copy(this.lastChar, 0, r), t.toString("utf8", e, r);
                                        }),
                                        (r.prototype.fillLast = function (t) {
                                            return this.lastNeed <= t.length
                                                ? (t.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed), this.lastChar.toString(this.encoding, 0, this.lastTotal))
                                                : (t.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, t.length), void (this.lastNeed -= t.length));
                                        });
                                },
                                { "safe-buffer": 30 },
                            ],
                            32: [
                                function (t, e) {
                                    (function (t) {
                                        (function () {
                                            function n(e) {
                                                try {
                                                    if (!t.localStorage) return !1;
                                                } catch (t) {
                                                    return !1;
                                                }
                                                var n = t.localStorage[e];
                                                return null != n && "true" === (n + "").toLowerCase();
                                            }
                                            e.exports = function (t, e) {
                                                if (n("noDeprecation")) return t;
                                                var r = !1;
                                                return function () {
                                                    if (!r) {
                                                        if (n("throwDeprecation")) throw new Error(e);
                                                        n("traceDeprecation") ? console.trace(e) : console.warn(e), (r = !0);
                                                    }
                                                    return t.apply(this, arguments);
                                                };
                                            };
                                        }.call(this));
                                    }.call(this, void 0 === n.g ? ("undefined" == typeof self ? ("undefined" == typeof window ? {} : window) : self) : n.g));
                                },
                                {},
                            ],
                            "/": [
                                function (t, e) {
                                    function n(t) {
                                        return t.replace(/a=ice-options:trickle\s\n/g, "");
                                    }
                                    const r = t("debug")("simple-peer"),
                                        i = t("get-browser-rtc"),
                                        s = t("randombytes"),
                                        o = t("readable-stream"),
                                        a = t("queue-microtask"),
                                        c = t("err-code"),
                                        { Buffer: l } = t("buffer"),
                                        h = 65536;
                                    class u extends o.Duplex {
                                        constructor(t) {
                                            if (
                                                (super((t = Object.assign({ allowHalfOpen: !1 }, t))),
                                                (this._id = s(4).toString("hex").slice(0, 7)),
                                                this._debug("new peer %o", t),
                                                (this.channelName = t.initiator ? t.channelName || s(20).toString("hex") : null),
                                                (this.initiator = t.initiator || !1),
                                                (this.channelConfig = t.channelConfig || u.channelConfig),
                                                (this.channelNegotiated = this.channelConfig.negotiated),
                                                (this.config = Object.assign({}, u.config, t.config)),
                                                (this.offerOptions = t.offerOptions || {}),
                                                (this.answerOptions = t.answerOptions || {}),
                                                (this.sdpTransform = t.sdpTransform || ((t) => t)),
                                                (this.streams = t.streams || (t.stream ? [t.stream] : [])),
                                                (this.trickle = void 0 === t.trickle || t.trickle),
                                                (this.allowHalfTrickle = void 0 !== t.allowHalfTrickle && t.allowHalfTrickle),
                                                (this.iceCompleteTimeout = t.iceCompleteTimeout || 5e3),
                                                (this.destroyed = !1),
                                                (this.destroying = !1),
                                                (this._connected = !1),
                                                (this.remoteAddress = void 0),
                                                (this.remoteFamily = void 0),
                                                (this.remotePort = void 0),
                                                (this.localAddress = void 0),
                                                (this.localFamily = void 0),
                                                (this.localPort = void 0),
                                                (this._wrtc = t.wrtc && "object" == typeof t.wrtc ? t.wrtc : i()),
                                                !this._wrtc)
                                            )
                                                throw "undefined" == typeof window
                                                    ? c(new Error("No WebRTC support: Specify `opts.wrtc` option in this environment"), "ERR_WEBRTC_SUPPORT")
                                                    : c(new Error("No WebRTC support: Not a supported browser"), "ERR_WEBRTC_SUPPORT");
                                            (this._pcReady = !1),
                                                (this._channelReady = !1),
                                                (this._iceComplete = !1),
                                                (this._iceCompleteTimer = null),
                                                (this._channel = null),
                                                (this._pendingCandidates = []),
                                                (this._isNegotiating = !1),
                                                (this._firstNegotiation = !0),
                                                (this._batchedNegotiation = !1),
                                                (this._queuedNegotiation = !1),
                                                (this._sendersAwaitingStable = []),
                                                (this._senderMap = new Map()),
                                                (this._closingInterval = null),
                                                (this._remoteTracks = []),
                                                (this._remoteStreams = []),
                                                (this._chunk = null),
                                                (this._cb = null),
                                                (this._interval = null);
                                            try {
                                                this._pc = new this._wrtc.RTCPeerConnection(this.config);
                                            } catch (t) {
                                                return void this.destroy(c(t, "ERR_PC_CONSTRUCTOR"));
                                            }
                                            (this._isReactNativeWebrtc = "number" == typeof this._pc._peerConnectionId),
                                                (this._pc.oniceconnectionstatechange = () => {
                                                    this._onIceStateChange();
                                                }),
                                                (this._pc.onicegatheringstatechange = () => {
                                                    this._onIceStateChange();
                                                }),
                                                (this._pc.onconnectionstatechange = () => {
                                                    this._onConnectionStateChange();
                                                }),
                                                (this._pc.onsignalingstatechange = () => {
                                                    this._onSignalingStateChange();
                                                }),
                                                (this._pc.onicecandidate = (t) => {
                                                    this._onIceCandidate(t);
                                                }),
                                                "object" == typeof this._pc.peerIdentity &&
                                                    this._pc.peerIdentity.catch((t) => {
                                                        this.destroy(c(t, "ERR_PC_PEER_IDENTITY"));
                                                    }),
                                                this.initiator || this.channelNegotiated
                                                    ? this._setupData({ channel: this._pc.createDataChannel(this.channelName, this.channelConfig) })
                                                    : (this._pc.ondatachannel = (t) => {
                                                          this._setupData(t);
                                                      }),
                                                this.streams &&
                                                    this.streams.forEach((t) => {
                                                        this.addStream(t);
                                                    }),
                                                (this._pc.ontrack = (t) => {
                                                    this._onTrack(t);
                                                }),
                                                this._debug("initial negotiation"),
                                                this._needsNegotiation(),
                                                (this._onFinishBound = () => {
                                                    this._onFinish();
                                                }),
                                                this.once("finish", this._onFinishBound);
                                        }
                                        get bufferSize() {
                                            return (this._channel && this._channel.bufferedAmount) || 0;
                                        }
                                        get connected() {
                                            return this._connected && "open" === this._channel.readyState;
                                        }
                                        address() {
                                            return { port: this.localPort, family: this.localFamily, address: this.localAddress };
                                        }
                                        signal(t) {
                                            if (!this.destroying) {
                                                if (this.destroyed) throw c(new Error("cannot signal after peer is destroyed"), "ERR_DESTROYED");
                                                if ("string" == typeof t)
                                                    try {
                                                        t = JSON.parse(t);
                                                    } catch (e) {
                                                        t = {};
                                                    }
                                                this._debug("signal()"),
                                                    t.renegotiate && this.initiator && (this._debug("got request to renegotiate"), this._needsNegotiation()),
                                                    t.transceiverRequest && this.initiator && (this._debug("got request for transceiver"), this.addTransceiver(t.transceiverRequest.kind, t.transceiverRequest.init)),
                                                    t.candidate && (this._pc.remoteDescription && this._pc.remoteDescription.type ? this._addIceCandidate(t.candidate) : this._pendingCandidates.push(t.candidate)),
                                                    t.sdp &&
                                                        this._pc
                                                            .setRemoteDescription(new this._wrtc.RTCSessionDescription(t))
                                                            .then(() => {
                                                                this.destroyed ||
                                                                    (this._pendingCandidates.forEach((t) => {
                                                                        this._addIceCandidate(t);
                                                                    }),
                                                                    (this._pendingCandidates = []),
                                                                    "offer" === this._pc.remoteDescription.type && this._createAnswer());
                                                            })
                                                            .catch((t) => {
                                                                this.destroy(c(t, "ERR_SET_REMOTE_DESCRIPTION"));
                                                            }),
                                                    t.sdp || t.candidate || t.renegotiate || t.transceiverRequest || this.destroy(c(new Error("signal() called with invalid signal data"), "ERR_SIGNALING"));
                                            }
                                        }
                                        _addIceCandidate(t) {
                                            const e = new this._wrtc.RTCIceCandidate(t);
                                            this._pc.addIceCandidate(e).catch((t) => {
                                                !e.address || e.address.endsWith(".local")
                                                    ? (function (t) {
                                                          console.warn(t);
                                                      })("Ignoring unsupported ICE candidate.")
                                                    : this.destroy(c(t, "ERR_ADD_ICE_CANDIDATE"));
                                            });
                                        }
                                        send(t) {
                                            if (!this.destroying) {
                                                if (this.destroyed) throw c(new Error("cannot send after peer is destroyed"), "ERR_DESTROYED");
                                                this._channel.send(t);
                                            }
                                        }
                                        addTransceiver(t, e) {
                                            if (!this.destroying) {
                                                if (this.destroyed) throw c(new Error("cannot addTransceiver after peer is destroyed"), "ERR_DESTROYED");
                                                if ((this._debug("addTransceiver()"), this.initiator))
                                                    try {
                                                        this._pc.addTransceiver(t, e), this._needsNegotiation();
                                                    } catch (t) {
                                                        this.destroy(c(t, "ERR_ADD_TRANSCEIVER"));
                                                    }
                                                else this.emit("signal", { type: "transceiverRequest", transceiverRequest: { kind: t, init: e } });
                                            }
                                        }
                                        addStream(t) {
                                            if (!this.destroying) {
                                                if (this.destroyed) throw c(new Error("cannot addStream after peer is destroyed"), "ERR_DESTROYED");
                                                this._debug("addStream()"),
                                                    t.getTracks().forEach((e) => {
                                                        this.addTrack(e, t);
                                                    });
                                            }
                                        }
                                        addTrack(t, e) {
                                            if (this.destroying) return;
                                            if (this.destroyed) throw c(new Error("cannot addTrack after peer is destroyed"), "ERR_DESTROYED");
                                            this._debug("addTrack()");
                                            const n = this._senderMap.get(t) || new Map();
                                            let r = n.get(e);
                                            if (r)
                                                throw r.removed
                                                    ? c(new Error("Track has been removed. You should enable/disable tracks that you want to re-add."), "ERR_SENDER_REMOVED")
                                                    : c(new Error("Track has already been added to that stream."), "ERR_SENDER_ALREADY_ADDED");
                                            (r = this._pc.addTrack(t, e)), n.set(e, r), this._senderMap.set(t, n), this._needsNegotiation();
                                        }
                                        replaceTrack(t, e, n) {
                                            if (this.destroying) return;
                                            if (this.destroyed) throw c(new Error("cannot replaceTrack after peer is destroyed"), "ERR_DESTROYED");
                                            this._debug("replaceTrack()");
                                            const r = this._senderMap.get(t),
                                                i = r ? r.get(n) : null;
                                            if (!i) throw c(new Error("Cannot replace track that was never added."), "ERR_TRACK_NOT_ADDED");
                                            e && this._senderMap.set(e, r), null == i.replaceTrack ? this.destroy(c(new Error("replaceTrack is not supported in this browser"), "ERR_UNSUPPORTED_REPLACETRACK")) : i.replaceTrack(e);
                                        }
                                        removeTrack(t, e) {
                                            if (this.destroying) return;
                                            if (this.destroyed) throw c(new Error("cannot removeTrack after peer is destroyed"), "ERR_DESTROYED");
                                            this._debug("removeSender()");
                                            const n = this._senderMap.get(t),
                                                r = n ? n.get(e) : null;
                                            if (!r) throw c(new Error("Cannot remove track that was never added."), "ERR_TRACK_NOT_ADDED");
                                            try {
                                                (r.removed = !0), this._pc.removeTrack(r);
                                            } catch (t) {
                                                "NS_ERROR_UNEXPECTED" === t.name ? this._sendersAwaitingStable.push(r) : this.destroy(c(t, "ERR_REMOVE_TRACK"));
                                            }
                                            this._needsNegotiation();
                                        }
                                        removeStream(t) {
                                            if (!this.destroying) {
                                                if (this.destroyed) throw c(new Error("cannot removeStream after peer is destroyed"), "ERR_DESTROYED");
                                                this._debug("removeSenders()"),
                                                    t.getTracks().forEach((e) => {
                                                        this.removeTrack(e, t);
                                                    });
                                            }
                                        }
                                        _needsNegotiation() {
                                            this._debug("_needsNegotiation"),
                                                this._batchedNegotiation ||
                                                    ((this._batchedNegotiation = !0),
                                                    a(() => {
                                                        (this._batchedNegotiation = !1),
                                                            this.initiator || !this._firstNegotiation ? (this._debug("starting batched negotiation"), this.negotiate()) : this._debug("non-initiator initial negotiation request discarded"),
                                                            (this._firstNegotiation = !1);
                                                    }));
                                        }
                                        negotiate() {
                                            if (!this.destroying) {
                                                if (this.destroyed) throw c(new Error("cannot negotiate after peer is destroyed"), "ERR_DESTROYED");
                                                this.initiator
                                                    ? this._isNegotiating
                                                        ? ((this._queuedNegotiation = !0), this._debug("already negotiating, queueing"))
                                                        : (this._debug("start negotiation"),
                                                          setTimeout(() => {
                                                              this._createOffer();
                                                          }, 0))
                                                    : this._isNegotiating
                                                    ? ((this._queuedNegotiation = !0), this._debug("already negotiating, queueing"))
                                                    : (this._debug("requesting negotiation from initiator"), this.emit("signal", { type: "renegotiate", renegotiate: !0 })),
                                                    (this._isNegotiating = !0);
                                            }
                                        }
                                        destroy(t) {
                                            this._destroy(t, () => {});
                                        }
                                        _destroy(t, e) {
                                            this.destroyed ||
                                                this.destroying ||
                                                ((this.destroying = !0),
                                                this._debug("destroying (error: %s)", t && (t.message || t)),
                                                a(() => {
                                                    if (
                                                        ((this.destroyed = !0),
                                                        (this.destroying = !1),
                                                        this._debug("destroy (error: %s)", t && (t.message || t)),
                                                        (this.readable = this.writable = !1),
                                                        this._readableState.ended || this.push(null),
                                                        this._writableState.finished || this.end(),
                                                        (this._connected = !1),
                                                        (this._pcReady = !1),
                                                        (this._channelReady = !1),
                                                        (this._remoteTracks = null),
                                                        (this._remoteStreams = null),
                                                        (this._senderMap = null),
                                                        clearInterval(this._closingInterval),
                                                        (this._closingInterval = null),
                                                        clearInterval(this._interval),
                                                        (this._interval = null),
                                                        (this._chunk = null),
                                                        (this._cb = null),
                                                        this._onFinishBound && this.removeListener("finish", this._onFinishBound),
                                                        (this._onFinishBound = null),
                                                        this._channel)
                                                    ) {
                                                        try {
                                                            this._channel.close();
                                                        } catch (t) {}
                                                        (this._channel.onmessage = null), (this._channel.onopen = null), (this._channel.onclose = null), (this._channel.onerror = null);
                                                    }
                                                    if (this._pc) {
                                                        try {
                                                            this._pc.close();
                                                        } catch (t) {}
                                                        (this._pc.oniceconnectionstatechange = null),
                                                            (this._pc.onicegatheringstatechange = null),
                                                            (this._pc.onsignalingstatechange = null),
                                                            (this._pc.onicecandidate = null),
                                                            (this._pc.ontrack = null),
                                                            (this._pc.ondatachannel = null);
                                                    }
                                                    (this._pc = null), (this._channel = null), t && this.emit("error", t), this.emit("close"), e();
                                                }));
                                        }
                                        _setupData(t) {
                                            if (!t.channel) return this.destroy(c(new Error("Data channel event is missing `channel` property"), "ERR_DATA_CHANNEL"));
                                            (this._channel = t.channel),
                                                (this._channel.binaryType = "arraybuffer"),
                                                "number" == typeof this._channel.bufferedAmountLowThreshold && (this._channel.bufferedAmountLowThreshold = h),
                                                (this.channelName = this._channel.label),
                                                (this._channel.onmessage = (t) => {
                                                    this._onChannelMessage(t);
                                                }),
                                                (this._channel.onbufferedamountlow = () => {
                                                    this._onChannelBufferedAmountLow();
                                                }),
                                                (this._channel.onopen = () => {
                                                    this._onChannelOpen();
                                                }),
                                                (this._channel.onclose = () => {
                                                    this._onChannelClose();
                                                }),
                                                (this._channel.onerror = (t) => {
                                                    const e = t.error instanceof Error ? t.error : new Error(`Datachannel error: ${t.message} ${t.filename}:${t.lineno}:${t.colno}`);
                                                    this.destroy(c(e, "ERR_DATA_CHANNEL"));
                                                });
                                            let e = !1;
                                            this._closingInterval = setInterval(() => {
                                                this._channel && "closing" === this._channel.readyState ? (e && this._onChannelClose(), (e = !0)) : (e = !1);
                                            }, 5e3);
                                        }
                                        _read() {}
                                        _write(t, e, n) {
                                            if (this.destroyed) return n(c(new Error("cannot write after peer is destroyed"), "ERR_DATA_CHANNEL"));
                                            if (this._connected) {
                                                try {
                                                    this.send(t);
                                                } catch (t) {
                                                    return this.destroy(c(t, "ERR_DATA_CHANNEL"));
                                                }
                                                this._channel.bufferedAmount > h ? (this._debug("start backpressure: bufferedAmount %d", this._channel.bufferedAmount), (this._cb = n)) : n(null);
                                            } else this._debug("write before connect"), (this._chunk = t), (this._cb = n);
                                        }
                                        _onFinish() {
                                            if (!this.destroyed) {
                                                const t = () => {
                                                    setTimeout(() => this.destroy(), 1e3);
                                                };
                                                this._connected ? t() : this.once("connect", t);
                                            }
                                        }
                                        _startIceCompleteTimeout() {
                                            this.destroyed ||
                                                this._iceCompleteTimer ||
                                                (this._debug("started iceComplete timeout"),
                                                (this._iceCompleteTimer = setTimeout(() => {
                                                    this._iceComplete || ((this._iceComplete = !0), this._debug("iceComplete timeout completed"), this.emit("iceTimeout"), this.emit("_iceComplete"));
                                                }, this.iceCompleteTimeout)));
                                        }
                                        _createOffer() {
                                            this.destroyed ||
                                                this._pc
                                                    .createOffer(this.offerOptions)
                                                    .then((t) => {
                                                        if (this.destroyed) return;
                                                        this.trickle || this.allowHalfTrickle || (t.sdp = n(t.sdp)), (t.sdp = this.sdpTransform(t.sdp));
                                                        const e = () => {
                                                            if (!this.destroyed) {
                                                                const e = this._pc.localDescription || t;
                                                                this._debug("signal"), this.emit("signal", { type: e.type, sdp: e.sdp });
                                                            }
                                                        };
                                                        this._pc
                                                            .setLocalDescription(t)
                                                            .then(() => {
                                                                this._debug("createOffer success"), this.destroyed || (this.trickle || this._iceComplete ? e() : this.once("_iceComplete", e));
                                                            })
                                                            .catch((t) => {
                                                                this.destroy(c(t, "ERR_SET_LOCAL_DESCRIPTION"));
                                                            });
                                                    })
                                                    .catch((t) => {
                                                        this.destroy(c(t, "ERR_CREATE_OFFER"));
                                                    });
                                        }
                                        _requestMissingTransceivers() {
                                            this._pc.getTransceivers &&
                                                this._pc.getTransceivers().forEach((t) => {
                                                    t.mid || !t.sender.track || t.requested || ((t.requested = !0), this.addTransceiver(t.sender.track.kind));
                                                });
                                        }
                                        _createAnswer() {
                                            this.destroyed ||
                                                this._pc
                                                    .createAnswer(this.answerOptions)
                                                    .then((t) => {
                                                        if (this.destroyed) return;
                                                        this.trickle || this.allowHalfTrickle || (t.sdp = n(t.sdp)), (t.sdp = this.sdpTransform(t.sdp));
                                                        const e = () => {
                                                            if (!this.destroyed) {
                                                                const e = this._pc.localDescription || t;
                                                                this._debug("signal"), this.emit("signal", { type: e.type, sdp: e.sdp }), this.initiator || this._requestMissingTransceivers();
                                                            }
                                                        };
                                                        this._pc
                                                            .setLocalDescription(t)
                                                            .then(() => {
                                                                this.destroyed || (this.trickle || this._iceComplete ? e() : this.once("_iceComplete", e));
                                                            })
                                                            .catch((t) => {
                                                                this.destroy(c(t, "ERR_SET_LOCAL_DESCRIPTION"));
                                                            });
                                                    })
                                                    .catch((t) => {
                                                        this.destroy(c(t, "ERR_CREATE_ANSWER"));
                                                    });
                                        }
                                        _onConnectionStateChange() {
                                            this.destroyed || ("failed" === this._pc.connectionState && this.destroy(c(new Error("Connection failed."), "ERR_CONNECTION_FAILURE")));
                                        }
                                        _onIceStateChange() {
                                            if (this.destroyed) return;
                                            const t = this._pc.iceConnectionState,
                                                e = this._pc.iceGatheringState;
                                            this._debug("iceStateChange (connection: %s) (gathering: %s)", t, e),
                                                this.emit("iceStateChange", t, e),
                                                ("connected" === t || "completed" === t) && ((this._pcReady = !0), this._maybeReady()),
                                                "failed" === t && this.destroy(c(new Error("Ice connection failed."), "ERR_ICE_CONNECTION_FAILURE")),
                                                "closed" === t && this.destroy(c(new Error("Ice connection closed."), "ERR_ICE_CONNECTION_CLOSED"));
                                        }
                                        getStats(t) {
                                            const e = (t) => (
                                                "[object Array]" === Object.prototype.toString.call(t.values) &&
                                                    t.values.forEach((e) => {
                                                        Object.assign(t, e);
                                                    }),
                                                t
                                            );
                                            0 === this._pc.getStats.length || this._isReactNativeWebrtc
                                                ? this._pc.getStats().then(
                                                      (n) => {
                                                          const r = [];
                                                          n.forEach((t) => {
                                                              r.push(e(t));
                                                          }),
                                                              t(null, r);
                                                      },
                                                      (e) => t(e)
                                                  )
                                                : 0 < this._pc.getStats.length
                                                ? this._pc.getStats(
                                                      (n) => {
                                                          if (this.destroyed) return;
                                                          const r = [];
                                                          n.result().forEach((t) => {
                                                              const n = {};
                                                              t.names().forEach((e) => {
                                                                  n[e] = t.stat(e);
                                                              }),
                                                                  (n.id = t.id),
                                                                  (n.type = t.type),
                                                                  (n.timestamp = t.timestamp),
                                                                  r.push(e(n));
                                                          }),
                                                              t(null, r);
                                                      },
                                                      (e) => t(e)
                                                  )
                                                : t(null, []);
                                        }
                                        _maybeReady() {
                                            if ((this._debug("maybeReady pc %s channel %s", this._pcReady, this._channelReady), this._connected || this._connecting || !this._pcReady || !this._channelReady)) return;
                                            this._connecting = !0;
                                            const t = () => {
                                                this.destroyed ||
                                                    this.getStats((e, n) => {
                                                        if (this.destroyed) return;
                                                        e && (n = []);
                                                        const r = {},
                                                            i = {},
                                                            s = {};
                                                        let o = !1;
                                                        n.forEach((t) => {
                                                            ("remotecandidate" === t.type || "remote-candidate" === t.type) && (r[t.id] = t),
                                                                ("localcandidate" === t.type || "local-candidate" === t.type) && (i[t.id] = t),
                                                                ("candidatepair" === t.type || "candidate-pair" === t.type) && (s[t.id] = t);
                                                        });
                                                        const a = (t) => {
                                                            o = !0;
                                                            let e = i[t.localCandidateId];
                                                            e && (e.ip || e.address)
                                                                ? ((this.localAddress = e.ip || e.address), (this.localPort = +e.port))
                                                                : e && e.ipAddress
                                                                ? ((this.localAddress = e.ipAddress), (this.localPort = +e.portNumber))
                                                                : "string" == typeof t.googLocalAddress && ((e = t.googLocalAddress.split(":")), (this.localAddress = e[0]), (this.localPort = +e[1])),
                                                                this.localAddress && (this.localFamily = this.localAddress.includes(":") ? "IPv6" : "IPv4");
                                                            let n = r[t.remoteCandidateId];
                                                            n && (n.ip || n.address)
                                                                ? ((this.remoteAddress = n.ip || n.address), (this.remotePort = +n.port))
                                                                : n && n.ipAddress
                                                                ? ((this.remoteAddress = n.ipAddress), (this.remotePort = +n.portNumber))
                                                                : "string" == typeof t.googRemoteAddress && ((n = t.googRemoteAddress.split(":")), (this.remoteAddress = n[0]), (this.remotePort = +n[1])),
                                                                this.remoteAddress && (this.remoteFamily = this.remoteAddress.includes(":") ? "IPv6" : "IPv4"),
                                                                this._debug("connect local: %s:%s remote: %s:%s", this.localAddress, this.localPort, this.remoteAddress, this.remotePort);
                                                        };
                                                        if (
                                                            (n.forEach((t) => {
                                                                "transport" === t.type && t.selectedCandidatePairId && a(s[t.selectedCandidatePairId]),
                                                                    (("googCandidatePair" === t.type && "true" === t.googActiveConnection) || (("candidatepair" === t.type || "candidate-pair" === t.type) && t.selected)) && a(t);
                                                            }),
                                                            o || (Object.keys(s).length && !Object.keys(i).length))
                                                        ) {
                                                            if (((this._connecting = !1), (this._connected = !0), this._chunk)) {
                                                                try {
                                                                    this.send(this._chunk);
                                                                } catch (t) {
                                                                    return this.destroy(c(t, "ERR_DATA_CHANNEL"));
                                                                }
                                                                (this._chunk = null), this._debug('sent chunk from "write before connect"');
                                                                const t = this._cb;
                                                                (this._cb = null), t(null);
                                                            }
                                                            "number" != typeof this._channel.bufferedAmountLowThreshold && ((this._interval = setInterval(() => this._onInterval(), 150)), this._interval.unref && this._interval.unref()),
                                                                this._debug("connect"),
                                                                this.emit("connect");
                                                        } else setTimeout(t, 100);
                                                    });
                                            };
                                            t();
                                        }
                                        _onInterval() {
                                            this._cb && this._channel && !(this._channel.bufferedAmount > h) && this._onChannelBufferedAmountLow();
                                        }
                                        _onSignalingStateChange() {
                                            this.destroyed ||
                                                ("stable" === this._pc.signalingState &&
                                                    ((this._isNegotiating = !1),
                                                    this._debug("flushing sender queue", this._sendersAwaitingStable),
                                                    this._sendersAwaitingStable.forEach((t) => {
                                                        this._pc.removeTrack(t), (this._queuedNegotiation = !0);
                                                    }),
                                                    (this._sendersAwaitingStable = []),
                                                    this._queuedNegotiation ? (this._debug("flushing negotiation queue"), (this._queuedNegotiation = !1), this._needsNegotiation()) : (this._debug("negotiated"), this.emit("negotiated"))),
                                                this._debug("signalingStateChange %s", this._pc.signalingState),
                                                this.emit("signalingStateChange", this._pc.signalingState));
                                        }
                                        _onIceCandidate(t) {
                                            this.destroyed ||
                                                (t.candidate && this.trickle
                                                    ? this.emit("signal", { type: "candidate", candidate: { candidate: t.candidate.candidate, sdpMLineIndex: t.candidate.sdpMLineIndex, sdpMid: t.candidate.sdpMid } })
                                                    : !t.candidate && !this._iceComplete && ((this._iceComplete = !0), this.emit("_iceComplete")),
                                                t.candidate && this._startIceCompleteTimeout());
                                        }
                                        _onChannelMessage(t) {
                                            if (this.destroyed) return;
                                            let e = t.data;
                                            e instanceof ArrayBuffer && (e = l.from(e)), this.push(e);
                                        }
                                        _onChannelBufferedAmountLow() {
                                            if (!this.destroyed && this._cb) {
                                                this._debug("ending backpressure: bufferedAmount %d", this._channel.bufferedAmount);
                                                const t = this._cb;
                                                (this._cb = null), t(null);
                                            }
                                        }
                                        _onChannelOpen() {
                                            this._connected || this.destroyed || (this._debug("on channel open"), (this._channelReady = !0), this._maybeReady());
                                        }
                                        _onChannelClose() {
                                            this.destroyed || (this._debug("on channel close"), this.destroy());
                                        }
                                        _onTrack(t) {
                                            this.destroyed ||
                                                t.streams.forEach((e) => {
                                                    this._debug("on track"),
                                                        this.emit("track", t.track, e),
                                                        this._remoteTracks.push({ track: t.track, stream: e }),
                                                        this._remoteStreams.some((t) => t.id === e.id) ||
                                                            (this._remoteStreams.push(e),
                                                            a(() => {
                                                                this._debug("on stream"), this.emit("stream", e);
                                                            }));
                                                });
                                        }
                                        _debug() {
                                            const t = [].slice.call(arguments);
                                            (t[0] = "[" + this._id + "] " + t[0]), r.apply(null, t);
                                        }
                                    }
                                    (u.WEBRTC_SUPPORT = !!i()),
                                        (u.config = { iceServers: [{ urls: ["stun:stun.l.google.com:19302", "stun:global.stun.twilio.com:3478"] }], sdpSemantics: "unified-plan" }),
                                        (u.channelConfig = {}),
                                        (e.exports = u);
                                },
                                { buffer: 3, debug: 4, "err-code": 6, "get-browser-rtc": 8, "queue-microtask": 13, randombytes: 14, "readable-stream": 29 },
                            ],
                        },
                        {},
                        []
                    )("/"));
            },
        },
        e = {};
    function n(r) {
        var i = e[r];
        if (void 0 !== i) return i.exports;
        var s = (e[r] = { exports: {} });
        return t[r](s, s.exports, n), s.exports;
    }
    (n.g = (function () {
        if ("object" == typeof globalThis) return globalThis;
        try {
            return this || new Function("return this")();
        } catch (t) {
            if ("object" == typeof window) return window;
        }
    })()),
        (() => {
            "use strict";
            const t = () => new Map(),
                e = (e) => {
                    const n = t();
                    return (
                        e.forEach((t, e) => {
                            n.set(e, t);
                        }),
                        n
                    );
                },
                r = (t, e, n) => {
                    let r = t.get(e);
                    return void 0 === r && t.set(e, (r = n())), r;
                },
                i = () => new Set(),
                s = (t) => t[t.length - 1],
                o = (t, e) => {
                    for (let n = 0; n < e.length; n++) t.push(e[n]);
                },
                a = Array.from;
            Array.isArray;
            class c {
                constructor() {
                    this._observers = t();
                }
                on(t, e) {
                    r(this._observers, t, i).add(e);
                }
                once(t, e) {
                    const n = (...r) => {
                        this.off(t, n), e(...r);
                    };
                    this.on(t, n);
                }
                off(t, e) {
                    const n = this._observers.get(t);
                    void 0 !== n && (n.delete(e), 0 === n.size && this._observers.delete(t));
                }
                emit(e, n) {
                    return a((this._observers.get(e) || t()).values()).forEach((t) => t(...n));
                }
                destroy() {
                    this._observers = t();
                }
            }
            const l = Math.floor,
                h = (Math.ceil, Math.abs),
                u = (Math.imul, Math.round, Math.log10),
                d = (Math.log2, Math.log, Math.sqrt, (t, e) => (t < e ? t : e)),
                f = (t, e) => (t > e ? t : e),
                p = (Number.isNaN, Math.pow, Math.sign, (t) => (0 !== t ? t < 0 : 1 / t < 0)),
                g = String.fromCharCode,
                y = (String.fromCodePoint, /^\s*/g),
                b = /([A-Z])/g,
                w = (t, e) => ((t) => t.replace(y, ""))(t.replace(b, (t) => `${e}${((t) => t.toLowerCase())(t)}`)),
                m = "undefined" != typeof TextEncoder ? new TextEncoder() : null,
                _ = m
                    ? (t) => m.encode(t)
                    : (t) => {
                          const e = unescape(encodeURIComponent(t)),
                              n = e.length,
                              r = new Uint8Array(n);
                          for (let t = 0; t < n; t++) r[t] = e.codePointAt(t);
                          return r;
                      };
            let v = "undefined" == typeof TextDecoder ? null : new TextDecoder("utf-8", { fatal: !0, ignoreBOM: !0 });
            v && 1 === v.decode(new Uint8Array()).length && (v = null);
            let E = new (class {
                    constructor() {
                        this.map = new Map();
                    }
                    setItem(t, e) {
                        this.map.set(t, e);
                    }
                    getItem(t) {
                        return this.map.get(t);
                    }
                })(),
                C = !0;
            try {
                "undefined" != typeof localStorage && ((E = localStorage), (C = !1));
            } catch (t) {}
            const S = E,
                k = (Object.assign, Object.keys),
                R = (t) => k(t).length,
                A = (t, e) => Object.prototype.hasOwnProperty.call(t, e),
                T = (t, e, n = 0) => {
                    try {
                        for (; n < t.length; n++) t[n](...e);
                    } finally {
                        n < t.length && T(t, e, n + 1);
                    }
                },
                D = () => {},
                O = (t, e) => {
                    if (null == t || null == e) return ((t, e) => t === e)(t, e);
                    if (t.constructor !== e.constructor) return !1;
                    if (t === e) return !0;
                    switch (t.constructor) {
                        case ArrayBuffer:
                            (t = new Uint8Array(t)), (e = new Uint8Array(e));
                        case Uint8Array:
                            if (t.byteLength !== e.byteLength) return !1;
                            for (let n = 0; n < t.length; n++) if (t[n] !== e[n]) return !1;
                            break;
                        case Set:
                            if (t.size !== e.size) return !1;
                            for (const n of t) if (!e.has(n)) return !1;
                            break;
                        case Map:
                            if (t.size !== e.size) return !1;
                            for (const n of t.keys()) if (!e.has(n) || !O(t.get(n), e.get(n))) return !1;
                            break;
                        case Object:
                            if (R(t) !== R(e)) return !1;
                            for (const n in t) if (!A(t, n) || !O(t[n], e[n])) return !1;
                            break;
                        case Array:
                            if (t.length !== e.length) return !1;
                            for (let n = 0; n < t.length; n++) if (!O(t[n], e[n])) return !1;
                            break;
                        default:
                            return !1;
                    }
                    return !0;
                },
                L = "undefined" != typeof process && process.release && /node|io\.js/.test(process.release.name),
                x = "undefined" != typeof window && !L;
            let I;
            "undefined" != typeof navigator && /Mac/.test(navigator.platform);
            const N = [],
                M = (e) =>
                    (() => {
                        if (void 0 === I)
                            if (L) {
                                I = t();
                                const e = process.argv;
                                let n = null;
                                for (let t = 0; t < e.length; t++) {
                                    const r = e[t];
                                    "-" === r[0] ? (null !== n && I.set(n, ""), (n = r)) : null !== n ? (I.set(n, r), (n = null)) : N.push(r);
                                }
                                null !== n && I.set(n, "");
                            } else
                                "object" == typeof location
                                    ? ((I = t()),
                                      (location.search || "?")
                                          .slice(1)
                                          .split("&")
                                          .forEach((t) => {
                                              if (0 !== t.length) {
                                                  const [e, n] = t.split("=");
                                                  I.set(`--${w(e, "-")}`, n), I.set(`-${w(e, "-")}`, n);
                                              }
                                          }))
                                    : (I = t());
                        return I;
                    })().has(e),
                U = (t) => {
                    return void 0 === (e = L ? process.env[t.toUpperCase()] : S.getItem(t)) ? null : e;
                    var e;
                };
            M("--" + "production") || U("production");
            const P = L && ((j = process.env.FORCE_COLOR), ["true", "1", "2"].includes(j));
            var j;
            const F = !M("no-colors") && (!L || process.stdout.isTTY || P) && (!L || M("color") || P || null !== U("COLORTERM") || (U("TERM") || "").includes("color")),
                B = (t) => new Uint8Array(t),
                W = (t, e, n) => new Uint8Array(t, e, n),
                q = x
                    ? (t) => {
                          let e = "";
                          for (let n = 0; n < t.byteLength; n++) e += g(t[n]);
                          return btoa(e);
                      }
                    : (t) => Buffer.from(t.buffer, t.byteOffset, t.byteLength).toString("base64"),
                H = x
                    ? (t) => {
                          const e = atob(t),
                              n = B(e.length);
                          for (let t = 0; t < e.length; t++) n[t] = e.charCodeAt(t);
                          return n;
                      }
                    : (t) => {
                          const e = Buffer.from(t, "base64");
                          return new Uint8Array(e.buffer, e.byteOffset, e.byteLength);
                      },
                V = 64,
                z = 128,
                Y = 127,
                J = Number.MAX_SAFE_INTEGER,
                $ = (Number.MIN_SAFE_INTEGER, Number.isInteger || ((t) => "number" == typeof t && isFinite(t) && l(t) === t));
            Number.isNaN, Number.parseInt;
            class K {
                constructor() {
                    (this.cpos = 0), (this.cbuf = new Uint8Array(100)), (this.bufs = []);
                }
            }
            const G = () => new K(),
                X = (t) => {
                    const e = new Uint8Array(
                        ((t) => {
                            let e = t.cpos;
                            for (let n = 0; n < t.bufs.length; n++) e += t.bufs[n].length;
                            return e;
                        })(t)
                    );
                    let n = 0;
                    for (let r = 0; r < t.bufs.length; r++) {
                        const i = t.bufs[r];
                        e.set(i, n), (n += i.length);
                    }
                    return e.set(W(t.cbuf.buffer, 0, t.cpos), n), e;
                },
                Z = (t, e) => {
                    const n = t.cbuf.length;
                    t.cpos === n && (t.bufs.push(t.cbuf), (t.cbuf = new Uint8Array(2 * n)), (t.cpos = 0)), (t.cbuf[t.cpos++] = e);
                },
                Q = Z,
                tt = (t, e) => {
                    for (; e > Y; ) Z(t, z | (Y & e)), (e = l(e / 128));
                    Z(t, Y & e);
                },
                et = (t, e) => {
                    const n = p(e);
                    for (n && (e = -e), Z(t, (e > 63 ? z : 0) | (n ? V : 0) | (63 & e)), e = l(e / 64); e > 0; ) Z(t, (e > Y ? z : 0) | (Y & e)), (e = l(e / 128));
                },
                nt = new Uint8Array(3e4),
                rt = nt.length / 3,
                it =
                    m && m.encodeInto
                        ? (t, e) => {
                              if (e.length < rt) {
                                  const n = m.encodeInto(e, nt).written || 0;
                                  tt(t, n);
                                  for (let e = 0; e < n; e++) Z(t, nt[e]);
                              } else ot(t, _(e));
                          }
                        : (t, e) => {
                              const n = unescape(encodeURIComponent(e)),
                                  r = n.length;
                              tt(t, r);
                              for (let e = 0; e < r; e++) Z(t, n.codePointAt(e));
                          },
                st = (t, e) => {
                    const n = t.cbuf.length,
                        r = t.cpos,
                        i = d(n - r, e.length),
                        s = e.length - i;
                    t.cbuf.set(e.subarray(0, i), r), (t.cpos += i), s > 0 && (t.bufs.push(t.cbuf), (t.cbuf = new Uint8Array(f(2 * n, s))), t.cbuf.set(e.subarray(i)), (t.cpos = s));
                },
                ot = (t, e) => {
                    tt(t, e.byteLength), st(t, e);
                },
                at = (t, e) => {
                    ((t, e) => {
                        const n = t.cbuf.length;
                        n - t.cpos < e && (t.bufs.push(W(t.cbuf.buffer, 0, t.cpos)), (t.cbuf = new Uint8Array(2 * f(n, e))), (t.cpos = 0));
                    })(t, e);
                    const n = new DataView(t.cbuf.buffer, t.cpos, e);
                    return (t.cpos += e), n;
                },
                ct = new DataView(new ArrayBuffer(4)),
                lt = (t, e) => {
                    switch (typeof e) {
                        case "string":
                            Z(t, 119), it(t, e);
                            break;
                        case "number":
                            $(e) && h(e) <= 2147483647
                                ? (Z(t, 125), et(t, e))
                                : ((n = e),
                                  ct.setFloat32(0, n),
                                  ct.getFloat32(0) === n
                                      ? (Z(t, 124),
                                        ((t, e) => {
                                            at(t, 4).setFloat32(0, e, !1);
                                        })(t, e))
                                      : (Z(t, 123),
                                        ((t, e) => {
                                            at(t, 8).setFloat64(0, e, !1);
                                        })(t, e)));
                            break;
                        case "bigint":
                            Z(t, 122),
                                ((t, e) => {
                                    at(t, 8).setBigInt64(0, e, !1);
                                })(t, e);
                            break;
                        case "object":
                            if (null === e) Z(t, 126);
                            else if (e instanceof Array) {
                                Z(t, 117), tt(t, e.length);
                                for (let n = 0; n < e.length; n++) lt(t, e[n]);
                            } else if (e instanceof Uint8Array) Z(t, 116), ot(t, e);
                            else {
                                Z(t, 118);
                                const n = Object.keys(e);
                                tt(t, n.length);
                                for (let r = 0; r < n.length; r++) {
                                    const i = n[r];
                                    it(t, i), lt(t, e[i]);
                                }
                            }
                            break;
                        case "boolean":
                            Z(t, e ? 120 : 121);
                            break;
                        default:
                            Z(t, 127);
                    }
                    var n;
                };
            class ht extends K {
                constructor(t) {
                    super(), (this.w = t), (this.s = null), (this.count = 0);
                }
                write(t) {
                    this.s === t ? this.count++ : (this.count > 0 && tt(this, this.count - 1), (this.count = 1), this.w(this, t), (this.s = t));
                }
            }
            const ut = (t) => {
                t.count > 0 && (et(t.encoder, 1 === t.count ? t.s : -t.s), t.count > 1 && tt(t.encoder, t.count - 2));
            };
            class dt {
                constructor() {
                    (this.encoder = new K()), (this.s = 0), (this.count = 0);
                }
                write(t) {
                    this.s === t ? this.count++ : (ut(this), (this.count = 1), (this.s = t));
                }
                toUint8Array() {
                    return ut(this), X(this.encoder);
                }
            }
            const ft = (t) => {
                if (t.count > 0) {
                    const e = 2 * t.diff + (1 === t.count ? 0 : 1);
                    et(t.encoder, e), t.count > 1 && tt(t.encoder, t.count - 2);
                }
            };
            class pt {
                constructor() {
                    (this.encoder = new K()), (this.s = 0), (this.count = 0), (this.diff = 0);
                }
                write(t) {
                    this.diff === t - this.s ? ((this.s = t), this.count++) : (ft(this), (this.count = 1), (this.diff = t - this.s), (this.s = t));
                }
                toUint8Array() {
                    return ft(this), X(this.encoder);
                }
            }
            class gt {
                constructor() {
                    (this.sarr = []), (this.s = ""), (this.lensE = new dt());
                }
                write(t) {
                    (this.s += t), this.s.length > 19 && (this.sarr.push(this.s), (this.s = "")), this.lensE.write(t.length);
                }
                toUint8Array() {
                    const t = new K();
                    return this.sarr.push(this.s), (this.s = ""), it(t, this.sarr.join("")), st(t, this.lensE.toUint8Array()), X(t);
                }
            }
            const yt = (t) => new Error(t),
                bt = () => {
                    throw yt("Method unimplemented");
                },
                wt = () => {
                    throw yt("Unexpected case");
                },
                mt = yt("Unexpected end of array"),
                _t = yt("Integer out of Range");
            class vt {
                constructor(t) {
                    (this.arr = t), (this.pos = 0);
                }
            }
            const Et = (t) => new vt(t),
                Ct = (t) =>
                    ((t, e) => {
                        const n = W(t.arr.buffer, t.pos + t.arr.byteOffset, e);
                        return (t.pos += e), n;
                    })(t, kt(t)),
                St = (t) => t.arr[t.pos++],
                kt = (t) => {
                    let e = 0,
                        n = 1;
                    const r = t.arr.length;
                    for (; t.pos < r; ) {
                        const r = t.arr[t.pos++];
                        if (((e += (r & Y) * n), (n *= 128), r < z)) return e;
                        if (e > J) throw _t;
                    }
                    throw mt;
                },
                Rt = (t) => {
                    let e = t.arr[t.pos++],
                        n = 63 & e,
                        r = 64;
                    const i = (e & V) > 0 ? -1 : 1;
                    if (0 == (e & z)) return i * n;
                    const s = t.arr.length;
                    for (; t.pos < s; ) {
                        if (((e = t.arr[t.pos++]), (n += (e & Y) * r), (r *= 128), e < z)) return i * n;
                        if (n > J) throw _t;
                    }
                    throw mt;
                },
                At = v
                    ? (t) => v.decode(Ct(t))
                    : (t) => {
                          let e = kt(t);
                          if (0 === e) return "";
                          {
                              let n = String.fromCodePoint(St(t));
                              if (--e < 100) for (; e--; ) n += String.fromCodePoint(St(t));
                              else
                                  for (; e > 0; ) {
                                      const r = e < 1e4 ? e : 1e4,
                                          i = t.arr.subarray(t.pos, t.pos + r);
                                      (t.pos += r), (n += String.fromCodePoint.apply(null, i)), (e -= r);
                                  }
                              return decodeURIComponent(escape(n));
                          }
                      },
                Tt = (t, e) => {
                    const n = new DataView(t.arr.buffer, t.arr.byteOffset + t.pos, e);
                    return (t.pos += e), n;
                },
                Dt = [
                    (t) => {},
                    (t) => null,
                    Rt,
                    (t) => Tt(t, 4).getFloat32(0, !1),
                    (t) => Tt(t, 8).getFloat64(0, !1),
                    (t) => Tt(t, 8).getBigInt64(0, !1),
                    (t) => !1,
                    (t) => !0,
                    At,
                    (t) => {
                        const e = kt(t),
                            n = {};
                        for (let r = 0; r < e; r++) n[At(t)] = Ot(t);
                        return n;
                    },
                    (t) => {
                        const e = kt(t),
                            n = [];
                        for (let r = 0; r < e; r++) n.push(Ot(t));
                        return n;
                    },
                    Ct,
                ],
                Ot = (t) => Dt[127 - St(t)](t);
            class Lt extends vt {
                constructor(t, e) {
                    super(t), (this.reader = e), (this.s = null), (this.count = 0);
                }
                read() {
                    return 0 === this.count && ((this.s = this.reader(this)), (t = this).pos !== t.arr.length ? (this.count = kt(this) + 1) : (this.count = -1)), this.count--, this.s;
                    var t;
                }
            }
            class xt extends vt {
                constructor(t) {
                    super(t), (this.s = 0), (this.count = 0);
                }
                read() {
                    if (0 === this.count) {
                        this.s = Rt(this);
                        const t = p(this.s);
                        (this.count = 1), t && ((this.s = -this.s), (this.count = kt(this) + 2));
                    }
                    return this.count--, this.s;
                }
            }
            class It extends vt {
                constructor(t) {
                    super(t), (this.s = 0), (this.count = 0), (this.diff = 0);
                }
                read() {
                    if (0 === this.count) {
                        const t = Rt(this),
                            e = 1 & t;
                        (this.diff = l(t / 2)), (this.count = 1), e && (this.count = kt(this) + 2);
                    }
                    return (this.s += this.diff), this.count--, this.s;
                }
            }
            class Nt {
                constructor(t) {
                    (this.decoder = new xt(t)), (this.str = At(this.decoder)), (this.spos = 0);
                }
                read() {
                    const t = this.spos + this.decoder.read(),
                        e = this.str.slice(this.spos, t);
                    return (this.spos = t), e;
                }
            }
            "undefined" == typeof window || (void 0 !== window.performance && window.performance);
            const Mt = "undefined" == typeof crypto ? null : crypto,
                Ut =
                    null !== Mt
                        ? (t) => {
                              const e = new ArrayBuffer(t),
                                  n = new Uint8Array(e);
                              return Mt.getRandomValues(n), e;
                          }
                        : (t) => {
                              const e = new ArrayBuffer(t),
                                  n = new Uint8Array(e);
                              for (let e = 0; e < t; e++) n[e] = Math.ceil((4294967295 * Math.random()) >>> 0);
                              return e;
                          },
                Pt = Math.random,
                jt = () => new Uint32Array(Ut(4))[0],
                Ft = [1e7] + -1e3 + -4e3 + -8e3 + -1e11,
                Bt = () => Ft.replace(/[018]/g, (t) => (t ^ (jt() & (15 >> (t / 4)))).toString(16)),
                Wt = (t) => Promise.resolve(t),
                qt = Symbol;
            class Ht {
                constructor(t, e) {
                    (this.left = t), (this.right = e);
                }
            }
            const Vt = (t, e) => new Ht(t, e),
                zt = "undefined" != typeof document ? document : {},
                Yt = ("undefined" != typeof DOMParser && new DOMParser(), zt.ELEMENT_NODE, zt.TEXT_NODE, zt.CDATA_SECTION_NODE, zt.COMMENT_NODE, zt.DOCUMENT_NODE, zt.DOCUMENT_TYPE_NODE, zt.DOCUMENT_FRAGMENT_NODE, Date.now),
                Jt = qt(),
                $t = qt(),
                Kt = qt(),
                Gt = qt(),
                Xt = qt(),
                Zt = qt(),
                Qt = qt(),
                te = qt(),
                ee = qt(),
                ne = {
                    [Jt]: Vt("font-weight", "bold"),
                    [$t]: Vt("font-weight", "normal"),
                    [Kt]: Vt("color", "blue"),
                    [Xt]: Vt("color", "green"),
                    [Gt]: Vt("color", "grey"),
                    [Zt]: Vt("color", "red"),
                    [Qt]: Vt("color", "purple"),
                    [te]: Vt("color", "orange"),
                    [ee]: Vt("color", "black"),
                },
                re = { [Jt]: "[1m", [$t]: "[2m", [Kt]: "[34m", [Xt]: "[32m", [Gt]: "[37m", [Zt]: "[31m", [Qt]: "[35m", [te]: "[38;5;208m", [ee]: "[0m" },
                ie = F
                    ? L
                        ? (t) => {
                              const e = [],
                                  n = [];
                              let r = 0;
                              for (; r < t.length; r++) {
                                  const n = t[r],
                                      i = re[n];
                                  if (void 0 !== i) e.push(i);
                                  else {
                                      if (n.constructor !== String && n.constructor !== Number) break;
                                      e.push(n);
                                  }
                              }
                              for (r > 0 && (e.push("[0m"), n.push(e.join(""))); r < t.length; r++) {
                                  const e = t[r];
                                  e instanceof Symbol || n.push(e);
                              }
                              return n;
                          }
                        : (e) => {
                              const n = [],
                                  r = [],
                                  i = t();
                              let s = [],
                                  o = 0;
                              for (; o < e.length; o++) {
                                  const t = e[o],
                                      s = ne[t];
                                  if (void 0 !== s) i.set(s.left, s.right);
                                  else {
                                      if (t.constructor !== String && t.constructor !== Number) break;
                                      {
                                          const e = ((t, e) => {
                                              const n = [];
                                              for (const [r, i] of t) n.push(e(i, r));
                                              return n;
                                          })(i, (t, e) => `${e}:${t};`).join("");
                                          o > 0 || e.length > 0 ? (n.push("%c" + t), r.push(e)) : n.push(t);
                                      }
                                  }
                              }
                              for (o > 0 && ((s = r), s.unshift(n.join(""))); o < e.length; o++) {
                                  const t = e[o];
                                  t instanceof Symbol || s.push(t);
                              }
                              return s;
                          }
                    : (t) => {
                          const e = [],
                              n = [];
                          let r = 0;
                          for (; r < t.length; r++) {
                              const n = t[r];
                              if (void 0 === re[n]) {
                                  if (n.constructor !== String && n.constructor !== Number) break;
                                  e.push(n);
                              }
                          }
                          for (r > 0 && n.push(e.join("")); r < t.length; r++) {
                              const e = t[r];
                              e instanceof Symbol || (e.constructor === Object ? n.push(JSON.stringify(e)) : n.push(e));
                          }
                          return n;
                      },
                se = (...t) => {
                    console.log(...ie(t)), oe.forEach((e) => e.print(t));
                },
                oe = new Set(),
                ae = [Xt, Qt, te, Kt];
            let ce = 0,
                le = Yt();
            const he = (t) => ({
                    [Symbol.iterator]() {
                        return this;
                    },
                    next: t,
                }),
                ue = (t, e) =>
                    he(() => {
                        const { done: n, value: r } = t.next();
                        return { done: n, value: n ? void 0 : e(r) };
                    });
            class de {
                constructor(t, e) {
                    (this.clock = t), (this.len = e);
                }
            }
            class fe {
                constructor() {
                    this.clients = new Map();
                }
            }
            const pe = (t, e, n) =>
                    e.clients.forEach((e, r) => {
                        const i = t.doc.store.clients.get(r);
                        for (let r = 0; r < e.length; r++) {
                            const s = e[r];
                            sn(t, i, s.clock, s.len, n);
                        }
                    }),
                ge = (t, e) => {
                    const n = t.clients.get(e.client);
                    return (
                        void 0 !== n &&
                        null !==
                            ((t, e) => {
                                let n = 0,
                                    r = t.length - 1;
                                for (; n <= r; ) {
                                    const i = l((n + r) / 2),
                                        s = t[i],
                                        o = s.clock;
                                    if (o <= e) {
                                        if (e < o + s.len) return i;
                                        n = i + 1;
                                    } else r = i - 1;
                                }
                                return null;
                            })(n, e.clock)
                    );
                },
                ye = (t) => {
                    t.clients.forEach((t) => {
                        let e, n;
                        for (t.sort((t, e) => t.clock - e.clock), e = 1, n = 1; e < t.length; e++) {
                            const r = t[n - 1],
                                i = t[e];
                            r.clock + r.len >= i.clock ? (r.len = f(r.len, i.clock + i.len - r.clock)) : (n < e && (t[n] = i), n++);
                        }
                        t.length = n;
                    });
                },
                be = (t, e, n, i) => {
                    r(t.clients, e, () => []).push(new de(n, i));
                },
                we = () => new fe(),
                me = (t, e) => {
                    tt(t.restEncoder, e.clients.size),
                        e.clients.forEach((e, n) => {
                            t.resetDsCurVal(), tt(t.restEncoder, n);
                            const r = e.length;
                            tt(t.restEncoder, r);
                            for (let n = 0; n < r; n++) {
                                const r = e[n];
                                t.writeDsClock(r.clock), t.writeDsLen(r.len);
                            }
                        });
                },
                _e = (t) => {
                    const e = new fe(),
                        n = kt(t.restDecoder);
                    for (let i = 0; i < n; i++) {
                        t.resetDsCurVal();
                        const n = kt(t.restDecoder),
                            i = kt(t.restDecoder);
                        if (i > 0) {
                            const s = r(e.clients, n, () => []);
                            for (let e = 0; e < i; e++) s.push(new de(t.readDsClock(), t.readDsLen()));
                        }
                    }
                    return e;
                },
                ve = (t, e, n) => {
                    const r = new fe(),
                        i = kt(t.restDecoder);
                    for (let s = 0; s < i; s++) {
                        t.resetDsCurVal();
                        const i = kt(t.restDecoder),
                            s = kt(t.restDecoder),
                            o = n.clients.get(i) || [],
                            a = Xe(n, i);
                        for (let n = 0; n < s; n++) {
                            const n = t.readDsClock(),
                                s = n + t.readDsLen();
                            if (n < a) {
                                a < s && be(r, i, a, s - a);
                                let t = Qe(o, n),
                                    c = o[t];
                                for (!c.deleted && c.id.clock < n && (o.splice(t + 1, 0, Pr(e, c, n - c.id.clock)), t++); t < o.length && ((c = o[t++]), c.id.clock < s); )
                                    c.deleted || (s < c.id.clock + c.length && o.splice(t, 0, Pr(e, c, s - c.id.clock)), c.delete(e));
                            } else be(r, i, n, s - n);
                        }
                    }
                    if (r.clients.size > 0) {
                        const t = new Oe();
                        return tt(t.restEncoder, 0), me(t, r), t.toUint8Array();
                    }
                    return null;
                },
                Ee = jt;
            class Ce extends c {
                constructor({ guid: t = Bt(), collectionid: e = null, gc: n = !0, gcFilter: r = () => !0, meta: i = null, autoLoad: s = !1, shouldLoad: o = !0 } = {}) {
                    var a;
                    super(),
                        (this.gc = n),
                        (this.gcFilter = r),
                        (this.clientID = Ee()),
                        (this.guid = t),
                        (this.collectionid = e),
                        (this.share = new Map()),
                        (this.store = new Ke()),
                        (this._transaction = null),
                        (this._transactionCleanups = []),
                        (this.subdocs = new Set()),
                        (this._item = null),
                        (this.shouldLoad = o),
                        (this.autoLoad = s),
                        (this.meta = i),
                        (this.isLoaded = !1),
                        (this.whenLoaded =
                            ((a = (t) => {
                                this.on("load", () => {
                                    (this.isLoaded = !0), t(this);
                                });
                            }),
                            new Promise(a)));
                }
                load() {
                    const t = this._item;
                    null === t ||
                        this.shouldLoad ||
                        un(
                            t.parent.doc,
                            (t) => {
                                t.subdocsLoaded.add(this);
                            },
                            null,
                            !0
                        ),
                        (this.shouldLoad = !0);
                }
                getSubdocs() {
                    return this.subdocs;
                }
                getSubdocGuids() {
                    return new Set(Array.from(this.subdocs).map((t) => t.guid));
                }
                transact(t, e = null) {
                    un(this, t, e);
                }
                get(t, e = On) {
                    const n = r(this.share, t, () => {
                            const t = new e();
                            return t._integrate(this, null), t;
                        }),
                        i = n.constructor;
                    if (e !== On && i !== e) {
                        if (i === On) {
                            const r = new e();
                            (r._map = n._map),
                                n._map.forEach((t) => {
                                    for (; null !== t; t = t.left) t.parent = r;
                                }),
                                (r._start = n._start);
                            for (let t = r._start; null !== t; t = t.right) t.parent = r;
                            return (r._length = n._length), this.share.set(t, r), r._integrate(this, null), r;
                        }
                        throw new Error(`Type with the name ${t} has already been defined with a different constructor`);
                    }
                    return n;
                }
                getArray(t = "") {
                    return this.get(t, $n);
                }
                getText(t = "") {
                    return this.get(t, hr);
                }
                getMap(t = "") {
                    return this.get(t, Gn);
                }
                getXmlFragment(t = "") {
                    return this.get(t, dr);
                }
                toJSON() {
                    const t = {};
                    return (
                        this.share.forEach((e, n) => {
                            t[n] = e.toJSON();
                        }),
                        t
                    );
                }
                destroy() {
                    a(this.subdocs).forEach((t) => t.destroy());
                    const t = this._item;
                    if (null !== t) {
                        this._item = null;
                        const e = t.content;
                        (e.doc = new Ce({ guid: this.guid, ...e.opts, shouldLoad: !1 })),
                            (e.doc._item = t),
                            un(
                                t.parent.doc,
                                (n) => {
                                    const r = e.doc;
                                    t.deleted || n.subdocsAdded.add(r), n.subdocsRemoved.add(this);
                                },
                                null,
                                !0
                            );
                    }
                    this.emit("destroyed", [!0]), this.emit("destroy", [this]), super.destroy();
                }
                on(t, e) {
                    super.on(t, e);
                }
                off(t, e) {
                    super.off(t, e);
                }
            }
            class Se {
                constructor(t) {
                    this.restDecoder = t;
                }
                resetDsCurVal() {}
                readDsClock() {
                    return kt(this.restDecoder);
                }
                readDsLen() {
                    return kt(this.restDecoder);
                }
            }
            class ke extends Se {
                readLeftID() {
                    return He(kt(this.restDecoder), kt(this.restDecoder));
                }
                readRightID() {
                    return He(kt(this.restDecoder), kt(this.restDecoder));
                }
                readClient() {
                    return kt(this.restDecoder);
                }
                readInfo() {
                    return St(this.restDecoder);
                }
                readString() {
                    return At(this.restDecoder);
                }
                readParentInfo() {
                    return 1 === kt(this.restDecoder);
                }
                readTypeRef() {
                    return kt(this.restDecoder);
                }
                readLen() {
                    return kt(this.restDecoder);
                }
                readAny() {
                    return Ot(this.restDecoder);
                }
                readBuf() {
                    return ((t) => {
                        const e = B(t.byteLength);
                        return e.set(t), e;
                    })(Ct(this.restDecoder));
                }
                readJSON() {
                    return JSON.parse(At(this.restDecoder));
                }
                readKey() {
                    return At(this.restDecoder);
                }
            }
            class Re extends class {
                constructor(t) {
                    (this.dsCurrVal = 0), (this.restDecoder = t);
                }
                resetDsCurVal() {
                    this.dsCurrVal = 0;
                }
                readDsClock() {
                    return (this.dsCurrVal += kt(this.restDecoder)), this.dsCurrVal;
                }
                readDsLen() {
                    const t = kt(this.restDecoder) + 1;
                    return (this.dsCurrVal += t), t;
                }
            } {
                constructor(t) {
                    super(t),
                        (this.keys = []),
                        kt(t),
                        (this.keyClockDecoder = new It(Ct(t))),
                        (this.clientDecoder = new xt(Ct(t))),
                        (this.leftClockDecoder = new It(Ct(t))),
                        (this.rightClockDecoder = new It(Ct(t))),
                        (this.infoDecoder = new Lt(Ct(t), St)),
                        (this.stringDecoder = new Nt(Ct(t))),
                        (this.parentInfoDecoder = new Lt(Ct(t), St)),
                        (this.typeRefDecoder = new xt(Ct(t))),
                        (this.lenDecoder = new xt(Ct(t)));
                }
                readLeftID() {
                    return new We(this.clientDecoder.read(), this.leftClockDecoder.read());
                }
                readRightID() {
                    return new We(this.clientDecoder.read(), this.rightClockDecoder.read());
                }
                readClient() {
                    return this.clientDecoder.read();
                }
                readInfo() {
                    return this.infoDecoder.read();
                }
                readString() {
                    return this.stringDecoder.read();
                }
                readParentInfo() {
                    return 1 === this.parentInfoDecoder.read();
                }
                readTypeRef() {
                    return this.typeRefDecoder.read();
                }
                readLen() {
                    return this.lenDecoder.read();
                }
                readAny() {
                    return Ot(this.restDecoder);
                }
                readBuf() {
                    return Ct(this.restDecoder);
                }
                readJSON() {
                    return Ot(this.restDecoder);
                }
                readKey() {
                    const t = this.keyClockDecoder.read();
                    if (t < this.keys.length) return this.keys[t];
                    {
                        const t = this.stringDecoder.read();
                        return this.keys.push(t), t;
                    }
                }
            }
            class Ae {
                constructor() {
                    this.restEncoder = G();
                }
                toUint8Array() {
                    return X(this.restEncoder);
                }
                resetDsCurVal() {}
                writeDsClock(t) {
                    tt(this.restEncoder, t);
                }
                writeDsLen(t) {
                    tt(this.restEncoder, t);
                }
            }
            class Te extends Ae {
                writeLeftID(t) {
                    tt(this.restEncoder, t.client), tt(this.restEncoder, t.clock);
                }
                writeRightID(t) {
                    tt(this.restEncoder, t.client), tt(this.restEncoder, t.clock);
                }
                writeClient(t) {
                    tt(this.restEncoder, t);
                }
                writeInfo(t) {
                    Q(this.restEncoder, t);
                }
                writeString(t) {
                    it(this.restEncoder, t);
                }
                writeParentInfo(t) {
                    tt(this.restEncoder, t ? 1 : 0);
                }
                writeTypeRef(t) {
                    tt(this.restEncoder, t);
                }
                writeLen(t) {
                    tt(this.restEncoder, t);
                }
                writeAny(t) {
                    lt(this.restEncoder, t);
                }
                writeBuf(t) {
                    ot(this.restEncoder, t);
                }
                writeJSON(t) {
                    it(this.restEncoder, JSON.stringify(t));
                }
                writeKey(t) {
                    it(this.restEncoder, t);
                }
            }
            class De {
                constructor() {
                    (this.restEncoder = G()), (this.dsCurrVal = 0);
                }
                toUint8Array() {
                    return X(this.restEncoder);
                }
                resetDsCurVal() {
                    this.dsCurrVal = 0;
                }
                writeDsClock(t) {
                    const e = t - this.dsCurrVal;
                    (this.dsCurrVal = t), tt(this.restEncoder, e);
                }
                writeDsLen(t) {
                    0 === t && wt(), tt(this.restEncoder, t - 1), (this.dsCurrVal += t);
                }
            }
            class Oe extends De {
                constructor() {
                    super(),
                        (this.keyMap = new Map()),
                        (this.keyClock = 0),
                        (this.keyClockEncoder = new pt()),
                        (this.clientEncoder = new dt()),
                        (this.leftClockEncoder = new pt()),
                        (this.rightClockEncoder = new pt()),
                        (this.infoEncoder = new ht(Q)),
                        (this.stringEncoder = new gt()),
                        (this.parentInfoEncoder = new ht(Q)),
                        (this.typeRefEncoder = new dt()),
                        (this.lenEncoder = new dt());
                }
                toUint8Array() {
                    const t = G();
                    return (
                        tt(t, 0),
                        ot(t, this.keyClockEncoder.toUint8Array()),
                        ot(t, this.clientEncoder.toUint8Array()),
                        ot(t, this.leftClockEncoder.toUint8Array()),
                        ot(t, this.rightClockEncoder.toUint8Array()),
                        ot(t, X(this.infoEncoder)),
                        ot(t, this.stringEncoder.toUint8Array()),
                        ot(t, X(this.parentInfoEncoder)),
                        ot(t, this.typeRefEncoder.toUint8Array()),
                        ot(t, this.lenEncoder.toUint8Array()),
                        st(t, X(this.restEncoder)),
                        X(t)
                    );
                }
                writeLeftID(t) {
                    this.clientEncoder.write(t.client), this.leftClockEncoder.write(t.clock);
                }
                writeRightID(t) {
                    this.clientEncoder.write(t.client), this.rightClockEncoder.write(t.clock);
                }
                writeClient(t) {
                    this.clientEncoder.write(t);
                }
                writeInfo(t) {
                    this.infoEncoder.write(t);
                }
                writeString(t) {
                    this.stringEncoder.write(t);
                }
                writeParentInfo(t) {
                    this.parentInfoEncoder.write(t ? 1 : 0);
                }
                writeTypeRef(t) {
                    this.typeRefEncoder.write(t);
                }
                writeLen(t) {
                    this.lenEncoder.write(t);
                }
                writeAny(t) {
                    lt(this.restEncoder, t);
                }
                writeBuf(t) {
                    ot(this.restEncoder, t);
                }
                writeJSON(t) {
                    lt(this.restEncoder, t);
                }
                writeKey(t) {
                    const e = this.keyMap.get(t);
                    void 0 === e ? (this.keyClockEncoder.write(this.keyClock++), this.stringEncoder.write(t)) : this.keyClockEncoder.write(e);
                }
            }
            const Le = (t, e, n) => {
                    const r = new Map();
                    n.forEach((t, n) => {
                        Xe(e, n) > t && r.set(n, t);
                    }),
                        Ge(e).forEach((t, e) => {
                            n.has(e) || r.set(e, 0);
                        }),
                        tt(t.restEncoder, r.size),
                        Array.from(r.entries())
                            .sort((t, e) => e[0] - t[0])
                            .forEach(([n, r]) => {
                                ((t, e, n, r) => {
                                    r = f(r, e[0].id.clock);
                                    const i = Qe(e, r);
                                    tt(t.restEncoder, e.length - i), t.writeClient(n), tt(t.restEncoder, r);
                                    const s = e[i];
                                    s.write(t, r - s.id.clock);
                                    for (let n = i + 1; n < e.length; n++) e[n].write(t, 0);
                                })(t, e.clients.get(n), n, r);
                            });
                },
                xe = (e, n, i, s = Re) => {
                    const o = Et(n);
                    ((e, n, i, s = new Re(e)) => {
                        un(
                            n,
                            (e) => {
                                e.local = !1;
                                let n = !1;
                                const i = e.doc,
                                    o = i.store,
                                    a = ((e, n) => {
                                        const r = t(),
                                            i = kt(e.restDecoder);
                                        for (let t = 0; t < i; t++) {
                                            const t = kt(e.restDecoder),
                                                i = new Array(t),
                                                s = e.readClient();
                                            let o = kt(e.restDecoder);
                                            r.set(s, { i: 0, refs: i });
                                            for (let r = 0; r < t; r++) {
                                                const t = e.readInfo();
                                                switch (31 & t) {
                                                    case 0: {
                                                        const t = e.readLen();
                                                        (i[r] = new wr(He(s, o), t)), (o += t);
                                                        break;
                                                    }
                                                    case 10: {
                                                        const t = kt(e.restDecoder);
                                                        (i[r] = new Wr(He(s, o), t)), (o += t);
                                                        break;
                                                    }
                                                    default: {
                                                        const a = 0 == (192 & t),
                                                            c = new jr(
                                                                He(s, o),
                                                                null,
                                                                (t & z) === z ? e.readLeftID() : null,
                                                                null,
                                                                (t & V) === V ? e.readRightID() : null,
                                                                a ? (e.readParentInfo() ? n.get(e.readString()) : e.readLeftID()) : null,
                                                                a && 32 == (32 & t) ? e.readString() : null,
                                                                Fr(e, t)
                                                            );
                                                        (i[r] = c), (o += c.length);
                                                    }
                                                }
                                            }
                                        }
                                        return r;
                                    })(s, i),
                                    c = ((t, e, n) => {
                                        const i = [];
                                        let s = Array.from(n.keys()).sort((t, e) => t - e);
                                        if (0 === s.length) return null;
                                        const o = () => {
                                            if (0 === s.length) return null;
                                            let t = n.get(s[s.length - 1]);
                                            for (; t.refs.length === t.i; ) {
                                                if ((s.pop(), !(s.length > 0))) return null;
                                                t = n.get(s[s.length - 1]);
                                            }
                                            return t;
                                        };
                                        let a = o();
                                        if (null === a && 0 === i.length) return null;
                                        const c = new Ke(),
                                            l = new Map(),
                                            h = (t, e) => {
                                                const n = l.get(t);
                                                (null == n || n > e) && l.set(t, e);
                                            };
                                        let u = a.refs[a.i++];
                                        const d = new Map(),
                                            f = () => {
                                                for (const t of i) {
                                                    const e = t.id.client,
                                                        r = n.get(e);
                                                    r ? (r.i--, c.clients.set(e, r.refs.slice(r.i)), n.delete(e), (r.i = 0), (r.refs = [])) : c.clients.set(e, [t]), (s = s.filter((t) => t !== e));
                                                }
                                                i.length = 0;
                                            };
                                        for (;;) {
                                            if (u.constructor !== Wr) {
                                                const s = r(d, u.id.client, () => Xe(e, u.id.client)) - u.id.clock;
                                                if (s < 0) i.push(u), h(u.id.client, u.id.clock - 1), f();
                                                else {
                                                    const r = u.getMissing(t, e);
                                                    if (null !== r) {
                                                        i.push(u);
                                                        const t = n.get(r) || { refs: [], i: 0 };
                                                        if (t.refs.length !== t.i) {
                                                            u = t.refs[t.i++];
                                                            continue;
                                                        }
                                                        h(r, Xe(e, r)), f();
                                                    } else (0 === s || s < u.length) && (u.integrate(t, s), d.set(u.id.client, u.id.clock + u.length));
                                                }
                                            }
                                            if (i.length > 0) u = i.pop();
                                            else if (null !== a && a.i < a.refs.length) u = a.refs[a.i++];
                                            else {
                                                if (((a = o()), null === a)) break;
                                                u = a.refs[a.i++];
                                            }
                                        }
                                        if (c.clients.size > 0) {
                                            const t = new Oe();
                                            return Le(t, c, new Map()), tt(t.restEncoder, 0), { missing: l, update: t.toUint8Array() };
                                        }
                                        return null;
                                    })(e, o, a),
                                    l = o.pendingStructs;
                                if (l) {
                                    for (const [t, e] of l.missing)
                                        if (e < Xe(o, t)) {
                                            n = !0;
                                            break;
                                        }
                                    if (c) {
                                        for (const [t, e] of c.missing) {
                                            const n = l.missing.get(t);
                                            (null == n || n > e) && l.missing.set(t, e);
                                        }
                                        l.update = yn([l.update, c.update]);
                                    }
                                } else o.pendingStructs = c;
                                const h = ve(s, e, o);
                                if (o.pendingDs) {
                                    const t = new Re(Et(o.pendingDs));
                                    kt(t.restDecoder);
                                    const n = ve(t, e, o);
                                    o.pendingDs = h && n ? yn([h, n]) : h || n;
                                } else o.pendingDs = h;
                                if (n) {
                                    const t = o.pendingStructs.update;
                                    (o.pendingStructs = null), xe(e.doc, t);
                                }
                            },
                            i,
                            !1
                        );
                    })(o, e, i, new s(o));
                },
                Ie = (t, e = new Uint8Array([0]), n = new Oe()) => {
                    ((t, e, n = new Map()) => {
                        Le(t, e.store, n),
                            me(
                                t,
                                ((t) => {
                                    const e = we();
                                    return (
                                        t.clients.forEach((t, n) => {
                                            const r = [];
                                            for (let e = 0; e < t.length; e++) {
                                                const n = t[e];
                                                if (n.deleted) {
                                                    const i = n.id.clock;
                                                    let s = n.length;
                                                    if (e + 1 < t.length) for (let n = t[e + 1]; e + 1 < t.length && n.deleted; n = t[1 + ++e]) s += n.length;
                                                    r.push(new de(i, s));
                                                }
                                            }
                                            r.length > 0 && e.clients.set(n, r);
                                        }),
                                        e
                                    );
                                })(e.store)
                            );
                    })(n, t, Ne(e));
                    const r = [n.toUint8Array()];
                    if ((t.store.pendingDs && r.push(t.store.pendingDs), t.store.pendingStructs && r.push(bn(t.store.pendingStructs.update, e)), r.length > 1)) {
                        if (n.constructor === Te) return pn(r.map((t, e) => (0 === e ? t : vn(t))));
                        if (n.constructor === Oe) return yn(r);
                    }
                    return r[0];
                },
                Ne = (t) =>
                    ((t) => {
                        const e = new Map(),
                            n = kt(t.restDecoder);
                        for (let r = 0; r < n; r++) {
                            const n = kt(t.restDecoder),
                                r = kt(t.restDecoder);
                            e.set(n, r);
                        }
                        return e;
                    })(new Se(Et(t))),
                Me = (t, e) => (
                    tt(t.restEncoder, e.size),
                    Array.from(e.entries())
                        .sort((t, e) => e[0] - t[0])
                        .forEach(([e, n]) => {
                            tt(t.restEncoder, e), tt(t.restEncoder, n);
                        }),
                    t
                );
            class Ue {
                constructor() {
                    this.l = [];
                }
            }
            const Pe = () => new Ue(),
                je = (t, e) => t.l.push(e),
                Fe = (t, e) => {
                    const n = t.l,
                        r = n.length;
                    (t.l = n.filter((t) => e !== t)), r === t.l.length && console.error("[yjs] Tried to remove event handler that doesn't exist.");
                },
                Be = (t, e, n) => T(t.l, [e, n]);
            class We {
                constructor(t, e) {
                    (this.client = t), (this.clock = e);
                }
            }
            const qe = (t, e) => t === e || (null !== t && null !== e && t.client === e.client && t.clock === e.clock),
                He = (t, e) => new We(t, e);
            class Ve {
                constructor(t, e) {
                    (this.ds = t), (this.sv = e);
                }
            }
            const ze = ((Je = we()), ($e = new Map()), new Ve(Je, $e), (t, e) => (void 0 === e ? !t.deleted : e.sv.has(t.id.client) && (e.sv.get(t.id.client) || 0) > t.id.clock && !ge(e.ds, t.id))),
                Ye = (t, e) => {
                    const n = r(t.meta, Ye, i),
                        s = t.doc.store;
                    n.has(e) ||
                        (e.sv.forEach((e, n) => {
                            e < Xe(s, n) && nn(t, He(n, e));
                        }),
                        pe(t, e.ds, (t) => {}),
                        n.add(e));
                };
            var Je, $e;
            class Ke {
                constructor() {
                    (this.clients = new Map()), (this.pendingStructs = null), (this.pendingDs = null);
                }
            }
            const Ge = (t) => {
                    const e = new Map();
                    return (
                        t.clients.forEach((t, n) => {
                            const r = t[t.length - 1];
                            e.set(n, r.id.clock + r.length);
                        }),
                        e
                    );
                },
                Xe = (t, e) => {
                    const n = t.clients.get(e);
                    if (void 0 === n) return 0;
                    const r = n[n.length - 1];
                    return r.id.clock + r.length;
                },
                Ze = (t, e) => {
                    let n = t.clients.get(e.id.client);
                    if (void 0 === n) (n = []), t.clients.set(e.id.client, n);
                    else {
                        const t = n[n.length - 1];
                        if (t.id.clock + t.length !== e.id.clock) throw wt();
                    }
                    n.push(e);
                },
                Qe = (t, e) => {
                    let n = 0,
                        r = t.length - 1,
                        i = t[r],
                        s = i.id.clock;
                    if (s === e) return r;
                    let o = l((e / (s + i.length - 1)) * r);
                    for (; n <= r; ) {
                        if (((i = t[o]), (s = i.id.clock), s <= e)) {
                            if (e < s + i.length) return o;
                            n = o + 1;
                        } else r = o - 1;
                        o = l((n + r) / 2);
                    }
                    throw wt();
                },
                tn = (t, e) => {
                    const n = t.clients.get(e.client);
                    return n[Qe(n, e.clock)];
                },
                en = (t, e, n) => {
                    const r = Qe(e, n),
                        i = e[r];
                    return i.id.clock < n && i instanceof jr ? (e.splice(r + 1, 0, Pr(t, i, n - i.id.clock)), r + 1) : r;
                },
                nn = (t, e) => {
                    const n = t.doc.store.clients.get(e.client);
                    return n[en(t, n, e.clock)];
                },
                rn = (t, e, n) => {
                    const r = e.clients.get(n.client),
                        i = Qe(r, n.clock),
                        s = r[i];
                    return n.clock !== s.id.clock + s.length - 1 && s.constructor !== wr && r.splice(i + 1, 0, Pr(t, s, n.clock - s.id.clock + 1)), s;
                },
                sn = (t, e, n, r, i) => {
                    if (0 === r) return;
                    const s = n + r;
                    let o,
                        a = en(t, e, n);
                    do {
                        (o = e[a++]), s < o.id.clock + o.length && en(t, e, s), i(o);
                    } while (a < e.length && e[a].id.clock < s);
                };
            class on {
                constructor(t, e, n) {
                    (this.doc = t),
                        (this.deleteSet = new fe()),
                        (this.beforeState = Ge(t.store)),
                        (this.afterState = new Map()),
                        (this.changed = new Map()),
                        (this.changedParentTypes = new Map()),
                        (this._mergeStructs = []),
                        (this.origin = e),
                        (this.meta = new Map()),
                        (this.local = n),
                        (this.subdocsAdded = new Set()),
                        (this.subdocsRemoved = new Set()),
                        (this.subdocsLoaded = new Set());
                }
            }
            const an = (t, e) =>
                    !(
                        (0 === e.deleteSet.clients.size &&
                            !((t, n) => {
                                for (const [n, s] of t) if (((r = s), (i = n), e.beforeState.get(i) !== r)) return !0;
                                var r, i;
                                return !1;
                            })(e.afterState)) ||
                        (ye(e.deleteSet),
                        ((t, e) => {
                            Le(t, e.doc.store, e.beforeState);
                        })(t, e),
                        me(t, e.deleteSet),
                        0)
                    ),
                cn = (t, e, n) => {
                    const s = e._item;
                    (null === s || (s.id.clock < (t.beforeState.get(s.id.client) || 0) && !s.deleted)) && r(t.changed, e, i).add(n);
                },
                ln = (t, e) => {
                    const n = t[e - 1],
                        r = t[e];
                    n.deleted === r.deleted && n.constructor === r.constructor && n.mergeWith(r) && (t.splice(e, 1), r instanceof jr && null !== r.parentSub && r.parent._map.get(r.parentSub) === r && r.parent._map.set(r.parentSub, n));
                },
                hn = (t, e) => {
                    if (e < t.length) {
                        const n = t[e],
                            r = n.doc,
                            i = r.store,
                            s = n.deleteSet,
                            o = n._mergeStructs;
                        try {
                            ye(s), (n.afterState = Ge(n.doc.store)), (r._transaction = null), r.emit("beforeObserverCalls", [n, r]);
                            const a = [];
                            n.changed.forEach((t, e) =>
                                a.push(() => {
                                    (null !== e._item && e._item.deleted) || e._callObserver(n, t);
                                })
                            ),
                                a.push(() => {
                                    n.changedParentTypes.forEach((t, e) =>
                                        a.push(() => {
                                            (null !== e._item && e._item.deleted) ||
                                                ((t = t.filter((t) => null === t.target._item || !t.target._item.deleted)).forEach((t) => {
                                                    t.currentTarget = e;
                                                }),
                                                t.sort((t, e) => t.path.length - e.path.length),
                                                Be(e._dEH, t, n));
                                        })
                                    ),
                                        a.push(() => r.emit("afterTransaction", [n, r]));
                                }),
                                T(a, []);
                        } finally {
                            r.gc &&
                                ((t, e, n) => {
                                    for (const [r, i] of t.clients.entries()) {
                                        const t = e.clients.get(r);
                                        for (let r = i.length - 1; r >= 0; r--) {
                                            const s = i[r],
                                                o = s.clock + s.len;
                                            for (let r = Qe(t, s.clock), i = t[r]; r < t.length && i.id.clock < o; i = t[++r]) {
                                                const i = t[r];
                                                if (s.clock + s.len <= i.id.clock) break;
                                                i instanceof jr && i.deleted && !i.keep && n(i) && i.gc(e, !1);
                                            }
                                        }
                                    }
                                })(s, i, r.gcFilter),
                                ((t, e) => {
                                    t.clients.forEach((t, n) => {
                                        const r = e.clients.get(n);
                                        for (let e = t.length - 1; e >= 0; e--) {
                                            const n = t[e];
                                            for (let t = d(r.length - 1, 1 + Qe(r, n.clock + n.len - 1)), e = r[t]; t > 0 && e.id.clock >= n.clock; e = r[--t]) ln(r, t);
                                        }
                                    });
                                })(s, i),
                                n.afterState.forEach((t, e) => {
                                    const r = n.beforeState.get(e) || 0;
                                    if (r !== t) {
                                        const t = i.clients.get(e),
                                            n = f(Qe(t, r), 1);
                                        for (let e = t.length - 1; e >= n; e--) ln(t, e);
                                    }
                                });
                            for (let t = 0; t < o.length; t++) {
                                const { client: e, clock: n } = o[t].id,
                                    r = i.clients.get(e),
                                    s = Qe(r, n);
                                s + 1 < r.length && ln(r, s + 1), s > 0 && ln(r, s);
                            }
                            if (
                                (n.local || n.afterState.get(r.clientID) === n.beforeState.get(r.clientID) || (se(te, Jt, "[yjs] ", $t, Zt, "Changed the client-id because another client seems to be using it."), (r.clientID = Ee())),
                                r.emit("afterTransactionCleanup", [n, r]),
                                r._observers.has("update"))
                            ) {
                                const t = new Te();
                                an(t, n) && r.emit("update", [t.toUint8Array(), n.origin, r, n]);
                            }
                            if (r._observers.has("updateV2")) {
                                const t = new Oe();
                                an(t, n) && r.emit("updateV2", [t.toUint8Array(), n.origin, r, n]);
                            }
                            const { subdocsAdded: a, subdocsLoaded: c, subdocsRemoved: l } = n;
                            (a.size > 0 || l.size > 0 || c.size > 0) &&
                                (a.forEach((t) => {
                                    (t.clientID = r.clientID), null == t.collectionid && (t.collectionid = r.collectionid), r.subdocs.add(t);
                                }),
                                l.forEach((t) => r.subdocs.delete(t)),
                                r.emit("subdocs", [{ loaded: c, added: a, removed: l }, r, n]),
                                l.forEach((t) => t.destroy())),
                                t.length <= e + 1 ? ((r._transactionCleanups = []), r.emit("afterAllTransactions", [r, t])) : hn(t, e + 1);
                        }
                    }
                },
                un = (t, e, n = null, r = !0) => {
                    const i = t._transactionCleanups;
                    let s = !1;
                    null === t._transaction && ((s = !0), (t._transaction = new on(t, n, r)), i.push(t._transaction), 1 === i.length && t.emit("beforeAllTransactions", [t]), t.emit("beforeTransaction", [t._transaction, t]));
                    try {
                        e(t._transaction);
                    } finally {
                        s && i[0] === t._transaction && hn(i, 0);
                    }
                };
            class dn {
                constructor(t, e) {
                    (this.gen = (function* (t) {
                        const e = kt(t.restDecoder);
                        for (let n = 0; n < e; n++) {
                            const e = kt(t.restDecoder),
                                n = t.readClient();
                            let r = kt(t.restDecoder);
                            for (let i = 0; i < e; i++) {
                                const e = t.readInfo();
                                if (10 === e) {
                                    const e = kt(t.restDecoder);
                                    yield new Wr(He(n, r), e), (r += e);
                                } else if (0 != (31 & e)) {
                                    const i = 0 == (192 & e),
                                        s = new jr(
                                            He(n, r),
                                            null,
                                            (e & z) === z ? t.readLeftID() : null,
                                            null,
                                            (e & V) === V ? t.readRightID() : null,
                                            i ? (t.readParentInfo() ? t.readString() : t.readLeftID()) : null,
                                            i && 32 == (32 & e) ? t.readString() : null,
                                            Fr(t, e)
                                        );
                                    yield s, (r += s.length);
                                } else {
                                    const e = t.readLen();
                                    yield new wr(He(n, r), e), (r += e);
                                }
                            }
                        }
                    })(t)),
                        (this.curr = null),
                        (this.done = !1),
                        (this.filterSkips = e),
                        this.next();
                }
                next() {
                    do {
                        this.curr = this.gen.next().value || null;
                    } while (this.filterSkips && null !== this.curr && this.curr.constructor === Wr);
                    return this.curr;
                }
            }
            class fn {
                constructor(t) {
                    (this.currClient = 0), (this.startClock = 0), (this.written = 0), (this.encoder = t), (this.clientStructs = []);
                }
            }
            const pn = (t) => yn(t, ke, Te),
                gn = (t, e) => {
                    if (t.constructor === wr) {
                        const { client: n, clock: r } = t.id;
                        return new wr(He(n, r + e), t.length - e);
                    }
                    if (t.constructor === Wr) {
                        const { client: n, clock: r } = t.id;
                        return new Wr(He(n, r + e), t.length - e);
                    }
                    {
                        const n = t,
                            { client: r, clock: i } = n.id;
                        return new jr(He(r, i + e), null, He(r, i + e - 1), null, n.rightOrigin, n.parent, n.parentSub, n.content.splice(e));
                    }
                },
                yn = (t, e = Re, n = Oe) => {
                    if (1 === t.length) return t[0];
                    const r = t.map((t) => new e(Et(t)));
                    let i = r.map((t) => new dn(t, !0)),
                        s = null;
                    const a = new n(),
                        c = new fn(a);
                    for (
                        ;
                        (i = i.filter((t) => null !== t.curr)),
                            i.sort((t, e) => {
                                if (t.curr.id.client === e.curr.id.client) {
                                    const n = t.curr.id.clock - e.curr.id.clock;
                                    return 0 === n ? (t.curr.constructor === e.curr.constructor ? 0 : t.curr.constructor === Wr ? 1 : -1) : n;
                                }
                                return e.curr.id.client - t.curr.id.client;
                            }),
                            0 !== i.length;

                    ) {
                        const t = i[0],
                            e = t.curr.id.client;
                        if (null !== s) {
                            let n = t.curr,
                                r = !1;
                            for (; null !== n && n.id.clock + n.length <= s.struct.id.clock + s.struct.length && n.id.client >= s.struct.id.client; ) (n = t.next()), (r = !0);
                            if (null === n || n.id.client !== e || (r && n.id.clock > s.struct.id.clock + s.struct.length)) continue;
                            if (e !== s.struct.id.client) mn(c, s.struct, s.offset), (s = { struct: n, offset: 0 }), t.next();
                            else if (s.struct.id.clock + s.struct.length < n.id.clock)
                                if (s.struct.constructor === Wr) s.struct.length = n.id.clock + n.length - s.struct.id.clock;
                                else {
                                    mn(c, s.struct, s.offset);
                                    const t = n.id.clock - s.struct.id.clock - s.struct.length;
                                    s = { struct: new Wr(He(e, s.struct.id.clock + s.struct.length), t), offset: 0 };
                                }
                            else {
                                const e = s.struct.id.clock + s.struct.length - n.id.clock;
                                e > 0 && (s.struct.constructor === Wr ? (s.struct.length -= e) : (n = gn(n, e))), s.struct.mergeWith(n) || (mn(c, s.struct, s.offset), (s = { struct: n, offset: 0 }), t.next());
                            }
                        } else (s = { struct: t.curr, offset: 0 }), t.next();
                        for (let n = t.curr; null !== n && n.id.client === e && n.id.clock === s.struct.id.clock + s.struct.length && n.constructor !== Wr; n = t.next()) mn(c, s.struct, s.offset), (s = { struct: n, offset: 0 });
                    }
                    null !== s && (mn(c, s.struct, s.offset), (s = null)), _n(c);
                    const l = ((t) => {
                        const e = new fe();
                        for (let n = 0; n < t.length; n++)
                            t[n].clients.forEach((r, i) => {
                                if (!e.clients.has(i)) {
                                    const s = r.slice();
                                    for (let e = n + 1; e < t.length; e++) o(s, t[e].clients.get(i) || []);
                                    e.clients.set(i, s);
                                }
                            });
                        return ye(e), e;
                    })(r.map((t) => _e(t)));
                    return me(a, l), a.toUint8Array();
                },
                bn = (t, e, n = Re, r = Oe) => {
                    const i = Ne(e),
                        s = new r(),
                        o = new fn(s),
                        a = new n(Et(t)),
                        c = new dn(a, !1);
                    for (; c.curr; ) {
                        const t = c.curr,
                            e = t.id.client,
                            n = i.get(e) || 0;
                        if (c.curr.constructor !== Wr)
                            if (t.id.clock + t.length > n) for (mn(o, t, f(n - t.id.clock, 0)), c.next(); c.curr && c.curr.id.client === e; ) mn(o, c.curr, 0), c.next();
                            else for (; c.curr && c.curr.id.client === e && c.curr.id.clock + c.curr.length <= n; ) c.next();
                        else c.next();
                    }
                    _n(o);
                    const l = _e(a);
                    return me(s, l), s.toUint8Array();
                },
                wn = (t) => {
                    t.written > 0 && (t.clientStructs.push({ written: t.written, restEncoder: X(t.encoder.restEncoder) }), (t.encoder.restEncoder = G()), (t.written = 0));
                },
                mn = (t, e, n) => {
                    t.written > 0 && t.currClient !== e.id.client && wn(t),
                        0 === t.written && ((t.currClient = e.id.client), t.encoder.writeClient(e.id.client), tt(t.encoder.restEncoder, e.id.clock + n)),
                        e.write(t.encoder, n),
                        t.written++;
                },
                _n = (t) => {
                    wn(t);
                    const e = t.encoder.restEncoder;
                    tt(e, t.clientStructs.length);
                    for (let n = 0; n < t.clientStructs.length; n++) {
                        const r = t.clientStructs[n];
                        tt(e, r.written), st(e, r.restEncoder);
                    }
                },
                vn = (t) =>
                    ((t, e, n) => {
                        const r = new e(Et(t)),
                            i = new dn(r, !1),
                            s = new n(),
                            o = new fn(s);
                        for (let t = i.curr; null !== t; t = i.next()) mn(o, t, 0);
                        _n(o);
                        const a = _e(r);
                        return me(s, a), s.toUint8Array();
                    })(t, Re, Te);
            class En {
                constructor(t, e) {
                    (this.target = t), (this.currentTarget = t), (this.transaction = e), (this._changes = null), (this._keys = null), (this._delta = null);
                }
                get path() {
                    return Cn(this.currentTarget, this.target);
                }
                deletes(t) {
                    return ge(this.transaction.deleteSet, t.id);
                }
                get keys() {
                    if (null === this._keys) {
                        const t = new Map(),
                            e = this.target;
                        this.transaction.changed.get(e).forEach((n) => {
                            if (null !== n) {
                                const r = e._map.get(n);
                                let i, o;
                                if (this.adds(r)) {
                                    let t = r.left;
                                    for (; null !== t && this.adds(t); ) t = t.left;
                                    if (this.deletes(r)) {
                                        if (null === t || !this.deletes(t)) return;
                                        (i = "delete"), (o = s(t.content.getContent()));
                                    } else null !== t && this.deletes(t) ? ((i = "update"), (o = s(t.content.getContent()))) : ((i = "add"), (o = void 0));
                                } else {
                                    if (!this.deletes(r)) return;
                                    (i = "delete"), (o = s(r.content.getContent()));
                                }
                                t.set(n, { action: i, oldValue: o });
                            }
                        }),
                            (this._keys = t);
                    }
                    return this._keys;
                }
                get delta() {
                    return this.changes.delta;
                }
                adds(t) {
                    return t.id.clock >= (this.transaction.beforeState.get(t.id.client) || 0);
                }
                get changes() {
                    let t = this._changes;
                    if (null === t) {
                        const e = this.target,
                            n = i(),
                            r = i(),
                            s = [];
                        if (((t = { added: n, deleted: r, delta: s, keys: this.keys }), this.transaction.changed.get(e).has(null))) {
                            let t = null;
                            const i = () => {
                                t && s.push(t);
                            };
                            for (let s = e._start; null !== s; s = s.right)
                                s.deleted
                                    ? this.deletes(s) && !this.adds(s) && ((null !== t && void 0 !== t.delete) || (i(), (t = { delete: 0 })), (t.delete += s.length), r.add(s))
                                    : this.adds(s)
                                    ? ((null !== t && void 0 !== t.insert) || (i(), (t = { insert: [] })), (t.insert = t.insert.concat(s.content.getContent())), n.add(s))
                                    : ((null !== t && void 0 !== t.retain) || (i(), (t = { retain: 0 })), (t.retain += s.length));
                            null !== t && void 0 === t.retain && i();
                        }
                        this._changes = t;
                    }
                    return t;
                }
            }
            const Cn = (t, e) => {
                const n = [];
                for (; null !== e._item && e !== t; ) {
                    if (null !== e._item.parentSub) n.unshift(e._item.parentSub);
                    else {
                        let t = 0,
                            r = e._item.parent._start;
                        for (; r !== e._item && null !== r; ) r.deleted || t++, (r = r.right);
                        n.unshift(t);
                    }
                    e = e._item.parent;
                }
                return n;
            };
            let Sn = 0;
            class kn {
                constructor(t, e) {
                    (t.marker = !0), (this.p = t), (this.index = e), (this.timestamp = Sn++);
                }
            }
            const Rn = (t, e, n) => {
                    (t.p.marker = !1), (t.p = e), (e.marker = !0), (t.index = n), (t.timestamp = Sn++);
                },
                An = (t, e) => {
                    if (null === t._start || 0 === e || null === t._searchMarker) return null;
                    const n = 0 === t._searchMarker.length ? null : t._searchMarker.reduce((t, n) => (h(e - t.index) < h(e - n.index) ? t : n));
                    let r = t._start,
                        i = 0;
                    for (
                        null !== n &&
                        ((r = n.p),
                        (i = n.index),
                        ((t) => {
                            t.timestamp = Sn++;
                        })(n));
                        null !== r.right && i < e;

                    ) {
                        if (!r.deleted && r.countable) {
                            if (e < i + r.length) break;
                            i += r.length;
                        }
                        r = r.right;
                    }
                    for (; null !== r.left && i > e; ) (r = r.left), !r.deleted && r.countable && (i -= r.length);
                    for (; null !== r.left && r.left.id.client === r.id.client && r.left.id.clock + r.left.length === r.id.clock; ) (r = r.left), !r.deleted && r.countable && (i -= r.length);
                    return null !== n && h(n.index - i) < r.parent.length / 80
                        ? (Rn(n, r, i), n)
                        : ((t, e, n) => {
                              if (t.length >= 80) {
                                  const r = t.reduce((t, e) => (t.timestamp < e.timestamp ? t : e));
                                  return Rn(r, e, n), r;
                              }
                              {
                                  const r = new kn(e, n);
                                  return t.push(r), r;
                              }
                          })(t._searchMarker, r, i);
                },
                Tn = (t, e, n) => {
                    for (let r = t.length - 1; r >= 0; r--) {
                        const i = t[r];
                        if (n > 0) {
                            let e = i.p;
                            for (e.marker = !1; e && (e.deleted || !e.countable); ) (e = e.left), e && !e.deleted && e.countable && (i.index -= e.length);
                            if (null === e || !0 === e.marker) {
                                t.splice(r, 1);
                                continue;
                            }
                            (i.p = e), (e.marker = !0);
                        }
                        (e < i.index || (n > 0 && e === i.index)) && (i.index = f(e, i.index + n));
                    }
                },
                Dn = (t, e, n) => {
                    const i = t,
                        s = e.changedParentTypes;
                    for (; r(s, t, () => []).push(n), null !== t._item; ) t = t._item.parent;
                    Be(i._eH, n, e);
                };
            class On {
                constructor() {
                    (this._item = null), (this._map = new Map()), (this._start = null), (this.doc = null), (this._length = 0), (this._eH = Pe()), (this._dEH = Pe()), (this._searchMarker = null);
                }
                get parent() {
                    return this._item ? this._item.parent : null;
                }
                _integrate(t, e) {
                    (this.doc = t), (this._item = e);
                }
                _copy() {
                    throw bt();
                }
                clone() {
                    throw bt();
                }
                _write(t) {}
                get _first() {
                    let t = this._start;
                    for (; null !== t && t.deleted; ) t = t.right;
                    return t;
                }
                _callObserver(t, e) {
                    !t.local && this._searchMarker && (this._searchMarker.length = 0);
                }
                observe(t) {
                    je(this._eH, t);
                }
                observeDeep(t) {
                    je(this._dEH, t);
                }
                unobserve(t) {
                    Fe(this._eH, t);
                }
                unobserveDeep(t) {
                    Fe(this._dEH, t);
                }
                toJSON() {}
            }
            const Ln = (t, e, n) => {
                    e < 0 && (e = t._length + e), n < 0 && (n = t._length + n);
                    let r = n - e;
                    const i = [];
                    let s = t._start;
                    for (; null !== s && r > 0; ) {
                        if (s.countable && !s.deleted) {
                            const t = s.content.getContent();
                            if (t.length <= e) e -= t.length;
                            else {
                                for (let n = e; n < t.length && r > 0; n++) i.push(t[n]), r--;
                                e = 0;
                            }
                        }
                        s = s.right;
                    }
                    return i;
                },
                xn = (t) => {
                    const e = [];
                    let n = t._start;
                    for (; null !== n; ) {
                        if (n.countable && !n.deleted) {
                            const t = n.content.getContent();
                            for (let n = 0; n < t.length; n++) e.push(t[n]);
                        }
                        n = n.right;
                    }
                    return e;
                },
                In = (t, e) => {
                    let n = 0,
                        r = t._start;
                    for (; null !== r; ) {
                        if (r.countable && !r.deleted) {
                            const i = r.content.getContent();
                            for (let r = 0; r < i.length; r++) e(i[r], n++, t);
                        }
                        r = r.right;
                    }
                },
                Nn = (t, e) => {
                    const n = [];
                    return (
                        In(t, (r, i) => {
                            n.push(e(r, i, t));
                        }),
                        n
                    );
                },
                Mn = (t) => {
                    let e = t._start,
                        n = null,
                        r = 0;
                    return {
                        [Symbol.iterator]() {
                            return this;
                        },
                        next: () => {
                            if (null === n) {
                                for (; null !== e && e.deleted; ) e = e.right;
                                if (null === e) return { done: !0, value: void 0 };
                                (n = e.content.getContent()), (r = 0), (e = e.right);
                            }
                            const t = n[r++];
                            return n.length <= r && (n = null), { done: !1, value: t };
                        },
                    };
                },
                Un = (t, e) => {
                    const n = An(t, e);
                    let r = t._start;
                    for (null !== n && ((r = n.p), (e -= n.index)); null !== r; r = r.right)
                        if (!r.deleted && r.countable) {
                            if (e < r.length) return r.content.getContent()[e];
                            e -= r.length;
                        }
                },
                Pn = (t, e, n, r) => {
                    let i = n;
                    const s = t.doc,
                        o = s.clientID,
                        a = s.store,
                        c = null === n ? e._start : n.right;
                    let l = [];
                    const h = () => {
                        l.length > 0 && ((i = new jr(He(o, Xe(a, o)), i, i && i.lastId, c, c && c.id, e, null, new Rr(l))), i.integrate(t, 0), (l = []));
                    };
                    r.forEach((n) => {
                        if (null === n) l.push(n);
                        else
                            switch (n.constructor) {
                                case Number:
                                case Object:
                                case Boolean:
                                case Array:
                                case String:
                                    l.push(n);
                                    break;
                                default:
                                    switch ((h(), n.constructor)) {
                                        case Uint8Array:
                                        case ArrayBuffer:
                                            (i = new jr(He(o, Xe(a, o)), i, i && i.lastId, c, c && c.id, e, null, new mr(new Uint8Array(n)))), i.integrate(t, 0);
                                            break;
                                        case Ce:
                                            (i = new jr(He(o, Xe(a, o)), i, i && i.lastId, c, c && c.id, e, null, new Er(n))), i.integrate(t, 0);
                                            break;
                                        default:
                                            if (!(n instanceof On)) throw new Error("Unexpected content type in insert operation");
                                            (i = new jr(He(o, Xe(a, o)), i, i && i.lastId, c, c && c.id, e, null, new Ur(n))), i.integrate(t, 0);
                                    }
                            }
                    }),
                        h();
                },
                jn = yt("Length exceeded!"),
                Fn = (t, e, n, r) => {
                    if (n > e._length) throw jn;
                    if (0 === n) return e._searchMarker && Tn(e._searchMarker, n, r.length), Pn(t, e, null, r);
                    const i = n,
                        s = An(e, n);
                    let o = e._start;
                    for (null !== s && ((o = s.p), 0 == (n -= s.index) && ((o = o.prev), (n += o && o.countable && !o.deleted ? o.length : 0))); null !== o; o = o.right)
                        if (!o.deleted && o.countable) {
                            if (n <= o.length) {
                                n < o.length && nn(t, He(o.id.client, o.id.clock + n));
                                break;
                            }
                            n -= o.length;
                        }
                    return e._searchMarker && Tn(e._searchMarker, i, r.length), Pn(t, e, o, r);
                },
                Bn = (t, e, n, r) => {
                    if (0 === r) return;
                    const i = n,
                        s = r,
                        o = An(e, n);
                    let a = e._start;
                    for (null !== o && ((a = o.p), (n -= o.index)); null !== a && n > 0; a = a.right) !a.deleted && a.countable && (n < a.length && nn(t, He(a.id.client, a.id.clock + n)), (n -= a.length));
                    for (; r > 0 && null !== a; ) a.deleted || (r < a.length && nn(t, He(a.id.client, a.id.clock + r)), a.delete(t), (r -= a.length)), (a = a.right);
                    if (r > 0) throw jn;
                    e._searchMarker && Tn(e._searchMarker, i, -s + r);
                },
                Wn = (t, e, n) => {
                    const r = e._map.get(n);
                    void 0 !== r && r.delete(t);
                },
                qn = (t, e, n, r) => {
                    const i = e._map.get(n) || null,
                        s = t.doc,
                        o = s.clientID;
                    let a;
                    if (null == r) a = new Rr([r]);
                    else
                        switch (r.constructor) {
                            case Number:
                            case Object:
                            case Boolean:
                            case Array:
                            case String:
                                a = new Rr([r]);
                                break;
                            case Uint8Array:
                                a = new mr(r);
                                break;
                            case Ce:
                                a = new Er(r);
                                break;
                            default:
                                if (!(r instanceof On)) throw new Error("Unexpected content type");
                                a = new Ur(r);
                        }
                    new jr(He(o, Xe(s.store, o)), i, i && i.lastId, null, null, e, n, a).integrate(t, 0);
                },
                Hn = (t, e) => {
                    const n = t._map.get(e);
                    return void 0 === n || n.deleted ? void 0 : n.content.getContent()[n.length - 1];
                },
                Vn = (t) => {
                    const e = {};
                    return (
                        t._map.forEach((t, n) => {
                            t.deleted || (e[n] = t.content.getContent()[t.length - 1]);
                        }),
                        e
                    );
                },
                zn = (t, e) => {
                    const n = t._map.get(e);
                    return void 0 !== n && !n.deleted;
                },
                Yn = (t) => {
                    return (
                        (e = t.entries()),
                        (n = (t) => !t[1].deleted),
                        he(() => {
                            let t;
                            do {
                                t = e.next();
                            } while (!t.done && !n(t.value));
                            return t;
                        })
                    );
                    var e, n;
                };
            class Jn extends En {
                constructor(t, e) {
                    super(t, e), (this._transaction = e);
                }
            }
            class $n extends On {
                constructor() {
                    super(), (this._prelimContent = []), (this._searchMarker = []);
                }
                static from(t) {
                    const e = new $n();
                    return e.push(t), e;
                }
                _integrate(t, e) {
                    super._integrate(t, e), this.insert(0, this._prelimContent), (this._prelimContent = null);
                }
                _copy() {
                    return new $n();
                }
                clone() {
                    const t = new $n();
                    return (
                        t.insert(
                            0,
                            this.toArray().map((t) => (t instanceof On ? t.clone() : t))
                        ),
                        t
                    );
                }
                get length() {
                    return null === this._prelimContent ? this._length : this._prelimContent.length;
                }
                _callObserver(t, e) {
                    super._callObserver(t, e), Dn(this, t, new Jn(this, t));
                }
                insert(t, e) {
                    null !== this.doc
                        ? un(this.doc, (n) => {
                              Fn(n, this, t, e);
                          })
                        : this._prelimContent.splice(t, 0, ...e);
                }
                push(t) {
                    null !== this.doc
                        ? un(this.doc, (e) => {
                              ((t, e, n) => {
                                  let r = (e._searchMarker || []).reduce((t, e) => (e.index > t.index ? e : t), { index: 0, p: e._start }).p;
                                  if (r) for (; r.right; ) r = r.right;
                                  Pn(t, e, r, n);
                              })(e, this, t);
                          })
                        : this._prelimContent.push(...t);
                }
                unshift(t) {
                    this.insert(0, t);
                }
                delete(t, e = 1) {
                    null !== this.doc
                        ? un(this.doc, (n) => {
                              Bn(n, this, t, e);
                          })
                        : this._prelimContent.splice(t, e);
                }
                get(t) {
                    return Un(this, t);
                }
                toArray() {
                    return xn(this);
                }
                slice(t = 0, e = this.length) {
                    return Ln(this, t, e);
                }
                toJSON() {
                    return this.map((t) => (t instanceof On ? t.toJSON() : t));
                }
                map(t) {
                    return Nn(this, t);
                }
                forEach(t) {
                    In(this, t);
                }
                [Symbol.iterator]() {
                    return Mn(this);
                }
                _write(t) {
                    t.writeTypeRef(Dr);
                }
            }
            class Kn extends En {
                constructor(t, e, n) {
                    super(t, e), (this.keysChanged = n);
                }
            }
            class Gn extends On {
                constructor(t) {
                    super(), (this._prelimContent = null), (this._prelimContent = void 0 === t ? new Map() : new Map(t));
                }
                _integrate(t, e) {
                    super._integrate(t, e),
                        this._prelimContent.forEach((t, e) => {
                            this.set(e, t);
                        }),
                        (this._prelimContent = null);
                }
                _copy() {
                    return new Gn();
                }
                clone() {
                    const t = new Gn();
                    return (
                        this.forEach((e, n) => {
                            t.set(n, e instanceof On ? e.clone() : e);
                        }),
                        t
                    );
                }
                _callObserver(t, e) {
                    Dn(this, t, new Kn(this, t, e));
                }
                toJSON() {
                    const t = {};
                    return (
                        this._map.forEach((e, n) => {
                            if (!e.deleted) {
                                const r = e.content.getContent()[e.length - 1];
                                t[n] = r instanceof On ? r.toJSON() : r;
                            }
                        }),
                        t
                    );
                }
                get size() {
                    return [...Yn(this._map)].length;
                }
                keys() {
                    return ue(Yn(this._map), (t) => t[0]);
                }
                values() {
                    return ue(Yn(this._map), (t) => t[1].content.getContent()[t[1].length - 1]);
                }
                entries() {
                    return ue(Yn(this._map), (t) => [t[0], t[1].content.getContent()[t[1].length - 1]]);
                }
                forEach(t) {
                    return (
                        this._map.forEach((e, n) => {
                            e.deleted || t(e.content.getContent()[e.length - 1], n, this);
                        }),
                        {}
                    );
                }
                [Symbol.iterator]() {
                    return this.entries();
                }
                delete(t) {
                    null !== this.doc
                        ? un(this.doc, (e) => {
                              Wn(e, this, t);
                          })
                        : this._prelimContent.delete(t);
                }
                set(t, e) {
                    return (
                        null !== this.doc
                            ? un(this.doc, (n) => {
                                  qn(n, this, t, e);
                              })
                            : this._prelimContent.set(t, e),
                        e
                    );
                }
                get(t) {
                    return Hn(this, t);
                }
                has(t) {
                    return zn(this, t);
                }
                clear() {
                    null !== this.doc
                        ? un(this.doc, (t) => {
                              this.forEach(function (e, n, r) {
                                  Wn(t, r, n);
                              });
                          })
                        : this._prelimContent.clear();
                }
                _write(t) {
                    t.writeTypeRef(Or);
                }
            }
            const Xn = (t, e) =>
                t === e ||
                ("object" == typeof t &&
                    "object" == typeof e &&
                    t &&
                    e &&
                    ((t, e) =>
                        t === e ||
                        (R(t) === R(e) &&
                            ((t, e) => {
                                for (const n in t) if (!e(t[n], n)) return !1;
                                return !0;
                            })(t, (t, n) => (void 0 !== t || A(e, n)) && e[n] === t)))(t, e));
            class Zn {
                constructor(t, e, n, r) {
                    (this.left = t), (this.right = e), (this.index = n), (this.currentAttributes = r);
                }
                forward() {
                    null === this.right && wt(),
                        this.right.content.constructor === Sr ? this.right.deleted || nr(this.currentAttributes, this.right.content) : this.right.deleted || (this.index += this.right.length),
                        (this.left = this.right),
                        (this.right = this.right.right);
                }
            }
            const Qn = (t, e, n) => {
                    for (; null !== e.right && n > 0; )
                        e.right.content.constructor === Sr
                            ? e.right.deleted || nr(e.currentAttributes, e.right.content)
                            : e.right.deleted || (n < e.right.length && nn(t, He(e.right.id.client, e.right.id.clock + n)), (e.index += e.right.length), (n -= e.right.length)),
                            (e.left = e.right),
                            (e.right = e.right.right);
                    return e;
                },
                tr = (t, e, n) => {
                    const r = new Map(),
                        i = An(e, n);
                    if (i) {
                        const e = new Zn(i.p.left, i.p, i.index, r);
                        return Qn(t, e, n - i.index);
                    }
                    {
                        const i = new Zn(null, e._start, 0, r);
                        return Qn(t, i, n);
                    }
                },
                er = (t, e, n, r) => {
                    for (; null !== n.right && (!0 === n.right.deleted || (n.right.content.constructor === Sr && Xn(r.get(n.right.content.key), n.right.content.value))); ) n.right.deleted || r.delete(n.right.content.key), n.forward();
                    const i = t.doc,
                        s = i.clientID;
                    r.forEach((r, o) => {
                        const a = n.left,
                            c = n.right,
                            l = new jr(He(s, Xe(i.store, s)), a, a && a.lastId, c, c && c.id, e, null, new Sr(o, r));
                        l.integrate(t, 0), (n.right = l), n.forward();
                    });
                },
                nr = (t, e) => {
                    const { key: n, value: r } = e;
                    null === r ? t.delete(n) : t.set(n, r);
                },
                rr = (t, e) => {
                    for (; null !== t.right && (t.right.deleted || (t.right.content.constructor === Sr && Xn(e[t.right.content.key] || null, t.right.content.value))); ) t.forward();
                },
                ir = (t, e, n, r) => {
                    const i = t.doc,
                        s = i.clientID,
                        o = new Map();
                    for (const a in r) {
                        const c = r[a],
                            l = n.currentAttributes.get(a) || null;
                        if (!Xn(l, c)) {
                            o.set(a, l);
                            const { left: r, right: h } = n;
                            (n.right = new jr(He(s, Xe(i.store, s)), r, r && r.lastId, h, h && h.id, e, null, new Sr(a, c))), n.right.integrate(t, 0), n.forward();
                        }
                    }
                    return o;
                },
                sr = (t, e, n, r, i) => {
                    n.currentAttributes.forEach((t, e) => {
                        void 0 === i[e] && (i[e] = null);
                    });
                    const s = t.doc,
                        o = s.clientID;
                    rr(n, i);
                    const a = ir(t, e, n, i),
                        c = r.constructor === String ? new Ar(r) : r instanceof On ? new Ur(r) : new Cr(r);
                    let { left: l, right: h, index: u } = n;
                    e._searchMarker && Tn(e._searchMarker, n.index, c.getLength()),
                        (h = new jr(He(o, Xe(s.store, o)), l, l && l.lastId, h, h && h.id, e, null, c)),
                        h.integrate(t, 0),
                        (n.right = h),
                        (n.index = u),
                        n.forward(),
                        er(t, e, n, a);
                },
                or = (t, e, n, r, i) => {
                    const s = t.doc,
                        o = s.clientID;
                    rr(n, i);
                    const a = ir(t, e, n, i);
                    t: for (; null !== n.right && (r > 0 || (a.size > 0 && (n.right.deleted || n.right.content.constructor === Sr))); ) {
                        if (!n.right.deleted)
                            switch (n.right.content.constructor) {
                                case Sr: {
                                    const { key: e, value: s } = n.right.content,
                                        o = i[e];
                                    if (void 0 !== o) {
                                        if (Xn(o, s)) a.delete(e);
                                        else {
                                            if (0 === r) break t;
                                            a.set(e, s);
                                        }
                                        n.right.delete(t);
                                    } else n.currentAttributes.set(e, s);
                                    break;
                                }
                                default:
                                    r < n.right.length && nn(t, He(n.right.id.client, n.right.id.clock + r)), (r -= n.right.length);
                            }
                        n.forward();
                    }
                    if (r > 0) {
                        let i = "";
                        for (; r > 0; r--) i += "\n";
                        (n.right = new jr(He(o, Xe(s.store, o)), n.left, n.left && n.left.lastId, n.right, n.right && n.right.id, e, null, new Ar(i))), n.right.integrate(t, 0), n.forward();
                    }
                    er(t, e, n, a);
                },
                ar = (t, n, r, i, s) => {
                    let o = r;
                    const a = e(s);
                    for (; o && (!o.countable || o.deleted); ) o.deleted || o.content.constructor !== Sr || nr(a, o.content), (o = o.right);
                    let c = 0,
                        l = !1;
                    for (; n !== o; ) {
                        if ((r === n && (l = !0), !n.deleted)) {
                            const e = n.content;
                            switch (e.constructor) {
                                case Sr: {
                                    const { key: r, value: o } = e;
                                    ((a.get(r) || null) === o && (i.get(r) || null) !== o) || (n.delete(t), c++, l || (s.get(r) || null) !== o || (i.get(r) || null) === o || s.delete(r));
                                    break;
                                }
                            }
                        }
                        n = n.right;
                    }
                    return c;
                },
                cr = (t, n, r) => {
                    const i = r,
                        s = e(n.currentAttributes),
                        o = n.right;
                    for (; r > 0 && null !== n.right; ) {
                        if (!1 === n.right.deleted)
                            switch (n.right.content.constructor) {
                                case Ur:
                                case Cr:
                                case Ar:
                                    r < n.right.length && nn(t, He(n.right.id.client, n.right.id.clock + r)), (r -= n.right.length), n.right.delete(t);
                            }
                        n.forward();
                    }
                    o && ar(t, o, n.right, s, n.currentAttributes);
                    const a = (n.left || n.right).parent;
                    return a._searchMarker && Tn(a._searchMarker, n.index, -i + r), n;
                };
            class lr extends En {
                constructor(t, e, n) {
                    super(t, e),
                        (this.childListChanged = !1),
                        (this.keysChanged = new Set()),
                        n.forEach((t) => {
                            null === t ? (this.childListChanged = !0) : this.keysChanged.add(t);
                        });
                }
                get changes() {
                    if (null === this._changes) {
                        const t = { keys: this.keys, delta: this.delta, added: new Set(), deleted: new Set() };
                        this._changes = t;
                    }
                    return this._changes;
                }
                get delta() {
                    if (null === this._delta) {
                        const t = this.target.doc,
                            e = [];
                        un(t, (t) => {
                            const n = new Map(),
                                r = new Map();
                            let i = this.target._start,
                                s = null;
                            const o = {};
                            let a = "",
                                c = 0,
                                l = 0;
                            const h = () => {
                                if (null !== s) {
                                    let t;
                                    switch (s) {
                                        case "delete":
                                            (t = { delete: l }), (l = 0);
                                            break;
                                        case "insert":
                                            (t = { insert: a }),
                                                n.size > 0 &&
                                                    ((t.attributes = {}),
                                                    n.forEach((e, n) => {
                                                        null !== e && (t.attributes[n] = e);
                                                    })),
                                                (a = "");
                                            break;
                                        case "retain":
                                            if (((t = { retain: c }), Object.keys(o).length > 0)) {
                                                t.attributes = {};
                                                for (const e in o) t.attributes[e] = o[e];
                                            }
                                            c = 0;
                                    }
                                    e.push(t), (s = null);
                                }
                            };
                            for (; null !== i; ) {
                                switch (i.content.constructor) {
                                    case Ur:
                                    case Cr:
                                        this.adds(i)
                                            ? this.deletes(i) || (h(), (s = "insert"), (a = i.content.getContent()[0]), h())
                                            : this.deletes(i)
                                            ? ("delete" !== s && (h(), (s = "delete")), (l += 1))
                                            : i.deleted || ("retain" !== s && (h(), (s = "retain")), (c += 1));
                                        break;
                                    case Ar:
                                        this.adds(i)
                                            ? this.deletes(i) || ("insert" !== s && (h(), (s = "insert")), (a += i.content.str))
                                            : this.deletes(i)
                                            ? ("delete" !== s && (h(), (s = "delete")), (l += i.length))
                                            : i.deleted || ("retain" !== s && (h(), (s = "retain")), (c += i.length));
                                        break;
                                    case Sr: {
                                        const { key: e, value: a } = i.content;
                                        if (this.adds(i)) {
                                            if (!this.deletes(i)) {
                                                const c = n.get(e) || null;
                                                Xn(c, a) ? null !== a && i.delete(t) : ("retain" === s && h(), Xn(a, r.get(e) || null) ? delete o[e] : (o[e] = a));
                                            }
                                        } else if (this.deletes(i)) {
                                            r.set(e, a);
                                            const t = n.get(e) || null;
                                            Xn(t, a) || ("retain" === s && h(), (o[e] = t));
                                        } else if (!i.deleted) {
                                            r.set(e, a);
                                            const n = o[e];
                                            void 0 !== n && (Xn(n, a) ? null !== n && i.delete(t) : ("retain" === s && h(), null === a ? delete o[e] : (o[e] = a)));
                                        }
                                        i.deleted || ("insert" === s && h(), nr(n, i.content));
                                        break;
                                    }
                                }
                                i = i.right;
                            }
                            for (h(); e.length > 0; ) {
                                const t = e[e.length - 1];
                                if (void 0 === t.retain || void 0 !== t.attributes) break;
                                e.pop();
                            }
                        }),
                            (this._delta = e);
                    }
                    return this._delta;
                }
            }
            class hr extends On {
                constructor(t) {
                    super(), (this._pending = void 0 !== t ? [() => this.insert(0, t)] : []), (this._searchMarker = []);
                }
                get length() {
                    return this._length;
                }
                _integrate(t, e) {
                    super._integrate(t, e);
                    try {
                        this._pending.forEach((t) => t());
                    } catch (t) {
                        console.error(t);
                    }
                    this._pending = null;
                }
                _copy() {
                    return new hr();
                }
                clone() {
                    const t = new hr();
                    return t.applyDelta(this.toDelta()), t;
                }
                _callObserver(n, r) {
                    super._callObserver(n, r);
                    const i = new lr(this, n, r),
                        s = n.doc;
                    if ((Dn(this, n, i), !n.local)) {
                        let r = !1;
                        for (const [t, e] of n.afterState.entries()) {
                            const i = n.beforeState.get(t) || 0;
                            if (
                                e !== i &&
                                (sn(n, s.store.clients.get(t), i, e, (t) => {
                                    t.deleted || t.content.constructor !== Sr || (r = !0);
                                }),
                                r)
                            )
                                break;
                        }
                        r ||
                            pe(n, n.deleteSet, (t) => {
                                t instanceof wr || r || (t.parent === this && t.content.constructor === Sr && (r = !0));
                            }),
                            un(s, (n) => {
                                r
                                    ? ((n) => {
                                          let r = 0;
                                          un(n.doc, (i) => {
                                              let s = n._start,
                                                  o = n._start,
                                                  a = t();
                                              const c = e(a);
                                              for (; o; ) !1 === o.deleted && (o.content.constructor === Sr ? nr(c, o.content) : ((r += ar(i, s, o, a, c)), (a = e(c)), (s = o))), (o = o.right);
                                          });
                                      })(this)
                                    : pe(n, n.deleteSet, (t) => {
                                          t instanceof wr ||
                                              (t.parent === this &&
                                                  ((t, e) => {
                                                      for (; e && e.right && (e.right.deleted || !e.right.countable); ) e = e.right;
                                                      const n = new Set();
                                                      for (; e && (e.deleted || !e.countable); ) {
                                                          if (!e.deleted && e.content.constructor === Sr) {
                                                              const r = e.content.key;
                                                              n.has(r) ? e.delete(t) : n.add(r);
                                                          }
                                                          e = e.left;
                                                      }
                                                  })(n, t));
                                      });
                            });
                    }
                }
                toString() {
                    let t = "",
                        e = this._start;
                    for (; null !== e; ) !e.deleted && e.countable && e.content.constructor === Ar && (t += e.content.str), (e = e.right);
                    return t;
                }
                toJSON() {
                    return this.toString();
                }
                applyDelta(t, { sanitize: e = !0 } = {}) {
                    null !== this.doc
                        ? un(this.doc, (n) => {
                              const r = new Zn(null, this._start, 0, new Map());
                              for (let i = 0; i < t.length; i++) {
                                  const s = t[i];
                                  if (void 0 !== s.insert) {
                                      const o = e || "string" != typeof s.insert || i !== t.length - 1 || null !== r.right || "\n" !== s.insert.slice(-1) ? s.insert : s.insert.slice(0, -1);
                                      ("string" != typeof o || o.length > 0) && sr(n, this, r, o, s.attributes || {});
                                  } else void 0 !== s.retain ? or(n, this, r, s.retain, s.attributes || {}) : void 0 !== s.delete && cr(n, r, s.delete);
                              }
                          })
                        : this._pending.push(() => this.applyDelta(t));
                }
                toDelta(t, e, n) {
                    const r = [],
                        i = new Map(),
                        s = this.doc;
                    let o = "",
                        a = this._start;
                    function c() {
                        if (o.length > 0) {
                            const t = {};
                            let e = !1;
                            i.forEach((n, r) => {
                                (e = !0), (t[r] = n);
                            });
                            const n = { insert: o };
                            e && (n.attributes = t), r.push(n), (o = "");
                        }
                    }
                    return (
                        un(
                            s,
                            (s) => {
                                for (t && Ye(s, t), e && Ye(s, e); null !== a; ) {
                                    if (ze(a, t) || (void 0 !== e && ze(a, e)))
                                        switch (a.content.constructor) {
                                            case Ar: {
                                                const r = i.get("ychange");
                                                void 0 === t || ze(a, t)
                                                    ? void 0 === e || ze(a, e)
                                                        ? void 0 !== r && (c(), i.delete("ychange"))
                                                        : (void 0 !== r && r.user === a.id.client && "added" === r.state) || (c(), i.set("ychange", n ? n("added", a.id) : { type: "added" }))
                                                    : (void 0 !== r && r.user === a.id.client && "removed" === r.state) || (c(), i.set("ychange", n ? n("removed", a.id) : { type: "removed" })),
                                                    (o += a.content.str);
                                                break;
                                            }
                                            case Ur:
                                            case Cr: {
                                                c();
                                                const t = { insert: a.content.getContent()[0] };
                                                if (i.size > 0) {
                                                    const e = {};
                                                    (t.attributes = e),
                                                        i.forEach((t, n) => {
                                                            e[n] = t;
                                                        });
                                                }
                                                r.push(t);
                                                break;
                                            }
                                            case Sr:
                                                ze(a, t) && (c(), nr(i, a.content));
                                        }
                                    a = a.right;
                                }
                                c();
                            },
                            Ye
                        ),
                        r
                    );
                }
                insert(t, e, n) {
                    if (e.length <= 0) return;
                    const r = this.doc;
                    null !== r
                        ? un(r, (r) => {
                              const i = tr(r, this, t);
                              n ||
                                  ((n = {}),
                                  i.currentAttributes.forEach((t, e) => {
                                      n[e] = t;
                                  })),
                                  sr(r, this, i, e, n);
                          })
                        : this._pending.push(() => this.insert(t, e, n));
                }
                insertEmbed(t, e, n = {}) {
                    const r = this.doc;
                    null !== r
                        ? un(r, (r) => {
                              const i = tr(r, this, t);
                              sr(r, this, i, e, n);
                          })
                        : this._pending.push(() => this.insertEmbed(t, e, n));
                }
                delete(t, e) {
                    if (0 === e) return;
                    const n = this.doc;
                    null !== n
                        ? un(n, (n) => {
                              cr(n, tr(n, this, t), e);
                          })
                        : this._pending.push(() => this.delete(t, e));
                }
                format(t, e, n) {
                    if (0 === e) return;
                    const r = this.doc;
                    null !== r
                        ? un(r, (r) => {
                              const i = tr(r, this, t);
                              null !== i.right && or(r, this, i, e, n);
                          })
                        : this._pending.push(() => this.format(t, e, n));
                }
                removeAttribute(t) {
                    null !== this.doc
                        ? un(this.doc, (e) => {
                              Wn(e, this, t);
                          })
                        : this._pending.push(() => this.removeAttribute(t));
                }
                setAttribute(t, e) {
                    null !== this.doc
                        ? un(this.doc, (n) => {
                              qn(n, this, t, e);
                          })
                        : this._pending.push(() => this.setAttribute(t, e));
                }
                getAttribute(t) {
                    return Hn(this, t);
                }
                getAttributes(t) {
                    return Vn(this);
                }
                _write(t) {
                    t.writeTypeRef(Lr);
                }
            }
            class ur {
                constructor(t, e = () => !0) {
                    (this._filter = e), (this._root = t), (this._currentNode = t._start), (this._firstCall = !0);
                }
                [Symbol.iterator]() {
                    return this;
                }
                next() {
                    let t = this._currentNode,
                        e = t && t.content && t.content.type;
                    if (null !== t && (!this._firstCall || t.deleted || !this._filter(e)))
                        do {
                            if (((e = t.content.type), t.deleted || (e.constructor !== fr && e.constructor !== dr) || null === e._start))
                                for (; null !== t; ) {
                                    if (null !== t.right) {
                                        t = t.right;
                                        break;
                                    }
                                    t = t.parent === this._root ? null : t.parent._item;
                                }
                            else t = e._start;
                        } while (null !== t && (t.deleted || !this._filter(t.content.type)));
                    return (this._firstCall = !1), null === t ? { value: void 0, done: !0 } : ((this._currentNode = t), { value: t.content.type, done: !1 });
                }
            }
            class dr extends On {
                constructor() {
                    super(), (this._prelimContent = []);
                }
                get firstChild() {
                    const t = this._first;
                    return t ? t.content.getContent()[0] : null;
                }
                _integrate(t, e) {
                    super._integrate(t, e), this.insert(0, this._prelimContent), (this._prelimContent = null);
                }
                _copy() {
                    return new dr();
                }
                clone() {
                    const t = new dr();
                    return (
                        t.insert(
                            0,
                            this.toArray().map((t) => (t instanceof On ? t.clone() : t))
                        ),
                        t
                    );
                }
                get length() {
                    return null === this._prelimContent ? this._length : this._prelimContent.length;
                }
                createTreeWalker(t) {
                    return new ur(this, t);
                }
                querySelector(t) {
                    t = t.toUpperCase();
                    const e = new ur(this, (e) => e.nodeName && e.nodeName.toUpperCase() === t).next();
                    return e.done ? null : e.value;
                }
                querySelectorAll(t) {
                    return (t = t.toUpperCase()), Array.from(new ur(this, (e) => e.nodeName && e.nodeName.toUpperCase() === t));
                }
                _callObserver(t, e) {
                    Dn(this, t, new pr(this, e, t));
                }
                toString() {
                    return Nn(this, (t) => t.toString()).join("");
                }
                toJSON() {
                    return this.toString();
                }
                toDOM(t = document, e = {}, n) {
                    const r = t.createDocumentFragment();
                    return (
                        void 0 !== n && n._createAssociation(r, this),
                        In(this, (i) => {
                            r.insertBefore(i.toDOM(t, e, n), null);
                        }),
                        r
                    );
                }
                insert(t, e) {
                    null !== this.doc
                        ? un(this.doc, (n) => {
                              Fn(n, this, t, e);
                          })
                        : this._prelimContent.splice(t, 0, ...e);
                }
                insertAfter(t, e) {
                    if (null !== this.doc)
                        un(this.doc, (n) => {
                            const r = t && t instanceof On ? t._item : t;
                            Pn(n, this, r, e);
                        });
                    else {
                        const n = this._prelimContent,
                            r = null === t ? 0 : n.findIndex((e) => e === t) + 1;
                        if (0 === r && null !== t) throw yt("Reference item not found");
                        n.splice(r, 0, ...e);
                    }
                }
                delete(t, e = 1) {
                    null !== this.doc
                        ? un(this.doc, (n) => {
                              Bn(n, this, t, e);
                          })
                        : this._prelimContent.splice(t, e);
                }
                toArray() {
                    return xn(this);
                }
                push(t) {
                    this.insert(this.length, t);
                }
                unshift(t) {
                    this.insert(0, t);
                }
                get(t) {
                    return Un(this, t);
                }
                slice(t = 0, e = this.length) {
                    return Ln(this, t, e);
                }
                forEach(t) {
                    In(this, t);
                }
                _write(t) {
                    t.writeTypeRef(Ir);
                }
            }
            class fr extends dr {
                constructor(t = "UNDEFINED") {
                    super(), (this.nodeName = t), (this._prelimAttrs = new Map());
                }
                get nextSibling() {
                    const t = this._item ? this._item.next : null;
                    return t ? t.content.type : null;
                }
                get prevSibling() {
                    const t = this._item ? this._item.prev : null;
                    return t ? t.content.type : null;
                }
                _integrate(t, e) {
                    super._integrate(t, e),
                        this._prelimAttrs.forEach((t, e) => {
                            this.setAttribute(e, t);
                        }),
                        (this._prelimAttrs = null);
                }
                _copy() {
                    return new fr(this.nodeName);
                }
                clone() {
                    const t = new fr(this.nodeName),
                        e = this.getAttributes();
                    for (const n in e) t.setAttribute(n, e[n]);
                    return (
                        t.insert(
                            0,
                            this.toArray().map((t) => (t instanceof On ? t.clone() : t))
                        ),
                        t
                    );
                }
                toString() {
                    const t = this.getAttributes(),
                        e = [],
                        n = [];
                    for (const e in t) n.push(e);
                    n.sort();
                    const r = n.length;
                    for (let i = 0; i < r; i++) {
                        const r = n[i];
                        e.push(r + '="' + t[r] + '"');
                    }
                    const i = this.nodeName.toLocaleLowerCase();
                    return `<${i}${e.length > 0 ? " " + e.join(" ") : ""}>${super.toString()}</${i}>`;
                }
                removeAttribute(t) {
                    null !== this.doc
                        ? un(this.doc, (e) => {
                              Wn(e, this, t);
                          })
                        : this._prelimAttrs.delete(t);
                }
                setAttribute(t, e) {
                    null !== this.doc
                        ? un(this.doc, (n) => {
                              qn(n, this, t, e);
                          })
                        : this._prelimAttrs.set(t, e);
                }
                getAttribute(t) {
                    return Hn(this, t);
                }
                hasAttribute(t) {
                    return zn(this, t);
                }
                getAttributes(t) {
                    return Vn(this);
                }
                toDOM(t = document, e = {}, n) {
                    const r = t.createElement(this.nodeName),
                        i = this.getAttributes();
                    for (const t in i) r.setAttribute(t, i[t]);
                    return (
                        In(this, (i) => {
                            r.appendChild(i.toDOM(t, e, n));
                        }),
                        void 0 !== n && n._createAssociation(r, this),
                        r
                    );
                }
                _write(t) {
                    t.writeTypeRef(xr), t.writeKey(this.nodeName);
                }
            }
            class pr extends En {
                constructor(t, e, n) {
                    super(t, n),
                        (this.childListChanged = !1),
                        (this.attributesChanged = new Set()),
                        e.forEach((t) => {
                            null === t ? (this.childListChanged = !0) : this.attributesChanged.add(t);
                        });
                }
            }
            class gr extends Gn {
                constructor(t) {
                    super(), (this.hookName = t);
                }
                _copy() {
                    return new gr(this.hookName);
                }
                clone() {
                    const t = new gr(this.hookName);
                    return (
                        this.forEach((e, n) => {
                            t.set(n, e);
                        }),
                        t
                    );
                }
                toDOM(t = document, e = {}, n) {
                    const r = e[this.hookName];
                    let i;
                    return (i = void 0 !== r ? r.createDom(this) : document.createElement(this.hookName)), i.setAttribute("data-yjs-hook", this.hookName), void 0 !== n && n._createAssociation(i, this), i;
                }
                _write(t) {
                    t.writeTypeRef(Nr), t.writeKey(this.hookName);
                }
            }
            class yr extends hr {
                get nextSibling() {
                    const t = this._item ? this._item.next : null;
                    return t ? t.content.type : null;
                }
                get prevSibling() {
                    const t = this._item ? this._item.prev : null;
                    return t ? t.content.type : null;
                }
                _copy() {
                    return new yr();
                }
                clone() {
                    const t = new yr();
                    return t.applyDelta(this.toDelta()), t;
                }
                toDOM(t = document, e, n) {
                    const r = t.createTextNode(this.toString());
                    return void 0 !== n && n._createAssociation(r, this), r;
                }
                toString() {
                    return this.toDelta()
                        .map((t) => {
                            const e = [];
                            for (const n in t.attributes) {
                                const r = [];
                                for (const e in t.attributes[n]) r.push({ key: e, value: t.attributes[n][e] });
                                r.sort((t, e) => (t.key < e.key ? -1 : 1)), e.push({ nodeName: n, attrs: r });
                            }
                            e.sort((t, e) => (t.nodeName < e.nodeName ? -1 : 1));
                            let n = "";
                            for (let t = 0; t < e.length; t++) {
                                const r = e[t];
                                n += `<${r.nodeName}`;
                                for (let t = 0; t < r.attrs.length; t++) {
                                    const e = r.attrs[t];
                                    n += ` ${e.key}="${e.value}"`;
                                }
                                n += ">";
                            }
                            n += t.insert;
                            for (let t = e.length - 1; t >= 0; t--) n += `</${e[t].nodeName}>`;
                            return n;
                        })
                        .join("");
                }
                toJSON() {
                    return this.toString();
                }
                _write(t) {
                    t.writeTypeRef(Mr);
                }
            }
            class br {
                constructor(t, e) {
                    (this.id = t), (this.length = e);
                }
                get deleted() {
                    throw bt();
                }
                mergeWith(t) {
                    return !1;
                }
                write(t, e, n) {
                    throw bt();
                }
                integrate(t, e) {
                    throw bt();
                }
            }
            class wr extends br {
                get deleted() {
                    return !0;
                }
                delete() {}
                mergeWith(t) {
                    return this.constructor === t.constructor && ((this.length += t.length), !0);
                }
                integrate(t, e) {
                    e > 0 && ((this.id.clock += e), (this.length -= e)), Ze(t.doc.store, this);
                }
                write(t, e) {
                    t.writeInfo(0), t.writeLen(this.length - e);
                }
                getMissing(t, e) {
                    return null;
                }
            }
            class mr {
                constructor(t) {
                    this.content = t;
                }
                getLength() {
                    return 1;
                }
                getContent() {
                    return [this.content];
                }
                isCountable() {
                    return !0;
                }
                copy() {
                    return new mr(this.content);
                }
                splice(t) {
                    throw bt();
                }
                mergeWith(t) {
                    return !1;
                }
                integrate(t, e) {}
                delete(t) {}
                gc(t) {}
                write(t, e) {
                    t.writeBuf(this.content);
                }
                getRef() {
                    return 3;
                }
            }
            class _r {
                constructor(t) {
                    this.len = t;
                }
                getLength() {
                    return this.len;
                }
                getContent() {
                    return [];
                }
                isCountable() {
                    return !1;
                }
                copy() {
                    return new _r(this.len);
                }
                splice(t) {
                    const e = new _r(this.len - t);
                    return (this.len = t), e;
                }
                mergeWith(t) {
                    return (this.len += t.len), !0;
                }
                integrate(t, e) {
                    be(t.deleteSet, e.id.client, e.id.clock, this.len), e.markDeleted();
                }
                delete(t) {}
                gc(t) {}
                write(t, e) {
                    t.writeLen(this.len - e);
                }
                getRef() {
                    return 1;
                }
            }
            const vr = (t, e) => new Ce({ guid: t, ...e, shouldLoad: e.shouldLoad || e.autoLoad || !1 });
            class Er {
                constructor(t) {
                    t._item && console.error("This document was already integrated as a sub-document. You should create a second instance instead with the same guid."), (this.doc = t);
                    const e = {};
                    (this.opts = e), t.gc || (e.gc = !1), t.autoLoad && (e.autoLoad = !0), null !== t.meta && (e.meta = t.meta);
                }
                getLength() {
                    return 1;
                }
                getContent() {
                    return [this.doc];
                }
                isCountable() {
                    return !0;
                }
                copy() {
                    return new Er(vr(this.doc.guid, this.opts));
                }
                splice(t) {
                    throw bt();
                }
                mergeWith(t) {
                    return !1;
                }
                integrate(t, e) {
                    (this.doc._item = e), t.subdocsAdded.add(this.doc), this.doc.shouldLoad && t.subdocsLoaded.add(this.doc);
                }
                delete(t) {
                    t.subdocsAdded.has(this.doc) ? t.subdocsAdded.delete(this.doc) : t.subdocsRemoved.add(this.doc);
                }
                gc(t) {}
                write(t, e) {
                    t.writeString(this.doc.guid), t.writeAny(this.opts);
                }
                getRef() {
                    return 9;
                }
            }
            class Cr {
                constructor(t) {
                    this.embed = t;
                }
                getLength() {
                    return 1;
                }
                getContent() {
                    return [this.embed];
                }
                isCountable() {
                    return !0;
                }
                copy() {
                    return new Cr(this.embed);
                }
                splice(t) {
                    throw bt();
                }
                mergeWith(t) {
                    return !1;
                }
                integrate(t, e) {}
                delete(t) {}
                gc(t) {}
                write(t, e) {
                    t.writeJSON(this.embed);
                }
                getRef() {
                    return 5;
                }
            }
            class Sr {
                constructor(t, e) {
                    (this.key = t), (this.value = e);
                }
                getLength() {
                    return 1;
                }
                getContent() {
                    return [];
                }
                isCountable() {
                    return !1;
                }
                copy() {
                    return new Sr(this.key, this.value);
                }
                splice(t) {
                    throw bt();
                }
                mergeWith(t) {
                    return !1;
                }
                integrate(t, e) {
                    e.parent._searchMarker = null;
                }
                delete(t) {}
                gc(t) {}
                write(t, e) {
                    t.writeKey(this.key), t.writeJSON(this.value);
                }
                getRef() {
                    return 6;
                }
            }
            class kr {
                constructor(t) {
                    this.arr = t;
                }
                getLength() {
                    return this.arr.length;
                }
                getContent() {
                    return this.arr;
                }
                isCountable() {
                    return !0;
                }
                copy() {
                    return new kr(this.arr);
                }
                splice(t) {
                    const e = new kr(this.arr.slice(t));
                    return (this.arr = this.arr.slice(0, t)), e;
                }
                mergeWith(t) {
                    return (this.arr = this.arr.concat(t.arr)), !0;
                }
                integrate(t, e) {}
                delete(t) {}
                gc(t) {}
                write(t, e) {
                    const n = this.arr.length;
                    t.writeLen(n - e);
                    for (let r = e; r < n; r++) {
                        const e = this.arr[r];
                        t.writeString(void 0 === e ? "undefined" : JSON.stringify(e));
                    }
                }
                getRef() {
                    return 2;
                }
            }
            class Rr {
                constructor(t) {
                    this.arr = t;
                }
                getLength() {
                    return this.arr.length;
                }
                getContent() {
                    return this.arr;
                }
                isCountable() {
                    return !0;
                }
                copy() {
                    return new Rr(this.arr);
                }
                splice(t) {
                    const e = new Rr(this.arr.slice(t));
                    return (this.arr = this.arr.slice(0, t)), e;
                }
                mergeWith(t) {
                    return (this.arr = this.arr.concat(t.arr)), !0;
                }
                integrate(t, e) {}
                delete(t) {}
                gc(t) {}
                write(t, e) {
                    const n = this.arr.length;
                    t.writeLen(n - e);
                    for (let r = e; r < n; r++) {
                        const e = this.arr[r];
                        t.writeAny(e);
                    }
                }
                getRef() {
                    return 8;
                }
            }
            class Ar {
                constructor(t) {
                    this.str = t;
                }
                getLength() {
                    return this.str.length;
                }
                getContent() {
                    return this.str.split("");
                }
                isCountable() {
                    return !0;
                }
                copy() {
                    return new Ar(this.str);
                }
                splice(t) {
                    const e = new Ar(this.str.slice(t));
                    this.str = this.str.slice(0, t);
                    const n = this.str.charCodeAt(t - 1);
                    return n >= 55296 && n <= 56319 && ((this.str = this.str.slice(0, t - 1) + "�"), (e.str = "�" + e.str.slice(1))), e;
                }
                mergeWith(t) {
                    return (this.str += t.str), !0;
                }
                integrate(t, e) {}
                delete(t) {}
                gc(t) {}
                write(t, e) {
                    t.writeString(0 === e ? this.str : this.str.slice(e));
                }
                getRef() {
                    return 4;
                }
            }
            const Tr = [(t) => new $n(), (t) => new Gn(), (t) => new hr(), (t) => new fr(t.readKey()), (t) => new dr(), (t) => new gr(t.readKey()), (t) => new yr()],
                Dr = 0,
                Or = 1,
                Lr = 2,
                xr = 3,
                Ir = 4,
                Nr = 5,
                Mr = 6;
            class Ur {
                constructor(t) {
                    this.type = t;
                }
                getLength() {
                    return 1;
                }
                getContent() {
                    return [this.type];
                }
                isCountable() {
                    return !0;
                }
                copy() {
                    return new Ur(this.type._copy());
                }
                splice(t) {
                    throw bt();
                }
                mergeWith(t) {
                    return !1;
                }
                integrate(t, e) {
                    this.type._integrate(t.doc, e);
                }
                delete(t) {
                    let e = this.type._start;
                    for (; null !== e; ) e.deleted ? t._mergeStructs.push(e) : e.delete(t), (e = e.right);
                    this.type._map.forEach((e) => {
                        e.deleted ? t._mergeStructs.push(e) : e.delete(t);
                    }),
                        t.changed.delete(this.type);
                }
                gc(t) {
                    let e = this.type._start;
                    for (; null !== e; ) e.gc(t, !0), (e = e.right);
                    (this.type._start = null),
                        this.type._map.forEach((e) => {
                            for (; null !== e; ) e.gc(t, !0), (e = e.left);
                        }),
                        (this.type._map = new Map());
                }
                write(t, e) {
                    this.type._write(t);
                }
                getRef() {
                    return 7;
                }
            }
            const Pr = (t, e, n) => {
                const { client: r, clock: i } = e.id,
                    s = new jr(He(r, i + n), e, He(r, i + n - 1), e.right, e.rightOrigin, e.parent, e.parentSub, e.content.splice(n));
                return (
                    e.deleted && s.markDeleted(),
                    e.keep && (s.keep = !0),
                    null !== e.redone && (s.redone = He(e.redone.client, e.redone.clock + n)),
                    (e.right = s),
                    null !== s.right && (s.right.left = s),
                    t._mergeStructs.push(s),
                    null !== s.parentSub && null === s.right && s.parent._map.set(s.parentSub, s),
                    (e.length = n),
                    s
                );
            };
            class jr extends br {
                constructor(t, e, n, r, i, s, o, a) {
                    super(t, a.getLength()),
                        (this.origin = n),
                        (this.left = e),
                        (this.right = r),
                        (this.rightOrigin = i),
                        (this.parent = s),
                        (this.parentSub = o),
                        (this.redone = null),
                        (this.content = a),
                        (this.info = this.content.isCountable() ? 2 : 0);
                }
                set marker(t) {
                    (8 & this.info) > 0 !== t && (this.info ^= 8);
                }
                get marker() {
                    return (8 & this.info) > 0;
                }
                get keep() {
                    return (1 & this.info) > 0;
                }
                set keep(t) {
                    this.keep !== t && (this.info ^= 1);
                }
                get countable() {
                    return (2 & this.info) > 0;
                }
                get deleted() {
                    return (4 & this.info) > 0;
                }
                set deleted(t) {
                    this.deleted !== t && (this.info ^= 4);
                }
                markDeleted() {
                    this.info |= 4;
                }
                getMissing(t, e) {
                    if (this.origin && this.origin.client !== this.id.client && this.origin.clock >= Xe(e, this.origin.client)) return this.origin.client;
                    if (this.rightOrigin && this.rightOrigin.client !== this.id.client && this.rightOrigin.clock >= Xe(e, this.rightOrigin.client)) return this.rightOrigin.client;
                    if (this.parent && this.parent.constructor === We && this.id.client !== this.parent.client && this.parent.clock >= Xe(e, this.parent.client)) return this.parent.client;
                    if (
                        (this.origin && ((this.left = rn(t, e, this.origin)), (this.origin = this.left.lastId)),
                        this.rightOrigin && ((this.right = nn(t, this.rightOrigin)), (this.rightOrigin = this.right.id)),
                        ((this.left && this.left.constructor === wr) || (this.right && this.right.constructor === wr)) && (this.parent = null),
                        this.parent)
                    ) {
                        if (this.parent.constructor === We) {
                            const t = tn(e, this.parent);
                            t.constructor === wr ? (this.parent = null) : (this.parent = t.content.type);
                        }
                    } else
                        this.left && this.left.constructor === jr && ((this.parent = this.left.parent), (this.parentSub = this.left.parentSub)),
                            this.right && this.right.constructor === jr && ((this.parent = this.right.parent), (this.parentSub = this.right.parentSub));
                    return null;
                }
                integrate(t, e) {
                    if (
                        (e > 0 && ((this.id.clock += e), (this.left = rn(t, t.doc.store, He(this.id.client, this.id.clock - 1))), (this.origin = this.left.lastId), (this.content = this.content.splice(e)), (this.length -= e)), this.parent)
                    ) {
                        if ((!this.left && (!this.right || null !== this.right.left)) || (this.left && this.left.right !== this.right)) {
                            let e,
                                n = this.left;
                            if (null !== n) e = n.right;
                            else if (null !== this.parentSub) for (e = this.parent._map.get(this.parentSub) || null; null !== e && null !== e.left; ) e = e.left;
                            else e = this.parent._start;
                            const r = new Set(),
                                i = new Set();
                            for (; null !== e && e !== this.right; ) {
                                if ((i.add(e), r.add(e), qe(this.origin, e.origin))) {
                                    if (e.id.client < this.id.client) (n = e), r.clear();
                                    else if (qe(this.rightOrigin, e.rightOrigin)) break;
                                } else {
                                    if (null === e.origin || !i.has(tn(t.doc.store, e.origin))) break;
                                    r.has(tn(t.doc.store, e.origin)) || ((n = e), r.clear());
                                }
                                e = e.right;
                            }
                            this.left = n;
                        }
                        if (null !== this.left) {
                            const t = this.left.right;
                            (this.right = t), (this.left.right = this);
                        } else {
                            let t;
                            if (null !== this.parentSub) for (t = this.parent._map.get(this.parentSub) || null; null !== t && null !== t.left; ) t = t.left;
                            else (t = this.parent._start), (this.parent._start = this);
                            this.right = t;
                        }
                        null !== this.right ? (this.right.left = this) : null !== this.parentSub && (this.parent._map.set(this.parentSub, this), null !== this.left && this.left.delete(t)),
                            null === this.parentSub && this.countable && !this.deleted && (this.parent._length += this.length),
                            Ze(t.doc.store, this),
                            this.content.integrate(t, this),
                            cn(t, this.parent, this.parentSub),
                            ((null !== this.parent._item && this.parent._item.deleted) || (null !== this.parentSub && null !== this.right)) && this.delete(t);
                    } else new wr(this.id, this.length).integrate(t, 0);
                }
                get next() {
                    let t = this.right;
                    for (; null !== t && t.deleted; ) t = t.right;
                    return t;
                }
                get prev() {
                    let t = this.left;
                    for (; null !== t && t.deleted; ) t = t.left;
                    return t;
                }
                get lastId() {
                    return 1 === this.length ? this.id : He(this.id.client, this.id.clock + this.length - 1);
                }
                mergeWith(t) {
                    if (
                        this.constructor === t.constructor &&
                        qe(t.origin, this.lastId) &&
                        this.right === t &&
                        qe(this.rightOrigin, t.rightOrigin) &&
                        this.id.client === t.id.client &&
                        this.id.clock + this.length === t.id.clock &&
                        this.deleted === t.deleted &&
                        null === this.redone &&
                        null === t.redone &&
                        this.content.constructor === t.content.constructor &&
                        this.content.mergeWith(t.content)
                    ) {
                        const e = this.parent._searchMarker;
                        return (
                            e &&
                                e.forEach((e) => {
                                    e.p === t && ((e.p = this), !this.deleted && this.countable && (e.index -= this.length));
                                }),
                            t.keep && (this.keep = !0),
                            (this.right = t.right),
                            null !== this.right && (this.right.left = this),
                            (this.length += t.length),
                            !0
                        );
                    }
                    return !1;
                }
                delete(t) {
                    if (!this.deleted) {
                        const e = this.parent;
                        this.countable && null === this.parentSub && (e._length -= this.length), this.markDeleted(), be(t.deleteSet, this.id.client, this.id.clock, this.length), cn(t, e, this.parentSub), this.content.delete(t);
                    }
                }
                gc(t, e) {
                    if (!this.deleted) throw wt();
                    this.content.gc(t),
                        e
                            ? ((t, e, n) => {
                                  const r = t.clients.get(e.id.client);
                                  r[Qe(r, e.id.clock)] = n;
                              })(t, this, new wr(this.id, this.length))
                            : (this.content = new _r(this.length));
                }
                write(t, e) {
                    const n = e > 0 ? He(this.id.client, this.id.clock + e - 1) : this.origin,
                        r = this.rightOrigin,
                        i = this.parentSub,
                        s = (31 & this.content.getRef()) | (null === n ? 0 : z) | (null === r ? 0 : V) | (null === i ? 0 : 32);
                    if ((t.writeInfo(s), null !== n && t.writeLeftID(n), null !== r && t.writeRightID(r), null === n && null === r)) {
                        const e = this.parent;
                        if (void 0 !== e._item) {
                            const n = e._item;
                            if (null === n) {
                                const n = ((t) => {
                                    for (const [e, n] of t.doc.share.entries()) if (n === t) return e;
                                    throw wt();
                                })(e);
                                t.writeParentInfo(!0), t.writeString(n);
                            } else t.writeParentInfo(!1), t.writeLeftID(n.id);
                        } else e.constructor === String ? (t.writeParentInfo(!0), t.writeString(e)) : e.constructor === We ? (t.writeParentInfo(!1), t.writeLeftID(e)) : wt();
                        null !== i && t.writeString(i);
                    }
                    this.content.write(t, e);
                }
            }
            const Fr = (t, e) => Br[31 & e](t),
                Br = [
                    () => {
                        wt();
                    },
                    (t) => new _r(t.readLen()),
                    (t) => {
                        const e = t.readLen(),
                            n = [];
                        for (let r = 0; r < e; r++) {
                            const e = t.readString();
                            "undefined" === e ? n.push(void 0) : n.push(JSON.parse(e));
                        }
                        return new kr(n);
                    },
                    (t) => new mr(t.readBuf()),
                    (t) => new Ar(t.readString()),
                    (t) => new Cr(t.readJSON()),
                    (t) => new Sr(t.readKey(), t.readJSON()),
                    (t) => new Ur(Tr[t.readTypeRef()](t)),
                    (t) => {
                        const e = t.readLen(),
                            n = [];
                        for (let r = 0; r < e; r++) n.push(t.readAny());
                        return new Rr(n);
                    },
                    (t) => new Er(vr(t.readString(), t.readAny())),
                    () => {
                        wt();
                    },
                ];
            class Wr extends br {
                get deleted() {
                    return !0;
                }
                delete() {}
                mergeWith(t) {
                    return this.constructor === t.constructor && ((this.length += t.length), !0);
                }
                integrate(t, e) {
                    wt();
                }
                write(t, e) {
                    t.writeInfo(10), tt(t.restEncoder, this.length - e);
                }
                getMissing(t, e) {
                    return null;
                }
            }
            const qr = "undefined" != typeof window ? window : "undefined" != typeof global ? global : {};
            !0 === qr["__ $YJS$ __"] && console.error("Yjs was already imported. This breaks constructor checks and will lead to isssues!"), (qr["__ $YJS$ __"] = !0);
            const Hr = (t) => {
                if (t.shouldConnect && null === t.ws) {
                    const e = new WebSocket(t.url),
                        n = t.binaryType;
                    let r = null;
                    n && (e.binaryType = n),
                        (t.ws = e),
                        (t.connecting = !0),
                        (t.connected = !1),
                        (e.onmessage = (e) => {
                            t.lastMessageReceived = Yt();
                            const n = e.data,
                                i = "string" == typeof n ? JSON.parse(n) : n;
                            i && "pong" === i.type && (clearTimeout(r), (r = setTimeout(s, 15e3))), t.emit("message", [i, t]);
                        });
                    const i = (e) => {
                            null !== t.ws &&
                                ((t.ws = null),
                                (t.connecting = !1),
                                t.connected ? ((t.connected = !1), t.emit("disconnect", [{ type: "disconnect", error: e }, t])) : t.unsuccessfulReconnects++,
                                setTimeout(Hr, d(1200 * u(t.unsuccessfulReconnects + 1), 2500), t)),
                                clearTimeout(r);
                        },
                        s = () => {
                            t.ws === e && t.send({ type: "ping" });
                        };
                    (e.onclose = () => i(null)),
                        (e.onerror = (t) => i(t)),
                        (e.onopen = () => {
                            (t.lastMessageReceived = Yt()), (t.connecting = !1), (t.connected = !0), (t.unsuccessfulReconnects = 0), t.emit("connect", [{ type: "connect" }, t]), (r = setTimeout(s, 15e3));
                        });
                }
            };
            class Vr extends c {
                constructor(t, { binaryType: e } = {}) {
                    super(),
                        (this.url = t),
                        (this.ws = null),
                        (this.binaryType = e || null),
                        (this.connected = !1),
                        (this.connecting = !1),
                        (this.unsuccessfulReconnects = 0),
                        (this.lastMessageReceived = 0),
                        (this.shouldConnect = !0),
                        (this._checkInterval = setInterval(() => {
                            this.connected && 3e4 < Yt() - this.lastMessageReceived && this.ws.close();
                        }, 15e3)),
                        Hr(this);
                }
                send(t) {
                    this.ws && this.ws.send(JSON.stringify(t));
                }
                destroy() {
                    clearInterval(this._checkInterval), this.disconnect(), super.destroy();
                }
                disconnect() {
                    (this.shouldConnect = !1), null !== this.ws && this.ws.close();
                }
                connect() {
                    (this.shouldConnect = !0), this.connected || null !== this.ws || Hr(this);
                }
            }
            const zr = new Map(),
                Yr =
                    "undefined" == typeof BroadcastChannel
                        ? class {
                              constructor(t) {
                                  (this.room = t), (this.onmessage = null), C || addEventListener("storage", (e) => e.key === t && null !== this.onmessage && this.onmessage({ data: H(e.newValue || "") }));
                              }
                              postMessage(t) {
                                  S.setItem(this.room, q(new Uint8Array(t)));
                              }
                          }
                        : BroadcastChannel,
                Jr = (t) =>
                    r(zr, t, () => {
                        const e = new Set(),
                            n = new Yr(t);
                        return (n.onmessage = (t) => e.forEach((e) => e(t.data, "broadcastchannel"))), { bc: n, subs: e };
                    });
            var $r = n(963);
            const Kr = (t, e) => {
                    tt(t, 0);
                    const n = ((t) =>
                        ((t, e = new De()) => (
                            t instanceof Map
                                ? Me(e, t)
                                : ((t, e) => {
                                      Me(t, Ge(e.store));
                                  })(e, t),
                            e.toUint8Array()
                        ))(t, new Ae()))(e);
                    ot(t, n);
                },
                Gr = (t, e, n) => {
                    tt(t, 1), ot(t, ((t, e) => Ie(t, e, new Te()))(e, n));
                },
                Xr = (t, e, n) => {
                    try {
                        ((t, e, n) => {
                            xe(t, e, n, ke);
                        })(e, Ct(t), n);
                    } catch (t) {
                        console.error("Caught error while handling a Yjs update", t);
                    }
                },
                Zr = Xr;
            class Qr extends c {
                constructor(t) {
                    super(),
                        (this.doc = t),
                        (this.clientID = t.clientID),
                        (this.states = new Map()),
                        (this.meta = new Map()),
                        (this._checkInterval = setInterval(() => {
                            const t = Yt();
                            null !== this.getLocalState() && 15e3 <= t - this.meta.get(this.clientID).lastUpdated && this.setLocalState(this.getLocalState());
                            const e = [];
                            this.meta.forEach((n, r) => {
                                r !== this.clientID && 3e4 <= t - n.lastUpdated && this.states.has(r) && e.push(r);
                            }),
                                e.length > 0 && ti(this, e, "timeout");
                        }, l(3e3))),
                        t.on("destroy", () => {
                            this.destroy();
                        }),
                        this.setLocalState({});
                }
                destroy() {
                    this.emit("destroy", [this]), this.setLocalState(null), super.destroy(), clearInterval(this._checkInterval);
                }
                getLocalState() {
                    return this.states.get(this.clientID) || null;
                }
                setLocalState(t) {
                    const e = this.clientID,
                        n = this.meta.get(e),
                        r = void 0 === n ? 0 : n.clock + 1,
                        i = this.states.get(e);
                    null === t ? this.states.delete(e) : this.states.set(e, t), this.meta.set(e, { clock: r, lastUpdated: Yt() });
                    const s = [],
                        o = [],
                        a = [],
                        c = [];
                    null === t ? c.push(e) : null == i ? null != t && s.push(e) : (o.push(e), O(i, t) || a.push(e)),
                        (s.length > 0 || a.length > 0 || c.length > 0) && this.emit("change", [{ added: s, updated: a, removed: c }, "local"]),
                        this.emit("update", [{ added: s, updated: o, removed: c }, "local"]);
                }
                setLocalStateField(t, e) {
                    const n = this.getLocalState();
                    null !== n && this.setLocalState({ ...n, [t]: e });
                }
                getStates() {
                    return this.states;
                }
            }
            const ti = (t, e, n) => {
                    const r = [];
                    for (let n = 0; n < e.length; n++) {
                        const i = e[n];
                        if (t.states.has(i)) {
                            if ((t.states.delete(i), i === t.clientID)) {
                                const e = t.meta.get(i);
                                t.meta.set(i, { clock: e.clock + 1, lastUpdated: Yt() });
                            }
                            r.push(i);
                        }
                    }
                    r.length > 0 && (t.emit("change", [{ added: [], updated: [], removed: r }, n]), t.emit("update", [{ added: [], updated: [], removed: r }, n]));
                },
                ei = (t, e, n = t.states) => {
                    const r = e.length,
                        i = G();
                    tt(i, r);
                    for (let s = 0; s < r; s++) {
                        const r = e[s],
                            o = n.get(r) || null,
                            a = t.meta.get(r).clock;
                        tt(i, r), tt(i, a), it(i, JSON.stringify(o));
                    }
                    return X(i);
                },
                ni = (t, e) => {
                    if (!e) return Wt(t);
                    const n = crypto.getRandomValues(new Uint8Array(12));
                    return crypto.subtle.encrypt({ name: "AES-GCM", iv: n }, e, t).then((t) => {
                        const e = G();
                        return it(e, "AES-GCM"), ot(e, n), ot(e, new Uint8Array(t)), X(e);
                    });
                },
                ri = (t, e) => {
                    if (!e) return Wt(t);
                    const n = Et(t);
                    var r;
                    "AES-GCM" !== At(n) && ((r = yt("Unknown encryption algorithm")), Promise.reject(r));
                    const i = Ct(n),
                        s = Ct(n);
                    return crypto.subtle.decrypt({ name: "AES-GCM", iv: i }, e, s).then((t) => new Uint8Array(t));
                },
                ii = ((t) => {
                    const e = ae[ce],
                        n = U("log"),
                        r = null !== n && ("*" === n || "true" === n || new RegExp(n, "gi").test(t));
                    return (
                        (ce = (ce + 1) % ae.length),
                        (t += ": "),
                        r
                            ? (...n) => {
                                  const r = Yt(),
                                      i = r - le;
                                  (le = r), se(e, t, ee, ...n.map((t) => ("string" == typeof t || "symbol" == typeof t ? t : JSON.stringify(t))), e, " +" + i + "ms");
                              }
                            : D
                    );
                })("y-webrtc"),
                si = new Map(),
                oi = new Map(),
                ai = (t) => {
                    let e = !0;
                    t.webrtcConns.forEach((t) => {
                        t.synced || (e = !1);
                    }),
                        ((!e && t.synced) || (e && !t.synced)) && ((t.synced = e), t.provider.emit("synced", [{ synced: e }]), ii("synced ", Jt, t.name, $t, " with all peers"));
                },
                ci = (t, e, n) => {
                    const r = Et(e),
                        i = G(),
                        s = kt(r);
                    if (void 0 === t) return null;
                    const o = t.awareness,
                        a = t.doc;
                    let c = !1;
                    switch (s) {
                        case 0: {
                            tt(i, 0);
                            const e = ((t, e, n, r) => {
                                const i = kt(t);
                                switch (i) {
                                    case 0:
                                        ((t, e, n) => {
                                            Gr(e, n, Ct(t));
                                        })(t, e, n);
                                        break;
                                    case 1:
                                        Xr(t, n, r);
                                        break;
                                    case 2:
                                        Zr(t, n, r);
                                        break;
                                    default:
                                        throw new Error("Unknown message type");
                                }
                                return i;
                            })(r, i, a, t);
                            1 !== e || t.synced || n(), 0 === e && (c = !0);
                            break;
                        }
                        case 3:
                            tt(i, 1), ot(i, ei(o, Array.from(o.getStates().keys()))), (c = !0);
                            break;
                        case 1:
                            ((t, e, n) => {
                                const r = Et(e),
                                    i = Yt(),
                                    s = [],
                                    o = [],
                                    a = [],
                                    c = [],
                                    l = kt(r);
                                for (let e = 0; e < l; e++) {
                                    const e = kt(r);
                                    let n = kt(r);
                                    const l = JSON.parse(At(r)),
                                        h = t.meta.get(e),
                                        u = t.states.get(e),
                                        d = void 0 === h ? 0 : h.clock;
                                    (d < n || (d === n && null === l && t.states.has(e))) &&
                                        (null === l ? (e === t.clientID && null != t.getLocalState() ? n++ : t.states.delete(e)) : t.states.set(e, l),
                                        t.meta.set(e, { clock: n, lastUpdated: i }),
                                        void 0 === h && null !== l ? s.push(e) : void 0 !== h && null === l ? c.push(e) : null !== l && (O(l, u) || a.push(e), o.push(e)));
                                }
                                (s.length > 0 || a.length > 0 || c.length > 0) && t.emit("change", [{ added: s, updated: a, removed: c }, n]),
                                    (s.length > 0 || o.length > 0 || c.length > 0) && t.emit("update", [{ added: s, updated: o, removed: c }, n]);
                            })(o, Ct(r), t);
                            break;
                        case 4: {
                            const e = 1 === St(r),
                                n = At(r);
                            if (n !== t.peerId && ((t.bcConns.has(n) && !e) || (!t.bcConns.has(n) && e))) {
                                const r = [],
                                    i = [];
                                e ? (t.bcConns.add(n), i.push(n)) : (t.bcConns.delete(n), r.push(n)),
                                    t.provider.emit("peers", [{ added: i, removed: r, webrtcPeers: Array.from(t.webrtcConns.keys()), bcPeers: Array.from(t.bcConns) }]),
                                    pi(t);
                            }
                            break;
                        }
                        default:
                            return console.error("Unable to compute message"), i;
                    }
                    return c ? i : null;
                },
                li = (t, e) => {
                    ii("send message to ", Jt, t.remotePeerId, $t, Gt, " (", t.room.name, ")", ee);
                    try {
                        t.peer.send(X(e));
                    } catch (t) {}
                };
            class hi {
                constructor(t, e, n, r) {
                    ii("establishing connection to ", Jt, n),
                        (this.room = r),
                        (this.remotePeerId = n),
                        (this.closed = !1),
                        (this.connected = !1),
                        (this.synced = !1),
                        (this.peer = new $r({ initiator: e, ...r.provider.peerOpts })),
                        this.peer.on("signal", (e) => {
                            yi(t, r, { to: n, from: r.peerId, type: "signal", signal: e });
                        }),
                        this.peer.on("connect", () => {
                            ii("connected to ", Jt, n), (this.connected = !0);
                            const t = r.provider.doc,
                                e = r.awareness,
                                i = G();
                            tt(i, 0), Kr(i, t), li(this, i);
                            const s = e.getStates();
                            if (s.size > 0) {
                                const t = G();
                                tt(t, 1), ot(t, ei(e, Array.from(s.keys()))), li(this, t);
                            }
                        }),
                        this.peer.on("close", () => {
                            (this.connected = !1),
                                (this.closed = !0),
                                r.webrtcConns.has(this.remotePeerId) &&
                                    (r.webrtcConns.delete(this.remotePeerId), r.provider.emit("peers", [{ removed: [this.remotePeerId], added: [], webrtcPeers: Array.from(r.webrtcConns.keys()), bcPeers: Array.from(r.bcConns) }])),
                                ai(r),
                                this.peer.destroy(),
                                ii("closed connection to ", Jt, n),
                                fi(r);
                        }),
                        this.peer.on("error", (t) => {
                            ii("Error in connection to ", Jt, n, ": ", t), fi(r);
                        }),
                        this.peer.on("data", (t) => {
                            const e = ((t, e) => {
                                const n = t.room;
                                return (
                                    ii("received message from ", Jt, t.remotePeerId, Gt, " (", n.name, ")", $t, ee),
                                    ci(n, e, () => {
                                        (t.synced = !0), ii("synced ", Jt, n.name, $t, " with ", Jt, t.remotePeerId), ai(n);
                                    })
                                );
                            })(this, t);
                            null !== e && li(this, e);
                        });
                }
                destroy() {
                    this.peer.destroy();
                }
            }
            const ui = (t, e) =>
                    ni(e, t.key).then((e) =>
                        t.mux(() =>
                            ((t, e, n = null) => {
                                const r = Jr(t);
                                r.bc.postMessage(e), r.subs.forEach((t) => t(e, n));
                            })(t.name, e)
                        )
                    ),
                di = (t, e) => {
                    t.bcconnected && ui(t, e),
                        ((t, e) => {
                            ii("broadcast message in ", Jt, t.name, $t),
                                t.webrtcConns.forEach((t) => {
                                    try {
                                        t.peer.send(e);
                                    } catch (t) {}
                                });
                        })(t, e);
                },
                fi = (t) => {
                    si.forEach((e) => {
                        e.connected && (e.send({ type: "subscribe", topics: [t.name] }), t.webrtcConns.size < t.provider.maxConns && yi(e, t, { type: "announce", from: t.peerId }));
                    });
                },
                pi = (t) => {
                    if (t.provider.filterBcConns) {
                        const e = G();
                        tt(e, 4), Q(e, 1), it(e, t.peerId), ui(t, X(e));
                    }
                };
            class gi {
                constructor(t, e, n, r) {
                    (this.peerId = Bt()),
                        (this.doc = t),
                        (this.awareness = e.awareness),
                        (this.provider = e),
                        (this.synced = !1),
                        (this.name = n),
                        (this.key = r),
                        (this.webrtcConns = new Map()),
                        (this.bcConns = new Set()),
                        (this.mux = (() => {
                            let t = !0;
                            return (e, n) => {
                                if (t) {
                                    t = !1;
                                    try {
                                        e();
                                    } finally {
                                        t = !0;
                                    }
                                } else void 0 !== n && n();
                            };
                        })()),
                        (this.bcconnected = !1),
                        (this._bcSubscriber = (t) =>
                            ri(new Uint8Array(t), r).then((t) =>
                                this.mux(() => {
                                    const e = ci(this, t, () => {});
                                    e && ui(this, X(e));
                                })
                            )),
                        (this._docUpdateHandler = (t, e) => {
                            const n = G();
                            tt(n, 0),
                                ((t, e) => {
                                    tt(t, 2), ot(t, e);
                                })(n, t),
                                di(this, X(n));
                        }),
                        (this._awarenessUpdateHandler = ({ added: t, updated: e, removed: n }, r) => {
                            const i = t.concat(e).concat(n),
                                s = G();
                            tt(s, 1), ot(s, ei(this.awareness, i)), di(this, X(s));
                        }),
                        (this._beforeUnloadHandler = () => {
                            ti(this.awareness, [t.clientID], "window unload"),
                                oi.forEach((t) => {
                                    t.disconnect();
                                });
                        }),
                        "undefined" != typeof window ? window.addEventListener("beforeunload", this._beforeUnloadHandler) : "undefined" != typeof process && process.on("exit", this._beforeUnloadHandler);
                }
                connect() {
                    this.doc.on("update", this._docUpdateHandler), this.awareness.on("update", this._awarenessUpdateHandler), fi(this);
                    var t, e;
                    (t = this.name), (e = this._bcSubscriber), Jr(t).subs.add(e), (this.bcconnected = !0), pi(this);
                    const n = G();
                    tt(n, 0), Kr(n, this.doc), ui(this, X(n));
                    const r = G();
                    tt(r, 0), Gr(r, this.doc), ui(this, X(r));
                    const i = G();
                    tt(i, 3), ui(this, X(i));
                    const s = G();
                    tt(s, 1), ot(s, ei(this.awareness, [this.doc.clientID])), ui(this, X(s));
                }
                disconnect() {
                    si.forEach((t) => {
                        t.connected && t.send({ type: "unsubscribe", topics: [this.name] });
                    }),
                        ti(this.awareness, [this.doc.clientID], "disconnect");
                    const t = G();
                    var e, n;
                    tt(t, 4),
                        Q(t, 0),
                        it(t, this.peerId),
                        ui(this, X(t)),
                        (e = this.name),
                        (n = this._bcSubscriber),
                        Jr(e).subs.delete(n),
                        (this.bcconnected = !1),
                        this.doc.off("update", this._docUpdateHandler),
                        this.awareness.off("update", this._awarenessUpdateHandler),
                        this.webrtcConns.forEach((t) => t.destroy());
                }
                destroy() {
                    this.disconnect(), "undefined" != typeof window ? window.removeEventListener("beforeunload", this._beforeUnloadHandler) : "undefined" != typeof process && process.off("exit", this._beforeUnloadHandler);
                }
            }
            const yi = (t, e, n) => {
                e.key
                    ? ((t, e) => {
                          const n = G();
                          return lt(n, t), ni(X(n), e);
                      })(n, e.key).then((n) => {
                          t.send({ type: "publish", topic: e.name, data: q(n) });
                      })
                    : t.send({ type: "publish", topic: e.name, data: n });
            };
            class bi extends Vr {
                constructor(t) {
                    super(t),
                        (this.providers = new Set()),
                        this.on("connect", () => {
                            ii(`connected (${t})`);
                            const e = Array.from(oi.keys());
                            this.send({ type: "subscribe", topics: e }), oi.forEach((t) => yi(this, t, { type: "announce", from: t.peerId }));
                        }),
                        this.on("message", (t) => {
                            if ("publish" === t.type) {
                                const i = t.topic,
                                    s = oi.get(i);
                                if (null == s || "string" != typeof i) return;
                                const o = (t) => {
                                    const e = s.webrtcConns,
                                        n = s.peerId;
                                    if (null == t || t.from === n || (void 0 !== t.to && t.to !== n) || s.bcConns.has(t.from)) return;
                                    const i = e.has(t.from) ? () => {} : () => s.provider.emit("peers", [{ removed: [], added: [t.from], webrtcPeers: Array.from(s.webrtcConns.keys()), bcPeers: Array.from(s.bcConns) }]);
                                    switch (t.type) {
                                        case "announce":
                                            e.size < s.provider.maxConns && (r(e, t.from, () => new hi(this, !0, t.from, s)), i());
                                            break;
                                        case "signal":
                                            t.to === n && (r(e, t.from, () => new hi(this, !1, t.from, s)).peer.signal(t.signal), i());
                                    }
                                };
                                s.key ? "string" == typeof t.data && ((e = H(t.data)), (n = s.key), ri(e, n).then((t) => Ot(Et(new Uint8Array(t))))).then(o) : o(t.data);
                            }
                            var e, n;
                        }),
                        this.on("disconnect", () => ii(`disconnect (${t})`));
                }
            }
            class wi extends c {
                constructor(
                    t,
                    e,
                    {
                        signaling: n = ["wss://signaling.yjs.dev", "wss://y-webrtc-signaling-eu.herokuapp.com", "wss://y-webrtc-signaling-us.herokuapp.com"],
                        password: r = null,
                        awareness: i = new Qr(e),
                        maxConns: s = 20 + l(15 * Pt()),
                        filterBcConns: o = !0,
                        peerOpts: a = {},
                    } = {}
                ) {
                    super(),
                        (this.roomName = t),
                        (this.doc = e),
                        (this.filterBcConns = o),
                        (this.awareness = i),
                        (this.shouldConnect = !1),
                        (this.signalingUrls = n),
                        (this.signalingConns = []),
                        (this.maxConns = s),
                        (this.peerOpts = a),
                        (this.key = r
                            ? ((t, e) => {
                                  const n = _(t).buffer,
                                      r = _(e).buffer;
                                  return crypto.subtle
                                      .importKey("raw", n, "PBKDF2", !1, ["deriveKey"])
                                      .then((t) => crypto.subtle.deriveKey({ name: "PBKDF2", salt: r, iterations: 1e5, hash: "SHA-256" }, t, { name: "AES-GCM", length: 256 }, !0, ["encrypt", "decrypt"]));
                              })(r, t)
                            : Wt(null)),
                        (this.room = null),
                        this.key.then((n) => {
                            (this.room = ((t, e, n, r) => {
                                if (oi.has(n)) throw yt(`A Yjs Doc connected to room "${n}" already exists!`);
                                const i = new gi(t, e, n, r);
                                return oi.set(n, i), i;
                            })(e, this, t, n)),
                                this.shouldConnect ? this.room.connect() : this.room.disconnect();
                        }),
                        this.connect(),
                        (this.destroy = this.destroy.bind(this)),
                        e.on("destroy", this.destroy);
                }
                get connected() {
                    return null !== this.room && this.shouldConnect;
                }
                connect() {
                    (this.shouldConnect = !0),
                        this.signalingUrls.forEach((t) => {
                            const e = r(si, t, () => new bi(t));
                            this.signalingConns.push(e), e.providers.add(this);
                        }),
                        this.room && this.room.connect();
                }
                disconnect() {
                    (this.shouldConnect = !1),
                        this.signalingConns.forEach((t) => {
                            t.providers.delete(this), 0 === t.providers.size && (t.destroy(), si.delete(t.url));
                        }),
                        this.room && this.room.disconnect();
                }
                destroy() {
                    this.doc.off("destroy", this.destroy),
                        this.key.then(() => {
                            this.room.destroy(), oi.delete(this.roomName);
                        }),
                        super.destroy();
                }
            }
            let mi = 0,
                _i = 0,
                vi = [],
                Ei = new Set();
            window.connectToRoom = (t, e, n, r) => {
                const i = new Ce(),
                    s = i.getMap("status"),
                    o = i.getMap("request"),
                    a = i.getMap("response");
                new wi("tldraw-p2p-eval", i),
                    s.observe((e) => {
                        e.changes.keys.forEach((e, r) => {
                            "add" === e.action &&
                                "READY" === s.get(r) &&
                                (mi++,
                                console.log(`Peer ${r} is READY for testing. Number of peers: ${mi}`),
                                mi === n &&
                                    (console.log("All peers are READY."),
                                    i.transact(() => {
                                        o.set(t, new Date().getTime());
                                    }, t)));
                        });
                    }),
                    o.observe((e) => {
                        e.changes.keys.forEach((e, n) => {
                            n !== t && (("add" !== e.action && "update" !== e.action) || a.set(`${t}->${n}`, new Date().getTime()));
                        });
                    }),
                    a.observe((i) => {
                        i.changes.keys.forEach((i, s) => {
                            const a = s.split("->")[0],
                                c = s.split("->")[1];
                            if (c === t) {
                                const i = new Date().getTime() - o.get(c);
                                vi.push([i]), Ei.add(a), Ei.size === n - 1 && (_i++, Ei.clear(), _i < e ? o.set(t, new Date().getTime()) : (console.log("RTT results are complete."), r(vi)));
                            }
                        });
                    }),
                    i.transact(() => {
                        s.set(t, "READY");
                    }, t);
            };
        })();
})();
