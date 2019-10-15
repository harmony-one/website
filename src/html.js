import React from 'react';
import PropTypes from 'prop-types';

const msg = `Open Consensus for 10 billion`;

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

        <meta property="og:url" content="https://harmony.one" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Harmony One" />
        <meta property="og:description" content={msg} />
        <meta
          property="og:image"
          content="https://harmony.one/static/images/touch-icon-180x180.png"
        />
        <meta property="og:image:alt" content="Open Consensus for 10 billion" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="180" />
        <meta property="og:image:height" content="180" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:image"
          content="https://harmony.one/static/images/touch-icon-180x180.png"
        />
        <meta name="twitter:image:alt" content={msg} />
        <meta name="twitter:description" content={msg} />
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <noscript key="noscript" id="gatsby-noscript">
          This app works best with JavaScript enabled.
        </noscript>
        <div key={`body`} id="___gatsby" dangerouslySetInnerHTML={{ __html: props.body }} />
        {props.postBodyComponents}
      </body>
    </html>
  );
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
};
