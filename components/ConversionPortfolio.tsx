import Image, { type StaticImageData } from 'next/image';
import {
  ArrowRight,
  Check,
  ExternalLink,
  Layers3,
  Lightbulb,
  MessageCircle,
  MoveRight,
  Rocket,
  ShoppingBag,
  Sparkles,
} from 'lucide-react';
import styles from './ConversionPortfolio.module.css';

import taxIq from '@/public/assets/images/TIQA.webp';
import pentagreen from '@/public/assets/images/pentagreen.png';
import onePeople from '@/public/assets/images/onepeople.webp';
import scopeHome from '@/public/assets/images/scopehomeaccess.png';

const emailHref =
  'mailto:johncarlosacrosalazar@gmail.com?subject=Website%20project%20inquiry&body=Hi%20John%2C%0A%0AI%27d%20like%20to%20discuss%20a%20website%20project.%0A%0ABusiness%3A%0AWhat%20I%20need%3A%0ATimeline%3A%0ABudget%20range%3A';

type CaseStudy = {
  number: string;
  eyebrow: string;
  title: string;
  description: string;
  outcome: string;
  tags: string[];
  image: StaticImageData;
  href: string;
  imageClass?: string;
};

const caseStudies: CaseStudy[] = [
  {
    number: '01',
    eyebrow: 'Education commerce',
    title: 'Tax IQ Academy',
    description:
      'A conversion-focused course platform that brings learning, checkout, lead capture, and follow-up automation into one customer journey.',
    outcome: 'One flexible system now powers 6+ white-label academy brands.',
    tags: ['WordPress', 'LearnPress', 'WooCommerce', 'GoHighLevel'],
    image: taxIq,
    href: 'https://taxiqacademy.com/',
    imageClass: styles.imageTop,
  },
  {
    number: '02',
    eyebrow: 'Corporate website',
    title: 'Pentagreen Capital',
    description:
      'A confident corporate experience for a sustainable infrastructure financing platform operating across Southeast Asia.',
    outcome: 'Complex investment work presented with clarity and credibility.',
    tags: ['Web design', 'Responsive build', 'Corporate UX', 'Performance'],
    image: pentagreen,
    href: 'https://www.pentagreen.com/index.html',
    imageClass: styles.imageTop,
  },
  {
    number: '03',
    eyebrow: 'Custom web platform',
    title: 'OnePeople Online',
    description:
      'A responsive social platform for global dialogue, voting, messaging, user profiles, and community participation.',
    outcome: 'A complex product shaped into a calm, approachable interface.',
    tags: ['React', 'Node.js', 'Product UI', 'AWS'],
    image: onePeople,
    href: 'https://onepeople.online/',
  },
];

const services = [
  {
    icon: Rocket,
    title: 'Marketing websites',
    text: 'Positioning, design, and development for service businesses that need a sharper story and more qualified inquiries.',
    list: ['Landing pages', 'Company websites', 'Website redesigns'],
  },
  {
    icon: ShoppingBag,
    title: 'E-commerce & academies',
    text: 'Conversion-ready stores and learning platforms with payments, automation, and a customer journey built in.',
    list: ['WooCommerce', 'Online courses', 'Lead automation'],
  },
  {
    icon: Layers3,
    title: 'Custom web platforms',
    text: 'Purpose-built portals, dashboards, and business tools when an off-the-shelf template cannot do the job.',
    list: ['Client portals', 'Admin systems', 'AI integrations'],
  },
];

export default function ConversionPortfolio() {
  return (
    <main className={styles.site}>
      <header className={styles.header}>
        <a className={styles.brand} href="#top" aria-label="John Carlo Salazar, home">
          <span className={styles.brandMark}>Jc</span>
          <span className={styles.brandCopy}>
            <strong>John Carlo Salazar</strong>
            <small>Web developer</small>
          </span>
        </a>
        <nav className={styles.nav} aria-label="Main navigation">
          <a href="#work">Work</a>
          <a href="#services">Services</a>
          <a href="#process">Process</a>
          <a href="/cv">CV</a>
        </nav>
        <div className={styles.headerActions}>
          <a className={styles.mobileCvLink} href="/cv">CV</a>
          <a className={styles.headerCta} href={emailHref}>
            Start a project <span><ArrowRight size={15} aria-hidden="true" /></span>
          </a>
        </div>
      </header>

      <section className={styles.hero} id="top">
        <div className={styles.heroCopy}>
          <div className={styles.availability}>
            <span /> Available for select web projects
          </div>
          <h1>
            Websites that make your next client <em>say yes.</em>
          </h1>
          <p className={styles.heroLead}>
            I design and build polished, conversion-focused websites for service businesses,
            educators, and ambitious teams—without the agency runaround.
          </p>
          <div className={styles.heroActions}>
            <a className={styles.primaryButton} href={emailHref}>
              Tell me about your project <ArrowRight size={18} aria-hidden="true" />
            </a>
            <a className={styles.textLink} href="#work">
              See selected work <MoveRight size={18} aria-hidden="true" />
            </a>
          </div>
          <div className={styles.trustLine} aria-label="Experience highlights">
            <div><strong>10+</strong><span>years building for the web</span></div>
            <div><strong>30+</strong><span>platforms launched</span></div>
            <div><strong>PH → Global</strong><span>remote collaboration</span></div>
          </div>
        </div>

        <div className={styles.heroVisual} aria-label="Selected website work by John Carlo Salazar">
          <div className={styles.showcaseGlow} />
          <svg className={styles.constellation} viewBox="0 0 760 630" aria-hidden="true">
            <g className={styles.constellationLines}>
              <path d="M42 128 132 76 220 138 304 62 392 126 492 72 596 132 708 82" />
              <path d="M42 128 94 240 184 292 116 390 210 500 310 448 404 540" />
              <path d="M220 138 184 292 292 254 392 126 474 244 596 132" />
              <path d="M474 244 570 310 688 252 642 402 708 508 580 548 488 470" />
              <path d="M292 254 310 448 404 540 488 470 570 310" />
            </g>
            <g className={styles.constellationNodes}>
              <circle cx="42" cy="128" r="5" /><circle cx="132" cy="76" r="3" />
              <circle cx="220" cy="138" r="4" /><circle cx="304" cy="62" r="3" />
              <circle cx="392" cy="126" r="5" /><circle cx="492" cy="72" r="3" />
              <circle cx="596" cy="132" r="4" /><circle cx="708" cy="82" r="3" />
              <circle cx="94" cy="240" r="3" /><circle cx="184" cy="292" r="5" />
              <circle cx="116" cy="390" r="3" /><circle cx="210" cy="500" r="4" />
              <circle cx="310" cy="448" r="3" /><circle cx="404" cy="540" r="5" />
              <circle cx="292" cy="254" r="3" /><circle cx="474" cy="244" r="4" />
              <circle cx="570" cy="310" r="3" /><circle cx="688" cy="252" r="5" />
              <circle cx="642" cy="402" r="3" /><circle cx="708" cy="508" r="4" />
              <circle cx="580" cy="548" r="3" /><circle cx="488" cy="470" r="5" />
            </g>
          </svg>
          <div className={styles.showcaseBrowser}>
            <div className={styles.showcaseBar}>
              <div><i /><i /><i /></div>
              <span>taxiqacademy.com</span>
              <b>↗</b>
            </div>
            <div className={styles.showcaseScreen}>
              <Image
                src={taxIq}
                alt="Tax IQ Academy website preview"
                priority
                fill
                className={styles.showcaseImage}
                sizes="(max-width: 900px) 90vw, 42vw"
              />
            </div>
            <div className={styles.showcaseCaption}>
              <div><span>Featured build</span><strong>Tax IQ Academy</strong></div>
              <p>Strategy · UX · Development</p>
            </div>
          </div>
          <div className={`${styles.projectPeek} ${styles.projectPeekLeft}`}>
            <Image src={pentagreen} alt="Pentagreen Capital website preview" fill sizes="190px" />
            <span>Pentagreen Capital</span>
          </div>
          <div className={`${styles.projectPeek} ${styles.projectPeekBottom}`}>
            <Image src={onePeople} alt="OnePeople web platform preview" fill sizes="210px" />
            <span>OnePeople Platform</span>
          </div>
          <div className={`${styles.projectPeek} ${styles.projectPeekRight}`}>
            <Image src={scopeHome} alt="Scope Home Access website preview" fill sizes="190px" />
            <span>Scope Home Access</span>
          </div>
        </div>
      </section>

      <section className={styles.clientStrip} aria-label="Selected clients and projects">
        <p>Trusted to deliver for</p>
        <div>
          <span>Temasek Foundation</span>
          <span>Tax IQ Academy</span>
          <span>Pentagreen Capital</span>
          <span>Scope Home Access</span>
          <span>OnePeople</span>
        </div>
      </section>

      <section className={styles.workSection} id="work">
        <div className={styles.sectionIntro}>
          <span className={styles.kicker}>Selected work</span>
          <h2>Built to look sharp.<br />Designed to do a job.</h2>
          <p>Every project starts with the business goal, then earns its polish.</p>
        </div>

        <div className={styles.caseList}>
          {caseStudies.map((project, index) => (
            <article className={styles.caseStudy} key={project.title}>
              <div className={`${styles.caseVisual} ${index % 2 ? styles.caseVisualAlt : ''}`}>
                <div className={styles.browserBar}>
                  <i /><i /><i /><span>{project.title.toLowerCase().replaceAll(' ', '')}.com</span>
                </div>
                <div className={styles.caseImageFrame}>
                  <Image
                    src={project.image}
                    alt={`${project.title} website preview`}
                    fill
                    className={project.imageClass || ''}
                    sizes="(max-width: 900px) 100vw, 55vw"
                  />
                </div>
              </div>
              <div className={styles.caseCopy}>
                <div className={styles.caseMeta}>
                  <span className={styles.caseNumber}>{project.number}</span>
                  <span className={styles.caseEyebrow}>{project.eyebrow}</span>
                </div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className={styles.outcome}><Check size={17} /> {project.outcome}</div>
                <ul className={styles.tags} aria-label={`${project.title} technologies`}>
                  {project.tags.map(tag => <li key={tag}>{tag}</li>)}
                </ul>
                <a href={project.href} target="_blank" rel="noreferrer" className={styles.caseLink}>
                  Visit live website <ExternalLink size={15} aria-hidden="true" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.servicesSection} id="services">
        <div className={styles.sectionIntro}>
          <span className={styles.kicker}>Ways to work together</span>
          <h2>The right website<br />for where your<br />business <em>is going.</em></h2>
          <p>From marketing sites to e-commerce stores and custom platforms,<br className={styles.desktopBreak} /> I build web solutions that help you grow, convert, and scale.</p>
        </div>
        <div className={styles.serviceGrid}>
          {services.map(({ icon: Icon, title, text, list }, index) => (
            <article className={`${styles.serviceCard} ${index === 1 ? styles.featuredService : ''}`} key={title}>
              <div className={styles.serviceTop}>
                <div className={styles.serviceIcon}><Icon size={25} aria-hidden="true" /></div>
                <span>0{index + 1}<i /></span>
              </div>
              <h3>{title}</h3>
              <p>{text}</p>
              <ul>{list.map(item => <li key={item}><Check size={14} /> {item}</li>)}</ul>
              {index === 1 && <div className={styles.popularBadge}>Most popular</div>}
            </article>
          ))}
        </div>
        <div className={styles.serviceNote}>
          <span><Lightbulb size={18} aria-hidden="true" /></span>
          <p>Not sure which fits? <a href={emailHref}>Send me the rough idea</a> and I’ll point you in the right direction.</p>
        </div>
      </section>

      <section className={styles.processSection} id="process">
        <div className={styles.processIntro}>
          <span className={styles.kicker}>A clear process</span>
          <h2>From scattered<br />ideas to a website<br /><em>you’re proud to</em><br />send people to.</h2>
          <p>You work directly with the person designing and building your site. Fewer handoffs, faster decisions, and no mystery about what happens next.</p>
        </div>
        <ol className={styles.processList}>
          <li><span>01</span><div><h3>Find the signal</h3><p>We clarify the audience, offer, goals, and content your site needs to win attention.</p></div></li>
          <li><span>02</span><div><h3>Shape the experience</h3><p>I turn the strategy into a distinctive, responsive design with a clear path to action.</p></div></li>
          <li><span>03</span><div><h3>Build & launch</h3><p>I develop, test, and launch the finished experience—then make handover simple.</p></div></li>
        </ol>
      </section>

      <section className={styles.fitSection}>
        <p className={styles.fitLead}>A good fit if...</p>
        <div className={styles.fitGrid}>
          <div><span><Sparkles size={25} /></span><p>Your current site no longer reflects the quality of your work.</p></div>
          <div><span><Sparkles size={25} /></span><p>You have a strong offer but struggle to explain it clearly online.</p></div>
          <div><span><Sparkles size={25} /></span><p>You want one accountable partner from first idea through launch.</p></div>
          <div><span><Sparkles size={25} /></span><p>You need custom functionality—not another fragile template.</p></div>
        </div>
      </section>

      <section className={styles.faqSection}>
        <div className={styles.sectionIntro}>
          <span className={styles.kicker}>Good to know</span>
          <h2>A few questions, answered.</h2>
        </div>
        <div className={styles.faqList}>
          <details><summary>What kinds of clients do you work with?</summary><p>I work best with service businesses, educators, and growing teams that value thoughtful design, clear communication, and a reliable technical build.</p></details>
          <details><summary>Can you redesign my existing website?</summary><p>Yes. I can keep what is already working, improve the positioning and user journey, and rebuild the experience around your current business goals.</p></details>
          <details><summary>Do you handle both design and development?</summary><p>Yes. Strategy, interface design, responsive development, integrations, testing, and launch can all stay with one partner.</p></details>
          <details><summary>How do we get started?</summary><p>Send a short note with your business, what you want the website to achieve, your ideal timeline, and a budget range. I’ll reply with next steps and whether I’m the right fit.</p></details>
        </div>
      </section>

      <section className={styles.contactSection} id="contact">
        <div>
          <span className={styles.kicker}>Have a project in mind?</span>
          <h2>Let’s make your website your best salesperson.</h2>
          <p>Tell me what you’re building, what’s not working, and where you want to go. You’ll get a practical reply—not a sales script.</p>
        </div>
        <div className={styles.contactActions}>
          <a className={styles.primaryButton} href={emailHref}>
            Start the conversation <ArrowRight size={18} />
          </a>
          <a className={styles.whatsappButton} href="https://wa.me/639273315906" target="_blank" rel="noreferrer">
            <MessageCircle size={18} /> Message on WhatsApp
          </a>
          <small>Usually replies within 1 business day</small>
        </div>
      </section>

      <footer className={styles.footer}>
        <a className={styles.brand} href="#top"><span className={styles.brandMark}>JC</span><span>John Carlo Salazar</span></a>
        <p>Independent web designer & developer · Cavite, Philippines · Working worldwide</p>
        <div><a href="mailto:johncarlosacrosalazar@gmail.com">Email</a><a href="https://www.linkedin.com/in/john-carlo-salazar-8028083b6/" target="_blank" rel="noreferrer">LinkedIn</a></div>
      </footer>
    </main>
  );
}
