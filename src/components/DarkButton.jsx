import React, { Component } from 'react';

class DarkButton extends Component{
    render(){
        return(
            <div>
                    <button class="bg-purples-light hover:bg-purples-dark text-falling-gray font-bold py-2 p-6 border border-falling-gray rounded my-8">
                        {this.props.btntext}
                    </button>
            </div>
        );
    }
}

export default DarkButton;