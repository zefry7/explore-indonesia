import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules"
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


import i1 from "./img/item1.png"
import i2 from "./img/item2.png"
import i3 from "./img/item3.png"
import bg from "./img/bg.png"
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

    return <section class="secret">
        <div class="secret__bg">
            <img src={bg} alt="Задний фон" />
        </div>
        <div class="secret__content">
            <div class="secret__top">
                <h2 class="secret__top-title">Explore Our Secrets</h2>
                <div className="secret__top-container">
                    <Swiper
                        modules={[Pagination, Navigation, Autoplay]}
                        slidesPerView={1}
                        spaceBetween={0}
                        initialSlide={1}
                        autoplay={{
                            delay: 2500,
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
                                spaceBetween: 31
                            },
                            2560: {
                                slidesPerView: 3,
                                spaceBetween: 42
                            }

                        }}
                        loop={true}
                        navigation={{
                            nextEl: '.secret__top-button-next',
                            prevEl: '.secret__top-button-prev',
                        }}
                    >
                        <SwiperSlide>
                            <div class="secret__top-img">
                                <img src={i1} alt="" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div class="secret__top-img">
                                <img src={i2} alt="" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div class="secret__top-img">
                                <img src={i3} alt="" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div class="secret__top-img">
                                <img src={i1} alt="" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div class="secret__top-img">
                                <img src={i2} alt="" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div class="secret__top-img">
                                <img src={i3} alt="" />
                            </div>
                        </SwiperSlide>
                    </Swiper>
                    <button class="secret__top-button-prev">
                        <img src={arrowP} alt="" />
                    </button>
                    <button class="secret__top-button-next">
                        <img src={arrowN} alt="" />
                    </button>
                    <div className="secret__top-pagination">

                    </div>
                </div>
            </div>
            <div class="secret__bottom">
                <h3 class="secret__bottom-title">By The Numbers</h3>
                <p class="secret__bottom-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce commodo magna et libero.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <ul class="secret__bottom-list">
                    {list.map((value => (
                        <li class="secret__bottom-item">
                            <h5 class="secret__bottom-number">{value.number}</h5>
                            <p class="secret__bottom-text">{value.text}</p>
                        </li>
                    )))}
                </ul>
            </div>

        </div>
    </section>
}



export default Secret;