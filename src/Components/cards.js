import React, { Component } from 'react';
import './../styles/cardstyle.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { MDBIcon} from 'mdbreact';

const Card = (props) => {

  
AOS.init();

  return (
    <div className="col-md-3">
            <div
             className="card grow"
             >
                <img
                 className="card-img-top"
                  src={props.imgUrl}
                  alt="Card cap" />
                <div className="card-body">
                    <p className="card-text">
                      <h5>{props.cardText}
                        <span className="float-right p-3"> <a href="!#"> <MDBIcon icon="arrow-right" /> </a></span>
                      </h5>                   
                    </p>
                </div>
            </div>

    </div>

  )
}



class Cards extends Component{

    state={
        cardData: [
          {id:1,  img: require("./../image/card1.jpg"),  text: "Dulux color of the year" },
          {id:2,  img:require("./../image/card2.jpg"),  text: "Expert help for tips & tricks"},
          {id:3,  img: require("./../image/card3.jpg"),  text: "Expert help for tips & tricks"},
          {id:4,  img:require("./../image/location.jpg"),  text: "Find a store near you"}
        ]
    };


      getCards = () =>{
        const getCard = this.state.cardData.map(data=> <Card
           key={data.id}
           animate={data.anim} 
           imgUrl={data.img}
            cardText={data.text}
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