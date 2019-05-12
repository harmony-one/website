import React from "react";

const FAQ = class extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      active: false,
      question: "",
      answer: "",
      faqClass: "faq"
    };

    this.downArrowHandler = this.downArrowHandler.bind(this)
  }

  downArrowHandler() {
    const currentClass = this.state.faqClass;
    if (currentClass === "faq")
      return this.setState({ faqClass: "faq expanded" })
    return this.setState({ faqClass: "faq" })
  }

  render() {
    return (
      <div className={this.state.faqClass} onClick={this.downArrowHandler}>
        <div className="question">
          <h4 className="text--bold">{this.props.question}</h4>
          <svg className="arrow" width="24px" height="13px" viewBox="0 0 24 13" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
            <g id="Design" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
              <g id="Technologyh-Desktop-R1" transform="translate(-1118.000000, -2923.000000)" fill="#1B295E">
                <g id="Group-4" transform="translate(298.000000, 2714.000000)">
                  <g id="00_Assets/Icon/UI/Chevron_Down" transform="translate(820.000000, 209.000000)">
                    <path d="M0.1875,0.9453125 C0.1875,0.851562031 0.207031055,0.753906758 0.24609375,0.65234375 C0.285156445,0.550780742 0.343749609,0.460937891 0.421875,0.3828125 C0.578125781,0.242186797 0.765623906,0.171875 0.984375,0.171875 C1.20312609,0.171875 1.39062422,0.242186797 1.546875,0.3828125 L12.140625,10.9765625 L22.5703125,0.546875 C22.7265633,0.390624219 22.9140614,0.3125 23.1328125,0.3125 C23.3515636,0.3125 23.5390617,0.390624219 23.6953125,0.546875 C23.8515633,0.703125781 23.9296875,0.890623906 23.9296875,1.109375 C23.9296875,1.32812609 23.8515633,1.51562422 23.6953125,1.671875 L12.703125,12.6640625 C12.5468742,12.8203133 12.3593761,12.8984375 12.140625,12.8984375 C11.9218739,12.8984375 11.7343758,12.8203133 11.578125,12.6640625 L0.421875,1.53125 C0.343749609,1.45312461 0.285156445,1.36328176 0.24609375,1.26171875 C0.207031055,1.16015574 0.1875,1.05468805 0.1875,0.9453125 Z" />
                  </g>
                </g>
              </g>
            </g>
          </svg>
        </div>
        <div className="answer">
          <p>{this.props.answer}</p>
        </div>
      </div>
    );
  }
};

export default FAQ;