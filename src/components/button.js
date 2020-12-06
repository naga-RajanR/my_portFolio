import React, { Component } from 'react'

import styled from 'styled-components'

const Button=styled.button`
outline:none;
padding:10px 13px;
border:1px solid;
z-index:500;
cursor:pointer;
border-radius:8px;
transition:all 0.5s linear;
`
export default class particle extends Component {
    render() {
        return (
        <Button onClick={this.props.click} className={this.props.classname}>{this.props.name}  {this.props.icon &&<i className={this.props.icon}></i>}</Button>
        )
    }
}
