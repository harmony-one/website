import React from 'react';
import GlobalEmitter from '../utils/EventEmitter'

const WhitepaperFooter = class extends React.Component {
    clickOnWhitePaper(e) {
        const pos = e.target.getClientRects()[0];
        const left = pos.left;
        const top = pos.top;
        GlobalEmitter.emit('open-sticky', {
            style: {left: left, top: top},
            isReversed: true
        });
    }
  render() {
    return (
      <div className="whitepaper-fixed-desktop">
        <a
          href="/images/onepager.jpeg"
          className="outline button"
          target=""
          data-g-event="hero"
          data-g-label="Whitepaper"
          data-g-action="clicked"
        >
          <span>Onepager</span>
        </a>
        <span>&nbsp;&nbsp;&nbsp;</span>
          <a className="header__nav-item button outline"
             onClick={this.clickOnWhitePaper}
             onTouchMove={this.clickOnWhitePaper}
          >
              <span>Whitepaper</span>
          </a>
      </div>
    );
  }
};

export default WhitepaperFooter;
