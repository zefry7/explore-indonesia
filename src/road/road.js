import v from "./img/video.webp"

function Road() {
    const content = [
        {
            title: "Bookings your flights",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus dapibus mauris in lectus tempus, eget tincidunt lacus varius. Sed euismod orci dictum faucibus malesuada. Praesent sed eros tincidunt, viverra neque auctor, lobortis enim."
        },
        {
            title: "Choosing your hotel",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus dapibus mauris in lectus tempus, eget tincidunt lacus varius. Sed euismod orci dictum faucibus malesuada. Praesent sed eros tincidunt, viverra neque auctor, lobortis enim.",
            video: v,
            alt: "",
            title_v: "Travelling there",
            text_v: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus dapibus mauris in lectus tempus, eget tincidunt."
        },
        {
            title: "Planning your experiences",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus dapibus mauris in lectus tempus, eget tincidunt lacus varius."
        }
    ]

    return <section className="road" id="road">
        <div className="road__content">
            <h2 className="road__title">Getting there</h2>
            <div className="road__points">
                {content.map((value, index) => (
                    <div className="road__item" key={index}>
                        <h3 className="road__item-title">{value.title}</h3>
                        <p className="road__item-text">{value.text}</p>
                        {index == 1 &&
                            <div className="road__item-block-video">
                                <div className="road__item-video">
                                    <img src={value.video} alt={value.alt} />
                                </div>
                                <div className="road__item-block-text">
                                    <h3 className="road__item-title">{value.title_v}</h3>
                                    <p className="road__item-text">{value.text_v}</p>
                                </div>
                            </div>
                        }
                    </div>
                ))}
                <button className="road__button button-anim">Learn More</button>
            </div>
        </div>
    </section>
}

export default Road;