import React from 'react';
import Transition from '../../transition/transition';

const Transporter = (props) => {
    const previous = props.previous;
    const wrapWords = (str, tmpl) => str.replace(/\S+\s*/g, tmpl || '<div>$&</div><br>');
    let spanTitle;
    if (previous !== null) {
    previous.title && (
        spanTitle = wrapWords(`${previous.title}`)
    )
    }

    return (
        <section className="transporter">
            {previous && (
                <Transition to={`/${previous.slug}`} color="#ffffff" background="#000000">
                    <div className="transporter__container contain">
                        <h1 id="next">Next</h1>
                        <div className="transporter__arrow">
                            <svg width="140" height="114" viewBox="0 0 140 114" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M87.9756 0C87.9756 28.225 111.287 51.2109 139.628 51.2109V62.7891C111.287 62.7891 87.9756 85.775 87.9756 114H76.3975C76.3975 92.8127 87.0426 74.1114 103.203 62.7462H0V51.2578H103.209C87.0451 39.893 76.3975 21.1898 76.3975 0H87.9756Z" fill="white" />
                            </svg>
                        </div>
                        <div className="transporter__grid transporter__next-project">
                            <img className="transporter__next-project-image" src={previous.image.fluid.src} alt={previous.title} />

                            <div className="transporter__next-project-meta">
                                <div className="transporter__year">
                                    <h1>{previous.year}</h1>
                                </div>
                                <h1 className="transporter__title">
                                    <div className="transporter__span-title" dangerouslySetInnerHTML={{ __html: spanTitle }} />
                                </h1>
                            </div>
                        </div>

                    </div>
                </Transition>
            )}
        </section>
    );
};

export default Transporter;
