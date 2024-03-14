import v1 from "./img/video-1-m.webp"
import v2 from "./img/video-2-m.webp"
import vm from "./img/video-main.webp"
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

    return <section className="video" id="video">
        <div className="video__bg">
            <img src={bg} alt="Фон" />
        </div>
        <div className="video__content">
            <div className="video__main">
                <h2 className="video__main-title">Live a life like you wouldn’t imagine, experience a life you wouldn’t expect.</h2>
                <div className="video__main-img">
                    <img src={vm} alt="Основное видео" />
                </div>
            </div>
            <div className="video__row">
                {items.map((value, index) => (
                    <div className="video__item" key={index}>
                        <div className="video__item-img">
                            <img src={value.img} alt={value.alt} />
                        </div>
                        <div className="video__item-text">
                            <h3 className="video__item-title">{value.title}</h3>
                            <p className="video__item-descr">{value.descr}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section >
}

export default Video;