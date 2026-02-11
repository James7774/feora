import { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import {
  Download,
  Sun,
  Moon,
  TrendingDown,
  Wallet,
  BarChart3,
  ShieldCheck,
  X,
  ArrowRight,
  ArrowUp,
  Smartphone,
  Settings,
  Rocket,
  Star,
  Quote,
  ChevronDown,
} from 'lucide-react';
import './i18n';
import LanguageSelector from './components/LanguageSelector';
import PhoneMockup from './components/PhoneMockup';

/* ─── Animated Counter Component ─── */
const AnimatedCounter = ({ target, suffix = '' }: { target: number; suffix?: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 2000;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}{suffix}
    </span>
  );
};

function App() {
  const { t } = useTranslation();
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [expandedFeature, setExpandedFeature] = useState<string | null>(null);
  const [openFaq, setOpenFaq] = useState<string | null>(null);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const features = [
    {
      key: 'expense',
      icon: <TrendingDown size={28} />,
      color: '#FF6B6B',
      gradient: 'linear-gradient(135deg, #FF6B6B22, #FF6B6B08)',
      borderColor: '#FF6B6B33',
    },
    {
      key: 'budget',
      icon: <Wallet size={28} />,
      color: '#4ADE80',
      gradient: 'linear-gradient(135deg, #4ADE8022, #4ADE8008)',
      borderColor: '#4ADE8033',
    },
    {
      key: 'analytics',
      icon: <BarChart3 size={28} />,
      color: '#00E0FF',
      gradient: 'linear-gradient(135deg, #00E0FF22, #00E0FF08)',
      borderColor: '#00E0FF33',
    },
    {
      key: 'security',
      icon: <ShieldCheck size={28} />,
      color: '#C084FC',
      gradient: 'linear-gradient(135deg, #C084FC22, #C084FC08)',
      borderColor: '#C084FC33',
    },
  ];

  const stats = [
    { value: 10000, suffix: '+', label: t('stats.downloads'), color: '#6C5DD3' },
    { value: 4.8, suffix: '⭐', label: t('stats.rating'), color: '#FFB800' },
    { value: 5000, suffix: '+', label: t('stats.users'), color: '#4ADE80' },
    { value: 12, suffix: '+', label: t('stats.countries'), color: '#00E0FF' },
  ];

  const steps = [
    { key: 'step1', icon: <Smartphone size={32} />, color: '#6C5DD3' },
    { key: 'step2', icon: <Settings size={32} />, color: '#00E0FF' },
    { key: 'step3', icon: <Rocket size={32} />, color: '#4ADE80' },
  ];

  const testimonials = [
    { key: 'review1', avatar: 'AK', gradient: 'linear-gradient(135deg, #FF9966, #FF5E62)' },
    { key: 'review2', avatar: 'NA', gradient: 'linear-gradient(135deg, #667eea, #764ba2)' },
    { key: 'review3', avatar: 'BT', gradient: 'linear-gradient(135deg, #11998e, #38ef7d)' },
  ];

  const faqItems = ['q1', 'q2', 'q3', 'q4'];

  return (
    <>
      {/* Background Effects */}
      <div className="background-globes">
        <div className="globe globe-1"></div>
        <div className="globe globe-2"></div>
        <div className="globe globe-3"></div>
      </div>

      {/* Navbar */}
      <nav className="navbar">
        <div className="container">
          <div className="logo">
            <span className="title-fi">Fi</span>nova
          </div>
          <div className="nav-actions">
            <div className="nav-links">
              <a href="#features">{t('nav.features')}</a>
              <a href="#about">{t('nav.about')}</a>
            </div>
            <LanguageSelector />
            <button className="btn-icon" onClick={toggleTheme} aria-label="Toggle theme">
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <a href="/app-debug.apk" download="Finova.apk" className="btn-nav">
              {t('nav.download')}
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero" id="about">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <span className="badge">{t('hero.badge')}</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                {t('hero.title1')}{' '}
                <span className="gradient-text">{t('hero.title2')}</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {t('hero.description')}
              </motion.p>

              <motion.div
                className="cta-group"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <a href="/app-debug.apk" download="Finova.apk" className="btn-primary" id="download">
                  <Download size={20} />
                  {t('hero.downloadApp')}
                </a>
                <span className="version-info">{t('hero.version')}</span>
              </motion.div>
            </div>

            <div className="hero-visual">
              <PhoneMockup />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="stat-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="stat-value" style={{ color: stat.color }}>
                  {stat.suffix === '⭐' ? (
                    <><AnimatedCounter target={stat.value} />{' '}⭐</>
                  ) : (
                    <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                  )}
                </div>
                <div className="stat-label">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features" id="features">
        <div className="container">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {t('features.title')}
          </motion.h2>

          <div className="feature-grid">
            {features.map((feature, index) => (
              <motion.div
                key={feature.key}
                className={`feature-card ${expandedFeature === feature.key ? 'feature-card-expanded' : ''}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                style={{
                  background: expandedFeature === feature.key ? feature.gradient : undefined,
                  borderColor: expandedFeature === feature.key ? feature.borderColor : undefined,
                }}
              >
                <div
                  className="feature-icon"
                  style={{ color: feature.color, background: `${feature.color}18` }}
                >
                  {feature.icon}
                </div>
                <h3>{t(`features.${feature.key}.title`)}</h3>
                <p>{t(`features.${feature.key}.description`)}</p>

                <AnimatePresence mode="wait">
                  {expandedFeature === feature.key ? (
                    <motion.div
                      key="details"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.35, ease: 'easeInOut' }}
                      className="feature-details"
                    >
                      <p className="feature-details-text">
                        {t(`features.${feature.key}.details`)}
                      </p>
                      <button
                        className="feature-close-btn"
                        onClick={() => setExpandedFeature(null)}
                      >
                        <X size={16} />
                        {t('features.close')}
                      </button>
                    </motion.div>
                  ) : (
                    <motion.button
                      key="learn-more"
                      className="feature-learn-more"
                      onClick={() => setExpandedFeature(feature.key)}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      style={{ color: feature.color }}
                    >
                      {t('features.learnMore')}
                      <ArrowRight size={16} />
                    </motion.button>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works">
        <div className="container">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {t('howItWorks.title')}
          </motion.h2>

          <div className="steps-grid">
            {steps.map((step, index) => (
              <motion.div
                key={step.key}
                className="step-card"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
              >
                <div className="step-number" style={{ background: `${step.color}20`, color: step.color }}>
                  {index + 1}
                </div>
                <div className="step-icon-wrapper" style={{ background: `${step.color}15`, border: `1px solid ${step.color}30` }}>
                  <div style={{ color: step.color }}>{step.icon}</div>
                </div>
                <h3>{t(`howItWorks.${step.key}.title`)}</h3>
                <p>{t(`howItWorks.${step.key}.description`)}</p>
                {index < steps.length - 1 && <div className="step-connector" />}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <div className="container">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {t('testimonials.title')}
          </motion.h2>

          <div className="testimonials-grid">
            {testimonials.map((review, index) => (
              <motion.div
                key={review.key}
                className="testimonial-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
              >
                <div className="testimonial-quote">
                  <Quote size={24} />
                </div>
                <p className="testimonial-text">{t(`testimonials.${review.key}.text`)}</p>
                <div className="testimonial-author">
                  <div className="testimonial-avatar" style={{ background: review.gradient }}>
                    {review.avatar}
                  </div>
                  <div className="testimonial-info">
                    <strong>{t(`testimonials.${review.key}.name`)}</strong>
                    <span>{t(`testimonials.${review.key}.role`)}</span>
                  </div>
                  <div className="testimonial-stars">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} fill="#FFB800" color="#FFB800" />
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="container">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {t('faq.title')}
          </motion.h2>

          <div className="faq-list">
            {faqItems.map((key, index) => (
              <motion.div
                key={key}
                className={`faq-item ${openFaq === key ? 'faq-item-open' : ''}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <button
                  className="faq-question"
                  onClick={() => setOpenFaq(openFaq === key ? null : key)}
                >
                  <span>{t(`faq.${key}.question`)}</span>
                  <ChevronDown
                    size={20}
                    style={{
                      transform: openFaq === key ? 'rotate(180deg)' : 'rotate(0)',
                      transition: 'transform 0.3s ease',
                    }}
                  />
                </button>
                <AnimatePresence>
                  {openFaq === key && (
                    <motion.div
                      className="faq-answer"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <p>{t(`faq.${key}.answer`)}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <b>Fi</b>nova
            </div>
            <div className="footer-links">
              <a href="#privacy">{t('footer.privacy')}</a>
              <a href="#terms">{t('footer.terms')}</a>
              <a href="#contact">{t('footer.contact')}</a>
            </div>
          </div>
          <p className="copyright">{t('footer.copyright')}</p>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            className="scroll-to-top"
            onClick={scrollToTop}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.3 }}
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}

export default App;
