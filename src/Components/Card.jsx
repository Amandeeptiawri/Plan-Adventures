import React, { useState } from 'react'

const Card = ({info,image,id,name,price,getRemoveId}) => {
    const [readmore, setReadmore] = useState(false)

    let description = readmore ? info : `${info.substring(0, 200)}....`;
    return (
        <div className="card">
            <img className='cityImage' src={image} alt="cityImage" />
            <div className="tourInfo">
                <div className="tourDetails">
                    <h4 className="tourPrice">{price}</h4>
                    <h4 className="tourCityName">{name}</h4>
                </div>
                <div className="description">
                    {description}
                    <span className='readMore' onClick={() => { setReadmore(!readmore) }}>
                        {readmore ? " Show Less" : " Read More"}
                    </span>
                </div>
            </div>
            <button className='notIntrestedBtn' onClick={() => getRemoveId(id)}>Not Intrested</button>
        </div>
    )
}

export default Card