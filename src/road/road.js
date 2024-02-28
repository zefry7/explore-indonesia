import v from "./img/video.png"

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

    return <section class="road">
        <div class="road__content">
            <h2 class="road__title">Getting there</h2>
            <div class="road__points">
                {content.map((value, index) => (
                    <div class="road__item">
                        <h4 class="road__item-title">{value.title}</h4>
                        <p class="road__item-text">{value.text}</p>
                        {index == 1 &&
                            <div class="road__item-block-video">
                                <div class="road__item-video">
                                    <img src={value.video} alt={value.alt} />
                                </div>
                                <div class="road__item-block-text">
                                    <h4 class="road__item-title">{value.title_v}</h4>
                                    <p class="road__item-text">{value.text_v}</p>
                                </div>
                            </div>
                        }
                    </div>
                ))}
                <button class="road__button">Learn More</button>
            </div>
        </div>
    </section>
}

export default Road;