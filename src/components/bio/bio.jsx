import React from 'react';

const Bio = (props) => {
  const node = props.node;
  const aboutText = node.childContentfulAboutPageAboutTextTextNode;
  const clients = node.clients;
  const awardsRecognition = node.awardsRecognition;

  return (
    <div className="bio grid contain">
      <div className="bio__info-container">
        <p className="bio__text">{aboutText.aboutText}</p>
        <div className="bio__meta-container">
          <section className="bio__meta-info">
            <h3 className="bio__meta-eyebrow">Clients</h3>
            <h3 className="bio__meta-content">{clients}</h3>
          </section>
          <div className="bio__meta-info">
            <h3 className="bio__meta-eyebrow">Awards & <br/> Recognition</h3>
            <h3 className="bio__meta-content">{awardsRecognition}</h3>
          </div>
          <div className="bio__meta-info">
            <h3 className="bio__meta-eyebrow">Contact</h3>
            <div className="bio__meta-content">
              {node.socialLinks.map((socialLink) => (
                <h3 key={socialLink.id}>
                  <a href={socialLink.footerSocialUrl}>
                    {socialLink.footerSocialName}
                  </a>
                </h3>
              ))}
            </div>
          </div>
          <div className="bio__meta-info">
            <h3 className="bio__meta-eyebrow">Developed By</h3>
            <div className="bio__meta-content">
              <h3><a href="https://fix.studio">Kostas Riginos</a></h3>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Bio;
