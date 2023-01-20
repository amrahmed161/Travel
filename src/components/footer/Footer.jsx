import React,{useEffect} from 'react'
import "./footer.scss";
import video from "../../Assets/video(2).mp4";
import {FiSend} from "react-icons/fi";
import {Link} from "react-router-dom";
import {MdOutlineTravelExplore} from "react-icons/md";
import {FaTripadvisor} from "react-icons/fa";
import {AiOutlineTwitter,AiFillYoutube,AiFillInstagram} from "react-icons/ai";
import {FiChevronRight} from "react-icons/fi";
import Aos from 'aos';
import'aos/dist/aos.css';
const Footer = () => {
        useEffect(()=>{
            Aos.init({duration:2000})
        },[])
    return (
    <>
    <section className='footer'>
        <div className="videoDiv">
            <video src={video} loop autoPlay muted type="video/mp4"></video>
        </div>
        <div className="secContent container">
            <div className="contactDiv flex">
                <div data-aos="fade-up" className="text">
                    <small>KEEP IN TOUCH</small>
                    <h2>Travel with us </h2>
                </div>
                <div className="inputDiv flex">
                    <input data-aos="fade-up" type="text" placeholder = 'Enter Email Address'/>
                    <button data-aos="fade-up" className='btn flex' type='submit'>
                        SEND <FiSend className ="icon"/>
                    </button>
                </div>
            </div>
            <div className="footerCard flex">
                <div className="footerIntro flex">
                    <div className="logoDiv">
                        <Link to ="" className='logo flex'>
                            <MdOutlineTravelExplore className ="icon"/>.Travel
                        </Link>
                    </div>
                    <div data-aos="fade-up" className="footerParagraph">
                        Lorem ipsum dolor , adipisicing elit. Dolore temporibus animi soluta in voluptate illo qui assumenda beatae. Itaque non voluptate inventore, ratione quas laudantium illum molestiae rerum delectus volupta.
                        , dolores voluptatum at eaque accusantium? Quidem ipsum commodi officiis ducimus quis iure omnis illum, aliquid recusandae, eligendi aperiam iusto deserunt.
                        natus sequi doloremque eligendi voluptatum animi est tempore repudiandae, laboriosam tenetur autem, sunt quis! Consequuntur, voluptatibus iusto!
                    </div>
                    <div data-aos="fade-up" className="footerSocials">
                        <AiOutlineTwitter className = "icon"/>
                        <AiFillYoutube className = "icon"/>
                        <AiFillInstagram className = "icon"/>
                        <FaTripadvisor className = "icon"/> 
                    </div>
                </div>
                <div className="footerLinks grid">
                    <div data-aos="fade-up" data-aos-duration ="3000" className="linksGroup">
                        <span className="groupTitle">
                            OUR AGENCY
                        </span>
                        <li className="footerList flex">
                            <FiChevronRight className = "icon"/>
                            Services
                        </li>
                        <li className="footerList flex">
                            <FiChevronRight className = "icon"/>
                            Insurance
                        </li>
                        <li className="footerList flex">
                            <FiChevronRight className = "icon"/>
                            Agency
                        </li>
                        <li className="footerList flex">
                            <FiChevronRight className = "icon"/>
                            Tourism
                        </li>
                        <li className="footerList flex">
                            <FiChevronRight className = "icon"/>
                            Payment
                        </li>
                    </div>
                    <div data-aos="fade-up" data-aos-duration ="4000" className="linksGroup">
                        <span className="groupTitle">
                            PARTNERS
                        </span>
                        <li className="footerList flex">
                            <FiChevronRight className = "icon"/>
                            Bookings
                        </li>
                        <li className="footerList flex">
                            <FiChevronRight className = "icon"/>
                            Rentcars
                        </li>
                        <li className="footerList flex">
                            <FiChevronRight className = "icon"/>
                            HotelWorld
                        </li>
                        <li className="footerList flex">
                            <FiChevronRight className = "icon"/>
                            Trivago
                        </li>
                        <li className="footerList flex">
                            <FiChevronRight className = "icon"/>
                            TripAdvisor
                        </li>
                    </div>
                    <div data-aos="fade-up" data-aos-duration ="5000" className="linksGroup">
                        <span className="groupTitle">
                            LAST MINUTE
                        </span>
                        <li className="footerList flex">
                            <FiChevronRight className = "icon"/>
                            london
                        </li>
                        <li className="footerList flex">
                            <FiChevronRight className = "icon"/>
                            California
                        </li>
                        <li className="footerList flex">
                            <FiChevronRight className = "icon"/>
                            Indonesia
                        </li>
                        <li className="footerList flex">
                            <FiChevronRight className = "icon"/>
                            Europe
                        </li>
                        <li className="footerList flex">
                            <FiChevronRight className = "icon"/>
                            Oceania
                        </li>
                    </div>
                </div>
                <div className="footerDiv flex">
                    <small>BEST TRAVEL WEBSITE THEME</small>
                    <small>COPYRIGHTS RESERVED - ISRATECH 2022</small>
                </div>
            </div>
        </div>
    </section>
    </>
)
}

export default Footer