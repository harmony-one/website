import React from 'react';

const WhitepaperFooter = class extends React.Component {
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
        <a
          href="/pdf/whitepaper.pdf"
          className="outline button"
          target=""
          data-g-event="hero"
          data-g-label="Whitepaper"
          data-g-action="clicked"
        >
          <span>Whitepaper</span>
        </a>
      </div>
    );
  }
};

export default WhitepaperFooter;
