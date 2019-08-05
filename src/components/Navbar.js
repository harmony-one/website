import React, { Component } from 'react';

import styles from './sticky-nav-bar.module.scss';

const ABOUT_US = [
  { title: 'Team', to: '#harmony_team__block' },
  { title: 'Partners', to: '#partner__block' },
  { title: 'Investors', to: '#investor__block' },
];

const NODE = [
  { title: 'Foundation Nodes', to: 'https://nodes.harmony.one' },
  { title: 'Explorer', to: 'https://explorer.harmony.one' },
  { title: 'Node Signup', to: 'https://harmony.one/node-signup' },
];

const MEDIUM_LATEST = (
  <a href="https:medium.com/harmony-one/latest" rel="noopener noreferrer" target="_blank">
    Blog
  </a>
);

const DISCUSS = [
  {
    title: 'Blog',
    to: null,
    elem: MEDIUM_LATEST,
  },
  { title: 'Discord', to: 'https://discordapp.com/invite/rdCmBpe' },
  { title: 'Telegram', to: 'https://t.me/harmony_one' },
];

const HAMBURGER_ID = 'HAMBURGER_ID';

const close_hamburger = () => {
  const handle = document.querySelector(`#${HAMBURGER_ID}`);
  handle.checked = false;
  return true;
};

const hamburger = (
  <div className={styles.menuToggle}>
    <input id={HAMBURGER_ID} className={styles.hamburgerCheckbox} type="checkbox" />
    <span />
    <span />
    <span />
    <ul className={styles.sideBarMenu}>
      <img
        alt="Harmony's Logo"
        className={styles.harmonyBannerMenuSlideOut}
        src="/images/logo/harmony-logo-horizontal-full-color.svg "
      />
      <hr />
      <section className={styles.harmonySideMenuWrapper}>
        <ul>
          <li>
            <a href={'/technology'}>Technology</a>
          </li>
          <li>
            <a onClick={close_hamburger} href="#harmony_team__block">
              Team
            </a>
          </li>
          <li>
            <a href="/careers">Careers</a>
          </li>
          <li>
            <a onClick={close_hamburger} href="#partner__block">
              Partners
            </a>
          </li>
          <li>{MEDIUM_LATEST}</li>
        </ul>
      </section>
    </ul>
  </div>
);

const Submenu = ({ list_items }) => (
  <ul className={styles.nav__submenu}>
    {list_items.map(({ title, to, elem }) => (
      <li key={title} className={styles['nav__submenu-item']}>
        {to === null ? elem : <a href={to}>{title}</a>}
      </li>
    ))}
  </ul>
);

const PillBoxes = (
  <ul className={styles.pill_boxes}>
    <li id="nav-item__whitepaper" className={`whitepaper-button ${styles.onePagerButton}`}>
      <a
        href={'/images/onepager.jpeg'}
        className={`header__nav-item button outline ${styles.gradientButton}`}>
        <span>Onepager</span>
      </a>
    </li>
    <li id="nav-item__whitepaper" className="whitepaper-button">
      <a
        href={'/pdf/whitepaper.pdf'}
        className={`header__nav-item button outline ${styles.gradientButton}`}>
        <span>Whitepaper</span>
      </a>
    </li>
  </ul>
);

const storeScroll = () => (document.documentElement.dataset.scroll = window.scrollY);

export default class extends Component {
  state = {
    dropdown_show: { about_us: false, technology: false, node: false, discuss: false },
  };

  handle_scroll = (fn = storeScroll) => {
    let frame;
    return (...params) => {
      if (frame) {
        cancelAnimationFrame(frame);
      }
      frame = requestAnimationFrame(() => {
        fn(...params);
      });
    };
  };

  componentDidMount() {
    document.addEventListener('scroll', this.handle_scroll(), { passive: true });
    storeScroll();
  }

  hover_action = (dropdown_key_name, value) =>
    this.setState({ dropdown_show: { [dropdown_key_name]: value } });

  render() {
    const {
      dropdown_show: { about_us, roadmap, node, discuss },
    } = this.state;
    return (
      <header className={styles.headerWrapper}>
        <nav className={styles.nav}>
          {hamburger}
          <div className={styles.navWrapper}>
            <a className={styles.harmonyHeaderLogo} href={'/'}>
              <img
                alt="Harmony's Logo"
                className={styles.harmonyBanner}
                src="/images/logo/harmony-logo-horizontal-full-color.svg "
              />
            </a>
            <ul className={styles.nav__menu}>
              <li
                className={styles['nav__menu-item']}
                onMouseLeave={() => this.hover_action('about_us', false)}>
                <a onMouseEnter={() => this.hover_action('about_us', true)}>About</a>
                {about_us && <Submenu list_items={ABOUT_US} />}
              </li>
              <li
                className={styles['nav__menu-item']}
                onMouseLeave={() => this.hover_action('node', false)}>
                <a onMouseEnter={() => this.hover_action('node', true)}>Node</a>
                {node && <Submenu list_items={NODE} />}
              </li>
              <li
                className={styles['nav__menu-item']}
                onMouseLeave={() => this.hover_action('discuss', false)}>
                <a onMouseEnter={() => this.hover_action('discuss', true)}>Discuss</a>
                {discuss && <Submenu list_items={DISCUSS} />}
              </li>
              <li className={styles['nav__menu-item']}>
                <a href={'#roadmap__block'}>Roadmap</a>
              </li>
              <li className={styles['nav__menu-item']}>
                <a href={'/careers'}>Join Us!</a>
              </li>
              <li className={styles['nav__menu-item']}>
                <a href={'https://harmony.one/newsletter'}>newsletter</a>
              </li>
            </ul>
            {PillBoxes}
          </div>
        </nav>
      </header>
    );
  }
}
