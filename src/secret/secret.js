import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules"
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


import i1 from "./img/item1.webp"
import i2 from "./img/item2.webp"
import i3 from "./img/item3.webp"
import bg from "./img/bg.webp"
import arrowN from "./img/arrow-next.svg"
import arrowP from "./img/arrow-prev.svg"

function Secret() {
    const list = [
        {
            number: "100+",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce commodo magna et libero.",
        },
        {
            number: "43,000+",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce commodo.",
        },
        {
            number: "30+",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce commodo magna et libero.",
        }
    ]

    return <section className="secret">
        <div className="secret__bg">
            <img src={bg} alt="Задний фон" />
        </div>
        <div className="secret__content">
            <div className="secret__top">
                <h2 className="secret__top-title">Explore Our Secrets</h2>
                <div className="secret__top-container">
                    <Swiper
                        modules={[Pagination, Navigation, Autoplay]}
                        slidesPerView={1}
                        spaceBetween={15}
                        initialSlide={1}
                        autoplay={{
                            delay: 4000,
                            disableOnInteraction: false,
                        }}
                        pagination= {{
                            el: '.secret__top-pagination',
                            type: 'bullets',
                        }}
                        centeredSlides={true}
                        breakpoints={{
                            425: {
                                slidesPerView: 3,
                            }
                        }}
                        navigation={{
                            nextEl: '.secret__top-button-next',
                            prevEl: '.secret__top-button-prev',
                        }}
                    >
                        <SwiperSlide>
                            <div className="secret__top-img">
                                <img src={i1} alt="Фотография" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="secret__top-img">
                                <img src={i2} alt="Фотография" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="secret__top-img">
                                <img src={i3} alt="Фотография" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="secret__top-img">
                                <img src={i1} alt="Фотография" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="secret__top-img">
                                <img src={i2} alt="Фотография" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="secret__top-img">
                                <img src={i3} alt="Фотография" />
                            </div>
                        </SwiperSlide>
                    </Swiper>
                    <button className="secret__top-button-prev">
                        <img src={arrowP} alt="Кнопка влево для слайдера" />
                    </button>
                    <button className="secret__top-button-next">
                        <img src={arrowN} alt="Кнопка вправо для слайдера" />
                    </button>
                    <div className="secret__top-pagination"></div>
                </div>
            </div>
            <div className="secret__bottom">
                <h3 className="secret__bottom-title">By The Numbers</h3>
                <p className="secret__bottom-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce commodo magna et libero.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <ul className="secret__bottom-list">
                    {list.map((value, index) => (
                        <li className="secret__bottom-item" key={index}>
                            <h4 className="secret__bottom-number">{value.number}</h4>
                            <p className="secret__bottom-text">{value.text}</p>
                        </li>
                    ))}
                </ul>
            </div>

        </div>
    </section>
}



export default Secret;