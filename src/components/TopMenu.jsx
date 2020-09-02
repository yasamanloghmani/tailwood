import React, { Component } from 'react';
import {Link} from 'react-router-dom';
class TopMenu extends Component{
    render(){
        return(
            <div className={this.props.class}>
            <div className="float-left ">
                <img src="./images/logo.png" className='w-48 mx-auto my-4 ' />
            </div>
            <div className="py-px floa-left">
                <ul className='py-6 text-falling-gray font-xl font-bold '>
                    <Link to='/' className='hover:text-cyan-light p-8'>About</Link>
                    <Link to='/sample1' className='hover:text-cyan-light p-8'>Sample1</Link>
                    <Link to='/' className='hover:text-cyan-light p-8'>Sample2</Link>
                    <Link to='/' className='hover:text-cyan-light p-8'>Sample3</Link>
                    <Link to='/components' className='hover:text-cyan-light p-8'>Components</Link>
                </ul>
                
            </div>
        </div>
        );
    }
}

export default TopMenu;