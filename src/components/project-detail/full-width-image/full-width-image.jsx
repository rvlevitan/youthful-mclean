import React from 'react';
import Img from 'gatsby-image';

const FullWidthMedia = (props) => {
    const projectEntry = props.projectEntry;
    const contentType = projectEntry.imageFull.file.contentType;
    const url = projectEntry.imageFull.file.url;


    if (contentType.includes("video")) {
        return (
            <section className="full-width-media contain module-spacer">
                <video width="100%" preload='auto' loop autoPlay muted>
                    <source src={url} type="video/mp4" />
                </video>
            </section>
        )
    }

    if (contentType.includes("image")) {

        if (projectEntry.imageFull.fluid !== null && projectEntry.vimeo === null) {
            return (
                <section className="full-width-media contain module-spacer">
                    <Img className="full-width-media__image" fluid={projectEntry.imageFull.fluid} />
                </section>
            );
        }

        if ((projectEntry.imageFull.fluid === null || projectEntry.imageFull.fluid) !== null && projectEntry.vimeo !== null) {
            return (
                <section className="full-width-media contain module-spacer">
                    <div className="full-width-media__container">
                        <iframe className="full-width-media__video" title={projectEntry.id} src={`${projectEntry.vimeo}?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1`} frameBorder="0" webkitallowfullscreen="" mozallowFullScreen="" allowFullScreen="" data-ready="true" />
                    </div>
                </section>
            );
        }
    }
};

export default FullWidthMedia;

