import React, { Component } from 'react';
// import styled from 'styled-components';
// import { Controller, Scene } from 'react-scrollmagic';
import $ from 'jquery'
// import Scrollspy from 'react-scrollspy'
import Home from './pages/home'
import About from './pages/about'
import Projects from './pages/project'
import './App.css';

export default class App extends Component {
  scrollDown = () => {
    $('html,body').animate({
      scrollTop: $('#projects').offset().top
    }, 1000);
  }

  changeMenu = () => {
    // if (name === 'home') {
      $("html, body").animate({ scrollTop: 0 }, 1000);
    // } else
      // $('html,body').animate({
      //   scrollTop: $(`#${name}`).offset().top
      // }, 1000);
  }

  render() {
    return (
      <div className="App">
        {/* <div className='menus-wrapper menus'>
          <Scrollspy items={['home', 'about', 'projects']} className='menu-wrapper' currentClassName="is-current">
            <li className='menu-item'><a href="#home">Home</a></li>
            <li className='menu-item'><a href="#about">About</a></li>
            <li className='menu-item'><a href="#projects">Projects</a></li>
          </Scrollspy>
        </div> */}

        <div id='home' className="home"><Home selectTab={this.changeMenu} onclick={this.scrollDown} /></div>
        <div id='about' className='panel'>
          <About selectTab={this.changeMenu} />
        </div>
        <div id='projects' className='panel'>
          <Projects toTop={this.changeMenu}/>
        </div>
      </div>
    );
  }
}
