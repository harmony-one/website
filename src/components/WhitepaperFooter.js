import React from 'react';

import GlobalEmitter from '../utils/EventEmitter';
import styles from './whitepaper-footer.module.scss';

export default class WhitepaperFooter extends React.Component {
  clickOnWhitePaper(e) {
    const pos = e.target.getClientRects()[0];
    const left = pos.left;
    const top = pos.top;
    GlobalEmitter.emit('open-sticky', {
      style: { left: left, top: top },
      isReversed: true,
      type: 'whitepaper',
    });
  }

  clickOnOnepager(e) {
    const pos = e.target.getClientRects()[0];
    const left = pos.left;
    const top = pos.top;

    GlobalEmitter.emit('open-sticky', {
      style: { left: left, top: top },
      isReversed: true,
    });
  }

  render() {
    return (
      <div className={`whitepaper-fixed-desktop ${styles.whitePaperFooter}`}>
        <a
          className="outline button"
          data-g-event="hero"
          data-g-label="Whitepaper"
          data-g-action="clicked"
          onClick={this.clickOnOnepager}
          onTouchMove={this.clickOnOnepager}>
          <span>Onepager</span>
        </a>

        <span>&nbsp;&nbsp;&nbsp;</span>
        <a
          className="header__nav-item button outline"
          onClick={this.clickOnWhitePaper}
          onTouchMove={this.clickOnWhitePaper}>
          <span>Whitepaper</span>
        </a>
      </div>
    );
  }
}
