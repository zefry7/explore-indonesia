import it1 from "./img/item-1.webp"
import it2 from "./img/item-2.webp"
import it3 from "./img/item-3.webp"
import it4 from "./img/item-4.webp"
import it5 from "./img/item-5.webp"
import it6 from "./img/item-6.webp"

function Gallery() {
    const imgs = [[it1, it2], [it3, it4], [it5, it6]]


    return <section className="gallery" id="gallery">
        <div className="gallery__content">
            <h3 className="gallery__title">Photo Gallery</h3>
            <p className="gallery__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus dapibus mauris in lectus tempus, eget tincidunt.</p>
            <div className="gallery__img-content">
                {imgs.map((value, index) => (
                    <div className="gallery__block-img" key={index}>
                        <div className="gallery__img">
                            <img src={value[0]} alt="Фотография" />
                        </div>
                        <div className="gallery__img">
                            <img src={value[1]} alt="Фотография" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
}

export default Gallery;