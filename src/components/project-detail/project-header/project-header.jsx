import React from 'react';

const ProjectHeader = (props) => {

    const post = props.post;
    const textColor = props.textColor;

    return (
        <header className="project-header contain">
            <div className="project-header__text-align-right">
                <h1 className="project-header__year">{post.year}</h1>
                <div style={{ backgroundColor: textColor }} className="project-header__dash" />
            </div>
            <div className="project-header__title">
                <h1>{post.title}</h1>
            </div>
        </header>
    );
};

export default ProjectHeader;

