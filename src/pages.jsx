import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { reveal, SectionLabel, ButtonLink } from './site.jsx';
import { Laptop } from './laptop.jsx';
import portraitImage from './assets/photoforportfolio.jpg';

const services = [
  { n: '01', title: 'SEO that compounds', text: 'Improve search visibility with considered strategy, technical foundations, and useful content.', tags: ['SEO strategy', 'Technical SEO', 'Keyword research'] },
  { n: '02', title: 'Web development', text: 'Build fast, considered websites that make complex things clear and turn visits into conversations.', tags: ['Web development', 'Responsive design', 'Optimization'] },
  { n: '03', title: 'Paid media that performs', text: 'Plan and optimize paid campaigns to reach the right audience and make every advertising decision measurable.', tags: ['Google Ads', 'Meta Ads', 'Campaign analytics'] },
];

export function Home() {
 return <motion.main {...reveal}>
  <section className="hero page-shell"><div className="hero-copy"><SectionLabel>INDEPENDENT DIGITAL PARTNER</SectionLabel><h1>Make your<br/>next move <span>matter.</span></h1><p className="hero-lede">I help ambitious businesses grow with search engine optimization, effective websites, and paid advertising across Google and Meta.</p><div className="availability"><span className="pulse-dot"/> Available for projects</div><div className="hero-actions"><ButtonLink to="/about">Get to know me</ButtonLink><Link to="/contact" className="text-link">Let’s work together <span>↗</span></Link></div><div className="hero-foot"><span>SEO · WEB DEVELOPMENT · PAID MEDIA</span><span className="scroll-cue">SCROLL TO EXPLORE <i>↓</i></span></div></div><div className="hero-art"><div className="art-glow"/><div className="art-index">A little strategy.<br/>A lot of possibility.</div><Laptop/></div></section>
  <section className="intro-strip"><div className="page-shell intro-inner"><span>GOOD DIGITAL WORK STARTS WITH<br/>THE RIGHT QUESTION.</span><p>What could your business do with a clearer story, a better website, and a more useful growth plan?</p><span className="intro-spark">✳</span></div></section>
  <section className="services page-shell"><div className="section-head"><div><SectionLabel>WHAT I BRING TO THE TABLE</SectionLabel><h2>Connected thinking.<br/><span>Practical results.</span></h2></div><p>From the first idea to the final click, I bring the pieces together so your digital presence can do more.</p></div><div className="service-list">{services.map(s=><article className="service-row" key={s.n}><span className="service-number">{s.n}</span><div className="service-main"><h3>{s.title}</h3><p>{s.text}</p><div className="service-tags">{s.tags.map(t=><span key={t}>{t}</span>)}</div></div><span className="service-arrow">↗</span></article>)}</div><div className="service-cta"><span>Have a challenge in mind?</span><ButtonLink to="/contact" secondary>Let’s talk it through</ButtonLink></div></section>
  <section className="quote-section"><div className="page-shell quote-inner"><span className="quote-mark">“</span><blockquote>Good digital work should feel clear, considered, and connected to a real goal.</blockquote><div className="quote-attribution"><span className="quote-line"/> MD HASIB MOZUMDER <span>MY WORKING PRINCIPLE</span></div></div></section>
  <section className="closing-cta page-shell"><div><SectionLabel>YOUR NEXT CHAPTER STARTS HERE</SectionLabel><h2>Let’s make<br/><span>something click.</span></h2></div><ButtonLink to="/contact">Tell me what you’re building</ButtonLink><div className="closing-orbit">✳</div></section>
 </motion.main>
}

export function About() {
 return <motion.main {...reveal}><section className="inner-hero page-shell"><SectionLabel>A LITTLE ABOUT ME</SectionLabel><h1>Curious by nature.<br/><span>Practical by design.</span></h1><p className="inner-lede">I’m Hasib, an independent digital partner helping businesses make their online presence work harder and feel more like them.</p><div className="about-portrait"><div className="portrait-art">
  <img src={portraitImage} alt="Md Hasib Mozumder" />
</div><div><span className="portrait-caption">A NOTE FROM THE STUDIO</span><p>Real progress starts with listening. I take time to understand the people, the problem, and what a good outcome actually looks like.</p></div></div></section>
 <section className="about-story"><div className="page-shell story-grid"><SectionLabel>THE WAY I WORK</SectionLabel><div><h2>Thoughtful from<br/>the <span>first hello.</span></h2><p>Digital can get noisy. My approach is to make it useful: clear thinking, honest collaboration, and work that earns its place in your business.</p><p>My practice brings together search, web development, and digital marketing. That means fewer disconnected tactics and more decisions that support one another, from the foundations of your site to the campaigns that bring people there.</p><p>I connect SEO, web development, and paid media to support business growth.</p></div></div></section>
 <section className="capabilities page-shell"><SectionLabel>AREAS OF FOCUS</SectionLabel><h2>Good at seeing<br/><span>the whole picture.</span></h2><div className="cap-grid">{[['01','Search & visibility','SEO strategy · Technical foundations · Content'],['02','Web & experience','Web development · UX thinking · Performance'],['03','Marketing & growth','Digital strategy · Paid advertising · Analytics']].map(x=><div className="cap-card" key={x[0]}><span>{x[0]}</span><h3>{x[1]}</h3><p>{x[2]}</p></div>)}</div></section>
 <section className="about-note"><div className="page-shell"><span>EXPERIENCE · TOOLKIT · TIMELINE</span><p>Experience, client stories, and tools coming soon.</p></div></section>
 <section className="closing-cta page-shell"><div><SectionLabel>LET’S START WITH A CONVERSATION</SectionLabel><h2>Have a good<br/><span>question?</span></h2></div><ButtonLink to="/contact">Get in touch</ButtonLink><div className="closing-orbit">✳</div></section></motion.main>
}

export function Contact() {
 const [status, setStatus] = useState('');
 const [submitting, setSubmitting] = useState(false);
 async function submit(e) {
  e.preventDefault();
  const formElement = e.currentTarget;
  setSubmitting(true);
  setStatus('');
  try {
   const response = await fetch('https://formspree.io/f/mgaalzzz', {
    method: 'POST',
    body: new FormData(formElement),
    headers: { Accept: 'application/json' },
   });
   const result = await response.json().catch(() => ({}));
   if (!response.ok) {
    setStatus(result.errors?.map(error => error.message).join(' ') || 'Your message could not be sent. Please try again.');
    return;
   }
   setStatus('Thanks for your message. I’ll be in touch soon.');
   formElement.reset();
  } catch {
   setStatus('Could not connect to the form service. Please try again in a moment.');
  } finally {
   setSubmitting(false);
  }
 }
 return <motion.main {...reveal}><section className="contact-hero page-shell"><SectionLabel>START A CONVERSATION</SectionLabel><h1>Have a project<br/><span>on your mind?</span></h1><p className="inner-lede">Tell me where you’re headed, what’s getting in the way, or just what you’re curious about. I’ll get back to you soon.</p></section><section className="contact-area page-shell"><div className="contact-info"><span className="info-label">A GOOD PLACE TO START</span><h2>Tell me a little<br/>about <span>what you need.</span></h2><p>A few details are plenty. We can figure out the rest together.</p><div className="contact-detail"><span>EMAIL</span><a href={`mailto:${import.meta.env.VITE_CONTACT_EMAIL || 'mdhasibmozumder603@gmail.com'}`}>{import.meta.env.VITE_CONTACT_EMAIL || 'mdhasibmozumder603@gmail.com'}</a><small></small></div><div className="contact-detail"><span>BASED IN</span><p>Available to work worldwide</p></div><div className="contact-social"><span>FIND ME ELSEWHERE</span><div><a href="https://www.linkedin.com/in/md-hasib-mozumder-a50355430/" target="_blank" rel="noreferrer">LinkedIn ↗</a><a href="https://github.com/NotHelium277" target="_blank" rel="noreferrer">GitHub ↗</a></div></div></div>
 <form className="contact-form" onSubmit={submit}><label>What should I call you?<input name="name" placeholder="Your name" required autoComplete="name" /></label><label>Where can I reach you?<input type="email" name="email" placeholder="you@example.com" required autoComplete="email" /></label><label>What’s this about?<input name="subject" placeholder="A new website, a growth challenge…" required /></label><label>Tell me a bit more<textarea name="details" rows="5" placeholder="A few sentences about your project or idea" required /></label><button className="button" type="submit" disabled={submitting}>{submitting ? 'Sending…' : 'Send message'} <span>↗</span></button>{status && <p className="form-status" role="status">{status}</p>}</form></section><section className="contact-bottom"><div className="page-shell"><span>NO PRESSURE. NO OBLIGATION.</span><p>Just a thoughtful first conversation.</p><span className="contact-star">✳</span></div></section></motion.main>
}
