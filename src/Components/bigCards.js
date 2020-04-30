import React, { Component } from 'react';
import BG1 from './../image/bigcard1.jpg';
import BG2 from './../image/bigcard2.jpg';
import BG3 from './../image/bigcard3.jpg';
import BG4 from './../image/bigcard4.jpg';




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
                <div className="col-md-6 mt-5 mb-5">
                    <h3>{props.heading}</h3>
                    <p>{props.para}</p>
                    <button
                     style={styles.btnStyle}
                     className="btn btn-outline-success text-dark mt-3">Readme</button>
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

    render(){
        return(
            <div className="jumbotron grey lighten-5">
                <div 
                className="mx-auto"
                style={{width: "90%"}}>

                    {this.getCards()}
                    
                </div>

            </div>
        );
    }
}

export default BigSection;