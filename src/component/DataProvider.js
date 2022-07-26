import React, { createContext, useState, useEffect } from 'react'
export const DataContext = createContext();
export const DataProvider = (props) => {
    const [products, setProducts] = useState([
        {
            "_id": "1",
            "title": "Wacth Product 01",
            "images": [
                require("../component/avg/ll.jpg"),
                require("../component/avg/yy.jpg"),
                require("../component/avg/o.jpg"),
                require("../component/avg/1.jpg"),
                require("../component/avg/3.jpg"),
                require("../component/avg/4.jpg")

            ]
            ,
            "description": "Orient Watch Star WZ0321EL",
            "content": "This photograph was taken by Dnalor_01 and released under the license(s) stated below. You are free to use it for any purpose as long as you credit the author, the Source (Wikimedia Commons) and the license (CC-BY-SA 3.0) close to the image.  ",
            "colors": ["red", "black", "teal"],
            "sizes": ["XL", "L", "M", "XM", "LX"],
            "price": 5000,
            count: 1
        },
        {
            "_id": "2",
            "title": "Wacth Product 02",
            "images": [
                require("../component/avg/yy.jpg"),
                require("../component/avg/ll.jpg"),
                require("../component/avg/o.jpg"),
                require("../component/avg/1.jpg"),
                require("../component/avg/3.jpg"),
                require("../component/avg/4.jpg")

            ]
            ,
            "description": "Casio Watch Clock Standard Standard",
            "content": "A watch is something personal. Everyone has their own taste in design and style. Therefore, we do not want to say what a good or bad watch is, but what the signs of a quality watch are in general. And how these signs are easily identifiable. A little side note is that we are mainly looking at an affordable watch (up to € 600,-).",
            "colors": ["red", "black", "teal"],
            "sizes": ["XL", "L", "M", "XM", "LX"],
            "price": 1099,
            count: 1
        },
        {
            "_id": "3",
            "title": "Wacth Product 03",
            "images": [
                require("../component/avg/o.jpg"),
                require("../component/avg/ll.jpg"),
                require("../component/avg/yy.jpg"),

                require("../component/avg/1.jpg"),
                require("../component/avg/3.jpg"),
                require("../component/avg/4.jpg")

            ]
            ,
            "description": "Cheap Chipkashi Analogue AEQ-100W",
            "content": "A quality watch always has sapphire glass. Of course it is depending on the kind of purpose of your watch. Sapphire glass maintains clear and scratch free after frequent (violently) use. Crystal glass or mineral glass will be suffice for an average watch. Furthermore, a watch with this kind of glass will often be € 20,- cheaper, but its also more susceptible to scratches. If use is made of sapphire glass, it appears on the dial or back of the watch.",
            "colors": ["red", "black", "teal"],
            "sizes": ["XL", "L", "M", "XM", "LX"],
            "price": 3000,
            count: 1
        },
        {
            "_id": "4",
            "title": "Wacth Product 04",
            "images": [
                require("../component/avg/1.jpg"),

                require("../component/avg/ll.jpg"),
                require("../component/avg/yy.jpg"),
                require("../component/avg/o.jpg"),
                require("../component/avg/3.jpg"),
                require("../component/avg/4.jpg")

            ]
            ,
            "description": "Orient EAST FAA02004B9 Ray yl Luminous",
            "content": " ATM water resistance is associated with a quality watch.  Almost nothing is more damaging to a watch than water. So waterproofing is inextricably linked to a good watch.  The same as with materials and movements, water resistance also has varying degrees.",
            "colors": ["red", "black", "teal"],
            "sizes": ["XL", "L", "M", "XM", "LX"],
            "price": 2500,
            count: 1
        },
        {
            "_id": "5",
            "title": "Wacth Product 05",
            "images": [
                require("../component/avg/3.jpg"),
                require("../component/avg/ll.jpg"),
                require("../component/avg/yy.jpg"),
                require("../component/avg/o.jpg"),
                require("../component/avg/1.jpg"),

                require("../component/avg/4.jpg")

            ]
            ,
            "description": "Automatic winding (with manual winding)",
            "content": "Above features focused on the watch case. With water resistance, we can make a leap to a good strap. We advise to minimize water contact with a leather strap (which is not waterproof). Furthermore, it is important that the band fits well with the watch case. The seams are meant to be symmetrical and narrow.",
            "colors": ["red", "black", "teal"],
            "sizes": ["XL", "L", "M", "XM", "LX"],
            "price": 1900,
            count: 1
        },
        {
            "_id": "6",
            "title": "Wacth Product 06",
            "images": [
                require("../component/avg/4.jpg"),
                require("../component/avg/ll.jpg"),
                require("../component/avg/yy.jpg"),
                require("../component/avg/o.jpg"),
                require("../component/avg/1.jpg"),
                require("../component/avg/3.jpg"),


            ],
            "description": "FORRAD Men Formal Stainless Steel Wristwatch",
            "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
            "colors": ["red", "black", "teal"],
            "sizes": ["XL", "L", "M", "XM", "LX"],
            "price": 3200,
            count: 1
        }

    ])


    const [cart, setCart] = useState([])

    const addCart = (id) => {
        const check = cart.every(item => {
            return item._id !== id
        })
        if (check) {
            const data = products.filter(product => {
                return product._id === id
            })
            setCart([...cart, ...data])
        } else {
            alert("The product has been added to cart.")
        }
    }

    useEffect(() => {
        const dataCart = JSON.parse(localStorage.getItem('dataCart'))
        if (dataCart) setCart(dataCart)
    }, [])


    useEffect(() => {
        localStorage.setItem('dataCart', JSON.stringify(cart))
    }, [cart])

    const value = {
        products: [products, setProducts],
        cart: [cart, setCart],
        addCart: addCart
    }
    return (
        <DataContext.Provider value={value}>
            {props.children}
        </DataContext.Provider>
    )
}

