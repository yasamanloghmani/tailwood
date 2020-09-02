import React, { Component } from 'react';
import Header from './Header';
import mainimage from './maindashboard.png';
class Board extends Component{
    render(){
        return(
            <div className='m-32 shadow-xl bg-board text-falling-gray'>
               
                <div class="p-8">
                    <h1 className="text-2xl font-normal">Example of code</h1>
                    <p class="font-medium text-xl p-4">
                        {this.props.p1}                    
                    </p>
                    <p class="font-medium text-xl p-4">
                        {this.props.p2}                    
                    </p>
                    <p class="font-medium text-xl p-4">
                        {this.props.p3}                    
                    </p>
                    <p class="font-medium text-xl p-4">
                        {this.props.p4}                    
                    </p>
                
                </div>
            </div>
            
        );
    }
}

export default Board;