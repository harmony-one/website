import React, { Component } from 'react';
import styles from './sticky-nav-bar.module.scss';

const ABOUT_US = [
  { title: 'Team', to: '' },
  { title: 'Partners', to: '' },
  { title: 'Investors', to: '' },
];

const TECHNOLOGY = [{ title: 'Whitepaper', to: '' }, { title: 'Roadmap', to: '' }];

const NODE = [
  { title: 'Explorer', to: '' },
  { title: 'Foundation Nodes', to: '' },
  { title: 'Node Signup', to: '' },
];

const DISCUSS = [
  { title: 'Blog', to: '' },
  { title: 'Forum', to: '' },
  { title: 'Telegram', to: '' },
];

const Submenu = ({ list_items }) => (
  <ul className={styles.nav__submenu}>
    {list_items.map(({ title }) => (
      <li key={title} className={styles['nav__submenu-item']}>
        <a>{title}</a>
      </li>
    ))}
  </ul>
);

const PillBoxes = (
  <ol className={styles.pill_boxes}>
    <a className="header__nav-item button outline">
      <span>Onepager</span>
    </a>
    <a className="header__nav-item button outline">
      <span>Whitepaper</span>
    </a>
  </ol>
);

const storeScroll = () => (document.documentElement.dataset.scroll = window.scrollY);

export default class extends Component {
  state = {
    dropdown_show: { about_us: true, technology: false, node: false, discuss: false },
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

// const Navbar = class extends React.Component {
//   constructor(props) {
//     super(props);
//     this.handleScroll = this.handleScroll.bind(this);
//     this.state = {
//       active: false,
//       technology: '',
//       team: '',
//       careers: '',
//       partners: '',
//       blog: '',
//       headerClass: 'header is-sticky',
//       is_open: '',
//     };

//     this.formSubmitHandler = this.formSubmitHandler.bind(this);
//   }

//   componentWillMount() {
//     switch (this.props.page) {
//       case 'technology':
//         return this.setState({ technology: 'active-page' });
//       case 'team':
//         return this.setState({ team: 'active-page' });
//       case 'careers':
//         return this.setState({ careers: 'active-page' });
//       case 'partners':
//         return this.setState({ partners: 'active-page' });
//       case 'blog':
//         return this.setState({ blog: 'active-page' });
//       default:
//         return;
//     }
//   }

//   componentDidMount() {
//     window.addEventListener('scroll', this.handleScroll);
//   }

//   componentWillUnmount() {
//     window.removeEventListener('scroll', this.handleScroll);
//   }

//   onClickWhitePaper(e) {
//     var pos = e.target.getClientRects()[0];
//     var left = pos.left;
//     var top = pos.top;
//     GlobalEmitter.emit('open-sticky', {
//       style: { left: left, top: top },
//       type: 'whitepaper',
//     });
//   }

//   handleScroll(event) {
//     GlobalEmitter.emit('close-sticky');
//     var scroll = event.srcElement.scrollingElement.scrollTop;
//     if (scroll >= 50) {
//       this.setState({ headerClass: 'header is-sticky inverted ' });
//     } else {
//       this.setState({ headerClass: 'header is-sticky ' });
//     }
//   }

//   formSubmitHandler() {
//     if (this.state.is_open !== '') {
//       this.setState({ is_open: '' });
//     } else {
//       this.setState({ is_open: ' is_open' });
//     }
//   }

//   onClickOnOnepager(e) {
//     const pos = e.target.getClientRects()[0];
//     const left = pos.left;
//     const top = pos.top;

//     GlobalEmitter.emit('open-sticky', {
//       style: { left: left, top: top },
//     });
//   }

//   render() {
//     if (this.state.is_open !== '') {
//       return (
//         <div className={'header__side-menu is-loaded is-open'} onClick={this.formSubmitHandler}>
//           <div className="header__side-menu__logo--container">
//             <div className="header__logo header__side-menu__logo">
//               <a
//                 href="/"
//                 className="header__logo"
//                 data-g-event="header"
//                 data-g-label="Logo"
//                 data-g-action="clicked">
//                 <span>
//                   <img alt="" src="/images/logo/harmony-logo-horizontal-full-color.svg " />
//                 </span>
//               </a>
//             </div>
//           </div>
//           <ul className="header__nav-items mobile">
//             <li id="header-nav__items__item" className="hide-md">
//               <a href="/technology/" className="header__nav-item">
//                 <span>Technology</span>
//               </a>
//             </li>
//             <li id="header-nav__items__item" className="hide-md">
//               <a href="#harmony_team__block" className="header__nav-item">
//                 <span>Team</span>
//               </a>
//             </li>
//             <li id="header-nav__items__item" className="hide-md">
//               <a href="/careers/" className="header__nav-item">
//                 <span>Careers</span>
//               </a>
//             </li>
//             <li id="header-nav__items__item" className="hide-md">
//               <a href="/partners/" className="header__nav-item">
//                 <span>Partners</span>
//               </a>
//             </li>
//             <li id="header-nav__items__item" className="hide-md">
//               <a
//                 href="https://medium.com/harmony-one"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="header__nav-item">
//                 <span>Blog</span>
//               </a>
//             </li>
//             <li id="header-nav__items__item" className="whitepaper-button">
//               <a href="/pdf/whitepaper.pdf" className="header__nav-item button outline" target="">
//                 <span>Whitepaper</span>
//               </a>
//             </li>
//           </ul>
//         </div>
//       );
//     }

//     return (
//       <header className={this.state.headerClass + this.state.is_open}>
//         <nav className="header__nav">
//           <div className="header__hamburger">
//             <input type="checkbox" onClick={this.formSubmitHandler} />
//             <span className="header__hamburger__bar" />
//             <span className="header__hamburger__bar" />
//             <span className="header__hamburger__bar" />
//           </div>
//           <a
//             href="/"
//             className="header__logo"
//             data-g-event="header"
//             data-g-label="Logo"
//             data-g-action="clicked">
//             <span>
//               <img alt="" src="/images/logo/harmony-logo-horizontal-full-color.svg " />
//             </span>
//           </a>
//           <ul className="header__nav-items desktop">
//             <li id="nav-item__technology" className={'hide-md ' + this.state.technology}>
//               <a href="/technology/" className="header__nav-item">
//                 <span>Technology</span>
//               </a>
//             </li>
//             <li id="nav-item__team" className={'hide-md ' + this.state.team}>
//               <a href="#harmony_team__block" className="header__nav-item">
//                 <span>Team</span>
//               </a>
//             </li>
//             <li id="nav-item__careers" className={'hide-md ' + this.state.careers}>
//               <a href="/careers/" className="header__nav-item">
//                 <span>Careers</span>
//               </a>
//             </li>
//             <li id="nav-item__partners" className={'hide-md ' + this.state.partners}>
//               <a href="#partner__block" className="header__nav-item">
//                 <span>Partners</span>
//               </a>
//             </li>
//             <li id="nav-item__blog" className={'hide-md ' + this.state.blog}>
//               <a
//                 href="https://medium.com/harmony-one/latest"
//                 rel="noopener noreferrer"
//                 target="_blank"
//                 className="header__nav-item">
//                 <span>Blog</span>
//               </a>
//             </li>
//             <li id="nav-item__blog" className="hide-md">
//               <a href="https://talk.harmony.one" className="header__nav-item">
//                 <span>Forum</span>
//               </a>
//             </li>

//             <li id="nav-item__whitepaper" className="whitepaper-button">
//               <a
//                 className="header__nav-item button outline"
//                 onClick={this.onClickOnOnepager}
//                 onTouchMove={this.onClickOnOnepager}>
//                 <span>Onepager</span>
//               </a>
//             </li>
//             <li id="nav-item__whitepaper" className="whitepaper-button">
//               <a
//                 className="header__nav-item button outline"
//                 onClick={this.onClickWhitePaper}
//                 onTouchMove={this.onClickWhitePaper}>
//                 <span>Whitepaper</span>
//               </a>
//             </li>
//           </ul>
//         </nav>
//       </header>
//     );
//   }
// };

// export default Navbar;
