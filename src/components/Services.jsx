import React, { Component } from 'react';
import DarkButton from './DarkButton'
class Services extends Component{
    render(){
        
        return(
            <div className='my-32'>
                <div class="max-w-4xl mx-auto rounded overflow-hidden shadow-redshadow p-16">
                <div class="">
                    <div class="mb-8 font-bold text-3xl mb-2 text-center text-purples-med">{this.props.h}</div>
                    <p class="font-medium text-xl mb-2  text-blue-dark text-base">
                        {this.props.p}                    
                    </p>
                    <DarkButton btntext="See More" />
                </div>
                <div class="px-6 pt-4 pb-2">
                </div>
                </div>
            </div>
            
        );
    }
}

export default Services;