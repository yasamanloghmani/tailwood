import React, { Component } from 'react';

class Header extends Component{
    render(){
        return(
            <div className="">
                <div className={this.props.class}>
                <img src={this.props.src}  className='w-400 mx-auto pt-16'/>
        <h1 className="text-center text-4xl font-extrabold pt-16">{this.props.h1}</h1>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill={this.props.color} fill-opacity="1" d="M0,224L48,224C96,224,192,224,288,197.3C384,171,480,117,576,85.3C672,53,768,43,864,53.3C960,64,1056,96,1152,122.7C1248,149,1344,171,1392,181.3L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
            </div>
            
        );
    }
}

export default Header;