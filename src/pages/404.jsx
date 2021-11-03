import React from 'react';
import { graphql } from 'gatsby';
import SEO from '../components/seo';
import Transition from '../components/transition/transition';

const NotFoundPage = () => (
  <>
    <SEO title="404: Not Found" />
    <div className="error contain">
      <div className="error__link">
        <Transition to="/" color="#ffffff" background="#000000">
          <h3>Back To Home</h3>
        </Transition>
      </div>
      <div className="error__message grid">
        <div className="error__block error__col-1-6" />
        <div className="error_text error__col-6-13">
          <div className="error__right">
            <h1>404</h1>
          </div>
          <div className="error__bottom">
            <h1>Page</h1>
            <div className="error__right">
              <h1>Not</h1>
              <h1>Found</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default NotFoundPage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
