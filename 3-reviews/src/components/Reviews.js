import React, { useState } from 'react'
import review from './data'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
 
function Reviews() {
    const [index, setIndex] = useState(0)
    const {name, job, image, text} = review[index]

    const checkNumber = (number) => {
        if(number > review.length - 1) {
            return 0
        }
        if(number < 0) {
            return review.length - 1
        }
        return number
    }

    const prevPerson = () => {
        setIndex((index) => {
            let newIndex = index - 1
            return checkNumber(newIndex)
        })
    }

    const nextPerson = () => {
        setIndex((index) => {
            let newIndex = index + 1
            return checkNumber(newIndex)
        })
    }

    const randomPerson = () => {
        let randomNumber = Math.floor(Math.random() * review.length)
        if(randomNumber === index) {
            randomNumber = index + 1
        }
        setIndex(checkNumber(randomNumber))
    }

     return (
         <article className="review">
             <div className="img-container">
                 <img src={image} alt={`review-${index}`}/>
             </div>
            <h4 className="name">{name}</h4>
            <p className="job">{job}</p>
            <p className="info">{text}</p>
            <div className="btn-container">
                <button className="prev-btn" onClick={prevPerson}>
                    <FaChevronLeft/>
                </button>
                <button className="next-btn" onClick={nextPerson}>
                    <FaChevronRight/>
                </button>
            </div>
            <button className="btn-random" onClick={randomPerson}>
                Surpise Me
            </button>
         </article>
     )
}

export default Reviews;