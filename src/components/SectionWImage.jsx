import React, { Component } from 'react';

class SectionWImage extends Component{
    render(){
        return(
            <div class="md:flex px-32 -mt-16 ">
                <div class="md:flex-shrink-0 px-6 ">
                    <img class="rounded-lg w-400 shadow-2xl p-4" src={this.props.cardImage} alt="Woman paying for a purchase" />
                </div>
                <div>
                <div class="font-bold text-3xl mb-2 text-center text-blue-light">{this.props.h}</div>    
                <p class="font-medium text-xl mb-2  text-blue-dark text-base">{this.props.p}</p>
                </div>
                
                
            </div>
        );
    }
}

export default SectionWImage;