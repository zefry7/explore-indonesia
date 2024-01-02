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

    return (
        <section class="intro">
            <header class="header">
                <p class="header__logo">Explore<br/> Indonesia</p>
                <nav class="header__links">
                    <p class="header__link">destinations</p>
                    <p class="header__link">experiences</p>
                    <p class="header__link">about</p>
                    <p class="header__link">gallery</p>
                </nav>
                <div class="header__right">
                    <div class="header__search">
                        <img src={search} alt="Кнопка поиска" />
                    </div>
                    <div class="header__menu">
                        <img src={menu} alt="Кнопка меню" />
                    </div>
                </div>
            </header>
            <div class="intro__content">
                <div class="intro__center">
                    <div class="intro__bg">
                        <img src={bg} alt="Фоновая картинка" />
                    </div>
                    <h2 class="intro__title">explore<br /> indonesia</h2>
                    <button class="intro__button">Start travelling</button>
                </div>
                <div class="intro__row-bottom">
                    <div class="intro__items">
                        {items.map(value => (
                            <div class="intro__item">
                                <p class="intro__item-number">{value.number}</p>
                                <p class="intro__item-title">{value.title}</p>
                                <p class="intro__item-description">{value.descr}</p>
                            </div>
                        ))}
                    </div>
                    <div class="intro__video">
                        <div class="intro__play">
                            <img src={play} alt="Кнопка запуска видео" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Intro;