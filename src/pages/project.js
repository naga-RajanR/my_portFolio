import React, { Component } from 'react'
import styled from 'styled-components';

import Slider from '../components/slider'
import Button from '../components/button'

const ProjectWrapper = styled.div`
// height:100vh;
background: #ececec;
// padding: 30px 20px;
`
const Footer = styled.div`
text-align: center;
margin: 0px 0px 20px 0px;
`
export default class particle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        };
    }
    componentDidMount() {
        
    }
    
    render() {
        return (
            <ProjectWrapper>
                <h2 className='text-align-center font-lg'>Projects</h2>
                <Slider/>
                <Footer>
                <i onClick={this.props.toTop} className=" cursorfas fa-chevron-up fa-2x primary-text"></i>
                </Footer>
            </ProjectWrapper>
        )
    }
}
