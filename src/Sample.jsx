import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import TopMenu from './components/TopMenu';
import SectionWImage from './components/SectionWImage';
// import Footer from "./Footer";
import marketing from './components/marketing.png';
import sectionImage from './components/marketingimg.png';
import Services from './components/Services';
import List from './components/List';
class Sample extends Component{
render(){
    
    return(
        <div>
            <TopMenu class="bg-purples-med text-falling-gray" />
            <Header  class="bg-purples-med text-falling-gray" color="#580838" h1='"No market" Marketing Company' src={marketing}/>
            <SectionWImage cardImage={sectionImage} h='TOP MONTREAL AND TORONTO SEO & INTERNET MARKETING AGENCY' p="Since 2001, BlueHat Marketing has been at the forefront of search engine optimization, digital marketing, social media marketing, and web design. We are a team of individuals from various tech, marketing, and design backgrounds to keep us ahead of the curve. We are a results-oriented Toronto and Montreal SEO provider, setting ourselves apart from our competitors with quantifiable and sustainable SEO services that really work."/>
            <div className="grid grid-cols-3 p-16 gap-8">
                <Services  h="SEO SERVICES" p='Our SEO experts will develop sustainable strategies to bring in more phone calls, boost sales and increase brand visibility:'/>
                <Services  h="PPC SERVICES" p='Our digital marketing team includes PPC experts who bring ready-to-buy traffic to your site using targeted ads.'/>
                <Services  h="SOCIAL MEDIA" p="Whether it’s Facebook, Instagram, LinkedIn or all of the above, we have your advertising and social media management covered."/>
            </div>
            <List />
            <Footer class="bg-purples-med text-falling-gray text-center mx-auto " color="#580838" linkedIn='https://linkedin.com/in/yasamanloghmani' gitHub='https://github.com/yasamanloghmani' webSite='https://yasamanloghmani.com' email='yasamanloghmani@gmail.com'/>
        </div>
    )
}
  
}

export default Sample;