import React from 'react'

import EmailForm from '../components/EmailForm'

const Footer = class extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      inputValue: ""
    }

    this.updateInputValue = this.updateInputValue.bind(this);
  }

  updateInputValue(e) {
    this.setState({
     inputValue: e.target.value,
    });
    e.preventDefault();
   }

  render() {
    return (
      <div>
      <section className="section__newsletter" id="newsletter">
            <div className="container">
              <h3 className="text--center">Subscribe to the latest updates from Harmony</h3>
              <div id="mc_embed_signup">
              <EmailForm border={false}/>
            </div>
            </div>
          </section>
      <footer className="footer">
      <div className="container">
        <div className="footer__upper">
          <ul className="footer__nav footer__nav-upper">
            <div className="footer__nav-upper__col">
              <li>  <a href="/" className="footer__logo" data-g-event="footer" data-g-label="Logo" data-g-action="clicked">
                  <span>    
                    <img alt="" src="/images/logo/harmony-logo-mark-gray.svg " />
                  </span>
                </a>
              </li>
            </div>
            <div className="footer__nav-upper__col">
              <li>  <a href="/technology/" className="footer__nav-item nav__upper-item" data-g-event="footer" data-g-label="Technology" data-g-action="clicked">
                  <span>Technology</span>
                </a>
              </li>
              <li>  <a href="/team/" className="footer__nav-item nav__upper-item" data-g-event="footer" data-g-label="Team" data-g-action="clicked">
                  <span>Team</span>
                </a>
              </li>
              <li>  <a href="/careers/" className="footer__nav-item nav__upper-item" data-g-event="footer" data-g-label="Careers" data-g-action="clicked">
                  <span>Careers</span>
                </a>
              </li>
              <li>  <a href="/partners/" className="footer__nav-item nav__upper-item" data-g-event="footer" data-g-label="Partners" data-g-action="clicked">
                  <span>Partners</span>
                </a>
              </li>
              <li>  <a href="/blog/" className="footer__nav-item nav__upper-item" data-g-event="footer" data-g-label="Blog" data-g-action="clicked">
                  <span>Blog</span>
                </a>
              </li>
              <li>  <a href="mailto:hello@harmony.one" className="footer__nav-item nav__upper-item" data-g-event="footer" data-g-label="Contact" data-g-action="clicked">
                  <span>Contact</span>
                </a>
              </li>
            </div>
          </ul>
          <div className="footer__nav footer__social">
            <ul className="social-icons">
              <li>  <a href="/blog/" className="social__item" data-g-event="footer" data-g-label="medium" data-g-action="clicked">
                  <span>    
                    <img alt="" src="/images/social/medium.svg " />
                  </span>
                </a>
              </li>
              <li>  <a href="https://www.instagram.com/harmonyoneprotocol/" className="social__item" target="" data-g-event="footer" data-g-label="instagram" data-g-action="clicked">
                  <span>    
                    <img alt="" src="/images/social/instagram.svg " />
                  </span>
                </a>
              </li>
              <li>  <a href="https://t.me/harmony_one" className="social__item" target="" data-g-event="footer" data-g-label="telegram" data-g-action="clicked">
                  <span>    
                    <img alt="" src="/images/social/telegram.svg " />
                  </span>
                </a>
              </li>
              <li>  <a href="https://twitter.com/harmonyprotocol" className="social__item" target="" data-g-event="footer" data-g-label="linkedin" data-g-action="clicked">
                  <span>    
                    <img alt="" src="/images/social/twitter.svg " />
                  </span>
                </a>
              </li>
              <li>  <a href="https://www.linkedin.com/company/harmony-protocol/" className="social__item" target="" data-g-event="footer" data-g-label="linkedin" data-g-action="clicked">
                  <span>    
                    <img alt="" src="/images/social/linkedin.svg " />
                  </span>
                </a>
              </li>
            </ul>    </div>
        </div>
        <div className="footer__lower">
          <ul className="footer__nav footer__nav-legal">
            <li>  
              <a href="/privacy/" className="footer__nav-item nav__legal-item footnote" data-g-event="footer" data-g-label="Privacy Policy 2019 Harmony" data-g-action="clicked">
                <span>Privacy Policy 2019 Harmony</span>
              </a>
            </li>
          </ul>
          <ul className="footer__nav footer__nav-legal">
            <li>  
              <a>
                <span>&nbsp;&nbsp;&nbsp;</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
    </div>
    )
  }
}

export default Footer
