import React, { Component } from 'react';
import styles from './sticky-nav-bar.module.scss';

const ABOUT_US = [
  { title: 'Team', to: '#harmony_team__block' },
  { title: 'Partners', to: '#partner__block' },
  { title: 'Investors', to: '' },
];

const TECHNOLOGY = [
  { title: 'Whitepaper', to: '/pdf/whitepaper.pdf' },
  { title: 'Roadmap', to: '' },
];

const NODE = [
  { title: 'Explorer', to: '' },
  { title: 'Foundation Nodes', to: '' },
  { title: 'Node Signup', to: '' },
];

const DISCUSS = [
  {
    title: 'Blog',
    to: null,
    elem: (
      <a href="https:medium.com/harmony-one/latest" rel="noopener noreferrer" target="_blank">
        Blog
      </a>
    ),
  },
  { title: 'Forum', to: 'https://talk.harmony.one' },
  { title: 'Telegram', to: '' },
];

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
      dropdown_show: { about_us, technology, node, discuss },
    } = this.state;
    return (
      <nav className={styles.nav}>
        <ul className={styles.nav__menu}>
          <img alt="" src="/images/logo/harmony-logo-horizontal-full-color.svg " />
          <li
            className={styles['nav__menu-item']}
            onMouseLeave={() => this.hover_action('about_us', true)}>
            <a onMouseEnter={() => this.hover_action('about_us', true)}>About</a>
            {about_us && <Submenu list_items={ABOUT_US} />}
          </li>
          <li
            className={styles['nav__menu-item']}
            onMouseLeave={() => this.hover_action('technology', false)}>
            <a onMouseEnter={() => this.hover_action('technology', true)}>Technology</a>
            {technology && <Submenu list_items={TECHNOLOGY} />}
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
        </ul>
        {PillBoxes}
      </nav>
    );
  }
}
