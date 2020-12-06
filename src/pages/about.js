import React, { Component } from 'react'
import styled from 'styled-components';
import ReactPaginate from 'react-paginate';

import ProfileImg from '../images/nagaa.jpeg'

const skillArr = [{ "icon": 'fab fa-html5', "title": 'Html5', "body": 'DOM, semantic tags, IDs and classes, tables, forms, audio/video embeds.' }
    , { "icon": 'fab fa-css3-alt', "title": 'css3', "body": 'Selectors, properties, pseudo-classes, media queries and responsive design, animation and transitions.' },
{ "icon": 'fab fa-js', "title": 'javascript', "body": 'Variables, numbers, strings, booleans, arrays and objects, methods and functions, conditions, loops, DOM manipulation, ES6 features (classes, arrow functions, etc.), map, filter, reduce.' },
{ "icon": 'fab fa-react', "title": 'react js', "body": 'Components, props, state, in development and production environments.' },
{ "icon": 'fab fa-react', "title": 'redux', "body": 'actions, reducers, store, redux-saga' },
{ "icon": 'fab fa-git-alt', "title": 'git', "body": 'Basic Git workflow tasks: git add, git commit, git push, git pull, branching, merging, working with Github.' }]


const ProjectWrapper = styled.div`
// height:100vh;
background: #ececec;
padding: 30px 0px;
`
const ProfileWrapper = styled.div`
display:flex;
justify-content:space-between;
aluign-items:center;
margin-top:20px;
padding:0px 20px;
`
const Profile = styled.div`
text-align:center;
width:42%;
// padding:0px 20;
`
const About = styled.div`
padding:0px;
width:58%;
margin:0px 0px 0px 20px;
&{
p{
    margin:0px;
}    
}
`
const ProfileImage = styled.img`
clip-path: polygon(25% 0,100% 0,75% 100%,0 100%);
width:250px;
`
const SkillsContainer = styled.div`
margin:20px 0px;

`
const Header = styled.div`
display:flex;
align-items: flex-end;
margin-bottom: 8px;
&{
  h3{
      text-transform:uppercase;
      font-weight:normal;
      margin:0px 5px;
  }  
}
`

export default class particle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            offset: 0,
            data: [],
            elements: [],
            perPage: 3,
            currentPage: 0,
        };
    }
    componentDidMount() {
        this.setState({
            data: skillArr,
            pageCount: Math.ceil(skillArr.length / this.state.perPage)
        }, () => this.setElementsForCurrentPage());
    }
    setElementsForCurrentPage() {
        let elements = this.state.data
            .slice(this.state.offset, this.state.offset + this.state.perPage)
            .map((data, index) => {
                return <div className='mx-10'>
                    <Header>
                        <i className={`${data.icon} fa-3x primary-text`}></i>
                        <h3><strong>{data.title}</strong></h3>
                    </Header>
                    <p className='font-sm skills-body-content'>{data.body}</p>
                </div>
            })
        this.setState({ elements: elements });
    }
    handlePageClick = (data) => {
        const selectedPage = data.selected;
        const offset = selectedPage * this.state.perPage;
        this.setState({ currentPage: selectedPage, offset: offset }, () => {
            this.setElementsForCurrentPage();
        });
    }
    render() {
        let paginationElement;
        if (this.state.pageCount > 1) {
            paginationElement = (
                <ReactPaginate
                    previousLabel={<i className="fas fa-chevron-left fa-2x"></i>}
                    nextLabel={<i className="fas fa-chevron-right fa-2x"></i>}
                    breakLabel={<span className="gap">...</span>}
                    pageCount={this.state.pageCount}
                    onPageChange={this.handlePageClick}
                    forcePage={this.state.currentPage}
                    containerClassName={"pagination"}
                    previousLinkClassName={"previous_page"}
                    nextLinkClassName={"next_page"}
                    disabledClassName={"disabled"}
                    activeClassName={"active"}
                />
            );
        }
        return (
            <ProjectWrapper>
                <h2 className='text-align-center font-lg'>About</h2>
                <ProfileWrapper>
                    <Profile>
                        <ProfileImage alt='foto'
                            src={ProfileImg} />
                        <p className='font-18'>I'm a <strong>Front-End Developer</strong> for Siam Computing in Chennai, India.
                        I have serious passion for UI effects and building user experience, dynamic and responsive websites and apps.</p>
                    </Profile>
                    <About>
                        <p className='font-18'>These are the languages, frameworks, libraries and tools I've learned and used so far</p>
                        <SkillsContainer>
                            {this.state.elements}
                            {paginationElement}
                        </SkillsContainer>
                    </About>
                </ProfileWrapper>
            </ProjectWrapper>
        )
    }
}
