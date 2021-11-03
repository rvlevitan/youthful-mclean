import React from 'react';
import Transition from "../transition/transition";
import Img from "gatsby-image";

const Projects = (props) => {

    const posts = props.posts;

    return (
        <section className="grid-case-studies">
            <h1 className="grid-case-studies__heading contain">Selected Work</h1>
            <div className="grid-case-studies__content">
                {posts.map(({ node }, index) => {
                    const title = node.title || node.slug
                    const year = node.year

                    return (

                        <div className={`grid-case-studies__item ${node.class}`} key={index}>
                            <Transition className="list-item-case-study" to={`/${node.slug}`} color={node.textColor} background={node.backgroundColor}>
                                <Img fluid={node.image.fluid} />
                                <div className="list-item-case-study__info">
                                    <h2 className="list-item-case-study__year" >{year}</h2>
                                    <h2 className="list-item-case-study__title" >{title}</h2>
                                </div>
                            </Transition>
                        </div>
                    )
                })}
            </div>
        </section>
    )

}

export default Projects;
