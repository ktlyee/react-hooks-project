import React from 'react'
import '../App.css'

const Menu = ({ items }) => {
    return (
        <div className="section-items-center">
            {items.map(item => {
                const {id, title, img, price, desc} = item
                return (
                    <div key={id} className="box menu-items">
                        <article className="media">
                            <div className="media-left">
                                <figure className="image is-128x128">
                                    <img src={img} alt="pic"/>
                                </figure>
                            </div>
                            <div className="media-content">
                                <div className="content">
                                    <h4>
                                        <strong>{title}</strong>
                                        <strong className="price">${price}</strong>
                                    </h4>
                                    <p>{desc}</p>
                                </div>
                            </div>
                        </article>
                        
                    </div>
                )
            })}
        </div>
    )
}

export default Menu;