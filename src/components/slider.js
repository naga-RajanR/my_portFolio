import React, { Component } from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styled from 'styled-components'

const responsive = {
    desktop: {
        breakpoint: {
            max: 3000,
            min: 1024
        },
        items: 4,
        partialVisibilityGutter: 40
    },
    mobile: {
        breakpoint: {
            max: 600,
            min: 0
        },
        items: 1,
        partialVisibilityGutter: 0
    },
    tablet: {
        breakpoint: {
            max: 1024,
            min: 600
        },
        items: 2,
        partialVisibilityGutter: 0
    }
}

const projects = [
    {
        title: 'TwigsPG', description: 'Help the users to find the hotels/hostels according to their needs.',
        techs: ['Gatsby JS', 'Prisma', 'Graphql', 'Leaflet'],
        image: 'https://d274ft55l0imju.cloudfront.net/hotels_app_img/hotelhero.png'
    },
    {
        title: 'Connections', description: "Connections is the Belgium travel agency project of its available tourism packages and it's a pre booking online application.",
        techs: ['React JS', 'Redux',],
        image: 'https://p4.wallpaperbetter.com/wallpaper/106/820/998/tourism-travel-london-england-wallpaper-preview.jpg'
    },
    {
        title: 'Bazaartrack', description: "To sell & buy the products like OLX without any intermediator and have other features like connecting with other users and following them.",
        techs: ['React JS', 'Redux', 'PWA', 'SEO','Google maps'],
        image: 'https://fundingsage.com/wp-content/uploads/2016/01/business-3152586_1280-1024x739.jpg'
    },
    {
        title: 'Q&A', description: "Let the users to ask and answer the questions and share their views with some advanced features.",
        techs: ['React JS', 'Redux','Pusher'],
        image: 'https://www.teahub.io/photos/full/88-880026_web-design-images-hd.jpg'
    },
]

// const images = [
//     "https://d274ft55l0imju.cloudfront.net/hotels_app_img/hotelhero.png",
//     "https://p4.wallpaperbetter.com/wallpaper/106/820/998/tourism-travel-london-england-wallpaper-preview.jpg",
//     "https://www.teahub.io/photos/full/88-880026_web-design-images-hd.jpg",
//     "https://fundingsage.com/wp-content/uploads/2016/01/business-3152586_1280-1024x739.jpg"
// ];

const SingleCardWrapper = styled.div`
padding:10px 13px;
text-align:center;
`
const Title = styled.h3`
margin:0px;
`
const Description = styled.p`
margin:0px;
`
const ListsWrapper = styled.ul`
list-style:none;
display: flex;
flex-wrap: wrap;
padding:0px;
margin-top:10px;
justify-content:center;
`
const List = styled.li`
border-radius: 6px;
background:#ff4e60;
color: white;
padding: 6px 15px;
margin:6px;
font-size: 14px;
`
const Image = styled.img`
width:100%;
height:280px;
object-fit:cover;
border-radius:8px 8px 0px 0px;
filter: brightness(0.6);
`
export default class Slider extends Component {
    render() {
        return (
            <div>
                <Carousel
                    additionalTransfrom={0}
                    arrows={false}
                    autoPlay={true}
                    autoPlaySpeed={2000}
                    // centerMode={true}
                    className="project-slider"
                    containerClass="container-with-dots"
                    dotListClass=""
                    draggable={false}
                    focusOnSelect={true}
                    infinite={true}
                    itemClass="single-item"
                    keyBoardControl
                    minimumTouchDrag={80}
                    partialVisbile={true}
                    renderButtonGroupOutside={false}
                    slidesToSlide={1}
                    renderDotsOutside={false}
                    responsive={responsive}
                >
                    {projects.map((x,i) => {
                        return (<div key={i}>
                            <Image
                                src={x.image}
                            />
                            <SingleCardWrapper>
                                <Title>{x.title}</Title>
                                <Description>{x.description}</Description>
                                <ListsWrapper>
                                {x.techs.map((tech,ind) => { return <List key={ind}>{tech}</List> })}
                                </ListsWrapper>
                            </SingleCardWrapper>
                        </div>
                        );
                    })}
                </Carousel>
            </div>
        )
    }
}
