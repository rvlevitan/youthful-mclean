import React, { useEffect } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import gsap from 'gsap';
import BezierEasing from 'bezier-easing';

const Footer = () => {
  const data = useStaticQuery(graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulFooter {
      edges {
        node {
          footerLinks {
            id
            footerLinkName
            footerSocialName
            footerSocialUrl
          }
          footerCopyright
          footerTitle
        }
      }
    }
  }
   `);

  const footer = data.allContentfulFooter.edges[0].node;
  const { footerLinks } = footer;
  let touch;
  if (typeof matchMedia !== 'undefined') {
   touch = matchMedia('(hover: none), (pointer: coarse)').matches;
  }
  useEffect(() => {
    if (!touch) {

    const easing = BezierEasing(0.75, 0, 0.25, 1);
    const length = 0.5;

    const slides = document.getElementsByClassName('footer__link-container');
    for (let i = 0; i < slides.length; i += 1) {
      slides.item(i).addEventListener('mouseenter', () => {
        const _this = slides.item(i);
        const hoverMask = _this.querySelector('.footer__hover');
        const hoverMasked = _this.querySelector('.rl-footer-link');
        const hoverElement = _this.querySelector('.footer__hidden');
        const curWidth = hoverElement.offsetWidth;

        gsap.timeline()
          .fromTo(hoverMasked, length,
            {
              scaleX: 1,
            }, {
              scaleX: 0,
              transformOrigin: 'left',
              ease: easing,
            })
          .fromTo(hoverMask, length, {
            width: 0,
            scaleX: 0,
          }, {
            width: curWidth,
            scaleX: 1,
            transformOrigin: 'left',
            translateX: 12,
            ease: easing,
          }, `-=${length}`);
      }, false);

      slides.item(i).addEventListener('mouseleave', () => {
        const _this = slides.item(i);
        const hoverMask = _this.querySelector('.footer__hover');
        const hoverMasked = _this.querySelector('.rl-footer-link');

        gsap.timeline()
          .to(hoverMask, length, {
            width: 0,
            scaleX: 0,
            transformOrigin: 'left',
            ease: easing,

          })
          .to(hoverMasked, length, {
            width: 0,
            scaleX: 1,
            transformOrigin: 'left',
            ease: easing,

          }, `-=${length}`);
      }, false);
    }
  }
  
  }, []);

  return (
    <footer className="footer">
      <div className="footer__right-text">
        <h1>{footer.footerTitle}</h1>
      </div>
      <div className="footer__contact-links">
        {
            footerLinks.map((footerLink) => (
              <div key={footerLink.footerLinkName} className="footer__link-container">
                <a className="footer__link" href={footerLink.footerSocialUrl}>
                  <div className="footer__hover">
                    <div className="footer__hidden">
                      <div className="rl-col-1-3 footer__arrow">
                        <svg width="140" height="114" viewBox="0 0 140 114" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M87.9756 0C87.9756 28.225 111.287 51.2109 139.628 51.2109V62.7891C111.287 62.7891 87.9756 85.775 87.9756 114H76.3975C76.3975 92.8127 87.0426 74.1114 103.203 62.7462H0V51.2578H103.209C87.0451 39.893 76.3975 21.1898 76.3975 0H87.9756Z" fill="white" />
                        </svg>
                      </div>
                      <h1>{footerLink.footerLinkName}</h1>
                    </div>
                  </div>
                  <h1 className="rl-footer-link">{footerLink.footerSocialName}</h1>
                </a>
              </div>
            ))
          }
      </div>
      <div className="footer__copyright"><h2>{footer.footerCopyright}</h2></div>
    </footer>
  );
};

export default Footer;
