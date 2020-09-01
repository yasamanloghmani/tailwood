import React, { Component } from 'react';
import Header from './Header';
import mainimage from './maindashboard.png';
class Card extends Component{
    render(){
        return(
            <div className='my-32'>
                <div class="max-w-4xl mx-auto rounded overflow-hidden shadow-lg p-24">
                <img class="w-full mb-16" src={this.props.cardImage} alt="Sunset in the mountains" />
                <div class="px-6 py-4">
                    <div class="mb-8 font-bold text-3xl mb-2 text-center text-blue-light">{this.props.h}</div>
                    <p class="font-medium text-xl mb-2  text-blue-dark text-base">
                        {this.props.p}                    
                    </p>
                    <p class="font-medium text-xl mb-2  text-blue-dark text-base">
                        {this.props.p2}                    
                    </p>
                </div>
                <div class="px-6 pt-4 pb-2">
                    <span class="inline-block bg-blue-dark rounded-full px-3 py-1 text-sm font-semibold text-blue-toolight mr-2 mb-2">{this.props.tag1}</span>
                    <span class="inline-block bg-blue-dark rounded-full px-3 py-1 text-sm font-semibold text-blue-toolight mr-2 mb-2">{this.props.tag2}</span>
                    <span class="inline-block bg-blue-dark rounded-full px-3 py-1 text-sm font-semibold text-blue-toolight mr-2 mb-2">{this.props.tag3}</span>
                </div>
                </div>
            </div>
            
        );
    }
}

export default Card;