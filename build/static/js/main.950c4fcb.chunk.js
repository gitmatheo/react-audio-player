(this.webpackJsonpreact = this.webpackJsonpreact || []).push([
  [0],
  {
    29: function (n, e, t) {},
    30: function (n, e, t) {
      'use strict';
      t.r(e);
      var r,
        o = t(0),
        c = t(14),
        a = t.n(c),
        i = t(12),
        s = t(4),
        l = t(42),
        d = t(43),
        b = t(5);
      const u = b.a.li(
        r ||
          (r = Object(s.a)([
            '\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n\n  &.selected {\n    background-color: slategray;\n    background: linear-gradient(to right, white -100%, #323b44 78%);\n    color: white;\n    font-weight: bold;\n    cursor: pointer;\n  }\n\n  .col {\n    cursor: pointer;\n    display: flex;\n    align-items: center;\n    p {\n      padding: 10px 20px;\n    }\n\n    img {\n      height: 50px;\n      margin: 5px 0px 5px 5px;\n    }\n  }\n\n  .play-btn {\n    background: transparent;\n    padding: 0 20px 0 15px;\n    color: white;\n    border: none;\n    cursor: pointer;\n    outline: none;\n  }\n',
          ]))
      );
      var p = t(1);
      function g({
        song: n,
        isCurrent: e,
        onSelect: t,
        isPaused: r,
        onPlayPause: o,
        currentTime: c,
      }) {
        return Object(p.jsxs)(u, {
          className: ''.concat(e ? 'selected' : null),
          onClick: function () {
            t(n);
          },
          children: [
            Object(p.jsxs)('div', {
              className: 'col',
              children: [
                Object(p.jsx)('img', { src: n.coverUrl }),
                Object(p.jsxs)('p', { children: [n.title, ' by ', n.artist] }),
              ],
            }),
            e &&
              Object(p.jsxs)('div', {
                className: 'col',
                children: [
                  Object(p.jsx)('span', { children: c }),
                  Object(p.jsx)('button', {
                    className: 'play-btn',
                    onClick: o,
                    children: r
                      ? Object(p.jsx)(l.a, {})
                      : Object(p.jsx)(d.a, {}),
                  }),
                ],
              }),
          ],
        });
      }
      var x,
        j = t(44),
        h = t(45),
        O = t(46),
        m = t(47),
        f = t(48),
        v = t(2);
      const y = b.a.div(
        x ||
          (x = Object(s.a)([
            "\n  --progress-bar-height: 4px;\n\n  position: relative;\n  width: 100%;\n  background: transparent;\n\n  .range {\n    -webkit-appearance: none;\n    background-color: rgba(240, 9, 9, 0.397);\n    height: 10px;\n    width: 100%;\n    cursor: pointer;\n    opacity: 0;\n    margin: 0 auto;\n  }\n\n  &::before {\n    content: '';\n    background-color: slategrey;\n    width: 99%;\n    height: calc(var(--progress-bar-height) - 1px);\n    display: block;\n    position: absolute;\n    border-radius: 10px;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    pointer-events: none;\n  }\n\n  .cover {\n    background-color: rgb(218, 55, 145);\n    width: 0%;\n    height: var(--progress-bar-height);\n    display: block;\n    position: absolute;\n    border-radius: 10px;\n    top: 50%;\n    transform: translateY(-50%);\n  }\n\n  .thumb {\n    width: 20px;\n    height: 20px;\n    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.753);\n    background: rgb(255, 255, 255);\n    position: absolute;\n    border-radius: 50%;\n    top: 50%;\n    transform: translate(0%, -50%);\n  }\n",
          ]))
      );
      function w({ percentage: n = 0, onChange: e }) {
        const t = Object(o.useState)(0),
          r = Object(v.a)(t, 2),
          c = r[0],
          a = r[1],
          i = Object(o.useState)(0),
          s = Object(v.a)(i, 2),
          l = s[0],
          d = s[1],
          b = Object(o.useState)(0),
          u = Object(v.a)(b, 2),
          g = u[0],
          x = u[1],
          j = Object(o.useRef)(),
          h = Object(o.useRef)();
        return (
          Object(o.useEffect)(() => {
            const e = j.current.getBoundingClientRect().width,
              t = h.current.getBoundingClientRect().width,
              r = (t / 100) * n * -1,
              o = t + (e / 100) * n - (t / 100) * n;
            a(n), d(r), x(o);
          }, [n]),
          Object(p.jsxs)(y, {
            children: [
              Object(p.jsx)('div', {
                className: 'cover',
                style: { width: ''.concat(g, 'px') },
              }),
              Object(p.jsx)('div', {
                className: 'thumb',
                ref: h,
                style: {
                  left: ''.concat(c, '%'),
                  marginLeft: ''.concat(l, 'px'),
                },
              }),
              Object(p.jsx)('input', {
                type: 'range',
                value: c,
                ref: j,
                step: '0.01',
                className: 'range',
                onChange: e,
              }),
            ],
          })
        );
      }
      var k;
      const S = b.a.section(
        k ||
          (k = Object(s.a)([
            '\n  background: transparent;\n  border-radius: 10px;\n  overflow: hidden;\n\n  .overlay {\n    filter: blur(2px);\n    -webkit-filter: blur(2px);\n    height: 123%;\n    width: 120%;\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: cover;\n    position: absolute;\n    top: -10%;\n    left: -10%;\n    opacity: 0.6;\n    clip-path: polygon(0 0, 100% 0, 100% 75%, 80% 93%, 31% 75%, 0 93%);\n  }\n\n  .cover-box {\n    display: flex;\n    position: relative;\n    padding: 20px;\n    background: transparent;\n  }\n\n  .cover-box-text {\n    display: flex;\n    z-index: 1;\n  }\n\n  .titles {\n    padding-left: 20px;\n  }\n\n  .controls-wrapper {\n    padding: 20px;\n    background: rgb(2, 0, 36);\n    background: linear-gradient(\n      180deg,\n      transparent 0%,\n      rgba(255, 255, 255, 1) 100%\n    );\n  }\n\n  .track-time {\n    height: 15px;\n    padding: 5px;\n    color: darkslategray;\n    font-weight: bold;\n    overflow: hidden;\n    display: flex;\n    justify-content: space-between;\n    font-weight: 600;\n  }\n\n  img {\n    width: 200px;\n    height: 200px;\n    box-shadow: 0 5px 15px hsla(0, 0%, 0%, 0.3);\n  }\n\n  .player-box {\n    color: black;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    padding: 10px 20px;\n  }\n\n  button {\n    outline: none;\n    cursor: pointer;\n    border-radius: 50%;\n    border-style: none;\n    background: linear-gradient(to bottom, white -100%, #323b44 78%);\n    color: white;\n    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.4);\n    margin: 0 7px;\n\n    &:active {\n      box-shadow: 0px 6px 16px rgba(0, 0, 0, 0.4);\n    }\n  }\n\n  .play {\n    width: 70px;\n    height: 70px;\n  }\n\n  .prev,\n  .next {\n    width: 50px;\n    height: 50px;\n  }\n\n  .mute,\n  .loop {\n    font-size: 12px;\n    width: 35px;\n    height: 35px;\n  }\n\n  .active {\n    color: rgb(218, 55, 145);\n  }\n\n  .prev-next {\n    display: grid;\n    grid-template-columns: 50% 50%;\n    justify-content: space-between;\n    color: darkslategray;\n    font-weight: 600;\n    font-size: 14px;\n\n    span:last-child {\n      text-align: right;\n    }\n  }\n',
          ]))
      );
      function N({
        song: n,
        isPaused: e,
        isMuted: t,
        isLooping: r,
        onLoop: o,
        onMute: c,
        onSkipToPreviousSong: a,
        onSkipToNextSong: i,
        onPlayPause: s,
        onChange: b,
        percentage: u,
        currentTime: g,
        duration: x,
        previousSong: v,
        nextSong: y,
      }) {
        const k = n.coverUrl,
          N = n.title,
          C = n.artist,
          P = v && v.title && 'Previous: '.concat(v.title),
          T = y && y.title && 'Next: '.concat(y.title);
        ''.concat(r && 'active');
        return Object(p.jsx)(p.Fragment, {
          children: Object(p.jsxs)(S, {
            children: [
              Object(p.jsxs)('div', {
                className: 'cover-box',
                children: [
                  Object(p.jsxs)('div', {
                    className: 'cover-box-text',
                    children: [
                      Object(p.jsx)('img', {
                        width: '250',
                        height: '250',
                        src: k,
                        alt: 'Song cover',
                      }),
                      Object(p.jsxs)('div', {
                        className: 'titles',
                        children: [
                          Object(p.jsx)('h2', { children: N }),
                          Object(p.jsxs)('h4', { children: ['by ', C] }),
                        ],
                      }),
                    ],
                  }),
                  Object(p.jsx)('div', {
                    className: 'overlay',
                    style: {
                      background: 'linear-gradient(0deg, rgba(0, 10, 40, 0.5), rgba(0, 15, 40, 0.6)), url('.concat(
                        k,
                        ')'
                      ),
                    },
                  }),
                ],
              }),
              Object(p.jsxs)('div', {
                className: 'controls-wrapper',
                children: [
                  Object(p.jsxs)('div', {
                    className: 'track-time',
                    children: [
                      Object(p.jsx)('span', { children: g }),
                      Object(p.jsx)('span', { children: x }),
                    ],
                  }),
                  Object(p.jsx)(w, { percentage: u, onChange: b }),
                  Object(p.jsxs)('div', {
                    className: 'player-box',
                    children: [
                      Object(p.jsx)('button', {
                        className: 'mute',
                        onClick: c,
                        children: t
                          ? Object(p.jsx)(j.a, {})
                          : Object(p.jsx)(h.a, {}),
                      }),
                      Object(p.jsx)('button', {
                        className: 'prev',
                        onClick: a,
                        children: Object(p.jsx)(O.a, {}),
                      }),
                      Object(p.jsx)('button', {
                        className: 'play',
                        onClick: s,
                        children: e
                          ? Object(p.jsx)(l.a, {})
                          : Object(p.jsx)(d.a, {}),
                      }),
                      Object(p.jsx)('button', {
                        className: 'next',
                        onClick: i,
                        children: Object(p.jsx)(m.a, {}),
                      }),
                      Object(p.jsx)('button', {
                        className: 'loop '.concat(r && 'active'),
                        onClick: o,
                        children: Object(p.jsx)(f.a, {}),
                      }),
                    ],
                  }),
                  Object(p.jsxs)('div', {
                    className: 'prev-next',
                    children: [
                      Object(p.jsx)('span', { children: P }),
                      Object(p.jsx)('span', { children: T }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        });
      }
      var C;
      const P = b.a.div(
        C ||
          (C = Object(s.a)([
            '\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  align-items: center;\n  color: white;\n  background: rgb(228, 234, 239);\n  background: radial-gradient(circle, #e4eaef -13%, #43505b 98%);\n  min-height: 100vh;\n\n  .container {\n    width: 550px;\n    box-shadow: 0 5px 15px hsla(0, 0%, 0%, 0.3);\n    border-radius: 10px;\n    background: white;\n  }\n\n  .loading {\n    color: white;\n    font-weight: 800;\n  }\n\n  .songs {\n    color: darkslategray;\n    background-color: white;\n    padding: 20px;\n    border-radius: 0px 0px 10px 10px;\n    h2 {\n      padding-bottom: 15px;\n    }\n  }\n',
          ]))
      );
      function T() {
        const n = Object(o.useRef)(),
          e = (function (n) {
            const e = Object(o.useState)([]),
              t = Object(v.a)(e, 2),
              r = t[0],
              c = t[1],
              a = Object(o.useState)(0),
              i = Object(v.a)(a, 2),
              s = i[0],
              l = i[1],
              d = Object(o.useState)(!0),
              b = Object(v.a)(d, 2),
              u = b[0],
              p = b[1],
              g = Object(o.useState)(!1),
              x = Object(v.a)(g, 2),
              j = x[0],
              h = x[1],
              O = Object(o.useState)(!1),
              m = Object(v.a)(O, 2),
              f = m[0],
              y = m[1],
              w = Object(o.useState)(0),
              k = Object(v.a)(w, 2),
              S = k[0],
              N = k[1],
              C = Object(o.useState)(0),
              P = Object(v.a)(C, 2),
              T = P[0],
              U = P[1],
              L = Object(o.useState)(0),
              B = Object(v.a)(L, 2),
              I = B[0],
              D = B[1];
            Object(o.useEffect)(() => {
              fetch('https://examples.devmastery.pl/songs-api/songs').then(
                (n) => {
                  n.ok && n.json().then(c);
                }
              );
            }, []);
            const M = r[s],
              R = r[s - 1],
              z = r[s + 1];
            function F() {
              setTimeout(() => {
                u || n.current.play(),
                  j && (n.current.muted = !0),
                  f && (n.current.loop = !0);
              });
            }
            function E() {
              p((n) => !n), u ? n.current.play() : n.current.pause();
            }
            function J(n) {
              if (!n) return '00:00';
              let e = parseInt(n / 60)
                  .toString()
                  .padStart(2, '0'),
                t = parseInt(n % 60)
                  .toString()
                  .padStart(2, '0');
              return ''.concat(e, ':').concat(t);
            }
            return {
              mainConfig: {
                songs: r,
                currentSongIndex: s,
                percentage: S,
                duration: T,
                setDuration: U,
                getCurrentDuration: (n) => {
                  const e = (
                      (n.currentTarget.currentTime / n.currentTarget.duration) *
                      100
                    ).toFixed(2),
                    t = n.currentTarget.currentTime;
                  N(+e), D(t.toFixed(2));
                },
                currentSong: M,
              },
              songPlayerConfig: {
                song: M,
                previousSong: R,
                nextSong: z,
                isPaused: u,
                isMuted: j,
                isLooping: f,
                onLoop: function () {
                  y(!n.current.loop), (n.current.loop = !f);
                },
                onMute: function () {
                  h(!n.current.muted), (n.current.muted = !j);
                },
                onSkipToPreviousSong: function () {
                  l((n) => (n > 0 ? n - 1 : r.length - 1)), F();
                },
                onSkipToNextSong: function () {
                  l((n) => (r.length > n + 1 ? n + 1 : 0)), F();
                },
                onPlayPause: E,
                onChange: (e) => {
                  const t = n.current;
                  (t.currentTime = (t.duration / 100) * e.target.value),
                    N(e.target.value);
                },
                currentTime: J(I),
                duration: J(T),
                percentage: S,
              },
              songListItemConfig: {
                onSelect: function (n) {
                  const e = r.findIndex((e) => e.audioUrl === n.audioUrl);
                  e >= 0 && l(e);
                },
                onPlayPause: E,
                isPaused: u,
                currentTime: J(I),
              },
            };
          })(n),
          t = e.mainConfig,
          r = e.songPlayerConfig,
          c = e.songListItemConfig;
        return Object(p.jsx)(P, {
          children:
            0 === t.songs.length
              ? Object(p.jsx)('h3', {
                  className: 'loading',
                  children: "'Loading...'",
                })
              : Object(p.jsxs)('div', {
                  className: 'container',
                  children: [
                    Object(p.jsx)(N, Object(i.a)({}, r)),
                    Object(p.jsxs)('div', {
                      className: 'songs',
                      children: [
                        Object(p.jsx)('h2', { children: 'Songs' }),
                        Object(p.jsx)('ul', {
                          children: t.songs.map((n) =>
                            Object(p.jsx)(
                              g,
                              Object(i.a)(
                                {
                                  song: n,
                                  isCurrent:
                                    t.currentSong.audioUrl === n.audioUrl,
                                },
                                c
                              ),
                              n.audioUrl
                            )
                          ),
                        }),
                      ],
                    }),
                    Object(p.jsx)(
                      'audio',
                      {
                        ref: n,
                        onLoadedData: (n) => {
                          t.setDuration(n.currentTarget.duration.toFixed(2));
                        },
                        onTimeUpdate: t.getCurrentDuration,
                        children: Object(p.jsx)('source', {
                          src: t.currentSong.audioUrl,
                        }),
                      },
                      t.currentSong.audioUrl
                    ),
                  ],
                }),
        });
      }
      t(29);
      const U = document.getElementById('root');
      a.a.render(
        Object(p.jsx)(o.StrictMode, { children: Object(p.jsx)(T, {}) }),
        U
      );
    },
  },
  [[30, 1, 2]],
]);
//# sourceMappingURL=main.950c4fcb.chunk.js.map
