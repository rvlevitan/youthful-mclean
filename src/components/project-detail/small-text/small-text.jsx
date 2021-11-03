import React from 'react';

const SmallText = (props) => {
    const projectEntry = props.projectEntry;

    if (projectEntry.indent === true) {
        return (
            <section key={projectEntry.id} className="small-text contain module-spacer">
                <div className="small-text__grid">
                    <h3 className="small-text__text--indent">{projectEntry.childContentfulSmallTextSmallTextTextNode.smallText}</h3>
                </div>
            </section>
        );
    }

    if (projectEntry.indent === false || projectEntry.indent === null) {
        return (
        <section key={projectEntry.id} className="small-text contain module-spacer">
            <div className="small-text__grid">
                <h3 className="small-text__text">{projectEntry.childContentfulSmallTextSmallTextTextNode.smallText}</h3>
            </div>
        </section>
        );
    }


};

export default SmallText;

