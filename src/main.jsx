import { createRoot } from 'react-dom/client';
import { useState } from 'react'
import './css/index.css';
import reviews from './data'
import { AiOutlineInstagram, AiOutlineDoubleLeft, AiOutlineDoubleRight } from "react-icons/ai";

const R18_6 = () => {

    const [index,setIndex] = useState(0)
    const {id, name, job, image, text} = reviews[index]

    const personCheck = (number) => {
        if(number > reviews.length - 1){
            return 0
        }
        if(number < 0) {
            return reviews.length -1
        }
        return number
    }

    const personRight = () => {
        setIndex((index) => {
            let newIndex = index + 1;
            return personCheck(newIndex)
        })
    }

    const personLeft = () => {
        setIndex((index) => {
            let newIndex = index - 1;
            return personCheck(newIndex)
        })
    }    

    const randomPerson = () => {
        
        let randomNumber = Math.floor(Math.random()*reviews.length)
        if(randomNumber === index){
            return randomNumber = randomNumber +1
        }
        setIndex(personCheck(randomNumber))
    }
    
    
    return (
        <div className='wrapper'>
            <div key={id} className='container'>
                <div className='imageContainer'>
                    <img src={image} alt="personPhoto" className='imageClass'/>
                    <AiOutlineInstagram className='icon' />
                </div>
                <span className='title'>{name}</span>
                <span className='job'>{job}</span>
                <span className='text'>{text}</span>
                <div>
                    <AiOutlineDoubleLeft onClick={personLeft} className='arrowContainer' />
                    <AiOutlineDoubleRight onClick={personRight} className='arrowContainer' />
                </div>
                <button className='randomBtn' onClick={randomPerson}>RANDOM PERSON</button>
            </div>
        </div>
    )
}

const root = createRoot(document.getElementById('root'))
root.render(<R18_6 />)