import React, { Component } from 'react';
import BG1 from './../image/bigcard1.jpg';
import BG2 from './../image/bigcard2.jpg';
import BG3 from './../image/bigcard3.jpg';
import BG4 from './../image/bigcard4.jpg';
import FC1 from './../image/fullcard.jpg';
import FC2 from './../image/fullcard2.jpg';
import FC3 from './../image/fullcard3.jpg';
import FC4 from './../image/fullcard4.jpg';
import { MDBIcon } from 'mdbreact';

const BigCard =(props) =>{

        const styles = {
            imgStyle: {
                backgroundImage: `url(${props.bgImg})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                height: "400px"
            },
            btnStyle: {
                borderRadius: "5px 15px"
            }
        }
    return(
        <div className="row bg-white mt-5">
                <div 
                style={styles.imgStyle} 
                className="col-md-6"></div>
                <div 
                className="col-md-6 mt-5 mb-5">
                    <h3>{props.heading}</h3>
                    <p>{props.para}</p>
                    <button
                     style={styles.btnStyle}
                     className="btn btn-outline-success text-dark mt-3">Readme</button>
                </div>
        </div>
    );
}


const FullCard = (props) =>{
    
    const styles = {
        bgStyle: {
            backgroundImage: `url(${props.bigbg})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                height: "500px",
                position: "relative"
        },
        smalldiv: {
                position: "absolute",
                bottom: 0,
                borderRadius: "0px 40px" 
        }
    };

    return(
        <div 
        style={styles.bgStyle}
        className="mt-5">
                <div
                 className={`${props.divcolor} text-${props.textColor}  m-3 p-3 d-inline-block`} 
                 style={styles.smalldiv}>
                     <p>{props.smallpara}</p>
                     <h5>{props.ttlhead}</h5>
                     <p>{props.largepara}</p>
                     <button className={`btn mt-2 btn-${props.btnstyle}`}>{props.btntext}</button>
                </div>

        </div>
    );
    
}

class BigSection extends Component{

    state = {
        cardData: [
            {    id:1,
                heading: "Dulux Colour of the Year 2020 - Tranquil Dawn™", 
                paragraph: "Every year, Dulux colour experts translate global design trends into the new Colour of the Year. 2020's shade, Tranquil Dawn, has an air of calm and clarity that captures the mood of the new decade. Discover how this beautifully versatile colour and our four complementary palettes can transform your home.",
                bg: BG1
            },

            {   id:2,
                heading: "Dulux EasyCare™️ with KidProof+ Technology", 
                paragraph: "Keeping your walls clean from stains and bacteria is easier than ever with added anti-bacterial properties.",
                bg: BG2
            },

            {   id:3,
                heading: "Dulux Weathershield Powerflexx Nature Challenge", 
                paragraph: "Introducing Dulux Weathershield Powerflexx™, the exterior paint that uses state-of-the-art technology to protect your walls like no other.",
                bg: BG3
            },

            {   id:4,
                heading: "Bring Home the Colours of the World", 
                paragraph: "The easiest way to turn your decorating dreams into a reality.",
                bg: BG4
            },
        ],

        fullCardData: [
            {
                id: 1,
                bg: FC1,
                para1: "Partnership with new Velvet Touch",
                para2: "Giving Cafe Zouk a completely new look using Dulux super-premium Velvet Touch paint.",
                title: "Dulux celebrates Café Zouk",
                btnText: "See More",
                bgcolor: "white",
                textcolor: "dark",
                btnclss: "success"
            },

            
            {
                id: 2,
                bg: FC2,
                para1: "Magic Made Easy",
                para2: "Explore 8 unique and inspirational collections for your child's room.",
                title: "Dulux Far Away Places",
                btnText: "Shop Now",
                bgcolor: "deep-purple darken-4",
                textcolor: "white",
                btnclss: "primary"
            },

            
            {
                id: 3,
                bg: FC3,
                para1: "Magic Made Easy",
                para2: "Explore 8 unique and inspirational collections for your child's room.",
                title: "Dulux Far Away Places",
                btnText: "Learn how & get Inspired",
                bgcolor: "white",
                textcolor: "dark",
                btnclss: "success"
            },

             
            {
                id: 4,
                bg: FC4,
                para1: "Magic Made Easy",
                para2: "Explore 8 unique and inspirational collections for your child's room.",
                title: "Dulux Far Away Places",
                btnText: "Shop Now",
                bgcolor: "deep-purple darken-4",
                textcolor: "white",
                btnclss: "primary"
            }
        ]
    }

        

        getCards =() =>{
            const getcards = this.state.cardData.map(data=>
             <BigCard 
             key={data.id} 
             heading={data.heading} 
             para={data.paragraph} 
             bgImg={data.bg} />);

             return getcards;
        }

        getFullCards = () =>{
            const getfullcards = this.state.fullCardData.map(data=>
                <FullCard
                    key={data.id}
                    smallpara={data.para1}
                    largepara={data.para2}
                    ttlhead={data.title}
                    bigbg={data.bg}
                    btntext={data.btnText}
                    btnstyle={data.btnclss}
                    divcolor={data.bgcolor}
                    textColor={data.textcolor}
                />

            );

            return getfullcards;
        }

    render(){
        return(
            <div className="jumbotron grey lighten-5">
                <div 
                className="mx-auto"
                style={{width: "90%"}}>
                    {this.getCards()}
                    {this.getFullCards()}
                    <div className="text-center mt-5" >
                        <h4 className="text-dark font-weight-bold">Add some colour to your feed</h4>
                           <a href="!#"><MDBIcon className="p-2" fab icon="facebook-square" size="2x" /> </a>
                           <a href="!#"><MDBIcon className="p-2 red-text" fab icon="instagram" size="2x" /> </a>
                           <a href="!#"><MDBIcon className="p-2 red-text" fab icon="youtube" size="2x" /> </a>
                    </div>
                </div>

            </div>
        );
    }
}

export default BigSection;