import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin , faGithub , faInternetExplorer} from "@fortawesome/free-brands-svg-icons";
class Footer extends Component{
    render(){
        return(
            <div>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill={this.props.color} fill-opacity="1" d="M0,192L60,197.3C120,203,240,213,360,229.3C480,245,600,267,720,272C840,277,960,267,1080,240C1200,213,1320,171,1380,149.3L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
                    <div  className={this.props.class}>
                        <a className="p-6" href={this.props.linkedIn} target="_blank" ><FontAwesomeIcon className='text-blue-dark text-5xl hover:text-cyan-light' icon={faLinkedin} /></a>
                        <a  className="p-6" href={this.props.gitHub} target="_blank" ><FontAwesomeIcon className='text-blue-dark text-5xl hover:text-cyan-light' icon={faGithub} /></a>
                        <a  className="p-6" href={this.props.webSite} target="_blank" ><FontAwesomeIcon className='text-blue-dark text-5xl hover:text-cyan-light' icon={faInternetExplorer} /></a>
                        <p className='p-8'>{this.props.email}</p>
                    </div>
                        
            </div>
        );
    }
}

export default Footer;