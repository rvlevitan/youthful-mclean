import React, { useEffect } from "react"
import Img from 'gatsby-image';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


const TwoImages = (props) => {

    const projectEntry = props.projectEntry;
    const scrollbar = props.scrollbar;
    const scroller = props.scroller;
    const contentTypeImage1 = projectEntry.image1.file.contentType;
    const urlImage1 = projectEntry.image1.file.url;
    const contentTypeImage2 = projectEntry.image1.file.contentType;
    const urlImage2 = projectEntry.image1.file.url;

    let trigger;

    useEffect(() => {
        if (scrollbar && scroller) {

            if (projectEntry.pin === true) {

                const target = document.getElementById(projectEntry.id);
                const targetImage = target.querySelector('.pin-image');

                ScrollTrigger.scrollerProxy(scroller, {
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
                        id: projectEntry.id,
                        trigger: target,
                        start: "top 12px",
                        end: self => "+=" + (target.offsetHeight - self.pin.offsetHeight),
                        scrub: true,
                        pin: targetImage,
                        invalidateOnRefresh: true
                    }
                });

                trigger = ScrollTrigger.getById(projectEntry.id);

                ScrollTrigger.matchMedia({
                    "(max-width: 375px)": function () {
                        let trigger = ScrollTrigger.getById(projectEntry.id);
                        if (trigger) {
                            trigger.disable();
                        }
                    },
                    "(min-width: 376px)": function () {
                        let trigger = ScrollTrigger.getById(projectEntry.id);
                        if (trigger) {
                            trigger.enable();
                        }
                    }
                });

            }
        }

        return function cleanup() {
            if (trigger) {
                setTimeout(function () {
                    trigger.kill();
                }, 700);
            }
        }

    }, [scrollbar, scroller])

    if (projectEntry.rightAlign === false || projectEntry.rightAlign === null) {
        if (projectEntry.pin === true) {
            return (
                <section id={projectEntry.id} className="two-images-left contain module-spacer">
                    <div className="two-images-left__container">
                        {contentTypeImage1.includes("video") &&
                            <div className="two-images-left__image two-images-left__image--left">
                                <video width="100%" preload='auto' loop autoPlay muted>
                                    <source src={urlImage1} type="video/mp4" />
                                </video>
                            </div>
                        }
                        {
                            contentTypeImage1.includes("image") &&
                            <Img className="two-images-left__image two-images-left__image--left" key={projectEntry.image1.id} fluid={projectEntry.image1.fluid} />
                        }
                        {contentTypeImage2.includes("video") &&
                            <div className="pin-image two-images-left__image two-images-left__image--right">
                                <video width="100%" preload='auto' loop autoPlay muted>
                                    <source src={urlImage2} type="video/mp4" />
                                </video>
                            </div>
                        }
                        {contentTypeImage2.includes("image") &&
                            <Img className="pin-image two-images-left__image two-images-left__image--right" key={projectEntry.image2.id} fluid={projectEntry.image2.fluid} />
                        }
                    </div>
                </section>
            )
        }
        else if (projectEntry.pin === false || projectEntry.pin === null) {
            return (
                <section id={projectEntry.id} className="two-images-left contain module-spacer">
                    <div className="two-images-left__container">
                        {contentTypeImage1.includes("video") &&
                            <div className="two-images-left__image two-images-left__image--left">
                                <video width="100%" preload='auto' loop autoPlay muted>
                                    <source src={urlImage1} type="video/mp4" />
                                </video>
                            </div>
                        }
                        {contentTypeImage1.includes("image") &&
                            <Img className="two-images-left__image two-images-left__image--left" key={projectEntry.image1.id} fluid={projectEntry.image1.fluid} />
                        }
                        {contentTypeImage2.includes("video") &&
                            <div className="two-images-left__image two-images-left__image--right">
                                <video width="100%" preload='auto' loop autoPlay muted>
                                    <source src={urlImage2} type="video/mp4" />
                                </video>
                            </div>
                        }
                        {contentTypeImage2.includes("image") &&
                            <Img className="two-images-left__image two-images-left__image--right" key={projectEntry.image2.id} fluid={projectEntry.image2.fluid} />
                        }
                    </div>
                </section>
            )
        }

    }

    if (projectEntry.rightAlign === true) {
        if (projectEntry.pin === true) {
            return (
                <section id={projectEntry.id} className="two-images-right contain module-spacer">
                    <div className="two-images-right__container">
                        {contentTypeImage1.includes("video") &&
                            <div className="pin-image two-images-right__image two-images-right__image--left">
                                <video width="100%" preload='auto' loop autoPlay muted>
                                    <source src={urlImage1} type="video/mp4" />
                                </video>
                            </div>
                        }
                        {contentTypeImage1.includes("image") &&
                            <Img className="pin-image two-images-right__image two-images-right__image--left" key={projectEntry.image1.id} fluid={projectEntry.image1.fluid} />
                        }
                        {contentTypeImage2.includes("video") &&
                            <div className="two-images-right__image two-images-right__image--right">
                                <video width="100%" preload='auto' loop autoPlay muted>
                                    <source src={urlImage2} type="video/mp4" />
                                </video>
                            </div>
                        }
                        {contentTypeImage2.includes("image") &&
                            <Img className="two-images-right__image two-images-right__image--right" key={projectEntry.image2.id} fluid={projectEntry.image2.fluid} />
                        }
                    </div>
                </section>
            )
        }

        else if (projectEntry.pin === false || projectEntry.pin === null) {
            return (
                <section id={projectEntry.id} className="two-images-right contain module-spacer">
                    <div className="two-images-right__container">
                        {contentTypeImage1.includes("video") &&
                            <div className="two-images-right__image two-images-right__image--left">
                                <video width="100%" preload='auto' loop autoPlay muted>
                                    <source src={urlImage1} type="video/mp4" />
                                </video>
                            </div>
                        }
                        {contentTypeImage1.includes("image") &&
                            <Img className="two-images-right__image two-images-right__image--left" key={projectEntry.image1.id} fluid={projectEntry.image1.fluid} />
                        }
                        {contentTypeImage2.includes("video") &&
                            <div className="two-images-right__image two-images-right__image--right">
                                <video width="100%" preload='auto' loop autoPlay muted>
                                    <source src={urlImage2} type="video/mp4" />
                                </video>
                            </div>
                        }
                        {contentTypeImage2.includes("image") &&
                            <Img className="two-images-right__image two-images-right__image--right" key={projectEntry.image2.id} fluid={projectEntry.image2.fluid} />
                        }
                    </div>
                </section>
            )
        }
    }

};

export default TwoImages;

