/*! classie & cbpAnimatedHeader */

// !(function (e) {
//   "use strict";
//   function n(e) {
//     return new RegExp("(^|\\s+)" + e + "(\\s+|$)");
//   }
//   function s(e, n) {
//     var s = a(e, n) ? c : t;
//     s(e, n);
//   }
//   var a, t, c;
//   "classList" in document.documentElement
//     ? ((a = function (e, n) {
//         return e.classList.contains(n);
//       }),
//       (t = function (e, n) {
//         e.classList.add(n);
//       }),
//       (c = function (e, n) {
//         e.classList.remove(n);
//       }))
//     : ((a = function (e, s) {
//         return n(s).test(e.className);
//       }),
//       (t = function (e, n) {
//         a(e, n) || (e.className = e.className + " " + n);
//       }),
//       (c = function (e, s) {
//         e.className = e.className.replace(n(s), " ");
//       }));
//   var i = {
//     hasClass: a,
//     addClass: t,
//     removeClass: c,
//     toggleClass: s,
//     has: a,
//     add: t,
//     remove: c,
//     toggle: s,
//   };
//   "function" == typeof define && define.amd ? define(i) : (e.classie = i);
// })(window);
// var cbpAnimatedHeader = (function () {
//   function e() {
//     window.addEventListener(
//       "scroll",
//       function (e) {
//         c || ((c = !0), setTimeout(n, 250));
//       },
//       !1
//     );
//   }
//   function n() {
//     var e = s();
//     e >= i
//       ? classie.add(t, "cbp-af-header-shrink")
//       : classie.remove(t, "cbp-af-header-shrink"),
//       (c = !1);
//   }
//   function s() {
//     return window.pageYOffset || a.scrollTop;
//   }
//   var a = document.documentElement,
//     t = document.querySelector(".cbp-af-header"),
//     c = !1,
//     i = 100;
//   e();
// })();

/*! bootstrap-switch */

(function (a, b) {
  if ("function" == typeof define && define.amd) define(["jquery"], b);
  else if ("undefined" != typeof exports) b(require("jquery"));
  else {
    b(a.jquery), (a.bootstrapSwitch = { exports: {} }.exports);
  }
})(this, function (a) {
  "use strict";
  function c(j, k) {
    if (!(j instanceof k))
      throw new TypeError("Cannot call a class as a function");
  }
  var d = (function (j) {
      return j && j.__esModule ? j : { default: j };
    })(a),
    e =
      Object.assign ||
      function (j) {
        for (var l, k = 1; k < arguments.length; k++)
          for (var m in ((l = arguments[k]), l))
            Object.prototype.hasOwnProperty.call(l, m) && (j[m] = l[m]);
        return j;
      },
    f = (function () {
      function j(k, l) {
        for (var n, m = 0; m < l.length; m++)
          (n = l[m]),
            (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(k, n.key, n);
      }
      return function (k, l, m) {
        return l && j(k.prototype, l), m && j(k, m), k;
      };
    })(),
    g = d.default || window.jQuery || window.$,
    h = (function () {
      function j(k) {
        var l = this,
          m =
            1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
        c(this, j),
          (this.$element = g(k)),
          (this.options = g.extend(
            {},
            g.fn.bootstrapSwitch.defaults,
            this._getElementOptions(),
            m
          )),
          (this.prevOptions = {}),
          (this.$wrapper = g("<div>", {
            class: function () {
              var o = [];
              return (
                o.push(l.options.state ? "on" : "off"),
                l.options.size && o.push(l.options.size),
                l.options.disabled && o.push("disabled"),
                l.options.readonly && o.push("readonly"),
                l.options.indeterminate && o.push("indeterminate"),
                l.options.inverse && o.push("inverse"),
                l.$element.attr("id") && o.push("id-" + l.$element.attr("id")),
                o
                  .map(l._getClass.bind(l))
                  .concat(
                    [l.options.baseClass],
                    l._getClasses(l.options.wrapperClass)
                  )
                  .join(" ")
              );
            },
          })),
          (this.$container = g("<div>", {
            class: this._getClass("container"),
          })),
          (this.$on = g("<span>", {
            html: this.options.onText,
            class:
              this._getClass("handle-on") +
              " " +
              this._getClass(this.options.onColor),
          })),
          (this.$off = g("<span>", {
            html: this.options.offText,
            class:
              this._getClass("handle-off") +
              " " +
              this._getClass(this.options.offColor),
          })),
          (this.$label = g("<span>", {
            html: this.options.labelText,
            class: this._getClass("label"),
          })),
          this.$element.on(
            "init.bootstrapSwitch",
            this.options.onInit.bind(this, k)
          ),
          this.$element.on("switchChange.bootstrapSwitch", function () {
            for (var n = arguments.length, o = Array(n), p = 0; p < n; p++)
              o[p] = arguments[p];
            !1 === l.options.onSwitchChange.apply(k, o) &&
              (l.$element.is(":radio")
                ? g('[name="' + l.$element.attr("name") + '"]').trigger(
                    "previousState.bootstrapSwitch",
                    !0
                  )
                : l.$element.trigger("previousState.bootstrapSwitch", !0));
          }),
          (this.$container = this.$element.wrap(this.$container).parent()),
          (this.$wrapper = this.$container.wrap(this.$wrapper).parent()),
          this.$element
            .before(this.options.inverse ? this.$off : this.$on)
            .before(this.$label)
            .before(this.options.inverse ? this.$on : this.$off),
          this.options.indeterminate && this.$element.prop("indeterminate", !0),
          this._init(),
          this._elementHandlers(),
          this._handleHandlers(),
          this._labelHandlers(),
          this._formHandler(),
          this._externalLabelHandler(),
          this.$element.trigger("init.bootstrapSwitch", this.options.state);
      }
      return (
        f(j, [
          {
            key: "setPrevOptions",
            value: function () {
              this.prevOptions = e({}, this.options);
            },
          },
          {
            key: "state",
            value: function (l, m) {
              return "undefined" == typeof l
                ? this.options.state
                : this.options.disabled ||
                  this.options.readonly ||
                  (this.options.state &&
                    !this.options.radioAllOff &&
                    this.$element.is(":radio"))
                ? this.$element
                : (this.$element.is(":radio")
                    ? g('[name="' + this.$element.attr("name") + '"]').trigger(
                        "setPreviousOptions.bootstrapSwitch"
                      )
                    : this.$element.trigger(
                        "setPreviousOptions.bootstrapSwitch"
                      ),
                  this.options.indeterminate && this.indeterminate(!1),
                  this.$element
                    .prop("checked", !!l)
                    .trigger("change.bootstrapSwitch", m),
                  this.$element);
            },
          },
          {
            key: "toggleState",
            value: function (l) {
              return this.options.disabled || this.options.readonly
                ? this.$element
                : this.options.indeterminate
                ? (this.indeterminate(!1), this.state(!0))
                : this.$element
                    .prop("checked", !this.options.state)
                    .trigger("change.bootstrapSwitch", l);
            },
          },
          {
            key: "size",
            value: function (l) {
              return "undefined" == typeof l
                ? this.options.size
                : (null != this.options.size &&
                    this.$wrapper.removeClass(
                      this._getClass(this.options.size)
                    ),
                  l && this.$wrapper.addClass(this._getClass(l)),
                  this._width(),
                  this._containerPosition(),
                  (this.options.size = l),
                  this.$element);
            },
          },
          {
            key: "animate",
            value: function (l) {
              return "undefined" == typeof l
                ? this.options.animate
                : this.options.animate === !!l
                ? this.$element
                : this.toggleAnimate();
            },
          },
          {
            key: "toggleAnimate",
            value: function () {
              return (
                (this.options.animate = !this.options.animate),
                this.$wrapper.toggleClass(this._getClass("animate")),
                this.$element
              );
            },
          },
          {
            key: "disabled",
            value: function (l) {
              return "undefined" == typeof l
                ? this.options.disabled
                : this.options.disabled === !!l
                ? this.$element
                : this.toggleDisabled();
            },
          },
          {
            key: "toggleDisabled",
            value: function () {
              return (
                (this.options.disabled = !this.options.disabled),
                this.$element.prop("disabled", this.options.disabled),
                this.$wrapper.toggleClass(this._getClass("disabled")),
                this.$element
              );
            },
          },
          {
            key: "readonly",
            value: function (l) {
              return "undefined" == typeof l
                ? this.options.readonly
                : this.options.readonly === !!l
                ? this.$element
                : this.toggleReadonly();
            },
          },
          {
            key: "toggleReadonly",
            value: function () {
              return (
                (this.options.readonly = !this.options.readonly),
                this.$element.prop("readonly", this.options.readonly),
                this.$wrapper.toggleClass(this._getClass("readonly")),
                this.$element
              );
            },
          },
          {
            key: "indeterminate",
            value: function (l) {
              return "undefined" == typeof l
                ? this.options.indeterminate
                : this.options.indeterminate === !!l
                ? this.$element
                : this.toggleIndeterminate();
            },
          },
          {
            key: "toggleIndeterminate",
            value: function () {
              return (
                (this.options.indeterminate = !this.options.indeterminate),
                this.$element.prop("indeterminate", this.options.indeterminate),
                this.$wrapper.toggleClass(this._getClass("indeterminate")),
                this._containerPosition(),
                this.$element
              );
            },
          },
          {
            key: "inverse",
            value: function (l) {
              return "undefined" == typeof l
                ? this.options.inverse
                : this.options.inverse === !!l
                ? this.$element
                : this.toggleInverse();
            },
          },
          {
            key: "toggleInverse",
            value: function () {
              this.$wrapper.toggleClass(this._getClass("inverse"));
              var l = this.$on.clone(!0),
                m = this.$off.clone(!0);
              return (
                this.$on.replaceWith(m),
                this.$off.replaceWith(l),
                (this.$on = m),
                (this.$off = l),
                (this.options.inverse = !this.options.inverse),
                this.$element
              );
            },
          },
          {
            key: "onColor",
            value: function (l) {
              return "undefined" == typeof l
                ? this.options.onColor
                : (this.options.onColor &&
                    this.$on.removeClass(this._getClass(this.options.onColor)),
                  this.$on.addClass(this._getClass(l)),
                  (this.options.onColor = l),
                  this.$element);
            },
          },
          {
            key: "offColor",
            value: function (l) {
              return "undefined" == typeof l
                ? this.options.offColor
                : (this.options.offColor &&
                    this.$off.removeClass(
                      this._getClass(this.options.offColor)
                    ),
                  this.$off.addClass(this._getClass(l)),
                  (this.options.offColor = l),
                  this.$element);
            },
          },
          {
            key: "onText",
            value: function (l) {
              return "undefined" == typeof l
                ? this.options.onText
                : (this.$on.html(l),
                  this._width(),
                  this._containerPosition(),
                  (this.options.onText = l),
                  this.$element);
            },
          },
          {
            key: "offText",
            value: function (l) {
              return "undefined" == typeof l
                ? this.options.offText
                : (this.$off.html(l),
                  this._width(),
                  this._containerPosition(),
                  (this.options.offText = l),
                  this.$element);
            },
          },
          {
            key: "labelText",
            value: function (l) {
              return "undefined" == typeof l
                ? this.options.labelText
                : (this.$label.html(l),
                  this._width(),
                  (this.options.labelText = l),
                  this.$element);
            },
          },
          {
            key: "handleWidth",
            value: function (l) {
              return "undefined" == typeof l
                ? this.options.handleWidth
                : ((this.options.handleWidth = l),
                  this._width(),
                  this._containerPosition(),
                  this.$element);
            },
          },
          {
            key: "labelWidth",
            value: function (l) {
              return "undefined" == typeof l
                ? this.options.labelWidth
                : ((this.options.labelWidth = l),
                  this._width(),
                  this._containerPosition(),
                  this.$element);
            },
          },
          {
            key: "baseClass",
            value: function () {
              return this.options.baseClass;
            },
          },
          {
            key: "wrapperClass",
            value: function (l) {
              return "undefined" == typeof l
                ? this.options.wrapperClass
                : (l || (l = g.fn.bootstrapSwitch.defaults.wrapperClass),
                  this.$wrapper.removeClass(
                    this._getClasses(this.options.wrapperClass).join(" ")
                  ),
                  this.$wrapper.addClass(this._getClasses(l).join(" ")),
                  (this.options.wrapperClass = l),
                  this.$element);
            },
          },
          {
            key: "radioAllOff",
            value: function (l) {
              if ("undefined" == typeof l) return this.options.radioAllOff;
              var m = !!l;
              return this.options.radioAllOff === m
                ? this.$element
                : ((this.options.radioAllOff = m), this.$element);
            },
          },
          {
            key: "onInit",
            value: function (l) {
              return "undefined" == typeof l
                ? this.options.onInit
                : (l || (l = g.fn.bootstrapSwitch.defaults.onInit),
                  (this.options.onInit = l),
                  this.$element);
            },
          },
          {
            key: "onSwitchChange",
            value: function (l) {
              return "undefined" == typeof l
                ? this.options.onSwitchChange
                : (l || (l = g.fn.bootstrapSwitch.defaults.onSwitchChange),
                  (this.options.onSwitchChange = l),
                  this.$element);
            },
          },
          {
            key: "destroy",
            value: function () {
              var l = this.$element.closest("form");
              return (
                l.length &&
                  l.off("reset.bootstrapSwitch").removeData("bootstrap-switch"),
                this.$container.children().not(this.$element).remove(),
                this.$element
                  .unwrap()
                  .unwrap()
                  .off(".bootstrapSwitch")
                  .removeData("bootstrap-switch"),
                this.$element
              );
            },
          },
          {
            key: "_getElementOptions",
            value: function () {
              return {
                state: this.$element.is(":checked"),
                size: this.$element.data("size"),
                animate: this.$element.data("animate"),
                disabled: this.$element.is(":disabled"),
                readonly: this.$element.is("[readonly]"),
                indeterminate: this.$element.data("indeterminate"),
                inverse: this.$element.data("inverse"),
                radioAllOff: this.$element.data("radio-all-off"),
                onColor: this.$element.data("on-color"),
                offColor: this.$element.data("off-color"),
                onText: this.$element.data("on-text"),
                offText: this.$element.data("off-text"),
                labelText: this.$element.data("label-text"),
                handleWidth: this.$element.data("handle-width"),
                labelWidth: this.$element.data("label-width"),
                baseClass: this.$element.data("base-class"),
                wrapperClass: this.$element.data("wrapper-class"),
              };
            },
          },
          {
            key: "_width",
            value: function () {
              var l = this,
                m = this.$on.add(this.$off).add(this.$label).css("width", ""),
                n =
                  "auto" === this.options.handleWidth
                    ? Math.round(Math.max(this.$on.width(), this.$off.width()))
                    : this.options.handleWidth;
              return (
                m.width(n),
                this.$label.width(function (o, p) {
                  return "auto" === l.options.labelWidth
                    ? p < n
                      ? n
                      : p
                    : l.options.labelWidth;
                }),
                (this._handleWidth = this.$on.outerWidth()),
                (this._labelWidth = this.$label.outerWidth()),
                this.$container.width(2 * this._handleWidth + this._labelWidth),
                this.$wrapper.width(this._handleWidth + this._labelWidth)
              );
            },
          },
          {
            key: "_containerPosition",
            value: function () {
              var l = this,
                m =
                  0 < arguments.length && void 0 !== arguments[0]
                    ? arguments[0]
                    : this.options.state,
                n = arguments[1];
              this.$container.css("margin-left", function () {
                var o = [0, "-" + l._handleWidth + "px"];
                return l.options.indeterminate
                  ? "-" + l._handleWidth / 2 + "px"
                  : m
                  ? l.options.inverse
                    ? o[1]
                    : o[0]
                  : l.options.inverse
                  ? o[0]
                  : o[1];
              });
            },
          },
          {
            key: "_init",
            value: function () {
              var l = this,
                m = function () {
                  l.setPrevOptions(),
                    l._width(),
                    l._containerPosition(),
                    setTimeout(function () {
                      if (l.options.animate)
                        return l.$wrapper.addClass(l._getClass("animate"));
                    }, 50);
                };
              if (this.$wrapper.is(":visible")) return void m();
              var n = window.setInterval(function () {
                if (l.$wrapper.is(":visible"))
                  return m(), window.clearInterval(n);
              }, 50);
            },
          },
          {
            key: "_elementHandlers",
            value: function () {
              var l = this;
              return this.$element.on({
                "setPreviousOptions.bootstrapSwitch":
                  this.setPrevOptions.bind(this),
                "previousState.bootstrapSwitch": function () {
                  (l.options = l.prevOptions),
                    l.options.indeterminate &&
                      l.$wrapper.addClass(l._getClass("indeterminate")),
                    l.$element
                      .prop("checked", l.options.state)
                      .trigger("change.bootstrapSwitch", !0);
                },
                "change.bootstrapSwitch": function (n, o) {
                  n.preventDefault(), n.stopImmediatePropagation();
                  var p = l.$element.is(":checked");
                  l._containerPosition(p),
                    p === l.options.state ||
                      ((l.options.state = p),
                      l.$wrapper
                        .toggleClass(l._getClass("off"))
                        .toggleClass(l._getClass("on")),
                      !o &&
                        (l.$element.is(":radio") &&
                          g('[name="' + l.$element.attr("name") + '"]')
                            .not(l.$element)
                            .prop("checked", !1)
                            .trigger("change.bootstrapSwitch", !0),
                        l.$element.trigger("switchChange.bootstrapSwitch", [
                          p,
                        ])));
                },
                "focus.bootstrapSwitch": function (n) {
                  n.preventDefault(),
                    l.$wrapper.addClass(l._getClass("focused"));
                },
                "blur.bootstrapSwitch": function (n) {
                  n.preventDefault(),
                    l.$wrapper.removeClass(l._getClass("focused"));
                },
                "keydown.bootstrapSwitch": function (n) {
                  !n.which ||
                    l.options.disabled ||
                    l.options.readonly ||
                    ((37 === n.which || 39 === n.which) &&
                      (n.preventDefault(),
                      n.stopImmediatePropagation(),
                      l.state(39 === n.which)));
                },
              });
            },
          },
          {
            key: "_handleHandlers",
            value: function () {
              var l = this;
              return (
                this.$on.on("click.bootstrapSwitch", function (m) {
                  return (
                    m.preventDefault(),
                    m.stopPropagation(),
                    l.state(!1),
                    l.$element.trigger("focus.bootstrapSwitch")
                  );
                }),
                this.$off.on("click.bootstrapSwitch", function (m) {
                  return (
                    m.preventDefault(),
                    m.stopPropagation(),
                    l.state(!0),
                    l.$element.trigger("focus.bootstrapSwitch")
                  );
                })
              );
            },
          },
          {
            key: "_labelHandlers",
            value: function () {
              var l = this;
              this.$label.on({
                click: function (o) {
                  o.stopPropagation();
                },
                "mousedown.bootstrapSwitch touchstart.bootstrapSwitch":
                  function (o) {
                    l._dragStart ||
                      l.options.disabled ||
                      l.options.readonly ||
                      (o.preventDefault(),
                      o.stopPropagation(),
                      (l._dragStart =
                        (o.pageX || o.originalEvent.touches[0].pageX) -
                        parseInt(l.$container.css("margin-left"), 10)),
                      l.options.animate &&
                        l.$wrapper.removeClass(l._getClass("animate")),
                      l.$element.trigger("focus.bootstrapSwitch"));
                  },
                "mousemove.bootstrapSwitch touchmove.bootstrapSwitch":
                  function (o) {
                    if (null != l._dragStart) {
                      var p =
                        (o.pageX || o.originalEvent.touches[0].pageX) -
                        l._dragStart;
                      o.preventDefault(),
                        p < -l._handleWidth ||
                          0 < p ||
                          ((l._dragEnd = p),
                          l.$container.css("margin-left", l._dragEnd + "px"));
                    }
                  },
                "mouseup.bootstrapSwitch touchend.bootstrapSwitch": function (
                  o
                ) {
                  if (l._dragStart) {
                    if (
                      (o.preventDefault(),
                      l.options.animate &&
                        l.$wrapper.addClass(l._getClass("animate")),
                      l._dragEnd)
                    ) {
                      var p = l._dragEnd > -(l._handleWidth / 2);
                      (l._dragEnd = !1), l.state(l.options.inverse ? !p : p);
                    } else l.state(!l.options.state);
                    l._dragStart = !1;
                  }
                },
                "mouseleave.bootstrapSwitch": function () {
                  l.$label.trigger("mouseup.bootstrapSwitch");
                },
              });
            },
          },
          {
            key: "_externalLabelHandler",
            value: function () {
              var l = this,
                m = this.$element.closest("label");
              m.on("click", function (n) {
                n.preventDefault(),
                  n.stopImmediatePropagation(),
                  n.target === m[0] && l.toggleState();
              });
            },
          },
          {
            key: "_formHandler",
            value: function () {
              var l = this.$element.closest("form");
              l.data("bootstrap-switch") ||
                l
                  .on("reset.bootstrapSwitch", function () {
                    window.setTimeout(function () {
                      l.find("input")
                        .filter(function () {
                          return g(this).data("bootstrap-switch");
                        })
                        .each(function () {
                          return g(this).bootstrapSwitch("state", this.checked);
                        });
                    }, 1);
                  })
                  .data("bootstrap-switch", !0);
            },
          },
          {
            key: "_getClass",
            value: function (l) {
              return this.options.baseClass + "-" + l;
            },
          },
          {
            key: "_getClasses",
            value: function (l) {
              return g.isArray(l)
                ? l.map(this._getClass.bind(this))
                : [this._getClass(l)];
            },
          },
        ]),
        j
      );
    })();
  (g.fn.bootstrapSwitch = function (j) {
    for (
      var l = arguments.length, m = Array(1 < l ? l - 1 : 0), n = 1;
      n < l;
      n++
    )
      m[n - 1] = arguments[n];
    return Array.prototype.reduce.call(
      this,
      function (o, p) {
        var q = g(p),
          r = q.data("bootstrap-switch"),
          s = r || new h(p, j);
        return (
          r || q.data("bootstrap-switch", s),
          "string" == typeof j ? s[j].apply(s, m) : o
        );
      },
      this
    );
  }),
    (g.fn.bootstrapSwitch.Constructor = h),
    (g.fn.bootstrapSwitch.defaults = {
      state: !0,
      size: null,
      animate: !0,
      disabled: !1,
      readonly: !1,
      indeterminate: !1,
      inverse: !1,
      radioAllOff: !1,
      onColor: "primary",
      offColor: "default",
      onText: "ON",
      offText: "OFF",
      labelText: "&nbsp",
      handleWidth: "auto",
      labelWidth: "auto",
      baseClass: "bootstrap-switch",
      wrapperClass: "wrapper",
      onInit: function () {},
      onSwitchChange: function () {},
    });
});

/*! nouislider - 10.0.0 - 2017-05-28 14:52:49 */

!(function (a) {
  "function" == typeof define && define.amd
    ? define([], a)
    : "object" == typeof exports
    ? (module.exports = a())
    : (window.noUiSlider = a());
})(function () {
  "use strict";
  function a(a) {
    return (
      "object" == typeof a &&
      "function" == typeof a.to &&
      "function" == typeof a.from
    );
  }
  function b(a) {
    a.parentElement.removeChild(a);
  }
  function c(a) {
    a.preventDefault();
  }
  function d(a) {
    return a.filter(function (a) {
      return this[a] ? !1 : (this[a] = !0);
    }, {});
  }
  function e(a, b) {
    return Math.round(a / b) * b;
  }
  function f(a, b) {
    var c = a.getBoundingClientRect(),
      d = a.ownerDocument,
      e = d.documentElement,
      f = o(d);
    return (
      /webkit.*Chrome.*Mobile/i.test(navigator.userAgent) && (f.x = 0),
      b ? c.top + f.y - e.clientTop : c.left + f.x - e.clientLeft
    );
  }
  function g(a) {
    return "number" == typeof a && !isNaN(a) && isFinite(a);
  }
  function h(a, b, c) {
    c > 0 &&
      (l(a, b),
      setTimeout(function () {
        m(a, b);
      }, c));
  }
  function i(a) {
    return Math.max(Math.min(a, 100), 0);
  }
  function j(a) {
    return Array.isArray(a) ? a : [a];
  }
  function k(a) {
    a = String(a);
    var b = a.split(".");
    return b.length > 1 ? b[1].length : 0;
  }
  function l(a, b) {
    a.classList ? a.classList.add(b) : (a.className += " " + b);
  }
  function m(a, b) {
    a.classList
      ? a.classList.remove(b)
      : (a.className = a.className.replace(
          new RegExp("(^|\\b)" + b.split(" ").join("|") + "(\\b|$)", "gi"),
          " "
        ));
  }
  function n(a, b) {
    return a.classList
      ? a.classList.contains(b)
      : new RegExp("\\b" + b + "\\b").test(a.className);
  }
  function o(a) {
    var b = void 0 !== window.pageXOffset,
      c = "CSS1Compat" === (a.compatMode || ""),
      d = b
        ? window.pageXOffset
        : c
        ? a.documentElement.scrollLeft
        : a.body.scrollLeft,
      e = b
        ? window.pageYOffset
        : c
        ? a.documentElement.scrollTop
        : a.body.scrollTop;
    return { x: d, y: e };
  }
  function p() {
    return window.navigator.pointerEnabled
      ? { start: "pointerdown", move: "pointermove", end: "pointerup" }
      : window.navigator.msPointerEnabled
      ? { start: "MSPointerDown", move: "MSPointerMove", end: "MSPointerUp" }
      : {
          start: "mousedown touchstart",
          move: "mousemove touchmove",
          end: "mouseup touchend",
        };
  }
  function q() {
    var a = !1;
    try {
      var b = Object.defineProperty({}, "passive", {
        get: function () {
          a = !0;
        },
      });
      window.addEventListener("test", null, b);
    } catch (c) {}
    return a;
  }
  function r() {
    return window.CSS && CSS.supports && CSS.supports("touch-action", "none");
  }
  function s(a, b) {
    return 100 / (b - a);
  }
  function t(a, b) {
    return (100 * b) / (a[1] - a[0]);
  }
  function u(a, b) {
    return t(a, a[0] < 0 ? b + Math.abs(a[0]) : b - a[0]);
  }
  function v(a, b) {
    return (b * (a[1] - a[0])) / 100 + a[0];
  }
  function w(a, b) {
    for (var c = 1; a >= b[c]; ) c += 1;
    return c;
  }
  function x(a, b, c) {
    if (c >= a.slice(-1)[0]) return 100;
    var d,
      e,
      f,
      g,
      h = w(c, a);
    return (
      (d = a[h - 1]),
      (e = a[h]),
      (f = b[h - 1]),
      (g = b[h]),
      f + u([d, e], c) / s(f, g)
    );
  }
  function y(a, b, c) {
    if (c >= 100) return a.slice(-1)[0];
    var d,
      e,
      f,
      g,
      h = w(c, b);
    return (
      (d = a[h - 1]),
      (e = a[h]),
      (f = b[h - 1]),
      (g = b[h]),
      v([d, e], (c - f) * s(f, g))
    );
  }
  function z(a, b, c, d) {
    if (100 === d) return d;
    var f,
      g,
      h = w(d, a);
    return c
      ? ((f = a[h - 1]), (g = a[h]), d - f > (g - f) / 2 ? g : f)
      : b[h - 1]
      ? a[h - 1] + e(d - a[h - 1], b[h - 1])
      : d;
  }
  function A(a, b, c) {
    var d;
    if (
      ("number" == typeof b && (b = [b]),
      "[object Array]" !== Object.prototype.toString.call(b))
    )
      throw new Error(
        "noUiSlider (" + $ + "): 'range' contains invalid value."
      );
    if (
      ((d = "min" === a ? 0 : "max" === a ? 100 : parseFloat(a)),
      !g(d) || !g(b[0]))
    )
      throw new Error("noUiSlider (" + $ + "): 'range' value isn't numeric.");
    c.xPct.push(d),
      c.xVal.push(b[0]),
      d
        ? c.xSteps.push(isNaN(b[1]) ? !1 : b[1])
        : isNaN(b[1]) || (c.xSteps[0] = b[1]),
      c.xHighestCompleteStep.push(0);
  }
  function B(a, b, c) {
    if (!b) return !0;
    c.xSteps[a] =
      t([c.xVal[a], c.xVal[a + 1]], b) / s(c.xPct[a], c.xPct[a + 1]);
    var d = (c.xVal[a + 1] - c.xVal[a]) / c.xNumSteps[a],
      e = Math.ceil(Number(d.toFixed(3)) - 1),
      f = c.xVal[a] + c.xNumSteps[a] * e;
    c.xHighestCompleteStep[a] = f;
  }
  function C(a, b, c) {
    (this.xPct = []),
      (this.xVal = []),
      (this.xSteps = [c || !1]),
      (this.xNumSteps = [!1]),
      (this.xHighestCompleteStep = []),
      (this.snap = b);
    var d,
      e = [];
    for (d in a) a.hasOwnProperty(d) && e.push([a[d], d]);
    for (
      e.sort(
        e.length && "object" == typeof e[0][0]
          ? function (a, b) {
              return a[0][0] - b[0][0];
            }
          : function (a, b) {
              return a[0] - b[0];
            }
      ),
        d = 0;
      d < e.length;
      d++
    )
      A(e[d][1], e[d][0], this);
    for (
      this.xNumSteps = this.xSteps.slice(0), d = 0;
      d < this.xNumSteps.length;
      d++
    )
      B(d, this.xNumSteps[d], this);
  }
  function D(b) {
    if (a(b)) return !0;
    throw new Error(
      "noUiSlider (" + $ + "): 'format' requires 'to' and 'from' methods."
    );
  }
  function E(a, b) {
    if (!g(b))
      throw new Error("noUiSlider (" + $ + "): 'step' is not numeric.");
    a.singleStep = b;
  }
  function F(a, b) {
    if ("object" != typeof b || Array.isArray(b))
      throw new Error("noUiSlider (" + $ + "): 'range' is not an object.");
    if (void 0 === b.min || void 0 === b.max)
      throw new Error(
        "noUiSlider (" + $ + "): Missing 'min' or 'max' in 'range'."
      );
    if (b.min === b.max)
      throw new Error(
        "noUiSlider (" + $ + "): 'range' 'min' and 'max' cannot be equal."
      );
    a.spectrum = new C(b, a.snap, a.singleStep);
  }
  function G(a, b) {
    if (((b = j(b)), !Array.isArray(b) || !b.length))
      throw new Error("noUiSlider (" + $ + "): 'start' option is incorrect.");
    (a.handles = b.length), (a.start = b);
  }
  function H(a, b) {
    if (((a.snap = b), "boolean" != typeof b))
      throw new Error(
        "noUiSlider (" + $ + "): 'snap' option must be a boolean."
      );
  }
  function I(a, b) {
    if (((a.animate = b), "boolean" != typeof b))
      throw new Error(
        "noUiSlider (" + $ + "): 'animate' option must be a boolean."
      );
  }
  function J(a, b) {
    if (((a.animationDuration = b), "number" != typeof b))
      throw new Error(
        "noUiSlider (" + $ + "): 'animationDuration' option must be a number."
      );
  }
  function K(a, b) {
    var c,
      d = [!1];
    if (
      ("lower" === b ? (b = [!0, !1]) : "upper" === b && (b = [!1, !0]),
      b === !0 || b === !1)
    ) {
      for (c = 1; c < a.handles; c++) d.push(b);
      d.push(!1);
    } else {
      if (!Array.isArray(b) || !b.length || b.length !== a.handles + 1)
        throw new Error(
          "noUiSlider (" + $ + "): 'connect' option doesn't match handle count."
        );
      d = b;
    }
    a.connect = d;
  }
  function L(a, b) {
    switch (b) {
      case "horizontal":
        a.ort = 0;
        break;
      case "vertical":
        a.ort = 1;
        break;
      default:
        throw new Error(
          "noUiSlider (" + $ + "): 'orientation' option is invalid."
        );
    }
  }
  function M(a, b) {
    if (!g(b))
      throw new Error(
        "noUiSlider (" + $ + "): 'margin' option must be numeric."
      );
    if (0 !== b && ((a.margin = a.spectrum.getMargin(b)), !a.margin))
      throw new Error(
        "noUiSlider (" +
          $ +
          "): 'margin' option is only supported on linear sliders."
      );
  }
  function N(a, b) {
    if (!g(b))
      throw new Error(
        "noUiSlider (" + $ + "): 'limit' option must be numeric."
      );
    if (((a.limit = a.spectrum.getMargin(b)), !a.limit || a.handles < 2))
      throw new Error(
        "noUiSlider (" +
          $ +
          "): 'limit' option is only supported on linear sliders with 2 or more handles."
      );
  }
  function O(a, b) {
    if (!g(b))
      throw new Error(
        "noUiSlider (" + $ + "): 'padding' option must be numeric."
      );
    if (0 !== b) {
      if (((a.padding = a.spectrum.getMargin(b)), !a.padding))
        throw new Error(
          "noUiSlider (" +
            $ +
            "): 'padding' option is only supported on linear sliders."
        );
      if (a.padding < 0)
        throw new Error(
          "noUiSlider (" + $ + "): 'padding' option must be a positive number."
        );
      if (a.padding >= 50)
        throw new Error(
          "noUiSlider (" +
            $ +
            "): 'padding' option must be less than half the range."
        );
    }
  }
  function P(a, b) {
    switch (b) {
      case "ltr":
        a.dir = 0;
        break;
      case "rtl":
        a.dir = 1;
        break;
      default:
        throw new Error(
          "noUiSlider (" + $ + "): 'direction' option was not recognized."
        );
    }
  }
  function Q(a, b) {
    if ("string" != typeof b)
      throw new Error(
        "noUiSlider (" +
          $ +
          "): 'behaviour' must be a string containing options."
      );
    var c = b.indexOf("tap") >= 0,
      d = b.indexOf("drag") >= 0,
      e = b.indexOf("fixed") >= 0,
      f = b.indexOf("snap") >= 0,
      g = b.indexOf("hover") >= 0;
    if (e) {
      if (2 !== a.handles)
        throw new Error(
          "noUiSlider (" +
            $ +
            "): 'fixed' behaviour must be used with 2 handles"
        );
      M(a, a.start[1] - a.start[0]);
    }
    a.events = { tap: c || f, drag: d, fixed: e, snap: f, hover: g };
  }
  function R(a, b) {
    if (b !== !1)
      if (b === !0) {
        a.tooltips = [];
        for (var c = 0; c < a.handles; c++) a.tooltips.push(!0);
      } else {
        if (((a.tooltips = j(b)), a.tooltips.length !== a.handles))
          throw new Error(
            "noUiSlider (" + $ + "): must pass a formatter for all handles."
          );
        a.tooltips.forEach(function (a) {
          if (
            "boolean" != typeof a &&
            ("object" != typeof a || "function" != typeof a.to)
          )
            throw new Error(
              "noUiSlider (" +
                $ +
                "): 'tooltips' must be passed a formatter or 'false'."
            );
        });
      }
  }
  function S(a, b) {
    (a.ariaFormat = b), D(b);
  }
  function T(a, b) {
    (a.format = b), D(b);
  }
  function U(a, b) {
    if (void 0 !== b && "string" != typeof b && b !== !1)
      throw new Error(
        "noUiSlider (" + $ + "): 'cssPrefix' must be a string or `false`."
      );
    a.cssPrefix = b;
  }
  function V(a, b) {
    if (void 0 !== b && "object" != typeof b)
      throw new Error(
        "noUiSlider (" + $ + "): 'cssClasses' must be an object."
      );
    if ("string" == typeof a.cssPrefix) {
      a.cssClasses = {};
      for (var c in b)
        b.hasOwnProperty(c) && (a.cssClasses[c] = a.cssPrefix + b[c]);
    } else a.cssClasses = b;
  }
  function W(a, b) {
    if (b !== !0 && b !== !1)
      throw new Error(
        "noUiSlider (" +
          $ +
          "): 'useRequestAnimationFrame' option should be true (default) or false."
      );
    a.useRequestAnimationFrame = b;
  }
  function X(a) {
    var b = {
        margin: 0,
        limit: 0,
        padding: 0,
        animate: !0,
        animationDuration: 300,
        ariaFormat: _,
        format: _,
      },
      c = {
        step: { r: !1, t: E },
        start: { r: !0, t: G },
        connect: { r: !0, t: K },
        direction: { r: !0, t: P },
        snap: { r: !1, t: H },
        animate: { r: !1, t: I },
        animationDuration: { r: !1, t: J },
        range: { r: !0, t: F },
        orientation: { r: !1, t: L },
        margin: { r: !1, t: M },
        limit: { r: !1, t: N },
        padding: { r: !1, t: O },
        behaviour: { r: !0, t: Q },
        ariaFormat: { r: !1, t: S },
        format: { r: !1, t: T },
        tooltips: { r: !1, t: R },
        cssPrefix: { r: !1, t: U },
        cssClasses: { r: !1, t: V },
        useRequestAnimationFrame: { r: !1, t: W },
      },
      d = {
        connect: !1,
        direction: "ltr",
        behaviour: "tap",
        orientation: "horizontal",
        cssPrefix: "noUi-",
        cssClasses: {
          target: "target",
          base: "base",
          origin: "origin",
          handle: "handle",
          handleLower: "handle-lower",
          handleUpper: "handle-upper",
          horizontal: "horizontal",
          vertical: "vertical",
          background: "background",
          connect: "connect",
          ltr: "ltr",
          rtl: "rtl",
          draggable: "draggable",
          drag: "state-drag",
          tap: "state-tap",
          active: "active",
          tooltip: "tooltip",
          pips: "pips",
          pipsHorizontal: "pips-horizontal",
          pipsVertical: "pips-vertical",
          marker: "marker",
          markerHorizontal: "marker-horizontal",
          markerVertical: "marker-vertical",
          markerNormal: "marker-normal",
          markerLarge: "marker-large",
          markerSub: "marker-sub",
          value: "value",
          valueHorizontal: "value-horizontal",
          valueVertical: "value-vertical",
          valueNormal: "value-normal",
          valueLarge: "value-large",
          valueSub: "value-sub",
        },
        useRequestAnimationFrame: !0,
      };
    a.format && !a.ariaFormat && (a.ariaFormat = a.format),
      Object.keys(c).forEach(function (e) {
        if (void 0 === a[e] && void 0 === d[e]) {
          if (c[e].r)
            throw new Error("noUiSlider (" + $ + "): '" + e + "' is required.");
          return !0;
        }
        c[e].t(b, void 0 === a[e] ? d[e] : a[e]);
      }),
      (b.pips = a.pips);
    var e = [
      ["left", "top"],
      ["right", "bottom"],
    ];
    return (
      (b.style = e[b.dir][b.ort]), (b.styleOposite = e[b.dir ? 0 : 1][b.ort]), b
    );
  }
  function Y(a, e, g) {
    function k(a, b) {
      var c = xa.createElement("div");
      return b && l(c, b), a.appendChild(c), c;
    }
    function s(a, b) {
      var c = k(a, e.cssClasses.origin),
        d = k(c, e.cssClasses.handle);
      return (
        d.setAttribute("data-handle", b),
        d.setAttribute("tabindex", "0"),
        d.setAttribute("role", "slider"),
        d.setAttribute("aria-orientation", e.ort ? "vertical" : "horizontal"),
        0 === b
          ? l(d, e.cssClasses.handleLower)
          : b === e.handles - 1 && l(d, e.cssClasses.handleUpper),
        c
      );
    }
    function t(a, b) {
      return b ? k(a, e.cssClasses.connect) : !1;
    }
    function u(a, b) {
      (ia = []), (ja = []), ja.push(t(b, a[0]));
      for (var c = 0; c < e.handles; c++)
        ia.push(s(b, c)), (ra[c] = c), ja.push(t(b, a[c + 1]));
    }
    function v(a) {
      l(a, e.cssClasses.target),
        0 === e.dir ? l(a, e.cssClasses.ltr) : l(a, e.cssClasses.rtl),
        0 === e.ort
          ? l(a, e.cssClasses.horizontal)
          : l(a, e.cssClasses.vertical),
        (ha = k(a, e.cssClasses.base));
    }
    function w(a, b) {
      return e.tooltips[b] ? k(a.firstChild, e.cssClasses.tooltip) : !1;
    }
    function x() {
      var a = ia.map(w);
      ea("update", function (b, c, d) {
        if (a[c]) {
          var f = b[c];
          e.tooltips[c] !== !0 && (f = e.tooltips[c].to(d[c])),
            (a[c].innerHTML = f);
        }
      });
    }
    function y() {
      ea("update", function (a, b, c, d, f) {
        ra.forEach(function (a) {
          var b = ia[a],
            d = S(qa, a, 0, !0, !0, !0),
            g = S(qa, a, 100, !0, !0, !0),
            h = f[a],
            i = e.ariaFormat.to(c[a]);
          b.children[0].setAttribute("aria-valuemin", d.toFixed(1)),
            b.children[0].setAttribute("aria-valuemax", g.toFixed(1)),
            b.children[0].setAttribute("aria-valuenow", h.toFixed(1)),
            b.children[0].setAttribute("aria-valuetext", i);
        });
      });
    }
    function z(a, b, c) {
      if ("range" === a || "steps" === a) return ta.xVal;
      if ("count" === a) {
        if (!b)
          throw new Error(
            "noUiSlider (" + $ + "): 'values' required for mode 'count'."
          );
        var d,
          e = 100 / (b - 1),
          f = 0;
        for (b = []; (d = f++ * e) <= 100; ) b.push(d);
        a = "positions";
      }
      return "positions" === a
        ? b.map(function (a) {
            return ta.fromStepping(c ? ta.getStep(a) : a);
          })
        : "values" === a
        ? c
          ? b.map(function (a) {
              return ta.fromStepping(ta.getStep(ta.toStepping(a)));
            })
          : b
        : void 0;
    }
    function A(a, b, c) {
      function e(a, b) {
        return (a + b).toFixed(7) / 1;
      }
      var f = {},
        g = ta.xVal[0],
        h = ta.xVal[ta.xVal.length - 1],
        i = !1,
        j = !1,
        k = 0;
      return (
        (c = d(
          c.slice().sort(function (a, b) {
            return a - b;
          })
        )),
        c[0] !== g && (c.unshift(g), (i = !0)),
        c[c.length - 1] !== h && (c.push(h), (j = !0)),
        c.forEach(function (d, g) {
          var h,
            l,
            m,
            n,
            o,
            p,
            q,
            r,
            s,
            t,
            u = d,
            v = c[g + 1];
          if (
            ("steps" === b && (h = ta.xNumSteps[g]),
            h || (h = v - u),
            u !== !1 && void 0 !== v)
          )
            for (h = Math.max(h, 1e-7), l = u; v >= l; l = e(l, h)) {
              for (
                n = ta.toStepping(l),
                  o = n - k,
                  r = o / a,
                  s = Math.round(r),
                  t = o / s,
                  m = 1;
                s >= m;
                m += 1
              )
                (p = k + m * t), (f[p.toFixed(5)] = ["x", 0]);
              (q = c.indexOf(l) > -1 ? 1 : "steps" === b ? 2 : 0),
                !g && i && (q = 0),
                (l === v && j) || (f[n.toFixed(5)] = [l, q]),
                (k = n);
            }
        }),
        f
      );
    }
    function B(a, b, c) {
      function d(a, b) {
        var c = b === e.cssClasses.value,
          d = c ? j : m,
          f = c ? h : i;
        return b + " " + d[e.ort] + " " + f[a];
      }
      function f(a, f) {
        f[1] = f[1] && b ? b(f[0], f[1]) : f[1];
        var h = k(g, !1);
        (h.className = d(f[1], e.cssClasses.marker)),
          (h.style[e.style] = a + "%"),
          f[1] &&
            ((h = k(g, !1)),
            (h.className = d(f[1], e.cssClasses.value)),
            (h.style[e.style] = a + "%"),
            (h.innerText = c.to(f[0])));
      }
      var g = xa.createElement("div"),
        h = [
          e.cssClasses.valueNormal,
          e.cssClasses.valueLarge,
          e.cssClasses.valueSub,
        ],
        i = [
          e.cssClasses.markerNormal,
          e.cssClasses.markerLarge,
          e.cssClasses.markerSub,
        ],
        j = [e.cssClasses.valueHorizontal, e.cssClasses.valueVertical],
        m = [e.cssClasses.markerHorizontal, e.cssClasses.markerVertical];
      return (
        l(g, e.cssClasses.pips),
        l(
          g,
          0 === e.ort ? e.cssClasses.pipsHorizontal : e.cssClasses.pipsVertical
        ),
        Object.keys(a).forEach(function (b) {
          f(b, a[b]);
        }),
        g
      );
    }
    function C() {
      la && (b(la), (la = null));
    }
    function D(a) {
      C();
      var b = a.mode,
        c = a.density || 1,
        d = a.filter || !1,
        e = a.values || !1,
        f = a.stepped || !1,
        g = z(b, e, f),
        h = A(c, b, g),
        i = a.format || { to: Math.round };
      return (la = pa.appendChild(B(h, d, i)));
    }
    function E() {
      var a = ha.getBoundingClientRect(),
        b = "offset" + ["Width", "Height"][e.ort];
      return 0 === e.ort ? a.width || ha[b] : a.height || ha[b];
    }
    function F(a, b, c, d) {
      var f = function (b) {
          return pa.hasAttribute("disabled")
            ? !1
            : n(pa, e.cssClasses.tap)
            ? !1
            : (b = G(b, d.pageOffset))
            ? a === ma.start && void 0 !== b.buttons && b.buttons > 1
              ? !1
              : d.hover && b.buttons
              ? !1
              : (oa || b.preventDefault(),
                (b.calcPoint = b.points[e.ort]),
                void c(b, d))
            : !1;
        },
        g = [];
      return (
        a.split(" ").forEach(function (a) {
          b.addEventListener(a, f, oa ? { passive: !0 } : !1), g.push([a, f]);
        }),
        g
      );
    }
    function G(a, b) {
      var c,
        d,
        e = 0 === a.type.indexOf("touch"),
        f = 0 === a.type.indexOf("mouse"),
        g = 0 === a.type.indexOf("pointer");
      if ((0 === a.type.indexOf("MSPointer") && (g = !0), e)) {
        if (a.touches.length > 1) return !1;
        (c = a.changedTouches[0].pageX), (d = a.changedTouches[0].pageY);
      }
      return (
        (b = b || o(xa)),
        (f || g) && ((c = a.clientX + b.x), (d = a.clientY + b.y)),
        (a.pageOffset = b),
        (a.points = [c, d]),
        (a.cursor = f || g),
        a
      );
    }
    function H(a) {
      var b = a - f(ha, e.ort),
        c = (100 * b) / E();
      return e.dir ? 100 - c : c;
    }
    function I(a) {
      var b = 100,
        c = !1;
      return (
        ia.forEach(function (d, e) {
          if (!d.hasAttribute("disabled")) {
            var f = Math.abs(qa[e] - a);
            b > f && ((c = e), (b = f));
          }
        }),
        c
      );
    }
    function J(a, b, c, d) {
      var e = c.slice(),
        f = [!a, a],
        g = [a, !a];
      (d = d.slice()),
        a && d.reverse(),
        d.length > 1
          ? d.forEach(function (a, c) {
              var d = S(e, a, e[a] + b, f[c], g[c], !1);
              d === !1 ? (b = 0) : ((b = d - e[a]), (e[a] = d));
            })
          : (f = g = [!0]);
      var h = !1;
      d.forEach(function (a, d) {
        h = W(a, c[a] + b, f[d], g[d]) || h;
      }),
        h &&
          d.forEach(function (a) {
            K("update", a), K("slide", a);
          });
    }
    function K(a, b, c) {
      Object.keys(va).forEach(function (d) {
        var f = d.split(".")[0];
        a === f &&
          va[d].forEach(function (a) {
            a.call(ka, ua.map(e.format.to), b, ua.slice(), c || !1, qa.slice());
          });
      });
    }
    function L(a, b) {
      "mouseout" === a.type &&
        "HTML" === a.target.nodeName &&
        null === a.relatedTarget &&
        N(a, b);
    }
    function M(a, b) {
      if (
        -1 === navigator.appVersion.indexOf("MSIE 9") &&
        0 === a.buttons &&
        0 !== b.buttonsProperty
      )
        return N(a, b);
      var c = (e.dir ? -1 : 1) * (a.calcPoint - b.startCalcPoint),
        d = (100 * c) / b.baseSize;
      J(c > 0, d, b.locations, b.handleNumbers);
    }
    function N(a, b) {
      sa && (m(sa, e.cssClasses.active), (sa = !1)),
        a.cursor &&
          ((za.style.cursor = ""), za.removeEventListener("selectstart", c)),
        wa.forEach(function (a) {
          ya.removeEventListener(a[0], a[1]);
        }),
        m(pa, e.cssClasses.drag),
        V(),
        b.handleNumbers.forEach(function (a) {
          K("change", a), K("set", a), K("end", a);
        });
    }
    function O(a, b) {
      if (1 === b.handleNumbers.length) {
        var d = ia[b.handleNumbers[0]];
        if (d.hasAttribute("disabled")) return !1;
        (sa = d.children[0]), l(sa, e.cssClasses.active);
      }
      a.stopPropagation();
      var f = F(ma.move, ya, M, {
          startCalcPoint: a.calcPoint,
          baseSize: E(),
          pageOffset: a.pageOffset,
          handleNumbers: b.handleNumbers,
          buttonsProperty: a.buttons,
          locations: qa.slice(),
        }),
        g = F(ma.end, ya, N, { handleNumbers: b.handleNumbers }),
        h = F("mouseout", ya, L, { handleNumbers: b.handleNumbers });
      (wa = f.concat(g, h)),
        a.cursor &&
          ((za.style.cursor = getComputedStyle(a.target).cursor),
          ia.length > 1 && l(pa, e.cssClasses.drag),
          za.addEventListener("selectstart", c, !1)),
        b.handleNumbers.forEach(function (a) {
          K("start", a);
        });
    }
    function P(a) {
      a.stopPropagation();
      var b = H(a.calcPoint),
        c = I(b);
      return c === !1
        ? !1
        : (e.events.snap || h(pa, e.cssClasses.tap, e.animationDuration),
          W(c, b, !0, !0),
          V(),
          K("slide", c, !0),
          K("update", c, !0),
          K("change", c, !0),
          K("set", c, !0),
          void (e.events.snap && O(a, { handleNumbers: [c] })));
    }
    function Q(a) {
      var b = H(a.calcPoint),
        c = ta.getStep(b),
        d = ta.fromStepping(c);
      Object.keys(va).forEach(function (a) {
        "hover" === a.split(".")[0] &&
          va[a].forEach(function (a) {
            a.call(ka, d);
          });
      });
    }
    function R(a) {
      a.fixed ||
        ia.forEach(function (a, b) {
          F(ma.start, a.children[0], O, { handleNumbers: [b] });
        }),
        a.tap && F(ma.start, ha, P, {}),
        a.hover && F(ma.move, ha, Q, { hover: !0 }),
        a.drag &&
          ja.forEach(function (b, c) {
            if (b !== !1 && 0 !== c && c !== ja.length - 1) {
              var d = ia[c - 1],
                f = ia[c],
                g = [b];
              l(b, e.cssClasses.draggable),
                a.fixed && (g.push(d.children[0]), g.push(f.children[0])),
                g.forEach(function (a) {
                  F(ma.start, a, O, {
                    handles: [d, f],
                    handleNumbers: [c - 1, c],
                  });
                });
            }
          });
    }
    function S(a, b, c, d, f, g) {
      return (
        ia.length > 1 &&
          (d && b > 0 && (c = Math.max(c, a[b - 1] + e.margin)),
          f && b < ia.length - 1 && (c = Math.min(c, a[b + 1] - e.margin))),
        ia.length > 1 &&
          e.limit &&
          (d && b > 0 && (c = Math.min(c, a[b - 1] + e.limit)),
          f && b < ia.length - 1 && (c = Math.max(c, a[b + 1] - e.limit))),
        e.padding &&
          (0 === b && (c = Math.max(c, e.padding)),
          b === ia.length - 1 && (c = Math.min(c, 100 - e.padding))),
        (c = ta.getStep(c)),
        (c = i(c)),
        c !== a[b] || g ? c : !1
      );
    }
    function T(a) {
      return a + "%";
    }
    function U(a, b) {
      (qa[a] = b), (ua[a] = ta.fromStepping(b));
      var c = function () {
        (ia[a].style[e.style] = T(b)), Y(a), Y(a + 1);
      };
      window.requestAnimationFrame && e.useRequestAnimationFrame
        ? window.requestAnimationFrame(c)
        : c();
    }
    function V() {
      ra.forEach(function (a) {
        var b = qa[a] > 50 ? -1 : 1,
          c = 3 + (ia.length + b * a);
        ia[a].childNodes[0].style.zIndex = c;
      });
    }
    function W(a, b, c, d) {
      return (b = S(qa, a, b, c, d, !1)), b === !1 ? !1 : (U(a, b), !0);
    }
    function Y(a) {
      if (ja[a]) {
        var b = 0,
          c = 100;
        0 !== a && (b = qa[a - 1]),
          a !== ja.length - 1 && (c = qa[a]),
          (ja[a].style[e.style] = T(b)),
          (ja[a].style[e.styleOposite] = T(100 - c));
      }
    }
    function Z(a, b) {
      null !== a &&
        a !== !1 &&
        ("number" == typeof a && (a = String(a)),
        (a = e.format.from(a)),
        a === !1 || isNaN(a) || W(b, ta.toStepping(a), !1, !1));
    }
    function _(a, b) {
      var c = j(a),
        d = void 0 === qa[0];
      (b = void 0 === b ? !0 : !!b),
        c.forEach(Z),
        e.animate && !d && h(pa, e.cssClasses.tap, e.animationDuration),
        ra.forEach(function (a) {
          W(a, qa[a], !0, !1);
        }),
        V(),
        ra.forEach(function (a) {
          K("update", a), null !== c[a] && b && K("set", a);
        });
    }
    function aa(a) {
      _(e.start, a);
    }
    function ba() {
      var a = ua.map(e.format.to);
      return 1 === a.length ? a[0] : a;
    }
    function ca() {
      for (var a in e.cssClasses)
        e.cssClasses.hasOwnProperty(a) && m(pa, e.cssClasses[a]);
      for (; pa.firstChild; ) pa.removeChild(pa.firstChild);
      delete pa.noUiSlider;
    }
    function da() {
      return qa.map(function (a, b) {
        var c = ta.getNearbySteps(a),
          d = ua[b],
          e = c.thisStep.step,
          f = null;
        e !== !1 &&
          d + e > c.stepAfter.startValue &&
          (e = c.stepAfter.startValue - d),
          (f =
            d > c.thisStep.startValue
              ? c.thisStep.step
              : c.stepBefore.step === !1
              ? !1
              : d - c.stepBefore.highestStep),
          100 === a ? (e = null) : 0 === a && (f = null);
        var g = ta.countStepDecimals();
        return (
          null !== e && e !== !1 && (e = Number(e.toFixed(g))),
          null !== f && f !== !1 && (f = Number(f.toFixed(g))),
          [f, e]
        );
      });
    }
    function ea(a, b) {
      (va[a] = va[a] || []),
        va[a].push(b),
        "update" === a.split(".")[0] &&
          ia.forEach(function (a, b) {
            K("update", b);
          });
    }
    function fa(a) {
      var b = a && a.split(".")[0],
        c = b && a.substring(b.length);
      Object.keys(va).forEach(function (a) {
        var d = a.split(".")[0],
          e = a.substring(d.length);
        (b && b !== d) || (c && c !== e) || delete va[a];
      });
    }
    function ga(a, b) {
      var c = ba(),
        d = [
          "margin",
          "limit",
          "padding",
          "range",
          "animate",
          "snap",
          "step",
          "format",
        ];
      d.forEach(function (b) {
        void 0 !== a[b] && (g[b] = a[b]);
      });
      var f = X(g);
      d.forEach(function (b) {
        void 0 !== a[b] && (e[b] = f[b]);
      }),
        (ta = f.spectrum),
        (e.margin = f.margin),
        (e.limit = f.limit),
        (e.padding = f.padding),
        e.pips && D(e.pips),
        (qa = []),
        _(a.start || c, b);
    }
    var ha,
      ia,
      ja,
      ka,
      la,
      ma = p(),
      na = r(),
      oa = na && q(),
      pa = a,
      qa = [],
      ra = [],
      sa = !1,
      ta = e.spectrum,
      ua = [],
      va = {},
      wa = null,
      xa = a.ownerDocument,
      ya = xa.documentElement,
      za = xa.body;
    if (pa.noUiSlider)
      throw new Error(
        "noUiSlider (" + $ + "): Slider was already initialized."
      );
    return (
      v(pa),
      u(e.connect, ha),
      (ka = {
        destroy: ca,
        steps: da,
        on: ea,
        off: fa,
        get: ba,
        set: _,
        reset: aa,
        __moveHandles: function (a, b, c) {
          J(a, b, qa, c);
        },
        options: g,
        updateOptions: ga,
        target: pa,
        removePips: C,
        pips: D,
      }),
      R(e.events),
      _(e.start),
      e.pips && D(e.pips),
      e.tooltips && x(),
      y(),
      ka
    );
  }
  function Z(a, b) {
    if (!a || !a.nodeName)
      throw new Error(
        "noUiSlider (" + $ + "): create requires a single element, got: " + a
      );
    var c = X(b, a),
      d = Y(a, c, b);
    return (a.noUiSlider = d), d;
  }
  var $ = "10.0.0";
  (C.prototype.getMargin = function (a) {
    var b = this.xNumSteps[0];
    if (b && (a / b) % 1 !== 0)
      throw new Error(
        "noUiSlider (" +
          $ +
          "): 'limit', 'margin' and 'padding' must be divisible by step."
      );
    return 2 === this.xPct.length ? t(this.xVal, a) : !1;
  }),
    (C.prototype.toStepping = function (a) {
      return (a = x(this.xVal, this.xPct, a));
    }),
    (C.prototype.fromStepping = function (a) {
      return y(this.xVal, this.xPct, a);
    }),
    (C.prototype.getStep = function (a) {
      return (a = z(this.xPct, this.xSteps, this.snap, a));
    }),
    (C.prototype.getNearbySteps = function (a) {
      var b = w(a, this.xPct);
      return {
        stepBefore: {
          startValue: this.xVal[b - 2],
          step: this.xNumSteps[b - 2],
          highestStep: this.xHighestCompleteStep[b - 2],
        },
        thisStep: {
          startValue: this.xVal[b - 1],
          step: this.xNumSteps[b - 1],
          highestStep: this.xHighestCompleteStep[b - 1],
        },
        stepAfter: {
          startValue: this.xVal[b - 0],
          step: this.xNumSteps[b - 0],
          highestStep: this.xHighestCompleteStep[b - 0],
        },
      };
    }),
    (C.prototype.countStepDecimals = function () {
      var a = this.xNumSteps.map(k);
      return Math.max.apply(null, a);
    }),
    (C.prototype.convert = function (a) {
      return this.getStep(this.toStepping(a));
    });
  var _ = {
    to: function (a) {
      return void 0 !== a && a.toFixed(2);
    },
    from: Number,
  };
  return { version: $, create: Z };
});
!(function (e) {
  "function" == typeof define && define.amd
    ? define([], e)
    : "object" == typeof exports
    ? (module.exports = e())
    : (window.wNumb = e());
})(function () {
  "use strict";
  function e(e) {
    return e.split("").reverse().join("");
  }
  function t(e, t) {
    return e.substring(0, t.length) === t;
  }
  function n(e, t) {
    return e.slice(-1 * t.length) === t;
  }
  function r(e, t, n) {
    if ((e[t] || e[n]) && e[t] === e[n]) throw new Error(t);
  }
  function i(e) {
    return "number" == typeof e && isFinite(e);
  }
  function o(e, t) {
    return (
      (e = e.toString().split("e")),
      (e = Math.round(+(e[0] + "e" + (e[1] ? +e[1] + t : t)))),
      (e = e.toString().split("e")),
      (+(e[0] + "e" + (e[1] ? +e[1] - t : -t))).toFixed(t)
    );
  }
  function f(t, n, r, f, u, s, c, a, d, p, l, h) {
    var g,
      v,
      m,
      w = h,
      x = "",
      y = "";
    return (
      s && (h = s(h)),
      i(h)
        ? (t !== !1 && 0 === parseFloat(h.toFixed(t)) && (h = 0),
          0 > h && ((g = !0), (h = Math.abs(h))),
          t !== !1 && (h = o(h, t)),
          (h = h.toString()),
          -1 !== h.indexOf(".")
            ? ((v = h.split(".")), (m = v[0]), r && (x = r + v[1]))
            : (m = h),
          n && ((m = e(m).match(/.{1,3}/g)), (m = e(m.join(e(n))))),
          g && a && (y += a),
          f && (y += f),
          g && d && (y += d),
          (y += m),
          (y += x),
          u && (y += u),
          p && (y = p(y, w)),
          y)
        : !1
    );
  }
  function u(e, r, o, f, u, s, c, a, d, p, l, h) {
    var g,
      v = "";
    return (
      l && (h = l(h)),
      h && "string" == typeof h
        ? (a && t(h, a) && ((h = h.replace(a, "")), (g = !0)),
          f && t(h, f) && (h = h.replace(f, "")),
          d && t(h, d) && ((h = h.replace(d, "")), (g = !0)),
          u && n(h, u) && (h = h.slice(0, -1 * u.length)),
          r && (h = h.split(r).join("")),
          o && (h = h.replace(o, ".")),
          g && (v += "-"),
          (v += h),
          (v = v.replace(/[^0-9\.\-.]/g, "")),
          "" === v ? !1 : ((v = Number(v)), c && (v = c(v)), i(v) ? v : !1))
        : !1
    );
  }
  function s(e) {
    var t,
      n,
      i,
      o = {};
    for (
      void 0 === e.suffix && (e.suffix = e.postfix), t = 0;
      t < d.length;
      t += 1
    )
      if (((n = d[t]), (i = e[n]), void 0 === i))
        "negative" !== n || o.negativeBefore
          ? "mark" === n && "." !== o.thousand
            ? (o[n] = ".")
            : (o[n] = !1)
          : (o[n] = "-");
      else if ("decimals" === n) {
        if (!(i >= 0 && 8 > i)) throw new Error(n);
        o[n] = i;
      } else if (
        "encoder" === n ||
        "decoder" === n ||
        "edit" === n ||
        "undo" === n
      ) {
        if ("function" != typeof i) throw new Error(n);
        o[n] = i;
      } else {
        if ("string" != typeof i) throw new Error(n);
        o[n] = i;
      }
    return (
      r(o, "mark", "thousand"),
      r(o, "prefix", "negative"),
      r(o, "prefix", "negativeBefore"),
      o
    );
  }
  function c(e, t, n) {
    var r,
      i = [];
    for (r = 0; r < d.length; r += 1) i.push(e[d[r]]);
    return i.push(n), t.apply("", i);
  }
  function a(e) {
    return this instanceof a
      ? void (
          "object" == typeof e &&
          ((e = s(e)),
          (this.to = function (t) {
            return c(e, f, t);
          }),
          (this.from = function (t) {
            return c(e, u, t);
          }))
        )
      : new a(e);
  }
  var d = [
    "decimals",
    "thousand",
    "mark",
    "prefix",
    "suffix",
    "encoder",
    "decoder",
    "negativeBefore",
    "negative",
    "edit",
    "undo",
  ];
  return a;
});

/*! FitVids 1.0.3 */

!(function (t) {
  "use strict";
  t.fn.fitVids = function (e) {
    var i = { customSelector: null };
    if (!document.getElementById("fit-vids-style")) {
      var r = document.createElement("div"),
        a =
          document.getElementsByTagName("base")[0] ||
          document.getElementsByTagName("script")[0],
        o =
          "&shy;<style>.fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}</style>";
      (r.className = "fit-vids-style"),
        (r.id = "fit-vids-style"),
        (r.style.display = "none"),
        (r.innerHTML = o),
        a.parentNode.insertBefore(r, a);
    }
    return (
      e && t.extend(i, e),
      this.each(function () {
        var e = [
          "iframe[src*='player.vimeo.com']",
          "iframe[src*='youtube.com']",
          "iframe[src*='youtube-nocookie.com']",
          "iframe[src*='kickstarter.com'][src*='video.html']",
          "object",
          "embed",
        ];
        i.customSelector && e.push(i.customSelector);
        var r = t(this).find(e.join(","));
        (r = r.not("object object")),
          r.each(function () {
            var e = t(this);
            if (
              !(
                ("embed" === this.tagName.toLowerCase() &&
                  e.parent("object").length) ||
                e.parent(".fluid-width-video-wrapper").length
              )
            ) {
              var i =
                  "object" === this.tagName.toLowerCase() ||
                  (e.attr("height") && !isNaN(parseInt(e.attr("height"), 10)))
                    ? parseInt(e.attr("height"), 10)
                    : e.height(),
                r = isNaN(parseInt(e.attr("width"), 10))
                  ? e.width()
                  : parseInt(e.attr("width"), 10),
                a = i / r;
              if (!e.attr("id")) {
                var o = "fitvid" + Math.floor(999999 * Math.random());
                e.attr("id", o);
              }
              e
                .wrap('<div class="fluid-width-video-wrapper"></div>')
                .parent(".fluid-width-video-wrapper")
                .css("padding-top", 100 * a + "%"),
                e.removeAttr("height").removeAttr("width");
            }
          });
      })
    );
  };
})(window.jQuery || window.Zepto);

/*! Tooltip */

!(function (a) {
  "use strict";
  function b(b) {
    return (
      (h.formatter = d),
      a(this)
        .not(".tipper-attached")
        .addClass("tipper-attached")
        .on("mouseenter.tipper", a.extend({}, h, b || {}), c)
    );
  }
  function c(b) {
    g = a("body");
    var c = a(this),
      d = a.extend(!0, {}, b.data, c.data("tipper-options")),
      h = "";
    (h += '<div class="tipper ' + d.direction + '">'),
      (h += '<div class="tipper-content">'),
      (h += d.formatter.apply(g, [c])),
      (h += '<span class="tipper-caret"</span>'),
      (h += "</div>"),
      (h += "</div>"),
      (d.$target = c),
      (d.$tipper = a(h)),
      g.append(d.$tipper),
      (d.$content = d.$tipper.find(".tipper-content")),
      (d.$caret = d.$tipper.find(".tipper-caret")),
      (d.offset = c.offset()),
      (d.height = c.outerHeight()),
      (d.width = c.outerWidth()),
      (d.tipperPos = {}),
      (d.caretPos = {}),
      (d.contentPos = {});
    var i = d.$caret.outerHeight(!0),
      j = d.$caret.outerWidth(!0),
      k = d.$content.outerHeight(!0),
      l = d.$content.outerWidth(!0) + j;
    "right" === d.direction || "left" === d.direction
      ? ((d.caretPos.top = (k - i) / 2),
        (d.contentPos.top = -k / 2),
        "right" === d.direction
          ? (d.contentPos.left = j + d.margin)
          : "left" === d.direction && (d.contentPos.left = -(l + d.margin)))
      : ((d.caretPos.left = (l - j) / 2),
        (d.contentPos.left = -l / 2),
        "bottom" === d.direction
          ? (d.contentPos.top = d.margin)
          : "top" === d.direction && (d.contentPos.top = -(k + d.margin))),
      d.$content.css(d.contentPos),
      d.$caret.css(d.caretPos),
      d.follow
        ? d.$target.on("mousemove.tipper", d, e).trigger("mousemove")
        : ("right" === d.direction || "left" === d.direction
            ? ((d.tipperPos.top = d.offset.top + d.height / 2),
              "right" === d.direction
                ? (d.tipperPos.left = d.offset.left + d.width)
                : "left" === d.direction && (d.tipperPos.left = d.offset.left))
            : ((d.tipperPos.left = d.offset.left + d.width / 2),
              "bottom" === d.direction
                ? (d.tipperPos.top = d.offset.top + d.height)
                : "top" === d.direction && (d.tipperPos.top = d.offset.top)),
          d.$tipper.css(d.tipperPos)),
      d.$target.one("mouseleave.tipper", d, f);
  }
  function d(a) {
    return a.data("title");
  }
  function e(a) {
    var b = a.data;
    b.$tipper.css({ left: a.pageX, top: a.pageY });
  }
  function f(a) {
    var b = a.data;
    b.$tipper.remove(), b.$target.off("mousemove.tipper mouseleave.tipper");
  }
  var g,
    h = { direction: "top", follow: !1, formatter: a.noop, margin: 15 },
    i = {
      defaults: function (b) {
        return (h = a.extend(h, b || {})), a(this);
      },
      destroy: function () {
        return a(this)
          .trigger("mouseleave.tipper")
          .off(".tipper")
          .removeClass("tipper-attached");
      },
    };
  (a.fn.tipper = function (a) {
    return i[a]
      ? i[a].apply(this, Array.prototype.slice.call(arguments, 1))
      : "object" != typeof a && a
      ? this
      : b.apply(this, arguments);
  }),
    (a.tipper = function (a) {
      "defaults" === a &&
        i.defaults.apply(this, Array.prototype.slice.call(arguments, 1));
    });
})(jQuery);

/*! counterUp */

!(function (t) {
  "use strict";
  t.fn.counterUp = function (e) {
    var a,
      n = t.extend(
        {
          time: 400,
          delay: 10,
          formatter: !1,
          context: "window",
          callback: function () {},
        },
        e
      );
    return this.each(function () {
      var e = t(this),
        u = {
          time: t(this).data("counterup-time") || n.time,
          delay: t(this).data("counterup-delay") || n.delay,
          context: n.context,
        },
        r = function () {
          var t = [],
            r = u.time / u.delay,
            o = e.text(),
            c = /[0-9]+,[0-9]+/.test(o);
          o = o.replace(/,/g, "");
          var i = (o.split(".")[1] || []).length,
            l = /[0-9]+:[0-9]+:[0-9]+/.test(o);
          if (l) {
            var s = o.split(":"),
              d = 1;
            for (a = 0; s.length > 0; )
              (a += d * parseInt(s.pop(), 10)), (d *= 60);
          }
          for (var f = r; f >= 1; f--) {
            var p = parseFloat((o / r) * f).toFixed(i);
            if (l) {
              p = parseInt((a / r) * f);
              var m = parseInt(p / 3600) % 24,
                h = parseInt(p / 60) % 60,
                v = parseInt(p % 60, 10);
              p =
                (m < 10 ? "0" + m : m) +
                ":" +
                (h < 10 ? "0" + h : h) +
                ":" +
                (v < 10 ? "0" + v : v);
            }
            if (c)
              for (; /(\d+)(\d{3})/.test(p.toString()); )
                p = p.toString().replace(/(\d+)(\d{3})/, "$1,$2");
            n.formatter && (p = n.formatter.call(this, p)), t.unshift(p);
          }
          e.data("counterup-nums", t), e.text("0");
          var y = function () {
            return e.data("counterup-nums")
              ? (e.html(e.data("counterup-nums").shift()),
                void (e.data("counterup-nums").length
                  ? setTimeout(e.data("counterup-func"), u.delay)
                  : (e.data("counterup-nums", null),
                    e.data("counterup-func", null),
                    n.callback.call(this))))
              : void n.callback.call(this);
          };
          e.data("counterup-func", y),
            setTimeout(e.data("counterup-func"), u.delay);
        };
      e.waypoint(
        function (t) {
          r(), this.destroy();
        },
        { offset: "100%", context: u.context }
      );
    });
  };
})(jQuery);

/*! Waypoints */

!(function () {
  "use strict";
  function t(o) {
    if (!o) throw new Error("No options passed to Waypoint constructor");
    if (!o.element)
      throw new Error("No element option passed to Waypoint constructor");
    if (!o.handler)
      throw new Error("No handler option passed to Waypoint constructor");
    (this.key = "waypoint-" + e),
      (this.options = t.Adapter.extend({}, t.defaults, o)),
      (this.element = this.options.element),
      (this.adapter = new t.Adapter(this.element)),
      (this.callback = o.handler),
      (this.axis = this.options.horizontal ? "horizontal" : "vertical"),
      (this.enabled = this.options.enabled),
      (this.triggerPoint = null),
      (this.group = t.Group.findOrCreate({
        name: this.options.group,
        axis: this.axis,
      })),
      (this.context = t.Context.findOrCreateByElement(this.options.context)),
      t.offsetAliases[this.options.offset] &&
        (this.options.offset = t.offsetAliases[this.options.offset]),
      this.group.add(this),
      this.context.add(this),
      (i[this.key] = this),
      (e += 1);
  }
  var e = 0,
    i = {};
  (t.prototype.queueTrigger = function (t) {
    this.group.queueTrigger(this, t);
  }),
    (t.prototype.trigger = function (t) {
      this.enabled && this.callback && this.callback.apply(this, t);
    }),
    (t.prototype.destroy = function () {
      this.context.remove(this), this.group.remove(this), delete i[this.key];
    }),
    (t.prototype.disable = function () {
      return (this.enabled = !1), this;
    }),
    (t.prototype.enable = function () {
      return this.context.refresh(), (this.enabled = !0), this;
    }),
    (t.prototype.next = function () {
      return this.group.next(this);
    }),
    (t.prototype.previous = function () {
      return this.group.previous(this);
    }),
    (t.invokeAll = function (t) {
      var e = [];
      for (var o in i) e.push(i[o]);
      for (var n = 0, r = e.length; r > n; n++) e[n][t]();
    }),
    (t.destroyAll = function () {
      t.invokeAll("destroy");
    }),
    (t.disableAll = function () {
      t.invokeAll("disable");
    }),
    (t.enableAll = function () {
      t.Context.refreshAll();
      for (var e in i) i[e].enabled = !0;
      return this;
    }),
    (t.refreshAll = function () {
      t.Context.refreshAll();
    }),
    (t.viewportHeight = function () {
      return window.innerHeight || document.documentElement.clientHeight;
    }),
    (t.viewportWidth = function () {
      return document.documentElement.clientWidth;
    }),
    (t.adapters = []),
    (t.defaults = {
      context: window,
      continuous: !0,
      enabled: !0,
      group: "default",
      horizontal: !1,
      offset: 0,
    }),
    (t.offsetAliases = {
      "bottom-in-view": function () {
        return this.context.innerHeight() - this.adapter.outerHeight();
      },
      "right-in-view": function () {
        return this.context.innerWidth() - this.adapter.outerWidth();
      },
    }),
    (window.Waypoint = t);
})(),
  (function () {
    "use strict";
    function t(t) {
      window.setTimeout(t, 1e3 / 60);
    }
    function e(t) {
      (this.element = t),
        (this.Adapter = n.Adapter),
        (this.adapter = new this.Adapter(t)),
        (this.key = "waypoint-context-" + i),
        (this.didScroll = !1),
        (this.didResize = !1),
        (this.oldScroll = {
          x: this.adapter.scrollLeft(),
          y: this.adapter.scrollTop(),
        }),
        (this.waypoints = { vertical: {}, horizontal: {} }),
        (t.waypointContextKey = this.key),
        (o[t.waypointContextKey] = this),
        (i += 1),
        n.windowContext ||
          ((n.windowContext = !0), (n.windowContext = new e(window))),
        this.createThrottledScrollHandler(),
        this.createThrottledResizeHandler();
    }
    var i = 0,
      o = {},
      n = window.Waypoint,
      r = window.onload;
    (e.prototype.add = function (t) {
      var e = t.options.horizontal ? "horizontal" : "vertical";
      (this.waypoints[e][t.key] = t), this.refresh();
    }),
      (e.prototype.checkEmpty = function () {
        var t = this.Adapter.isEmptyObject(this.waypoints.horizontal),
          e = this.Adapter.isEmptyObject(this.waypoints.vertical),
          i = this.element == this.element.window;
        t && e && !i && (this.adapter.off(".waypoints"), delete o[this.key]);
      }),
      (e.prototype.createThrottledResizeHandler = function () {
        function t() {
          e.handleResize(), (e.didResize = !1);
        }
        var e = this;
        this.adapter.on("resize.waypoints", function () {
          e.didResize || ((e.didResize = !0), n.requestAnimationFrame(t));
        });
      }),
      (e.prototype.createThrottledScrollHandler = function () {
        function t() {
          e.handleScroll(), (e.didScroll = !1);
        }
        var e = this;
        this.adapter.on("scroll.waypoints", function () {
          (!e.didScroll || n.isTouch) &&
            ((e.didScroll = !0), n.requestAnimationFrame(t));
        });
      }),
      (e.prototype.handleResize = function () {
        n.Context.refreshAll();
      }),
      (e.prototype.handleScroll = function () {
        var t = {},
          e = {
            horizontal: {
              newScroll: this.adapter.scrollLeft(),
              oldScroll: this.oldScroll.x,
              forward: "right",
              backward: "left",
            },
            vertical: {
              newScroll: this.adapter.scrollTop(),
              oldScroll: this.oldScroll.y,
              forward: "down",
              backward: "up",
            },
          };
        for (var i in e) {
          var o = e[i],
            n = o.newScroll > o.oldScroll,
            r = n ? o.forward : o.backward;
          for (var s in this.waypoints[i]) {
            var a = this.waypoints[i][s];
            if (null !== a.triggerPoint) {
              var l = o.oldScroll < a.triggerPoint,
                h = o.newScroll >= a.triggerPoint,
                p = l && h,
                u = !l && !h;
              (p || u) && (a.queueTrigger(r), (t[a.group.id] = a.group));
            }
          }
        }
        for (var c in t) t[c].flushTriggers();
        this.oldScroll = { x: e.horizontal.newScroll, y: e.vertical.newScroll };
      }),
      (e.prototype.innerHeight = function () {
        return this.element == this.element.window
          ? n.viewportHeight()
          : this.adapter.innerHeight();
      }),
      (e.prototype.remove = function (t) {
        delete this.waypoints[t.axis][t.key], this.checkEmpty();
      }),
      (e.prototype.innerWidth = function () {
        return this.element == this.element.window
          ? n.viewportWidth()
          : this.adapter.innerWidth();
      }),
      (e.prototype.destroy = function () {
        var t = [];
        for (var e in this.waypoints)
          for (var i in this.waypoints[e]) t.push(this.waypoints[e][i]);
        for (var o = 0, n = t.length; n > o; o++) t[o].destroy();
      }),
      (e.prototype.refresh = function () {
        var t,
          e = this.element == this.element.window,
          i = e ? void 0 : this.adapter.offset(),
          o = {};
        this.handleScroll(),
          (t = {
            horizontal: {
              contextOffset: e ? 0 : i.left,
              contextScroll: e ? 0 : this.oldScroll.x,
              contextDimension: this.innerWidth(),
              oldScroll: this.oldScroll.x,
              forward: "right",
              backward: "left",
              offsetProp: "left",
            },
            vertical: {
              contextOffset: e ? 0 : i.top,
              contextScroll: e ? 0 : this.oldScroll.y,
              contextDimension: this.innerHeight(),
              oldScroll: this.oldScroll.y,
              forward: "down",
              backward: "up",
              offsetProp: "top",
            },
          });
        for (var r in t) {
          var s = t[r];
          for (var a in this.waypoints[r]) {
            var l,
              h,
              p,
              u,
              c,
              d = this.waypoints[r][a],
              f = d.options.offset,
              w = d.triggerPoint,
              y = 0,
              g = null == w;
            d.element !== d.element.window &&
              (y = d.adapter.offset()[s.offsetProp]),
              "function" == typeof f
                ? (f = f.apply(d))
                : "string" == typeof f &&
                  ((f = parseFloat(f)),
                  d.options.offset.indexOf("%") > -1 &&
                    (f = Math.ceil((s.contextDimension * f) / 100))),
              (l = s.contextScroll - s.contextOffset),
              (d.triggerPoint = Math.floor(y + l - f)),
              (h = w < s.oldScroll),
              (p = d.triggerPoint >= s.oldScroll),
              (u = h && p),
              (c = !h && !p),
              !g && u
                ? (d.queueTrigger(s.backward), (o[d.group.id] = d.group))
                : !g && c
                ? (d.queueTrigger(s.forward), (o[d.group.id] = d.group))
                : g &&
                  s.oldScroll >= d.triggerPoint &&
                  (d.queueTrigger(s.forward), (o[d.group.id] = d.group));
          }
        }
        return (
          n.requestAnimationFrame(function () {
            for (var t in o) o[t].flushTriggers();
          }),
          this
        );
      }),
      (e.findOrCreateByElement = function (t) {
        return e.findByElement(t) || new e(t);
      }),
      (e.refreshAll = function () {
        for (var t in o) o[t].refresh();
      }),
      (e.findByElement = function (t) {
        return o[t.waypointContextKey];
      }),
      (window.onload = function () {
        r && r(), e.refreshAll();
      }),
      (n.requestAnimationFrame = function (e) {
        var i =
          window.requestAnimationFrame ||
          window.mozRequestAnimationFrame ||
          window.webkitRequestAnimationFrame ||
          t;
        i.call(window, e);
      }),
      (n.Context = e);
  })(),
  (function () {
    "use strict";
    function t(t, e) {
      return t.triggerPoint - e.triggerPoint;
    }
    function e(t, e) {
      return e.triggerPoint - t.triggerPoint;
    }
    function i(t) {
      (this.name = t.name),
        (this.axis = t.axis),
        (this.id = this.name + "-" + this.axis),
        (this.waypoints = []),
        this.clearTriggerQueues(),
        (o[this.axis][this.name] = this);
    }
    var o = { vertical: {}, horizontal: {} },
      n = window.Waypoint;
    (i.prototype.add = function (t) {
      this.waypoints.push(t);
    }),
      (i.prototype.clearTriggerQueues = function () {
        this.triggerQueues = { up: [], down: [], left: [], right: [] };
      }),
      (i.prototype.flushTriggers = function () {
        for (var i in this.triggerQueues) {
          var o = this.triggerQueues[i],
            n = "up" === i || "left" === i;
          o.sort(n ? e : t);
          for (var r = 0, s = o.length; s > r; r += 1) {
            var a = o[r];
            (a.options.continuous || r === o.length - 1) && a.trigger([i]);
          }
        }
        this.clearTriggerQueues();
      }),
      (i.prototype.next = function (e) {
        this.waypoints.sort(t);
        var i = n.Adapter.inArray(e, this.waypoints),
          o = i === this.waypoints.length - 1;
        return o ? null : this.waypoints[i + 1];
      }),
      (i.prototype.previous = function (e) {
        this.waypoints.sort(t);
        var i = n.Adapter.inArray(e, this.waypoints);
        return i ? this.waypoints[i - 1] : null;
      }),
      (i.prototype.queueTrigger = function (t, e) {
        this.triggerQueues[e].push(t);
      }),
      (i.prototype.remove = function (t) {
        var e = n.Adapter.inArray(t, this.waypoints);
        e > -1 && this.waypoints.splice(e, 1);
      }),
      (i.prototype.first = function () {
        return this.waypoints[0];
      }),
      (i.prototype.last = function () {
        return this.waypoints[this.waypoints.length - 1];
      }),
      (i.findOrCreate = function (t) {
        return o[t.axis][t.name] || new i(t);
      }),
      (n.Group = i);
  })(),
  (function () {
    "use strict";
    function t(t) {
      this.$element = e(t);
    }
    var e = window.jQuery,
      i = window.Waypoint;
    e.each(
      [
        "innerHeight",
        "innerWidth",
        "off",
        "offset",
        "on",
        "outerHeight",
        "outerWidth",
        "scrollLeft",
        "scrollTop",
      ],
      function (e, i) {
        t.prototype[i] = function () {
          var t = Array.prototype.slice.call(arguments);
          return this.$element[i].apply(this.$element, t);
        };
      }
    ),
      e.each(["extend", "inArray", "isEmptyObject"], function (i, o) {
        t[o] = e[o];
      }),
      i.adapters.push({ name: "jquery", Adapter: t }),
      (i.Adapter = t);
  })(),
  (function () {
    "use strict";
    function t(t) {
      return function () {
        var i = [],
          o = arguments[0];
        return (
          t.isFunction(arguments[0]) &&
            ((o = t.extend({}, arguments[1])), (o.handler = arguments[0])),
          this.each(function () {
            var n = t.extend({}, o, { element: this });
            "string" == typeof n.context &&
              (n.context = t(this).closest(n.context)[0]),
              i.push(new e(n));
          }),
          i
        );
      };
    }
    var e = window.Waypoint;
    window.jQuery && (window.jQuery.fn.waypoint = t(window.jQuery)),
      window.Zepto && (window.Zepto.fn.waypoint = t(window.Zepto));
  })();

/*! scrollReveal */

window.scrollReveal = (function (t) {
  "use strict";
  function e(e) {
    (this.docElem = t.document.documentElement),
      (this.options = this.extend(this.defaults, e)),
      (this.styleBank = {}),
      1 == this.options.init && this.init();
  }
  var i = 1,
    o = (function () {
      return (
        t.requestAnimationFrame ||
        t.webkitRequestAnimationFrame ||
        t.mozRequestAnimationFrame ||
        function (e) {
          t.setTimeout(e, 1e3 / 60);
        }
      );
    })();
  return (
    (e.prototype = {
      defaults: {
        after: "0s",
        enter: "bottom",
        move: "24px",
        over: "0.66s",
        easing: "ease-in-out",
        opacity: 0,
        viewportFactor: 0.33,
        reset: !1,
        init: !0,
      },
      init: function () {
        this.scrolled = !1;
        var e = this;
        (this.elems = Array.prototype.slice.call(
          this.docElem.querySelectorAll("[data-scroll-reveal]")
        )),
          this.elems.forEach(function (t, o) {
            var r = t.getAttribute("data-scroll-reveal-id");
            r || ((r = i++), t.setAttribute("data-scroll-reveal-id", r)),
              e.styleBank[r] || (e.styleBank[r] = t.getAttribute("style")),
              e.update(t);
          });
        var r = function (t) {
            e.scrolled ||
              ((e.scrolled = !0),
              o(function () {
                e._scrollPage();
              }));
          },
          n = function () {
            function t() {
              e._scrollPage(), (e.resizeTimeout = null);
            }
            e.resizeTimeout && clearTimeout(e.resizeTimeout),
              (e.resizeTimeout = setTimeout(t, 200));
          };
        t.addEventListener("scroll", r, !1),
          t.addEventListener("resize", n, !1);
      },
      _scrollPage: function () {
        var t = this;
        this.elems.forEach(function (e, i) {
          t.update(e);
        }),
          (this.scrolled = !1);
      },
      parseLanguage: function (t) {
        function e(t) {
          var e = [],
            i = ["from", "the", "and", "then", "but", "with"];
          return (
            t.forEach(function (t, o) {
              i.indexOf(t) > -1 || e.push(t);
            }),
            e
          );
        }
        var i = t.getAttribute("data-scroll-reveal").split(/[, ]+/),
          o = {};
        return (
          (i = e(i)),
          i.forEach(function (t, e) {
            switch (t) {
              case "enter":
                return void (o.enter = i[e + 1]);
              case "after":
                return void (o.after = i[e + 1]);
              case "wait":
                return void (o.after = i[e + 1]);
              case "move":
                return void (o.move = i[e + 1]);
              case "ease":
                return (o.move = i[e + 1]), void (o.ease = "ease");
              case "ease-in":
                return (o.move = i[e + 1]), void (o.easing = "ease-in");
              case "ease-in-out":
                return (o.move = i[e + 1]), void (o.easing = "ease-in-out");
              case "ease-out":
                return (o.move = i[e + 1]), void (o.easing = "ease-out");
              case "over":
                return void (o.over = i[e + 1]);
              default:
                return;
            }
          }),
          o
        );
      },
      update: function (t) {
        var e = this.genCSS(t),
          i = this.styleBank[t.getAttribute("data-scroll-reveal-id")];
        return (
          null != i ? (i += ";") : (i = ""),
          t.getAttribute("data-scroll-reveal-initialized") ||
            (t.setAttribute("style", i + e.initial),
            t.setAttribute("data-scroll-reveal-initialized", !0)),
          this.isElementInViewport(t, this.options.viewportFactor)
            ? t.getAttribute("data-scroll-reveal-complete")
              ? void 0
              : this.isElementInViewport(t, this.options.viewportFactor)
              ? (t.setAttribute("style", i + e.target + e.transition),
                void (
                  this.options.reset ||
                  setTimeout(function () {
                    "" != i
                      ? t.setAttribute("style", i)
                      : t.removeAttribute("style"),
                      t.setAttribute("data-scroll-reveal-complete", !0);
                  }, e.totalDuration)
                ))
              : void 0
            : void (
                this.options.reset &&
                t.setAttribute("style", i + e.initial + e.reset)
              )
        );
      },
      genCSS: function (t) {
        var e,
          i,
          o = this.parseLanguage(t);
        o.enter
          ? (("top" == o.enter || "bottom" == o.enter) &&
              ((e = o.enter), (i = "y")),
            ("left" == o.enter || "right" == o.enter) &&
              ((e = o.enter), (i = "x")))
          : (("top" == this.options.enter || "bottom" == this.options.enter) &&
              ((e = this.options.enter), (i = "y")),
            ("left" == this.options.enter || "right" == this.options.enter) &&
              ((e = this.options.enter), (i = "x"))),
          ("top" == e || "left" == e) &&
            (o.move
              ? (o.move = "-" + o.move)
              : (o.move = "-" + this.options.move));
        var r = o.move || this.options.move,
          n = o.over || this.options.over,
          s = o.after || this.options.after,
          a = o.easing || this.options.easing,
          l = o.opacity || this.options.opacity,
          u =
            "-webkit-transition: -webkit-transform " +
            n +
            " " +
            a +
            " " +
            s +
            ",  opacity " +
            n +
            " " +
            a +
            " " +
            s +
            ";transition: transform " +
            n +
            " " +
            a +
            " " +
            s +
            ", opacity " +
            n +
            " " +
            a +
            " " +
            s +
            ";-webkit-perspective: 1000;-webkit-backface-visibility: hidden;",
          c =
            "-webkit-transition: -webkit-transform " +
            n +
            " " +
            a +
            " 0s,  opacity " +
            n +
            " " +
            a +
            " " +
            s +
            ";transition: transform " +
            n +
            " " +
            a +
            " 0s,  opacity " +
            n +
            " " +
            a +
            " " +
            s +
            ";-webkit-perspective: 1000;-webkit-backface-visibility: hidden;",
          f =
            "-webkit-transform: translate" +
            i +
            "(" +
            r +
            ");transform: translate" +
            i +
            "(" +
            r +
            ");opacity: " +
            l +
            ";",
          p =
            "-webkit-transform: translate" +
            i +
            "(0);transform: translate" +
            i +
            "(0);opacity: 1;";
        return {
          transition: u,
          initial: f,
          target: p,
          reset: c,
          totalDuration: 1e3 * (parseFloat(n) + parseFloat(s)),
        };
      },
      getViewportH: function () {
        var e = this.docElem.clientHeight,
          i = t.innerHeight;
        return i > e ? i : e;
      },
      getOffset: function (t) {
        var e = 0,
          i = 0;
        do
          isNaN(t.offsetTop) || (e += t.offsetTop),
            isNaN(t.offsetLeft) || (i += t.offsetLeft);
        while ((t = t.offsetParent));
        return { top: e, left: i };
      },
      isElementInViewport: function (e, i) {
        var o = t.pageYOffset,
          r = o + this.getViewportH(),
          n = e.offsetHeight,
          s = this.getOffset(e).top,
          a = s + n,
          i = i || 0;
        return (
          (r >= s + n * i && a >= o) ||
          "fixed" ==
            (e.currentStyle ? e.currentStyle : t.getComputedStyle(e, null))
              .position
        );
      },
      extend: function (t, e) {
        for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
        return t;
      },
    }),
    e
  );
})(window);

/*! typed */

(function (t, e) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = e())
    : "function" == typeof define && define.amd
    ? define([], e)
    : "object" == typeof exports
    ? (exports.Typed = e())
    : (t.Typed = e());
})(this, function () {
  return (function (t) {
    function e(n) {
      if (s[n]) return s[n].exports;
      var i = (s[n] = { exports: {}, id: n, loaded: !1 });
      return t[n].call(i.exports, i, i.exports, e), (i.loaded = !0), i.exports;
    }
    var s = {};
    return (e.m = t), (e.c = s), (e.p = ""), e(0);
  })([
    function (t, e, s) {
      "use strict";
      function n(t, e) {
        if (!(t instanceof e))
          throw new TypeError("Cannot call a class as a function");
      }
      Object.defineProperty(e, "__esModule", { value: !0 });
      var i = (function () {
          function t(t, e) {
            for (var s = 0; s < e.length; s++) {
              var n = e[s];
              (n.enumerable = n.enumerable || !1),
                (n.configurable = !0),
                "value" in n && (n.writable = !0),
                Object.defineProperty(t, n.key, n);
            }
          }
          return function (e, s, n) {
            return s && t(e.prototype, s), n && t(e, n), e;
          };
        })(),
        r = s(1),
        o = s(3),
        a = (function () {
          function t(e, s) {
            n(this, t), r.initializer.load(this, s, e), this.begin();
          }
          return (
            i(t, [
              {
                key: "toggle",
                value: function () {
                  this.pause.status ? this.start() : this.stop();
                },
              },
              {
                key: "stop",
                value: function () {
                  this.typingComplete ||
                    this.pause.status ||
                    (this.toggleBlinking(!0),
                    (this.pause.status = !0),
                    this.options.onStop(this.arrayPos, this));
                },
              },
              {
                key: "start",
                value: function () {
                  this.typingComplete ||
                    (this.pause.status &&
                      ((this.pause.status = !1),
                      this.pause.typewrite
                        ? this.typewrite(
                            this.pause.curString,
                            this.pause.curStrPos
                          )
                        : this.backspace(
                            this.pause.curString,
                            this.pause.curStrPos
                          ),
                      this.options.onStart(this.arrayPos, this)));
                },
              },
              {
                key: "destroy",
                value: function () {
                  this.reset(!1), this.options.onDestroy(this);
                },
              },
              {
                key: "reset",
                value: function () {
                  var t =
                    arguments.length <= 0 ||
                    void 0 === arguments[0] ||
                    arguments[0];
                  clearInterval(this.timeout),
                    this.replaceText(""),
                    this.cursor &&
                      this.cursor.parentNode &&
                      (this.cursor.parentNode.removeChild(this.cursor),
                      (this.cursor = null)),
                    (this.strPos = 0),
                    (this.arrayPos = 0),
                    (this.curLoop = 0),
                    t &&
                      (this.insertCursor(),
                      this.options.onReset(this),
                      this.begin());
                },
              },
              {
                key: "begin",
                value: function () {
                  var t = this;
                  (this.typingComplete = !1),
                    this.shuffleStringsIfNeeded(this),
                    this.insertCursor(),
                    this.bindInputFocusEvents && this.bindFocusEvents(),
                    (this.timeout = setTimeout(function () {
                      t.currentElContent && 0 !== t.currentElContent.length
                        ? t.backspace(
                            t.currentElContent,
                            t.currentElContent.length
                          )
                        : t.typewrite(
                            t.strings[t.sequence[t.arrayPos]],
                            t.strPos
                          );
                    }, this.startDelay));
                },
              },
              {
                key: "typewrite",
                value: function (t, e) {
                  var s = this;
                  this.fadeOut &&
                    this.el.classList.contains(this.fadeOutClass) &&
                    (this.el.classList.remove(this.fadeOutClass),
                    this.cursor &&
                      this.cursor.classList.remove(this.fadeOutClass));
                  var n = this.humanizer(this.typeSpeed),
                    i = 1;
                  return this.pause.status === !0
                    ? void this.setPauseStatus(t, e, !0)
                    : void (this.timeout = setTimeout(function () {
                        e = o.htmlParser.typeHtmlChars(t, e, s);
                        var n = 0,
                          r = t.substr(e);
                        if ("^" === r.charAt(0) && /^\^\d+/.test(r)) {
                          var a = 1;
                          (r = /\d+/.exec(r)[0]),
                            (a += r.length),
                            (n = parseInt(r)),
                            (s.temporaryPause = !0),
                            s.options.onTypingPaused(s.arrayPos, s),
                            (t = t.substring(0, e) + t.substring(e + a)),
                            s.toggleBlinking(!0);
                        }
                        if ("`" === r.charAt(0)) {
                          for (
                            ;
                            "`" !== t.substr(e + i).charAt(0) &&
                            (i++, !(e + i > t.length));

                          );
                          var u = t.substring(0, e),
                            l = t.substring(u.length + 1, e + i),
                            c = t.substring(e + i + 1);
                          (t = u + l + c), i--;
                        }
                        s.timeout = setTimeout(function () {
                          s.toggleBlinking(!1),
                            e === t.length
                              ? s.doneTyping(t, e)
                              : s.keepTyping(t, e, i),
                            s.temporaryPause &&
                              ((s.temporaryPause = !1),
                              s.options.onTypingResumed(s.arrayPos, s));
                        }, n);
                      }, n));
                },
              },
              {
                key: "keepTyping",
                value: function (t, e, s) {
                  0 === e &&
                    (this.toggleBlinking(!1),
                    this.options.preStringTyped(this.arrayPos, this)),
                    (e += s);
                  var n = t.substr(0, e);
                  this.replaceText(n), this.typewrite(t, e);
                },
              },
              {
                key: "doneTyping",
                value: function (t, e) {
                  var s = this;
                  this.options.onStringTyped(this.arrayPos, this),
                    this.toggleBlinking(!0),
                    (this.arrayPos === this.strings.length - 1 &&
                      (this.complete(),
                      this.loop === !1 || this.curLoop === this.loopCount)) ||
                      (this.timeout = setTimeout(function () {
                        s.backspace(t, e);
                      }, this.backDelay));
                },
              },
              {
                key: "backspace",
                value: function (t, e) {
                  var s = this;
                  if (this.pause.status === !0)
                    return void this.setPauseStatus(t, e, !0);
                  if (this.fadeOut) return this.initFadeOut();
                  this.toggleBlinking(!1);
                  var n = this.humanizer(this.backSpeed);
                  this.timeout = setTimeout(function () {
                    e = o.htmlParser.backSpaceHtmlChars(t, e, s);
                    var n = t.substr(0, e);
                    if ((s.replaceText(n), s.smartBackspace)) {
                      var i = s.strings[s.arrayPos + 1];
                      i && n === i.substr(0, e)
                        ? (s.stopNum = e)
                        : (s.stopNum = 0);
                    }
                    e > s.stopNum
                      ? (e--, s.backspace(t, e))
                      : e <= s.stopNum &&
                        (s.arrayPos++,
                        s.arrayPos === s.strings.length
                          ? ((s.arrayPos = 0),
                            s.options.onLastStringBackspaced(),
                            s.shuffleStringsIfNeeded(),
                            s.begin())
                          : s.typewrite(s.strings[s.sequence[s.arrayPos]], e));
                  }, n);
                },
              },
              {
                key: "complete",
                value: function () {
                  this.options.onComplete(this),
                    this.loop ? this.curLoop++ : (this.typingComplete = !0);
                },
              },
              {
                key: "setPauseStatus",
                value: function (t, e, s) {
                  (this.pause.typewrite = s),
                    (this.pause.curString = t),
                    (this.pause.curStrPos = e);
                },
              },
              {
                key: "toggleBlinking",
                value: function (t) {
                  if (
                    this.cursor &&
                    !this.pause.status &&
                    this.cursorBlinking !== t
                  ) {
                    this.cursorBlinking = t;
                    var e = t ? "infinite" : 0;
                    this.cursor.style.animationIterationCount = e;
                  }
                },
              },
              {
                key: "humanizer",
                value: function (t) {
                  return Math.round((Math.random() * t) / 2) + t;
                },
              },
              {
                key: "shuffleStringsIfNeeded",
                value: function () {
                  this.shuffle &&
                    (this.sequence = this.sequence.sort(function () {
                      return Math.random() - 0.5;
                    }));
                },
              },
              {
                key: "initFadeOut",
                value: function () {
                  var t = this;
                  return (
                    (this.el.className += " " + this.fadeOutClass),
                    this.cursor &&
                      (this.cursor.className += " " + this.fadeOutClass),
                    setTimeout(function () {
                      t.arrayPos++,
                        t.replaceText(""),
                        t.strings.length > t.arrayPos
                          ? t.typewrite(t.strings[t.sequence[t.arrayPos]], 0)
                          : (t.typewrite(t.strings[0], 0), (t.arrayPos = 0));
                    }, this.fadeOutDelay)
                  );
                },
              },
              {
                key: "replaceText",
                value: function (t) {
                  this.attr
                    ? this.el.setAttribute(this.attr, t)
                    : this.isInput
                    ? (this.el.value = t)
                    : "html" === this.contentType
                    ? (this.el.innerHTML = t)
                    : (this.el.textContent = t);
                },
              },
              {
                key: "bindFocusEvents",
                value: function () {
                  var t = this;
                  this.isInput &&
                    (this.el.addEventListener("focus", function (e) {
                      t.stop();
                    }),
                    this.el.addEventListener("blur", function (e) {
                      (t.el.value && 0 !== t.el.value.length) || t.start();
                    }));
                },
              },
              {
                key: "insertCursor",
                value: function () {
                  this.showCursor &&
                    (this.cursor ||
                      ((this.cursor = document.createElement("span")),
                      (this.cursor.className = "typed-cursor"),
                      (this.cursor.innerHTML = this.cursorChar),
                      this.el.parentNode &&
                        this.el.parentNode.insertBefore(
                          this.cursor,
                          this.el.nextSibling
                        )));
                },
              },
            ]),
            t
          );
        })();
      (e["default"] = a), (t.exports = e["default"]);
    },
    function (t, e, s) {
      "use strict";
      function n(t) {
        return t && t.__esModule ? t : { default: t };
      }
      function i(t, e) {
        if (!(t instanceof e))
          throw new TypeError("Cannot call a class as a function");
      }
      Object.defineProperty(e, "__esModule", { value: !0 });
      var r =
          Object.assign ||
          function (t) {
            for (var e = 1; e < arguments.length; e++) {
              var s = arguments[e];
              for (var n in s)
                Object.prototype.hasOwnProperty.call(s, n) && (t[n] = s[n]);
            }
            return t;
          },
        o = (function () {
          function t(t, e) {
            for (var s = 0; s < e.length; s++) {
              var n = e[s];
              (n.enumerable = n.enumerable || !1),
                (n.configurable = !0),
                "value" in n && (n.writable = !0),
                Object.defineProperty(t, n.key, n);
            }
          }
          return function (e, s, n) {
            return s && t(e.prototype, s), n && t(e, n), e;
          };
        })(),
        a = s(2),
        u = n(a),
        l = (function () {
          function t() {
            i(this, t);
          }
          return (
            o(t, [
              {
                key: "load",
                value: function (t, e, s) {
                  if (
                    ("string" == typeof s
                      ? (t.el = document.querySelector(s))
                      : (t.el = s),
                    (t.options = r({}, u["default"], e)),
                    (t.isInput = "input" === t.el.tagName.toLowerCase()),
                    (t.attr = t.options.attr),
                    (t.bindInputFocusEvents = t.options.bindInputFocusEvents),
                    (t.showCursor = !t.isInput && t.options.showCursor),
                    (t.cursorChar = t.options.cursorChar),
                    (t.cursorBlinking = !0),
                    (t.elContent = t.attr
                      ? t.el.getAttribute(t.attr)
                      : t.el.textContent),
                    (t.contentType = t.options.contentType),
                    (t.typeSpeed = t.options.typeSpeed),
                    (t.startDelay = t.options.startDelay),
                    (t.backSpeed = t.options.backSpeed),
                    (t.smartBackspace = t.options.smartBackspace),
                    (t.backDelay = t.options.backDelay),
                    (t.fadeOut = t.options.fadeOut),
                    (t.fadeOutClass = t.options.fadeOutClass),
                    (t.fadeOutDelay = t.options.fadeOutDelay),
                    (t.isPaused = !1),
                    (t.strings = t.options.strings.map(function (t) {
                      return t.trim();
                    })),
                    "string" == typeof t.options.stringsElement
                      ? (t.stringsElement = document.querySelector(
                          t.options.stringsElement
                        ))
                      : (t.stringsElement = t.options.stringsElement),
                    t.stringsElement)
                  ) {
                    (t.strings = []), (t.stringsElement.style.display = "none");
                    var n = Array.prototype.slice.apply(
                        t.stringsElement.children
                      ),
                      i = !0,
                      o = !1,
                      a = void 0;
                    try {
                      for (
                        var l, c = n[Symbol.iterator]();
                        !(i = (l = c.next()).done);
                        i = !0
                      ) {
                        var p = l.value;
                        t.strings.push(p.innerHTML.trim());
                      }
                    } catch (h) {
                      (o = !0), (a = h);
                    } finally {
                      try {
                        !i && c["return"] && c["return"]();
                      } finally {
                        if (o) throw a;
                      }
                    }
                  }
                  (t.strPos = 0),
                    (t.arrayPos = 0),
                    (t.stopNum = 0),
                    (t.loop = t.options.loop),
                    (t.loopCount = t.options.loopCount),
                    (t.curLoop = 0),
                    (t.shuffle = t.options.shuffle),
                    (t.sequence = []),
                    (t.pause = {
                      status: !1,
                      typewrite: !0,
                      curString: "",
                      curStrPos: 0,
                    }),
                    (t.typingComplete = !1);
                  for (var f in t.strings) t.sequence[f] = f;
                  (t.currentElContent = this.getCurrentElContent(t)),
                    (t.autoInsertCss = t.options.autoInsertCss),
                    this.appendAnimationCss(t);
                },
              },
              {
                key: "getCurrentElContent",
                value: function (t) {
                  var e = "";
                  return (e = t.attr
                    ? t.el.getAttribute(t.attr)
                    : t.isInput
                    ? t.el.value
                    : "html" === t.contentType
                    ? t.el.innerHTML
                    : t.el.textContent);
                },
              },
              {
                key: "appendAnimationCss",
                value: function (t) {
                  if (t.autoInsertCss && t.showCursor && t.fadeOut) {
                    var e = document.createElement("style");
                    e.type = "text/css";
                    var s = "";
                    t.showCursor &&
                      (s +=
                        "\n        .typed-cursor{\n          opacity: 1;\n          animation: typedjsBlink 0.7s infinite;\n          -webkit-animation: typedjsBlink 0.7s infinite;\n                  animation: typedjsBlink 0.7s infinite;\n        }\n        @keyframes typedjsBlink{\n          50% { opacity: 0.0; }\n        }\n        @-webkit-keyframes typedjsBlink{\n          0% { opacity: 1; }\n          50% { opacity: 0.0; }\n          100% { opacity: 1; }\n        }\n      "),
                      t.fadeOut &&
                        (s +=
                          "\n        .typed-fade-out{\n          opacity: 0;\n          transition: opacity .25s;\n          -webkit-animation: 0;\n                  animation: 0;\n        }\n      "),
                      0 !== e.length &&
                        ((e.innerHTML = s), document.head.appendChild(e));
                  }
                },
              },
            ]),
            t
          );
        })();
      e["default"] = l;
      var c = new l();
      e.initializer = c;
    },
    function (t, e) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 });
      var s = {
        strings: [
          "These are the default values...",
          "You know what you should do?",
          "Use your own!",
          "Have a great day!",
        ],
        stringsElement: null,
        typeSpeed: 0,
        startDelay: 0,
        backSpeed: 0,
        smartBackspace: !0,
        shuffle: !1,
        backDelay: 700,
        fadeOut: !1,
        fadeOutClass: "typed-fade-out",
        fadeOutDelay: 500,
        loop: !1,
        loopCount: 1 / 0,
        showCursor: !0,
        cursorChar: "|",
        autoInsertCss: !0,
        attr: null,
        bindInputFocusEvents: !1,
        contentType: "html",
        onComplete: function (t) {},
        preStringTyped: function (t, e) {},
        onStringTyped: function (t, e) {},
        onLastStringBackspaced: function (t) {},
        onTypingPaused: function (t, e) {},
        onTypingResumed: function (t, e) {},
        onReset: function (t) {},
        onStop: function (t, e) {},
        onStart: function (t, e) {},
        onDestroy: function (t) {},
      };
      (e["default"] = s), (t.exports = e["default"]);
    },
    function (t, e) {
      "use strict";
      function s(t, e) {
        if (!(t instanceof e))
          throw new TypeError("Cannot call a class as a function");
      }
      Object.defineProperty(e, "__esModule", { value: !0 });
      var n = (function () {
          function t(t, e) {
            for (var s = 0; s < e.length; s++) {
              var n = e[s];
              (n.enumerable = n.enumerable || !1),
                (n.configurable = !0),
                "value" in n && (n.writable = !0),
                Object.defineProperty(t, n.key, n);
            }
          }
          return function (e, s, n) {
            return s && t(e.prototype, s), n && t(e, n), e;
          };
        })(),
        i = (function () {
          function t() {
            s(this, t);
          }
          return (
            n(t, [
              {
                key: "typeHtmlChars",
                value: function (t, e, s) {
                  if ("html" !== s.contentType) return e;
                  var n = t.substr(e).charAt(0);
                  if ("<" === n || "&" === n) {
                    var i = "";
                    for (
                      i = "<" === n ? ">" : ";";
                      t.substr(e + 1).charAt(0) !== i &&
                      (e++, !(e + 1 > t.length));

                    );
                    e++;
                  }
                  return e;
                },
              },
              {
                key: "backSpaceHtmlChars",
                value: function (t, e, s) {
                  if ("html" !== s.contentType) return e;
                  var n = t.substr(e).charAt(0);
                  if (">" === n || ";" === n) {
                    var i = "";
                    for (
                      i = ">" === n ? "<" : "&";
                      t.substr(e - 1).charAt(0) !== i && (e--, !(e < 0));

                    );
                    e--;
                  }
                  return e;
                },
              },
            ]),
            t
          );
        })();
      e["default"] = i;
      var r = new i();
      e.htmlParser = r;
    },
  ]);
});

/*! Parallax */

!(function (n) {
  var t = n(window),
    e = t.height();
  t.resize(function () {
    e = t.height();
  }),
    (n.fn.parallax = function (o, i, r) {
      function u() {
        var r = t.scrollTop();
        a.each(function () {
          var t = n(this),
            u = t.offset().top,
            c = h(t);
          r > u + c ||
            u > r + e ||
            a.css(
              "backgroundPosition",
              o + " " + Math.round((l - r) * i) + "px"
            );
        });
      }
      var h,
        l,
        a = n(this);
      a.each(function () {
        l = a.offset().top;
      }),
        (h = r
          ? function (n) {
              return n.outerHeight(!0);
            }
          : function (n) {
              return n.height();
            }),
        (arguments.length < 1 || null === o) && (o = "50%"),
        (arguments.length < 2 || null === i) && (i = 0.1),
        (arguments.length < 3 || null === r) && (r = !0),
        t.bind("scroll", u).resize(u),
        u();
    });
})(jQuery);

/*! Owl Carousel */

if (typeof Object.create !== "function") {
  Object.create = function (e) {
    function t() {}
    t.prototype = e;
    return new t();
  };
}
(function (e, t, n) {
  var r = {
    init: function (t, n) {
      var r = this;
      r.$elem = e(n);
      r.options = e.extend({}, e.fn.owlCarousel.options, r.$elem.data(), t);
      r.userOptions = t;
      r.loadContent();
    },
    loadContent: function () {
      function r(e) {
        var n,
          r = "";
        if (typeof t.options.jsonSuccess === "function") {
          t.options.jsonSuccess.apply(this, [e]);
        } else {
          for (n in e.owl) {
            if (e.owl.hasOwnProperty(n)) {
              r += e.owl[n].item;
            }
          }
          t.$elem.html(r);
        }
        t.logIn();
      }
      var t = this,
        n;
      if (typeof t.options.beforeInit === "function") {
        t.options.beforeInit.apply(this, [t.$elem]);
      }
      if (typeof t.options.jsonPath === "string") {
        n = t.options.jsonPath;
        e.getJSON(n, r);
      } else {
        t.logIn();
      }
    },
    logIn: function () {
      var e = this;
      e.$elem.data({
        "owl-originalStyles": e.$elem.attr("style"),
        "owl-originalClasses": e.$elem.attr("class"),
      });
      e.$elem.css({ opacity: 0 });
      e.orignalItems = e.options.items;
      e.checkBrowser();
      e.wrapperWidth = 0;
      e.checkVisible = null;
      e.setVars();
    },
    setVars: function () {
      var e = this;
      if (e.$elem.children().length === 0) {
        return false;
      }
      e.baseClass();
      e.eventTypes();
      e.$userItems = e.$elem.children();
      e.itemsAmount = e.$userItems.length;
      e.wrapItems();
      e.$owlItems = e.$elem.find(".owl-item");
      e.$owlWrapper = e.$elem.find(".owl-wrapper");
      e.playDirection = "next";
      e.prevItem = 0;
      e.prevArr = [0];
      e.currentItem = 0;
      e.customEvents();
      e.onStartup();
    },
    onStartup: function () {
      var e = this;
      e.updateItems();
      e.calculateAll();
      e.buildControls();
      e.updateControls();
      e.response();
      e.moveEvents();
      e.stopOnHover();
      e.owlStatus();
      if (e.options.transitionStyle !== false) {
        e.transitionTypes(e.options.transitionStyle);
      }
      if (e.options.autoPlay === true) {
        e.options.autoPlay = 5e3;
      }
      e.play();
      e.$elem.find(".owl-wrapper").css("display", "block");
      if (!e.$elem.is(":visible")) {
        e.watchVisibility();
      } else {
        e.$elem.css("opacity", 1);
      }
      e.onstartup = false;
      e.eachMoveUpdate();
      if (typeof e.options.afterInit === "function") {
        e.options.afterInit.apply(this, [e.$elem]);
      }
    },
    eachMoveUpdate: function () {
      var e = this;
      if (e.options.lazyLoad === true) {
        e.lazyLoad();
      }
      if (e.options.autoHeight === true) {
        e.autoHeight();
      }
      e.onVisibleItems();
      if (typeof e.options.afterAction === "function") {
        e.options.afterAction.apply(this, [e.$elem]);
      }
    },
    updateVars: function () {
      var e = this;
      if (typeof e.options.beforeUpdate === "function") {
        e.options.beforeUpdate.apply(this, [e.$elem]);
      }
      e.watchVisibility();
      e.updateItems();
      e.calculateAll();
      e.updatePosition();
      e.updateControls();
      e.eachMoveUpdate();
      if (typeof e.options.afterUpdate === "function") {
        e.options.afterUpdate.apply(this, [e.$elem]);
      }
    },
    reload: function () {
      var e = this;
      t.setTimeout(function () {
        e.updateVars();
      }, 0);
    },
    watchVisibility: function () {
      var e = this;
      if (e.$elem.is(":visible") === false) {
        e.$elem.css({ opacity: 0 });
        t.clearInterval(e.autoPlayInterval);
        t.clearInterval(e.checkVisible);
      } else {
        return false;
      }
      e.checkVisible = t.setInterval(function () {
        if (e.$elem.is(":visible")) {
          e.reload();
          e.$elem.animate({ opacity: 1 }, 200);
          t.clearInterval(e.checkVisible);
        }
      }, 500);
    },
    wrapItems: function () {
      var e = this;
      e.$userItems
        .wrapAll('<div class="owl-wrapper">')
        .wrap('<div class="owl-item"></div>');
      e.$elem.find(".owl-wrapper").wrap('<div class="owl-wrapper-outer">');
      e.wrapperOuter = e.$elem.find(".owl-wrapper-outer");
      e.$elem.css("display", "block");
    },
    baseClass: function () {
      var e = this,
        t = e.$elem.hasClass(e.options.baseClass),
        n = e.$elem.hasClass(e.options.theme);
      if (!t) {
        e.$elem.addClass(e.options.baseClass);
      }
      if (!n) {
        e.$elem.addClass(e.options.theme);
      }
    },
    updateItems: function () {
      var t = this,
        n,
        r;
      if (t.options.responsive === false) {
        return false;
      }
      if (t.options.singleItem === true) {
        t.options.items = t.orignalItems = 1;
        t.options.itemsCustom = false;
        t.options.itemsDesktop = false;
        t.options.itemsDesktopSmall = false;
        t.options.itemsTablet = false;
        t.options.itemsTabletSmall = false;
        t.options.itemsMobile = false;
        return false;
      }
      n = e(t.options.responsiveBaseWidth).width();
      if (n > (t.options.itemsDesktop[0] || t.orignalItems)) {
        t.options.items = t.orignalItems;
      }
      if (t.options.itemsCustom !== false) {
        t.options.itemsCustom.sort(function (e, t) {
          return e[0] - t[0];
        });
        for (r = 0; r < t.options.itemsCustom.length; r += 1) {
          if (t.options.itemsCustom[r][0] <= n) {
            t.options.items = t.options.itemsCustom[r][1];
          }
        }
      } else {
        if (
          n <= t.options.itemsDesktop[0] &&
          t.options.itemsDesktop !== false
        ) {
          t.options.items = t.options.itemsDesktop[1];
        }
        if (
          n <= t.options.itemsDesktopSmall[0] &&
          t.options.itemsDesktopSmall !== false
        ) {
          t.options.items = t.options.itemsDesktopSmall[1];
        }
        if (n <= t.options.itemsTablet[0] && t.options.itemsTablet !== false) {
          t.options.items = t.options.itemsTablet[1];
        }
        if (
          n <= t.options.itemsTabletSmall[0] &&
          t.options.itemsTabletSmall !== false
        ) {
          t.options.items = t.options.itemsTabletSmall[1];
        }
        if (n <= t.options.itemsMobile[0] && t.options.itemsMobile !== false) {
          t.options.items = t.options.itemsMobile[1];
        }
      }
      if (t.options.items > t.itemsAmount && t.options.itemsScaleUp === true) {
        t.options.items = t.itemsAmount;
      }
    },
    response: function () {
      var n = this,
        r,
        i;
      if (n.options.responsive !== true) {
        return false;
      }
      i = e(t).width();
      n.resizer = function () {
        if (e(t).width() !== i) {
          if (n.options.autoPlay !== false) {
            t.clearInterval(n.autoPlayInterval);
          }
          t.clearTimeout(r);
          r = t.setTimeout(function () {
            i = e(t).width();
            n.updateVars();
          }, n.options.responsiveRefreshRate);
        }
      };
      e(t).resize(n.resizer);
    },
    updatePosition: function () {
      var e = this;
      e.jumpTo(e.currentItem);
      if (e.options.autoPlay !== false) {
        e.checkAp();
      }
    },
    appendItemsSizes: function () {
      var t = this,
        n = 0,
        r = t.itemsAmount - t.options.items;
      t.$owlItems.each(function (i) {
        var s = e(this);
        s.css({ width: t.itemWidth }).data("owl-item", Number(i));
        if (i % t.options.items === 0 || i === r) {
          if (!(i > r)) {
            n += 1;
          }
        }
        s.data("owl-roundPages", n);
      });
    },
    appendWrapperSizes: function () {
      var e = this,
        t = e.$owlItems.length * e.itemWidth;
      e.$owlWrapper.css({ width: t * 2, left: 0 });
      e.appendItemsSizes();
    },
    calculateAll: function () {
      var e = this;
      e.calculateWidth();
      e.appendWrapperSizes();
      e.loops();
      e.max();
    },
    calculateWidth: function () {
      var e = this;
      e.itemWidth = Math.round(e.$elem.width() / e.options.items);
    },
    max: function () {
      var e = this,
        t = (e.itemsAmount * e.itemWidth - e.options.items * e.itemWidth) * -1;
      if (e.options.items > e.itemsAmount) {
        e.maximumItem = 0;
        t = 0;
        e.maximumPixels = 0;
      } else {
        e.maximumItem = e.itemsAmount - e.options.items;
        e.maximumPixels = t;
      }
      return t;
    },
    min: function () {
      return 0;
    },
    loops: function () {
      var t = this,
        n = 0,
        r = 0,
        i,
        s,
        o;
      t.positionsInArray = [0];
      t.pagesInArray = [];
      for (i = 0; i < t.itemsAmount; i += 1) {
        r += t.itemWidth;
        t.positionsInArray.push(-r);
        if (t.options.scrollPerPage === true) {
          s = e(t.$owlItems[i]);
          o = s.data("owl-roundPages");
          if (o !== n) {
            t.pagesInArray[n] = t.positionsInArray[i];
            n = o;
          }
        }
      }
    },
    buildControls: function () {
      var t = this;
      if (t.options.navigation === true || t.options.pagination === true) {
        t.owlControls = e('<div class="owl-controls"/>')
          .toggleClass("clickable", !t.browser.isTouch)
          .appendTo(t.$elem);
      }
      if (t.options.pagination === true) {
        t.buildPagination();
      }
      if (t.options.navigation === true) {
        t.buildButtons();
      }
    },
    buildButtons: function () {
      var t = this,
        n = e('<div class="owl-buttons"/>');
      t.owlControls.append(n);
      t.buttonPrev = e("<div/>", {
        class: "owl-prev",
        html: t.options.navigationText[0] || "",
      });
      t.buttonNext = e("<div/>", {
        class: "owl-next",
        html: t.options.navigationText[1] || "",
      });
      n.append(t.buttonPrev).append(t.buttonNext);
      n.on(
        "touchstart.owlControls mousedown.owlControls",
        'div[class^="owl"]',
        function (e) {
          e.preventDefault();
        }
      );
      n.on(
        "touchend.owlControls mouseup.owlControls",
        'div[class^="owl"]',
        function (n) {
          n.preventDefault();
          if (e(this).hasClass("owl-next")) {
            t.next();
          } else {
            t.prev();
          }
        }
      );
    },
    buildPagination: function () {
      var t = this;
      t.paginationWrapper = e('<div class="owl-pagination"/>');
      t.owlControls.append(t.paginationWrapper);
      t.paginationWrapper.on(
        "touchend.owlControls mouseup.owlControls",
        ".owl-page",
        function (n) {
          n.preventDefault();
          if (Number(e(this).data("owl-page")) !== t.currentItem) {
            t.goTo(Number(e(this).data("owl-page")), true);
          }
        }
      );
    },
    updatePagination: function () {
      var t = this,
        n,
        r,
        i,
        s,
        o,
        u;
      if (t.options.pagination === false) {
        return false;
      }
      t.paginationWrapper.html("");
      n = 0;
      r = t.itemsAmount - (t.itemsAmount % t.options.items);
      for (s = 0; s < t.itemsAmount; s += 1) {
        if (s % t.options.items === 0) {
          n += 1;
          if (r === s) {
            i = t.itemsAmount - t.options.items;
          }
          o = e("<div/>", { class: "owl-page" });
          u = e("<span></span>", {
            text: t.options.paginationNumbers === true ? n : "",
            class: t.options.paginationNumbers === true ? "owl-numbers" : "",
          });
          o.append(u);
          o.data("owl-page", r === s ? i : s);
          o.data("owl-roundPages", n);
          t.paginationWrapper.append(o);
        }
      }
      t.checkPagination();
    },
    checkPagination: function () {
      var t = this;
      if (t.options.pagination === false) {
        return false;
      }
      t.paginationWrapper.find(".owl-page").each(function () {
        if (
          e(this).data("owl-roundPages") ===
          e(t.$owlItems[t.currentItem]).data("owl-roundPages")
        ) {
          t.paginationWrapper.find(".owl-page").removeClass("active");
          e(this).addClass("active");
        }
      });
    },
    checkNavigation: function () {
      var e = this;
      if (e.options.navigation === false) {
        return false;
      }
      if (e.options.rewindNav === false) {
        if (e.currentItem === 0 && e.maximumItem === 0) {
          e.buttonPrev.addClass("disabled");
          e.buttonNext.addClass("disabled");
        } else if (e.currentItem === 0 && e.maximumItem !== 0) {
          e.buttonPrev.addClass("disabled");
          e.buttonNext.removeClass("disabled");
        } else if (e.currentItem === e.maximumItem) {
          e.buttonPrev.removeClass("disabled");
          e.buttonNext.addClass("disabled");
        } else if (e.currentItem !== 0 && e.currentItem !== e.maximumItem) {
          e.buttonPrev.removeClass("disabled");
          e.buttonNext.removeClass("disabled");
        }
      }
    },
    updateControls: function () {
      var e = this;
      e.updatePagination();
      e.checkNavigation();
      if (e.owlControls) {
        if (e.options.items >= e.itemsAmount) {
          e.owlControls.hide();
        } else {
          e.owlControls.show();
        }
      }
    },
    destroyControls: function () {
      var e = this;
      if (e.owlControls) {
        e.owlControls.remove();
      }
    },
    next: function (e) {
      var t = this;
      if (t.isTransition) {
        return false;
      }
      t.currentItem += t.options.scrollPerPage === true ? t.options.items : 1;
      if (
        t.currentItem >
        t.maximumItem +
          (t.options.scrollPerPage === true ? t.options.items - 1 : 0)
      ) {
        if (t.options.rewindNav === true) {
          t.currentItem = 0;
          e = "rewind";
        } else {
          t.currentItem = t.maximumItem;
          return false;
        }
      }
      t.goTo(t.currentItem, e);
    },
    prev: function (e) {
      var t = this;
      if (t.isTransition) {
        return false;
      }
      if (
        t.options.scrollPerPage === true &&
        t.currentItem > 0 &&
        t.currentItem < t.options.items
      ) {
        t.currentItem = 0;
      } else {
        t.currentItem -= t.options.scrollPerPage === true ? t.options.items : 1;
      }
      if (t.currentItem < 0) {
        if (t.options.rewindNav === true) {
          t.currentItem = t.maximumItem;
          e = "rewind";
        } else {
          t.currentItem = 0;
          return false;
        }
      }
      t.goTo(t.currentItem, e);
    },
    goTo: function (e, n, r) {
      var i = this,
        s;
      if (i.isTransition) {
        return false;
      }
      if (typeof i.options.beforeMove === "function") {
        i.options.beforeMove.apply(this, [i.$elem]);
      }
      if (e >= i.maximumItem) {
        e = i.maximumItem;
      } else if (e <= 0) {
        e = 0;
      }
      i.currentItem = i.owl.currentItem = e;
      if (
        i.options.transitionStyle !== false &&
        r !== "drag" &&
        i.options.items === 1 &&
        i.browser.support3d === true
      ) {
        i.swapSpeed(0);
        if (i.browser.support3d === true) {
          i.transition3d(i.positionsInArray[e]);
        } else {
          i.css2slide(i.positionsInArray[e], 1);
        }
        i.afterGo();
        i.singleItemTransition();
        return false;
      }
      s = i.positionsInArray[e];
      if (i.browser.support3d === true) {
        i.isCss3Finish = false;
        if (n === true) {
          i.swapSpeed("paginationSpeed");
          t.setTimeout(function () {
            i.isCss3Finish = true;
          }, i.options.paginationSpeed);
        } else if (n === "rewind") {
          i.swapSpeed(i.options.rewindSpeed);
          t.setTimeout(function () {
            i.isCss3Finish = true;
          }, i.options.rewindSpeed);
        } else {
          i.swapSpeed("slideSpeed");
          t.setTimeout(function () {
            i.isCss3Finish = true;
          }, i.options.slideSpeed);
        }
        i.transition3d(s);
      } else {
        if (n === true) {
          i.css2slide(s, i.options.paginationSpeed);
        } else if (n === "rewind") {
          i.css2slide(s, i.options.rewindSpeed);
        } else {
          i.css2slide(s, i.options.slideSpeed);
        }
      }
      i.afterGo();
    },
    jumpTo: function (e) {
      var t = this;
      if (typeof t.options.beforeMove === "function") {
        t.options.beforeMove.apply(this, [t.$elem]);
      }
      if (e >= t.maximumItem || e === -1) {
        e = t.maximumItem;
      } else if (e <= 0) {
        e = 0;
      }
      t.swapSpeed(0);
      if (t.browser.support3d === true) {
        t.transition3d(t.positionsInArray[e]);
      } else {
        t.css2slide(t.positionsInArray[e], 1);
      }
      t.currentItem = t.owl.currentItem = e;
      t.afterGo();
    },
    afterGo: function () {
      var e = this;
      e.prevArr.push(e.currentItem);
      e.prevItem = e.owl.prevItem = e.prevArr[e.prevArr.length - 2];
      e.prevArr.shift(0);
      if (e.prevItem !== e.currentItem) {
        e.checkPagination();
        e.checkNavigation();
        e.eachMoveUpdate();
        if (e.options.autoPlay !== false) {
          e.checkAp();
        }
      }
      if (
        typeof e.options.afterMove === "function" &&
        e.prevItem !== e.currentItem
      ) {
        e.options.afterMove.apply(this, [e.$elem]);
      }
    },
    stop: function () {
      var e = this;
      e.apStatus = "stop";
      t.clearInterval(e.autoPlayInterval);
    },
    checkAp: function () {
      var e = this;
      if (e.apStatus !== "stop") {
        e.play();
      }
    },
    play: function () {
      var e = this;
      e.apStatus = "play";
      if (e.options.autoPlay === false) {
        return false;
      }
      t.clearInterval(e.autoPlayInterval);
      e.autoPlayInterval = t.setInterval(function () {
        e.next(true);
      }, e.options.autoPlay);
    },
    swapSpeed: function (e) {
      var t = this;
      if (e === "slideSpeed") {
        t.$owlWrapper.css(t.addCssSpeed(t.options.slideSpeed));
      } else if (e === "paginationSpeed") {
        t.$owlWrapper.css(t.addCssSpeed(t.options.paginationSpeed));
      } else if (typeof e !== "string") {
        t.$owlWrapper.css(t.addCssSpeed(e));
      }
    },
    addCssSpeed: function (e) {
      return {
        "-webkit-transition": "all " + e + "ms ease",
        "-moz-transition": "all " + e + "ms ease",
        "-o-transition": "all " + e + "ms ease",
        transition: "all " + e + "ms ease",
      };
    },
    removeTransition: function () {
      return {
        "-webkit-transition": "",
        "-moz-transition": "",
        "-o-transition": "",
        transition: "",
      };
    },
    doTranslate: function (e) {
      return {
        "-webkit-transform": "translate3d(" + e + "px, 0px, 0px)",
        "-moz-transform": "translate3d(" + e + "px, 0px, 0px)",
        "-o-transform": "translate3d(" + e + "px, 0px, 0px)",
        "-ms-transform": "translate3d(" + e + "px, 0px, 0px)",
        transform: "translate3d(" + e + "px, 0px,0px)",
      };
    },
    transition3d: function (e) {
      var t = this;
      t.$owlWrapper.css(t.doTranslate(e));
    },
    css2move: function (e) {
      var t = this;
      t.$owlWrapper.css({ left: e });
    },
    css2slide: function (e, t) {
      var n = this;
      n.isCssFinish = false;
      n.$owlWrapper.stop(true, true).animate(
        { left: e },
        {
          duration: t || n.options.slideSpeed,
          complete: function () {
            n.isCssFinish = true;
          },
        }
      );
    },
    checkBrowser: function () {
      var e = this,
        r = n.createElement("p"),
        i,
        s = {
          webkitTransform: "-webkit-transform",
          OTransform: "-o-transform",
          msTransform: "-ms-transform",
          MozTransform: "-moz-transform",
          transform: "transform",
        };
      n.body.insertBefore(r, null);
      for (var o in s) {
        if (r.style[o] !== undefined) {
          r.style[o] = "translate3d(1px,1px,1px)";
          i = t.getComputedStyle(r).getPropertyValue(s[o]);
        }
      }
      n.body.removeChild(r);
      isTouch = "ontouchstart" in t || t.navigator.msMaxTouchPoints;
      e.browser = {
        support3d: i !== undefined && i.length > 0 && i !== "none",
        isTouch: isTouch,
      };
    },
    moveEvents: function () {
      var e = this;
      if (e.options.mouseDrag !== false || e.options.touchDrag !== false) {
        e.gestures();
        e.disabledEvents();
      }
    },
    eventTypes: function () {
      var e = this,
        t = ["s", "e", "x"];
      e.ev_types = {};
      if (e.options.mouseDrag === true && e.options.touchDrag === true) {
        t = [
          "touchstart.owl mousedown.owl",
          "touchmove.owl mousemove.owl",
          "touchend.owl touchcancel.owl mouseup.owl",
        ];
      } else if (
        e.options.mouseDrag === false &&
        e.options.touchDrag === true
      ) {
        t = ["touchstart.owl", "touchmove.owl", "touchend.owl touchcancel.owl"];
      } else if (
        e.options.mouseDrag === true &&
        e.options.touchDrag === false
      ) {
        t = ["mousedown.owl", "mousemove.owl", "mouseup.owl"];
      }
      e.ev_types.start = t[0];
      e.ev_types.move = t[1];
      e.ev_types.end = t[2];
    },
    disabledEvents: function () {
      var t = this;
      t.$elem.on("dragstart.owl", function (e) {
        e.preventDefault();
      });
      t.$elem.on("mousedown.disableTextSelect", function (t) {
        return e(t.target).is("input, textarea, select, option");
      });
    },
    gestures: function () {
      function s(e) {
        if (e.touches !== undefined) {
          return { x: e.touches[0].pageX, y: e.touches[0].pageY };
        }
        if (e.touches === undefined) {
          if (e.pageX !== undefined) {
            return { x: e.pageX, y: e.pageY };
          }
          if (e.pageX === undefined) {
            return { x: e.clientX, y: e.clientY };
          }
        }
      }
      function o(t) {
        if (t === "on") {
          e(n).on(r.ev_types.move, a);
          e(n).on(r.ev_types.end, f);
        } else if (t === "off") {
          e(n).off(r.ev_types.move);
          e(n).off(r.ev_types.end);
        }
      }
      function u(n) {
        var u = n.originalEvent || n || t.event,
          a;
        if (u.which === 3) {
          return false;
        }
        if (r.itemsAmount <= r.options.items) {
          return;
        }
        if (r.isCssFinish === false && !r.options.dragBeforeAnimFinish) {
          return false;
        }
        if (r.isCss3Finish === false && !r.options.dragBeforeAnimFinish) {
          return false;
        }
        if (r.options.autoPlay !== false) {
          t.clearInterval(r.autoPlayInterval);
        }
        if (r.browser.isTouch !== true && !r.$owlWrapper.hasClass("grabbing")) {
          r.$owlWrapper.addClass("grabbing");
        }
        r.newPosX = 0;
        r.newRelativeX = 0;
        e(this).css(r.removeTransition());
        a = e(this).position();
        i.relativePos = a.left;
        i.offsetX = s(u).x - a.left;
        i.offsetY = s(u).y - a.top;
        o("on");
        i.sliding = false;
        i.targetElement = u.target || u.srcElement;
      }
      function a(o) {
        var u = o.originalEvent || o || t.event,
          a,
          f;
        r.newPosX = s(u).x - i.offsetX;
        r.newPosY = s(u).y - i.offsetY;
        r.newRelativeX = r.newPosX - i.relativePos;
        if (
          typeof r.options.startDragging === "function" &&
          i.dragging !== true &&
          r.newRelativeX !== 0
        ) {
          i.dragging = true;
          r.options.startDragging.apply(r, [r.$elem]);
        }
        if (
          (r.newRelativeX > 8 || r.newRelativeX < -8) &&
          r.browser.isTouch === true
        ) {
          if (u.preventDefault !== undefined) {
            u.preventDefault();
          } else {
            u.returnValue = false;
          }
          i.sliding = true;
        }
        if ((r.newPosY > 10 || r.newPosY < -10) && i.sliding === false) {
          e(n).off("touchmove.owl");
        }
        a = function () {
          return r.newRelativeX / 5;
        };
        f = function () {
          return r.maximumPixels + r.newRelativeX / 5;
        };
        r.newPosX = Math.max(Math.min(r.newPosX, a()), f());
        if (r.browser.support3d === true) {
          r.transition3d(r.newPosX);
        } else {
          r.css2move(r.newPosX);
        }
      }
      function f(n) {
        var s = n.originalEvent || n || t.event,
          u,
          a,
          f;
        s.target = s.target || s.srcElement;
        i.dragging = false;
        if (r.browser.isTouch !== true) {
          r.$owlWrapper.removeClass("grabbing");
        }
        if (r.newRelativeX < 0) {
          r.dragDirection = r.owl.dragDirection = "left";
        } else {
          r.dragDirection = r.owl.dragDirection = "right";
        }
        if (r.newRelativeX !== 0) {
          u = r.getNewPosition();
          r.goTo(u, false, "drag");
          if (i.targetElement === s.target && r.browser.isTouch !== true) {
            e(s.target).on("click.disable", function (t) {
              t.stopImmediatePropagation();
              t.stopPropagation();
              t.preventDefault();
              e(t.target).off("click.disable");
            });
            a = e._data(s.target, "events").click;
            f = a.pop();
            a.splice(0, 0, f);
          }
        }
        o("off");
      }
      var r = this,
        i = {
          offsetX: 0,
          offsetY: 0,
          baseElWidth: 0,
          relativePos: 0,
          position: null,
          minSwipe: null,
          maxSwipe: null,
          sliding: null,
          dargging: null,
          targetElement: null,
        };
      r.isCssFinish = true;
      r.$elem.on(r.ev_types.start, ".owl-wrapper", u);
    },
    getNewPosition: function () {
      var e = this,
        t = e.closestItem();
      if (t > e.maximumItem) {
        e.currentItem = e.maximumItem;
        t = e.maximumItem;
      } else if (e.newPosX >= 0) {
        t = 0;
        e.currentItem = 0;
      }
      return t;
    },
    closestItem: function () {
      var t = this,
        n =
          t.options.scrollPerPage === true
            ? t.pagesInArray
            : t.positionsInArray,
        r = t.newPosX,
        i = null;
      e.each(n, function (s, o) {
        if (
          r - t.itemWidth / 20 > n[s + 1] &&
          r - t.itemWidth / 20 < o &&
          t.moveDirection() === "left"
        ) {
          i = o;
          if (t.options.scrollPerPage === true) {
            t.currentItem = e.inArray(i, t.positionsInArray);
          } else {
            t.currentItem = s;
          }
        } else if (
          r + t.itemWidth / 20 < o &&
          r + t.itemWidth / 20 > (n[s + 1] || n[s] - t.itemWidth) &&
          t.moveDirection() === "right"
        ) {
          if (t.options.scrollPerPage === true) {
            i = n[s + 1] || n[n.length - 1];
            t.currentItem = e.inArray(i, t.positionsInArray);
          } else {
            i = n[s + 1];
            t.currentItem = s + 1;
          }
        }
      });
      return t.currentItem;
    },
    moveDirection: function () {
      var e = this,
        t;
      if (e.newRelativeX < 0) {
        t = "right";
        e.playDirection = "next";
      } else {
        t = "left";
        e.playDirection = "prev";
      }
      return t;
    },
    customEvents: function () {
      var e = this;
      e.$elem.on("owl.next", function () {
        e.next();
      });
      e.$elem.on("owl.prev", function () {
        e.prev();
      });
      e.$elem.on("owl.play", function (t, n) {
        e.options.autoPlay = n;
        e.play();
        e.hoverStatus = "play";
      });
      e.$elem.on("owl.stop", function () {
        e.stop();
        e.hoverStatus = "stop";
      });
      e.$elem.on("owl.goTo", function (t, n) {
        e.goTo(n);
      });
      e.$elem.on("owl.jumpTo", function (t, n) {
        e.jumpTo(n);
      });
    },
    stopOnHover: function () {
      var e = this;
      if (
        e.options.stopOnHover === true &&
        e.browser.isTouch !== true &&
        e.options.autoPlay !== false
      ) {
        e.$elem.on("mouseover", function () {
          e.stop();
        });
        e.$elem.on("mouseout", function () {
          if (e.hoverStatus !== "stop") {
            e.play();
          }
        });
      }
    },
    lazyLoad: function () {
      var t = this,
        n,
        r,
        i,
        s,
        o;
      if (t.options.lazyLoad === false) {
        return false;
      }
      for (n = 0; n < t.itemsAmount; n += 1) {
        r = e(t.$owlItems[n]);
        if (r.data("owl-loaded") === "loaded") {
          continue;
        }
        i = r.data("owl-item");
        s = r.find(".lazyOwl");
        if (typeof s.data("src") !== "string") {
          r.data("owl-loaded", "loaded");
          continue;
        }
        if (r.data("owl-loaded") === undefined) {
          s.hide();
          r.addClass("loading").data("owl-loaded", "checked");
        }
        if (t.options.lazyFollow === true) {
          o = i >= t.currentItem;
        } else {
          o = true;
        }
        if (o && i < t.currentItem + t.options.items && s.length) {
          s.each(function () {
            t.lazyPreload(r, e(this));
          });
        }
      }
    },
    lazyPreload: function (e, n) {
      function o() {
        e.data("owl-loaded", "loaded").removeClass("loading");
        n.removeAttr("data-src");
        if (r.options.lazyEffect === "fade") {
          n.fadeIn(400);
        } else {
          n.show();
        }
        if (typeof r.options.afterLazyLoad === "function") {
          r.options.afterLazyLoad.apply(this, [r.$elem]);
        }
      }
      function u() {
        i += 1;
        if (r.completeImg(n.get(0)) || s === true) {
          o();
        } else if (i <= 100) {
          t.setTimeout(u, 100);
        } else {
          o();
        }
      }
      var r = this,
        i = 0,
        s;
      if (n.prop("tagName") === "DIV") {
        n.css("background-image", "url(" + n.data("src") + ")");
        s = true;
      } else {
        n[0].src = n.data("src");
      }
      u();
    },
    autoHeight: function () {
      function s() {
        var r = e(n.$owlItems[n.currentItem]).height();
        n.wrapperOuter.css("height", r + "px");
        if (!n.wrapperOuter.hasClass("autoHeight")) {
          t.setTimeout(function () {
            n.wrapperOuter.addClass("autoHeight");
          }, 0);
        }
      }
      function o() {
        i += 1;
        if (n.completeImg(r.get(0))) {
          s();
        } else if (i <= 100) {
          t.setTimeout(o, 100);
        } else {
          n.wrapperOuter.css("height", "");
        }
      }
      var n = this,
        r = e(n.$owlItems[n.currentItem]).find("img"),
        i;
      if (r.get(0) !== undefined) {
        i = 0;
        o();
      } else {
        s();
      }
    },
    completeImg: function (e) {
      var t;
      if (!e.complete) {
        return false;
      }
      t = typeof e.naturalWidth;
      if (t !== "undefined" && e.naturalWidth === 0) {
        return false;
      }
      return true;
    },
    onVisibleItems: function () {
      var t = this,
        n;
      if (t.options.addClassActive === true) {
        t.$owlItems.removeClass("active");
      }
      t.visibleItems = [];
      for (n = t.currentItem; n < t.currentItem + t.options.items; n += 1) {
        t.visibleItems.push(n);
        if (t.options.addClassActive === true) {
          e(t.$owlItems[n]).addClass("active");
        }
      }
      t.owl.visibleItems = t.visibleItems;
    },
    transitionTypes: function (e) {
      var t = this;
      t.outClass = "owl-" + e + "-out";
      t.inClass = "owl-" + e + "-in";
    },
    singleItemTransition: function () {
      function a(e) {
        return { position: "relative", left: e + "px" };
      }
      var e = this,
        t = e.outClass,
        n = e.inClass,
        r = e.$owlItems.eq(e.currentItem),
        i = e.$owlItems.eq(e.prevItem),
        s =
          Math.abs(e.positionsInArray[e.currentItem]) +
          e.positionsInArray[e.prevItem],
        o = Math.abs(e.positionsInArray[e.currentItem]) + e.itemWidth / 2,
        u = "webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend";
      e.isTransition = true;
      e.$owlWrapper.addClass("owl-origin").css({
        "-webkit-transform-origin": o + "px",
        "-moz-perspective-origin": o + "px",
        "perspective-origin": o + "px",
      });
      i.css(a(s, 10))
        .addClass(t)
        .on(u, function () {
          e.endPrev = true;
          i.off(u);
          e.clearTransStyle(i, t);
        });
      r.addClass(n).on(u, function () {
        e.endCurrent = true;
        r.off(u);
        e.clearTransStyle(r, n);
      });
    },
    clearTransStyle: function (e, t) {
      var n = this;
      e.css({ position: "", left: "" }).removeClass(t);
      if (n.endPrev && n.endCurrent) {
        n.$owlWrapper.removeClass("owl-origin");
        n.endPrev = false;
        n.endCurrent = false;
        n.isTransition = false;
      }
    },
    owlStatus: function () {
      var e = this;
      e.owl = {
        userOptions: e.userOptions,
        baseElement: e.$elem,
        userItems: e.$userItems,
        owlItems: e.$owlItems,
        currentItem: e.currentItem,
        prevItem: e.prevItem,
        visibleItems: e.visibleItems,
        isTouch: e.browser.isTouch,
        browser: e.browser,
        dragDirection: e.dragDirection,
      };
    },
    clearEvents: function () {
      var r = this;
      r.$elem.off(".owl owl mousedown.disableTextSelect");
      e(n).off(".owl owl");
      e(t).off("resize", r.resizer);
    },
    unWrap: function () {
      var e = this;
      if (e.$elem.children().length !== 0) {
        e.$owlWrapper.unwrap();
        e.$userItems.unwrap().unwrap();
        if (e.owlControls) {
          e.owlControls.remove();
        }
      }
      e.clearEvents();
      e.$elem.attr("style", e.$elem.data("owl-originalStyles") || "");
      e.$elem.attr("class", e.$elem.data("owl-originalClasses"));
    },
    destroy: function () {
      var e = this;
      e.stop();
      t.clearInterval(e.checkVisible);
      e.unWrap();
      e.$elem.removeData();
    },
    reinit: function (t) {
      var n = this,
        r = e.extend({}, n.userOptions, t);
      n.unWrap();
      n.init(r, n.$elem);
    },
    addItem: function (e, t) {
      var n = this,
        r;
      if (!e) {
        return false;
      }
      if (n.$elem.children().length === 0) {
        n.$elem.append(e);
        n.setVars();
        return false;
      }
      n.unWrap();
      if (t === undefined || t === -1) {
        r = -1;
      } else {
        r = t;
      }
      if (r >= n.$userItems.length || r === -1) {
        n.$userItems.eq(-1).after(e);
      } else {
        n.$userItems.eq(r).before(e);
      }
      n.setVars();
    },
    removeItem: function (e) {
      var t = this,
        n;
      if (t.$elem.children().length === 0) {
        return false;
      }
      if (e === undefined || e === -1) {
        n = -1;
      } else {
        n = e;
      }
      t.unWrap();
      t.$userItems.eq(n).remove();
      t.setVars();
    },
  };
  e.fn.owlCarousel = function (t) {
    return this.each(function () {
      if (e(this).data("owl-init") === true) {
        return false;
      }
      e(this).data("owl-init", true);
      var n = Object.create(r);
      n.init(t, this);
      e.data(this, "owlCarousel", n);
    });
  };
  e.fn.owlCarousel.options = {
    items: 5,
    itemsCustom: false,
    itemsDesktop: [1199, 4],
    itemsDesktopSmall: [979, 3],
    itemsTablet: [768, 2],
    itemsTabletSmall: false,
    itemsMobile: [479, 1],
    singleItem: false,
    itemsScaleUp: false,
    slideSpeed: 200,
    paginationSpeed: 800,
    rewindSpeed: 1e3,
    autoPlay: false,
    stopOnHover: false,
    navigation: false,
    navigationText: ["prev", "next"],
    rewindNav: true,
    scrollPerPage: false,
    pagination: true,
    paginationNumbers: false,
    responsive: true,
    responsiveRefreshRate: 200,
    responsiveBaseWidth: t,
    baseClass: "owl-carousel",
    theme: "owl-theme",
    lazyLoad: false,
    lazyFollow: true,
    lazyEffect: "fade",
    autoHeight: false,
    jsonPath: false,
    jsonSuccess: false,
    dragBeforeAnimFinish: true,
    mouseDrag: true,
    touchDrag: true,
    addClassActive: false,
    transitionStyle: false,
    beforeUpdate: false,
    afterUpdate: false,
    beforeInit: false,
    afterInit: false,
    beforeMove: false,
    afterMove: false,
    afterAction: false,
    startDragging: false,
    afterLazyLoad: false,
  };
})(jQuery, window, document);

/*! imagesLoaded */

!(function (t, e) {
  "function" == typeof define && define.amd
    ? define("ev-emitter/ev-emitter", e)
    : "object" == typeof module && module.exports
    ? (module.exports = e())
    : (t.EvEmitter = e());
})("undefined" != typeof window ? window : this, function () {
  function t() {}
  var e = t.prototype;
  return (
    (e.on = function (t, e) {
      if (t && e) {
        var i = (this._events = this._events || {}),
          n = (i[t] = i[t] || []);
        return -1 == n.indexOf(e) && n.push(e), this;
      }
    }),
    (e.once = function (t, e) {
      if (t && e) {
        this.on(t, e);
        var i = (this._onceEvents = this._onceEvents || {}),
          n = (i[t] = i[t] || {});
        return (n[e] = !0), this;
      }
    }),
    (e.off = function (t, e) {
      var i = this._events && this._events[t];
      if (i && i.length) {
        var n = i.indexOf(e);
        return -1 != n && i.splice(n, 1), this;
      }
    }),
    (e.emitEvent = function (t, e) {
      var i = this._events && this._events[t];
      if (i && i.length) {
        var n = 0,
          o = i[n];
        e = e || [];
        for (var r = this._onceEvents && this._onceEvents[t]; o; ) {
          var s = r && r[o];
          s && (this.off(t, o), delete r[o]),
            o.apply(this, e),
            (n += s ? 0 : 1),
            (o = i[n]);
        }
        return this;
      }
    }),
    t
  );
}),
  (function (t, e) {
    "use strict";
    "function" == typeof define && define.amd
      ? define(["ev-emitter/ev-emitter"], function (i) {
          return e(t, i);
        })
      : "object" == typeof module && module.exports
      ? (module.exports = e(t, require("ev-emitter")))
      : (t.imagesLoaded = e(t, t.EvEmitter));
  })(window, function (t, e) {
    function i(t, e) {
      for (var i in e) t[i] = e[i];
      return t;
    }
    function n(t) {
      var e = [];
      if (Array.isArray(t)) e = t;
      else if ("number" == typeof t.length)
        for (var i = 0; i < t.length; i++) e.push(t[i]);
      else e.push(t);
      return e;
    }
    function o(t, e, r) {
      return this instanceof o
        ? ("string" == typeof t && (t = document.querySelectorAll(t)),
          (this.elements = n(t)),
          (this.options = i({}, this.options)),
          "function" == typeof e ? (r = e) : i(this.options, e),
          r && this.on("always", r),
          this.getImages(),
          h && (this.jqDeferred = new h.Deferred()),
          void setTimeout(
            function () {
              this.check();
            }.bind(this)
          ))
        : new o(t, e, r);
    }
    function r(t) {
      this.img = t;
    }
    function s(t, e) {
      (this.url = t), (this.element = e), (this.img = new Image());
    }
    var h = t.jQuery,
      a = t.console;
    (o.prototype = Object.create(e.prototype)),
      (o.prototype.options = {}),
      (o.prototype.getImages = function () {
        (this.images = []), this.elements.forEach(this.addElementImages, this);
      }),
      (o.prototype.addElementImages = function (t) {
        "IMG" == t.nodeName && this.addImage(t),
          this.options.background === !0 && this.addElementBackgroundImages(t);
        var e = t.nodeType;
        if (e && d[e]) {
          for (var i = t.querySelectorAll("img"), n = 0; n < i.length; n++) {
            var o = i[n];
            this.addImage(o);
          }
          if ("string" == typeof this.options.background) {
            var r = t.querySelectorAll(this.options.background);
            for (n = 0; n < r.length; n++) {
              var s = r[n];
              this.addElementBackgroundImages(s);
            }
          }
        }
      });
    var d = { 1: !0, 9: !0, 11: !0 };
    return (
      (o.prototype.addElementBackgroundImages = function (t) {
        var e = getComputedStyle(t);
        if (e)
          for (
            var i = /url\((['"])?(.*?)\1\)/gi, n = i.exec(e.backgroundImage);
            null !== n;

          ) {
            var o = n && n[2];
            o && this.addBackground(o, t), (n = i.exec(e.backgroundImage));
          }
      }),
      (o.prototype.addImage = function (t) {
        var e = new r(t);
        this.images.push(e);
      }),
      (o.prototype.addBackground = function (t, e) {
        var i = new s(t, e);
        this.images.push(i);
      }),
      (o.prototype.check = function () {
        function t(t, i, n) {
          setTimeout(function () {
            e.progress(t, i, n);
          });
        }
        var e = this;
        return (
          (this.progressedCount = 0),
          (this.hasAnyBroken = !1),
          this.images.length
            ? void this.images.forEach(function (e) {
                e.once("progress", t), e.check();
              })
            : void this.complete()
        );
      }),
      (o.prototype.progress = function (t, e, i) {
        this.progressedCount++,
          (this.hasAnyBroken = this.hasAnyBroken || !t.isLoaded),
          this.emitEvent("progress", [this, t, e]),
          this.jqDeferred &&
            this.jqDeferred.notify &&
            this.jqDeferred.notify(this, t),
          this.progressedCount == this.images.length && this.complete(),
          this.options.debug && a && a.log("progress: " + i, t, e);
      }),
      (o.prototype.complete = function () {
        var t = this.hasAnyBroken ? "fail" : "done";
        if (
          ((this.isComplete = !0),
          this.emitEvent(t, [this]),
          this.emitEvent("always", [this]),
          this.jqDeferred)
        ) {
          var e = this.hasAnyBroken ? "reject" : "resolve";
          this.jqDeferred[e](this);
        }
      }),
      (r.prototype = Object.create(e.prototype)),
      (r.prototype.check = function () {
        var t = this.getIsImageComplete();
        return t
          ? void this.confirm(0 !== this.img.naturalWidth, "naturalWidth")
          : ((this.proxyImage = new Image()),
            this.proxyImage.addEventListener("load", this),
            this.proxyImage.addEventListener("error", this),
            this.img.addEventListener("load", this),
            this.img.addEventListener("error", this),
            void (this.proxyImage.src = this.img.src));
      }),
      (r.prototype.getIsImageComplete = function () {
        return this.img.complete && void 0 !== this.img.naturalWidth;
      }),
      (r.prototype.confirm = function (t, e) {
        (this.isLoaded = t), this.emitEvent("progress", [this, this.img, e]);
      }),
      (r.prototype.handleEvent = function (t) {
        var e = "on" + t.type;
        this[e] && this[e](t);
      }),
      (r.prototype.onload = function () {
        this.confirm(!0, "onload"), this.unbindEvents();
      }),
      (r.prototype.onerror = function () {
        this.confirm(!1, "onerror"), this.unbindEvents();
      }),
      (r.prototype.unbindEvents = function () {
        this.proxyImage.removeEventListener("load", this),
          this.proxyImage.removeEventListener("error", this),
          this.img.removeEventListener("load", this),
          this.img.removeEventListener("error", this);
      }),
      (s.prototype = Object.create(r.prototype)),
      (s.prototype.check = function () {
        this.img.addEventListener("load", this),
          this.img.addEventListener("error", this),
          (this.img.src = this.url);
        var t = this.getIsImageComplete();
        t &&
          (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"),
          this.unbindEvents());
      }),
      (s.prototype.unbindEvents = function () {
        this.img.removeEventListener("load", this),
          this.img.removeEventListener("error", this);
      }),
      (s.prototype.confirm = function (t, e) {
        (this.isLoaded = t),
          this.emitEvent("progress", [this, this.element, e]);
      }),
      (o.makeJQueryPlugin = function (e) {
        (e = e || t.jQuery),
          e &&
            ((h = e),
            (h.fn.imagesLoaded = function (t, e) {
              var i = new o(this, t, e);
              return i.jqDeferred.promise(h(this));
            }));
      }),
      o.makeJQueryPlugin(),
      o
    );
  });

/** Isotope */

!(function (t, e) {
  "function" == typeof define && define.amd
    ? define("jquery-bridget/jquery-bridget", ["jquery"], function (i) {
        return e(t, i);
      })
    : "object" == typeof module && module.exports
    ? (module.exports = e(t, require("jquery")))
    : (t.jQueryBridget = e(t, t.jQuery));
})(window, function (t, e) {
  "use strict";
  function i(i, s, a) {
    function u(t, e, n) {
      var o,
        s = "$()." + i + '("' + e + '")';
      return (
        t.each(function (t, u) {
          var h = a.data(u, i);
          if (!h)
            return void r(
              i + " not initialized. Cannot call methods, i.e. " + s
            );
          var d = h[e];
          if (!d || "_" == e.charAt(0))
            return void r(s + " is not a valid method");
          var l = d.apply(h, n);
          o = void 0 === o ? l : o;
        }),
        void 0 !== o ? o : t
      );
    }
    function h(t, e) {
      t.each(function (t, n) {
        var o = a.data(n, i);
        o ? (o.option(e), o._init()) : ((o = new s(n, e)), a.data(n, i, o));
      });
    }
    (a = a || e || t.jQuery),
      a &&
        (s.prototype.option ||
          (s.prototype.option = function (t) {
            a.isPlainObject(t) &&
              (this.options = a.extend(!0, this.options, t));
          }),
        (a.fn[i] = function (t) {
          if ("string" == typeof t) {
            var e = o.call(arguments, 1);
            return u(this, t, e);
          }
          return h(this, t), this;
        }),
        n(a));
  }
  function n(t) {
    !t || (t && t.bridget) || (t.bridget = i);
  }
  var o = Array.prototype.slice,
    s = t.console,
    r =
      "undefined" == typeof s
        ? function () {}
        : function (t) {
            s.error(t);
          };
  return n(e || t.jQuery), i;
}),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define("ev-emitter/ev-emitter", e)
      : "object" == typeof module && module.exports
      ? (module.exports = e())
      : (t.EvEmitter = e());
  })("undefined" != typeof window ? window : this, function () {
    function t() {}
    var e = t.prototype;
    return (
      (e.on = function (t, e) {
        if (t && e) {
          var i = (this._events = this._events || {}),
            n = (i[t] = i[t] || []);
          return -1 == n.indexOf(e) && n.push(e), this;
        }
      }),
      (e.once = function (t, e) {
        if (t && e) {
          this.on(t, e);
          var i = (this._onceEvents = this._onceEvents || {}),
            n = (i[t] = i[t] || {});
          return (n[e] = !0), this;
        }
      }),
      (e.off = function (t, e) {
        var i = this._events && this._events[t];
        if (i && i.length) {
          var n = i.indexOf(e);
          return -1 != n && i.splice(n, 1), this;
        }
      }),
      (e.emitEvent = function (t, e) {
        var i = this._events && this._events[t];
        if (i && i.length) {
          var n = 0,
            o = i[n];
          e = e || [];
          for (var s = this._onceEvents && this._onceEvents[t]; o; ) {
            var r = s && s[o];
            r && (this.off(t, o), delete s[o]),
              o.apply(this, e),
              (n += r ? 0 : 1),
              (o = i[n]);
          }
          return this;
        }
      }),
      t
    );
  }),
  (function (t, e) {
    "use strict";
    "function" == typeof define && define.amd
      ? define("get-size/get-size", [], function () {
          return e();
        })
      : "object" == typeof module && module.exports
      ? (module.exports = e())
      : (t.getSize = e());
  })(window, function () {
    "use strict";
    function t(t) {
      var e = parseFloat(t),
        i = -1 == t.indexOf("%") && !isNaN(e);
      return i && e;
    }
    function e() {}
    function i() {
      for (
        var t = {
            width: 0,
            height: 0,
            innerWidth: 0,
            innerHeight: 0,
            outerWidth: 0,
            outerHeight: 0,
          },
          e = 0;
        h > e;
        e++
      ) {
        var i = u[e];
        t[i] = 0;
      }
      return t;
    }
    function n(t) {
      var e = getComputedStyle(t);
      return (
        e ||
          a(
            "Style returned " +
              e +
              ". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"
          ),
        e
      );
    }
    function o() {
      if (!d) {
        d = !0;
        var e = document.createElement("div");
        (e.style.width = "200px"),
          (e.style.padding = "1px 2px 3px 4px"),
          (e.style.borderStyle = "solid"),
          (e.style.borderWidth = "1px 2px 3px 4px"),
          (e.style.boxSizing = "border-box");
        var i = document.body || document.documentElement;
        i.appendChild(e);
        var o = n(e);
        (s.isBoxSizeOuter = r = 200 == t(o.width)), i.removeChild(e);
      }
    }
    function s(e) {
      if (
        (o(),
        "string" == typeof e && (e = document.querySelector(e)),
        e && "object" == typeof e && e.nodeType)
      ) {
        var s = n(e);
        if ("none" == s.display) return i();
        var a = {};
        (a.width = e.offsetWidth), (a.height = e.offsetHeight);
        for (
          var d = (a.isBorderBox = "border-box" == s.boxSizing), l = 0;
          h > l;
          l++
        ) {
          var f = u[l],
            m = s[f],
            c = parseFloat(m);
          a[f] = isNaN(c) ? 0 : c;
        }
        var p = a.paddingLeft + a.paddingRight,
          g = a.paddingTop + a.paddingBottom,
          y = a.marginLeft + a.marginRight,
          v = a.marginTop + a.marginBottom,
          _ = a.borderLeftWidth + a.borderRightWidth,
          I = a.borderTopWidth + a.borderBottomWidth,
          z = d && r,
          x = t(s.width);
        x !== !1 && (a.width = x + (z ? 0 : p + _));
        var S = t(s.height);
        return (
          S !== !1 && (a.height = S + (z ? 0 : g + I)),
          (a.innerWidth = a.width - (p + _)),
          (a.innerHeight = a.height - (g + I)),
          (a.outerWidth = a.width + y),
          (a.outerHeight = a.height + v),
          a
        );
      }
    }
    var r,
      a =
        "undefined" == typeof console
          ? e
          : function (t) {
              console.error(t);
            },
      u = [
        "paddingLeft",
        "paddingRight",
        "paddingTop",
        "paddingBottom",
        "marginLeft",
        "marginRight",
        "marginTop",
        "marginBottom",
        "borderLeftWidth",
        "borderRightWidth",
        "borderTopWidth",
        "borderBottomWidth",
      ],
      h = u.length,
      d = !1;
    return s;
  }),
  (function (t, e) {
    "use strict";
    "function" == typeof define && define.amd
      ? define("desandro-matches-selector/matches-selector", e)
      : "object" == typeof module && module.exports
      ? (module.exports = e())
      : (t.matchesSelector = e());
  })(window, function () {
    "use strict";
    var t = (function () {
      var t = window.Element.prototype;
      if (t.matches) return "matches";
      if (t.matchesSelector) return "matchesSelector";
      for (var e = ["webkit", "moz", "ms", "o"], i = 0; i < e.length; i++) {
        var n = e[i],
          o = n + "MatchesSelector";
        if (t[o]) return o;
      }
    })();
    return function (e, i) {
      return e[t](i);
    };
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define(
          "fizzy-ui-utils/utils",
          ["desandro-matches-selector/matches-selector"],
          function (i) {
            return e(t, i);
          }
        )
      : "object" == typeof module && module.exports
      ? (module.exports = e(t, require("desandro-matches-selector")))
      : (t.fizzyUIUtils = e(t, t.matchesSelector));
  })(window, function (t, e) {
    var i = {};
    (i.extend = function (t, e) {
      for (var i in e) t[i] = e[i];
      return t;
    }),
      (i.modulo = function (t, e) {
        return ((t % e) + e) % e;
      }),
      (i.makeArray = function (t) {
        var e = [];
        if (Array.isArray(t)) e = t;
        else if (t && "object" == typeof t && "number" == typeof t.length)
          for (var i = 0; i < t.length; i++) e.push(t[i]);
        else e.push(t);
        return e;
      }),
      (i.removeFrom = function (t, e) {
        var i = t.indexOf(e);
        -1 != i && t.splice(i, 1);
      }),
      (i.getParent = function (t, i) {
        for (; t.parentNode && t != document.body; )
          if (((t = t.parentNode), e(t, i))) return t;
      }),
      (i.getQueryElement = function (t) {
        return "string" == typeof t ? document.querySelector(t) : t;
      }),
      (i.handleEvent = function (t) {
        var e = "on" + t.type;
        this[e] && this[e](t);
      }),
      (i.filterFindElements = function (t, n) {
        t = i.makeArray(t);
        var o = [];
        return (
          t.forEach(function (t) {
            if (t instanceof HTMLElement) {
              if (!n) return void o.push(t);
              e(t, n) && o.push(t);
              for (var i = t.querySelectorAll(n), s = 0; s < i.length; s++)
                o.push(i[s]);
            }
          }),
          o
        );
      }),
      (i.debounceMethod = function (t, e, i) {
        var n = t.prototype[e],
          o = e + "Timeout";
        t.prototype[e] = function () {
          var t = this[o];
          t && clearTimeout(t);
          var e = arguments,
            s = this;
          this[o] = setTimeout(function () {
            n.apply(s, e), delete s[o];
          }, i || 100);
        };
      }),
      (i.docReady = function (t) {
        var e = document.readyState;
        "complete" == e || "interactive" == e
          ? setTimeout(t)
          : document.addEventListener("DOMContentLoaded", t);
      }),
      (i.toDashed = function (t) {
        return t
          .replace(/(.)([A-Z])/g, function (t, e, i) {
            return e + "-" + i;
          })
          .toLowerCase();
      });
    var n = t.console;
    return (
      (i.htmlInit = function (e, o) {
        i.docReady(function () {
          var s = i.toDashed(o),
            r = "data-" + s,
            a = document.querySelectorAll("[" + r + "]"),
            u = document.querySelectorAll(".js-" + s),
            h = i.makeArray(a).concat(i.makeArray(u)),
            d = r + "-options",
            l = t.jQuery;
          h.forEach(function (t) {
            var i,
              s = t.getAttribute(r) || t.getAttribute(d);
            try {
              i = s && JSON.parse(s);
            } catch (a) {
              return void (
                n &&
                n.error("Error parsing " + r + " on " + t.className + ": " + a)
              );
            }
            var u = new e(t, i);
            l && l.data(t, o, u);
          });
        });
      }),
      i
    );
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define(
          "outlayer/item",
          ["ev-emitter/ev-emitter", "get-size/get-size"],
          e
        )
      : "object" == typeof module && module.exports
      ? (module.exports = e(require("ev-emitter"), require("get-size")))
      : ((t.Outlayer = {}), (t.Outlayer.Item = e(t.EvEmitter, t.getSize)));
  })(window, function (t, e) {
    "use strict";
    function i(t) {
      for (var e in t) return !1;
      return (e = null), !0;
    }
    function n(t, e) {
      t &&
        ((this.element = t),
        (this.layout = e),
        (this.position = { x: 0, y: 0 }),
        this._create());
    }
    function o(t) {
      return t.replace(/([A-Z])/g, function (t) {
        return "-" + t.toLowerCase();
      });
    }
    var s = document.documentElement.style,
      r = "string" == typeof s.transition ? "transition" : "WebkitTransition",
      a = "string" == typeof s.transform ? "transform" : "WebkitTransform",
      u = {
        WebkitTransition: "webkitTransitionEnd",
        transition: "transitionend",
      }[r],
      h = {
        transform: a,
        transition: r,
        transitionDuration: r + "Duration",
        transitionProperty: r + "Property",
        transitionDelay: r + "Delay",
      },
      d = (n.prototype = Object.create(t.prototype));
    (d.constructor = n),
      (d._create = function () {
        (this._transn = { ingProperties: {}, clean: {}, onEnd: {} }),
          this.css({ position: "absolute" });
      }),
      (d.handleEvent = function (t) {
        var e = "on" + t.type;
        this[e] && this[e](t);
      }),
      (d.getSize = function () {
        this.size = e(this.element);
      }),
      (d.css = function (t) {
        var e = this.element.style;
        for (var i in t) {
          var n = h[i] || i;
          e[n] = t[i];
        }
      }),
      (d.getPosition = function () {
        var t = getComputedStyle(this.element),
          e = this.layout._getOption("originLeft"),
          i = this.layout._getOption("originTop"),
          n = t[e ? "left" : "right"],
          o = t[i ? "top" : "bottom"],
          s = this.layout.size,
          r =
            -1 != n.indexOf("%")
              ? (parseFloat(n) / 100) * s.width
              : parseInt(n, 10),
          a =
            -1 != o.indexOf("%")
              ? (parseFloat(o) / 100) * s.height
              : parseInt(o, 10);
        (r = isNaN(r) ? 0 : r),
          (a = isNaN(a) ? 0 : a),
          (r -= e ? s.paddingLeft : s.paddingRight),
          (a -= i ? s.paddingTop : s.paddingBottom),
          (this.position.x = r),
          (this.position.y = a);
      }),
      (d.layoutPosition = function () {
        var t = this.layout.size,
          e = {},
          i = this.layout._getOption("originLeft"),
          n = this.layout._getOption("originTop"),
          o = i ? "paddingLeft" : "paddingRight",
          s = i ? "left" : "right",
          r = i ? "right" : "left",
          a = this.position.x + t[o];
        (e[s] = this.getXValue(a)), (e[r] = "");
        var u = n ? "paddingTop" : "paddingBottom",
          h = n ? "top" : "bottom",
          d = n ? "bottom" : "top",
          l = this.position.y + t[u];
        (e[h] = this.getYValue(l)),
          (e[d] = ""),
          this.css(e),
          this.emitEvent("layout", [this]);
      }),
      (d.getXValue = function (t) {
        var e = this.layout._getOption("horizontal");
        return this.layout.options.percentPosition && !e
          ? (t / this.layout.size.width) * 100 + "%"
          : t + "px";
      }),
      (d.getYValue = function (t) {
        var e = this.layout._getOption("horizontal");
        return this.layout.options.percentPosition && e
          ? (t / this.layout.size.height) * 100 + "%"
          : t + "px";
      }),
      (d._transitionTo = function (t, e) {
        this.getPosition();
        var i = this.position.x,
          n = this.position.y,
          o = parseInt(t, 10),
          s = parseInt(e, 10),
          r = o === this.position.x && s === this.position.y;
        if ((this.setPosition(t, e), r && !this.isTransitioning))
          return void this.layoutPosition();
        var a = t - i,
          u = e - n,
          h = {};
        (h.transform = this.getTranslate(a, u)),
          this.transition({
            to: h,
            onTransitionEnd: { transform: this.layoutPosition },
            isCleaning: !0,
          });
      }),
      (d.getTranslate = function (t, e) {
        var i = this.layout._getOption("originLeft"),
          n = this.layout._getOption("originTop");
        return (
          (t = i ? t : -t),
          (e = n ? e : -e),
          "translate3d(" + t + "px, " + e + "px, 0)"
        );
      }),
      (d.goTo = function (t, e) {
        this.setPosition(t, e), this.layoutPosition();
      }),
      (d.moveTo = d._transitionTo),
      (d.setPosition = function (t, e) {
        (this.position.x = parseInt(t, 10)),
          (this.position.y = parseInt(e, 10));
      }),
      (d._nonTransition = function (t) {
        this.css(t.to), t.isCleaning && this._removeStyles(t.to);
        for (var e in t.onTransitionEnd) t.onTransitionEnd[e].call(this);
      }),
      (d.transition = function (t) {
        if (!parseFloat(this.layout.options.transitionDuration))
          return void this._nonTransition(t);
        var e = this._transn;
        for (var i in t.onTransitionEnd) e.onEnd[i] = t.onTransitionEnd[i];
        for (i in t.to)
          (e.ingProperties[i] = !0), t.isCleaning && (e.clean[i] = !0);
        if (t.from) {
          this.css(t.from);
          var n = this.element.offsetHeight;
          n = null;
        }
        this.enableTransition(t.to),
          this.css(t.to),
          (this.isTransitioning = !0);
      });
    var l = "opacity," + o(a);
    (d.enableTransition = function () {
      if (!this.isTransitioning) {
        var t = this.layout.options.transitionDuration;
        (t = "number" == typeof t ? t + "ms" : t),
          this.css({
            transitionProperty: l,
            transitionDuration: t,
            transitionDelay: this.staggerDelay || 0,
          }),
          this.element.addEventListener(u, this, !1);
      }
    }),
      (d.onwebkitTransitionEnd = function (t) {
        this.ontransitionend(t);
      }),
      (d.onotransitionend = function (t) {
        this.ontransitionend(t);
      });
    var f = { "-webkit-transform": "transform" };
    (d.ontransitionend = function (t) {
      if (t.target === this.element) {
        var e = this._transn,
          n = f[t.propertyName] || t.propertyName;
        if (
          (delete e.ingProperties[n],
          i(e.ingProperties) && this.disableTransition(),
          n in e.clean &&
            ((this.element.style[t.propertyName] = ""), delete e.clean[n]),
          n in e.onEnd)
        ) {
          var o = e.onEnd[n];
          o.call(this), delete e.onEnd[n];
        }
        this.emitEvent("transitionEnd", [this]);
      }
    }),
      (d.disableTransition = function () {
        this.removeTransitionStyles(),
          this.element.removeEventListener(u, this, !1),
          (this.isTransitioning = !1);
      }),
      (d._removeStyles = function (t) {
        var e = {};
        for (var i in t) e[i] = "";
        this.css(e);
      });
    var m = {
      transitionProperty: "",
      transitionDuration: "",
      transitionDelay: "",
    };
    return (
      (d.removeTransitionStyles = function () {
        this.css(m);
      }),
      (d.stagger = function (t) {
        (t = isNaN(t) ? 0 : t), (this.staggerDelay = t + "ms");
      }),
      (d.removeElem = function () {
        this.element.parentNode.removeChild(this.element),
          this.css({ display: "" }),
          this.emitEvent("remove", [this]);
      }),
      (d.remove = function () {
        return r && parseFloat(this.layout.options.transitionDuration)
          ? (this.once("transitionEnd", function () {
              this.removeElem();
            }),
            void this.hide())
          : void this.removeElem();
      }),
      (d.reveal = function () {
        delete this.isHidden, this.css({ display: "" });
        var t = this.layout.options,
          e = {},
          i = this.getHideRevealTransitionEndProperty("visibleStyle");
        (e[i] = this.onRevealTransitionEnd),
          this.transition({
            from: t.hiddenStyle,
            to: t.visibleStyle,
            isCleaning: !0,
            onTransitionEnd: e,
          });
      }),
      (d.onRevealTransitionEnd = function () {
        this.isHidden || this.emitEvent("reveal");
      }),
      (d.getHideRevealTransitionEndProperty = function (t) {
        var e = this.layout.options[t];
        if (e.opacity) return "opacity";
        for (var i in e) return i;
      }),
      (d.hide = function () {
        (this.isHidden = !0), this.css({ display: "" });
        var t = this.layout.options,
          e = {},
          i = this.getHideRevealTransitionEndProperty("hiddenStyle");
        (e[i] = this.onHideTransitionEnd),
          this.transition({
            from: t.visibleStyle,
            to: t.hiddenStyle,
            isCleaning: !0,
            onTransitionEnd: e,
          });
      }),
      (d.onHideTransitionEnd = function () {
        this.isHidden &&
          (this.css({ display: "none" }), this.emitEvent("hide"));
      }),
      (d.destroy = function () {
        this.css({
          position: "",
          left: "",
          right: "",
          top: "",
          bottom: "",
          transition: "",
          transform: "",
        });
      }),
      n
    );
  }),
  (function (t, e) {
    "use strict";
    "function" == typeof define && define.amd
      ? define(
          "outlayer/outlayer",
          [
            "ev-emitter/ev-emitter",
            "get-size/get-size",
            "fizzy-ui-utils/utils",
            "./item",
          ],
          function (i, n, o, s) {
            return e(t, i, n, o, s);
          }
        )
      : "object" == typeof module && module.exports
      ? (module.exports = e(
          t,
          require("ev-emitter"),
          require("get-size"),
          require("fizzy-ui-utils"),
          require("./item")
        ))
      : (t.Outlayer = e(
          t,
          t.EvEmitter,
          t.getSize,
          t.fizzyUIUtils,
          t.Outlayer.Item
        ));
  })(window, function (t, e, i, n, o) {
    "use strict";
    function s(t, e) {
      var i = n.getQueryElement(t);
      if (!i)
        return void (
          u &&
          u.error(
            "Bad element for " + this.constructor.namespace + ": " + (i || t)
          )
        );
      (this.element = i),
        h && (this.$element = h(this.element)),
        (this.options = n.extend({}, this.constructor.defaults)),
        this.option(e);
      var o = ++l;
      (this.element.outlayerGUID = o), (f[o] = this), this._create();
      var s = this._getOption("initLayout");
      s && this.layout();
    }
    function r(t) {
      function e() {
        t.apply(this, arguments);
      }
      return (
        (e.prototype = Object.create(t.prototype)),
        (e.prototype.constructor = e),
        e
      );
    }
    function a(t) {
      if ("number" == typeof t) return t;
      var e = t.match(/(^\d*\.?\d*)(\w*)/),
        i = e && e[1],
        n = e && e[2];
      if (!i.length) return 0;
      i = parseFloat(i);
      var o = c[n] || 1;
      return i * o;
    }
    var u = t.console,
      h = t.jQuery,
      d = function () {},
      l = 0,
      f = {};
    (s.namespace = "outlayer"),
      (s.Item = o),
      (s.defaults = {
        containerStyle: { position: "relative" },
        initLayout: !0,
        originLeft: !0,
        originTop: !0,
        resize: !0,
        resizeContainer: !0,
        transitionDuration: "0.4s",
        hiddenStyle: { opacity: 0, transform: "scale(0.001)" },
        visibleStyle: { opacity: 1, transform: "scale(1)" },
      });
    var m = s.prototype;
    n.extend(m, e.prototype),
      (m.option = function (t) {
        n.extend(this.options, t);
      }),
      (m._getOption = function (t) {
        var e = this.constructor.compatOptions[t];
        return e && void 0 !== this.options[e]
          ? this.options[e]
          : this.options[t];
      }),
      (s.compatOptions = {
        initLayout: "isInitLayout",
        horizontal: "isHorizontal",
        layoutInstant: "isLayoutInstant",
        originLeft: "isOriginLeft",
        originTop: "isOriginTop",
        resize: "isResizeBound",
        resizeContainer: "isResizingContainer",
      }),
      (m._create = function () {
        this.reloadItems(),
          (this.stamps = []),
          this.stamp(this.options.stamp),
          n.extend(this.element.style, this.options.containerStyle);
        var t = this._getOption("resize");
        t && this.bindResize();
      }),
      (m.reloadItems = function () {
        this.items = this._itemize(this.element.children);
      }),
      (m._itemize = function (t) {
        for (
          var e = this._filterFindItemElements(t),
            i = this.constructor.Item,
            n = [],
            o = 0;
          o < e.length;
          o++
        ) {
          var s = e[o],
            r = new i(s, this);
          n.push(r);
        }
        return n;
      }),
      (m._filterFindItemElements = function (t) {
        return n.filterFindElements(t, this.options.itemSelector);
      }),
      (m.getItemElements = function () {
        return this.items.map(function (t) {
          return t.element;
        });
      }),
      (m.layout = function () {
        this._resetLayout(), this._manageStamps();
        var t = this._getOption("layoutInstant"),
          e = void 0 !== t ? t : !this._isLayoutInited;
        this.layoutItems(this.items, e), (this._isLayoutInited = !0);
      }),
      (m._init = m.layout),
      (m._resetLayout = function () {
        this.getSize();
      }),
      (m.getSize = function () {
        this.size = i(this.element);
      }),
      (m._getMeasurement = function (t, e) {
        var n,
          o = this.options[t];
        o
          ? ("string" == typeof o
              ? (n = this.element.querySelector(o))
              : o instanceof HTMLElement && (n = o),
            (this[t] = n ? i(n)[e] : o))
          : (this[t] = 0);
      }),
      (m.layoutItems = function (t, e) {
        (t = this._getItemsForLayout(t)),
          this._layoutItems(t, e),
          this._postLayout();
      }),
      (m._getItemsForLayout = function (t) {
        return t.filter(function (t) {
          return !t.isIgnored;
        });
      }),
      (m._layoutItems = function (t, e) {
        if ((this._emitCompleteOnItems("layout", t), t && t.length)) {
          var i = [];
          t.forEach(function (t) {
            var n = this._getItemLayoutPosition(t);
            (n.item = t), (n.isInstant = e || t.isLayoutInstant), i.push(n);
          }, this),
            this._processLayoutQueue(i);
        }
      }),
      (m._getItemLayoutPosition = function () {
        return { x: 0, y: 0 };
      }),
      (m._processLayoutQueue = function (t) {
        this.updateStagger(),
          t.forEach(function (t, e) {
            this._positionItem(t.item, t.x, t.y, t.isInstant, e);
          }, this);
      }),
      (m.updateStagger = function () {
        var t = this.options.stagger;
        return null === t || void 0 === t
          ? void (this.stagger = 0)
          : ((this.stagger = a(t)), this.stagger);
      }),
      (m._positionItem = function (t, e, i, n, o) {
        n ? t.goTo(e, i) : (t.stagger(o * this.stagger), t.moveTo(e, i));
      }),
      (m._postLayout = function () {
        this.resizeContainer();
      }),
      (m.resizeContainer = function () {
        var t = this._getOption("resizeContainer");
        if (t) {
          var e = this._getContainerSize();
          e &&
            (this._setContainerMeasure(e.width, !0),
            this._setContainerMeasure(e.height, !1));
        }
      }),
      (m._getContainerSize = d),
      (m._setContainerMeasure = function (t, e) {
        if (void 0 !== t) {
          var i = this.size;
          i.isBorderBox &&
            (t += e
              ? i.paddingLeft +
                i.paddingRight +
                i.borderLeftWidth +
                i.borderRightWidth
              : i.paddingBottom +
                i.paddingTop +
                i.borderTopWidth +
                i.borderBottomWidth),
            (t = Math.max(t, 0)),
            (this.element.style[e ? "width" : "height"] = t + "px");
        }
      }),
      (m._emitCompleteOnItems = function (t, e) {
        function i() {
          o.dispatchEvent(t + "Complete", null, [e]);
        }
        function n() {
          r++, r == s && i();
        }
        var o = this,
          s = e.length;
        if (!e || !s) return void i();
        var r = 0;
        e.forEach(function (e) {
          e.once(t, n);
        });
      }),
      (m.dispatchEvent = function (t, e, i) {
        var n = e ? [e].concat(i) : i;
        if ((this.emitEvent(t, n), h))
          if (((this.$element = this.$element || h(this.element)), e)) {
            var o = h.Event(e);
            (o.type = t), this.$element.trigger(o, i);
          } else this.$element.trigger(t, i);
      }),
      (m.ignore = function (t) {
        var e = this.getItem(t);
        e && (e.isIgnored = !0);
      }),
      (m.unignore = function (t) {
        var e = this.getItem(t);
        e && delete e.isIgnored;
      }),
      (m.stamp = function (t) {
        (t = this._find(t)),
          t &&
            ((this.stamps = this.stamps.concat(t)),
            t.forEach(this.ignore, this));
      }),
      (m.unstamp = function (t) {
        (t = this._find(t)),
          t &&
            t.forEach(function (t) {
              n.removeFrom(this.stamps, t), this.unignore(t);
            }, this);
      }),
      (m._find = function (t) {
        return t
          ? ("string" == typeof t && (t = this.element.querySelectorAll(t)),
            (t = n.makeArray(t)))
          : void 0;
      }),
      (m._manageStamps = function () {
        this.stamps &&
          this.stamps.length &&
          (this._getBoundingRect(),
          this.stamps.forEach(this._manageStamp, this));
      }),
      (m._getBoundingRect = function () {
        var t = this.element.getBoundingClientRect(),
          e = this.size;
        this._boundingRect = {
          left: t.left + e.paddingLeft + e.borderLeftWidth,
          top: t.top + e.paddingTop + e.borderTopWidth,
          right: t.right - (e.paddingRight + e.borderRightWidth),
          bottom: t.bottom - (e.paddingBottom + e.borderBottomWidth),
        };
      }),
      (m._manageStamp = d),
      (m._getElementOffset = function (t) {
        var e = t.getBoundingClientRect(),
          n = this._boundingRect,
          o = i(t),
          s = {
            left: e.left - n.left - o.marginLeft,
            top: e.top - n.top - o.marginTop,
            right: n.right - e.right - o.marginRight,
            bottom: n.bottom - e.bottom - o.marginBottom,
          };
        return s;
      }),
      (m.handleEvent = n.handleEvent),
      (m.bindResize = function () {
        t.addEventListener("resize", this), (this.isResizeBound = !0);
      }),
      (m.unbindResize = function () {
        t.removeEventListener("resize", this), (this.isResizeBound = !1);
      }),
      (m.onresize = function () {
        this.resize();
      }),
      n.debounceMethod(s, "onresize", 100),
      (m.resize = function () {
        this.isResizeBound && this.needsResizeLayout() && this.layout();
      }),
      (m.needsResizeLayout = function () {
        var t = i(this.element),
          e = this.size && t;
        return e && t.innerWidth !== this.size.innerWidth;
      }),
      (m.addItems = function (t) {
        var e = this._itemize(t);
        return e.length && (this.items = this.items.concat(e)), e;
      }),
      (m.appended = function (t) {
        var e = this.addItems(t);
        e.length && (this.layoutItems(e, !0), this.reveal(e));
      }),
      (m.prepended = function (t) {
        var e = this._itemize(t);
        if (e.length) {
          var i = this.items.slice(0);
          (this.items = e.concat(i)),
            this._resetLayout(),
            this._manageStamps(),
            this.layoutItems(e, !0),
            this.reveal(e),
            this.layoutItems(i);
        }
      }),
      (m.reveal = function (t) {
        if ((this._emitCompleteOnItems("reveal", t), t && t.length)) {
          var e = this.updateStagger();
          t.forEach(function (t, i) {
            t.stagger(i * e), t.reveal();
          });
        }
      }),
      (m.hide = function (t) {
        if ((this._emitCompleteOnItems("hide", t), t && t.length)) {
          var e = this.updateStagger();
          t.forEach(function (t, i) {
            t.stagger(i * e), t.hide();
          });
        }
      }),
      (m.revealItemElements = function (t) {
        var e = this.getItems(t);
        this.reveal(e);
      }),
      (m.hideItemElements = function (t) {
        var e = this.getItems(t);
        this.hide(e);
      }),
      (m.getItem = function (t) {
        for (var e = 0; e < this.items.length; e++) {
          var i = this.items[e];
          if (i.element == t) return i;
        }
      }),
      (m.getItems = function (t) {
        t = n.makeArray(t);
        var e = [];
        return (
          t.forEach(function (t) {
            var i = this.getItem(t);
            i && e.push(i);
          }, this),
          e
        );
      }),
      (m.remove = function (t) {
        var e = this.getItems(t);
        this._emitCompleteOnItems("remove", e),
          e &&
            e.length &&
            e.forEach(function (t) {
              t.remove(), n.removeFrom(this.items, t);
            }, this);
      }),
      (m.destroy = function () {
        var t = this.element.style;
        (t.height = ""),
          (t.position = ""),
          (t.width = ""),
          this.items.forEach(function (t) {
            t.destroy();
          }),
          this.unbindResize();
        var e = this.element.outlayerGUID;
        delete f[e],
          delete this.element.outlayerGUID,
          h && h.removeData(this.element, this.constructor.namespace);
      }),
      (s.data = function (t) {
        t = n.getQueryElement(t);
        var e = t && t.outlayerGUID;
        return e && f[e];
      }),
      (s.create = function (t, e) {
        var i = r(s);
        return (
          (i.defaults = n.extend({}, s.defaults)),
          n.extend(i.defaults, e),
          (i.compatOptions = n.extend({}, s.compatOptions)),
          (i.namespace = t),
          (i.data = s.data),
          (i.Item = r(o)),
          n.htmlInit(i, t),
          h && h.bridget && h.bridget(t, i),
          i
        );
      });
    var c = { ms: 1, s: 1e3 };
    return (s.Item = o), s;
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define("isotope/js/item", ["outlayer/outlayer"], e)
      : "object" == typeof module && module.exports
      ? (module.exports = e(require("outlayer")))
      : ((t.Isotope = t.Isotope || {}), (t.Isotope.Item = e(t.Outlayer)));
  })(window, function (t) {
    "use strict";
    function e() {
      t.Item.apply(this, arguments);
    }
    var i = (e.prototype = Object.create(t.Item.prototype)),
      n = i._create;
    (i._create = function () {
      (this.id = this.layout.itemGUID++), n.call(this), (this.sortData = {});
    }),
      (i.updateSortData = function () {
        if (!this.isIgnored) {
          (this.sortData.id = this.id),
            (this.sortData["original-order"] = this.id),
            (this.sortData.random = Math.random());
          var t = this.layout.options.getSortData,
            e = this.layout._sorters;
          for (var i in t) {
            var n = e[i];
            this.sortData[i] = n(this.element, this);
          }
        }
      });
    var o = i.destroy;
    return (
      (i.destroy = function () {
        o.apply(this, arguments), this.css({ display: "" });
      }),
      e
    );
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define(
          "isotope/js/layout-mode",
          ["get-size/get-size", "outlayer/outlayer"],
          e
        )
      : "object" == typeof module && module.exports
      ? (module.exports = e(require("get-size"), require("outlayer")))
      : ((t.Isotope = t.Isotope || {}),
        (t.Isotope.LayoutMode = e(t.getSize, t.Outlayer)));
  })(window, function (t, e) {
    "use strict";
    function i(t) {
      (this.isotope = t),
        t &&
          ((this.options = t.options[this.namespace]),
          (this.element = t.element),
          (this.items = t.filteredItems),
          (this.size = t.size));
    }
    var n = i.prototype,
      o = [
        "_resetLayout",
        "_getItemLayoutPosition",
        "_manageStamp",
        "_getContainerSize",
        "_getElementOffset",
        "needsResizeLayout",
        "_getOption",
      ];
    return (
      o.forEach(function (t) {
        n[t] = function () {
          return e.prototype[t].apply(this.isotope, arguments);
        };
      }),
      (n.needsVerticalResizeLayout = function () {
        var e = t(this.isotope.element),
          i = this.isotope.size && e;
        return i && e.innerHeight != this.isotope.size.innerHeight;
      }),
      (n._getMeasurement = function () {
        this.isotope._getMeasurement.apply(this, arguments);
      }),
      (n.getColumnWidth = function () {
        this.getSegmentSize("column", "Width");
      }),
      (n.getRowHeight = function () {
        this.getSegmentSize("row", "Height");
      }),
      (n.getSegmentSize = function (t, e) {
        var i = t + e,
          n = "outer" + e;
        if ((this._getMeasurement(i, n), !this[i])) {
          var o = this.getFirstItemSize();
          this[i] = (o && o[n]) || this.isotope.size["inner" + e];
        }
      }),
      (n.getFirstItemSize = function () {
        var e = this.isotope.filteredItems[0];
        return e && e.element && t(e.element);
      }),
      (n.layout = function () {
        this.isotope.layout.apply(this.isotope, arguments);
      }),
      (n.getSize = function () {
        this.isotope.getSize(), (this.size = this.isotope.size);
      }),
      (i.modes = {}),
      (i.create = function (t, e) {
        function o() {
          i.apply(this, arguments);
        }
        return (
          (o.prototype = Object.create(n)),
          (o.prototype.constructor = o),
          e && (o.options = e),
          (o.prototype.namespace = t),
          (i.modes[t] = o),
          o
        );
      }),
      i
    );
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define("masonry/masonry", ["outlayer/outlayer", "get-size/get-size"], e)
      : "object" == typeof module && module.exports
      ? (module.exports = e(require("outlayer"), require("get-size")))
      : (t.Masonry = e(t.Outlayer, t.getSize));
  })(window, function (t, e) {
    var i = t.create("masonry");
    i.compatOptions.fitWidth = "isFitWidth";
    var n = i.prototype;
    return (
      (n._resetLayout = function () {
        this.getSize(),
          this._getMeasurement("columnWidth", "outerWidth"),
          this._getMeasurement("gutter", "outerWidth"),
          this.measureColumns(),
          (this.colYs = []);
        for (var t = 0; t < this.cols; t++) this.colYs.push(0);
        (this.maxY = 0), (this.horizontalColIndex = 0);
      }),
      (n.measureColumns = function () {
        if ((this.getContainerWidth(), !this.columnWidth)) {
          var t = this.items[0],
            i = t && t.element;
          this.columnWidth = (i && e(i).outerWidth) || this.containerWidth;
        }
        var n = (this.columnWidth += this.gutter),
          o = this.containerWidth + this.gutter,
          s = o / n,
          r = n - (o % n),
          a = r && 1 > r ? "round" : "floor";
        (s = Math[a](s)), (this.cols = Math.max(s, 1));
      }),
      (n.getContainerWidth = function () {
        var t = this._getOption("fitWidth"),
          i = t ? this.element.parentNode : this.element,
          n = e(i);
        this.containerWidth = n && n.innerWidth;
      }),
      (n._getItemLayoutPosition = function (t) {
        t.getSize();
        var e = t.size.outerWidth % this.columnWidth,
          i = e && 1 > e ? "round" : "ceil",
          n = Math[i](t.size.outerWidth / this.columnWidth);
        n = Math.min(n, this.cols);
        for (
          var o = this.options.horizontalOrder
              ? "_getHorizontalColPosition"
              : "_getTopColPosition",
            s = this[o](n, t),
            r = { x: this.columnWidth * s.col, y: s.y },
            a = s.y + t.size.outerHeight,
            u = n + s.col,
            h = s.col;
          u > h;
          h++
        )
          this.colYs[h] = a;
        return r;
      }),
      (n._getTopColPosition = function (t) {
        var e = this._getTopColGroup(t),
          i = Math.min.apply(Math, e);
        return { col: e.indexOf(i), y: i };
      }),
      (n._getTopColGroup = function (t) {
        if (2 > t) return this.colYs;
        for (var e = [], i = this.cols + 1 - t, n = 0; i > n; n++)
          e[n] = this._getColGroupY(n, t);
        return e;
      }),
      (n._getColGroupY = function (t, e) {
        if (2 > e) return this.colYs[t];
        var i = this.colYs.slice(t, t + e);
        return Math.max.apply(Math, i);
      }),
      (n._getHorizontalColPosition = function (t, e) {
        var i = this.horizontalColIndex % this.cols,
          n = t > 1 && i + t > this.cols;
        i = n ? 0 : i;
        var o = e.size.outerWidth && e.size.outerHeight;
        return (
          (this.horizontalColIndex = o ? i + t : this.horizontalColIndex),
          { col: i, y: this._getColGroupY(i, t) }
        );
      }),
      (n._manageStamp = function (t) {
        var i = e(t),
          n = this._getElementOffset(t),
          o = this._getOption("originLeft"),
          s = o ? n.left : n.right,
          r = s + i.outerWidth,
          a = Math.floor(s / this.columnWidth);
        a = Math.max(0, a);
        var u = Math.floor(r / this.columnWidth);
        (u -= r % this.columnWidth ? 0 : 1), (u = Math.min(this.cols - 1, u));
        for (
          var h = this._getOption("originTop"),
            d = (h ? n.top : n.bottom) + i.outerHeight,
            l = a;
          u >= l;
          l++
        )
          this.colYs[l] = Math.max(d, this.colYs[l]);
      }),
      (n._getContainerSize = function () {
        this.maxY = Math.max.apply(Math, this.colYs);
        var t = { height: this.maxY };
        return (
          this._getOption("fitWidth") &&
            (t.width = this._getContainerFitWidth()),
          t
        );
      }),
      (n._getContainerFitWidth = function () {
        for (var t = 0, e = this.cols; --e && 0 === this.colYs[e]; ) t++;
        return (this.cols - t) * this.columnWidth - this.gutter;
      }),
      (n.needsResizeLayout = function () {
        var t = this.containerWidth;
        return this.getContainerWidth(), t != this.containerWidth;
      }),
      i
    );
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define(
          "isotope/js/layout-modes/masonry",
          ["../layout-mode", "masonry/masonry"],
          e
        )
      : "object" == typeof module && module.exports
      ? (module.exports = e(
          require("../layout-mode"),
          require("masonry-layout")
        ))
      : e(t.Isotope.LayoutMode, t.Masonry);
  })(window, function (t, e) {
    "use strict";
    var i = t.create("masonry"),
      n = i.prototype,
      o = { _getElementOffset: !0, layout: !0, _getMeasurement: !0 };
    for (var s in e.prototype) o[s] || (n[s] = e.prototype[s]);
    var r = n.measureColumns;
    n.measureColumns = function () {
      (this.items = this.isotope.filteredItems), r.call(this);
    };
    var a = n._getOption;
    return (
      (n._getOption = function (t) {
        return "fitWidth" == t
          ? void 0 !== this.options.isFitWidth
            ? this.options.isFitWidth
            : this.options.fitWidth
          : a.apply(this.isotope, arguments);
      }),
      i
    );
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define("isotope/js/layout-modes/fit-rows", ["../layout-mode"], e)
      : "object" == typeof exports
      ? (module.exports = e(require("../layout-mode")))
      : e(t.Isotope.LayoutMode);
  })(window, function (t) {
    "use strict";
    var e = t.create("fitRows"),
      i = e.prototype;
    return (
      (i._resetLayout = function () {
        (this.x = 0),
          (this.y = 0),
          (this.maxY = 0),
          this._getMeasurement("gutter", "outerWidth");
      }),
      (i._getItemLayoutPosition = function (t) {
        t.getSize();
        var e = t.size.outerWidth + this.gutter,
          i = this.isotope.size.innerWidth + this.gutter;
        0 !== this.x && e + this.x > i && ((this.x = 0), (this.y = this.maxY));
        var n = { x: this.x, y: this.y };
        return (
          (this.maxY = Math.max(this.maxY, this.y + t.size.outerHeight)),
          (this.x += e),
          n
        );
      }),
      (i._getContainerSize = function () {
        return { height: this.maxY };
      }),
      e
    );
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define("isotope/js/layout-modes/vertical", ["../layout-mode"], e)
      : "object" == typeof module && module.exports
      ? (module.exports = e(require("../layout-mode")))
      : e(t.Isotope.LayoutMode);
  })(window, function (t) {
    "use strict";
    var e = t.create("vertical", { horizontalAlignment: 0 }),
      i = e.prototype;
    return (
      (i._resetLayout = function () {
        this.y = 0;
      }),
      (i._getItemLayoutPosition = function (t) {
        t.getSize();
        var e =
            (this.isotope.size.innerWidth - t.size.outerWidth) *
            this.options.horizontalAlignment,
          i = this.y;
        return (this.y += t.size.outerHeight), { x: e, y: i };
      }),
      (i._getContainerSize = function () {
        return { height: this.y };
      }),
      e
    );
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define(
          [
            "outlayer/outlayer",
            "get-size/get-size",
            "desandro-matches-selector/matches-selector",
            "fizzy-ui-utils/utils",
            "isotope/js/item",
            "isotope/js/layout-mode",
            "isotope/js/layout-modes/masonry",
            "isotope/js/layout-modes/fit-rows",
            "isotope/js/layout-modes/vertical",
          ],
          function (i, n, o, s, r, a) {
            return e(t, i, n, o, s, r, a);
          }
        )
      : "object" == typeof module && module.exports
      ? (module.exports = e(
          t,
          require("outlayer"),
          require("get-size"),
          require("desandro-matches-selector"),
          require("fizzy-ui-utils"),
          require("isotope/js/item"),
          require("isotope/js/layout-mode"),
          require("isotope/js/layout-modes/masonry"),
          require("isotope/js/layout-modes/fit-rows"),
          require("isotope/js/layout-modes/vertical")
        ))
      : (t.Isotope = e(
          t,
          t.Outlayer,
          t.getSize,
          t.matchesSelector,
          t.fizzyUIUtils,
          t.Isotope.Item,
          t.Isotope.LayoutMode
        ));
  })(window, function (t, e, i, n, o, s, r) {
    function a(t, e) {
      return function (i, n) {
        for (var o = 0; o < t.length; o++) {
          var s = t[o],
            r = i.sortData[s],
            a = n.sortData[s];
          if (r > a || a > r) {
            var u = void 0 !== e[s] ? e[s] : e,
              h = u ? 1 : -1;
            return (r > a ? 1 : -1) * h;
          }
        }
        return 0;
      };
    }
    var u = t.jQuery,
      h = String.prototype.trim
        ? function (t) {
            return t.trim();
          }
        : function (t) {
            return t.replace(/^\s+|\s+$/g, "");
          },
      d = e.create("isotope", {
        layoutMode: "masonry",
        isJQueryFiltering: !0,
        sortAscending: !0,
      });
    (d.Item = s), (d.LayoutMode = r);
    var l = d.prototype;
    (l._create = function () {
      (this.itemGUID = 0),
        (this._sorters = {}),
        this._getSorters(),
        e.prototype._create.call(this),
        (this.modes = {}),
        (this.filteredItems = this.items),
        (this.sortHistory = ["original-order"]);
      for (var t in r.modes) this._initLayoutMode(t);
    }),
      (l.reloadItems = function () {
        (this.itemGUID = 0), e.prototype.reloadItems.call(this);
      }),
      (l._itemize = function () {
        for (
          var t = e.prototype._itemize.apply(this, arguments), i = 0;
          i < t.length;
          i++
        ) {
          var n = t[i];
          n.id = this.itemGUID++;
        }
        return this._updateItemsSortData(t), t;
      }),
      (l._initLayoutMode = function (t) {
        var e = r.modes[t],
          i = this.options[t] || {};
        (this.options[t] = e.options ? o.extend(e.options, i) : i),
          (this.modes[t] = new e(this));
      }),
      (l.layout = function () {
        return !this._isLayoutInited && this._getOption("initLayout")
          ? void this.arrange()
          : void this._layout();
      }),
      (l._layout = function () {
        var t = this._getIsInstant();
        this._resetLayout(),
          this._manageStamps(),
          this.layoutItems(this.filteredItems, t),
          (this._isLayoutInited = !0);
      }),
      (l.arrange = function (t) {
        this.option(t), this._getIsInstant();
        var e = this._filter(this.items);
        (this.filteredItems = e.matches),
          this._bindArrangeComplete(),
          this._isInstant
            ? this._noTransition(this._hideReveal, [e])
            : this._hideReveal(e),
          this._sort(),
          this._layout();
      }),
      (l._init = l.arrange),
      (l._hideReveal = function (t) {
        this.reveal(t.needReveal), this.hide(t.needHide);
      }),
      (l._getIsInstant = function () {
        var t = this._getOption("layoutInstant"),
          e = void 0 !== t ? t : !this._isLayoutInited;
        return (this._isInstant = e), e;
      }),
      (l._bindArrangeComplete = function () {
        function t() {
          e &&
            i &&
            n &&
            o.dispatchEvent("arrangeComplete", null, [o.filteredItems]);
        }
        var e,
          i,
          n,
          o = this;
        this.once("layoutComplete", function () {
          (e = !0), t();
        }),
          this.once("hideComplete", function () {
            (i = !0), t();
          }),
          this.once("revealComplete", function () {
            (n = !0), t();
          });
      }),
      (l._filter = function (t) {
        var e = this.options.filter;
        e = e || "*";
        for (
          var i = [], n = [], o = [], s = this._getFilterTest(e), r = 0;
          r < t.length;
          r++
        ) {
          var a = t[r];
          if (!a.isIgnored) {
            var u = s(a);
            u && i.push(a),
              u && a.isHidden ? n.push(a) : u || a.isHidden || o.push(a);
          }
        }
        return { matches: i, needReveal: n, needHide: o };
      }),
      (l._getFilterTest = function (t) {
        return u && this.options.isJQueryFiltering
          ? function (e) {
              return u(e.element).is(t);
            }
          : "function" == typeof t
          ? function (e) {
              return t(e.element);
            }
          : function (e) {
              return n(e.element, t);
            };
      }),
      (l.updateSortData = function (t) {
        var e;
        t ? ((t = o.makeArray(t)), (e = this.getItems(t))) : (e = this.items),
          this._getSorters(),
          this._updateItemsSortData(e);
      }),
      (l._getSorters = function () {
        var t = this.options.getSortData;
        for (var e in t) {
          var i = t[e];
          this._sorters[e] = f(i);
        }
      }),
      (l._updateItemsSortData = function (t) {
        for (var e = t && t.length, i = 0; e && e > i; i++) {
          var n = t[i];
          n.updateSortData();
        }
      });
    var f = (function () {
      function t(t) {
        if ("string" != typeof t) return t;
        var i = h(t).split(" "),
          n = i[0],
          o = n.match(/^\[(.+)\]$/),
          s = o && o[1],
          r = e(s, n),
          a = d.sortDataParsers[i[1]];
        return (t = a
          ? function (t) {
              return t && a(r(t));
            }
          : function (t) {
              return t && r(t);
            });
      }
      function e(t, e) {
        return t
          ? function (e) {
              return e.getAttribute(t);
            }
          : function (t) {
              var i = t.querySelector(e);
              return i && i.textContent;
            };
      }
      return t;
    })();
    (d.sortDataParsers = {
      parseInt: function (t) {
        return parseInt(t, 10);
      },
      parseFloat: function (t) {
        return parseFloat(t);
      },
    }),
      (l._sort = function () {
        if (this.options.sortBy) {
          var t = o.makeArray(this.options.sortBy);
          this._getIsSameSortBy(t) ||
            (this.sortHistory = t.concat(this.sortHistory));
          var e = a(this.sortHistory, this.options.sortAscending);
          this.filteredItems.sort(e);
        }
      }),
      (l._getIsSameSortBy = function (t) {
        for (var e = 0; e < t.length; e++)
          if (t[e] != this.sortHistory[e]) return !1;
        return !0;
      }),
      (l._mode = function () {
        var t = this.options.layoutMode,
          e = this.modes[t];
        if (!e) throw new Error("No layout mode: " + t);
        return (e.options = this.options[t]), e;
      }),
      (l._resetLayout = function () {
        e.prototype._resetLayout.call(this), this._mode()._resetLayout();
      }),
      (l._getItemLayoutPosition = function (t) {
        return this._mode()._getItemLayoutPosition(t);
      }),
      (l._manageStamp = function (t) {
        this._mode()._manageStamp(t);
      }),
      (l._getContainerSize = function () {
        return this._mode()._getContainerSize();
      }),
      (l.needsResizeLayout = function () {
        return this._mode().needsResizeLayout();
      }),
      (l.appended = function (t) {
        var e = this.addItems(t);
        if (e.length) {
          var i = this._filterRevealAdded(e);
          this.filteredItems = this.filteredItems.concat(i);
        }
      }),
      (l.prepended = function (t) {
        var e = this._itemize(t);
        if (e.length) {
          this._resetLayout(), this._manageStamps();
          var i = this._filterRevealAdded(e);
          this.layoutItems(this.filteredItems),
            (this.filteredItems = i.concat(this.filteredItems)),
            (this.items = e.concat(this.items));
        }
      }),
      (l._filterRevealAdded = function (t) {
        var e = this._filter(t);
        return (
          this.hide(e.needHide),
          this.reveal(e.matches),
          this.layoutItems(e.matches, !0),
          e.matches
        );
      }),
      (l.insert = function (t) {
        var e = this.addItems(t);
        if (e.length) {
          var i,
            n,
            o = e.length;
          for (i = 0; o > i; i++)
            (n = e[i]), this.element.appendChild(n.element);
          var s = this._filter(e).matches;
          for (i = 0; o > i; i++) e[i].isLayoutInstant = !0;
          for (this.arrange(), i = 0; o > i; i++) delete e[i].isLayoutInstant;
          this.reveal(s);
        }
      });
    var m = l.remove;
    return (
      (l.remove = function (t) {
        t = o.makeArray(t);
        var e = this.getItems(t);
        m.call(this, t);
        for (var i = e && e.length, n = 0; i && i > n; n++) {
          var s = e[n];
          o.removeFrom(this.filteredItems, s);
        }
      }),
      (l.shuffle = function () {
        for (var t = 0; t < this.items.length; t++) {
          var e = this.items[t];
          e.sortData.random = Math.random();
        }
        (this.options.sortBy = "random"), this._sort(), this._layout();
      }),
      (l._noTransition = function (t, e) {
        var i = this.options.transitionDuration;
        this.options.transitionDuration = 0;
        var n = t.apply(this, e);
        return (this.options.transitionDuration = i), n;
      }),
      (l.getFilteredItemElements = function () {
        return this.filteredItems.map(function (t) {
          return t.element;
        });
      }),
      d
    );
  });

/*! Masonry */

!(function (t, e) {
  "function" == typeof define && define.amd
    ? define("jquery-bridget/jquery-bridget", ["jquery"], function (i) {
        return e(t, i);
      })
    : "object" == typeof module && module.exports
    ? (module.exports = e(t, require("jquery")))
    : (t.jQueryBridget = e(t, t.jQuery));
})(window, function (t, e) {
  "use strict";
  function i(i, r, a) {
    function h(t, e, n) {
      var o,
        r = "$()." + i + '("' + e + '")';
      return (
        t.each(function (t, h) {
          var u = a.data(h, i);
          if (!u)
            return void s(
              i + " not initialized. Cannot call methods, i.e. " + r
            );
          var d = u[e];
          if (!d || "_" == e.charAt(0))
            return void s(r + " is not a valid method");
          var l = d.apply(u, n);
          o = void 0 === o ? l : o;
        }),
        void 0 !== o ? o : t
      );
    }
    function u(t, e) {
      t.each(function (t, n) {
        var o = a.data(n, i);
        o ? (o.option(e), o._init()) : ((o = new r(n, e)), a.data(n, i, o));
      });
    }
    (a = a || e || t.jQuery),
      a &&
        (r.prototype.option ||
          (r.prototype.option = function (t) {
            a.isPlainObject(t) &&
              (this.options = a.extend(!0, this.options, t));
          }),
        (a.fn[i] = function (t) {
          if ("string" == typeof t) {
            var e = o.call(arguments, 1);
            return h(this, t, e);
          }
          return u(this, t), this;
        }),
        n(a));
  }
  function n(t) {
    !t || (t && t.bridget) || (t.bridget = i);
  }
  var o = Array.prototype.slice,
    r = t.console,
    s =
      "undefined" == typeof r
        ? function () {}
        : function (t) {
            r.error(t);
          };
  return n(e || t.jQuery), i;
}),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define("ev-emitter/ev-emitter", e)
      : "object" == typeof module && module.exports
      ? (module.exports = e())
      : (t.EvEmitter = e());
  })("undefined" != typeof window ? window : this, function () {
    function t() {}
    var e = t.prototype;
    return (
      (e.on = function (t, e) {
        if (t && e) {
          var i = (this._events = this._events || {}),
            n = (i[t] = i[t] || []);
          return -1 == n.indexOf(e) && n.push(e), this;
        }
      }),
      (e.once = function (t, e) {
        if (t && e) {
          this.on(t, e);
          var i = (this._onceEvents = this._onceEvents || {}),
            n = (i[t] = i[t] || {});
          return (n[e] = !0), this;
        }
      }),
      (e.off = function (t, e) {
        var i = this._events && this._events[t];
        if (i && i.length) {
          var n = i.indexOf(e);
          return -1 != n && i.splice(n, 1), this;
        }
      }),
      (e.emitEvent = function (t, e) {
        var i = this._events && this._events[t];
        if (i && i.length) {
          var n = 0,
            o = i[n];
          e = e || [];
          for (var r = this._onceEvents && this._onceEvents[t]; o; ) {
            var s = r && r[o];
            s && (this.off(t, o), delete r[o]),
              o.apply(this, e),
              (n += s ? 0 : 1),
              (o = i[n]);
          }
          return this;
        }
      }),
      t
    );
  }),
  (function (t, e) {
    "use strict";
    "function" == typeof define && define.amd
      ? define("get-size/get-size", [], function () {
          return e();
        })
      : "object" == typeof module && module.exports
      ? (module.exports = e())
      : (t.getSize = e());
  })(window, function () {
    "use strict";
    function t(t) {
      var e = parseFloat(t),
        i = -1 == t.indexOf("%") && !isNaN(e);
      return i && e;
    }
    function e() {}
    function i() {
      for (
        var t = {
            width: 0,
            height: 0,
            innerWidth: 0,
            innerHeight: 0,
            outerWidth: 0,
            outerHeight: 0,
          },
          e = 0;
        u > e;
        e++
      ) {
        var i = h[e];
        t[i] = 0;
      }
      return t;
    }
    function n(t) {
      var e = getComputedStyle(t);
      return (
        e ||
          a(
            "Style returned " +
              e +
              ". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"
          ),
        e
      );
    }
    function o() {
      if (!d) {
        d = !0;
        var e = document.createElement("div");
        (e.style.width = "200px"),
          (e.style.padding = "1px 2px 3px 4px"),
          (e.style.borderStyle = "solid"),
          (e.style.borderWidth = "1px 2px 3px 4px"),
          (e.style.boxSizing = "border-box");
        var i = document.body || document.documentElement;
        i.appendChild(e);
        var o = n(e);
        (r.isBoxSizeOuter = s = 200 == t(o.width)), i.removeChild(e);
      }
    }
    function r(e) {
      if (
        (o(),
        "string" == typeof e && (e = document.querySelector(e)),
        e && "object" == typeof e && e.nodeType)
      ) {
        var r = n(e);
        if ("none" == r.display) return i();
        var a = {};
        (a.width = e.offsetWidth), (a.height = e.offsetHeight);
        for (
          var d = (a.isBorderBox = "border-box" == r.boxSizing), l = 0;
          u > l;
          l++
        ) {
          var c = h[l],
            f = r[c],
            m = parseFloat(f);
          a[c] = isNaN(m) ? 0 : m;
        }
        var p = a.paddingLeft + a.paddingRight,
          g = a.paddingTop + a.paddingBottom,
          y = a.marginLeft + a.marginRight,
          v = a.marginTop + a.marginBottom,
          _ = a.borderLeftWidth + a.borderRightWidth,
          z = a.borderTopWidth + a.borderBottomWidth,
          E = d && s,
          b = t(r.width);
        b !== !1 && (a.width = b + (E ? 0 : p + _));
        var x = t(r.height);
        return (
          x !== !1 && (a.height = x + (E ? 0 : g + z)),
          (a.innerWidth = a.width - (p + _)),
          (a.innerHeight = a.height - (g + z)),
          (a.outerWidth = a.width + y),
          (a.outerHeight = a.height + v),
          a
        );
      }
    }
    var s,
      a =
        "undefined" == typeof console
          ? e
          : function (t) {
              console.error(t);
            },
      h = [
        "paddingLeft",
        "paddingRight",
        "paddingTop",
        "paddingBottom",
        "marginLeft",
        "marginRight",
        "marginTop",
        "marginBottom",
        "borderLeftWidth",
        "borderRightWidth",
        "borderTopWidth",
        "borderBottomWidth",
      ],
      u = h.length,
      d = !1;
    return r;
  }),
  (function (t, e) {
    "use strict";
    "function" == typeof define && define.amd
      ? define("desandro-matches-selector/matches-selector", e)
      : "object" == typeof module && module.exports
      ? (module.exports = e())
      : (t.matchesSelector = e());
  })(window, function () {
    "use strict";
    var t = (function () {
      var t = window.Element.prototype;
      if (t.matches) return "matches";
      if (t.matchesSelector) return "matchesSelector";
      for (var e = ["webkit", "moz", "ms", "o"], i = 0; i < e.length; i++) {
        var n = e[i],
          o = n + "MatchesSelector";
        if (t[o]) return o;
      }
    })();
    return function (e, i) {
      return e[t](i);
    };
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define(
          "fizzy-ui-utils/utils",
          ["desandro-matches-selector/matches-selector"],
          function (i) {
            return e(t, i);
          }
        )
      : "object" == typeof module && module.exports
      ? (module.exports = e(t, require("desandro-matches-selector")))
      : (t.fizzyUIUtils = e(t, t.matchesSelector));
  })(window, function (t, e) {
    var i = {};
    (i.extend = function (t, e) {
      for (var i in e) t[i] = e[i];
      return t;
    }),
      (i.modulo = function (t, e) {
        return ((t % e) + e) % e;
      }),
      (i.makeArray = function (t) {
        var e = [];
        if (Array.isArray(t)) e = t;
        else if (t && "object" == typeof t && "number" == typeof t.length)
          for (var i = 0; i < t.length; i++) e.push(t[i]);
        else e.push(t);
        return e;
      }),
      (i.removeFrom = function (t, e) {
        var i = t.indexOf(e);
        -1 != i && t.splice(i, 1);
      }),
      (i.getParent = function (t, i) {
        for (; t != document.body; )
          if (((t = t.parentNode), e(t, i))) return t;
      }),
      (i.getQueryElement = function (t) {
        return "string" == typeof t ? document.querySelector(t) : t;
      }),
      (i.handleEvent = function (t) {
        var e = "on" + t.type;
        this[e] && this[e](t);
      }),
      (i.filterFindElements = function (t, n) {
        t = i.makeArray(t);
        var o = [];
        return (
          t.forEach(function (t) {
            if (t instanceof HTMLElement) {
              if (!n) return void o.push(t);
              e(t, n) && o.push(t);
              for (var i = t.querySelectorAll(n), r = 0; r < i.length; r++)
                o.push(i[r]);
            }
          }),
          o
        );
      }),
      (i.debounceMethod = function (t, e, i) {
        var n = t.prototype[e],
          o = e + "Timeout";
        t.prototype[e] = function () {
          var t = this[o];
          t && clearTimeout(t);
          var e = arguments,
            r = this;
          this[o] = setTimeout(function () {
            n.apply(r, e), delete r[o];
          }, i || 100);
        };
      }),
      (i.docReady = function (t) {
        var e = document.readyState;
        "complete" == e || "interactive" == e
          ? setTimeout(t)
          : document.addEventListener("DOMContentLoaded", t);
      }),
      (i.toDashed = function (t) {
        return t
          .replace(/(.)([A-Z])/g, function (t, e, i) {
            return e + "-" + i;
          })
          .toLowerCase();
      });
    var n = t.console;
    return (
      (i.htmlInit = function (e, o) {
        i.docReady(function () {
          var r = i.toDashed(o),
            s = "data-" + r,
            a = document.querySelectorAll("[" + s + "]"),
            h = document.querySelectorAll(".js-" + r),
            u = i.makeArray(a).concat(i.makeArray(h)),
            d = s + "-options",
            l = t.jQuery;
          u.forEach(function (t) {
            var i,
              r = t.getAttribute(s) || t.getAttribute(d);
            try {
              i = r && JSON.parse(r);
            } catch (a) {
              return void (
                n &&
                n.error("Error parsing " + s + " on " + t.className + ": " + a)
              );
            }
            var h = new e(t, i);
            l && l.data(t, o, h);
          });
        });
      }),
      i
    );
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define(
          "outlayer/item",
          ["ev-emitter/ev-emitter", "get-size/get-size"],
          e
        )
      : "object" == typeof module && module.exports
      ? (module.exports = e(require("ev-emitter"), require("get-size")))
      : ((t.Outlayer = {}), (t.Outlayer.Item = e(t.EvEmitter, t.getSize)));
  })(window, function (t, e) {
    "use strict";
    function i(t) {
      for (var e in t) return !1;
      return (e = null), !0;
    }
    function n(t, e) {
      t &&
        ((this.element = t),
        (this.layout = e),
        (this.position = { x: 0, y: 0 }),
        this._create());
    }
    function o(t) {
      return t.replace(/([A-Z])/g, function (t) {
        return "-" + t.toLowerCase();
      });
    }
    var r = document.documentElement.style,
      s = "string" == typeof r.transition ? "transition" : "WebkitTransition",
      a = "string" == typeof r.transform ? "transform" : "WebkitTransform",
      h = {
        WebkitTransition: "webkitTransitionEnd",
        transition: "transitionend",
      }[s],
      u = {
        transform: a,
        transition: s,
        transitionDuration: s + "Duration",
        transitionProperty: s + "Property",
        transitionDelay: s + "Delay",
      },
      d = (n.prototype = Object.create(t.prototype));
    (d.constructor = n),
      (d._create = function () {
        (this._transn = { ingProperties: {}, clean: {}, onEnd: {} }),
          this.css({ position: "absolute" });
      }),
      (d.handleEvent = function (t) {
        var e = "on" + t.type;
        this[e] && this[e](t);
      }),
      (d.getSize = function () {
        this.size = e(this.element);
      }),
      (d.css = function (t) {
        var e = this.element.style;
        for (var i in t) {
          var n = u[i] || i;
          e[n] = t[i];
        }
      }),
      (d.getPosition = function () {
        var t = getComputedStyle(this.element),
          e = this.layout._getOption("originLeft"),
          i = this.layout._getOption("originTop"),
          n = t[e ? "left" : "right"],
          o = t[i ? "top" : "bottom"],
          r = this.layout.size,
          s =
            -1 != n.indexOf("%")
              ? (parseFloat(n) / 100) * r.width
              : parseInt(n, 10),
          a =
            -1 != o.indexOf("%")
              ? (parseFloat(o) / 100) * r.height
              : parseInt(o, 10);
        (s = isNaN(s) ? 0 : s),
          (a = isNaN(a) ? 0 : a),
          (s -= e ? r.paddingLeft : r.paddingRight),
          (a -= i ? r.paddingTop : r.paddingBottom),
          (this.position.x = s),
          (this.position.y = a);
      }),
      (d.layoutPosition = function () {
        var t = this.layout.size,
          e = {},
          i = this.layout._getOption("originLeft"),
          n = this.layout._getOption("originTop"),
          o = i ? "paddingLeft" : "paddingRight",
          r = i ? "left" : "right",
          s = i ? "right" : "left",
          a = this.position.x + t[o];
        (e[r] = this.getXValue(a)), (e[s] = "");
        var h = n ? "paddingTop" : "paddingBottom",
          u = n ? "top" : "bottom",
          d = n ? "bottom" : "top",
          l = this.position.y + t[h];
        (e[u] = this.getYValue(l)),
          (e[d] = ""),
          this.css(e),
          this.emitEvent("layout", [this]);
      }),
      (d.getXValue = function (t) {
        var e = this.layout._getOption("horizontal");
        return this.layout.options.percentPosition && !e
          ? (t / this.layout.size.width) * 100 + "%"
          : t + "px";
      }),
      (d.getYValue = function (t) {
        var e = this.layout._getOption("horizontal");
        return this.layout.options.percentPosition && e
          ? (t / this.layout.size.height) * 100 + "%"
          : t + "px";
      }),
      (d._transitionTo = function (t, e) {
        this.getPosition();
        var i = this.position.x,
          n = this.position.y,
          o = parseInt(t, 10),
          r = parseInt(e, 10),
          s = o === this.position.x && r === this.position.y;
        if ((this.setPosition(t, e), s && !this.isTransitioning))
          return void this.layoutPosition();
        var a = t - i,
          h = e - n,
          u = {};
        (u.transform = this.getTranslate(a, h)),
          this.transition({
            to: u,
            onTransitionEnd: { transform: this.layoutPosition },
            isCleaning: !0,
          });
      }),
      (d.getTranslate = function (t, e) {
        var i = this.layout._getOption("originLeft"),
          n = this.layout._getOption("originTop");
        return (
          (t = i ? t : -t),
          (e = n ? e : -e),
          "translate3d(" + t + "px, " + e + "px, 0)"
        );
      }),
      (d.goTo = function (t, e) {
        this.setPosition(t, e), this.layoutPosition();
      }),
      (d.moveTo = d._transitionTo),
      (d.setPosition = function (t, e) {
        (this.position.x = parseInt(t, 10)),
          (this.position.y = parseInt(e, 10));
      }),
      (d._nonTransition = function (t) {
        this.css(t.to), t.isCleaning && this._removeStyles(t.to);
        for (var e in t.onTransitionEnd) t.onTransitionEnd[e].call(this);
      }),
      (d.transition = function (t) {
        if (!parseFloat(this.layout.options.transitionDuration))
          return void this._nonTransition(t);
        var e = this._transn;
        for (var i in t.onTransitionEnd) e.onEnd[i] = t.onTransitionEnd[i];
        for (i in t.to)
          (e.ingProperties[i] = !0), t.isCleaning && (e.clean[i] = !0);
        if (t.from) {
          this.css(t.from);
          var n = this.element.offsetHeight;
          n = null;
        }
        this.enableTransition(t.to),
          this.css(t.to),
          (this.isTransitioning = !0);
      });
    var l = "opacity," + o(a);
    (d.enableTransition = function () {
      if (!this.isTransitioning) {
        var t = this.layout.options.transitionDuration;
        (t = "number" == typeof t ? t + "ms" : t),
          this.css({
            transitionProperty: l,
            transitionDuration: t,
            transitionDelay: this.staggerDelay || 0,
          }),
          this.element.addEventListener(h, this, !1);
      }
    }),
      (d.onwebkitTransitionEnd = function (t) {
        this.ontransitionend(t);
      }),
      (d.onotransitionend = function (t) {
        this.ontransitionend(t);
      });
    var c = { "-webkit-transform": "transform" };
    (d.ontransitionend = function (t) {
      if (t.target === this.element) {
        var e = this._transn,
          n = c[t.propertyName] || t.propertyName;
        if (
          (delete e.ingProperties[n],
          i(e.ingProperties) && this.disableTransition(),
          n in e.clean &&
            ((this.element.style[t.propertyName] = ""), delete e.clean[n]),
          n in e.onEnd)
        ) {
          var o = e.onEnd[n];
          o.call(this), delete e.onEnd[n];
        }
        this.emitEvent("transitionEnd", [this]);
      }
    }),
      (d.disableTransition = function () {
        this.removeTransitionStyles(),
          this.element.removeEventListener(h, this, !1),
          (this.isTransitioning = !1);
      }),
      (d._removeStyles = function (t) {
        var e = {};
        for (var i in t) e[i] = "";
        this.css(e);
      });
    var f = {
      transitionProperty: "",
      transitionDuration: "",
      transitionDelay: "",
    };
    return (
      (d.removeTransitionStyles = function () {
        this.css(f);
      }),
      (d.stagger = function (t) {
        (t = isNaN(t) ? 0 : t), (this.staggerDelay = t + "ms");
      }),
      (d.removeElem = function () {
        this.element.parentNode.removeChild(this.element),
          this.css({ display: "" }),
          this.emitEvent("remove", [this]);
      }),
      (d.remove = function () {
        return s && parseFloat(this.layout.options.transitionDuration)
          ? (this.once("transitionEnd", function () {
              this.removeElem();
            }),
            void this.hide())
          : void this.removeElem();
      }),
      (d.reveal = function () {
        delete this.isHidden, this.css({ display: "" });
        var t = this.layout.options,
          e = {},
          i = this.getHideRevealTransitionEndProperty("visibleStyle");
        (e[i] = this.onRevealTransitionEnd),
          this.transition({
            from: t.hiddenStyle,
            to: t.visibleStyle,
            isCleaning: !0,
            onTransitionEnd: e,
          });
      }),
      (d.onRevealTransitionEnd = function () {
        this.isHidden || this.emitEvent("reveal");
      }),
      (d.getHideRevealTransitionEndProperty = function (t) {
        var e = this.layout.options[t];
        if (e.opacity) return "opacity";
        for (var i in e) return i;
      }),
      (d.hide = function () {
        (this.isHidden = !0), this.css({ display: "" });
        var t = this.layout.options,
          e = {},
          i = this.getHideRevealTransitionEndProperty("hiddenStyle");
        (e[i] = this.onHideTransitionEnd),
          this.transition({
            from: t.visibleStyle,
            to: t.hiddenStyle,
            isCleaning: !0,
            onTransitionEnd: e,
          });
      }),
      (d.onHideTransitionEnd = function () {
        this.isHidden &&
          (this.css({ display: "none" }), this.emitEvent("hide"));
      }),
      (d.destroy = function () {
        this.css({
          position: "",
          left: "",
          right: "",
          top: "",
          bottom: "",
          transition: "",
          transform: "",
        });
      }),
      n
    );
  }),
  (function (t, e) {
    "use strict";
    "function" == typeof define && define.amd
      ? define(
          "outlayer/outlayer",
          [
            "ev-emitter/ev-emitter",
            "get-size/get-size",
            "fizzy-ui-utils/utils",
            "./item",
          ],
          function (i, n, o, r) {
            return e(t, i, n, o, r);
          }
        )
      : "object" == typeof module && module.exports
      ? (module.exports = e(
          t,
          require("ev-emitter"),
          require("get-size"),
          require("fizzy-ui-utils"),
          require("./item")
        ))
      : (t.Outlayer = e(
          t,
          t.EvEmitter,
          t.getSize,
          t.fizzyUIUtils,
          t.Outlayer.Item
        ));
  })(window, function (t, e, i, n, o) {
    "use strict";
    function r(t, e) {
      var i = n.getQueryElement(t);
      if (!i)
        return void (
          h &&
          h.error(
            "Bad element for " + this.constructor.namespace + ": " + (i || t)
          )
        );
      (this.element = i),
        u && (this.$element = u(this.element)),
        (this.options = n.extend({}, this.constructor.defaults)),
        this.option(e);
      var o = ++l;
      (this.element.outlayerGUID = o), (c[o] = this), this._create();
      var r = this._getOption("initLayout");
      r && this.layout();
    }
    function s(t) {
      function e() {
        t.apply(this, arguments);
      }
      return (
        (e.prototype = Object.create(t.prototype)),
        (e.prototype.constructor = e),
        e
      );
    }
    function a(t) {
      if ("number" == typeof t) return t;
      var e = t.match(/(^\d*\.?\d*)(\w*)/),
        i = e && e[1],
        n = e && e[2];
      if (!i.length) return 0;
      i = parseFloat(i);
      var o = m[n] || 1;
      return i * o;
    }
    var h = t.console,
      u = t.jQuery,
      d = function () {},
      l = 0,
      c = {};
    (r.namespace = "outlayer"),
      (r.Item = o),
      (r.defaults = {
        containerStyle: { position: "relative" },
        initLayout: !0,
        originLeft: !0,
        originTop: !0,
        resize: !0,
        resizeContainer: !0,
        transitionDuration: "0.4s",
        hiddenStyle: { opacity: 0, transform: "scale(0.001)" },
        visibleStyle: { opacity: 1, transform: "scale(1)" },
      });
    var f = r.prototype;
    n.extend(f, e.prototype),
      (f.option = function (t) {
        n.extend(this.options, t);
      }),
      (f._getOption = function (t) {
        var e = this.constructor.compatOptions[t];
        return e && void 0 !== this.options[e]
          ? this.options[e]
          : this.options[t];
      }),
      (r.compatOptions = {
        initLayout: "isInitLayout",
        horizontal: "isHorizontal",
        layoutInstant: "isLayoutInstant",
        originLeft: "isOriginLeft",
        originTop: "isOriginTop",
        resize: "isResizeBound",
        resizeContainer: "isResizingContainer",
      }),
      (f._create = function () {
        this.reloadItems(),
          (this.stamps = []),
          this.stamp(this.options.stamp),
          n.extend(this.element.style, this.options.containerStyle);
        var t = this._getOption("resize");
        t && this.bindResize();
      }),
      (f.reloadItems = function () {
        this.items = this._itemize(this.element.children);
      }),
      (f._itemize = function (t) {
        for (
          var e = this._filterFindItemElements(t),
            i = this.constructor.Item,
            n = [],
            o = 0;
          o < e.length;
          o++
        ) {
          var r = e[o],
            s = new i(r, this);
          n.push(s);
        }
        return n;
      }),
      (f._filterFindItemElements = function (t) {
        return n.filterFindElements(t, this.options.itemSelector);
      }),
      (f.getItemElements = function () {
        return this.items.map(function (t) {
          return t.element;
        });
      }),
      (f.layout = function () {
        this._resetLayout(), this._manageStamps();
        var t = this._getOption("layoutInstant"),
          e = void 0 !== t ? t : !this._isLayoutInited;
        this.layoutItems(this.items, e), (this._isLayoutInited = !0);
      }),
      (f._init = f.layout),
      (f._resetLayout = function () {
        this.getSize();
      }),
      (f.getSize = function () {
        this.size = i(this.element);
      }),
      (f._getMeasurement = function (t, e) {
        var n,
          o = this.options[t];
        o
          ? ("string" == typeof o
              ? (n = this.element.querySelector(o))
              : o instanceof HTMLElement && (n = o),
            (this[t] = n ? i(n)[e] : o))
          : (this[t] = 0);
      }),
      (f.layoutItems = function (t, e) {
        (t = this._getItemsForLayout(t)),
          this._layoutItems(t, e),
          this._postLayout();
      }),
      (f._getItemsForLayout = function (t) {
        return t.filter(function (t) {
          return !t.isIgnored;
        });
      }),
      (f._layoutItems = function (t, e) {
        if ((this._emitCompleteOnItems("layout", t), t && t.length)) {
          var i = [];
          t.forEach(function (t) {
            var n = this._getItemLayoutPosition(t);
            (n.item = t), (n.isInstant = e || t.isLayoutInstant), i.push(n);
          }, this),
            this._processLayoutQueue(i);
        }
      }),
      (f._getItemLayoutPosition = function () {
        return { x: 0, y: 0 };
      }),
      (f._processLayoutQueue = function (t) {
        this.updateStagger(),
          t.forEach(function (t, e) {
            this._positionItem(t.item, t.x, t.y, t.isInstant, e);
          }, this);
      }),
      (f.updateStagger = function () {
        var t = this.options.stagger;
        return null === t || void 0 === t
          ? void (this.stagger = 0)
          : ((this.stagger = a(t)), this.stagger);
      }),
      (f._positionItem = function (t, e, i, n, o) {
        n ? t.goTo(e, i) : (t.stagger(o * this.stagger), t.moveTo(e, i));
      }),
      (f._postLayout = function () {
        this.resizeContainer();
      }),
      (f.resizeContainer = function () {
        var t = this._getOption("resizeContainer");
        if (t) {
          var e = this._getContainerSize();
          e &&
            (this._setContainerMeasure(e.width, !0),
            this._setContainerMeasure(e.height, !1));
        }
      }),
      (f._getContainerSize = d),
      (f._setContainerMeasure = function (t, e) {
        if (void 0 !== t) {
          var i = this.size;
          i.isBorderBox &&
            (t += e
              ? i.paddingLeft +
                i.paddingRight +
                i.borderLeftWidth +
                i.borderRightWidth
              : i.paddingBottom +
                i.paddingTop +
                i.borderTopWidth +
                i.borderBottomWidth),
            (t = Math.max(t, 0)),
            (this.element.style[e ? "width" : "height"] = t + "px");
        }
      }),
      (f._emitCompleteOnItems = function (t, e) {
        function i() {
          o.dispatchEvent(t + "Complete", null, [e]);
        }
        function n() {
          s++, s == r && i();
        }
        var o = this,
          r = e.length;
        if (!e || !r) return void i();
        var s = 0;
        e.forEach(function (e) {
          e.once(t, n);
        });
      }),
      (f.dispatchEvent = function (t, e, i) {
        var n = e ? [e].concat(i) : i;
        if ((this.emitEvent(t, n), u))
          if (((this.$element = this.$element || u(this.element)), e)) {
            var o = u.Event(e);
            (o.type = t), this.$element.trigger(o, i);
          } else this.$element.trigger(t, i);
      }),
      (f.ignore = function (t) {
        var e = this.getItem(t);
        e && (e.isIgnored = !0);
      }),
      (f.unignore = function (t) {
        var e = this.getItem(t);
        e && delete e.isIgnored;
      }),
      (f.stamp = function (t) {
        (t = this._find(t)),
          t &&
            ((this.stamps = this.stamps.concat(t)),
            t.forEach(this.ignore, this));
      }),
      (f.unstamp = function (t) {
        (t = this._find(t)),
          t &&
            t.forEach(function (t) {
              n.removeFrom(this.stamps, t), this.unignore(t);
            }, this);
      }),
      (f._find = function (t) {
        return t
          ? ("string" == typeof t && (t = this.element.querySelectorAll(t)),
            (t = n.makeArray(t)))
          : void 0;
      }),
      (f._manageStamps = function () {
        this.stamps &&
          this.stamps.length &&
          (this._getBoundingRect(),
          this.stamps.forEach(this._manageStamp, this));
      }),
      (f._getBoundingRect = function () {
        var t = this.element.getBoundingClientRect(),
          e = this.size;
        this._boundingRect = {
          left: t.left + e.paddingLeft + e.borderLeftWidth,
          top: t.top + e.paddingTop + e.borderTopWidth,
          right: t.right - (e.paddingRight + e.borderRightWidth),
          bottom: t.bottom - (e.paddingBottom + e.borderBottomWidth),
        };
      }),
      (f._manageStamp = d),
      (f._getElementOffset = function (t) {
        var e = t.getBoundingClientRect(),
          n = this._boundingRect,
          o = i(t),
          r = {
            left: e.left - n.left - o.marginLeft,
            top: e.top - n.top - o.marginTop,
            right: n.right - e.right - o.marginRight,
            bottom: n.bottom - e.bottom - o.marginBottom,
          };
        return r;
      }),
      (f.handleEvent = n.handleEvent),
      (f.bindResize = function () {
        t.addEventListener("resize", this), (this.isResizeBound = !0);
      }),
      (f.unbindResize = function () {
        t.removeEventListener("resize", this), (this.isResizeBound = !1);
      }),
      (f.onresize = function () {
        this.resize();
      }),
      n.debounceMethod(r, "onresize", 100),
      (f.resize = function () {
        this.isResizeBound && this.needsResizeLayout() && this.layout();
      }),
      (f.needsResizeLayout = function () {
        var t = i(this.element),
          e = this.size && t;
        return e && t.innerWidth !== this.size.innerWidth;
      }),
      (f.addItems = function (t) {
        var e = this._itemize(t);
        return e.length && (this.items = this.items.concat(e)), e;
      }),
      (f.appended = function (t) {
        var e = this.addItems(t);
        e.length && (this.layoutItems(e, !0), this.reveal(e));
      }),
      (f.prepended = function (t) {
        var e = this._itemize(t);
        if (e.length) {
          var i = this.items.slice(0);
          (this.items = e.concat(i)),
            this._resetLayout(),
            this._manageStamps(),
            this.layoutItems(e, !0),
            this.reveal(e),
            this.layoutItems(i);
        }
      }),
      (f.reveal = function (t) {
        if ((this._emitCompleteOnItems("reveal", t), t && t.length)) {
          var e = this.updateStagger();
          t.forEach(function (t, i) {
            t.stagger(i * e), t.reveal();
          });
        }
      }),
      (f.hide = function (t) {
        if ((this._emitCompleteOnItems("hide", t), t && t.length)) {
          var e = this.updateStagger();
          t.forEach(function (t, i) {
            t.stagger(i * e), t.hide();
          });
        }
      }),
      (f.revealItemElements = function (t) {
        var e = this.getItems(t);
        this.reveal(e);
      }),
      (f.hideItemElements = function (t) {
        var e = this.getItems(t);
        this.hide(e);
      }),
      (f.getItem = function (t) {
        for (var e = 0; e < this.items.length; e++) {
          var i = this.items[e];
          if (i.element == t) return i;
        }
      }),
      (f.getItems = function (t) {
        t = n.makeArray(t);
        var e = [];
        return (
          t.forEach(function (t) {
            var i = this.getItem(t);
            i && e.push(i);
          }, this),
          e
        );
      }),
      (f.remove = function (t) {
        var e = this.getItems(t);
        this._emitCompleteOnItems("remove", e),
          e &&
            e.length &&
            e.forEach(function (t) {
              t.remove(), n.removeFrom(this.items, t);
            }, this);
      }),
      (f.destroy = function () {
        var t = this.element.style;
        (t.height = ""),
          (t.position = ""),
          (t.width = ""),
          this.items.forEach(function (t) {
            t.destroy();
          }),
          this.unbindResize();
        var e = this.element.outlayerGUID;
        delete c[e],
          delete this.element.outlayerGUID,
          u && u.removeData(this.element, this.constructor.namespace);
      }),
      (r.data = function (t) {
        t = n.getQueryElement(t);
        var e = t && t.outlayerGUID;
        return e && c[e];
      }),
      (r.create = function (t, e) {
        var i = s(r);
        return (
          (i.defaults = n.extend({}, r.defaults)),
          n.extend(i.defaults, e),
          (i.compatOptions = n.extend({}, r.compatOptions)),
          (i.namespace = t),
          (i.data = r.data),
          (i.Item = s(o)),
          n.htmlInit(i, t),
          u && u.bridget && u.bridget(t, i),
          i
        );
      });
    var m = { ms: 1, s: 1e3 };
    return (r.Item = o), r;
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define(["outlayer/outlayer", "get-size/get-size"], e)
      : "object" == typeof module && module.exports
      ? (module.exports = e(require("outlayer"), require("get-size")))
      : (t.Masonry = e(t.Outlayer, t.getSize));
  })(window, function (t, e) {
    var i = t.create("masonry");
    i.compatOptions.fitWidth = "isFitWidth";
    var n = i.prototype;
    return (
      (n._resetLayout = function () {
        this.getSize(),
          this._getMeasurement("columnWidth", "outerWidth"),
          this._getMeasurement("gutter", "outerWidth"),
          this.measureColumns(),
          (this.colYs = []);
        for (var t = 0; t < this.cols; t++) this.colYs.push(0);
        (this.maxY = 0), (this.horizontalColIndex = 0);
      }),
      (n.measureColumns = function () {
        if ((this.getContainerWidth(), !this.columnWidth)) {
          var t = this.items[0],
            i = t && t.element;
          this.columnWidth = (i && e(i).outerWidth) || this.containerWidth;
        }
        var n = (this.columnWidth += this.gutter),
          o = this.containerWidth + this.gutter,
          r = o / n,
          s = n - (o % n),
          a = s && 1 > s ? "round" : "floor";
        (r = Math[a](r)), (this.cols = Math.max(r, 1));
      }),
      (n.getContainerWidth = function () {
        var t = this._getOption("fitWidth"),
          i = t ? this.element.parentNode : this.element,
          n = e(i);
        this.containerWidth = n && n.innerWidth;
      }),
      (n._getItemLayoutPosition = function (t) {
        t.getSize();
        var e = t.size.outerWidth % this.columnWidth,
          i = e && 1 > e ? "round" : "ceil",
          n = Math[i](t.size.outerWidth / this.columnWidth);
        n = Math.min(n, this.cols);
        for (
          var o = this.options.horizontalOrder
              ? "_getHorizontalColPosition"
              : "_getTopColPosition",
            r = this[o](n, t),
            s = { x: this.columnWidth * r.col, y: r.y },
            a = r.y + t.size.outerHeight,
            h = n + r.col,
            u = r.col;
          h > u;
          u++
        )
          this.colYs[u] = a;
        return s;
      }),
      (n._getTopColPosition = function (t) {
        var e = this._getTopColGroup(t),
          i = Math.min.apply(Math, e);
        return { col: e.indexOf(i), y: i };
      }),
      (n._getTopColGroup = function (t) {
        if (2 > t) return this.colYs;
        for (var e = [], i = this.cols + 1 - t, n = 0; i > n; n++)
          e[n] = this._getColGroupY(n, t);
        return e;
      }),
      (n._getColGroupY = function (t, e) {
        if (2 > e) return this.colYs[t];
        var i = this.colYs.slice(t, t + e);
        return Math.max.apply(Math, i);
      }),
      (n._getHorizontalColPosition = function (t, e) {
        var i = this.horizontalColIndex % this.cols,
          n = t > 1 && i + t > this.cols;
        i = n ? 0 : i;
        var o = e.size.outerWidth && e.size.outerHeight;
        return (
          (this.horizontalColIndex = o ? i + t : this.horizontalColIndex),
          { col: i, y: this._getColGroupY(i, t) }
        );
      }),
      (n._manageStamp = function (t) {
        var i = e(t),
          n = this._getElementOffset(t),
          o = this._getOption("originLeft"),
          r = o ? n.left : n.right,
          s = r + i.outerWidth,
          a = Math.floor(r / this.columnWidth);
        a = Math.max(0, a);
        var h = Math.floor(s / this.columnWidth);
        (h -= s % this.columnWidth ? 0 : 1), (h = Math.min(this.cols - 1, h));
        for (
          var u = this._getOption("originTop"),
            d = (u ? n.top : n.bottom) + i.outerHeight,
            l = a;
          h >= l;
          l++
        )
          this.colYs[l] = Math.max(d, this.colYs[l]);
      }),
      (n._getContainerSize = function () {
        this.maxY = Math.max.apply(Math, this.colYs);
        var t = { height: this.maxY };
        return (
          this._getOption("fitWidth") &&
            (t.width = this._getContainerFitWidth()),
          t
        );
      }),
      (n._getContainerFitWidth = function () {
        for (var t = 0, e = this.cols; --e && 0 === this.colYs[e]; ) t++;
        return (this.cols - t) * this.columnWidth - this.gutter;
      }),
      (n.needsResizeLayout = function () {
        var t = this.containerWidth;
        return this.getContainerWidth(), t != this.containerWidth;
      }),
      i
    );
  });

/**!  easy-pie-chart **/

!(function (a, b) {
  "function" == typeof define && define.amd
    ? define(["jquery"], function (a) {
        return b(a);
      })
    : "object" == typeof exports
    ? (module.exports = b(require("jquery")))
    : b(jQuery);
})(this, function (a) {
  var b = function (a, b) {
      var c,
        d = document.createElement("canvas");
      a.appendChild(d),
        "object" == typeof G_vmlCanvasManager &&
          G_vmlCanvasManager.initElement(d);
      var e = d.getContext("2d");
      d.width = d.height = b.size;
      var f = 1;
      window.devicePixelRatio > 1 &&
        ((f = window.devicePixelRatio),
        (d.style.width = d.style.height = [b.size, "px"].join("")),
        (d.width = d.height = b.size * f),
        e.scale(f, f)),
        e.translate(b.size / 2, b.size / 2),
        e.rotate((-0.5 + b.rotate / 180) * Math.PI);
      var g = (b.size - b.lineWidth) / 2;
      b.scaleColor && b.scaleLength && (g -= b.scaleLength + 2),
        (Date.now =
          Date.now ||
          function () {
            return +new Date();
          });
      var h = function (a, b, c) {
          c = Math.min(Math.max(-1, c || 0), 1);
          var d = 0 >= c ? !0 : !1;
          e.beginPath(),
            e.arc(0, 0, g, 0, 2 * Math.PI * c, d),
            (e.strokeStyle = a),
            (e.lineWidth = b),
            e.stroke();
        },
        i = function () {
          var a, c;
          (e.lineWidth = 1), (e.fillStyle = b.scaleColor), e.save();
          for (var d = 24; d > 0; --d)
            d % 6 === 0
              ? ((c = b.scaleLength), (a = 0))
              : ((c = 0.6 * b.scaleLength), (a = b.scaleLength - c)),
              e.fillRect(-b.size / 2 + a, 0, c, 1),
              e.rotate(Math.PI / 12);
          e.restore();
        },
        j = (function () {
          return (
            window.requestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            function (a) {
              window.setTimeout(a, 1e3 / 60);
            }
          );
        })(),
        k = function () {
          b.scaleColor && i(),
            b.trackColor && h(b.trackColor, b.trackWidth || b.lineWidth, 1);
        };
      (this.getCanvas = function () {
        return d;
      }),
        (this.getCtx = function () {
          return e;
        }),
        (this.clear = function () {
          e.clearRect(b.size / -2, b.size / -2, b.size, b.size);
        }),
        (this.draw = function (a) {
          b.scaleColor || b.trackColor
            ? e.getImageData && e.putImageData
              ? c
                ? e.putImageData(c, 0, 0)
                : (k(), (c = e.getImageData(0, 0, b.size * f, b.size * f)))
              : (this.clear(), k())
            : this.clear(),
            (e.lineCap = b.lineCap);
          var d;
          (d = "function" == typeof b.barColor ? b.barColor(a) : b.barColor),
            h(d, b.lineWidth, a / 100);
        }.bind(this)),
        (this.animate = function (a, c) {
          var d = Date.now();
          b.onStart(a, c);
          var e = function () {
            var f = Math.min(Date.now() - d, b.animate.duration),
              g = b.easing(this, f, a, c - a, b.animate.duration);
            this.draw(g),
              b.onStep(a, c, g),
              f >= b.animate.duration ? b.onStop(a, c) : j(e);
          }.bind(this);
          j(e);
        }.bind(this));
    },
    c = function (a, c) {
      var d = {
        barColor: "#ef1e25",
        trackColor: "#f9f9f9",
        scaleColor: "#dfe0e0",
        scaleLength: 5,
        lineCap: "round",
        lineWidth: 3,
        trackWidth: void 0,
        size: 110,
        rotate: 0,
        animate: { duration: 1e3, enabled: !0 },
        easing: function (a, b, c, d, e) {
          return (
            (b /= e / 2),
            1 > b ? (d / 2) * b * b + c : (-d / 2) * (--b * (b - 2) - 1) + c
          );
        },
        onStart: function (a, b) {},
        onStep: function (a, b, c) {},
        onStop: function (a, b) {},
      };
      if ("undefined" != typeof b) d.renderer = b;
      else {
        if ("undefined" == typeof SVGRenderer)
          throw new Error("Please load either the SVG- or the CanvasRenderer");
        d.renderer = SVGRenderer;
      }
      var e = {},
        f = 0,
        g = function () {
          (this.el = a), (this.options = e);
          for (var b in d)
            d.hasOwnProperty(b) &&
              ((e[b] = c && "undefined" != typeof c[b] ? c[b] : d[b]),
              "function" == typeof e[b] && (e[b] = e[b].bind(this)));
          "string" == typeof e.easing &&
          "undefined" != typeof jQuery &&
          jQuery.isFunction(jQuery.easing[e.easing])
            ? (e.easing = jQuery.easing[e.easing])
            : (e.easing = d.easing),
            "number" == typeof e.animate &&
              (e.animate = { duration: e.animate, enabled: !0 }),
            "boolean" != typeof e.animate ||
              e.animate ||
              (e.animate = { duration: 1e3, enabled: e.animate }),
            (this.renderer = new e.renderer(a, e)),
            this.renderer.draw(f),
            a.dataset && a.dataset.percent
              ? this.update(parseFloat(a.dataset.percent))
              : a.getAttribute &&
                a.getAttribute("data-percent") &&
                this.update(parseFloat(a.getAttribute("data-percent")));
        }.bind(this);
      (this.update = function (a) {
        return (
          (a = parseFloat(a)),
          e.animate.enabled
            ? this.renderer.animate(f, a)
            : this.renderer.draw(a),
          (f = a),
          this
        );
      }.bind(this)),
        (this.disableAnimation = function () {
          return (e.animate.enabled = !1), this;
        }),
        (this.enableAnimation = function () {
          return (e.animate.enabled = !0), this;
        }),
        g();
    };
  a.fn.easyPieChart = function (b) {
    return this.each(function () {
      var d;
      a.data(this, "easyPieChart") ||
        ((d = a.extend({}, b, a(this).data())),
        a.data(this, "easyPieChart", new c(this, d)));
    });
  };
});

/**!  Count Down **/

!(function (e) {
  e.fn.downCount = function (t, n) {
    function r() {
      var e = new Date(o.date),
        t = i(),
        r = e - t;
      if (0 > r)
        return clearInterval(a), void (n && "function" == typeof n && n());
      var d = 1e3,
        s = 60 * d,
        u = 60 * s,
        l = 24 * u,
        h = Math.floor(r / l),
        c = Math.floor((r % l) / u),
        g = Math.floor((r % u) / s),
        v = Math.floor((r % s) / d);
      (h = String(h).length >= 2 ? h : "0" + h),
        (c = String(c).length >= 2 ? c : "0" + c),
        (g = String(g).length >= 2 ? g : "0" + g),
        (v = String(v).length >= 2 ? v : "0" + v);
      var x = 1 === h ? "day" : "days",
        m = 1 === c ? "hour" : "hours",
        y = 1 === g ? "minute" : "minutes",
        D = 1 === v ? "second" : "seconds";
      f.find(".days").text(h),
        f.find(".hours").text(c),
        f.find(".minutes").text(g),
        f.find(".seconds").text(v),
        f.find(".days_ref").text(x),
        f.find(".hours_ref").text(m),
        f.find(".minutes_ref").text(y),
        f.find(".seconds_ref").text(D);
    }
    var o = e.extend({ date: null, offset: null }, t);
    o.date || e.error("Date is not defined."),
      Date.parse(o.date) ||
        e.error(
          "Incorrect date format, it should look like this, 12/24/2012 12:00:00."
        );
    var f = this,
      i = function () {
        var e = new Date(),
          t = e.getTime() + 6e4 * e.getTimezoneOffset(),
          n = new Date(t + 36e5 * o.offset);
        return n;
      },
      a = setInterval(r, 1e3);
  };
})(jQuery);

/* == Page scroll to id == Version: 1.5.8, License: MIT License (MIT) */

!(function (e, t, a) {
  var n,
    l,
    s,
    i,
    o,
    r,
    c,
    u,
    h,
    g,
    f,
    d,
    p = "mPageScroll2id",
    _ = "mPS2id",
    C =
      ".m_PageScroll2id,a[rel~='m_PageScroll2id'],.page-scroll-to-id,a[rel~='page-scroll-to-id'],._ps2id",
    v = {
      scrollSpeed: 1e3,
      autoScrollSpeed: !0,
      scrollEasing: "easeInOutQuint",
      scrollingEasing: "easeOutQuint",
      pageEndSmoothScroll: !0,
      layout: "vertical",
      offset: 0,
      highlightSelector: !1,
      clickedClass: _ + "-clicked",
      targetClass: _ + "-target",
      highlightClass: _ + "-highlight",
      forceSingleHighlight: !1,
      keepHighlightUntilNext: !1,
      highlightByNextTarget: !1,
      disablePluginBelow: !1,
      clickEvents: !0,
      appendHash: !1,
      onStart: function () {},
      onComplete: function () {},
      defaultSelector: !1,
      live: !0,
      liveSelector: !1,
    },
    m = 0,
    S = {
      init: function (r) {
        var r = e.extend(!0, {}, v, r);
        if ((e(a).data(_, r), (l = e(a).data(_)), !this.selector)) {
          var c = "__" + _;
          this.each(function () {
            var t = e(this);
            t.hasClass(c) || t.addClass(c);
          }),
            (this.selector = "." + c);
        }
        l.liveSelector && (this.selector += "," + l.liveSelector),
          (n = n ? n + "," + this.selector : this.selector),
          l.defaultSelector &&
            (("object" == typeof e(n) && 0 !== e(n).length) || (n = C)),
          l.clickEvents &&
            e(a)
              .undelegate("." + _)
              .delegate(n, "click." + _, function (t) {
                if (I._isDisabled.call(null))
                  return void I._removeClasses.call(null);
                var a = e(this),
                  n = a.attr("href"),
                  l = a.prop("href");
                (n && -1 !== n.indexOf("#/")) ||
                  (I._reset.call(null),
                  (g = a.data("ps2id-offset") || 0),
                  I._isValid.call(null, n, l) &&
                    I._findTarget.call(null, n) &&
                    (t.preventDefault(),
                    (i = "selector"),
                    (o = a),
                    I._setClasses.call(null, !0),
                    I._scrollTo.call(null)));
              }),
          e(t)
            .unbind("." + _)
            .bind("scroll." + _ + " resize." + _, function () {
              if (I._isDisabled.call(null))
                return void I._removeClasses.call(null);
              var t = e("._" + _ + "-t");
              t.each(function (a) {
                var n = e(this),
                  l = n.attr("id"),
                  s = I._findHighlight.call(null, l);
                I._setClasses.call(null, !1, n, s),
                  a == t.length - 1 && I._extendClasses.call(null);
              });
            }),
          (s = !0),
          I._setup.call(null),
          I._live.call(null);
      },
      scrollTo: function (t, a) {
        if (I._isDisabled.call(null)) return void I._removeClasses.call(null);
        if (t && "undefined" != typeof t) {
          I._isInit.call(null);
          var n = { layout: l.layout, offset: l.offset, clicked: !1 },
            a = e.extend(!0, {}, n, a);
          I._reset.call(null),
            (u = a.layout),
            (h = a.offset),
            (t = -1 !== t.indexOf("#") ? t : "#" + t),
            I._isValid.call(null, t) &&
              I._findTarget.call(null, t) &&
              ((i = "scrollTo"),
              (o = a.clicked),
              o && I._setClasses.call(null, !0),
              I._scrollTo.call(null));
        }
      },
      destroy: function () {
        e(t).unbind("." + _),
          e(a)
            .undelegate("." + _)
            .removeData(_),
          e("._" + _ + "-t").removeData(_),
          I._removeClasses.call(null, !0);
      },
    },
    I = {
      _isDisabled: function () {
        var e = t,
          n = "inner",
          s =
            l.disablePluginBelow instanceof Array
              ? [l.disablePluginBelow[0] || 0, l.disablePluginBelow[1] || 0]
              : [l.disablePluginBelow || 0, 0];
        return (
          "innerWidth" in t ||
            ((n = "client"), (e = a.documentElement || a.body)),
          e[n + "Width"] <= s[0] || e[n + "Height"] <= s[1]
        );
      },
      _isValid: function (e, a) {
        if (e) {
          a = a ? a : e;
          var n = -1 !== a.indexOf("#/") ? a.split("#/")[0] : a.split("#")[0],
            l = t.location.toString().split("#")[0];
          return (
            "#" !== e &&
            -1 !== e.indexOf("#") &&
            ("" === n || decodeURIComponent(n) === decodeURIComponent(l))
          );
        }
      },
      _setup: function () {
        var t = I._highlightSelector(),
          a = 1,
          n = 0;
        return e(t).each(function () {
          var s = e(this),
            i = s.attr("href"),
            o = s.prop("href");
          if (I._isValid.call(null, i, o)) {
            var r = -1 !== i.indexOf("#/") ? i.split("#/")[1] : i.split("#")[1],
              c = e("#" + r);
            if (c.length > 0) {
              l.highlightByNextTarget &&
                c !== n &&
                (n ? n.data(_, { tn: c }) : c.data(_, { tn: "0" }), (n = c)),
                c.hasClass("_" + _ + "-t") || c.addClass("_" + _ + "-t"),
                c.data(_, { i: a }),
                s.hasClass("_" + _ + "-h") || s.addClass("_" + _ + "-h");
              var u = I._findHighlight.call(null, r);
              I._setClasses.call(null, !1, c, u),
                (m = a),
                a++,
                a == e(t).length && I._extendClasses.call(null);
            }
          }
        });
      },
      _highlightSelector: function () {
        return l.highlightSelector && "" !== l.highlightSelector
          ? l.highlightSelector
          : n;
      },
      _findTarget: function (t) {
        var a = -1 !== t.indexOf("#/") ? t.split("#/")[1] : t.split("#")[1],
          n = e("#" + a);
        if (n.length < 1 || "fixed" === n.css("position")) {
          if ("top" !== a) return;
          n = e("body");
        }
        return (
          (r = n),
          u || (u = l.layout),
          (h = I._setOffset.call(null)),
          (c = [
            (n.offset().top - h[0]).toString(),
            (n.offset().left - h[1]).toString(),
          ]),
          (c[0] = c[0] < 0 ? 0 : c[0]),
          (c[1] = c[1] < 0 ? 0 : c[1]),
          c
        );
      },
      _setOffset: function () {
        h || (h = l.offset ? l.offset : 0), g && (h = g);
        var t, a, n, s;
        switch (typeof h) {
          case "object":
          case "string":
            (t = [h.y ? h.y : h, h.x ? h.x : h]),
              (a = [
                t[0] instanceof jQuery ? t[0] : e(t[0]),
                t[1] instanceof jQuery ? t[1] : e(t[1]),
              ]),
              a[0].length > 0
                ? ((n = a[0].height()),
                  "fixed" === a[0].css("position") && (n += a[0][0].offsetTop))
                : (n =
                    !isNaN(parseFloat(t[0])) && isFinite(t[0])
                      ? parseInt(t[0])
                      : 0),
              a[1].length > 0
                ? ((s = a[1].width()),
                  "fixed" === a[1].css("position") && (s += a[1][0].offsetLeft))
                : (s =
                    !isNaN(parseFloat(t[1])) && isFinite(t[1])
                      ? parseInt(t[1])
                      : 0);
            break;
          case "function":
            (t = h.call(null)),
              t instanceof Array ? ((n = t[0]), (s = t[1])) : (n = s = t);
            break;
          default:
            n = s = parseInt(h);
        }
        return [n, s];
      },
      _findHighlight: function (a) {
        var n = t.location,
          l = n.toString().split("#")[0],
          s = n.pathname;
        return e(
          "._" +
            _ +
            "-h[href='#" +
            a +
            "'],._" +
            _ +
            "-h[href='" +
            l +
            "#" +
            a +
            "'],._" +
            _ +
            "-h[href='" +
            s +
            "#" +
            a +
            "'],._" +
            _ +
            "-h[href='#/" +
            a +
            "'],._" +
            _ +
            "-h[href='" +
            l +
            "#/" +
            a +
            "'],._" +
            _ +
            "-h[href='" +
            s +
            "#/" +
            a +
            "']"
        );
      },
      _setClasses: function (t, a, n) {
        var s = l.clickedClass,
          i = l.targetClass,
          r = l.highlightClass;
        t && s && "" !== s
          ? (e("." + s).removeClass(s), o.addClass(s))
          : a &&
            i &&
            "" !== i &&
            n &&
            r &&
            "" !== r &&
            (I._currentTarget.call(null, a)
              ? (a.addClass(i), n.addClass(r))
              : (!l.keepHighlightUntilNext || e("." + r).length > 1) &&
                (a.removeClass(i), n.removeClass(r)));
      },
      _extendClasses: function () {
        var t = l.targetClass,
          a = l.highlightClass,
          n = e("." + t),
          s = e("." + a),
          i = t + "-first",
          o = t + "-last",
          r = a + "-first",
          c = a + "-last";
        e("._" + _ + "-t").removeClass(i + " " + o),
          e("._" + _ + "-h").removeClass(r + " " + c),
          l.forceSingleHighlight
            ? l.keepHighlightUntilNext && n.length > 1
              ? (n.slice(0, 1).removeClass(t), s.slice(0, 1).removeClass(a))
              : (n.slice(1).removeClass(t), s.slice(1).removeClass(a))
            : (n.slice(0, 1).addClass(i).end().slice(-1).addClass(o),
              s.slice(0, 1).addClass(r).end().slice(-1).addClass(c));
      },
      _removeClasses: function (t) {
        e("." + l.clickedClass).removeClass(l.clickedClass),
          e("." + l.targetClass).removeClass(
            l.targetClass +
              " " +
              l.targetClass +
              "-first " +
              l.targetClass +
              "-last"
          ),
          e("." + l.highlightClass).removeClass(
            l.highlightClass +
              " " +
              l.highlightClass +
              "-first " +
              l.highlightClass +
              "-last"
          ),
          t &&
            (e("._" + _ + "-t").removeClass("_" + _ + "-t"),
            e("._" + _ + "-h").removeClass("_" + _ + "-h"));
      },
      _currentTarget: function (a) {
        var n = l["target_" + a.data(_).i],
          s = a.data("ps2id-target"),
          i =
            s && e(s)[0]
              ? e(s)[0].getBoundingClientRect()
              : a[0].getBoundingClientRect();
        if ("undefined" != typeof n) {
          var o = a.offset().top,
            r = a.offset().left,
            c = n.from ? n.from + o : o,
            u = n.to ? n.to + o : o,
            h = n.fromX ? n.fromX + r : r,
            g = n.toX ? n.toX + r : r;
          return i.top >= u && i.top <= c && i.left >= g && i.left <= h;
        }
        var f = e(t).height(),
          d = e(t).width(),
          p = s ? e(s).height() : a.height(),
          C = s ? e(s).width() : a.width(),
          v = 1 + p / f,
          m = v,
          S = f > p ? v * (f / p) : v,
          I = 1 + C / d,
          O = I,
          M = d > C ? I * (d / C) : I,
          b = [
            i.top <= f / m,
            i.bottom >= f / S,
            i.left <= d / O,
            i.right >= d / M,
          ];
        if (l.highlightByNextTarget) {
          var y = a.data(_).tn;
          if (y) {
            var w = y[0].getBoundingClientRect();
            "vertical" === l.layout
              ? (b = [i.top <= f / 2, w.top > f / 2, 1, 1])
              : "horizontal" === l.layout &&
                (b = [1, 1, i.left <= d / 2, w.left > d / 2]);
          }
        }
        return b[0] && b[1] && b[2] && b[3];
      },
      _scrollTo: function () {
        (d = I._scrollSpeed.call(null)),
          (c = l.pageEndSmoothScroll ? I._pageEndSmoothScroll.call(null) : c);
        var a = e("html,body"),
          n = l.autoScrollSpeed ? I._autoScrollSpeed.call(null) : d,
          s = a.is(":animated") ? l.scrollingEasing : l.scrollEasing,
          i = e(t).scrollTop(),
          o = e(t).scrollLeft();
        switch (u) {
          case "horizontal":
            o != c[1] &&
              (I._callbacks.call(null, "onStart"),
              a
                .stop()
                .animate({ scrollLeft: c[1] }, n, s)
                .promise()
                .then(function () {
                  I._callbacks.call(null, "onComplete");
                }));
            break;
          case "auto":
            if (i != c[0] || o != c[1])
              if (
                (I._callbacks.call(null, "onStart"),
                navigator.userAgent.match(/(iPod|iPhone|iPad|Android)/))
              ) {
                var r;
                a.stop()
                  .animate(
                    { pageYOffset: c[0], pageXOffset: c[1] },
                    {
                      duration: n,
                      easing: s,
                      step: function (e, a) {
                        "pageXOffset" == a.prop
                          ? (r = e)
                          : "pageYOffset" == a.prop && t.scrollTo(r, e);
                      },
                    }
                  )
                  .promise()
                  .then(function () {
                    I._callbacks.call(null, "onComplete");
                  });
              } else
                a.stop()
                  .animate({ scrollTop: c[0], scrollLeft: c[1] }, n, s)
                  .promise()
                  .then(function () {
                    I._callbacks.call(null, "onComplete");
                  });
            break;
          default:
            i != c[0] &&
              (I._callbacks.call(null, "onStart"),
              a
                .stop()
                .animate({ scrollTop: c[0] }, n, s)
                .promise()
                .then(function () {
                  I._callbacks.call(null, "onComplete");
                }));
        }
      },
      _pageEndSmoothScroll: function () {
        var n = e(a).height(),
          l = e(a).width(),
          s = e(t).height(),
          i = e(t).width();
        return [n - c[0] < s ? n - s : c[0], l - c[1] < i ? l - i : c[1]];
      },
      _scrollSpeed: function () {
        var t = l.scrollSpeed;
        return (
          o &&
            o.length &&
            o.add(o.parent()).each(function () {
              var a = e(this);
              if (a.attr("class")) {
                var n = a.attr("class").split(" ");
                for (var l in n)
                  if (String(n[l]).match(/^ps2id-speed-\d+$/)) {
                    t = n[l].split("ps2id-speed-")[1];
                    break;
                  }
              }
            }),
          parseInt(t)
        );
      },
      _autoScrollSpeed: function () {
        var n = e(t).scrollTop(),
          l = e(t).scrollLeft(),
          s = e(a).height(),
          i = e(a).width(),
          o = [
            d + (d * Math.floor((Math.abs(c[0] - n) / s) * 100)) / 100,
            d + (d * Math.floor((Math.abs(c[1] - l) / i) * 100)) / 100,
          ];
        return Math.max.apply(Math, o);
      },
      _callbacks: function (e) {
        if (l)
          switch (
            ((this[_] = {
              trigger: i,
              clicked: o,
              target: r,
              scrollTo: { y: c[0], x: c[1] },
            }),
            e)
          ) {
            case "onStart":
              if (
                l.appendHash &&
                t.history &&
                t.history.pushState &&
                o &&
                o.length
              ) {
                var a = "#" + o.attr("href").split("#")[1];
                a !== t.location.hash && history.pushState("", "", a);
              }
              l.onStart.call(null, this[_]);
              break;
            case "onComplete":
              l.onComplete.call(null, this[_]);
          }
      },
      _reset: function () {
        u = h = g = !1;
      },
      _isInit: function () {
        s || S.init.apply(this);
      },
      _live: function () {
        f = setTimeout(function () {
          l.live
            ? e(I._highlightSelector()).length !== m && I._setup.call(null)
            : f && clearTimeout(f),
            I._live.call(null);
        }, 1e3);
      },
      _easing: function () {
        function t(e) {
          var t = 7.5625,
            a = 2.75;
          return 1 / a > e
            ? t * e * e
            : 2 / a > e
            ? t * (e -= 1.5 / a) * e + 0.75
            : 2.5 / a > e
            ? t * (e -= 2.25 / a) * e + 0.9375
            : t * (e -= 2.625 / a) * e + 0.984375;
        }
        (e.easing.easeInQuad =
          e.easing.easeInQuad ||
          function (e) {
            return e * e;
          }),
          (e.easing.easeOutQuad =
            e.easing.easeOutQuad ||
            function (e) {
              return 1 - (1 - e) * (1 - e);
            }),
          (e.easing.easeInOutQuad =
            e.easing.easeInOutQuad ||
            function (e) {
              return 0.5 > e ? 2 * e * e : 1 - Math.pow(-2 * e + 2, 2) / 2;
            }),
          (e.easing.easeInCubic =
            e.easing.easeInCubic ||
            function (e) {
              return e * e * e;
            }),
          (e.easing.easeOutCubic =
            e.easing.easeOutCubic ||
            function (e) {
              return 1 - Math.pow(1 - e, 3);
            }),
          (e.easing.easeInOutCubic =
            e.easing.easeInOutCubic ||
            function (e) {
              return 0.5 > e ? 4 * e * e * e : 1 - Math.pow(-2 * e + 2, 3) / 2;
            }),
          (e.easing.easeInQuart =
            e.easing.easeInQuart ||
            function (e) {
              return e * e * e * e;
            }),
          (e.easing.easeOutQuart =
            e.easing.easeOutQuart ||
            function (e) {
              return 1 - Math.pow(1 - e, 4);
            }),
          (e.easing.easeInOutQuart =
            e.easing.easeInOutQuart ||
            function (e) {
              return 0.5 > e
                ? 8 * e * e * e * e
                : 1 - Math.pow(-2 * e + 2, 4) / 2;
            }),
          (e.easing.easeInQuint =
            e.easing.easeInQuint ||
            function (e) {
              return e * e * e * e * e;
            }),
          (e.easing.easeOutQuint =
            e.easing.easeOutQuint ||
            function (e) {
              return 1 - Math.pow(1 - e, 5);
            }),
          (e.easing.easeInOutQuint =
            e.easing.easeInOutQuint ||
            function (e) {
              return 0.5 > e
                ? 16 * e * e * e * e * e
                : 1 - Math.pow(-2 * e + 2, 5) / 2;
            }),
          (e.easing.easeInExpo =
            e.easing.easeInExpo ||
            function (e) {
              return 0 === e ? 0 : Math.pow(2, 10 * e - 10);
            }),
          (e.easing.easeOutExpo =
            e.easing.easeOutExpo ||
            function (e) {
              return 1 === e ? 1 : 1 - Math.pow(2, -10 * e);
            }),
          (e.easing.easeInOutExpo =
            e.easing.easeInOutExpo ||
            function (e) {
              return 0 === e
                ? 0
                : 1 === e
                ? 1
                : 0.5 > e
                ? Math.pow(2, 20 * e - 10) / 2
                : (2 - Math.pow(2, -20 * e + 10)) / 2;
            }),
          (e.easing.easeInSine =
            e.easing.easeInSine ||
            function (e) {
              return 1 - Math.cos((e * Math.PI) / 2);
            }),
          (e.easing.easeOutSine =
            e.easing.easeOutSine ||
            function (e) {
              return Math.sin((e * Math.PI) / 2);
            }),
          (e.easing.easeInOutSine =
            e.easing.easeInOutSine ||
            function (e) {
              return -(Math.cos(Math.PI * e) - 1) / 2;
            }),
          (e.easing.easeInCirc =
            e.easing.easeInCirc ||
            function (e) {
              return 1 - Math.sqrt(1 - Math.pow(e, 2));
            }),
          (e.easing.easeOutCirc =
            e.easing.easeOutCirc ||
            function (e) {
              return Math.sqrt(1 - Math.pow(e - 1, 2));
            }),
          (e.easing.easeInOutCirc =
            e.easing.easeInOutCirc ||
            function (e) {
              return 0.5 > e
                ? (1 - Math.sqrt(1 - Math.pow(2 * e, 2))) / 2
                : (Math.sqrt(1 - Math.pow(-2 * e + 2, 2)) + 1) / 2;
            }),
          (e.easing.easeInElastic =
            e.easing.easeInElastic ||
            function (e) {
              return 0 === e
                ? 0
                : 1 === e
                ? 1
                : -Math.pow(2, 10 * e - 10) *
                  Math.sin((10 * e - 10.75) * ((2 * Math.PI) / 3));
            }),
          (e.easing.easeOutElastic =
            e.easing.easeOutElastic ||
            function (e) {
              return 0 === e
                ? 0
                : 1 === e
                ? 1
                : Math.pow(2, -10 * e) *
                    Math.sin((10 * e - 0.75) * ((2 * Math.PI) / 3)) +
                  1;
            }),
          (e.easing.easeInOutElastic =
            e.easing.easeInOutElastic ||
            function (e) {
              return 0 === e
                ? 0
                : 1 === e
                ? 1
                : 0.5 > e
                ? -(
                    Math.pow(2, 20 * e - 10) *
                    Math.sin((20 * e - 11.125) * ((2 * Math.PI) / 4.5))
                  ) / 2
                : (Math.pow(2, -20 * e + 10) *
                    Math.sin((20 * e - 11.125) * ((2 * Math.PI) / 4.5))) /
                    2 +
                  1;
            }),
          (e.easing.easeInBack =
            e.easing.easeInBack ||
            function (e) {
              return 2.70158 * e * e * e - 1.70158 * e * e;
            }),
          (e.easing.easeOutBack =
            e.easing.easeOutBack ||
            function (e) {
              return (
                1 + 2.70158 * Math.pow(e - 1, 3) + 1.70158 * Math.pow(e - 1, 2)
              );
            }),
          (e.easing.easeInOutBack =
            e.easing.easeInOutBack ||
            function (e) {
              return 0.5 > e
                ? (Math.pow(2 * e, 2) * (7.189819 * e - 2.5949095)) / 2
                : (Math.pow(2 * e - 2, 2) *
                    (3.5949095 * (2 * e - 2) + 2.5949095) +
                    2) /
                    2;
            }),
          (e.easing.easeInBounce =
            e.easing.easeInBounce ||
            function (e) {
              return 1 - t(1 - e);
            }),
          (e.easing.easeOutBounce = e.easing.easeOutBounce || t),
          (e.easing.easeInOutBounce =
            e.easing.easeInOutBounce ||
            function (e) {
              return 0.5 > e ? (1 - t(1 - 2 * e)) / 2 : (1 + t(2 * e - 1)) / 2;
            });
      },
    };
  I._easing.call(),
    (e.fn[p] = function (t) {
      return S[t]
        ? S[t].apply(this, Array.prototype.slice.call(arguments, 1))
        : "object" != typeof t && t
        ? void e.error("Method " + t + " does not exist")
        : S.init.apply(this, arguments);
    }),
    (e[p] = function (t) {
      return S[t]
        ? S[t].apply(this, Array.prototype.slice.call(arguments, 1))
        : "object" != typeof t && t
        ? void e.error("Method " + t + " does not exist")
        : S.init.apply(this, arguments);
    }),
    (e[p].defaults = v);
})(jQuery, window, document);

// fancyBox v3.1.28 //

!(function (t, e, n, o) {
  "use strict";
  function i(t) {
    var e = t.currentTarget,
      o = t.data ? t.data.options : {},
      i = o.selector ? n(o.selector) : t.data ? t.data.items : [],
      a = n(e).attr("data-fancybox") || "",
      s = 0,
      r = n.fancybox.getInstance();
    t.preventDefault(),
      (r && r.current.opts.$orig.is(e)) ||
        (a
          ? ((i = i.length
              ? i.filter('[data-fancybox="' + a + '"]')
              : n('[data-fancybox="' + a + '"]')),
            (s = i.index(e)),
            s < 0 && (s = 0))
          : (i = [e]),
        n.fancybox.open(i, o, s));
  }
  if (n) {
    if (n.fn.fancybox) return void n.error("fancyBox already initialized");
    var a = {
        loop: !1,
        margin: [44, 0],
        gutter: 50,
        keyboard: !0,
        arrows: !0,
        infobar: !1,
        toolbar: !0,
        buttons: ["slideShow", "fullScreen", "thumbs", "close"],
        idleTime: 4,
        smallBtn: "auto",
        protect: !1,
        modal: !1,
        image: { preload: "auto" },
        ajax: { settings: { data: { fancybox: !0 } } },
        iframe: {
          tpl: '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen allowtransparency="true" src=""></iframe>',
          preload: !0,
          css: {},
          attr: { scrolling: "auto" },
        },
        animationEffect: "zoom",
        animationDuration: 366,
        zoomOpacity: "auto",
        transitionEffect: "fade",
        transitionDuration: 366,
        slideClass: "",
        baseClass: "",
        baseTpl:
          '<div class="fancybox-container" role="dialog" tabindex="-1"><div class="fancybox-bg"></div><div class="fancybox-inner"><div class="fancybox-infobar"><button data-fancybox-prev title="{{PREV}}" class="fancybox-button fancybox-button--left"></button><div class="fancybox-infobar__body"><span data-fancybox-index></span>&nbsp;/&nbsp;<span data-fancybox-count></span></div><button data-fancybox-next title="{{NEXT}}" class="fancybox-button fancybox-button--right"></button></div><div class="fancybox-toolbar">{{BUTTONS}}</div><div class="fancybox-navigation"><button data-fancybox-prev title="{{PREV}}" class="fancybox-arrow fancybox-arrow--left" /><button data-fancybox-next title="{{NEXT}}" class="fancybox-arrow fancybox-arrow--right" /></div><div class="fancybox-stage"></div><div class="fancybox-caption-wrap"><div class="fancybox-caption"></div></div></div></div>',
        spinnerTpl: '<div class="fancybox-loading"></div>',
        errorTpl: '<div class="fancybox-error"><p>{{ERROR}}<p></div>',
        btnTpl: {
          slideShow:
            '<button data-fancybox-play class="fancybox-button fancybox-button--play" title="{{PLAY_START}}"></button>',
          fullScreen:
            '<button data-fancybox-fullscreen class="fancybox-button fancybox-button--fullscreen" title="{{FULL_SCREEN}}"></button>',
          thumbs:
            '<button data-fancybox-thumbs class="fancybox-button fancybox-button--thumbs" title="{{THUMBS}}"></button>',
          close:
            '<button data-fancybox-close class="fancybox-button fancybox-button--close" title="{{CLOSE}}"></button>',
          smallBtn:
            '<button data-fancybox-close class="fancybox-close-small" title="{{CLOSE}}"></button>',
        },
        parentEl: "body",
        autoFocus: !0,
        backFocus: !0,
        trapFocus: !0,
        fullScreen: { autoStart: !1 },
        touch: { vertical: !0, momentum: !0 },
        hash: null,
        media: {},
        slideShow: { autoStart: !1, speed: 4e3 },
        thumbs: { autoStart: !1, hideOnClose: !0 },
        onInit: n.noop,
        beforeLoad: n.noop,
        afterLoad: n.noop,
        beforeShow: n.noop,
        afterShow: n.noop,
        beforeClose: n.noop,
        afterClose: n.noop,
        onActivate: n.noop,
        onDeactivate: n.noop,
        clickContent: function (t, e) {
          return "image" === t.type && "zoom";
        },
        clickSlide: "close",
        clickOutside: "close",
        dblclickContent: !1,
        dblclickSlide: !1,
        dblclickOutside: !1,
        mobile: {
          clickContent: function (t, e) {
            return "image" === t.type && "toggleControls";
          },
          clickSlide: function (t, e) {
            return "image" === t.type ? "toggleControls" : "close";
          },
          dblclickContent: function (t, e) {
            return "image" === t.type && "zoom";
          },
          dblclickSlide: function (t, e) {
            return "image" === t.type && "zoom";
          },
        },
        lang: "en",
        i18n: {
          en: {
            CLOSE: "Close",
            NEXT: "Next",
            PREV: "Previous",
            ERROR:
              "The requested content cannot be loaded. <br/> Please try again later.",
            PLAY_START: "Start slideshow",
            PLAY_STOP: "Pause slideshow",
            FULL_SCREEN: "Full screen",
            THUMBS: "Thumbnails",
          },
          de: {
            CLOSE: "Schliessen",
            NEXT: "Weiter",
            PREV: "Zurück",
            ERROR:
              "Die angeforderten Daten konnten nicht geladen werden. <br/> Bitte versuchen Sie es später nochmal.",
            PLAY_START: "Diaschau starten",
            PLAY_STOP: "Diaschau beenden",
            FULL_SCREEN: "Vollbild",
            THUMBS: "Vorschaubilder",
          },
        },
      },
      s = n(t),
      r = n(e),
      c = 0,
      l = function (t) {
        return t && t.hasOwnProperty && t instanceof n;
      },
      u = (function () {
        return (
          t.requestAnimationFrame ||
          t.webkitRequestAnimationFrame ||
          t.mozRequestAnimationFrame ||
          t.oRequestAnimationFrame ||
          function (e) {
            return t.setTimeout(e, 1e3 / 60);
          }
        );
      })(),
      d = (function () {
        var t,
          n = e.createElement("fakeelement"),
          i = {
            transition: "transitionend",
            OTransition: "oTransitionEnd",
            MozTransition: "transitionend",
            WebkitTransition: "webkitTransitionEnd",
          };
        for (t in i) if (n.style[t] !== o) return i[t];
      })(),
      f = function (t) {
        return t && t.length && t[0].offsetHeight;
      },
      h = function (t, o, i) {
        var s = this;
        (s.opts = n.extend(!0, { index: i }, a, o || {})),
          o && n.isArray(o.buttons) && (s.opts.buttons = o.buttons),
          (s.id = s.opts.id || ++c),
          (s.group = []),
          (s.currIndex = parseInt(s.opts.index, 10) || 0),
          (s.prevIndex = null),
          (s.prevPos = null),
          (s.currPos = 0),
          (s.firstRun = null),
          s.createGroup(t),
          s.group.length &&
            ((s.$lastFocus = n(e.activeElement).blur()),
            (s.slides = {}),
            s.init(t));
      };
    n.extend(h.prototype, {
      init: function () {
        var t,
          e,
          o,
          i = this,
          a = i.group[i.currIndex].opts;
        (i.scrollTop = r.scrollTop()),
          (i.scrollLeft = r.scrollLeft()),
          n.fancybox.getInstance() ||
            n.fancybox.isMobile ||
            "hidden" === n("body").css("overflow") ||
            ((t = n("body").width()),
            n("html").addClass("fancybox-enabled"),
            (t = n("body").width() - t),
            t > 1 &&
              n("head").append(
                '<style id="fancybox-style-noscroll" type="text/css">.compensate-for-scrollbar, .fancybox-enabled body { margin-right: ' +
                  t +
                  "px; }</style>"
              )),
          (o = ""),
          n.each(a.buttons, function (t, e) {
            o += a.btnTpl[e] || "";
          }),
          (e = n(i.translate(i, a.baseTpl.replace("{{BUTTONS}}", o)))
            .addClass("fancybox-is-hidden")
            .attr("id", "fancybox-container-" + i.id)
            .addClass(a.baseClass)
            .data("FancyBox", i)
            .prependTo(a.parentEl)),
          (i.$refs = { container: e }),
          ["bg", "inner", "infobar", "toolbar", "stage", "caption"].forEach(
            function (t) {
              i.$refs[t] = e.find(".fancybox-" + t);
            }
          ),
          (!a.arrows || i.group.length < 2) &&
            e.find(".fancybox-navigation").remove(),
          a.infobar || i.$refs.infobar.remove(),
          a.toolbar || i.$refs.toolbar.remove(),
          i.trigger("onInit"),
          i.activate(),
          i.jumpTo(i.currIndex);
      },
      translate: function (t, e) {
        var n = t.opts.i18n[t.opts.lang];
        return e.replace(/\{\{(\w+)\}\}/g, function (t, e) {
          var i = n[e];
          return i === o ? t : i;
        });
      },
      createGroup: function (t) {
        var e = this,
          i = n.makeArray(t);
        n.each(i, function (t, i) {
          var a,
            s,
            r,
            c,
            l = {},
            u = {},
            d = [];
          n.isPlainObject(i)
            ? ((l = i), (u = i.opts || i))
            : "object" === n.type(i) && n(i).length
            ? ((a = n(i)),
              (d = a.data()),
              (u = "options" in d ? d.options : {}),
              (u = "object" === n.type(u) ? u : {}),
              (l.src = "src" in d ? d.src : u.src || a.attr("href")),
              ["width", "height", "thumb", "type", "filter"].forEach(function (
                t
              ) {
                t in d && (u[t] = d[t]);
              }),
              "srcset" in d && (u.image = { srcset: d.srcset }),
              (u.$orig = a),
              l.type || l.src || ((l.type = "inline"), (l.src = i)))
            : (l = { type: "html", src: i + "" }),
            (l.opts = n.extend(!0, {}, e.opts, u)),
            n.fancybox.isMobile &&
              (l.opts = n.extend(!0, {}, l.opts, l.opts.mobile)),
            (s = l.type || l.opts.type),
            (r = l.src || ""),
            !s &&
              r &&
              (r.match(
                /(^data:image\/[a-z0-9+\/=]*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg|ico)((\?|#).*)?$)/i
              )
                ? (s = "image")
                : r.match(/\.(pdf)((\?|#).*)?$/i)
                ? (s = "pdf")
                : "#" === r.charAt(0) && (s = "inline")),
            (l.type = s),
            (l.index = e.group.length),
            l.opts.$orig && !l.opts.$orig.length && delete l.opts.$orig,
            !l.opts.$thumb &&
              l.opts.$orig &&
              (l.opts.$thumb = l.opts.$orig.find("img:first")),
            l.opts.$thumb && !l.opts.$thumb.length && delete l.opts.$thumb,
            "function" === n.type(l.opts.caption)
              ? (l.opts.caption = l.opts.caption.apply(i, [e, l]))
              : "caption" in d && (l.opts.caption = d.caption),
            (l.opts.caption = l.opts.caption === o ? "" : l.opts.caption + ""),
            "ajax" === s &&
              ((c = r.split(/\s+/, 2)),
              c.length > 1 &&
                ((l.src = c.shift()), (l.opts.filter = c.shift()))),
            "auto" == l.opts.smallBtn &&
              (n.inArray(s, ["html", "inline", "ajax"]) > -1
                ? ((l.opts.toolbar = !1), (l.opts.smallBtn = !0))
                : (l.opts.smallBtn = !1)),
            "pdf" === s && ((l.type = "iframe"), (l.opts.iframe.preload = !1)),
            l.opts.modal &&
              (l.opts = n.extend(!0, l.opts, {
                infobar: 0,
                toolbar: 0,
                smallBtn: 0,
                keyboard: 0,
                slideShow: 0,
                fullScreen: 0,
                thumbs: 0,
                touch: 0,
                clickContent: !1,
                clickSlide: !1,
                clickOutside: !1,
                dblclickContent: !1,
                dblclickSlide: !1,
                dblclickOutside: !1,
              })),
            e.group.push(l);
        });
      },
      addEvents: function () {
        var o = this;
        o.removeEvents(),
          o.$refs.container
            .on("click.fb-close", "[data-fancybox-close]", function (t) {
              t.stopPropagation(), t.preventDefault(), o.close(t);
            })
            .on(
              "click.fb-prev touchend.fb-prev",
              "[data-fancybox-prev]",
              function (t) {
                t.stopPropagation(), t.preventDefault(), o.previous();
              }
            )
            .on(
              "click.fb-next touchend.fb-next",
              "[data-fancybox-next]",
              function (t) {
                t.stopPropagation(), t.preventDefault(), o.next();
              }
            ),
          s.on("orientationchange.fb resize.fb", function (t) {
            t && t.originalEvent && "resize" === t.originalEvent.type
              ? u(function () {
                  o.update();
                })
              : (o.$refs.stage.hide(),
                setTimeout(function () {
                  o.$refs.stage.show(), o.update();
                }, 500));
          }),
          r.on("focusin.fb", function (t) {
            var i = n.fancybox ? n.fancybox.getInstance() : null;
            i.isClosing ||
              !i.current ||
              !i.current.opts.trapFocus ||
              n(t.target).hasClass("fancybox-container") ||
              n(t.target).is(e) ||
              (i &&
                "fixed" !== n(t.target).css("position") &&
                !i.$refs.container.has(t.target).length &&
                (t.stopPropagation(),
                i.focus(),
                s.scrollTop(o.scrollTop).scrollLeft(o.scrollLeft)));
          }),
          r.on("keydown.fb", function (t) {
            var e = o.current,
              i = t.keyCode || t.which;
            if (
              e &&
              e.opts.keyboard &&
              !n(t.target).is("input") &&
              !n(t.target).is("textarea")
            )
              return 8 === i || 27 === i
                ? (t.preventDefault(), void o.close(t))
                : 37 === i || 38 === i
                ? (t.preventDefault(), void o.previous())
                : 39 === i || 40 === i
                ? (t.preventDefault(), void o.next())
                : void o.trigger("afterKeydown", t, i);
          }),
          o.group[o.currIndex].opts.idleTime &&
            ((o.idleSecondsCounter = 0),
            r.on(
              "mousemove.fb-idle mouseenter.fb-idle mouseleave.fb-idle mousedown.fb-idle touchstart.fb-idle touchmove.fb-idle scroll.fb-idle keydown.fb-idle",
              function () {
                (o.idleSecondsCounter = 0),
                  o.isIdle && o.showControls(),
                  (o.isIdle = !1);
              }
            ),
            (o.idleInterval = t.setInterval(function () {
              o.idleSecondsCounter++,
                o.idleSecondsCounter >= o.group[o.currIndex].opts.idleTime &&
                  ((o.isIdle = !0),
                  (o.idleSecondsCounter = 0),
                  o.hideControls());
            }, 1e3)));
      },
      removeEvents: function () {
        var e = this;
        s.off("orientationchange.fb resize.fb"),
          r.off("focusin.fb keydown.fb .fb-idle"),
          this.$refs.container.off(".fb-close .fb-prev .fb-next"),
          e.idleInterval &&
            (t.clearInterval(e.idleInterval), (e.idleInterval = null));
      },
      previous: function (t) {
        return this.jumpTo(this.currPos - 1, t);
      },
      next: function (t) {
        return this.jumpTo(this.currPos + 1, t);
      },
      jumpTo: function (t, e, i) {
        var a,
          s,
          r,
          c,
          l,
          u,
          d,
          h = this,
          p = h.group.length;
        if (!(h.isSliding || h.isClosing || (h.isAnimating && h.firstRun))) {
          if (
            ((t = parseInt(t, 10)),
            (s = h.current ? h.current.opts.loop : h.opts.loop),
            !s && (t < 0 || t >= p))
          )
            return !1;
          if (
            ((a = h.firstRun = null === h.firstRun),
            !(p < 2 && !a && h.isSliding))
          ) {
            if (
              ((c = h.current),
              (h.prevIndex = h.currIndex),
              (h.prevPos = h.currPos),
              (r = h.createSlide(t)),
              p > 1 &&
                ((s || r.index > 0) && h.createSlide(t - 1),
                (s || r.index < p - 1) && h.createSlide(t + 1)),
              (h.current = r),
              (h.currIndex = r.index),
              (h.currPos = r.pos),
              h.trigger("beforeShow", a),
              h.updateControls(),
              (u = n.fancybox.getTranslate(r.$slide)),
              (r.isMoved =
                (0 !== u.left || 0 !== u.top) &&
                !r.$slide.hasClass("fancybox-animated")),
              (r.forcedDuration = o),
              n.isNumeric(e)
                ? (r.forcedDuration = e)
                : (e = r.opts[a ? "animationDuration" : "transitionDuration"]),
              (e = parseInt(e, 10)),
              a)
            )
              return (
                r.opts.animationEffect &&
                  e &&
                  h.$refs.container.css("transition-duration", e + "ms"),
                h.$refs.container.removeClass("fancybox-is-hidden"),
                f(h.$refs.container),
                h.$refs.container.addClass("fancybox-is-open"),
                r.$slide.addClass("fancybox-slide--current"),
                h.loadSlide(r),
                void h.preload()
              );
            n.each(h.slides, function (t, e) {
              n.fancybox.stop(e.$slide);
            }),
              r.$slide
                .removeClass("fancybox-slide--next fancybox-slide--previous")
                .addClass("fancybox-slide--current"),
              r.isMoved
                ? ((l = Math.round(r.$slide.width())),
                  n.each(h.slides, function (t, o) {
                    var i = o.pos - r.pos;
                    n.fancybox.animate(
                      o.$slide,
                      { top: 0, left: i * l + i * o.opts.gutter },
                      e,
                      function () {
                        o.$slide
                          .removeAttr("style")
                          .removeClass(
                            "fancybox-slide--next fancybox-slide--previous"
                          ),
                          o.pos === h.currPos &&
                            ((r.isMoved = !1), h.complete());
                      }
                    );
                  }))
                : h.$refs.stage.children().removeAttr("style"),
              r.isLoaded ? h.revealContent(r) : h.loadSlide(r),
              h.preload(),
              c.pos !== r.pos &&
                ((d =
                  "fancybox-slide--" + (c.pos > r.pos ? "next" : "previous")),
                c.$slide.removeClass(
                  "fancybox-slide--complete fancybox-slide--current fancybox-slide--next fancybox-slide--previous"
                ),
                (c.isComplete = !1),
                e &&
                  (r.isMoved || r.opts.transitionEffect) &&
                  (r.isMoved
                    ? c.$slide.addClass(d)
                    : ((d =
                        "fancybox-animated " +
                        d +
                        " fancybox-fx-" +
                        r.opts.transitionEffect),
                      n.fancybox.animate(c.$slide, d, e, function () {
                        c.$slide.removeClass(d).removeAttr("style");
                      }))));
          }
        }
      },
      createSlide: function (t) {
        var e,
          o,
          i = this;
        return (
          (o = t % i.group.length),
          (o = o < 0 ? i.group.length + o : o),
          !i.slides[t] &&
            i.group[o] &&
            ((e = n('<div class="fancybox-slide"></div>').appendTo(
              i.$refs.stage
            )),
            (i.slides[t] = n.extend(!0, {}, i.group[o], {
              pos: t,
              $slide: e,
              isLoaded: !1,
            })),
            i.updateSlide(i.slides[t])),
          i.slides[t]
        );
      },
      scaleToActual: function (t, e, i) {
        var a,
          s,
          r,
          c,
          l,
          u = this,
          d = u.current,
          f = d.$content,
          h = parseInt(d.$slide.width(), 10),
          p = parseInt(d.$slide.height(), 10),
          g = d.width,
          b = d.height;
        "image" != d.type ||
          d.hasError ||
          !f ||
          u.isAnimating ||
          (n.fancybox.stop(f),
          (u.isAnimating = !0),
          (t = t === o ? 0.5 * h : t),
          (e = e === o ? 0.5 * p : e),
          (a = n.fancybox.getTranslate(f)),
          (c = g / a.width),
          (l = b / a.height),
          (s = 0.5 * h - 0.5 * g),
          (r = 0.5 * p - 0.5 * b),
          g > h &&
            ((s = a.left * c - (t * c - t)),
            s > 0 && (s = 0),
            s < h - g && (s = h - g)),
          b > p &&
            ((r = a.top * l - (e * l - e)),
            r > 0 && (r = 0),
            r < p - b && (r = p - b)),
          u.updateCursor(g, b),
          n.fancybox.animate(
            f,
            { top: r, left: s, scaleX: c, scaleY: l },
            i || 330,
            function () {
              u.isAnimating = !1;
            }
          ),
          u.SlideShow && u.SlideShow.isActive && u.SlideShow.stop());
      },
      scaleToFit: function (t) {
        var e,
          o = this,
          i = o.current,
          a = i.$content;
        "image" != i.type ||
          i.hasError ||
          !a ||
          o.isAnimating ||
          (n.fancybox.stop(a),
          (o.isAnimating = !0),
          (e = o.getFitPos(i)),
          o.updateCursor(e.width, e.height),
          n.fancybox.animate(
            a,
            {
              top: e.top,
              left: e.left,
              scaleX: e.width / a.width(),
              scaleY: e.height / a.height(),
            },
            t || 330,
            function () {
              o.isAnimating = !1;
            }
          ));
      },
      getFitPos: function (t) {
        var e,
          o,
          i,
          a,
          r,
          c = this,
          l = t.$content,
          u = t.width,
          d = t.height,
          f = t.opts.margin;
        return (
          !(!l || !l.length || (!u && !d)) &&
          ("number" === n.type(f) && (f = [f, f]),
          2 == f.length && (f = [f[0], f[1], f[0], f[1]]),
          s.width() < 800 && (f = [0, 0, 0, 0]),
          (e = parseInt(c.$refs.stage.width(), 10) - (f[1] + f[3])),
          (o = parseInt(c.$refs.stage.height(), 10) - (f[0] + f[2])),
          (i = Math.min(1, e / u, o / d)),
          (a = Math.floor(i * u)),
          (r = Math.floor(i * d)),
          {
            top: Math.floor(0.5 * (o - r)) + f[0],
            left: Math.floor(0.5 * (e - a)) + f[3],
            width: a,
            height: r,
          })
        );
      },
      update: function () {
        var t = this;
        n.each(t.slides, function (e, n) {
          t.updateSlide(n);
        });
      },
      updateSlide: function (t) {
        var e = this,
          o = t.$content;
        o &&
          (t.width || t.height) &&
          (n.fancybox.stop(o),
          n.fancybox.setTranslate(o, e.getFitPos(t)),
          t.pos === e.currPos && e.updateCursor()),
          t.$slide.trigger("refresh"),
          e.trigger("onUpdate", t);
      },
      updateCursor: function (t, e) {
        var n,
          i = this,
          a = i.$refs.container.removeClass(
            "fancybox-is-zoomable fancybox-can-zoomIn fancybox-can-drag fancybox-can-zoomOut"
          );
        i.current &&
          !i.isClosing &&
          (i.isZoomable()
            ? (a.addClass("fancybox-is-zoomable"),
              (n =
                t !== o && e !== o
                  ? t < i.current.width && e < i.current.height
                  : i.isScaledDown()),
              n
                ? a.addClass("fancybox-can-zoomIn")
                : i.current.opts.touch
                ? a.addClass("fancybox-can-drag")
                : a.addClass("fancybox-can-zoomOut"))
            : i.current.opts.touch && a.addClass("fancybox-can-drag"));
      },
      isZoomable: function () {
        var t,
          e = this,
          o = e.current;
        if (o && !e.isClosing)
          return !!(
            "image" === o.type &&
            o.isLoaded &&
            !o.hasError &&
            ("zoom" === o.opts.clickContent ||
              (n.isFunction(o.opts.clickContent) &&
                "zoom" === o.opts.clickContent(o))) &&
            ((t = e.getFitPos(o)), o.width > t.width || o.height > t.height)
          );
      },
      isScaledDown: function () {
        var t = this,
          e = t.current,
          o = e.$content,
          i = !1;
        return (
          o &&
            ((i = n.fancybox.getTranslate(o)),
            (i = i.width < e.width || i.height < e.height)),
          i
        );
      },
      canPan: function () {
        var t = this,
          e = t.current,
          n = e.$content,
          o = !1;
        return (
          n &&
            ((o = t.getFitPos(e)),
            (o =
              Math.abs(n.width() - o.width) > 1 ||
              Math.abs(n.height() - o.height) > 1)),
          o
        );
      },
      loadSlide: function (t) {
        var e,
          o,
          i,
          a = this;
        if (!t.isLoading && !t.isLoaded) {
          switch (
            ((t.isLoading = !0),
            a.trigger("beforeLoad", t),
            (e = t.type),
            (o = t.$slide),
            o
              .off("refresh")
              .trigger("onReset")
              .addClass("fancybox-slide--" + (e || "unknown"))
              .addClass(t.opts.slideClass),
            e)
          ) {
            case "image":
              a.setImage(t);
              break;
            case "iframe":
              a.setIframe(t);
              break;
            case "html":
              a.setContent(t, t.src || t.content);
              break;
            case "inline":
              n(t.src).length ? a.setContent(t, n(t.src)) : a.setError(t);
              break;
            case "ajax":
              a.showLoading(t),
                (i = n.ajax(
                  n.extend({}, t.opts.ajax.settings, {
                    url: t.src,
                    success: function (e, n) {
                      "success" === n && a.setContent(t, e);
                    },
                    error: function (e, n) {
                      e && "abort" !== n && a.setError(t);
                    },
                  })
                )),
                o.one("onReset", function () {
                  i.abort();
                });
              break;
            default:
              a.setError(t);
          }
          return !0;
        }
      },
      setImage: function (e) {
        var o,
          i,
          a,
          s,
          r = this,
          c = e.opts.image.srcset;
        if (c) {
          (a = t.devicePixelRatio || 1),
            (s = t.innerWidth * a),
            (i = c.split(",").map(function (t) {
              var e = {};
              return (
                t
                  .trim()
                  .split(/\s+/)
                  .forEach(function (t, n) {
                    var o = parseInt(t.substring(0, t.length - 1), 10);
                    return 0 === n
                      ? (e.url = t)
                      : void (
                          o && ((e.value = o), (e.postfix = t[t.length - 1]))
                        );
                  }),
                e
              );
            })),
            i.sort(function (t, e) {
              return t.value - e.value;
            });
          for (var l = 0; l < i.length; l++) {
            var u = i[l];
            if (
              ("w" === u.postfix && u.value >= s) ||
              ("x" === u.postfix && u.value >= a)
            ) {
              o = u;
              break;
            }
          }
          !o && i.length && (o = i[i.length - 1]),
            o &&
              ((e.src = o.url),
              e.width &&
                e.height &&
                "w" == o.postfix &&
                ((e.height = (e.width / e.height) * o.value),
                (e.width = o.value)));
        }
        (e.$content = n('<div class="fancybox-image-wrap"></div>')
          .addClass("fancybox-is-hidden")
          .appendTo(e.$slide)),
          e.opts.preload !== !1 &&
          e.opts.width &&
          e.opts.height &&
          (e.opts.thumb || e.opts.$thumb)
            ? ((e.width = e.opts.width),
              (e.height = e.opts.height),
              (e.$ghost = n("<img />")
                .one("error", function () {
                  n(this).remove(), (e.$ghost = null), r.setBigImage(e);
                })
                .one("load", function () {
                  r.afterLoad(e), r.setBigImage(e);
                })
                .addClass("fancybox-image")
                .appendTo(e.$content)
                .attr("src", e.opts.thumb || e.opts.$thumb.attr("src"))))
            : r.setBigImage(e);
      },
      setBigImage: function (t) {
        var e = this,
          o = n("<img />");
        (t.$image = o
          .one("error", function () {
            e.setError(t);
          })
          .one("load", function () {
            clearTimeout(t.timouts),
              (t.timouts = null),
              e.isClosing ||
                ((t.width = this.naturalWidth),
                (t.height = this.naturalHeight),
                t.opts.image.srcset &&
                  o.attr("sizes", "100vw").attr("srcset", t.opts.image.srcset),
                e.hideLoading(t),
                t.$ghost
                  ? (t.timouts = setTimeout(function () {
                      (t.timouts = null), t.$ghost.hide();
                    }, Math.min(300, Math.max(1e3, t.height / 1600))))
                  : e.afterLoad(t));
          })
          .addClass("fancybox-image")
          .attr("src", t.src)
          .appendTo(t.$content)),
          (o[0].complete || "complete" == o[0].readyState) &&
          o[0].naturalWidth &&
          o[0].naturalHeight
            ? o.trigger("load")
            : o[0].error
            ? o.trigger("error")
            : (t.timouts = setTimeout(function () {
                o[0].complete || t.hasError || e.showLoading(t);
              }, 100));
      },
      setIframe: function (t) {
        var e,
          i = this,
          a = t.opts.iframe,
          s = t.$slide;
        (t.$content = n(
          '<div class="fancybox-content' +
            (a.preload ? " fancybox-is-hidden" : "") +
            '"></div>'
        )
          .css(a.css)
          .appendTo(s)),
          (e = n(a.tpl.replace(/\{rnd\}/g, new Date().getTime()))
            .attr(a.attr)
            .appendTo(t.$content)),
          a.preload
            ? (i.showLoading(t),
              e.on("load.fb error.fb", function (e) {
                (this.isReady = 1), t.$slide.trigger("refresh"), i.afterLoad(t);
              }),
              s.on("refresh.fb", function () {
                var n,
                  i,
                  s,
                  r = t.$content,
                  c = a.css.width,
                  l = a.css.height;
                if (1 === e[0].isReady) {
                  try {
                    (i = e.contents()), (s = i.find("body"));
                  } catch (t) {}
                  s &&
                    s.length &&
                    (c === o &&
                      ((n =
                        e[0].contentWindow.document.documentElement
                          .scrollWidth),
                      (c = Math.ceil(s.outerWidth(!0) + (r.width() - n))),
                      (c += r.outerWidth() - r.innerWidth())),
                    l === o &&
                      ((l = Math.ceil(s.outerHeight(!0))),
                      (l += r.outerHeight() - r.innerHeight())),
                    c && r.width(c),
                    l && r.height(l)),
                    r.removeClass("fancybox-is-hidden");
                }
              }))
            : this.afterLoad(t),
          e.attr("src", t.src),
          t.opts.smallBtn === !0 &&
            t.$content.prepend(i.translate(t, t.opts.btnTpl.smallBtn)),
          s.one("onReset", function () {
            try {
              n(this).find("iframe").hide().attr("src", "//about:blank");
            } catch (t) {}
            n(this).empty(), (t.isLoaded = !1);
          });
      },
      setContent: function (t, e) {
        var o = this;
        o.isClosing ||
          (o.hideLoading(t),
          t.$slide.empty(),
          l(e) && e.parent().length
            ? (e.parent(".fancybox-slide--inline").trigger("onReset"),
              (t.$placeholder = n("<div></div>").hide().insertAfter(e)),
              e.css("display", "inline-block"))
            : t.hasError ||
              ("string" === n.type(e) &&
                ((e = n("<div>").append(n.trim(e)).contents()),
                3 === e[0].nodeType && (e = n("<div>").html(e))),
              t.opts.filter && (e = n("<div>").html(e).find(t.opts.filter))),
          t.$slide.one("onReset", function () {
            t.$placeholder &&
              (t.$placeholder.after(e.hide()).remove(),
              (t.$placeholder = null)),
              t.$smallBtn && (t.$smallBtn.remove(), (t.$smallBtn = null)),
              t.hasError || (n(this).empty(), (t.isLoaded = !1));
          }),
          (t.$content = n(e).appendTo(t.$slide)),
          t.opts.smallBtn &&
            !t.$smallBtn &&
            (t.$smallBtn = n(o.translate(t, t.opts.btnTpl.smallBtn)).appendTo(
              t.$content.filter("div").first()
            )),
          this.afterLoad(t));
      },
      setError: function (t) {
        (t.hasError = !0),
          t.$slide.removeClass("fancybox-slide--" + t.type),
          this.setContent(t, this.translate(t, t.opts.errorTpl));
      },
      showLoading: function (t) {
        var e = this;
        (t = t || e.current),
          t &&
            !t.$spinner &&
            (t.$spinner = n(e.opts.spinnerTpl).appendTo(t.$slide));
      },
      hideLoading: function (t) {
        var e = this;
        (t = t || e.current),
          t && t.$spinner && (t.$spinner.remove(), delete t.$spinner);
      },
      afterLoad: function (t) {
        var e = this;
        e.isClosing ||
          ((t.isLoading = !1),
          (t.isLoaded = !0),
          e.trigger("afterLoad", t),
          e.hideLoading(t),
          t.opts.protect &&
            t.$content &&
            !t.hasError &&
            (t.$content.on("contextmenu.fb", function (t) {
              return 2 == t.button && t.preventDefault(), !0;
            }),
            "image" === t.type &&
              n('<div class="fancybox-spaceball"></div>').appendTo(t.$content)),
          e.revealContent(t));
      },
      revealContent: function (t) {
        var e,
          i,
          a,
          s,
          r,
          c = this,
          l = t.$slide,
          u = !1;
        return (
          (e = t.opts[c.firstRun ? "animationEffect" : "transitionEffect"]),
          (a = t.opts[c.firstRun ? "animationDuration" : "transitionDuration"]),
          (a = parseInt(t.forcedDuration === o ? a : t.forcedDuration, 10)),
          (!t.isMoved && t.pos === c.currPos && a) || (e = !1),
          "zoom" !== e ||
            (t.pos === c.currPos &&
              a &&
              "image" === t.type &&
              !t.hasError &&
              (u = c.getThumbPos(t))) ||
            (e = "fade"),
          "zoom" === e
            ? ((r = c.getFitPos(t)),
              (r.scaleX = r.width / u.width),
              (r.scaleY = r.height / u.height),
              delete r.width,
              delete r.height,
              (s = t.opts.zoomOpacity),
              "auto" == s &&
                (s = Math.abs(t.width / t.height - u.width / u.height) > 0.1),
              s && ((u.opacity = 0.1), (r.opacity = 1)),
              n.fancybox.setTranslate(
                t.$content.removeClass("fancybox-is-hidden"),
                u
              ),
              f(t.$content),
              void n.fancybox.animate(t.$content, r, a, function () {
                c.complete();
              }))
            : (c.updateSlide(t),
              e
                ? (n.fancybox.stop(l),
                  (i =
                    "fancybox-animated fancybox-slide--" +
                    (t.pos > c.prevPos ? "next" : "previous") +
                    " fancybox-fx-" +
                    e),
                  l
                    .removeAttr("style")
                    .removeClass(
                      "fancybox-slide--current fancybox-slide--next fancybox-slide--previous"
                    )
                    .addClass(i),
                  t.$content.removeClass("fancybox-is-hidden"),
                  f(l),
                  void n.fancybox.animate(
                    l,
                    "fancybox-slide--current",
                    a,
                    function (e) {
                      l.removeClass(i).removeAttr("style"),
                        t.pos === c.currPos && c.complete();
                    },
                    !0
                  ))
                : (f(l),
                  t.$content.removeClass("fancybox-is-hidden"),
                  void (t.pos === c.currPos && c.complete())))
        );
      },
      getThumbPos: function (o) {
        var i,
          a = this,
          s = !1,
          r = function (e) {
            for (
              var o, i = e[0], a = i.getBoundingClientRect(), s = [];
              null !== i.parentElement;

            )
              ("hidden" !== n(i.parentElement).css("overflow") &&
                "auto" !== n(i.parentElement).css("overflow")) ||
                s.push(i.parentElement.getBoundingClientRect()),
                (i = i.parentElement);
            return (
              (o = s.every(function (t) {
                var e = Math.min(a.right, t.right) - Math.max(a.left, t.left),
                  n = Math.min(a.bottom, t.bottom) - Math.max(a.top, t.top);
                return e > 0 && n > 0;
              })),
              o &&
                a.bottom > 0 &&
                a.right > 0 &&
                a.left < n(t).width() &&
                a.top < n(t).height()
            );
          },
          c = o.opts.$thumb,
          l = c ? c.offset() : 0;
        return (
          l &&
            c[0].ownerDocument === e &&
            r(c) &&
            ((i = a.$refs.stage.offset()),
            (s = {
              top: l.top - i.top + parseFloat(c.css("border-top-width") || 0),
              left:
                l.left - i.left + parseFloat(c.css("border-left-width") || 0),
              width: c.width(),
              height: c.height(),
              scaleX: 1,
              scaleY: 1,
            })),
          s
        );
      },
      complete: function () {
        var t = this,
          o = t.current,
          i = {};
        o.isMoved ||
          !o.isLoaded ||
          o.isComplete ||
          ((o.isComplete = !0),
          o.$slide.siblings().trigger("onReset"),
          f(o.$slide),
          o.$slide.addClass("fancybox-slide--complete"),
          n.each(t.slides, function (e, o) {
            o.pos >= t.currPos - 1 && o.pos <= t.currPos + 1
              ? (i[o.pos] = o)
              : o && (n.fancybox.stop(o.$slide), o.$slide.off().remove());
          }),
          (t.slides = i),
          t.updateCursor(),
          t.trigger("afterShow"),
          (n(e.activeElement).is("[disabled]") ||
            (o.opts.autoFocus && "image" != o.type && "iframe" !== o.type)) &&
            t.focus());
      },
      preload: function () {
        var t,
          e,
          n = this;
        n.group.length < 2 ||
          ((t = n.slides[n.currPos + 1]),
          (e = n.slides[n.currPos - 1]),
          t && "image" === t.type && n.loadSlide(t),
          e && "image" === e.type && n.loadSlide(e));
      },
      focus: function () {
        var t,
          e = this.current;
        this.isClosing ||
          (e &&
            e.isComplete &&
            ((t = e.$slide.find("input[autofocus]:enabled:visible:first")),
            t.length ||
              (t = e.$slide
                .find("button,:input,[tabindex],a")
                .filter(":enabled:visible:first"))),
          (t = t && t.length ? t : this.$refs.container),
          t.focus());
      },
      activate: function () {
        var t = this;
        n(".fancybox-container").each(function () {
          var e = n(this).data("FancyBox");
          e && e.uid !== t.uid && !e.isClosing && e.trigger("onDeactivate");
        }),
          t.current &&
            (t.$refs.container.index() > 0 &&
              t.$refs.container.prependTo(e.body),
            t.updateControls()),
          t.trigger("onActivate"),
          t.addEvents();
      },
      close: function (t, e) {
        var o,
          i,
          a,
          s,
          r,
          c,
          l = this,
          f = l.current,
          h = function () {
            l.cleanUp(t);
          };
        return (
          !l.isClosing &&
          ((l.isClosing = !0),
          l.trigger("beforeClose", t) === !1
            ? ((l.isClosing = !1),
              u(function () {
                l.update();
              }),
              !1)
            : (l.removeEvents(),
              f.timouts && clearTimeout(f.timouts),
              (a = f.$content),
              (o = f.opts.animationEffect),
              (i = n.isNumeric(e) ? e : o ? f.opts.animationDuration : 0),
              f.$slide
                .off(d)
                .removeClass(
                  "fancybox-slide--complete fancybox-slide--next fancybox-slide--previous fancybox-animated"
                ),
              f.$slide.siblings().trigger("onReset").remove(),
              i &&
                l.$refs.container
                  .removeClass("fancybox-is-open")
                  .addClass("fancybox-is-closing"),
              l.hideLoading(f),
              l.hideControls(),
              l.updateCursor(),
              "zoom" !== o ||
                (t !== !0 &&
                  a &&
                  i &&
                  "image" === f.type &&
                  !f.hasError &&
                  (c = l.getThumbPos(f))) ||
                (o = "fade"),
              "zoom" === o
                ? (n.fancybox.stop(a),
                  (r = n.fancybox.getTranslate(a)),
                  (r.width = r.width * r.scaleX),
                  (r.height = r.height * r.scaleY),
                  (s = f.opts.zoomOpacity),
                  "auto" == s &&
                    (s =
                      Math.abs(f.width / f.height - c.width / c.height) > 0.1),
                  s && (c.opacity = 0),
                  (r.scaleX = r.width / c.width),
                  (r.scaleY = r.height / c.height),
                  (r.width = c.width),
                  (r.height = c.height),
                  n.fancybox.setTranslate(f.$content, r),
                  n.fancybox.animate(f.$content, c, i, h),
                  !0)
                : (o && i
                    ? t === !0
                      ? setTimeout(h, i)
                      : n.fancybox.animate(
                          f.$slide.removeClass("fancybox-slide--current"),
                          "fancybox-animated fancybox-slide--previous fancybox-fx-" +
                            o,
                          i,
                          h
                        )
                    : h(),
                  !0)))
        );
      },
      cleanUp: function (t) {
        var e,
          o = this;
        o.current.$slide.trigger("onReset"),
          o.$refs.container.empty().remove(),
          o.trigger("afterClose", t),
          o.$lastFocus && o.current.opts.backFocus && o.$lastFocus.focus(),
          (o.current = null),
          (e = n.fancybox.getInstance()),
          e
            ? e.activate()
            : (s.scrollTop(o.scrollTop).scrollLeft(o.scrollLeft),
              n("html").removeClass("fancybox-enabled"),
              n("#fancybox-style-noscroll").remove());
      },
      trigger: function (t, e) {
        var o,
          i = Array.prototype.slice.call(arguments, 1),
          a = this,
          s = e && e.opts ? e : a.current;
        return (
          s ? i.unshift(s) : (s = a),
          i.unshift(a),
          n.isFunction(s.opts[t]) && (o = s.opts[t].apply(s, i)),
          o === !1
            ? o
            : void ("afterClose" === t
                ? r.trigger(t + ".fb", i)
                : a.$refs.container.trigger(t + ".fb", i))
        );
      },
      updateControls: function (t) {
        var e = this,
          o = e.current,
          i = o.index,
          a = o.opts,
          s = a.caption,
          r = e.$refs.caption;
        o.$slide.trigger("refresh"),
          (e.$caption = s && s.length ? r.html(s) : null),
          e.isHiddenControls || e.showControls(),
          n("[data-fancybox-count]").html(e.group.length),
          n("[data-fancybox-index]").html(i + 1),
          n("[data-fancybox-prev]").prop("disabled", !a.loop && i <= 0),
          n("[data-fancybox-next]").prop(
            "disabled",
            !a.loop && i >= e.group.length - 1
          );
      },
      hideControls: function () {
        (this.isHiddenControls = !0),
          this.$refs.container.removeClass(
            "fancybox-show-infobar fancybox-show-toolbar fancybox-show-caption fancybox-show-nav"
          );
      },
      showControls: function () {
        var t = this,
          e = t.current ? t.current.opts : t.opts,
          n = t.$refs.container;
        (t.isHiddenControls = !1),
          (t.idleSecondsCounter = 0),
          n
            .toggleClass("fancybox-show-toolbar", !(!e.toolbar || !e.buttons))
            .toggleClass(
              "fancybox-show-infobar",
              !!(e.infobar && t.group.length > 1)
            )
            .toggleClass(
              "fancybox-show-nav",
              !!(e.arrows && t.group.length > 1)
            )
            .toggleClass("fancybox-is-modal", !!e.modal),
          t.$caption
            ? n.addClass("fancybox-show-caption ")
            : n.removeClass("fancybox-show-caption");
      },
      toggleControls: function () {
        this.isHiddenControls ? this.showControls() : this.hideControls();
      },
    }),
      (n.fancybox = {
        version: "3.1.28",
        defaults: a,
        getInstance: function (t) {
          var e = n(
              '.fancybox-container:not(".fancybox-is-closing"):first'
            ).data("FancyBox"),
            o = Array.prototype.slice.call(arguments, 1);
          return (
            e instanceof h &&
            ("string" === n.type(t)
              ? e[t].apply(e, o)
              : "function" === n.type(t) && t.apply(e, o),
            e)
          );
        },
        open: function (t, e, n) {
          return new h(t, e, n);
        },
        close: function (t) {
          var e = this.getInstance();
          e && (e.close(), t === !0 && this.close());
        },
        destroy: function () {
          this.close(!0), r.off("click.fb-start");
        },
        isMobile:
          e.createTouch !== o &&
          /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(
            navigator.userAgent
          ),
        use3d: (function () {
          var n = e.createElement("div");
          return (
            t.getComputedStyle &&
            t.getComputedStyle(n).getPropertyValue("transform") &&
            !(e.documentMode && e.documentMode < 11)
          );
        })(),
        getTranslate: function (t) {
          var e;
          if (!t || !t.length) return !1;
          if (
            ((e = t.eq(0).css("transform")),
            e && e.indexOf("matrix") !== -1
              ? ((e = e.split("(")[1]),
                (e = e.split(")")[0]),
                (e = e.split(",")))
              : (e = []),
            e.length)
          )
            (e =
              e.length > 10
                ? [e[13], e[12], e[0], e[5]]
                : [e[5], e[4], e[0], e[3]]),
              (e = e.map(parseFloat));
          else {
            e = [0, 0, 1, 1];
            var n = /\.*translate\((.*)px,(.*)px\)/i,
              o = n.exec(t.eq(0).attr("style"));
            o && ((e[0] = parseFloat(o[2])), (e[1] = parseFloat(o[1])));
          }
          return {
            top: e[0],
            left: e[1],
            scaleX: e[2],
            scaleY: e[3],
            opacity: parseFloat(t.css("opacity")),
            width: t.width(),
            height: t.height(),
          };
        },
        setTranslate: function (t, e) {
          var n = "",
            i = {};
          if (t && e)
            return (
              (e.left === o && e.top === o) ||
                ((n =
                  (e.left === o ? t.position().left : e.left) +
                  "px, " +
                  (e.top === o ? t.position().top : e.top) +
                  "px"),
                (n = this.use3d
                  ? "translate3d(" + n + ", 0px)"
                  : "translate(" + n + ")")),
              e.scaleX !== o &&
                e.scaleY !== o &&
                (n =
                  (n.length ? n + " " : "") +
                  "scale(" +
                  e.scaleX +
                  ", " +
                  e.scaleY +
                  ")"),
              n.length && (i.transform = n),
              e.opacity !== o && (i.opacity = e.opacity),
              e.width !== o && (i.width = e.width),
              e.height !== o && (i.height = e.height),
              t.css(i)
            );
        },
        animate: function (t, e, i, a, s) {
          var r = d || "transitionend";
          n.isFunction(i) && ((a = i), (i = null)),
            n.isPlainObject(e) || t.removeAttr("style"),
            t.on(r, function (i) {
              (!i ||
                !i.originalEvent ||
                (t.is(i.originalEvent.target) &&
                  "z-index" != i.originalEvent.propertyName)) &&
                (t.off(r),
                n.isPlainObject(e)
                  ? e.scaleX !== o &&
                    e.scaleY !== o &&
                    (t.css("transition-duration", "0ms"),
                    (e.width = Math.round(t.width() * e.scaleX)),
                    (e.height = Math.round(t.height() * e.scaleY)),
                    (e.scaleX = 1),
                    (e.scaleY = 1),
                    n.fancybox.setTranslate(t, e))
                  : s !== !0 && t.removeClass(e),
                n.isFunction(a) && a(i));
            }),
            n.isNumeric(i) && t.css("transition-duration", i + "ms"),
            n.isPlainObject(e) ? n.fancybox.setTranslate(t, e) : t.addClass(e),
            t.data(
              "timer",
              setTimeout(function () {
                t.trigger("transitionend");
              }, i + 16)
            );
        },
        stop: function (t) {
          clearTimeout(t.data("timer")), t.off(d);
        },
      }),
      (n.fn.fancybox = function (t) {
        var e;
        return (
          (t = t || {}),
          (e = t.selector || !1),
          e
            ? n("body")
                .off("click.fb-start", e)
                .on("click.fb-start", e, { options: t }, i)
            : this.off("click.fb-start").on(
                "click.fb-start",
                { items: this, options: t },
                i
              ),
          this
        );
      }),
      r.on("click.fb-start", "[data-fancybox]", i);
  }
})(window, document, window.jQuery || jQuery),
  (function (t) {
    "use strict";
    var e = function (e, n, o) {
        if (e)
          return (
            (o = o || ""),
            "object" === t.type(o) && (o = t.param(o, !0)),
            t.each(n, function (t, n) {
              e = e.replace("$" + t, n || "");
            }),
            o.length && (e += (e.indexOf("?") > 0 ? "&" : "?") + o),
            e
          );
      },
      n = {
        youtube: {
          matcher:
            /(youtube\.com|youtu\.be|youtube\-nocookie\.com)\/(watch\?(.*&)?v=|v\/|u\/|embed\/?)?(videoseries\?list=(.*)|[\w-]{11}|\?listType=(.*)&list=(.*))(.*)/i,
          params: {
            autoplay: 1,
            autohide: 1,
            fs: 1,
            rel: 0,
            hd: 1,
            wmode: "transparent",
            enablejsapi: 1,
            html5: 1,
          },
          paramPlace: 8,
          type: "iframe",
          url: "//www.youtube.com/embed/$4",
          thumb: "//img.youtube.com/vi/$4/hqdefault.jpg",
        },
        vimeo: {
          matcher: /^.+vimeo.com\/(.*\/)?([\d]+)(.*)?/,
          params: {
            autoplay: 1,
            hd: 1,
            show_title: 1,
            show_byline: 1,
            show_portrait: 0,
            fullscreen: 1,
            api: 1,
          },
          paramPlace: 3,
          type: "iframe",
          url: "//player.vimeo.com/video/$2",
        },
        metacafe: {
          matcher: /metacafe.com\/watch\/(\d+)\/(.*)?/,
          type: "iframe",
          url: "//www.metacafe.com/embed/$1/?ap=1",
        },
        dailymotion: {
          matcher: /dailymotion.com\/video\/(.*)\/?(.*)/,
          params: { additionalInfos: 0, autoStart: 1 },
          type: "iframe",
          url: "//www.dailymotion.com/embed/video/$1",
        },
        vine: {
          matcher: /vine.co\/v\/([a-zA-Z0-9\?\=\-]+)/,
          type: "iframe",
          url: "//vine.co/v/$1/embed/simple",
        },
        instagram: {
          matcher: /(instagr\.am|instagram\.com)\/p\/([a-zA-Z0-9_\-]+)\/?/i,
          type: "image",
          url: "//$1/p/$2/media/?size=l",
        },
        gmap_place: {
          matcher:
            /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(((maps\/(place\/(.*)\/)?\@(.*),(\d+.?\d+?)z))|(\?ll=))(.*)?/i,
          type: "iframe",
          url: function (t) {
            return (
              "//maps.google." +
              t[2] +
              "/?ll=" +
              (t[9]
                ? t[9] +
                  "&z=" +
                  Math.floor(t[10]) +
                  (t[12] ? t[12].replace(/^\//, "&") : "")
                : t[12]) +
              "&output=" +
              (t[12] && t[12].indexOf("layer=c") > 0 ? "svembed" : "embed")
            );
          },
        },
        gmap_search: {
          matcher:
            /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(maps\/search\/)(.*)/i,
          type: "iframe",
          url: function (t) {
            return (
              "//maps.google." +
              t[2] +
              "/maps?q=" +
              t[5].replace("query=", "q=").replace("api=1", "") +
              "&output=embed"
            );
          },
        },
      };
    t(document).on("onInit.fb", function (o, i) {
      t.each(i.group, function (o, i) {
        var a,
          s,
          r,
          c,
          l,
          u,
          d,
          f = i.src || "",
          h = !1;
        i.type ||
          ((a = t.extend(!0, {}, n, i.opts.media)),
          t.each(a, function (n, o) {
            if (((r = f.match(o.matcher)), (u = {}), (d = n), r)) {
              if (((h = o.type), o.paramPlace && r[o.paramPlace])) {
                (l = r[o.paramPlace]),
                  "?" == l[0] && (l = l.substring(1)),
                  (l = l.split("&"));
                for (var a = 0; a < l.length; ++a) {
                  var p = l[a].split("=", 2);
                  2 == p.length &&
                    (u[p[0]] = decodeURIComponent(p[1].replace(/\+/g, " ")));
                }
              }
              return (
                (c = t.extend(!0, {}, o.params, i.opts[n], u)),
                (f =
                  "function" === t.type(o.url)
                    ? o.url.call(this, r, c, i)
                    : e(o.url, r, c)),
                (s =
                  "function" === t.type(o.thumb)
                    ? o.thumb.call(this, r, c, i)
                    : e(o.thumb, r)),
                "vimeo" === d && (f = f.replace("&%23", "#")),
                !1
              );
            }
          }),
          h
            ? ((i.src = f),
              (i.type = h),
              i.opts.thumb ||
                (i.opts.$thumb && i.opts.$thumb.length) ||
                (i.opts.thumb = s),
              "iframe" === h &&
                (t.extend(!0, i.opts, {
                  iframe: { preload: !1, attr: { scrolling: "no" } },
                }),
                (i.contentProvider = d),
                (i.opts.slideClass +=
                  " fancybox-slide--" +
                  ("gmap_place" == d || "gmap_search" == d ? "map" : "video"))))
            : (i.type = "image"));
      });
    });
  })(window.jQuery),
  (function (t, e, n) {
    "use strict";
    var o = (function () {
        return (
          t.requestAnimationFrame ||
          t.webkitRequestAnimationFrame ||
          t.mozRequestAnimationFrame ||
          t.oRequestAnimationFrame ||
          function (e) {
            return t.setTimeout(e, 1e3 / 60);
          }
        );
      })(),
      i = (function () {
        return (
          t.cancelAnimationFrame ||
          t.webkitCancelAnimationFrame ||
          t.mozCancelAnimationFrame ||
          t.oCancelAnimationFrame ||
          function (e) {
            t.clearTimeout(e);
          }
        );
      })(),
      a = function (e) {
        var n = [];
        (e = e.originalEvent || e || t.e),
          (e =
            e.touches && e.touches.length
              ? e.touches
              : e.changedTouches && e.changedTouches.length
              ? e.changedTouches
              : [e]);
        for (var o in e)
          e[o].pageX
            ? n.push({ x: e[o].pageX, y: e[o].pageY })
            : e[o].clientX && n.push({ x: e[o].clientX, y: e[o].clientY });
        return n;
      },
      s = function (t, e, n) {
        return e && t
          ? "x" === n
            ? t.x - e.x
            : "y" === n
            ? t.y - e.y
            : Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2))
          : 0;
      },
      r = function (t) {
        if (
          t.is("a,button,input,select,textarea,label") ||
          n.isFunction(t.get(0).onclick) ||
          t.data("selectable")
        )
          return !0;
        for (var e = 0, o = t[0].attributes, i = o.length; e < i; e++)
          if ("data-fancybox-" === o[e].nodeName.substr(0, 14)) return !0;
        return !1;
      },
      c = function (e) {
        var n = t.getComputedStyle(e)["overflow-y"],
          o = t.getComputedStyle(e)["overflow-x"],
          i =
            ("scroll" === n || "auto" === n) && e.scrollHeight > e.clientHeight,
          a = ("scroll" === o || "auto" === o) && e.scrollWidth > e.clientWidth;
        return i || a;
      },
      l = function (t) {
        for (var e = !1; ; ) {
          if ((e = c(t.get(0)))) break;
          if (
            ((t = t.parent()),
            !t.length || t.hasClass("fancybox-stage") || t.is("body"))
          )
            break;
        }
        return e;
      },
      u = function (t) {
        var e = this;
        (e.instance = t),
          (e.$bg = t.$refs.bg),
          (e.$stage = t.$refs.stage),
          (e.$container = t.$refs.container),
          e.destroy(),
          e.$container.on(
            "touchstart.fb.touch mousedown.fb.touch",
            n.proxy(e, "ontouchstart")
          );
      };
    (u.prototype.destroy = function () {
      this.$container.off(".fb.touch");
    }),
      (u.prototype.ontouchstart = function (o) {
        var i = this,
          c = n(o.target),
          u = i.instance,
          d = u.current,
          f = d.$content,
          h = "touchstart" == o.type;
        if (
          (h && i.$container.off("mousedown.fb.touch"),
          !d || i.instance.isAnimating || i.instance.isClosing)
        )
          return o.stopPropagation(), void o.preventDefault();
        if (
          (!o.originalEvent || 2 != o.originalEvent.button) &&
          c.length &&
          !r(c) &&
          !r(c.parent()) &&
          !(o.originalEvent.clientX > c[0].clientWidth + c.offset().left) &&
          ((i.startPoints = a(o)),
          i.startPoints && !(i.startPoints.length > 1 && u.isSliding))
        ) {
          if (
            ((i.$target = c),
            (i.$content = f),
            (i.canTap = !0),
            n(e).off(".fb.touch"),
            n(e).on(
              h
                ? "touchend.fb.touch touchcancel.fb.touch"
                : "mouseup.fb.touch mouseleave.fb.touch",
              n.proxy(i, "ontouchend")
            ),
            n(e).on(
              h ? "touchmove.fb.touch" : "mousemove.fb.touch",
              n.proxy(i, "ontouchmove")
            ),
            (!u.current.opts.touch && !u.canPan()) ||
              (!c.is(i.$stage) && !i.$stage.find(c).length))
          )
            return void (c.is("img") && o.preventDefault());
          o.stopPropagation(),
            (n.fancybox.isMobile && (l(i.$target) || l(i.$target.parent()))) ||
              o.preventDefault(),
            (i.canvasWidth = Math.round(d.$slide[0].clientWidth)),
            (i.canvasHeight = Math.round(d.$slide[0].clientHeight)),
            (i.startTime = new Date().getTime()),
            (i.distanceX = i.distanceY = i.distance = 0),
            (i.isPanning = !1),
            (i.isSwiping = !1),
            (i.isZooming = !1),
            (i.sliderStartPos = i.sliderLastPos || { top: 0, left: 0 }),
            (i.contentStartPos = n.fancybox.getTranslate(i.$content)),
            (i.contentLastPos = null),
            1 !== i.startPoints.length ||
              i.isZooming ||
              ((i.canTap = !u.isSliding),
              "image" === d.type &&
              (i.contentStartPos.width > i.canvasWidth + 1 ||
                i.contentStartPos.height > i.canvasHeight + 1)
                ? (n.fancybox.stop(i.$content),
                  i.$content.css("transition-duration", "0ms"),
                  (i.isPanning = !0))
                : (i.isSwiping = !0),
              i.$container.addClass("fancybox-controls--isGrabbing")),
            2 !== i.startPoints.length ||
              u.isAnimating ||
              d.hasError ||
              "image" !== d.type ||
              (!d.isLoaded && !d.$ghost) ||
              ((i.isZooming = !0),
              (i.isSwiping = !1),
              (i.isPanning = !1),
              n.fancybox.stop(i.$content),
              i.$content.css("transition-duration", "0ms"),
              (i.centerPointStartX =
                0.5 * (i.startPoints[0].x + i.startPoints[1].x) -
                n(t).scrollLeft()),
              (i.centerPointStartY =
                0.5 * (i.startPoints[0].y + i.startPoints[1].y) -
                n(t).scrollTop()),
              (i.percentageOfImageAtPinchPointX =
                (i.centerPointStartX - i.contentStartPos.left) /
                i.contentStartPos.width),
              (i.percentageOfImageAtPinchPointY =
                (i.centerPointStartY - i.contentStartPos.top) /
                i.contentStartPos.height),
              (i.startDistanceBetweenFingers = s(
                i.startPoints[0],
                i.startPoints[1]
              )));
        }
      }),
      (u.prototype.ontouchmove = function (t) {
        var e = this;
        if (
          ((e.newPoints = a(t)),
          n.fancybox.isMobile && (l(e.$target) || l(e.$target.parent())))
        )
          return t.stopPropagation(), void (e.canTap = !1);
        if (
          (e.instance.current.opts.touch || e.instance.canPan()) &&
          e.newPoints &&
          e.newPoints.length &&
          ((e.distanceX = s(e.newPoints[0], e.startPoints[0], "x")),
          (e.distanceY = s(e.newPoints[0], e.startPoints[0], "y")),
          (e.distance = s(e.newPoints[0], e.startPoints[0])),
          e.distance > 0)
        ) {
          if (!e.$target.is(e.$stage) && !e.$stage.find(e.$target).length)
            return;
          t.stopPropagation(),
            t.preventDefault(),
            e.isSwiping
              ? e.onSwipe()
              : e.isPanning
              ? e.onPan()
              : e.isZooming && e.onZoom();
        }
      }),
      (u.prototype.onSwipe = function () {
        var e,
          a = this,
          s = a.isSwiping,
          r = a.sliderStartPos.left || 0;
        s === !0
          ? Math.abs(a.distance) > 10 &&
            ((a.canTap = !1),
            a.instance.group.length < 2 && a.instance.opts.touch.vertical
              ? (a.isSwiping = "y")
              : a.instance.isSliding ||
                a.instance.opts.touch.vertical === !1 ||
                ("auto" === a.instance.opts.touch.vertical &&
                  n(t).width() > 800)
              ? (a.isSwiping = "x")
              : ((e = Math.abs(
                  (180 * Math.atan2(a.distanceY, a.distanceX)) / Math.PI
                )),
                (a.isSwiping = e > 45 && e < 135 ? "y" : "x")),
            (a.instance.isSliding = a.isSwiping),
            (a.startPoints = a.newPoints),
            n.each(a.instance.slides, function (t, e) {
              n.fancybox.stop(e.$slide),
                e.$slide.css("transition-duration", "0ms"),
                (e.inTransition = !1),
                e.pos === a.instance.current.pos &&
                  (a.sliderStartPos.left = n.fancybox.getTranslate(
                    e.$slide
                  ).left);
            }),
            a.instance.SlideShow &&
              a.instance.SlideShow.isActive &&
              a.instance.SlideShow.stop())
          : ("x" == s &&
              (a.distanceX > 0 &&
              (a.instance.group.length < 2 ||
                (0 === a.instance.current.index &&
                  !a.instance.current.opts.loop))
                ? (r += Math.pow(a.distanceX, 0.8))
                : a.distanceX < 0 &&
                  (a.instance.group.length < 2 ||
                    (a.instance.current.index === a.instance.group.length - 1 &&
                      !a.instance.current.opts.loop))
                ? (r -= Math.pow(-a.distanceX, 0.8))
                : (r += a.distanceX)),
            (a.sliderLastPos = {
              top: "x" == s ? 0 : a.sliderStartPos.top + a.distanceY,
              left: r,
            }),
            a.requestId && (i(a.requestId), (a.requestId = null)),
            (a.requestId = o(function () {
              a.sliderLastPos &&
                (n.each(a.instance.slides, function (t, e) {
                  var o = e.pos - a.instance.currPos;
                  n.fancybox.setTranslate(e.$slide, {
                    top: a.sliderLastPos.top,
                    left:
                      a.sliderLastPos.left +
                      o * a.canvasWidth +
                      o * e.opts.gutter,
                  });
                }),
                a.$container.addClass("fancybox-is-sliding"));
            })));
      }),
      (u.prototype.onPan = function () {
        var t,
          e,
          a,
          s = this;
        (s.canTap = !1),
          (t =
            s.contentStartPos.width > s.canvasWidth
              ? s.contentStartPos.left + s.distanceX
              : s.contentStartPos.left),
          (e = s.contentStartPos.top + s.distanceY),
          (a = s.limitMovement(
            t,
            e,
            s.contentStartPos.width,
            s.contentStartPos.height
          )),
          (a.scaleX = s.contentStartPos.scaleX),
          (a.scaleY = s.contentStartPos.scaleY),
          (s.contentLastPos = a),
          s.requestId && (i(s.requestId), (s.requestId = null)),
          (s.requestId = o(function () {
            n.fancybox.setTranslate(s.$content, s.contentLastPos);
          }));
      }),
      (u.prototype.limitMovement = function (t, e, n, o) {
        var i,
          a,
          s,
          r,
          c = this,
          l = c.canvasWidth,
          u = c.canvasHeight,
          d = c.contentStartPos.left,
          f = c.contentStartPos.top,
          h = c.distanceX,
          p = c.distanceY;
        return (
          (i = Math.max(0, 0.5 * l - 0.5 * n)),
          (a = Math.max(0, 0.5 * u - 0.5 * o)),
          (s = Math.min(l - n, 0.5 * l - 0.5 * n)),
          (r = Math.min(u - o, 0.5 * u - 0.5 * o)),
          n > l &&
            (h > 0 && t > i && (t = i - 1 + Math.pow(-i + d + h, 0.8) || 0),
            h < 0 && t < s && (t = s + 1 - Math.pow(s - d - h, 0.8) || 0)),
          o > u &&
            (p > 0 && e > a && (e = a - 1 + Math.pow(-a + f + p, 0.8) || 0),
            p < 0 && e < r && (e = r + 1 - Math.pow(r - f - p, 0.8) || 0)),
          { top: e, left: t }
        );
      }),
      (u.prototype.limitPosition = function (t, e, n, o) {
        var i = this,
          a = i.canvasWidth,
          s = i.canvasHeight;
        return (
          n > a
            ? ((t = t > 0 ? 0 : t), (t = t < a - n ? a - n : t))
            : (t = Math.max(0, a / 2 - n / 2)),
          o > s
            ? ((e = e > 0 ? 0 : e), (e = e < s - o ? s - o : e))
            : (e = Math.max(0, s / 2 - o / 2)),
          { top: e, left: t }
        );
      }),
      (u.prototype.onZoom = function () {
        var e = this,
          a = e.contentStartPos.width,
          r = e.contentStartPos.height,
          c = e.contentStartPos.left,
          l = e.contentStartPos.top,
          u = s(e.newPoints[0], e.newPoints[1]),
          d = u / e.startDistanceBetweenFingers,
          f = Math.floor(a * d),
          h = Math.floor(r * d),
          p = (a - f) * e.percentageOfImageAtPinchPointX,
          g = (r - h) * e.percentageOfImageAtPinchPointY,
          b = (e.newPoints[0].x + e.newPoints[1].x) / 2 - n(t).scrollLeft(),
          m = (e.newPoints[0].y + e.newPoints[1].y) / 2 - n(t).scrollTop(),
          y = b - e.centerPointStartX,
          v = m - e.centerPointStartY,
          x = c + (p + y),
          w = l + (g + v),
          $ = {
            top: w,
            left: x,
            scaleX: e.contentStartPos.scaleX * d,
            scaleY: e.contentStartPos.scaleY * d,
          };
        (e.canTap = !1),
          (e.newWidth = f),
          (e.newHeight = h),
          (e.contentLastPos = $),
          e.requestId && (i(e.requestId), (e.requestId = null)),
          (e.requestId = o(function () {
            n.fancybox.setTranslate(e.$content, e.contentLastPos);
          }));
      }),
      (u.prototype.ontouchend = function (t) {
        var o = this,
          s = Math.max(new Date().getTime() - o.startTime, 1),
          r = o.isSwiping,
          c = o.isPanning,
          l = o.isZooming;
        return (
          (o.endPoints = a(t)),
          o.$container.removeClass("fancybox-controls--isGrabbing"),
          n(e).off(".fb.touch"),
          o.requestId && (i(o.requestId), (o.requestId = null)),
          (o.isSwiping = !1),
          (o.isPanning = !1),
          (o.isZooming = !1),
          o.canTap
            ? o.onTap(t)
            : ((o.speed = 366),
              (o.velocityX = (o.distanceX / s) * 0.5),
              (o.velocityY = (o.distanceY / s) * 0.5),
              (o.speedX = Math.max(
                0.5 * o.speed,
                Math.min(1.5 * o.speed, (1 / Math.abs(o.velocityX)) * o.speed)
              )),
              void (c ? o.endPanning() : l ? o.endZooming() : o.endSwiping(r)))
        );
      }),
      (u.prototype.endSwiping = function (t) {
        var e = this,
          o = !1;
        (e.instance.isSliding = !1),
          (e.sliderLastPos = null),
          "y" == t && Math.abs(e.distanceY) > 50
            ? (n.fancybox.animate(
                e.instance.current.$slide,
                {
                  top: e.sliderStartPos.top + e.distanceY + 150 * e.velocityY,
                  opacity: 0,
                },
                150
              ),
              (o = e.instance.close(!0, 300)))
            : "x" == t && e.distanceX > 50 && e.instance.group.length > 1
            ? (o = e.instance.previous(e.speedX))
            : "x" == t &&
              e.distanceX < -50 &&
              e.instance.group.length > 1 &&
              (o = e.instance.next(e.speedX)),
          o !== !1 ||
            ("x" != t && "y" != t) ||
            e.instance.jumpTo(e.instance.current.index, 150),
          e.$container.removeClass("fancybox-is-sliding");
      }),
      (u.prototype.endPanning = function () {
        var t,
          e,
          o,
          i = this;
        i.contentLastPos &&
          (i.instance.current.opts.touch.momentum === !1
            ? ((t = i.contentLastPos.left), (e = i.contentLastPos.top))
            : ((t = i.contentLastPos.left + i.velocityX * i.speed),
              (e = i.contentLastPos.top + i.velocityY * i.speed)),
          (o = i.limitPosition(
            t,
            e,
            i.contentStartPos.width,
            i.contentStartPos.height
          )),
          (o.width = i.contentStartPos.width),
          (o.height = i.contentStartPos.height),
          n.fancybox.animate(i.$content, o, 330));
      }),
      (u.prototype.endZooming = function () {
        var t,
          e,
          o,
          i,
          a = this,
          s = a.instance.current,
          r = a.newWidth,
          c = a.newHeight;
        a.contentLastPos &&
          ((t = a.contentLastPos.left),
          (e = a.contentLastPos.top),
          (i = { top: e, left: t, width: r, height: c, scaleX: 1, scaleY: 1 }),
          n.fancybox.setTranslate(a.$content, i),
          r < a.canvasWidth && c < a.canvasHeight
            ? a.instance.scaleToFit(150)
            : r > s.width || c > s.height
            ? a.instance.scaleToActual(
                a.centerPointStartX,
                a.centerPointStartY,
                150
              )
            : ((o = a.limitPosition(t, e, r, c)),
              n.fancybox.setTranslate(
                a.content,
                n.fancybox.getTranslate(a.$content)
              ),
              n.fancybox.animate(a.$content, o, 150)));
      }),
      (u.prototype.onTap = function (t) {
        var e,
          o = this,
          i = n(t.target),
          s = o.instance,
          r = s.current,
          c = (t && a(t)) || o.startPoints,
          l = c[0] ? c[0].x - o.$stage.offset().left : 0,
          u = c[0] ? c[0].y - o.$stage.offset().top : 0,
          d = function (e) {
            var i = r.opts[e];
            if ((n.isFunction(i) && (i = i.apply(s, [r, t])), i))
              switch (i) {
                case "close":
                  s.close(o.startEvent);
                  break;
                case "toggleControls":
                  s.toggleControls(!0);
                  break;
                case "next":
                  s.next();
                  break;
                case "nextOrClose":
                  s.group.length > 1 ? s.next() : s.close(o.startEvent);
                  break;
                case "zoom":
                  "image" == r.type &&
                    (r.isLoaded || r.$ghost) &&
                    (s.canPan()
                      ? s.scaleToFit()
                      : s.isScaledDown()
                      ? s.scaleToActual(l, u)
                      : s.group.length < 2 && s.close(o.startEvent));
              }
          };
        if (
          !(
            (t.originalEvent && 2 == t.originalEvent.button) ||
            s.isSliding ||
            l > i[0].clientWidth + i.offset().left
          )
        ) {
          if (
            i.is(
              ".fancybox-bg,.fancybox-inner,.fancybox-outer,.fancybox-container"
            )
          )
            e = "Outside";
          else if (i.is(".fancybox-slide")) e = "Slide";
          else {
            if (!s.current.$content || !s.current.$content.has(t.target).length)
              return;
            e = "Content";
          }
          if (o.tapped) {
            if (
              (clearTimeout(o.tapped),
              (o.tapped = null),
              Math.abs(l - o.tapX) > 50 ||
                Math.abs(u - o.tapY) > 50 ||
                s.isSliding)
            )
              return this;
            d("dblclick" + e);
          } else
            (o.tapX = l),
              (o.tapY = u),
              r.opts["dblclick" + e] &&
              r.opts["dblclick" + e] !== r.opts["click" + e]
                ? (o.tapped = setTimeout(function () {
                    (o.tapped = null), d("click" + e);
                  }, 300))
                : d("click" + e);
          return this;
        }
      }),
      n(e).on("onActivate.fb", function (t, e) {
        e && !e.Guestures && (e.Guestures = new u(e));
      }),
      n(e).on("beforeClose.fb", function (t, e) {
        e && e.Guestures && e.Guestures.destroy();
      });
  })(window, document, window.jQuery),
  (function (t, e) {
    "use strict";
    var n = function (t) {
      (this.instance = t), this.init();
    };
    e.extend(n.prototype, {
      timer: null,
      isActive: !1,
      $button: null,
      speed: 3e3,
      init: function () {
        var t = this;
        (t.$button = t.instance.$refs.toolbar
          .find("[data-fancybox-play]")
          .on("click", function () {
            t.toggle();
          })),
          (t.instance.group.length < 2 ||
            !t.instance.group[t.instance.currIndex].opts.slideShow) &&
            t.$button.hide();
      },
      set: function () {
        var t = this;
        t.instance &&
        t.instance.current &&
        (t.instance.current.opts.loop ||
          t.instance.currIndex < t.instance.group.length - 1)
          ? (t.timer = setTimeout(function () {
              t.instance.next();
            }, t.instance.current.opts.slideShow.speed || t.speed))
          : (t.stop(),
            (t.instance.idleSecondsCounter = 0),
            t.instance.showControls());
      },
      clear: function () {
        var t = this;
        clearTimeout(t.timer), (t.timer = null);
      },
      start: function () {
        var t = this,
          e = t.instance.current;
        t.instance &&
          e &&
          (e.opts.loop || e.index < t.instance.group.length - 1) &&
          ((t.isActive = !0),
          t.$button
            .attr("title", e.opts.i18n[e.opts.lang].PLAY_STOP)
            .addClass("fancybox-button--pause"),
          e.isComplete && t.set());
      },
      stop: function () {
        var t = this,
          e = t.instance.current;
        t.clear(),
          t.$button
            .attr("title", e.opts.i18n[e.opts.lang].PLAY_START)
            .removeClass("fancybox-button--pause"),
          (t.isActive = !1);
      },
      toggle: function () {
        var t = this;
        t.isActive ? t.stop() : t.start();
      },
    }),
      e(t).on({
        "onInit.fb": function (t, e) {
          e && !e.SlideShow && (e.SlideShow = new n(e));
        },
        "beforeShow.fb": function (t, e, n, o) {
          var i = e && e.SlideShow;
          o
            ? i && n.opts.slideShow.autoStart && i.start()
            : i && i.isActive && i.clear();
        },
        "afterShow.fb": function (t, e, n) {
          var o = e && e.SlideShow;
          o && o.isActive && o.set();
        },
        "afterKeydown.fb": function (n, o, i, a, s) {
          var r = o && o.SlideShow;
          !r ||
            !i.opts.slideShow ||
            (80 !== s && 32 !== s) ||
            e(t.activeElement).is("button,a,input") ||
            (a.preventDefault(), r.toggle());
        },
        "beforeClose.fb onDeactivate.fb": function (t, e) {
          var n = e && e.SlideShow;
          n && n.stop();
        },
      }),
      e(t).on("visibilitychange", function () {
        var n = e.fancybox.getInstance(),
          o = n && n.SlideShow;
        o && o.isActive && (t.hidden ? o.clear() : o.set());
      });
  })(document, window.jQuery),
  (function (t, e) {
    "use strict";
    var n = (function () {
      var e,
        n,
        o,
        i = [
          [
            "requestFullscreen",
            "exitFullscreen",
            "fullscreenElement",
            "fullscreenEnabled",
            "fullscreenchange",
            "fullscreenerror",
          ],
          [
            "webkitRequestFullscreen",
            "webkitExitFullscreen",
            "webkitFullscreenElement",
            "webkitFullscreenEnabled",
            "webkitfullscreenchange",
            "webkitfullscreenerror",
          ],
          [
            "webkitRequestFullScreen",
            "webkitCancelFullScreen",
            "webkitCurrentFullScreenElement",
            "webkitCancelFullScreen",
            "webkitfullscreenchange",
            "webkitfullscreenerror",
          ],
          [
            "mozRequestFullScreen",
            "mozCancelFullScreen",
            "mozFullScreenElement",
            "mozFullScreenEnabled",
            "mozfullscreenchange",
            "mozfullscreenerror",
          ],
          [
            "msRequestFullscreen",
            "msExitFullscreen",
            "msFullscreenElement",
            "msFullscreenEnabled",
            "MSFullscreenChange",
            "MSFullscreenError",
          ],
        ],
        a = {};
      for (n = 0; n < i.length; n++)
        if (((e = i[n]), e && e[1] in t)) {
          for (o = 0; o < e.length; o++) a[i[0][o]] = e[o];
          return a;
        }
      return !1;
    })();
    if (!n)
      return void (
        e &&
        e.fancybox &&
        (e.fancybox.defaults.btnTpl.fullScreen = !1)
      );
    var o = {
      request: function (e) {
        (e = e || t.documentElement),
          e[n.requestFullscreen](e.ALLOW_KEYBOARD_INPUT);
      },
      exit: function () {
        t[n.exitFullscreen]();
      },
      toggle: function (e) {
        (e = e || t.documentElement),
          this.isFullscreen() ? this.exit() : this.request(e);
      },
      isFullscreen: function () {
        return Boolean(t[n.fullscreenElement]);
      },
      enabled: function () {
        return Boolean(t[n.fullscreenEnabled]);
      },
    };
    e(t).on({
      "onInit.fb": function (t, e) {
        var n,
          i = e.$refs.toolbar.find("[data-fancybox-fullscreen]");
        e && !e.FullScreen && e.group[e.currIndex].opts.fullScreen
          ? ((n = e.$refs.container),
            n.on(
              "click.fb-fullscreen",
              "[data-fancybox-fullscreen]",
              function (t) {
                t.stopPropagation(), t.preventDefault(), o.toggle(n[0]);
              }
            ),
            e.opts.fullScreen &&
              e.opts.fullScreen.autoStart === !0 &&
              o.request(n[0]),
            (e.FullScreen = o))
          : i.hide();
      },
      "afterKeydown.fb": function (t, e, n, o, i) {
        e &&
          e.FullScreen &&
          70 === i &&
          (o.preventDefault(), e.FullScreen.toggle(e.$refs.container[0]));
      },
      "beforeClose.fb": function (t) {
        t && t.FullScreen && o.exit();
      },
    }),
      e(t).on(n.fullscreenchange, function () {
        var t = e.fancybox.getInstance();
        t.current &&
          "image" === t.current.type &&
          t.isAnimating &&
          (t.current.$content.css("transition", "none"),
          (t.isAnimating = !1),
          t.update(!0, !0, 0)),
          t.trigger("onFullscreenChange", o.isFullscreen());
      });
  })(document, window.jQuery),
  (function (t, e) {
    "use strict";
    var n = function (t) {
      (this.instance = t), this.init();
    };
    e.extend(n.prototype, {
      $button: null,
      $grid: null,
      $list: null,
      isVisible: !1,
      init: function () {
        var t = this,
          e = t.instance.group[0],
          n = t.instance.group[1];
        (t.$button = t.instance.$refs.toolbar.find("[data-fancybox-thumbs]")),
          t.instance.group.length > 1 &&
          t.instance.group[t.instance.currIndex].opts.thumbs &&
          ("image" == e.type || e.opts.thumb || e.opts.$thumb) &&
          ("image" == n.type || n.opts.thumb || n.opts.$thumb)
            ? (t.$button.on("click", function () {
                t.toggle();
              }),
              (t.isActive = !0))
            : (t.$button.hide(), (t.isActive = !1));
      },
      create: function () {
        var t,
          n,
          o = this.instance;
        (this.$grid = e('<div class="fancybox-thumbs"></div>').appendTo(
          o.$refs.container
        )),
          (t = "<ul>"),
          e.each(o.group, function (e, o) {
            (n =
              o.opts.thumb ||
              (o.opts.$thumb ? o.opts.$thumb.attr("src") : null)),
              n || "image" !== o.type || (n = o.src),
              n &&
                n.length &&
                (t +=
                  '<li data-index="' +
                  e +
                  '"  tabindex="0" class="fancybox-thumbs-loading"><img data-src="' +
                  n +
                  '" /></li>');
          }),
          (t += "</ul>"),
          (this.$list = e(t)
            .appendTo(this.$grid)
            .on("click", "li", function () {
              o.jumpTo(e(this).data("index"));
            })),
          this.$list
            .find("img")
            .hide()
            .one("load", function () {
              var t,
                n,
                o,
                i,
                a = e(this).parent().removeClass("fancybox-thumbs-loading"),
                s = a.outerWidth(),
                r = a.outerHeight();
              (t = this.naturalWidth || this.width),
                (n = this.naturalHeight || this.height),
                (o = t / s),
                (i = n / r),
                o >= 1 &&
                  i >= 1 &&
                  (o > i ? ((t /= i), (n = r)) : ((t = s), (n /= o))),
                e(this)
                  .css({
                    width: Math.floor(t),
                    height: Math.floor(n),
                    "margin-top": Math.min(0, Math.floor(0.3 * r - 0.3 * n)),
                    "margin-left": Math.min(0, Math.floor(0.5 * s - 0.5 * t)),
                  })
                  .show();
            })
            .each(function () {
              this.src = e(this).data("src");
            });
      },
      focus: function () {
        this.instance.current &&
          this.$list
            .children()
            .removeClass("fancybox-thumbs-active")
            .filter('[data-index="' + this.instance.current.index + '"]')
            .addClass("fancybox-thumbs-active")
            .focus();
      },
      close: function () {
        this.$grid.hide();
      },
      update: function () {
        this.instance.$refs.container.toggleClass(
          "fancybox-show-thumbs",
          this.isVisible
        ),
          this.isVisible
            ? (this.$grid || this.create(),
              this.instance.trigger("onThumbsShow"),
              this.focus())
            : this.$grid && this.instance.trigger("onThumbsHide"),
          this.instance.update();
      },
      hide: function () {
        (this.isVisible = !1), this.update();
      },
      show: function () {
        (this.isVisible = !0), this.update();
      },
      toggle: function () {
        (this.isVisible = !this.isVisible), this.update();
      },
    }),
      e(t).on({
        "onInit.fb": function (t, e) {
          e && !e.Thumbs && (e.Thumbs = new n(e));
        },
        "beforeShow.fb": function (t, e, n, o) {
          var i = e && e.Thumbs;
          if (i && i.isActive) {
            if (n.modal) return i.$button.hide(), void i.hide();
            o && n.opts.thumbs.autoStart === !0 && i.show(),
              i.isVisible && i.focus();
          }
        },
        "afterKeydown.fb": function (t, e, n, o, i) {
          var a = e && e.Thumbs;
          a && a.isActive && 71 === i && (o.preventDefault(), a.toggle());
        },
        "beforeClose.fb": function (t, e) {
          var n = e && e.Thumbs;
          n && n.isVisible && e.opts.thumbs.hideOnClose !== !1 && n.close();
        },
      });
  })(document, window.jQuery),
  (function (t, e, n) {
    "use strict";
    function o() {
      var t = e.location.hash.substr(1),
        n = t.split("-"),
        o =
          n.length > 1 && /^\+?\d+$/.test(n[n.length - 1])
            ? parseInt(n.pop(-1), 10) || 1
            : 1,
        i = n.join("-");
      return o < 1 && (o = 1), { hash: t, index: o, gallery: i };
    }
    function i(t) {
      var e;
      "" !== t.gallery &&
        ((e = n("[data-fancybox='" + n.escapeSelector(t.gallery) + "']").eq(
          t.index - 1
        )),
        e.length || (e = n("#" + n.escapeSelector(t.gallery))),
        e.length && ((s = !1), e.trigger("click")));
    }
    function a(t) {
      var e;
      return (
        !!t &&
        ((e = t.current ? t.current.opts : t.opts),
        e.hash || (e.$orig ? e.$orig.data("fancybox") : ""))
      );
    }
    n.escapeSelector ||
      (n.escapeSelector = function (t) {
        var e = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g,
          n = function (t, e) {
            return e
              ? "\0" === t
                ? "�"
                : t.slice(0, -1) +
                  "\\" +
                  t.charCodeAt(t.length - 1).toString(16) +
                  " "
              : "\\" + t;
          };
        return (t + "").replace(e, n);
      });
    var s = !0,
      r = null,
      c = null;
    n(function () {
      setTimeout(function () {
        n.fancybox.defaults.hash !== !1 &&
          (n(t).on({
            "onInit.fb": function (t, e) {
              var n, i;
              e.group[e.currIndex].opts.hash !== !1 &&
                ((n = o()),
                (i = a(e)),
                i &&
                  n.gallery &&
                  i == n.gallery &&
                  (e.currIndex = n.index - 1));
            },
            "beforeShow.fb": function (n, o, i) {
              var l;
              i &&
                i.opts.hash !== !1 &&
                ((l = a(o)),
                l &&
                  "" !== l &&
                  (e.location.hash.indexOf(l) < 0 &&
                    (o.opts.origHash = e.location.hash),
                  (r = l + (o.group.length > 1 ? "-" + (i.index + 1) : "")),
                  "replaceState" in e.history
                    ? (c && clearTimeout(c),
                      (c = setTimeout(function () {
                        e.history[s ? "pushState" : "replaceState"](
                          {},
                          t.title,
                          e.location.pathname + e.location.search + "#" + r
                        ),
                          (c = null),
                          (s = !1);
                      }, 300)))
                    : (e.location.hash = r)));
            },
            "beforeClose.fb": function (o, i, s) {
              var l, u;
              c && clearTimeout(c),
                s.opts.hash !== !1 &&
                  ((l = a(i)),
                  (u = i && i.opts.origHash ? i.opts.origHash : ""),
                  l &&
                    "" !== l &&
                    ("replaceState" in history
                      ? e.history.replaceState(
                          {},
                          t.title,
                          e.location.pathname + e.location.search + u
                        )
                      : ((e.location.hash = u),
                        n(e).scrollTop(i.scrollTop).scrollLeft(i.scrollLeft))),
                  (r = null));
            },
          }),
          n(e).on("hashchange.fb", function () {
            var t = o();
            n.fancybox.getInstance()
              ? !r ||
                r === t.gallery + "-" + t.index ||
                (1 === t.index && r == t.gallery) ||
                ((r = null), n.fancybox.close())
              : "" !== t.gallery && i(t);
          }),
          i(o()));
      }, 50);
    });
  })(document, window, window.jQuery);
