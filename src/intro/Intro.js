import search from "./img/search.svg"
import menu from "./img/menu.svg"
import bg from "./img/bg.jpg"
import play from "./img/play.svg"

function Intro() {
    const items = [
        {
            number: "01",
            title: "Title here",
            descr: "Lorem ipsum dolor sit amet et amet ist ame."
        },
        {
            number: "02",
            title: "Title here",
            descr: "Lorem ipsum dolor sit amet et amet ist ame."
        },
        {
            number: "03",
            title: "Title here",
            descr: "Lorem ipsum dolor sit amet et amet ist ame."
        }
    ]

    window.addEventListener("resize", () => {
        if (window.innerWidth > 768) {
            document.body.classList.remove("block-scroll")
            document.querySelector(".header__menu").classList.remove("menu-active")
        }
    })

    const menuClick = e => {
        const move = window.scrollY;

        window.scrollBy({
            top: (-1) * move,
            behavior: "smooth"
        })

        const target = e.target.parentNode.parentNode;
        target.classList.toggle("menu-active")

        const bodyElement = document.querySelector("body");
        bodyElement.classList.toggle("block-scroll")
    }

    const clickLink = e => {
        const target = e.target

        const section = document.querySelector(target.getAttribute("data-move"));
        const move = section.offsetTop;

        window.scrollBy({
            top: move,
            behavior: "smooth",
        })

        document.body.classList.remove("block-scroll")
        document.querySelector(".header__menu").classList.remove("menu-active")
    }

    return (
        <section className="intro">
            <header className="header">
                <p className="header__logo">Explore<br /> Indonesia</p>
                <nav className="header__links">
                    <p className="header__link" data-move="#articles" onClick={event => clickLink(event)}>destinations</p>
                    <p className="header__link" data-move="#video" onClick={event => clickLink(event)}>experiences</p>
                    <p className="header__link" data-move="#road" onClick={event => clickLink(event)}>about</p>
                    <p className="header__link" data-move="#gallery" onClick={event => clickLink(event)}>gallery</p>
                </nav>
                <div className="header__right">
                    <div className="header__search">
                        <img src={search} alt="Кнопка поиска" />
                    </div>
                    <div className="header__menu">
                        <div className="header__menu-img" onClick={event => menuClick(event)}>
                            <img src={menu} alt="Кнопка меню" />
                        </div>
                        <div className="header__menu-content">
                            <p className="header__link" data-move="#articles" onClick={event => clickLink(event)}>destinations</p>
                            <p className="header__link" data-move="#video" onClick={event => clickLink(event)}>experiences</p>
                            <p className="header__link" data-move="#road" onClick={event => clickLink(event)}>about</p>
                            <p className="header__link" data-move="#gallery" onClick={event => clickLink(event)}>gallery</p>
                        </div>
                    </div>
                </div>
            </header>
            <div className="intro__content">
                <div className="intro__center">
                    <div className="intro__bg">
                        <img src={bg} alt="Фоновая картинка" />
                    </div>
                    <h2 className="intro__title">explore<br /> indonesia</h2>
                    <button className="intro__button">Start travelling</button>
                </div>
                <div className="intro__row-bottom">
                    <div className="intro__items">
                        {items.map((value, index) => (
                            <div className="intro__item" key={index}>
                                <p className="intro__item-number">{value.number}</p>
                                <p className="intro__item-title">{value.title}</p>
                                <p className="intro__item-description">{value.descr}</p>
                            </div>
                        ))}
                    </div>
                    <div className="intro__video">
                        <div className="intro__play">
                            <img src={play} alt="Кнопка запуска видео" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Intro;