import soc1 from "./img/social-facebook.svg"
import soc2 from "./img/social-linkedin.svg"
import soc3 from "./img/social-google.svg"
import arrow from "./img/arrow-up.svg"

function Footer() {
    const socials = [soc1, soc2, soc3];
    const links = ["About", "Pricing", "Company", "Blog"];

    const buttonUp = () => {
        const move = (-1) * window.scrollY;

        window.scrollBy({
            behavior: "smooth",
            top: move
        })
    }

    return <footer className="footer">
        <div className="footer__content">
            <p className="footer__name">
                <span>Explore</span><br/>
                Indonesia
            </p>
            <ul className="footer__links">
                {links.map((value, index) => (
                    <li className="footer__link" key={index}>{value}</li>
                ))}
            </ul>
            <ul className="footer__socials">
                {socials.map((value, index) => (
                    <li className="footer__item" key={index}>
                        <img src={value} alt="Социальная сеть" />
                    </li>
                ))}
            </ul>
            <p className="footer__copyright">Copyright © 2019</p>
            <div className="footer__button-up button-anim" onClick={() => buttonUp()}>
                <img src={arrow} alt="Кнопка наверх" />
            </div>
        </div>
    </footer>
}

export default Footer;