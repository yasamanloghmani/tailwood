import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class LeftMenu extends Component{
    render(){
        return(
            <div className='z-50 bg-blue-toolight p-4 text-center float-left border-r border-logo-green h-full min-h-screen w-1/6 p-1 divide-y divide-falling-gray fixed'>
                <div className="pb-4">
                    <img src="./images/logo.png" className='w-48 mx-auto my-4' />
                    <h1 className='text-lg font-bold text-logo-blue'>TailWind Components</h1>
                    <span className='text-xs font-light text-logo-green'>V 1.0.0</span>
                </div>
                <div className="py-px">
                    <ul className='grid gap-8 py-6 text-logo-blue font-medium '>
                        <Link to='/' className='hover:text-logo-green'>About</Link>
                        <Link to='/sample1' className='hover:text-logo-green'>Sample1</Link>
                        <Link to='/' className='hover:text-logo-green'>Sample2</Link>
                        <Link to='/' className='hover:text-logo-green'>Sample3</Link>
                        <Link to='/' className='hover:text-logo-green'>Components</Link>
                    </ul>
                    
                </div>
            </div>
        );
    }
}

export default LeftMenu;