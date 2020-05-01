import React, { Component } from 'react';
import "./../styles/gallery.css";
import AOS from 'aos';
import './../../node_modules/aos/dist/aos.css';

AOS.init();

class Gallery extends Component{
    state ={
        heading: "Welcome to your world in Colour",
        btn1value: "I have some colours in Mind",
        btn2value: "I'm not sure where to start"
    };
    
    render(){
        return(
            <div className="gallery text-center">
                <div className="container">
                    <h1 
                    data-aos="zoom-in"
                    data-aos-duration="1000"
                    className="text-white font-weight-bold p-3"
                     >{this.state.heading}</h1>
                    <button
                    data-aos="fade-up" 
                    data-aos-duration="1000"
                    className="btn btn-white"
                    >{this.state.btn1value}</button>
                    <button 
                    data-aos="fade-down" 
                    data-aos-duration="1000"
                    className="btn btn-white"
                    >{this.state.btn2value}</button>          
                </div>

            </div>
        );
    }
}

export default Gallery;