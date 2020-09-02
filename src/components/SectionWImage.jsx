import React, { Component } from 'react';

class SectionWImage extends Component{
    render(){
        return(
            <div class="grid grid-cols-2 mx-32 shadow-boxshadow p-6">
                <div class="md:flex-shrink-0 px-6 ">
                    <img class="rounded-lg w-400 shadow-2xl p-4" src={this.props.cardImage} />
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