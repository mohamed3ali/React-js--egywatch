import React from 'react'

function DetailsThumb({ images, setIndex }) {
    return (
        <div className="thumb">
            {
                images.map((img, index) => (
                    <img src={img} alt="dd" key={index} onClick={() => setIndex(index)} />
                ))
            }
        </div>
    )
}

export default DetailsThumb