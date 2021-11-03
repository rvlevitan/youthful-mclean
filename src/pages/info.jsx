import React, { useEffect } from "react"
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
import Layout from '../components/layout';
import SEO from '../components/seo';
import SmoothScroll from "../components/smooth-scroll"
import Scrollbar from 'smooth-scrollbar';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Bio from "../components/bio/bio";

gsap.registerPlugin(ScrollTrigger);

const AboutPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title;
  const about = data.allContentfulAboutPage.edges;
  let infoImage = '';

  useEffect(() => {
    const scrolltriggering = () => {
      const scroller = document.querySelector('.scroll-container');
      const scrollbar = Scrollbar.get(document.querySelector('.scroll-container'));


      ScrollTrigger.scrollerProxy(".scroll-container", {
        scrollTop(value) {
          if (arguments.length) {
            scrollbar.scrollTop = value;
          }
          return scrollbar.scrollTop
        }
      });

      scrollbar.addListener(ScrollTrigger.update);
      ScrollTrigger.defaults({ scroller: scroller });


      let tl = gsap.timeline({
        scrollTrigger: {
          id: "scrollwire",
          trigger: ".scroll-content",
          start: "top top",
          end: "bottom bottom",
          scrub: true,
          invalidateOnRefresh: true
        }
      });

      tl.addLabel("start")
        .fromTo("#rl-scroll-block", { height: "100%" }, { height: 0 }, "start")
        .fromTo("#rl-scroll-image", { height: 0 }, { height: "100%" }, "start")
    }

    ScrollTrigger.matchMedia({
      "(max-width: 768px)": function () {
        let trigger = ScrollTrigger.getById("scrollwire");
        if (trigger) {
          trigger.disable();
        }
      },
      "(min-width: 769px)": function () {
        let trigger = ScrollTrigger.getById("scrollwire");
        if (trigger) {
          trigger.enable();
        }
      }
    });

    scrolltriggering();
  }, [])

  return (

    <Layout location={location} title={siteTitle}>
      <SEO title="About" />
      <Helmet>
        <body id="info-page" />
      </Helmet>
        <SmoothScroll color="#000000" location={location} >
            {about.map(({ node }) => {
              const { clients } = node;
              const aboutText = node.childContentfulAboutPageAboutTextTextNode;
              const awardsRecognitionEyebrow = (
                <span>
                  Awards &
                  <br />
              Recognition
                </span>
              );
              const contactInformation = (
                <span>
                  Contact
                  <br />
              Information
                </span>
              );
              const { awardsRecognition } = node;
              infoImage = node.image.fluid.src;
              return (
                <>
                <Bio node={node} />
                </>
              );
            })}
        </SmoothScroll>
        <div className="scroll-wire">
          <div id="rl-scroll-block">
            <div className="rl-block-inner" />
          </div>
        </div>
        <div className="scroll-image">
          <div id="rl-scroll-image">
            <img className="rl-inner-image" src={infoImage} alt="" />
          </div>
        </div>
    </Layout>

  );
};

AboutPage.propTypes = {
  data: PropTypes.objectOf(PropTypes.any).isRequired,
  location: PropTypes.objectOf(PropTypes.any).isRequired,

};

export default AboutPage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulAboutPage {
        edges {
            node {
              socialLinks {
                footerLinkName
                footerSocialName
                footerSocialUrl
                id
              }
            childContentfulAboutPageAboutTextTextNode {
                aboutText
                id
            }
            clients
            awardsRecognition
            image {
                fluid{
                    src
                }
                id
              }
              id
            }
        }
        }
  }
`;
