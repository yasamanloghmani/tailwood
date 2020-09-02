import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import TopMenu from './components/TopMenu';
import SectionWImage from './components/SectionWImage';
// import Footer from "./Footer";
import cardImage from './components/marketing.png';
import marketing from './components/marketing.png';
import componentimg from './components/components.png'
import sectionImage from './components/marketingimg.png';
import Services from './components/Services';
import List from './components/List';
class Components extends Component{
render(){
    
    return(
        <div>
            <TopMenu class="bg-cyan-dark text-cyan-light" />
            <Header  class="bg-cyan-dark text-cyan-light" color="#003333" h1='"Cool Tailwood Components"' src={componentimg}/>
            <div className='px-32'>
            <h1 className="text-3xl font-extrabold ">
                Samples Of headers and fonts and different font size and font weight:
            </h1>
            <h1 className="text-6xl font-thin p-4 text-cyan-med font-screen">Size : 6xl, Weight: thin, Color:Cyan-med , font: screen</h1>
            <h2 className="text-4xl font-light p-4 text-cyan-light ">Size : 4xl, Weight: light , Color: Cyan-light</h2>
            <h3 className="text-2xl font-normal p-4 text-falling-dark font-screen">Size : 2xl, Weight: normal , color: falling-dark font: screen</h3>
            <h4 className="text-xl font-medium p-4 text-falling-light">Size : xl, Weight: medium, color: falling-light</h4>
            <h5 className="font-lg font-bold p-4 text-purples-dark font-screen">Size : lg, Weight: bold, color: purples-dark font: screen</h5>
            <h6 className="text-xs font-extrabold p-4 text-purples-light">Size : XS, Weight: extrabold, colorl: purples-light</h6>
            </div>

            <div className='px-32'>
            <h1 className="text-3xl font-extrabold ">
Services Exaples:</h1>
<div className="grid grid-cols-3 p-16 gap-8">
                <Services hclass="mb-8 font-bold text-3xl mb-2 text-center text-cyan-med" pclass="font-medium text-xl mb-2  text-cyan-dark text-base" btnclass="bg-cyan-light hover:bg-cyan-dark text-falling-gray font-bold py-4 p-6 border border-falling-gray rounded my-8" h="Service1" p='paragraph paragraph paragraph paragraph paragraph'/>
                <Services hclass="mb-8 font-bold text-3xl mb-2 text-center text-falling-med" pclass="font-bold text-2xl mb-2  text-falling-dark text-base" btnclass="bg-falling-light hover:bg-falling-dark text-falling-gray font-thin py-4 p-4 my-2" h="Service2" p='paragraph paragraph paragraph paragraph'/>
                <Services hclass="mb-8 font-bold text-3xl mb-2 text-center text-purples-med" pclass="font-medium text-xl mb-2  text-blue-dark text-base" btnclass="bg-purples-light hover:bg-purples-dark text-falling-gray font-bold py-4 p-6 border border-falling-gray rounded my-8" h="Service3" p='paragraph paragraph paragraph paragraph paragraph'/>
            </div>            </div>
            <h1 className="px-32 text-3xl font-extrabold ">You cam change header and footer to any colors with any headers and images, Also ypu can change social medias icons aswell</h1>
            <div className="p-32 ">
            <h1 className="text-3xl font-extrabold ">
Card Exaple:</h1>
                <SectionWImage cardImage={cardImage}  h='Sample of Card' p="You can add a paragraph here. can change header , p , colors and image."/>
            </div>
            <Footer class="bg-cyan-dark text-cyan-light text-center mx-auto " color="#003333" linkedIn='https://linkedin.com/in/yasamanloghmani' gitHub='https://github.com/yasamanloghmani' webSite='https://yasamanloghmani.com' email='yasamanloghmani@gmail.com'/>
        </div>
    )
}
  
}

export default Components;