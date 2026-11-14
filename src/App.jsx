import { useCallback, useEffect, useRef, useState } from 'react';
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Award,
  Check,
  ChevronDown,
  Code2,
  Copy,
  Download,
  ExternalLink,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  Menu,
  Moon,
  Phone,
  Sun,
  X,
} from 'lucide-react';
import {
  ACHIEVEMENTS,
  EDUCATION,
  EXPERIENCE,
  PASSION,
  PROFILE,
  PROJECTS,
  SKILLS,
  STATS,
  SUMMARY,
} from './data';

const RESUME_PATH = PROFILE.resume;

function useReveal() {
  useEffect(() => {
    const elements = [...document.querySelectorAll('.reveal:not(.is-visible)')];
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced || !('IntersectionObserver' in window)) {
      elements.forEach((element) => element.classList.add('is-visible'));
      return undefined;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -6% 0px' },
    );
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);
}

function useCountUp(target, decimals = 0) {
  const ref = useRef(null);
  const [value, setValue] = useState(0);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced || !('IntersectionObserver' in window)) {
      setValue(target);
      return undefined;
    }
    let frame = 0;
    let started = false;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting || started) return;
      started = true;
      const start = performance.now();
      const duration = 1050;
      const tick = (now) => {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setValue(target * eased);
        if (progress < 1) frame = requestAnimationFrame(tick);
      };
      frame = requestAnimationFrame(tick);
      observer.disconnect();
    }, { threshold: 0.55 });
    observer.observe(node);
    return () => {
      observer.disconnect();
      if (frame) cancelAnimationFrame(frame);
    };
  }, [target]);

  const formatted = decimals ? value.toFixed(decimals) : Math.round(value).toString();
  return [ref, formatted];
}

function SectionHeading({ number, label, title, description }) {
  return (
    <div className="section-heading reveal">
      <div className="eyebrow-row">
        <span className="section-number">{number}</span>
        <span className="eyebrow-slash">/</span>
        <span className="eyebrow">{label}</span>
      </div>
      <h2 className="section-title">{title}</h2>
      {description ? <p className="section-description">{description}</p> : null}
    </div>
  );
}

function ExternalLinkButton({ href, children, className = '' }) {
  if (!href) return null;
  return (
    <a className={`button button-outline button-small ${className}`} href={href} target="_blank" rel="noreferrer">
      {children}
      <ExternalLink size={14} strokeWidth={1.8} />
    </a>
  );
}

function Nav({ theme, onToggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const navItems = [
    ['About', '#about'],
    ['Experience', '#experience'],
    ['Projects', '#projects'],
    ['Skills', '#skills'],
    ['Education', '#education'],
    ['Contact', '#contact'],
  ];

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <div className="nav-shell">
        <a className="brand" href="#top" onClick={closeMenu} aria-label="Namra Vora, back to top">
          <span className="brand-mark">NV</span>
          <span className="brand-divider" />
          <span className="brand-name">NAMRA VORA</span>
        </a>

        <nav className={`nav-links ${menuOpen ? 'nav-links-open' : ''}`} aria-label="Main navigation">
          {navItems.map(([label, href]) => (
            <a key={href} href={href} onClick={closeMenu}>{label}</a>
          ))}
        </nav>

        <div className="nav-actions">
          <button className="theme-toggle" type="button" onClick={onToggleTheme} aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`} title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}>
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button className="mobile-menu-toggle" type="button" onClick={() => setMenuOpen((open) => !open)} aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={menuOpen}>
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>
    </header>
  );
}

function ResumeButton({ compact = false }) {
  if (RESUME_PATH) {
    return (
      <a className={`button button-outline ${compact ? 'button-small' : ''}`} href={RESUME_PATH} download>
        <Download size={17} /> Download Resume
      </a>
    );
  }
  return (
    <button className={`button button-outline resume-pending ${compact ? 'button-small' : ''}`} type="button" disabled title="Add your resume PDF to public/assets/Namra-Vora-Resume.pdf to enable this button">
      <Download size={17} /> Resume PDF pending
    </button>
  );
}

function Hero() {
  return (
    <section className="hero-section page-shell" id="top">
      <div className="hero-copy">
        <div className="status-chip reveal">
          <span className="status-dot" />
          <span>{PROFILE.status}</span>
        </div>
        <p className="hero-kicker reveal">SOFTWARE ENGINEER <span>·</span> BACKEND <span>·</span> FULL-STACK <span>·</span> AI</p>
        <h1 className="hero-title reveal">
          I build <span className="ink-underline">backends</span> that hold up, and <span className="ink-underline">AI features</span> that actually work.
        </h1>
        <p className="hero-promise reveal">{PROFILE.promise}</p>
        <div className="hero-actions reveal">
          <a className="button button-primary" href="#projects">View Projects <ArrowRight size={17} /></a>
          <ResumeButton />
          <a className="button button-outline" href="#contact"><Mail size={17} /> Contact</a>
        </div>
        <div className="hero-meta reveal">
          <span className="hero-meta-line" />
          <span>REST APIs · DATABASE DESIGN · BACKGROUND JOBS</span>
          <ArrowDownRight size={15} />
        </div>
      </div>

      <div className="hero-visual reveal">
        <span className="portrait-location">GUJARAT, INDIA</span>
        <div className="portrait-frame">
          <div className="portrait-frame-inner">
            <img src={PROFILE.photo} alt="Namra Vora standing outdoors in front of green trees" fetchPriority="high" />
          </div>
        </div>
        <span className="portrait-index">FIG. 01 — ENGINEER AT WORK</span>
      </div>
    </section>
  );
}

function Stat({ stat }) {
  const [ref, value] = useCountUp(stat.value, stat.decimals || 0);
  return (
    <div className="stat-item" ref={ref}>
      <div className="stat-value">{value}<span>{stat.suffix}</span></div>
      <div className="stat-label">{stat.label}</div>
    </div>
  );
}

function About() {
  return (
    <section className="section page-shell" id="about">
      <SectionHeading number="02" label="ABOUT" title="Reliable systems, grounded AI" />
      <div className="about-layout">
        <div className="about-main reveal">
          <p className="about-summary">{SUMMARY}</p>
          <div className="passion-list">
            {PASSION.map((line) => <p key={line}>{line}</p>)}
          </div>
        </div>
        <aside className="quick-facts reveal" aria-label="Quick facts">
          <p className="mini-label">QUICK FACTS</p>
          <div className="fact-row"><span>Degree</span><strong>B.Tech IT · CGPA 8.56</strong></div>
          <div className="fact-row"><span>DSA</span><strong>300+ LeetCode solved</strong></div>
          <div className="fact-row"><span>Based in</span><strong>Gujarat, India</strong></div>
        </aside>
      </div>
      <div className="stats-strip reveal">
        {STATS.map((stat) => <Stat key={stat.label} stat={stat} />)}
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section className="section page-shell" id="experience">
      <SectionHeading number="03" label="EXPERIENCE" title="In production" />
      <div className="experience-timeline reveal">
        <div className="timeline-marker" />
        <div className="experience-content">
          <div className="experience-topline">
            <div>
              <h3>{EXPERIENCE.role}</h3>
              <p className="experience-company">{EXPERIENCE.company} <span>·</span> Project: {EXPERIENCE.project}</p>
            </div>
            <span className="experience-period">{EXPERIENCE.period}</span>
          </div>
          <ul className="bullet-list experience-bullets">
            {EXPERIENCE.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
          </ul>
          <div className="tag-list">
            {EXPERIENCE.tech.map((item) => <span className="tech-tag" key={item}>{item}</span>)}
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectSketch({ project }) {
  return (
    <div className="project-sketch" aria-label={`${project.title} conceptual system map`}>
      <div className="sketch-head"><span>SYSTEM MAP</span><span>0{project.no}</span></div>
      <div className="sketch-flow">
        {project.diagram.map((node, index) => (
          <div className={`sketch-node ${index === 1 ? 'sketch-node-accent' : ''}`} key={node}>
            <span className="sketch-node-index">{String(index + 1).padStart(2, '0')}</span>
            <span>{node}</span>
            {index < project.diagram.length - 1 ? <span className="sketch-connector" aria-hidden="true" /> : null}
          </div>
        ))}
      </div>
      <div className="sketch-foot"><span>CONCEPTUAL FLOW · NOT A PRODUCT SCREENSHOT</span><span>↗</span></div>
    </div>
  );
}

function ProjectCard({ project, index }) {
  const [expanded, setExpanded] = useState(false);
  return (
    <article className={`project-card reveal ${index % 2 === 1 ? 'project-card-reverse' : ''}`}>
      <div className="project-visual-panel">
        <div className="case-file-label">CASE FILE</div>
        <div className="case-file-number">{project.no}</div>
        <ProjectSketch project={project} />
      </div>
      <div className="project-details">
        <div className="project-title-row">
          <div>
            <h3>{project.title}</h3>
            <p className="project-tagline">{project.tagline}</p>
          </div>
          <span className="project-index">/{project.no}</span>
        </div>
        <p className="project-summary">{project.summary}</p>
        <ul className="bullet-list project-bullets">
          {(expanded ? project.bullets : project.bullets.slice(0, 1)).map((bullet) => <li key={bullet}>{bullet}</li>)}
        </ul>
        {project.bullets.length > 1 ? (
          <button className="read-more-button" type="button" onClick={() => setExpanded((current) => !current)} aria-expanded={expanded}>
            {expanded ? 'Show less' : 'Read more'} <ChevronDown size={15} className={expanded ? 'chevron-up' : ''} />
          </button>
        ) : null}
        <div className="tag-list project-tags">
          {project.tech.map((item) => <span className="tech-tag" key={item}>{item}</span>)}
        </div>
        <div className="project-links">
          <ExternalLinkButton href={project.github}><Github size={15} /> GitHub</ExternalLinkButton>
          <ExternalLinkButton href={project.live}>Live Demo</ExternalLinkButton>
        </div>
      </div>
    </article>
  );
}

function Projects() {
  return (
    <section className="section page-shell" id="projects">
      <SectionHeading
        number="04"
        label="SELECTED WORK"
        title="Projects, as case files"
        description="Five systems across backend architecture, full-stack platforms and grounded AI features."
      />
      <div className="projects-list">
        {PROJECTS.map((project, index) => <ProjectCard key={project.no} project={project} index={index} />)}
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section className="section page-shell" id="skills">
      <SectionHeading number="05" label="TOOLKIT" title="Skills, grouped" description="What I reach for across backend, frontend, data and AI work." />
      <div className="skills-grid">
        {SKILLS.map((group, index) => (
          <article className="skill-card reveal" key={group.group}>
            <div className="skill-card-heading">
              <span>{String(index + 1).padStart(2, '0')}</span>
              <h3>{group.group}</h3>
            </div>
            <div className="tag-list">
              {group.items.map((item) => <span className="tech-tag" key={item}>{item}</span>)}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Education() {
  return (
    <section className="section page-shell" id="education">
      <SectionHeading number="06" label="BACKGROUND" title="Education & achievements" />
      <div className="education-layout">
        <div className="education-list">
          {EDUCATION.map((item) => (
            <article className="education-card reveal" key={item.degree}>
              <GraduationCap className="education-icon" size={22} strokeWidth={1.7} />
              <div className="education-card-main">
                <div className="education-card-top">
                  <h3>{item.degree}</h3>
                  <span>{item.period}</span>
                </div>
                <p>{item.school}</p>
                <span className="grade-chip">{item.detail}</span>
              </div>
            </article>
          ))}
        </div>
        <aside className="achievements-card reveal">
          <div className="achievement-heading"><Award size={21} /><span className="mini-label">ACHIEVEMENTS</span></div>
          <ol>
            {ACHIEVEMENTS.map((item, index) => (
              <li key={item}><span>{String(index + 1).padStart(2, '0')}</span><p>{item}</p></li>
            ))}
          </ol>
        </aside>
      </div>
    </section>
  );
}

function Contact() {
  const [copied, setCopied] = useState(false);
  const copyEmail = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(PROFILE.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${PROFILE.email}`;
    }
  }, []);

  return (
    <section className="contact-section page-shell" id="contact">
      <div className="contact-blueprint reveal">
        <div className="contact-content">
          <div className="eyebrow-row"><span className="section-number">07</span><span className="eyebrow-slash">/</span><span className="eyebrow">CONTACT</span></div>
          <h2>Have a problem worth <span className="ink-underline">solving</span>?</h2>
          <p>I'm open to Backend, Full-Stack and AI-application engineering opportunities.</p>
          <a className="button button-primary contact-primary" href={`mailto:${PROFILE.email}`}>Start a conversation <ArrowUpRight size={17} /></a>
        </div>
        <div className="contact-details">
          <div className="contact-row">
            <Mail size={18} />
            <div><span className="mini-label">EMAIL</span><a href={`mailto:${PROFILE.email}`}>{PROFILE.email}</a></div>
            <button className="copy-button" type="button" onClick={copyEmail} aria-label="Copy email address" title="Copy email address">{copied ? <Check size={17} /> : <Copy size={17} />}</button>
          </div>
          <div className="contact-row">
            <Phone size={18} />
            <div><span className="mini-label">PHONE</span><a href="tel:+917016304912">{PROFILE.phone}</a></div>
          </div>
          <div className="contact-socials">
            <a href={PROFILE.links.linkedin} target="_blank" rel="noreferrer"><Linkedin size={17} /> LinkedIn <ArrowUpRight size={14} /></a>
            <a href={PROFILE.links.github} target="_blank" rel="noreferrer"><Github size={17} /> GitHub <ArrowUpRight size={14} /></a>
            <a href={PROFILE.links.leetcode} target="_blank" rel="noreferrer"><Code2 size={17} /> LeetCode <ArrowUpRight size={14} /></a>
          </div>
          <p className={`copy-feedback ${copied ? 'copy-feedback-visible' : ''}`} role="status" aria-live="polite">Email copied to clipboard.</p>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer page-shell">
      <a className="footer-brand" href="#top">NV <span>· NAMRA VORA</span></a>
      <span>SOFTWARE ENGINEER · GUJARAT, INDIA</span>
      <a className="back-to-top" href="#top">Back to top <ArrowUpRight size={14} /></a>
    </footer>
  );
}

export default function App() {
  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem('nv-theme') || (document.documentElement.classList.contains('dark') ? 'dark' : 'light');
    } catch {
      return 'light';
    }
  });

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    try { localStorage.setItem('nv-theme', theme); } catch { /* Storage may be disabled. */ }
  }, [theme]);

  useReveal();

  const toggleTheme = () => setTheme((current) => current === 'dark' ? 'light' : 'dark');

  return (
    <div className="site-root">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <Nav theme={theme} onToggleTheme={toggleTheme} />
      <main id="main-content">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}