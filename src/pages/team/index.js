import React from 'react'

import Layout from '../../components/Layout'
import TeamDetail from '../../components/TeamDetail';
import AdvisorsDetail from '../../components/AdvisorDetail';

export default class TeamMemberPage extends React.Component {
  render() {
    return (
      <Layout page='team'>
       <div>
         <main className="main">
          <div className="whitepaper-fixed-mobile">
            <a href="/pdf/whitepaper.pdf" className="outline button" target="_blank" rel="noopener noreferrer" data-g-event="hero" data-g-label="Read our Whitepaper" data-g-action="clicked">
              <span>Read our Whitepaper</span>
            </a>
          </div>
          <div className="hero hero hero__team">
            <img alt="" src="/images/hero/hero-curve.svg " className="hero__curve" />
            <div className="hero__container container">
              <div className="hero__col">
                <h2 className="hero__title">Good People with Great Ideas</h2>
              </div>
            </div>
          </div>
          <section className="section__quote" id="quote">
            <div className="container">
              <div className="quote">
                <div className="quote__container">
                  <div className="quote__container-column">
                    <p className="quote__container-column-text">Very few teams have combined expertise in academic research, global-scale engineering, and long-term company building. And while that’s who we are, it’s our down-to-earth vision of a better world that drives us.</p>
                    <p className="quote__container-column-text">Our team members have built systems at the largest scale in the world’s top tech companies. We’ve worked on exciting projects at Google Maps, Apple Siri, and AWS Infrastructure—and now we’ve come together to build Harmony.</p>
                  </div>
                  <div className="quote__container-column">
                    <p className="quote__container-column-text">Our backgrounds range from AI and machine learning, to blockchain, VR, and compilers. Together, we’re committed to creating a new global-scale infrastructure by applying our deep understanding to transports networks, consensus protocols, and systems tooling.</p>
                    <p className="quote__container-column-text">We’re ambitiously idealistic—but if you check out our whitepaper and updates, you’ll see our feet are on the ground as we shoot for the stars.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="section__bios" id="bios">
            <div className="container">
              <TeamDetail/>
              <h2 class="bios__header">Collaborators</h2>
              <AdvisorsDetail/>
            </div>
          </section>
          <section className="section__go-to" id="go-to">
            <div className="container">
              <div className="go-to-container">
                <div className="go-to-column">
                  <h4>Platform for the decentralized economy</h4>
                  <p>We’re using a novel approach in building a scalable and decentralized blockchain.</p>
                  <a href="/technology/" className="outline button" data-g-event="timeline" data-g-label="View Technology" data-g-action="clicked">
                    <span>View Technology</span>
                  </a>
                </div>
                <div className="go-to-column">
                  <h4>Join the Team</h4>
                  <p>If you would like to join us in our mission, check out our current openings, or drop us a note.</p>
                  <a href="/careers/" className="outline button" data-g-event="timeline" data-g-label="View Careers" data-g-action="clicked">
                    <span>View Careers</span>
                  </a>
                </div>
              </div>
            </div>
          </section>
        </main>
        </div>
      </Layout>
    )
  }
}
