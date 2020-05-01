import React, { Component } from 'react';

class Footer extends Component{
    render(){
        return(
            <div className="mt-n5">
                <div className="container  text-center">
                    <a href="#!">
                        <img 
                        className="mt-5 mb-2 grow"
                        alt="footerlogo" 
                        src={require('./../image/dulux.jpg')}
                        style={{height: "80px", width: "120px"}}
                        />
                    </a>
                    <p>Copyright @ dulux Designed by me Noor ;p </p>
                </div>

            </div>
        );
    }
}

export default Footer;