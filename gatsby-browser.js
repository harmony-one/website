const anchorate = require('anchorate').default;

exports.onRouteUpdate = location => {
  if (location.location.state) {
    const { state } = location.location;
    switch (state.to_block) {
      case '#investor__block':
      case '#partner__block':
      case '#harmony_team__block':
      case '#roadmap__block':
        setTimeout(() => {
          const elem = document.querySelector(`${state.to_block}`);
          if (elem) {
            elem.scrollIntoView();
          }
        }, 800);
      default:
        return;
    }
  }
};
