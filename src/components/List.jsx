import React, { Component } from 'react';

class List extends Component{
    render(){
        return(
            <div>
                    <h1 className="mb-8 font-bold text-5xl mb-2 text-center text-purples-med">
                        WHAT YOU GET WITH BLUEHAT
                    </h1>
                    <ul>
                        <li className='bg-purples-med mx-24 my-4 p-8 border border-falling-gray rounded-lg text-falling-gray'>
                            <h1 className='text-2xl font-bold'>Get More Calls</h1>
                            <p className='text-lg font-medium'>With state-of-the-art call tracking software, call reporting, and local listings, we guarantee that your phone will ring with new customers.</p>
                        </li>
                        <li className='bg-purples-med mx-24 my-4  p-8 border border-falling-gray rounded-lg text-falling-gray'>
                            <h1 className='text-2xl font-bold'>Get More Sales</h1>
                            <p className='text-lg font-medium'>Increased traffic, calls, and leads means more sales for your business.</p>
                        </li>
                        <li className='bg-purples-med mx-24  my-4 p-8 border border-falling-gray rounded-lg text-falling-gray'>
                            <h1 className='text-2xl font-bold'>Get More Leads</h1>
                            <p className='text-lg font-medium'>Capture customer information on custom-designed landing pages and use these hot leads to drum up new business.</p>
                        </li>
                        <li className='bg-purples-med mx-24 my-4  p-8 border border-falling-gray rounded-lg text-falling-gray'>
                            <h1 className='text-2xl font-bold'>
Get More Traffic</h1>
                            <p className='text-lg font-medium'>Get relevant and targeted traffic to your website. Optimize for your key demographic and generate invaluable business intelligence.</p>
                        </li>
                    </ul>
            </div>
        );
    }
}

export default List;