(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [931],
  {
    599: function (e, t, l) {
      Promise.resolve().then(l.bind(l, 5301));
    },
    5301: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return w;
          },
        });
      var a = l(7437),
        s = l(3145),
        i = l(6298),
        r = l(8614),
        n = l(7648),
        c = l(4743),
        o = l(6818),
        x = l(1804),
        d = l(6840),
        h = l(2489),
        m = l(1273),
        p = l(2265);
      function f() {
        let [e, t] = (0, p.useState)(!1),
          l = [
            {
              href: "https://t.me/ELMFROGCOIN",
              icon: (0, a.jsx)(c.Z, { className: "w-4 h-4" }),
              label: "Telegram",
              className: "bg-blue-100 text-blue-600 hover:bg-blue-200",
              target: "_blank",
              rel: "noopener noreferrer",
            },
            {
              href: "https://x.com/ELMFROGCOIN",
              icon: (0, a.jsx)(m.LCd, { className: "w-4 h-4" }),
              label: "Twitter / X",
              className: "bg-black text-white hover:bg-gray-800",
              target: "_blank",
              rel: "noopener noreferrer",
            },
            {
              href: "https://dexscreener.com/ethereum/0x9b0a4db8f2628a81116cb3c92c9a14d221fc8dc3",
              icon: (0, a.jsx)(o.Z, { className: "w-4 h-4" }),
              label: "Dexscreener",
              className: "bg-green-100 text-green-600 hover:bg-green-200",
              target: "_blank",
              rel: "noopener noreferrer",
            },
            {
              href: "https://app.uniswap.org/explore/tokens/ethereum/0x1200da7D19570E7474AaB533abf0Ae67f89b46ef",
              icon: (0, a.jsx)(o.Z, { className: "w-4 h-4" }),
              label: "Uniswap",
              className: "bg-green-100 text-green-600 hover:bg-green-200",
              target: "_blank",
              rel: "noopener noreferrer",
            },
          ];
        return (0, a.jsxs)(a.Fragment, {
          children: [
            (0, a.jsx)(i.E.nav, {
              initial: { y: -100 },
              animate: { y: 0 },
              className:
                "fixed top-0 w-full bg-white/80 backdrop-blur-sm shadow-sm z-50",
              children: (0, a.jsx)("div", {
                className: "w-full mx-auto px-4 sm:px-6 lg:px-8",
                children: (0, a.jsxs)("div", {
                  className: "flex items-center justify-between h-16",
                  children: [
                    (0, a.jsx)(n.default, {
                      href: "/",
                      className:
                        "font-bold text-base md:text-xl text-yellow-500",
                      children: "Wizard Frog's Magical Journey 🐸 ✨ 🍵",
                    }),
                    (0, a.jsx)("div", {
                      className: "hidden md:flex items-center gap-3",
                      children: l.map((e, t) =>
                        (0, a.jsxs)(
                          n.default,
                          {
                            href: e.href,
                            target: e.target,
                            rel: e.rel,
                            className:
                              "flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 hover:scale-105 transform active:scale-95 ".concat(
                                e.className
                              ),
                            children: [
                              e.icon,
                              (0, a.jsx)("span", { children: e.label }),
                            ],
                          },
                          t
                        )
                      ),
                    }),
                    (0, a.jsx)("button", {
                      onClick: () => t(!0),
                      className:
                        "md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors",
                      "aria-label": "Open menu",
                      children: (0, a.jsx)(d.Z, { className: "w-6 h-6" }),
                    }),
                  ],
                }),
              }),
            }),
            (0, a.jsx)(r.M, {
              children:
                e &&
                (0, a.jsxs)(a.Fragment, {
                  children: [
                    (0, a.jsx)(i.E.div, {
                      initial: { opacity: 0 },
                      animate: { opacity: 1 },
                      exit: { opacity: 0 },
                      onClick: () => t(!1),
                      className:
                        "fixed inset-0 bg-black/20 backdrop-blur-sm z-50 md:hidden",
                    }),
                    (0, a.jsx)(i.E.div, {
                      initial: { x: "-100%" },
                      animate: { x: 0 },
                      exit: { x: "-100%" },
                      transition: {
                        type: "spring",
                        damping: 25,
                        stiffness: 300,
                      },
                      className:
                        "fixed top-0 left-0 bottom-0 w-[280px] bg-white shadow-xl z-50 md:hidden",
                      children: (0, a.jsxs)("div", {
                        className: "flex flex-col h-full",
                        children: [
                          (0, a.jsxs)("div", {
                            className:
                              "flex items-center justify-between p-4 border-b",
                            children: [
                              (0, a.jsx)("span", {
                                className: "font-bold text-blue-500",
                                children: "Menu",
                              }),
                              (0, a.jsx)("button", {
                                onClick: () => t(!1),
                                className:
                                  "p-2 rounded-lg hover:bg-gray-100 transition-colors",
                                "aria-label": "Close menu",
                                children: (0, a.jsx)(h.Z, {
                                  className: "w-5 h-5",
                                }),
                              }),
                            ],
                          }),
                          (0, a.jsx)("div", {
                            className: "flex-1 overflow-y-auto",
                            children: (0, a.jsx)("div", {
                              className: "flex flex-col gap-2 p-4",
                              children: l.map((e, l) =>
                                (0, a.jsxs)(
                                  n.default,
                                  {
                                    href: e.href,
                                    target: e.target,
                                    rel: e.rel,
                                    onClick: () => t(!1),
                                    className:
                                      "flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ".concat(
                                        e.className
                                      ),
                                    children: [
                                      e.icon,
                                      (0, a.jsx)("span", { children: e.label }),
                                    ],
                                  },
                                  l
                                )
                              ),
                            }),
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
            }),
          ],
        });
      }
      var g = l(3276);
      function u() {
        let [e, t] = (0, p.useState)(null),
          l = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } };
        return (0, a.jsxs)("section", {
          className: "pb-16 px-4 bg-gradient-to-b from-[#D0D0D0] to-yellow-100",
          children: [
            (0, a.jsxs)("div", {
              className: "max-w-6xl mx-auto",
              children: [
                (0, a.jsx)(i.E.h2, {
                  initial: { opacity: 0, y: -20 },
                  whileInView: { opacity: 1, y: 0 },
                  viewport: { once: !0 },
                  className:
                    "text-4xl md:text-6xl font-bold text-center mb-12 text-yellow-500",
                  children: "Gallery",
                }),
                (0, a.jsx)(i.E.div, {
                  variants: {
                    hidden: { opacity: 0 },
                    show: { opacity: 1, transition: { staggerChildren: 0.1 } },
                  },
                  initial: "hidden",
                  whileInView: "show",
                  viewport: { once: !0 },
                  className:
                    "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
                  children: [
                    { type: "image", src: "/frog1.jpg", alt: "God Loves" },
                    {
                      type: "video",
                      src: "/assets/video.mp4",
                      thumbnail: "/assets/video.mp4",
                      alt: "Luce Dancing",
                    },
                    { type: "image", src: "/frog2.jpg", alt: "Luce with Pope" },
                  ].map((e, r) =>
                    (0, a.jsx)(
                      i.E.div,
                      {
                        variants: l,
                        className:
                          "relative group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow",
                        onClick: () =>
                          t({ type: e.type, src: e.src, alt: e.alt }),
                        children: (0, a.jsxs)("div", {
                          className: "aspect-[4/3] relative",
                          children: [
                            "image" === e.type
                              ? (0, a.jsx)(s.default, {
                                  src: e.src,
                                  alt: e.alt || "",
                                  width: 800,
                                  height: 600,
                                  className: "object-cover w-full h-full",
                                  priority: r < 4,
                                })
                              : (0, a.jsxs)("div", {
                                  className:
                                    "relative w-full h-full bg-gray-900",
                                  children: [
                                    (0, a.jsx)("video", {
                                      src: e.src,
                                      className: "w-full h-full object-cover",
                                      muted: !0,
                                      playsInline: !0,
                                      loop: !0,
                                      poster: e.thumbnail,
                                    }),
                                    (0, a.jsx)("div", {
                                      className:
                                        "absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/40 transition-colors",
                                      children: (0, a.jsx)(g.Z, {
                                        className:
                                          "w-12 h-12 text-white opacity-80 group-hover:opacity-100 transition-opacity",
                                      }),
                                    }),
                                  ],
                                }),
                            (0, a.jsx)("div", {
                              className:
                                "absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors cursor-pointer",
                            }),
                          ],
                        }),
                      },
                      r
                    )
                  ),
                }),
              ],
            }),
            e &&
              (0, a.jsxs)(i.E.div, {
                initial: { opacity: 0 },
                animate: { opacity: 1 },
                exit: { opacity: 0 },
                className:
                  "fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4",
                onClick: () => t(null),
                children: [
                  (0, a.jsx)("button", {
                    onClick: () => t(null),
                    className:
                      "absolute top-4 right-4 text-white hover:text-gray-300 transition-colors",
                    "aria-label": "Close modal",
                    children: (0, a.jsx)(h.Z, { className: "w-8 h-8" }),
                  }),
                  (0, a.jsx)("div", {
                    className: "relative w-full max-w-4xl aspect-[4/3]",
                    children:
                      "image" === e.type
                        ? (0, a.jsx)(s.default, {
                            src: e.src,
                            alt: e.alt || "",
                            width: 1200,
                            height: 900,
                            className:
                              "object-contain w-full h-full rounded-xl",
                            priority: !0,
                          })
                        : (0, a.jsx)("video", {
                            src: e.src,
                            className: "w-full h-full rounded-xl",
                            controls: !0,
                            autoPlay: !0,
                            playsInline: !0,
                          }),
                  }),
                ],
              }),
          ],
        });
      }
      function w() {
        return (
          (0, p.useEffect)(() => {
            let e = document.createElement("script");
            return (
              (e.src = "https://platform.twitter.com/widgets.js"),
              (e.async = !0),
              document.body.appendChild(e),
              () => {
                document.body.removeChild(e);
              }
            );
          }, []),
          (0, a.jsxs)("div", {
            className: "flex flex-col",
            children: [
              (0, a.jsx)(f, {}),
              (0, a.jsxs)(i.E.div, {
                initial: { opacity: 0 },
                animate: { opacity: 1 },
                transition: { duration: 0.8 },
                className:
                  "flex flex-col lg:flex-row pt-32 lg:pt-64 pb-16 md:pb-32 items-center justify-center bg-gradient-to-b from-yellow-100 to-[#D0D0D0] w-full px-4 lg:px-12 gap-8",
                children: [
                  (0, a.jsxs)(i.E.div, {
                    className:
                      "flex flex-col items-center lg:items-start w-full lg:w-1/2",
                    children: [
                      (0, a.jsxs)(i.E.h1, {
                        initial: { y: -20 },
                        animate: { y: 0 },
                        className:
                          "mt-4 lg:mt-0 text-4xl sm:text-6xl 2xl:text-8xl font-bold mb-8 text-black uppercase text-center lg:text-left flex items-center gap-2",
                        children: [
                          (0, a.jsx)(s.default, {
                            src: "/frog.png",
                            alt: "Luce",
                            width: 32,
                            height: 32,
                            className: "h-[1em] w-auto mr-4",
                          }),
                          (0, a.jsx)("span", {
                            className: "text-yellow-500",
                            children: "Meet Wizard Frog",
                          }),
                        ],
                      }),
                      (0, a.jsx)(i.E.p, {
                        initial: { y: -20 },
                        animate: { y: 0 },
                        transition: { delay: 0.2 },
                        className:
                          "mb-6 lg:mb-8 text-2xl text-yellow-500 font-bold text-center lg:text-left",
                        children: "The Magical Tea-Making Amphibian",
                      }),
                      (0, a.jsx)(i.E.p, {
                        initial: { opacity: 0 },
                        animate: { opacity: 1 },
                        transition: { delay: 0.6 },
                        className:
                          "text-lg md:text-2xl font-bold text-black text-center lg:text-left uppercase",
                        children:
                          "Join Wizard Frog on his whimsical adventures as he brews magical teas, takes peaceful walks, and contemplates the profound nature of bread.",
                      }),
                    ],
                  }),
                  (0, a.jsx)(i.E.div, {
                    initial: { scale: 0.8 },
                    animate: { scale: 1 },
                    transition: { delay: 0.4 },
                    className:
                      "w-full lg:w-1/2 max-w-2xl overflow-hidden rounded-lg shadow-lg",
                    children: (0, a.jsx)("img", {
                      src: "/assets/frog.png",
                      alt: "Luce waving",
                      className: "w-full h-auto",
                    }),
                  }),
                ],
              }),
              (0, a.jsx)(i.E.div, {
                initial: { opacity: 0, y: 20 },
                whileInView: { opacity: 1, y: 0 },
                viewport: { once: !0 },
                transition: { duration: 0.5 },
                className:
                  "w-full flex justify-center bg-[#D0D0D0] backdrop-blur-sm py-8 px-4 lg:px-16",
                children: (0, a.jsxs)(i.E.div, {
                  className:
                    "flex flex-col lg:flex-row items-center  w-full bg-gradient-to-r from-blue-50 to-yellow-50 rounded-2xl shadow-lg p-8 gap-6",
                  initial: { scale: 0.95 },
                  whileInView: { scale: 1 },
                  viewport: { once: !0 },
                  transition: { delay: 0.2 },
                  children: [
                    (0, a.jsx)("h2", {
                      className:
                        "flex flex-row items-center text-3xl font-bold text-yellow-500 mb-4 lg:pr-12",
                      children: (0, a.jsxs)("span", {
                        className:
                          "flex items-center text-4xl md:text-6xl text-center lg:text-left",
                        children: [
                          (0, a.jsx)(s.default, {
                            src: "/frog.png",
                            alt: "Luce",
                            width: 80,
                            height: 80,
                            className: "inline-block h-[1em] w-auto mr-2",
                          }),
                          (0, a.jsx)("span", { children: "WIZARD FROG" }),
                        ],
                      }),
                    }),
                    (0, a.jsxs)("div", {
                      className: "w-full flex flex-col gap-4",
                      children: [
                        (0, a.jsxs)(i.E.div, {
                          className:
                            "flex flex-col sm:flex-row items-start sm:items-center gap-2 p-4 bg-white/80 rounded-xl hover:bg-white/90 transition-colors",
                          whileHover: { scale: 1.02 },
                          transition: { type: "spring", stiffness: 300 },
                          children: [
                            (0, a.jsx)("span", {
                              className:
                                "font-semibold lg:text-2xl text-gray-600 min-w-[120px]",
                              children: "Contract",
                            }),
                            (0, a.jsx)("div", {
                              className: "flex items-center gap-2 break-all",
                              children: (0, a.jsx)("span", {
                                className: "text-sm lg:text-2xl text-gray-500",
                                children:
                                  "0x1200da7D19570E7474AaB533abf0Ae67f89b46ef",
                              }),
                            }),
                          ],
                        }),
                        (0, a.jsxs)(i.E.div, {
                          className:
                            "flex flex-col sm:flex-row items-start sm:items-center gap-2 p-4 bg-white/80 rounded-xl hover:bg-white/90 transition-colors",
                          whileHover: { scale: 1.02 },
                          transition: { type: "spring", stiffness: 300 },
                          children: [
                            (0, a.jsx)("span", {
                              className:
                                "font-semibold lg:text-2xl text-gray-600 min-w-[120px]",
                              children: "Network:",
                            }),
                            (0, a.jsx)("span", {
                              className:
                                "flex items-center lg:text-2xl gap-2 text-gray-500",
                              children: "Ethereum",
                            }),
                          ],
                        }),
                        (0, a.jsxs)(i.E.div, {
                          className:
                            "flex flex-col sm:flex-row items-start sm:items-center gap-2 p-4 bg-white/80 rounded-xl hover:bg-white/90 transition-colors",
                          whileHover: { scale: 1.02 },
                          transition: { type: "spring", stiffness: 300 },
                          children: [
                            (0, a.jsx)("span", {
                              className:
                                "font-semibold lg:text-2xl text-gray-600 min-w-[120px]",
                              children: "Supply:",
                            }),
                            (0, a.jsx)("span", {
                              className: "text-gray-500 lg:text-2xl",
                              children: "10,000,000",
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              }),

              (0, a.jsx)(u, {}),
              (0, a.jsx)(i.E.div, {
                initial: { opacity: 0 },
                whileInView: { opacity: 1 },
                viewport: { once: !0 },
                className: "h-screen relative w-full",
                children: (0, a.jsx)(s.default, {
                  src: "/footer.jpg",
                  alt: "Frog Banner",
                  fill: !0,
                  style: { objectFit: "cover" },
                  priority: !0,
                }),
              }),
              (0, a.jsx)(i.E.div, {
                className: "w-full flex justify-center pb-4",
                children: (0, a.jsx)(i.E.p, {
                  initial: { opacity: 0 },
                  animate: { opacity: 1 },
                  transition: { delay: 0.7 },
                  className: "mt-6 text-lg text-red-600 max-w-2xl text-center",
                  children:
                    "DISCLAIMER: This token is not officially affiliated with, endorsed by, or connected to the Vatican or any official religious organization. This is a community-driven meme token.",
                }),
              }),
            ],
          })
        );
      }
    },
  },
  function (e) {
    e.O(0, [240, 733, 971, 117, 744], function () {
      return e((e.s = 599));
    }),
      (_N_E = e.O());
  },
]);
