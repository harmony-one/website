import React  from 'react'
import Helmet from 'react-helmet'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import StickyComponent from '../components/StickyComponent'

const Layout = class extends React.Component {
  render () {
    const link =  this.props.page  ? this.props.page : "home"

    return (
      <div>
        <Helmet>
          <html lang="en" />
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0, height=device-height" />
          <title>
            Harmony - Open consensus for 10B
          </title>
          <meta property="og:image" content="/images/social-image.png" />
          <link href="/images/apple-touch-icon-76x76.png" rel="apple-touch-icon" sizes="76x76" />
          <link href="/images/apple-touch-icon-120x120.png" rel="apple-touch-icon" sizes="120x120" />
          <link href="/images/apple-touch-icon-152x152.png" rel="apple-touch-icon" sizes="152x152" />
          <link href="/images/apple-touch-icon-180x180.png" rel="apple-touch-icon" sizes="180x180" />
          <link href="/images/touch-icon-120x120.png" rel="icon" sizes="120x120" />
          <link href="/images/touch-icon-180x180.png" rel="icon" sizes="180x180" />
          <meta property="og:title" content="Harmony - Open consensus for 10B" />
          <meta property="og:site_name" content="Harmony - Open consensus for 10B" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://harmony.one/" />
          <meta name="description" content="Open Consensus for 10 Billion People. Harmony for One and All. Our open infrastructure is a revolutionary high-throughput, low-latency, and low-fee consensus platform designed to power decentralized economies of the future." />
          <meta property="og:description" content="Open Consensus for 10 Billion People. Harmony for One and All. Our open infrastructure is a revolutionary high-throughput, low-latency, and low-fee consensus platform designed to power decentralized economies of the future." />
          <link rel="shortcut icon" href="/images/favicon.png" />
          <link href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700|Material+Icons|Google+Sans:300,400,500" rel="stylesheet" />
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/simple-line-icons/2.4.1/css/simple-line-icons.css" />
          <link href="https://fonts.googleapis.com/css?family=Nunito:300,400,600,800" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css?family=Fira+Sans:200,400" rel="stylesheet" />

          <link href="/css/style.css" rel="stylesheet" />
          <link href={ "/css/composite/" + link + ".min.css"} rel="stylesheet" />
        </Helmet>
        <StickyComponent />
        <Navbar page={link}/>
        {this.props.children}
        <Footer />
      </div>
    )
  }
}

export default Layout;
