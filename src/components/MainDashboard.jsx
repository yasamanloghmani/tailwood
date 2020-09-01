import React, { Component } from 'react';
import Header from './Header';
import SectionWImage from './SectionWImage';
import mainimage from './maindashboard.png';
import cardimage from './tailwind.png';
import Mintbean from './mintbean.png';
import Card from './Card';
import Footer from "./Footer";
class MainDashboard extends Component{
    render(){
        return(
            <div className='w-5/6 float-right'>
                <Header src={mainimage} class="bg-blue-toolight text-blue-light" color='#ebf8ff' h1='Learn about TailWood CSS and our Project Team.'/>
                <SectionWImage cardImage={cardimage}  h='A utility-first CSS framework for rapidly building custom designs.' p="Tailwind CSS is a highly customizable, low-level CSS framework that gives you all of the building blocks you need to build bespoke designs without any annoying opinionated styles you have to fight to override."/>
                <Card cardImage={Mintbean}  h="What is this project about?" p="A UI component system is one of the cornerstones of modern web application development. Complex websites, software applications and SaaS platforms often have their own design language, and a UI component system expresses that language in a standardized way.

                    Tailwind is a low-level CSS library that lets you create your own UI components from scratch. It is a powerful building block rather than a full component library.
                    " p2=" I got the from Mintbean Hackathon. and I did the first version of this project in 2 days" tag1="#mintbean" tag2="#yasamanloghmani" tag3="#tailwind"/>
               <Footer class="bg-blue-toolight text-blue-light text-center mx-auto " color="#ebf8ff" linkedIn='https://linkedin.com/in/yasamanloghmani' gitHub='https://github.com/yasamanloghmani' webSite='https://yasamanloghmani.com' email='yasamanloghmani@gmail.com'/>
            </div>
        );
    }
}

export default MainDashboard;