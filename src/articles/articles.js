import it1 from "./img/item-1.webp"
import it2 from "./img/item-2.webp"

function Articles() {
    const titles = ["The walkways of Indonesia spellbind", "Perfect beaches exude relaxation and fun"];
    const subText = "Lorem ipsum dolor sit amet, consectetur adip iscing elit. Fusce commodo magna et libero mollis rhoncus.";
    const textBt = "Learn More";
    const imgContent = [it1, it2]

    return (<section class="articles">
        <div class="articles__content">
            {titles.map((value, index) => (
                <div class="articles__item">
                    <div class="articles__img">
                        <img src={imgContent[index]} alt="" />
                    </div>
                    <div class="articles__info">
                        <h3 class="articles__title">{value}</h3>
                        <p class="articles__text">{subText}</p>
                        <button class="articles__button">{textBt}</button>
                    </div>
                </div>
            ))}
        </div>
    </section>);
}

export default Articles;