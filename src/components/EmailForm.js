import React from 'react';

const EmailForm = class extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      inputValue: '',
      border: this.props.border,
    };

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
      <form
        action="https://medium.us20.list-manage.com/subscribe/post?u=13db1cd29d5fd5c3b8169108c&id=301564a525"
        method="post"
        id="mc-embedded-subscribe-form-3"
        name="mc-embedded-subscribe-form"
        className="validate"
        target="">
        <div id="mc_embed_signup_scroll" className="width-relative">
          <div className="mc-field-group width-relative">
            {this.state.border ? (
              <span className="input-border">
                <input
                  type="email"
                  name="EMAIL"
                  className="required email"
                  id="mce-EMAIL"
                  placeholder="Your email"
                  required
                  value={this.state.inputValue}
                  onChange={this.updateInputValue}
                />
              </span>
            ) : (
              <input
                type="email"
                name="EMAIL"
                className="required email"
                id="mce-EMAIL"
                placeholder="Your email"
                required
                value={this.state.inputValue}
                onChange={this.updateInputValue}
              />
            )}
          </div>
          <div id="mce-responses" className="clear">
            <div className="response" id="mce-error-response" style={{ display: 'none' }} />
            <div className="response" id="mce-success-response" style={{ display: 'none' }} />
          </div>
          <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden="true">
            <input
              type="text"
              name="b_93b2e477d4e2dec2a336c4585_da655ebf7e"
              tabIndex={-1}
              defaultValue
            />
          </div>
          <div className="clear">
            <input
              value={'Subscribe'}
              className="button"
              type="submit"
              defaultValue="Subscribe"
              name="subscribe"
              id="mc-embedded-subscribe"
            />
          </div>
        </div>
      </form>
    );
  }
};

export default EmailForm;
