const anchorate = require('anchorate').default;

exports.onRouteUpdate = location => {
  if (location.location.state) {
    const { state } = location.location;
    setTimeout(() => {
      const elem = document.querySelector(`${state.to_block}`);
      if (elem) {
        elem.scrollIntoView();
      }
    }, 800);
  }
};
