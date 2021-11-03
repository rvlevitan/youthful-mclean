import React, {useEffect} from "react";
import Layout from '../layout';
import SEO from '../seo';
import SmoothScroll from "../smooth-scroll";
import ProjectHeader from "../project-detail/project-header/project-header";

const Password = (props) => {
    const post = props.post;
    const location = props.location;
    const siteTitle = props.siteTitle;
    const textColor = props.textColor;
    const backgroundColor = props.backgroundColor;

useEffect(() => {
    const input = document.querySelector('.protected__input');
    const button = document.querySelector('.protected__submit');
    input.addEventListener('input', updateValue);
    function updateValue(e) {
        const inputValue = input.value;
        if (inputValue.length > 0) {
            button.classList.add("active");
        } else {
            button.classList.remove("active"); 
        }
    }

},[])

    return (
        <Layout location={location} title={siteTitle}>
            <SEO
                title={post.title}
                description={post.subtitle || post.excerpt}
            />
            <SmoothScroll color="#fff" >
                <article className="protected">
                    <ProjectHeader post={post} textColor={textColor} />

                    <div className="protected__form contain">
                        <form id="create-course-form" onSubmit={props.onSubmit}>
                            <input className="protected__input" type='password' value={props.password} placeholder={props.placeholder} onChange={props.onChange} />
                            <button className="protected__submit" type='submit'>
                                <svg width="157" height="128" viewBox="0 0 157 128" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M156.775 57.5C124.953 57.5 98.7791 31.6913 98.7791 0H85.7791C85.7791 23.7906 97.7329 44.7897 115.88 57.5504H0V70.4496H115.88C97.7328 83.2104 85.7791 104.209 85.7791 128H98.7791C98.7791 96.3087 124.953 70.5 156.775 70.5V57.5Z" fill="white" />
                                </svg>
                            </button>
                        </form>
                    </div>
                </article>
            </SmoothScroll>
        </Layout>
    );

}

export default Password;
