import React from 'react';

const Credits = (props) => {
    const credits = props.post.credits;

    return (
        <section className="credits contain">
            <div className="credits__grid">
                    <h3 className="credits__eyebrow">Credits</h3>
                    <h3 className="credits__text">{credits}</h3>
            </div>
        </section>
    )
};

export default Credits;

