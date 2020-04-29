import React, { Component } from 'react';
import './../styles/cardstyle.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {  MDBCard, MDBCardBody, MDBCardTitle, MDBIcon } from 'mdbreact';

const Card = (props) => {

  
AOS.init();

    const styles ={
        cardImage: {
            height: 200,
            width: 500
        }
    }

  return (
    <div className="col-md-3">
      <MDBCard 
      data-aos={props.animate}
      data-aos-duration="1000"
      >
        <img
          alt="card"
         style={styles.cardImage}
         className="img-fluid"
          src={props.imgUrl}
          />
        <MDBCardBody>
          <MDBCardTitle>{props.cardTitle}
          <span className="float-right">
          <a className="p-2" to="!#">
              <MDBIcon  icon = "arrow-right" />
          </a>
          </span>
          </MDBCardTitle>
        </MDBCardBody>
      </MDBCard>
      </div>
  )
}



class Cards extends Component{

    state={
        cardData: [
          {id:1,  img: require("./../image/card1.jpg"),  text: "Dulux color of the year", anim: "fade-right" },
          {id:2,  img:require("./../image/card2.jpg"),  text: "Expert help for tips & tricks",anim: "fade-left"},
          {id:3,  img: require("./../image/card3.jpg"),  text: "Expert help for tips & tricks",anim: "fade-right"},
          {id:3,  img:require("./../image/location.jpg"),  text: "Find a store near you",anim: "fade-left"},
        ]
    };


      getCards = () =>{
        const getCard = this.state.cardData.map(data=> <Card
           key={data.id}
           animate={data.anim} 
           imgUrl={data.img}
            cardTitle={data.text}
             />);
        return getCard;
      }

    render(){
        return(
            <div className="container-fluid mt-2">
                <div className="row">
                      {this.getCards()}
                </div>  

            </div>
        );
    }
}
export default Cards;