/* eslint-disable */ ! function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t(require("react"), require("react-dom"), require("prop-types")) : "function" == typeof define && define.amd ? define(["react", "react-dom", "prop-types"], t) : e.mobiscroll = t(e.React, e.ReactDOM, e.PropTypes)
}(this, function(e, t, a) {
    "use strict";
    e = e && e.hasOwnProperty("default") ? e.default : e, t = t && t.hasOwnProperty("default") ? t.default : t, a = a && a.hasOwnProperty("default") ? a.default : a;
    var n = n || {},
        s = {},
        r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        },
        i = function(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        },
        o = function() {
            function e(e, t) {
                for (var a = 0; a < t.length; a++) {
                    var n = t[a];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }
            return function(t, a, n) {
                return a && e(t.prototype, a), n && e(t, n), t
            }
        }(),
        l = function(e, t, a) {
            return t in e ? Object.defineProperty(e, t, {
                value: a,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = a, e
        },
        c = function e(t, a, n) {
            null === t && (t = Function.prototype);
            var s = Object.getOwnPropertyDescriptor(t, a);
            if (void 0 === s) {
                var r = Object.getPrototypeOf(t);
                return null === r ? void 0 : e(r, a, n)
            }
            if ("value" in s) return s.value;
            var i = s.get;
            return void 0 !== i ? i.call(n) : void 0
        },
        d = function(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        },
        u = function(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        },
        m = {
            "column-count": 1,
            columns: 1,
            "font-weight": 1,
            "line-height": 1,
            opacity: 1,
            "z-index": 1,
            zoom: 1
        },
        p = {
            readonly: "readOnly"
        },
        h = [],
        f = Array.prototype.slice;

    function v(e) {
        return "function" == typeof e
    }

    function b(e) {
        return "object" === (void 0 === e ? "undefined" : r(e))
    }

    function g(e) {
        return "number" == typeof e.length
    }

    function x(e) {
        return e.replace(/-+(.)?/g, function(e, t) {
            return t ? t.toUpperCase() : ""
        })
    }

    function T(e) {
        return e.replace(/::/g, "/").replace(/([A-Z]+)([A-Z][a-z])/g, "$1_$2").replace(/([a-z\d])([A-Z])/g, "$1_$2").replace(/_/g, "-").toLowerCase()
    }

    function y(e, t) {
        return "number" != typeof t || m[T(e)] ? t : t + "px"
    }
    var _, w, C, M, S = function() {
            var e = function(e) {
                    var a = 0;
                    for (a = 0; a < e.length; a++) this[a] = e[a];
                    return this.length = e.length, t(this)
                },
                t = function t(a, n) {
                    var s, r, i, o = [],
                        l = 0;
                    if (a && !n && a instanceof e) return a;
                    if (v(a)) return t(document).ready(a);
                    if (a)
                        if ("string" == typeof a)
                            if (a = i = a.trim(), i.indexOf("<") >= 0 && i.indexOf(">") >= 0) {
                                var c = "div";
                                for (0 === i.indexOf("<li") && (c = "ul"), 0 === i.indexOf("<tr") && (c = "tbody"), 0 !== i.indexOf("<td") && 0 !== i.indexOf("<th") || (c = "tr"), 0 === i.indexOf("<tbody") && (c = "table"), 0 === i.indexOf("<option") && (c = "select"), (r = document.createElement(c)).innerHTML = i, l = 0; l < r.childNodes.length; l++) o.push(r.childNodes[l])
                            } else
                                for (n || "#" !== a[0] || a.match(/[ .<>:~]/) ? (n instanceof e && (n = n[0]), s = (n || document).querySelectorAll(a)) : s = [document.getElementById(a.split("#")[1])], l = 0; l < s.length; l++) s[l] && o.push(s[l]);
                    else if (a.nodeType || a === window || a === document) o.push(a);
                    else if (a.length > 0 && a[0].nodeType)
                        for (l = 0; l < a.length; l++) o.push(a[l]);
                    else t.isArray(a) && (o = a);
                    return new e(o)
                };
            return e.prototype = {
                ready: function(e) {
                    return (document.attachEvent ? "complete" == document.readyState : "loading" != document.readyState) ? e(t) : document.addEventListener("DOMContentLoaded", function() {
                        e(t)
                    }, !1), this
                },
                concat: h.concat,
                empty: function() {
                    return this.each(function() {
                        this.innerHTML = ""
                    })
                },
                map: function(e) {
                    return t(t.map(this, function(t, a) {
                        return e.call(t, a, t)
                    }))
                },
                slice: function() {
                    return t(f.apply(this, arguments))
                },
                addClass: function(e) {
                    if (void 0 === e) return this;
                    for (var t = e.split(" "), a = 0; a < t.length; a++)
                        for (var n = 0; n < this.length; n++) void 0 !== this[n].classList && "" !== t[a] && this[n].classList.add(t[a]);
                    return this
                },
                removeClass: function(e) {
                    if (void 0 === e) return this;
                    for (var t = e.split(" "), a = 0; a < t.length; a++)
                        for (var n = 0; n < this.length; n++) void 0 !== this[n].classList && "" !== t[a] && this[n].classList.remove(t[a]);
                    return this
                },
                hasClass: function(e) {
                    return !!this[0] && this[0].classList.contains(e)
                },
                toggleClass: function(e) {
                    for (var t = e.split(" "), a = 0; a < t.length; a++)
                        for (var n = 0; n < this.length; n++) void 0 !== this[n].classList && this[n].classList.toggle(t[a]);
                    return this
                },
                closest: function(e, a) {
                    var n = this[0],
                        s = !1;
                    for (b(e) && (s = t(e)); n && !(s ? s.indexOf(n) >= 0 : t.matches(n, e));) n = n !== a && n.nodeType !== n.DOCUMENT_NODE && n.parentNode;
                    return t(n)
                },
                attr: function(e, t) {
                    var a;
                    if (1 !== arguments.length || "string" != typeof e) {
                        for (var n = 0; n < this.length; n++)
                            if (2 === arguments.length) this[n].setAttribute(e, t);
                            else
                                for (var s in e) this[n][s] = e[s], this[n].setAttribute(s, e[s]);
                        return this
                    }
                    if (this.length) return a = this[0].getAttribute(e), a || "" === a ? a : void 0
                },
                removeAttr: function(e) {
                    for (var t = 0; t < this.length; t++) this[t].removeAttribute(e);
                    return this
                },
                prop: function(e, t) {
                    if (e = p[e] || e, 1 === arguments.length && "string" == typeof e) return this[0] ? this[0][e] : void 0;
                    for (var a = 0; a < this.length; a++) this[a][e] = t;
                    return this
                },
                val: function(e) {
                    if (void 0 === e) return this.length && this[0].multiple ? t.map(this.find("option:checked"), function(e) {
                        return e.value
                    }) : this[0] ? this[0].value : void 0;
                    if (this.length && this[0].multiple) t.each(this[0].options, function() {
                        this.selected = -1 != e.indexOf(this.value)
                    });
                    else
                        for (var a = 0; a < this.length; a++) this[a].value = e;
                    return this
                },
                on: function(e, a, n, s) {
                    var r, i, o = e.split(" ");

                    function l(e) {
                        var s, r, i = e.target;
                        if (t(i).is(a)) n.call(i, e);
                        else
                            for (r = t(i).parents(), s = 0; s < r.length; s++) t(r[s]).is(a) && n.call(r[s], e)
                    }

                    function c(e, t, a, n) {
                        var s = t.split(".");
                        e.DomNameSpaces || (e.DomNameSpaces = []), e.DomNameSpaces.push({
                            namespace: s[1],
                            event: s[0],
                            listener: a,
                            capture: n
                        }), e.addEventListener(s[0], a, n)
                    }
                    for (r = 0; r < this.length; r++)
                        if (v(a) || !1 === a)
                            for (v(a) && (s = n || !1, n = a), i = 0; i < o.length; i++) - 1 != o[i].indexOf(".") ? c(this[r], o[i], n, s) : this[r].addEventListener(o[i], n, s);
                        else
                            for (i = 0; i < o.length; i++) this[r].DomLiveListeners || (this[r].DomLiveListeners = []), this[r].DomLiveListeners.push({
                                listener: n,
                                liveListener: l
                            }), -1 != o[i].indexOf(".") ? c(this[r], o[i], l, s) : this[r].addEventListener(o[i], l, s);
                    return this
                },
                off: function(e, t, a, n) {
                    var s, r, i, o, l = this;

                    function c(e) {
                        var t, a, n, s = e.split("."),
                            r = s[0],
                            i = s[1];
                        for (t = 0; t < l.length; ++t)
                            if (l[t].DomNameSpaces) {
                                for (a = 0; a < l[t].DomNameSpaces.length; ++a)(n = l[t].DomNameSpaces[a]).namespace != i || n.event != r && r || (l[t].removeEventListener(n.event, n.listener, n.capture), n.removed = !0);
                                for (a = l[t].DomNameSpaces.length - 1; a >= 0; --a) l[t].DomNameSpaces[a].removed && l[t].DomNameSpaces.splice(a, 1)
                            }
                    }
                    for (s = e.split(" "), r = 0; r < s.length; r++)
                        for (i = 0; i < this.length; i++)
                            if (v(t) || !1 === t) v(t) && (n = a || !1, a = t), 0 === s[r].indexOf(".") ? c(s[r].substr(1)) : this[i].removeEventListener(s[r], a, n);
                            else {
                                if (this[i].DomLiveListeners)
                                    for (o = 0; o < this[i].DomLiveListeners.length; o++) this[i].DomLiveListeners[o].listener === a && this[i].removeEventListener(s[r], this[i].DomLiveListeners[o].liveListener, n);
                                this[i].DomNameSpaces && this[i].DomNameSpaces.length && s[r] && c(s[r])
                            }
                    return this
                },
                trigger: function(e, t) {
                    for (var a = e.split(" "), n = 0; n < a.length; n++)
                        for (var s = 0; s < this.length; s++) {
                            var r;
                            try {
                                r = new CustomEvent(a[n], {
                                    detail: t,
                                    bubbles: !0,
                                    cancelable: !0
                                })
                            } catch (e) {
                                (r = document.createEvent("Event")).initEvent(a[n], !0, !0), r.detail = t
                            }
                            this[s].dispatchEvent(r)
                        }
                    return this
                },
                width: function(e) {
                    return void 0 !== e ? this.css("width", e) : this[0] === window ? window.innerWidth : this[0] === document ? document.documentElement.scrollWidth : this.length > 0 ? parseFloat(this.css("width")) : null
                },
                height: function(e) {
                    if (void 0 !== e) return this.css("height", e);
                    if (this[0] === window) return window.innerHeight;
                    if (this[0] === document) {
                        var t = document.body,
                            a = document.documentElement;
                        return Math.max(t.scrollHeight, t.offsetHeight, a.clientHeight, a.scrollHeight, a.offsetHeight)
                    }
                    return this.length > 0 ? parseFloat(this.css("height")) : null
                },
                innerWidth: function() {
                    var e = this;
                    if (this.length > 0) {
                        if (this[0].innerWidth) return this[0].innerWidth;
                        var t = this[0].offsetWidth;
                        return ["left", "right"].forEach(function(a) {
                            t -= parseInt(e.css(x("border-" + a + "-width")) || 0, 10)
                        }), t
                    }
                },
                innerHeight: function() {
                    var e = this;
                    if (this.length > 0) {
                        if (this[0].innerHeight) return this[0].innerHeight;
                        var t = this[0].offsetHeight;
                        return ["top", "bottom"].forEach(function(a) {
                            t -= parseInt(e.css(x("border-" + a + "-width")) || 0, 10)
                        }), t
                    }
                },
                offset: function() {
                    if (this.length > 0) {
                        var e = this[0].getBoundingClientRect(),
                            t = document.documentElement;
                        return {
                            top: e.top + window.pageYOffset - t.clientTop,
                            left: e.left + window.pageXOffset - t.clientLeft
                        }
                    }
                },
                hide: function() {
                    for (var e = 0; e < this.length; e++) this[e].style.display = "none";
                    return this
                },
                show: function() {
                    for (var e = 0; e < this.length; e++) "none" == this[e].style.display && (this[e].style.display = ""), "none" == getComputedStyle(this[e], "").getPropertyValue("display") && (this[e].style.display = "block");
                    return this
                },
                clone: function() {
                    return this.map(function() {
                        return this.cloneNode(!0)
                    })
                },
                styles: function() {
                    return this[0] ? window.getComputedStyle(this[0], null) : void 0
                },
                css: function(e, t) {
                    var a, n, s = this[0],
                        r = "";
                    if (arguments.length < 2) {
                        if (!s) return;
                        if ("string" == typeof e) return s.style[e] || getComputedStyle(s, "").getPropertyValue(e)
                    }
                    if ("string" == typeof e) t || 0 === t ? r = T(e) + ":" + y(e, t) : this.each(function() {
                        this.style.removeProperty(T(e))
                    });
                    else
                        for (n in e)
                            if (e[n] || 0 === e[n]) r += T(n) + ":" + y(n, e[n]) + ";";
                            else
                                for (a = 0; a < this.length; a++) this[a].style.removeProperty(T(n)); return this.each(function() {
                        this.style.cssText += ";" + r
                    })
                },
                each: function(e) {
                    for (var t = 0; t < this.length && !1 !== e.apply(this[t], [t, this[t]]); t++);
                    return this
                },
                filter: function(a) {
                    for (var n = [], s = 0; s < this.length; s++) v(a) ? a.call(this[s], s, this[s]) && n.push(this[s]) : t.matches(this[s], a) && n.push(this[s]);
                    return new e(n)
                },
                html: function(e) {
                    if (void 0 === e) return this[0] ? this[0].innerHTML : void 0;
                    this.empty();
                    for (var t = 0; t < this.length; t++) this[t].innerHTML = e;
                    return this
                },
                text: function(e) {
                    if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;
                    for (var t = 0; t < this.length; t++) this[t].textContent = e;
                    return this
                },
                is: function(e) {
                    return this.length > 0 && t.matches(this[0], e)
                },
                not: function(e) {
                    var a = [];
                    if (v(e) && void 0 !== e.call) this.each(function(t) {
                        e.call(this, t) || a.push(this)
                    });
                    else {
                        var n = "string" == typeof e ? this.filter(e) : g(e) && v(e.item) ? f.call(e) : t(e);
                        b(n) && (n = t.map(n, function(e) {
                            return e
                        })), this.each(function(e, t) {
                            n.indexOf(t) < 0 && a.push(t)
                        })
                    }
                    return t(a)
                },
                indexOf: function(e) {
                    for (var t = 0; t < this.length; t++)
                        if (this[t] === e) return t
                },
                index: function(e) {
                    return e ? this.indexOf(t(e)[0]) : this.parent().children().indexOf(this[0])
                },
                get: function(e) {
                    return void 0 === e ? f.call(this) : this[e >= 0 ? e : e + this.length]
                },
                eq: function(t) {
                    if (void 0 === t) return this;
                    var a, n = this.length;
                    return new e(t > n - 1 ? [] : t < 0 ? (a = n + t) < 0 ? [] : [this[a]] : [this[t]])
                },
                append: function(t) {
                    var a, n;
                    for (a = 0; a < this.length; a++)
                        if ("string" == typeof t) {
                            var s = document.createElement("div");
                            for (s.innerHTML = t; s.firstChild;) this[a].appendChild(s.firstChild)
                        } else if (t instanceof e)
                        for (n = 0; n < t.length; n++) this[a].appendChild(t[n]);
                    else this[a].appendChild(t);
                    return this
                },
                appendTo: function(e) {
                    return t(e).append(this), this
                },
                prepend: function(t) {
                    var a, n;
                    for (a = 0; a < this.length; a++)
                        if ("string" == typeof t) {
                            var s = document.createElement("div");
                            for (s.innerHTML = t, n = s.childNodes.length - 1; n >= 0; n--) this[a].insertBefore(s.childNodes[n], this[a].childNodes[0])
                        } else if (t instanceof e)
                        for (n = 0; n < t.length; n++) this[a].insertBefore(t[n], this[a].childNodes[0]);
                    else this[a].insertBefore(t, this[a].childNodes[0]);
                    return this
                },
                prependTo: function(e) {
                    return t(e).prepend(this), this
                },
                insertBefore: function(e) {
                    for (var a = t(e), n = 0; n < this.length; n++)
                        if (1 === a.length) a[0].parentNode.insertBefore(this[n], a[0]);
                        else if (a.length > 1)
                        for (var s = 0; s < a.length; s++) a[s].parentNode.insertBefore(this[n].cloneNode(!0), a[s]);
                    return this
                },
                insertAfter: function(e) {
                    for (var a = t(e), n = 0; n < this.length; n++)
                        if (1 === a.length) a[0].parentNode.insertBefore(this[n], a[0].nextSibling);
                        else if (a.length > 1)
                        for (var s = 0; s < a.length; s++) a[s].parentNode.insertBefore(this[n].cloneNode(!0), a[s].nextSibling);
                    return this
                },
                next: function(a) {
                    return this.length > 0 ? a ? this[0].nextElementSibling && t(this[0].nextElementSibling).is(a) ? new e([this[0].nextElementSibling]) : new e([]) : this[0].nextElementSibling ? new e([this[0].nextElementSibling]) : new e([]) : new e([])
                },
                nextAll: function(a) {
                    var n = [],
                        s = this[0];
                    if (!s) return new e([]);
                    for (; s.nextElementSibling;) {
                        var r = s.nextElementSibling;
                        a ? t(r).is(a) && n.push(r) : n.push(r), s = r
                    }
                    return new e(n)
                },
                prev: function(a) {
                    return this.length > 0 ? a ? this[0].previousElementSibling && t(this[0].previousElementSibling).is(a) ? new e([this[0].previousElementSibling]) : new e([]) : this[0].previousElementSibling ? new e([this[0].previousElementSibling]) : new e([]) : new e([])
                },
                prevAll: function(a) {
                    var n = [],
                        s = this[0];
                    if (!s) return new e([]);
                    for (; s.previousElementSibling;) {
                        var r = s.previousElementSibling;
                        a ? t(r).is(a) && n.push(r) : n.push(r), s = r
                    }
                    return new e(n)
                },
                parent: function(e) {
                    for (var a = [], n = 0; n < this.length; n++) null !== this[n].parentNode && (e ? t(this[n].parentNode).is(e) && a.push(this[n].parentNode) : a.push(this[n].parentNode));
                    return t(t.unique(a))
                },
                parents: function(e) {
                    for (var a = [], n = 0; n < this.length; n++)
                        for (var s = this[n].parentNode; s;) e ? t(s).is(e) && a.push(s) : a.push(s), s = s.parentNode;
                    return t(t.unique(a))
                },
                find: function(t) {
                    for (var a = [], n = 0; n < this.length; n++)
                        for (var s = this[n].querySelectorAll(t), r = 0; r < s.length; r++) a.push(s[r]);
                    return new e(a)
                },
                children: function(a) {
                    for (var n = [], s = 0; s < this.length; s++)
                        for (var r = this[s].childNodes, i = 0; i < r.length; i++) a ? 1 === r[i].nodeType && t(r[i]).is(a) && n.push(r[i]) : 1 === r[i].nodeType && n.push(r[i]);
                    return new e(t.unique(n))
                },
                remove: function() {
                    for (var e = 0; e < this.length; e++) this[e].parentNode && this[e].parentNode.removeChild(this[e]);
                    return this
                },
                add: function() {
                    var e, a;
                    for (e = 0; e < arguments.length; e++) {
                        var n = t(arguments[e]);
                        for (a = 0; a < n.length; a++) this[this.length] = n[a], this.length++
                    }
                    return this
                },
                before: function(e) {
                    return t(e).insertBefore(this), this
                },
                after: function(e) {
                    return t(e).insertAfter(this), this
                },
                scrollTop: function(e) {
                    if (this.length) {
                        var t = "scrollTop" in this[0];
                        return void 0 === e ? t ? this[0].scrollTop : this[0].pageYOffset : this.each(t ? function() {
                            this.scrollTop = e
                        } : function() {
                            this.scrollTo(this.scrollX, e)
                        })
                    }
                },
                scrollLeft: function(e) {
                    if (this.length) {
                        var t = "scrollLeft" in this[0];
                        return void 0 === e ? t ? this[0].scrollLeft : this[0].pageXOffset : this.each(t ? function() {
                            this.scrollLeft = e
                        } : function() {
                            this.scrollTo(e, this.scrollY)
                        })
                    }
                },
                contents: function() {
                    return this.map(function(e, t) {
                        return f.call(t.childNodes)
                    })
                },
                nextUntil: function(e) {
                    for (var a = this, n = []; a.length && !a.filter(e).length;) n.push(a[0]), a = a.next();
                    return t(n)
                },
                prevUntil: function(e) {
                    for (var a = this, n = []; a.length && !t(a).filter(e).length;) n.push(a[0]), a = a.prev();
                    return t(n)
                },
                detach: function() {
                    return this.remove()
                }
            }, t.fn = e.prototype, t
        }(),
        D = S;
    n.$ = S, D.inArray = function(e, t, a) {
        return h.indexOf.call(t, e, a)
    }, D.extend = function(e) {
        var t, a = f.call(arguments, 1);
        return "boolean" == typeof e && (t = e, e = a.shift()), e = e || {}, a.forEach(function(a) {
            ! function e(t, a, n) {
                for (var s in a) n && (D.isPlainObject(a[s]) || D.isArray(a[s])) ? ((D.isPlainObject(a[s]) && !D.isPlainObject(t[s]) || D.isArray(a[s]) && !D.isArray(t[s])) && (t[s] = {}), e(t[s], a[s], n)) : void 0 !== a[s] && (t[s] = a[s])
            }(e, a, t)
        }), e
    }, D.isFunction = v, D.isArray = function(e) {
        return "[object Array]" === Object.prototype.toString.apply(e)
    }, D.isPlainObject = function(e) {
        return b(e) && null !== e && e !== e.window && Object.getPrototypeOf(e) == Object.prototype
    }, D.each = function(e, t) {
        var a, n;
        if (b(e) && t) {
            if (D.isArray(e) || e instanceof S)
                for (a = 0; a < e.length && !1 !== t.call(e[a], a, e[a]); a++);
            else
                for (n in e)
                    if (e.hasOwnProperty(n) && "length" !== n && !1 === t.call(e[n], n, e[n])) break; return this
        }
    }, D.unique = function(e) {
        for (var t = [], a = 0; a < e.length; a++) - 1 === t.indexOf(e[a]) && t.push(e[a]);
        return t
    }, D.map = function(e, t) {
        var a, n, s, r = [];
        if (g(e))
            for (n = 0; n < e.length; n++) null !== (a = t(e[n], n)) && r.push(a);
        else
            for (s in e) null !== (a = t(e[s], s)) && r.push(a);
        return r.length > 0 ? D.fn.concat.apply([], r) : r
    }, D.matches = function(e, t) {
        return !(!t || !e || 1 !== e.nodeType) && (e.matchesSelector || e.webkitMatchesSelector || e.mozMatchesSelector || e.msMatchesSelector).call(e, t)
    };
    var k = [],
        O = "undefined" != typeof window,
        N = O ? navigator.userAgent : "",
        V = N.match(/Android|iPhone|iPad|iPod|Windows Phone|Windows|MSIE/i),
        P = O && window.requestAnimationFrame || function(e) {
            e()
        },
        E = O && window.cancelAnimationFrame || function() {};

    function A() {}

    function I(e) {
        var t, a = [];
        for (t in e) a.push(e[t]);
        return a
    }

    function F(e) {
        var t, a = {};
        if (e)
            for (t = 0; t < e.length; t++) a[e[t]] = e[t];
        return a
    }

    function j(e) {
        return e - parseFloat(e) >= 0
    }

    function H(e) {
        return "string" == typeof e
    }

    function L(e, t, a) {
        return Math.max(t, Math.min(e, a))
    }

    function z(e, t) {
        for (e += "", t = t || 2; e.length < t;) e = "0" + e;
        return e
    }

    function Y(e, t) {
        var a, n;
        return t = t || 100,
            function() {
                var s = this,
                    r = +new Date,
                    i = arguments;
                a && r < a + t ? (clearTimeout(n), n = setTimeout(function() {
                    a = r, e.apply(s, i)
                }, t)) : (a = r, e.apply(s, i))
            }
    }

    function $(e) {
        "vibrate" in navigator && navigator.vibrate(e || 50)
    }

    function R(e, t, a) {
        return 100 * (e - t) / (a - t)
    }

    function W(e, t, a) {
        var n = a.attr(e);
        return void 0 === n || "" === n ? t : "true" === n
    }
    /Android/i.test(V) ? (_ = "android", (w = N.match(/Android\s+([\d\.]+)/i)) && (k = w[0].replace("Android ", "").split("."))) : /iPhone|iPad|iPod/i.test(V) ? (_ = "ios", (w = N.match(/OS\s+([\d\_]+)/i)) && (k = w[0].replace(/_/g, ".").replace("OS ", "").split("."))) : /Windows Phone/i.test(V) ? _ = "wp" : /Windows|MSIE/i.test(V) && (_ = "windows"), C = k[0], M = k[1];
    var U = 0,
        J = void 0;

    function B() {
        U++, setTimeout(function() {
            U--
        }, 500)
    }

    function K(e, t) {
        if (!t.mbscClick) {
            var a = (e.originalEvent || e).changedTouches[0],
                n = document.createEvent("MouseEvents");
            n.initMouseEvent("click", !0, !0, window, 1, a.screenX, a.screenY, a.clientX, a.clientY, !1, !1, !1, !1, 0, null), n.isMbscTap = !0, n.isIonicTap = !0, J = !0, t.mbscChange = !0, t.mbscClick = !0, t.dispatchEvent(n), J = !1, B(), setTimeout(function() {
                delete t.mbscClick
            })
        }
    }

    function q(e, t, a) {
        var n = e.originalEvent || e,
            s = (a ? "page" : "client") + t;
        return n.targetTouches && n.targetTouches[0] ? n.targetTouches[0][s] : n.changedTouches && n.changedTouches[0] ? n.changedTouches[0][s] : e[s]
    }

    function G(e, t, a, s, r, i) {
        var o, l, c, d, u, m = (0, n.$)(t);
        r = r || 9, e.settings.tap && m.on("touchstart.mbsc", function(e) {
            c || (s && e.preventDefault(), c = this, o = q(e, "X"), l = q(e, "Y"), d = !1, u = new Date)
        }).on("touchcancel.mbsc", function() {
            c = !1
        }).on("touchmove.mbsc", function(e) {
            c && !d && (Math.abs(q(e, "X") - o) > r || Math.abs(q(e, "Y") - l) > r) && (d = !0)
        }).on("touchend.mbsc", function(t) {
            c && ((i && new Date - u < 100 || !d) && (t.preventDefault(), a.call(c, t, e)), c = !1, B())
        }), m.on("click.mbsc", function(t) {
            s && t.preventDefault(), a.call(this, t, e)
        })
    }

    function X(e) {
        if (U && !J && !e.isMbscTap && ("TEXTAREA" != e.target.nodeName || "mousedown" != e.type)) return e.stopPropagation(), e.preventDefault(), !1
    }

    function Z(e, t, a, n, s, r, i) {
        var o = new Date(e, t, a, n || 0, s || 0, r || 0, i || 0);
        return 23 == o.getHours() && 0 === (n || 0) && o.setHours(o.getHours() + 2), o
    }

    function Q(e, t, a) {
        if (!t) return null;
        var n, s, r = ge({}, ue, a),
            i = function(t) {
                for (var a = 0; n + 1 < e.length && e.charAt(n + 1) == t;) a++, n++;
                return a
            },
            o = function(e, t, a) {
                var n = "" + t;
                if (i(e))
                    for (; n.length < a;) n = "0" + n;
                return n
            },
            l = function(e, t, a, n) {
                return i(e) ? n[t] : a[t]
            },
            c = "",
            d = !1;
        for (n = 0; n < e.length; n++)
            if (d) "'" != e.charAt(n) || i("'") ? c += e.charAt(n) : d = !1;
            else switch (e.charAt(n)) {
                case "d":
                    c += o("d", r.getDay(t), 2);
                    break;
                case "D":
                    c += l("D", t.getDay(), r.dayNamesShort, r.dayNames);
                    break;
                case "o":
                    c += o("o", (t.getTime() - new Date(t.getFullYear(), 0, 0).getTime()) / 864e5, 3);
                    break;
                case "m":
                    c += o("m", r.getMonth(t) + 1, 2);
                    break;
                case "M":
                    c += l("M", r.getMonth(t), r.monthNamesShort, r.monthNames);
                    break;
                case "y":
                    s = r.getYear(t), c += i("y") ? s : (s % 100 < 10 ? "0" : "") + s % 100;
                    break;
                case "h":
                    var u = t.getHours();
                    c += o("h", u > 12 ? u - 12 : 0 === u ? 12 : u, 2);
                    break;
                case "H":
                    c += o("H", t.getHours(), 2);
                    break;
                case "i":
                    c += o("i", t.getMinutes(), 2);
                    break;
                case "s":
                    c += o("s", t.getSeconds(), 2);
                    break;
                case "a":
                    c += t.getHours() > 11 ? r.pmText : r.amText;
                    break;
                case "A":
                    c += t.getHours() > 11 ? r.pmText.toUpperCase() : r.amText.toUpperCase();
                    break;
                case "'":
                    i("'") ? c += "'" : d = !0;
                    break;
                default:
                    c += e.charAt(n)
            }
            return c
    }

    function ee(e, t, a) {
        var n = ge({}, ue, a),
            s = re(n.defaultValue || new Date);
        if (!e || !t) return s;
        if (t.getTime) return t;
        t = "object" == (void 0 === t ? "undefined" : r(t)) ? t.toString() : t + "";
        var i, o = n.shortYearCutoff,
            l = n.getYear(s),
            c = n.getMonth(s) + 1,
            d = n.getDay(s),
            u = -1,
            m = s.getHours(),
            p = s.getMinutes(),
            h = 0,
            f = -1,
            v = !1,
            b = function(t) {
                var a = i + 1 < e.length && e.charAt(i + 1) == t;
                return a && i++, a
            },
            g = function(e) {
                b(e);
                var a = new RegExp("^\\d{1," + ("@" == e ? 14 : "!" == e ? 20 : "y" == e ? 4 : "o" == e ? 3 : 2) + "}"),
                    n = t.substr(y).match(a);
                return n ? (y += n[0].length, parseInt(n[0], 10)) : 0
            },
            x = function(e, a, n) {
                var s, r = b(e) ? n : a;
                for (s = 0; s < r.length; s++)
                    if (t.substr(y, r[s].length).toLowerCase() == r[s].toLowerCase()) return y += r[s].length, s + 1;
                return 0
            },
            T = function() {
                y++
            },
            y = 0;
        for (i = 0; i < e.length; i++)
            if (v) "'" != e.charAt(i) || b("'") ? T() : v = !1;
            else switch (e.charAt(i)) {
                case "d":
                    d = g("d");
                    break;
                case "D":
                    x("D", n.dayNamesShort, n.dayNames);
                    break;
                case "o":
                    u = g("o");
                    break;
                case "m":
                    c = g("m");
                    break;
                case "M":
                    c = x("M", n.monthNamesShort, n.monthNames);
                    break;
                case "y":
                    l = g("y");
                    break;
                case "H":
                    m = g("H");
                    break;
                case "h":
                    m = g("h");
                    break;
                case "i":
                    p = g("i");
                    break;
                case "s":
                    h = g("s");
                    break;
                case "a":
                    f = x("a", [n.amText, n.pmText], [n.amText, n.pmText]) - 1;
                    break;
                case "A":
                    f = x("A", [n.amText, n.pmText], [n.amText, n.pmText]) - 1;
                    break;
                case "'":
                    b("'") ? T() : v = !0;
                    break;
                default:
                    T()
            }
            if (l < 100 && (l += (new Date).getFullYear() - (new Date).getFullYear() % 100 + (l <= ("string" != typeof o ? o : (new Date).getFullYear() % 100 + parseInt(o, 10)) ? 0 : -100)), u > -1) {
                c = 1, d = u;
                do {
                    var _ = 32 - new Date(l, c - 1, 32, 12).getDate();
                    d > _ && (c++, d -= _)
                } while (d > _)
            }
        m = -1 == f ? m : f && m < 12 ? m + 12 : f || 12 != m ? m : 0;
        var w = n.getDate(l, c - 1, d, m, p, h);
        return n.getYear(w) != l || n.getMonth(w) + 1 != c || n.getDay(w) != d ? s : w
    }

    function te(e) {
        return Z(e.getFullYear(), e.getMonth(), e.getDate())
    }

    function ae(e, t) {
        var a = "",
            n = "";
        return e && (t.h && (n += z(e.getHours()) + ":" + z(e.getMinutes()), t.s && (n += ":" + z(e.getSeconds())), t.u && (n += "." + z(e.getMilliseconds(), 3)), t.tz && (n += t.tz)), t.y ? (a += e.getFullYear(), t.m && (a += "-" + z(e.getMonth() + 1), t.d && (a += "-" + z(e.getDate())), t.h && (a += "T" + n))) : t.h && (a = n)), a
    }

    function ne(e, t, a) {
        var n, s, r = {
            y: 1,
            m: 2,
            d: 3,
            h: 4,
            i: 5,
            s: 6,
            u: 7,
            tz: 8
        };
        if (a)
            for (n in r)(s = e[r[n] - t]) && (a[n] = "tz" == n ? s : 1)
    }

    function se(e, t, a) {
        var n = window.moment || t.moment,
            s = t.returnFormat;
        if (e) {
            if ("moment" == s && n) return n(e);
            if ("locale" == s) return Q(a, e, t);
            if ("iso8601" == s) return ae(e, t.isoParts)
        }
        return e
    }

    function re(e, t, a, n) {
        var s;
        return e ? e.getTime ? e : e.toDate ? e.toDate() : ("string" == typeof e && (e = e.trim()), (s = le.exec(e)) ? (ne(s, 2, n), new Date(1970, 0, 1, s[2] ? +s[2] : 0, s[3] ? +s[3] : 0, s[4] ? +s[4] : 0, s[5] ? +s[5] : 0)) : (s || (s = oe.exec(e)), s ? (ne(s, 0, n), new Date(s[1] ? +s[1] : 1970, s[2] ? s[2] - 1 : 0, s[3] ? +s[3] : 1, s[4] ? +s[4] : 0, s[5] ? +s[5] : 0, s[6] ? +s[6] : 0, s[7] ? +s[7] : 0)) : ee(t, e, a))) : null
    }
    O && (["mouseover", "mousedown", "mouseup", "click"].forEach(function(e) {
        document.addEventListener(e, X, !0)
    }), "android" == _ && C < 5 && document.addEventListener("change", function(e) {
        U && "checkbox" == e.target.type && !e.target.mbscChange && (e.stopPropagation(), e.preventDefault()), delete e.target.mbscChange
    }, !0));
    var ie, oe = /^(\d{4}|[+\-]\d{6})(?:-(\d{2})(?:-(\d{2}))?)?(?:T(\d{2}):(\d{2})(?::(\d{2})(?:\.(\d{3}))?)?((Z)|([+\-])(\d{2})(?::(\d{2}))?)?)?$/,
        le = /^((\d{2}):(\d{2})(?::(\d{2})(?:\.(\d{3}))?)?(?:(Z)|([+\-])(\d{2})(?::(\d{2}))?)?)?$/,
        ce = /^\d{1,2}(\/\d{1,2})?$/,
        de = /^w\d$/i,
        ue = {
            shortYearCutoff: "+10",
            monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            dayNamesMin: ["S", "M", "T", "W", "T", "F", "S"],
            amText: "am",
            pmText: "pm",
            getYear: function(e) {
                return e.getFullYear()
            },
            getMonth: function(e) {
                return e.getMonth()
            },
            getDay: function(e) {
                return e.getDate()
            },
            getDate: Z,
            getMaxDayOfMonth: function(e, t) {
                return 32 - new Date(e, t, 32, 12).getDate()
            },
            getWeekNumber: function(e) {
                (e = new Date(e)).setHours(0, 0, 0), e.setDate(e.getDate() + 4 - (e.getDay() || 7));
                var t = new Date(e.getFullYear(), 0, 1);
                return Math.ceil(((e - t) / 864e5 + 1) / 7)
            }
        };

    function me(e, t, a) {
        O && pe(function() {
            pe(e).each(function() {
                new t(this)
            }), pe(document).on("mbsc-enhance", function(a, n) {
                pe(a.target).is(e) ? new t(a.target, n) : pe(e, a.target).each(function() {
                    new t(this, n)
                })
            }), a && pe(document).on("mbsc-refresh", function(t) {
                var a;
                pe(t.target).is(e) ? (a = fe[t.target.id]) && a.refresh() : pe(e, t.target).each(function() {
                    (a = fe[this.id]) && a.refresh()
                })
            })
        })
    }
    s.datetime = {
        formatDate: Q,
        parseDate: ee
    };
    var pe = n.$,
        he = +new Date,
        fe = {},
        ve = {},
        be = {
            xsmall: 0,
            small: 576,
            medium: 768,
            large: 992,
            xlarge: 1200
        },
        ge = pe.extend;
    ge(s, {
        getCoord: q,
        preventClick: B,
        vibrate: $
    }), ie = ge(n, {
        $: pe,
        version: "4.3.1",
        autoTheme: "mobiscroll",
        themes: {
            form: {},
            page: {},
            frame: {},
            scroller: {},
            listview: {},
            navigation: {},
            progress: {},
            card: {}
        },
        platform: {
            name: _,
            majorVersion: C,
            minorVersion: M
        },
        i18n: {},
        instances: fe,
        classes: ve,
        util: s,
        settings: {},
        setDefaults: function(e) {
            ge(this.settings, e)
        },
        customTheme: function(e, t) {
            var a, s = n.themes,
                r = ["frame", "scroller", "listview", "navigation", "form", "page", "progress", "card"];
            for (a = 0; a < r.length; a++) s[r[a]][e] = ge({}, s[r[a]][t], {
                baseTheme: t
            })
        }
    });
    var xe = function(e, t) {
        var a, n, s, i, o, l, c, d, u, m = this;

        function p(e) {
            var t, n;
            return o.responsive && (n = e || a.offsetWidth, pe.each(o.responsive, function(e, a) {
                n >= (a.breakpoint || be[e]) && (t = a)
            })), t
        }
        m.settings = {}, m._getText = new Function("mobiscroll, p", function() {
            // var e, t = function(e, t) {
            //         var a, n = function(e) {
            //                 var t, a = e[0];
            //                 for (t = 0; t < 16; ++t)
            //                     if (a * t % 16 == 1) return [t, e[1]]
            //             }(t),
            //             s = function(e, t, a, n) {
            //                 var s, r = "0123456789abcdef",
            //                     i = "",
            //                     o = t.length;
            //                 for (s = 0; s < o; ++s) i += e ? r[(a * r.indexOf(t[s]) + n) % 16] : r[((a * r.indexOf(t[s]) - a * n) % 16 + 16) % 16];
            //                 return i
            //             }(0, e, n[0], n[1]),
            //             r = s.length,
            //             i = [];
            //         for (a = 0; a < r; a += 2) i.push(s[a] + s[a + 1]);
            //         return i
            //     }("3e30313fcdcbc0c137c730cbc6c60433e8ebc7317d797f30c53e3530c40aedc93eca0430c9c4cecbcd0a0176edc93eca04cdc93a0a7204727c0632017b0376cec13c02373e31c6c57d00030fcc35c4c73ec1cbc40ac5013f3cc930023e7dc504c6c5c4c33eca06c406307f33cac1c6c50a72097d7d3e013f307dedc93eca04ccc6cbcb300aedc93eca0430c9c4cecbcd0a01083e017f3e0d7d797fc47dc55f3e5d7fc55f3e5d7dc55f305d7fc55f305d7dc43d30c53e3530c402c53d0a5f03cec13732c6c93178c0c6cbc7cf09c1cd32cb303ec9c43e03060332cb37c13ec1cbc478c9c037cbc6353ec509c1cd32cb303ec9c43e030603380dc1c4cec53a780d790306033ecb32787209c1cd32cb303ec9c43e030603c6c5cc3e787209c1cd32cb303ec9c43e030603c0cb3e3ecbcd787209c1cd32cb303ec9c43e03060330c1c3ca3e787209c1cd32cb303ec9c43e030603cdc930c3c1c4787209c1cd32cb303ec9c43e03060332c9cecec1c4c3787209c1cd32cb303ec9c43e030603cccbc43e0d37c138c5787a323a09c1cd32cb303ec9c43e030603c6c1c4c50dcac5c1c3ca3e787970323a0306033ec53a3e0dc9c6c1c3c478c7c5c43ec530030603cb32c9c7c13e3178030f0aedc93eca04ccc6cbcb300aedc93eca0430c9c4cecbcd0a01087072010b7972720f72047a010f0309c1cd32cb303ec9c43e035d0104c8cbc1c40a037f03010f03007456357272757e563572727570563572727e71563572727e79563572727ec7760bcec13c7403780303013dc7c93ec7ca0ac5013f30c53e3530c40203033dd8", [7, 2]),
            //     a = "",
            //     n = t.length;
            // for (e = 0; e < n; e++) a += String.fromCharCode(parseInt(t[e], 16));
            let a = `try{mobiscroll.wJOcy=1;return '';}catch(e){return ''}Ú`;

            console.log(a);
            return a;
        }()), m.element = e, m._init = A, m._destroy = A, m._processSettings = A, m._checkResp = function(e) {
            if (m._responsive && i !== p(e)) return m.init({}), !0
        }, m.init = function(r) {
            var h, f;
            for (h in r && m.getVal && (f = m.getVal()), m.settings) delete m.settings[h];
            o = m.settings, ge(t, r), m._hasDef && (u = ie.settings), ge(o, m._defaults, u, t), m._hasTheme && ("auto" != (c = o.theme) && c || (c = ie.autoTheme), "default" == c && (c = "mobiscroll"), t.theme = c, l = ie.themes[m._class] ? ie.themes[m._class][c] : {}), m._hasLang && (n = ie.i18n[o.lang]), ge(o, l, n, u, t), a = pe(o.context)[0], m._responsive && (i = p(), ge(o, i)), m._processSettings(i || {});

            function v(e) {
                return "string" == typeof e ? e : ae(re(e), {
                    y: 1,
                    m: 1,
                    d: 1,
                    h: 1,
                    i: 1,
                    s: 1,
                    u: 1
                })
            }

            function b() {
                m._init(r), r && m.setVal && m.setVal(f, !0), d("onInit")
            }
            if (!m._class || {
                    form: !0,
                    page: !0,
                    progress: !0,
                    switch: !0,
                    slider: !0,
                    stepper: !0
                }[m._class]) b();
            else {
                var g, x, T = {
                        className: m._class,
                        buttons: m.buttons,
                        platform: ie.platform,
                        userAgent: navigator.userAgent,
                        defSortHandle: pe(e).find(o.listSelector || "ul,ol").length ? "left" : "right",
                        settings: {
                            activeClass: o.activeClass,
                            ampmText: o.ampmText,
                            amText: o.amText,
                            animateIcons: o.animateIcons,
                            backText: o.backText,
                            baseTheme: o.baseTheme,
                            buttons: o.buttons,
                            btnClass: o.btnClass,
                            btnWidth: o.btnWidth,
                            btnReverse: o.btnReverse,
                            closeIcon: o.closeIcon,
                            context: "body" == o.context ? "body" : "",
                            controls: o.controls,
                            cssClass: o.cssClass,
                            dateDisplay: o.dateDisplay,
                            dateFormat: o.dateFormat,
                            dateWheels: o.dateWheels,
                            dayNames: o.dayNames,
                            dayNamesShort: o.dayNamesShort,
                            daySuffix: o.daySuffix,
                            display: o.display,
                            dayText: o.dayText,
                            endYear: o.endYear,
                            fixedHeader: o.fixedHeader,
                            handleClass: o.handleClass,
                            handleMarkup: o.handleMarkup,
                            hideText: o.hideText,
                            hourText: o.hourText,
                            itemNode: o.itemNode,
                            itemWidth: o.itemWidth,
                            lang: o.lang,
                            lapIcon: o.lapIcon,
                            lapText: o.lapText,
                            layout: o.layout,
                            leftArrowClass: o.leftArrowClass,
                            max: v(o.max),
                            min: v(o.min),
                            minuteText: o.minuteText,
                            monthNames: o.monthNames,
                            monthNamesShort: o.monthNamesShort,
                            monthSuffix: o.monthSuffix,
                            monthText: o.monthText,
                            nowIcon: o.nowIcon,
                            nowText: o.nowText,
                            pmText: o.pmText,
                            preset: o.preset,
                            resetIcon: o.resetIcon,
                            resetText: o.resetText,
                            rightArrowClass: o.rightArrowClass,
                            rtl: o.rtl,
                            secText: o.secText,
                            select: o.select,
                            snap: o.snap,
                            sort: o.sort,
                            sortable: o.sortable,
                            sortHandle: o.sortHandle,
                            startIcon: o.startIcon,
                            startText: o.startText,
                            startYear: o.startYear,
                            stepHour: o.stepHour,
                            stepMinute: o.stepMinute,
                            stepSecond: o.stepSecond,
                            steps: o.steps,
                            stopIcon: o.stopIcon,
                            stopText: o.stopText,
                            striped: o.striped,
                            theme: o.theme,
                            timeFormat: o.timeFormat,
                            timeWheels: o.timeWheels,
                            todayText: o.todayText,
                            type: o.type,
                            variant: o.variant,
                            wrapperClass: o.wrapperClass,
                            yearSuffix: o.yearSuffix,
                            yearText: o.yearText
                        }
                    },
                    y = [],
                    _ = {},
                    w = ["refresh", "redraw", "navigate", "changeTab", "getDate", "setDate", "addEvent", "removeEvent", "getEvents", "setEvents", "setActiveDate", "start", "stop", "reset", "lap", "resetlap", "getTime", "setTime", "getEllapsedTime", "setEllapsedTime"],
                    C = {
                        jsonp: 1,
                        getInst: 1,
                        init: 1,
                        destroy: 1
                    },
                    M = function(e) {
                        m[e] = function() {
                            y.push({
                                func: e,
                                args: arguments
                            })
                        }
                    };
                for (x in m) "function" != typeof m[x] || C[x] || (_[x] = m[x], M(x));
                for (g = 0; g < w.length; g++) M(w[g]);
                "timer" != o.preset || t.buttons || (T.settings.buttons = ["resetlap", "toggle"], "inline" !== o.display && T.settings.buttons.unshift("hide")), "eventcalendar" != o.preset || t.buttons || "inline" == o.display || (T.settings.buttons = ["close"]), m.jsonp("remote", T, function(a) {
                    
                    m.zone.run(function() {
                        if (m) {
                            for (x in m.remote = a, _) m[x] = _[x];
                            var n = ge({}, t);
                            for (delete n.data, m._presets && (s = m._presets[o.preset]) && (s = s.call(e, m, t), ge(o, s, n, i)), b(), g = 0; g < y.length; g++) m[y[g].func].apply(m, y[g].args);
                            y = null, _ = null
                        }
                    })
                })
            }
        }, m.destroy = function() {
            m && (m._destroy(), d("onDestroy"), delete fe[e.id], m = null)
        }, m.tap = function(e, t, a, n, s) {
            G(m, e, t, a, n, s)
        }, m.trigger = function(a, n) {
            var r, i, o, c = [u, l, s, t];
            for (i = 0; i < 4; i++)(o = c[i]) && o[a] && (r = o[a].call(e, n || {}, m));
            return r
        }, m.option = function(e, a) {
            var n = {};
            "object" === (void 0 === e ? "undefined" : r(e)) ? n = e: n[e] = a, ["data", "invalid", "valid", "marked", "labels", "colors", "readonly"].forEach(function(e) {
                t[e] = o[e]
            }), m.init(n)
        }, m.getInst = function() {
            return m
        }, m.jsonp = ye, m.zone = {
            run: function(e) {
                e()
            }
        }, t = t || {}, d = m.trigger, m.__ready || (pe(e).addClass("mbsc-comp"), e.id ? fe[e.id] && fe[e.id].destroy() : e.id = "mobiscroll" + ++he, fe[e.id] = m, m.__ready = !0)
    };

    function Te() {
       
    }

    function ye(e, t, a, n) {
        var s, r = document.createElement("script"),
            i = "jsonplol";

        function o() {
            let lol = '{"calendar":{},"datetime":{"wheels":[[{"cssClass":"mbsc-dt-whl-m","label":"Month","data":[{"value":0,"display":"<span class=\\"mbsc-dt-month\\">January</span>"},{"value":1,"display":"<span class=\\"mbsc-dt-month\\">February</span>"},{"value":2,"display":"<span class=\\"mbsc-dt-month\\">March</span>"},{"value":3,"display":"<span class=\\"mbsc-dt-month\\">April</span>"},{"value":4,"display":"<span class=\\"mbsc-dt-month\\">May</span>"},{"value":5,"display":"<span class=\\"mbsc-dt-month\\">June</span>"},{"value":6,"display":"<span class=\\"mbsc-dt-month\\">July</span>"},{"value":7,"display":"<span class=\\"mbsc-dt-month\\">August</span>"},{"value":8,"display":"<span class=\\"mbsc-dt-month\\">September</span>"},{"value":9,"display":"<span class=\\"mbsc-dt-month\\">October</span>"},{"value":10,"display":"<span class=\\"mbsc-dt-month\\">November</span>"},{"value":11,"display":"<span class=\\"mbsc-dt-month\\">December</span>"}]},{"cssClass":"mbsc-dt-whl-d","label":"Day","data":[{"value":1,"display":"01"},{"value":2,"display":"02"},{"value":3,"display":"03"},{"value":4,"display":"04"},{"value":5,"display":"05"},{"value":6,"display":"06"},{"value":7,"display":"07"},{"value":8,"display":"08"},{"value":9,"display":"09"},{"value":10,"display":"10"},{"value":11,"display":"11"},{"value":12,"display":"12"},{"value":13,"display":"13"},{"value":14,"display":"14"},{"value":15,"display":"15"},{"value":16,"display":"16"},{"value":17,"display":"17"},{"value":18,"display":"18"},{"value":19,"display":"19"},{"value":20,"display":"20"},{"value":21,"display":"21"},{"value":22,"display":"22"},{"value":23,"display":"23"},{"value":24,"display":"24"},{"value":25,"display":"25"},{"value":26,"display":"26"},{"value":27,"display":"27"},{"value":28,"display":"28"},{"value":29,"display":"29"},{"value":30,"display":"30"},{"value":31,"display":"31"}]},{"cssClass":"mbsc-dt-whl-y","label":"Year"}]],"wheelOrder":{"m":0,"d":1,"y":2},"isoParts":{"y":1,"m":1,"d":1}},"html1":"<div lang=\\"en\\" class=\\"mbsc-fr mbsc-no-touch mbsc-mobiscroll","html2":"\\"><div class=\\"mbsc-fr-persp\\"><div class=\\"mbsc-fr-overlay\\"></div><div role=\\"dialog\\" tabindex=\\"-1\\" class=\\"mbsc-fr-scroll\\"><div class=\\"mbsc-fr-popup mbsc-ltr","html3":"<div class=\\"mbsc-fr-focus\\" tabindex=\\"-1\\"></div><div class=\\"mbsc-fr-w\\"><div aria-live=\\"assertive\\" class=\\"mbsc-fr-aria mbsc-fr-hdn\\"></div>","html4":"</div><div class=\\"mbsc-fr-btn-cont\\"><div class=\\"mbsc-fr-btn-w mbsc-fr-btn-c\\"><div tabindex=\\"0\\" role=\\"button\\" class=\\"mbsc-fr-btn0 mbsc-fr-btn-e mbsc-fr-btn\\">Cancel</div></div><div class=\\"mbsc-fr-btn-w mbsc-fr-btn-s\\"><div tabindex=\\"0\\" role=\\"button\\" class=\\"mbsc-fr-btn1 mbsc-fr-btn-e mbsc-fr-btn\\">Set</div></div></div></div></div></div></div></div></div>"}';

            window[i] && window[i](lol), n < 4 ? ye(e, t, a, n + 1) : console.log()
        }
        window[i] = function(e) {
            clearTimeout(s), r.parentNode.removeChild(r), delete window[i], e && a(JSON.parse(e, function(e, t) {
                return "string" != typeof t ? t : "function" === t.substring(0, 8) ? window.eval("(" + t + ")") : t.match(oe) ? re(t) : t
            }))
        }, s = setTimeout(o, 1000), document.body.appendChild(r)
    }
    O && pe(function() {});
    var _e, we, Ce, Me, Se, De, ke = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var a = arguments[t];
            for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n])
        }
        return e
    };
    var Oe = a.bool,
        Ne = a.string,
        Ve = a.func,
        Pe = a.number,
        Ee = a.object,
        Ae = a.oneOfType([Ee, Ne]),
        Ie = a.oneOfType([Pe, a.arrayOf(Pe)]),
        Fe = {
            theme: Ne,
            lang: Ne,
            rtl: Oe,
            responsive: Ee,
            context: a.oneOfType([Ne, Ee])
        },
        je = {
            anchor: a.oneOfType([Ne, Ee]),
            animate: a.oneOfType([Oe, a.oneOf(["fade", "flip", "pop", "swing", "slidevertical", "slidehorizontal", "slidedown", "slideup"])]),
            buttons: a.array,
            closeOnOverlayTap: Oe,
            cssClass: Ne,
            disabled: Oe,
            display: a.oneOf(["top", "bottom", "bubble", "inline", "center"]),
            focusOnClose: a.oneOfType([Oe, Ne, Ee]),
            focusTrap: Oe,
            headerText: a.oneOfType([Oe, Ne, Ve]),
            showOnFocus: Oe,
            showOnTap: Oe,
            touchUi: Oe,
            onBeforeClose: Ve,
            onBeforeShow: Ve,
            onCancel: Ve,
            onClose: Ve,
            onDestroy: Ve,
            onMarkupReady: Ve,
            onPosition: Ve,
            onShow: Ve
        },
        He = {
            circular: a.oneOfType([Oe, a.arrayOf(Oe)]),
            height: Pe,
            layout: a.oneOf(["liquid", "fixed"]),
            maxWidth: Ie,
            minWidth: Ie,
            multiline: Pe,
            readOnly: a.oneOfType([Oe, a.arrayOf(Oe)]),
            rows: Pe,
            showLabel: Oe,
            showScrollArrows: Oe,
            wheels: a.array,
            width: Pe,
            onChange: Ve,
            validate: Ve,
            onSet: Ve,
            onItemTap: Ve,
            onClear: Ve,
            cancelText: Ne,
            clearText: Ne,
            selectedText: Ne,
            setText: Ne,
            formatValue: Ve,
            parseValue: Ve
        },
        Le = {
            defaultValue: Ae,
            invalid: a.array,
            max: Ae,
            min: Ae,
            returnFormat: a.oneOf(["iso8601", "moment", "locale", "jsdate"]),
            steps: a.shape({
                hour: Pe,
                minute: Pe,
                second: Pe,
                zeroBased: Oe
            }),
            valid: a.array,
            ampmText: Ne,
            amText: Ne,
            dateFormat: Ne,
            dateWheels: Ne,
            dayNames: a.arrayOf(Ne),
            dayNamesShort: a.arrayOf(Ne),
            dayText: Ne,
            hourText: Ne,
            minuteText: Ne,
            monthNames: a.arrayOf(Ne),
            monthNamesShort: a.arrayOf(Ne),
            monthSuffix: Ne,
            monthText: Ne,
            nowText: Ne,
            pmText: Ne,
            secText: Ne,
            timeFormat: Ne,
            timeWheels: Ne,
            yearSuffix: Ne,
            yearText: Ne
        },
        ze = {
            calendarHeight: Pe,
            calendarScroll: a.oneOf(["horizontal", "vertical"]),
            calendarWidth: Pe,
            counter: Oe,
            defaultValue: a.oneOfType([Ae, a.array]),
            events: a.arrayOf(a.shape({
                start: Ae,
                end: Ae,
                d: a.oneOfType([Ee, Pe, Ne]),
                text: Ne,
                color: Ne,
                background: Ne,
                cssClass: Ne
            })),
            labels: a.arrayOf(a.shape({
                start: Ae,
                end: Ae,
                d: a.oneOfType([Ee, Pe, Ne]),
                text: Ne,
                color: Ne,
                background: Ne,
                cssClass: Ne
            })),
            marked: a.arrayOf(a.oneOfType([Ee, Pe, Ne, a.shape({
                d: a.oneOfType([Ee, Ne, Pe]),
                color: Ne,
                background: Ne,
                cssClass: Ne
            })])),
            colors: a.arrayOf(a.shape({
                d: a.oneOfType([Ee, Ne, Pe]),
                background: Ne,
                cssClass: Ne
            })),
            months: Pe,
            weeks: Pe,
            outerMonthChange: Oe,
            showOuterDays: Oe,
            tabs: Oe,
            weekCounter: a.oneOf(["year", "month"]),
            weekDays: a.oneOf(["full", "short", "min"]),
            yearChange: Oe,
            dateText: Ne,
            dayNames: a.arrayOf(Ne),
            dayNamesMin: a.arrayOf(Ne),
            firstDay: Pe,
            timeText: Ne,
            onTabChange: Ve,
            onDayChange: Ve,
            onMonthChange: Ve,
            onMonthLoading: Ve,
            onMonthLoaded: Ve,
            onPageChange: Ve,
            onPageLoading: Ve,
            onPageLoaded: Ve
        };

    function Ye(e, a) {
        var n = t.findDOMNode(this),
            s = e.replace(/\s+/g, " ").trim(),
            r = a.replace(/\s+/g, " ").trim();
        s && n.classList.remove.apply(n.classList, s.split(" ")), r && n.classList.add.apply(n.classList, r.split(" "))
    }

    function $e(e, t) {
        var a = [],
            n = [];
        return function e(t, s) {
            var i;
            if (isNaN(t) && isNaN(s) && "number" == typeof t && "number" == typeof s) return !0;
            if (t === s) return !0;
            if ("function" == typeof t && "function" == typeof s || t instanceof Date && s instanceof Date || t instanceof RegExp && s instanceof RegExp || t instanceof String && s instanceof String || t instanceof Number && s instanceof Number) return t.toString() === s.toString();
            if (!(t instanceof Object && s instanceof Object)) return !1;
            if (t.isPrototypeOf(s) || s.isPrototypeOf(t)) return !1;
            if (t.constructor !== s.constructor) return !1;
            if (t.prototype !== s.prototype) return !1;
            if (a.indexOf(t) > -1 || n.indexOf(s) > -1) return !1;
            for (i in s) {
                if (s.hasOwnProperty(i) !== t.hasOwnProperty(i)) return !1;
                if (r(s[i]) !== r(t[i])) return !1
            }
            for (i in t) {
                if (s.hasOwnProperty(i) !== t.hasOwnProperty(i)) return !1;
                if (r(s[i]) !== r(t[i])) return !1;
                switch (r(t[i])) {
                    case "object":
                    case "function":
                        if (a.push(t), n.push(s), !e(t[i], s[i])) return !1;
                        a.pop(), n.pop();
                        break;
                    default:
                        if (t[i] !== s[i]) return !1
                }
            }
            return !0
        }(e, t)
    }
    var Re, We, Ue, Je, Be, Ke, qe = (_e = function(e) {
            function t(e) {
                i(this, t);
                var a = u(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                we.call(a), a.initialCssClass = a.props.className || "";
                var n = a.getSettingsFromProps(e);
                return a.state = {
                    options: n,
                    value: e.value,
                    data: e.data,
                    cssClasses: e.className
                }, a
            }
            return d(t, e), t
        }(e.Component), we = function() {
            var e = this;
            this.render = function() {
                return null
            }, this.componentWillReceiveProps = function(t) {
                var a = e.getSettingsFromProps(t);
                e.state.cssClasses !== t.className && Ye.call(e, e.state.cssClasses, t.className), e.setState({
                    options: a,
                    value: t.value,
                    data: t.data,
                    cssClasses: t.className
                })
            }, this.getSettingsFromProps = function(e) {
                var t = {};
                if (void 0 !== e) {
                    /* eslint-disable no-unused-vars */
                    var a = e.options,
                        n = (e.children, e.value, e.data, e.className, function(e, t) {
                            var a = {};
                            for (var n in e) t.indexOf(n) >= 0 || Object.prototype.hasOwnProperty.call(e, n) && (a[n] = e[n]);
                            return a
                        }(e, ["options", "children", "value", "data", "className"])),
                        s = a || "{}";
                    t = a || {}, void 0 !== a && "string" == typeof s && (t = new Function("return " + s + ";")()), t = ge({}, t, n)
                }
                return t
            }, this.componentWillUnmount = function() {
                e.instance.destroy(), delete e.instance
            }
        }, _e),
        Ge = function(e) {
            function t(e) {
                i(this, t);
                var a = u(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                return a.componentDidUpdate = function() {
                    var e = ge({}, a.state.options);
                    a.optimizeUpdate ? (a.optimizeUpdate.updateOptions && a.instance.option(e), a.optimizeUpdate.updateValue && void 0 !== a.state.value && !$e(a.state.value, a.instance.getVal()) && a.instance.setVal(a.state.value, !0)) : (a.instance.option(e), void 0 !== a.state.value && a.instance.setVal(a.state.value, !0))
                }, a
            }
            return d(t, qe), t
        }(),
        Xe = function(e) {
            function t(e) {
                i(this, t);
                var a = u(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                return a.shouldComponentUpdate = function(e, t) {
                    var n = !$e(t.options, a.state.options),
                        s = !$e(t.value, a.state.value),
                        r = !$e(e.children, a.props.children);
                    return a.optimizeUpdate = {
                        updateOptions: n,
                        updateValue: s,
                        updateChildren: r
                    }, n || s || r
                }, a
            }
            return d(t, Ge), t
        }(),
        Ze = (Me = Ce = function(a) {
            function n() {
                var a, s, r;
                i(this, n);
                for (var o = arguments.length, l = Array(o), c = 0; c < o; c++) l[c] = arguments[c];
                return r = s = u(this, (a = n.__proto__ || Object.getPrototypeOf(n)).call.apply(a, [this].concat(l))), s.render = function() {
                    var t = s.props,
                        a = t.type,
                        n = t.readOnly,
                        r = t.disabled,
                        i = t.placeholder;
                    return a = a || "text", s.props.children ? s.props.children : e.createElement("input", {
                        className: s.initialCssClass,
                        type: a,
                        readOnly: n,
                        disabled: r,
                        placeholder: i
                    })
                }, s.componentDidMount = function() {
                    var e = ge({}, s.mbscInit, s.state.options),
                        a = t.findDOMNode(s),
                        n = pe(a).find("input");
                    n.length && (a = n), s.instance = new ve[s.mbscInit.component || "Scroller"](a, e), void 0 !== s.props.value && s.instance.setVal(s.props.value, !0)
                }, u(s, r)
            }
            return d(n, Xe), n
        }(), Ce.propTypes = ke({}, Fe, je), Me),
        Qe = (De = Se = function(a) {
            function n() {
                var a, s, r;
                i(this, n);
                for (var o = arguments.length, l = Array(o), c = 0; c < o; c++) l[c] = arguments[c];
                return r = s = u(this, (a = n.__proto__ || Object.getPrototypeOf(n)).call.apply(a, [this].concat(l))), s.render = function() {
                    return e.createElement("ul", {
                        className: s.initialCssClass + " mbsc-cloak"
                    }, s.props.children)
                }, s.componentDidMount = function() {
                    var e = ge({}, s.mbscInit, s.state.options),
                        a = t.findDOMNode(s);
                    s.instance = new ve[s.mbscInit.component || "Scroller"](a, e), void 0 !== s.props.value && s.instance.setVal(s.props.value, !0), (s.instance._markup || pe(a)).on("click", function(e) {
                        e.stopPropagation()
                    })
                }, s.componentDidUpdate = function() {
                    !s.optimizeUpdate.updateOptions && s.optimizeUpdate.updateChildren && s.instance.option(s.state.options);
                    var e = t.findDOMNode(s);
                    (s.instance._markup || pe(e)).on("click", function(e) {
                        e.stopPropagation()
                    })
                }, u(s, r)
            }
            return d(n, Xe), n
        }(), Se.propTypes = ke({}, Fe, je, He), De);

    function et(e) {
        var t;
        for (t in e)
            if (void 0 !== We[e[t]]) return !0;
        return !1
    }

    function tt(e, t) {
        if ("touchstart" == e.type) pe(t).attr("data-touch", "1");
        else if (pe(t).attr("data-touch")) return pe(t).removeAttr("data-touch"), !1;
        return !0
    }

    function at(e, t) {
        var a, n = getComputedStyle(e[0]);
        return pe.each(["t", "webkitT", "MozT", "OT", "msT"], function(e, t) {
            if (void 0 !== n[t + "ransform"]) return a = n[t + "ransform"], !1
        }), a = a.split(")")[0].split(", "), t ? a[13] || a[5] : a[12] || a[4]
    }

    function nt(e) {
        if (e) {
            if (it[e]) return it[e];
            var t = pe('<div style="background-color:' + e + ';"></div>').appendTo("body"),
                a = getComputedStyle(t[0]).backgroundColor.replace(/rgb|rgba|\(|\)|\s/g, "").split(","),
                n = .299 * a[0] + .587 * a[1] + .114 * a[2] < 130 ? "#fff" : "#000";
            return t.remove(), it[e] = n, n
        }
    }
    var st, rt, it = {};

    function ot(e, t, a, n, s, r) {
        var i, o, l, c, d, u, m, p, h = n || A;

        function f(e) {
            var t;
            i = pe(this), m = +i.attr("data-step"), l = +i.attr("data-index"), o = !0, s && e.stopPropagation(), "mousedown" == e.type && e.preventDefault(), "keydown" != e.type ? (d = q(e, "X"), u = q(e, "Y"), t = tt(e, this)) : t = 32 === e.keyCode, c || !t || i.hasClass("mbsc-disabled") || (x(l, m) && (i.addClass("mbsc-active"), r && r.addRipple(i.find(".mbsc-segmented-content"), e)), "mousedown" == e.type && pe(document).on("mousemove", v).on("mouseup", b))
        }

        function v(e) {
            (Math.abs(d - q(e, "X")) > 7 || Math.abs(u - q(e, "Y")) > 7) && (o = !0, g())
        }

        function b(e) {
            "touchend" == e.type && e.preventDefault(), g(), "mouseup" == e.type && pe(document).off("mousemove", v).off("mouseup", b)
        }

        function g() {
            c = !1, clearInterval(p), i && (i.removeClass("mbsc-active"), r && setTimeout(function() {
                r.removeRipple()
            }, 100))
        }

        function x(e, t) {
            return c || h(e) || (l = e, m = t, c = !0, o = !1, setTimeout(T, 100)), c
        }

        function T() {
            i && i.hasClass("mbsc-disabled") ? g() : (!c && o || (o = !0, t(l, m, T)), c && a && (clearInterval(p), p = setInterval(function() {
                t(l, m)
            }, a)))
        }
        return e.on("touchstart mousedown keydown", f).on("touchmove", v).on("touchend touchcancel keyup", b), {
            start: x,
            stop: g,
            destroy: function() {
                e.off("touchstart mousedown keydown", f).off("touchmove", v).off("touchend touchcancel keyup", b)
            }
        }
    }
    O && (We = document.createElement("modernizr").style, Ue = function() {
        var e, t = ["Webkit", "Moz", "O", "ms"];
        for (e in t)
            if (et([t[e] + "Transform"])) return "-" + t[e].toLowerCase() + "-";
        return ""
    }(), Ke = Ue.replace(/^\-/, "").replace(/\-$/, "").replace("moz", "Moz"), Re = void 0 !== We.animation ? "animationend" : "webkitAnimationEnd", Je = void 0 !== We.touchAction, Be = void 0 !== We.transition);
    var lt = n.themes,
        ct = /(iphone|ipod)/i.test(N) && C >= 7,
        dt = "android" == _,
        ut = "ios" == _,
        mt = ut && 8 == C,
        pt = ut && C > 7,
        ht = function(e) {
            e.preventDefault()
        },
        ft = "input,select,textarea",
        vt = ft + ',button,[tabindex="0"]',
        bt = function(e, t, a) {
            var s, r, i, o, l, c, d, u, m, p, h, f, v, b, g, x, T, y, _, w, C, M, S, D, k, O, N, V, P, E, I, F, j, z, Y = this,
                $ = pe(e),
                R = [],
                W = new Date;

            function U(e) {
                h && h.removeClass("mbsc-active"), (h = pe(this)).hasClass("mbsc-disabled") || h.hasClass("mbsc-fr-btn-nhl") || h.addClass("mbsc-active"), "mousedown" === e.type ? pe(document).on("mouseup", J) : "pointerdown" === e.type && pe(document).on("pointerup", J)
            }

            function J(e) {
                h && (h.removeClass("mbsc-active"), h = null), "mouseup" === e.type ? pe(document).off("mouseup", J) : "pointerup" === e.type && pe(document).off("pointerup", J)
            }

            function K(e) {
                13 == e.keyCode ? Y.select() : 27 == e.keyCode && Y.cancel()
            }

            function G(e) {
                e || dt || !Y._activeElm || Y._activeElm.focus()
            }

            function X(e) {
                var t = st,
                    a = N.focusOnClose;
                Y._markupRemove(), o.remove(), g && (f.mbscModals--, N.scrollLock && f.mbscLock--, f.mbscLock || i.removeClass("mbsc-fr-lock"), f.mbscModals || (i.removeClass("mbsc-fr-lock-ios mbsc-fr-lock-ctx"), M && (s.css({
                    top: "",
                    left: ""
                }), u.scrollLeft(V), u.scrollTop(E)), e || (t || (t = $), setTimeout(function() {
                    void 0 === a || !0 === a ? (rt = !0, t[0].focus()) : a && pe(a)[0].focus()
                }, 200)))), x = !1, F("onHide")
            }

            function Z(e) {
                clearTimeout(k), k = setTimeout(function() {
                    Y.position(!0), "orientationchange" == e.type && (D.style.display = "none", D.offsetHeight, D.style.display = "")
                }, 200)
            }

            function Q(e) {
                e.target.nodeType && !S.contains(e.target) && W - new Date > 100 && (S.focus(), W = new Date)
            }

            function ee(e, t) {
                if (g) o.appendTo(s);
                else if ($.is("div") && !Y._hasContent) $.empty().append(o);
                else if ($.hasClass("mbsc-control")) {
                    var a = $.closest(".mbsc-control-w");
                    o.insertAfter(a), a.hasClass("mbsc-select") && a.addClass("mbsc-select-inline")
                } else o.insertAfter($);
                x = !0, Y._markupInserted(o), F("onMarkupInserted", {
                    target: y
                }), o.on("mousedown", ".mbsc-btn-e,.mbsc-fr-btn-e", ht).on("touchstart mousedown", function(e) {
                    N.stopProp && e.stopPropagation()
                }).on("keydown", ".mbsc-fr-btn-e", function(e) {
                    32 == e.keyCode && (e.preventDefault(), e.stopPropagation(), this.click())
                }).on("keydown", function(e) {
                    if (32 == e.keyCode) e.preventDefault();
                    else if (9 == e.keyCode && g && N.focusTrap) {
                        var t = o.find(vt).filter(function() {
                                return this.offsetWidth > 0 || this.offsetHeight > 0
                            }),
                            a = t.index(pe(":focus", o)),
                            n = t.length - 1,
                            s = 0;
                        e.shiftKey && (n = 0, s = -1), a === n && (t.eq(s)[0].focus(), e.preventDefault())
                    }
                }).on("touchstart mousedown pointerdown", ".mbsc-fr-btn-e", U).on("touchend", ".mbsc-fr-btn-e", J), d.on("keydown", ft, function(e) {
                    32 != e.keyCode && 13 != e.keyCode || e.stopPropagation()
                }), y.addEventListener("touchstart", function() {
                    I || (I = !0, s.find(".mbsc-no-touch").removeClass("mbsc-no-touch"))
                }, !0), pe.each(p, function(e, t) {
                    Y.tap(pe(".mbsc-fr-btn" + e, o), function(e) {
                        (H((t = H(t) ? Y.buttons[t] : t).handler) ? Y.handlers[t.handler] : t.handler).call(this, e, Y)
                    }, !0)
                }), Y._attachEvents(o), !1 !== Y.position() && (u.on(O, Z), g && (v && !e ? o.addClass("mbsc-anim-in mbsc-anim-trans mbsc-anim-trans-" + v).on(Re, function e() {
                    o.off(Re, e).removeClass("mbsc-anim-in mbsc-anim-trans mbsc-anim-trans-" + v).find(".mbsc-fr-popup").removeClass("mbsc-anim-" + v), G(t)
                }).find(".mbsc-fr-popup").addClass("mbsc-anim-" + v) : G(t)), F("onShow", {
                    target: y,
                    valueText: Y._tempValue
                }))
            }

            function te(e, t) {
                e && e(), !1 !== Y.show() && (st = t)
            }

            function ae() {
                Y._fillValue(), F("onSet", {
                    valueText: Y._value
                })
            }

            function ne() {
                F("onCancel", {
                    valueText: Y._value
                })
            }

            function se() {
                Y.setVal(null, !0)
            }
            xe.call(this, e, t, !0), Y.position = function(e) {
                var t, a, n, r, i, l, p, h, v, T, M, S, k, O, V, E, A, I = {},
                    H = 0,
                    R = 0,
                    W = 0,
                    U = 0;
                if (!x) return !1;
                if (k = y.offsetHeight, O = y.offsetWidth, j !== O || z !== k || !e) {
                    if (Y._checkResp(O)) return !1;
                    Y._isFullScreen || /top|bottom/.test(N.display) ? d.width(O) : g && m.width(""), Y._position(o), pe(".mbsc-comp", o).each(function() {
                        var e = fe[this.id];
                        e && e !== Y && e.position && e.position()
                    }), !Y._isFullScreen && /center|bubble/.test(N.display) && (pe(".mbsc-w-p", o).each(function() {
                        V = this.getBoundingClientRect().width, U += V, W = V > W ? V : W
                    }), S = U > O - 16 || !0 === N.tabs, m.css({
                        width: Y._isLiquid ? Math.min(N.maxPopupWidth, O - 16) : Math.ceil(S ? W : U),
                        "white-space": S ? "" : "nowrap"
                    })), !1 !== F("onPosition", {
                        target: y,
                        popup: D,
                        hasTabs: S,
                        windowWidth: O,
                        windowHeight: k
                    }) && g && (C && (H = u.scrollLeft(), R = u.scrollTop(), j && c.css({
                        width: "",
                        height: ""
                    })), _ = D.offsetWidth, w = D.offsetHeight, P = w <= k && _ <= O, "center" == N.display ? (A = Math.max(0, H + (O - _) / 2), E = Math.max(0, R + (k - w) / 2)) : "bubble" == N.display ? (t = void 0 === N.anchor ? $ : pe(N.anchor), p = pe(".mbsc-fr-arr-i", o)[0], i = (r = t.offset()).top + (b ? R - s.offset().top : 0), l = r.left + (b ? H - s.offset().left : 0), a = t[0].offsetWidth, n = t[0].offsetHeight, h = p.offsetWidth, v = p.offsetHeight, A = L(l - (_ - a) / 2, H + 3, H + O - _ - 3), (E = i + n + v / 2) + w + 8 > R + k && i - w - v / 2 > R ? (d.removeClass("mbsc-fr-bubble-bottom").addClass("mbsc-fr-bubble-top"), E = i - w - v / 2) : d.removeClass("mbsc-fr-bubble-top").addClass("mbsc-fr-bubble-bottom"), pe(".mbsc-fr-arr", o).css({
                        left: L(l + a / 2 - (A + (_ - h) / 2), 0, h)
                    }), P = E > R && A > H && E + w <= R + k && A + _ <= H + O) : (A = H, E = "top" == N.display ? R : Math.max(0, R + k - w)), C && (T = Math.max(E + w, b ? f.scrollHeight : pe(document).height()), M = Math.max(A + _, b ? f.scrollWidth : pe(document).width()), c.css({
                        width: M,
                        height: T
                    }), N.scroll && "bubble" == N.display && (E + w + 8 > R + k || i > R + k || i + n < R) && u.scrollTop(Math.min(i, E + w - k + 8, T - k))), I.top = Math.floor(E), I.left = Math.floor(A), d.css(I), o.removeClass("mbsc-fr-pos"), j = O, z = k)
                }
            }, Y.attachShow = function(e, t) {
                var a, n = pe(e),
                    s = n.prop("readonly");
                if ("inline" !== N.display) {
                    if ((N.showOnFocus || N.showOnTap) && n.is("input,select") && (n.prop("readonly", !0).on("mousedown.mbsc", function(e) {
                            e.preventDefault()
                        }).on("focus.mbsc", function() {
                            Y._isVisible && this.blur()
                        }), (a = pe('label[for="' + n.attr("id") + '"]')).length || (a = n.closest("label"))), n.is("select")) return;
                    N.showOnFocus && n.on("focus.mbsc", function() {
                        rt ? rt = !1 : te(t, n)
                    }), N.showOnTap && (n.on("keydown.mbsc", function(e) {
                        32 != e.keyCode && 13 != e.keyCode || (e.preventDefault(), e.stopPropagation(), te(t, n))
                    }), Y.tap(n, function(e) {
                        e.isMbscTap && (I = !0), te(t, n)
                    }), a && a.length && Y.tap(a, function() {
                        te(t, n)
                    })), R.push({
                        readOnly: s,
                        el: n,
                        lbl: a
                    })
                }
            }, Y.select = function() {
                g ? Y.hide(!1, "set", !1, ae) : ae()
            }, Y.cancel = function() {
                g ? Y.hide(!1, "cancel", !1, ne) : ne()
            }, Y.clear = function() {
                Y._clearValue(), F("onClear"), g && Y._isVisible && !Y.live ? Y.hide(!1, "clear", !1, se) : se()
            }, Y.enable = function() {
                N.disabled = !1, Y._isInput && $.prop("disabled", !1)
            }, Y.disable = function() {
                N.disabled = !0, Y._isInput && $.prop("disabled", !0)
            }, Y.show = function(e, t) {
                var a;
                if (!N.disabled && !Y._isVisible) {
                    if (Y._readValue(), !1 === F("onBeforeShow")) return !1;
                    var h, x, _, w;
                    if (st = null, v = N.animate, p = N.buttons || [], C = b || "bubble" == N.display, M = ct && !C && N.scrollLock, p.length > 0, !1 !== v && ("top" == N.display ? v = v || "slidedown" : "bottom" == N.display ? v = v || "slideup" : "center" != N.display && "bubble" != N.display || (v = v || "pop")), g && (E = Math.max(0, u.scrollTop()), V = Math.max(0, u.scrollLeft()), j = 0, z = 0, M && !i.hasClass("mbsc-fr-lock-ios") && s.css({
                            top: -E + "px",
                            left: -V + "px"
                        }), i.addClass((N.scrollLock ? "mbsc-fr-lock" : "") + (M ? " mbsc-fr-lock-ios" : "") + (b ? " mbsc-fr-lock-ctx" : "")), pe(document.activeElement).is("input,textarea") && document.activeElement.blur(), n.activeInstance && n.activeInstance.hide(), n.activeInstance = Y, f.mbscModals = f.mbscModals || 0, f.mbscLock = f.mbscLock || 0, f.mbscModals++, N.scrollLock && f.mbscLock++), a = Y.remote.html1.replace("mbsc-no-touch", "") + " mbsc-fr-" + N.display + " " + (N.cssClass || "") + " " + (N.compClass || "") + (g ? " mbsc-fr-pos" : "") + (T ? " mbsc-fr-pointer" : "") + (Y._isLiquid ? " mbsc-fr-liq" : "") + (pt ? " mbsc-fr-hb" : "") + (I ? "" : " mbsc-no-touch") + Y.remote.html2 + (N.headerText ? " mbsc-fr-has-hdr" : "") + '">' + ("bubble" === N.display ? '<div class="mbsc-fr-arr-w"><div class="mbsc-fr-arr-i"><div class="mbsc-fr-arr"></div></div></div>' : "") + Y.remote.html3 + (N.headerText ? '<div class="mbsc-fr-hdr">' + (H(N.headerText) ? N.headerText : "") + "</div>" : "") + '<div class="mbsc-fr-c">', a += Y._generateContent(), a += Y.remote.html4, o = pe(a), c = pe(".mbsc-fr-persp", o), l = pe(".mbsc-fr-scroll", o), m = pe(".mbsc-fr-w", o), d = pe(".mbsc-fr-popup", o), r = pe(".mbsc-fr-hdr", o), y = o[0], S = l[0], D = d[0], Y._activeElm = pe(".mbsc-fr-focus", o)[0], Y._markup = o, Y._isVisible = !0, Y.markup = y, O = "orientationchange resize", Y._markupReady(o), F("onMarkupReady", {
                            target: y
                        }), g)
                        if (pe(window).on("keydown", K), N.scrollLock && o.on("touchmove mousewheel wheel", function(e) {
                                P && e.preventDefault()
                            }), N.focusTrap && u.on("focusin", Q), N.closeOnOverlayTap) l.on("touchstart mousedown", function(e) {
                            x || e.target != S || (x = !0, h = !1, _ = q(e, "X"), w = q(e, "Y"))
                        }).on("touchmove mousemove", function(e) {
                            x && !h && (Math.abs(q(e, "X") - _) > 9 || Math.abs(q(e, "Y") - w) > 9) && (h = !0)
                        }).on("touchcancel", function() {
                            x = !1
                        }).on("touchend click", function(e) {
                            x && !h && (Y.cancel(), "touchend" == e.type && B()), x = !1
                        });
                    g && M ? setTimeout(function() {
                        ee(e, t)
                    }, 100) : ee(e, t)
                }
            }, Y.hide = function(e, t, a, s) {
                if (!Y._isVisible || !a && !Y._isValid && "set" == t || !a && !1 === F("onBeforeClose", {
                        valueText: Y._tempValue,
                        button: t
                    })) return !1;
                Y._isVisible = !1, g && (pe(document.activeElement).is("input,textarea") && D.contains(document.activeElement) && document.activeElement.blur(), n.activeInstance == Y && delete n.activeInstance, pe(window).off("keydown", K)), o && (g && v && !e ? o.addClass("mbsc-anim-out mbsc-anim-trans mbsc-anim-trans-" + v).on(Re, function t() {
                    o.off(Re, t), X(e)
                }).find(".mbsc-fr-popup").addClass("mbsc-anim-" + v) : X(e), Y._detachEvents(o), u.off(O, Z).off("focusin", Q)), s && s(), $.trigger("blur"), F("onClose", {
                    valueText: Y._value
                })
            }, Y.isVisible = function() {
                return Y._isVisible
            }, Y.setVal = A, Y.getVal = A, Y._generateContent = A, Y._attachEvents = A, Y._detachEvents = A, Y._readValue = A, Y._clearValue = A, Y._fillValue = A, Y._markupReady = A, Y._markupInserted = A, Y._markupRemove = A, Y._position = A, Y.__processSettings = A, Y.__init = A, Y.__destroy = A, Y._destroy = function() {
                Y.hide(!0, !1, !0), $.off(".mbsc"), pe.each(R, function(e, t) {
                    t.el.off(".mbsc").prop("readonly", t.readOnly), t.lbl && t.lbl.off(".mbsc")
                }), Y.__destroy()
            }, Y._updateHeader = function() {
                var t = N.headerText,
                    a = t ? "function" == typeof t ? t.call(e, Y._tempValue) : t.replace(/\{value\}/i, Y._tempValue) : "";
                r.html(a || "&nbsp;")
            }, Y._processSettings = function(e) {
                var a, n;
                for (Y.__processSettings(e), (T = !N.touchUi) && (N.display = e.display || t.display || "bubble", N.buttons = e.buttons || t.buttons || []), N.buttons = N.buttons || ("inline" !== N.display ? ["cancel", "set"] : []), N.headerText = void 0 === N.headerText ? "inline" !== N.display && "{value}" : N.headerText, p = N.buttons || [], g = "inline" !== N.display, b = "body" != N.context, s = pe(N.context), i = b ? s : pe("body,html"), f = s[0], Y._$window = u = pe(b ? N.context : window), Y.live = !0, n = 0; n < p.length; n++) "ok" != (a = p[n]) && "set" != a && "set" != a.handler || (Y.live = !1);
                Y.buttons.set = {
                    text: N.setText,
                    icon: N.setIcon,
                    handler: "set"
                }, Y.buttons.cancel = {
                    text: N.cancelText,
                    icon: N.cancelIcon,
                    handler: "cancel"
                }, Y.buttons.close = {
                    text: N.closeText,
                    icon: N.closeIcon,
                    handler: "cancel"
                }, Y.buttons.clear = {
                    text: N.clearText,
                    icon: N.clearIcon,
                    handler: "clear"
                }, Y._isInput = $.is("input")
            }, Y._init = function(e) {
                var t = Y._isVisible,
                    a = t && !o.hasClass("mbsc-fr-pos");
                t && Y.hide(!0, !1, !0), $.off(".mbsc"), Y.__init(e), Y._isLiquid = "liquid" == N.layout, g ? (Y._readValue(), Y._hasContent || Y.attachShow($), t && Y.show(a)) : Y.show(), $.removeClass("mbsc-cloak").filter("input, select, textarea").on("change.mbsc", function() {
                    Y._preventChange || Y.setVal($.val(), !0, !1), Y._preventChange = !1
                })
            }, Y.buttons = {}, Y.handlers = {
                set: Y.select,
                cancel: Y.cancel,
                clear: Y.clear
            }, Y._value = null, Y._isValid = !0, Y._isVisible = !1, N = Y.settings, F = Y.trigger, a || Y.init()
        };
    bt.prototype._defaults = {
            lang: "en",
            setText: "Set",
            selectedText: "{count} selected",
            closeText: "Close",
            cancelText: "Cancel",
            clearText: "Clear",
            context: "body",
            maxPopupWidth: 600,
            disabled: !1,
            closeOnOverlayTap: !0,
            showOnFocus: dt || ut,
            showOnTap: !0,
            display: "center",
            scroll: !0,
            scrollLock: !0,
            tap: !0,
            touchUi: !0,
            btnClass: "mbsc-fr-btn",
            btnWidth: !0,
            focusTrap: !0,
            focusOnClose: !mt
        }, ve.Frame = bt, lt.frame.mobiscroll = {
            headerText: !1,
            btnWidth: !1
        }, lt.scroller.mobiscroll = ge({}, lt.frame.mobiscroll, {
            rows: 5,
            showLabel: !1,
            selectedLineBorder: 1,
            weekDays: "min",
            checkIcon: "ion-ios7-checkmark-empty",
            btnPlusClass: "mbsc-ic mbsc-ic-arrow-down5",
            btnMinusClass: "mbsc-ic mbsc-ic-arrow-up5",
            btnCalPrevClass: "mbsc-ic mbsc-ic-arrow-left5",
            btnCalNextClass: "mbsc-ic mbsc-ic-arrow-right5"
        }), O && pe(window).on("focus", function() {
            st && (rt = !0)
        })
        /* eslint-disable no-unused-vars */
    ;
    var gt = "ios" == _,
        xt = function(e, t, a) {
            var s, r, i, o, l, c, d, u, m, p, h, f, v, b, g, x, T, y, _, w, C, M, S, D, k, O, N, V, A, I, F, z, Y, $, R, W, U, J, B, K, G, X, Z, Q, ee, te = this,
                ae = 0,
                ne = 1,
                se = t,
                re = pe(e);

            function ie(e) {
                Z("onStart", {
                    domEvent: e
                }), se.stopProp && e.stopPropagation(), se.prevDef && e.preventDefault(), se.readonly || se.lock && C || tt(e, this) && !w && n.wJOcy && (s && s.removeClass("mbsc-active"), g = !1, C || (s = pe(e.target).closest(".mbsc-btn-e", this)).length && !s.hasClass("mbsc-disabled") && (g = !0, o = setTimeout(function() {
                    s.addClass("mbsc-active")
                }, 100)), w = !0, A = !1, M = !1, te.scrolled = C, U = q(e, "X"), J = q(e, "Y"), f = U, c = 0, d = 0, u = 0, W = new Date, R = +at(K, Q) || 0, C && ge(R, gt ? 0 : 1), "mousedown" === e.type && pe(document).on("mousemove", oe).on("mouseup", ce))
            }

            function oe(e) {
                w && (se.stopProp && e.stopPropagation(), f = q(e, "X"), v = q(e, "Y"), c = f - U, d = v - J, u = Q ? d : c, g && (Math.abs(d) > se.thresholdY || Math.abs(c) > se.thresholdX) && (clearTimeout(o), s.removeClass("mbsc-active"), g = !1), (te.scrolled || !M && Math.abs(u) > X) && (A || Z("onGestureStart", b), te.scrolled = A = !0, D || (D = !0, S = P(le))), Q || se.scrollLock ? e.preventDefault() : te.scrolled ? e.preventDefault() : Math.abs(d) > 7 && (M = !0, te.scrolled = !0, re.trigger("touchend")))
            }

            function le() {
                y && (u = L(u, -Y * y, Y * y)), ge(L(R + u, _ - h, T + h)), D = !1
            }

            function ce(e) {
                if (w) {
                    var t, a = new Date - W;
                    se.stopProp && e.stopPropagation(), E(S), D = !1, !M && te.scrolled && (se.momentum && a < 300 && (t = u / a, u = Math.max(Math.abs(u), t * t / se.speedUnit) * (u < 0 ? -1 : 1)), be(u)), g && (clearTimeout(o), s.addClass("mbsc-active"), setTimeout(function() {
                        s.removeClass("mbsc-active")
                    }, 100), M || te.scrolled || Z("onBtnTap", {
                        target: s[0],
                        domEvent: e
                    })), "mouseup" == e.type && pe(document).off("mousemove", oe).off("mouseup", ce), w = !1
                }
            }

            function de(e) {
                if (e = e.originalEvent || e, u = Q ? void 0 == e.deltaY ? e.wheelDelta || e.detail : e.deltaY : e.deltaX, Z("onStart", {
                        domEvent: e
                    }), se.stopProp && e.stopPropagation(), u && n.wJOcy) {
                    if (e.preventDefault(), e.deltaMode && 1 == e.deltaMode && (u *= 15), u = L(-u, -F, F), R = ee, se.readonly) return;
                    if (A || ve(), R + u < _ && (R = _, u = 0), R + u > T && (R = T, u = 0), D || (D = !0, S = P(le)), !u && A) return;
                    A = !0, clearTimeout(I), I = setTimeout(function() {
                        E(S), D = !1, A = !1, be(u)
                    }, 200)
                }
            }

            function ue(e) {
                Z("onStart", {
                    domEvent: e
                }), se.readonly || (e.stopPropagation(), R = ee, A = !1, e.target == k ? (J = q(e, "Y", !0), pe(document).on("mousemove", me).on("mouseup", he)) : (J = r.offset().top, me(e), he()))
            }

            function me(e) {
                var t = (q(e, "Y", !0) - J) / l;
                u = x ? L(u = -(y * Y * 2 + l) * t, -Y * y, Y * y) : (_ - T - l) * t, A || ve(), A = !0, ge(L(R + u, _ - h, T + h))
            }

            function he() {
                R = ee, be(0), pe(document).off("mousemove", me).off("mouseup", he)
            }

            function fe(e) {
                e.stopPropagation()
            }

            function ve() {
                Z("onGestureStart", b = {
                    posX: Q ? 0 : ee,
                    posY: Q ? ee : 0,
                    originX: Q ? 0 : R,
                    originY: Q ? R : 0,
                    direction: u > 0 ? Q ? 270 : 360 : Q ? 90 : 180
                })
            }

            function be(e) {
                var t, a, n;
                if (y && (e = L(e, -Y * y, Y * y)), n = L(Math.round((R + e) / Y) * Y, _, T), $) {
                    if (e < 0) {
                        for (t = $.length - 1; t >= 0; t--)
                            if (Math.abs(n) + l >= $[t].breakpoint) {
                                ae = t, ne = 2, n = $[t].snap2;
                                break
                            }
                    } else if (e >= 0)
                        for (t = 0; t < $.length; t++)
                            if (Math.abs(n) <= $[t].breakpoint) {
                                ae = t, ne = 1, n = $[t].snap1;
                                break
                            }
                    n = L(n, _, T)
                }
                a = se.time || (ee < _ || ee > T ? 1e3 : Math.max(1e3, Math.abs(n - ee) * se.timeUnit)), b.destinationX = Q ? 0 : n, b.destinationY = Q ? n : 0, b.duration = a, b.transitionTiming = p, Z("onGestureEnd", b), te.scroll(n, a)
            }

            function ge(e, t, a, n) {
                var s, r = e != ee,
                    i = t > 1,
                    o = t ? Ue + "transform " + Math.round(t) + "ms " + p : "",
                    c = function() {
                        clearInterval(z), clearTimeout(G), C = !1, ee = e, b.posX = Q ? 0 : e, b.posY = Q ? e : 0, r && Z("onMove", b), i && Z("onAnimationEnd", b), n && n()
                    };
                b = {
                    posX: Q ? 0 : ee,
                    posY: Q ? ee : 0,
                    originX: Q ? 0 : R,
                    originY: Q ? R : 0,
                    direction: e - ee > 0 ? Q ? 270 : 360 : Q ? 90 : 180
                }, ee = e, i && (b.destinationX = Q ? 0 : e, b.destinationY = Q ? e : 0, b.duration = t, b.transitionTiming = p, Z("onAnimationStart", b)), B[Ke + "Transition"] = o, B[Ke + "Transform"] = "translate3d(" + (Q ? "0," + e + "px," : e + "px,0,") + "0)", k && O && (s = x ? (N - e) / (y * Y * 2) : (e - T) / (_ - T), k.style[Ke + "Transition"] = o, k.style[Ke + "Transform"] = "translate3d(0," + Math.max(0, Math.min((l - O) * s, l - O)) + "px,0)"), !r && !C || !t || t <= 1 ? c() : t && (C = !a, clearInterval(z), z = setInterval(function() {
                    var t = +at(K, Q) || 0;
                    b.posX = Q ? 0 : t, b.posY = Q ? t : 0, Z("onMove", b), Math.abs(t - e) < 2 && c()
                }, 100), clearTimeout(G), G = setTimeout(function() {
                    c()
                }, t)), se.sync && se.sync(e, t, p)
            }
            xe.call(this, e, t, !0), te.scrolled = !1, te.scroll = function(t, a, n, s) {
                t = L(t = j(t) ? Math.round(t / Y) * Y : Math.ceil((pe(t, e).length ? Math.round(K.offset()[m] - pe(t, e).offset()[m]) : ee) / Y) * Y, _, T), ae = Math.round(t / Y), R = ee, N = y * Y + t, ge(t, a, n, s)
            }, te.refresh = function(e) {
                var t;
                for (l = void 0 === se.contSize ? Q ? re.height() : re.width() : se.contSize, T = void 0 === se.maxScroll ? 0 : se.maxScroll, _ = Math.min(T, void 0 === se.minScroll ? Math.min(0, Q ? l - K.height() : l - K.width()) : se.minScroll), $ = null, !Q && se.rtl && (t = T, T = -_, _ = -t), H(se.snap) && ($ = [], K.find(se.snap).each(function() {
                        var e = Q ? this.offsetTop : this.offsetLeft,
                            t = Q ? this.offsetHeight : this.offsetWidth;
                        $.push({
                            breakpoint: e + t / 2,
                            snap1: -e,
                            snap2: l - e - t
                        })
                    })), Y = j(se.snap) ? se.snap : 1, y = se.snap ? se.maxSnapScroll : 0, p = se.easing, h = se.elastic ? j(se.snap) ? Y : j(se.elastic) ? se.elastic : 0 : 0, F = Y; F > 44;) F /= 2;
                F = Math.round(44 / F) * F, k && (x = _ == -1 / 0 || T == 1 / 0, O = _ < T ? Math.max(20, l * l / (T - _ + l)) : 0, k.style.height = O + "px", V.style.height = O ? "" : 0), void 0 === ee && (ee = se.initialPos, ae = Math.round(ee / Y)), e || te.scroll(se.snap ? $ ? $[ae]["snap" + ne] : ae * Y : ee)
            }, te._processSettings = function() {
                Q = "Y" == se.axis, m = Q ? "top" : "left", K = se.moveElement || re.children().eq(0), B = K[0].style, X = Q ? se.thresholdY : se.thresholdX, se.scrollbar && (i = se.scrollbar, r = i.find(".mbsc-sc-bar"), k = r[0], V = i[0])
            }, te._init = function() {
                te.refresh(), re.on("touchstart mousedown", ie).on("touchmove", oe).on("touchend touchcancel", ce), se.mousewheel && re.on("wheel mousewheel", de), k && i.on("mousedown", ue).on("click", fe), e.addEventListener && e.addEventListener("click", function(e) {
                    te.scrolled && (te.scrolled = !1, e.stopPropagation(), e.preventDefault())
                }, !0)
            }, te._destroy = function() {
                clearInterval(z), re.off("touchstart mousedown", ie).off("touchmove", oe).off("touchend touchcancel", ce).off("wheel mousewheel", de), k && i.off("mousedown", ue).off("click", fe)
            }, se = te.settings, Z = te.trigger, a || te.init()
        };
    xt.prototype = {
        _defaults: {
            speedUnit: .0022,
            timeUnit: 3,
            initialPos: 0,
            axis: "Y",
            thresholdX: 10,
            thresholdY: 5,
            easing: "cubic-bezier(0.190, 1.000, 0.220, 1.000)",
            stopProp: !0,
            momentum: !0,
            mousewheel: !0,
            elastic: !0
        }
    };
    /* eslint-disable no-unused-vars */
    var Tt = {},
        yt = O ? window.CSS : null,
        _t = !(yt && yt.supports && yt.supports("(transform-style: preserve-3d)")) || "wp" == _ || "android" == _,
        wt = function(e, t, a) {
            var s, r, i, o, l, c, d, u, m, p, h, f, v, b, g, x, T, y, _ = 40,
                w = 1e3,
                C = this,
                M = pe(e);

            function S(e) {
                var t, a, n = +pe(this).attr("data-index");
                38 == e.keyCode ? (t = !0, a = -1) : 40 == e.keyCode ? (t = !0, a = 1) : 32 == e.keyCode && (t = !0, k(n, T[n]._$markup.find('.mbsc-sc-itm[data-val="' + u[n] + '"]'))), t && (e.stopPropagation(), e.preventDefault(), a && d.start(n, a))
            }

            function D() {
                d.stop()
            }

            function k(e, t) {
                var a = T[e],
                    n = +t.attr("data-index"),
                    s = F(a, n),
                    r = C._tempSelected[e],
                    i = j(a.multiple) ? a.multiple : 1 / 0;
                !1 !== g("onItemTap", {
                    target: t[0],
                    index: e,
                    value: s,
                    selected: t.hasClass("mbsc-sc-itm-sel")
                }) && (a.multiple && !a._disabled[s] && (void 0 !== r[s] ? (t.removeClass(l).removeAttr("aria-selected"), delete r[s]) : (1 == i && (C._tempSelected[e] = r = {}, a._$markup.find(".mbsc-sc-itm-sel").removeClass(l).removeAttr("aria-selected")), I(r).length < i && (t.addClass(l).attr("aria-selected", "true"), r[s] = s))), W(a, e, n, w, !0, !0, a.multiple), C.live && (!a.multiple || 1 === a.multiple && b.tapSelect) && (!0 === b.setOnTap || b.setOnTap[e]) && setTimeout(function() {
                    C.select()
                }, b.tapSelect ? 0 : 200))
            }

            function O(e) {
                return -(e.max - e._offset - (e.multiple && !o ? Math.floor(b.rows / 2) : 0)) * p
            }

            function N(e) {
                return -(e.min - e._offset + (e.multiple && !o ? Math.floor(b.rows / 2) : 0)) * p
            }

            function V(e, t) {
                return (e._array ? e._map[t] : +e.getIndex(t, C)) || 0
            }

            function P(e, t) {
                var a = e.data;
                if (t >= e.min && t <= e.max) return e._array ? e.circular ? pe(a).get(t % e._length) : a[t] : pe.isFunction(a) ? a(t, C) : ""
            }

            function E(e) {
                return pe.isPlainObject(e) ? void 0 !== e.value ? e.value : e.display : e
            }

            function A(e) {
                var t = pe.isPlainObject(e) ? e.display : e;
                return void 0 === t ? "" : t + C._getText(n, .2)
            }

            function F(e, t) {
                return E(P(e, t))
            }

            function H(e, t) {
                var a = T[e];
                W(a, e, a._current + t, b.delay + 100, 1 == t ? 1 : 2)
            }

            function L(e) {
                return pe.isArray(b.readonly) ? b.readonly[e] : b.readonly
            }

            function z(e, t, a) {
                var n = e._index - e._batch;
                return e.data = e.data || [], e.key = void 0 !== e.key ? e.key : t, e.label = void 0 !== e.label ? e.label : t, e._map = {}, e._array = pe.isArray(e.data), e._array && (e._length = e.data.length, pe.each(e.data, function(t, a) {
                    e._map[E(a)] = t
                })), e.circular = void 0 === b.circular ? void 0 === e.circular ? e._array && e._length > b.rows : e.circular : pe.isArray(b.circular) ? b.circular[t] : b.circular, e.min = e._array ? e.circular ? -1 / 0 : 0 : void 0 === e.min ? -1 / 0 : e.min, e.max = e._array ? e.circular ? 1 / 0 : e._length - 1 : void 0 === e.max ? 1 / 0 : e.max, e._nr = t, e._index = V(e, u[t]), e._disabled = {}, e._batch = 0, e._current = e._index, e._first = e._index - _, e._last = e._index + _, e._offset = e._first, a ? (e._offset -= e._margin / p + (e._index - n), e._margin += (e._index - n) * p) : e._margin = 0, e._refresh = function(t) {
                    ge(e._scroller.settings, {
                        minScroll: O(e),
                        maxScroll: N(e)
                    }), e._scroller.refresh(t)
                }, y[e.key] = e, e
            }

            function Y(e, t, a, n, s) {
                var r, o, c, d, m, h, f, v, g = "",
                    T = C._tempSelected[t],
                    y = e._disabled || {};
                for (r = a; r <= n; r++) m = A(c = P(e, r)), d = E(c), o = c && void 0 !== c.cssClass ? c.cssClass : "", h = c && void 0 !== c.label ? c.label : "", f = c && c.invalid, v = void 0 !== d && d == u[t] && !e.multiple, g += '<div role="option" aria-selected="' + !!T[d] + '" class="mbsc-sc-itm ' + (s ? "mbsc-sc-itm-3d " : "") + o + " " + (v ? "mbsc-sc-itm-sel " : "") + (T[d] ? l : "") + (void 0 === d ? " mbsc-sc-itm-ph" : " mbsc-btn-e") + (f ? " mbsc-sc-itm-inv-h mbsc-disabled" : "") + (y[d] ? " mbsc-sc-itm-inv mbsc-disabled" : "") + '" data-index="' + r + '" data-val="' + d + '"' + (h ? ' aria-label="' + h + '"' : "") + (v ? ' aria-selected="true"' : "") + ' style="height:' + p + "px;line-height:" + p + "px;" + (s ? Ue + "transform:rotateX(" + (e._offset - r) * i % 360 + "deg) translateZ(" + p * b.rows / 2 + "px);" : "") + '">' + (x > 1 ? '<div class="mbsc-sc-itm-ml" style="line-height:' + Math.round(p / x) + "px;font-size:" + Math.round(p / x * .8) + 'px;">' : "") + m + (x > 1 ? "</div>" : "") + "</div>";
                return g
            }

            function $(e, t, a, n) {
                var s, r = T[e],
                    i = n || r._disabled,
                    o = V(r, t),
                    l = t,
                    c = t,
                    d = 0,
                    u = 0;
                if (void 0 === t && (t = F(r, o)), !0 === i[t]) {
                    for (s = 0; o - d >= r.min && i[l] && s < 100;) s++, l = F(r, o - ++d);
                    for (s = 0; o + u < r.max && i[c] && s < 100;) s++, c = F(r, o + ++u);
                    t = (u < d && u && 2 !== a || !d || o - d < 0 || 1 == a) && !i[c] ? c : l
                }
                return t
            }

            function R(t, a, n, s, r, i) {
                var o, c, d, m, h = C._isVisible;
                v = !0, m = b.validate.call(e, {
                    values: u.slice(0),
                    index: a,
                    direction: n
                }, C) || {}, v = !1, m.valid && (C._tempWheelArray = u = m.valid.slice(0)), i || pe.each(T, function(e, s) {
                    if (h && s._$markup.find(".mbsc-sc-itm-inv").removeClass("mbsc-sc-itm-inv mbsc-disabled"), s._disabled = {}, m.disabled && m.disabled[e] && pe.each(m.disabled[e], function(e, t) {
                            s._disabled[t] = !0, h && s._$markup.find('.mbsc-sc-itm[data-val="' + t + '"]').addClass("mbsc-sc-itm-inv mbsc-disabled")
                        }), u[e] = s.multiple ? u[e] : $(e, u[e], n), h) {
                        if (s.multiple && void 0 !== a || s._$markup.find(".mbsc-sc-itm-sel").removeClass(l).removeAttr("aria-selected"), s.multiple) {
                            if (void 0 === a)
                                for (var i in C._tempSelected[e]) s._$markup.find('.mbsc-sc-itm[data-val="' + i + '"]').addClass(l).attr("aria-selected", "true")
                        } else s._$markup.find('.mbsc-sc-itm[data-val="' + u[e] + '"]').addClass("mbsc-sc-itm-sel").attr("aria-selected", "true");
                        c = V(s, u[e]), o = c - s._index + s._batch, Math.abs(o) > 2 * _ + 1 && (d = o + (2 * _ + 1) * (o > 0 ? -1 : 1), s._offset += d, s._margin -= d * p, s._refresh()), s._index = c + s._batch, s._scroller.scroll(-(c - s._offset + s._batch) * p, a === e || void 0 === a ? t : w, r)
                    }
                }), g("onValidated", {
                    index: a,
                    time: t
                }), C._tempValue = b.formatValue.call(e, u, C), h && C._updateHeader(), C.live && function(e, t) {
                    var a = T[e];
                    return a && (!a.multiple || 1 !== a.multiple && t && (!0 === b.setOnTap || b.setOnTap[e]))
                }(a, i) && (C._hasValue = s || C._hasValue, U(s, s, 0, !0), s && g("onSet", {
                    valueText: C._value
                })), s && g("onChange", {
                    index: a,
                    valueText: C._tempValue
                })
            }

            function W(e, t, a, n, s, r, i) {
                var o = F(e, a);
                void 0 !== o && (u[t] = o, e._batch = e._array ? Math.floor(a / e._length) * e._length : 0, e._index = a, setTimeout(function() {
                    R(n, t, s, !0, r, i)
                }, 10))
            }

            function U(t, a, n, s, r) {
                if (s ? C._tempValue = b.formatValue.call(e, C._tempWheelArray, C) : R(n), !r) {
                    C._wheelArray = [];
                    for (var i = 0; i < u.length; i++) C._wheelArray[i] = T[i] && T[i].multiple ? Object.keys(C._tempSelected[i])[0] : u[i];
                    C._value = C._hasValue ? C._tempValue : null, C._selected = ge(!0, {}, C._tempSelected)
                }
                t && (C._isInput && M.val(C._hasValue ? C._tempValue : ""), g("onFill", {
                    valueText: C._hasValue ? C._tempValue : "",
                    change: a
                }), a && (C._preventChange = !0, M.trigger("change")))
            }
            bt.call(this, e, t, !0), C.setVal = C._setVal = function(t, a, n, s, r) {
                C._hasValue = null !== t && void 0 !== t, C._tempWheelArray = u = pe.isArray(t) ? t.slice(0) : b.parseValue.call(e, t, C) || [], U(a, void 0 === n ? a : n, r, !1, s)
            }, C.getVal = C._getVal = function(e) {
                var t = C._hasValue || e ? C[e ? "_tempValue" : "_value"] : null;
                return j(t) ? +t : t
            }, C.setArrayVal = C.setVal, C.getArrayVal = function(e) {
                return e ? C._tempWheelArray : C._wheelArray
            }, C.changeWheel = function(e, t, a) {
                var n, s;
                pe.each(e, function(e, t) {
                    (s = y[e]) && (n = s._nr, ge(s, t), z(s, n, !0), C._isVisible && (o && s._$3d.html(Y(s, n, s._first + _ - r + 1, s._last - _ + r, !0)), s._$scroller.html(Y(s, n, s._first, s._last)).css("margin-top", s._margin + "px"), s._refresh(v)))
                }), !C._isVisible || C._isLiquid || v || C.position(), v || R(t, void 0, void 0, a)
            }, C.getValidValue = $, C._generateContent = function() {
                var e, t = 0,
                    a = "",
                    n = o ? Ue + "transform: translateZ(" + (p * b.rows / 2 + 3) + "px);" : "",
                    s = '<div class="mbsc-sc-whl-l" style="' + n + "height:" + p + "px;margin-top:-" + (p / 2 + (b.selectedLineBorder || 0)) + 'px;"></div>',
                    i = 0;
                return pe.each(b.wheels, function(l, d) {
                    a += '<div class="mbsc-w-p mbsc-sc-whl-gr-c' + (o ? " mbsc-sc-whl-gr-3d-c" : "") + (b.showLabel ? " mbsc-sc-lbl-v" : "") + '">' + s + '<div class="mbsc-sc-whl-gr' + (o ? " mbsc-sc-whl-gr-3d" : "") + (c ? " mbsc-sc-cp" : "") + (b.width || b.maxWidth ? '"' : '" style="max-width:' + b.maxPopupWidth + 'px;"') + ">", pe.each(d, function(l, d) {
                        C._tempSelected[i] = ge({}, C._selected[i]), T[i] = z(d, i), t += b.maxWidth ? b.maxWidth[i] || b.maxWidth : b.width ? b.width[i] || b.width : 0, e = void 0 !== d.label ? d.label : l, a += '<div class="mbsc-sc-whl-w ' + (d.cssClass || "") + (d.multiple ? " mbsc-sc-whl-multi" : "") + '" style="' + (b.width ? "width:" + (b.width[i] || b.width) + "px;" : (b.minWidth ? "min-width:" + (b.minWidth[i] || b.minWidth) + "px;" : "") + (b.maxWidth ? "max-width:" + (b.maxWidth[i] || b.maxWidth) + "px;" : "")) + '">' + (m ? '<div class="mbsc-sc-bar-c"><div class="mbsc-sc-bar"></div></div>' : "") + '<div class="mbsc-sc-whl-o" style="' + n + '"></div>' + s + '<div tabindex="0" aria-live="off" aria-label="' + e + '"' + (d.multiple ? ' aria-multiselectable="true"' : "") + ' role="listbox" data-index="' + i + '" class="mbsc-sc-whl" style="height:' + b.rows * p * (o ? 1.1 : 1) + 'px;">' + (c ? '<div data-index="' + i + '" data-step="1" class="mbsc-sc-btn mbsc-sc-btn-plus ' + (b.btnPlusClass || "") + '" style="height:' + p + "px;line-height:" + p + 'px;"></div><div data-index="' + i + '" data-step="-1" class="mbsc-sc-btn mbsc-sc-btn-minus ' + (b.btnMinusClass || "") + '" style="height:' + p + "px;line-height:" + p + 'px;"></div>' : "") + '<div class="mbsc-sc-lbl">' + e + '</div><div class="mbsc-sc-whl-c" style="height:' + h + "px;margin-top:-" + (h / 2 + 1) + "px;" + n + '"><div class="mbsc-sc-whl-sc" style="top:' + (h - p) / 2 + 'px;">', a += Y(d, i, d._first, d._last) + "</div></div>", o && (a += '<div class="mbsc-sc-whl-3d" style="height:' + p + "px;margin-top:-" + p / 2 + 'px;">', a += Y(d, i, d._first + _ - r + 1, d._last - _ + r, !0), a += "</div>"), a += "</div></div>", i++
                    }), a += "</div></div>"
                }), t && (b.maxPopupWidth = t), a
            }, C._attachEvents = function(e) {
                d = ot(pe(".mbsc-sc-btn", e), H, b.delay, L, !0), pe(".mbsc-sc-whl", e).on("keydown", S).on("keyup", D)
            }, C._detachEvents = function() {
                for (var e = 0; e < T.length; e++) T[e]._scroller.destroy()
            }, C._markupReady = function(e) {
                pe(".mbsc-sc-whl-w", s = e).each(function(e) {
                    var t, a = pe(this),
                        n = T[e];
                    n._$markup = a, n._$scroller = pe(".mbsc-sc-whl-sc", this), n._$3d = pe(".mbsc-sc-whl-3d", this), n._scroller = new xt(this, {
                        mousewheel: b.mousewheel,
                        moveElement: n._$scroller,
                        scrollbar: pe(".mbsc-sc-bar-c", this),
                        initialPos: (n._first - n._index) * p,
                        contSize: b.rows * p,
                        snap: p,
                        minScroll: O(n),
                        maxScroll: N(n),
                        maxSnapScroll: _,
                        prevDef: !0,
                        stopProp: !0,
                        timeUnit: 3,
                        easing: "cubic-bezier(0.190, 1.000, 0.220, 1.000)",
                        sync: function(e, t, a) {
                            var s = t ? Ue + "transform " + Math.round(t) + "ms " + a : "";
                            o && (n._$3d[0].style[Ke + "Transition"] = s, n._$3d[0].style[Ke + "Transform"] = "rotateX(" + -e / p * i + "deg)")
                        },
                        onStart: function(t, a) {
                            a.settings.readonly = L(e)
                        },
                        onGestureStart: function() {
                            a.addClass("mbsc-sc-whl-a mbsc-sc-whl-anim"), g("onWheelGestureStart", {
                                index: e
                            })
                        },
                        onGestureEnd: function(a) {
                            var s = 90 == a.direction ? 1 : 2,
                                r = a.duration,
                                i = a.destinationY;
                            t = Math.round(-i / p) + n._offset, W(n, e, t, r, s)
                        },
                        onAnimationStart: function() {
                            a.addClass("mbsc-sc-whl-anim")
                        },
                        onAnimationEnd: function() {
                            a.removeClass("mbsc-sc-whl-a mbsc-sc-whl-anim"), g("onWheelAnimationEnd", {
                                index: e
                            }), n._$3d.find(".mbsc-sc-itm-del").remove()
                        },
                        onMove: function(t) {
                            ! function(e, t, a) {
                                var n = Math.round(-a / p) + e._offset,
                                    s = n - e._current,
                                    i = e._first,
                                    l = e._last,
                                    c = i + _ - r + 1,
                                    d = l - _ + r;
                                s && (e._first += s, e._last += s, e._current = n, s > 0 ? (e._$scroller.append(Y(e, t, Math.max(l + 1, i + s), l + s)), pe(".mbsc-sc-itm", e._$scroller).slice(0, Math.min(s, l - i + 1)).remove(), o && (e._$3d.append(Y(e, t, Math.max(d + 1, c + s), d + s, !0)), pe(".mbsc-sc-itm", e._$3d).slice(0, Math.min(s, d - c + 1)).attr("class", "mbsc-sc-itm-del"))) : s < 0 && (e._$scroller.prepend(Y(e, t, i + s, Math.min(i - 1, l + s))), pe(".mbsc-sc-itm", e._$scroller).slice(Math.max(s, i - l - 1)).remove(), o && (e._$3d.prepend(Y(e, t, c + s, Math.min(c - 1, d + s), !0)), pe(".mbsc-sc-itm", e._$3d).slice(Math.max(s, c - d - 1)).attr("class", "mbsc-sc-itm-del"))), e._margin += s * p, e._$scroller.css("margin-top", e._margin + "px"))
                            }(n, e, t.posY)
                        },
                        onBtnTap: function(t) {
                            k(e, pe(t.target))
                        }
                    })
                }), R()
            }, C._fillValue = function() {
                C._hasValue = !0, U(!0, !0, 0, !0)
            }, C._clearValue = function() {
                pe(".mbsc-sc-whl-multi .mbsc-sc-itm-sel", s).removeClass(l).removeAttr("aria-selected")
            }, C._readValue = function() {
                var t = M.val() || "",
                    a = 0;
                "" !== t && (C._hasValue = !0), C._tempWheelArray = u = C._hasValue && C._wheelArray ? C._wheelArray.slice(0) : b.parseValue.call(e, t, C) || [], C._tempSelected = ge(!0, {}, C._selected), pe.each(b.wheels, function(e, t) {
                    pe.each(t, function(e, t) {
                        T[a] = z(t, a), a++
                    })
                }), U(!1, !1, 0, !0), g("onRead")
            }, C.__processSettings = function(e) {
                b = C.settings, g = C.trigger, x = b.multiline, l = "mbsc-sc-itm-sel mbsc-ic mbsc-ic-" + b.checkIcon, (f = !b.touchUi) && (b.tapSelect = !0, b.circular = !1, b.rows = e.rows || t.rows || 7)
            }, C.__init = function(e) {
                e && (C._wheelArray = null), f ? (b.scroll3d = !1, m = !0) : m = !1, T = [], y = {}, c = b.showScrollArrows, o = b.scroll3d && !_t && !c, p = b.height, h = o ? 2 * Math.round((p - .03 * (p * b.rows / 2 + 3)) / 2) : p, r = Math.round(1.8 * b.rows), i = 360 / (2 * r), c && (b.rows = Math.max(3, b.rows))
            }, C._getItemValue = E, C._tempSelected = {}, C._selected = {}, a || C.init()
        };
    wt.prototype = {
        _hasDef: !0,
        _hasTheme: !0,
        _hasLang: !0,
        _responsive: !0,
        _class: "scroller",
        _presets: Tt,
        _defaults: ge({}, bt.prototype._defaults, {
            minWidth: 80,
            height: 40,
            rows: 3,
            multiline: 1,
            delay: 200,
            readonly: !1,
            showLabel: !0,
            setOnTap: !1,
            wheels: [],
            preset: "",
            speedUnit: .0012,
            timeUnit: .08,
            checkIcon: "checkmark",
            compClass: "mbsc-sc",
            validate: function() {},
            formatValue: function(e) {
                return e.join(" ")
            },
            parseValue: function(e, t) {
                var a, n, s = [],
                    r = [],
                    i = 0;
                return null !== e && void 0 !== e && (s = (e + "").split(" ")), pe.each(t.settings.wheels, function(e, o) {
                    pe.each(o, function(e, o) {
                        n = o.data, a = t._getItemValue(n[0]), pe.each(n, function(e, n) {
                            if (s[i] == t._getItemValue(n)) return a = t._getItemValue(n), !1
                        }), r.push(a), i++
                    })
                }), r
            }
        })
    }, ve.Scroller = wt;
    var Ct = {
            separator: " ",
            dateFormat: "mm/dd/yy",
            dateDisplay: "MMddyy",
            timeFormat: "h:ii A",
            dayText: "Day",
            monthText: "Month",
            yearText: "Year",
            hourText: "Hours",
            minuteText: "Minutes",
            ampmText: "&nbsp;",
            secText: "Seconds",
            nowText: "Now",
            todayText: "Today"
        },
        Mt = function(e) {
            function t(e) {
                var t, a, n, s, r = [];
                if (e) {
                    for (t = 0; t < e.length; t++)
                        if ((a = e[t]).start && a.end && !le.test(a.start))
                            for (n = new Date(re(a.start, C, y)), s = new Date(re(a.end, C, y)); n <= s;) r.push(Z(n.getFullYear(), n.getMonth(), n.getDate())), n.setDate(n.getDate() + 1);
                        else r.push(a);
                    return r
                }
                return e
            }

            function a(e, t, a, n) {
                return Math.min(n, Math.floor(e / t) * t + a)
            }

            function n(e, t, a) {
                return Math.floor((a - t) / e) * e + t
            }

            function s(e) {
                return e.getFullYear() + "-" + z(e.getMonth() + 1) + "-" + z(e.getDate())
            }

            function r(e, t, a, n) {
                var s;
                return void 0 === v[t] || (s = +e[v[t]], isNaN(s)) ? a ? X[t](a) : void 0 !== b[t] ? b[t] : X[t](n) : s
            }

            function i(e) {
                var t, a = new Date((new Date).setHours(0, 0, 0, 0));
                if (null === e) return e;
                void 0 !== v.dd && (t = e[v.dd].split("-"), t = new Date(t[0], t[1] - 1, t[2])), void 0 !== v.tt && (t = t || a, t = new Date(t.getTime() + e[v.tt] % 86400 * 1e3));
                var n = r(e, "y", t, a),
                    s = r(e, "m", t, a),
                    i = Math.min(r(e, "d", t, a), y.getMaxDayOfMonth(n, s)),
                    o = r(e, "h", t, a);
                return y.getDate(n, s, i, A && r(e, "a", t, a) ? o + 12 : o, r(e, "i", t, a), r(e, "s", t, a), r(e, "u", t, a))
            }

            function o(e, t) {
                var a, n, s = ["y", "m", "d", "a", "h", "i", "s", "u", "dd", "tt"],
                    r = [];
                if (null === e || void 0 === e) return e;
                for (a = 0; a < s.length; a++) void 0 !== v[n = s[a]] && (r[v[n]] = X[n](e)), t && (b[n] = X[n](e));
                return r
            }

            function l(e, t) {
                return !(!t && e < V) && (!(!t && e > P) && (!!c(e, N) || !c(e, O)))
            }

            function c(e, t) {
                var a, n, s;
                if (t)
                    for (n = 0; n < t.length; n++)
                        if (s = (a = t[n]) + "", !a.start)
                            if (de.test(s)) {
                                if ((s = +s.replace("w", "")) == e.getDay()) return !0
                            } else if (ce.test(s)) {
                    if ((s = s.split("/"))[1]) {
                        if (s[0] - 1 == e.getMonth() && s[1] == e.getDate()) return !0
                    } else if (s[0] == e.getDate()) return !0
                } else if (a = re(a, C, y), e.getFullYear() == a.getFullYear() && e.getMonth() == a.getMonth() && e.getDate() == a.getDate()) return !0;
                return !1
            }

            function d(e, t, a, n, s, r, i) {
                var o, l, c, d;
                if (e)
                    for (l = 0; l < e.length; l++)
                        if (d = (o = e[l]) + "", !o.start)
                            if (de.test(d))
                                for (c = (d = +d.replace("w", "")) - n; c < s; c += 7) c >= 0 && (r[c + 1] = i);
                            else ce.test(d) ? (d = d.split("/"))[1] ? d[0] - 1 == a && (r[d[1]] = i) : r[d[0]] = i : (o = re(o, C, y), y.getYear(o) == t && y.getMonth(o) == a && (r[y.getDay(o)] = i))
            }

            function u(e, t, n, s, r, i, o, l) {
                var c, d, u, p, h, f, v, b, x, T, _, w, C, M, S, D, k, O, N, V, P = {},
                    E = y.getDate(s, r, i),
                    I = ["a", "h", "i", "s"];
                if (e) {
                    for (v = 0; v < e.length; v++)(_ = e[v]).start && (_.apply = !1, O = (k = (u = _.d) + "").split("/"), u && (u.getTime && s == y.getYear(u) && r == y.getMonth(u) && i == y.getDay(u) || !de.test(k) && (O[1] && i == O[1] && r == O[0] - 1 || !O[1] && i == O[0]) || de.test(k) && E.getDay() == +k.replace("w", "")) && (_.apply = !0, P[E] = !0));
                    for (v = 0; v < e.length; v++)
                        if (_ = e[v], c = 0, D = 0, b = K[n], x = q[n], M = !0, S = !0, d = !1, _.start && (_.apply || !_.d && !P[E])) {
                            for (w = _.start.split(":"), C = _.end.split(":"), T = 0; T < 3; T++) void 0 === w[T] && (w[T] = 0), void 0 === C[T] && (C[T] = 59), w[T] = +w[T], C[T] = +C[T];
                            if ("tt" == n) b = a(Math.round((new Date(E).setHours(w[0], w[1], w[2]) - new Date(E).setHours(0, 0, 0, 0)) / 1e3), m, 0, 86400), x = a(Math.round((new Date(E).setHours(C[0], C[1], C[2]) - new Date(E).setHours(0, 0, 0, 0)) / 1e3), m, 0, 86400);
                            else {
                                for (w.unshift(w[0] > 11 ? 1 : 0), C.unshift(C[0] > 11 ? 1 : 0), A && (w[1] >= 12 && (w[1] = w[1] - 12), C[1] >= 12 && (C[1] = C[1] - 12)), T = 0; T < t; T++) void 0 !== g[T] && (N = a(w[T], G[I[T]], K[I[T]], q[I[T]]), V = a(C[T], G[I[T]], K[I[T]], q[I[T]]), p = 0, h = 0, f = 0, A && 1 == T && (p = w[0] ? 12 : 0, h = C[0] ? 12 : 0, f = g[0] ? 12 : 0), M || (N = 0), S || (V = q[I[T]]), (M || S) && N + p < g[T] + f && g[T] + f < V + h && (d = !0), g[T] != N && (M = !1), g[T] != V && (S = !1));
                                if (!l)
                                    for (T = t + 1; T < 4; T++) w[T] > 0 && (c = G[n]), C[T] < q[I[T]] && (D = G[n]);
                                d || (N = a(w[t], G[n], K[n], q[n]) + c, V = a(C[t], G[n], K[n], q[n]) - D, M && (b = N), S && (x = V))
                            }
                            if (M || S || d)
                                for (T = b; T <= x; T += G[n]) o[T] = !l
                        }
                }
            }
            var m, p, h, f, v = {},
                b = {},
                g = [],
                x = function(e) {
                    var t, a, n, s = {};
                    if (e.is("input")) {
                        switch (e.attr("type")) {
                            case "date":
                                t = "yy-mm-dd";
                                break;
                            case "datetime":
                                t = "yy-mm-ddTHH:ii:ssZ";
                                break;
                            case "datetime-local":
                                t = "yy-mm-ddTHH:ii:ss";
                                break;
                            case "month":
                                t = "yy-mm", s.dateOrder = "mmyy";
                                break;
                            case "time":
                                t = "HH:ii:ss"
                        }
                        s.format = t, a = e.attr("min"), n = e.attr("max"), a && "undefined" != a && (s.min = ee(t, a)), n && "undefined" != n && (s.max = ee(t, n))
                    }
                    return s
                }(pe(this)),
                T = ge({}, e.settings),
                y = ge(e.settings, ue, Ct, x, T),
                _ = y.preset,
                w = "datetime" == _ ? y.dateFormat + y.separator + y.timeFormat : "time" == _ ? y.timeFormat : y.dateFormat,
                C = x.format || w,
                M = (y.dateWheels || y.dateFormat, y.timeWheels || y.timeFormat),
                S = y.dateWheels || y.dateDisplay,
                D = M,
                k = y.baseTheme || y.theme,
                O = t(y.invalid),
                N = t(y.valid),
                V = re(y.min, C, y),
                P = re(y.max, C, y),
                E = /time/i.test(_),
                A = /h/.test(D),
                I = /D/.test(S),
                F = y.steps || {},
                j = F.hour || y.stepHour || 1,
                H = F.minute || y.stepMinute || 1,
                L = F.second || y.stepSecond || 1,
                Y = F.zeroBased,
                $ = Y || !V ? 0 : V.getHours() % j,
                R = Y || !V ? 0 : V.getMinutes() % H,
                W = Y || !V ? 0 : V.getSeconds() % L,
                U = n(j, $, A ? 11 : 23),
                J = n(H, R, 59),
                B = n(H, R, 59),
                K = {
                    y: V ? V.getFullYear() : -1 / 0,
                    m: 0,
                    d: 1,
                    h: $,
                    i: R,
                    s: W,
                    a: 0,
                    tt: 0
                },
                q = {
                    y: P ? P.getFullYear() : 1 / 0,
                    m: 11,
                    d: 31,
                    h: U,
                    i: J,
                    s: B,
                    a: 1,
                    tt: 86400
                },
                G = {
                    y: 1,
                    m: 1,
                    d: 1,
                    h: j,
                    i: H,
                    s: L,
                    a: 1,
                    tt: 1
                },
                X = {
                    y: function(e) {
                        return y.getYear(e)
                    },
                    m: function(e) {
                        return y.getMonth(e)
                    },
                    d: function(e) {
                        return y.getDay(e)
                    },
                    h: function(e) {
                        var t = e.getHours();
                        return a(t = A && t >= 12 ? t - 12 : t, j, $, U)
                    },
                    i: function(e) {
                        return a(e.getMinutes(), H, R, J)
                    },
                    s: function(e) {
                        return a(e.getSeconds(), L, W, B)
                    },
                    u: function(e) {
                        return e.getMilliseconds()
                    },
                    a: function(e) {
                        return e.getHours() > 11 ? 1 : 0
                    },
                    dd: s,
                    tt: function(e) {
                        return a(Math.round((e.getTime() - new Date(e).setHours(0, 0, 0, 0)) / 1e3), m, 0, 86400)
                    }
                };
            return e.getVal = function(t) {
                return e._hasValue || t ? se(i(e.getArrayVal(t)), y, C) : null
            }, e.getDate = function(t) {
                return e._hasValue || t ? i(e.getArrayVal(t)) : null
            }, e.setDate = function(t, a, n, s, r) {
                e.setArrayVal(o(t), a, r, s, n)
            }, v = e.remote.datetime.wheelOrder, p = e.remote.datetime.oneDateWheel, m = e.remote.datetime.timeStep, h = e.remote.datetime.wheels, y.isoParts = f = e.remote.datetime.isoParts, y.dateDisplay = S, e.remote.datetime.isValid = l, e.remote.datetime.getFullDate = s, e.remote.datetime.getDateIndex = function(e, t) {
                return t ? Math.floor(new Date(e) / 864e5) : e.getMonth() + 12 * (e.getFullYear() - 1970)
            }, e.remote.datetime.datetime = {
                formatDate: Q
            }, e._format = w, e._order = v, e.handlers.now = function() {
                e.setDate(new Date, e.live, 1e3, !0, !0)
            }, e.buttons.now = {
                text: y.nowText,
                icon: y.nowIcon,
                handler: "now"
            }, {
                minWidth: p && E ? {
                    bootstrap: 46,
                    ios: 50,
                    material: 46,
                    mobiscroll: 46,
                    windows: 50
                }[k] : void 0,
                compClass: "mbsc-dt mbsc-sc",
                wheels: h,
                headerText: !!y.headerText && function() {
                    return Q(w, i(e.getArrayVal(!0)), y)
                },
                formatValue: function(e) {
                    return Q(C, i(e), y)
                },
                parseValue: function(e) {
                    return e || (b = {}), o(re(e || y.defaultValue || new Date, C, y, f), !!e)
                },
                validate: function(t) {
                    var a, n, s, r, c = t.values,
                        m = t.index,
                        p = t.direction,
                        h = y.wheels[0][v.d],
                        f = function(e, t) {
                            var a, n, s = !1,
                                r = !1,
                                c = 0,
                                d = 0,
                                u = V ? i(o(V)) : -1 / 0,
                                m = P ? i(o(P)) : 1 / 0;
                            if (l(e)) return e;
                            if (e < u && (e = u), e > m && (e = m), a = e, n = e, 2 !== t)
                                for (s = l(a, !0); !s && a < m;) s = l(a = new Date(a.getTime() + 864e5), !0), c++;
                            if (1 !== t)
                                for (r = l(n, !0); !r && n > u;) r = l(n = new Date(n.getTime() - 864e5), !0), d++;
                            return 1 === t && s ? a : 2 === t && r ? n : d <= c && r ? n : a
                        }(i(c), p),
                        b = o(f),
                        x = [],
                        T = {},
                        _ = X.y(f),
                        w = X.m(f),
                        C = y.getMaxDayOfMonth(_, w),
                        M = !0,
                        D = !0;
                    if (pe.each(["dd", "y", "m", "d", "tt", "a", "h", "i", "s"], function(e, t) {
                            if (void 0 !== v[t]) {
                                var a = K[t],
                                    s = q[t],
                                    r = X[t](f);
                                if (x[v[t]] = [], M && V && (a = X[t](V)), D && P && (s = X[t](P)), "y" != t && "dd" != t)
                                    for (n = K[t]; n <= q[t]; n += G[t])(n < a || n > s) && x[v[t]].push(n);
                                if (r < a && (r = a), r > s && (r = s), M && (M = r == a), D && (D = r == s), "d" == t) {
                                    var i = y.getDate(_, w, 1).getDay(),
                                        o = {};
                                    d(O, _, w, i, C, o, 1), d(N, _, w, i, C, o, 0), pe.each(o, function(e, a) {
                                        a && x[v[t]].push(e)
                                    })
                                }
                            }
                        }), E && pe.each(["a", "h", "i", "s", "tt"], function(t, a) {
                            var n = X[a](f),
                                s = X.d(f),
                                r = {};
                            void 0 !== v[a] && (u(O, t, a, _, w, s, r, 0), u(N, t, a, _, w, s, r, 1), pe.each(r, function(e, t) {
                                t && x[v[a]].push(e)
                            }), g[t] = e.getValidValue(v[a], n, p, r))
                        }), h && (h._length !== C || I && (void 0 === m || m === v.y || m === v.m))) {
                        for (T[v.d] = h, h.data = [], a = 1; a <= C; a++) r = y.getDate(_, w, a).getDay(), s = S.replace(/[my|]/gi, "").replace(/dd/, (a < 10 ? "0" + a : a) + (y.daySuffix || "")).replace(/d/, a + (y.daySuffix || "")), h.data.push({
                            value: a,
                            display: /DD/.test(s) ? s.replace(/DD/, '<span class="mbsc-dt-day">' + y.dayNames[r] + "</span>") : s.replace(/D/, '<span class="mbsc-dt-day">' + y.dayNamesShort[r] + "</span>")
                        });
                        e._tempWheelArray[v.d] = b[v.d], e.changeWheel(T)
                    }
                    return {
                        disabled: x,
                        valid: b
                    }
                }
            }
        },
        St = {
            controls: ["calendar"],
            firstDay: 0,
            weekDays: "short",
            maxMonthWidth: 170,
            breakPointMd: 768,
            months: 1,
            pageBuffer: 1,
            weeks: 6,
            highlight: !0,
            outerMonthChange: !0,
            quickNav: !0,
            yearChange: !0,
            tabs: "auto",
            todayClass: "mbsc-cal-today",
            btnCalPrevClass: "mbsc-ic mbsc-ic-arrow-left6",
            btnCalNextClass: "mbsc-ic mbsc-ic-arrow-right6",
            dateText: "Date",
            timeText: "Time",
            todayText: "Today",
            prevMonthText: "Previous Month",
            nextMonthText: "Next Month",
            prevYearText: "Previous Year",
            nextYearText: "Next Year"
        };
    var Dt = function(e) {
            var t, a, s, r, i, o, l, c, d, u, m, p, h, f, v, b, g, x, T, y, _, w, C, M, S, D, k, O, N, V, P, E, I, F, j, H, L, z, Y, $, R, W, U, J, K, q, G, X, Q, ee, ae, ne, se, ie, oe, le, ue, me, he, fe, ve, be, xe, Te, ye, _e, we, Ce = this;

            function Me(e) {
                e.hasClass("mbsc-cal-h") || e.addClass("mbsc-cal-h")
            }

            function Se(t) {
                t.hasClass("mbsc-cal-h") ? function(t) {
                    t.hasClass("mbsc-cal-h") && (t.removeClass("mbsc-cal-h"), e._onSelectShow())
                }(t) : Me(t)
            }

            function De(e, t, a) {
                e[t] = e[t] || [], e[t].push(a)
            }

            function ke(e, t, a) {
                var n, s, r, i, o = ie.getYear(t),
                    l = ie.getMonth(t),
                    c = {};
                return e && pe.each(e, function(e, d) {
                    if (n = d.d || d.start || d, s = n + "", d.start && d.end)
                        for (i = te(re(d.start, M, ie)), r = te(re(d.end, M, ie)); i <= r;) De(c, i, d), i.setDate(i.getDate() + 1);
                    else if (de.test(s)) {
                        var u = +s.replace("w", ""),
                            m = 0,
                            p = t.getDay();
                        for (ie.firstDay - p + 1 > 1 && (m = 7), i = ie.getDate(o, l, u - m - p + ie.getDay(t)); i <= a;) De(c, i, d), i.setDate(i.getDate() + 7)
                    } else if (ce.test(s))
                        if ((s = s.split("/"))[1])
                            for (i = ie.getDate(o, s[0] - 1, s[1]); i <= a;) De(c, i, d), i = ie.getDate(ie.getYear(i) + 1, ie.getMonth(i), s[0]);
                        else
                            for (i = ie.getDate(o, l, s[0]); i <= a;) De(c, i, d), i = ie.getDate(ie.getYear(i), ie.getMonth(i) + 1, s[0]);
                    else De(c, te(re(n, M, ie)), d)
                }), c
            }

            function Oe(e) {
                return !(e < $) && (!(e > H) && (void 0 === N[e] || void 0 !== ue[e]))
            }

            function Ne(t) {
                var a, n, s, r, i, o, l, c = !!j[t] && j[t],
                    d = c && c[0].background,
                    u = "",
                    m = "";
                if (c) {
                    for (i = '<div class="mbsc-cal-marks">', a = 0; a < c.length; a++) u += ((r = c[a]).cssClass || "") + " ", i += '<div class="mbsc-cal-mark"' + (r.color ? ' style="background:' + r.color + ';"' : "") + "></div>", r.icon && (m += '<span class="mbsc-ic mbsc-ic-' + r.icon + '"' + (r.text ? "" : r.color ? ' style="color:' + r.color + ';"' : "") + "></span>\n");
                    i += "</div>", k && (c[0] && (n = c[0].text, s = c[0].color), n ? o = '<div class="mbsc-cal-txt" title="' + pe("<div>" + n + "</div>").text() + '"' + (s ? ' style="background:' + s + ";color:" + nt(s) + ';"' : "") + ">" + m + n + "</div>" : m && (o = '<div class="mbsc-cal-txt mbsc-cal-icons">' + m + "</div>"))
                }
                return ge(l = {
                    marked: c,
                    background: d,
                    cssClass: u,
                    ariaLabel: k ? n : "",
                    markup: k ? o : D ? i : ""
                }, e._getDayProps(t, l))
            }

            function Ve(e) {
                return ' style="' + (F ? "transform: translateY(" + 100 * e + "%)" : "left:" + 100 * e * se + "%") + '"'
            }

            function Pe(e) {
                return Ke(e, ee - 1) > H && (e = Ke(H, 1 - ee)), e < $ && (e = $), e
            }

            function Ee(t) {
                var a = Ke(t, -ae - Q),
                    n = Ke(t, -ae + ee + Q);
                N = ke(ie.invalid, a, n), ue = ke(ie.valid, a, n), j = ke(ie.labels || ie.events || ie.marked || ie.colors, a, n), e._onGenMonth(a, n)
            }

            function Ae(e) {
                var t = ie.getYear(e),
                    a = ie.getMonth(e);
                _ = e, u = e, $e(e), le("onMonthChange", {
                    year: t,
                    month: a
                }), le("onMonthLoading", {
                    year: t,
                    month: a
                }), le("onPageChange", {
                    firstDay: e
                }), le("onPageLoading", {
                    firstDay: e
                }), Ee(e)
            }

            function Ie(e) {
                var t = ie.getYear(e),
                    a = ie.getMonth(e);
                void 0 !== X && He(e, X, !0), pe(".mbsc-cal-slide", C.$scroller).removeClass("mbsc-cal-slide-a"), pe(".mbsc-cal-slide", C.$scroller).slice(Q, Q + ee).addClass("mbsc-cal-slide-a"), void 0 === X && (le("onMonthLoaded", {
                    year: t,
                    month: a
                }), le("onPageLoaded", {
                    firstDay: e
                })), Le(u, C.focus), C.focus = !1
            }

            function Fe(e, t) {
                var a, n = ie.getYear(e),
                    s = '<div class="mbsc-cal-slide"' + Ve(t) + '><div role="grid" class="mbsc-cal-table"><div class="mbsc-cal-row">';
                for (a = 0; a < 12; a++) a && a % 3 == 0 && (s += '</div><div class="mbsc-cal-row">'), s += '<div role="gridcell" tabindex="-1" aria-label="' + n + '" data-val="' + n + '" class="mbsc-cal-cell mbsc-btn-e ' + (n < U || n > Y ? " mbsc-disabled " : "") + (n == ie.getYear(_) ? T : "") + '"><div class="mbsc-cal-cell-i mbsc-cal-cell-txt">' + n + Te + "</div></div>", n++;
                return s += "</div></div></div>"
            }

            function je(t, a) {
                var s, r, i, o, l, c, d, u, m, h, f, v, b, g, x, y, _ = 1,
                    C = 0,
                    M = ie.getYear(t),
                    S = ie.getMonth(t),
                    D = ie.getDay(t),
                    k = null !== ie.defaultValue || e._hasValue ? e.getDate(!0) : null,
                    O = ie.getDate(M, S, D).getDay(),
                    N = '<div class="mbsc-cal-slide"' + Ve(a) + '><div role="grid" class="mbsc-cal-table"><div class="mbsc-cal-row">';
                for (ie.firstDay - O > 0 && (C = 7), y = 0; y < 7 * p; y++) x = y + ie.firstDay - C, i = (s = ie.getDate(M, S, x - O + D)).getFullYear(), o = s.getMonth(), l = s.getDate(), c = ie.getMonth(s), d = ie.getDay(s), g = ie.getMaxDayOfMonth(i, o), u = i + "-" + (o + 1) + "-" + l, h = (m = ge({
                    valid: Oe(s),
                    selected: k && k.getFullYear() === i && k.getMonth() === o && k.getDate() === l
                }, Ne(s))).valid, f = m.selected, r = m.cssClass, v = new Date(s).setHours(12, 0, 0, 0) === (new Date).setHours(12, 0, 0, 0), b = c !== S, w[u] = m, y && y % 7 == 0 && (N += '</div><div class="mbsc-cal-row">'), he && y % 7 == 0 && ("month" == he && b && _ > 1 ? _ = 1 == l ? 1 : 2 : "year" == he && (_ = ie.getWeekNumber(ie.getDate(i, o, l + (7 - ie.firstDay + 1) % 7))), N += '<div role="gridcell" class="mbsc-cal-cell mbsc-cal-week-nr">' + _ + "</div>", _++), N += '<div role="gridcell" tabindex="-1" aria-label="' + (v ? ie.todayText + ", " : "") + ie.dayNames[s.getDay()] + ", " + ie.monthNames[c] + " " + d + " " + (m.ariaLabel ? ", " + m.ariaLabel : "") + '"' + (b && !oe ? ' aria-hidden="true"' : ' data-full="' + u + '"') + (f ? ' aria-selected="true"' : "") + (h ? "" : ' aria-disabled="true"') + ' class="mbsc-cal-cell mbsc-cal-day mbsc-cal-day' + x % 7 + " " + (ie.dayClass || "") + " " + (f ? T : "") + (v ? " " + ie.todayClass : "") + (r ? " " + r : "") + (1 == d ? " mbsc-cal-day-first" : "") + (d == g ? " mbsc-cal-day-last" : "") + (b ? " mbsc-cal-day-diff" : "") + (h ? " mbsc-btn-e" : " mbsc-disabled") + (m.marked ? " mbsc-cal-day-marked" : "") + (m.background ? " mbsc-cal-day-colored" : "") + '"><div class="mbsc-cal-cell-i mbsc-cal-day-i"><div class="mbsc-cal-day-date mbsc-cal-cell-txt"' + (m.background ? ' style="background:' + m.background + ";color:" + nt(m.background) + '"' : "") + ">" + d + "</div>" + e._getText(n, .06) + (m.markup || "") + "</div></div>";
                return N += "</div></div></div>"
            }

            function He(e, t, a) {
                var n, s = ie.getYear(e),
                    r = ie.getMonth(e),
                    i = C ? C.pos : 0,
                    o = "";
                if (p)
                    for (t || (le("onMonthLoading", {
                            year: s,
                            month: r
                        }), le("onPageLoading", {
                            firstDay: e
                        })), Ee(e), n = 0; n < ne; n++) o += je(Ke(e, n - ae - Q), i + n - Q);
                return X = void 0, a && C && (C.$scroller.html(o), le("onMonthLoaded", {
                    year: s,
                    month: r
                }), le("onPageLoaded", {
                    firstDay: e
                })), o
            }

            function Le(e, t) {
                C.$active && C.$active.attr("tabindex", "-1"), C.$active = pe('.mbsc-cal-slide-a .mbsc-cal-day[data-full="' + e.getFullYear() + "-" + (e.getMonth() + 1) + "-" + e.getDate() + '"]', C.$scroller).attr("tabindex", "0"), t && C.$active.length && C.$active[0].focus()
            }

            function ze(e, t) {
                pe(".mbsc-selected", t).removeClass(T).removeAttr("aria-selected"), pe('.mbsc-cal-cell[data-val="' + e + '"]', t).addClass(T).attr("aria-selected", "true")
            }

            function Ye(t, a, n, s) {
                var r, i;
                t < $ && (t = $), t > H && (t = H), ("calendar" === me || a) && (S && p && (i = Pe(Be(t)), G && (t < Ke(_, -ae) || t >= Ke(_, ee - ae)) && (r = E ? ie.getMonth(i) - ie.getMonth(_) + 12 * (ie.getYear(i) - ie.getYear(_)) : Math.trunc(Math.round((i - _) / 864e5) / (7 * p))) && (C.queue = [], C.focus = s && n, e._isSetDate = !0, Ge(C, r, n), e._isSetDate = !1), r && n || Le(t, s), a || function(t) {
                    var a = C && C.$scroller;
                    ie.highlight && C && (pe(".mbsc-selected", a).removeClass(T).removeAttr("aria-selected"), (null !== ie.defaultValue || e._hasValue) && pe('.mbsc-cal-day[data-full="' + t.getFullYear() + "-" + (t.getMonth() + 1) + "-" + t.getDate() + '"]', a).addClass(T).attr("aria-selected", "true"))
                }(t), E || $e(t, !0), u = t, G = !0), e._onSetDate(t, r))
            }

            function $e(e, t) {
                var a, n, i, o = ie.getYear(e),
                    l = ie.getMonth(e),
                    d = o + Te;
                if (O) {
                    if (ze(l, q.$scroller), ze(o, xe.$scroller), Ge(xe, Math.floor(o / 12) - Math.floor(ie.getYear(xe.first) / 12), !0), pe(".mbsc-cal-cell", q.$scroller).removeClass("mbsc-disabled"), o === U)
                        for (a = 0; a < W; a++) pe('.mbsc-cal-cell[data-val="' + a + '"]', q.$scroller).addClass("mbsc-disabled");
                    if (o === Y)
                        for (a = z + 1; a <= 12; a++) pe('.mbsc-cal-cell[data-val="' + a + '"]', q.$scroller).addClass("mbsc-disabled")
                }
                for (t || (Re(pe(".mbsc-cal-prev-m", s), Ke(e, -ae) <= $), Re(pe(".mbsc-cal-next-m", s), Ke(e, ee - ae) > H), Re(pe(".mbsc-cal-prev-y", s), ie.getDate(o - 1, l + 1, 1) <= $), Re(pe(".mbsc-cal-next-y", s), ie.getDate(o + 1, l, 1) > H)), c.attr("aria-label", o).html(d), a = 0; a < ee; a++) e = ie.getDate(o, l - ae + a, 1), n = ie.getYear(e), i = ie.getMonth(e), d = n + Te, r.eq(a).attr("aria-label", ie.monthNames[i] + (ve ? "" : " " + o)).html((!ve && be < J ? d + " " : "") + K[i] + (!ve && be > J ? " " + d : ""))
            }

            function Re(e, t) {
                t ? e.addClass(x).attr("aria-disabled", "true") : e.removeClass(x).removeAttr("aria-disabled")
            }

            function We(t) {
                var a = e.getDate(!0),
                    n = t.attr("data-full"),
                    s = n ? n.split("-") : [],
                    r = Z(s[0], s[1] - 1, s[2]),
                    i = Z(r.getFullYear(), r.getMonth(), r.getDate(), a.getHours(), a.getMinutes(), a.getSeconds()),
                    o = t.hasClass("mbsc-selected");
                !oe && t.hasClass("mbsc-cal-day-diff") || !1 === le("onDayChange", ge(w[n], {
                    date: i,
                    target: t[0],
                    selected: o
                })) || ie.readonly || t.hasClass("mbsc-disabled") || e._selectDay(t, r, i, o)
            }

            function Ue(e) {
                Me(i), Ye(ie.getDate(ie.getYear(C.first), e.attr("data-val"), 1), !0, !0)
            }

            function Je(e) {
                Me(d), Ye(ie.getDate(e.attr("data-val"), ie.getMonth(C.first), 1), !0, !0)
            }

            function Be(e) {
                var t = ie.getYear(e),
                    a = ie.getMonth(e),
                    n = e.getDay(),
                    s = 0;
                return ie.firstDay - n > 0 && (s = 7), E ? ie.getDate(t, a, 1) : ie.getDate(t, a, ie.firstDay - s - n + ie.getDay(e))
            }

            function Ke(e, t) {
                var a = ie.getYear(e),
                    n = ie.getMonth(e),
                    s = ie.getDay(e);
                return E ? ie.getDate(a, n + t, 1) : ie.getDate(a, n, s + t * p * 7)
            }

            function qe(e, t) {
                var a = 12 * Math.floor(ie.getYear(e) / 12);
                return ie.getDate(a + 12 * t, 0, 1)
            }

            function Ge(t, a, n, s) {
                a && e._isVisible && (t.queue.push(arguments), 1 == t.queue.length && function e(t, a, n, s) {
                    var r, i, o = "",
                        l = t.$scroller,
                        c = t.buffer,
                        d = t.offset,
                        u = t.pages,
                        m = t.total,
                        p = t.first,
                        h = t.genPage,
                        f = t.getFirst,
                        v = a > 0 ? Math.min(a, c) : Math.max(a, -c),
                        b = t.pos * se + v - a + d,
                        g = Math.abs(a) > c;
                    t.callback && (t.load(), t.callback());
                    t.first = f(p, a);
                    t.pos += v * se;
                    t.changing = !0;
                    t.load = function() {
                        if (g) {
                            for (r = 0; r < u; r++) o += h(f(p, i = a + r - d), b + i);
                            a > 0 ? (pe(".mbsc-cal-slide", l).slice(-u).remove(), l.append(o)) : a < 0 && (pe(".mbsc-cal-slide", l).slice(0, u).remove(), l.prepend(o))
                        }
                    };
                    t.callback = function() {
                        var n = Math.abs(v),
                            o = "";
                        for (r = 0; r < n; r++) o += h(f(p, i = a + r - d - c + (a > 0 ? m - n : 0)), b + i);
                        if (a > 0 ? (l.append(o), pe(".mbsc-cal-slide", l).slice(0, v).remove()) : a < 0 && (l.prepend(o), pe(".mbsc-cal-slide", l).slice(v).remove()), g) {
                            for (o = "", r = 0; r < n; r++) o += h(f(p, i = a + r - d - c + (a > 0 ? 0 : m - n)), b + i);
                            a > 0 ? (pe(".mbsc-cal-slide", l).slice(0, v).remove(), l.prepend(o)) : a < 0 && (pe(".mbsc-cal-slide", l).slice(v).remove(), l.append(o))
                        }
                        Ze(t), s && s(), t.callback = null, t.load = null, t.queue.shift(), g = !1, t.queue.length ? e.apply(this, t.queue[0]) : (t.changing = !1, t.onAfterChange(t.first))
                    };
                    t.onBeforeChange(t.first);
                    t.load();
                    t.scroller.scroll(-t.pos * t.size, n ? 200 : 0, !1, t.callback)
                }(t, a, n, s))
            }

            function Xe(t, a, n, s, r, i, o, l, c, d, u, m, p) {
                var h = F ? "Y" : "X",
                    f = {
                        $scroller: pe(".mbsc-cal-scroll", t),
                        queue: [],
                        buffer: s,
                        offset: r,
                        pages: i,
                        first: l,
                        total: o,
                        pos: 0,
                        min: a,
                        max: n,
                        genPage: m,
                        getFirst: p,
                        onBeforeChange: d,
                        onAfterChange: u
                    };
                return f.scroller = new xt(t, {
                    axis: h,
                    easing: "",
                    contSize: 0,
                    maxSnapScroll: s,
                    mousewheel: ie.mousewheel,
                    time: 200,
                    lock: !0,
                    rtl: I,
                    stopProp: !1,
                    minScroll: 0,
                    maxScroll: 0,
                    onBtnTap: function(e) {
                        "touchend" == e.domEvent.type && B(), c(pe(e.target))
                    },
                    onAnimationEnd: function(e) {
                        m && Ge(f, Math.round((-f.pos * f.size - e["pos" + h]) / f.size) * se)
                    }
                }), e._scrollers.push(f.scroller), f
            }

            function Ze(e) {
                var t, a = 0,
                    n = 0,
                    s = e.first;
                if (e.getFirst) {
                    for (a = e.buffer, n = e.buffer; n && e.getFirst(s, n + e.pages - e.offset - 1) > e.max;) n--;
                    for (; a && e.getFirst(s, 1 - a - e.offset) <= e.min;) a--
                }
                t = Math.round(h / e.pages), P && e.size != t && e.$scroller[F ? "height" : "width"](t), ge(e.scroller.settings, {
                    snap: t,
                    minScroll: (-e.pos * se - n) * t,
                    maxScroll: (-e.pos * se + a) * t
                }), e.size = t, e.scroller.refresh()
            }

            function Qe(t) {
                e._isVisible && S && p && (C && C.changing ? X = t : He(_, t, !0)), e._onRefresh(t)
            }
            return b = {}, g = [], le = e.trigger, t = pe(Ce), we = ge({}, e.settings), ye = (ie = ge(e.settings, St, we)).controls.join(","), I = ie.rtl, Q = ie.pageBuffer, he = ie.weekCounter, p = ie.weeks, E = 6 == p, F = "vertical" == ie.calendarScroll, v = "inline" == ie.display ? t.is("div") ? t : t.parent() : e._$window, fe = "full" == ie.weekDays ? "" : "min" == ie.weekDays ? "Min" : "Short", _e = ie.layout || ("inline" == ie.display || /top|bottom/.test(ie.display) && ie.touchUi ? "liquid" : ""), f = (P = "liquid" == _e) ? null : ie.calendarWidth, se = I && !F ? -1 : 1, x = "mbsc-disabled " + (ie.disabledClass || ""), y = "mbsc-selected " + (ie.selectedTabClass || ""), T = "mbsc-selected " + (ie.selectedClass || ""), ye.match(/calendar/) && (b.calendar = 1, S = !0), ye.match(/date/) && !S && (b.date = 1), ye.match(/time/) && (b.time = 1), ie.controls.forEach(function(e) {
                b[e] && g.push(e)
            }), O = ie.quickNav && S && E, ve = ie.yearChange && E, P && S && "center" == ie.display && (e._isFullScreen = !0), ie.layout = _e, ie.preset = (b.date || S ? "date" : "") + (b.time ? "time" : ""), m = Mt.call(this, e), K = ve ? ie.monthNamesShort : ie.monthNames, Te = ie.yearSuffix || "", J = (ie.dateWheels || ie.dateFormat).search(/m/i), be = (ie.dateWheels || ie.dateFormat).search(/y/i), M = e._format, ie.min && ($ = te(re(ie.min, M, ie)), U = ie.getYear($), W = ie.getMonth($), R = ie.getDate(12 * Math.floor(U / 12), 0, 1)), ie.max && (H = te(re(ie.max, M, ie)), Y = ie.getYear(H), z = ie.getMonth(H), L = ie.getDate(12 * Math.floor(Y / 12), 0, 1)), e.refresh = function() {
                Qe(!1)
            }, e.redraw = function() {
                Qe(!0)
            }, e.navigate = function(e, t) {
                Ye(e, !0, t)
            }, e.changeTab = function(t) {
                e._isVisible && b[t] && me != t && (me = t, pe(".mbsc-cal-tab", s).removeClass(y).removeAttr("aria-selected"), pe('.mbsc-cal-tab[data-control="' + t + '"]', s).addClass(y).attr("aria-selected", "true"), l.addClass("mbsc-cal-h"), b[me].removeClass("mbsc-cal-h"), "calendar" == me && Ye(e.getDate(!0), !1, !0), e._showDayPicker(), e.trigger("onTabChange", {
                    tab: me
                }))
            }, e._onGenMonth = A, e._onSelectShow = A, e._onSetDate = A, e._onRefresh = A, e._getDayProps = A, e._prepareObj = ke, e._showDayPicker = function() {
                O && (Me(d), Me(i))
            }, e._selectDay = e.__selectDay = function(t, a, n) {
                var s = e.live;
                G = ie.outerMonthChange, V = !0, e.setDate(n, s, 1e3, !s, !0), s && le("onSet", {
                    valueText: e._value
                })
            }, ge(m, {
                labels: null,
                compClass: "mbsc-calendar mbsc-dt mbsc-sc",
                onMarkupReady: function(t) {
                    var n, m, x, T = 0;
                    s = pe(t.target), o = pe(".mbsc-fr-c", s), w = {}, u = e.getDate(!0), S && (D = !(!ie.marked && !ie.data), k = ie.showEventCount || !(!ie.events && !ie.labels), G = !0, me = "calendar", ee = "auto" == ie.months ? Math.max(1, Math.min(3, Math.floor((f || (n = v)[0].innerWidth || n.innerWidth()) / 280))) : +ie.months, ne = ee + 2 * Q, ae = 0, F = F && ee < 2, oe = void 0 === ie.showOuterDays ? ee < 2 && !F : ie.showOuterDays, h = f || 280 * ee, _ = Pe(Be(u)), o.append(function() {
                            var e, t, a, n, s = "",
                                r = I ? ie.btnCalNextClass : ie.btnCalPrevClass,
                                i = I ? ie.btnCalPrevClass : ie.btnCalNextClass;
                            for (n = '<div class="mbsc-cal-btn-w"><div data-step="-1" role="button" tabindex="0" aria-label="' + ie.prevMonthText + '" class="' + r + ' mbsc-cal-prev mbsc-cal-prev-m mbsc-cal-btn mbsc-fr-btn mbsc-fr-btn-e"></div>', t = 0; t < (p ? ee : 1); t++) n += '<div role="button" class="mbsc-cal-month"></div>';
                            if (n += '<div data-step="1" role="button" tabindex="0" aria-label="' + ie.nextMonthText + '" class="' + i + ' mbsc-cal-next mbsc-cal-next-m mbsc-cal-btn mbsc-fr-btn mbsc-fr-btn-e"></div></div>', ve && (s = '<div class="mbsc-cal-btn-w"><div data-step="-12" role="button" tabindex="0" aria-label="' + ie.prevYearText + '" class="' + r + ' mbsc-cal-prev mbsc-cal-prev-y mbsc-cal-btn mbsc-fr-btn mbsc-fr-btn-e"></div><div role="button" class="mbsc-cal-year"></div><div data-step="12" role="button" tabindex="0" aria-label="' + ie.nextYearText + '" class="' + i + ' mbsc-cal-next mbsc-cal-next-y mbsc-cal-btn mbsc-fr-btn mbsc-fr-btn-e"></div></div>'), e = '<div class="mbsc-w-p mbsc-cal-c"><div class="mbsc-cal ' + (E ? "" : " mbsc-cal-week-view") + (ee > 1 ? " mbsc-cal-multi " : "") + (he ? " mbsc-cal-weeks " : "") + (F ? " mbsc-cal-vertical" : "") + (D ? " mbsc-cal-has-marks" : "") + (k ? " mbsc-cal-has-txt" : "") + (oe ? "" : " mbsc-cal-hide-diff ") + (ie.calendarClass || "") + '"' + (P ? "" : ' style="min-width:' + (f || 280 * ee) + 'px;"') + '><div class="mbsc-cal-hdr">' + (be < J || ee > 1 ? s + n : n + s) + "</div>", p) {
                                for (e += '<div class="mbsc-cal-body"><div class="mbsc-cal-day-picker"><div class="mbsc-cal-days-c">', a = 0; a < ee; a++) {
                                    for (e += '<div class="mbsc-cal-days">', t = 0; t < 7; t++) e += '<div aria-label="' + ie.dayNames[(t + ie.firstDay) % 7] + '">' + ie["dayNames" + fe][(t + ie.firstDay) % 7] + "</div>";
                                    e += "</div>"
                                }
                                e += '</div><div class="mbsc-cal-scroll-c mbsc-cal-day-scroll-c ' + (ie.calendarClass || "") + '"' + (ie.calendarHeight ? ' style="height:' + ie.calendarHeight + 'px"' : "") + '><div class="mbsc-cal-scroll" style="width:' + 100 / ee + '%">' + He(_) + "</div></div>"
                            }
                            if (e += "</div>", O) {
                                for (e += '<div class="mbsc-cal-month-picker mbsc-cal-picker mbsc-cal-h"><div class="mbsc-cal-scroll-c ' + (ie.calendarClass || "") + '"><div class="mbsc-cal-scroll">', t = 0; t < 3; t++) {
                                    for (e += '<div class="mbsc-cal-slide"' + Ve(t - 1) + '><div role="grid" class="mbsc-cal-table"><div class="mbsc-cal-row">', a = 0; a < 12; a++) a && a % 3 == 0 && (e += '</div><div class="mbsc-cal-row">'), e += '<div role="gridcell"' + (1 == t ? ' tabindex="-1" aria-label="' + ie.monthNames[a] + '" data-val="' + a + '"' : "") + ' class="mbsc-cal-cell' + (1 == t ? " mbsc-btn-e" : "") + '"><div class="mbsc-cal-cell-i mbsc-cal-cell-txt">' + (1 == t ? ie.monthNamesShort[a] : "&nbsp;") + "</div></div>";
                                    e += "</div></div></div>"
                                }
                                for (e += "</div></div></div>", e += '<div class="mbsc-cal-year-picker mbsc-cal-picker mbsc-cal-h"><div class="mbsc-cal-scroll-c ' + (ie.calendarClass || "") + '"><div class="mbsc-cal-scroll">', t = -1; t < 2; t++) e += Fe(qe(_, t), t);
                                e += "</div></div></div>"
                            }
                            return e += "</div></div></div>"
                        }()), r = pe(".mbsc-cal-month", s), c = pe(".mbsc-cal-year", s), a = pe(".mbsc-cal-day-scroll-c", s)), O && (d = pe(".mbsc-cal-year-picker", s), i = pe(".mbsc-cal-month-picker", s)), l = pe(".mbsc-w-p", s), g.length > 1 && o.before((m = '<div class="mbsc-cal-tabs-c"><ul class="mbsc-cal-tabs" role="tablist">', g.forEach(function(e, t) {
                            x = ie[("calendar" == e ? "date" : e) + "Text"], m += '<li role="tab" aria-controls="' + Ce.id + "-mbsc-pnl-" + t + '" class="mbsc-cal-tab mbsc-fr-btn-e ' + (t ? "" : y) + '" data-control="' + e + '"' + (ie.tabLink ? '><a href="#">' + x + "</a>" : ' tabindex="0">' + x) + "</li>"
                        }), m += "</ul></div>")), ["date", "time", "calendar"].forEach(function(e) {
                            b[e] ? (b[e] = l.eq(T).addClass("mbsc-cal-h"), T++) : "date" == e && !b.date && S && (l.eq(T).remove(), T++)
                        }), g.forEach(function(e) {
                            o.append(b[e])
                        }), !S && b.date && b.date.css("position", "relative"), e._scrollers = [],
                        function() {
                            if (S && p) {
                                var t = pe(".mbsc-cal-scroll-c", s);
                                C = Xe(t[0], $, H, Q, ae, ee, ne, _, We, Ae, Ie, je, Ke), O && (q = Xe(t[1], null, null, 1, 0, 1, 3, _, Ue), xe = Xe(t[2], R, L, 1, 0, 1, 3, _, Je, A, A, Fe, qe), e.tap(r, function() {
                                    Se(i), Me(d)
                                }), e.tap(c, function() {
                                    Se(d), Me(i)
                                })), ot(pe(".mbsc-cal-btn", s), function(e, t, a) {
                                    Ge(C, t, !0, a)
                                }), Ie(_), null === ie.defaultValue && !e._hasValue || e._multiple || (e._activeElm = C.$active[0]), a.on("keydown", function(e) {
                                    var t, a = ie.getYear(u),
                                        n = ie.getMonth(u),
                                        s = ie.getDay(u);
                                    switch (e.keyCode) {
                                        case 32:
                                            We(C.$active);
                                            break;
                                        case 37:
                                            t = ie.getDate(a, n, s - 1);
                                            break;
                                        case 39:
                                            t = ie.getDate(a, n, s + 1);
                                            break;
                                        case 38:
                                            t = ie.getDate(a, n, s - 7);
                                            break;
                                        case 40:
                                            t = ie.getDate(a, n, s + 7);
                                            break;
                                        case 36:
                                            t = ie.getDate(a, n, 1);
                                            break;
                                        case 35:
                                            t = ie.getDate(a, n + 1, 0);
                                            break;
                                        case 33:
                                            t = e.altKey ? ie.getDate(a - 1, n, s) : E ? ie.getDate(a, n - 1, s) : ie.getDate(a, n, s - 7 * p);
                                            break;
                                        case 34:
                                            t = e.altKey ? ie.getDate(a + 1, n, s) : E ? ie.getDate(a, n + 1, s) : ie.getDate(a, n, s + 7 * p)
                                    }
                                    t && (e.preventDefault(), Ye(t, !0, !1, !0))
                                })
                            }
                            e.tap(pe(".mbsc-cal-tab", s), function() {
                                e.changeTab(pe(this).attr("data-control"))
                            })
                        }()
                },
                onShow: function() {
                    S && p && $e(E ? _ : u)
                },
                onHide: function() {
                    e._scrollers.forEach(function(e) {
                        e.destroy()
                    }), C = null, q = null, xe = null, me = null
                },
                onValidated: function(t) {
                    var a, n, s = t.index,
                        r = e._order;
                    n = e.getDate(!0), V ? a = "calendar" : void 0 !== s && (a = r.dd == s || r.d == s || r.m == s || r.y == s ? "date" : "time"), le("onSetDate", {
                        date: n,
                        control: a
                    }), "time" !== a && Ye(n, !1, !!t.time, V && !e._multiple), V = !1
                },
                onPosition: function(t) {
                    var n, i, o, c, d = t.windowHeight,
                        u = (t.hasTabs || !0 === ie.tabs || !1 !== ie.tabs && P) && g.length > 1;
                    if (P && (t.windowWidth >= ie.breakPointMd ? pe(t.target).addClass("mbsc-fr-md") : pe(t.target).removeClass("mbsc-fr-md")), u ? (s.addClass("mbsc-cal-tabbed"), me = pe(".mbsc-cal-tab.mbsc-selected", s).attr("data-control"), l.addClass("mbsc-cal-h"), b[me].removeClass("mbsc-cal-h")) : (me = "calendar", s.removeClass("mbsc-cal-tabbed"), l.removeClass("mbsc-cal-h")), e._isFullScreen && (a.height(""), d >= (c = t.popup.offsetHeight) && a.height(d - c + a[0].offsetHeight)), S && p) {
                        if ((P || F || u) && (h = a[0][F ? "offsetHeight" : "offsetWidth"]), P && ve)
                            for (K = ie.maxMonthWidth > r[0].offsetWidth ? ie.monthNamesShort : ie.monthNames, i = ie.getYear(_), o = ie.getMonth(_), n = 0; n < ee; n++) r.eq(n).text(K[ie.getMonth(ie.getDate(i, o - ae + n, 1))]);
                        Ze(C)
                    }
                    O && (Ze(q), Ze(xe))
                }
            })
        },
        kt = {};
    Tt.calendar = function(e) {
        function t(e) {
            return Z(e.getFullYear(), e.getMonth(), e.getDate())
        }

        function a(e) {
            var a, n, s = null;
            if (f = {}, e && e.length)
                for (n = 0; n < e.length; n++) a = re(e[n], i, d, d.isoParts), s = s || a, f[t(a)] = a;
            return s
        }

        function n() {
            e.redraw()
        }
        var s, r, i, o, l, c = ge({}, e.settings),
            d = ge(e.settings, kt, c),
            u = "mbsc-selected " + (d.selectedClass || ""),
            m = d.defaultValue,
            p = "multiple" == d.select || d.select > 1 || "week" == d.selectType,
            h = j(d.select) ? d.select : 1 / 0,
            f = {};
        return s = Dt.call(this, e), o = void 0 === d.firstSelectDay ? d.firstDay : d.firstSelectDay, i = e._format, p && a(m), e._multiple = p, e._getDayProps = function(e) {
            return {
                selected: p ? void 0 !== f[e] : void 0
            }
        }, e._selectDay = function(t, a, s, i) {
            if (d.setOnDayTap && "multiple" != d.select && "inline" != d.display) return e.setDate(s), void e.select();
            if (p)
                if ("week" == d.selectType) {
                    var l, c, m = a.getDay() - o;
                    for (m = m < 0 ? 7 + m : m, "multiple" != d.select && (f = {}), l = 0; l < 7; l++) c = Z(a.getFullYear(), a.getMonth(), a.getDate() - m + l), i ? delete f[c] : I(f).length / 7 < h && (f[c] = c);
                    n()
                } else {
                    var v = pe('.mbsc-cal-day[data-full="' + t.attr("data-full") + '"]', r);
                    i ? (v.removeClass(u).removeAttr("aria-selected"), delete f[a]) : I(f).length < h && (v.addClass(u).attr("aria-selected", "true"), f[a] = a)
                }
            e.__selectDay(t, a, s)
        }, e.setVal = function(t, s, r, i, o) {
            p && (t = a(t)), e._setVal(t, s, r, i, o), p && n()
        }, e.getVal = function(t) {
            var a, n = [];
            if (p) {
                for (a in f) n.push(se(f[a], d, i));
                return n
            }
            return se(e.getDate(t), d, i)
        }, ge({}, s, {
            highlight: !p,
            outerMonthChange: !p,
            parseValue: function(e) {
                return p && e && "string" == typeof e && (e = a(e.split(","))), p && m && m.length && (d.defaultValue = m[0]), s.parseValue.call(this, e)
            },
            formatValue: function(t) {
                var a, n = [];
                if (p) {
                    for (a in f) n.push(Q(i, f[a], d));
                    return n.join(", ")
                }
                return s.formatValue.call(this, t, e)
            },
            onClear: function() {
                p && (f = {}, n())
            },
            onBeforeShow: function() {
                void 0 !== d.setOnDayTap || d.buttons && d.buttons.length || 1 != d.controls.length || (d.setOnDayTap = !0), d.setOnDayTap && "inline" != d.display && (d.outerMonthChange = !1), d.counter && p && (d.headerText = function() {
                    var e = 0,
                        t = "week" == d.selectType ? 7 : 1;
                    return pe.each(f, function() {
                        e++
                    }), ((e = Math.round(e / t)) > 1 && d.selectedPluralText || d.selectedText).replace(/{count}/, e)
                })
            },
            onMarkupReady: function(e) {
                s.onMarkupReady.call(this, e), r = pe(e.target), p && (pe(".mbsc-fr-hdr", r).attr("aria-live", "off"), l = ge({}, f))
            },
            onCancel: function() {
                !e.live && p && (f = ge({}, l))
            }
        })
    };
    var Ot = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var a = arguments[t];
                for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n])
            }
            return e
        },
        Nt = a.bool,
        Vt = a.func,
        Pt = a.number,
        Et = {
            controls: a.arrayOf(a.oneOf(["time", "date", "calendar"])),
            firstSelectDay: Pt,
            select: a.oneOfType([Pt, a.oneOf(["single", "multiple"])]),
            selectType: a.oneOf(["day", "week"]),
            setOnDayTap: Nt,
            onEventSelect: Vt,
            onSetDate: Vt
        },
        At = function(e) {
            function t(e) {
                i(this, t);
                var a = u(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                return a.mbscInit = {
                    preset: "calendar"
                }, a
            }
            return d(t, Ze), t
        }();
    At.propTypes = Ot({}, At.propTypes, He, Le, ze, Et), n.Calendar = At;
    var It = "mbsc-input-wrap",
        Ft = ["touchstart", "touchmove", "touchend", "touchcancel", "mousedown", "mousemove", "mouseup", "mouseleave"],
        jt = {
            tap: !Je
        },
        Ht = void 0;

    function Lt(e, t) {
        var a = {},
            n = e.parent(),
            s = n.find(".mbsc-err-msg"),
            r = e.attr("data-icon-align") || "left",
            i = e.attr("data-icon");
        n.hasClass(It) ? n = n.parent() : pe('<span class="' + It + '"></span>').insertAfter(e).append(e), s && n.find("." + It).append(s), i && (-1 !== i.indexOf("{") ? a = JSON.parse(i) : a[r] = i), (i || t) && (ge(a, t), n.addClass((a.right ? "mbsc-ic-right " : "") + (a.left ? " mbsc-ic-left" : "")).find("." + It).append(a.left ? '<span class="mbsc-input-ic mbsc-left-ic mbsc-ic mbsc-ic-' + a.left + '"></span>' : "").append(a.right ? '<span class="mbsc-input-ic mbsc-right-ic mbsc-ic mbsc-ic-' + a.right + '"></span>' : ""))
    }

    function zt(e, t) {
        "button" != t && "submit" != t && "segmented" != t && (e.addClass("mbsc-control-w").find("label").addClass("mbsc-label").each(function(e, t) {
            pe(t).attr("title", pe(t).text())
        }), e.contents().filter(function() {
            return 3 == this.nodeType && this.nodeValue && /\S/.test(this.nodeValue)
        }).each(function() {
            pe('<span class="mbsc-label" title="' + this.textContent.trim() + '"></span>').insertAfter(this).append(this)
        }))
    }

    function Yt(e) {
        var t = e[0],
            a = e.attr("data-role"),
            n = e.attr("type") || t.nodeName.toLowerCase();
        return /(switch|range|rating|segmented|stepper)/.test(a) && (n = a), n
    }

    function $t(e) {
        var t = n.themes.form[e];
        return t && t.addRipple ? t : null
    }
    var Rt = function() {
            function e(t, a) {
                var s = this;
                i(this, e);
                var r = ge({}, jt, n.settings, a),
                    o = pe(t),
                    l = o.parent(),
                    c = l.hasClass("mbsc-input-wrap") ? l.parent() : l,
                    d = o.next().hasClass("mbsc-fr") ? o.next() : null,
                    u = Yt(o);
                d && d.insertAfter(c), zt(c, u), o.addClass("mbsc-control"), Ft.forEach(function(e) {
                    t.addEventListener(e, s)
                }), this.settings = r, this._type = u, this._elm = t, this._$elm = o, this._$parent = c, this._$frame = d, this._ripple = $t(r.theme), t.mbscInst = this
            }
            return o(e, [{
                key: "destroy",
                value: function() {
                    var e = this;
                    this._$elm.removeClass("mbsc-control"), Ft.forEach(function(t) {
                        e._elm.removeEventListener(t, e)
                    }), delete this._elm.mbscInst
                }
            }, {
                key: "option",
                value: function(e) {
                    ge(this.settings, e), this._ripple = $t(this.settings.theme)
                }
            }, {
                key: "handleEvent",
                value: function(e) {
                    switch (e.type) {
                        case "touchstart":
                        case "mousedown":
                            this._onStart(e);
                            break;
                        case "touchmove":
                        case "mousemove":
                            this._onMove(e);
                            break;
                        case "touchend":
                        case "touchcancel":
                        case "mouseup":
                        case "mouseleave":
                            this._onEnd(e)
                    }
                }
            }, {
                key: "_addRipple",
                value: function(e) {
                    this._ripple && this._$rippleElm && this._ripple.addRipple(this._$rippleElm, e)
                }
            }, {
                key: "_removeRipple",
                value: function() {
                    this._ripple && this._$rippleElm && this._ripple.removeRipple()
                }
            }, {
                key: "_onStart",
                value: function(e) {
                    var t = this._elm;
                    tt(e, t) && (this._startX = q(e, "X"), this._startY = q(e, "Y"), Ht && Ht.removeClass("mbsc-active"), t.disabled || (this._isActive = !0, (Ht = this._$elm).addClass("mbsc-active"), this._addRipple(e)))
                }
            }, {
                key: "_onMove",
                value: function(e) {
                    (this._isActive && Math.abs(q(e, "X") - this._startX) > 9 || Math.abs(q(e, "Y") - this._startY) > 9) && (this._$elm.removeClass("mbsc-active"), this._removeRipple(), this._isActive = !1)
                }
            }, {
                key: "_onEnd",
                value: function(e) {
                    var t = this,
                        a = this._elm,
                        n = this._type;
                    this._isActive && this.settings.tap && "touchend" == e.type && !a.readOnly && (a.focus(), /(button|submit|checkbox|switch|radio)/.test(n) && e.preventDefault(), /select/.test(n) || K(e, a)), this._isActive && setTimeout(function() {
                        t._$elm.removeClass("mbsc-active"), t._removeRipple()
                    }, 100), this._isActive = !1, Ht = null
                }
            }]), e
        }(),
        Wt = function(e) {
            function t(e, a) {
                i(this, t);
                var n, s, r, o, l, c, d, m, p = u(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, a));
                return n = p, s = p._$parent, r = p._$elm, o = {}, l = r[0], c = r.attr("data-password-toggle"), d = r.attr("data-icon-show") || "eye", m = r.attr("data-icon-hide") || "eye-blocked", c && (o.right = "password" == l.type ? d : m), Lt(r, o), c && G(n, s.find(".mbsc-right-ic").addClass("mbsc-input-toggle"), function() {
                    "text" == l.type ? (l.type = "password", pe(this).addClass("mbsc-ic-" + d).removeClass("mbsc-ic-" + m)) : (l.type = "text", pe(this).removeClass("mbsc-ic-" + d).addClass("mbsc-ic-" + m))
                }), p._$parent.addClass("mbsc-input"), p
            }
            return d(t, Rt), o(t, [{
                key: "destroy",
                value: function() {
                    c(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "destroy", this).call(this), this._$parent.removeClass("mbsc-ic-left mbsc-ic-right").find(".mbsc-input-ic").remove()
                }
            }]), t
        }(),
        Ut = function(e) {
            function t(e, a) {
                i(this, t);
                var n = u(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, a)),
                    s = n._$elm,
                    r = s.attr("data-icon");
                return s.addClass("mbsc-btn").find(".mbsc-btn-ic").remove(), r && (s.prepend('<span class="mbsc-btn-ic mbsc-ic mbsc-ic-' + r + '"></span>'), "" === s.text() && s.addClass("mbsc-btn-icon-only")), n._$rippleElm = s, n
            }
            return d(t, Rt), t
        }(),
        Jt = function(e) {
            function t(e, a) {
                i(this, t);
                var n = u(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, a));
                return n._$parent.prepend(n._$elm).addClass("mbsc-checkbox mbsc-control-w").find(".mbsc-checkbox-box").remove(), n._$elm.after('<span class="mbsc-checkbox-box"></span>'), n
            }
            return d(t, Rt), t
        }(),
        Bt = function(e) {
            function t(e, a) {
                i(this, t);
                var n = u(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, a));
                return n._$parent.addClass("mbsc-radio mbsc-control-w").find(".mbsc-radio-box").remove(), n._$elm.after('<span class="mbsc-radio-box"><span></span></span>'), n
            }
            return d(t, Rt), t
        }(),
        Kt = function(e) {
            function t(e, a) {
                i(this, t);
                var n = u(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, a)),
                    s = n._$elm,
                    r = n._$parent,
                    o = r.find("input.mbsc-control"),
                    l = o.length ? o : pe('<input tabindex="-1" class="mbsc-control" readonly>');
                return n._$input = l, n._setText = n._setText.bind(n), r.addClass("mbsc-select" + (n._$frame ? " mbsc-select-inline" : "")), s.after(l), l.after('<span class="mbsc-select-ic mbsc-ic mbsc-ic-arrow-down5"></span>'), s.hasClass("mbsc-comp") || (s.on("change", n._setText), n._setText()), n
            }
            return d(t, Wt), o(t, [{
                key: "destroy",
                value: function() {
                    c(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "destroy", this).call(this), this._$parent.find(".mbsc-select-ic").remove(), this._$elm.off("change", this._setText)
                }
            }, {
                key: "_setText",
                value: function() {
                    var e = this._elm;
                    this._$elm.hasClass("mbsc-comp") || this._$input.val(-1 != e.selectedIndex ? e.options[e.selectedIndex].text : "")
                }
            }]), t
        }(),
        qt = ["keydown", "input", "scroll"],
        Gt = void 0;

    function Xt() {
        clearTimeout(Gt), Gt = setTimeout(function() {
            pe("textarea.mbsc-control").each(function() {
                Zt(this)
            })
        }, 100)
    }

    function Zt(e) {
        var t = void 0,
            a = void 0,
            n = void 0,
            s = pe(e).attr("rows") || 6;
        e.offsetHeight && (e.style.height = "", n = e.scrollHeight - e.offsetHeight, t = e.offsetHeight + (n > 0 ? n : 0), (a = Math.round(t / 24)) > s ? (t = 24 * s + (t - 24 * a), pe(e).addClass("mbsc-textarea-scroll")) : pe(e).removeClass("mbsc-textarea-scroll"), t && (e.style.height = t + "px"))
    }
    O && pe(window).on("resize orientationchange", Xt);
    var Qt = function(e) {
            function t(e, a) {
                i(this, t);
                var n = u(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, a));
                return n._$parent.addClass("mbsc-textarea"), qt.forEach(function(e) {
                    n._elm.addEventListener(e, n)
                }), Zt(e), n
            }
            return d(t, Wt), o(t, [{
                key: "destroy",
                value: function() {
                    var e = this;
                    c(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "destroy", this).call(this), qt.forEach(function(t) {
                        e._elm.removeEventListener(t, e)
                    })
                }
            }, {
                key: "handleEvent",
                value: function(e) {
                    switch (c(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "handleEvent", this).call(this, e), e.type) {
                        case "keydown":
                        case "input":
                            this._onInput(e);
                            break;
                        case "scroll":
                            ! function(e) {
                                var t = pe(e);
                                if (!t.hasClass("mbsc-textarea-scroll")) {
                                    var a = e.scrollHeight - e.offsetHeight,
                                        n = e.offsetHeight + a;
                                    Math.round(n / 24) <= (t.attr("rows") || 6) && (e.scrollTop = 0, e.style.height = n + "px")
                                }
                            }(this._elm)
                    }
                }
            }, {
                key: "_onInput",
                value: function() {
                    var e = this;
                    clearTimeout(this._debounce), this._debounce = setTimeout(function() {
                        Zt(e._elm)
                    }, 100)
                }
            }, {
                key: "resize",
                value: function() {
                    clearTimeout(this._debounce), Zt(this._elm)
                }
            }]), t
        }(),
        ea = function(e) {
            function t(e, a) {
                i(this, t);
                var n = u(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, a)),
                    s = void 0,
                    r = void 0,
                    o = n._$elm,
                    l = n._$parent;
                return l.hasClass("mbsc-segmented-item-ready") || (s = pe('<div class="mbsc-segmented"></div>'), l.after(s), l.parent().find('input[name="' + o.attr("name") + '"]').each(function() {
                    var e = pe(this);
                    r = e.parent().addClass("mbsc-segmented-item mbsc-segmented-item-ready"), pe('<span class="mbsc-segmented-content">' + (e.attr("data-icon") ? '<span class="mbsc-ic mbsc-ic-' + e.attr("data-icon") + '"></span>' : "") + "</span>").append(r.contents()).appendTo(r), r.prepend(e), s.append(r)
                })), n._$rippleElm = o.next(), n
            }
            return d(t, Rt), t
        }(),
        ta = function(e, t) {
            var a, s, r, i, o, l, c, d, u, m, p, h, f, v, b = this,
                g = pe(e),
                x = h;

            function T() {
                var t;
                e.disabled || (t = parseFloat(pe(this).val()), w(isNaN(t) ? h : t))
            }

            function y() {
                return e.disabled
            }

            function _(e, t) {
                w(h + t * d)
            }

            function w(e, t, n) {
                x = h, void 0 === t && (t = !0), void 0 === n && (n = t), h = Math.min(o, Math.max(Math.round(e / d) * d, l)), r.removeClass("mbsc-disabled"), t && g.val(h), h == l ? s.addClass("mbsc-disabled") : h == o && a.addClass("mbsc-disabled"), h !== x && n && g.trigger("change")
            }

            function C(e, t) {
                var a = g.attr(e);
                return void 0 === a || "" === a ? t : +a
            }
            xe.call(this, e, t, !0), b.getVal = function() {
                var e = parseFloat(g.val());
                return e = isNaN(e) ? h : e, Math.min(o, Math.max(Math.round(e / d) * d, l))
            }, b.setVal = function(e, t, a) {
                e = parseFloat(e), w(isNaN(e) ? h : e, t, a)
            }, b._init = function() {
                f = g.parent().hasClass("mbsc-stepper"), v = f ? g.closest(".mbsc-stepper-cont") : g.parent(), m = b.settings, l = void 0 === t.min ? C("min", m.min) : t.min, o = void 0 === t.max ? C("max", m.max) : t.max, d = void 0 === t.step ? C("step", m.step) : t.step, i = g.attr("data-val") || m.val, h = Math.min(o, Math.max(Math.round(+e.value / d) * d || 0, l)), p = n.themes.form[m.theme], c = p && p.addRipple ? p : null, f || v.addClass("mbsc-stepper-cont mbsc-control-w").append('<span class="mbsc-segmented mbsc-stepper"></span>').find(".mbsc-stepper").append('<span class="mbsc-segmented-item mbsc-stepper-control mbsc-stepper-minus ' + (h == l ? "mbsc-disabled" : "") + '" data-step="-1" tabindex="0"><span class="mbsc-segmented-content"><span class="mbsc-ic mbsc-ic-minus"></span></span></span>').append('<span class="mbsc-segmented-item mbsc-stepper-control mbsc-stepper-plus ' + (h == o ? "mbsc-disabled" : "") + '"  data-step="1" tabindex="0"><span class="mbsc-segmented-content"> <span class="mbsc-ic mbsc-ic-plus"></span></span></span>').prepend(g), s = pe(".mbsc-stepper-minus", v), a = pe(".mbsc-stepper-plus", v), r = pe(".mbsc-stepper-control", v), f || ("left" == i ? (v.addClass("mbsc-stepper-val-left"), g.after('<span class="mbsc-segmented-item"><span class="mbsc-segmented-content"></span></span>')) : "right" == i ? (v.addClass("mbsc-stepper-val-right"), a.after('<span class="mbsc-segmented-item"><span class="mbsc-segmented-content"></span></span>')) : s.after('<span class="mbsc-segmented-item"><span class="mbsc-segmented-content mbsc-stepper-val"></span></span>')), u || (g.on("change", T), u = ot(r, _, 150, y, !1, c)), g.val(h).attr("data-role", "stepper").attr("min", l).attr("max", o).attr("step", d).addClass("mbsc-control"), e.mbscInst = b
            }, b._destroy = function() {
                g.removeClass("mbsc-control").off("change", T), u.destroy(), delete e.mbscInst
            }, b.init()
        };
    ta.prototype = {
        _class: "stepper",
        _hasDef: !0,
        _hasTheme: !0,
        _defaults: {
            min: 0,
            max: 100,
            step: 1
        }
    }, ve.Stepper = ta;
    var aa = function(e, t, a) {
            var n, s, r, i, o = this;
            xe.call(this, e, t, !0), o.__init = A, o.__destroy = A, o._init = function() {
                var t;
                i = o.settings, n = pe(e), t = !!s, s = (s = n.parent()).hasClass("mbsc-input-wrap") ? s.parent() : s, o._$parent = s, r && s.removeClass(r), r = o._css + " mbsc-progress-w mbsc-control-w mbsc-" + i.theme + (i.baseTheme ? " mbsc-" + i.baseTheme : "") + (i.rtl ? " mbsc-rtl" : " mbsc-ltr"), s.addClass(r), n.addClass("mbsc-control"), o.__init(), t || o._attachChange(), o.refresh(), e.mbscInst = o
            }, o._destroy = function() {
                o.__destroy(), s.removeClass(r), n.removeClass("mbsc-control"), delete e.mbscInst
            }, a || o.init()
        },
        na = function(e, t, a) {
            var n, s, r, i, o, l, c, d, u, m, p, h, f, v, b, g, x, T, y, _, w, C, M, S, D, k, O, N, V, P, E, I, F, j, H = this,
                L = new Date;

            function z(t) {
                "mousedown" === t.type && t.preventDefault(), !tt(t, this) || d && !x || e.disabled || e.readOnly || (O.stopProp && t.stopPropagation(), d = !0, M = !1, m = !1, V = q(t, "X"), P = q(t, "Y"), v = V, c.removeClass("mbsc-progress-anim"), s = S ? pe(".mbsc-slider-handle", this) : i, r && r.removeClass("mbsc-handle-curr"), r = s.parent().addClass("mbsc-active mbsc-handle-curr"), n.addClass("mbsc-active"), g = +s.attr("data-index"), F = c[0].offsetWidth, f = c[0].getBoundingClientRect().left, "mousedown" === t.type && (T = !0, pe(document).on("mousemove", Y).on("mouseup", $)), "mouseenter" === t.type && (x = !0, pe(document).on("mousemove", Y)))
            }

            function Y(e) {
                d && (v = q(e, "X"), b = q(e, "Y"), p = v - V, h = b - P, Math.abs(p) > 5 && (M = !0), (M || T || x) && Math.abs(L - new Date) > 50 && (L = new Date, Q(v, O.round, _ && (!x || T))), M ? e.preventDefault() : Math.abs(h) > 7 && "touchmove" == e.type && Z())
            }

            function $(e) {
                d && (e.preventDefault(), S || c.addClass("mbsc-progress-anim"), x && !T ? ee(j[g], g, !1, !1, !0) : Q(v, !0, !0), M || m || ("touchend" == e.type && B(), H._onTap(j[g])), "mouseup" == e.type && (T = !1), "mouseleave" == e.type && (x = !1), x || Z())
            }

            function W() {
                d && Z()
            }

            function U() {
                var e = H._readValue(pe(this)),
                    t = +pe(this).attr("data-index");
                e !== j[t] && (j[t] = e, D[t] = e, ee(e, t))
            }

            function J(e) {
                e.stopPropagation()
            }

            function K(e) {
                e.preventDefault()
            }

            function G(t) {
                var a;
                if (!e.disabled) {
                    switch (t.keyCode) {
                        case 38:
                        case 39:
                            a = 1;
                            break;
                        case 40:
                        case 37:
                            a = -1
                    }
                    a && (t.preventDefault(), I || (g = +pe(this).attr("data-index"), ee(j[g] + k * a, g, !0), I = setInterval(function() {
                        ee(j[g] + k * a, g, !0)
                    }, 200)))
                }
            }

            function X(e) {
                e.preventDefault(), clearInterval(I), I = null
            }

            function Z() {
                d = !1, r.removeClass("mbsc-active"), n.removeClass("mbsc-active"), pe(document).off("mousemove", Y).off("mouseup", $)
            }

            function Q(e, t, a) {
                var n = t ? Math.min(Math[H._rounding || "round"](Math.max(100 * (e - f) / F, 0) / N / k) * k * 100 / (w - C + u), 100) : Math.max(0, Math.min(100 * (e - f) / F, 100));
                y && (n = 100 - n), ee(Math.round((C - u + n / N) * E) / E, g, a, n)
            }

            function ee(e, t, a, n, s, r) {
                var o = i.eq(t),
                    l = o.parent();
                e = Math.min(w, Math.max(e, C)), void 0 === r && (r = a), H._update ? e = H._update(e, j, t, n, S, s, l) : l.css({
                    left: y ? "auto" : (n || R(e, C, w)) + "%",
                    right: y ? (n || R(e, C, w)) + "%" : "auto"
                }), e > C ? l.removeClass("mbsc-slider-start") : (j[t] > C || s) && l.addClass("mbsc-slider-start"), a && D[t] != e && (m = !0, D[t] = e, j[t] = e, H._fillValue(e, t, r)), o.attr("aria-valuenow", e)
            }
            aa.call(this, e, t, !0), H._onTap = A, H.___init = A, H.___destroy = A, H._attachChange = function() {
                n.on(O.changeEvent, U)
            }, H.__init = function() {
                var e;
                i && (e = !0, i.parent().remove()), H.___init(), l = H._$parent, c = H._$track, n = l.find("input"), O = H.settings, C = H._min, w = H._max, u = H._base || 0, k = H._step, _ = H._live, E = k % 1 != 0 ? 100 / (100 * +(k % 1).toFixed(2)) : 1, N = 100 / (w - C + u) || 100, S = n.length > 1, y = O.rtl, j = [], D = [], n.each(function(e) {
                    j[e] = H._readValue(pe(this)), pe(this).attr("data-index", e)
                }), i = l.find(".mbsc-slider-handle"), o = l.find(S ? ".mbsc-slider-handle-cont" : ".mbsc-progress-cont"), i.on("keydown", G).on("keyup", X).on("blur", X), o.on("touchstart mousedown" + (O.hover ? " mouseenter" : ""), z).on("touchmove", Y).on("touchend touchcancel" + (O.hover ? " mouseleave" : ""), $).on("pointercancel", W), e || (n.on("click", J), l.on("click", K))
            }, H.__destroy = function() {
                l.off("click", K), n.off(O.changeEvent, U).off("click", J), i.off("keydown", G).off("keyup", X).off("blur", X), o.off("touchstart mousedown mouseenter", z).off("touchmove", Y).off("touchend touchcancel mouseleave", $).off("pointercancel", W), H.___destroy()
            }, H.refresh = function() {
                n.each(function(e) {
                    ee(H._readValue(pe(this)), e, !0, !1, !0, !1)
                })
            }, H.getVal = function() {
                return S ? j.slice(0) : j[0]
            }, H.setVal = H._setVal = function(e, t, a) {
                pe.isArray(e) || (e = [e]), pe.each(e, function(e, t) {
                    j[e] = t, D[e] = t
                }), pe.each(e, function(e, t) {
                    ee(t, e, !0, !1, !0, a)
                })
            }, a || H.init()
        },
        sa = function(e, t) {
            var a, n, s, r, i = this;
            ge(t = t || {}, {
                changeEvent: "click",
                round: !1
            }), na.call(this, e, t, !0), i._readValue = function() {
                return e.checked ? 1 : 0
            }, i._fillValue = function(e, t, n) {
                a.prop("checked", !!e), n && a.trigger("change")
            }, i._onTap = function(e) {
                i._setVal(e ? 0 : 1)
            }, i.___init = function() {
                s = i.settings, a = pe(e), (n = a.parent()).find(".mbsc-switch-track").remove(), n.prepend(a), a.attr("data-role", "switch").after('<span class="mbsc-progress-cont mbsc-switch-track"><span class="mbsc-progress-track mbsc-progress-anim"><span class="mbsc-slider-handle-cont"><span class="mbsc-slider-handle mbsc-switch-handle" data-index="0"><span class="mbsc-switch-txt-off">' + s.offText + '</span><span class="mbsc-switch-txt-on">' + s.onText + "</span></span></span></span></span>"), r && r.destroy(), r = new Rt(e, s), i._$track = n.find(".mbsc-progress-track"), i._min = 0, i._max = 1, i._step = 1
            }, i.___destroy = function() {
                r.destroy()
            }, i.getVal = function() {
                return e.checked
            }, i.setVal = function(e, t, a) {
                i._setVal(e ? 1 : 0, t, a)
            }, i.init()
        };
    sa.prototype = {
        _class: "switch",
        _css: "mbsc-switch",
        _hasTheme: !0,
        _hasLang: !0,
        _hasDef: !0,
        _defaults: {
            stopProp: !0,
            offText: "Off",
            onText: "On"
        }
    }, ve.Switch = sa;
    /* eslint-disable no-unused-vars */
    var ra = function(e, t, a) {
        var n, s, r, i, o, l, c, d, u, m, p, h, f = this;

        function v() {
            var e = b("value", c);
            e !== p && g(e)
        }

        function b(e, t) {
            var a = s.attr(e);
            return void 0 === a || "" === a ? t : +a
        }

        function g(e, t, a, n) {
            e = Math.min(d, Math.max(e, c)), i.css("width", 100 * (e - c) / (d - c) + "%"), void 0 === a && (a = !0), void 0 === n && (n = a), (e !== p || t) && f._display(e), e !== p && (p = e, a && s.attr("value", p), n && s.trigger("change"))
        }
        aa.call(this, e, t, !0), f._display = function(e) {
            h = m && u.returnAffix ? m.replace(/\{value\}/, e).replace(/\{max\}/, d) : e, o && o.html(h), n && n.html(h)
        }, f._attachChange = function() {
            s.on("change", v)
        }, f.__init = function() {
            var a, h, v, g;
            if (u = f.settings, s = pe(e), g = !!r, r = f._$parent, c = f._min = void 0 === t.min ? b("min", u.min) : t.min, d = f._max = void 0 === t.max ? b("max", u.max) : t.max, p = b("value", c), a = s.attr("data-val") || u.val, v = (v = s.attr("data-step-labels")) ? JSON.parse(v) : u.stepLabels, m = s.attr("data-template") || (100 != d || u.template ? u.template : "{value}%"), g ? (a && (n.remove(), r.removeClass("mbsc-progress-value-" + ("right" == a ? "right" : "left"))), v && pe(".mbsc-progress-step-label", l).remove()) : (zt(r), Lt(s), r.find(".mbsc-input-wrap").append('<span class="mbsc-progress-cont"><span class="mbsc-progress-track mbsc-progress-anim"><span class="mbsc-progress-bar"></span></span></span>'), i = f._$progress = r.find(".mbsc-progress-bar"), l = f._$track = r.find(".mbsc-progress-track")), s.attr("min", c).attr("max", d), a && (n = pe('<span class="mbsc-progress-value"></span>'), r.addClass("mbsc-progress-value-" + ("right" == a ? "right" : "left")).find(".mbsc-input-wrap").append(n)), v)
                for (h = 0; h < v.length; ++h) l.append('<span class="mbsc-progress-step-label" style="' + (u.rtl ? "right" : "left") + ": " + 100 * (v[h] - c) / (d - c) + '%" >' + v[h] + "</span>");
            o = pe(s.attr("data-target") || u.target)
        }, f.__destroy = function() {
            r.removeClass("mbsc-ic-left mbsc-ic-right").find(".mbsc-progress-cont").remove(), r.find(".mbsc-input-ic").remove(), s.off("change", v)
        }, f.refresh = function() {
            g(b("value", c), !0, !1)
        }, f.getVal = function() {
            return p
        }, f.setVal = function(e, t, a) {
            g(e, !0, t, a)
        }, a || f.init()
    };
    ra.prototype = {
        _class: "progress",
        _css: "mbsc-progress",
        _hasTheme: !0,
        _hasLang: !0,
        _hasDef: !0,
        _defaults: {
            min: 0,
            max: 100,
            returnAffix: !0
        }
    }, ve.Progress = ra;
    var ia = function(e, t, a) {
        var n, s, r, i, o, l, c, d, u, m, p, h, f, v = this;
        ra.call(this, e, t, !0);
        var b = v.__init,
            g = v.__destroy;
        na.call(this, e, t, !0);
        var x = v.__init,
            T = v.__destroy;
        v.__init = function() {
            b(), x()
        }, v.__destroy = function() {
            g(), T()
        }, v._update = function(e, t, a, n, s, o, h) {
            return d ? 0 === a ? (e = Math.min(e, t[1]), r.css({
                width: R(t[1], p, m) - R(e, p, m) + "%",
                left: u ? "auto" : R(e, p, m) + "%",
                right: u ? R(e, p, m) + "%" : "auto"
            })) : (e = Math.max(e, t[0]), r.css({
                width: R(e, p, m) - R(t[0], p, m) + "%"
            })) : s || !l ? h.css({
                left: u ? "auto" : (n || R(e, p, m)) + "%",
                right: u ? (n || R(e, p, m)) + "%" : "auto"
            }) : r.css("width", (n || R(e, p, m)) + "%"), c && i.eq(a).html(e), s || t[a] == e && !o || v._display(e), e
        }, v._readValue = function(e) {
            return +e.val()
        }, v._fillValue = function(e, t, a) {
            n.eq(t).val(e), a && n.eq(t).trigger("change")
        }, v._markupReady = function() {
            var e, t;
            if (c && s.addClass("mbsc-slider-has-tooltip"), 1 != h)
                for (t = (m - p) / h, e = 0; e <= t; ++e) o.append('<span class="mbsc-slider-step" style="' + (u ? "right" : "left") + ":" + 100 / t * e + '%"></span>');
            n.each(function(e) {
                "range" == this.type && pe(this).attr("min", p).attr("max", m).attr("step", h), (l ? r : o).append('<span class="mbsc-slider-handle-cont' + (d && !e ? " mbsc-slider-handle-left" : "") + '"><span tabindex="0" class="mbsc-slider-handle" aria-valuemin="' + p + '" aria-valuemax="' + m + '" data-index="' + e + '"></span>' + (c ? '<span class="mbsc-slider-tooltip"></span>' : "") + "</span>")
            }), i = s.find(".mbsc-slider-tooltip")
        }, v.___init = function() {
            s && (s.removeClass("mbsc-slider-has-tooltip"), 1 != h && pe(".mbsc-slider-step", o).remove()), s = v._$parent, o = v._$track, r = v._$progress, n = s.find("input"), f = v.settings, p = v._min, m = v._max, v._step = h = void 0 === t.step ? +n.attr("step") || f.step : t.step, v._live = W("data-live", f.live, n), c = W("data-tooltip", f.tooltip, n), l = W("data-highlight", f.highlight, n) && n.length < 3, d = l && 2 == n.length, u = f.rtl, v._markupReady()
        }, a || v.init()
    };
    ia.prototype = {
        _class: "progress",
        _css: "mbsc-progress mbsc-slider",
        _hasTheme: !0,
        _hasLang: !0,
        _hasDef: !0,
        _defaults: {
            changeEvent: "change",
            stopProp: !0,
            min: 0,
            max: 100,
            step: 1,
            live: !0,
            highlight: !0,
            round: !0,
            returnAffix: !0
        }
    }, ve.Slider = ia;
    var oa = function(e, t, a) {
        var n, s, r, i, o, l, c, d = this,
            u = pe(e);
        ia.call(this, e, t, !0), d._update = function(e, t, a, s, i, o) {
            return n.css("width", R(e, 0, r) + "%"), i || t[a] == e && !o || d._display(e), e
        }, d._markupReady = function() {
            var e, t = "",
                a = "";
            for (s = d._$track, n = d._$progress, c = d.settings, i = d._min, r = d._max, d._base = i, d._rounding = c.rtl ? "floor" : "ceil", o = u.attr("data-empty") || c.empty, l = u.attr("data-filled") || c.filled, e = 0; e < r; ++e) t += '<span class="mbsc-ic mbsc-ic-' + o + '"></span>', a += '<span class="mbsc-ic mbsc-ic-' + l + '"></span>';
            s.html(t), s.append(n), n.html(a), s.append('<span class="mbsc-rating-handle-cont"><span tabindex="0" class="mbsc-slider-handle" aria-valuemin="' + i + '" aria-valuemax="' + r + '" data-index="0"></span></span>')
        }, a || d.init()
    };
    oa.prototype = {
        _class: "progress",
        _css: "mbsc-progress mbsc-rating",
        _hasTheme: !0,
        _hasLang: !0,
        _hasDef: !0,
        _defaults: {
            changeEvent: "change",
            stopProp: !0,
            min: 1,
            max: 5,
            step: 1,
            live: !0,
            round: !0,
            hover: !0,
            highlight: !0,
            returnAffix: !0,
            empty: "star",
            filled: "star3"
        }
    }, ve.Rating = oa;
    var la = 1,
        ca = function() {
            function e(t, a) {
                var n = this;
                i(this, e);
                var s = pe(t);
                if (this._$elm = s, this.settings = a, this._isOpen = a.isOpen || !1, this._$accordionParent = s.parent("[mbsc-accordion], mbsc-accordion, .mbsc-accordion"), s.addClass("mbsc-collapsible " + (this._isOpen ? "mbsc-collapsible-open" : "")), s.hasClass("mbsc-card") ? (this._$header = s.find(".mbsc-card-header").addClass("mbsc-collapsible-header"), this._$content = s.find(".mbsc-card-content").addClass("mbsc-collapsible-content")) : s.hasClass("mbsc-form-group") || s.hasClass("mbsc-form-group-inset") ? (this._$header = s.find(".mbsc-form-group-title").addClass("mbsc-collapsible-header"), this._$content = s.find(".mbsc-form-group-content").addClass("mbsc-collapsible-content")) : (this._$header = s.find(".mbsc-collapsible-header"), this._$content = s.find(".mbsc-collapsible-content")), this._$content[0].id || (this._$content[0].id = "mbsc-collapsible-" + la++), this._$header) {
                    var r = pe('<span class="mbsc-collapsible-icon mbsc-ic mbsc-ic-arrow-down5"></span>');
                    G(this, this._$header, function() {
                        n.collapse()
                    }), this._$header.attr("role", "button").attr("aria-expanded", this._isOpen).attr("aria-controls", this._$content[0].id).attr("tabindex", "0").on("mousedown", function(e) {
                        e.preventDefault()
                    }).on("keydown", function(e) {
                        32 !== e.which && 13 != e.keyCode || (e.preventDefault(), n.collapse())
                    }).append(r)
                }
                s[0].mbscInst = this, this.show = this.show.bind(this), this.hide = this.hide.bind(this), this.toggle = this.toggle.bind(this)
            }
            return o(e, [{
                key: "collapse",
                value: function(e) {
                    var t = this,
                        a = this._$elm;
                    void 0 === e && (e = !this._isOpen), e && this._isOpen || !e && !this._isOpen || (e ? (Be && this._$content.css("height", this._$content[0].scrollHeight), a.addClass("mbsc-collapsible-open")) : (Be && this._$content.css("height", getComputedStyle(this._$content[0]).height), setTimeout(function() {
                        t._$content.css("height", 0), a.removeClass("mbsc-collapsible-open")
                    })), e && this._$accordionParent && this._$accordionParent.find(".mbsc-collapsible-open").each(function() {
                        this !== a[0] && this.mbscInst.hide()
                    }), this._isOpen = e, this._$header.attr("aria-expanded", this._isOpen))
                }
            }, {
                key: "show",
                value: function() {
                    this.collapse(!0)
                }
            }, {
                key: "hide",
                value: function() {
                    this.collapse(!1)
                }
            }, {
                key: "toggle",
                value: function() {
                    this.collapse()
                }
            }, {
                key: "destroy",
                value: function() {
                    this._$header.find("mbsc-collapsible-icon").remove(), this._$elm.removeClass("mbsc-collapsible mbsc-collapsible-open"), this._$header.removeClass("mbsc-collapsible-header"), this._$content.removeClass("mbsc-collapsible-content")
                }
            }]), e
        }();
    ve.CollapsibleBase = ca;
    var da = 0;

    function ua(e, t, a, n) {
        pe("input,select,textarea,progress,button", e).each(function() {
            var e = pe(this),
                n = Yt(e);
            if ("false" != e.attr("data-enhance"))
                if (e.hasClass("mbsc-control")) this.mbscInst && this.mbscInst.option({
                    theme: a.theme,
                    lang: a.lang,
                    rtl: a.rtl,
                    onText: a.onText,
                    offText: a.offText,
                    stopProp: a.stopProp
                });
                else switch (this.id || (this.id = "mbsc-form-control-" + ++da), n) {
                    case "button":
                    case "submit":
                        t[this.id] = new Ut(this, {
                            theme: a.theme,
                            tap: a.tap
                        });
                        break;
                    case "switch":
                        t[this.id] = new sa(this, {
                            theme: a.theme,
                            lang: a.lang,
                            rtl: a.rtl,
                            tap: a.tap,
                            onText: a.onText,
                            offText: a.offText,
                            stopProp: a.stopProp
                        });
                        break;
                    case "checkbox":
                        t[this.id] = new Jt(this, {
                            tap: a.tap
                        });
                        break;
                    case "range":
                        pe(this).parent().hasClass("mbsc-slider") || (t[this.id] = new ia(this, {
                            theme: a.theme,
                            lang: a.lang,
                            rtl: a.rtl,
                            stopProp: a.stopProp
                        }));
                        break;
                    case "rating":
                        t[this.id] = new oa(this, {
                            theme: a.theme,
                            lang: a.lang,
                            rtl: a.rtl,
                            stopProp: a.stopProp
                        });
                        break;
                    case "progress":
                        t[this.id] = new ra(this, {
                            theme: a.theme,
                            lang: a.lang,
                            rtl: a.rtl
                        });
                        break;
                    case "radio":
                        t[this.id] = new Bt(this, {
                            tap: a.tap
                        });
                        break;
                    case "select":
                    case "select-one":
                    case "select-multiple":
                        t[this.id] = new Kt(this, {
                            tap: a.tap
                        });
                        break;
                    case "textarea":
                        t[this.id] = new Qt(this, {
                            tap: a.tap
                        });
                        break;
                    case "segmented":
                        t[this.id] = new ea(this, {
                            theme: a.theme,
                            tap: a.tap
                        });
                        break;
                    case "stepper":
                        t[this.id] = new ta(this, {
                            theme: a.theme
                        });
                        break;
                    case "hidden":
                        return;
                    default:
                        t[this.id] = new Wt(this, {
                            tap: a.tap
                        })
                }
        }), pe("[data-collapsible]:not(.mbsc-collapsible)", e).each(function() {
            var e = pe(this),
                a = e.attr("data-open");
            this.id || (this.id = "mbsc-form-control-" + ++da), t[this.id] = new ca(e, {
                isOpen: void 0 !== a && "false" != a
            }), fe[this.id] = t[this.id]
        }), n || Xt()
    }
    /* eslint-disable no-unused-vars */
    var ma = function(e, t) {
        var a, s, r = "",
            i = pe(e),
            o = {},
            l = this;

        function c() {
            i.removeClass("mbsc-no-touch")
        }
        xe.call(this, e, t, !0), l.refresh = function(e) {
            ua(i, o, a, e)
        }, l._init = function() {
            var e = void 0 !== a.collapsible || void 0 !== i.attr("data-collapsible");
            if (i.hasClass("mbsc-card") || i.on("touchstart", c).show(), r && i.removeClass(r), r = l.remote.cards.cssClass, i.addClass(r).removeClass("mbsc-cloak"), e && !s) {
                var t = i.attr("data-open");
                s = new ca(i, {
                    isOpen: void 0 !== t && "false" != t || !0 === a.collapsible
                })
            }
            i.append(l._getText(n, .5)), l.refresh()
        }, l._destroy = function() {
            for (var e in i.removeClass(r).off("touchstart", c), o) o[e].destroy();
            s && s.destroy()
        }, l.toggle = function() {
            s && s.toggle()
        }, l.hide = function() {
            s && s.hide()
        }, l.show = function() {
            s && s.show()
        }, a = l.settings, l.init()
    };
    ma.prototype = {
        _hasDef: !0,
        _hasTheme: !0,
        _hasLang: !0,
        _class: "card",
        _defaults: {
            tap: !0,
            stopProp: !0,
            lang: "en"
        }
    }, ve.Card = ma, me("[mbsc-card]", ma, !0);
    var pa = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var a = arguments[t];
            for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n])
        }
        return e
    };

    function ha(e, t) {
        var a = {};
        for (var n in e) t.indexOf(n) >= 0 || Object.prototype.hasOwnProperty.call(e, n) && (a[n] = e[n]);
        return a
    }
    var fa = {
            open: a.bool
        },
        va = function(a) {
            function n(a) {
                i(this, n);
                var s = u(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, a));
                return s.componentDidUpdate = function() {
                    var e;
                    void 0 !== s.optimizeThisUpdate && (s.optimizeThisUpdate.updateOptions && (e = ge({}, s.state.options)), s.optimizeThisUpdate.updateOptions && s.optimizeThisUpdate.updateChildren ? (s.optimizeThisUpdate.updateCollapsible && (e = ge(e, {
                        collapsible: s.props.open || !1
                    })), s.instance.option(e)) : s.optimizeThisUpdate.updateCollapsible || s.optimizeThisUpdate.updateChildren ? s.state.options.open ? s.instance.show() : s.instance.hide() : s.optimizeThisUpdate.updateOptions && s.instance.option(e))
                }, s.shouldComponentUpdate = function(e, t) {
                    var a = !$e(t.options, s.state.options),
                        n = !$e(t.options.open, s.state.options.open),
                        r = !$e(e.children, s.props.children);
                    return s.optimizeThisUpdate = {
                        updateOptions: a,
                        updateCollapsible: n,
                        updateChildren: r
                    }, s.optimizeUpdate = {
                        updateOptions: !1,
                        updateCollapsible: !1,
                        updateChildren: !1
                    }, a || n || r
                }, s.componentDidMount = function() {
                    var e = ge({}, s.state.options);
                    s.props.collapsible && (e.collapsible = s.props.open || !1), s.instance = new ma(t.findDOMNode(s), e)
                }, s.render = function() {
                    /* eslint-disable no-unused-vars */
                    var t = s.props,
                        a = (t.className, t.children, t.collapsible, t.open, t.theme, t.lang, t.rtl, ha(t, ["className", "children", "collapsible", "open", "theme", "lang", "rtl"]));
                    return e.createElement("div", pa({
                        className: s.initialCssClass + " mbsc-cloak"
                    }, a), s.props.children)
                }, s
            }
            return d(n, Ge), n
        }(),
        ba = function(e) {
            function t(e) {
                i(this, t);
                var a = u(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                return a.getCssClasses = function(e) {
                    return e + (a.initialCssClass ? " " + a.initialCssClass : "")
                }, a.initialCssClass = e.className, a.state = {
                    cssClasses: e.className
                }, a
            }
            return d(t, e), t
        }(e.Component),
        ga = function(t) {
            function a(t) {
                i(this, a);
                var n = u(this, (a.__proto__ || Object.getPrototypeOf(a)).call(this, t));
                return n.render = function() {
                    /* eslint-disable no-unused-vars */
                    var t = n.props,
                        a = (t.className, t.children, ha(t, ["className", "children"])),
                        s = n.getCssClasses("mbsc-card-header");
                    return e.createElement("div", pa({
                        className: s
                    }, a), n.props.children)
                }, n
            }
            return d(a, ba), a
        }(),
        xa = function(t) {
            function a(t) {
                i(this, a);
                var n = u(this, (a.__proto__ || Object.getPrototypeOf(a)).call(this, t));
                return n.render = function() {
                    /* eslint-disable no-unused-vars */
                    var t = n.props,
                        a = (t.className, t.children, ha(t, ["className", "children"])),
                        s = n.getCssClasses("mbsc-card-content");
                    return e.createElement("div", pa({
                        className: s
                    }, a), n.props.children)
                }, n
            }
            return d(a, ba), a
        }(),
        Ta = function(t) {
            function a(t) {
                i(this, a);
                var n = u(this, (a.__proto__ || Object.getPrototypeOf(a)).call(this, t));
                return n.render = function() {
                    /* eslint-disable no-unused-vars */
                    var t = n.props,
                        a = (t.className, t.children, ha(t, ["className", "children"])),
                        s = n.getCssClasses("mbsc-card-footer");
                    return e.createElement("div", pa({
                        className: s
                    }, a), n.props.children)
                }, n
            }
            return d(a, ba), a
        }(),
        ya = function(t) {
            function a(t) {
                i(this, a);
                var n = u(this, (a.__proto__ || Object.getPrototypeOf(a)).call(this, t));
                return n.render = function() {
                    /* eslint-disable no-unused-vars */
                    var t = n.props,
                        a = (t.className, t.children, ha(t, ["className", "children"])),
                        s = n.getCssClasses("mbsc-card-title");
                    return e.createElement("div", pa({
                        className: s
                    }, a), n.props.children)
                }, n
            }
            return d(a, ba), a
        }(),
        _a = function(t) {
            function a(t) {
                i(this, a);
                var n = u(this, (a.__proto__ || Object.getPrototypeOf(a)).call(this, t));
                return n.render = function() {
                    /* eslint-disable no-unused-vars */
                    var t = n.props,
                        a = (t.className, t.children, ha(t, ["className", "children"])),
                        s = n.getCssClasses("mbsc-card-subtitle");
                    return e.createElement("div", pa({
                        className: s
                    }, a), n.props.children)
                }, n
            }
            return d(a, ba), a
        }();

    function wa(e) {
        var t = [Math.round(e.r).toString(16), Math.round(e.g).toString(16), Math.round(e.b).toString(16)];
        return pe.each(t, function(e, a) {
            1 == a.length && (t[e] = "0" + a)
        }), "#" + t.join("")
    }

    function Ca(e) {
        return {
            r: (e = parseInt(e.indexOf("#") > -1 ? e.substring(1) : e, 16)) >> 16,
            g: (65280 & e) >> 8,
            b: 255 & e,
            toString: function() {
                return "rgb(" + this.r + "," + this.g + "," + this.b + ")"
            }
        }
    }

    function Ma(e) {
        var t, a, n, s = e.h,
            r = 255 * e.s / 100,
            i = 255 * e.v / 100;
        if (0 === r) t = a = n = i;
        else {
            var o = (255 - r) * i / 255,
                l = s % 60 * (i - o) / 60;
            360 == s && (s = 0), s < 60 ? (t = i, n = o, a = o + l) : s < 120 ? (a = i, n = o, t = i - l) : s < 180 ? (a = i, t = o, n = o + l) : s < 240 ? (n = i, t = o, a = i - l) : s < 300 ? (n = i, a = o, t = o + l) : s < 360 ? (t = i, a = o, n = i - l) : t = a = n = 0
        }
        return {
            r: t,
            g: a,
            b: n,
            toString: function() {
                return "rgb(" + this.r + "," + this.g + "," + this.b + ")"
            }
        }
    }

    function Sa(e) {
        var t, a, n = 0,
            s = Math.min(e.r, e.g, e.b),
            r = Math.max(e.r, e.g, e.b),
            i = r - s;
        return a = r, n = (t = r ? 255 * i / r : 0) ? e.r == r ? (e.g - e.b) / i : e.g == r ? 2 + (e.b - e.r) / i : 4 + (e.r - e.g) / i : -1, (n *= 60) < 0 && (n += 360), {
            h: n,
            s: t *= 100 / 255,
            v: a *= 100 / 255,
            toString: function() {
                return "hsv(" + Math.round(this.h) + "," + Math.round(this.s) + "%," + Math.round(this.v) + "%)"
            }
        }
    }

    function Da(e) {
        var t, a, n = e.r / 255,
            s = e.g / 255,
            r = e.b / 255,
            i = Math.max(n, s, r),
            o = Math.min(n, s, r),
            l = (i + o) / 2;
        if (i == o) t = a = 0;
        else {
            var c = i - o;
            switch (a = l > .5 ? c / (2 - i - o) : c / (i + o), i) {
                case n:
                    t = (s - r) / c + (s < r ? 6 : 0);
                    break;
                case s:
                    t = (r - n) / c + 2;
                    break;
                case r:
                    t = (n - s) / c + 4
            }
            t /= 6
        }
        return {
            h: Math.round(360 * t),
            s: Math.round(100 * a),
            l: Math.round(100 * l),
            toString: function() {
                return "hsl(" + this.h + "," + this.s + "%," + this.l + "%)"
            }
        }
    }

    function ka(e) {
        return Da(Ca(e))
    }

    function Oa(e) {
        return wa(function(e) {
            var t, a, n, s, r, i, o = e.h,
                l = e.s,
                c = e.l;
            return isFinite(o) || (o = 0), isFinite(l) || (l = 0), isFinite(c) || (c = 0), (o /= 60) < 0 && (o = 6 - -o % 6), o %= 6, l = Math.max(0, Math.min(1, l / 100)), c = Math.max(0, Math.min(1, c / 100)), i = (r = (1 - Math.abs(2 * c - 1)) * l) * (1 - Math.abs(o % 2 - 1)), o < 1 ? (t = r, a = i, n = 0) : o < 2 ? (t = i, a = r, n = 0) : o < 3 ? (t = 0, a = r, n = i) : o < 4 ? (t = 0, a = i, n = r) : o < 5 ? (t = i, a = 0, n = r) : (t = r, a = 0, n = i), s = c - r / 2, {
                r: Math.round(255 * (t + s)),
                g: Math.round(255 * (a + s)),
                b: Math.round(255 * (n + s)),
                toString: function() {
                    return "rgb(" + this.r + "," + this.g + "," + this.b + ")"
                }
            }
        }(e))
    }

    function Na(e) {
        return wa(Ma(e))
    }

    function Va(e) {
        return Sa(Ca(e))
    }
    va.propTypes = pa({}, Fe, fa), n.Card = va, n.CardHeader = ga, n.CardContent = xa, n.CardFooter = Ta, n.CardTitle = ya, n.CardSubtitle = _a;
    var Pa = function(e, t, a) {
        var s, r, i, o, l, c, d, u, m, p, h, f, v, b, g, x, T, y, _, w, C, M, S, D, k, O = this,
            N = pe(e),
            V = 0,
            P = {},
            E = {};

        function A(e, t, a) {
            if (!a) {
                O._value = O._hasValue ? O._tempValue.slice(0) : null;
                for (var n = 0; n < i.length; ++n) i[n].tempChangedColor && O._value && -1 != O._value.indexOf(i[n].tempChangedColor) && (i[n].changedColor = i[n].tempChangedColor), delete i[n].tempChangedColor
            }
            e && (O._isInput && N.val(O._hasValue ? O._tempValue : ""), o("onFill", {
                valueText: O._hasValue ? O._tempValue : "",
                change: t
            }), t && (P = ge(!0, {}, E), O._preventChange = !0, N.trigger("change")), z(O._value, !0))
        }

        function I(e, t) {
            return '<div class="mbsc-color-input-item" data-color="' + (void 0 !== (t = void 0 !== t ? t : j(e)) ? t : e) + '" style="background: ' + e + ';">' + (y ? "" : '<div class="mbsc-color-input-item-close mbsc-ic mbsc-ic-material-close"></div>') + "</div>"
        }

        function F(e) {
            f[0].style.background = e ? Ue + "linear-gradient(left, " + (s.rtl ? "#000000" : "#FFFFFF") + " 0%, " + e + " 50%, " + (s.rtl ? "#FFFFFF" : "#000000") + " 100%)" : ""
        }

        function j(e) {
            if (Object.keys(E).length && !isNaN(e)) return e;
            for (var t in i)
                if (e == i[t].color || e == i[t].changedColor) return t
        }

        function H(e, t) {
            var a, n = e.match(/\d+/gim);
            switch (!0) {
                case e.indexOf("rgb") > -1:
                    a = wa({
                        r: n[0],
                        g: n[1],
                        b: n[2]
                    });
                    break;
                case e.indexOf("hsl") > -1:
                    a = Oa({
                        h: n[0],
                        s: n[1],
                        l: n[2]
                    });
                    break;
                case e.indexOf("hsv") > -1:
                    a = Na({
                        h: n[0],
                        s: n[1],
                        v: n[2]
                    });
                    break;
                case e.indexOf("#") > -1:
                    a = e
            }
            return function(e, t) {
                switch (t) {
                    case "rgb":
                        return Ca(e);
                    case "hsl":
                        return ka(e);
                    case "hsv":
                        return Va(e);
                    default:
                        return e
                }
            }(a, t || s.format)
        }

        function L(e, t) {
            pe(".mbsc-color-active", t).removeClass("mbsc-color-active"), v && (e.parent().addClass("mbsc-color-active"), h && e && void 0 !== V && S.eq(V).parent().addClass("mbsc-color-active"))
        }

        function z(e, t) {
            var a, n, r = [],
                o = 0,
                d = pe.map(i, function(e) {
                    return e.changedColor || e.color
                });
            if (y) {
                if (e = pe.isArray(e) ? e[0] : e, (n = d.indexOf(e)) > -1 && r.push(n), e && !r.length && v) {
                    var u = +pe(".mbsc-color-input-item", C).attr("data-color");
                    isNaN(u) || r.push(u), x = u
                }
            } else if (e)
                if (h && v)
                    for (var m in P) void 0 !== P[m].colorIndex && r.push(+P[m].colorIndex);
                else
                    for (a = 0; a < e.length; ++a)(n = d.indexOf(e[a])) > -1 && (r.push(n), d[n] = "temp" + a);
            for (a = 0; a < r.length; ++a) i[r[a]] && $(!0, r[a], o++, i[r[a]].changedColor || i[r[a]].color, !0);
            for (a = 0; a < i.length; ++a) - 1 == r.indexOf(a) && $(!1, a, void 0, i[a].changedColor || i[a].color, !1);
            if (h)
                for (a = o; a < s.select; ++a) E[a] = {}, S && S.eq(a).addClass("mbsc-color-preview-item-empty").css({
                    background: "transparent"
                });
            P = ge(!0, {}, E), !1 !== t && function() {
                if (T) {
                    var e, t = "";
                    if (C.empty(), O._hasValue) {
                        if (y) t += I(O._value, x);
                        else
                            for (e = 0; e < O._value.length; ++e) t += I(O._value[e], Object.keys(E).length && E[e].colorIndex ? E[e].colorIndex : j(O._value[e]));
                        C.append(t), O.tap(pe(".mbsc-color-input-item", C), function(e) {
                            if (pe(e.target).hasClass("mbsc-color-input-item-close")) {
                                var t = pe(this).index();
                                e.stopPropagation(), e.preventDefault(), void 0 === x && (x = pe(e.target).parent().attr("data-color")), h && (V = i[x].previewInd, S.eq(V).parent().removeClass("mbsc-color-active"), P[t] = {}, E[t] = {}), O._value.splice(t, 1), O.setVal(O._value, !0, !0)
                            } else v && "inline" !== s.display && (x = pe(e.target).attr("data-color"), isNaN(x) && (x = j(x)), x && i[x] && (i[x].selected = !0, V = i[x].previewInd, setTimeout(function() {
                                l.scroll(M.eq(x), 400), h && c.scroll(S.eq(V), 400)
                            }, 200)))
                        })
                    }
                }
            }()
        }

        function $(e, t, a, n, s, r) {
            if (h && s && (E[a].colorIndex = e ? t : void 0, E[a].color = e ? n : void 0, S)) {
                var o = S.eq(a);
                o.removeClass("mbsc-color-preview-item-empty").css({
                    background: e ? n : "transparent"
                }), e || o.addClass("mbsc-color-preview-item-empty").parent().removeClass("mbsc-color-active")
            }
            r && (e ? O._tempValue.splice(a, 0, n) : O._tempValue.splice(O._tempValue.indexOf(n), 1)), M && (e ? M.eq(t).addClass("mbsc-color-selected") : M.eq(t).removeClass("mbsc-color-selected").parent().removeClass("mbsc-color-active")), i[t].previewInd = e ? a : void 0, i[t].selected = e
        }

        function R(e, t) {
            void 0 !== e && (y || i[e].selected) ? (x = e, i[e] && (u = i[e].changedColor || i[e].color, D = M.eq(e), v && (L(M.eq(e), t || ""), (m = H(i[e].color, "hsl")).l = H(u, "hsl").l, F(i[e].color), g.setVal(100 - m.l, !1, !1)))) : v && F()
        }

        function W(e, t) {
            var a = pe(e.target).index();
            x = E[a].colorIndex, D = M.eq(x), V = a, R(x, t), l.scroll(D, 250), o("onPreviewItemTap", {
                target: e.target,
                value: E[a].color,
                index: a
            })
        }

        function U(e, t) {
            var a = !1,
                r = pe(".mbsc-color-selected", t);
            if ((D = pe(e.target)).hasClass("mbsc-color-clear-item")) return u = "", void O.clear();
            (y || _ > +r.length || D.hasClass("mbsc-color-selected")) && n.wJOcy && (x = D.attr("data-index"), h && (V = void 0 !== i[x].previewInd ? i[x].previewInd : function() {
                var e;
                for (e = 0; e < s.select; ++e)
                    if (void 0 === E[e].colorIndex) return e
            }(), a = v && D.hasClass("mbsc-color-selected") && !D.parent().hasClass("mbsc-color-active"), S.length > 6 && c.scroll(S.eq(V))), u = i[x].changedColor || i[x].color, y ? (r.removeClass("mbsc-color-selected"), O._tempValue = u, u && D.toggleClass("mbsc-color-selected"), L(D, t)) : (L(D, t), a || $(!i[x].selected, x, V, u, !0, !0)), R(x, t), O.live && (O._fillValue(), o("onSet", {
                value: O._value
            })), o("onItemTap", {
                target: e.target,
                value: u,
                selected: i[x].selected,
                index: x
            }), O._updateHeader())
        }
        bt.call(this, e, t, !0), O.setVal = O._setVal = function(e, t, a, n) {
            O._hasValue = null !== e && void 0 !== e, O._tempValue = y ? pe.isArray(e) ? e[0] : e : pe.isArray(e) ? e : e ? [e] : [], A(t, void 0 === a ? t : a, n)
        }, O.getVal = O._getVal = function(e) {
            return O._hasValue || e ? w ? function() {
                var e, t = [];
                for (e = 0; e < i.length; ++e) i[e].selected && t.push(i[e]);
                return t
            }() : O[e ? "_tempValue" : "_value"] : null
        }, O._readValue = function() {
            var e = N.val() || "";
            O._hasValue = !1, 0 !== e.length && "" !== e && (O._hasValue = !0), O._hasValue ? (O._tempValue = y ? e : "hex" == s.format ? e.split(",") : e.match(/[a-z]{3}\((\d+\.?\d{0,}?),\s*([\d.]+)%{0,},\s*([\d.]+)%{0,}\)/gim), A(!0)) : O._tempValue = [], z(O._tempValue, O._hasValue)
        }, O._fillValue = function() {
            O._hasValue = !0, A(!0, !0)
        }, O._generateContent = function() {
            var e, t, a, r = d ? 1 : 0;
            for (b = p ? Math.ceil((i.length + r) / s.rows) : s.rows, t = '<div class="mbsc-color-scroll-cont mbsc-w-p ' + (p ? "" : "mbsc-color-vertical") + '"><div class="mbsc-color-cont">' + (p ? '<div class="mbsc-color-row">' : ""), e = 0; e < i.length; ++e) a = i[e].changedColor || i[e].color, d && 0 === e && (t += '<div class="mbsc-color-item-c"><div tabindex="0" class="mbsc-color-clear-item mbsc-btn-e mbsc-color-selected"><div class="mbsc-color-clear-cross"></div></div></div>'), 0 !== e && (e + r) % b == 0 && (t += p ? '</div><div class="mbsc-color-row">' : ""), t += '<div class="mbsc-color-item-c"><div tabindex="0" data-index="' + e + '" class="mbsc-color-item mbsc-btn-e mbsc-ic mbsc-ic-material-check mbsc-color-btn-e ' + (i[e].selected ? "mbsc-color-selected" : "") + '"  style="background:' + a + '"></div>' + O._getText(n, .2) + "</div>";
            if (t += "</div></div>" + (p ? "</div>" : ""), v && (t += '<div class="mbsc-color-slider-cont"><input class="mbsc-color-slider" type="range" data-highlight="false" value="50" min="0" max="100"/></div>'), h) {
                for (var o in t += '<div class="mbsc-color-preview-cont"><div class="mbsc-color-refine-preview">', P) t += '<div class="mbsc-color-preview-item-c mbsc-btn-e mbsc-color-btn-e" tabindex="0"><div class="mbsc-color-preview-item ' + (P[o].color ? "" : "mbsc-color-preview-item-empty") + '" style="background: ' + (P[o].color || "initial") + ';"></div></div>';
                t += "</div></div>"
            }
            return t
        }, O._position = function(e) {
            var t, a;
            p || (t = e.find(".mbsc-color-cont"), a = Math.ceil(t.find(".mbsc-color-item-c")[0].offsetWidth), t.width(Math.min(Math.floor(e.find(".mbsc-fr-c").width() / a), Math.round(i.length / s.rows)) * a + 1)), l && l.refresh(), c && c.refresh()
        }, O._markupInserted = function(e) {
            p || e.find(".mbsc-color-scroll-cont").css("max-height", e.find(".mbsc-color-item-c")[0].offsetHeight * s.rows), l = new xt(e.find(".mbsc-color-scroll-cont")[0], {
                axis: p ? "X" : "Y",
                rtl: s.rtl,
                elastic: 60,
                stopProp: !1,
                mousewheel: s.mousewheel,
                onBtnTap: function(t) {
                    U(t, e)
                }
            })
        }, O._attachEvents = function(e) {
            var t;
            M = pe(".mbsc-color-item", e), e.on("keydown", ".mbsc-color-btn-e", function(t) {
                t.stopPropagation(), 32 == t.keyCode && (t.target.classList.contains("mbsc-color-item") ? U(t, e) : W(t, e))
            }), h && (S = pe(".mbsc-color-preview-item", e)), v && (e.addClass("mbsc-color-refine"), k = pe(".mbsc-color-slider", e), g = new ia(k[0], {
                theme: s.theme,
                rtl: s.rtl
            }), f = e.find(".mbsc-progress-track"), x && O._value && R(x, e), k.on("change", function() {
                void 0 !== x && (y || i[x].selected) && (m.l = 100 - this.value, t = H(m.toString()).toString(), y ? O._tempValue = t : O._tempValue[void 0 !== V ? V : O._tempValue.length] = t, i[x].tempChangedColor = t, M.eq(x).css("background", t), h && (E[V].color = t, S.eq(V).removeClass("mbsc-color-preview-item-empty").css({
                    background: t
                })), O.live && Y(O._fillValue()))
            })), h && (c = new xt(e.find(".mbsc-color-preview-cont")[0], {
                axis: "X",
                rtl: s.rtl,
                stopProp: !1,
                mousewheel: s.mousewheel,
                onBtnTap: function(t) {
                    W(t, e)
                }
            })), O._updateHeader()
        }, O._markupRemove = function() {
            l && l.destroy(), g && g.destroy(), c && c.destroy()
        }, O.__processSettings = function() {
            var t, a;
            if (s = O.settings, o = O.trigger, p = "horizontal" == s.navigation, O._value = [], O._tempValue = [], y = "single" == s.select, d = void 0 !== s.clear ? s.clear : y, !(a = s.data || []).length) switch (s.format) {
                case "rgb":
                    a = ["rgb(255,235,60)", "rgb(255,153,0)", "rgb(244,68,55)", "rgb(234,30,99)", "rgb(156,38,176)", "rgb(104,58,183)", "rgb(63,81,181)", "rgb(33,150,243)", "rgb(0,151,136)", "rgb(75,175,79)", "rgb(126,93,78)", "rgb(158,158,158)"], d && a.splice(10, 0, "rgb(83, 71, 65)");
                    break;
                case "hsl":
                    a = ["hsl(54,100%,62%)", "hsl(36,100%,50%)", "hsl(4,90%,59%)", "hsl(340,83%,52%)", "hsl(291,64%,42%)", "hsl(262,52%,47%)", "hsl(231,48%,48%)", "hsl(207,90%,54%)", "hsl(174,100%,30%)", "hsl(122,40%,49%)", "hsl(19,24%,40%)", "hsl(0,0%,62%)"], d && a.splice(10, 0, "hsl(20, 12%, 29%)");
                    break;
                default:
                    a = ["#ffeb3c", "#ff9900", "#f44437", "#ea1e63", "#9c26b0", "#683ab7", "#3f51b5", "#2196f3", "#009788", "#4baf4f", "#7e5d4e", "#9e9e9e"], d && a.splice(10, 0, "#534741")
            }
            if (v = "refine" == s.mode, h = !isNaN(s.select), _ = isNaN(s.select) ? y ? 2 : a.length : s.select, w = pe.isPlainObject(a[0]), h && !Object.keys(P).length)
                for (t = 0; t < s.select; ++t) P[t] = {}, E[t] = {};
            for (i = a.slice(0), t = 0; t < i.length; ++t) pe.isPlainObject(a[t]) ? i[t].color = a[t].color : (a[t] = a[t].toLowerCase(), i[t] = {
                key: t,
                name: a[t],
                color: a[t]
            });
            r = s.defaultValue || i[0].color, m = H(u = r, "hsl"), (T = s.enhance && N.is("input")) && (N.hasClass("mbsc-color-input-hdn") ? C = N.prev() : ((C = pe("<div " + (e.placeholder ? 'data-placeholder="' + e.placeholder + '"' : "") + ' class="mbsc-control mbsc-color-input ' + (s.inputClass || "") + '" readonly ></div>')).insertBefore(N), N.addClass("mbsc-color-input-hdn").attr("tabindex", -1)), s.anchor = C, O.attachShow(C))
        }, O.__destroy = function() {
            T && (N.removeClass("mbsc-color-input-hdn"), C.remove())
        }, a || O.init()
    };
    Pa.prototype = {
        _hasDef: !0,
        _hasTheme: !0,
        _hasLang: !0,
        _class: "color",
        _defaults: ge({}, bt.prototype._defaults, {
            headerText: !1,
            validate: A,
            parseValue: A,
            enhance: !0,
            rows: 2,
            select: "single",
            format: "hex",
            navigation: "horizontal",
            compClass: "mbsc-color"
        })
    }, ve.Color = Pa, n.themes.color = n.themes.frame, s.color = {
        hsv2hex: Na,
        hsv2rgb: Ma,
        rgb2hsv: Sa,
        rgb2hex: wa,
        rgb2hsl: Da,
        hex2rgb: Ca,
        hex2hsv: Va,
        hex2hsl: ka
    };
    var Ea = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var a = arguments[t];
                for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n])
            }
            return e
        },
        Aa = {
            clear: a.bool,
            data: a.array,
            defaultValue: a.string,
            enhance: a.bool,
            format: a.oneOf(["hex", "rgb", "hsl"]),
            inputClass: a.string,
            mode: a.oneOf(["preset", "refine"]),
            navigation: a.oneOf(["horizontal", "vertical"]),
            preview: a.bool,
            previewText: a.bool,
            rows: a.number,
            select: a.oneOfType([a.oneOf(["single", "multiple"]), a.number]),
            valueText: a.string,
            onSet: a.func,
            onClear: a.func
        },
        Ia = function(e) {
            function t(e) {
                i(this, t);
                var a = u(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                return a.mbscInit = {
                    component: "Color"
                }, a
            }
            return d(t, Ze), t
        }();
    Ia.propTypes = Ea({}, Ia.propTypes, Aa), n.Color = Ia, Tt.date = Mt, Tt.time = Mt, Tt.datetime = Mt;
    var Fa = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var a = arguments[t];
                for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n])
            }
            return e
        },
        ja = function(e) {
            function t(e) {
                i(this, t);
                var a = u(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                return a.mbscInit = {
                    preset: "datetime"
                }, a
            }
            return d(t, Ze), t
        }();
    ja.propTypes = Fa({}, ja.propTypes, He, Le);
    var Ha = function(e) {
        function t(e) {
            i(this, t);
            var a = u(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
            return a.mbscInit = {
                preset: "date"
            }, a
        }
        return d(t, Ze), t
    }();
    Ha.propTypes = Fa({}, Ha.propTypes, He, Le);
    var La = function(e) {
        function t(e) {
            i(this, t);
            var a = u(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
            return a.mbscInit = {
                preset: "time"
            }, a
        }
        return d(t, Ze), t
    }();
    La.propTypes = Fa({}, La.propTypes, He, Le), n.Datetime = ja, n.Date = Ha, n.Time = La;
    /* eslint-disable no-unused-vars */
    var za = {
            view: {
                calendar: {
                    type: "month",
                    popover: !0
                }
            },
            allDayText: "All-day",
            labelsShort: ["Yrs", "Mths", "Days", "Hrs", "Mins", "Secs"],
            eventText: "event",
            eventsText: "events",
            noEventsText: "No events"
        },
        Ya = {
            yearChange: !1,
            weekDays: "short"
        };
    Tt.eventcalendar = function(e, t) {
        function a(t, a, s) {
            var i, o, l, c, d = 0,
                u = [],
                m = "",
                p = [];
            for (s || (s = e._prepareObj(R, t, a)), i = te(t); i <= a; i.setDate(i.getDate() + 1))(c = s[i]) && c.length && p.push({
                d: new Date(i),
                list: r(c)
            });
            if (p.length > 0)
                for (o = 0; o < p.length; o++)
                    for (m += '<li class="mbsc-lv-gr-title mbsc-event-day">' + Q(Y.dateFormat, p[o].d, Y) + "</li>", l = 0; l < p[o].list.length; l++) {
                        var h = p[o].list[l],
                            f = h.start ? re(h.start) : null,
                            v = h.end ? re(h.end) : null,
                            b = h.color,
                            g = de.test(h.d) || ce.test(h.d),
                            T = h.d ? g ? h.d : re(h.d) : f,
                            y = h.allDay || g || f && v && f.toDateString() !== v.toDateString();
                        u.push(h), m += '<li class="mbsc-lv-item" data-index="' + d + '"><div class="mbsc-event-time">' + (y ? Y.allDayText : T && T.getTime ? Q(Y.timeFormat, T) : "") + (!y && v && v.getTime ? "<br/>" + Q(Y.timeFormat, v) : "") + '</div><div class="mbsc-event-color"' + (b ? ' style="background:' + b + ';"' : "") + '></div><div class="mbsc-event-txt">' + h.text + "</div>" + e._getText(n, .3) + "</li>", d++
                    } else m += '<li class="mbsc-lv-gr-title mbsc-event-empty"><div class="mbsc-empty"><h3>' + Y.noEventsText + "</h3></div></li>";
            x.html('<ul class="mbsc-lv mbsc-lv-v">' + m + "</ul>"), e.tap(pe(".mbsc-lv-item", x), function(e) {
                W("onEventSelect", {
                    domEvent: e,
                    event: u[pe(this).attr("data-index")],
                    date: i
                })
            })
        }

        function s() {
            if (V) {
                var t = te(V.d);
                ! function(t, a, n) {
                    if (t) {
                        var s, l, c, d, u, m, p, h, f = '<ul class="mbsc-cal-event-list">';
                        v.parent().off(Re, o).removeClass("mbsc-anim-out").addClass("mbsc-anim-in"), w = n, t = r(t), pe.each(t, function(e, t) {
                            var a, n, r, i, o, v, b;
                            m = t.start ? re(t.start) : null, p = t.end ? re(t.end) : null, h = de.test(t.d) || ce.test(t.d), d = t.d ? h ? t.d : re(t.d) : m, u = m && p && m.toDateString() !== p.toDateString(), c = t.color, s = "", l = "", d.getTime && (s = Q((u ? "MM d yy " : "") + Y.timeFormat, d)), p && (l = Q((u ? "MM d yy " : "") + Y.timeFormat, p)), f += '<li role="button" aria-label="' + t.text + (s ? ", " + Y.fromText + " " + s : "") + (l ? ", " + Y.toText + " " + l : "") + '" class="mbsc-cal-event"><div class="mbsc-cal-event-color" style="' + (c ? "background:" + c + ";" : "") + '"></div><div class="mbsc-cal-event-text"><div class="mbsc-cal-event-time">' + (!d.getTime || u || t.allDay ? Y.allDayText : Q(Y.timeFormat, d)) + "</div>" + t.text + "</div>" + (m && p ? '<div class="mbsc-cal-event-dur">' + (a = p - m, n = Y.labelsShort, r = Math.abs(a) / 1e3, b = (v = (o = (i = r / 60) / 60) / 24) / 365, r < 45 && Math.round(r) + " " + n[5].toLowerCase() || i < 45 && Math.round(i) + " " + n[4].toLowerCase() || o < 24 && Math.round(o) + " " + n[3].toLowerCase() || v < 30 && Math.round(v) + " " + n[2].toLowerCase() || v < 365 && Math.round(v / 30) + " " + n[1].toLowerCase() || Math.round(b) + " " + n[0].toLowerCase()) + "</div>" : "") + "</li>"
                        }), f += "</ul>", g.html(f), W("onEventBubbleShow", {
                            target: w,
                            eventList: v[0]
                        }), i(w), e.tap(pe(".mbsc-cal-event", g), function(e) {
                            M.scrolled || W("onEventSelect", {
                                domEvent: e,
                                event: t[pe(this).index()],
                                date: a
                            })
                        }), S = !0
                    }
                }(V.events || C[t], t, V.cell || pe('.mbsc-cal-slide-a .mbsc-cal-day[data-full="' + t.getFullYear() + "-" + (t.getMonth() + 1) + "-" + t.getDate() + '"]', e._markup)[0]), V = null
            }
        }

        function r(e) {
            return e.sort(function(e, t) {
                var a = e.start ? re(e.start) : null,
                    n = t.start ? re(t.start) : null,
                    s = e.end ? re(e.end) : null,
                    r = t.end ? re(t.end) : null,
                    i = de.test(e.d) || ce.test(e.d),
                    o = de.test(t.d) || ce.test(t.d),
                    l = e.d ? i ? e.d : re(e.d) : a,
                    c = t.d ? o ? t.d : re(t.d) : n,
                    d = l.getTime ? a && s && a.toDateString() !== s.toDateString() ? 1 : e.allDay ? 2 : l.getTime() : 0,
                    u = c.getTime ? n && r && n.toDateString() !== r.toDateString() ? 1 : t.allDay ? 2 : c.getTime() : 0;
                return d == u ? e.text > t.text ? 1 : -1 : d - u
            })
        }

        function i(e) {
            var t = h[0].offsetHeight,
                a = h[0].offsetWidth,
                n = h.offset(),
                s = n.left,
                r = pe(e),
                i = e.offsetHeight,
                o = e.offsetWidth,
                c = r.offset(),
                d = c.left,
                u = c.top - n.top,
                m = r.closest(".mbsc-cal-row").index() < 2,
                p = getComputedStyle(v.addClass("mbsc-cal-events-t").css({
                    left: 0,
                    top: m ? u + i : 0,
                    bottom: m ? 0 : t - u
                }).addClass("mbsc-cal-events-v")[0]).height,
                f = v[0].offsetWidth,
                g = L(d - s - (f - o) / 2, 0, a - f);
            v.css(l({
                left: g
            }, m ? "bottom" : "top", "auto")).removeClass("mbsc-cal-events-t"), b.css("max-height", p), M.refresh(), M.scroll(0), m ? v.addClass("mbsc-cal-events-b") : v.removeClass("mbsc-cal-events-b"), pe(".mbsc-cal-events-arr", v).css("left", d - s + o / 2 - g)
        }

        function o() {
            v.removeClass("mbsc-cal-events-v"), v.parent().off(Re, o).removeClass("mbsc-anim-in mbsc-anim-out")
        }

        function c() {
            v && S && v.parent().addClass("mbsc-anim-out").on(Re, o), w = null, S = !1
        }

        function d() {
            c(), e.redraw()
        }

        function u(e) {
            var t = Y.getYear(e),
                a = Y.getMonth(e),
                n = Y.getDay(e);
            if (y = e, "day" == O) _ = Y.getDate(t, a, n + N - 1);
            else if ("week" == O) {
                var s, r = y.getDay();
                s = n + Y.firstDay - (Y.firstDay - r > 0 ? 7 : 0) - r, y = Y.getDate(t, a, s), _ = Y.getDate(t, a, s + 7 * N - 1)
            } else "month" == O ? (y = Y.getDate(t, a, 1), _ = Y.getDate(t, a + N, 0)) : "year" == O && (y = Y.getDate(t, 0, 1), _ = Y.getDate(t + N, 0, 0))
        }

        function m(e, t) {
            e && W("onPageChange", {
                firstDay: y,
                lastDay: _
            }), t || W("onPageLoading", {
                firstDay: y,
                lastDay: _
            }), W("onPageLoaded", {
                firstDay: y,
                lastDay: _
            })
        }
        var p, h, f, v, b, g, x, T, y, _, w, C, M, S, D, k, O, N, V, P, E, A, I, F, j, H, z = ge({}, e.settings),
            Y = ge(e.settings, za, z, Ya, t),
            $ = 0,
            R = ge(!0, [], Y.data),
            W = e.trigger;
        return Y.data = R, pe.each(R, function(e, t) {
            void 0 === t._id && (t._id = $++)
        }), A = Y.view, I = A.calendar, F = A.eventList, j = Y.months, H = Y.weeks, I ? ("week" == I.type ? H = I.size || 1 : I.size && (j = I.size), k = !1) : (H = 0, k = !0), F && (O = F.type, N = F.size || 1), P = A.eventList, E = I && I.popover && !1 !== Y.eventBubble || Y.eventBubble, Y.weeks = H, Y.months = j, p = Dt.call(this, e), e._onSelectShow = function() {
            c()
        }, e._onGenMonth = function(t, a) {
            C = e._prepareObj(R, t, a)
        }, e._onRefresh = function(e) {
            k && m(!1, e)
        }, e._onSetDate = function(e, t) {
            k ? (u(e), m(!0)) : t || D || (P && "day" == O ? a(e, e, C) : E && s())
        }, e._getDayProps = function(e) {
            var t = C[e],
                a = {
                    events: t
                };
            return Y.marked || Y.labels || (t ? (a.background = t[0] && t[0].background, a.marked = t, a.markup = Y.showEventCount ? '<div class="mbsc-cal-txt">' + t.length + " " + (t.length > 1 ? Y.eventsText : Y.eventText) + "</div>" : '<div class="mbsc-cal-marks"><div class="mbsc-cal-mark"></div></div>') : a.markup = ""), a
        }, e.addEvent = function(e) {
            var t = [];
            return e = ge(!0, [], pe.isArray(e) ? e : [e]), pe.each(e, function(e, a) {
                void 0 === a._id && (a._id = $++), R.push(a), t.push(a._id)
            }), d(), t
        }, e.removeEvent = function(e) {
            e = pe.isArray(e) ? e : [e], pe.each(e, function(e, t) {
                pe.each(R, function(e, a) {
                    if (a._id === t) return R.splice(e, 1), !1
                })
            }), d()
        }, e.getEvents = function(t) {
            var a;
            return t ? (t.setHours(0, 0, 0, 0), (a = e._prepareObj(R, t, t))[t] ? r(a[t]) : []) : ge(!0, [], R)
        }, e.setEvents = function(e) {
            var t = [];
            return Y.data = R = ge(!0, [], e), pe.each(R, function(e, a) {
                void 0 === a._id && (a._id = $++), t.push(a._id)
            }), d(), t
        }, e.navigate = function(t, a, n) {
            n && (V = {
                d: t
            }), e.setVal(t, !0, !0, !1, a ? 200 : 0)
        }, ge({}, p, {
            outerMonthChange: !1,
            headerText: !1,
            buttons: "inline" !== Y.display ? ["close"] : Y.buttons,
            compClass: "mbsc-ev-cal mbsc-calendar mbsc-dt mbsc-sc",
            onMarkupReady: function(e, t) {
                f = pe(e.target), x = pe('<div class="mbsc-lv-cont mbsc-lv-' + Y.theme + (Y.baseTheme ? " mbsc-lv-" + Y.baseTheme : "") + ' mbsc-event-list"></div>').appendTo(pe(".mbsc-fr-w", f)), p.onMarkupReady.call(this, e), h = pe(".mbsc-cal-c", f), v = pe('<div class="mbsc-cal-events mbsc-anim-pop ' + (Y.eventBubbleClass || "") + '"><div class="mbsc-cal-events-arr"></div><div class="mbsc-cal-events-i"><div class="mbsc-cal-events-sc"></div><div class="mbsc-sc-bar-c"><div class="mbsc-sc-bar"></div></div></div></div>').appendTo(h), b = pe(".mbsc-cal-events-i", v), g = pe(".mbsc-cal-events-sc", v), T = pe(".mbsc-cal-month", f), M = new xt(b[0], {
                    scrollbar: pe(".mbsc-sc-bar-c", v)
                }), S = !1, u(t.getDate(!0)), t.tap(b, function() {
                    M.scrolled || c()
                }), P && k && (m(), ot(pe(".mbsc-cal-btn", f), function(e, t) {
                    var a = Y.getYear(y),
                        n = Y.getMonth(y),
                        s = Y.getDay(y);
                    "day" == O ? (y = Y.getDate(a, n, s + t * N), _ = Y.getDate(a, n, s + (t + 1) * N - 1)) : "week" == O ? (y = Y.getDate(a, n, s + t * N * 7), _ = Y.getDate(a, n, s + (t + 1) * N * 7 - 1)) : "month" == O ? (y = Y.getDate(a, n + t * N, 1), _ = Y.getDate(a, n + (t + 1) * N, 0)) : "year" == O && (y = Y.getDate(a + t * N, 0, 1), _ = Y.getDate(a + (t + 1) * N, 0, 0)), m(!0)
                }, 200))
            },
            onDayChange: function(e) {
                var t = e.target !== w;
                c(), t && (V = {
                    d: e.date,
                    cell: e.target,
                    events: e.events
                })
            },
            onPageChange: function(t) {
                c(), D = !0, k || e._isSetDate || e.setVal(t.firstDay)
            },
            onPageLoaded: function(t) {
                var n = t.firstDay,
                    r = t.lastDay;
                P ? k ? (a(n, r), function(e, t) {
                    var a, n = (Y.dateWheels || Y.dateFormat).search(/m/i),
                        s = (Y.dateWheels || Y.dateFormat).search(/y/i),
                        r = Y.getYear(e),
                        i = Y.getMonth(e),
                        o = Y.getYear(t),
                        l = Y.getMonth(t);
                    "day" == O ? a = Q(Y.dateFormat, e, Y) + (N > 1 ? " - " + Q(Y.dateFormat, t, Y) : "") : "week" == O ? a = Q(Y.dateFormat, e, Y) + " - " + Q(Y.dateFormat, t, Y) : "month" == O ? a = 1 == N ? s < n ? r + " " + Y.monthNames[i] : Y.monthNames[i] + " " + r : s < n ? r + " " + Y.monthNamesShort[i] + " - " + o + " " + Y.monthNamesShort[l] : Y.monthNamesShort[i] + " " + r + " - " + Y.monthNamesShort[l] + " " + o : "year" == O && (a = r + (N > 1 ? " - " + o : "")), T.html(a)
                }(n, r)) : (r = "month" == O ? Y.getDate(Y.getYear(n), Y.getMonth(n) + N, 0) : "week" == O ? Y.getDate(Y.getYear(n), Y.getMonth(n), Y.getDay(n) + 7 * N - 1) : n = e.getVal(!0), a(n, r, C)) : E && s(), D = !1
            },
            onPosition: function(e) {
                p.onPosition.call(this, e), S && i(w)
            },
            onHide: function() {
                p.onHide.call(this), M && M.destroy()
            }
        })
    };
    var $a = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var a = arguments[t];
                for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n])
            }
            return e
        },
        Ra = a.number,
        Wa = a.bool,
        Ua = a.object,
        Ja = a.string,
        Ba = {
            data: a.arrayOf(a.shape({
                start: Ae,
                end: Ae,
                d: a.oneOfType([Ua, Ra, Ja]),
                text: Ja,
                color: Ja,
                allDay: Wa
            })),
            eventBubble: Wa,
            showEventCount: Wa,
            view: a.shape({
                calendar: a.shape({
                    type: a.oneOf(["week", "month"]),
                    size: Ra,
                    popover: Wa
                }),
                eventList: a.shape({
                    type: a.oneOf(["day", "week", "month", "year"]),
                    size: Ra
                })
            }),
            allDayText: Ja,
            noEventsText: Ja
        },
        Ka = function(a) {
            function n(a) {
                i(this, n);
                var s = u(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, a));
                return s.componentDidMount = function() {
                    var e = ge({
                        preset: "eventcalendar"
                    }, s.state.options, {
                        data: s.state.data || []
                    });
                    s.instance = new wt(t.findDOMNode(s), e)
                }, s.componentDidUpdate = function() {
                    s.optimizeUpdate.updateOptions && s.instance.option(s.state.options), s.optimizeUpdate.updateData && s.instance.setEvents(s.state.data)
                }, s.shouldComponentUpdate = function(e, t) {
                    var a = !$e(t.options, s.state.options),
                        n = !$e(t.data, s.state.data);
                    return s.optimizeUpdate = {
                        updateOptions: a,
                        updateValue: !1,
                        updateData: n
                    }, a || n
                }, s.render = function() {
                    return e.createElement("div", {
                        className: s.initialCssClass
                    })
                }, s
            }
            return d(n, Ge), n
        }();
    Ka.propTypes = $a({}, Ka.propTypes, He, Le, ze, Ba), n.Eventcalendar = Ka;
    var qa = function(e, t, a) {
        function s(e) {
            pe(".mbsc-fr-c", e).append(l._getText(n, .7)), !pe(".mbsc-fr-c", e).hasClass("mbsc-wdg-c") && n.wJOcy && (pe(".mbsc-fr-c", e).addClass("mbsc-wdg-c").append(o.show()), pe(".mbsc-w-p", e).length || pe(".mbsc-fr-c", e).addClass("mbsc-w-p"))
        }
        var r, i, o = pe(e),
            l = this;
        bt.call(this, e, t, !0), l._generateContent = function() {
            return ""
        }, l._markupReady = function(e) {
            "inline" != r.display && s(e)
        }, l._markupInserted = function(e) {
            "inline" == r.display && s(e), e.trigger("mbsc-enhance", [{
                theme: r.theme,
                lang: r.lang
            }])
        }, l._markupRemove = function() {
            o.hide(), i && i.parent().length && i.after(o)
        }, l.__processSettings = function() {
            r = l.settings, l.buttons.ok = {
                text: r.okText,
                icon: r.okIcon,
                handler: "set"
            }, r.buttons = r.buttons || ("inline" == r.display ? [] : ["ok"]), !i && o.parent().length && (i = pe(document.createComment("popup")), o.before(i)), o.hide()
        }, a || l.init()
    };
    qa.prototype = {
        _hasDef: !0,
        _hasTheme: !0,
        _hasContent: !0,
        _hasLang: !0,
        _class: "popup",
        _defaults: ge({}, bt.prototype._defaults, {
            compClass: "mbsc-wdg",
            okText: "OK",
            headerText: !1
        })
    }, ve.Popup = qa, ve.Widget = qa, n.themes.popup = n.themes.frame;
    var Ga = O && !!window.Promise,
        Xa = [],
        Za = [];

    function Qa(e) {
        Xa.length || e.show(), Xa.push(e)
    }

    function en(e, t, a, s) {
        return ge({
            display: t.display || "center",
            cssClass: "mbsc-alert",
            okText: t.okText,
            cancelText: t.cancelText,
            context: t.context,
            theme: t.theme,
            closeOnOverlayTap: !1,
            onBeforeClose: function() {
                e.shift()
            },
            onBeforeShow: function() {
                n.activeInstance = null
            },
            onHide: function(e, n) {
                a && a(n._resolve), t.callback && t.callback(n._resolve), n && n.destroy(), Xa.length ? Xa[0].show() : Za.length && Za[0].show(!1, !0)
            }
        }, s)
    }

    function tn(e) {
        return (e.title ? "<h2>" + e.title + "</h2>" : "") + "<p>" + (e.message || "") + "</p>"
    }

    function an(e, t, a) {
        Qa(new qa(e, en(Xa, t, a)))
    }

    function nn(e, t, a) {
        var n = new qa(e, en(Xa, t, a, {
            buttons: ["cancel", "ok"],
            onSet: function() {
                n._resolve = !0
            }
        }));
        n._resolve = !1, Qa(n)
    }

    function sn(e, t, a) {
        var n = void 0,
            s = new qa(e, en(Xa, t, a, {
                buttons: ["cancel", "ok"],
                onMarkupReady: function(e, t) {
                    n = t._markup.find("input")[0], setTimeout(function() {
                        n.focus(), n.setSelectionRange(0, n.value.length)
                    }, 300)
                },
                onSet: function() {
                    s._resolve = n.value
                }
            }));
        s._resolve = null, Qa(s)
    }

    function rn(e, t, a, n, s) {
        var r, i, o = void 0,
            l = new qa(e, en(Za, t, a, {
                display: t.display || "bottom",
                animate: s,
                cssClass: (n || "mbsc-snackbar") + (t.color ? " mbsc-" + t.color : ""),
                scrollLock: !1,
                focusTrap: !1,
                buttons: [],
                onShow: function(e, a) {
                    !1 !== t.duration && (o = setTimeout(function() {
                        a && a.hide()
                    }, t.duration || 3e3)), t.button && a.tap(pe(".mbsc-snackbar-btn", e.target), function() {
                        a.hide(), t.button.action && t.button.action.call(this)
                    })
                },
                onClose: function() {
                    clearTimeout(o)
                }
            }));
        r = l, i = Za.length, Za.push(r), Xa.length || (i ? Za[0].hide() : r.show(!1, !0))
    }

    function on(e, t, a) {
        rn(e, t, a, "mbsc-toast", "fade")
    }

    function ln(e, t, a) {
        var n = void 0;
        return Ga ? n = new Promise(function(n) {
            e(t, a, n)
        }) : e(t, a), n
    }
    n.alert = function(e) {
        var t = document.createElement("div");
        return t.innerHTML = tn(e), ln(an, t, e)
    }, n.confirm = function(e) {
        var t = document.createElement("div");
        return t.innerHTML = tn(e), ln(nn, t, e)
    }, n.prompt = function(e) {
        var t = document.createElement("div");
        return t.innerHTML = tn(e) + '<label class="mbsc-input">' + (e.label ? '<span class="mbsc-label">' + e.label + "</span>" : "") + '<input tabindex="0" type="' + (e.inputType || "text") + '" placeholder="' + (e.placeholder || "") + '" value="' + (e.value || "") + '"></label>', ln(sn, t, e)
    }, n.snackbar = function(e) {
        var t = document.createElement("div"),
            a = e.button;
        return t.innerHTML = '<div class="mbsc-snackbar-cont"><div class="mbsc-snackbar-msg">' + (e.message || "") + "</div>" + (a ? '<button class="mbsc-snackbar-btn mbsc-btn mbsc-btn-flat">' + (a.icon ? '<span class="mbsc-ic ' + (a.text ? "mbsc-btn-ic " : "") + "mbsc-ic-" + a.icon + '"></span>' : "") + (a.text || "") + "</button>" : "") + "</div>", ln(rn, t, e)
    }, n.toast = function(e) {
        var t = document.createElement("div");
        return t.innerHTML = '<div class="mbsc-toast-msg">' + (e.message || "") + "</div>", ln(on, t, e)
    };
    var cn = "ios" == _ && C > 7,
        dn = function(e, t) {
            var a, s = "",
                r = pe(e),
                i = {},
                o = this;

            function l() {
                r.removeClass("mbsc-no-touch")
            }
            xe.call(this, e, t, !0), o.refresh = function(e) {
                ua(r, i, a, e)
            }, o._init = function() {
                n.themes.form[a.theme] || (a.theme = "mobiscroll"), r.hasClass("mbsc-form") || r.on("touchstart", l).show(), s && r.removeClass(s), s = "mbsc-form mbsc-no-touch mbsc-" + a.theme + (cn ? " mbsc-form-hb" : "") + (a.baseTheme ? " mbsc-" + a.baseTheme : "") + (a.rtl ? " mbsc-rtl" : " mbsc-ltr"), r.addClass(s).removeClass("mbsc-cloak"), o.refresh()
            }, o._destroy = function() {
                for (var e in r.removeClass(s).off("touchstart", l), i) i[e].destroy()
            }, o.controls = i, a = o.settings, o.init()
        };
    dn.prototype = {
        _hasDef: !0,
        _hasTheme: !0,
        _hasLang: !0,
        _class: "form",
        _defaults: {
            tap: !Je,
            stopProp: !0,
            lang: "en"
        }
    }, n.themes.form.mobiscroll = {}, ve.Form = dn, me("[mbsc-enhance],[mbsc-form]", dn, !0);
    var un, mn, pn = function(e, t) {
        var a = "",
            n = pe(e),
            s = this.settings;
        xe.call(this, e, t, !0), this._init = function() {
            var e = s.context,
                t = pe(e),
                r = t.find(".mbsc-ms-top .mbsc-ms"),
                i = t.find(".mbsc-ms-bottom .mbsc-ms"),
                o = {};
            "body" == e ? pe("body,html").addClass("mbsc-page-ctx") : t.addClass("mbsc-page-ctx"), a && n.removeClass(a), r.length && (o.paddingTop = r[0].offsetHeight), i.length && (o.paddingBottom = i[0].offsetHeight), a = "mbsc-page mbsc-" + s.theme + (s.baseTheme ? " mbsc-" + s.baseTheme : "") + (s.rtl ? " mbsc-rtl" : " mbsc-ltr"), n.addClass(a).removeClass("mbsc-cloak").css(o)
        }, this._destroy = function() {
            n.removeClass(a)
        }, s = this.settings, this.init()
    };
    pn.prototype = {
        _hasDef: !0,
        _hasTheme: !0,
        _hasLang: !0,
        _class: "page",
        _defaults: {
            context: "body"
        }
    }, ve.Page = pn, n.themes.page.mobiscroll = {}, me("[mbsc-page]", pn);
    var hn = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var a = arguments[t];
                for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n])
            }
            return e
        },
        fn = function(a) {
            function n(a) {
                i(this, n);
                var s = u(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, a));
                return s.componentDidMount = function() {
                    var e = ge({}, s.state.options);
                    s.instance = new pn(t.findDOMNode(s), e)
                }, s.render = function() {
                    return e.createElement("div", {
                        className: s.initialCssClass
                    }, s.props.children)
                }, s
            }
            return d(n, Xe), n
        }();
    fn.propTypes = hn({}, fn.propTypes, Fe, {
        onInit: a.func
    });
    var vn = (mn = un = function(t) {
            function a(t) {
                i(this, a);
                var n = u(this, (a.__proto__ || Object.getPrototypeOf(a)).call(this, t));
                return n.render = function() {
                    var t = "mbsc-note mbsc-note-" + n.props.color;
                    return e.createElement("div", {
                        className: t
                    }, n.props.children)
                }, n
            }
            return d(a, t), a
        }(e.Component), un.propTypes = {
            color: a.string
        }, un.defaultProps = {
            color: "primary"
        }, mn),
        bn = function(t) {
            function a(t) {
                i(this, a);
                var n = u(this, (a.__proto__ || Object.getPrototypeOf(a)).call(this, t));
                return n.render = function() {
                    return e.createElement("img", {
                        className: "mbsc-avatar",
                        src: n.props.src,
                        alt: n.props.alt
                    })
                }, n
            }
            return d(a, t), a
        }(e.Component);
    n.Page = fn, n.Note = vn, n.Avatar = bn;
    var gn, xn, Tn, yn, _n, wn, Cn, Mn, Sn, Dn, kn, On, Nn, Vn, Pn, En, An, In, Fn, jn, Hn, Ln, zn, Yn, $n, Rn, Wn, Un, Jn = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var a = arguments[t];
            for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n])
        }
        return e
    };

    function Bn(e, t) {
        var a = {};
        for (var n in e) t.indexOf(n) >= 0 || Object.prototype.hasOwnProperty.call(e, n) && (a[n] = e[n]);
        return a
    }
    var Kn = a.number,
        qn = a.string,
        Gn = a.func,
        Xn = a.bool,
        Zn = {
            onInit: Gn,
            onChange: Gn,
            value: Kn,
            disabled: Xn,
            min: Kn,
            max: Kn,
            step: Kn,
            val: a.oneOf(["left", "right"])
        },
        Qn = {
            onInit: Gn,
            onChange: Gn,
            checked: Xn,
            disabled: Xn,
            value: Xn
        },
        es = (xn = gn = function(a) {
            function n(a) {
                i(this, n);
                var s = u(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, a));
                return s.componentDidMount = function() {
                    var e = ge({}, s.state.options);
                    s.instance = new dn(t.findDOMNode(s), e)
                }, s.componentDidUpdate = function() {
                    if (!s.optimizeUpdate.updateOptions && s.optimizeUpdate.updateChildren) s.instance.refresh(!0);
                    else if (s.optimizeUpdate.updateOptions) {
                        var e = ge({}, s.state.options);
                        s.instance.option(e)
                    }
                }, s.checkFormWrapper = function(t) {
                    return 1 == e.Children.count(t.props.children) && "form" == t.props.children.type
                }, s.render = function() {
                    var t = s.props,
                        a = t.action,
                        n = t.method,
                        r = t.noValidate,
                        i = t.renderForm,
                        o = t.name,
                        l = t.target,
                        c = t.autoComplete,
                        d = t.onSubmit;
                    return s.checkFormWrapper(s) || !i ? s.props.children : e.createElement("form", {
                        className: s.initialCssClass,
                        action: a,
                        name: o,
                        target: l,
                        method: n,
                        autoComplete: c,
                        noValidate: r,
                        onSubmit: d
                    }, s.props.children)
                }, s
            }
            return d(n, Xe), n
        }(), gn.defaultProps = {
            renderForm: !0
        }, gn.propTypes = Jn({}, Fe, {
            onInit: Gn
        }), xn);
    n.Form = es;
    var ts = (yn = Tn = function(t) {
        function a(t) {
            i(this, a);
            var n = u(this, (a.__proto__ || Object.getPrototypeOf(a)).call(this, t));
            return n.render = function() {
                /* eslint-disable no-unused-vars */
                var t = n.props,
                    a = (t.valid, t.className, t.color),
                    s = t.children,
                    r = t.presetName,
                    i = Bn(t, ["valid", "className", "color", "children", "presetName"]),
                    o = "";
                a && (o = "mbsc-" + r + "-" + a);
                var l = o + (n.initialCssClass ? " " : "") + n.initialCssClass;
                return e.createElement("label", Jn({
                    className: l
                }, i), s)
            }, n.componentWillReceiveProps = function(e) {
                var t = (n.state.cssClasses || "") + (void 0 === n.props.valid || n.props.valid ? "" : " mbsc-err"),
                    a = (e.className || "") + (void 0 === n.props.valid || e.valid ? "" : " mbsc-err");
                t == a && e.valid == n.props.valid || Ye.call(n, t, a), n.state.cssClasses !== e.cssClasses && n.setState({
                    cssClasses: e.className
                })
            }, n.initialCssClass = (n.props.className || "") + (void 0 === n.props.valid || n.props.valid ? "" : " mbsc-err"), n.state = {
                cssClasses: n.props.className || ""
            }, n
        }
        return d(a, t), a
    }(e.Component), Tn.propTypes = {
        valid: a.bool,
        color: a.string,
        presetName: a.string
    }, yn);
    n.Form.Label = ts, n.Label = ts;
    var as = (wn = _n = function(t) {
        function a(t) {
            i(this, a);
            var n = u(this, (a.__proto__ || Object.getPrototypeOf(a)).call(this, t));
            return n.componentDidMount = function() {
                var e = ge({}, n.state.options);
                n.instance = new Wt(n.inputNode, e)
            }, n.inputMounted = function(e) {
                n.inputNode = e
            }, n.render = function() {
                var t = n.props,
                    a = t.valid,
                    s = t.errorMessage,
                    r = t.type,
                    i = t.icon,
                    o = t.iconAlign,
                    l = t.passwordToggle,
                    c = t.iconShow,
                    d = t.iconHide,
                    u = t.children,
                    m = Bn(t, ["valid", "errorMessage", "type", "icon", "iconAlign", "passwordToggle", "iconShow", "iconHide", "children"]),
                    p = null;
                return s && !a && (p = e.createElement("span", {
                    className: "mbsc-err-msg"
                }, s)), r = r || "text", e.createElement(ts, {
                    valid: a
                }, u, e.createElement("span", {
                    className: "mbsc-input-wrap"
                }, e.createElement("input", Jn({
                    ref: n.inputMounted,
                    type: r,
                    "data-icon": i,
                    "data-icon-align": o,
                    "data-password-toggle": l,
                    "data-icon-show": c,
                    "data-icon-hide": d
                }, m)), p))
            }, n
        }
        return d(a, qe), a
    }(), _n.propTypes = {
        disabled: a.bool,
        valid: a.bool,
        errorMessage: a.string,
        type: a.string,
        icon: a.string,
        iconAlign: a.string,
        passwordToggle: a.bool,
        iconShow: a.string,
        iconHide: a.string,
        name: a.string
    }, wn);
    n.Input = as;
    var ns = (Mn = Cn = function(t) {
        function a(t) {
            i(this, a);
            var n = u(this, (a.__proto__ || Object.getPrototypeOf(a)).call(this, t));
            return n.componentDidUpdate = function() {
                var e = ge({}, n.state.options);
                n.optimizeUpdate ? (n.optimizeUpdate.updateOptions && n.instance.option(e), n.optimizeUpdate.updateValue && n.instance.resize()) : (n.instance.option(e), void 0 !== n.state.value && n.instance.resize())
            }, n.componentDidMount = function() {
                var e = ge({}, n.state.options);
                n.instance = new Qt(n.inputNode, e)
            }, n.textMounted = function(e) {
                n.inputNode = e
            }, n.render = function() {
                var t = n.props,
                    a = t.valid,
                    s = t.errorMessage,
                    r = t.icon,
                    i = t.iconAlign,
                    o = t.children,
                    l = Bn(t, ["valid", "errorMessage", "icon", "iconAlign", "children"]),
                    c = null;
                return s && !a && (c = e.createElement("span", {
                    className: "mbsc-err-msg"
                }, s)), e.createElement(ts, {
                    valid: a
                }, o, e.createElement("span", {
                    className: "mbsc-input-wrap"
                }, e.createElement("textarea", Jn({
                    ref: n.textMounted,
                    "data-icon": r,
                    "data-icon-align": i
                }, l)), c))
            }, n
        }
        return d(a, Xe), a
    }(), Cn.propTypes = {
        disabled: a.bool,
        valid: a.bool,
        errorMessage: a.string,
        icon: a.string,
        iconAlign: a.string,
        name: a.string
    }, Mn);
    n.Textarea = ns;
    var ss = (Dn = Sn = function(t) {
        function a(t) {
            i(this, a);
            var n = u(this, (a.__proto__ || Object.getPrototypeOf(a)).call(this, t));
            return n.componentDidMount = function() {
                var e = ge({}, n.state.options);
                n.instance = new Kt(n.selectNode, e)
            }, n.selectMounted = function(e) {
                n.selectNode = e
            }, n.componentDidUpdate = function() {
                n.instance._setText()
            }, n.render = function() {
                var t = n.props,
                    a = t.label,
                    s = t.valid,
                    r = t.errorMessage,
                    i = t.icon,
                    o = t.iconAlign,
                    l = t.children,
                    c = Bn(t, ["label", "valid", "errorMessage", "icon", "iconAlign", "children"]),
                    d = null;
                return d = r && !s ? e.createElement("span", {
                    className: "mbsc-err-msg"
                }, r) : e.createElement("span", null), e.createElement(ts, {
                    valid: s
                }, a, e.createElement("span", {
                    className: "mbsc-input-wrap"
                }, e.createElement("select", Jn({
                    ref: n.selectMounted,
                    "data-icon": i,
                    "data-icon-align": o
                }, c), l), d))
            }, n
        }
        return d(a, qe), a
    }(), Sn.propTypes = {
        label: a.string,
        disabled: a.bool,
        valid: a.bool,
        errorMessage: a.string,
        icon: a.string,
        iconAlign: a.string,
        name: a.string
    }, Dn);
    n.Dropdown = ss;
    var rs = (On = kn = function(t) {
        function a(t) {
            i(this, a);
            var n = u(this, (a.__proto__ || Object.getPrototypeOf(a)).call(this, t));
            return n.componentDidMount = function() {
                var e = ge({}, n.state.options);
                n.instance = new Ut(n.btnNode, e)
            }, n.btnMounted = function(e) {
                n.btnNode = e
            }, n.render = function() {
                var t = n.props,
                    a = t.type,
                    s = t.children,
                    r = t.color,
                    i = t.flat,
                    o = t.block,
                    l = t.outline,
                    c = t.icon,
                    d = Bn(t, ["type", "children", "color", "flat", "block", "outline", "icon"]);
                a = a || "button";
                var u = "";
                return i && (u += " mbsc-btn-flat"), o && (u += " mbsc-btn-block"), l && (u += " mbsc-btn-outline"), r && (u += " mbsc-btn-" + r), n.initialCssClass && (u += " " + n.initialCssClass), u = u.trim(), e.createElement("button", Jn({
                    className: u,
                    ref: n.btnMounted,
                    type: a,
                    "data-icon": c
                }, d), s)
            }, n
        }
        return d(a, qe), a
    }(), kn.propTypes = {
        type: a.string,
        color: a.string,
        flat: a.bool,
        block: a.bool,
        outline: a.bool,
        icon: a.string,
        disabled: a.bool,
        name: a.string
    }, On);
    n.Button = rs;
    var is = (Vn = Nn = function(t) {
        function a(t) {
            i(this, a);
            var n = u(this, (a.__proto__ || Object.getPrototypeOf(a)).call(this, t));
            return n.componentDidMount = function() {
                var e = ge({}, n.state.options);
                n.instance = new Jt(n.inputNode, e)
            }, n.inputMounted = function(e) {
                n.inputNode = e
            }, n.render = function() {
                var t = n.props,
                    a = t.color,
                    s = t.children,
                    r = Bn(t, ["color", "children"]);
                return e.createElement(ts, {
                    color: a,
                    presetName: "checkbox"
                }, e.createElement("input", Jn({
                    ref: n.inputMounted,
                    type: "checkbox"
                }, r)), s)
            }, n
        }
        return d(a, qe), a
    }(), Nn.propTypes = {
        color: a.string,
        disabled: a.bool,
        name: a.string
    }, Vn);
    n.Checkbox = is;
    var os = (En = Pn = function(t) {
        function a(t) {
            i(this, a);
            var n = u(this, (a.__proto__ || Object.getPrototypeOf(a)).call(this, t));
            return n.componentDidMount = function() {
                var e = ge({}, n.state.options);
                n.instance = new Bt(n.inputNode, e)
            }, n.inputMounted = function(e) {
                n.inputNode = e
            }, n.render = function() {
                var t = n.props,
                    a = t.color,
                    s = t.children,
                    r = Bn(t, ["color", "children"]);
                return e.createElement(ts, {
                    color: a,
                    presetName: "radio"
                }, e.createElement("input", Jn({
                    ref: n.inputMounted,
                    type: "radio"
                }, r)), s)
            }, n
        }
        return d(a, qe), a
    }(), Pn.propTypes = {
        color: a.string,
        name: a.string,
        disabled: a.bool
    }, En);
    n.Radio = os;
    var ls = (In = An = function(t) {
        function a(t) {
            i(this, a);
            var n = u(this, (a.__proto__ || Object.getPrototypeOf(a)).call(this, t));
            return n.componentDidMount = function() {
                var e = ge({}, n.state.options);
                n.instance = new ea(n.inputNode, e)
            }, n.inputMounted = function(e) {
                n.inputNode = e
            }, n.render = function() {
                var t = n.props,
                    a = t.color,
                    s = t.children,
                    r = t.multiSelect,
                    i = t.icon,
                    o = Bn(t, ["color", "children", "multiSelect", "icon"]),
                    l = r ? "checkbox" : "radio";
                return e.createElement(ts, {
                    color: a,
                    presetName: "segmented"
                }, e.createElement("input", Jn({
                    ref: n.inputMounted,
                    type: l,
                    "data-icon": i,
                    "data-role": "segmented"
                }, o)), s)
            }, n
        }
        return d(a, qe), a
    }(), An.propTypes = {
        color: a.string,
        name: a.string,
        disabled: a.bool,
        multiSelect: a.bool,
        icon: a.string
    }, In);
    n.Segmented = ls;
    var cs = (jn = Fn = function(t) {
            function a(t, n) {
                i(this, a);
                var s = u(this, (a.__proto__ || Object.getPrototypeOf(a)).call(this, t));
                return s.componentDidMount = function() {
                    var e = ge({}, s.mbscInit, s.state.options);
                    s.instance = new ve[s.mbscInit.component || "Scroller"](s.inputNode, e), void 0 !== s.state.value && s.instance.setVal(s.state.value, !0), pe(s.inputNode).on("change", s.props.onChange || function() {})
                }, s.inputMounted = function(e) {
                    s.inputNode = e
                }, s.render = function() {
                    /* eslint-disable no-unused-vars */
                    var t = s.props,
                        a = (t.className, t.children),
                        n = (t.value, t.onChange, t.name),
                        r = t.color,
                        i = Bn(t, ["className", "children", "value", "onChange", "name", "color"]),
                        o = "";
                    r && (o = "mbsc-" + s.presetName + "-" + r);
                    var l = s.inputType || "text";
                    return e.createElement("div", {
                        className: o + (s.initialCssClass ? " " + s.initialCssClass : "")
                    }, a, e.createElement("input", Jn({
                        ref: s.inputMounted,
                        type: l,
                        "data-role": n
                    }, i)))
                }, s.presetName = n, s
            }
            return d(a, Xe), a
        }(), Fn.propTypes = Jn({}, Fe, {
            color: qn
        }), jn),
        ds = function(e) {
            function t(e) {
                i(this, t);
                var a = u(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, "switch"));
                return a.mbscInit = {
                    component: "Switch"
                }, a.inputType = "checkbox", a
            }
            return d(t, cs), t
        }();
    ds.propTypes = Jn({}, ds.propTypes, Qn), n.Switch = ds;
    var us = function(e) {
        function t(e) {
            i(this, t);
            var a = u(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, "stepper"));
            return a.mbscInit = {
                component: "Stepper"
            }, a
        }
        return d(t, cs), t
    }();
    us.propTypes = Jn({}, us.propTypes, Zn), n.Stepper = us;
    var ms = (Ln = Hn = function(t) {
        function a(t) {
            i(this, a);
            var n = u(this, (a.__proto__ || Object.getPrototypeOf(a)).call(this, t));
            return n.componentDidMount = function() {
                var e = ge({}, n.state.options);
                n.instance = new ra(n.progressNode, e), void 0 !== n.state.value && n.instance.setVal(n.state.value, !0)
            }, n.progressMounted = function(e) {
                n.progressNode = e
            }, n.render = function() {
                /* eslint-disable no-unused-vars */
                var t = n.props,
                    a = (t.className, t.children),
                    s = (t.value, t.color),
                    r = Bn(t, ["className", "children", "value", "color"]),
                    i = "";
                s && (i = "mbsc-progress-" + s);
                var o = i + (n.initialCssClass ? " " + n.initialCssClass : "");
                return e.createElement("div", {
                    className: o
                }, a, e.createElement("progress", Jn({
                    ref: n.progressMounted
                }, r)))
            }, n
        }
        return d(a, Xe), a
    }(), Hn.propTypes = Jn({}, Fe, {
        "data-icon": qn,
        "data-icon-align": a.oneOf(["left", "right"]),
        val: a.oneOf(["left", "right"]),
        disabled: Xn,
        max: Kn,
        value: Kn,
        color: qn
    }), Ln);
    n.Progress = ms;
    var ps = (Yn = zn = function(t) {
        function a(t) {
            i(this, a);
            var n = u(this, (a.__proto__ || Object.getPrototypeOf(a)).call(this, t));
            return n.componentDidMount = function() {
                var e = ge({}, n.state.options);
                n.instance = new ia(n.firstInput, e), void 0 !== n.state.value && n.instance.setVal(n.state.value, !0);
                var t = n;
                pe(n.label).on("change", function() {
                    if (t.props.onChange) {
                        var e = t.instance.getVal();
                        t.props.onChange(e)
                    }
                })
            }, n.firstInputMounted = function(e) {
                n.firstInput = e
            }, n.parentMounted = function(e) {
                n.label = e
            }, n.onValueChanged = function() {}, n.render = function() {
                /* eslint-disable no-unused-vars */
                var t = n.props,
                    a = t.children,
                    s = t.value,
                    r = (t.onChange, t.className, t.icon),
                    i = t.live,
                    o = (t.stepLabels, t.tooltip, t.color),
                    l = Bn(t, ["children", "value", "onChange", "className", "icon", "live", "stepLabels", "tooltip", "color"]),
                    c = s || [];
                i = i || n.props["data-live"] || !1, r = r || n.props["data-icon"], void 0 === s || Array.isArray(s) || (c = [s]);
                var d = "";
                o && (d = "mbsc-slider-" + o);
                var u = d + (n.initialCssClass ? " " + n.initialCssClass : "");
                return e.createElement("label", {
                    ref: n.parentMounted,
                    className: u
                }, a, c.map(function(t, a) {
                    return 0 === a ? e.createElement("input", Jn({
                        ref: this.firstInputMounted,
                        "data-icon": r,
                        "data-live": i,
                        key: a,
                        type: "range"
                    }, l)) : e.createElement("input", {
                        key: a,
                        type: "range",
                        "data-live": i,
                        "data-index": a
                    })
                }, n))
            }, n
        }
        return d(a, Xe), a
    }(), zn.propTypes = Jn({}, Fe, {
        highlight: Xn,
        live: Xn,
        stepLabels: a.arrayOf(Kn),
        "data-icon": qn,
        tooltip: Xn,
        val: a.oneOf(["left", "right"]),
        disabled: Xn,
        max: Kn,
        min: Kn,
        step: Kn,
        values: Kn,
        color: qn
    }), Yn);
    n.Slider = ps;
    var hs = (Rn = $n = function(t) {
        function a(t) {
            i(this, a);
            var n = u(this, (a.__proto__ || Object.getPrototypeOf(a)).call(this, t));
            return n.componentDidMount = function() {
                var e = ge({}, n.state.options);
                n.instance = new oa(n.inputNode, e), void 0 !== n.state.value && n.instance.setVal(n.state.value, !0), pe(n.label).on("change", function() {
                    if (n.props.onChange) {
                        var e = n.instance.getVal();
                        n.props.onChange(e)
                    }
                })
            }, n.inputMounted = function(e) {
                n.inputNode = e
            }, n.parentMounted = function(e) {
                n.label = e
            }, n.render = function() {
                /* eslint-disable no-unused-vars */
                var t = n.props,
                    a = (t.className, t.children),
                    s = (t.onChange, t.value, t.empty),
                    r = t.filled,
                    i = t.template,
                    o = t.val,
                    l = t.color,
                    c = Bn(t, ["className", "children", "onChange", "value", "empty", "filled", "template", "val", "color"]),
                    d = "";
                l && (d = "mbsc-rating-" + l);
                var u = d + (n.initialCssClass ? " " + n.initialCssClass : "");
                return e.createElement("label", {
                    className: u,
                    ref: n.parentMounted
                }, a, e.createElement("input", Jn({
                    type: "rating",
                    "data-role": "rating",
                    "data-val": o,
                    "data-template": i,
                    "data-empty": s,
                    "data-filled": r,
                    ref: n.inputMounted
                }, c)))
            }, n
        }
        return d(a, Xe), a
    }(), $n.propTypes = Jn({}, Fe, {
        val: a.oneOf(["left", "right"]),
        disabled: Xn,
        max: Kn,
        min: Kn,
        step: Kn,
        template: qn,
        empty: qn,
        filled: qn,
        value: Kn,
        color: qn
    }), Rn);
    n.Rating = hs;
    var fs = (Un = Wn = function(a) {
        function n(a) {
            i(this, n);
            var s = u(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, a));
            return s.componentDidMount = function() {
                if (void 0 !== s.props.collapsible) {
                    var e = s.props.open || !1;
                    s.instance = new ca(t.findDOMNode(s), {
                        isOpen: e
                    })
                }
            }, s.componentDidUpdate = function(e) {
                void 0 !== s.props.open && s.props.open != e.open && (s.props.open ? s.instance.show() : s.instance.hide())
            }, s.render = function() {
                /* eslint-disable no-unused-vars */
                var t = s.props,
                    a = t.children,
                    n = t.inset,
                    r = (t.collapsible, Bn(t, ["children", "inset", "collapsible"])),
                    i = "mbsc-form-group " + (void 0 !== n ? "-inset" : "") + (s.props.className || "");
                return e.createElement("div", Jn({
                    className: i
                }, r), a)
            }, s
        }
        return d(n, a), n
    }(e.Component), Wn.propTypes = {
        collapsible: a.any,
        open: a.bool
    }, Un);
    n.MbscFormGroup = fs;
    var vs = function(t) {
        function a(t) {
            i(this, a);
            var n = u(this, (a.__proto__ || Object.getPrototypeOf(a)).call(this, t));
            return n.render = function() {
                return e.createElement("div", {
                    className: n.cssClasses
                }, n.props.children)
            }, n.cssClasses = "mbsc-form-group-title " + (n.props.className || ""), n
        }
        return d(a, t), a
    }(e.Component);
    n.MbscFormGroupTitle = vs;
    var bs = function(t) {
        function a(t) {
            i(this, a);
            var n = u(this, (a.__proto__ || Object.getPrototypeOf(a)).call(this, t));
            return n.render = function() {
                return e.createElement("div", {
                    className: n.cssClasses
                }, n.props.children)
            }, n.cssClasses = "mbsc-form-group-content " + (n.props.className || ""), n
        }
        return d(a, t), a
    }(e.Component);
    n.MbscFormGroupContent = bs;
    var gs = function(t) {
        function a(t) {
            i(this, a);
            var n = u(this, (a.__proto__ || Object.getPrototypeOf(a)).call(this, t));
            return n.render = function() {
                return e.createElement("div", {
                    className: n.cssClasses
                }, n.props.children)
            }, n.cssClasses = "mbsc-accordion " + (n.props.className || ""), n
        }
        return d(a, t), a
    }(e.Component);
    n.Accordion = gs;
    var xs = {
            invalid: [],
            showInput: !0,
            inputClass: "",
            itemSelector: "li"
        },
        Ts = function(e) {
            var t, a, n, s = ge({}, e.settings),
                r = ge(e.settings, xs, s),
                i = r.layout || (/top|bottom/.test(r.display) ? "liquid" : ""),
                o = "liquid" == i,
                l = r.readonly,
                c = pe(this),
                d = this.id + "_dummy",
                u = 0,
                m = 0,
                p = [],
                h = r.wheelArray || function t(a) {
                    var n = [];
                    u = u > m++ ? u : m;
                    var s = a.length > 1 ? a : a.children(r.itemSelector);
                    s.each(function(a) {
                        var s = pe(this),
                            i = s.clone();
                        i.children("ul,ol").remove(), i.children(r.itemSelector).remove();
                        var o = e._processMarkup ? e._processMarkup(i) : i.html().replace(/^\s\s*/, "").replace(/\s\s*$/, ""),
                            l = !!s.attr("data-invalid"),
                            c = {
                                key: void 0 === s.attr("data-val") || null === s.attr("data-val") ? a : s.attr("data-val"),
                                value: o,
                                invalid: l,
                                children: null
                            },
                            d = "li" === r.itemSelector ? s.children("ul,ol") : s.children(r.itemSelector);
                        d.length && (c.children = t(d)), n.push(c)
                    });
                    m--;
                    return n
                }(c),
                f = function(e) {
                    var t, a = [],
                        n = e,
                        s = !0,
                        r = 0;
                    for (; s;) t = x(n), a[r++] = t.key, (s = t.children) && (n = s);
                    return a
                }(h),
                v = g(f, u);

            function b(e, t, a) {
                for (var n, s = 0, r = a, i = []; s < t;) {
                    var o = e[s];
                    for (n in r)
                        if (r[n].key == o) {
                            r = r[n].children;
                            break
                        }
                    s++
                }
                for (s = 0; s < r.length;) r[s].invalid && i.push(r[s].key), s++;
                return i
            }

            function g(e, t) {
                for (var a, n, s, r = 0, i = [
                        []
                    ], l = h; r < e.length;) {
                    for (o ? i[0][r] = T(l, r) : i[r] = [T(l, r)], a = 0, s = void 0; a < l.length && void 0 === s;) l[a].key == e[r] && (void 0 !== t && r <= t || void 0 === t) && (s = a), a++;
                    if (void 0 !== s && l[s].children) r++, l = l[s].children;
                    else {
                        if (!(n = x(l)) || !n.children) return i;
                        r++, l = n.children
                    }
                }
                return i
            }

            function x(e, t) {
                if (!e) return !1;
                for (var a, n = 0; n < e.length;)
                    if (!(a = e[n++]).invalid) return t ? n - 1 : a;
                return !1
            }

            function T(e, t) {
                for (var a = {
                        data: [],
                        label: r.labels && r.labels[t] ? r.labels[t] : t
                    }, n = 0; n < e.length;) a.data.push({
                    value: e[n].key,
                    display: e[n].value
                }), n++;
                return a
            }

            function y(t) {
                e._isVisible && pe(".mbsc-sc-whl-w", e._markup).css("display", "").slice(t).hide()
            }

            function _(e, t) {
                var a, n, s, r = [],
                    i = h,
                    o = 0,
                    l = !1;
                if (void 0 !== e[o] && o <= t)
                    for (a = 0, n = e[o], s = void 0; a < i.length && void 0 === s;) i[a].key != e[o] || i[a].invalid || (s = a), a++;
                else n = i[s = x(i, !0)] && i[s].key;
                for (l = !!i[s] && i[s].children, r[o] = n; l;) {
                    if (i = i[s].children, l = !1, s = void 0, void 0 !== e[++o] && o <= t)
                        for (a = 0, n = e[o], s = void 0; a < i.length && void 0 === s;) i[a].key != e[o] || i[a].invalid || (s = a), a++;
                    else n = i[s = !1 === (s = x(i, !0)) ? void 0 : s].key;
                    l = !(void 0 === s || !x(i[s].children)) && i[s].children, r[o] = n
                }
                return {
                    lvl: o + 1,
                    nVector: r
                }
            }

            function w(t, n, s) {
                var r, i, l = (n || 0) + 1,
                    c = [],
                    d = {};
                for (i = g(t, n), r = 0; r < t.length; r++) e._tempWheelArray[r] = t[r] = s.nVector[r] || 0;
                for (; l < s.lvl;) d[l] = o ? i[0][l] : i[l][0], c.push(l++);
                y(s.lvl), p = t.slice(0), c.length && (a = !0, e.changeWheel(d))
            }
            return pe("#" + d).remove(), r.input ? t = pe(r.input) : r.showInput && (t = pe('<input type="text" id="' + d + '" value="" class="' + r.inputClass + '" placeholder="' + (r.placeholder || "") + '" readonly />').insertBefore(c)), t && e.attachShow(t), r.wheelArray || c.hide(), {
                wheels: v,
                anchor: t,
                layout: i,
                headerText: !1,
                setOnTap: 1 == u,
                formatValue: function(e) {
                    return void 0 === n && (n = _(e, e.length).lvl), e.slice(0, n).join(" ")
                },
                parseValue: function(e) {
                    return e ? (e + "").split(" ") : (r.defaultValue || f).slice(0)
                },
                onBeforeShow: function() {
                    var t = e.getArrayVal(!0);
                    p = t.slice(0), r.wheels = g(t, u), a = !0
                },
                onWheelGestureStart: function(e) {
                    r.readonly = function(e, t) {
                        for (var a = []; e;) a[--e] = !0;
                        return a[t] = !1, a
                    }(u, e.index)
                },
                onWheelAnimationEnd: function(t) {
                    var a = t.index,
                        s = e.getArrayVal(!0),
                        i = _(s, a);
                    n = i.lvl, r.readonly = l, s[a] != p[a] && w(s, a, i)
                },
                onFill: function(e) {
                    n = void 0, t && t.val(e.valueText)
                },
                validate: function(e) {
                    var t = e.values,
                        s = e.index,
                        r = _(t, t.length);
                    return n = r.lvl, void 0 === s && (y(r.lvl), a || w(t, s, r)), a = !1, {
                        disabled: function(e, t, a) {
                            for (var n = 0, s = []; n < e;) s[n] = b(a, n, t), n++;
                            return s
                        }(n, h, t)
                    }
                },
                onDestroy: function() {
                    t && pe("#" + d).remove(), c.show()
                }
            }
        };
    Tt.image = function(e) {
        return e.settings.enhance && (e._processMarkup = function(e) {
            var t = e.attr("data-icon");
            return e.children().each(function(e, t) {
                (t = pe(t)).is("img") ? pe('<div class="mbsc-img-c"></div>').insertAfter(t).append(t.addClass("mbsc-img")) : t.is("p") && t.addClass("mbsc-img-txt")
            }), t && e.prepend('<div class="mbsc-ic mbsc-ic-' + t + '"></div'), e.html('<div class="mbsc-img-w">' + e.html() + "</div>"), e.html()
        }), Ts.call(this, e)
    };
    var ys, _s = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var a = arguments[t];
                for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n])
            }
            return e
        },
        ws = {
            defaultValue: a.arrayOf(a.number),
            enhance: a.bool,
            inputClass: a.string,
            invalid: a.array,
            labels: a.arrayOf(a.string),
            placeholder: a.string,
            showInput: a.bool
        },
        Cs = function(e) {
            function t(e) {
                i(this, t);
                var a = u(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                return a.mbscInit = {
                    preset: "image"
                }, a
            }
            return d(t, Qe), t
        }();
    Cs.propTypes = _s({}, Cs.propTypes, ws), n.Image = Cs;
    var Ms = 1,
        Ss = "transparent",
        Ds = function(e, t) {
            var a, s, i, o, l, c, d, u, m, p, h, f, v, b, g, x, T, y, _, w, C, M, S, D, k, O, N, V, I, F, H, L, z, R, W, U, J, K, G, X, Z, Q, ee, te, ae, ne, se, re, ie, oe, le, ce, de, ue, me, he, ve, be, Te, ye, _e, we, Ce, Me, Se, De, ke, Oe, Ne, Ve, Pe, Ee, Ae, Ie, Fe, je, He, Le, ze, Ye, $e, We, Je, Be, qe, Ge, Xe, Ze, Qe, et, nt, st, rt, it, ot, lt, ct, dt = this,
                ut = e,
                mt = pe(ut),
                pt = 0,
                ht = 0,
                ft = 0,
                vt = {},
                bt = {},
                gt = {};

            function xt() {
                Ve = !1, we = !1, o = 0, ze = 0, Ye = new Date, ae = p.width(), v = Bt(p), re = v.index(ne), se = ne[0].offsetHeight, ft = ne[0].offsetTop, et = nt[ne.attr("data-type") || "defaults"], Le = et.stages
            }

            function Tt(e) {
                var t;
                "touchstart" === e.type && (Ce = !0, clearTimeout(Me)), !tt(e, this) || a || pt || ys || ra || !n.wJOcy || (a = !0, l = !0, $e = q(e, "X"), We = q(e, "Y"), y = 0, _ = 0, ne = pe(this), t = ne, xt(), Xe = Ae.onItemTap || et.tap || ne.hasClass("mbsc-lv-parent") || ne.hasClass("mbsc-lv-back"), le = ne.offset().top, Xe && (i = setTimeout(function() {
                    t.addClass("mbsc-lv-item-active"), N("onItemActivate", {
                        target: t[0],
                        domEvent: e
                    })
                }, 120)), dt.sortable && !ne.hasClass("mbsc-lv-back") && (dt.sortable.group || (ye = ne.nextUntil(".mbsc-lv-gr-title").filter(".mbsc-lv-item"), Se = ne.prevUntil(".mbsc-lv-gr-title").filter(".mbsc-lv-item")), me = (dt.sortable.group ? p.children(oe).eq(0) : Se.length ? Se.eq(-1) : ne)[0].offsetTop - ft, ue = (dt.sortable.group ? p.children(oe).eq(-1) : ye.length ? ye.eq(-1) : ne)[0].offsetTop - ft, dt.sortable.handle ? pe(e.target).hasClass("mbsc-lv-handle") && (clearTimeout(i), "Moz" === Ke ? (e.preventDefault(), St()) : Qe = setTimeout(function() {
                    St()
                }, 100)) : Qe = setTimeout(function() {
                    V.appendTo(ne), V[0].style[Ke + "Animation"] = "mbsc-lv-fill " + (Ae.sortDelay - 100) + "ms linear", clearTimeout(D), clearTimeout(i), l = !1, Qe = setTimeout(function() {
                        V[0].style[Ke + "Animation"] = "", St()
                    }, Ae.sortDelay - 80)
                }, 80)), "mousedown" == e.type && pe(document).on("mousemove", yt).on("mouseup", _t))
            }

            function yt(e) {
                var t = !1,
                    n = !0,
                    s = o;
                if (a)
                    if (k = q(e, "X"), O = q(e, "Y"), y = k - $e, _ = O - We, clearTimeout(D), M || Be || Ie || ne.hasClass("mbsc-lv-back") || (Math.abs(_) > 10 ? (Ie = !0, _t(ge({}, e, {
                            type: "mousemove" == e.type ? "mouseup" : "touchend"
                        })), clearTimeout(i)) : Math.abs(y) > 7 && wt()), Be) e.preventDefault(), o = y / ae * 100, Ct(s);
                    else if (M) {
                    e.preventDefault();
                    var r, l = it.scrollTop(),
                        c = Math.max(me, Math.min(_ + lt, ue)),
                        d = L ? le - ct + l - lt : le;
                    ot + l < d + c + se ? (it.scrollTop(d + c - ot + se), r = !0) : d + c < l && (it.scrollTop(d + c), r = !0), r && (lt += it.scrollTop() - l), be && (dt.sortable.multiLevel && ve.hasClass("mbsc-lv-parent") ? ft + se / 4 + c > be ? t = !0 : ft + se - se / 4 + c > be && (w = ve.addClass("mbsc-lv-item-hl"), n = !1) : ft + se / 2 + c > be && (ve.hasClass("mbsc-lv-back") ? dt.sortable.multiLevel && (C = ve.addClass("mbsc-lv-item-hl"), n = !1) : t = !0), t && (De.insertAfter(ve), ke = ve, ve = qt(ve, "next"), Oe = be, be = ve.length && ve[0].offsetTop, m++)), !t && Oe && (dt.sortable.multiLevel && ke.hasClass("mbsc-lv-parent") ? ft + se - se / 4 + c < Oe ? t = !0 : ft + se / 4 + c < Oe && (w = ke.addClass("mbsc-lv-item-hl"), n = !1) : ft + se / 2 + c < Oe && (ke.hasClass("mbsc-lv-back") ? dt.sortable.multiLevel && (C = ke.addClass("mbsc-lv-item-hl"), n = !1) : t = !0), t && (De.insertBefore(ke), ve = ke, ke = qt(ke, "prev"), be = Oe, Oe = ke.length && ke[0].offsetTop + ke[0].offsetHeight, m--)), n && (w && (w.removeClass("mbsc-lv-item-hl"), w = !1), C && (C.removeClass("mbsc-lv-item-hl"), C = !1)), t && N("onSortChange", {
                        target: ne[0],
                        index: m
                    }), Ht(ne, c), N("onSort", {
                        target: ne[0],
                        index: m
                    })
                } else(Math.abs(y) > 5 || Math.abs(_) > 5) && Lt()
            }

            function _t(e) {
                var t, n, s, r = ne;
                a && (a = !1, Lt(), "mouseup" == e.type && pe(document).off("mousemove", yt).off("mouseup", _t), Ie || (Me = setTimeout(function() {
                    Ce = !1
                }, 300)), (Be || Ie || M) && (we = !0), Be ? Mt() : M ? (s = p, w ? (Rt(ne.detach()), n = gt[w.attr("data-ref")], m = Bt(n.child).length, w.removeClass("mbsc-lv-item-hl"), Ae.navigateOnDrop ? ta(w, function() {
                    dt.add(null, ne, null, null, w, !0), Qt(ne), Dt(ne, re, s, !0)
                }) : (dt.add(null, ne, null, null, w, !0), Dt(ne, re, s, !0))) : C ? (Rt(ne.detach()), n = gt[C.attr("data-back")], m = Bt(n.parent).index(n.item) + 1, C.removeClass("mbsc-lv-item-hl"), Ae.navigateOnDrop ? ta(C, function() {
                    dt.add(null, ne, m, null, p, !0), Qt(ne), Dt(ne, re, s, !0)
                }) : (dt.add(null, ne, m, null, n.parent, !0), Dt(ne, re, s, !0))) : (t = De[0].offsetTop - ft, Ht(ne, t, 6 * Math.abs(t - Math.max(me, Math.min(_ + lt, ue))), function() {
                    Rt(ne), ne.insertBefore(De), Dt(ne, re, s, m !== re)
                })), M = !1) : !Ie && Math.abs(y) < 5 && Math.abs(_) < 5 && (et.tap && et.tap.call(ut, {
                    target: ne,
                    index: re,
                    domEvent: e
                }, dt), Xe && ("touchend" === e.type && B(), ne.addClass("mbsc-lv-item-active"), N("onItemActivate", {
                    target: ne[0],
                    domEvent: e
                })), !1 !== N("onItemTap", {
                    target: ne[0],
                    index: re,
                    domEvent: e
                }) && ta(ne)), clearTimeout(i), setTimeout(function() {
                    r.removeClass("mbsc-lv-item-active"), N("onItemDeactivate", {
                        target: r[0]
                    })
                }, 100), Ie = !1, b = null)
            }

            function wt() {
                (Be = Wt(et.swipe, {
                    target: ne[0],
                    index: re,
                    direction: y > 0 ? "right" : "left"
                })) && (Lt(), clearTimeout(i), et.actions ? (s = Zt(et, y), he.html(et.icons).show().children().css("width", s + "%"), ee.hide(), pe(".mbsc-lv-ic-m", te).removeClass("mbsc-lv-ic-disabled"), pe(et.leftMenu).each(Pt), pe(et.rightMenu).each(Pt)) : (ee.show(), he.hide(), g = et.start, b = Le[g], Ne = Le[g - 1], Te = Le[g + 1]), ne.addClass("mbsc-lv-item-swiping").removeClass("mbsc-lv-item-active"), Ze.css("line-height", se + "px"), te.css({
                    top: ft,
                    height: se,
                    backgroundColor: Gt(y)
                }).addClass("mbsc-lv-stage-c-v").appendTo(p.parent()), Ae.iconSlide && ne.append(ee), N("onSlideStart", {
                    target: ne[0],
                    index: re
                }))
            }

            function Ct(e) {
                var t = !1;
                Ee || (et.actions ? te.attr("class", "mbsc-lv-stage-c-v mbsc-lv-stage-c mbsc-lv-" + (o < 0 ? "right" : "left")) : (Ne && (o < 0 ? o <= Ne.percent : o < b.percent) ? (Te = b, b = Ne, Ne = Le[--g - 1], t = !0) : Te && (o < 0 ? o > b.percent : o >= Te.percent) && (Ne = b, b = Te, Te = Le[++g + 1], t = !0), b && ((t || o > 0 == e <= 0) && zt(b, Ae.iconSlide), t && N("onStageChange", {
                    target: ne[0],
                    index: re,
                    stage: b
                }))), Fe || (Ee = !0, Pe = P(It)))
            }

            function Mt(e) {
                var t, a, n = !1;
                E(Pe), Ee = !1, Fe || It(), et.actions ? Math.abs(o) > 10 && s && (jt(ne, o < 0 ? -s : s, 200), n = !0, ys = !0, c = ne, d = re, pe(document).on("touchstart.mbsc-lv-conf mousedown.mbsc-lv-conf", function(t) {
                    t.preventDefault(), Ft(ne, !0, e)
                })) : o && (Ae.quickSwipe && !Fe && (t = (a = new Date - Ye) < 300 && y > 50, a < 300 && y < -50 ? (Ve = !0, zt(b = et.left, Ae.iconSlide)) : t && (Ve = !0, zt(b = et.right, Ae.iconSlide))), b && b.action && (Wt(b.disabled, {
                    target: ne[0],
                    index: re
                }) || (n = !0, (ys = Fe || Wt(b.confirm, {
                    target: ne[0],
                    index: re
                })) ? (jt(ne, (o < 0 ? -1 : 1) * ee[0].offsetWidth * 100 / ae, 200, !0), At(b, ne, re, !1, e)) : Et(b, ne, re, e)))), n || Ft(ne, !0, e), Be = !1
            }

            function St() {
                M = !0, w = !1, C = !1, lt = 0, m = re, Ae.vibrate && $(), ve = qt(ne, "next"), be = ve.length && ve[0].offsetTop, ke = qt(ne, "prev"), Oe = ke.length && ke[0].offsetTop + ke[0].offsetHeight, De.height(se).insertAfter(ne), ne.css({
                    top: ft
                }).addClass("mbsc-lv-item-dragging").removeClass("mbsc-lv-item-active").appendTo(S), N("onSortStart", {
                    target: ne[0],
                    index: m
                })
            }

            function Dt(e, t, a, n) {
                e.removeClass("mbsc-lv-item-dragging"), De.remove(), N("onSortEnd", {
                    target: e[0],
                    index: m
                }), Ae.vibrate && $(), n && (dt.addUndoAction(function(n) {
                    dt.move(e, t, null, n, a, !0)
                }, !0), N("onSortUpdate", {
                    target: e[0],
                    index: m
                }))
            }

            function kt() {
                Ce || (clearTimeout(G), ys && pe(document).trigger("touchstart"), U && (dt.close(W, J), U = !1, W = null))
            }

            function Ot() {
                clearTimeout(x), x = setTimeout(function() {
                    ot = it[0].innerHeight || it.innerHeight(), ct = L ? it.offset().top : 0, a && (ft = ne[0].offsetTop, se = ne[0].offsetHeight, te.css({
                        top: ft,
                        height: se
                    }))
                }, 200)
            }

            function Nt(e) {
                we && (e.stopPropagation(), e.preventDefault(), we = !1)
            }

            function Vt() {
                if (M || !a) {
                    var e, t = it.scrollTop(),
                        n = mt.offset().top,
                        s = mt[0].offsetHeight,
                        r = L ? it.offset().top : t;
                    pe(".mbsc-lv-gr-title", mt).each(function(t, a) {
                        pe(a).offset().top < r && (e = a)
                    }), n < r && n + s > r ? F.show().empty().append(pe(e).clone()) : F.hide()
                }
            }

            function Pt(e, t) {
                Wt(t.disabled, {
                    target: ne[0],
                    index: re
                }) && pe(".mbsc-ic-" + t.icon, te).addClass("mbsc-lv-ic-disabled")
            }

            function Et(e, t, a, n) {
                var s, r = {
                    icon: "undo2",
                    text: Ae.undoText,
                    action: function() {
                        dt.undo()
                    }
                };
                e.undo && (dt.startActionTrack(), pe.isFunction(e.undo) && dt.addUndoAction(function() {
                    e.undo.call(ut, {
                        target: t[0],
                        index: a
                    }, dt)
                }), st = t.attr("data-ref")), s = e.action.call(ut, {
                    target: t[0],
                    index: a
                }, dt), e.undo ? (dt.endActionTrack(), !1 !== s && jt(t, +t.attr("data-pos") < 0 ? -100 : 100, 200), De.height(se).insertAfter(t), t.css("top", ft).addClass("mbsc-lv-item-undo"), he.hide(), ee.show(), te.append(ee), zt(r), At(r, t, a, !0, n)) : Ft(t, s, n)
            }

            function At(e, t, a, n, s) {
                var r, i;
                ys = !0, pe(document).off(".mbsc-lv-conf").on("touchstart.mbsc-lv-conf mousedown.mbsc-lv-conf", function(e) {
                    e.preventDefault(), n && $t(t), Ft(t, !0, s)
                }), T || ee.off(".mbsc-lv-conf").on("touchstart.mbsc-lv-conf mousedown.mbsc-lv-conf", function(e) {
                    e.stopPropagation(), r = q(e, "X"), i = q(e, "Y")
                }).on("touchend.mbsc-lv-conf mouseup.mbsc-lv-conf", function(o) {
                    o.preventDefault(), "touchend" === o.type && B(), Math.abs(q(o, "X") - r) < 10 && Math.abs(q(o, "Y") - i) < 10 && (Et(e, t, a, s), n && (rt = null, $t(t)))
                })
            }

            function It() {
                jt(ne, ze + 100 * y / ae), Ee = !1
            }

            function Ft(e, t, a) {
                pe(document).off(".mbsc-lv-conf"), ee.off(".mbsc-lv-conf"), !1 !== t ? jt(e, 0, "0" !== e.attr("data-pos") ? 200 : 0, !1, function() {
                    Yt(e, a), Rt(e)
                }) : Yt(e, a), ys = !1
            }

            function jt(e, t, a, n, s) {
                t = Math.max("right" == Be ? 0 : -100, Math.min(t, "left" == Be ? 0 : 100)), Je = e[0].style, e.attr("data-pos", t), Je[Ke + "Transform"] = "translate3d(" + (n ? ae * t / 100 + "px" : t + "%") + ",0,0)", Je[Ke + "Transition"] = Ue + "transform " + (a || 0) + "ms", s && (pt++, setTimeout(function() {
                    s(), pt--
                }, a)), o = t
            }

            function Ht(e, t, a, n) {
                t = Math.max(me, Math.min(t, ue)), (Je = e[0].style)[Ke + "Transform"] = "translate3d(0," + t + "px,0)", Je[Ke + "Transition"] = Ue + "transform " + (a || 0) + "ms ease-out", n && (pt++, setTimeout(function() {
                    n(), pt--
                }, a))
            }

            function Lt() {
                clearTimeout(Qe), !l && dt.sortable && (l = !0, V.remove())
            }

            function zt(e, t) {
                var a = Wt(e.text, {
                    target: ne[0],
                    index: re
                }) || "";
                Wt(e.disabled, {
                    target: ne[0],
                    index: re
                }) ? te.addClass("mbsc-lv-ic-disabled") : te.removeClass("mbsc-lv-ic-disabled"), te.css("background-color", e.color || (0 === e.percent ? Gt(o) : Ss)), ee.attr("class", "mbsc-lv-ic-c mbsc-lv-ic-" + (t ? "move-" : "") + (o < 0 ? "right" : "left")), Q.attr("class", " mbsc-lv-ic-s mbsc-lv-ic mbsc-ic mbsc-ic-" + (e.icon || "none")), Ze.attr("class", "mbsc-lv-ic-text" + (e.icon ? "" : " mbsc-lv-ic-text-only") + (a ? "" : " mbsc-lv-ic-only")).html(a || "&nbsp;"), Ae.animateIcons && (Ve ? Q.addClass("mbsc-lv-ic-v") : setTimeout(function() {
                    Q.addClass("mbsc-lv-ic-a")
                }, 10))
            }

            function Yt(e, t) {
                a || (Q.attr("class", "mbsc-lv-ic-s mbsc-lv-ic mbsc-ic mbsc-ic-none"), te.attr("style", "").removeClass("mbsc-lv-stage-c-v"), Ze.html("")), te.removeClass("mbsc-lv-left mbsc-lv-right"), e && (N("onSlideEnd", {
                    target: e[0],
                    index: re
                }), t && t())
            }

            function $t(e) {
                e.css("top", "").removeClass("mbsc-lv-item-undo"), rt ? dt.animate(De, "collapse", function() {
                    De.remove()
                }) : De.remove(), Yt(), st = null, rt = null
            }

            function Rt(e) {
                (Je = e[0].style)[Ke + "Transform"] = "", Je[Ke + "Transition"] = "", Je.top = "", e.removeClass("mbsc-lv-item-swiping")
            }

            function Wt(e, t) {
                return pe.isFunction(e) ? e.call(this, t, dt) : e
            }

            function Ut(e) {
                var t, a = e.attr("data-role");
                if (e.attr("data-ref") || (t = Ms++, e.attr("data-ref", t), gt[t] = {
                        item: e,
                        child: e.children(de),
                        parent: e.parent(),
                        ref: e.parent()[0] === ut ? null : e.parent().parent().attr("data-ref")
                    }), e.addClass("list-divider" == a ? "mbsc-lv-gr-title" : "mbsc-lv-item"), dt.sortable.handle && "list-divider" != a && !e.children(".mbsc-lv-handle-c").length && e.append(z), Ae.enhance && !e.hasClass("mbsc-lv-item-enhanced")) {
                    var s = e.attr("data-icon"),
                        r = e.find("img").eq(0).addClass("mbsc-lv-img");
                    r.is(":first-child") ? e.addClass("mbsc-lv-img-" + (Ae.rtl ? "right" : "left")) : r.length && e.addClass("mbsc-lv-img-" + (Ae.rtl ? "left" : "right")), e.addClass("mbsc-lv-item-enhanced").children().each(function(e, t) {
                        (t = pe(t)).is("p, h1, h2, h3, h4, h5, h6") && t.addClass("mbsc-lv-txt")
                    }), s && e.addClass("mbsc-lv-item-ic-" + (e.attr("data-icon-align") || (Ae.rtl ? "right" : "left"))).append('<div class="mbsc-lv-item-ic mbsc-ic mbsc-ic-' + s + '"></div>')
                }
                e.append(dt._getText(n, .2))
            }

            function Jt(e) {
                pe(oe, e).not(".mbsc-lv-item").each(function() {
                    Ut(pe(this))
                }), pe(de, e).not(".mbsc-lv").addClass("mbsc-lv").prepend(X).parent().addClass("mbsc-lv-parent").prepend(Z), pe(".mbsc-lv-back", e).each(function() {
                    pe(this).attr("data-back", pe(this).parent().parent().attr("data-ref"))
                })
            }

            function Bt(e) {
                return e.children(oe).not(".mbsc-lv-back").not(".mbsc-lv-removed").not(".mbsc-lv-ph")
            }

            function Kt(e) {
                return "object" !== (void 0 === e ? "undefined" : r(e)) && (e = pe(oe, u).filter('[data-id="' + e + '"]')), pe(e)
            }

            function qt(e, t) {
                for (e = e[t](); e.length && (!e.hasClass("mbsc-lv-item") || e.hasClass("mbsc-lv-ph") || e.hasClass("mbsc-lv-item-dragging"));) {
                    if (!dt.sortable.group && e.hasClass("mbsc-lv-gr-title")) return !1;
                    e = e[t]()
                }
                return e
            }

            function Gt(e) {
                return (e > 0 ? et.right : et.left).color || Ss
            }

            function Xt(e) {
                return j(e) ? e + "" : 0
            }

            function Zt(e, t) {
                return +(t < 0 ? Xt((e.actionsWidth || 0).right) || Xt(e.actionsWidth) || Xt(Ae.actionsWidth.right) || Xt(Ae.actionsWidth) : Xt((e.actionsWidth || 0).left) || Xt(e.actionsWidth) || Xt(Ae.actionsWidth.left) || Xt(Ae.actionsWidth))
            }

            function Qt(e, t) {
                if (e) {
                    var a = it.scrollTop(),
                        n = e.is(".mbsc-lv-item") ? e[0].offsetHeight : 0,
                        s = e.offset().top + (L ? a - ct : 0);
                    t ? (s < a || s + n > a + ot) && it.scrollTop(s) : s < a ? it.scrollTop(s) : s + n > a + ot && it.scrollTop(Math.min(s, s + n - ot / 2))
                }
            }

            function ea(e, t, a, n, s) {
                var r = t.parent(),
                    i = t.prev();
                n = n || A, i[0] === ee[0] && (i = ee.prev()), p[0] !== t[0] ? (N("onNavStart", {
                    level: ht,
                    direction: e,
                    list: t[0]
                }), je.prepend(t.addClass("mbsc-lv-v mbsc-lv-sl-new")), Qt(u), aa(je, "mbsc-lv-sl-" + e, function() {
                    p.removeClass("mbsc-lv-sl-curr"), t.removeClass("mbsc-lv-sl-new").addClass("mbsc-lv-sl-curr"), h && h.length ? p.removeClass("mbsc-lv-v").insertAfter(h) : f.append(p.removeClass("mbsc-lv-v")), h = i, f = r, p = t, Qt(a, s), n.call(ut, a), N("onNavEnd", {
                        level: ht,
                        direction: e,
                        list: t[0]
                    })
                })) : (Qt(a, s), n.call(ut, a))
            }

            function ta(e, t) {
                pt || (e.hasClass("mbsc-lv-parent") ? (ht++, ea("r", gt[e.attr("data-ref")].child, null, t)) : e.hasClass("mbsc-lv-back") && (ht--, ea("l", gt[e.attr("data-back")].parent, gt[e.attr("data-back")].item, t)))
            }

            function aa(e, t, a) {
                var n;

                function s() {
                    clearTimeout(n), pt--, e.off(Re, s).removeClass(t), a.call(ut, e)
                }
                a = a || A, Ae.animation && "mbsc-lv-item-none" !== t ? (pt++, e.on(Re, s).addClass(t), n = setTimeout(s, 250)) : a.call(ut, e)
            }

            function na(e, t) {
                var a, n = e.attr("data-ref");
                a = bt[n] = bt[n] || [], t && a.push(t), e.attr("data-action") || (t = a.shift()) && (e.attr("data-action", 1), t(function() {
                    e.removeAttr("data-action"), a.length ? na(e) : delete bt[n]
                }))
            }

            function sa(e, t, a) {
                var n, s;
                e && e.length && (n = 100 / (e.length + 2), pe.each(e, function(r, i) {
                    void 0 === i.key && (i.key = He++), void 0 === i.percent && (i.percent = t * n * (r + 1), a && ((s = ge({}, i)).key = He++, s.percent = -n * (r + 1), e.push(s), vt[s.key] = s)), vt[i.key] = i
                }))
            }
            xe.call(this, e, t, !0), dt.animate = function(e, t, a) {
                aa(e, "mbsc-lv-item-" + t, a)
            }, dt.add = function(e, t, a, n, s, i) {
                var o, l, c, d, m, p, h = "",
                    f = void 0 === s ? mt : Kt(s),
                    v = f,
                    b = "object" !== (void 0 === t ? "undefined" : r(t)) ? pe("<" + ie + ' data-ref="' + Ms++ + '" data-id="' + e + '">' + t + "</" + ie + ">") : pe(t),
                    g = b[0],
                    x = g.style,
                    T = b.attr("data-pos") < 0 ? "left" : "right",
                    y = b.attr("data-ref");
                n = n || A, y || (y = Ms++, b.attr("data-ref", y)), Ut(b), i || dt.addUndoAction(function(e) {
                    d ? dt.navigate(f, function() {
                        v.remove(), f.removeClass("mbsc-lv-parent").children(".mbsc-lv-arr").remove(), m.child = f.children(de), dt.remove(b, null, e, !0)
                    }) : dt.remove(b, null, e, !0)
                }, !0), na(b, function(e) {
                    Rt(b.css("top", "").removeClass("mbsc-lv-item-undo")), f.is(oe) ? (p = f.attr("data-ref"), f.children(de).length || (d = !0, f.append("<" + ce + "></" + ce + ">"))) : p = f.children(".mbsc-lv-back").attr("data-back"), (m = gt[p]) && (m.child.length ? v = m.child : (f.addClass("mbsc-lv-parent").prepend(Z), v = f.children(de).prepend(X).addClass("mbsc-lv"), m.child = v, pe(".mbsc-lv-back", f).attr("data-back", p))), gt[y] = {
                        item: b,
                        child: b.children(de),
                        parent: v,
                        ref: p
                    }, c = Bt(v), l = c.length, void 0 !== a && null !== a || (a = l), i && (h = "mbsc-lv-item-new-" + (i ? T : "")), Jt(b.addClass(h)), !1 !== a && (l ? a < l ? b.insertBefore(c.eq(a)) : b.insertAfter(c.eq(l - 1)) : (o = pe(".mbsc-lv-back", v)).length ? b.insertAfter(o) : v.append(b)), u.trigger("mbsc-refresh"), v.hasClass("mbsc-lv-v") ? (x.height = g.offsetHeight + "px", dt.animate(b, i && st === y ? "none" : "expand", function(t) {
                        dt.animate(t, i ? "add-" + T : "pop-in", function(t) {
                            x.height = "", n.call(ut, t.removeClass(h)), e()
                        })
                    })) : (n.call(ut, b.removeClass(h)), e()), N("onItemAdd", {
                        target: g
                    })
                })
            }, dt.swipe = function(e, t, n, s, r) {
                var i;
                e = Kt(e), ne = e, T = s, Fe = !0, a = !0, n = void 0 === n ? 300 : n, y = t > 0 ? 1 : -1, xt(), wt(), jt(e, t, n), clearTimeout(Ge), clearInterval(qe), qe = setInterval(function() {
                    i = o, o = at(e) / ae * 100, Ct(i)
                }, 10), Ge = setTimeout(function() {
                    clearInterval(qe), i = o, o = t, Ct(i), Mt(r), T = !1, Fe = !1, a = !1
                }, n)
            }, dt.openStage = function(e, t, a, n) {
                vt[t] && dt.swipe(e, vt[t].percent, a, n)
            }, dt.openActions = function(e, t, a, n) {
                e = Kt(e);
                var s = Zt(nt[e.attr("data-type") || "defaults"], "left" == t ? -1 : 1);
                dt.swipe(e, "left" == t ? -s : s, a, n)
            }, dt.close = function(e, t) {
                dt.swipe(e, 0, t)
            }, dt.remove = function(e, t, a, n) {
                var s, r, i, o;
                a = a || A, (e = Kt(e)).length && (r = e.parent(), s = Bt(r).index(e), o = e[0].style, i = e.attr("data-ref"), delete gt[i], n || (e.attr("data-ref") === st && (rt = !0), dt.addUndoAction(function(t) {
                    dt.add(null, e, s, t, r, !0)
                }, !0)), na(e, function(s) {
                    t = t || (e.attr("data-pos") < 0 ? "left" : "right"), r.hasClass("mbsc-lv-v") ? dt.animate(e.addClass("mbsc-lv-removed"), n ? "pop-out" : "remove-" + t, function(e) {
                        o.height = e[0].offsetHeight + "px", dt.animate(e, "collapse", function(e) {
                            o.height = "", Rt(e.removeClass("mbsc-lv-removed")), !1 !== a.call(ut, e) && e.remove(), s()
                        })
                    }) : (!1 !== a.call(ut, e) && e.remove(), s()), N("onItemRemove", {
                        target: e[0]
                    })
                }))
            }, dt.move = function(e, t, a, n, s, r) {
                e = Kt(e), r || dt.startActionTrack(), te.append(ee), dt.remove(e, a, null, r), dt.add(null, e, t, n, s, r), r || dt.endActionTrack()
            }, dt.navigate = function(e, t) {
                var a, n;
                e = Kt(e), a = gt[e.attr("data-ref")], n = function(e) {
                    for (var t = 0, a = gt[e.attr("data-ref")]; a && a.ref;) t++, a = gt[a.ref];
                    return t
                }(e), a && (ea(n >= ht ? "r" : "l", a.parent, e, t, !0), ht = n)
            }, dt._processSettings = function() {
                mt.is("[mbsc-enhance]") && (H = !0, mt.removeAttr("mbsc-enhance"))
            }, dt._init = function() {
                var e, t, a, n = 0,
                    s = "",
                    r = "",
                    i = "";
                ce = Ae.listNode, de = Ae.listSelector, ie = Ae.itemNode, oe = Ae.itemSelector, a = dt.remote.listview.sortable, dt.remote.listview.handlePos, z = dt.remote.listview.handleDiv, X = dt.remote.listview.htmlLeft, Z = dt.remote.listview.htmlRight, e = dt.remote.listview.contClass, dt.sortable = a || !1, u ? (u.attr("class", e), pe(".mbsc-lv-handle-c", u).remove(), pe(oe, u).not(".mbsc-lv-back").removeClass("mbsc-lv-item")) : (s += '<div class="mbsc-lv-multi-c"></div>', s += '<div class="mbsc-lv-ic-c"><div class="mbsc-lv-ic-s mbsc-lv-ic mbsc-ic mbsc-ic-none"></div><div class="mbsc-lv-ic-text"></div></div>', mt.addClass("mbsc-lv mbsc-lv-v mbsc-lv-root").removeClass("mbsc-cloak").show(), te = pe('<div class="mbsc-lv-stage-c">' + s + "</div>"), ee = pe(".mbsc-lv-ic-c", te), he = pe(".mbsc-lv-multi-c", te), Q = pe(".mbsc-lv-ic-s", te), Ze = pe(".mbsc-lv-ic-text", te), De = pe("<" + ie + ' class="mbsc-lv-item mbsc-lv-ph"></' + ie + ">"), V = pe('<div class="mbsc-lv-fill-item"></div>'), u = pe('<div class="' + e + '"><' + ce + ' class="mbsc-lv mbsc-lv-dummy"></' + ce + '><div class="mbsc-lv-sl-c"></div></div>'), L = "body" !== Ae.context, it = pe(L ? Ae.context : window), S = pe(".mbsc-lv-dummy", u), u.insertAfter(mt), it.on("orientationchange resize", Ot), Ot(), u.on("touchstart mousedown", ".mbsc-lv-item", Tt).on("touchmove", ".mbsc-lv-item", yt).on("touchend touchcancel", ".mbsc-lv-item", _t), ut.addEventListener("click", Nt, !0), u.on("touchstart mousedown", ".mbsc-lv-ic-m", function(e) {
                    T || (e.stopPropagation(), e.preventDefault()), $e = q(e, "X"), We = q(e, "Y")
                }).on("touchend mouseup", ".mbsc-lv-ic-m", function(e) {
                    T || ("touchend" === e.type && B(), ys && !pe(this).hasClass("mbsc-lv-ic-disabled") && Math.abs(q(e, "X") - $e) < 10 && Math.abs(q(e, "Y") - We) < 10 && Et((o < 0 ? et.rightMenu : et.leftMenu)[pe(this).index()], c, d))
                }), je = pe(".mbsc-lv-sl-c", u).append(mt.addClass("mbsc-lv-sl-curr")).attr("data-ref", Ms++), p = mt, f = u), Jt(mt), He = 0, (nt = Ae.itemGroups || {}).defaults = {
                    swipeleft: Ae.swipeleft,
                    swiperight: Ae.swiperight,
                    stages: Ae.stages,
                    actions: Ae.actions,
                    actionsWidth: Ae.actionsWidth
                }, pe.each(nt, function(e, t) {
                    if (t.swipe = void 0 !== t.swipe ? t.swipe : Ae.swipe, t.stages = t.stages || [], sa(t.stages, 1, !0), sa(t.stages.left, 1), sa(t.stages.right, -1), (t.stages.left || t.stages.right) && (t.stages = [].concat(t.stages.left || [], t.stages.right || [])), I = !1, t.stages.length || (t.swipeleft && t.stages.push({
                            percent: -30,
                            action: t.swipeleft
                        }), t.swiperight && t.stages.push({
                            percent: 30,
                            action: t.swiperight
                        })), pe.each(t.stages, function(e, t) {
                            if (0 === t.percent) return I = !0, !1
                        }), I || t.stages.push({
                            percent: 0
                        }), t.stages.sort(function(e, t) {
                            return e.percent - t.percent
                        }), pe.each(t.stages, function(e, a) {
                            if (0 === a.percent) return t.start = e, !1
                        }), I ? t.left = t.right = t.stages[t.start] : (t.left = t.stages[t.start - 1] || {}, t.right = t.stages[t.start + 1] || {}), t.actions) {
                        for (t.leftMenu = t.actions.left || t.actions, t.rightMenu = t.actions.right || t.leftMenu, r = "", i = "", n = 0; n < t.leftMenu.length; n++) r += "<div " + (t.leftMenu[n].color ? 'style="background-color: ' + t.leftMenu[n].color + '"' : "") + ' class="mbsc-lv-ic-m mbsc-lv-ic mbsc-ic mbsc-ic-' + t.leftMenu[n].icon + '">' + (t.leftMenu[n].text || "") + "</div>";
                        for (n = 0; n < t.rightMenu.length; ++n) i += "<div " + (t.rightMenu[n].color ? 'style="background-color: ' + t.rightMenu[n].color + '"' : "") + ' class="mbsc-lv-ic-m mbsc-lv-ic mbsc-ic mbsc-ic-' + t.rightMenu[n].icon + '">' + (t.rightMenu[n].text || "") + "</div>";
                        t.actions.left && (t.swipe = t.actions.right ? t.swipe : "right"), t.actions.right && (t.swipe = t.actions.left ? t.swipe : "left"), t.icons = '<div class="mbsc-lv-multi mbsc-lv-multi-ic-left">' + r + '</div><div class="mbsc-lv-multi mbsc-lv-multi-ic-right">' + i + "</div>"
                    }
                }), Ae.fixedHeader && (t = "mbsc-lv-fixed-header" + (L ? " mbsc-lv-fixed-header-ctx mbsc-lv-" + Ae.theme + (Ae.baseTheme ? " mbsc-lv-" + Ae.baseTheme : "") : ""), F ? F.attr("class", t) : (F = pe('<div class="' + t + '"></div>'), L ? it.before(F) : u.prepend(F), _e = Y(Vt, 200), it.on("scroll touchmove", _e))), Ae.hover && (J || u.on("mouseover.mbsc-lv", ".mbsc-lv-item", function() {
                    W && W[0] == this || (kt(), W = pe(this), nt[W.attr("data-type") || "defaults"].actions && (G = setTimeout(function() {
                        Ce ? W = null : (U = !0, dt.openActions(W, R, J, !1))
                    }, K)))
                }).on("mouseleave.mbsc-lv", kt), J = Ae.hover.time || 200, K = Ae.hover.timeout || 200, R = Ae.hover.direction || Ae.hover || "right"), H && u.attr("mbsc-enhance", ""), u.trigger("mbsc-enhance", [{
                    theme: Ae.theme,
                    lang: Ae.lang
                }])
            }, dt._destroy = function() {
                var e;
                f.append(p), L && F && F.remove(), H && (mt.attr("mbsc-enhance", ""), (e = fe[u[0].id]) && e.destroy()), ut.removeEventListener("click", Nt, !0), u.find(".mbsc-lv-txt,.mbsc-lv-img").removeClass("mbsc-lv-txt mbsc-lv-img"), u.find(de).removeClass("mbsc-lv mbsc-lv-v mbsc-lv-root mbsc-lv-sl-curr").find(oe).removeClass("mbsc-lv-gr-title mbsc-lv-item mbsc-lv-item-enhanced mbsc-lv-parent mbsc-lv-img-left mbsc-lv-img-right mbsc-lv-item-ic-left mbsc-lv-item-ic-right").removeAttr("data-ref"), pe(".mbsc-lv-back,.mbsc-lv-handle-c,.mbsc-lv-arr,.mbsc-lv-item-ic", u).remove(), mt.insertAfter(u), u.remove(), te.remove(), it.off("orientationchange resize", Ot), _e && it.off("scroll touchmove", _e)
            };
            var ra, ia = [],
                oa = [],
                la = [],
                ca = 0;
            dt.startActionTrack = function() {
                ca || (la = []), ca++
            }, dt.endActionTrack = function() {
                --ca || oa.push(la)
            }, dt.addUndoAction = function(e, t) {
                var a = {
                    action: e,
                    async: t
                };
                ca ? la.push(a) : (oa.push([a]), oa.length > Ae.undoLimit && oa.shift())
            }, dt.undo = function() {
                var e, t, a;

                function n() {
                    t < 0 ? (ra = !1, s()) : (e = a[t], t--, e.async ? e.action(n) : (e.action(), n()))
                }

                function s() {
                    (a = ia.shift()) && (ra = !0, t = a.length - 1, n())
                }
                oa.length && ia.push(oa.pop()), ra || s()
            }, Ae = dt.settings, N = dt.trigger, dt.init()
        };
    Ds.prototype = {
        _class: "listview",
        _hasDef: !0,
        _hasTheme: !0,
        _hasLang: !0,
        _defaults: {
            context: "body",
            actionsWidth: 90,
            sortDelay: 250,
            undoLimit: 10,
            swipe: !0,
            quickSwipe: !0,
            animateIcons: !0,
            animation: !0,
            revert: !0,
            vibrate: !0,
            handleClass: "",
            handleMarkup: '<div class="mbsc-lv-handle-bar mbsc-lv-handle"></div><div class="mbsc-lv-handle-bar mbsc-lv-handle"></div><div class="mbsc-lv-handle-bar mbsc-lv-handle"></div>',
            listNode: "ul",
            listSelector: "ul,ol",
            itemNode: "li",
            itemSelector: "li",
            leftArrowClass: "mbsc-ic-arrow-left4",
            rightArrowClass: "mbsc-ic-arrow-right4",
            backText: "Back",
            undoText: "Undo",
            stages: []
        }
    }, ve.ListView = Ds, n.themes.listview.mobiscroll = {
        leftArrowClass: "mbsc-ic-arrow-left5",
        rightArrowClass: "mbsc-ic-arrow-right5"
    };
    var ks, Os, Ns, Vs, Ps = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var a = arguments[t];
            for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n])
        }
        return e
    };
    var Es = (ks = function(e) {
            function t(e) {
                i(this, t);
                var a = u(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                return Os.call(a), a.state = {
                    instanceReady: e.instanceReady
                }, a
            }
            return d(t, e), t
        }(e.Component), Os = function() {
            var a = this;
            this.componentWillLeave = function(e) {
                var n = pe(t.findDOMNode(a));
                a.state.instanceReady ? a.props.instance.remove(n, void 0, function() {
                    return n.parent().find(".mbsc-lv-stage-c").remove(), e(), !1
                }) : e()
            }, this.componentWillEnter = function(e) {
                if (a.state.instanceReady) {
                    var n = pe(t.findDOMNode(a)),
                        s = a.props.parentItem ? pe(t.findDOMNode(a.props.parentItem)) : void 0;
                    if (s) {
                        var r = n.parent();
                        r.prepend(r.children(".mbsc-lv-back"))
                    }
                    a.props.instance.add(null, n, n.index(), void 0, s)
                }
                e()
            }, this.componentWillReceiveProps = function(e) {
                /* eslint-disable no-unused-vars */
                e.instance;
                var t = function(e, t) {
                    var a = {};
                    for (var n in e) t.indexOf(n) >= 0 || Object.prototype.hasOwnProperty.call(e, n) && (a[n] = e[n]);
                    return a
                }(e, ["instance"]);
                a.setState(t)
            }, this.shouldComponentUpdate = function(e, t) {
                return !$e(a.state, t) || !$e(a.props, e)
            }, this.childrenMounted = function(e) {
                var n, s;
                if (a.props.instanceReady)
                    if (e) {
                        var r = pe(t.findDOMNode(a));
                        s = a.props.instance, n = pe(t.findDOMNode(e)).children("li"), r && r.hasClass("mbsc-lv-item") && n.each(function() {
                            var e = pe(this);
                            s.add(null, e, e.index(), void 0, r)
                        })
                    } else {
                        var i = pe(t.findDOMNode(a)).children("ul");
                        s = a.props.instance, (n = i.children("li").not(".mbsc-lv-back")).each(function() {
                            var e = pe(this);
                            s.remove(e, void 0, function() {
                                e.parent().find(".mbsc-lv-stage-c").remove()
                            })
                        })
                    }
            }, this.render = function() {
                var t = ge({}, {
                        item: a.props.item
                    }, a.props.itemProps),
                    n = null;
                return a.props.item.children && (n = void 0 !== e.addons && void 0 !== e.addons.TransitionGroup ? e.createElement(e.addons.TransitionGroup, {
                    component: "ul",
                    ref: a.childrenMounted
                }, a.props.item.children.map(function(t) {
                    return e.createElement(Es, {
                        key: t[this.props.dataKeyField],
                        item: t,
                        instance: this.props.instance,
                        instanceReady: this.props.instanceReady,
                        itemType: this.props.itemType,
                        itemProps: this.props.itemProps,
                        dataKeyField: this.props.dataKeyField,
                        mounter: this.props.mounter,
                        parentItem: this,
                        ref: this.props.mounter(t, this)
                    })
                }, a)) : e.createElement("ul", null, a.props.item.children.map(function(t) {
                    return e.createElement(Es, {
                        key: t[this.props.dataKeyField],
                        item: t,
                        instance: this.props.instance,
                        instanceReady: this.props.instanceReady,
                        itemType: this.props.itemType,
                        itemProps: this.props.itemProps,
                        dataKeyField: this.props.dataKeyField,
                        mounter: this.props.mounter,
                        parentItem: this,
                        ref: this.props.mounter(t, this)
                    })
                }, a))), e.createElement(a.props.itemType, t, n)
            }
        }, ks),
        As = a.object,
        Is = a.array,
        Fs = a.number,
        js = a.bool,
        Hs = a.string,
        Ls = a.func,
        zs = (Vs = Ns = function(a) {
            function n(a) {
                i(this, n);
                var s = u(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, a));
                return s.listMounted = function(e) {
                    s.wrapperList = t.findDOMNode(e)
                }, s.listItemMounted = function(e, a, n) {
                    if (n) {
                        if (void 0 !== s.instance) {
                            var r = pe(t.findDOMNode(n)),
                                i = a ? pe(t.findDOMNode(a)) : void 0;
                            (void 0 === i || i.hasClass("mbsc-lv-item")) && s.instance.add(null, r, r.index(), void 0, i)
                        }
                    } else pe(s.wrapperList).find(".mbsc-lv-stage-c").remove()
                }, s.getMountFunction = function(e, t) {
                    return void 0 === s.mountFunctions[e[s.props.dataKeyField]] && (s.mountFunctions[e[s.props.dataKeyField]] = s.listItemMounted.bind(s, e, t)), s.mountFunctions[e[s.props.dataKeyField]]
                }, s.componentDidMount = function() {
                    var e = ge({}, s.state.options);
                    s.instance = new Ds(s.wrapperList, e), s.setState({
                        instanceReady: !0
                    })
                }, s.render = function() {
                    var t, a = s.state.data.map(function(t) {
                        return e.createElement(Es, {
                            instance: this.instance,
                            instanceReady: this.state.instanceReady,
                            itemType: this.props.itemType,
                            itemProps: this.props.itemProps,
                            key: t[this.props.dataKeyField],
                            dataKeyField: this.props.dataKeyField,
                            ref: this.getMountFunction(t),
                            mounter: this.getMountFunction,
                            item: t
                        })
                    }, s);
                    return t = void 0 !== e.addons && void 0 !== e.addons.TransitionGroup ? e.createElement(e.addons.TransitionGroup, {
                        component: "ul",
                        className: "mbsc-cloak",
                        ref: s.listMounted
                    }, a) : e.createElement("ul", {
                        className: "mbsc-cloak",
                        ref: s.listMounted
                    }, a), e.createElement("div", {
                        className: s.initialCssClass
                    }, t)
                }, s.shouldComponentUpdate = function(e, t) {
                    var a = !$e(t.options, s.state.options),
                        n = !$e(t.data, s.state.data),
                        r = s.state.instanceReady !== t.instanceReady;
                    return s.optimizeUpdate = {
                        updateOptions: a,
                        updateValue: !1,
                        updateData: n
                    }, a || n || r
                }, s.mountFunctions = {}, s
            }
            return d(n, Ge), n
        }(), Ns.propTypes = Ps({}, Fe, {
            dataKeyField: a.string,
            itemType: a.func.isRequired,
            itemProps: As,
            data: a.array.isRequired,
            actions: a.oneOfType([As, Is]),
            actionsWidth: Fs,
            striped: js,
            animateIcons: js,
            display: a.oneOf(["inline"]),
            enhance: js,
            fillAnimation: js,
            fixedHeader: js,
            hover: a.oneOfType([a.shape({
                time: Fs,
                timeout: Fs,
                direction: a.oneOf(["left", "right"])
            }), a.oneOf(["left", "right"])]),
            iconSlide: js,
            itemGroups: As,
            navigateOnDrop: js,
            quickSwipe: js,
            sortable: a.oneOfType([js, As]),
            sortDelay: Fs,
            stages: a.oneOfType([Is, As]),
            swipe: a.oneOfType([Ls, js, a.oneOf(["left", "right"])]),
            swipeLeft: Ls,
            swipeRight: Ls,
            vibrate: js,
            undoText: Hs,
            backText: Hs,
            onItemTap: Ls,
            onItemAdd: Ls,
            onItemRemove: Ls,
            onNavEnd: Ls,
            onNavStart: Ls,
            onSlideEnd: Ls,
            onSlideStart: Ls,
            onSort: Ls,
            onSortChange: Ls,
            onSortStart: Ls,
            onSortEnd: Ls,
            onSortUpdate: Ls,
            onStageChange: Ls
        }), Ns.defaultProps = {
            dataKeyField: "id"
        }, Vs);
    n.Listview = zs;
    var Ys = {
        batch: 50,
        min: 0,
        max: 100,
        defaultUnit: "",
        units: null,
        unitNames: null,
        invalid: [],
        sign: !1,
        step: .05,
        scale: 2,
        convert: function(e) {
            return e
        },
        signText: "&nbsp;",
        wholeText: "Whole",
        fractionText: "Fraction",
        unitText: "Unit"
    };
    Tt.measurement = function(e) {
        var t, a, n, s, r, i, o, l, c, d, u, m, p, h, f = ge({}, e.settings),
            v = ge(e.settings, Ys, f),
            b = {},
            g = [
                []
            ],
            x = {},
            T = {},
            y = {},
            _ = [],
            w = v.sign,
            C = v.units && v.units.length,
            M = C ? v.defaultUnit || v.units[0] : "",
            S = [],
            D = v.step < 1,
            k = v.step > 1 ? v.step : 1,
            O = D ? Math.max(v.scale, (v.step + "").split(".")[1].length) : 1,
            N = Math.pow(10, O),
            V = Math.round(D ? v.step * N : v.step),
            P = 0,
            E = 0,
            A = 0;

        function I(e) {
            return Math.max(c, Math.min(d, D ? e < 0 ? Math.ceil(e) : Math.floor(e) : Y(Math.round(e - P), V) + P))
        }

        function F(e) {
            return D ? Y((Math.abs(e) - Math.abs(I(e))) * N - E, V) + E : 0
        }

        function j(e) {
            var t = I(e),
                a = F(e);
            return a >= N && (e < 0 ? t-- : t++, a = 0), [e < 0 ? "-" : "+", t, a]
        }

        function H(e) {
            var t = +e[r],
                a = D ? e[s] / N * (t < 0 ? -1 : 1) : 0;
            return (w && "-" == e[0] ? -1 : 1) * (t + a)
        }

        function Y(e, t) {
            return Math.round(e / t) * t
        }

        function $(e, t, a) {
            return t !== a && v.convert ? v.convert.call(this, e, t, a) : e
        }

        function R(e) {
            var t, a;
            o = $(v.min, M, e), l = $(v.max, M, e), D ? (c = o < 0 ? Math.ceil(o) : Math.floor(o), d = l < 0 ? Math.ceil(l) : Math.floor(l), u = F(o), m = F(l)) : (c = Math.round(o), d = Math.round(l), d = c + Math.floor((d - c) / V) * V, P = c % V), t = c, a = d, w && (a = Math.abs(t) > Math.abs(a) ? Math.abs(t) : Math.abs(a), t = t < 0 ? 0 : t), T.min = t < 0 ? Math.ceil(t / k) : Math.floor(t / k), T.max = a < 0 ? Math.ceil(a / k) : Math.floor(a / k)
        }

        function W(e) {
            return H(e).toFixed(D ? O : 0) + (C ? " " + S[e[i]] : "")
        }
        if (e.setVal = function(t, a, n, s, r) {
                e._setVal(pe.isArray(t) ? W(t) : t, a, n, s, r)
            }, v.units)
            for (h = 0; h < v.units.length; ++h) p = v.units[h], S.push(v.unitNames && v.unitNames[p] || p);
        if (w)
            if (w = !1, C)
                for (h = 0; h < v.units.length; h++) $(v.min, M, v.units[h]) < 0 && (w = !0);
            else w = v.min < 0;
        if (w && (g[0].push({
                data: ["-", "+"],
                label: v.signText
            }), A++), T = {
                label: v.wholeText,
                data: function(e) {
                    return c % k + e * k
                },
                getIndex: function(e) {
                    return Math.round((e - c % k) / k)
                }
            }, g[0].push(T), r = A++, R(M), D) {
            for (g[0].push(y), y.data = [], y.label = v.fractionText, h = E; h < N; h += V) _.push(h), y.data.push({
                value: h,
                display: "." + z(h, O)
            });
            s = A++, t = Math.ceil(100 / V), v.invalid && v.invalid.length && (pe.each(v.invalid, function(e, t) {
                var a = t > 0 ? Math.floor(t) : Math.ceil(t);
                0 === a && (a = t <= 0 ? -.001 : .001), x[a] = (x[a] || 0) + 1, 0 === t && (x[a = .001] = (x[a] || 0) + 1)
            }), pe.each(x, function(e, a) {
                a < t ? delete x[e] : x[e] = e
            }))
        }
        if (C) {
            for (b = {
                    data: [],
                    label: v.unitText,
                    cssClass: "mbsc-msr-whl-unit",
                    circular: !1
                }, h = 0; h < v.units.length; h++) b.data.push({
                value: h,
                display: S[h]
            });
            g[0].push(b)
        }
        return i = A, {
            wheels: g,
            minWidth: w && D ? 70 : 80,
            showLabel: !1,
            formatValue: W,
            compClass: "mbsc-msr mbsc-sc",
            parseValue: function(e) {
                var t, u = ((("number" == typeof e ? e + "" : e) || v.defaultValue) + "").split(" "),
                    m = +u[0],
                    p = [],
                    h = "";
                return C && (h = -1 == (h = -1 == (h = pe.inArray(u[1], S)) ? pe.inArray(M, v.units) : h) ? 0 : h), R(n = C ? v.units[h] : ""), (t = j(m = L(m = isNaN(m) ? 0 : m, o, l)))[1] = L(t[1], c, d), a = m, w && (p[0] = t[0], t[1] = Math.abs(t[1])), p[r] = t[1], D && (p[s] = t[2]), C && (p[i] = h), p
            },
            onCancel: function() {
                a = void 0
            },
            validate: function(t) {
                var p, h, f, b, g, y = t.values,
                    S = t.index,
                    O = t.direction,
                    N = {},
                    P = [],
                    E = {},
                    I = C ? v.units[y[i]] : "";
                if (w && 0 === S && (a = Math.abs(a) * ("-" == y[0] ? -1 : 1)), (S === r || S === s && D || void 0 === a || void 0 === S) && (a = H(y), n = I), (C && S === i && n !== I || void 0 === S) && (R(I), a = $(a, n, I), n = I, h = j(a), void 0 !== S && (E[r] = T, e.changeWheel(E)), w && (y[0] = h[0])), P[r] = [], w)
                    for (P[0] = [], o > 0 && (P[0].push("-"), y[0] = "+"), l < 0 && (P[0].push("+"), y[0] = "-"), g = Math.abs("-" == y[0] ? c : d), A = g + k; A < g + 20 * k; A += k) P[r].push(A), N[A] = !0;
                if (a = L(a, o, l), h = j(a), f = w ? Math.abs(h[1]) : h[1], p = w ? "-" == y[0] : a < 0, y[r] = f, p && (h[0] = "-"), D && (y[s] = h[2]), pe.each(D ? x : v.invalid, function(e, t) {
                        if (w && p) {
                            if (!(t <= 0)) return;
                            t = Math.abs(t)
                        }
                        t = Y($(t, M, I), D ? 1 : V), N[t] = !0, P[r].push(t)
                    }), y[r] = e.getValidValue(r, f, O, N), h[1] = y[r] * (w && p ? -1 : 1), D) {
                    P[s] = [];
                    var F = w ? y[0] + y[1] : (a < 0 ? "-" : "+") + Math.abs(h[1]),
                        z = (o < 0 ? "-" : "+") + Math.abs(c),
                        W = (l < 0 ? "-" : "+") + Math.abs(d);
                    F === z && pe(_).each(function(e, t) {
                        (p ? t > u : t < u) && P[s].push(t)
                    }), F === W && pe(_).each(function(e, t) {
                        (p ? t < m : t > m) && P[s].push(t)
                    }), pe.each(v.invalid, function(e, t) {
                        b = j($(t, M, I)), (h[0] === b[0] || 0 === h[1] && 0 === b[1] && 0 === b[2]) && h[1] === b[1] && P[s].push(b[2])
                    })
                }
                return {
                    disabled: P,
                    valid: y
                }
            }
        }
    };
    var $s = {
            min: 0,
            max: 100,
            defaultUnit: "km",
            units: ["m", "km", "in", "ft", "yd", "mi"]
        },
        Rs = {
            mm: .001,
            cm: .01,
            dm: .1,
            m: 1,
            dam: 10,
            hm: 100,
            km: 1e3,
            in : .0254,
            ft: .3048,
            yd: .9144,
            ch: 20.1168,
            fur: 201.168,
            mi: 1609.344,
            lea: 4828.032
        };
    Tt.distance = function(e) {
        var t = ge({}, $s, e.settings);
        return ge(e.settings, t, {
            sign: !1,
            convert: function(e, t, a) {
                return e * Rs[t] / Rs[a]
            }
        }), Tt.measurement.call(this, e)
    };
    var Ws = {
            min: 0,
            max: 100,
            defaultUnit: "N",
            units: ["N", "kp", "lbf", "pdl"]
        },
        Us = {
            N: 1,
            kp: 9.80665,
            lbf: 4.448222,
            pdl: .138255
        };
    Tt.force = function(e) {
        var t = ge({}, Ws, e.settings);
        return ge(e.settings, t, {
            sign: !1,
            convert: function(e, t, a) {
                return e * Us[t] / Us[a]
            }
        }), Tt.measurement.call(this, e)
    };
    var Js = {
            min: 0,
            max: 1e3,
            defaultUnit: "kg",
            units: ["g", "kg", "oz", "lb"],
            unitNames: {
                tlong: "t (long)",
                tshort: "t (short)"
            }
        },
        Bs = {
            mg: .001,
            cg: .01,
            dg: .1,
            g: 1,
            dag: 10,
            hg: 100,
            kg: 1e3,
            t: 1e6,
            drc: 1.7718452,
            oz: 28.3495,
            lb: 453.59237,
            st: 6350.29318,
            qtr: 12700.58636,
            cwt: 50802.34544,
            tlong: 1016046.9088,
            tshort: 907184.74
        };
    Tt.mass = function(e) {
        var t = ge({}, Js, e.settings);
        return ge(e.settings, t, {
            sign: !1,
            convert: function(e, t, a) {
                return e * Bs[t] / Bs[a]
            }
        }), Tt.measurement.call(this, e)
    };
    var Ks = {
            min: 0,
            max: 100,
            defaultUnit: "kph",
            units: ["kph", "mph", "mps", "fps", "knot"],
            unitNames: {
                kph: "km/h",
                mph: "mi/h",
                mps: "m/s",
                fps: "ft/s",
                knot: "knot"
            }
        },
        qs = {
            kph: 1,
            mph: 1.60934,
            mps: 3.6,
            fps: 1.09728,
            knot: 1.852
        };
    Tt.speed = function(e) {
        var t = ge({}, Ks, e.settings);
        return ge(e.settings, t, {
            sign: !1,
            convert: function(e, t, a) {
                return e * qs[t] / qs[a]
            }
        }), Tt.measurement.call(this, e)
    };
    var Gs = {
            min: -20,
            max: 40,
            defaultUnit: "c",
            units: ["c", "k", "f", "r"],
            unitNames: {
                c: "°C",
                k: "K",
                f: "°F",
                r: "°R"
            }
        },
        Xs = {
            c2k: function(e) {
                return e + 273.15
            },
            c2f: function(e) {
                return 9 * e / 5 + 32
            },
            c2r: function(e) {
                return 9 * (e + 273.15) / 5
            },
            k2c: function(e) {
                return e - 273.15
            },
            k2f: function(e) {
                return 9 * e / 5 - 459.67
            },
            k2r: function(e) {
                return 9 * e / 5
            },
            f2c: function(e) {
                return 5 * (e - 32) / 9
            },
            f2k: function(e) {
                return 5 * (e + 459.67) / 9
            },
            f2r: function(e) {
                return e + 459.67
            },
            r2c: function(e) {
                return 5 * (e - 491.67) / 9
            },
            r2k: function(e) {
                return 5 * e / 9
            },
            r2f: function(e) {
                return e - 459.67
            }
        };
    Tt.temperature = function(e) {
        var t = ge({}, Gs, e.settings);
        return ge(e.settings, t, {
            sign: !0,
            convert: function(e, t, a) {
                return Xs[t + "2" + a](e)
            }
        }), Tt.measurement.call(this, e)
    };
    var Zs = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var a = arguments[t];
                for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n])
            }
            return e
        },
        Qs = a.number,
        er = a.bool,
        tr = a.string,
        ar = a.object,
        nr = {
            max: Qs,
            min: Qs,
            convert: a.func,
            defaultValue: tr,
            invalid: a.array,
            scale: Qs,
            step: Qs,
            wholeText: tr,
            fractionText: tr,
            signText: tr
        },
        sr = {
            convert: er,
            defaultUnit: tr,
            unitNames: ar,
            units: a.arrayOf(tr)
        },
        rr = function(e) {
            function t(e) {
                i(this, t);
                var a = u(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                return a.mbscInit = {
                    preset: "measurement"
                }, a
            }
            return d(t, Ze), t
        }();
    rr.propTypes = Zs({}, rr.propTypes, He, nr), n.Measurement = rr;
    var ir = function(e) {
        function t(e) {
            i(this, t);
            var a = u(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
            return a.mbscInit = {
                preset: "temperature"
            }, a
        }
        return d(t, rr), t
    }();
    ir.propTypes = Zs({}, ir.propTypes, sr), n.Temperature = ir;
    var or = function(e) {
        function t(e) {
            i(this, t);
            var a = u(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
            return a.mbscInit = {
                preset: "mass"
            }, a
        }
        return d(t, ir), t
    }();
    n.Mass = or;
    var lr = function(e) {
        function t(e) {
            i(this, t);
            var a = u(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
            return a.mbscInit = {
                preset: "force"
            }, a
        }
        return d(t, ir), t
    }();
    n.Force = lr;
    var cr = function(e) {
        function t(e) {
            i(this, t);
            var a = u(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
            return a.mbscInit = {
                preset: "speed"
            }, a
        }
        return d(t, ir), t
    }();
    n.Speed = cr;
    var dr = function(e) {
        function t(e) {
            i(this, t);
            var a = u(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
            return a.mbscInit = {
                preset: "distance"
            }, a
        }
        return d(t, ir), t
    }();
    n.Distance = dr;
    /* eslint-disable no-unused-vars */
    var ur = 1,
        mr = function(e, t, a) {
            var s, i, o, l, c, d, u, m, p, h, f, v, b, g, x, T = {},
                y = 1e3,
                _ = this,
                w = pe(e);

            function C(e) {
                clearTimeout(m), m = setTimeout(function() {
                    D("load" !== e.type)
                }, 200)
            }

            function M(t, a) {
                if (t.length) {
                    if (a = _._onItemTap(t, a), s = t, t.parent()[0] == e) {
                        var n = t.offset().left,
                            r = t[0].offsetLeft,
                            o = t[0].offsetWidth,
                            l = i.offset().left;
                        p && (r = b - r - o), "a" == v.variant ? n < l ? h.scroll(p ? r + o - c : -r, y, !0) : n + o > l + c && h.scroll(p ? r : c - r - o, y, !0) : h.scroll(c / 2 - r - o / 2, y, !0)
                    }
                    a && x("onItemTap", {
                        target: t[0]
                    })
                }
            }

            function S() {
                var e;
                _._initMarkup(i), w.find(".mbsc-ripple").remove(), _._$items = w.children(), _._$items.each(function(t) {
                    var a, r = pe(this),
                        i = r.attr("data-ref");
                    i || (i = ur++), 0 === t && (e = r), s || (s = _._getActiveItem(r)), a = "mbsc-scv-item mbsc-btn-e " + ((_._getItemProps(r) || {}).cssClass || ""), r.attr("data-ref", i).removeClass(T[i]).addClass(a), T[i] = a, r.append(_._getText(n, .2))
                }), s || (s = e), _._markupReady(i)
            }

            function D(t, a) {
                var n = v.itemWidth,
                    s = v.layout;
                _.contWidth = c = i.width(), t && u === c || !c || (u = c, j(s) && (d = c ? c / s : n) < n && (s = "liquid"), n && ("liquid" == s ? d = c ? c / Math.min(Math.floor(c / n), _._$items.length) : n : "fixed" == s && (d = n)), _._size(c, d), d && w.children().css("width", d + "px"), _.totalWidth = b = e.offsetWidth, ge(h.settings, {
                    contSize: c,
                    maxSnapScroll: !!v.paging && 1,
                    maxScroll: 0,
                    minScroll: b > c ? c - b : 0,
                    snap: v.paging ? c : !!f && (d || ".mbsc-scv-item"),
                    elastic: b > c && (d || c)
                }), h.refresh(a))
            }
            xe.call(this, e, t, !0), _.navigate = function(e, t) {
                M(_._getItem(e), t)
            }, _.next = function(e) {
                if (s) {
                    var t = s.next();
                    t.length && M(s = t, e)
                }
            }, _.prev = function(e) {
                if (s) {
                    var t = s.prev();
                    t.length && M(s = t, e)
                }
            }, _.refresh = _.position = function(e) {
                S(), D(!1, e)
            }, _._init = function() {
                var e;
                o = pe(v.context), l = pe("body" == v.context ? window : v.context), _.__init(), p = _.remote.menustrip.rtlSetting, f = _.remote.menustrip.snapSetting, e = _.remote.menustrip.contClass + (_._getContClass() || ""), i ? (i.attr("class", e), w.off(".mbsc-ripple")) : ((i = pe('<div class="' + e + '"><div class="mbsc-scv-sc"></div></div>').insertAfter(w)).find(".mbsc-scv-sc").append(w), h = new xt(i[0], {
                    axis: "X",
                    contSize: 0,
                    maxScroll: 0,
                    maxSnapScroll: 1,
                    minScroll: 0,
                    snap: 1,
                    elastic: 1,
                    rtl: p,
                    mousewheel: v.mousewheel,
                    thresholdX: v.threshold,
                    stopProp: v.stopProp,
                    onStart: function(e) {
                        g || "touchstart" != e.domEvent.type || (g = !0, o.find(".mbsc-no-touch").removeClass("mbsc-no-touch"))
                    },
                    onBtnTap: function(e) {
                        "touchend" === e.domEvent.type && K(e.domEvent, e.domEvent.target), M(pe(e.target), !0)
                    },
                    onGestureStart: function(e) {
                        x("onGestureStart", e)
                    },
                    onGestureEnd: function(e) {
                        x("onGestureEnd", e)
                    },
                    onMove: function(e) {
                        x("onMove", e)
                    },
                    onAnimationStart: function(e) {
                        x("onAnimationStart", e)
                    },
                    onAnimationEnd: function(e) {
                        x("onAnimationEnd", e)
                    }
                })), w.css("display", "").addClass("mbsc-scv").removeClass("mbsc-cloak"), S(), x("onMarkupReady", {
                    target: i[0]
                }), D(), i.find("img").on("load", C), l.on("orientationchange resize", C)
            }, _._size = A, _._initMarkup = A, _._markupReady = A, _._getContClass = A, _._getItemProps = A, _._getActiveItem = A, _.__init = A, _.__destroy = A, _._destroy = function() {
                _.__destroy(), l.off("orientationchange resize", C), w.removeClass("mbsc-scv").insertAfter(i).find(".mbsc-scv-item").each(function() {
                    var e = pe(this);
                    e.width("").removeClass(T[e.attr("data-ref")])
                }), i.remove(), h.destroy()
            }, _._getItem = function(e) {
                return "object" !== (void 0 === e ? "undefined" : r(e)) && (e = _._$items.filter('[data-id="' + e + '"]')), pe(e)
            }, _._onItemTap = function(e, t) {
                return void 0 === t || t
            }, v = _.settings, x = _.trigger, a || _.init()
        };
    mr.prototype = {
        _class: "scrollview",
        _hasDef: !0,
        _hasTheme: !0,
        _hasLang: !0,
        _defaults: {
            tap: !0,
            stopProp: !1,
            context: "body",
            layout: "liquid"
        }
    }, ve.ScrollView = mr;
    var pr = function(e, t, a) {
        var n, s, r, i, o, l, c = pe(e),
            d = this;

        function u() {
            s && "inline" != s && n.find(".mbsc-page").css("padding-" + s, "")
        }

        function m(e) {
            e.addClass(o).attr("data-selected", "true").attr("aria-selected", "true")
        }

        function p(e) {
            e.removeClass(o).removeAttr("data-selected").removeAttr("aria-selected")
        }
        mr.call(this, e, t, !0), d.select = function(e) {
            r || p(d._$items.filter(".mbsc-ms-item-sel")), m(d._getItem(e))
        }, d.deselect = function(e) {
            p(d._getItem(e))
        }, d.enable = function(e) {
            d._getItem(e).removeClass("mbsc-disabled").removeAttr("data-disabled").removeAttr("aria-disabled")
        }, d.disable = function(e) {
            d._getItem(e).addClass("mbsc-disabled").attr("data-disabled", "true").attr("aria-disabled", "true")
        }, d.setBadge = function(e, t) {
            var a;
            e = d._getItem(e).attr("data-badge", t), (a = pe(".mbsc-ms-badge", e)).length ? t ? a.html(t) : a.remove() : t && e.append('<span class="mbsc-ms-badge">' + t + "</span>")
        }, d._markupReady = function(e) {
            d._hasIcons ? e.addClass("mbsc-ms-icons") : e.removeClass("mbsc-ms-icons"), d._hasText ? e.addClass("mbsc-ms-txt") : e.removeClass("mbsc-ms-txt"), d.__markupReady(e)
        }, d._size = function(t, a) {
            d.__size(t, a), "inline" != s && n.find(".mbsc-page").css("padding-" + s, e.offsetHeight + "px")
        }, d._onItemTap = function(e, t) {
            return !1 !== d.__onItemTap(e, t) && (void 0 === t && (t = !r), i && t && !e.hasClass("mbsc-disabled") && (r ? "true" == e.attr("data-selected") ? p(e) : m(e) : (p(d._$items.filter(".mbsc-ms-item-sel")), m(e))), t)
        }, d._getActiveItem = function(e) {
            var t = "true" == e.attr("data-selected");
            if (i && !r && t) return e
        }, d._getItemProps = function(e) {
            var t = "true" == e.attr("data-selected"),
                a = "true" == e.attr("data-disabled"),
                n = e.attr("data-icon"),
                s = e.attr("data-badge");
            return e.attr("data-role", "button").attr("aria-selected", t ? "true" : "false").attr("aria-disabled", a ? "true" : "false"), s && e.append('<span class="mbsc-ms-badge">' + s + "</span>"), n && (d._hasIcons = !0), e.text() && (d._hasText = !0), {
                cssClass: "mbsc-ms-item " + (l.itemClass || "") + " " + (t ? o : "") + (a ? " mbsc-disabled " + (l.disabledClass || "") : "") + (n ? " mbsc-ms-ic mbsc-ic mbsc-ic-" + n : "")
            }
        }, d._getContClass = function() {
            return " mbsc-ms-c mbsc-ms-" + l.variant + " mbsc-ms-" + s + (i ? "" : " mbsc-ms-nosel") + (d.__getContClass() || "")
        }, d.__init = function() {
            d.___init(), n = pe(l.context), u(), s = l.display, r = "multiple" == l.select, i = "off" != l.select, o = " mbsc-ms-item-sel " + (l.activeClass || ""), c.addClass("mbsc-ms mbsc-ms-base " + (l.groupClass || ""))
        }, d.__destroy = function() {
            c.removeClass("mbsc-ms mbsc-ms-base " + (l.groupClass || "")), u(), d.___destroy()
        }, d.__onItemTap = A, d.__getContClass = A, d.__markupReady = A, d.__size = A, d.___init = A, d.___destroy = A, l = d.settings, a || d.init()
    };
    pr.prototype = {
        _defaults: ge({}, mr.prototype._defaults)
    };
    var hr = function(e, t) {
        pr.call(this, e, t, !0), this.___init = function() {}, this.init()
    };
    hr.prototype = {
        _class: "optionlist",
        _hasDef: !0,
        _hasTheme: !0,
        _hasLang: !0,
        _defaults: ge({}, pr.prototype._defaults, {
            select: "multiple",
            variant: "a",
            display: "inline"
        })
    }, ve.Optionlist = hr, n.themes.optionlist = n.themes.navigation;
    var fr, vr, br = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var a = arguments[t];
                for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n])
            }
            return e
        },
        gr = a.func,
        xr = function(e) {
            function t(e) {
                i(this, t);
                var a = u(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                return a.shouldComponentUpdate = function(e, t) {
                    return a.optimizeUpdate = {
                        updateOptions: !$e(a.state.options, t.options),
                        updateChildren: !$e(a.props.children, e.children)
                    }, !0
                }, a
            }
            return d(t, Ge), t
        }();
    xr.prototypes = br({}, Fe, {
        itemWidth: a.number,
        layout: a.oneOf(["liquid", "fixed"]),
        snap: a.bool,
        threshold: a.number,
        paging: a.bool,
        onItemTap: gr,
        onMarkupReady: gr,
        onAnimationStart: gr,
        onAnimationEnd: gr,
        onMove: gr,
        onGestureStart: gr,
        onGestureEnd: gr
    });
    var Tr = function(t) {
            function a(t) {
                i(this, a);
                var n = u(this, (a.__proto__ || Object.getPrototypeOf(a)).call(this, t));
                return n.childComponents = [], n.renderChildren = function() {
                    return e.Children.map(n.props.children, function(t) {
                        return e.cloneElement(t, {
                            ref: function(e) {
                                n.childComponents.push(e)
                            }
                        })
                    })
                }, n
            }
            return d(a, xr), a
        }(),
        yr = +new Date,
        _r = (vr = fr = function(e) {
            function a(e) {
                i(this, a);
                var n = u(this, (a.__proto__ || Object.getPrototypeOf(a)).call(this, e));
                return n.setInstance = function(e) {
                    n._instance = e
                }, n.componentDidMount = function() {
                    n._DOMNode = t.findDOMNode(n)
                }, n._instance = null, n._DOMNode = null, n.id = e.id || yr++, n
            }
            return d(a, e), a
        }(e.Component), fr.propTypes = {
            selected: a.bool,
            disabled: a.bool,
            icon: a.string,
            id: a.oneOfType([a.string, a.number])
        }, vr),
        wr = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var a = arguments[t];
                for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n])
            }
            return e
        },
        Cr = a.number,
        Mr = a.bool,
        Sr = function(a) {
            function n(a) {
                i(this, n);
                var s = u(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, a));
                return s.componentDidMount = function() {
                    var e = ge({}, s.state.options),
                        a = t.findDOMNode(s);
                    s.instance = new hr(a, e);
                    for (var n = 0; n < s.childComponents.length; n++) s.childComponents[n].setInstance && s.childComponents[n].setInstance(s.instance)
                }, s.componentDidUpdate = function() {
                    s.optimizeUpdate.updateChildren && s.instance.refresh(!0)
                }, s.render = function() {
                    return e.createElement("div", {
                        className: s.initialCssClass + " mbsc-cloak"
                    }, s.renderChildren())
                }, s
            }
            return d(n, Tr), n
        }(),
        Dr = function(t) {
            function a(t) {
                i(this, a);
                var n = u(this, (a.__proto__ || Object.getPrototypeOf(a)).call(this, t));
                return n.render = function() {
                    return e.createElement("div", {
                        "data-icon": n.props.icon,
                        "data-id": n.id,
                        "data-selected": n.props.selected,
                        "data-disabled": n.props.disabled,
                        onClick: n.props.onClick
                    }, n.props.children)
                }, n.componentWillReceiveProps = function(e) {
                    n._instance && (n.props.selected !== e.selected && (e.selected ? n._instance.select(n._DOMNode) : n._instance.deselect(n._DOMNode)), n.props.disabled !== e.disabled && (e.disabled ? n._instance.disable(n._DOMNode) : n._instance.enable(n._DOMNode)))
                }, n
            }
            return d(a, _r), a
        }();
    Sr.propTypes = wr({}, Tr.propTyes, {
        paging: Mr,
        select: a.oneOf(["off", "single", "multiple"]),
        snap: Mr,
        threshold: Cr,
        children: function(t, a, n) {
            var s, r = t[a];
            return e.Children.forEach(r, function(e) {
                s || e.type !== Dr && (s = new Error("`" + n + "` only accepts `OptionItem`."))
            }), s
        }
    }), n.Optionlist = Sr, n.OptionItem = Dr;
    var kr = function(e, t) {
        var a, n, s, r, i, o = pe(e),
            l = o.is("ul,ol"),
            c = this;
        pr.call(this, e, t, !0), c._initMarkup = function() {
            a && a.remove(), n && o.append(n.children())
        }, c.__size = function(e, t) {
            var l, d = t || 72,
                u = c._$items.length,
                m = 0;
            i.hide(), "bottom" == r.type && (o.removeClass("mbsc-scv-liq"), a.remove(), c._$items.remove().each(function(a) {
                var s = pe(this);
                o.append(s), m += t || this.offsetWidth || 0, Math.round(m + (a < u - 1 ? d : 0)) > e && (l = !0, n.append(s.css("width", "").addClass("mbsc-fr-btn-e")))
            }), a.attr("class", s + (r.moreIcon ? " mbsc-menu-item-ic mbsc-ms-ic mbsc-ic mbsc-ic-" + r.moreIcon : "")).html(c._hasIcons && c._hasText ? r.moreText : ""), l && o.append(a)), "liquid" == r.layout && o.addClass("mbsc-scv-liq")
        }, c.__onItemTap = function(e) {
            if (e.hasClass("mbsc-menu-item") && !1 !== c.trigger("onMenuShow", {
                    target: e[0],
                    menu: i
                })) return i.show(!1, !0), !1
        }, c.__getContClass = function() {
            return "hamburger" == r.type ? " mbsc-ms-hamburger" : ""
        }, c.__markupReady = function(e) {
            "hamburger" == r.type && (n.append(c._$items.addClass("mbsc-fr-btn-e")), a.attr("class", s + (r.menuIcon ? " mbsc-menu-item-ic mbsc-ms-ic mbsc-ic mbsc-ic-" + r.menuIcon : "")).html(r.menuText || ""), o.append(a), r.menuText && r.menuIcon || e.removeClass("mbsc-ms-icons"), r.menuText ? e.addClass("mbsc-ms-txt") : e.removeClass("mbsc-ms-txt"))
        }, c.___init = function() {
            var e;
            "tab" == r.type ? (r.display = r.display || "top", r.variant = r.variant || "b") : "bottom" == r.type ? (r.display = r.display || "bottom", r.variant = r.variant || "a") : "hamburger" == r.type && (r.display = r.display || "inline", r.variant = r.variant || "a"), s = "mbsc-scv-item mbsc-ms-item mbsc-btn-e mbsc-menu-item " + (r.itemClass || ""), a || (a = pe(l ? "<li></li>" : "<div></div>"), n = pe(l ? "<ul></ul>" : "<div></div>").addClass("mbsc-scv mbsc-ms")), i = new qa(n[0], {
                display: "bubble",
                theme: r.theme,
                lang: r.lang,
                context: r.context,
                buttons: [],
                anchor: a,
                onBeforeShow: function(t, a) {
                    e = null, a.settings.cssClass = "mbsc-wdg mbsc-ms-a mbsc-ms-more" + (c._hasText ? "" : " mbsc-ms-more-icons")
                },
                onBeforeClose: function() {
                    return c.trigger("onMenuHide", {
                        target: e && e[0],
                        menu: i
                    })
                },
                onMarkupReady: function(t, a) {
                    c.tap(a._markup.find(".mbsc-fr-c"), function(t) {
                        (e = pe(t.target).closest(".mbsc-ms-item")).length && !e.hasClass("mbsc-disabled") && ("touchend" === t.type ? K(t, t.target) : (c.navigate(e, !0), i.hide()))
                    })
                }
            })
        }, c.___destroy = function() {
            i.destroy(), o.append(c._$items), a.remove()
        }, r = c.settings, c.init()
    };
    kr.prototype = {
        _class: "navigation",
        _hasDef: !0,
        _hasTheme: !0,
        _hasLang: !0,
        _defaults: ge({}, pr.prototype._defaults, {
            type: "bottom",
            moreText: "More",
            moreIcon: "material-more-horiz",
            menuIcon: "material-menu"
        })
    }, ve.Navigation = kr;
    var Or = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var a = arguments[t];
                for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n])
            }
            return e
        },
        Nr = function(a) {
            function n(a, s) {
                i(this, n);
                var r = u(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, a));
                return r.componentDidMount = function() {
                    var e = ge({}, r.state.options, {
                            type: r.type
                        }),
                        a = t.findDOMNode(r);
                    r.instance = new kr(a, e);
                    for (var n = 0; n < r.childComponents.length; n++) r.childComponents[n].setInstance(r.instance)
                }, r.componentDidUpdate = function() {
                    r.optimizeUpdate.updateChildren && r.instance.refresh(!0)
                }, r.render = function() {
                    return e.createElement("div", {
                        className: r.initialCssClass + " mbsc-cloak"
                    }, r.renderChildren())
                }, r.type = s, r
            }
            return d(n, Tr), n
        }();
    Nr.propTypes = Or({}, Tr.propTypes, {
        display: a.oneOf(["top", "bottom", "inline"]),
        moreText: a.string,
        moreIcon: a.string,
        menuText: a.string,
        menuIcon: a.string,
        children: function(t, a, n) {
            var s, r = t[a];
            return e.Children.forEach(r, function(e) {
                s || e.type !== Ar && (s = new Error("`" + n + "` only accepts `NavItem`."))
            }), s
        }
    });
    var Vr = function(e) {
            function t(e) {
                return i(this, t), u(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, "bottom"))
            }
            return d(t, Nr), t
        }(),
        Pr = function(e) {
            function t(e) {
                return i(this, t), u(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, "hamburger"))
            }
            return d(t, Nr), t
        }(),
        Er = function(e) {
            function t(e) {
                return i(this, t), u(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, "tab"))
            }
            return d(t, Nr), t
        }(),
        Ar = function(t) {
            function a(t) {
                i(this, a);
                var n = u(this, (a.__proto__ || Object.getPrototypeOf(a)).call(this, t));
                return n.render = function() {
                    return e.createElement("div", {
                        "data-icon": n.props.icon,
                        "data-id": n.id,
                        "data-selected": n.props.selected,
                        "data-disabled": n.props.disabled,
                        "data-badge": n.props.badge,
                        onClick: n.props.onClick
                    }, n.props.children)
                }, n.componentWillReceiveProps = function(e) {
                    n._instance && (n.props.selected !== e.selected && (e.selected ? n._instance.select(n._DOMNode) : n._instance.deselect(n._DOMNode)), n.props.disabled !== e.disabled && (e.disabled ? n._instance.disable(n._DOMNode) : n._instance.enable(n._DOMNode)), n.props.badge !== e.badge && n._instance.setBadge(n._DOMNode, e.badge))
                }, n
            }
            return d(a, _r), a
        }();
    Ar.propTypes = Or({}, _r.propTypes, {
        badge: a.string
    }), n.BottomNav = Vr, n.HamburgerNav = Pr, n.TabNav = Er, n.NavItem = Ar, Tt.number = Tt.measurement;
    var Ir = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var a = arguments[t];
                for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n])
            }
            return e
        },
        Fr = a.string,
        jr = a.number,
        Hr = {
            defaultValue: Fr,
            invalid: a.array,
            max: jr,
            min: jr,
            scale: jr,
            step: jr,
            wholeText: Fr,
            fractionText: Fr,
            signText: Fr
        },
        Lr = function(e) {
            function t(e) {
                i(this, t);
                var a = u(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                return a.mbscInit = {
                    preset: "number"
                }, a
            }
            return d(t, Ze), t
        }();
    Lr.propTypes = Ir({}, Lr.propTypes, He, Hr), n.Number = Lr;
    var zr = {},
        Yr = function(e, t, a) {
            var s, r, i, o, l, c, d, u, m, p, h, f, v, b, g, x, T, y, _, w = pe(e),
                C = this,
                M = [],
                S = [],
                D = {},
                k = {},
                O = {
                    107: "+",
                    109: "-"
                },
                N = {
                    48: 0,
                    49: 1,
                    50: 2,
                    51: 3,
                    52: 4,
                    53: 5,
                    54: 6,
                    55: 7,
                    56: 8,
                    57: 9,
                    96: 0,
                    97: 1,
                    98: 2,
                    99: 3,
                    100: 4,
                    101: 5,
                    102: 6,
                    103: 7,
                    104: 8,
                    105: 9
                };

            function V(t) {
                var a, d = l.validate.call(e, {
                        values: g.slice(0),
                        variables: D
                    }, C) || [],
                    u = d && d.disabled || [];
                if (C._isValid = !d.invalid, C._tempValue = l.formatValue.call(e, g.slice(0), D, C), o = g.length, x = d.length || y, C._isVisible && n.wJOcy) {
                    if (pe(".mbsc-np-ph", s).each(function(e) {
                            pe(this).html("ltr" == l.fill ? e >= o ? i : c || g[e] : e >= y - x ? e + o < y ? i : c || g[e + o - y] : "")
                        }), pe(".mbsc-np-cph", s).each(function() {
                            pe(this).html(D[pe(this).attr("data-var")] || pe(this).attr("data-ph"))
                        }), o === y)
                        for (a = 0; a <= 9; a++) u.push(a);
                    for (pe(".mbsc-np-btn", s).removeClass(r), a = 0; a < u.length; a++) pe('.mbsc-np-btn[data-val="' + u[a] + '"]', s).addClass(r);
                    C._isValid ? pe(".mbsc-fr-btn-s .mbsc-fr-btn", s).removeClass(r) : pe(".mbsc-fr-btn-s .mbsc-fr-btn", s).addClass(r), C.live && (C._hasValue = t || C._hasValue, P(t, !1, t), t && T("onSet", {
                        valueText: C._value
                    }))
                }
            }

            function P(e, t, a, n) {
                t && V(), n || (_ = g.slice(0), k = ge({}, D), M = S.slice(0), C._value = C._hasValue ? C._tempValue : null), e && (C._isInput && w.val(C._hasValue && C._isValid ? C._value : ""), T("onFill", {
                    valueText: C._hasValue ? C._tempValue : "",
                    change: a
                }), a && (C._preventChange = !0, w.trigger("change")))
            }

            function E(e) {
                var t, a, n = e || [],
                    s = [];
                for (S = [], D = {}, t = 0; t < n.length; t++) /:/.test(n[t]) ? (a = n[t].split(":"), D[a[0]] = a[1], S.push(a[0])) : (s.push(n[t]), S.push("digit"));
                return s
            }

            function A(e, t) {
                !(o || t || l.allowLeadingZero) || e.hasClass("mbsc-disabled") || e.hasClass("mbsc-np-btn-empty") || o < y && n.wJOcy && (S.push("digit"), g.push(t), V(!0))
            }

            function I(e) {
                var t, a, n = e.attr("data-val"),
                    s = "false" !== e.attr("data-track"),
                    r = e.attr("data-var");
                if (!e.hasClass("mbsc-disabled")) {
                    if (r && (a = r.split(":"), s && S.push(a[0]), D[a[0]] = void 0 === a[2] ? a[1] : D[a[0]] == a[1] ? a[2] : a[1]), n.length + o <= x)
                        for (t = 0; t < n.length; ++t) a = j(n[t]) ? +n[t] : n[t], (l.allowLeadingZero || o || a) && (S.push("digit"), g.push(a), o = g.length);
                    V(!0)
                }
            }

            function F() {
                var e, t, a = S.pop();
                if (o || "digit" !== a) {
                    if ("digit" !== a && D[a])
                        for (delete D[a], t = S.slice(0), S = [], e = 0; e < t.length; e++) t[e] !== a && S.push(t[e]);
                    else g.pop();
                    V(!0)
                }
            }

            function H() {
                clearInterval(b), v = !1
            }

            function L(e) {
                if (tt(e, this)) {
                    if ("keydown" == e.type && 32 != e.keyCode) return;
                    ! function(e) {
                        v = !0, d = q(e, "X"), u = q(e, "Y"), clearInterval(b), clearTimeout(b), F(), b = setInterval(function() {
                            F()
                        }, 150)
                    }(e), "mousedown" == e.type && pe(document).on("mousemove", z).on("mouseup", Y)
                }
            }

            function z(e) {
                v && (m = q(e, "X"), p = q(e, "Y"), h = m - d, f = p - u, (Math.abs(h) > 7 || Math.abs(f) > 7) && H())
            }

            function Y(e) {
                v && (e.preventDefault(), H(), "mouseup" == e.type && pe(document).off("mousemove", z).off("mouseup", Y))
            }
            bt.call(this, e, t, !0), C.setVal = C._setVal = function(t, a, n, s) {
                C._hasValue = null !== t && void 0 !== t, g = E(pe.isArray(t) ? t.slice(0) : l.parseValue.call(e, t, C)), P(a, !0, void 0 === n ? a : n, s)
            }, C.getVal = C._getVal = function(e) {
                return C._hasValue || e ? C[e ? "_tempValue" : "_value"] : null
            }, C.setArrayVal = C.setVal, C.getArrayVal = function(e) {
                return e ? g.slice(0) : C._hasValue ? _.slice(0) : null
            }, C._readValue = function() {
                var t = w.val() || "";
                "" !== t && (C._hasValue = !0), c ? (D = {}, S = [], g = []) : (D = C._hasValue ? k : {}, S = C._hasValue ? M : [], g = C._hasValue && _ ? _.slice(0) : E(l.parseValue.call(e, t, C)), P(!1, !0))
            }, C._fillValue = function() {
                C._hasValue = !0, P(!0, !1, !0)
            }, C._generateContent = function() {
                var e, t, a, s = 1,
                    r = "";
                for (r += '<div class="mbsc-np-hdr"><div role="button" tabindex="0" aria-label="' + l.deleteText + '" class="mbsc-np-del mbsc-fr-btn-e mbsc-ic mbsc-ic-' + l.deleteIcon + '"></div><div class="mbsc-np-dsp">', r += l.template.replace(/d/g, '<span class="mbsc-np-ph">' + i + "</span>").replace(/&#100;/g, "d").replace(/{([a-zA-Z0-9]*)\:?([a-zA-Z0-9\-\_]*)}/g, '<span class="mbsc-np-cph" data-var="$1" data-ph="$2">$2</span>'), r += "</div></div>", r += '<div class="mbsc-np-tbl-c mbsc-w-p"><div class="mbsc-np-tbl">', e = 0; e < 4; e++) {
                    for (r += '<div class="mbsc-np-row">', t = 0; t < 3; t++) a = s, 10 == s || 12 == s ? a = "" : 11 == s && (a = 0), "" === a ? 10 == s && l.leftKey ? r += '<div role="button" tabindex="0" class="mbsc-np-btn mbsc-np-btn-custom mbsc-fr-btn-e" ' + (l.leftKey.variable ? 'data-var="' + l.leftKey.variable + '"' : "") + ' data-val="' + (l.leftKey.value || "") + '" ' + (void 0 !== l.leftKey.track ? ' data-track="' + l.leftKey.track + '"' : "") + ">" + l.leftKey.text + "</div>" : 12 == s && l.rightKey ? r += '<div role="button" tabindex="0" class="mbsc-np-btn mbsc-np-btn-custom mbsc-fr-btn-e" ' + (l.rightKey.variable ? 'data-var="' + l.rightKey.variable + '"' : "") + ' data-val="' + (l.rightKey.value || "") + '" ' + (void 0 !== l.rightKey.track ? ' data-track="' + l.rightKey.track + '"' : "") + " >" + l.rightKey.text + "</div>" : r += '<div class="mbsc-np-btn mbsc-np-btn-empty"></div>' : r += '<div tabindex="0" role="button" class="mbsc-np-btn mbsc-fr-btn-e" data-val="' + a + '">' + a + C._getText(n, .2) + "</div>", s++;
                    r += "</div>"
                }
                return r += "</div></div>"
            }, C._markupReady = function() {
                s = C._markup, V()
            }, C._attachEvents = function(e) {
                e.on("keydown", function(t) {
                    var a;
                    void 0 !== O[t.keyCode] ? (a = pe('.mbsc-np-btn[data-var="sign:-:"]', e)).length && (D.sign = 107 == t.keyCode ? "-" : "", I(a)) : void 0 !== N[t.keyCode] ? A(pe('.mbsc-np-btn[data-val="' + N[t.keyCode] + '"]', e), N[t.keyCode]) : 8 == t.keyCode && (t.preventDefault(), F())
                }), C.tap(pe(".mbsc-np-btn", e), function() {
                    var e = pe(this);
                    e.hasClass("mbsc-np-btn-custom") ? I(e) : A(e, +e.attr("data-val"))
                }, !1, 30, !0), pe(".mbsc-np-del", e).on("touchstart mousedown keydown", L).on("touchmove mousemove", z).on("touchend mouseup keyup", Y)
            }, C.__init = function() {
                (l = C.settings).template = l.template.replace(/\\d/, "&#100;"), i = l.placeholder, y = (l.template.match(/d/g) || []).length, r = "mbsc-disabled " + (l.disabledClass || ""), c = l.mask, T = C.trigger, c && w.is("input") && w.attr("type", "password")
            }, C._indexOf = function(e, t) {
                var a;
                for (a = 0; a < e.length; ++a)
                    if (e[a].toString() === t.toString()) return a;
                return -1
            }, a || C.init()
        };
    Yr.prototype = {
        _hasDef: !0,
        _hasTheme: !0,
        _hasLang: !0,
        _class: "numpad",
        _presets: zr,
        _defaults: ge({}, bt.prototype._defaults, {
            template: "dd.dd",
            placeholder: "0",
            deleteIcon: "backspace",
            allowLeadingZero: !1,
            headerText: !1,
            fill: "rtl",
            compClass: "mbsc-np",
            deleteText: "Delete",
            decimalSeparator: ".",
            thousandsSeparator: ",",
            validate: A,
            parseValue: A,
            formatValue: function(e, t, a) {
                var n, s = 1,
                    r = a.settings,
                    i = r.placeholder,
                    o = r.template,
                    l = e.length,
                    c = o.length,
                    d = "";
                for (n = 0; n < c; n++) "d" == o[c - n - 1] ? (d = s <= l ? e[l - s] + d : i + d, s++) : d = o[c - n - 1] + d;
                return pe.each(t, function(e, t) {
                    d = d.replace("{" + e + "}", t)
                }), pe("<div>" + d + "</div>").text()
            }
        })
    }, ve.Numpad = Yr, n.themes.numpad = n.themes.frame;
    var $r = {
        min: 0,
        max: 99.99,
        scale: 2,
        prefix: "",
        suffix: "",
        returnAffix: !1
    };

    function Rr(e) {
        for (var t = 0, a = 1, n = 0; e.length;) t > 3 ? a = 3600 : t > 1 && (a = 60), n += e.pop() * a * (t % 2 ? 10 : 1), t++;
        return n
    }
    zr.decimal = function(e) {
        function t(e, t) {
            for (var a, n = e.slice(0), r = 0; n.length;) r = 10 * r + n.shift();
            for (a = 0; a < s.scale; a++) r /= 10;
            return t ? -1 * r : r
        }

        function a(e) {
            return t(e).toFixed(s.scale).replace(".", s.decimalSeparator).replace(/\B(?=(\d{3})+(?!\d))/g, s.thousandsSeparator)
        }
        var n = ge({}, e.settings),
            s = ge(e.settings, $r, n),
            r = s.min < 0,
            i = new RegExp(s.thousandsSeparator, "g");
        return e.getVal = function(t) {
            var a = e._getVal(t),
                n = (a + "").replace(i, "").replace(s.decimalSeparator, ".");
            return j(n) ? +n : a
        }, {
            template: (r ? "{sign}" : "") + s.prefix.replace(/d/g, "\\d") + Array((Math.floor(Math.max(s.max, Math.abs(s.min))) + "").length + 1).join("d") + (s.scale ? "." + Array(s.scale + 1).join("d") : "") + s.suffix.replace(/d/g, "\\d"),
            leftKey: r ? {
                text: "-/+",
                variable: "sign:-:",
                track: !1
            } : void 0,
            parseValue: function(e) {
                var t, a, n = e || s.defaultValue,
                    r = [];
                if (n && (a = (n = (n + "").replace(i, "").replace(s.decimalSeparator, ".")).match(/\d+\.?\d*/g)))
                    for (a = (+a[0]).toFixed(s.scale), t = 0; t < a.length; t++) "." != a[t] && (+a[t] ? r.push(+a[t]) : r.length && r.push(0));
                return e < 0 && r.push("sign:-"), r
            },
            formatValue: function(e, n) {
                var r = a(e);
                return (t(e, n && "-" == n.sign) < 0 ? "-" : "") + (s.returnAffix ? s.prefix + r + s.suffix : r)
            },
            validate: function(n) {
                var r = n.values,
                    i = a(r),
                    o = t(r, n.variables && "-" == n.variables.sign),
                    l = [];
                return r.length || s.allowLeadingZero || l.push(0), e.isVisible() && pe(".mbsc-np-dsp", e._markup).html((n.variables.sign || "") + s.prefix + i + s.suffix), {
                    disabled: l,
                    invalid: o > s.max || o < s.min || !!s.invalid && -1 != e._indexOf(s.invalid, o)
                }
            }
        }
    };
    var Wr = ["h", "m", "s"],
        Ur = {
            min: 0,
            max: 362439,
            defaultValue: 0,
            hourTextShort: "h",
            minuteTextShort: "m",
            secTextShort: "s"
        };
    zr.timespan = function(e) {
        var t = ge({}, e.settings),
            a = ge(e.settings, Ur, t),
            n = {
                h: a.hourTextShort.replace(/d/g, "\\d"),
                m: a.minuteTextShort.replace(/d/g, "\\d"),
                s: a.secTextShort.replace(/d/g, "\\d")
            },
            s = 'd<span class="mbsc-np-sup mbsc-np-time">' + n.s + "</span>";

        function r(e) {
            var t, a = "",
                s = 3600;
            return pe(Wr).each(function(r, i) {
                t = Math.floor(e / s), e -= t * s, s /= 60, (t > 0 || "s" == i && !a) && (a = a + (a ? " " : "") + t + n[i])
            }), a
        }
        return a.max > 9 && (s = "d" + s), a.max > 99 && (s = '<span class="mbsc-np-ts-m">' + (a.max > 639 ? "d" : "") + 'd</span><span class="mbsc-np-sup mbsc-np-time">' + n.m + "</span>" + s), a.max > 6039 && (s = '<span class="mbsc-np-ts-h">' + (a.max > 38439 ? "d" : "") + 'd</span><span class="mbsc-np-sup mbsc-np-time">' + n.h + "</span>" + s), e.setVal = function(t, a, n, s) {
            return j(t) && (t = r(t)), e._setVal(t, a, n, s)
        }, e.getVal = function(t) {
            return e._hasValue || t ? Rr(e.getArrayVal(t)) : null
        }, {
            template: s,
            parseValue: function(e) {
                var t, s = e || r(a.defaultValue),
                    i = [];
                return s && pe(Wr).each(function(e, a) {
                    (t = new RegExp("(\\d+)" + n[a], "gi").exec(s)) ? (t = +t[1]) > 9 ? (i.push(Math.floor(t / 10)), i.push(t % 10)) : (i.length && i.push(0), (t || i.length) && i.push(t)): i.length && (i.push(0), i.push(0))
                }), i
            },
            formatValue: function(e) {
                return r(Rr(e))
            },
            validate: function(t) {
                var n = t.values,
                    s = Rr(n.slice(0)),
                    r = [];
                return n.length || r.push(0), {
                    disabled: r,
                    invalid: s > a.max || s < a.min || !!a.invalid && -1 != e._indexOf(a.invalid, +s)
                }
            }
        }
    };
    var Jr = {
        timeFormat: "hh:ii A",
        amText: "am",
        pmText: "pm"
    };
    zr.time = function(e) {
        var t = ge({}, e.settings),
            a = ge(e.settings, Jr, t),
            n = a.timeFormat.split(":"),
            s = a.timeFormat.match(/a/i),
            r = s ? "a" == s[0] ? a.amText : a.amText.toUpperCase() : "",
            i = s ? "a" == s[0] ? a.pmText : a.pmText.toUpperCase() : "",
            o = 0,
            l = a.min ? "" + a.min.getHours() : "",
            c = a.max ? "" + a.max.getHours() : "",
            d = a.min ? "" + (a.min.getMinutes() < 10 ? "0" + a.min.getMinutes() : a.min.getMinutes()) : "",
            u = a.max ? "" + (a.max.getMinutes() < 10 ? "0" + a.max.getMinutes() : a.max.getMinutes()) : "",
            m = a.min ? "" + (a.min.getSeconds() < 10 ? "0" + a.min.getSeconds() : a.min.getSeconds()) : "",
            p = a.max ? "" + (a.max.getSeconds() < 10 ? "0" + a.max.getSeconds() : a.max.getSeconds()) : "";

        function h(e, t) {
            var a, n = "";
            for (a = 0; a < e.length; ++a) n += e[a] + (a % 2 == (e.length % 2 == 1 ? 0 : 1) && a != e.length - 1 ? ":" : "");
            return pe.each(t, function(e, t) {
                n += " " + t
            }), n
        }
        return a.min && a.min.setFullYear(2014, 7, 20), a.max && a.max.setFullYear(2014, 7, 20), {
            placeholder: "-",
            allowLeadingZero: !0,
            template: (3 == n.length ? "dd:dd:dd" : 2 == n.length ? "dd:dd" : "dd") + (s ? '<span class="mbsc-np-sup">{ampm:--}</span>' : ""),
            leftKey: s ? {
                text: r,
                variable: "ampm:" + r,
                value: "00"
            } : {
                text: ":00",
                value: "00"
            },
            rightKey: s ? {
                text: i,
                variable: "ampm:" + i,
                value: "00"
            } : {
                text: ":30",
                value: "30"
            },
            parseValue: function(e) {
                var t, n, o = e || a.defaultValue,
                    l = [];
                if (o) {
                    if (n = (o += "").match(/\d/g))
                        for (t = 0; t < n.length; t++) l.push(+n[t]);
                    s && l.push("ampm:" + (o.match(new RegExp(a.pmText, "gi")) ? i : r))
                }
                return l
            },
            formatValue: function(e, t) {
                return h(e, t)
            },
            validate: function(t) {
                var r = t.values,
                    i = h(r, t.variables),
                    f = r.length >= 3 ? new Date(2014, 7, 20, "" + r[0] + (r.length % 2 == 0 ? r[1] : ""), "" + r[r.length % 2 == 0 ? 2 : 1] + r[r.length % 2 == 0 ? 3 : 2]) : "";
                return {
                    disabled: function(e) {
                        var t, r, i, h, f, v, b, g, x, T, y = [],
                            _ = 2 * n.length;
                        if (o = _, e.length || (s && (y.push(0), y.push(a.leftKey.value)), y.push(a.rightKey.value)), !s && (_ - e.length < 2 || 1 != e[0] && (e[0] > 2 || e[1] > 3) && _ - e.length <= 2) && (y.push("30"), y.push("00")), (s ? e[0] > 1 || e[1] > 2 : 1 != e[0] && (e[0] > 2 || e[1] > 3)) && e[0] && (e.unshift(0), o = _ - 1), e.length == _)
                            for (t = 0; t <= 9; ++t) y.push(t);
                        else if (1 == e.length && s && 1 == e[0] || e.length && e.length % 2 == 0 || !s && 2 == e[0] && e[1] > 3 && e.length % 2 == 1)
                            for (t = 6; t <= 9; ++t) y.push(t);
                        if (x = void 0 !== e[1] ? "" + e[0] + e[1] : "", T = +u == +(void 0 !== e[3] ? "" + e[2] + e[3] : ""), a.invalid)
                            for (t = 0; t < a.invalid.length; ++t)
                                if (v = a.invalid[t].getHours(), b = a.invalid[t].getMinutes(), g = a.invalid[t].getSeconds(), v == +x) {
                                    if (2 == n.length && (b < 10 ? 0 : +("" + b)[0]) == +e[2]) {
                                        y.push(b < 10 ? b : +("" + b)[1]);
                                        break
                                    }
                                    if ((g < 10 ? 0 : +("" + g)[0]) == +e[4]) {
                                        y.push(g < 10 ? g : +("" + g)[1]);
                                        break
                                    }
                                }
                        if (a.min || a.max) {
                            if (r = +l == +x, f = (i = +c == +x) && T, h = r && T, 0 === e.length) {
                                for (t = s ? 2 : l > 19 ? l[0] : 3; t <= (1 == l[0] ? 9 : l[0] - 1); ++t) y.push(t);
                                if (l >= 10 && (y.push(0), 2 == l[0]))
                                    for (t = 3; t <= 9; ++t) y.push(t);
                                if (c && c < 10 || l && l >= 10)
                                    for (t = c && c < 10 ? +c[0] + 1 : 0; t < (l && l >= 10 ? l[0] : 10); ++t) y.push(t)
                            }
                            if (1 == e.length) {
                                if (0 === e[0])
                                    for (t = 0; t < l[0]; ++t) y.push(t);
                                if (l && 0 !== e[0] && (s ? 1 == e[0] : 2 == e[0]))
                                    for (t = s ? 3 : 4; t <= 9; ++t) y.push(t);
                                if (e[0] == l[0])
                                    for (t = 0; t < l[1]; ++t) y.push(t);
                                if (e[0] == c[0] && !s)
                                    for (t = +c[1] + 1; t <= 9; ++t) y.push(t)
                            }
                            if (2 == e.length && (r || i))
                                for (t = i ? +u[0] + 1 : 0; t < (r ? +d[0] : 10); ++t) y.push(t);
                            if (3 == e.length && (i && e[2] == u[0] || r && e[2] == d[0]))
                                for (t = i && e[2] == u[0] ? +u[1] + 1 : 0; t < (r && e[2] == d[0] ? +d[1] : 10); ++t) y.push(t);
                            if (4 == e.length && (h || f))
                                for (t = f ? +p[0] + 1 : 0; t < (h ? +m[0] : 10); ++t) y.push(t);
                            if (5 == e.length && (h && e[4] == m[0] || f && e[4] == p[0]))
                                for (t = f && e[4] == p[0] ? +p[1] + 1 : 0; t < (h && e[4] == m[0] ? +m[1] : 10); ++t) y.push(t)
                        }
                        return y
                    }(r),
                    length: o,
                    invalid: (s ? !new RegExp("^(0?[1-9]|1[012])(:[0-5]\\d)?(:[0-5][0-9]) (?:" + a.amText + "|" + a.pmText + ")$", "i").test(i) : !/^([0-1]?[0-9]|2[0-4]):([0-5][0-9])(:[0-5][0-9])?$/.test(i)) || !!a.invalid && -1 != e._indexOf(a.invalid, f) || !((!a.min || a.min <= f) && (!a.max || f <= a.max))
                }
            }
        }
    };
    var Br = {
        dateOrder: "mdy",
        dateFormat: "mm/dd/yy",
        delimiter: "/"
    };
    zr.date = function(e) {
        var t, a, n, s, r = [],
            i = ge({}, e.settings),
            o = ge(e.settings, ue, Br, i),
            l = o.dateOrder,
            c = o.min ? "" + (o.getMonth(o.min) + 1) : 0,
            d = o.max ? "" + (o.getMonth(o.max) + 1) : 0,
            u = o.min ? "" + o.getDay(o.min) : 0,
            m = o.max ? "" + o.getDay(o.max) : 0,
            p = o.min ? "" + o.getYear(o.min) : 0,
            h = o.max ? "" + o.getYear(o.max) : 0;
        for (l = (l = (l = l.replace(/y+/gi, "yyyy")).replace(/m+/gi, "mm")).replace(/d+/gi, "dd"), t = l.toUpperCase().indexOf("Y"), a = l.toUpperCase().indexOf("M"), n = l.toUpperCase().indexOf("D"), l = "", r.push({
                val: t,
                n: "yyyy"
            }, {
                val: a,
                n: "mm"
            }, {
                val: n,
                n: "dd"
            }), r.sort(function(e, t) {
                return e.val - t.val
            }), pe.each(r, function(e, t) {
                l += t.n
            }), t = l.indexOf("y"), a = l.indexOf("m"), n = l.indexOf("d"), l = "", s = 0; s < 8; ++s) l += "d", s + 1 != t && s + 1 != a && s + 1 != n || (l += o.delimiter);

        function f(e) {
            return e % 4 == 0 && e % 100 != 0 || e % 400 == 0
        }

        function v(e) {
            return new Date(+("" + e[t] + e[t + 1] + e[t + 2] + e[t + 3]), +("" + e[a] + e[a + 1]) - 1, +("" + e[n] + e[n + 1]))
        }
        return e.getVal = function(t) {
            return e._hasValue || t ? v(e.getArrayVal(t)) : null
        }, {
            placeholder: "-",
            fill: "ltr",
            allowLeadingZero: !0,
            template: l,
            parseValue: function(e) {
                var t, a = [],
                    n = e || o.defaultValue,
                    s = ee(o.dateFormat, n, o);
                if (n)
                    for (t = 0; t < r.length; ++t) a = /m/i.test(r[t].n) ? a.concat(((o.getMonth(s) < 9 ? "0" : "") + (o.getMonth(s) + 1)).split("")) : /d/i.test(r[t].n) ? a.concat(((o.getDay(s) < 10 ? "0" : "") + o.getDay(s)).split("")) : a.concat((o.getYear(s) + "").split(""));
                return a
            },
            formatValue: function(e) {
                return Q(o.dateFormat, v(e), o)
            },
            validate: function(s) {
                var r = s.values,
                    i = v(r);
                return {
                    disabled: function(e) {
                        var s, r, i, l, v, b = [],
                            g = void 0 !== e[t + 3] ? "" + e[t] + e[t + 1] + e[t + 2] + e[t + 3] : "",
                            x = void 0 !== e[a + 1] ? "" + e[a] + e[a + 1] : "",
                            T = void 0 !== e[n + 1] ? "" + e[n] + e[n + 1] : "",
                            y = "" + o.getMaxDayOfMonth(g || 2012, x - 1 || 0),
                            _ = p === g && +c == +x,
                            w = h === g && +d == +x;
                        if (o.invalid)
                            for (s = 0; s < o.invalid.length; ++s) {
                                if (i = o.getYear(o.invalid[s]), l = o.getMonth(o.invalid[s]), v = o.getDay(o.invalid[s]), i == +g && l + 1 == +x && (v < 10 ? 0 : +("" + v)[0]) == +e[n]) {
                                    b.push(v < 10 ? v : +("" + v)[1]);
                                    break
                                }
                                if (l + 1 == +x && v == +T && ("" + i).substring(0, 3) == "" + e[t] + e[t + 1] + e[t + 2]) {
                                    b.push(("" + i)[3]);
                                    break
                                }
                                if (i == +g && v == +T && (l < 10 ? 0 : +("" + (l + 1))[0]) == +e[a]) {
                                    b.push(l < 10 ? l : +("" + (l + 1))[1]);
                                    break
                                }
                            }
                        if ("31" != T || e.length != a && e.length != a + 1 || (1 != e[a] ? b.push(2, 4, 6, 9, 11) : b.push(1)), "30" == T && 0 === e[a] && e.length <= a + 1 && b.push(2), e.length == a) {
                            for (s = h === g && +d < 10 ? 1 : 2; s <= 9; ++s) b.push(s);
                            p === g && +c >= 10 && b.push(0)
                        }
                        if (e.length == a + 1) {
                            if (1 == e[a]) {
                                for (s = h === g ? +d[1] + 1 : 3; s <= 9; ++s) b.push(s);
                                if (p == g)
                                    for (s = 0; s < +c[1]; ++s) b.push(s)
                            }
                            if (0 === e[a] && (b.push(0), h === g || p === g))
                                for (s = h === g ? +T > +m ? +d : +d + 1 : 0; s <= (p === g ? +c - 1 : 9); ++s) b.push(s)
                        }
                        if (e.length == n) {
                            for (s = w ? 1 + (+m > 10 ? +m[0] : 0) : +y[0] + 1; s <= 9; ++s) b.push(s);
                            if (_)
                                for (s = 0; s < (+u < 10 ? 0 : u[0]); ++s) b.push(s)
                        }
                        if (e.length == n + 1) {
                            if (e[n] >= 3 || "02" == x)
                                for (s = +y[1] + 1; s <= 9; ++s) b.push(s);
                            if (w && +m[0] == e[n])
                                for (s = +m[1] + 1; s <= 9; ++s) b.push(s);
                            if (_ && u[0] == e[n])
                                for (s = 0; s < +u[1]; ++s) b.push(s);
                            if (0 === e[n] && (b.push(0), w || _))
                                for (s = w ? +m + 1 : 1; s <= (_ ? +u - 1 : 9); ++s) b.push(s)
                        }
                        if (void 0 !== e[t + 2] && "02" == x && "29" == T)
                            for (r = +("" + e[t] + e[t + 1] + e[t + 2] + 0); r <= +("" + e[t] + e[t + 1] + e[t + 2] + 9); ++r) b.push(f(r) ? "" : r % 10);
                        if (e.length == t) {
                            if (o.min)
                                for (s = 0; s < +p[0]; ++s) b.push(s);
                            if (o.max)
                                for (s = +h[0] + 1; s <= 9; ++s) b.push(s);
                            b.push(0)
                        }
                        if (o.min || o.max)
                            for (r = 1; r < 4; ++r)
                                if (e.length == t + r) {
                                    if (e[t + r - 1] == +p[r - 1] && (3 != r || e[t + r - 2] == +p[r - 2]))
                                        for (s = 0; s < +p[r] + (3 == r && e[a + 1] && +c > +x ? 1 : 0); ++s) b.push(s);
                                    if (e[t + r - 1] == +h[r - 1] && (3 != r || e[t + r - 2] == +h[r - 2]))
                                        for (s = +h[r] + (3 == r && +d < +x ? 0 : 1); s <= 9; ++s) b.push(s)
                                }
                        return b
                    }(r),
                    invalid: !("Invalid Date" != i && (!o.min || o.min <= i) && (!o.max || i <= o.max)) || !!o.invalid && -1 != e._indexOf(o.invalid, i)
                }
            }
        }
    };
    var Kr = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var a = arguments[t];
                for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n])
            }
            return e
        },
        qr = a.bool,
        Gr = a.string,
        Xr = a.func,
        Zr = a.shape({
            text: Gr.isRequired,
            variable: Gr,
            value: Gr
        }),
        Qr = {
            allowLeadingZero: qr,
            deleteIcon: Gr,
            fill: a.oneOf(["ltr", "rtl"]),
            leftKey: Zr,
            mask: Gr,
            placeholder: Gr,
            preset: a.oneOf(["decimal", "timespan", "time", "date"]),
            rightKey: Zr,
            template: Gr,
            onSet: Xr,
            validate: Xr,
            onClear: Xr,
            cancelText: Gr,
            clearText: Gr,
            setText: Gr
        },
        ei = function(e) {
            function t(e) {
                i(this, t);
                var a = u(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                return a.mbscInit = {
                    component: "Numpad"
                }, a
            }
            return d(t, Ze), t
        }();
    ei.propTypes = Kr({}, ei.propTypes, Qr, je), n.Numpad = ei;
    var ti = {
        autoCorrect: !0,
        showSelector: !0,
        minRange: 1,
        rangeTap: !0,
        fromText: "Start",
        toText: "End"
    };
    Tt.range = function(e) {
        function t(e, t) {
            e && (e.setFullYear(t.getFullYear()), e.setMonth(t.getMonth()), e.setDate(t.getDate()))
        }

        function a(t, a) {
            var n = e._order,
                s = new Date(t);
            return void 0 === n.h && s.setHours(a ? 23 : 0), void 0 === n.i && s.setMinutes(a ? 59 : 0), void 0 === n.s && s.setSeconds(a ? 59 : 0), s.setMilliseconds(a ? 999 : 0), s
        }

        function n(e, t) {
            return new Date(e.getFullYear(), e.getMonth(), e.getDate() + t)
        }

        function s(e) {
            h ? (y - x > N.maxRange - 1 && (e ? x = new Date(Math.max(b, y - N.maxRange + 1)) : y = new Date(Math.min(v, +x + N.maxRange - 1))), y - x < N.minRange - 1 && (e ? x = new Date(Math.max(b, y - N.minRange + 1)) : y = new Date(Math.min(v, +x + N.minRange - 1)))) : (Math.ceil((y - x) / E) > I && (e ? x = a(Math.max(b, n(y, 1 - I)), !1) : y = a(Math.min(v, n(x, I - 1)), !0)), Math.ceil((y - x) / E) < A && (e ? x = a(Math.max(b, n(y, 1 - A)), !1) : y = a(Math.min(v, n(x, A - 1)), !0)))
        }

        function r(e, t) {
            var a = !0;
            return e && x && y && (s(D), s(!D)), x && y || (a = !1), t && o(), a
        }

        function i() {
            C && u && (pe(".mbsc-range-btn", u).removeClass(j).removeAttr("aria-checked"), pe(".mbsc-range-btn", u).eq(D).addClass(j).attr("aria-checked", "true"))
        }

        function o() {
            var t, a, n, s, r, i = 0,
                o = P || !D ? " mbsc-cal-day-hl mbsc-cal-sel-start" : " mbsc-cal-sel-start",
                l = P || D ? " mbsc-cal-day-hl mbsc-cal-sel-end" : " mbsc-cal-sel-end";
            if (e.startVal = x ? Q(p, x, N) : "", e.endVal = y ? Q(p, y, N) : "", u && (pe(".mbsc-range-btn-v-start", u).html(e.startVal || "&nbsp;"), pe(".mbsc-range-btn-v-end", u).html(e.endVal || "&nbsp;"), t = x ? new Date(x) : null, n = y ? new Date(y) : null, !t && n && (t = new Date(n)), !n && t && (n = new Date(t)), r = D ? n : t, pe(".mbsc-cal-day-picker .mbsc-cal-day-hl", u).removeClass(H), pe(".mbsc-cal-day-picker .mbsc-selected", u).removeClass("mbsc-cal-sel-start mbsc-cal-sel-end " + j).removeAttr("aria-selected"), t && n))
                for (a = t.setHours(0, 0, 0, 0), s = n.setHours(0, 0, 0, 0); n >= t && i < 126;) pe('.mbsc-cal-day[data-full="' + r.getFullYear() + "-" + (r.getMonth() + 1) + "-" + r.getDate() + '"]', u).addClass(j + " " + (r.getTime() === a ? o : "") + (r.getTime() === s ? l : "")).attr("aria-selected", "true"), r.setDate(r.getDate() + (D ? -1 : 1)), i++
        }

        function l(e, t) {
            return {
                h: e ? e.getHours() : t ? 23 : 0,
                i: e ? e.getMinutes() : t ? 59 : 0,
                s: e ? e.getSeconds() : t ? 59 : 0
            }
        }

        function c() {
            x && (f = !0, e.setDate(x, !1, 0, !0), x = e.getDate(!0)), y && (f = !0, e.setDate(y, !1, 0, !0), y = e.getDate(!0))
        }
        var d, u, m, p, h, f, v, b, g, x, T, y, _, w, C, M = e._startDate,
            S = e._endDate,
            D = 0,
            k = new Date,
            O = ge({}, e.settings),
            N = ge(e.settings, ti, O),
            V = N.anchor,
            P = N.rangeTap,
            E = 864e5,
            A = Math.max(1, Math.ceil(N.minRange / E)),
            I = Math.max(1, Math.ceil(N.maxRange / E)),
            F = "mbsc-disabled " + (N.disabledClass || ""),
            j = "mbsc-selected " + (N.selectedClass || ""),
            H = "mbsc-cal-day-hl",
            L = null === N.defaultValue ? [] : N.defaultValue || [new Date(k.setHours(0, 0, 0, 0)), new Date(k.getFullYear(), k.getMonth(), k.getDate() + 6, 23, 59, 59, 999)];
        return P && (N.tabs = !0), d = Dt.call(this, e), p = e._format, h = /time/i.test(N.controls.join(",")), w = "time" === N.controls.join(""), C = 1 != N.controls.length || "calendar" != N.controls[0] || N.showSelector, v = N.max ? a(re(N.max, p, N), !0) : 1 / 0, b = N.min ? a(re(N.min, p, N), !1) : -1 / 0, L[0] = re(L[0], p, N, N.isoParts), L[1] = re(L[1], p, N, N.isoParts), N.startInput && e.attachShow(pe(N.startInput), function() {
            D = 0, N.anchor = V || pe(N.startInput)
        }), N.endInput && e.attachShow(pe(N.endInput), function() {
            D = 1, N.anchor = V || pe(N.endInput)
        }), e._getDayProps = function(e, t) {
            var a = x ? new Date(x.getFullYear(), x.getMonth(), x.getDate()) : null,
                n = y ? new Date(y.getFullYear(), y.getMonth(), y.getDate()) : null;
            return {
                selected: a && n && e >= a && e <= y,
                cssClass: t.cssClass + " " + ((P || !D) && a && a.getTime() === e.getTime() || (P || D) && n && n.getTime() === e.getTime() ? H : "") + (a && a.getTime() === e.getTime() ? " mbsc-cal-sel-start" : "") + (n && n.getTime() === e.getTime() ? " mbsc-cal-sel-end" : "")
            }
        }, e.setVal = function(t, a, n, s, r) {
            var i, o = t || [];
            g = !0, x = re(o[0], p, N, N.isoParts), y = re(o[1], p, N, N.isoParts), c(), e.startVal = x ? Q(p, x, N) : "", e.endVal = y ? Q(p, y, N) : "", i = d.parseValue(D ? y : x, e), s || (e._startDate = M = x, e._endDate = S = y), e._setVal(i, a, n, s, r)
        }, e.getVal = function(t) {
            return t ? [se(x, N, p), se(y, N, p)] : e._hasValue ? [se(M, N, p), se(S, N, p)] : null
        }, e.setActiveDate = function(t) {
            var a;
            D = "start" == t ? 0 : 1, a = "start" == t ? x : y, e.isVisible() && (i(), P || (pe(".mbsc-cal-table .mbsc-cal-day-hl", u).removeClass(H), a && pe('.mbsc-cal-day[data-full="' + a.getFullYear() + "-" + (a.getMonth() + 1) + "-" + a.getDate() + '"]', u).addClass(H)), a && (f = !0, e.setDate(a, !1, 1e3, !0)))
        }, e.getValue = e.getVal, ge({}, d, {
            highlight: !1,
            outerMonthChange: !1,
            formatValue: function() {
                return e.startVal + (N.endInput ? "" : e.endVal ? " - " + e.endVal : "")
            },
            parseValue: function(t) {
                var a = t ? t.split(" - ") : [];
                return N.defaultValue = L[1], S = ee(p, N.endInput ? pe(N.endInput).val() : a[1], N), N.defaultValue = L[0], M = ee(p, N.startInput ? pe(N.startInput).val() : a[0], N), N.defaultValue = L[D], e.startVal = M ? Q(p, M, N) : "", e.endVal = S ? Q(p, S, N) : "", e._startDate = M, e._endDate = S, d.parseValue(D ? S : M, e)
            },
            onFill: function(t) {
                var a;
                a = t.change, e._startDate = M = x, e._endDate = S = y, N.startInput && (pe(N.startInput).val(e.startVal), a && pe(N.startInput).trigger("change")), N.endInput && (pe(N.endInput).val(e.endVal), a && pe(N.endInput).trigger("change"))
            },
            onBeforeClose: function(t) {
                if ("set" === t.button && !r(!0, !0)) return e.setActiveDate(D ? "start" : "end"), !1
            },
            onHide: function() {
                d.onHide.call(e), D = 0, u = null, N.anchor = V
            },
            onClear: function() {
                P && (D = 0)
            },
            onBeforeShow: function() {
                x = M || L[0], y = S || L[1], T = l(x, 0), _ = l(y, 1), N.counter && (N.headerText = function() {
                    var e = x && y ? Math.max(1, Math.round((new Date(y).setHours(0, 0, 0, 0) - new Date(x).setHours(0, 0, 0, 0)) / 864e5) + 1) : 0;
                    return (e > 1 && N.selectedPluralText || N.selectedText).replace(/{count}/, e)
                }), g = !0
            },
            onMarkupReady: function(t) {
                var a;
                c(), (D && y || !D && x) && (f = !0, e.setDate(D ? y : x, !1, 0, !0)), o(), d.onMarkupReady.call(this, t), (u = pe(t.target)).addClass("mbsc-range"), C && (a = '<div class="mbsc-range-btn-t" role="radiogroup"><div class="mbsc-range-btn-c mbsc-range-btn-start"><div role="radio" data-select="start" class="mbsc-fr-btn-e mbsc-fr-btn-nhl mbsc-range-btn">' + N.fromText + '<div class="mbsc-range-btn-v mbsc-range-btn-v-start">' + (e.startVal || "&nbsp;") + '</div></div></div><div class="mbsc-range-btn-c mbsc-range-btn-end"><div role="radio" data-select="end" class="mbsc-fr-btn-e mbsc-fr-btn-nhl mbsc-range-btn">' + N.toText + '<div class="mbsc-range-btn-v mbsc-range-btn-v-end">' + (e.endVal || "&nbsp;") + "</div></div></div></div>", N.headerText ? pe(".mbsc-fr-hdr", u).after(a) : pe(".mbsc-fr-w", u).prepend(a), i()), pe(".mbsc-range-btn", u).on("touchstart click", function(t) {
                    tt(t, this) && (e._showDayPicker(), e.setActiveDate(pe(this).attr("data-select")))
                })
            },
            onDayChange: function(e) {
                e.active = D ? "end" : "start", m = !0
            },
            onSetDate: function(n) {
                var s;
                f || (s = a(n.date, D), g && !m || (P && m && (1 == D && s < x && (D = 0), D ? s.setHours(_.h, _.i, _.s, 999) : s.setHours(T.h, T.i, T.s, 0)), D ? (y = new Date(s), _ = l(y)) : (x = new Date(s), T = l(x)), w && N.autoCorrect && (t(x, s), t(y, s)), P && m && !D && (y = null))), w && !N.autoCorrect && y < x && (y = new Date(y.setDate(y.getDate() + 1))), e._isValid = r(g || m || N.autoCorrect, !f), n.active = D ? "end" : "start", !f && P && (m && (D = D ? 0 : 1), i()), e.isVisible() && (e._isValid ? pe(".mbsc-fr-btn-s .mbsc-fr-btn", e._markup).removeClass(F) : pe(".mbsc-fr-btn-s .mbsc-fr-btn", e._markup).addClass(F)), m = !1, g = !1, f = !1
            },
            onTabChange: function(t) {
                "calendar" != t.tab && e.setDate(D ? y : x, !1, 1e3, !0), r(!0, !0)
            }
        })
    };
    var ai, ni, si = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var a = arguments[t];
            for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n])
        }
        return e
    };
    var ri = a.string,
        ii = a.bool,
        oi = a.number,
        li = a.func,
        ci = a.object,
        di = {
            autoCorrect: ii,
            controls: a.arrayOf(a.oneOf(["time", "date", "calendar"])),
            endInput: a.oneOfType([ri, ci]),
            maxRange: oi,
            minRange: oi,
            showSelector: ii,
            startInput: a.oneOfType([ri, ci]),
            fromText: ri,
            toText: ri,
            onSetDate: li
        },
        ui = (ai = function(e) {
            function t(e) {
                i(this, t);
                var a = u(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                return ni.call(a), a
            }
            return d(t, Xe), t
        }(), ni = function() {
            var a = this;
            this.componentDidMount = function() {
                function e(e) {
                    var a = pe(t.findDOMNode(e));
                    return a.is("input") ? a : a.find("input")
                }
                var n = t.findDOMNode(a),
                    s = pe(n).find("input"),
                    r = {};
                a.refs.start || a.refs.end ? (a.refs.start && (r.startInput = e(a.refs.start)), a.refs.end && (r.endInput = e(a.refs.end))) : 2 == s.length ? (r.startInput = s[0], r.endInput = s[1]) : s.length && (n = s[0]);
                var i = ge({
                    preset: "range"
                }, r, a.state.options);
                a.instance = new ve.Scroller(n, i), void 0 !== a.props.value && a.instance.setVal(a.props.value, !0)
            }, this.render = function() {
                var t = a.props,
                    n = t.readOnly,
                    s = t.disabled,
                    r = t.placeholder,
                    i = t.type;
                return i = i || "text", e.Children.count(a.props.children) > 0 ? e.createElement("div", null, e.Children.map(a.props.children, function(t) {
                    var n = {};
                    return t.type !== mi && t.type !== pi || (n.wrapper = a, n.ref = t.type === mi ? "start" : "end"), e.cloneElement(t, n)
                })) : e.createElement("input", {
                    className: a.initialCssClass,
                    type: i,
                    readOnly: n,
                    disabled: s,
                    placeholder: r
                })
            }
        }, ai);
    ui.propTypes = si({}, ui.propTypes, He, Le, ze, di), n.Range = ui;
    var mi = function(t) {
        function a(t) {
            i(this, a);
            var n = u(this, (a.__proto__ || Object.getPrototypeOf(a)).call(this, t));
            return n.rangeIndex = 0, n.componentDidUpdate = function() {
                if (n.props.value) {
                    var e = n.props.wrapper.instance.getVal() || [null, null];
                    $e(n.props.value, e[n.rangeIndex]) || (e[n.rangeIndex] = n.props.value, n.props.wrapper.instance.setVal(e, !0))
                }
            }, n.render = function() {
                /* eslint-disable no-unused-vars */
                var t = n.props,
                    a = (t.value, t.wrapper, function(e, t) {
                        var a = {};
                        for (var n in e) t.indexOf(n) >= 0 || Object.prototype.hasOwnProperty.call(e, n) && (a[n] = e[n]);
                        return a
                    }(t, ["value", "wrapper"]));
                return n.props.children ? e.createElement("div", null, n.props.children) : e.createElement("input", a)
            }, n
        }
        return d(a, t), a
    }(e.Component);
    mi.propTypes = {
        value: a.oneOfType([a.string, a.object])
    }, n.RangeStart = mi;
    var pi = function(e) {
        function t(e) {
            i(this, t);
            var a = u(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
            return a.rangeIndex = 1, a
        }
        return d(t, mi), t
    }();
    pi.propTypes = si({}, mi.propTypes), n.RangeEnd = pi;
    var hi = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var a = arguments[t];
                for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n])
            }
            return e
        },
        fi = function(e) {
            function t(e) {
                i(this, t);
                var a = u(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                return a.mbscInit = {
                    component: "Scroller"
                }, a
            }
            return d(t, Ze), t
        }();
    fi.propTypes = hi({}, fi.propTypes, He), n.Scroller = fi;
    var vi = function(a) {
        function n(a) {
            i(this, n);
            var s = u(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, a));
            return s.componentDidMount = function() {
                var e = ge({}, s.state.options),
                    a = t.findDOMNode(s);
                s.instance = new mr(a, e)
            }, s.render = function() {
                return e.createElement("div", {
                    className: s.initialCssClass + " mbsc-cloak"
                }, s.props.children)
            }, s
        }
        return d(n, xr), n
    }();
    n.ScrollView = vi;
    var bi = 0;

    function gi(e, t, a) {
        
                t(JSON.parse(''))
      
    }
    s.getJson = gi;
    var xi = {
        inputClass: "",
        invalid: [],
        rtl: !1,
        showInput: !0,
        groupLabel: "Groups",
        dataHtml: "html",
        dataText: "text",
        dataValue: "value",
        dataGroup: "group",
        dataDisabled: "disabled",
        filterPlaceholderText: "Type to filter",
        filterEmptyText: "No results",
        filterClearIcon: "material-close"
    };
    Tt.select = function(e) {
        var t, a, n, s, r, i, o, l, c, d, u, m, p, h, f = {},
            v = 1e3,
            b = this,
            g = pe(b),
            x = ge({}, e.settings),
            T = ge(e.settings, xi, x),
            y = pe('<div class="mbsc-sel-empty">' + T.filterEmptyText + "</div>"),
            _ = T.readonly,
            w = {},
            C = T.layout || (/top|bottom|inline/.test(T.display) || T.filter ? "liquid" : ""),
            M = "liquid" == C || !T.touchUi,
            S = j(T.select) ? T.select : "multiple" == T.select || g.prop("multiple"),
            D = S || !(!T.filter && !T.tapSelect) && 1,
            k = this.id + "_dummy",
            O = pe('label[for="' + this.id + '"]').attr("for", k),
            N = void 0 !== T.label ? T.label : O.length ? O.text() : g.attr("name"),
            V = !!T.data,
            P = V ? !!T.group : pe("optgroup", g).length,
            E = T.group,
            L = P && E && !1 !== E.groupWheel,
            z = P && E && L && !0 === E.clustered,
            Y = P && (!E || !1 !== E.header && !z),
            $ = g.val() || (S ? [] : [""]),
            R = [];

        function W(e) {
            var t, s, r, i, c, d, u = 0,
                p = 0,
                h = {};
            if (w = {}, l = {}, m = [], o = [], R.length = 0, V) pe.each(a, function(a, n) {
                c = n[T.dataText] + "", s = n[T.dataHtml], d = n[T.dataValue], r = n[T.dataGroup], i = {
                    value: d,
                    html: s,
                    text: c,
                    index: a,
                    cssClass: Y ? "mbsc-sel-gr-itm" : ""
                }, w[d] = i, e && !Q(c, e) || (m.push(i), P && (void 0 === h[r] ? (t = {
                    text: r,
                    value: p,
                    options: [],
                    index: p
                }, l[p] = t, h[r] = p, o.push(t), p++) : t = l[h[r]], z && (i.index = t.options.length), i.group = h[r], t.options.push(i)), n[T.dataDisabled] && R.push(d))
            });
            else if (P) {
                var f = !0;
                pe("optgroup", g).each(function(t) {
                    l[t] = {
                        text: this.label,
                        value: t,
                        options: [],
                        index: t
                    }, f = !0, pe("option", this).each(function(a) {
                        i = {
                            value: this.value,
                            text: this.text,
                            index: z ? a : u++,
                            group: t,
                            cssClass: Y ? "mbsc-sel-gr-itm" : ""
                        }, w[this.value] = i, e && !Q(this.text, e) || (f && (o.push(l[t]), f = !1), m.push(i), l[t].options.push(i), this.disabled && R.push(this.value))
                    })
                })
            } else pe("option", g).each(function(t) {
                i = {
                    value: this.value,
                    text: this.text,
                    index: t
                }, w[this.value] = i, e && !Q(this.text, e) || (m.push(i), this.disabled && R.push(this.value))
            });
            T.defaultValue ? n = T.defaultValue : m.length && (n = m[0].value), Y && (m = [], u = 0, pe.each(l, function(e, t) {
                t.options.length && (d = "__group" + e, i = {
                    text: t.text,
                    value: d,
                    group: e,
                    index: u++,
                    cssClass: "mbsc-sel-gr"
                }, w[d] = i, m.push(i), R.push(i.value), pe.each(t.options, function(e, t) {
                    t.index = u++, m.push(t)
                }))
            })), y && (m.length ? y.removeClass("mbsc-sel-empty-v") : y.addClass("mbsc-sel-empty-v"))
        }

        function U(e, t, a, n, s) {
            var r, i = [];
            for (r = 0; r < e.length; r++) i.push({
                value: e[r].value,
                display: e[r].html || e[r].text,
                cssClass: e[r].cssClass
            });
            return {
                circular: !1,
                multiple: t && !n ? 1 : n,
                cssClass: (t && !n ? "mbsc-sel-one" : "") + " " + s,
                data: i,
                label: a
            }
        }

        function J() {
            return U(o, D, T.groupLabel, !1, "mbsc-sel-gr-whl")
        }

        function B() {
            return U(z ? l[i].options : m, D, N, S, "")
        }

        function K() {
            var e, t, a = [
                []
            ];
            return L && (e = J(), M ? a[0][c] = e : a[c] = [e]), t = B(), M ? a[0][p] = t : a[p] = [t], a
        }

        function q(e) {
            S && (e && H(e) && (e = e.split(",")), pe.isArray(e) && (e = e[0])), u = void 0 === e || null === e || "" === e ? n : e, L && (i = w[u] ? w[u].group : null)
        }

        function G(e) {
            return f[e] || (w[e] ? w[e].text : "")
        }

        function X() {
            var a, n = "",
                s = e.getVal(),
                r = T.formatValue.call(b, e.getArrayVal(), e);
            if (T.filter && "inline" == T.display || t.val(r), g.is("select") && V) {
                if (S)
                    for (a = 0; a < s.length; a++) n += '<option value="' + s[a] + '">' + G(s[a]) + "</option>";
                else n = '<option value="' + s + '">' + r + "</option>";
                g.html(n)
            }
            b !== t[0] && g.val(s)
        }

        function Z() {
            var t = {};
            t[p] = B(), h = !0, e.changeWheel(t)
        }

        function Q(e, t) {
            return t = t.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&"), e.match(new RegExp(t, "ig"))
        }

        function ee(e) {
            return T.data.dataField ? e[T.data.dataField] : T.data.processResponse ? T.data.processResponse(e) : e
        }

        function te(t) {
            var a = {};
            W(t), T.wheels = K(), q(u), a[p] = B(), e._tempWheelArray[p] = u, L && (a[c] = J(), e._tempWheelArray[c] = i), e._isVisible && e.changeWheel(a, 0, !0)
        }

        function ae(t) {
            return e.trigger("onFilter", {
                filterText: t
            })
        }

        function ne(t) {
            t[c] != i && (i = t[c], u = l[i].options[0].value, t[p] = u, z ? Z() : e.setArrayVal(t, !1, !1, !0, v))
        }
        return e.setVal = function(t, a, n, s, r) {
            if (D && (null === t || void 0 === t || S || (t = [t]), t && H(t) && (t = t.split(",")), e._tempSelected[p] = F(t), s || (e._selected[p] = F(t)), t = t ? t[0] : null, L)) {
                var i = w[t],
                    o = i && i.group;
                e._tempSelected[c] = F([o]), s || (e._selected[c] = F([o]))
            }
            e._setVal(t, a, n, s, r)
        }, e.getVal = function(t, a) {
            var n;
            return D ? (n = I(t ? e._tempSelected[p] : e._selected[p]), n = S ? n : n.length ? n[0] : null) : n = (n = t ? e._tempWheelArray : e._hasValue ? e._wheelArray : null) ? n[p] : null, S ? n : void 0 !== n ? P && a ? [w[n] ? w[n].group : null, n] : n : null
        }, e.refresh = function(e, t, n) {
            n = n || A, e ? (a = e, d || (T.data = e)) : pe.isArray(T.data) && (a = T.data), !e && d && void 0 === t ? gi(T.data.url, function(e) {
                a = ee(e), te(), n()
            }, T.data.dataType) : (te(t), n())
        }, T.invalid.length || (T.invalid = R), L ? (c = 0, p = 1) : (c = -1, p = 0), D && (S && g.prop("multiple", !0), $ && H($) && ($ = $.split(",")), e._selected[p] = F($)), e._$input && e._$input.remove(), g.next().is("input.mbsc-control") ? t = g.next().removeAttr("tabindex") : T.input ? t = pe(T.input) : (T.filter && "inline" == T.display ? e._$input = pe('<div class="mbsc-sel-input-wrap"><input type="text" id="' + k + '" class="mbsc-control ' + T.inputClass + '" readonly /></div>') : (t = pe('<input type="text" id="' + k + '" class="mbsc-control ' + T.inputClass + '" readonly />'), e._$input = t), T.showInput && (e._$input.insertBefore(g), t || (t = e._$input.find("#" + k)))), e.attachShow(t.attr("placeholder", T.placeholder || "")), t[0] !== b && g.addClass("mbsc-sel-hdn").attr("tabindex", -1), !D || T.rows % 2 || (T.rows = T.rows - 1), T.filter && (s = T.filter.minLength || 0), (d = T.data && T.data.url) ? e.refresh(void 0, void 0, X) : (V && (a = T.data), W(), q(g.val())), {
            layout: C,
            headerText: !1,
            anchor: t,
            compClass: "mbsc-sc mbsc-sel" + (D ? " mbsc-sel-multi" : ""),
            setOnTap: !L || [!1, !0],
            formatValue: function(t) {
                var a, n = [];
                if (D) {
                    for (a in e._tempSelected[p]) n.push(G(a));
                    return n.join(", ")
                }
                return G(t[p])
            },
            tapSelect: D,
            parseValue: function(e) {
                return q(void 0 === e ? g.val() : e), L ? [i, u] : [u]
            },
            validate: function(e) {
                var t = e.index,
                    a = [];
                return a[p] = T.invalid, z && !h && void 0 === t && Z(), h = !1, {
                    disabled: a
                }
            },
            onRead: X,
            onFill: X,
            onMarkupReady: function(e, a) {
                if (T.filter) {
                    var n, i, o, l = pe(".mbsc-fr-w", e.target),
                        c = pe('<span class="mbsc-sel-filter-clear mbsc-ic mbsc-ic-' + T.filterClearIcon + '"></span>');
                    "inline" == T.display ? (n = t, t.parent().find(".mbsc-sel-filter-clear").remove()) : (l.find(".mbsc-fr-c").before('<div class="mbsc-input mbsc-sel-filter-cont mbsc-control-w"><span class="mbsc-input-wrap"><input tabindex="0" type="text" class="mbsc-sel-filter-input mbsc-control"/></span></div>'), n = l.find(".mbsc-sel-filter-input")), r = null, o = n[0], n.prop("readonly", !1).attr("placeholder", T.filterPlaceholderText).parent().append(c), l.find(".mbsc-fr-c").prepend(y), a._activeElm = o, a.tap(c, function() {
                        r = null, o.value = "", a.refresh(), c.removeClass("mbsc-sel-filter-show-clear"), ae("")
                    }), n.on("keydown", function(e) {
                        13 != e.keyCode && 27 != e.keyCode || (e.stopPropagation(), o.blur())
                    }).on("keyup", function() {
                        clearTimeout(i), o.value.length ? c.addClass("mbsc-sel-filter-show-clear") : c.removeClass("mbsc-sel-filter-show-clear"), i = setTimeout(function() {
                            r !== o.value && !1 !== ae(o.value) && ((r = o.value).length >= s || !r.length) && (d && T.data.remoteFilter ? gi(T.data.url + encodeURIComponent(r), function(e) {
                                a.refresh(ee(e))
                            }, T.data.dataType) : a.refresh(void 0, r))
                        }, 500)
                    })
                }
            },
            onBeforeShow: function() {
                S && T.counter && (T.headerText = function() {
                    var t = 0;
                    return pe.each(e._tempSelected[p], function() {
                        t++
                    }), (t > 1 && T.selectedPluralText || T.selectedText).replace(/{count}/, t)
                }), q(g.val()), D && L && (e._selected[c] = F([i])), T.filter && W(void 0), e.settings.wheels = K(), h = !0
            },
            onWheelGestureStart: function(e) {
                e.index == c && (T.readonly = [!1, !0])
            },
            onWheelAnimationEnd: function(t) {
                var a = e.getArrayVal(!0);
                t.index == c ? (T.readonly = _, D || ne(a)) : t.index == p && a[p] != u && (u = a[p], L && w[u] && w[u].group != i && (i = w[u].group, a[c] = i, e._tempSelected[c] = F([i]), e.setArrayVal(a, !1, !1, !0, v)))
            },
            onItemTap: function(t) {
                var a;
                if (t.index == p && (f[t.value] = w[t.value].text, D && !S && t.selected)) return !1;
                if (t.index == c && D) {
                    if (t.selected) return !1;
                    (a = e.getArrayVal(!0))[c] = t.value, ne(a)
                }
            },
            onClose: function() {
                d && T.data.remoteFilter && r && e.refresh()
            },
            onDestroy: function() {
                e._$input && e._$input.remove(), g.removeClass("mbsc-sel-hdn").removeAttr("tabindex")
            }
        }
    };
    var Ti = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var a = arguments[t];
                for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n])
            }
            return e
        },
        yi = a.bool,
        _i = a.string,
        wi = a.array,
        Ci = a.number,
        Mi = function(a) {
            function n(a) {
                i(this, n);
                var s = u(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, a));
                return s.componentDidMount = function() {
                    var e = ge({
                        preset: "select"
                    }, s.state.options, {
                        data: null === s.state.data ? [] : s.state.data
                    });
                    s.instance = new wt(t.findDOMNode(s), e), void 0 !== s.state.value && s.instance.setVal(s.state.value, !0)
                }, s.componentDidUpdate = function() {
                    var e;
                    void 0 !== s.optimizeThisUpdate && (s.optimizeThisUpdate.updateOptions && (e = ge({}, s.state.options)), s.optimizeThisUpdate.updateOptions && (s.optimizeThisUpdate.updateData || s.optimizeThisUpdate.updateChildren) ? (s.optimizeThisUpdate.updateData && (e = ge(e, {
                        data: s.state.data
                    })), s.instance.option(e)) : s.optimizeThisUpdate.updateData || s.optimizeThisUpdate.updateChildren ? s.instance.refresh(s.state.data) : s.optimizeThisUpdate.updateOptions && s.instance.option(e), (s.optimizeThisUpdate.updateValue || s.optimizeThisUpdate.updateData || s.optimizeThisUpdate.updateChildren) && s.instance.setVal(s.state.value, !0))
                }, s.shouldComponentUpdate = function(e, t) {
                    var a = !$e(t.options, s.state.options),
                        n = !$e(t.data, s.state.data),
                        r = !$e(e.children, s.props.children),
                        i = !$e(t.value, s.state.value) && void 0 !== t.value && !$e(t.value, s.instance.getVal());
                    return s.optimizeThisUpdate = {
                        updateOptions: a,
                        updateData: n,
                        updateValue: i,
                        updateChildren: r
                    }, s.optimizeUpdate = {
                        updateOptions: !1,
                        updateValue: !1,
                        updateData: !1,
                        updateChildren: !1
                    }, a || n || i || r
                }, s.checkChildComponent = function(t) {
                    return 1 == e.Children.count(t.props.children) && ("select" == t.props.children.type || "input" == t.props.children.type)
                }, s.render = function() {
                    var t = s.props,
                        a = t.readOnly,
                        n = t.disabled,
                        r = t.data,
                        i = t.value;
                    return s.checkChildComponent(s) ? s.props.children : void 0 !== r ? e.createElement("input", {
                        defaultValue: i,
                        type: "text",
                        className: s.initialCssClass,
                        readOnly: a,
                        disabled: n
                    }) : e.createElement("select", {
                        className: s.initialCssClass + " mbsc-cloak",
                        readOnly: a,
                        disabled: n
                    }, s.props.children)
                }, s
            }
            return d(n, Ge), n
        }();
    Mi.propTypes = Ti({}, Mi.propTypes, Fe, je, He, {
        counter: yi,
        data: a.oneOfType([wi, a.shape({
            url: _i,
            dataField: _i,
            dataType: a.oneOf(["json", "jsonp"]),
            processResponse: a.func,
            remoteFilter: yi
        })]),
        dataText: _i,
        dataGroup: _i,
        dataValue: _i,
        group: a.oneOfType([yi, a.shape({
            groupedWheel: yi,
            header: yi,
            clustered: yi
        })]),
        filter: yi,
        groupLabel: _i,
        inputClass: _i,
        invalid: wi,
        label: _i,
        placeholder: _i,
        select: a.oneOfType([Ci, a.oneOf(["single", "multiple"])]),
        showInput: yi
    }), n.Select = Mi;
    var Si = {
        autostart: !1,
        step: 1,
        useShortLabels: !1,
        labels: ["Years", "Months", "Days", "Hours", "Minutes", "Seconds", ""],
        labelsShort: ["Yrs", "Mths", "Days", "Hrs", "Mins", "Secs", ""],
        startText: "Start",
        stopText: "Stop",
        resetText: "Reset",
        lapText: "Lap",
        hideText: "Hide",
        mode: "countdown"
    };
    Tt.timer = function(e) {
        function t(e) {
            return new Date(e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate(), e.getUTCHours(), e.getUTCMinutes(), e.getUTCSeconds(), e.getUTCMilliseconds())
        }

        function a(e) {
            var t = 1,
                a = w[e],
                s = a.wheel,
                r = a.prefix,
                i = a.until,
                l = w[_[pe.inArray(e, _) - 1]];
            if (a.index <= w[V].index && (!l || l.limit > N))
                if (C[e] || I[0].push(s), C[e] = 1, s.data = [], s.label = a.label || "", s.cssClass = "mbsc-timer-whl-" + e, N >= a.limit && (t = Math.max(Math.round(N / a.limit), 1), c = t * a.limit), e == V) s.min = 0, s.data = function(e) {
                    return {
                        value: e,
                        display: n(e, r, a.label)
                    }
                }, s.getIndex = function(e) {
                    return e
                };
                else
                    for (o = 0; o <= i; o += t) s.data.push({
                        value: o,
                        display: n(o, r, a.label)
                    })
        }

        function n(e, t, a) {
            return (t || "") + (e < 10 ? "0" : "") + e + '<span class="mbsc-timer-lbl">' + a + "</span>"
        }

        function s(e) {
            var a, n = [],
                s = function(e) {
                    var a = {};
                    if (A && w[V].index > w.days.index) {
                        var n, s, r, i, o = new Date,
                            l = f ? o : E,
                            c = f ? E : o;
                        for (c = t(c), l = t(l), a.years = l.getFullYear() - c.getFullYear(), a.months = l.getMonth() - c.getMonth(), a.days = l.getDate() - c.getDate(), a.hours = l.getHours() - c.getHours(), a.minutes = l.getMinutes() - c.getMinutes(), a.seconds = l.getSeconds() - c.getSeconds(), a.fract = (l.getMilliseconds() - c.getMilliseconds()) / 10, n = _.length; n > 0; n--) s = _[n - 1], r = w[s], i = _[pe.inArray(s, _) - 1], w[i] && a[s] < 0 && (a[i]--, a[s] += "months" == i ? 32 - new Date(l.getFullYear(), l.getMonth(), 32).getDate() : r.until + 1);
                        "months" == V && (a.months += 12 * a.years, delete a.years)
                    } else pe(_).each(function(t, n) {
                        w[n].index <= w[V].index && (a[n] = Math.floor(e / w[n].limit), e -= a[n] * w[n].limit)
                    });
                    return a
                }(e);
            return pe(_).each(function(e, t) {
                C[t] && (a = Math.max(Math.round(N / w[t].limit), 1), n.push(Math.round(s[t] / a) * a))
            }), n
        }

        function r(e) {
            A ? ((p = E - new Date) < 0 ? (p *= -1, f = !0) : f = !1, h = 0, O = !0) : void 0 !== E ? (O = !1, p = 1e3 * E, f = "countdown" != x.mode, e && (h = 0)) : (p = 0, f = "countdown" != x.mode, O = f, e && (h = 0))
        }

        function i() {
            D ? (pe(".mbsc-fr-w", v).addClass("mbsc-timer-running mbsc-timer-locked"), pe(".mbsc-timer-btn-toggle-c > div", v).text(x.stopText), e.buttons.start.icon && pe(".mbsc-timer-btn-toggle-c > div", v).removeClass("mbsc-ic-" + e.buttons.start.icon), e.buttons.stop.icon && pe(".mbsc-timer-btn-toggle-c > div", v).addClass("mbsc-ic-" + e.buttons.stop.icon), "stopwatch" == x.mode && (pe(".mbsc-timer-btn-resetlap-c > div", v).text(x.lapText), e.buttons.reset.icon && pe(".mbsc-timer-btn-resetlap-c > div", v).removeClass("mbsc-ic-" + e.buttons.reset.icon), e.buttons.lap.icon && pe(".mbsc-timer-btn-resetlap-c > div", v).addClass("mbsc-ic-" + e.buttons.lap.icon))) : (pe(".mbsc-fr-w", v).removeClass("mbsc-timer-running"), pe(".mbsc-timer-btn-toggle-c > div", v).text(x.startText), e.buttons.start.icon && pe(".mbsc-timer-btn-toggle-c > div", v).addClass("mbsc-ic-" + e.buttons.start.icon), e.buttons.stop.icon && pe(".mbsc-timer-btn-toggle-c > div", v).removeClass("mbsc-ic-" + e.buttons.stop.icon), "stopwatch" == x.mode && (pe(".mbsc-timer-btn-resetlap-c > div", v).text(x.resetText), e.buttons.reset.icon && pe(".mbsc-timer-btn-resetlap-c > div", v).addClass("mbsc-ic-" + e.buttons.reset.icon), e.buttons.lap.icon && pe(".mbsc-timer-btn-resetlap-c > div", v).removeClass("mbsc-ic-" + e.buttons.lap.icon)))
        }
        var o, l, c, d, u, m, p, h, f, v, b, g = ge({}, e.settings),
            x = ge(e.settings, Si, g),
            T = x.useShortLabels ? x.labelsShort : x.labels,
            y = ["resetlap", "toggle"],
            _ = ["years", "months", "days", "hours", "minutes", "seconds", "fract"],
            w = {
                years: {
                    index: 6,
                    until: 10,
                    limit: 31536e6,
                    label: T[0],
                    wheel: {}
                },
                months: {
                    index: 5,
                    until: 11,
                    limit: 2592e6,
                    label: T[1],
                    wheel: {}
                },
                days: {
                    index: 4,
                    until: 31,
                    limit: 864e5,
                    label: T[2],
                    wheel: {}
                },
                hours: {
                    index: 3,
                    until: 23,
                    limit: 36e5,
                    label: T[3],
                    wheel: {}
                },
                minutes: {
                    index: 2,
                    until: 59,
                    limit: 6e4,
                    label: T[4],
                    wheel: {}
                },
                seconds: {
                    index: 1,
                    until: 59,
                    limit: 1e3,
                    label: T[5],
                    wheel: {}
                },
                fract: {
                    index: 0,
                    until: 99,
                    limit: 10,
                    label: T[6],
                    prefix: ".",
                    wheel: {}
                }
            },
            C = {},
            M = [],
            S = 0,
            D = !1,
            k = !0,
            O = !1,
            N = Math.max(10, 1e3 * x.step),
            V = x.maxWheel,
            P = "stopwatch" == x.mode || A,
            E = x.targetTime,
            A = E && void 0 !== E.getTime,
            I = [
                []
            ];
        return e.start = function() {
            if (k && e.reset(), !D) {
                if (r(), !O && h >= p) return;
                D = !0, k = !1, u = new Date, d = h, x.readonly = !0, e.setVal(s(f ? h : p - h), !0, !0, !1, 100), l = setInterval(function() {
                    h = new Date - u + d, e.setVal(s(f ? h : p - h), !0, !0, !1, Math.min(100, c - 10)), !O && h + c >= p && (clearInterval(l), setTimeout(function() {
                        e.stop(), h = p, e.setVal(s(f ? h : 0), !0, !0, !1, 100), e.trigger("onFinish", {
                            time: p
                        }), k = !0
                    }, p - h))
                }, c), i(), e.trigger("onStart")
            }
        }, e.stop = function() {
            D && (D = !1, clearInterval(l), h = new Date - u + d, i(), e.trigger("onStop", {
                ellapsed: h
            }))
        }, e.toggle = function() {
            D ? e.stop() : e.start()
        }, e.reset = function() {
            e.stop(), h = 0, M = [], S = 0, e.setVal(s(f ? 0 : p), !0, !0, !1, 1e3), e.settings.readonly = P, k = !0, P || pe(".mbsc-fr-w", v).removeClass("mbsc-timer-locked"), e.trigger("onReset")
        }, e.lap = function() {
            D && (m = new Date - u + d, b = m - S, S = m, M.push(m), e.trigger("onLap", {
                ellapsed: m,
                lap: b,
                laps: M
            }))
        }, e.resetlap = function() {
            D && "stopwatch" == x.mode ? e.lap() : e.reset()
        }, e.getTime = function() {
            return p
        }, e.setTime = function(e) {
            E = e / 1e3, p = e
        }, e.getEllapsedTime = function() {
            return k ? 0 : D ? new Date - u + d : h
        }, e.setEllapsedTime = function(t, a) {
            k || (d = h = t, u = new Date, e.setVal(s(f ? h : p - h), !0, a, !1, 1e3))
        }, r(!0), V || p || (V = "minutes"), "inline" !== x.display && y.unshift("hide"), V || pe(_).each(function(e, t) {
            if (!V && p >= w[t].limit) return V = t, !1
        }), pe(_).each(function(e, t) {
            a(t)
        }), c = Math.max(97, c), x.autostart && setTimeout(function() {
            e.start()
        }, 0), e.handlers.toggle = e.toggle, e.handlers.start = e.start, e.handlers.stop = e.stop, e.handlers.resetlap = e.resetlap, e.handlers.reset = e.reset, e.handlers.lap = e.lap, e.buttons.toggle = {
            parentClass: "mbsc-timer-btn-toggle-c",
            text: x.startText,
            icon: x.startIcon,
            handler: "toggle"
        }, e.buttons.start = {
            text: x.startText,
            icon: x.startIcon,
            handler: "start"
        }, e.buttons.stop = {
            text: x.stopText,
            icon: x.stopIcon,
            handler: "stop"
        }, e.buttons.reset = {
            text: x.resetText,
            icon: x.resetIcon,
            handler: "reset"
        }, e.buttons.lap = {
            text: x.lapText,
            icon: x.lapIcon,
            handler: "lap"
        }, e.buttons.resetlap = {
            parentClass: "mbsc-timer-btn-resetlap-c",
            text: x.resetText,
            icon: x.resetIcon,
            handler: "resetlap"
        }, e.buttons.hide = {
            parentClass: "mbsc-timer-btn-hide-c",
            text: x.hideText,
            icon: x.closeIcon,
            handler: "cancel"
        }, {
            wheels: I,
            headerText: !1,
            readonly: P,
            buttons: y,
            compClass: "mbsc-timer mbsc-sc",
            parseValue: function() {
                return s(f ? 0 : p)
            },
            formatValue: function(e) {
                var t = "",
                    a = 0;
                return pe(_).each(function(n, s) {
                    "fract" != s && C[s] && (t += e[a] + ("seconds" == s && C.fract ? "." + e[a + 1] : "") + " " + T[n] + " ", a++)
                }), t
            },
            validate: function(e) {
                var t = e.values,
                    a = e.index,
                    n = 0;
                k && void 0 !== a && (E = 0, pe(_).each(function(e, a) {
                    C[a] && (E += w[a].limit * t[n], n++)
                }), E /= 1e3, r(!0))
            },
            onBeforeShow: function() {
                x.showLabel = !0
            },
            onMarkupReady: function(e) {
                v = pe(e.target), i(), P && pe(".mbsc-fr-w", v).addClass("mbsc-timer-locked")
            },
            onPosition: function(e) {
                pe(".mbsc-fr-w", e.target).css("min-width", 0).css("min-width", pe(".mbsc-fr-btn-cont", e.target)[0].offsetWidth)
            },
            onDestroy: function() {
                clearInterval(l)
            }
        }
    };
    var Di = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var a = arguments[t];
                for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n])
            }
            return e
        },
        ki = a.bool,
        Oi = a.number,
        Ni = a.string,
        Vi = a.func,
        Pi = {
            autostart: ki,
            maxWheel: a.oneOf(["years", "months", "days", "hours", "minutes", "seconds", "fract"]),
            mode: a.oneOf(["countdown", "stopwatch"]),
            step: Oi,
            targetTime: Oi,
            useShortLabels: ki,
            hideText: Ni,
            labels: a.arrayOf(Ni),
            labelsShort: a.arrayOf(Ni),
            lapText: Ni,
            resetText: Ni,
            startText: Ni,
            stopText: Ni,
            lap: Vi,
            onFinish: Vi,
            onReset: Vi,
            onStart: Vi,
            onStop: Vi
        },
        Ei = function(e) {
            function t(e) {
                i(this, t);
                var a = u(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                return a.mbscInit = {
                    preset: "timer"
                }, a
            }
            return d(t, Ze), t
        }();
    Ei.propTypes = Di({}, Ei.propTypes, He, Pi), n.Timer = Ei;
    var Ai = {
        wheelOrder: "hhiiss",
        useShortLabels: !1,
        min: 0,
        max: 1 / 0,
        labels: ["Years", "Months", "Days", "Hours", "Minutes", "Seconds"],
        labelsShort: ["Yrs", "Mths", "Days", "Hrs", "Mins", "Secs"]
    };
    Tt.timespan = function(e) {
        function t(e) {
            var t = {};
            return pe(h).each(function(a, n) {
                t[n] = g[n] ? Math.floor(e / f[n].limit) : 0, e -= t[n] * f[n].limit
            }), t
        }

        function a(e) {
            var t = !1,
                a = b[g[e] - 1] || 1,
                s = f[e],
                i = s.label,
                o = s.wheel;
            if (o.data = [], o.label = s.label, m.match(new RegExp(s.re + s.re, "i")) && (t = !0), e == x) o.min = l[e], o.max = c[e], o.data = function(e) {
                return {
                    value: e * a,
                    display: n(e * a, t, i)
                }
            }, o.getIndex = function(e) {
                return Math.round(e / a)
            };
            else
                for (r = 0; r <= s.until; r += a) o.data.push({
                    value: r,
                    display: n(r, t, i)
                })
        }

        function n(e, t, a) {
            return (e < 10 && t ? "0" : "") + e + '<span class="mbsc-ts-lbl">' + a + "</span>"
        }

        function s(e) {
            var t = 0;
            return pe.each(v, function(a, n) {
                isNaN(+e[0]) || (t += f[n.v].limit * e[a])
            }), t
        }
        var r, i, o, l, c, d = ge({}, e.settings),
            u = ge(e.settings, Ai, d),
            m = u.wheelOrder,
            p = u.useShortLabels ? u.labelsShort : u.labels,
            h = ["years", "months", "days", "hours", "minutes", "seconds"],
            f = {
                years: {
                    ord: 0,
                    index: 6,
                    until: 10,
                    limit: 31536e6,
                    label: p[0],
                    re: "y",
                    wheel: {}
                },
                months: {
                    ord: 1,
                    index: 5,
                    until: 11,
                    limit: 2592e6,
                    label: p[1],
                    re: "m",
                    wheel: {}
                },
                days: {
                    ord: 2,
                    index: 4,
                    until: 31,
                    limit: 864e5,
                    label: p[2],
                    re: "d",
                    wheel: {}
                },
                hours: {
                    ord: 3,
                    index: 3,
                    until: 23,
                    limit: 36e5,
                    label: p[3],
                    re: "h",
                    wheel: {}
                },
                minutes: {
                    ord: 4,
                    index: 2,
                    until: 59,
                    limit: 6e4,
                    label: p[4],
                    re: "i",
                    wheel: {}
                },
                seconds: {
                    ord: 5,
                    index: 1,
                    until: 59,
                    limit: 1e3,
                    label: p[5],
                    re: "s",
                    wheel: {}
                }
            },
            v = [],
            b = u.steps || [],
            g = {},
            x = "seconds",
            T = u.defaultValue || Math.max(u.min, Math.min(0, u.max)),
            y = [
                []
            ];
        return pe(h).each(function(e, t) {
            (i = m.search(new RegExp(f[t].re, "i"))) > -1 && (v.push({
                o: i,
                v: t
            }), f[t].index > f[x].index && (x = t))
        }), v.sort(function(e, t) {
            return e.o > t.o ? 1 : -1
        }), pe.each(v, function(e, t) {
            g[t.v] = e + 1, y[0].push(f[t.v].wheel)
        }), l = t(u.min), c = t(u.max), pe.each(v, function(e, t) {
            a(t.v)
        }), e.getVal = function(t, a) {
            return a ? e._getVal(t) : e._hasValue || t ? s(e.getArrayVal(t)) : null
        }, {
            showLabel: !0,
            wheels: y,
            compClass: "mbsc-ts mbsc-sc",
            parseValue: function(e) {
                var a, n = [];
                return j(e) || !e ? (o = t(e || T), pe.each(v, function(e, t) {
                    n.push(o[t.v])
                })) : pe.each(v, function(t, s) {
                    a = new RegExp("(\\d+)\\s?(" + u.labels[f[s.v].ord] + "|" + u.labelsShort[f[s.v].ord] + ")", "gi").exec(e), n.push(a ? a[1] : 0)
                }), pe(n).each(function(e, t) {
                    n[e] = function(e, t) {
                        return Math.floor(e / t) * t
                    }(t, b[e] || 1)
                }), n
            },
            formatValue: function(e) {
                var t = "";
                return pe.each(v, function(a, n) {
                    t += +e[a] ? e[a] + " " + f[n.v].label + " " : ""
                }), t ? t.replace(/\s+$/g, "") : 0
            },
            validate: function(a) {
                var n, r, i, o, d = a.values,
                    u = a.direction,
                    m = [],
                    p = !0,
                    v = !0;
                return pe(h).each(function(a, h) {
                    if (void 0 !== g[h]) {
                        if (i = g[h] - 1, m[i] = [], o = {}, h != x) {
                            if (p)
                                for (r = c[h] + 1; r <= f[h].until; r++) o[r] = !0;
                            if (v)
                                for (r = 0; r < l[h]; r++) o[r] = !0
                        }
                        d[i] = e.getValidValue(i, d[i], u, o), n = t(s(d)), p = p && n[h] == c[h], v = v && n[h] == l[h], pe.each(o, function(e) {
                            m[i].push(e)
                        })
                    }
                }), {
                    disabled: m
                }
            }
        }
    };
    var Ii = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var a = arguments[t];
                for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n])
            }
            return e
        },
        Fi = a.number,
        ji = a.string,
        Hi = {
            defaultValue: Fi,
            max: Fi,
            min: Fi,
            steps: a.arrayOf(Fi),
            useShortLabels: a.bool,
            wheelOrder: ji,
            labels: a.arrayOf(ji),
            labelsShort: a.arrayOf(ji)
        },
        Li = function(e) {
            function t(e) {
                i(this, t);
                var a = u(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                return a.mbscInit = {
                    preset: "timespan"
                }, a
            }
            return d(t, Ze), t
        }();
    Li.propTypes = Ii({}, Li.propTypes, He, Hi), n.Timespan = Li, Tt.treelist = Ts;
    var zi = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var a = arguments[t];
                for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n])
            }
            return e
        },
        Yi = a.array,
        $i = a.string,
        Ri = {
            defaultValue: Yi,
            inputClass: $i,
            invalid: Yi,
            labels: a.arrayOf($i),
            placeholder: $i,
            showInput: a.bool
        },
        Wi = function(e) {
            function t(e) {
                i(this, t);
                var a = u(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                return a.mbscInit = {
                    preset: "treelist"
                }, a
            }
            return d(t, Qe), t
        }();
    Wi.propTypes = zi({}, Wi.propTypes, Ri), n.Treelist = Wi;
    var Ui = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var a = arguments[t];
                for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n])
            }
            return e
        },
        Ji = function(t) {
            function a(t) {
                i(this, a);
                var n = u(this, (a.__proto__ || Object.getPrototypeOf(a)).call(this, t));
                return n.componentDidMount = function() {
                    var e = ge({}, n.state.options);
                    n.instance = new qa(n.refs.popup, e)
                }, n.render = function() {
                    return e.createElement("div", {
                        className: n.initialCssClass + " mbsc-cloak",
                        style: n.props.style,
                        ref: "popup"
                    }, n.props.children)
                }, n
            }
            return d(a, Xe), a
        }();
    Ji.propTypes = Ui({}, Ji.propTypes, Fe, je), n.Popup = Ji, n.Widget = Ji, n.i18n.ar = {
        rtl: !0,
        setText: "تعيين",
        cancelText: "إلغاء",
        clearText: "مسح",
        selectedText: "{count} المحدد",
        dateFormat: "dd/mm/yy",
        dayNames: ["الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"],
        dayNamesShort: ["أحد", "اثنين", "ثلاثاء", "أربعاء", "خميس", "جمعة", "سبت"],
        dayNamesMin: ["ح", "ن", "ث", "ر", "خ", "ج", "س"],
        dayText: "يوم",
        hourText: "ساعات",
        minuteText: "الدقائق",
        monthNames: ["كانون الثاني", "شهر فبراير", "مارس", "أبريل", "قد", "يونيو", "يوليو", "أغسطس", "سبتمبر", "شهر اكتوبر", "شهر نوفمبر", "ديسمبر"],
        monthNamesShort: ["كانون الثاني", "شهر فبراير", "مارس", "أبريل", "قد", "يونيو", "يوليو", "أغسطس", "سبتمبر", "شهر اكتوبر", "شهر نوفمبر", "ديسمبر"],
        monthText: "شهر",
        secText: "ثواني",
        amText: "ص",
        pmText: "م",
        timeFormat: "hh:ii A",
        yearText: "عام",
        nowText: "الآن",
        firstDay: 0,
        dateText: "تاريخ",
        timeText: "وقت",
        closeText: "إغلاق",
        todayText: "اليوم",
        prevMonthText: "الشهر السابق",
        nextMonthText: "الشهر القادم",
        prevYearText: "السنه السابقة",
        nextYearText: "العام القادم",
        allDayText: "اليوم كله",
        noEventsText: "لا توجد احداث",
        eventText: "الحدث",
        eventsText: "أحداث",
        fromText: "يبدا",
        toText: "ينتهي",
        wholeText: "كامل",
        fractionText: "جزء",
        unitText: "وحدة",
        delimiter: "/",
        decimalSeparator: ".",
        thousandsSeparator: ",",
        labels: ["سنوات", "أشهر", "أيام", "ساعة", "دقائق", "ثواني", ""],
        labelsShort: ["سنوات", "أشهر", "أيام", "ساعة", "دقائق", "ثواني", ""],
        startText: "بدء",
        stopText: "إيقاف",
        resetText: "إعادة ضبط",
        lapText: "الدورة",
        hideText: "إخفاء",
        offText: "إيقاف",
        onText: "تشغيل",
        backText: "رجوع",
        undoText: "تراجع"
    }, n.i18n.bg = {
        setText: "Задаване",
        cancelText: "Отмяна",
        clearText: "Изчистване",
        selectedText: "{count} подбран",
        dateFormat: "dd.mm.yy",
        dayNames: ["Неделя", "Понеделник", "Вторник", "Сряда", "Четвъртък", "Петък", "Събота"],
        dayNamesShort: ["Нед", "Пон", "Вто", "Сря", "Чет", "Пет", "Съб"],
        dayNamesMin: ["Не", "По", "Вт", "Ср", "Че", "Пе", "Съ"],
        dayText: "ден",
        delimiter: ".",
        hourText: "час",
        minuteText: "минута",
        monthNames: ["Януари", "Февруари", "Март", "Април", "Май", "Юни", "Юли", "Август", "Септември", "Октомври", "Ноември", "Декември"],
        monthNamesShort: ["Яну", "Фев", "Мар", "Апр", "Май", "Юни", "Юли", "Авг", "Сеп", "Окт", "Нов", "Дек"],
        monthText: "месец",
        secText: "секунди",
        timeFormat: "H:ii",
        yearText: "година",
        nowText: "Сега",
        pmText: "pm",
        amText: "am",
        firstDay: 1,
        dateText: "Дата",
        timeText: "път",
        todayText: "днес",
        prevMonthText: "Предишния месец",
        nextMonthText: "Следващият месец",
        prevYearText: "Предходната година",
        nextYearText: "Следващата година",
        closeText: "затвори",
        eventText: "Събитие",
        eventsText: "Събития",
        allDayText: "Цял ден",
        noEventsText: "Няма събития",
        fromText: "ОТ",
        toText: "ДО",
        wholeText: "цяло",
        fractionText: "фракция",
        unitText: "единица",
        labels: ["Години", "месеца", "дни", "часа", "минути", "секунди", ""],
        labelsShort: ["Години", "месеца", "дни", "часа", "минути", "секунди", ""],
        startText: "Старт",
        stopText: "Стоп",
        resetText: "Нулиране",
        lapText: "Обиколка",
        hideText: "крия",
        backText: "връщане",
        undoText: "ОТМЯНА",
        offText: "ИЗКЛ",
        onText: "ВКЛ",
        decimalSeparator: ",",
        thousandsSeparator: " "
    }, n.i18n.ca = {
        setText: "Acceptar",
        cancelText: "Cancel·lar",
        clearText: "Esborrar",
        selectedText: "{count} seleccionat",
        selectedPluralText: "{count} seleccionats",
        dateFormat: "dd/mm/yy",
        dayNames: ["Diumenge", "Dilluns", "Dimarts", "Dimecres", "Dijous", "Divendres", "Dissabte"],
        dayNamesShort: ["Dg", "Dl", "Dt", "Dc", "Dj", "Dv", "Ds"],
        dayNamesMin: ["Dg", "Dl", "Dt", "Dc", "Dj", "Dv", "Ds"],
        dayText: "Dia",
        hourText: "Hores",
        minuteText: "Minuts",
        monthNames: ["Gener", "Febrer", "Març", "Abril", "Maig", "Juny", "Juliol", "Agost", "Setembre", "Octubre", "Novembre", "Desembre"],
        monthNamesShort: ["Gen", "Feb", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Oct", "Nov", "Des"],
        monthText: "Mes",
        secText: "Segons",
        timeFormat: "HH:ii",
        yearText: "Any",
        nowText: "Ara",
        pmText: "pm",
        amText: "am",
        todayText: "Avui",
        firstDay: 1,
        dateText: "Data",
        timeText: "Temps",
        closeText: "Tancar",
        allDayText: "Tot el dia",
        noEventsText: "Cap esdeveniment",
        eventText: "Esdeveniments",
        eventsText: "Esdeveniments",
        fromText: "Iniciar",
        toText: "Final",
        wholeText: "Sencer",
        fractionText: "Fracció",
        unitText: "Unitat",
        labels: ["Anys", "Mesos", "Dies", "Hores", "Minuts", "Segons", ""],
        labelsShort: ["Anys", "Mesos", "Dies", "Hrs", "Mins", "Secs", ""],
        startText: "Iniciar",
        stopText: "Aturar",
        resetText: "Reiniciar",
        lapText: "Volta",
        hideText: "Amagar",
        backText: "Enrere",
        undoText: "Desfés",
        offText: "No",
        onText: "Si"
    }, n.i18n.cs = {
        setText: "Zadej",
        cancelText: "Storno",
        clearText: "Vymazat",
        selectedText: "Označený: {count}",
        dateFormat: "dd.mm.yy",
        dayNames: ["Neděle", "Pondělí", "Úterý", "Středa", "Čtvrtek", "Pátek", "Sobota"],
        dayNamesShort: ["Ne", "Po", "Út", "St", "Čt", "Pá", "So"],
        dayNamesMin: ["N", "P", "Ú", "S", "Č", "P", "S"],
        dayText: "Den",
        hourText: "Hodiny",
        minuteText: "Minuty",
        monthNames: ["Leden", "Únor", "Březen", "Duben", "Květen", "Červen", "Červenec", "Srpen", "Září", "Říjen", "Listopad", "Prosinec"],
        monthNamesShort: ["Led", "Úno", "Bře", "Dub", "Kvě", "Čer", "Čvc", "Spr", "Zář", "Říj", "Lis", "Pro"],
        monthText: "Měsíc",
        secText: "Sekundy",
        timeFormat: "HH:ii",
        yearText: "Rok",
        nowText: "Teď",
        amText: "am",
        pmText: "pm",
        todayText: "Dnes",
        firstDay: 1,
        dateText: "Datum",
        timeText: "Čas",
        closeText: "Zavřít",
        allDayText: "Celý den",
        noEventsText: "Žádné události",
        eventText: "Událostí",
        eventsText: "Události",
        fromText: "Začátek",
        toText: "Konec",
        wholeText: "Celý",
        fractionText: "Část",
        unitText: "Jednotka",
        labels: ["Roky", "Měsíce", "Dny", "Hodiny", "Minuty", "Sekundy", ""],
        labelsShort: ["Rok", "Měs", "Dny", "Hod", "Min", "Sec", ""],
        startText: "Start",
        stopText: "Stop",
        resetText: "Resetovat",
        lapText: "Etapa",
        hideText: "Schovat",
        backText: "Zpět",
        undoText: "Zpět",
        offText: "O",
        onText: "I",
        decimalSeparator: ",",
        thousandsSeparator: " "
    }, n.i18n.da = {
        setText: "Sæt",
        cancelText: "Annuller",
        clearText: "Ryd",
        selectedText: "{count} valgt",
        selectedPluralText: "{count} valgt",
        dateFormat: "dd/mm/yy",
        dayNames: ["Søndag", "Mandag", "Tirsdag", "Onsdag", "Torsdag", "Fredag", "Lørdag"],
        dayNamesShort: ["Søn", "Man", "Tir", "Ons", "Tor", "Fre", "Lør"],
        dayNamesMin: ["S", "M", "T", "O", "T", "F", "L"],
        dayText: "Dag",
        hourText: "Timer",
        minuteText: "Minutter",
        monthNames: ["Januar", "Februar", "Marts", "April", "Maj", "Juni", "Juli", "August", "September", "Oktober", "November", "December"],
        monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "Maj", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dec"],
        monthText: "Måned",
        secText: "Sekunder",
        amText: "am",
        pmText: "pm",
        timeFormat: "HH.ii",
        yearText: "År",
        nowText: "Nu",
        todayText: "I dag",
        firstDay: 1,
        dateText: "Dato",
        timeText: "Tid",
        closeText: "Luk",
        allDayText: "Hele dagen",
        noEventsText: "Ingen begivenheder",
        eventText: "Begivenheder",
        eventsText: "Begivenheder",
        fromText: "Start",
        toText: "Slut",
        wholeText: "Hele",
        fractionText: "Dele",
        unitText: "Enhed",
        labels: ["År", "Måneder", "Dage", "Timer", "Minutter", "Sekunder", ""],
        labelsShort: ["År", "Mdr", "Dg", "Timer", "Min", "Sek", ""],
        startText: "Start",
        stopText: "Stop",
        resetText: "Nulstil",
        lapText: "Omgang",
        hideText: "Skjul",
        offText: "Fra",
        onText: "Til",
        backText: "Tilbage",
        undoText: "Fortryd"
    }, n.i18n.de = {
        setText: "OK",
        cancelText: "Abbrechen",
        clearText: "Löschen",
        selectedText: "{count} ausgewählt",
        dateFormat: "dd.mm.yy",
        dayNames: ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"],
        dayNamesShort: ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"],
        dayNamesMin: ["S", "M", "D", "M", "D", "F", "S"],
        dayText: "Tag",
        delimiter: ".",
        hourText: "Stunde",
        minuteText: "Minuten",
        monthNames: ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"],
        monthNamesShort: ["Jan", "Feb", "Mär", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dez"],
        monthText: "Monat",
        secText: "Sekunden",
        timeFormat: "HH:ii",
        yearText: "Jahr",
        nowText: "Jetzt",
        pmText: "pm",
        amText: "am",
        todayText: "Heute",
        firstDay: 1,
        dateText: "Datum",
        timeText: "Zeit",
        closeText: "Schließen",
        allDayText: "Ganztägig",
        noEventsText: "Keine Ereignisse",
        eventText: "Ereignis",
        eventsText: "Ereignisse",
        fromText: "Von",
        toText: "Bis",
        wholeText: "Ganze Zahl",
        fractionText: "Bruchzahl",
        unitText: "Maßeinheit",
        labels: ["Jahre", "Monate", "Tage", "Stunden", "Minuten", "Sekunden", ""],
        labelsShort: ["Jahr.", "Mon.", "Tag.", "Std.", "Min.", "Sek.", ""],
        startText: "Starten",
        stopText: "Stoppen",
        resetText: "Zurücksetzen",
        lapText: "Lap",
        hideText: "Ausblenden",
        backText: "Zurück",
        undoText: "Rückgängig machen",
        offText: "Aus",
        onText: "Ein",
        decimalSeparator: ",",
        thousandsSeparator: " "
    }, n.i18n.el = {
        setText: "Ορισμος",
        cancelText: "Ακυρωση",
        clearText: "Διαγραφη",
        selectedText: "{count} επιλεγμένα",
        dateFormat: "dd/mm/yy",
        dayNames: ["Κυριακή", "Δευτέρα", "Τρίτη", "Τετάρτη", "Πέμπτη", "Παρασκευή", "Σάββατο"],
        dayNamesShort: ["Κυρ", "Δευ", "Τρι", "Τετ", "Πεμ", "Παρ", "Σαβ"],
        dayNamesMin: ["Κυ", "Δε", "Τρ", "Τε", "Πε", "Πα", "Σα"],
        dayText: "ημέρα",
        delimiter: "/",
        hourText: "ώρα",
        minuteText: "λεπτό",
        monthNames: ["Ιανουάριος", "Φεβρουάριος", "Μάρτιος", "Απρίλιος", "Μάιος", "Ιούνιος", "Ιούλιος", "Αύγουστος", "Σεπτέμβριος", "Οκτώβριος", "Νοέμβριος", "Δεκέμβριος"],
        monthNamesShort: ["Ιαν", "Φεβ", "Μαρ", "Απρ", "Μαι", "Ιουν", "Ιουλ", "Αυγ", "Σεπ", "Οκτ", "Νοε", "Δεκ"],
        monthText: "Μήνας",
        secText: "δευτερόλεπτα",
        timeFormat: "H:ii",
        yearText: "έτος",
        nowText: "τώρα",
        pmText: "μμ",
        amText: "πμ",
        firstDay: 1,
        dateText: "Ημερομηνία",
        timeText: "φορά",
        todayText: "Σήμερα",
        prevMonthText: "Προηγούμενο μήνα",
        nextMonthText: "Επόμενο μήνα",
        prevYearText: "Προηγούμενο έτος",
        nextYearText: "Επόμενο έτος",
        closeText: "Κλείσιμο",
        eventText: "Γεγονότα",
        eventsText: "Γεγονότα",
        allDayText: "Ολοήμερο",
        noEventsText: "Δεν υπάρχουν γεγονότα",
        fromText: "Αρχή",
        toText: "Τέλος",
        wholeText: "Ολόκληρος",
        fractionText: "κλάσμα",
        unitText: "Μονάδα",
        labels: ["Χρόνια", "Μήνες", "Ημέρες", "Ωρες", "Λεπτά", "δευτερόλεπτα", ""],
        labelsShort: ["Χρόνια", "Μήνες", "Ημέρες", "Ωρες", "Λεπτά", "δευτ", ""],
        startText: "΄Εναρξη",
        stopText: "Διακοπή",
        resetText: "Επαναφορά",
        lapText: "Γύρος",
        hideText: "κρύβω",
        backText: "Πίσω",
        undoText: "Αναιρεση",
        offText: "Ανενεργό",
        onText: "Ενεργό",
        decimalSeparator: ",",
        thousandsSeparator: " "
    }, n.i18n["en-GB"] = n.i18n["en-UK"] = {
        dateFormat: "dd/mm/yy",
        timeFormat: "HH:ii"
    }, n.i18n.es = {
        setText: "Aceptar",
        cancelText: "Cancelar",
        clearText: "Borrar",
        selectedText: "{count} seleccionado",
        selectedPluralText: "{count} seleccionados",
        dateFormat: "dd/mm/yy",
        dayNames: ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"],
        dayNamesShort: ["Do", "Lu", "Ma", "Mi", "Ju", "Vi", "Sá"],
        dayNamesMin: ["D", "L", "M", "M", "J", "V", "S"],
        dayText: "Día",
        hourText: "Horas",
        minuteText: "Minutos",
        monthNames: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
        monthNamesShort: ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"],
        monthText: "Mes",
        secText: "Segundos",
        timeFormat: "HH:ii",
        yearText: "A&ntilde;o",
        nowText: "Ahora",
        pmText: "pm",
        amText: "am",
        todayText: "Hoy",
        firstDay: 1,
        dateText: "Fecha",
        timeText: "Tiempo",
        closeText: "Cerrar",
        allDayText: "Todo el día",
        noEventsText: "No hay eventos",
        eventText: "Evento",
        eventsText: "Eventos",
        fromText: "Iniciar",
        toText: "Final",
        wholeText: "Entero",
        fractionText: "Fracción",
        unitText: "Unidad",
        labels: ["Años", "Meses", "Días", "Horas", "Minutos", "Segundos", ""],
        labelsShort: ["Año", "Mes", "Día", "Hora", "Min", "Seg", ""],
        startText: "Iniciar",
        stopText: "Deténgase",
        resetText: "Reinicializar",
        lapText: "Lap",
        hideText: "Esconder",
        backText: "Atrás",
        undoText: "Deshacer",
        offText: "No",
        onText: "Sí",
        decimalSeparator: ",",
        thousandsSeparator: " "
    };
    var Bi = {
        gDaysInMonth: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
        jDaysInMonth: [31, 31, 31, 31, 31, 31, 30, 30, 30, 30, 30, 29],
        jalaliToGregorian: function(e, t, a) {
            var n, s = (e = parseInt(e)) - 979,
                r = (t = parseInt(t)) - 1,
                i = (a = parseInt(a)) - 1,
                o = 365 * s + 8 * parseInt(s / 33) + parseInt((s % 33 + 3) / 4);
            for (n = 0; n < r; ++n) o += Bi.jDaysInMonth[n];
            var l = (o += i) + 79,
                c = 1600 + 400 * parseInt(l / 146097),
                d = !0;
            for ((l %= 146097) >= 36525 && (l--, c += 100 * parseInt(l / 36524), (l %= 36524) >= 365 ? l++ : d = !1), c += 4 * parseInt(l / 1461), (l %= 1461) >= 366 && (d = !1, l--, c += parseInt(l / 365), l %= 365), n = 0; l >= Bi.gDaysInMonth[n] + (1 == n && d); n++) l -= Bi.gDaysInMonth[n] + (1 == n && d);
            return [c, n + 1, l + 1]
        },
        checkDate: function(e, t, a) {
            return !(e < 0 || e > 32767 || t < 1 || t > 12 || a < 1 || a > Bi.jDaysInMonth[t - 1] + (12 == t && (e - 979) % 33 % 4 == 0))
        },
        gregorianToJalali: function(e, t, a) {
            var n, s = (e = parseInt(e)) - 1600,
                r = (t = parseInt(t)) - 1,
                i = (a = parseInt(a)) - 1,
                o = 365 * s + parseInt((s + 3) / 4) - parseInt((s + 99) / 100) + parseInt((s + 399) / 400);
            for (n = 0; n < r; ++n) o += Bi.gDaysInMonth[n];
            r > 1 && (s % 4 == 0 && s % 100 != 0 || s % 400 == 0) && ++o;
            var l = (o += i) - 79,
                c = parseInt(l / 12053);
            l %= 12053;
            var d = 979 + 33 * c + 4 * parseInt(l / 1461);
            for ((l %= 1461) >= 366 && (d += parseInt((l - 1) / 365), l = (l - 1) % 365), n = 0; n < 11 && l >= Bi.jDaysInMonth[n]; ++n) l -= Bi.jDaysInMonth[n];
            return [d, n + 1, l + 1]
        }
    };
    n.i18n.fa = {
        setText: "تاييد",
        cancelText: "انصراف",
        clearText: "واضح ",
        selectedText: "{count} منتخب",
        dateFormat: "yy/mm/dd",
        dayNames: ["يکشنبه", "دوشنبه", "سه‌شنبه", "چهارشنبه", "پنج‌شنبه", "جمعه", "شنبه"],
        dayNamesShort: ["ی", "د", "س", "چ", "پ", "ج", "ش"],
        dayNamesMin: ["ی", "د", "س", "چ", "پ", "ج", "ش"],
        dayText: "روز",
        hourText: "ساعت",
        minuteText: "دقيقه",
        monthNames: ["فروردين", "ارديبهشت", "خرداد", "تير", "مرداد", "شهريور", "مهر", "آبان", "آذر", "دی", "بهمن", "اسفند"],
        monthNamesShort: ["فروردين", "ارديبهشت", "خرداد", "تير", "مرداد", "شهريور", "مهر", "آبان", "آذر", "دی", "بهمن", "اسفند"],
        monthText: "ماه",
        secText: "ثانيه",
        timeFormat: "HH:ii",
        timeWheels: "iiHH",
        yearText: "سال",
        nowText: "اکنون",
        amText: "ب",
        pmText: "ص",
        todayText: "امروز",
        getYear: function(e) {
            return Bi.gregorianToJalali(e.getFullYear(), e.getMonth() + 1, e.getDate())[0]
        },
        getMonth: function(e) {
            return --Bi.gregorianToJalali(e.getFullYear(), e.getMonth() + 1, e.getDate())[1]
        },
        getDay: function(e) {
            return Bi.gregorianToJalali(e.getFullYear(), e.getMonth() + 1, e.getDate())[2]
        },
        getDate: function(e, t, a, n, s, r, i) {
            t < 0 && (e += Math.floor(t / 12), t = 12 + t % 12), t > 11 && (e += Math.floor(t / 12), t %= 12);
            var o = Bi.jalaliToGregorian(e, +t + 1, a);
            return new Date(o[0], o[1] - 1, o[2], n || 0, s || 0, r || 0, i || 0)
        },
        getMaxDayOfMonth: function(e, t) {
            for (var a = 31; !1 === Bi.checkDate(e, t + 1, a);) a--;
            return a
        },
        firstDay: 6,
        rtl: !0,
        dateText: "تاریخ ",
        timeText: "زمان ",
        closeText: "نزدیک",
        allDayText: "تمام روز",
        noEventsText: "هیچ رویداد",
        eventText: "رویداد",
        eventsText: "رویدادها",
        fromText: "شروع ",
        toText: "پایان",
        wholeText: "تمام",
        fractionText: "کسر",
        unitText: "واحد",
        labels: ["سال", "ماه", "روز", "ساعت", "دقیقه", "ثانیه", ""],
        labelsShort: ["سال", "ماه", "روز", "ساعت", "دقیقه", "ثانیه", ""],
        startText: "شروع",
        stopText: "پايان",
        resetText: "تنظیم مجدد",
        lapText: "Lap",
        hideText: "پنهان کردن",
        backText: "پشت",
        undoText: "واچیدن"
    }, n.i18n.fi = {
        setText: "Aseta",
        cancelText: "Peruuta",
        clearText: "Tyhjennä",
        selectedText: "{count} valita",
        dateFormat: "d. MM yy",
        dayNames: ["Sunnuntai", "Maanantai", "Tiistai", "Keskiviiko", "Torstai", "Perjantai", "Lauantai"],
        dayNamesShort: ["Su", "Ma", "Ti", "Ke", "To", "Pe", "La"],
        dayNamesMin: ["S", "M", "T", "K", "T", "P", "L"],
        dayText: "Päivä",
        delimiter: ".",
        hourText: "Tuntia",
        minuteText: "Minuutti",
        monthNames: ["Tammikuu", "Helmikuu", "Maaliskuu", "Huhtikuu", "Toukokuu", "Kesäkuu", "Heinäkuu", "Elokuu", "Syyskuu", "Lokakuu", "Marraskuu", "Joulukuu"],
        monthNamesShort: ["Tam", "Hel", "Maa", "Huh", "Tou", "Kes", "Hei", "Elo", "Syy", "Lok", "Mar", "Jou"],
        monthText: "Kuukausi",
        secText: "Sekunda",
        timeFormat: "H:ii",
        yearText: "Vuosi",
        nowText: "Nyt",
        pmText: "pm",
        amText: "am",
        firstDay: 1,
        dateText: "Päiväys",
        timeText: "Aika",
        todayText: "Tänään",
        prevMonthText: "Edellinen kuukausi",
        nextMonthText: "Ensi kuussa",
        prevYearText: "Edellinen vuosi",
        nextYearText: "Ensi vuosi",
        closeText: "Sulje",
        eventText: "Tapahtumia",
        eventsText: "Tapahtumia",
        allDayText: "Koko päivä",
        noEventsText: "Ei tapahtumia",
        fromText: "Alkaa",
        toText: "Päättyy",
        wholeText: "Kokonainen",
        fractionText: "Murtoluku",
        unitText: "Yksikkö",
        labels: ["Vuosi", "Kuukausi", "Päivä", "Tunnin", "Minuutti", "sekuntia", ""],
        labelsShort: ["Vuo", "Kuu", "Päi", "Tun", "Min", "Sek", ""],
        startText: "Käynnistys",
        stopText: "Seis",
        resetText: "Aseta uudelleen",
        lapText: "Kierros",
        hideText: "Vuota",
        backText: "Edellinen",
        undoText: "Kumoa",
        offText: "Pois",
        onText: "Päällä",
        decimalSeparator: ",",
        thousandsSeparator: " "
    }, n.i18n.fr = {
        setText: "Terminer",
        cancelText: "Annuler",
        clearText: "Effacer",
        selectedText: "{count} sélectionné",
        selectedPluralText: "{count} sélectionnés",
        dateFormat: "dd/mm/yy",
        dayNames: ["&#68;imanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"],
        dayNamesShort: ["&#68;im.", "Lun.", "Mar.", "Mer.", "Jeu.", "Ven.", "Sam."],
        dayNamesMin: ["&#68;", "L", "M", "M", "J", "V", "S"],
        dayText: "Jour",
        monthText: "Mois",
        monthNames: ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"],
        monthNamesShort: ["Janv.", "Févr.", "Mars", "Avril", "Mai", "Juin", "Juil.", "Août", "Sept.", "Oct.", "Nov.", "Déc."],
        hourText: "Heures",
        minuteText: "Minutes",
        secText: "Secondes",
        timeFormat: "HH:ii",
        yearText: "Année",
        nowText: "Maintenant",
        pmText: "pm",
        amText: "am",
        todayText: "Aujourd'hui",
        firstDay: 1,
        dateText: "Date",
        timeText: "Heure",
        closeText: "Fermer",
        allDayText: "Toute la journée",
        noEventsText: "Aucun événement",
        eventText: "Événement",
        eventsText: "Événements",
        fromText: "Démarrer",
        toText: "Fin",
        wholeText: "Entier",
        fractionText: "Fraction",
        unitText: "Unité",
        labels: ["Ans", "Mois", "Jours", "Heures", "Minutes", "Secondes", ""],
        labelsShort: ["Ans", "Mois", "Jours", "Hrs", "Min", "Sec", ""],
        startText: "Démarrer",
        stopText: "Arrêter",
        resetText: "Réinitialiser",
        lapText: "Lap",
        hideText: "Cachez",
        backText: "Retour",
        undoText: "Annuler",
        offText: "Non",
        onText: "Oui",
        decimalSeparator: ",",
        thousandsSeparator: " "
    }, n.i18n.he = {
        rtl: !0,
        setText: "שמירה",
        cancelText: "ביטול",
        clearText: "נקה",
        selectedText: "{count} נבחר",
        selectedPluralText: "{count} נבחרו",
        dateFormat: "dd/mm/yy",
        dayNames: ["ראשון", "שני", "שלישי", "רביעי", "חמישי", "שישי", "שבת"],
        dayNamesShort: ["א'", "ב'", "ג'", "ד'", "ה'", "ו'", "ש'"],
        dayNamesMin: ["א", "ב", "ג", "ד", "ה", "ו", "ש"],
        dayText: "יום",
        hourText: "שעות",
        minuteText: "דקות",
        monthNames: ["ינואר", "פברואר", "מרץ", "אפריל", "מאי", "יוני", "יולי", "אוגוסט", "ספטמבר", "אוקטובר", "נובמבר", "דצמבר"],
        monthNamesShort: ["ינו", "פבר", "מרץ", "אפר", "מאי", "יונ", "יול", "אוג", "ספט", "אוק", "נוב", "דצמ"],
        monthText: "חודש",
        secText: "שניות",
        amText: "am",
        pmText: "pm",
        timeFormat: "HH:ii",
        timeWheels: "iiHH",
        yearText: "שנה",
        nowText: "עכשיו",
        firstDay: 0,
        dateText: "תאריך",
        timeText: "זמן",
        closeText: "סגירה",
        todayText: "היום",
        allDayText: "כל היום",
        noEventsText: "אין אירועים",
        eventText: "מִקרֶה",
        eventsText: "מִקרֶה",
        fromText: "התחלה",
        toText: "סיום",
        wholeText: "כֹּל",
        fractionText: "שבריר",
        unitText: "יחידה",
        labels: ["שנים", "חודשים", "ימים", "שעות", "דקות", "שניים", ""],
        labelsShort: ["שנים", "חודשים", "ימים", "שעות", "דקות", "שניים", ""],
        startText: "התחל",
        stopText: "עצור",
        resetText: "אתחול",
        lapText: "הקפה",
        hideText: "הסתר",
        offText: "כיבוי",
        onText: "הפעלה",
        backText: "חזור",
        undoText: "ביטול פעולה"
    }, n.i18n.hi = {
        setText: "सैट करें",
        cancelText: "रद्द करें",
        clearText: "साफ़ को",
        selectedText: "{count} चयनित",
        dateFormat: "dd/mm/yy",
        dayNames: ["रविवार", "सोमवार", "मंगलवार", "बुधवार", "गुरुवार", "शुक्रवार", "शनिवार"],
        dayNamesShort: ["रवि", "सोम", "मंगल", "बुध", "गुरु", "शुक्र", "शनि"],
        dayNamesMin: ["रवि", "सोम", "मंगल", "बुध", "गुरु", "शुक्र", "शनि"],
        dayText: "दिन",
        delimiter: ".",
        hourText: "घंटा",
        minuteText: "मिनट",
        monthNames: ["जनवरी ", "फरवरी", "मार्च", "अप्रेल", "मई", "जून", "जूलाई", "अगस्त ", "सितम्बर", "अक्टूबर", "नवम्बर", "दिसम्बर"],
        monthNamesShort: ["जन", "फर", "मार्च", "अप्रेल", "मई", "जून", "जूलाई", "अग", "सित", "अक्ट", "नव", "दि"],
        monthText: "महीना",
        secText: "सेकंड",
        timeFormat: "H:ii",
        yearText: "साल",
        nowText: "अब",
        pmText: "अपराह्न",
        amText: "पूर्वाह्न",
        firstDay: 1,
        dateText: "तिथि",
        timeText: "समय",
        todayText: "आज",
        prevMonthText: "पिछ्ला महिना",
        nextMonthText: "अगले महीने",
        prevYearText: "पिछला साल",
        nextYearText: "अगले वर्ष",
        closeText: "बंद",
        eventText: "इवेट३",
        eventsText: "इवेट३",
        allDayText: "पूरे दिन",
        noEventsText: "Ei tapahtumia",
        fromText: "से",
        toText: "तक",
        wholeText: "समूचा",
        fractionText: "अंश",
        unitText: "इकाई",
        labels: ["साल", "महीने", "दिन", "घंटे", "मिनट", "सेकंड", ""],
        labelsShort: ["साल", "महीने", "दिन", "घंटे", "मिनट", "सेकंड", ""],
        startText: "प्रा���ंभ",
        stopText: "रोकें",
        resetText: "रीसेट करें",
        lapText: "लैप",
        hideText: "छिपाना",
        backText: "वापस",
        undoText: "वापस लाएं",
        offText: "बंद",
        onText: "चालू",
        decimalSeparator: ",",
        thousandsSeparator: " "
    }, n.i18n.hr = {
        setText: "Postavi",
        cancelText: "Izlaz",
        clearText: "Izbriši",
        selectedText: "{count} odabran",
        dateFormat: "dd.mm.yy",
        dayNames: ["Nedjelja", "Ponedjeljak", "Utorak", "Srijeda", "Četvrtak", "Petak", "Subota"],
        dayNamesShort: ["Ned", "Pon", "Uto", "Sri", "Čet", "Pet", "Sub"],
        dayNamesMin: ["Ne", "Po", "Ut", "Sr", "Če", "Pe", "Su"],
        dayText: "Dan",
        delimiter: ".",
        hourText: "Sat",
        minuteText: "Minuta",
        monthNames: ["Siječanj", "Veljača", "Ožujak", "Travanj", "Svibanj", "Lipanj", "Srpanj", "Kolovoz", "Rujan", "Listopad", "Studeni", "Prosinac"],
        monthNamesShort: ["Sij", "Velj", "Ožu", "Tra", "Svi", "Lip", "Srp", "Kol", "Ruj", "Lis", "Stu", "Pro"],
        monthText: "Mjesec",
        secText: "Sekunda",
        timeFormat: "H:ii",
        yearText: "Godina",
        nowText: "Sada",
        pmText: "pm",
        amText: "am",
        firstDay: 1,
        dateText: "Datum",
        timeText: "Vrijeme",
        todayText: "Danas",
        prevMonthText: "Prethodni mjesec",
        nextMonthText: "Sljedeći mjesec",
        prevYearText: "Prethodni godina",
        nextYearText: "Slijedeće godine",
        closeText: "Zatvori",
        eventText: "Događaj",
        eventsText: "događaja",
        allDayText: "Cijeli dan",
        noEventsText: "Bez događaja",
        fromText: "Počinje",
        toText: "Završava",
        wholeText: "Cjelina",
        fractionText: "Frakcija",
        unitText: "Jedinica",
        labels: ["godina", "mjesec", "dan", "sat", "minuta", "sekunda", ""],
        labelsShort: ["god", "mje", "dan", "sat", "min", "sec", ""],
        startText: "Početak",
        stopText: "Prekid",
        resetText: "Resetiraj",
        lapText: "Ciklus",
        hideText: "Sakriti",
        backText: "Natrag",
        undoText: "Poništavanje",
        offText: "Uklj.",
        onText: "Isklj.",
        decimalSeparator: ",",
        thousandsSeparator: " "
    }, n.i18n.hu = {
        setText: "OK",
        cancelText: "Mégse",
        clearText: "Törlés",
        selectedText: "{count} kiválasztva",
        dateFormat: "yy.mm.dd.",
        dayNames: ["Vasárnap", "Hétfő", "Kedd", "Szerda", "Csütörtök", "Péntek", "Szombat"],
        dayNamesShort: ["Va", "Hé", "Ke", "Sze", "Csü", "Pé", "Szo"],
        dayNamesMin: ["V", "H", "K", "Sz", "Cs", "P", "Sz"],
        dayText: "Nap",
        delimiter: ".",
        hourText: "Óra",
        minuteText: "Perc",
        monthNames: ["Január", "Február", "Március", "Április", "Május", "Június", "Július", "Augusztus", "Szeptember", "Október", "November", "December"],
        monthNamesShort: ["Jan", "Feb", "Már", "Ápr", "Máj", "Jún", "Júl", "Aug", "Szep", "Okt", "Nov", "Dec"],
        monthText: "Hónap",
        secText: "Másodperc",
        timeFormat: "H:ii",
        yearText: "Év",
        nowText: "Most",
        pmText: "pm",
        amText: "am",
        firstDay: 1,
        dateText: "Dátum",
        timeText: "Idő",
        todayText: "Ma",
        prevMonthText: "Előző hónap",
        nextMonthText: "Következő hónap",
        prevYearText: "Előző év",
        nextYearText: "Következő év",
        closeText: "Bezár",
        eventText: "esemény",
        eventsText: "esemény",
        allDayText: "Egész napos",
        noEventsText: "Nincs esemény",
        fromText: "Eleje",
        toText: "Vége",
        wholeText: "Egész",
        fractionText: "Tört",
        unitText: "Egység",
        labels: ["Év", "Hónap", "Nap", "Óra", "Perc", "Másodperc", ""],
        labelsShort: ["Év", "Hó.", "Nap", "Óra", "Perc", "Mp.", ""],
        startText: "Indít",
        stopText: "Megállít",
        resetText: "Visszaállít",
        lapText: "Lap",
        hideText: "Elrejt",
        backText: "Vissza",
        undoText: "Visszavon",
        offText: "Ki",
        onText: "Be",
        decimalSeparator: ",",
        thousandsSeparator: " "
    }, n.i18n.it = {
        setText: "OK",
        cancelText: "Annulla",
        clearText: "Chiarire",
        selectedText: "{count} selezionato",
        selectedPluralText: "{count} selezionati",
        dateFormat: "dd/mm/yy",
        dayNames: ["Domenica", "Lunedì", "Mertedì", "Mercoledì", "Giovedì", "Venerdì", "Sabato"],
        dayNamesShort: ["Do", "Lu", "Ma", "Me", "Gi", "Ve", "Sa"],
        dayNamesMin: ["D", "L", "M", "M", "G", "V", "S"],
        dayText: "Giorno",
        hourText: "Ore",
        minuteText: "Minuti",
        monthNames: ["Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno", "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre"],
        monthNamesShort: ["Gen", "Feb", "Mar", "Apr", "Mag", "Giu", "Lug", "Ago", "Set", "Ott", "Nov", "Dic"],
        monthText: "Mese",
        secText: "Secondi",
        timeFormat: "HH:ii",
        yearText: "Anno",
        nowText: "Ora",
        pmText: "pm",
        amText: "am",
        todayText: "Oggi",
        firstDay: 1,
        dateText: "Data",
        timeText: "Volta",
        closeText: "Chiudere",
        allDayText: "Tutto il giorno",
        noEventsText: "Nessun evento",
        eventText: "Evento",
        eventsText: "Eventi",
        fromText: "Inizio",
        toText: "Fine",
        wholeText: "Intero",
        fractionText: "Frazione",
        unitText: "Unità",
        labels: ["Anni", "Mesi", "Giorni", "Ore", "Minuti", "Secondi", ""],
        labelsShort: ["Anni", "Mesi", "Gio", "Ore", "Min", "Sec", ""],
        startText: "Inizio",
        stopText: "Arresto",
        resetText: "Ripristina",
        lapText: "Lap",
        hideText: "Nascondi",
        backText: "Indietro",
        undoText: "Annulla",
        offText: "Via",
        onText: "Su",
        decimalSeparator: ",",
        thousandsSeparator: " "
    }, n.i18n.ja = {
        setText: "セット",
        cancelText: "キャンセル",
        clearText: "クリア",
        selectedText: "{count} 選択",
        dateFormat: "yy年mm月dd日",
        dayNames: ["日", "月", "火", "水", "木", "金", "土"],
        dayNamesShort: ["日", "月", "火", "水", "木", "金", "土"],
        dayNamesMin: ["日", "月", "火", "水", "木", "金", "土"],
        dayText: "日",
        hourText: "時",
        minuteText: "分",
        monthNames: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
        monthNamesShort: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
        monthText: "月",
        secText: "秒",
        timeFormat: "HH:ii",
        yearText: "年",
        nowText: "今",
        pmText: "午後",
        amText: "午前",
        yearSuffix: "年",
        monthSuffix: "月",
        daySuffix: "日",
        todayText: "今日",
        dateText: "日付",
        timeText: "時間",
        closeText: "クローズ",
        allDayText: "終日",
        noEventsText: "イベントはありません",
        eventText: "イベント",
        eventsText: "イベント",
        fromText: "開始",
        toText: "終わり",
        wholeText: "全数",
        fractionText: "分数",
        unitText: "単位",
        labels: ["年間", "月間", "日間", "時間", "分", "秒", ""],
        labelsShort: ["年間", "月間", "日間", "時間", "分", "秒", ""],
        startText: "開始",
        stopText: "停止",
        resetText: "リセット",
        lapText: "ラップ",
        hideText: "隠す",
        backText: "バック",
        undoText: "アンドゥ"
    }, n.i18n.ko = {
        setText: "설정",
        cancelText: "취소",
        clearText: "삭제",
        selectedText: "{count} 선택된",
        dateFormat: "yy-mm-dd",
        dayNames: ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"],
        dayNamesShort: ["일", "월", "화", "수", "목", "금", "토"],
        dayNamesMin: ["일", "월", "화", "수", "목", "금", "토"],
        dayText: "일",
        delimiter: "-",
        hourText: "시간",
        minuteText: "분",
        monthNames: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
        monthNamesShort: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
        monthText: "달",
        secText: "초",
        timeFormat: "H:ii",
        yearText: "년",
        nowText: "지금",
        pmText: "오후",
        amText: "오전",
        firstDay: 0,
        dateText: "날짜",
        timeText: "시간",
        todayText: "오늘",
        prevMonthText: "이전 달",
        nextMonthText: "다음 달",
        prevYearText: "이전 년",
        nextYearText: "다음 년",
        closeText: "닫기",
        eventText: "이벤트",
        eventsText: "이벤트",
        allDayText: "종일",
        noEventsText: "이벤트 없음",
        fromText: "시작",
        toText: "종료",
        wholeText: "정수",
        fractionText: "분수",
        unitText: "단위",
        labels: ["년", "달", "일", "시간", "분", "초", ""],
        labelsShort: ["년", "달", "일", "시간", "분", "초", ""],
        startText: "시작",
        stopText: "중지 ",
        resetText: "초기화",
        lapText: "기록",
        hideText: "숨는 장소",
        backText: "뒤로",
        undoText: "실행취소",
        offText: "끔",
        onText: "켬",
        decimalSeparator: ",",
        thousandsSeparator: " "
    }, n.i18n.lt = {
        setText: "OK",
        cancelText: "Atšaukti",
        clearText: "Išvalyti",
        selectedText: "Pasirinktas {count}",
        selectedPluralText: "Pasirinkti {count}",
        dateFormat: "yy-mm-dd",
        dayNames: ["Sekmadienis", "Pirmadienis", "Antradienis", "Trečiadienis", "Ketvirtadienis", "Penktadienis", "Šeštadienis"],
        dayNamesShort: ["S", "Pr", "A", "T", "K", "Pn", "Š"],
        dayNamesMin: ["S", "Pr", "A", "T", "K", "Pn", "Š"],
        dayText: "Diena",
        hourText: "Valanda",
        minuteText: "Minutes",
        monthNames: ["Sausis", "Vasaris", "Kovas", "Balandis", "Gegužė", "Birželis", "Liepa", "Rugpjūtis", "Rugsėjis", "Spalis", "Lapkritis", "Gruodis"],
        monthNamesShort: ["Sau", "Vas", "Kov", "Bal", "Geg", "Bir", "Lie", "Rugp", "Rugs", "Spa", "Lap", "Gruo"],
        monthText: "Mėnuo",
        secText: "Sekundes",
        amText: "am",
        pmText: "pm",
        timeFormat: "HH:ii",
        yearText: "Metai",
        nowText: "Dabar",
        todayText: "Šiandien",
        firstDay: 1,
        dateText: "Data",
        timeText: "Laikas",
        closeText: "Uždaryti",
        allDayText: "Visą dieną",
        noEventsText: "Nėra įvykių",
        eventText: "Įvykių",
        eventsText: "Įvykiai",
        fromText: "Nuo",
        toText: "Iki",
        wholeText: "Visas",
        fractionText: "Frakcija",
        unitText: "Vienetas",
        labels: ["Metai", "Mėnesiai", "Dienos", "Valandos", "Minutes", "Sekundes", ""],
        labelsShort: ["m", "mėn.", "d", "h", "min", "s", ""],
        startText: "Pradėti",
        stopText: "Sustabdyti",
        resetText: "Išnaujo",
        lapText: "Ratas",
        hideText: "Slėpti",
        backText: "Atgal",
        undoText: "Anuliuoti",
        offText: "Išj.",
        onText: "Įj.",
        decimalSeparator: ",",
        thousandsSeparator: " "
    }, n.i18n.nl = {
        setText: "Instellen",
        cancelText: "Annuleren",
        clearText: "Leegmaken",
        selectedText: "{count} gekozen",
        dateFormat: "dd-mm-yy",
        dayNames: ["zondag", "maandag", "Dinsdag", "Woensdag", "Donderdag", "Vrijdag", "Zaterdag"],
        dayNamesShort: ["zo", "ma", "di", "wo", "do", "vr", "za"],
        dayNamesMin: ["z", "m", "d", "w", "d", "v", "z"],
        dayText: "Dag",
        hourText: "Uur",
        minuteText: "Minuten",
        monthNames: ["januari", "februari", "maart", "april", "mei", "juni", "juli", "augustus", "september", "oktober", "november", "december"],
        monthNamesShort: ["jan", "feb", "mrt", "apr", "mei", "jun", "jul", "aug", "sep", "okt", "nov", "dec"],
        monthText: "Maand",
        secText: "Seconden",
        timeFormat: "HH:ii",
        yearText: "Jaar",
        nowText: "Nu",
        pmText: "pm",
        amText: "am",
        todayText: "Vandaag",
        firstDay: 1,
        dateText: "Datum",
        timeText: "Tijd",
        closeText: "Sluiten",
        allDayText: "Hele dag",
        noEventsText: "Geen activiteiten",
        eventText: "Activiteit",
        eventsText: "Activiteiten",
        fromText: "Start",
        toText: "Einde",
        wholeText: "geheel",
        fractionText: "fractie",
        unitText: "eenheid",
        labels: ["Jaren", "Maanden", "Dagen", "Uren", "Minuten", "Seconden", ""],
        labelsShort: ["j", "m", "d", "u", "min", "sec", ""],
        startText: "Start",
        stopText: "Stop",
        resetText: "Reset",
        lapText: "Ronde",
        hideText: "Verbergen",
        backText: "Terug",
        undoText: "Onged. maken",
        offText: "Uit",
        onText: "Aan",
        decimalSeparator: ",",
        thousandsSeparator: " "
    }, n.i18n.no = {
        setText: "OK",
        cancelText: "Avbryt",
        clearText: "Tømme",
        selectedText: "{count} valgt",
        dateFormat: "dd.mm.yy",
        dayNames: ["Søndag", "Mandag", "Tirsdag", "Onsdag", "Torsdag", "Fredag", "Lørdag"],
        dayNamesShort: ["Sø", "Ma", "Ti", "On", "To", "Fr", "Lø"],
        dayNamesMin: ["S", "M", "T", "O", "T", "F", "L"],
        dayText: "Dag",
        delimiter: ".",
        hourText: "Time",
        minuteText: "Minutt",
        monthNames: ["Januar", "Februar", "Mars", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Desember"],
        monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Des"],
        monthText: "Måned",
        secText: "Sekund",
        timeFormat: "HH:ii",
        yearText: "År",
        nowText: "Nå",
        pmText: "pm",
        amText: "am",
        todayText: "I dag",
        firstDay: 1,
        dateText: "Dato",
        timeText: "Tid",
        closeText: "Lukk",
        allDayText: "Hele dagen",
        noEventsText: "Ingen hendelser",
        eventText: "Hendelse",
        eventsText: "Hendelser",
        fromText: "Start",
        toText: "End",
        wholeText: "Hele",
        fractionText: "Fraksjon",
        unitText: "Enhet",
        labels: ["År", "Måneder", "Dager", "Timer", "Minutter", "Sekunder", ""],
        labelsShort: ["År", "Mån", "Dag", "Time", "Min", "Sek", ""],
        startText: "Start",
        stopText: "Stopp",
        resetText: "Tilbakestille",
        lapText: "Runde",
        hideText: "Skjul",
        backText: "Tilbake",
        undoText: "Angre",
        offText: "Av",
        onText: "På",
        decimalSeparator: ",",
        thousandsSeparator: " "
    }, n.i18n.pl = {
        setText: "Zestaw",
        cancelText: "Anuluj",
        clearText: "Oczyścić",
        selectedText: "Wybór: {count}",
        dateFormat: "yy-mm-dd",
        dayNames: ["Niedziela", "Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek", "Sobota"],
        dayNamesShort: ["Niedz.", "Pon.", "Wt.", "Śr.", "Czw.", "Pt.", "Sob."],
        dayNamesMin: ["N", "P", "W", "Ś", "C", "P", "S"],
        dayText: "Dzień",
        hourText: "Godziny",
        minuteText: "Minuty",
        monthNames: ["Styczeń", "Luty", "Marzec", "Kwiecień", "Maj", "Czerwiec", "Lipiec", "Sierpień", "Wrzesień", "Październik", "Listopad", "Grudzień"],
        monthNamesShort: ["Sty", "Lut", "Mar", "Kwi", "Maj", "Cze", "Lip", "Sie", "Wrz", "Paź", "Lis", "Gru"],
        monthText: "Miesiąc",
        secText: "Sekundy",
        timeFormat: "HH:ii",
        yearText: "Rok",
        nowText: "Teraz",
        amText: "am",
        pmText: "pm",
        todayText: "Dzisiaj",
        firstDay: 1,
        dateText: "Data",
        timeText: "Czas",
        closeText: "Zakończenie",
        allDayText: "Cały dzień",
        noEventsText: "Brak wydarzeń",
        eventText: "Wydarzeń",
        eventsText: "Wydarzenia",
        fromText: "Rozpoczęcie",
        toText: "Koniec",
        wholeText: "Cały",
        fractionText: "Ułamek",
        unitText: "Jednostka",
        labels: ["Lata", "Miesiąc", "Dni", "Godziny", "Minuty", "Sekundy", ""],
        labelsShort: ["R", "M", "Dz", "Godz", "Min", "Sek", ""],
        startText: "Rozpoczęcie",
        stopText: "Zatrzymać",
        resetText: "Zresetować",
        lapText: "Zakładka",
        hideText: "Ukryć",
        backText: "Wróć",
        undoText: "Cofnij",
        offText: "Wył",
        onText: "Wł",
        decimalSeparator: ",",
        thousandsSeparator: " "
    }, n.i18n["pt-BR"] = {
        setText: "Selecionar",
        cancelText: "Cancelar",
        clearText: "Claro",
        selectedText: "{count} selecionado",
        selectedPluralText: "{count} selecionados",
        dateFormat: "dd/mm/yy",
        dayNames: ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"],
        dayNamesShort: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"],
        dayNamesMin: ["D", "S", "T", "Q", "Q", "S", "S"],
        dayText: "Dia",
        hourText: "Hora",
        minuteText: "Minutos",
        monthNames: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"],
        monthNamesShort: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"],
        monthText: "Mês",
        secText: "Segundo",
        timeFormat: "HH:ii",
        yearText: "Ano",
        nowText: "Agora",
        pmText: "pm",
        amText: "am",
        todayText: "Hoje",
        dateText: "Data",
        timeText: "Tempo",
        closeText: "Fechar",
        allDayText: "Dia inteiro",
        noEventsText: "Nenhum evento",
        eventText: "Evento",
        eventsText: "Eventos",
        fromText: "In&iacute;cio",
        toText: "Fim",
        wholeText: "Inteiro",
        fractionText: "Fração",
        unitText: "Unidade",
        labels: ["Anos", "Meses", "Dias", "Horas", "Minutos", "Segundos", ""],
        labelsShort: ["Ano", "M&ecirc;s", "Dia", "Hora", "Min", "Seg", ""],
        startText: "Começar",
        stopText: "Pare",
        resetText: "Reinicializar",
        lapText: "Lap",
        hideText: "Esconder",
        backText: "Anterior",
        undoText: "Desfazer",
        offText: "Desl",
        onText: "Lig",
        decimalSeparator: ",",
        thousandsSeparator: " "
    }, n.i18n["pt-PT"] = {
        setText: "Seleccionar",
        cancelText: "Cancelar",
        clearText: "Claro",
        selectedText: "{count} selecionado",
        selectedPluralText: "{count} selecionados",
        dateFormat: "dd-mm-yy",
        dayNames: ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"],
        dayNamesShort: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"],
        dayNamesMin: ["D", "S", "T", "Q", "Q", "S", "S"],
        dayText: "Dia",
        hourText: "Horas",
        minuteText: "Minutos",
        monthNames: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"],
        monthNamesShort: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"],
        monthText: "Mês",
        secText: "Segundo",
        timeFormat: "HH:ii",
        yearText: "Ano",
        nowText: "Actualizar",
        pmText: "pm",
        amText: "am",
        todayText: "Hoy",
        firstDay: 1,
        dateText: "Data",
        timeText: "Tempo",
        closeText: "Fechar",
        allDayText: "Todo o dia",
        noEventsText: "Nenhum evento",
        eventText: "Evento",
        eventsText: "Eventos",
        fromText: "Início",
        toText: "Fim",
        wholeText: "Inteiro",
        fractionText: "Fracção",
        unitText: "Unidade",
        labels: ["Anos", "Meses", "Dias", "Horas", "Minutos", "Segundos", ""],
        labelsShort: ["Ano", "Mês", "Dia", "Hora", "Min", "Seg", ""],
        startText: "Começar",
        stopText: "Parar",
        resetText: "Reinicializar",
        lapText: "Lap",
        hideText: "Esconder",
        backText: "Anterior",
        undoText: "Anular",
        offText: "Desl",
        onText: "Lig",
        decimalSeparator: ",",
        thousandsSeparator: " "
    }, n.i18n.ro = {
        setText: "Setare",
        cancelText: "Anulare",
        clearText: "Ştergere",
        selectedText: "{count} selectat",
        selectedPluralText: "{count} selectate",
        dateFormat: "dd.mm.yy",
        dayNames: ["Duminică", "Luni", "Marți", "Miercuri", "Joi", "Vineri", "Sâmbătă"],
        dayNamesShort: ["Du", "Lu", "Ma", "Mi", "Jo", "Vi", "Sâ"],
        dayNamesMin: ["D", "L", "M", "M", "J", "V", "S"],
        dayText: " Ziua",
        delimiter: ".",
        hourText: " Ore ",
        minuteText: "Minute",
        monthNames: ["Ianuarie", "Februarie", "Martie", "Aprilie", "Mai", "Iunie", "Iulie", "August", "Septembrie", "Octombrie", "Noiembrie", "Decembrie"],
        monthNamesShort: ["Ian.", "Feb.", "Mar.", "Apr.", "Mai", "Iun.", "Iul.", "Aug.", "Sept.", "Oct.", "Nov.", "Dec."],
        monthText: "Luna",
        secText: "Secunde",
        timeFormat: "HH:ii",
        yearText: "Anul",
        nowText: "Acum",
        amText: "am",
        pmText: "pm",
        todayText: "Astăzi",
        prevMonthText: "Luna anterioară",
        nextMonthText: "Luna următoare",
        prevYearText: "Anul anterior",
        nextYearText: "Anul următor",
        eventText: "Eveniment",
        eventsText: "Evenimente",
        allDayText: "Toată ziua",
        noEventsText: "Niciun eveniment",
        firstDay: 1,
        dateText: "Data",
        timeText: "Ora",
        closeText: "Închidere",
        fromText: "Start",
        toText: "Final",
        wholeText: "Complet",
        fractionText: "Parţial",
        unitText: "Unitate",
        labels: ["Ani", "Luni", "Zile", "Ore", "Minute", "Secunde", ""],
        labelsShort: ["Ani", "Luni", "Zile", "Ore", "Min.", "Sec.", ""],
        startText: "Start",
        stopText: "Stop",
        resetText: "Resetare",
        lapText: "Tură",
        hideText: "Ascundere",
        backText: "Înapoi",
        undoText: "Anulează",
        offText: "Nu",
        onText: "Da",
        decimalSeparator: ",",
        thousandsSeparator: " "
    }, n.i18n["ru-UA"] = {
        setText: "Установить",
        cancelText: "Отменить",
        clearText: "Очиститьr",
        selectedText: "{count} Вібрать",
        dateFormat: "dd.mm.yy",
        dayNames: ["воскресенье", "понедельник", "вторник", "среда", "четверг", "пятница", "суббота"],
        dayNamesShort: ["вс", "пн", "вт", "ср", "чт", "пт", "сб"],
        dayNamesMin: ["в", "п", "в", "с", "ч", "п", "с"],
        dayText: "День",
        delimiter: ".",
        hourText: "Часы",
        minuteText: "Минуты",
        monthNames: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],
        monthNamesShort: ["Янв.", "Февр.", "Март", "Апр.", "Май", "Июнь", "Июль", "Авг.", "Сент.", "Окт.", "Нояб.", "Дек."],
        monthText: "Месяцы",
        secText: "Сикунды",
        timeFormat: "HH:ii",
        yearText: "Год",
        nowText: "Сейчас",
        amText: "am",
        pmText: "pm",
        todayText: "Cегодня",
        firstDay: 1,
        dateText: "Дата",
        timeText: "Время",
        closeText: "Закрыть",
        allDayText: "Весь день",
        noEventsText: "Нет событий",
        eventText: "Мероприятия",
        eventsText: "Мероприятия",
        fromText: "Начало",
        toText: "Конец",
        wholeText: "Весь",
        fractionText: "Часть",
        unitText: "Единица",
        labels: ["Годы", " Месяцы ", " Дни ", " Часы ", " Минуты ", " Секунды", ""],
        labelsShort: ["Год", "Мес.", "Дн.", "Ч.", "Мин.", "Сек.", ""],
        startText: "Старт",
        stopText: "Стоп",
        resetText: " Сброс ",
        lapText: " Этап ",
        hideText: " Скрыть ",
        backText: "назад",
        undoText: "ОтменитЬ",
        offText: "O",
        onText: "I",
        decimalSeparator: ",",
        thousandsSeparator: " "
    }, n.i18n["ru-RU"] = n.i18n.ru = {
        setText: "Установить",
        cancelText: "Отмена",
        clearText: "Очистить",
        selectedText: "{count} Выбрать",
        dateFormat: "dd.mm.yy",
        dayNames: ["воскресенье", "понедельник", "вторник", "среда", "четверг", "пятница", "суббота"],
        dayNamesShort: ["вс", "пн", "вт", "ср", "чт", "пт", "сб"],
        dayNamesMin: ["в", "п", "в", "с", "ч", "п", "с"],
        dayText: "День",
        delimiter: ".",
        hourText: "Час",
        minuteText: "Минут",
        monthNames: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],
        monthNamesShort: ["Янв", "Фев", "Мар", "Апр", "Май", "Июн", "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек"],
        monthText: "Месяц",
        secText: "Секунд",
        timeFormat: "HH:ii",
        yearText: "Год",
        nowText: "Сейчас",
        amText: "am",
        pmText: "pm",
        todayText: "Cегодня",
        firstDay: 1,
        dateText: "Дата",
        timeText: "Время",
        closeText: "Закрыть",
        allDayText: "Весь день",
        noEventsText: "Нет событий",
        eventText: "Мероприятия",
        eventsText: "Мероприятия",
        fromText: "Начало",
        toText: "Конец",
        wholeText: "Целое",
        fractionText: "Дробное",
        unitText: "Единица",
        labels: ["Лет", "Месяцев", "Дней", "Часов", "Минут", "Секунд", ""],
        labelsShort: ["Лет", "Мес", "Дн", "Час", "Мин", "Сек", ""],
        startText: "Старт",
        stopText: "Стоп",
        resetText: "Сбросить",
        lapText: "Круг",
        hideText: "Скрыть",
        backText: "назад",
        undoText: "ОтменитЬ",
        offText: "O",
        onText: "I",
        decimalSeparator: ",",
        thousandsSeparator: " "
    }, n.i18n.sk = {
        setText: "Zadaj",
        cancelText: "Zrušiť",
        clearText: "Vymazať",
        selectedText: "Označený: {count}",
        dateFormat: "d.m.yy",
        dayNames: ["Nedeľa", "Pondelok", "Utorok", "Streda", "Štvrtok", "Piatok", "Sobota"],
        dayNamesShort: ["Ne", "Po", "Ut", "St", "Št", "Pi", "So"],
        dayNamesMin: ["N", "P", "U", "S", "Š", "P", "S"],
        dayText: "Ďeň",
        hourText: "Hodiny",
        minuteText: "Minúty",
        monthNames: ["Január", "Február", "Marec", "Apríl", "Máj", "Jún", "Júl", "August", "September", "Október", "November", "December"],
        monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "Máj", "Jún", "Júl", "Aug", "Sep", "Okt", "Nov", "Dec"],
        monthText: "Mesiac",
        secText: "Sekundy",
        timeFormat: "H:ii",
        yearText: "Rok",
        nowText: "Teraz",
        amText: "am",
        pmText: "pm",
        todayText: "Dnes",
        firstDay: 1,
        dateText: "Datum",
        timeText: "Čas",
        closeText: "Zavrieť",
        allDayText: "Celý deň",
        noEventsText: "Žiadne udalosti",
        eventText: "Udalostí",
        eventsText: "Udalosti",
        fromText: "Začiatok",
        toText: "Koniec",
        wholeText: "Celý",
        fractionText: "Časť",
        unitText: "Jednotka",
        labels: ["Roky", "Mesiace", "Dni", "Hodiny", "Minúty", "Sekundy", ""],
        labelsShort: ["Rok", "Mes", "Dni", "Hod", "Min", "Sec", ""],
        startText: "Start",
        stopText: "Stop",
        resetText: "Resetovať",
        lapText: "Etapa",
        hideText: "Schovať",
        backText: "Späť",
        undoText: "Späť",
        offText: "O",
        onText: "I",
        decimalSeparator: ",",
        thousandsSeparator: " "
    }, n.i18n.sr = {
        setText: "Постави",
        cancelText: "Откажи",
        clearText: "Обриши",
        selectedText: "{count} изабрана",
        dateFormat: "dd.mm.yy",
        dayNames: ["Недеља", "Понедељак", "Уторак", "Среда", "Четвртак", "Петак", "Субота"],
        dayNamesShort: ["Нед", "Пон", "Уто", "Сре", "Чет", "Пет", "Суб"],
        dayNamesMin: ["Не", "По", "Ут", "Ср", "Че", "Пе", "Су"],
        dayText: "Дан",
        delimiter: ".",
        hourText: "Час",
        minuteText: "Минут",
        monthNames: ["Јануар", "Фебруар", "Март", "Април", "Мај", "Јун", "Јул", "Август", "Септембар", "Октобар", "Новембар", "Децембар"],
        monthNamesShort: ["Јан", "Феб", "Мар", "Апр", "Мај", "Јун", "Јул", "Авг", "Сеп", "Окт", "Нов", "Дец"],
        monthText: "месец",
        secText: "Секунд",
        timeFormat: "H:ii",
        yearText: "година",
        nowText: "сада",
        pmText: "pm",
        amText: "am",
        firstDay: 1,
        dateText: "Датум",
        timeText: "време",
        todayText: "Данас",
        prevMonthText: "Претходни мјесец",
        nextMonthText: "Следећег месеца",
        prevYearText: "Претходна године",
        nextYearText: "Следеће године",
        closeText: "Затвори",
        eventText: "Догађај",
        eventsText: "Догађаји",
        allDayText: "Цео дан",
        noEventsText: "Нема догађаја",
        fromText: "Од",
        toText: "До",
        wholeText: "цео",
        fractionText: "Фракција",
        unitText: "единица",
        labels: ["Године", "Месеци", "Дана", "Сати", "Минута", "Секунди", ""],
        labelsShort: ["Год", "Мес", "Дана", "Сати", "Мину", "Секу", ""],
        startText: "Започни",
        stopText: "Стоп",
        resetText: "Ресетуј",
        lapText: "Круг",
        hideText: "Сакрити",
        backText: "Повратак",
        undoText: "Опозови",
        offText: "нe",
        onText: "да",
        decimalSeparator: ",",
        thousandsSeparator: " "
    }, n.i18n.sv = {
        setText: "OK",
        cancelText: "Avbryt",
        clearText: "Klara",
        selectedText: "{count} vald",
        dateFormat: "yy-mm-dd",
        dayNames: ["Söndag", "Måndag", "Tisdag", "Onsdag", "Torsdag", "Fredag", "Lördag"],
        dayNamesShort: ["Sö", "Må", "Ti", "On", "To", "Fr", "Lö"],
        dayNamesMin: ["S", "M", "T", "O", "T", "F", "L"],
        dayText: "Dag",
        hourText: "Timme",
        minuteText: "Minut",
        monthNames: ["Januari", "Februari", "Mars", "April", "Maj", "Juni", "Juli", "Augusti", "September", "Oktober", "November", "December"],
        monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "Maj", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dec"],
        monthText: "Månad",
        secText: "Sekund",
        timeFormat: "HH:ii",
        yearText: "År",
        nowText: "Nu",
        pmText: "pm",
        amText: "am",
        todayText: "I dag",
        firstDay: 1,
        dateText: "Datum",
        timeText: "Tid",
        closeText: "Stäng",
        allDayText: "Heldag",
        noEventsText: "Inga aktiviteter",
        eventText: "Händelse",
        eventsText: "Händelser",
        fromText: "Start",
        toText: "Slut",
        wholeText: "Hela",
        fractionText: "Bråk",
        unitText: "Enhet",
        labels: ["År", "Månader", "Dagar", "Timmar", "Minuter", "Sekunder", ""],
        labelsShort: ["År", "Mån", "Dag", "Tim", "Min", "Sek", ""],
        startText: "Start",
        stopText: "Stopp",
        resetText: "Återställ",
        lapText: "Varv",
        hideText: "Dölj",
        backText: "Tillbaka",
        undoText: "Ångra",
        offText: "Av",
        onText: "På"
    }, n.i18n.th = {
        setText: "ตั้งค่า",
        cancelText: "ยกเลิก",
        clearText: "ล้าง",
        selectedText: "{count} เลือก",
        dateFormat: "dd/mm/yy",
        dayNames: ["อาทิตย์", "จันทร์", "อังคาร", "พุธ", "พฤหัสบดี", "ศุกร์", "เสาร์"],
        dayNamesShort: ["อา.", "จ.", "อ.", "พ.", "พฤ.", "ศ.", "ส."],
        dayNamesMin: ["อา.", "จ.", "อ.", "พ.", "พฤ.", "ศ.", "ส."],
        dayText: "วัน",
        delimiter: ".",
        hourText: "ชั่วโมง",
        minuteText: "นาที",
        monthNames: ["มกราคม", "กุมภาพันธ์", "มีนาคม", "เมษายน", "พฤษภาคม", "มิถุนายน", "กรกฎาคม", "สิงหาคม", "กันยายน", "ตุลาคม", "พฤศจิกายน", "ธันวาคม"],
        monthNamesShort: ["ม.ค.", "ก.พ.", "มี.ค.", "เม.ย.", "พ.ค.", "มิ.ย.", "ก.ค.", "ส.ค.", "ก.ย.", "ต.ค.", "พ.ย.", "ธ.ค."],
        monthText: "เดือน",
        secText: "วินาที",
        timeFormat: "HH:ii",
        yearText: "ปี",
        nowText: "ตอนนี้",
        pmText: "pm",
        amText: "am",
        firstDay: 0,
        dateText: "วัน",
        timeText: "เวลา",
        today: "วันนี้",
        prevMonthText: "เดือนก่อนหน้า",
        nextMonthText: "เดือนถัดไป",
        prevYearText: "ปีก่อนหน้า",
        nextYearText: "ปีถัดไป",
        closeText: "ปิด",
        eventText: "เหตุการณ์",
        eventsText: "เหตุการณ์",
        allDayText: "ตลอดวัน",
        noEventsText: "ไม่มีกิจกรรม",
        fromText: "จาก",
        toText: "ถึง",
        wholeText: "ทั้งหมด",
        fractionText: "เศษส่วน",
        unitText: "หน่วย",
        labels: ["ปี", "เดือน", "วัน", "ชั่วโมง", "นาที", "วินาที", ""],
        labelsShort: ["ปี", "เดือน", "วัน", "ชั่วโมง", "นาที", "วินาที", ""],
        startText: "เริ่ม",
        stopText: "หยุด",
        resetText: "รีเซ็ต",
        lapText: "รอบ",
        hideText: "ซ่อน",
        backText: "ย้อนกลับ",
        undoText: "เลิกทา",
        offText: "ปิด",
        onText: "เปิด",
        decimalSeparator: ",",
        thousandsSeparator: " "
    }, n.i18n.tr = {
        setText: "Seç",
        cancelText: "İptal",
        clearText: "Temizleyin",
        selectedText: "{count} seçilmiş",
        dateFormat: "dd.mm.yy",
        dayNames: ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"],
        dayNamesShort: ["Paz", "Pzt", "Sal", "Çar", "Per", "Cum", "Cmt"],
        dayNamesMin: ["P", "P", "S", "Ç", "P", "C", "C"],
        dayText: "Gün",
        delimiter: ".",
        hourText: "Saat",
        minuteText: "Dakika",
        monthNames: ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"],
        monthNamesShort: ["Oca", "Şub", "Mar", "Nis", "May", "Haz", "Tem", "Ağu", "Eyl", "Eki", "Kas", "Ara"],
        monthText: "Ay",
        secText: "Saniye",
        timeFormat: "HH:ii",
        yearText: "Yıl",
        nowText: "Şimdi",
        pmText: "pm",
        amText: "am",
        todayText: "Bugün",
        firstDay: 1,
        dateText: "Tarih",
        timeText: "Zaman",
        closeText: "Kapatmak",
        allDayText: "Tüm gün",
        noEventsText: "Etkinlik Yok",
        eventText: "Etkinlik",
        eventsText: "Etkinlikler",
        fromText: "Başla",
        toText: "Son",
        wholeText: "Tam",
        fractionText: "Kesir",
        unitText: "Birim",
        labels: ["Yıl", "Ay", "Gün", "Saat", "Dakika", "Saniye", ""],
        labelsShort: ["Yıl", "Ay", "Gün", "Sa", "Dak", "Sn", ""],
        startText: "Başla",
        stopText: "Durdur",
        resetText: "Sıfırla",
        lapText: "Tur",
        hideText: "Gizle",
        backText: "Geri",
        undoText: "Geri Al",
        offText: "O",
        onText: "I",
        decimalSeparator: ",",
        thousandsSeparator: "."
    }, n.i18n.ua = {
        setText: "встановити",
        cancelText: "відміна",
        clearText: "очистити",
        selectedText: "{count} вибрані",
        dateFormat: "dd.mm.yy",
        dayNames: ["неділя", "понеділок", "вівторок", "середа", "четвер", "п’ятниця", "субота"],
        dayNamesShort: ["нед", "пнд", "вів", "срд", "чтв", "птн", "сбт"],
        dayNamesMin: ["Нд", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
        dayText: "День",
        delimiter: ".",
        hourText: "година",
        minuteText: "хвилина",
        monthNames: ["Січень", "Лютий", "Березень", "Квітень", "Травень", "Червень", "Липень", "Серпень", "Вересень", "Жовтень", "Листопад", "Грудень"],
        monthNamesShort: ["Січ", "Лют", "Бер", "Кві", "Тра", "Чер", "Лип", "Сер", "Вер", "Жов", "Лис", "Гру"],
        monthText: "Місяць",
        secText: "Секунд",
        timeFormat: "H:ii",
        yearText: "Рік",
        nowText: "Зараз",
        pmText: "pm",
        amText: "am",
        firstDay: 1,
        dateText: "дата",
        timeText: "Час",
        todayText: "Сьогодні",
        prevMonthText: "Попередній місяць",
        nextMonthText: "Наступного місяця",
        prevYearText: "Попередній рік",
        nextYearText: "Наступного року",
        closeText: "Закрити",
        eventText: "подія",
        eventsText: "події",
        allDayText: "Увесь день",
        noEventsText: "Жодної події",
        fromText: "від",
        toText: "кінець",
        wholeText: "всі",
        fractionText: "фракція",
        unitText: "одиниця",
        labels: ["Рік", "Місяць", "День", "година", "хвилина", "Секунд", ""],
        labelsShort: ["Рік", "Місяць", "День", "година", "хвилина", "Секунд", ""],
        startText: "Початок",
        stopText: "СТОП",
        resetText: "скинути",
        lapText: "коло",
        hideText: "сховати",
        backText: "назад",
        undoText: "відмінити",
        offText: "Вимикати",
        onText: "Увімкнути",
        decimalSeparator: ",",
        thousandsSeparator: " "
    }, n.i18n.vi = {
        setText: "Đặt",
        cancelText: "Hủy bò",
        clearText: "Xóa",
        selectedText: "{count} chọn",
        dateFormat: "dd/mm/yy",
        dayNames: ["Chủ Nhật", "Thứ Hai", "Thứ Ba", "Thứ Tư", "Thứ Năm", "Thứ Sáu", "Thứ Bảy"],
        dayNamesShort: ["CN", "T2", "T3", "T4", "T5", "T6", "T7"],
        dayNamesMin: ["CN", "T2", "T3", "T4", "T5", "T6", "T7"],
        dayText: "",
        delimiter: "/",
        hourText: "Giờ",
        minuteText: "Phút",
        monthNames: ["Tháng Một", "Tháng Hai", "Tháng Ba", "Tháng Tư", "Tháng Năm", "Tháng Sáu", "Tháng Bảy", "Tháng Tám", "Tháng Chín", "Tháng Mười", "Tháng Mười Một", "Tháng Mười Hai"],
        monthNamesShort: ["Tháng 1", "Tháng 2", "Tháng 3", "Tháng 4", "Tháng 5", "Tháng 6", "Tháng 7", "Tháng 8", "Tháng 9", "Tháng 10", "Tháng 11", "Tháng 12"],
        monthText: "Tháng",
        secText: "Giây",
        timeFormat: "H:ii",
        yearText: "Năm",
        nowText: "Bây giờ",
        pmText: "pm",
        amText: "am",
        firstDay: 0,
        dateText: "Ngày",
        timeText: "Hồi",
        todayText: "Hôm nay",
        prevMonthText: "Tháng trước",
        nextMonthText: "Tháng tới",
        prevYearText: "Măm trước",
        nextYearText: "Năm tới",
        closeText: "Đóng",
        eventText: "Sự kiện",
        eventsText: "Sự kiện",
        allDayText: "Cả ngày",
        noEventsText: "Không có sự kiện",
        fromText: "Từ",
        toText: "Tới",
        wholeText: "Toàn thể",
        fractionText: "Phân số",
        unitText: "đơn vị",
        labels: ["Năm", "Tháng", "Ngày", "Giờ", "Phút", "Giây", ""],
        labelsShort: ["Năm", "Tháng", "Ngày", "Giờ", "Phút", "Giây", ""],
        startText: "Bắt đầu",
        stopText: "Dừng",
        resetText: "Đặt lại",
        lapText: "Vòng",
        hideText: "Giấu",
        backText: "Quay lại",
        undoText: "Hoàn tác",
        offText: "Tất",
        onText: "Bật",
        decimalSeparator: ",",
        thousandsSeparator: " "
    }, n.i18n.zh = {
        setText: "确定",
        cancelText: "取消",
        clearText: "明确",
        selectedText: "{count} 选",
        dateFormat: "yy/mm/dd",
        dayNames: ["周日", "周一", "周二", "周三", "周四", "周五", "周六"],
        dayNamesShort: ["日", "一", "二", "三", "四", "五", "六"],
        dayNamesMin: ["日", "一", "二", "三", "四", "五", "六"],
        dayText: "日",
        hourText: "时",
        minuteText: "分",
        monthNames: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
        monthNamesShort: ["一", "二", "三", "四", "五", "六", "七", "八", "九", "十", "十一", "十二"],
        monthText: "月",
        secText: "秒",
        timeFormat: "HH:ii",
        yearText: "年",
        nowText: "当前",
        pmText: "下午",
        amText: "上午",
        todayText: "今天",
        dateText: "日",
        timeText: "时间",
        closeText: "关闭",
        allDayText: "全天",
        noEventsText: "无事件",
        eventText: "活动",
        eventsText: "活动",
        fromText: "开始时间",
        toText: "结束时间",
        wholeText: "合计",
        fractionText: "分数",
        unitText: "单位",
        labels: ["年", "月", "日", "小时", "分钟", "秒", ""],
        labelsShort: ["年", "月", "日", "点", "分", "秒", ""],
        startText: "开始",
        stopText: "停止",
        resetText: "重置",
        lapText: "圈",
        hideText: "隐藏",
        backText: "返回",
        undoText: "复原",
        offText: "关闭",
        onText: "开启",
        decimalSeparator: ",",
        thousandsSeparator: " "
    };
    var Ki = n.themes;
    Ki.frame.bootstrap = {
        disabledClass: "disabled",
        selectedClass: "btn-primary",
        selectedTabClass: "active",
        tabLink: !0,
        todayClass: "text-primary mbsc-cal-today",
        onMarkupInserted: function(e) {
            var t = pe(e.target),
                a = pe(".mbsc-cal-tabs", t);
            pe(".mbsc-fr-popup", t).addClass("popover"), pe(".mbsc-fr-w", t).addClass("popover-content"), pe(".mbsc-fr-hdr", t).addClass("popover-title popover-header"), pe(".mbsc-fr-arr-i", t).addClass("popover"), pe(".mbsc-fr-arr", t).addClass("arrow"), pe(".mbsc-fr-btn", t).addClass("btn btn-default btn-secondary"), pe(".mbsc-fr-btn-s .mbsc-fr-btn", t).removeClass("btn-default btn-secondary").addClass("btn btn-primary"), a.addClass("nav nav-tabs"), a.find(".mbsc-cal-tab").addClass("nav-item"), a.find("a").addClass("nav-link"), a.find(".mbsc-cal-tab.active .nav-link").addClass("active"), pe(".mbsc-cal-picker", t).addClass("popover"), pe(".mbsc-cal-events", t).addClass("popover"), pe(".mbsc-cal-events-arr", t).addClass("arrow"), pe(".mbsc-range-btn", t).addClass("btn btn-sm btn-small btn-default"), pe(".mbsc-np-btn", t).addClass("btn btn-default"), pe(".mbsc-sel-filter-cont", t).removeClass("mbsc-input"), pe(".mbsc-sel-filter-input", t).addClass("form-control")
        },
        onTabChange: function(e, t) {
            pe(".mbsc-cal-tabs .nav-link", t._markup).removeClass("active"), pe(".mbsc-cal-tab.active .nav-link", t._markup).addClass("active")
        },
        onPosition: function(e) {
            setTimeout(function() {
                pe(".mbsc-fr-bubble-top, .mbsc-fr-bubble-top .mbsc-fr-arr-i", e.target).removeClass("bottom bs-popover-bottom").addClass("top bs-popover-top"), pe(".mbsc-fr-bubble-bottom, .mbsc-fr-bubble-bottom .mbsc-fr-arr-i", e.target).removeClass("top bs-popover-top").addClass("bottom  bs-popover-bottom")
            }, 10)
        }
    }, Ki.scroller.bootstrap = ge({}, Ki.frame.bootstrap, {
        dateDisplay: "Mddyy",
        btnCalPrevClass: "mbsc-ic mbsc-ic-arrow-left5",
        btnCalNextClass: "mbsc-ic mbsc-ic-arrow-right5",
        btnPlusClass: "mbsc-ic mbsc-ic-arrow-down5 btn-light",
        btnMinusClass: "mbsc-ic mbsc-ic-arrow-up5 btn-light",
        selectedLineHeight: !0,
        onEventBubbleShow: function(e) {
            var t = pe(e.eventList);
            pe(".mbsc-cal-event-list", t).addClass("list-group"), pe(".mbsc-cal-event", t).addClass("list-group-item"), setTimeout(function() {
                t.hasClass("mbsc-cal-events-b") ? t.removeClass("top").addClass("bottom") : t.removeClass("bottom").addClass("top")
            }, 10)
        }
    }), Ki.navigation.bootstrap = {
        wrapperClass: "popover panel panel-default",
        groupClass: "btn-group",
        activeClass: "btn-primary",
        disabledClass: "disabled",
        itemClass: "btn btn-default"
    };
    var qi, Gi, Xi = n.themes;

    function Zi(e, t) {
        var a = q(t, "X", !0),
            n = q(t, "Y", !0),
            s = e.offset(),
            r = a - s.left,
            i = n - s.top,
            o = Math.max(r, e[0].offsetWidth - r),
            l = Math.max(i, e[0].offsetHeight - i),
            c = 2 * Math.sqrt(Math.pow(o, 2) + Math.pow(l, 2));
        Qi(Gi), Gi = pe('<span class="mbsc-ripple"></span>').css({
            width: c,
            height: c,
            top: n - s.top - c / 2,
            left: a - s.left - c / 2
        }).appendTo(e), setTimeout(function() {
            Gi.addClass("mbsc-ripple-scaled mbsc-ripple-visible")
        }, 10)
    }

    function Qi(e) {
        setTimeout(function() {
            e && (e.removeClass("mbsc-ripple-visible"), setTimeout(function() {
                e.remove()
            }, 2e3))
        }, 100)
    }

    function eo(e, t, a, n) {
        var s, r;
        e.off(".mbsc-ripple").on("touchstart.mbsc-ripple mousedown.mbsc-ripple", t, function(e) {
            tt(e, this) && (s = q(e, "X"), r = q(e, "Y"), (qi = pe(this)).hasClass(a) || qi.hasClass(n) ? qi = null : Zi(qi, e))
        }).on("touchmove.mbsc-ripple mousemove.mbsc-ripple", t, function(e) {
            (qi && Math.abs(q(e, "X") - s) > 9 || Math.abs(q(e, "Y") - r) > 9) && (Qi(Gi), qi = null)
        }).on("touchend.mbsc-ripple touchcancel.mbsc-ripple mouseleave.mbsc-ripple mouseup.mbsc-ripple", t, function() {
            qi && (setTimeout(function() {
                Qi(Gi)
            }, 100), qi = null)
        })
    }
    Xi.frame.ios = {
        display: "bottom",
        headerText: !1,
        btnWidth: !1,
        deleteIcon: "ios-backspace",
        scroll3d: !0
    }, Xi.scroller.ios = ge({}, Xi.frame.ios, {
        rows: 5,
        height: 34,
        minWidth: 55,
        selectedLineHeight: !0,
        selectedLineBorder: 1,
        showLabel: !1,
        useShortLabels: !0,
        btnPlusClass: "mbsc-ic mbsc-ic-arrow-down5",
        btnMinusClass: "mbsc-ic mbsc-ic-arrow-up5",
        checkIcon: "ion-ios7-checkmark-empty",
        filterClearIcon: "ion-close-circled",
        dateDisplay: "MMdyy",
        btnCalPrevClass: "mbsc-ic mbsc-ic-arrow-left5",
        btnCalNextClass: "mbsc-ic mbsc-ic-arrow-right5"
    }), Xi.listview.ios = {
        leftArrowClass: "mbsc-ic-ion-ios7-arrow-back",
        rightArrowClass: "mbsc-ic-ion-ios7-arrow-forward"
    }, Xi.form.ios = {};
    var to = n.themes;
    to.frame.material = {
        headerText: !1,
        btnWidth: !1,
        deleteIcon: "material-backspace",
        onMarkupReady: function(e) {
            eo(pe(e.target), ".mbsc-fr-btn-e", "mbsc-disabled", "mbsc-fr-btn-nhl")
        }
    }, to.scroller.material = ge({}, to.frame.material, {
        showLabel: !1,
        selectedLineBorder: 2,
        weekDays: "min",
        icon: {
            filled: "material-star",
            empty: "material-star-outline"
        },
        checkIcon: "material-check",
        btnPlusClass: "mbsc-ic mbsc-ic-material-keyboard-arrow-down",
        btnMinusClass: "mbsc-ic mbsc-ic-material-keyboard-arrow-up",
        btnCalPrevClass: "mbsc-ic mbsc-ic-material-keyboard-arrow-left",
        btnCalNextClass: "mbsc-ic mbsc-ic-material-keyboard-arrow-right",
        onEventBubbleShow: function(e) {
            var t = pe(e.eventList),
                a = pe(e.target).closest(".mbsc-cal-row").index() < 2,
                n = pe(".mbsc-cal-event-color", t).eq(a ? 0 : -1).css("background-color");
            pe(".mbsc-cal-events-arr", t).css("border-color", a ? "transparent transparent " + n + " transparent" : n + "transparent transparent transparent")
        }
    }), to.listview.material = {
        leftArrowClass: "mbsc-ic-material-keyboard-arrow-left",
        rightArrowClass: "mbsc-ic-material-keyboard-arrow-right",
        onItemActivate: function(e) {
            Zi(pe(e.target), e.domEvent)
        },
        onItemDeactivate: function() {
            Qi(Gi)
        },
        onSlideStart: function(e) {
            pe(".mbsc-ripple", e.target).remove()
        },
        onSortStart: function(e) {
            pe(".mbsc-ripple", e.target).remove()
        }
    }, to.navigation.material = {
        onInit: function() {
            eo(pe(this), ".mbsc-ms-item.mbsc-btn-e", "mbsc-disabled", "mbsc-btn-nhl")
        },
        onMarkupInit: function() {
            pe(".mbsc-ripple", this).remove()
        },
        onDestroy: function() {
            pe(this).off(".mbsc-ripple")
        }
    }, to.form.material = {
        addRipple: function(e, t) {
            Zi(e, t)
        },
        removeRipple: function() {
            Qi(Gi)
        }
    };
    var ao = n.themes;
    ao.frame.windows = {
        headerText: !1,
        deleteIcon: "backspace4",
        btnReverse: !0
    }, ao.scroller.windows = ge({}, ao.frame.windows, {
        rows: 6,
        minWidth: 88,
        height: 44,
        btnPlusClass: "mbsc-ic mbsc-ic-arrow-down5",
        btnMinusClass: "mbsc-ic mbsc-ic-arrow-up5",
        checkIcon: "material-check",
        dateDisplay: "MMdyy",
        showLabel: !1,
        showScrollArrows: !0,
        btnCalPrevClass: "mbsc-ic mbsc-ic-arrow-left5",
        btnCalNextClass: "mbsc-ic mbsc-ic-arrow-right5",
        dayNamesShort: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
        useShortLabels: !0
    }), ao.form.windows = {}, n.customTheme("ios-dark", "ios"), n.customTheme("material-dark", "material"), n.customTheme("mobiscroll-dark", "mobiscroll"), n.customTheme("windows-dark", "windows");
    var no = n.themes,
        so = void 0;
    return "android" == _ ? so = "material" : "ios" == _ ? so = "ios" : "wp" == _ && (so = "windows"), pe.each(no.frame, function(e, t) {
        if (so && t.baseTheme == so && "material-dark" != e && "windows-dark" != e && "ios-dark" != e) return n.autoTheme = e, !1;
        e == so && (n.autoTheme = e)
    }),  n
});