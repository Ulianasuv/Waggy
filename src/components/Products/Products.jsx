import React, { useState } from 'react'
import "./Products.scss"
import data from "./../../data.js"
import Product from '../Product/Product.jsx'

const Products = () => {
    const [showAll, setShowAll] = useState(false)
    const [showCat, setShowCat] = useState(false)
    const [showDog, setShowDog] = useState(false)
    const [showBird, setShowBird] = useState(false)


    const changeCheck = (check) => {
        console.log(check)
        setShowAll(false)
        setShowCat(false)
        setShowDog(false)
        setShowBird(false)
        if(check === "All"){
            setShowAll(true)
        } else if(check === "Cat"){
            setShowCat(true)
        } else if(check === "Dog"){
            setShowDog(true)
        } else if(check === "Bird"){
            setShowBird(true)
        }
    }

    const filtered = data.filter(product => {
        const matchCategory =
        (!showCat  && !showDog && !showBird) ||
        (product.category === 'cat' && showCat) ||
        (product.category === 'dog' && showDog) ||
        (product.category === 'bird' && showBird);
        return matchCategory;
  });

    const grouped = filtered.reduce((acc, product) => {
        acc[product.category] ??= [];
        acc[product.category].push(product);
        return acc;
    }, {});


    const product = Object.entries(grouped).map(([category, products]) => {
        return products.map((data) => {
            return <Product img={data.img} key={data.id} title={data.title} rating={data.rating} price={data.price} />
        })
        
    })

    console.log(product)
  return (
    <section className="products">
        <div className="products__top">
            <h2>Products</h2>
            <form>
                <label>
                <input 
                    type='radio'
                    name='filter'
                    checked = {showAll}
                    onChange={e => changeCheck('All')}
                />
                {' '}All
                </label>
                <label>
                <input 
                    type='radio'
                    name='filter'
                    checked = {showCat}
                    onChange={e => changeCheck('Cat')}
                />
                {' '}Cat
                </label>
                <label>
                <input 
                    type='radio'
                    name='filter'
                    checked = {showDog}
                    onChange={e => changeCheck('Dog')}
                />
                {' '}Dog
                </label>
                <label>
                <input 
                    type='radio'
                    name='filter'
                    checked = {showBird}
                    onChange={e => changeCheck('Bird')}
                />
                {' '}Bird
                </label>
            </form>
            <button>SHOP ALL</button>
        </div>
        <div className="products__catalog">
            {product}
        </div>

    </section>
  )
}

export default Products;