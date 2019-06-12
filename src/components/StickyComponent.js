import React  from 'react'
import GlobalEmitter from '../utils/EventEmitter'

const StickyComponent= class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isClose: true,
            style: {
                top: 0,
                left: 0,
            },
        }

        this.handleClickOutside = this.handleClickOutside.bind(this);
    }

    handleClickOutside = e => {
        if (this.state.isClose) {
            return;
        }

        if (this.node.contains(e.target)) {
            return;
        }

        this.setState({isClose: true});
        document.removeEventListener('click', this.handleClickOutside, false);
        document.removeEventListener('touchstart', this.handleClickOutside, false);
    };

    componentDidMount() {
        GlobalEmitter.on('open-sticky', (opts) => {
            document.addEventListener('click', this.handleClickOutside, false);
            document.addEventListener('touchstart', this.handleClickOutside, false);
            let style
            if (!opts.isReversed) {
                style = {left: `${opts.style.left}px`, top: `${opts.style.top+50}px`}
            } else {
                const top = opts.style.top - 56;
                style = {left: `${opts.style.left}px`, top: `${top}px`}
            }
            this.setState({
                style: style,
                isClose: false
            })
        });

        GlobalEmitter.on('close-sticky', (...args) => {
            document.removeEventListener('click', this.handleClickOutside, true);
            document.removeEventListener('touchstart', this.handleClickOutside, true);
            this.setState({
                isClose: true
            })
        });
    }

    render() {
        return  (
            !this.state.isClose ?
                <ul className="sticky-component"
                    ref={node => { this.node = node; }}
                    style={this.state.style}>
                    <li>
                        <a href="/pdf/whitepaper.pdf" target="_blank">English</a>
                    </li>
                    <li>
                        <a href="/whitepaper-kr" target="_blank">Korean</a>
                    </li>
                </ul>
                : null
        )
    }
}

export default StickyComponent
