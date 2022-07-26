import React from 'react'

function Sizes({ sizes }) {
    return (
        <div className="sizes">
            {
                sizes.map((size, index) => (
                    <button key={index}>{size}</button>
                ))
            }
        </div>
    )
}
export default Sizes
