import it1 from "./img/item-1.webp"
import it2 from "./img/item-2.webp"

function Articles() {
    const titles = ["The walkways of Indonesia spellbind", "Perfect beaches exude relaxation and fun"];
    const subText = "Lorem ipsum dolor sit amet, consectetur adip iscing elit. Fusce commodo magna et libero mollis rhoncus.";
    const textBt = "Learn More";
    const imgContent = [it1, it2]

    return (<section className="articles" id="articles">
        <div className="articles__content">
            {titles.map((value, index) => (
                <div className="articles__item" key={index}>
                    <div className="articles__img">
                        <img src={imgContent[index]} alt="Природа" />
                    </div>
                    <div className="articles__info">
                        <h3 className="articles__title">{value}</h3>
                        <p className="articles__text">{subText}</p>
                        <button className="articles__button button-anim">{textBt}</button>
                    </div>
                </div>
            ))}
        </div>
    </section>);
}

export default Articles;