import React from "react";
import { graphql } from 'gatsby';
import CreateContent from "../components/create-content";
import Password from "../components/password/password";


class BlogPostContentfulTemplate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: '',
      secretVisible: false,
      placeholder:'Password'
    };
    const { data } = this.props;
     this.passkey = data.contentfulPost.password;

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    
  }

  UNSAFE_componentWillMount() {
    let rememberMe;
   
    if (typeof localStorage !== 'undefined') {
        rememberMe = localStorage.getItem('secretVisible');
    }
    this.setState({
      secretVisible: rememberMe
    });
  }

  checkPassword(password) {
    if (password === this.passkey) {
      return true;
    }
    return false;
  }

  handleChange(e) {
    e.preventDefault();
    this.setState({
      password: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    localStorage.setItem('secretVisible', this.checkPassword(this.state.password));
    this.setState({
      secretVisible: this.checkPassword(this.state.password),
      password: "",
      placeholder: "Try Again"
    });
    const button = document.querySelector('.protected__submit');
    button.classList.remove("active"); 

  }

  render() {
    const secretVisible = this.state.secretVisible;
    const { pageContext } = this.props;
    const { location } = this.props;
    const previous = pageContext.previous;
    const { data } = this.props;
    const post = data.contentfulPost;
    const siteTitle = data.site.siteMetadata.title;
    let pageToDisplay;
    let backgroundColor;
    let textColor;

    if (post.backgroundColor !== null) {
      backgroundColor = post.backgroundColor;
    } else {
      backgroundColor = '#ffffff';
    }

    if (post.textColor !== null) {
      textColor = post.textColor;
    } else {
      textColor = '#000000';
    }

    if (post.passwordProtect === true) {
      if (secretVisible) {
        pageToDisplay = <CreateContent post={post} location={location} previous={previous} textColor={textColor} backgroundColor={backgroundColor} siteTitle={siteTitle} />
      }
      else {
        pageToDisplay = <Password password={this.state.password} location={location} placeholder={this.state.placeholder} post={post} siteTitle={siteTitle} textColor={textColor} backgroundColor={backgroundColor} onChange={this.handleChange} onSubmit={this.handleSubmit} />;
      }
      return (
        <>
          {pageToDisplay}
        </>
      );
    } else if (post.passwordProtect === false || post.passwordProtect === null) {
        pageToDisplay = <CreateContent post={post} location={location} previous={previous} textColor={textColor} backgroundColor={backgroundColor} siteTitle={siteTitle} />
      return (
        <>
          {pageToDisplay}
        </>
      );
    }
  }
}

export default BlogPostContentfulTemplate;
export const pageQuery = graphql`
  query ContentfulBlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    contentfulPost( slug: {eq: $slug }) {
      title
      year
      credits
      passwordProtect
      password
      backgroundColor
      textColor
      image {
        fluid (maxWidth: 2750, quality: 100) {
         ...GatsbyContentfulFluid
        }
      }
      container {
          ... on ContentfulSpacer {
            spaceAmount
            id
          }
          ... on ContentfulSmallText {
            childContentfulSmallTextSmallTextTextNode {
              smallText
            }
            indent
            id
          }
          ... on ContentfulLargeText {
            id
            childContentfulLargeTextLargeTextTextNode {
              largeText
            }
          }
          ... on ContentfulImageLeftBlock {
            internal {
              type
            }
            rightAlign
            image {
              fluid (maxWidth: 2750, quality: 100) {
                ...GatsbyContentfulFluid
              }
              file {
                contentType
                url
              }
              id
            }
            scrollTrigger
            id
          }
          ... on ContentfulFullWidthImage {
            id
            vimeo
            imageFull {
              fluid (maxWidth: 2750, quality: 100) {
                ...GatsbyContentfulFluid
              }
              file {
                contentType
                url
              }
              id
            }
          }
        ... on ContentfulTwoImages {
          id
          rightAlign
          pin
          image1 {
            fluid (maxWidth: 2750, quality: 100) {
              ...GatsbyContentfulFluid
            }
            file {
              contentType
              url
            }
            id
          }
          image2 {
            fluid (maxWidth: 2750, quality: 100) {
              ...GatsbyContentfulFluid
            }
            file {
              contentType
              url
            }
            id
          }
        }
      }
    }
  }
`;
