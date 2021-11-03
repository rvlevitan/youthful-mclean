import React, { Component } from 'react';
import TransitionLink from 'gatsby-plugin-transition-link';
import gsap from 'gsap';
import BezierEasing from 'bezier-easing';
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

class Transition extends Component {
  constructor(props) {
    super(props);
    this.pageoffsets = 0;
    this.pageoffset = 0;
  }

  animateIn(entry, node) {

    const color = entry.color;
    const background = entry.background;
    const easing = BezierEasing(0.75, 0, 0.25, 1);
    const time = .7;
    const container = node.querySelector('.main');
    const transitionWipe = 
   `<div class="transition">
 <div class="transition__container"         
            style=
              "background: ${background}"
            >
          <div
            class="transition__grid"
          >
            <div
              style="
                background: ${`linear-gradient(to bottom left, transparent calc(50% - 1px), ${color} calc(50% - 1px), ${color} 50%, transparent 50%)`};
                border: ${`1px solid ${color}`};
                opacity: 0.6;"
            /></div>
            <div
              style="
                background: ${`linear-gradient(to bottom left, transparent calc(50% - 1px), ${color} calc(50% - 1px), ${color} 50%, transparent 50%)`};
                border: ${`1px solid ${color}`};
                opacity: 0.6;"
            /></div>
            <div
              style="
                background: ${`linear-gradient(to bottom left, transparent calc(50% - 1px), ${color} calc(50% - 1px), ${color} 50%, transparent 50%)`};
                border: ${`1px solid ${color}`};
                opacity: 0.6;"
            /></div>
          </div>
          </div>
    </div>`;

    document.body.insertAdjacentHTML('beforeend',transitionWipe);


    function removeElement(element) {
      if (typeof(element) === "string") {
        element = document.querySelector(element);
      }
      return function() {
        element.parentNode.removeChild(element);
      };
    }


    gsap.timeline()
    .set(container, { marginTop: '100vh' })
    .to('.transition', {duration: time, height:"100%", transformOrigin: 'bottom', ease:easing})
    .to(window, {duration: 0, scrollTo: 0})
    .to('.transition__container', {duration: time, height:0, transformOrigin: 'top', ease:easing, delay:0.3})
    .to(container, {duration: time, marginTop:'0vh', ease:easing, delay: -time})
    .call(removeElement(".transition"))

  }

  render() {
    return (
      <>
        <TransitionLink preventScrollJump className = {this.props.className} color= {this.props.color} background= {this.props.background}
          to={this.props.to}
          exit={{
            length: 0.7,
            delay: 0,            
          }}
          entry={{
            color: this.props.color,
            background: this.props.background,
            delay: 0,
            appearAfter: 0.7,
            trigger: ({ entry, node }) => this.animateIn(entry, node),
          }}
        >
          {this.props.children}
        </TransitionLink>

      </>
    );
  }
}

export default Transition;
