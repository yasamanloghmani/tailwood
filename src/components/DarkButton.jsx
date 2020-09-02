import React, { Component } from 'react';

class DarkButton extends Component{
    render(){
        return(
            <div>
                    <button class={this.props.class}>
                        {this.props.btntext}
                    </button>
            </div>
        );
    }
}

export default DarkButton;