// Launcher tile icons, keyed by file name without ".html". Unknown apps get the fallback.
window.APP_ICONS = (() => {
  const svg = body => `<svg viewBox="0 0 72 72" fill="none" aria-hidden="true">${body}</svg>`;
  const icons = {
    kalaha: {
      bg: 'linear-gradient(145deg,#2f4a9a,#1c2a5c)',
      svg: svg(`
        <rect x="5" y="18" width="62" height="36" rx="18" fill="#2a2b2e" stroke="#c9ccd3" stroke-width="3"/>
        <ellipse cx="14" cy="36" rx="5.5" ry="12" fill="#17181a"/><ellipse cx="58" cy="36" rx="5.5" ry="12" fill="#17181a"/>
        <circle cx="14" cy="31" r="2.6" fill="#f2593a"/><circle cx="14" cy="38" r="2.6" fill="#f2593a"/>
        <circle cx="58" cy="33" r="2.6" fill="#f2593a"/><circle cx="58" cy="40" r="2.6" fill="#f2593a"/>
        <g fill="#17181a"><circle cx="26" cy="28" r="5.5"/><circle cx="36" cy="28" r="5.5"/><circle cx="46" cy="28" r="5.5"/>
        <circle cx="26" cy="44" r="5.5"/><circle cx="36" cy="44" r="5.5"/><circle cx="46" cy="44" r="5.5"/></g>
        <g fill="#f2593a"><circle cx="26" cy="28" r="3"/><circle cx="36" cy="27" r="3"/><circle cx="46" cy="28" r="3"/>
        <circle cx="36" cy="44" r="3"/><circle cx="25" cy="45" r="3"/></g>`)
    },
    backgammon: {
      bg: 'linear-gradient(145deg,#c99451,#71452d)',
      svg: svg(`
        <rect x="10" y="8" width="52" height="56" rx="8" fill="#f3dfba" stroke="#502b20" stroke-width="4"/>
        <path d="M36 10v52" stroke="#502b20" stroke-width="3"/>
        <path d="M14 12l7 20 7-20zM44 12l7 20 7-20z" fill="#71452d"/>
        <path d="M14 60l7-20 7 20zM44 60l7-20 7 20z" fill="#71452d"/>
        <circle cx="21" cy="26" r="4.5" fill="#252525"/><circle cx="51" cy="46" r="4.5" fill="#fff" stroke="#502b20" stroke-width="2"/>`)
    },
    'my-weather': {
      bg: 'linear-gradient(145deg,#55c5ff,#1666d8)',
      svg: svg(`
        <path d="M28 7v5M7 28h5M13 13l4 4M43 13l-4 4" stroke="#ffe59b" stroke-width="3" stroke-linecap="round"/>
        <circle cx="28" cy="28" r="12" fill="#ffd166"/>
        <path d="M27 58h27a11 11 0 0 0 1-22 14 14 0 0 0-26-4 13 13 0 0 0-2 26Z" fill="#fff"/>`)
    },
    'villamartin-trip': {
      bg: 'linear-gradient(145deg,#1d7fa6,#0b4f6c)',
      svg: svg(`
        <circle cx="52" cy="17" r="8" fill="#f5b324"/>
        <path d="M6 54c8-5 14-5 22 0s14 5 22 0 12-4 16-2v14H6z" fill="#08384d" opacity=".55"/>
        <path d="M36 56V30" stroke="#f3dfba" stroke-width="4" stroke-linecap="round"/>
        <path d="M36 30c-5-8-14-8-20-3 8-1 13 0 20 3zM36 30c5-8 14-8 20-3-8-1-13 0-20 3zM36 30c-1-10-8-15-15-14 8 2 12 7 15 14zM36 30c1-10 8-15 15-14-8 2-12 7-15 14z" fill="#43b36b"/>
        <circle cx="33" cy="33" r="2.5" fill="#8a4a0c"/><circle cx="39" cy="33" r="2.5" fill="#8a4a0c"/>`)
    },
    hjarta: {
      bg: 'linear-gradient(145deg,#c9364b,#7a1f2b)',
      svg: svg(`
        <path d="M36 59S11 44 11 27c0-8 6-14 14-14 5 0 9 3 11 8 2-5 6-8 11-8 8 0 14 6 14 14 0 17-25 32-25 32Z" fill="#fff" opacity=".96"/>
        <path d="M15 37h12l5-10 8 19 5-9h12" stroke="#c9364b" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>`)
    },
    handheld: {
      bg: 'linear-gradient(145deg,#4f8f5f,#1c2a5c)',
      svg: svg(`
        <g fill="#fff"><rect x="15" y="18" width="4" height="36" rx="1"/><rect x="22" y="18" width="2" height="36" rx="1"/>
        <rect x="27" y="18" width="5" height="36" rx="1"/><rect x="35" y="18" width="2" height="36" rx="1"/>
        <rect x="40" y="18" width="4" height="36" rx="1"/><rect x="47" y="18" width="2" height="36" rx="1"/>
        <rect x="52" y="18" width="5" height="36" rx="1"/></g>
        <path d="M8 36h56" stroke="#f2593a" stroke-width="3" stroke-linecap="round"/>`)
    }
  };
  const fallback = {
    bg: 'linear-gradient(145deg,#55c5ff,#1c2a5c)',
    svg: svg('<rect x="14" y="14" width="18" height="18" rx="5" fill="#fff"/><rect x="40" y="14" width="18" height="18" rx="5" fill="#fff" opacity=".8"/><rect x="14" y="40" width="18" height="18" rx="5" fill="#fff" opacity=".8"/><rect x="40" y="40" width="18" height="18" rx="5" fill="#fff"/>')
  };
  return name => icons[name] || fallback;
})();
