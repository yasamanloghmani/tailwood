import React, { Component } from 'react';

class Team extends Component{
    render(){
        return(
            <div class="grid grid-cols-2  border-4 rounded-full border-falling-gray p-8 m-32">
                <div class="md:flex-shrink-0 px-6 ">
                    <img class="rounded-lg w-400 p-4" src={this.props.teamimg} alt="Woman paying for a purchase" />
                </div>
                <div>
                <div class="font-bold text-3xl mb-2 text-center text-blue-light">{this.props.h}</div>    
                <p class="font-medium text-xl mb-2  text-blue-dark text-base">{this.props.p}</p>
                </div>
                
                
            </div>
        );
    }
}

export default Team;