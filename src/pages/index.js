import React, { useEffect, useRef } from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import styles from "./index.module.css";

// AI-themed SVG icons for modern look
const AIIcon = () => (
  <svg
    width="48"
    height="48"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 2L13.5 8.5L20 7L14.5 12L20 17L13.5 15.5L12 22L10.5 15.5L4 17L9.5 12L4 7L10.5 8.5L12 2Z"
      fill="currentColor"
      opacity="0.8"
    />
    <circle cx="12" cy="12" r="3" fill="currentColor" />
  </svg>
);

const ChatBotIcon = () => (
  <svg
    width="48"
    height="48"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="4"
      y="6"
      width="16"
      height="11"
      rx="3"
      stroke="currentColor"
      strokeWidth="1.5"
      fill="currentColor"
      opacity="0.1"
    />
    <circle cx="8.5" cy="10.5" r="1.5" fill="currentColor" />
    <circle cx="15.5" cy="10.5" r="1.5" fill="currentColor" />
    <path
      d="M8 14C8.5 15 10 15.5 12 15.5C14 15.5 15.5 15 16 14"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path d="M12 17L14 19H10L12 17Z" fill="currentColor" />
  </svg>
);

const CodeIcon = () => (
  <svg
    width="48"
    height="48"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M13 3L11 21"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M8 8L4 12L8 16"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M16 8L20 12L16 16"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const DocumentIcon = () => (
  <svg
    width="48"
    height="48"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M14 2H6C5.45 2 4.95 2.2 4.59 2.59C4.2 2.95 4 3.45 4 4V20C4 20.55 4.2 21.05 4.59 21.41C4.95 21.8 5.45 22 6 22H18C18.55 22 19.05 21.8 19.41 21.41C19.8 21.05 20 20.55 20 20V8L14 2Z"
      fill="currentColor"
      opacity="0.1"
      stroke="currentColor"
      strokeWidth="1.5"
    />
    <path
      d="M14 2V8H20"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M16 13H8M16 17H8M10 9H8"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  const heroRef = useRef(null);
  const lastMousePos = useRef({ x: 0, y: 0 });
  const velocity = useRef({ x: 0, y: 0 });

  // Enhanced AI-themed SVG path helper
  const getIconPath = (idx) => {
    switch (idx) {
      case 0: // AI Brain
        return "M12 2C13.1 2 14 2.9 14 4V6.5C15.8 7.7 17 9.7 17 12C17 14.3 15.8 16.3 14 17.5V20C14 21.1 13.1 22 12 22C10.9 22 10 21.1 10 20V17.5C8.2 16.3 7 14.3 7 12C7 9.7 8.2 7.7 10 6.5V4C10 2.9 10.9 2 12 2Z";
      case 1: // Neural Network
        return "M12 2L13.09 8.26L19 9L13.09 15.74L12 22L10.91 15.74L5 9L10.91 8.26L12 2Z";
      case 2: // Chat Bubble
        return "M21 15C21 15.5304 20.7893 16.0391 20.4142 16.4142C20.0391 16.7893 19.5304 17 19 17H7L3 21V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V15Z";
      case 3: // Processing
        return "M12 6V4M6 12H4M18 12H20M12 18V20M17.657 7.343L19.071 5.929M7.343 17.657L5.929 19.071M17.657 16.657L19.071 18.071M7.343 6.343L5.929 4.929";
      case 4: // Data
        return "M20 6C20 4.9 19.1 4 18 4H6C4.9 4 4 4.9 4 6V10C4 11.1 4.9 12 6 12H18C19.1 12 20 11.1 20 10V6ZM20 14C20 12.9 19.1 12 18 12H6C4.9 12 4 12.9 4 14V18C4 19.1 4.9 20 6 20H18C19.1 20 20 19.1 20 18V14Z";
      case 5: // Algorithm
        return "M9.5 3A6.5 6.5 0 0 1 16 9.5C16 11.11 15.41 12.59 14.44 13.73L14.71 14H15.5L20.5 19L19 20.5L14 15.5V14.71L13.73 14.44C12.59 15.41 11.11 16 9.5 16A6.5 6.5 0 0 1 3 9.5A6.5 6.5 0 0 1 9.5 3M9.5 5C7 5 5 7 5 9.5S7 14 9.5 14S14 12 14 9.5S12 5 9.5 5Z";
      case 6: // Intelligence
        return "M12 1L21.5 6.5V17.5L12 23L2.5 17.5V6.5L12 1ZM12 7.5L5 11V17L12 20.5L19 17V11L12 7.5Z";
      default:
        return "";
    }
  };

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    // Enhanced createIcon function with AI theme
    const createIcon = (x, y, velocityX = 0, velocityY = 0) => {
      const el = document.createElement("div");
      el.className = styles.cursorIcon;
      const randomIcon = Math.floor(Math.random() * 7); // 0-6 for 7 AI-themed icons
      const size = Math.random() * 8 + 20; // 20-28px for better visibility

      // Enhanced SVG with glow effect
      el.innerHTML = `
        <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <filter id="glow-${Date.now()}">
              <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
              <feMerge> 
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          <path d='${getIconPath(randomIcon)}' 
                stroke='currentColor' 
                stroke-width='1.5' 
                fill='none'
                filter="url(#glow-${Date.now()})"/>
        </svg>`;

      // Enhanced positioning with AI particle behavior
      const angle = Math.random() * Math.PI * 2;
      const distance = Math.random() * 30 + 10;
      const offsetX = Math.cos(angle) * distance;
      const offsetY = Math.sin(angle) * distance;

      el.style.left = `${x + offsetX}px`;
      el.style.top = `${y + offsetY}px`;
      el.style.position = "fixed";
      el.style.pointerEvents = "none";
      el.style.color = `hsl(${240 + Math.random() * 60}, 80%, 70%)`;
      el.style.transform = "scale(0) rotate(0deg)";
      el.style.transition = "all 1s cubic-bezier(0.175, 0.885, 0.32, 1.275)";
      el.style.filter = "blur(0px) brightness(1.2)";
      el.style.opacity = "0";
      el.style.zIndex = "9999";

      document.body.appendChild(el);

      // Enhanced animation with AI theme
      const rotation = (Math.random() - 0.5) * 360;
      const moveX = (Math.random() - 0.5) * 80 + velocityX * 2;
      const moveY = -Math.random() * 80 - 40 + velocityY * 2;

      requestAnimationFrame(() => {
        el.style.transform = `scale(1.2) rotate(${rotation}deg) translate(${moveX}px, ${moveY}px)`;
        el.style.opacity = "0.9";
        el.style.filter = "blur(0.5px) brightness(1.5)";
      });

      setTimeout(() => {
        el.style.opacity = "0";
        el.style.transform = `scale(0) rotate(${rotation + 180}deg) translate(${
          moveX * 1.5
        }px, ${moveY * 1.5}px)`;
      }, 600);

      setTimeout(() => {
        el.remove();
      }, 1000);
    };

    // Enhanced mouse move handler
    const handleMouseMove = (e) => {
      const currentX = e.clientX;
      const currentY = e.clientY;
      velocity.current = {
        x: (currentX - lastMousePos.current.x) * 0.5,
        y: (currentY - lastMousePos.current.y) * 0.5,
      };
      lastMousePos.current = { x: currentX, y: currentY };

      const speed = Math.sqrt(
        velocity.current.x ** 2 + velocity.current.y ** 2
      );
      const numIcons = Math.min(Math.floor(speed / 6), 4); // More responsive

      for (let i = 0; i < numIcons; i++) {
        setTimeout(() => {
          createIcon(
            currentX,
            currentY,
            velocity.current.x,
            velocity.current.y
          );
        }, i * 30);
      }
    };

    // Enhanced mouse enter handler
    const handleMouseEnter = (e) => {
      for (let i = 0; i < 12; i++) {
        setTimeout(() => {
          createIcon(e.clientX, e.clientY);
        }, i * 50);
      }
    };

    hero.addEventListener("mousemove", handleMouseMove);
    hero.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      hero.removeEventListener("mousemove", handleMouseMove);
      hero.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, []);

  return (
    <header ref={heroRef} className={styles.heroBanner}>
      {/* Add AI floating elements */}
      <div className={styles.aiFloatingElements}></div>

      <div className={styles.heroContent}>
        <img src="" alt="AI Chat-bot Logo" className={styles.heroLogo} />
        <h1 className={styles.heroTitle}>{siteConfig.title}</h1>
        <p className={styles.heroSubtitle}>
          Intelligent documentation for next-generation AI chat-bot solutions.
          Comprehensive guides for setup, deployment, and advanced features.
        </p>
        <Link className={styles.heroButton} to="/docs/introduction">
          Start Building AI
        </Link>
      </div>
    </header>
  );
}

function HomepageFeatures() {
  // AI-themed feature cards with modern icons and descriptions
  const cards = [
    {
      icon: (
        <span className={clsx(styles.cardIcon, styles.cardIconCyan)}>
          <AIIcon />
        </span>
      ),
      title: "AI Chat-bot Setup",
      desc: "Complete setup guide for deploying intelligent chat-bot systems with advanced AI capabilities and natural language processing.",
      link: "/docs/ai-chat-bot-setup/bot-settings-setup",
      button: "Setup AI Bot",
    },
    {
      icon: (
        <span className={clsx(styles.cardIcon, styles.cardIconBlue)}>
          <ChatBotIcon />
        </span>
      ),
      title: "Bot Management",
      desc: "Advanced chat-bot management tools including conversation handling, user profiles, and intelligent response systems.",
      link: "/docs/ai-chat-bot-setup/chat-bots-management-setup",
      button: "Manage Bots",
    },
    {
      icon: (
        <span className={clsx(styles.cardIcon, styles.cardIconYellow)}>
          <DocumentIcon />
        </span>
      ),
      title: "AI Features & Analytics",
      desc: "Explore intelligent features like sentiment analysis, conversation insights, knowledge management, and performance metrics.",
      link: "/docs/features/ai-chat-bot-features",
      button: "Discover Features",
    },
  ];

  return (
    <section className={styles.cardSection}>
      <div className={styles.cardGrid}>
        {cards.map((card, idx) => (
          <div className={styles.cardModern} key={idx}>
            {card.icon}
            <h2 className={styles.cardTitle}>{card.title}</h2>
            <p className={styles.cardDescription}>{card.desc}</p>
            <Link className={styles.cardButton} to={card.link}>
              {card.button}
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}

function SupportSection() {
  return (
    <section className={styles.supportSection}>
      <h3 className={styles.supportTitle}>Need AI Support?</h3>
      <p className={styles.supportText}>
        Our AI experts are ready to help you build, deploy, and optimize your
        chat-bot solutions.
      </p>
      <div className={styles.supportButtons}>
        <Link className={styles.supportBtn} to="/docs/support">
          Get AI Support
        </Link>
        <Link className={clsx(styles.faqsBtn)} to="/docs/faqs">
          AI FAQs
        </Link>
      </div>
    </section>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={siteConfig.title} description={siteConfig.tagline}>
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <SupportSection />
      </main>
    </Layout>
  );
}
