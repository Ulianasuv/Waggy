import React from 'react'
import "./Gallery.scss"

const Gallery = () => {
    const array = ["img/gallery1.jpg", "img/gallery2.png", "img/gallery3.png", "img/gallery4.jpg", "img/gallery5.jpg", "img/gallery6.png"]
    const images = array.map(src => {
        return <img src={src} alt="" key={src}/>
    })
    

  return (
    <section className="gallery">
        <div className="gallery__grid">
            {images}
        </div>
    </section>
  )
}

export default Gallery