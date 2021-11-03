import React from 'react';

const LargeText = (props) => {
    const projectEntry = props.projectEntry;

    return (
        <section className="large-text contain">
            <h2 className="large-text__text">{projectEntry.childContentfulLargeTextLargeTextTextNode.largeText}</h2>
        </section>
    );

};

export default LargeText;

