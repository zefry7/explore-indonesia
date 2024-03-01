import bg from "./img/bg.png"

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