import React, { useState } from "react"
import { formatCurrency } from "../../ultil"
import './style.css'
import { Link } from "react-router-dom"


export const ProductGrid = (props) => {

    const [isEnter, setIsEnter] = useState("leave")
    const handleEnter = () => {
        setIsEnter("enter")
    }

    const handleLeave = () => {
        setIsEnter("leave")
    }

    return (
        <div className="productgrid-container" onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
            <div className="row">
                <div className="col-4">
                    <img src={props.product.thumbnail} alt="" className="productgrid-thumbnail"/>
                </div>

                <div className="col-5 productgrid-detail">
                    <p className="product-detail__line2">{props.product.name}</p>
                    <p className="product-detail__line1">{props.product.brand}</p>
                    <p className="product-detail__line4">{props.product.desc}</p>
                </div>
                <div className="col-3 productgrid-detail-2">
                    <p className="product-detail__line4">Availability: 599 In Stock</p>
                    <div className="product-detail__line3">
                        <p className="product-detail__line3-current">
                            {formatCurrency(props.product.price)}
                        </p>    
                        <p className="product-detail__line3-discount">{formatCurrency(props.product.price)}</p>
                    </div>
                    <button className="productgrid-btn">ADD TO CART</button>
                            
                    <div className="productgrid-action">
                        <Link to={`/order/${props.product.index}`}><i className="fa-solid fa-magnifying-glass"></i></Link>
                        <Link><i className="fa-regular fa-heart"></i></Link>
                        <Link><i className="fa-solid fa-recycle"></i></Link>
                </div>
                    
                </div>

            </div>
            {/* <button className={`product-btn ${isEnter}`}>ADD TO CART</button> */}
        </div>
    )
}