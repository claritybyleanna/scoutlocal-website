/* @ds-bundle: {"format":3,"namespace":"ScoutLocalDesignSystem_b3452c","components":[{"name":"Badge","sourcePath":"components/badges/Badge.jsx"},{"name":"LivePill","sourcePath":"components/badges/LivePill.jsx"},{"name":"Pill","sourcePath":"components/badges/Pill.jsx"},{"name":"ListingRow","sourcePath":"components/content/ListingRow.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Eyebrow","sourcePath":"components/core/Eyebrow.jsx"},{"name":"Stat","sourcePath":"components/core/Stat.jsx"},{"name":"Accordion","sourcePath":"components/forms/Accordion.jsx"},{"name":"Field","sourcePath":"components/forms/Field.jsx"}],"sourceHashes":{"components/badges/Badge.jsx":"62d4990924a4","components/badges/LivePill.jsx":"ed4891a0056b","components/badges/Pill.jsx":"61ed582027fc","components/content/ListingRow.jsx":"cce4965f418a","components/core/Button.jsx":"a7a05272d643","components/core/Card.jsx":"16faa5fe2455","components/core/Eyebrow.jsx":"ec9ee9888064","components/core/Stat.jsx":"3a3caf3d772c","components/forms/Accordion.jsx":"2441c50cf65a","components/forms/Field.jsx":"6ed54953e240","mockups/explore-online/ExploreOnline.jsx":"65778dcdb371","mockups/explore-online/ios-frame.jsx":"be3343be4b51","ui_kits/app/AppScreens.jsx":"28802fa4efe6","ui_kits/app/ios-frame.jsx":"be3343be4b51","ui_kits/website/BusinessScreen.jsx":"2ba0e2f56a7b","ui_kits/website/Footer.jsx":"12f3187f6f1a","ui_kits/website/Header.jsx":"f2e6168a710c","ui_kits/website/HomeScreen.jsx":"ec0da4a16dcd"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.ScoutLocalDesignSystem_b3452c = window.ScoutLocalDesignSystem_b3452c || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/badges/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * ScoutLocal Badge — the trust chip families read on every listing.
 * Inline pill with an emblem icon. `kind` picks the meaning + color:
 * verified (neutral shield), milspouse (sage), founding (peach star).
 */
const ICONS = {
  verified: /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12 2L4 5v6c0 5 3.5 8.5 8 9.5 4.5-1 8-4.5 8-9.5V5l-8-3z",
    stroke: "currentColor",
    strokeWidth: "1.6",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8.5 12l2.5 2.5L16 9.5",
    stroke: "currentColor",
    strokeWidth: "1.6",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })),
  milspouse: /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "9",
    r: "3.4",
    stroke: "currentColor",
    strokeWidth: "1.6"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M5 20c.8-3.8 4-6 7-6s6.2 2.2 7 6",
    stroke: "currentColor",
    strokeWidth: "1.6",
    strokeLinecap: "round"
  })),
  founding: /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12 3l2.6 5.6 6.2.7-4.6 4.3 1.3 6.1L12 17l-5.5 3.1 1.3-6.1L3.2 9.6l6.2-.7L12 3z",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinejoin: "round"
  }))
};
const LABELS = {
  verified: 'Verified Local',
  milspouse: 'Military Spouse Owned',
  founding: 'Founding Partner'
};
function Badge({
  kind = 'verified',
  children,
  style,
  ...rest
}) {
  const isSage = kind === 'milspouse';
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      fontFamily: "'Geist', sans-serif",
      fontSize: 11.5,
      fontWeight: 500,
      padding: '5px 10px 6px',
      borderRadius: 999,
      border: isSage ? '1px solid var(--sage-line, #c3d0b2)' : '1px solid var(--line, #dfd5c7)',
      background: isSage ? 'var(--sage-mist, #e7ede0)' : 'var(--soft, #fbf7f0)',
      color: isSage ? 'var(--sage-deep, #4f5c3a)' : 'var(--ink-2, #332e25)',
      whiteSpace: 'nowrap',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 13,
      height: 13,
      display: 'inline-flex',
      flex: '0 0 13px'
    }
  }, ICONS[kind]), children || LABELS[kind]);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/badges/Badge.jsx", error: String((e && e.message) || e) }); }

// components/badges/LivePill.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * ScoutLocal LivePill — the pulsing "open now / beacon live" indicator.
 * Sage by default (trust/open); `tone="rust"` for urgent/alert.
 */
function LivePill({
  children = 'live now',
  tone = 'sage',
  style,
  ...rest
}) {
  const sage = tone === 'sage';
  const dot = sage ? '#7d9a64' : 'var(--rust, #b25e3c)';
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 7,
      fontFamily: "'Geist Mono', monospace",
      fontSize: 10,
      fontWeight: 500,
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      padding: '5px 11px',
      borderRadius: 999,
      border: sage ? '1px solid var(--sage-line, #c3d0b2)' : '1px solid var(--line, #dfd5c7)',
      background: sage ? 'var(--sage-mist, #e7ede0)' : 'var(--peach-3, #fde5d1)',
      color: sage ? 'var(--sage-deep, #4f5c3a)' : 'var(--rust, #b25e3c)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      width: 7,
      height: 7,
      flex: '0 0 7px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: '50%',
      background: dot
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: '50%',
      background: dot,
      animation: 'sl-ping 2s cubic-bezier(0,0,.2,1) infinite'
    }
  })), children, /*#__PURE__*/React.createElement("style", null, '@keyframes sl-ping{0%{transform:scale(1);opacity:.5}70%{transform:scale(2.6);opacity:0}100%{transform:scale(2.6);opacity:0}}@media(prefers-reduced-motion:reduce){[style*="sl-ping"]{animation:none!important}}'));
}
Object.assign(__ds_scope, { LivePill });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/badges/LivePill.jsx", error: String((e && e.message) || e) }); }

// components/badges/Pill.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * ScoutLocal Pill — the rounded filter / category chip. Toggles between a
 * bordered rest state and a solid ink "on" state. Use for category filters
 * (childcare, coffee, salon…) and selectable options.
 */
function Pill({
  children,
  active = false,
  onClick,
  as = 'button',
  style,
  ...rest
}) {
  const Tag = as;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    onClick: onClick,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      fontFamily: "'Geist', sans-serif",
      fontSize: 13,
      lineHeight: 1,
      padding: '8px 14px',
      borderRadius: 999,
      cursor: onClick ? 'pointer' : 'default',
      transition: 'background .18s, color .18s, border-color .18s',
      border: active ? '1px solid var(--ink, #17150f)' : '1px solid var(--line, #dfd5c7)',
      background: active ? 'var(--ink, #17150f)' : 'var(--paper, #fffdfa)',
      color: active ? '#fff' : 'var(--ink-2, #332e25)',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Pill });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/badges/Pill.jsx", error: String((e && e.message) || e) }); }

// components/content/ListingRow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * ScoutLocal ListingRow — a single business row in the directory: name,
 * meta line, and a trailing status tag. Mirrors the in-app/listing list rows.
 */
function ListingRow({
  name,
  meta,
  tag,
  tagTone = 'sage',
  last = false,
  onClick,
  style,
  ...rest
}) {
  const tones = {
    sage: {
      background: 'var(--sage, #bccaa6)',
      color: 'var(--sage-deep, #4f5c3a)'
    },
    live: {
      background: 'var(--peach-3, #fde5d1)',
      color: 'var(--rust, #b25e3c)'
    },
    muted: {
      background: 'var(--soft, #fbf7f0)',
      color: 'var(--muted, #81786c)'
    }
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    onClick: onClick,
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: 10,
      padding: '15px 0',
      borderBottom: last ? 'none' : '1px solid var(--line, #dfd5c7)',
      cursor: onClick ? 'pointer' : 'default',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("b", {
    style: {
      display: 'block',
      fontFamily: "'Geist', sans-serif",
      fontSize: 14,
      fontWeight: 600,
      color: 'var(--ink, #17150f)',
      letterSpacing: '-0.01em'
    }
  }, name), meta && /*#__PURE__*/React.createElement("small", {
    style: {
      display: 'block',
      fontFamily: "'Geist', sans-serif",
      fontSize: 12,
      color: 'var(--muted, #81786c)',
      marginTop: 3
    }
  }, meta)), tag && /*#__PURE__*/React.createElement("span", {
    style: {
      flex: '0 0 auto',
      fontFamily: "'Geist Mono', monospace",
      fontSize: 10,
      textTransform: 'uppercase',
      letterSpacing: '0.04em',
      padding: '5px 8px',
      borderRadius: 5,
      whiteSpace: 'nowrap',
      ...tones[tagTone]
    }
  }, tag));
}
Object.assign(__ds_scope, { ListingRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/ListingRow.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * ScoutLocal Button — pill-shaped action.
 * Variants: primary (ink), peach (on dark), ghost (underline link-button).
 * Sizes: md (default), sm. Optional trailing arrow.
 */
function Button({
  children,
  variant = 'primary',
  size = 'md',
  arrow = false,
  href,
  disabled = false,
  onClick,
  style,
  ...rest
}) {
  const pad = size === 'sm' ? '10px 16px' : '14px 22px';
  const fontSize = size === 'sm' ? 14 : 15;
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 9,
    fontFamily: "'Geist', system-ui, sans-serif",
    fontWeight: 600,
    fontSize,
    lineHeight: 1,
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.55 : 1,
    border: 'none',
    textDecoration: 'none',
    transition: 'transform .18s, background .18s, color .18s, border-color .18s',
    whiteSpace: 'nowrap'
  };
  const variants = {
    primary: {
      background: 'var(--ink, #17150f)',
      color: '#fff',
      padding: pad,
      borderRadius: 999
    },
    peach: {
      background: 'var(--peach, #ffd1ac)',
      color: 'var(--ink, #17150f)',
      padding: pad,
      borderRadius: 999
    },
    ghost: {
      background: 'transparent',
      color: 'var(--ink, #17150f)',
      padding: `${size === 'sm' ? 8 : 10}px 0`,
      borderRadius: 0,
      borderBottom: '1px solid var(--ink, #17150f)'
    }
  };
  const Tag = href ? 'a' : 'button';
  const styleObj = {
    ...base,
    ...variants[variant],
    ...style
  };
  return /*#__PURE__*/React.createElement(Tag, _extends({
    href: href,
    onClick: disabled ? undefined : onClick,
    disabled: Tag === 'button' ? disabled : undefined,
    style: styleObj,
    onMouseEnter: e => {
      if (!disabled) e.currentTarget.style.transform = 'translateY(-1px)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = 'none';
    }
  }, rest), children, arrow && /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 16 16",
    fill: "none",
    width: "15",
    height: "15",
    style: {
      flex: '0 0 auto'
    },
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M3 8h10M9 4l4 4-4 4",
    stroke: "currentColor",
    strokeWidth: "1.6",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * ScoutLocal Card — warm paper surface with hairline border and soft
 * brown-cast shadow. `tone` switches the fill; `hover` lifts on pointer.
 */
function Card({
  children,
  tone = 'paper',
  hover = false,
  padding = 30,
  style,
  ...rest
}) {
  const tones = {
    paper: {
      background: 'var(--paper, #fffdfa)',
      color: 'var(--ink, #17150f)',
      border: '1px solid var(--line, #dfd5c7)'
    },
    soft: {
      background: 'var(--soft, #fbf7f0)',
      color: 'var(--ink, #17150f)',
      border: '1px solid var(--line, #dfd5c7)'
    },
    sage: {
      background: 'var(--sage-mist, #e7ede0)',
      color: 'var(--ink, #17150f)',
      border: '1px solid var(--sage-line, #c3d0b2)'
    },
    invert: {
      background: 'var(--ink, #17150f)',
      color: '#fff',
      border: '1px solid var(--ink, #17150f)'
    }
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      borderRadius: 18,
      padding,
      boxShadow: '0 26px 54px -42px #6c5038',
      transition: 'transform .18s',
      ...tones[tone],
      ...style
    },
    onMouseEnter: hover ? e => {
      e.currentTarget.style.transform = 'translateY(-2px)';
    } : undefined,
    onMouseLeave: hover ? e => {
      e.currentTarget.style.transform = 'none';
    } : undefined
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Eyebrow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * ScoutLocal Eyebrow — the small mono label that tops sections and cards.
 * Renders Geist Mono, uppercase, letter-spaced. Use `number` style for the
 * "02 / how it works" section markers; `accent` for rust-colored eyebrows.
 */
function Eyebrow({
  children,
  tone = 'muted',
  as = 'div',
  style,
  ...rest
}) {
  const colors = {
    muted: 'var(--muted, #81786c)',
    accent: 'var(--rust, #b25e3c)',
    sage: 'var(--sage-deep, #4f5c3a)'
  };
  const Tag = as;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    style: {
      fontFamily: "'Geist Mono', ui-monospace, monospace",
      fontSize: 11,
      fontWeight: 500,
      textTransform: 'uppercase',
      letterSpacing: '0.1em',
      color: colors[tone],
      margin: 0,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/core/Stat.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * ScoutLocal Stat — a big Outfit number over a short caption.
 * Used in the homepage stat band and dashboard tiles. `tone="sage"`
 * tints the figure for "good news" deltas.
 */
function Stat({
  value,
  suffix,
  label,
  delta,
  tone = 'ink',
  size = 'lg',
  style,
  ...rest
}) {
  const colors = {
    ink: 'var(--ink, #17150f)',
    sage: 'var(--sage-deep, #4f5c3a)',
    rust: 'var(--rust, #b25e3c)'
  };
  const numSize = size === 'lg' ? 'clamp(44px, 5.4vw, 68px)' : 28;
  return /*#__PURE__*/React.createElement("div", _extends({
    style: style
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Outfit', sans-serif",
      fontWeight: 700,
      fontSize: numSize,
      lineHeight: 1,
      letterSpacing: '-0.03em',
      color: colors[tone]
    }
  }, value, suffix && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--muted, #81786c)'
    }
  }, suffix)), label && /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "'Geist', sans-serif",
      fontSize: size === 'lg' ? 16 : 12,
      lineHeight: 1.5,
      color: size === 'lg' ? 'var(--ink-2, #332e25)' : 'var(--muted, #81786c)',
      margin: size === 'lg' ? '12px 0 0' : '6px 0 0',
      maxWidth: size === 'lg' ? '32ch' : 'none'
    }
  }, label), delta && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Geist Mono', monospace",
      fontSize: 10,
      color: 'var(--sage-deep, #4f5c3a)',
      marginTop: 7
    }
  }, "\u2191 ", delta));
}
Object.assign(__ds_scope, { Stat });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Stat.jsx", error: String((e && e.message) || e) }); }

// components/forms/Accordion.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * ScoutLocal Accordion — the FAQ disclosure. Outfit summary with a rotating
 * "+" emblem that fills ink when open. Controlled or uncontrolled.
 */
function Accordion({
  question,
  children,
  defaultOpen = false,
  style,
  ...rest
}) {
  const [open, setOpen] = React.useState(defaultOpen);
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      borderBottom: '1px solid var(--line, #dfd5c7)',
      padding: '23px 0',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("button", {
    onClick: () => setOpen(o => !o),
    style: {
      width: '100%',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: 20,
      background: 'none',
      border: 'none',
      padding: 0,
      cursor: 'pointer',
      textAlign: 'left',
      fontFamily: "'Outfit', sans-serif",
      fontSize: 20,
      fontWeight: 600,
      letterSpacing: '-0.015em',
      color: 'var(--ink, #17150f)'
    },
    "aria-expanded": open
  }, question, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 24,
      height: 24,
      flex: '0 0 24px',
      border: open ? '1px solid var(--ink, #17150f)' : '1px solid var(--line, #dfd5c7)',
      borderRadius: '50%',
      display: 'grid',
      placeItems: 'center',
      background: open ? 'var(--ink, #17150f)' : 'transparent',
      color: open ? '#fff' : 'var(--ink, #17150f)',
      transform: open ? 'rotate(45deg)' : 'none',
      transition: 'transform .2s, background .2s, border-color .2s',
      fontSize: 18,
      lineHeight: 1
    }
  }, "+")), open && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Geist', sans-serif",
      fontSize: 15,
      lineHeight: 1.65,
      color: 'var(--ink-2, #332e25)',
      maxWidth: '74ch',
      marginTop: 16
    }
  }, children));
}
Object.assign(__ds_scope, { Accordion });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Accordion.jsx", error: String((e && e.message) || e) }); }

// components/forms/Field.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * ScoutLocal Field — labelled form control (mono uppercase label over input).
 * Works on light surfaces (default) and dark bands (`onDark`). Renders an
 * input, select, or textarea depending on `as`.
 */
function Field({
  label,
  as = 'input',
  onDark = false,
  hint,
  children,
  style,
  ...rest
}) {
  const labelColor = onDark ? 'rgba(255,255,255,.65)' : 'var(--muted, #81786c)';
  const controlStyle = {
    width: '100%',
    minHeight: as === 'textarea' ? 110 : 46,
    borderRadius: 7,
    padding: 13,
    fontFamily: "'Geist', sans-serif",
    fontSize: 14,
    lineHeight: as === 'textarea' ? 1.45 : 1,
    resize: as === 'textarea' ? 'vertical' : undefined,
    appearance: as === 'select' ? 'none' : undefined,
    border: onDark ? '1px solid rgba(255,255,255,.25)' : '1px solid var(--line, #dfd5c7)',
    background: onDark ? 'rgba(255,255,255,.08)' : '#fff',
    color: onDark ? '#fff' : 'var(--ink, #17150f)',
    outline: 'none',
    boxSizing: 'border-box'
  };
  const Control = as;
  const focus = e => {
    e.target.style.outline = '2px solid var(--peach, #ffd1ac)';
    e.target.style.outlineOffset = '2px';
    e.target.style.borderColor = 'var(--peach, #ffd1ac)';
  };
  const blur = e => {
    e.target.style.outline = 'none';
    e.target.style.borderColor = onDark ? 'rgba(255,255,255,.25)' : 'var(--line, #dfd5c7)';
  };
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'grid',
      gap: 6,
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "'Geist Mono', monospace",
      fontSize: 10,
      textTransform: 'uppercase',
      letterSpacing: '0.08em',
      color: labelColor
    }
  }, label), /*#__PURE__*/React.createElement(Control, _extends({
    style: controlStyle,
    onFocus: focus,
    onBlur: blur
  }, rest), as === 'select' ? children : undefined), hint && /*#__PURE__*/React.createElement("small", {
    style: {
      fontFamily: "'Geist', sans-serif",
      fontSize: 11,
      lineHeight: 1.4,
      color: onDark ? 'rgba(255,255,255,.62)' : 'var(--muted, #81786c)'
    }
  }, hint));
}
Object.assign(__ds_scope, { Field });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Field.jsx", error: String((e && e.message) || e) }); }

// mockups/explore-online/ExploreOnline.jsx
try { (() => {
// ScoutLocal — Explore tab for military-affiliated ONLINE / off-base businesses.
// Digital businesses, consulting & coaching, e-commerce, services that ship or serve
// nationwide. Reuses DS Badge / Pill; adds an online-business card variant.
const SLD = window.ScoutLocalDesignSystem_b3452c;
const IMG = '../../assets/img/';

// ── small shared pieces ────────────────────────────────────────────────
function Kicker({
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      font: '500 15px Geist',
      color: 'var(--muted)',
      marginBottom: 6
    }
  }, children);
}
function PageTitle({
  children,
  sub
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      margin: '0 0 22px'
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      font: '700 64px/.9 Outfit',
      letterSpacing: '-.04em',
      margin: 0,
      color: 'var(--ink)'
    }
  }, children, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--rust)'
    }
  }, ".")), sub && /*#__PURE__*/React.createElement("div", {
    style: {
      font: '500 17px/1.35 Geist',
      color: 'var(--ink-2)',
      marginTop: 14,
      maxWidth: '20ch'
    }
  }, sub));
}
function Arrow({
  s = 13,
  c = 'var(--muted)'
}) {
  return /*#__PURE__*/React.createElement("svg", {
    width: s,
    height: s,
    viewBox: "0 0 24 24",
    style: {
      flex: '0 0 auto'
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M5 15L27 6L18 28L15 18.5L5 15Z",
    transform: "scale(0.75)",
    fill: c
  }));
}
function Heart({
  filled
}) {
  return /*#__PURE__*/React.createElement("svg", {
    width: "26",
    height: "26",
    viewBox: "0 0 24 24",
    style: {
      flex: '0 0 auto'
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12 21s-7-4.6-9.3-9C1 8.5 2.6 5 6 5c2 0 3.2 1.1 4 2.3C10.8 6.1 12 5 14 5c3.4 0 5 3.5 3.3 7-2.3 4.4-9.3 9-9.3 9z",
    fill: filled ? 'var(--ink)' : 'none',
    stroke: "var(--ink)",
    strokeWidth: "1.6",
    strokeLinejoin: "round"
  }));
}
function GlobeDot() {
  // tiny "available everywhere" globe glyph for the meta line
  return /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 24 24",
    style: {
      flex: '0 0 auto',
      marginTop: -1
    }
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "9",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.5"
  }));
}

// online-business signal chip (replaces the local "open now" beacon)
function Signal({
  children,
  tone = 'sage'
}) {
  const tones = {
    sage: {
      background: 'var(--sage-mist)',
      color: 'var(--sage-deep)'
    },
    peach: {
      background: 'var(--peach-3)',
      color: 'var(--rust)'
    },
    soft: {
      background: 'var(--soft)',
      color: 'var(--ink-2)'
    }
  };
  return /*#__PURE__*/React.createElement("span", {
    style: {
      font: '600 13px Geist',
      padding: '5px 11px',
      borderRadius: 999,
      ...tones[tone]
    }
  }, children);
}

// banner: split monogram-block + photo, single photo, or a flat brand block
function Banner({
  kind,
  photo,
  mono,
  brand
}) {
  if (kind === 'mono') {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        height: 132,
        borderRadius: 16,
        marginBottom: 18,
        background: brand,
        display: 'grid',
        placeItems: 'center',
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        font: '800 56px Outfit',
        letterSpacing: '-.04em',
        color: 'rgba(255,255,255,.92)'
      }
    }, mono));
  }
  if (kind === 'split') {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        height: 150,
        borderRadius: 16,
        marginBottom: 18,
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        background: 'var(--ink)',
        display: 'grid',
        placeItems: 'center'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        font: '800 52px Outfit',
        letterSpacing: '-.04em',
        color: 'var(--bg)'
      }
    }, mono)), /*#__PURE__*/React.createElement("img", {
      src: photo,
      alt: "",
      style: {
        width: '100%',
        height: '100%',
        objectFit: 'cover'
      }
    }));
  }
  return /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: 16,
      overflow: 'hidden',
      height: 150,
      marginBottom: 18,
      background: 'var(--ink)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: photo,
    alt: "",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }));
}
function OnlineCard({
  b,
  last
}) {
  const [fav, setFav] = React.useState(!!b.saved);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '24px 0',
      borderBottom: last ? 'none' : '1px solid var(--line)'
    }
  }, /*#__PURE__*/React.createElement(Banner, {
    kind: b.banner,
    photo: b.photo,
    mono: b.mono,
    brand: b.brand
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      font: '700 25px/1.04 Outfit',
      letterSpacing: '-.01em',
      textTransform: 'uppercase',
      margin: 0,
      color: 'var(--ink)',
      flex: 1,
      minWidth: 0
    }
  }, b.name), /*#__PURE__*/React.createElement("button", {
    onClick: () => setFav(f => !f),
    style: {
      background: 'none',
      border: 'none',
      padding: 0,
      cursor: 'pointer',
      flex: '0 0 auto',
      marginTop: 2
    }
  }, /*#__PURE__*/React.createElement(Heart, {
    filled: fav
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '500 16.5px/1.4 Geist',
      color: 'var(--ink-2)',
      marginTop: 9
    }
  }, b.tagline), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 8,
      marginTop: 14,
      alignItems: 'center'
    }
  }, b.verified && /*#__PURE__*/React.createElement(SLD.Badge, {
    kind: "verified"
  }, "verified"), b.milspouse && /*#__PURE__*/React.createElement(SLD.Badge, {
    kind: "milspouse"
  }, "milspouse owned"), b.founding && /*#__PURE__*/React.createElement(SLD.Badge, {
    kind: "founding"
  }, "founding partner")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 8,
      marginTop: 12
    }
  }, b.signals.map(s => /*#__PURE__*/React.createElement(Signal, {
    key: s.label,
    tone: s.tone
  }, s.label))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 7,
      marginTop: 14,
      color: 'var(--muted)',
      font: '500 14.5px Geist'
    }
  }, /*#__PURE__*/React.createElement(GlobeDot, null), " ", b.meta));
}

// ── data ────────────────────────────────────────────────────────────────
const CATS = ['all', 'consulting', 'coaching', 'e-commerce', 'design', 'marketing', 'bookkeeping', 'moving & storage'];
const BIZ = [{
  name: 'Novalyse',
  cat: 'consulting',
  banner: 'split',
  mono: 'N',
  photo: IMG + 'computer.jpg',
  tagline: 'Operations & ops-strategy consulting — breaking complexity into clarity.',
  milspouse: true,
  signals: [{
    label: 'free intro call',
    tone: 'peach'
  }, {
    label: 'books online',
    tone: 'sage'
  }],
  meta: 'available everywhere · consulting'
}, {
  name: 'Anchored & Forward',
  cat: 'coaching',
  banner: 'photo',
  photo: IMG + 'community.jpg',
  tagline: 'Career & transition coaching for spouses building work that moves with them.',
  verified: true,
  milspouse: true,
  signals: [{
    label: 'free intro call',
    tone: 'peach'
  }, {
    label: 'responds in a day',
    tone: 'soft'
  }],
  meta: 'available everywhere · coaching'
}, {
  name: 'Wildgrace Goods',
  cat: 'e-commerce',
  banner: 'photo',
  photo: IMG + 'pottery.avif',
  tagline: 'Hand-poured candles & small-batch ceramics, made between duty stations.',
  milspouse: true,
  founding: true,
  signals: [{
    label: 'ships nationwide',
    tone: 'sage'
  }],
  meta: 'ships from fort polk, la · e-commerce',
  saved: true
}, {
  name: 'Saltmarsh Studio',
  cat: 'design',
  banner: 'photo',
  photo: IMG + 'paint.avif',
  tagline: 'Brand identity & websites for small teams and milspouse-owned shops.',
  milspouse: true,
  signals: [{
    label: 'books online',
    tone: 'sage'
  }, {
    label: 'responds in a day',
    tone: 'soft'
  }],
  meta: 'available everywhere · design'
}, {
  name: 'Ledger & Anchor',
  cat: 'bookkeeping',
  banner: 'mono',
  mono: 'L&A',
  brand: 'oklch(0.52 0.07 150)',
  tagline: 'Bookkeeping built for military households — PCS moves, multi-state, BAH and all.',
  verified: true,
  signals: [{
    label: 'free intro call',
    tone: 'peach'
  }],
  meta: 'available everywhere · bookkeeping'
}, {
  name: 'Beacon & Co.',
  cat: 'marketing',
  banner: 'photo',
  photo: IMG + 'photographer.jpg',
  tagline: 'Fractional marketing & content for service-based businesses on the move.',
  milspouse: true,
  signals: [{
    label: 'books online',
    tone: 'sage'
  }],
  meta: 'available everywhere · marketing'
}];

// ── bottom nav ────────────────────────────────────────────────────────────
function BottomNav() {
  const item = (label, active) => /*#__PURE__*/React.createElement("span", {
    style: {
      font: active ? '700 15px Geist' : '500 15px Geist',
      color: active ? 'var(--ink)' : 'var(--muted)'
    }
  }, label);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      flex: '0 0 auto',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 84px 1fr 1fr',
      alignItems: 'center',
      padding: '14px 22px 30px',
      background: 'var(--bg)',
      borderTop: '1px solid var(--line)'
    }
  }, item('home', false), item('explore', true), /*#__PURE__*/React.createElement("span", {
    style: {
      justifySelf: 'center',
      width: 64,
      height: 64,
      transform: 'translateY(-14px)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: IMG + 'scout-fab-default.png',
    alt: "Scout events",
    style: {
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      boxShadow: '0 18px 40px -16px rgba(0,0,0,.6)'
    }
  })), item('favorites', false), item('profile', false));
}

// ── search bar ──────────────────────────────────────────────────────────
function SearchBar({
  value,
  placeholder = 'search by need',
  focused
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      background: 'var(--paper)',
      border: focused ? '1px solid var(--ink)' : '1px solid var(--line)',
      borderRadius: 16,
      padding: '16px 18px',
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 24 24",
    style: {
      flex: '0 0 auto'
    }
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "11",
    cy: "11",
    r: "7",
    fill: "none",
    stroke: "var(--muted)",
    strokeWidth: "1.8"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16.5 16.5L21 21",
    stroke: "var(--muted)",
    strokeWidth: "1.8",
    strokeLinecap: "round"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      font: '500 16px Geist',
      color: value ? 'var(--ink)' : 'var(--muted)',
      flex: 1
    }
  }, value || placeholder), focused && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 2,
      height: 20,
      background: 'var(--rust)',
      animation: 'sl-caret 1s steps(1) infinite'
    }
  }));
}

// ── the screen, 3 variants ────────────────────────────────────────────────
function ExploreOnline({
  variant = 'default'
}) {
  const [cat, setCat] = React.useState(variant === 'filtered' ? 'e-commerce' : 'all');
  const list = cat === 'all' ? BIZ : BIZ.filter(b => b.cat === cat);
  const searching = variant === 'search';
  const results = searching ? BIZ.filter(b => /book|ledger|anchor/i.test(b.name + b.tagline + b.cat)) : list;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      background: 'var(--bg)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflow: 'auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '56px 26px 0'
    }
  }, /*#__PURE__*/React.createElement(Kicker, null, "available everywhere"), /*#__PURE__*/React.createElement(PageTitle, {
    sub: "Military-affiliated businesses you can use from anywhere \u2014 online, off base, or between moves."
  }, "explore"), /*#__PURE__*/React.createElement(SearchBar, {
    value: searching ? 'bookkeeping' : '',
    focused: searching
  }), !searching && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      overflowX: 'auto',
      margin: '0 -26px',
      padding: '0 26px 6px'
    }
  }, CATS.map(c => /*#__PURE__*/React.createElement("div", {
    key: c,
    style: {
      flex: '0 0 auto'
    }
  }, /*#__PURE__*/React.createElement(SLD.Pill, {
    active: cat === c,
    onClick: () => setCat(c)
  }, c)))), searching ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '500 14px Geist',
      color: 'var(--muted)',
      padding: '18px 0 4px'
    }
  }, "2 results \xB7 ships & serves nationwide"), results.map((b, i) => /*#__PURE__*/React.createElement(OnlineCard, {
    key: b.name,
    b: b,
    last: i === results.length - 1
  }))) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '500 14px Geist',
      color: 'var(--muted)',
      letterSpacing: '.02em',
      borderBottom: '1px solid var(--line)',
      padding: '22px 0 12px'
    }
  }, cat === 'all' ? 'ships & serves nationwide' : `${list.length} in ${cat}`), list.map((b, i) => /*#__PURE__*/React.createElement(OnlineCard, {
    key: b.name,
    b: b,
    last: i === list.length - 1
  }))))), searching ? null : /*#__PURE__*/React.createElement(BottomNav, null), searching && /*#__PURE__*/React.createElement(window.IOSKeyboard, null));
}
window.SLExploreOnline = ExploreOnline;
})(); } catch (e) { __ds_ns.__errors.push({ path: "mockups/explore-online/ExploreOnline.jsx", error: String((e && e.message) || e) }); }

// mockups/explore-online/ios-frame.jsx
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)

/* BEGIN USAGE */
// iOS.jsx — Simplified iOS 26 (Liquid Glass) device frame
// Based on the iOS 26 UI Kit + Figma status bar spec. No assets, no deps.
// Exports (to window): IOSDevice, IOSStatusBar, IOSNavBar, IOSGlassPill, IOSList, IOSListRow, IOSKeyboard
//
// Usage — wrap your screen content in <IOSDevice> to get the bezel, status bar
// and home indicator (props: title, dark, keyboard):
//
//   <IOSDevice title="Settings">
//     ...your screen content...
//   </IOSDevice>
//   <IOSDevice dark title="Search" keyboard>…</IOSDevice>
/* END USAGE */

// ─────────────────────────────────────────────────────────────
// Status bar
// ─────────────────────────────────────────────────────────────
function IOSStatusBar({
  dark = false,
  time = '9:41'
}) {
  const c = dark ? '#fff' : '#000';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 154,
      alignItems: 'center',
      justifyContent: 'center',
      padding: '21px 24px 19px',
      boxSizing: 'border-box',
      position: 'relative',
      zIndex: 20,
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      height: 22,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: 1.5
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: '-apple-system, "SF Pro", system-ui',
      fontWeight: 590,
      fontSize: 17,
      lineHeight: '22px',
      color: c
    }
  }, time)), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      height: 22,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 7,
      paddingTop: 1,
      paddingRight: 1
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "19",
    height: "12",
    viewBox: "0 0 19 12"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "0",
    y: "7.5",
    width: "3.2",
    height: "4.5",
    rx: "0.7",
    fill: c
  }), /*#__PURE__*/React.createElement("rect", {
    x: "4.8",
    y: "5",
    width: "3.2",
    height: "7",
    rx: "0.7",
    fill: c
  }), /*#__PURE__*/React.createElement("rect", {
    x: "9.6",
    y: "2.5",
    width: "3.2",
    height: "9.5",
    rx: "0.7",
    fill: c
  }), /*#__PURE__*/React.createElement("rect", {
    x: "14.4",
    y: "0",
    width: "3.2",
    height: "12",
    rx: "0.7",
    fill: c
  })), /*#__PURE__*/React.createElement("svg", {
    width: "17",
    height: "12",
    viewBox: "0 0 17 12"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M8.5 3.2C10.8 3.2 12.9 4.1 14.4 5.6L15.5 4.5C13.7 2.7 11.2 1.5 8.5 1.5C5.8 1.5 3.3 2.7 1.5 4.5L2.6 5.6C4.1 4.1 6.2 3.2 8.5 3.2Z",
    fill: c
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8.5 6.8C9.9 6.8 11.1 7.3 12 8.2L13.1 7.1C11.8 5.9 10.2 5.1 8.5 5.1C6.8 5.1 5.2 5.9 3.9 7.1L5 8.2C5.9 7.3 7.1 6.8 8.5 6.8Z",
    fill: c
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "8.5",
    cy: "10.5",
    r: "1.5",
    fill: c
  })), /*#__PURE__*/React.createElement("svg", {
    width: "27",
    height: "13",
    viewBox: "0 0 27 13"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "0.5",
    y: "0.5",
    width: "23",
    height: "12",
    rx: "3.5",
    stroke: c,
    strokeOpacity: "0.35",
    fill: "none"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "2",
    y: "2",
    width: "20",
    height: "9",
    rx: "2",
    fill: c
  }), /*#__PURE__*/React.createElement("path", {
    d: "M25 4.5V8.5C25.8 8.2 26.5 7.2 26.5 6.5C26.5 5.8 25.8 4.8 25 4.5Z",
    fill: c,
    fillOpacity: "0.4"
  }))));
}

// ─────────────────────────────────────────────────────────────
// Liquid glass pill — blur + tint + shine
// ─────────────────────────────────────────────────────────────
function IOSGlassPill({
  children,
  dark = false,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: 44,
      minWidth: 44,
      borderRadius: 9999,
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: dark ? '0 2px 6px rgba(0,0,0,0.35), 0 6px 16px rgba(0,0,0,0.2)' : '0 1px 3px rgba(0,0,0,0.07), 0 3px 10px rgba(0,0,0,0.06)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 9999,
      backdropFilter: 'blur(12px) saturate(180%)',
      WebkitBackdropFilter: 'blur(12px) saturate(180%)',
      background: dark ? 'rgba(120,120,128,0.28)' : 'rgba(255,255,255,0.5)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 9999,
      boxShadow: dark ? 'inset 1.5px 1.5px 1px rgba(255,255,255,0.15), inset -1px -1px 1px rgba(255,255,255,0.08)' : 'inset 1.5px 1.5px 1px rgba(255,255,255,0.7), inset -1px -1px 1px rgba(255,255,255,0.4)',
      border: dark ? '0.5px solid rgba(255,255,255,0.15)' : '0.5px solid rgba(0,0,0,0.06)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 1,
      display: 'flex',
      alignItems: 'center',
      padding: '0 4px'
    }
  }, children));
}

// ─────────────────────────────────────────────────────────────
// Navigation bar — glass pills + large title
// ─────────────────────────────────────────────────────────────
function IOSNavBar({
  title = 'Title',
  dark = false,
  trailingIcon = true
}) {
  const muted = dark ? 'rgba(255,255,255,0.6)' : '#404040';
  const text = dark ? '#fff' : '#000';
  const pillIcon = content => /*#__PURE__*/React.createElement(IOSGlassPill, {
    dark: dark
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 36,
      height: 36,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, content));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      paddingTop: 62,
      paddingBottom: 10,
      position: 'relative',
      zIndex: 5
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 16px'
    }
  }, pillIcon(/*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "20",
    viewBox: "0 0 12 20",
    fill: "none",
    style: {
      marginLeft: -1
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M10 2L2 10l8 8",
    stroke: muted,
    strokeWidth: "2.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))), trailingIcon && pillIcon(/*#__PURE__*/React.createElement("svg", {
    width: "22",
    height: "6",
    viewBox: "0 0 22 6"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "3",
    cy: "3",
    r: "2.5",
    fill: muted
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "11",
    cy: "3",
    r: "2.5",
    fill: muted
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "19",
    cy: "3",
    r: "2.5",
    fill: muted
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 16px',
      fontFamily: '-apple-system, system-ui',
      fontSize: 34,
      fontWeight: 700,
      lineHeight: '41px',
      color: text,
      letterSpacing: 0.4
    }
  }, title));
}

// ─────────────────────────────────────────────────────────────
// Grouped list (inset card, r:26) + row (52px)
// ─────────────────────────────────────────────────────────────
function IOSListRow({
  title,
  detail,
  icon,
  chevron = true,
  isLast = false,
  dark = false
}) {
  const text = dark ? '#fff' : '#000';
  const sec = dark ? 'rgba(235,235,245,0.6)' : 'rgba(60,60,67,0.6)';
  const ter = dark ? 'rgba(235,235,245,0.3)' : 'rgba(60,60,67,0.3)';
  const sep = dark ? 'rgba(84,84,88,0.65)' : 'rgba(60,60,67,0.12)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      minHeight: 52,
      padding: '0 16px',
      position: 'relative',
      fontFamily: '-apple-system, system-ui',
      fontSize: 17,
      letterSpacing: -0.43
    }
  }, icon && /*#__PURE__*/React.createElement("div", {
    style: {
      width: 30,
      height: 30,
      borderRadius: 7,
      background: icon,
      marginRight: 12,
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      color: text
    }
  }, title), detail && /*#__PURE__*/React.createElement("span", {
    style: {
      color: sec,
      marginRight: 6
    }
  }, detail), chevron && /*#__PURE__*/React.createElement("svg", {
    width: "8",
    height: "14",
    viewBox: "0 0 8 14",
    style: {
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M1 1l6 6-6 6",
    stroke: ter,
    strokeWidth: "2",
    fill: "none",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })), !isLast && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 0,
      right: 0,
      left: icon ? 58 : 16,
      height: 0.5,
      background: sep
    }
  }));
}
function IOSList({
  header,
  children,
  dark = false
}) {
  const hc = dark ? 'rgba(235,235,245,0.6)' : 'rgba(60,60,67,0.6)';
  const bg = dark ? '#1C1C1E' : '#fff';
  return /*#__PURE__*/React.createElement("div", null, header && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: '-apple-system, system-ui',
      fontSize: 13,
      color: hc,
      textTransform: 'uppercase',
      padding: '8px 36px 6px',
      letterSpacing: -0.08
    }
  }, header), /*#__PURE__*/React.createElement("div", {
    style: {
      background: bg,
      borderRadius: 26,
      margin: '0 16px',
      overflow: 'hidden'
    }
  }, children));
}

// ─────────────────────────────────────────────────────────────
// Device frame
// ─────────────────────────────────────────────────────────────
function IOSDevice({
  children,
  width = 402,
  height = 874,
  dark = false,
  title,
  keyboard = false
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width,
      height,
      borderRadius: 48,
      overflow: 'hidden',
      position: 'relative',
      background: dark ? '#000' : '#F2F2F7',
      boxShadow: '0 40px 80px rgba(0,0,0,0.18), 0 0 0 1px rgba(0,0,0,0.12)',
      fontFamily: '-apple-system, system-ui, sans-serif',
      WebkitFontSmoothing: 'antialiased'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 11,
      left: '50%',
      transform: 'translateX(-50%)',
      width: 126,
      height: 37,
      borderRadius: 24,
      background: '#000',
      zIndex: 50
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 10
    }
  }, /*#__PURE__*/React.createElement(IOSStatusBar, {
    dark: dark
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column'
    }
  }, title !== undefined && /*#__PURE__*/React.createElement(IOSNavBar, {
    title: title,
    dark: dark
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflow: 'auto'
    }
  }, children), keyboard && /*#__PURE__*/React.createElement(IOSKeyboard, {
    dark: dark
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      zIndex: 60,
      height: 34,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'flex-end',
      paddingBottom: 8,
      pointerEvents: 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 139,
      height: 5,
      borderRadius: 100,
      background: dark ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,0.25)'
    }
  })));
}

// ─────────────────────────────────────────────────────────────
// Keyboard — iOS 26 liquid glass
// ─────────────────────────────────────────────────────────────
function IOSKeyboard({
  dark = false
}) {
  const glyph = dark ? 'rgba(255,255,255,0.7)' : '#595959';
  const sugg = dark ? 'rgba(255,255,255,0.6)' : '#333';
  const keyBg = dark ? 'rgba(255,255,255,0.22)' : 'rgba(255,255,255,0.85)';

  // special-key icons
  const icons = {
    shift: /*#__PURE__*/React.createElement("svg", {
      width: "19",
      height: "17",
      viewBox: "0 0 19 17"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M9.5 1L1 9.5h4.5V16h8V9.5H18L9.5 1z",
      fill: glyph
    })),
    del: /*#__PURE__*/React.createElement("svg", {
      width: "23",
      height: "17",
      viewBox: "0 0 23 17"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M7 1h13a2 2 0 012 2v11a2 2 0 01-2 2H7l-6-7.5L7 1z",
      fill: "none",
      stroke: glyph,
      strokeWidth: "1.6",
      strokeLinejoin: "round"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M10 5l7 7M17 5l-7 7",
      stroke: glyph,
      strokeWidth: "1.6",
      strokeLinecap: "round"
    })),
    ret: /*#__PURE__*/React.createElement("svg", {
      width: "20",
      height: "14",
      viewBox: "0 0 20 14"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M18 1v6H4m0 0l4-4M4 7l4 4",
      fill: "none",
      stroke: "#fff",
      strokeWidth: "1.8",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }))
  };
  const key = (content, {
    w,
    flex,
    ret,
    fs = 25,
    k
  } = {}) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      height: 42,
      borderRadius: 8.5,
      flex: flex ? 1 : undefined,
      width: w,
      minWidth: 0,
      background: ret ? '#08f' : keyBg,
      boxShadow: '0 1px 0 rgba(0,0,0,0.075)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: '-apple-system, "SF Compact", system-ui',
      fontSize: fs,
      fontWeight: 458,
      color: ret ? '#fff' : glyph
    }
  }, content);
  const row = (keys, pad = 0) => /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6.5,
      justifyContent: 'center',
      padding: `0 ${pad}px`
    }
  }, keys.map(l => key(l, {
    flex: true,
    k: l
  })));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 15,
      borderRadius: 27,
      overflow: 'hidden',
      padding: '11px 0 2px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      boxShadow: dark ? '0 -2px 20px rgba(0,0,0,0.09)' : '0 -1px 6px rgba(0,0,0,0.018), 0 -3px 20px rgba(0,0,0,0.012)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 27,
      backdropFilter: 'blur(12px) saturate(180%)',
      WebkitBackdropFilter: 'blur(12px) saturate(180%)',
      background: dark ? 'rgba(120,120,128,0.14)' : 'rgba(255,255,255,0.25)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 27,
      boxShadow: dark ? 'inset 1.5px 1.5px 1px rgba(255,255,255,0.15)' : 'inset 1.5px 1.5px 1px rgba(255,255,255,0.7), inset -1px -1px 1px rgba(255,255,255,0.4)',
      border: dark ? '0.5px solid rgba(255,255,255,0.15)' : '0.5px solid rgba(0,0,0,0.06)',
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 20,
      alignItems: 'center',
      padding: '8px 22px 13px',
      width: '100%',
      boxSizing: 'border-box',
      position: 'relative'
    }
  }, ['"The"', 'the', 'to'].map((w, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: i
  }, i > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      width: 1,
      height: 25,
      background: '#ccc',
      opacity: 0.3
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      textAlign: 'center',
      fontFamily: '-apple-system, system-ui',
      fontSize: 17,
      color: sugg,
      letterSpacing: -0.43,
      lineHeight: '22px'
    }
  }, w)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 13,
      padding: '0 6.5px',
      width: '100%',
      boxSizing: 'border-box',
      position: 'relative'
    }
  }, row(['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p']), row(['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'], 20), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14.25,
      alignItems: 'center'
    }
  }, key(icons.shift, {
    w: 45,
    k: 'shift'
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6.5,
      flex: 1
    }
  }, ['z', 'x', 'c', 'v', 'b', 'n', 'm'].map(l => key(l, {
    flex: true,
    k: l
  }))), key(icons.del, {
    w: 45,
    k: 'del'
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      alignItems: 'center'
    }
  }, key('ABC', {
    w: 92.25,
    fs: 18,
    k: 'abc'
  }), key('', {
    flex: true,
    k: 'space'
  }), key(icons.ret, {
    w: 92.25,
    ret: true,
    k: 'ret'
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 56,
      width: '100%',
      position: 'relative'
    }
  }));
}
Object.assign(window, {
  IOSDevice,
  IOSStatusBar,
  IOSNavBar,
  IOSGlassPill,
  IOSList,
  IOSListRow,
  IOSKeyboard
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "mockups/explore-online/ios-frame.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/AppScreens.jsx
try { (() => {
// ScoutLocal mobile app — screens. Composes DS Badge, Pill, LivePill where natural.
const SLD = window.ScoutLocalDesignSystem_b3452c;
const IMG = '../../assets/img/';

// — small shared pieces —
function Kicker({
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      font: '500 15px Geist',
      color: 'var(--muted)',
      marginBottom: 6
    }
  }, children);
}
function PageTitle({
  children
}) {
  return /*#__PURE__*/React.createElement("h1", {
    style: {
      font: '700 64px/.9 Outfit',
      letterSpacing: '-.04em',
      margin: '0 0 26px',
      color: 'var(--ink)'
    }
  }, children, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--rust)'
    }
  }, "."));
}
function Arrow({
  s = 13,
  c = 'var(--muted)'
}) {
  return /*#__PURE__*/React.createElement("svg", {
    width: s,
    height: s,
    viewBox: "0 0 24 24",
    style: {
      flex: '0 0 auto'
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M5 15L27 6L18 28L15 18.5L5 15Z",
    transform: "scale(0.75)",
    fill: c
  }));
}
function Heart({
  filled
}) {
  return /*#__PURE__*/React.createElement("svg", {
    width: "26",
    height: "26",
    viewBox: "0 0 24 24",
    style: {
      flex: '0 0 auto'
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12 21s-7-4.6-9.3-9C1 8.5 2.6 5 6 5c2 0 3.2 1.1 4 2.3C10.8 6.1 12 5 14 5c3.4 0 5 3.5 3.3 7-2.3 4.4-9.3 9-9.3 9z",
    fill: filled ? 'var(--ink)' : 'none',
    stroke: "var(--ink)",
    strokeWidth: "1.6",
    strokeLinejoin: "round"
  }));
}
function CountPill({
  label,
  count,
  active,
  onClick
}) {
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 9,
      cursor: 'pointer',
      border: active ? 'none' : '1px solid var(--line)',
      background: active ? 'var(--ink)' : 'transparent',
      color: active ? '#fff' : 'var(--ink-2)',
      borderRadius: 999,
      padding: '11px 16px',
      font: '600 15px Geist'
    }
  }, label, /*#__PURE__*/React.createElement("span", {
    style: {
      minWidth: 22,
      height: 22,
      borderRadius: 999,
      display: 'inline-grid',
      placeItems: 'center',
      background: active ? 'rgba(255,255,255,.2)' : 'var(--soft)',
      color: active ? '#fff' : 'var(--muted)',
      font: '600 12px Geist',
      padding: '0 6px'
    }
  }, count));
}

// — business card (explore / saved) —
function BusinessCard({
  name,
  meta,
  image,
  verified,
  milspouse,
  saved,
  last
}) {
  const [fav, setFav] = React.useState(saved);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '22px 0',
      borderBottom: last ? 'none' : '1px solid var(--line)'
    }
  }, image && /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: 16,
      overflow: 'hidden',
      height: 150,
      marginBottom: 18,
      background: 'var(--ink)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: name,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      font: '700 26px/1.04 Outfit',
      letterSpacing: '-.01em',
      textTransform: 'uppercase',
      margin: 0,
      color: 'var(--ink)'
    }
  }, name)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      flex: '0 0 auto',
      paddingTop: 4
    }
  }, verified && /*#__PURE__*/React.createElement(SLD.Badge, {
    kind: "verified"
  }, "verified"), milspouse && /*#__PURE__*/React.createElement(SLD.Badge, {
    kind: "milspouse"
  }, "milspouse owned"), /*#__PURE__*/React.createElement("button", {
    onClick: () => setFav(f => !f),
    style: {
      background: 'none',
      border: 'none',
      padding: 0,
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(Heart, {
    filled: fav
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '500 16px Geist',
      color: 'var(--muted)',
      marginTop: 12
    }
  }, meta));
}

// — event row —
function EventRow({
  time,
  ampm,
  title,
  place,
  tags,
  last
}) {
  const tagColors = {
    'kid-friendly': {
      background: 'var(--peach-3)',
      color: 'var(--rust)'
    },
    free: {
      background: 'var(--sage-mist)',
      color: 'var(--sage-deep)'
    },
    fitness: {
      background: 'var(--sage-mist)',
      color: 'var(--sage-deep)'
    },
    community: {
      background: 'var(--soft)',
      color: 'var(--ink-2)'
    },
    recreation: {
      background: 'var(--soft)',
      color: 'var(--ink-2)'
    }
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '64px 1fr 28px',
      gap: 14,
      padding: '18px 0',
      borderBottom: last ? 'none' : '1px solid var(--line)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '700 22px/.9 Geist',
      color: 'var(--ink)'
    }
  }, time), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '600 12px Geist',
      color: 'var(--muted)',
      marginTop: 3
    }
  }, ampm)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '600 19px/1.15 Geist',
      color: 'var(--ink)'
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      marginTop: 8,
      color: 'var(--muted)',
      font: '500 15px Geist'
    }
  }, /*#__PURE__*/React.createElement(Arrow, null), " ", place), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 8,
      marginTop: 12
    }
  }, tags.map(t => /*#__PURE__*/React.createElement("span", {
    key: t,
    style: {
      font: '600 13px Geist',
      padding: '5px 11px',
      borderRadius: 999,
      ...tagColors[t]
    }
  }, t)))), /*#__PURE__*/React.createElement("svg", {
    width: "22",
    height: "22",
    viewBox: "0 0 24 24",
    style: {
      marginTop: 2
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12 3a5 5 0 00-5 5v4l-2 3h14l-2-3V8a5 5 0 00-5-5z",
    fill: "none",
    stroke: "var(--muted)",
    strokeWidth: "1.5",
    strokeLinejoin: "round"
  })));
}

// — bottom nav with center FAB —
function BottomNav({
  tab,
  setTab
}) {
  const item = (key, label) => /*#__PURE__*/React.createElement("button", {
    onClick: () => setTab(key),
    style: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      padding: 0,
      font: tab === key ? '700 15px Geist' : '500 15px Geist',
      color: tab === key ? 'var(--ink)' : 'var(--muted)'
    }
  }, label);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      flex: '0 0 auto',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 84px 1fr 1fr',
      alignItems: 'center',
      padding: '14px 22px 30px',
      background: 'var(--bg)',
      borderTop: '1px solid var(--line)'
    }
  }, item('explore', 'home'), item('explore', 'explore'), /*#__PURE__*/React.createElement("button", {
    onClick: () => setTab('events'),
    style: {
      justifySelf: 'center',
      width: 64,
      height: 64,
      borderRadius: '50%',
      border: 'none',
      cursor: 'pointer',
      background: 'transparent',
      padding: 0,
      transform: 'translateY(-14px)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: IMG + 'scout-fab-default.png',
    alt: "Scout events",
    style: {
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      boxShadow: '0 18px 40px -16px rgba(0,0,0,.6)'
    }
  })), item('saved', 'favorites'), item('explore', 'profile'));
}

// — screens —
function ExploreScreen() {
  const [cat, setCat] = React.useState('all');
  const cats = ['all', 'childcare', 'coffee', 'auto repair', 'salon', 'pet care'];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '8px 26px 0'
    }
  }, /*#__PURE__*/React.createElement(Kicker, null, "near fort polk"), /*#__PURE__*/React.createElement(PageTitle, null, "explore"), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--paper)',
      border: '1px solid var(--line)',
      borderRadius: 16,
      padding: '16px 18px',
      color: 'var(--muted)',
      font: '500 16px Geist',
      marginBottom: 18
    }
  }, "search by need"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      overflowX: 'auto',
      paddingBottom: 6,
      margin: '0 -26px',
      padding: '0 26px 6px'
    }
  }, cats.map(c => /*#__PURE__*/React.createElement("div", {
    key: c,
    style: {
      flex: '0 0 auto'
    }
  }, /*#__PURE__*/React.createElement(SLD.Pill, {
    active: cat === c,
    onClick: () => setCat(c)
  }, c)))), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '500 14px Geist',
      color: 'var(--muted)',
      textTransform: 'lowercase',
      letterSpacing: '.02em',
      borderBottom: '1px solid var(--line)',
      padding: '20px 0 12px'
    }
  }, "verified near base"), /*#__PURE__*/React.createElement(BusinessCard, {
    name: "Johnson's Auto Co.",
    meta: "near fort polk / auto repair",
    verified: true
  }), /*#__PURE__*/React.createElement(BusinessCard, {
    name: "Bayou Pediatric Dental",
    image: IMG + 'family-portrait.jpg',
    meta: "near fort polk / childcare",
    verified: true,
    milspouse: false
  }), /*#__PURE__*/React.createElement(BusinessCard, {
    name: "Patriot Paws Grooming",
    meta: "near fort polk / pet services",
    verified: true
  }), /*#__PURE__*/React.createElement(BusinessCard, {
    name: "Bloom & Co. Florals",
    image: IMG + 'florist.jpg',
    meta: "near fort polk / shopping",
    verified: true,
    saved: true,
    last: true
  }));
}
function SavedScreen() {
  const [seg, setSeg] = React.useState('places');
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '8px 26px 0'
    }
  }, /*#__PURE__*/React.createElement(Kicker, null, "kept close"), /*#__PURE__*/React.createElement(PageTitle, null, "saved"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement(CountPill, {
    label: "places",
    count: 5,
    active: seg === 'places',
    onClick: () => setSeg('places')
  }), /*#__PURE__*/React.createElement(CountPill, {
    label: "alerts",
    count: 1,
    active: seg === 'alerts',
    onClick: () => setSeg('alerts')
  }), /*#__PURE__*/React.createElement(CountPill, {
    label: "events",
    count: 4,
    active: seg === 'events',
    onClick: () => setSeg('events')
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--line)',
      marginTop: 14
    }
  }), /*#__PURE__*/React.createElement(BusinessCard, {
    name: "Patriot Paws Grooming",
    meta: "near fort polk / pet services",
    verified: true,
    saved: true
  }), /*#__PURE__*/React.createElement(BusinessCard, {
    name: "Candles by Lakesha",
    image: IMG + 'pottery.avif',
    meta: "near fort polk / shopping",
    saved: true
  }), /*#__PURE__*/React.createElement(BusinessCard, {
    name: "Salon Magnolia",
    image: IMG + 'salon.jpg',
    meta: "near fort polk / hair & beauty",
    verified: true,
    saved: true,
    last: true
  }));
}
function EventsScreen() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '8px 26px 0'
    }
  }, /*#__PURE__*/React.createElement(PageTitle, null, "scout"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      color: 'var(--ink-2)',
      font: '600 17px Geist',
      marginTop: -14,
      marginBottom: 22
    }
  }, /*#__PURE__*/React.createElement(Arrow, {
    s: 16,
    c: "var(--ink-2)"
  }), " fort polk"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      justifyContent: 'flex-end',
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      border: '1px solid var(--line)',
      borderRadius: 999,
      padding: '11px 18px',
      font: '600 15px Geist',
      color: 'var(--ink)'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 24 24"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M3 5h18l-7 8v6l-4-2v-4L3 5z",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.6",
    strokeLinejoin: "round"
  })), "this week"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'grid',
      placeItems: 'center',
      width: 44,
      height: 44,
      border: '1px solid var(--line)',
      borderRadius: 999
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 24 24"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12 3a5 5 0 00-5 5v4l-2 3h14l-2-3V8a5 5 0 00-5-5z",
    fill: "none",
    stroke: "var(--ink)",
    strokeWidth: "1.5",
    strokeLinejoin: "round"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      justifyContent: 'space-between',
      borderTop: '1px solid var(--line)',
      paddingTop: 22
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '700 18px Geist',
      color: 'var(--ink)'
    }
  }, "tuesday \xB7 jun 16 ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--muted)',
      fontWeight: 500
    }
  }, "tomorrow")), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '500 14px Geist',
      color: 'var(--muted)'
    }
  }, "3 events")), /*#__PURE__*/React.createElement(EventRow, {
    time: "11:30",
    ampm: "AM",
    title: "Story Time at Allen Memorial Library",
    place: "allen memorial library",
    tags: ['kid-friendly', 'free']
  }), /*#__PURE__*/React.createElement(EventRow, {
    time: "1:00",
    ampm: "PM",
    title: "Maj at the Museum",
    place: "alexandria museum of art",
    tags: ['community', 'recreation']
  }), /*#__PURE__*/React.createElement(EventRow, {
    time: "5:30",
    ampm: "PM",
    title: "AMoA: Yoga in the Gallery",
    place: "alexandria museum of art",
    tags: ['fitness', 'free', 'community'],
    last: true
  }));
}
function AppRoot() {
  const [tab, setTab] = React.useState('explore');
  const Screen = tab === 'saved' ? SavedScreen : tab === 'events' ? EventsScreen : ExploreScreen;
  return /*#__PURE__*/React.createElement(window.IOSDevice, null, /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      background: 'var(--bg)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflow: 'auto',
      paddingTop: 8
    }
  }, /*#__PURE__*/React.createElement(Screen, null)), /*#__PURE__*/React.createElement(BottomNav, {
    tab: tab,
    setTab: setTab
  })));
}
window.SLAppRoot = AppRoot;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/AppScreens.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/ios-frame.jsx
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)

/* BEGIN USAGE */
// iOS.jsx — Simplified iOS 26 (Liquid Glass) device frame
// Based on the iOS 26 UI Kit + Figma status bar spec. No assets, no deps.
// Exports (to window): IOSDevice, IOSStatusBar, IOSNavBar, IOSGlassPill, IOSList, IOSListRow, IOSKeyboard
//
// Usage — wrap your screen content in <IOSDevice> to get the bezel, status bar
// and home indicator (props: title, dark, keyboard):
//
//   <IOSDevice title="Settings">
//     ...your screen content...
//   </IOSDevice>
//   <IOSDevice dark title="Search" keyboard>…</IOSDevice>
/* END USAGE */

// ─────────────────────────────────────────────────────────────
// Status bar
// ─────────────────────────────────────────────────────────────
function IOSStatusBar({
  dark = false,
  time = '9:41'
}) {
  const c = dark ? '#fff' : '#000';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 154,
      alignItems: 'center',
      justifyContent: 'center',
      padding: '21px 24px 19px',
      boxSizing: 'border-box',
      position: 'relative',
      zIndex: 20,
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      height: 22,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: 1.5
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: '-apple-system, "SF Pro", system-ui',
      fontWeight: 590,
      fontSize: 17,
      lineHeight: '22px',
      color: c
    }
  }, time)), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      height: 22,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 7,
      paddingTop: 1,
      paddingRight: 1
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "19",
    height: "12",
    viewBox: "0 0 19 12"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "0",
    y: "7.5",
    width: "3.2",
    height: "4.5",
    rx: "0.7",
    fill: c
  }), /*#__PURE__*/React.createElement("rect", {
    x: "4.8",
    y: "5",
    width: "3.2",
    height: "7",
    rx: "0.7",
    fill: c
  }), /*#__PURE__*/React.createElement("rect", {
    x: "9.6",
    y: "2.5",
    width: "3.2",
    height: "9.5",
    rx: "0.7",
    fill: c
  }), /*#__PURE__*/React.createElement("rect", {
    x: "14.4",
    y: "0",
    width: "3.2",
    height: "12",
    rx: "0.7",
    fill: c
  })), /*#__PURE__*/React.createElement("svg", {
    width: "17",
    height: "12",
    viewBox: "0 0 17 12"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M8.5 3.2C10.8 3.2 12.9 4.1 14.4 5.6L15.5 4.5C13.7 2.7 11.2 1.5 8.5 1.5C5.8 1.5 3.3 2.7 1.5 4.5L2.6 5.6C4.1 4.1 6.2 3.2 8.5 3.2Z",
    fill: c
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8.5 6.8C9.9 6.8 11.1 7.3 12 8.2L13.1 7.1C11.8 5.9 10.2 5.1 8.5 5.1C6.8 5.1 5.2 5.9 3.9 7.1L5 8.2C5.9 7.3 7.1 6.8 8.5 6.8Z",
    fill: c
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "8.5",
    cy: "10.5",
    r: "1.5",
    fill: c
  })), /*#__PURE__*/React.createElement("svg", {
    width: "27",
    height: "13",
    viewBox: "0 0 27 13"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "0.5",
    y: "0.5",
    width: "23",
    height: "12",
    rx: "3.5",
    stroke: c,
    strokeOpacity: "0.35",
    fill: "none"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "2",
    y: "2",
    width: "20",
    height: "9",
    rx: "2",
    fill: c
  }), /*#__PURE__*/React.createElement("path", {
    d: "M25 4.5V8.5C25.8 8.2 26.5 7.2 26.5 6.5C26.5 5.8 25.8 4.8 25 4.5Z",
    fill: c,
    fillOpacity: "0.4"
  }))));
}

// ─────────────────────────────────────────────────────────────
// Liquid glass pill — blur + tint + shine
// ─────────────────────────────────────────────────────────────
function IOSGlassPill({
  children,
  dark = false,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: 44,
      minWidth: 44,
      borderRadius: 9999,
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: dark ? '0 2px 6px rgba(0,0,0,0.35), 0 6px 16px rgba(0,0,0,0.2)' : '0 1px 3px rgba(0,0,0,0.07), 0 3px 10px rgba(0,0,0,0.06)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 9999,
      backdropFilter: 'blur(12px) saturate(180%)',
      WebkitBackdropFilter: 'blur(12px) saturate(180%)',
      background: dark ? 'rgba(120,120,128,0.28)' : 'rgba(255,255,255,0.5)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 9999,
      boxShadow: dark ? 'inset 1.5px 1.5px 1px rgba(255,255,255,0.15), inset -1px -1px 1px rgba(255,255,255,0.08)' : 'inset 1.5px 1.5px 1px rgba(255,255,255,0.7), inset -1px -1px 1px rgba(255,255,255,0.4)',
      border: dark ? '0.5px solid rgba(255,255,255,0.15)' : '0.5px solid rgba(0,0,0,0.06)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 1,
      display: 'flex',
      alignItems: 'center',
      padding: '0 4px'
    }
  }, children));
}

// ─────────────────────────────────────────────────────────────
// Navigation bar — glass pills + large title
// ─────────────────────────────────────────────────────────────
function IOSNavBar({
  title = 'Title',
  dark = false,
  trailingIcon = true
}) {
  const muted = dark ? 'rgba(255,255,255,0.6)' : '#404040';
  const text = dark ? '#fff' : '#000';
  const pillIcon = content => /*#__PURE__*/React.createElement(IOSGlassPill, {
    dark: dark
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 36,
      height: 36,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, content));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      paddingTop: 62,
      paddingBottom: 10,
      position: 'relative',
      zIndex: 5
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 16px'
    }
  }, pillIcon(/*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "20",
    viewBox: "0 0 12 20",
    fill: "none",
    style: {
      marginLeft: -1
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M10 2L2 10l8 8",
    stroke: muted,
    strokeWidth: "2.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))), trailingIcon && pillIcon(/*#__PURE__*/React.createElement("svg", {
    width: "22",
    height: "6",
    viewBox: "0 0 22 6"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "3",
    cy: "3",
    r: "2.5",
    fill: muted
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "11",
    cy: "3",
    r: "2.5",
    fill: muted
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "19",
    cy: "3",
    r: "2.5",
    fill: muted
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 16px',
      fontFamily: '-apple-system, system-ui',
      fontSize: 34,
      fontWeight: 700,
      lineHeight: '41px',
      color: text,
      letterSpacing: 0.4
    }
  }, title));
}

// ─────────────────────────────────────────────────────────────
// Grouped list (inset card, r:26) + row (52px)
// ─────────────────────────────────────────────────────────────
function IOSListRow({
  title,
  detail,
  icon,
  chevron = true,
  isLast = false,
  dark = false
}) {
  const text = dark ? '#fff' : '#000';
  const sec = dark ? 'rgba(235,235,245,0.6)' : 'rgba(60,60,67,0.6)';
  const ter = dark ? 'rgba(235,235,245,0.3)' : 'rgba(60,60,67,0.3)';
  const sep = dark ? 'rgba(84,84,88,0.65)' : 'rgba(60,60,67,0.12)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      minHeight: 52,
      padding: '0 16px',
      position: 'relative',
      fontFamily: '-apple-system, system-ui',
      fontSize: 17,
      letterSpacing: -0.43
    }
  }, icon && /*#__PURE__*/React.createElement("div", {
    style: {
      width: 30,
      height: 30,
      borderRadius: 7,
      background: icon,
      marginRight: 12,
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      color: text
    }
  }, title), detail && /*#__PURE__*/React.createElement("span", {
    style: {
      color: sec,
      marginRight: 6
    }
  }, detail), chevron && /*#__PURE__*/React.createElement("svg", {
    width: "8",
    height: "14",
    viewBox: "0 0 8 14",
    style: {
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M1 1l6 6-6 6",
    stroke: ter,
    strokeWidth: "2",
    fill: "none",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })), !isLast && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 0,
      right: 0,
      left: icon ? 58 : 16,
      height: 0.5,
      background: sep
    }
  }));
}
function IOSList({
  header,
  children,
  dark = false
}) {
  const hc = dark ? 'rgba(235,235,245,0.6)' : 'rgba(60,60,67,0.6)';
  const bg = dark ? '#1C1C1E' : '#fff';
  return /*#__PURE__*/React.createElement("div", null, header && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: '-apple-system, system-ui',
      fontSize: 13,
      color: hc,
      textTransform: 'uppercase',
      padding: '8px 36px 6px',
      letterSpacing: -0.08
    }
  }, header), /*#__PURE__*/React.createElement("div", {
    style: {
      background: bg,
      borderRadius: 26,
      margin: '0 16px',
      overflow: 'hidden'
    }
  }, children));
}

// ─────────────────────────────────────────────────────────────
// Device frame
// ─────────────────────────────────────────────────────────────
function IOSDevice({
  children,
  width = 402,
  height = 874,
  dark = false,
  title,
  keyboard = false
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width,
      height,
      borderRadius: 48,
      overflow: 'hidden',
      position: 'relative',
      background: dark ? '#000' : '#F2F2F7',
      boxShadow: '0 40px 80px rgba(0,0,0,0.18), 0 0 0 1px rgba(0,0,0,0.12)',
      fontFamily: '-apple-system, system-ui, sans-serif',
      WebkitFontSmoothing: 'antialiased'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 11,
      left: '50%',
      transform: 'translateX(-50%)',
      width: 126,
      height: 37,
      borderRadius: 24,
      background: '#000',
      zIndex: 50
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 10
    }
  }, /*#__PURE__*/React.createElement(IOSStatusBar, {
    dark: dark
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column'
    }
  }, title !== undefined && /*#__PURE__*/React.createElement(IOSNavBar, {
    title: title,
    dark: dark
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflow: 'auto'
    }
  }, children), keyboard && /*#__PURE__*/React.createElement(IOSKeyboard, {
    dark: dark
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      zIndex: 60,
      height: 34,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'flex-end',
      paddingBottom: 8,
      pointerEvents: 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 139,
      height: 5,
      borderRadius: 100,
      background: dark ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,0.25)'
    }
  })));
}

// ─────────────────────────────────────────────────────────────
// Keyboard — iOS 26 liquid glass
// ─────────────────────────────────────────────────────────────
function IOSKeyboard({
  dark = false
}) {
  const glyph = dark ? 'rgba(255,255,255,0.7)' : '#595959';
  const sugg = dark ? 'rgba(255,255,255,0.6)' : '#333';
  const keyBg = dark ? 'rgba(255,255,255,0.22)' : 'rgba(255,255,255,0.85)';

  // special-key icons
  const icons = {
    shift: /*#__PURE__*/React.createElement("svg", {
      width: "19",
      height: "17",
      viewBox: "0 0 19 17"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M9.5 1L1 9.5h4.5V16h8V9.5H18L9.5 1z",
      fill: glyph
    })),
    del: /*#__PURE__*/React.createElement("svg", {
      width: "23",
      height: "17",
      viewBox: "0 0 23 17"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M7 1h13a2 2 0 012 2v11a2 2 0 01-2 2H7l-6-7.5L7 1z",
      fill: "none",
      stroke: glyph,
      strokeWidth: "1.6",
      strokeLinejoin: "round"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M10 5l7 7M17 5l-7 7",
      stroke: glyph,
      strokeWidth: "1.6",
      strokeLinecap: "round"
    })),
    ret: /*#__PURE__*/React.createElement("svg", {
      width: "20",
      height: "14",
      viewBox: "0 0 20 14"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M18 1v6H4m0 0l4-4M4 7l4 4",
      fill: "none",
      stroke: "#fff",
      strokeWidth: "1.8",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }))
  };
  const key = (content, {
    w,
    flex,
    ret,
    fs = 25,
    k
  } = {}) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      height: 42,
      borderRadius: 8.5,
      flex: flex ? 1 : undefined,
      width: w,
      minWidth: 0,
      background: ret ? '#08f' : keyBg,
      boxShadow: '0 1px 0 rgba(0,0,0,0.075)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: '-apple-system, "SF Compact", system-ui',
      fontSize: fs,
      fontWeight: 458,
      color: ret ? '#fff' : glyph
    }
  }, content);
  const row = (keys, pad = 0) => /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6.5,
      justifyContent: 'center',
      padding: `0 ${pad}px`
    }
  }, keys.map(l => key(l, {
    flex: true,
    k: l
  })));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 15,
      borderRadius: 27,
      overflow: 'hidden',
      padding: '11px 0 2px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      boxShadow: dark ? '0 -2px 20px rgba(0,0,0,0.09)' : '0 -1px 6px rgba(0,0,0,0.018), 0 -3px 20px rgba(0,0,0,0.012)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 27,
      backdropFilter: 'blur(12px) saturate(180%)',
      WebkitBackdropFilter: 'blur(12px) saturate(180%)',
      background: dark ? 'rgba(120,120,128,0.14)' : 'rgba(255,255,255,0.25)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 27,
      boxShadow: dark ? 'inset 1.5px 1.5px 1px rgba(255,255,255,0.15)' : 'inset 1.5px 1.5px 1px rgba(255,255,255,0.7), inset -1px -1px 1px rgba(255,255,255,0.4)',
      border: dark ? '0.5px solid rgba(255,255,255,0.15)' : '0.5px solid rgba(0,0,0,0.06)',
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 20,
      alignItems: 'center',
      padding: '8px 22px 13px',
      width: '100%',
      boxSizing: 'border-box',
      position: 'relative'
    }
  }, ['"The"', 'the', 'to'].map((w, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: i
  }, i > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      width: 1,
      height: 25,
      background: '#ccc',
      opacity: 0.3
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      textAlign: 'center',
      fontFamily: '-apple-system, system-ui',
      fontSize: 17,
      color: sugg,
      letterSpacing: -0.43,
      lineHeight: '22px'
    }
  }, w)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 13,
      padding: '0 6.5px',
      width: '100%',
      boxSizing: 'border-box',
      position: 'relative'
    }
  }, row(['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p']), row(['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'], 20), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14.25,
      alignItems: 'center'
    }
  }, key(icons.shift, {
    w: 45,
    k: 'shift'
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6.5,
      flex: 1
    }
  }, ['z', 'x', 'c', 'v', 'b', 'n', 'm'].map(l => key(l, {
    flex: true,
    k: l
  }))), key(icons.del, {
    w: 45,
    k: 'del'
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      alignItems: 'center'
    }
  }, key('ABC', {
    w: 92.25,
    fs: 18,
    k: 'abc'
  }), key('', {
    flex: true,
    k: 'space'
  }), key(icons.ret, {
    w: 92.25,
    ret: true,
    k: 'ret'
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 56,
      width: '100%',
      position: 'relative'
    }
  }));
}
Object.assign(window, {
  IOSDevice,
  IOSStatusBar,
  IOSNavBar,
  IOSGlassPill,
  IOSList,
  IOSListRow,
  IOSKeyboard
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/ios-frame.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/BusinessScreen.jsx
try { (() => {
// ScoutLocal marketing — For Businesses screen. Composes Eyebrow, Stat, Badge, LivePill, Accordion, Card, Button.
function BusinessScreen({
  go
}) {
  const {
    Eyebrow,
    Button,
    Card,
    Stat,
    Badge,
    LivePill,
    Accordion
  } = window.ScoutLocalDesignSystem_b3452c;
  const A = '../../assets/img/';
  const photos = [[A + 'salon.jpg', 'Hair & beauty'], [A + 'florist.jpg', 'Florists & makers'], [A + 'computer.jpg', 'Home-based & freelance']];
  const [p, setP] = React.useState(0);
  React.useEffect(() => {
    const t = setInterval(() => setP(x => (x + 1) % photos.length), 5000);
    return () => clearInterval(t);
  }, []);
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      overflow: 'hidden',
      minHeight: 540,
      display: 'flex',
      alignItems: 'center',
      borderBottom: '1px solid var(--line)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      zIndex: 0
    }
  }, photos.map(([src, cap], i) => /*#__PURE__*/React.createElement("figure", {
    key: src,
    style: {
      position: 'absolute',
      inset: 0,
      margin: 0,
      opacity: p === i ? 1 : 0,
      transition: 'opacity .7s ease'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 0,
      right: 0,
      height: '100%',
      width: '60%',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: cap,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      objectPosition: 'center 34%'
    }
  })), /*#__PURE__*/React.createElement("figcaption", {
    style: {
      position: 'absolute',
      right: 0,
      bottom: 0,
      width: '60%',
      boxSizing: 'border-box',
      padding: '44px 26px 20px',
      textAlign: 'right',
      background: 'linear-gradient(transparent,rgba(23,21,15,.62))',
      color: '#fff',
      font: '600 16px Outfit'
    }
  }, cap))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      zIndex: 2,
      background: 'linear-gradient(98deg,var(--bg) 0%,var(--bg) 36%,rgba(246,241,234,.9) 48%,rgba(246,241,234,.45) 60%,rgba(246,241,234,0) 73%)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "wrap",
    style: {
      position: 'relative',
      zIndex: 3
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 640,
      padding: '40px 0'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "accent"
  }, "For local businesses"), /*#__PURE__*/React.createElement("h1", {
    style: {
      font: '700 clamp(48px,7vw,88px)/.92 Outfit',
      letterSpacing: '-.045em',
      margin: '18px 0 22px',
      maxWidth: '14ch'
    }
  }, "Military families are already looking. Be the clear answer."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 18,
      lineHeight: 1.55,
      color: 'var(--ink-2)',
      maxWidth: '50ch'
    }
  }, "Claim your profile so families can find accurate hours, services, photos, contact details, and military-relevant notes \u2014 without buying rank."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 18,
      flexWrap: 'wrap',
      marginTop: 30
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    arrow: true,
    onClick: () => go('home')
  }, "List your business"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    arrow: true
  }, "See how it works"))))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '88px 0',
      background: 'linear-gradient(180deg,#eef2e7,#e7ede0)',
      borderBottom: '1px solid var(--sage-line)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap",
    style: {
      display: 'grid',
      gridTemplateColumns: '1.05fr .95fr',
      gap: 60,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement(LivePill, {
    tone: "sage"
  }, "04 / open now beacons \xB7 beta")), /*#__PURE__*/React.createElement("h2", {
    style: {
      font: '700 clamp(34px,4.6vw,56px)/.99 Outfit',
      letterSpacing: '-.035em',
      margin: 0,
      maxWidth: '15ch'
    }
  }, "Tell families you're open ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--sage-deep)'
    }
  }, "right now.")), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--ink-2)',
      maxWidth: '46ch',
      fontSize: 17,
      lineHeight: 1.55,
      marginTop: 18
    }
  }, "A walk-in slot opened up. The food truck just parked. Drop a Beacon and ScoutLocal lights you up for families nearby \u2014 on your listing, in the feed, and on the map \u2014 for as long as you set."), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      margin: '26px 0 0',
      padding: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, ['Goes straight to the families who already saved you.', 'You set the window — end early anytime, never extended.', 'Home-based? Broadcast "open now" at your area — never your exact address.'].map(t => /*#__PURE__*/React.createElement("li", {
    key: t,
    style: {
      display: 'flex',
      gap: 13,
      fontSize: 15,
      color: 'var(--ink-2)',
      lineHeight: 1.5
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 18 18",
    fill: "none",
    style: {
      flex: '0 0 18px',
      marginTop: 2
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M4 9.5l3.5 3.5L14 6",
    stroke: "#4f5c3a",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })), t)))), /*#__PURE__*/React.createElement(Card, {
    style: {
      borderRadius: 26,
      padding: '26px 26px 22px',
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "your listing \xB7 fort polk"), /*#__PURE__*/React.createElement(LivePill, {
    tone: "sage"
  }, "beacon live")), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '700 30px Outfit',
      letterSpacing: '-.03em',
      margin: '18px 0 12px'
    }
  }, "Jerry's Auto"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      flexWrap: 'wrap',
      marginBottom: 22
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    kind: "verified"
  }), /*#__PURE__*/React.createElement(Badge, {
    kind: "milspouse"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 10,
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--soft)',
      border: '1px solid var(--line-soft)',
      borderRadius: 16,
      padding: '16px 14px'
    }
  }, /*#__PURE__*/React.createElement(Stat, {
    size: "sm",
    value: "1,240",
    label: "listing views",
    delta: "28% this month"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--soft)',
      border: '1px solid var(--line-soft)',
      borderRadius: 16,
      padding: '16px 14px'
    }
  }, /*#__PURE__*/React.createElement(Stat, {
    size: "sm",
    value: "86",
    label: "saved by families",
    delta: "12 this month"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--soft)',
      border: '1px solid var(--line-soft)',
      borderRadius: 16,
      padding: '16px 14px'
    }
  }, /*#__PURE__*/React.createElement(Stat, {
    size: "sm",
    value: "34",
    label: "direct contacts",
    delta: "9 this month"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--sage-mist)',
      border: '1px solid var(--sage-line)',
      borderRadius: 16,
      padding: '15px 16px',
      display: 'flex',
      alignItems: 'center',
      gap: 13
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 34,
      height: 34,
      borderRadius: 10,
      background: 'var(--sage)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flex: '0 0 34px'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 24 24",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M5 13L20 7L13 22L11 15L5 13Z",
    fill: "#2f3a22"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 600,
      color: 'var(--ink)',
      letterSpacing: '-.01em'
    }
  }, "Open Now Beacon"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--sage-deep)',
      marginTop: 2
    }
  }, "broadcasting \xB7 ends 5:30 pm")), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 42,
      height: 24,
      borderRadius: 999,
      background: 'var(--sage-deep)',
      position: 'relative',
      flex: '0 0 42px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 2,
      right: 2,
      width: 20,
      height: 20,
      borderRadius: '50%',
      background: '#fff'
    }
  })))))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '88px 0',
      background: 'var(--soft)',
      borderBottom: '1px solid var(--line)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '200px 1fr',
      gap: 48,
      marginBottom: 48
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "06 / badges you can earn"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: {
      font: '700 clamp(34px,4.6vw,56px)/.99 Outfit',
      letterSpacing: '-.035em',
      margin: 0,
      maxWidth: '19ch'
    }
  }, "Trust signals families ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--rust)'
    }
  }, "actually read.")), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 18,
      fontSize: 17,
      lineHeight: 1.5,
      color: 'var(--ink-2)',
      maxWidth: '56ch'
    }
  }, "Every badge means the same thing on every listing. They can't be purchased \u2014 which is exactly why a family takes them seriously."))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 20
    }
  }, [['verified', 'Verified Local', 'A real business with a verified presence near the base. Reviewed by hand. Every verified listing earns it.', 'Refreshed every 6 months'], ['milspouse', 'Military Spouse Owned', 'Owned in whole or majority by a current or former military spouse — verified through AMSE/GovX or direct documentation.', 'Confirmed annually'], ['founding', 'Founding Partner', 'One of the first 50 verified businesses to list at Fort Polk during beta. Never sold, never reissued.', 'Phase 1 only · permanent']].map(([kind, title, body, crit]) => /*#__PURE__*/React.createElement(Card, {
    key: kind,
    style: {
      borderRadius: 24,
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      minHeight: 300
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    kind: kind
  }), /*#__PURE__*/React.createElement("h4", {
    style: {
      font: '600 21px Outfit',
      letterSpacing: '-.015em',
      margin: 0
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14,
      lineHeight: 1.55,
      color: 'var(--ink-2)',
      margin: 0
    }
  }, body), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto',
      paddingTop: 18,
      borderTop: '1px dashed var(--line)',
      fontFamily: "'Geist Mono',monospace",
      fontSize: 11,
      color: 'var(--muted)',
      textTransform: 'uppercase',
      letterSpacing: '.06em'
    }
  }, crit)))))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '88px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '200px 1fr',
      gap: 48,
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "07 / owner questions"), /*#__PURE__*/React.createElement("h2", {
    style: {
      font: '700 clamp(34px,4.6vw,52px)/1 Outfit',
      letterSpacing: '-.035em',
      margin: 0
    }
  }, "What owners ask before they list.")), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--line)'
    }
  }, /*#__PURE__*/React.createElement(Accordion, {
    question: "What does a listing include?",
    defaultOpen: true
  }, "A manually verified listing with the Verified Local badge, a full profile (photos, hours, services, contact), Open Now Beacons during beta, a monthly performance email, and the ability to edit anytime. No contract."), /*#__PURE__*/React.createElement(Accordion, {
    question: "Can I pay to rank higher?"
  }, "No \u2014 and that's deliberate. Listing is free, and ranking is earned the same way for every business. It's the reason families trust the order they see."), /*#__PURE__*/React.createElement(Accordion, {
    question: "How long does it take to get listed?"
  }, "Usually about a week. A ScoutLocal admin reviews every application by hand \u2014 name, address, phone, website, and at least one form of public verification."), /*#__PURE__*/React.createElement(Accordion, {
    question: "Which base can I list on right now?"
  }, "Fort Polk, LA is live in beta. More installations open as each one reaches our launch quality bar. Start your application anyway \u2014 we'll reach out the moment it opens.")))));
}
window.SLBusinessScreen = BusinessScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/BusinessScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Footer.jsx
try { (() => {
// ScoutLocal marketing site — dark footer.
function Footer() {
  const cols = [['Families', ['For families', 'How it works', 'Our promise', 'FAQ']], ['Businesses', ['Claim a listing', 'Features', 'Improve the map', 'Owner support']], ['Company', ['About Novalyse', 'Privacy', 'Terms', 'Contact']]];
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      position: 'relative',
      overflow: 'hidden',
      background: 'var(--ink)',
      color: '#fff',
      padding: '75px 0 30px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      width: 800,
      height: 800,
      left: -300,
      bottom: -500,
      borderRadius: '50%',
      background: 'radial-gradient(circle,rgba(255,180,130,.16),transparent 60%)',
      filter: 'blur(50px)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "wrap",
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '2fr repeat(3,1fr)',
      gap: 45
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "'Outfit',sans-serif",
      fontSize: 44,
      margin: '0 0 15px',
      fontWeight: 600
    }
  }, "scout local", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--rust)'
    }
  }, ".")), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'rgba(255,255,255,.6)',
      lineHeight: 1.55,
      maxWidth: '37ch',
      fontSize: 14
    }
  }, "A directory for the everyday places that make a new base feel workable, familiar, and eventually like home. Built with and for military families.")), cols.map(([title, items]) => /*#__PURE__*/React.createElement("div", {
    key: title,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "'Geist Mono',monospace",
      fontSize: 10,
      textTransform: 'uppercase',
      letterSpacing: '.1em',
      color: 'rgba(255,255,255,.4)',
      margin: 0
    }
  }, title), items.map(i => /*#__PURE__*/React.createElement("a", {
    key: i,
    style: {
      fontSize: 14,
      color: 'rgba(255,255,255,.8)',
      cursor: 'pointer'
    }
  }, i))))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid rgba(255,255,255,.12)',
      marginTop: 60,
      paddingTop: 22,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 15,
      color: 'rgba(255,255,255,.45)',
      fontFamily: "'Geist Mono',monospace",
      fontSize: 10
    }
  }, /*#__PURE__*/React.createElement("span", null, "ScoutLocal is a product of Novalyse LLC. \xA9 2026 Novalyse LLC."))));
}
window.SLFooter = Footer;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Footer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Header.jsx
try { (() => {
// ScoutLocal marketing site — sticky header with brand wayfinder mark.
function Header({
  route,
  go
}) {
  const links = [['families', 'Families'], ['businesses', 'Businesses'], ['how', 'How it works'], ['features', 'Features']];
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 20,
      background: 'rgba(246,241,234,.9)',
      backdropFilter: 'blur(14px)',
      borderBottom: '1px solid rgba(223,213,199,.8)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap",
    style: {
      height: 68,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("a", {
    onClick: () => go('home'),
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      fontWeight: 700,
      cursor: 'pointer',
      color: 'var(--ink)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 19,
      height: 19,
      display: 'flex',
      color: 'var(--ink)'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M3 11.5L20.5 4L13 21.5L11 13.5L3 11.5Z",
    fill: "currentColor"
  }))), /*#__PURE__*/React.createElement("span", null, "scout local")), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 29,
      fontSize: 14,
      color: 'var(--ink-2)'
    }
  }, links.map(([key, label]) => /*#__PURE__*/React.createElement("a", {
    key: key,
    onClick: () => go(key === 'businesses' ? 'businesses' : 'home'),
    style: {
      cursor: 'pointer',
      color: route === key ? 'var(--rust)' : 'var(--ink-2)'
    }
  }, label)), /*#__PURE__*/React.createElement("a", {
    onClick: () => go('home'),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 9,
      cursor: 'pointer',
      padding: '10px 16px',
      background: 'var(--ink)',
      color: '#fff',
      borderRadius: 999,
      fontWeight: 600
    }
  }, "Join beta", /*#__PURE__*/React.createElement("svg", {
    width: "15",
    height: "15",
    viewBox: "0 0 16 16",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M3 8h10M9 4l4 4-4 4",
    stroke: "currentColor",
    strokeWidth: "1.6",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))))));
}
window.SLHeader = Header;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Header.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/HomeScreen.jsx
try { (() => {
// ScoutLocal marketing — Home screen. Composes Eyebrow, Button, Card, Stat, ListingRow, Pill.
function HomeScreen({
  go
}) {
  const {
    Eyebrow,
    Button,
    Card,
    Stat,
    ListingRow,
    Pill,
    Badge
  } = window.ScoutLocalDesignSystem_b3452c;
  const A = '../../assets/img/';
  const screens = [A + 'app-explore.jpg', A + 'app-events.jpg', A + 'app-saved.jpg', A + 'app-splash.jpg'];
  const [shot, setShot] = React.useState(0);
  React.useEffect(() => {
    const t = setInterval(() => setShot(s => (s + 1) % screens.length), 3800);
    return () => clearInterval(t);
  }, []);
  const [cat, setCat] = React.useState('coffee');
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      overflow: 'hidden',
      padding: '78px 0 56px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      borderRadius: '50%',
      pointerEvents: 'none',
      background: 'radial-gradient(circle,var(--peach),rgba(255,209,172,.42) 40%,transparent 72%)',
      filter: 'blur(20px)',
      width: 820,
      height: 680,
      right: -260,
      top: -300
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "wrap",
    style: {
      position: 'relative',
      display: 'grid',
      gridTemplateColumns: '1fr 300px',
      gap: 52,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    style: {
      font: '700 clamp(52px,7vw,96px)/.94 Outfit',
      letterSpacing: '-.045em',
      margin: '0 0 26px',
      maxWidth: '13ch'
    }
  }, "Belong faster ", /*#__PURE__*/React.createElement("span", {
    style: {
      background: 'linear-gradient(transparent 60%,var(--peach) 60% 93%,transparent 93%)'
    }
  }, "after every move.")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 19,
      lineHeight: 1.55,
      color: 'var(--ink-2)',
      maxWidth: '56ch',
      margin: 0
    }
  }, "ScoutLocal is a local directory built for military families. Verified businesses, current information, and a softer landing after every PCS \u2014 so you can rebuild your routine instead of starting from scratch."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 18,
      flexWrap: 'wrap',
      marginTop: 32
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    arrow: true,
    onClick: () => go('businesses')
  }, "Join the beta"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    arrow: true,
    onClick: () => go('businesses')
  }, "List your business"), /*#__PURE__*/React.createElement("span", {
    style: {
      font: '500 12px Geist Mono',
      textTransform: 'uppercase',
      letterSpacing: '.1em',
      color: '#36421f',
      background: 'var(--sage)',
      padding: '8px 13px',
      borderRadius: 999
    }
  }, "Always free"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: 300,
      aspectRatio: '1179/2556',
      background: 'var(--ink)',
      borderRadius: 44,
      padding: 11,
      boxShadow: '0 50px 90px -42px #6c5038',
      justifySelf: 'end'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: '100%',
      height: '100%',
      borderRadius: 34,
      overflow: 'hidden',
      background: 'var(--soft)'
    }
  }, screens.map((src, i) => /*#__PURE__*/React.createElement("img", {
    key: src,
    src: src,
    alt: "",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      opacity: shot === i ? 1 : 0,
      transition: 'opacity .6s'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 14,
      display: 'flex',
      gap: 7,
      justifyContent: 'center',
      zIndex: 2
    }
  }, screens.map((_, i) => /*#__PURE__*/React.createElement("button", {
    key: i,
    onClick: () => setShot(i),
    style: {
      width: 7,
      height: 7,
      borderRadius: '50%',
      border: 0,
      background: shot === i ? '#fff' : 'rgba(255,255,255,.55)',
      transform: shot === i ? 'scale(1.4)' : 'none',
      cursor: 'pointer',
      padding: 0
    }
  }))))))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '64px 0',
      borderTop: '1px solid var(--line)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap",
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 40
    }
  }, /*#__PURE__*/React.createElement(Stat, {
    value: "1",
    suffix: "/3",
    label: "U.S. military families move every 2\u20133 years on PCS orders."
  }), /*#__PURE__*/React.createElement(Stat, {
    value: "6mo",
    label: "Average time families spend rebuilding the everyday places that anchor home."
  }), /*#__PURE__*/React.createElement(Stat, {
    value: "$0",
    tone: "sage",
    label: "To use the app \u2014 and to list a business. Always free."
  }))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '88px 0',
      borderTop: '1px solid var(--line)',
      background: 'var(--soft)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '180px 1fr',
      gap: 30,
      marginBottom: 40
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "02 / how it works"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: {
      font: '700 clamp(34px,5vw,52px)/1 Outfit',
      margin: 0,
      letterSpacing: '-.035em',
      maxWidth: '18ch'
    }
  }, "Open the app, find the routine, settle in."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 16,
      lineHeight: 1.55,
      color: 'var(--ink-2)',
      maxWidth: '60ch',
      marginTop: 16
    }
  }, "Three steps, then you put it down. ScoutLocal is built to be useful and get out of the way \u2014 no streaks, no points, no reason to keep scrolling."))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement(Card, {
    style: {
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Step 01"), /*#__PURE__*/React.createElement("h3", {
    style: {
      font: '600 24px Outfit',
      letterSpacing: '-.02em',
      margin: '15px 0 12px',
      lineHeight: 1.1
    }
  }, "Tell us where you landed."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 15,
      lineHeight: 1.55,
      color: 'var(--ink-2)',
      margin: '0 0 24px'
    }
  }, "Pick your base and how long you've been there. We shape the directory to your installation."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto',
      background: 'var(--soft)',
      border: '1px solid var(--line)',
      borderRadius: 12,
      padding: '4px 16px'
    }
  }, /*#__PURE__*/React.createElement(ListingRow, {
    name: "Fort Polk, LA",
    tag: "Live"
  }), /*#__PURE__*/React.createElement(ListingRow, {
    name: "Time at base",
    tag: "Just arrived",
    tagTone: "muted"
  }), /*#__PURE__*/React.createElement(ListingRow, {
    name: "Branch",
    tag: "Army",
    tagTone: "muted",
    last: true
  }))), /*#__PURE__*/React.createElement(Card, {
    style: {
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Step 02"), /*#__PURE__*/React.createElement("h3", {
    style: {
      font: '600 24px Outfit',
      letterSpacing: '-.02em',
      margin: '15px 0 12px',
      lineHeight: 1.1
    }
  }, "Browse by what your day needs."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 15,
      lineHeight: 1.55,
      color: 'var(--ink-2)',
      margin: '0 0 24px'
    }
  }, "Search a category \u2014 childcare, auto repair, pet care \u2014 or browse the routines that anchor home."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto',
      display: 'flex',
      flexWrap: 'wrap',
      gap: 8
    }
  }, ['childcare', 'coffee', 'salon', 'vet', 'gym'].map(c => /*#__PURE__*/React.createElement(Pill, {
    key: c,
    active: cat === c,
    onClick: () => setCat(c)
  }, c)))), /*#__PURE__*/React.createElement(Card, {
    style: {
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Step 03"), /*#__PURE__*/React.createElement("h3", {
    style: {
      font: '600 24px Outfit',
      letterSpacing: '-.02em',
      margin: '15px 0 12px',
      lineHeight: 1.1
    }
  }, "See who's actually trustworthy."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 15,
      lineHeight: 1.55,
      color: 'var(--ink-2)',
      margin: '0 0 24px'
    }
  }, "Every badge means one specific thing \u2014 and every listing tells you the day it was last updated."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto',
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    kind: "verified"
  }), /*#__PURE__*/React.createElement(Badge, {
    kind: "milspouse"
  })))))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '88px 0 0',
      borderTop: '1px solid var(--line)',
      background: 'var(--soft)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      font: '700 clamp(40px,6vw,72px)/.97 Outfit',
      letterSpacing: '-.04em',
      margin: 0,
      maxWidth: '16ch'
    }
  }, "Connect with ", /*#__PURE__*/React.createElement("span", {
    style: {
      background: 'linear-gradient(transparent 60%,var(--peach) 60% 93%,transparent 93%)'
    }
  }, "your community."))), /*#__PURE__*/React.createElement("img", {
    src: A + 'hands-wide.jpg',
    alt: "Two hands reaching toward each other across the sky",
    style: {
      width: '100%',
      height: 'clamp(280px,40vw,460px)',
      objectFit: 'cover',
      objectPosition: 'center 40%',
      display: 'block',
      marginTop: 34
    }
  })), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '88px 0',
      background: 'var(--soft)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement(Card, {
    tone: "invert",
    padding: 52,
    style: {
      borderRadius: 8,
      display: 'grid',
      gridTemplateColumns: '1fr minmax(320px,.6fr)',
      gap: 48,
      alignItems: 'center',
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      width: 430,
      height: 430,
      right: -170,
      top: -260,
      background: 'radial-gradient(circle,rgba(255,209,172,.28),transparent 68%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "accent",
    style: {
      color: 'var(--peach)'
    }
  }, "Get started"), /*#__PURE__*/React.createElement("h2", {
    style: {
      font: '700 clamp(34px,5vw,52px)/1 Outfit',
      margin: '10px 0 14px',
      letterSpacing: '-.035em'
    }
  }, "Free for families. Free for businesses."), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'rgba(255,255,255,.7)',
      lineHeight: 1.55,
      margin: 0
    }
  }, "Join the beta to get your base's directory, or list your local business so families can find you \u2014 always free.")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "peach",
    arrow: true,
    onClick: () => go('businesses')
  }, "Join the beta"), /*#__PURE__*/React.createElement(Button, {
    arrow: true,
    onClick: () => go('businesses'),
    style: {
      background: 'transparent',
      color: '#fff',
      border: '1px solid rgba(255,255,255,.3)'
    }
  }, "List your business"))))));
}
window.SLHomeScreen = HomeScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/HomeScreen.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.LivePill = __ds_scope.LivePill;

__ds_ns.Pill = __ds_scope.Pill;

__ds_ns.ListingRow = __ds_scope.ListingRow;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.Stat = __ds_scope.Stat;

__ds_ns.Accordion = __ds_scope.Accordion;

__ds_ns.Field = __ds_scope.Field;

})();
