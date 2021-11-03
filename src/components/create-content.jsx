import React, { useEffect } from "react";
import Layout from '../components/layout';
import SEO from '../components/seo';
import SmoothScroll from "../components/smooth-scroll";
import Scrollbar from 'smooth-scrollbar';

import ProjectHeader from "../components/project-detail/project-header/project-header";
import ImageBlock from "../components/project-detail/image-block/image-block";
import FullWidthMedia from "../components/project-detail/full-width-image/full-width-image";
import TwoImages from "../components/project-detail/two-images/two-images";
import LargeText from "../components/project-detail/large-text/large-text";
import SmallText from "../components/project-detail/small-text/small-text";
import Spacer from "../components/project-detail/spacer/spacer";
import Credits from "../components/project-detail/credits/credits";
import Transporter from "./project-detail/transporter/transporter";

const CreateContent = (props) => {
    const post = props.post;
    const location = props.location;
    const siteTitle = props.siteTitle;
    const textColor = props.textColor;
    const backgroundColor = props.backgroundColor;
    const previous = props.previous;
    let scroller;
    if (typeof document !== 'undefined') {
     scroller = document.querySelector('.scroll-container');
    }
    const scrollbar = Scrollbar.get(scroller);
    let containers;

    if (post.container !== null) {
        containers = post.container
            .map((projectEntry) => {

                if (projectEntry.__typename === 'ContentfulImageLeftBlock') {
                    return (
                        <ImageBlock key={projectEntry.id} location={location} scrollbar={scrollbar} scroller={scroller} projectEntry={projectEntry} />
                    );
                } else if (projectEntry.__typename === 'ContentfulProjectDetails') {
                    return (
                        <Credits key={projectEntry.id} projectEntry={projectEntry} />
                    );
                } else if (projectEntry.__typename === 'ContentfulFullWidthImage') {
                    return (
                        <FullWidthMedia key={projectEntry.id} projectEntry={projectEntry} />
                    );
                } else if (projectEntry.__typename === 'ContentfulTwoImages') {
                    return (
                        <TwoImages key={projectEntry.id} location={location} scrollbar={scrollbar} scroller={scroller} projectEntry={projectEntry} />
                    );
                } else if (projectEntry.__typename === 'ContentfulLargeText') {
                    return (
                        <LargeText key={projectEntry.id} projectEntry={projectEntry} />
                    )
                } else if (projectEntry.__typename === 'ContentfulSmallText') {
                    return (
                        <SmallText key={projectEntry.id} projectEntry={projectEntry} />
                    )
                } else if (projectEntry.__typename === 'ContentfulSpacer') {
                    return (
                        <Spacer key={projectEntry.id} projectEntry={projectEntry} />
                    )
                }

                return
            });
    }
    return (
        <Layout location={location} title={siteTitle}>
            <SEO title={post.title} description={post.subtitle || post.excerpt} />
            <SmoothScroll color={textColor} >
                <article style={{ backgroundColor, color: textColor }} className="project-detail">
                    <ProjectHeader post={post} textColor={textColor} />
                    <section className="project-content">
                        {containers}
                        {
                        post.credits &&
                         <Credits post={post} />
                        }
                    </section>
                    <Transporter previous={previous} />
                </article>
            </SmoothScroll>
        </Layout>
    );
}

export default CreateContent;
