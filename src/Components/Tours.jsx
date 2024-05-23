import React from 'react'
import Card from './Card.jsx';

const Tours = ({tours,removeTour}) => {
    function getId(id)
    {
        removeTour(id);
    }

    return (
        <div className='container'>
            <div>
                <h2 className="title">Plan With Love</h2>
            </div>

            <div className="cardsContainer">
                {
                    tours.map((tour) => {
                        return <Card {...tour} getRemoveId = {getId}/>
                    })
                }
            </div>
        </div>
    )
}

export default Tours
