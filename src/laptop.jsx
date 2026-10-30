import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import donationTreeShot from './assets/donation-tree-website.jpeg';

const scenes = [
  { name: 'Search performance', tag: 'SEO OVERVIEW', metric: '+38.4%', label: 'Organic growth', color: 'mint', kind: 'seo' },
  { name: 'Studio / web', tag: 'WEBSITE BUILD', metric: 'Designing for clarity', label: 'A faster, better web', color: 'lavender', kind: 'web' },
  { name: 'Campaign report', tag: 'PAID MEDIA', metric: '4.8×', label: 'Return on ad spend', color: 'peach', kind: 'ads' },
  { name: 'Audience insights', tag: 'ANALYTICS', metric: '12.6k', label: 'Monthly visitors', color: 'blue', kind: 'analytics' },
  { name: 'Growth strategy', tag: 'MARKETING', metric: 'On the rise', label: 'Qualified demand', color: 'yellow', kind: 'growth' },
];

function MiniScene({ scene }) {
  return <motion.div className={`mini-scene ${scene.color}`} initial={{ opacity: 0, scale: 1.035 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: .975 }} transition={{ duration: .65 }}>
    {scene.kind === 'web' ? <img className="website-shot" src={donationTreeShot} alt="Donation Tree website design" /> : <>
    <div className="mini-top"><span className="mini-logo"><b>G</b> Google Search Console</span><span className="mini-tag">{scene.tag}</span><span className="mini-avatar">AM</span></div>
    <div className="mini-body"><aside className="mini-side"><i/><i/><i/><i/><i/></aside><div className="mini-content"><div className="mini-heading"><div><span className="mini-eyebrow">MONDAY, OCTOBER 20</span><h3>{scene.name}</h3></div><span className="mini-filter">Last 30 days⌄</span></div>
      <div className="mini-metrics"><div className="metric-card"><span>{scene.label}</span><strong>{scene.metric}</strong><small>↗ 18.2% <em>vs last month</em></small></div><div className="metric-card small-card"><span>Conversions</span><strong>1,284</strong><small>↑ 12.8%</small></div></div>
      <div className="chart-card"><div className="chart-head"><span>Performance over time</span><span className="chart-legend"><i/> This month&nbsp; <i/> Previous</span></div><div className={`chart chart-${scene.kind}`}><div className="chart-grid"/><svg viewBox="0 0 600 112" preserveAspectRatio="none"><path className="chart-area" d="M0 90 C55 85 62 52 120 66 S190 39 230 56 S300 17 348 44 S420 50 454 24 S520 41 560 14 S587 27 600 6 L600 112 L0 112Z"/><path className="chart-line" d="M0 90 C55 85 62 52 120 66 S190 39 230 56 S300 17 348 44 S420 50 454 24 S520 41 560 14 S587 27 600 6"/></svg></div></div>
    </div></div>
    </>}
  </motion.div>;
}

export function Laptop() {
  const [active, setActive] = useState(0);
  useEffect(() => { const id = setInterval(() => setActive(i => (i + 1) % scenes.length), 3600); return () => clearInterval(id); }, []);
  return <div className="laptop-wrap" aria-label="A laptop showing digital analytics and website designs">
    <div className="float-note note-left"><span className="note-icon">↗</span><span>Growth, with<br/>a clear direction</span></div>
    <div className="float-note note-right"><span className="pulse-dot"/><span>Good work.<br/>Real outcomes.</span></div>
    <motion.div className="laptop" animate={{ y: [0, -7, 0] }} transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}>
      <div className="screen-lid"><div className="screen-inner"><div className="screen-camera"/><AnimatePresence mode="wait"><MiniScene key={active} scene={scenes[active]}/></AnimatePresence>{scenes[active].kind !== 'web' && <div className="screen-footer"><span>✳</span> MD HASIB MOZUMDER <span className="screen-counter">0{active + 1} <i/> 0{scenes.length}</span></div>}</div></div>
      <div className="laptop-base"><div className="keyboard"><div className="key-row"/><div className="key-row"/><div className="key-row short-row"/><div className="trackpad"/></div><div className="base-front"/></div>
    </motion.div>
    <div className="orbit orbit-one"/><div className="orbit orbit-two"/>
  </div>;
}
