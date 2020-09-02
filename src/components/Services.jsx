import React, { Component } from 'react';
import DarkButton from './DarkButton'
class Services extends Component{
    render(){
        
        return(
            <div className='my-32'>
                <div class="max-w-4xl mx-auto rounded overflow-hidden shadow-redshadow p-16">
                <div class="">
                    <div class={this.props.hclass}>{this.props.h}</div>
                    <p class={this.props.pclass}>
                        {this.props.p}                    
                    </p>
                    <DarkButton btntext="See More" class={this.props.btnclass} />
                </div>
                <div class="px-6 pt-4 pb-2">
                </div>
                </div>
            </div>
            
        );
    }
}

export default Services;