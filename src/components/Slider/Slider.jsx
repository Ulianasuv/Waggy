import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import "./Slider.scss"

const Slider = () => {
  return (
     <Swiper
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
    >
        <SwiperSlide>
            <div className="hero__image">
                <img src="img/Img.png" alt="Dog"/>
            </div>
            <div className="hero__content">
                <span className="hero__label">SAVE 10 - 20% OFF</span>
                <h1 className="hero__title">Best Destination <br/> For <span>Your Pets</span></h1>
                <button className="btn">SHOP NOW →</button>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="hero__image">
                <img src="img/Img.png" alt="Dog"/>
            </div>
            <div className="hero__content">
                <span className="hero__label">SAVE 10 - 20% OFF</span>
                <h1 className="hero__title">alllala<br/> lalalla<span>lalalalalal</span></h1>
                <button className="btn">SHOP NOW →</button>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="hero__image">
                <img src="img/Img.png" alt="Dog"/>
            </div>
            <div className="hero__content">
                <span className="hero__label">SAVE 10 - 20% OFF</span>
                <h1 className="hero__title">Я дико устала<br/> у меня <span>выпали глаза от монитора</span></h1>
                <button className="btn">SHOP NOW →</button>
            </div>
        </SwiperSlide>
    </Swiper>
  )
}

export default Slider