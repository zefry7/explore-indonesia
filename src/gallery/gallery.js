import it1 from "./img/item-1.png"
import it2 from "./img/item-2.png"
import it3 from "./img/item-3.png"
import it4 from "./img/item-4.png"
import it5 from "./img/item-5.png"
import it6 from "./img/item-6.png"

function Gallery() {
    const imgs = [[it1, it2], [it3, it4], [it5, it6]]


    return <section class="gallery">
        <div class="gallery__content">
            <h3 class="gallery__title">Photo Gallery</h3>
            <p class="gallery__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus dapibus mauris in lectus tempus, eget tincidunt.</p>
            <div class="gallery__img-content">
                {imgs.map(value => (
                    <div class="gallery__block-img">
                        <div class="gallery__img">
                            <img src={value[0]} alt="" />
                        </div>
                        <div class="gallery__img">
                            <img src={value[1]} alt="" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
}

export default Gallery;