import React from 'react';
import GlobalEmitter from '../utils/EventEmitter'

const Navbar = class extends React.Component {
  constructor(props) {
    super(props);
    this.handleScroll = this.handleScroll.bind(this);
    this.state = {
      active: false,
      technology: '',
      team: '',
      careers: '',
      partners: '',
      blog: '',
      headerClass: 'header is-sticky',
      is_open: ''
    };

    this.formSubmitHandler = this.formSubmitHandler.bind(this);
  }

  componentWillMount() {
    switch (this.props.page) {
      case 'technology':
        return this.setState({ technology: 'active-page' });
      case 'team':
        return this.setState({ team: 'active-page' });
      case 'careers':
        return this.setState({ careers: 'active-page' });
      case 'partners':
        return this.setState({ partners: 'active-page' });
      case 'blog':
        return this.setState({ blog: 'active-page' });
      default:
        return;
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  onClickWhitePaper(e) {
    var pos = e.target.getClientRects()[0];
    var left = pos.left;
    var top = pos.top;
    GlobalEmitter.emit('open-sticky', {
      style: {left: left, top: top}
    });
  }

  handleScroll(event) {
    GlobalEmitter.emit('close-sticky');
    var scroll = event.srcElement.scrollingElement.scrollTop;
    if (scroll >= 50) {
      this.setState({ headerClass: 'header is-sticky inverted ' });
    } else {
      this.setState({ headerClass: 'header is-sticky ' });
    }
  }

  formSubmitHandler() {
    if (this.state.is_open !== '') {
      this.setState({ is_open: '' });
    } else {
      this.setState({ is_open: ' is_open' });
    }
  }

  render() {
    if (this.state.is_open !== '') {
      return (
        <div
          className={'header__side-menu is-loaded is-open'}
          onClick={this.formSubmitHandler}
        >
          <div className="header__side-menu__logo--container">
            <div className="header__logo header__side-menu__logo">
              <a
                href="/"
                className="header__logo"
                data-g-event="header"
                data-g-label="Logo"
                data-g-action="clicked"
              >
                <span>
                  <img
                    alt=""
                    src="/images/logo/harmony-logo-horizontal-full-color.svg "
                  />
                </span>
              </a>
            </div>
          </div>
          <ul className="header__nav-items mobile">
            <li id="header-nav__items__item" className="hide-md">
              <a href="/technology/" className="header__nav-item">
                <span>Technology</span>
              </a>
            </li>
            <li id="header-nav__items__item" className="hide-md">
              <a href="/team/" className="header__nav-item">
                <span>Team</span>
              </a>
            </li>
            <li id="header-nav__items__item" className="hide-md">
              <a href="/careers/" className="header__nav-item">
                <span>Careers</span>
              </a>
            </li>
            <li id="header-nav__items__item" className="hide-md">
              <a href="/partners/" className="header__nav-item">
                <span>Partners</span>
              </a>
            </li>
            <li id="header-nav__items__item" className="hide-md">
              <a
                href="https://medium.com/harmony-one"
                target="_blank"
                rel="noopener noreferrer"
                className="header__nav-item"
              >
                <span>Blog</span>
              </a>
            </li>
            <li id="header-nav__items__item" className="whitepaper-button">
              <a
                href="/pdf/whitepaper.pdf"
                className="header__nav-item button outline"
                target=""
              >
                <span>Whitepaper</span>
              </a>
            </li>
          </ul>
        </div>
      );
    }

    return (
      <header className={this.state.headerClass + this.state.is_open}>
        <nav className="header__nav">
          <div className="header__hamburger">
            <input type="checkbox" onClick={this.formSubmitHandler} />
            <span className="header__hamburger__bar" />
            <span className="header__hamburger__bar" />
            <span className="header__hamburger__bar" />
          </div>
          <a
            href="/"
            className="header__logo"
            data-g-event="header"
            data-g-label="Logo"
            data-g-action="clicked"
          >
            <span>
              <img
                alt=""
                src="/images/logo/harmony-logo-horizontal-full-color.svg "
              />
            </span>
          </a>
          <ul className="header__nav-items desktop">
            <li
              id="nav-item__technology"
              className={'hide-md ' + this.state.technology}
            >
              <a href="/technology/" className="header__nav-item">
                <span>Technology</span>
              </a>
            </li>
            <li id="nav-item__team" className={'hide-md ' + this.state.team}>
              <a href="/team/" className="header__nav-item">
                <span>Team</span>
              </a>
            </li>
            <li
              id="nav-item__careers"
              className={'hide-md ' + this.state.careers}
            >
              <a href="/careers/" className="header__nav-item">
                <span>Careers</span>
              </a>
            </li>
            <li
              id="nav-item__partners"
              className={'hide-md ' + this.state.partners}
            >
              <a href="/partners/" className="header__nav-item">
                <span>Partners</span>
              </a>
            </li>
            <li id="nav-item__blog" className={'hide-md ' + this.state.blog}>
              <a
                href="https://medium.com/harmony-one"
                rel="noopener noreferrer"
                target="_blank"
                className="header__nav-item"
              >
                <span>Blog</span>
              </a>
            </li>
            <li id="nav-item__blog" className="hide-md">
              <a href="https://talk.harmony.one" className="header__nav-item">
                <span>Forum</span>
              </a>
            </li>

            <li id="nav-item__whitepaper" className="whitepaper-button">
              <a
                href="/images/onepager.jpeg"
                className="header__nav-item button outline"
                target=""
              >
                <span>Onepager</span>
              </a>
            </li>
            <li id="nav-item__whitepaper"
                className="whitepaper-button">
              <a className="header__nav-item button outline"
                 onClick={this.onClickWhitePaper}
                 onTouchEnd={this.onClickWhitePaper}
              >
                <span>Whitepaper</span>
              </a>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
};

export default Navbar;
