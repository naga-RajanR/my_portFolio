import React, { Component } from 'react'
import styled from 'styled-components'

import Pdf from '../images/resume.pdf'
import Button from '../components/button'
import Particles from 'react-particles-js';

const MenuWrapper=styled.ul`
position: absolute;
z-index: 10;
top: 0;
right: 50px;
display: flex;
align-items: center;
padding:0px;
list-style: none;
`
const MenuItem=styled.li`
color:#fff;
cursor:pointer;
margin: 10px 20px;
`

const config = {
    "particles": {
        "number": {
            "value": 20,
            "density": {
                "enable": true,
                "value_area": 800
            }
        },
        "color": {
            "value": "#ffffff"
        },
        "shape": {
            "type": "polygon",
            "stroke": {
                "width": 2,
                "color": "#000000"
            },
            "polygon": {
                "nb_sides": 5
            },
            "image": {
                "src": "img/github.svg",
                "width": 100,
                "height": 100
            }
        },
        "opacity": {
            "value": 0.4649894976510016,
            "random": false,
            "anim": {
                "enable": false,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
            }
        },
        "size": {
            "value": 6,
            "random": true,
            "anim": {
                "enable": false,
                "speed": 40,
                "size_min": 0.1,
                "sync": false
            }
        },
        "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#ffffff",
            "opacity": 0.1122388442605866,
            "width": 0.4810236182596568
        },
        "move": {
            "enable": true,
            "speed": 6,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
            }
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": true,
                "mode": "repulse"
            },
            "onclick": {
                "enable": true,
                "mode": "push"
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 400,
                "line_linked": {
                    "opacity": 1
                }
            },
            "bubble": {
                "distance": 400,
                "size": 40,
                "duration": 2,
                "opacity": 8,
                "speed": 3
            },
            "repulse": {
                "distance": 200,
                "duration": 0.4
            },
            "push": {
                "particles_nb": 4
            },
            "remove": {
                "particles_nb": 2
            }
        }
    },
    "retina_detect": true
}
export default class particle extends Component {
    // onSignIn(googleUser) {
    //     console.log('user',googleUser)
    //     var profile = googleUser.getBasicProfile();
    //     console.log("ID: " + profile.getId()); // Don't send this directly to your server!
    //     console.log('Full Name: ' + profile.getName());
    //     console.log('Given Name: ' + profile.getGivenName());
    //     console.log('Family Name: ' + profile.getFamilyName());
    //     console.log("Image URL: " + profile.getImageUrl());
    //     console.log("Email: " + profile.getEmail());
    //   }
    //  fbShare =()=>{
    //     window.FB.ui({
    //         method: 'share',
    //         href: 'https://developers.facebook.com/docs/',
    //       }, function(response){});
    //  }
    render() {
        return (
            <div className='home-page-container'>
                <Particles
                className="particleWrapper"
                params={config} />
                <MenuWrapper className='menus'>
                    <MenuItem><a rel="noopener noreferrer" target='_blank' href='https://www.linkedin.com/in/nagarajan-r-aa6647192/'><i  className="fab fa-linkedin fa-2x primary-text"></i></a></MenuItem>
                    <MenuItem><a target='_blank' rel="noopener noreferrer" href={Pdf}><i className="fas fa-file-pdf primary-text fa-2x"></i></a></MenuItem>
                </MenuWrapper>
              {/* <div className='responsive-section'>
                <h1 className='text-light'>Responive is loading...</h1>
              </div> */}
              <div className='intro-section'>
                <h1 className='text-light'>Hello I'm <span className='highlight-text'>Nagarajan..</span></h1>
               <Button classname='home-button' click={this.props.onclick} icon='fa fa-arrow-right' name='View my works'></Button>
               {/* <div class="g-signin2" data-onsuccess={this.fbShare} data-theme="dark"></div> */}
              </div>
            </div>
        )
    }
}
