import v1 from "./img/video-1-m.png"
import v2 from "./img/video-2-m.png"
import vm from "./img/video-main.png"
import bg from "./img/bg-video.webp"

function Video() {
    const items = [{
        img: v1,
        alt: "Видео",
        title: "In The Country",
        descr: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus dapibus mauris in lectus tempus."
    }, {
        img: v2,
        alt: "Видео",
        title: "In The City",
        descr: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus dapibus mauris in."
    }]

    return <section class="video">
        <div class="video__bg">
            <img src={bg} alt="Фон" />
        </div>
        <div class="video__content">
            <div class="video__main">
                <h2 class="video__main-title">Live a life like you wouldn’t imagine, experience a life you wouldn’t expect.</h2>
                <div class="video__main-img">
                    <img src={vm} alt="Основное видео" />
                </div>
            </div>
            <div class="video__row">
                {items.map(value => (
                    <div class="video__item">
                        <div class="video__item-img">
                            <img src={value.img} alt={value.alt} />
                        </div>
                        <div class="video__item-text">
                            <h4 class="video__item-title">{value.title}</h4>
                            <p class="video__item-descr">{value.descr}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section >
}

export default Video;