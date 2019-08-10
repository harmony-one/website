import React from 'react';
import GlobalEmitter from '../utils/EventEmitter';
import utils from '../utils/utils';

const whitePapers = [
  {
    title: 'English',
    link: '/pdf/whitepaper.pdf',
  },
  {
    title: 'Korean',
    link: '/pdf/whitepaper-kr.pdf',
  },
];

const onepagers = [
  {
    title: 'English',
    link: '/images/onepager.jpeg',
  },
  {
    title: 'Korean',
    link: '/pdf/onepager-kr.pdf',
  },
];

const StickyComponent = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isClose: true,
      style: {
        top: 0,
        left: 0,
      },
    };

    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  handleClickOutside = e => {
    if (this.state.isClose) {
      return;
    }

    if (this.node.contains(e.target)) {
      return;
    }

    this.setState({ isClose: true });
    document.removeEventListener('click', this.handleClickOutside, false);
    document.removeEventListener('touchstart', this.handleClickOutside, false);
  };

  componentDidMount() {
    GlobalEmitter.on('open-sticky', opts => {
      document.addEventListener('click', this.handleClickOutside, false);
      document.addEventListener('touchstart', this.handleClickOutside, false);
      const isWhitePaper = opts.type === 'whitepaper';
      let style;
      if (!opts.isReversed) {
        style = { left: `${opts.style.left}px`, top: `${opts.style.top + 50}px` };
      } else {
        const top = utils.isMobile() ? opts.style.top - 65 : opts.style.top - 65;
        style = { left: `${opts.style.left}px`, top: `${top}px` };
      }
      this.setState({
        style: style,
        isClose: false,
        isWhitePaper: isWhitePaper,
      });
    });

    GlobalEmitter.on('close-sticky', (...args) => {
      document.removeEventListener('click', this.handleClickOutside, true);
      document.removeEventListener('touchstart', this.handleClickOutside, true);
      this.setState({
        isClose: true,
      });
    });
  }

  render() {
    const values = this.state.isWhitePaper ? whitePapers : onepagers;
    return !this.state.isClose ? (
      <ul
        className="sticky-component"
        ref={node => {
          this.node = node;
        }}
        style={this.state.style}>
        {values.map((value, index) => {
          return (
            <li key={index}>
              <a href={value.link} target="_blank">
                {value.title}
              </a>
            </li>
          );
        })}
      </ul>
    ) : null;
  }
};

export default StickyComponent;
