import React, { useEffect } from "react"
import Img from 'gatsby-image';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ImageBlock = (props) => {

    const projectEntry = props.projectEntry;
    const contentType = projectEntry.image.file.contentType;
    const url = projectEntry.image.file.url;

    const scrollbar = props.scrollbar;
    const scroller = props.scroller;
    const scrollTrigger = projectEntry.scrollTrigger;
    let trigger;

    useEffect(() => {

        if (projectEntry.scrollTrigger === true) {
            if (scrollbar && scroller) {

                if (trigger) {
                    trigger.enable();
                }

                const target = document.getElementById(projectEntry.id);
                const targetImage = target.querySelector('.target-image');
                const targetBlock = target.querySelector('.target-block');

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
                        start: "-100%",
                        end: "0%",
                        scrub: true,
                        invalidateOnRefresh: true
                    }
                });
                trigger = ScrollTrigger.getById(projectEntry.id);


                ScrollTrigger.matchMedia({
                    "(max-width: 375px)": function () {

                        if (trigger) {
                            trigger.disable();
                        }
                    },
                    "(min-width: 376px)": function () {
                        // let trigger = ScrollTrigger.getById(projectEntry.id);
                        if (trigger) {
                            trigger.enable();
                        }
                    }
                });

                function update() {
                    ScrollTrigger.getAll().forEach(tl => tl.refresh());
                    scrollbar.update(true);

                }

                tl.addLabel("start")
                    .fromTo(targetImage, { width: "66.43109540636041%" }, { width: "100%" }, "start")
                    .fromTo(targetBlock, { width: "32.791519434628974%" }, { width: "0%" }, "start")
                    .call(update)

            }
        }

        return function cleanup() {
            if (trigger) {
                setTimeout(function () {
                    trigger.disable();
                }, 700);
            }
        }

    }, [scroller, scrollbar, scrollTrigger]);




    if (projectEntry.rightAlign === false || projectEntry.rightAlign === null) {
        if (projectEntry.scrollTrigger === true) {
            return (
                <section key={projectEntry.id} id={projectEntry.id} className="image-block contain module-spacer">
                    <div className="image-block__container">
                        { contentType.includes("video") &&      
                        <div className="target-image image-block__image">
                            <video width="100%" preload='auto' loop autoPlay muted>
                                <source src={url} type="video/mp4" />
                            </video>
                        </div>                  
                        }
                        {
                        contentType.includes("image") &&
                        <Img className="target-image image-block__image" key={projectEntry.image.id} fluid={projectEntry.image.fluid} />
                        }
                        <div className="target-block image-block__block image-block__block--right" />
                    </div>
                </section>
            )
        }
        if (projectEntry.scrollTrigger === false || projectEntry.scrollTrigger === null) {
            return (
                <section key={projectEntry.id} id={projectEntry.id} className="image-block contain module-spacer">
                    <div className="image-block__container">
                    { contentType.includes("video") &&      
                        <div className="target-image image-block__image">
                            <video width="100%" preload='auto' loop autoPlay muted>
                                <source src={url} type="video/mp4" />
                            </video>
                        </div>                  
                        }
                        { contentType.includes("image") &&
                            <Img className="image-block__image" key={projectEntry.image.id} fluid={projectEntry.image.fluid} />
                        }
                        <div className="image-block__block image-block__block--right" />
                    </div>
                </section>
            )
        }
    }

    if (projectEntry.rightAlign === true) {
        if (projectEntry.scrollTrigger === true) {
            return (
                <section key={projectEntry.id} id={projectEntry.id} className="image-block contain module-spacer">
                    <div className="image-block__container image-block__container--right">
                    <div className="target-block image-block__block image-block__block--left"></div>
                    { contentType.includes("video") &&      
                        <div className="target-image image-block__image">
                            <video width="100%" preload='auto' loop autoPlay muted>
                                <source src={url} type="video/mp4" />
                            </video>
                        </div>                  
                        }
                        { contentType.includes("image") &&
                        <Img className="target-image image-block__image" key={projectEntry.image.id} fluid={projectEntry.image.fluid} />
                        }
                    </div>
                </section>
            )
        }
        if (projectEntry.scrollTrigger === false || projectEntry.scrollTrigger === null) {

            return (
                <section key={projectEntry.id} id={projectEntry.id} className="image-block contain module-spacer">
                    <div className="image-block__container image-block__container--right">
                    <div className="image-block__block image-block__block--left"></div>
                    { contentType.includes("video") &&      
                        <div className="target-image image-block__image">
                            <video width="100%" preload='auto' loop autoPlay muted>
                                <source src={url} type="video/mp4" />
                            </video>
                        </div>                  
                        }
                        { contentType.includes("image") &&
                        <Img className="image-block__image" key={projectEntry.image.id} fluid={projectEntry.image.fluid} />
                        }
                    </div>
                </section>
            )
        }

    }

};

export default ImageBlock;

