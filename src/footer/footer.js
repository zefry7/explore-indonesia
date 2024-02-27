import soc1 from "./img/social-facebook.svg"
import soc2 from "./img/social-linkedin.svg"
import soc3 from "./img/social-google.svg"
import arrow from "./img/arrow-up.svg"

function Footer() {
    const socials = [soc1, soc2, soc3];
    const links = ["About", "Pricing", "Company", "Blog"];

    return <footer class="footer">
        <div class="footer__content">
            <p class="footer__name">
                <span>Explore</span><br/>
                Indonesia
            </p>
            <ul class="footer__links">
                {links.map(value => (
                    <li class="footer__link">{value}</li>
                ))}
            </ul>
            <ul class="footer__socials">
                {socials.map(value => (
                    <li class="footer__item">
                        <img src={value} alt="" />
                    </li>
                ))}
            </ul>
            <p class="footer__copyright">Copyright © 2019</p>
            <div class="footer__button-up">
                <img src={arrow} alt="" />
            </div>
        </div>
    </footer>
}

export default Footer;