import React,{useEffect} from 'react'
import "../main/main.scss";
import img from "../../Assets/img.jpg";
import img2 from "../../Assets/img(2).jpg";
import img3 from "../../Assets/img(3).jpg";
import img4 from "../../Assets/img(4).jpg";
import img5 from "../../Assets/img(5).jpg";
import img6 from "../../Assets/img(6).jpg";
import img7 from "../../Assets/img(7).jpg";
import img8 from "../../Assets/img(8).jpg";
import img9 from "../../Assets/img(9).jpg";
import {HiOutlineLocationMarker,HiOutlineClipboardCheck} from "react-icons/hi";
import Aos from 'aos';
import'aos/dist/aos.css';
const Data = [
  {
      id :1,
      imgSrc: img,
      destTitle:'Bora Bora',
      location:'New Zealand',
      grade:'CULTURAL RELAX',
      fees:'$700',
      description:'The epitome of romance, Bora Bora is one of the best travel descriptions in the World. This place is known for its luxurious stays and adventurous activities',
  },
  {
      id :2,
      imgSrc:img2,
      destTitle:'Machu puchu',
      location:'Peru',
      grade:'CULTURAL RELAX',
      fees:'$600',
      description:'The epitome of romance, Bora Bora is one of the best travel descriptions in the World. This place is known for its luxurious stays and adventurous activities'
  },
  {
      id :3,
      imgSrc:img3,
      destTitle:'Great Barrier Reef',
      location:'Australia',
      grade:'CULTURAL RELAX',
      fees:'$700',
      description:'One of the most remarkable Australian natural gifts is the Great Barrier Reef, The hallmark of this place is lavish and beauty . Always interesting to be in this place'
  },
  {
      id :4,
      imgSrc:img4,
      destTitle:'Cappadocia',
      location:'Turkey',
      grade:'CULTURAL RELAX',
      fees:'$800',
      description:'According to the World Tourism Ranking, 45 Million people visit Turkey each year , and from that about 2 Million come to visit Cappadocia. This place is luxurious stays and adventurous' 
  },
  {
      id :5,
      imgSrc:img5,
      destTitle:'Guanajuato',
      location:'Mexico',
      grade:'CULTURAL RELAX',
      fees:'$1100',
      description:'A city in Central Mexico, Guanajuato is Known for its history of silver mining and colonial architecture. The houses in the city are very attractively painted with the most bright colors available. Always welcome.'
  },
  {
      id :6,
      imgSrc:img6,
      destTitle:'Cinque Terre',
      location:'Italy',
      grade:'CULTURAL RELAX',
      fees:'$840',
      description:'The Vibrant hues of the houses are its benchmark and explain the beauty of this place.Also, if you are a foodie and love seafood, you will be exhilarated with the choice you are about to get here. Happy exploring great food!'
  },
  {
      id :7,
      imgSrc:img7,
      destTitle:'Angkor Wat',
      location:'Cambodia',
      grade:'CULTURAL RELAX',
      fees:'$790',
      description:'TAngkor Wat represents the entire range of khmer art from the 9th to the 15th century, This temple is considered the heart and soul of Cambodia.This place is known for its luxurious stays and adventurous activities'
  },
  {
      id :8,
      imgSrc:img8,
      destTitle:'Bora Bora',
      location:'New Zealand',
      grade:'CULTURAL RELAX',
      fees:'$700',
      description:'The epitome of romance, Bora Bora is one of the best travel descriptions in the World. This place is known for its luxurious stays and adventurous activities'
  },
  {
      id :9,
      imgSrc:img9,
      destTitle:'Bora Island',
      location:'Indonesia',
      grade:'CULTURAL RELAX',
      fees:'$500',
      description:' Bali is one of the best travel descriptions in the World. This place is known for its luxurious stays and adventurous activities'
  }
]
const Main = () => {
  useEffect(()=>{
    Aos.init({duration:2000})
  },[])
  return (
    <>
    <section className='main container section'>
        <div className="secTitle">
            <h3  data-aos="fade-right" className="title">
                Most visited destinations
            </h3>
        </div>
        <div className='secContent grid'>
            {Data.map(({id,imgSrc,destTitle,location,grade,fees,description
            })=>{
              return(
                <div key ={id} data-aos="fade-up"  className="singleDestination">
                  <div className="imagDiv">
                  <img src={imgSrc} alt={destTitle}/>
                  </div>
                  <div className="cardInfo">
                    <h4 className="destTitle">{destTitle}</h4>
                    <span className='continent flex'>
                      <HiOutlineLocationMarker className ='icon' />
                      <span className='name'>{location}</span>
                    </span>
                    <div className="fees flex">
                      <div className="grade">
                        <span>{grade}<small>+1</small></span>
                      </div>
                      <div className="price">
                        <h5>{fees}</h5>
                      </div>
                    </div>
                    <div0 className="desc">
                      <p>{description}</p>
                    </div0>
                    <button className='btn flex'>DETAILS <HiOutlineClipboardCheck className ="icon"/></button>
                  </div>
                </div>
              )
            })
            }
        </div>
    </section>
    </>
  )
}

export default Main