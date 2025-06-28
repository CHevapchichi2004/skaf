import React, { FC, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
const Header: FC = () => {
	const containterRef = useRef<HTMLDivElement>(null);
	const [scrolled, setScrolled] = useState<boolean>(false);
	const [sub, setSub] = useState<boolean>(false);
	const handleScroll = () => {
		if (window.scrollY > 50) {
			setScrolled(true);
		} else {
			setScrolled(false);
		}
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	});
	return (
		<header className="header">
			<div
				className={`container ${scrolled ? "scrolled" : null}`}
				ref={containterRef}
			>
				<nav className="main-nav" aria-label="Основная навигация">
					<div className="nav-primary container_2">
						<Link to="/" className="nav-link" id="header_logo"/>
						<a
							onMouseEnter={() => setSub(true)}
							onMouseLeave={() => setSub(false)}
							href="#"
							className="nav-link"
							id="catalogButton"
							aria-haspopup="true"
						>
							КАТАЛОГ
						</a>
						<a href="#" className="nav-link">
							О НАС
						</a>
						<a
							href="#contacts"
							className="nav-link"
							onClick={(e) => {
								e.preventDefault();
								window.scrollTo({
									top: document.documentElement.scrollHeight,
									behavior: "smooth",
								});
							}}
						>
							КОНТАКТЫ
						</a>
						<Link to="/" className="nav-link">
							АКЦИИ
						</Link>
						<a href="#" className="nav-link">
							НОВИНКИ
						</a>
						<Link to="review" className="nav-link">
							ОТЗЫВЫ
						</Link>

						<div className="icons-container">
							<Link to="cart.html" id="heart">
								<i className="fa-regular fa-heart"></i>
							</Link>
							<div className="phone-container">
								<a href="tel:+79999999999" id="phone">
									<i className="fa-solid fa-phone"></i>
								</a>
								<span className="phone-tooltip">+7 (999) 999-99-99</span>
							</div>
						</div>
					</div>

					<div
						id="con_2"
						onMouseEnter={() => setSub(true)}
						onMouseLeave={() => setSub(false)}
						className={`nav-secondary container_2 ${sub ? "active" : ""}`}
						aria-label="Подкатегории"
					>
						<Link to="/category/closets" className="nav-link">
							Шкафы
						</Link>
						<Link to="/category/kitchens" className="nav-link">
							Кухни
						</Link>
						<Link to="/category/walls" className="nav-link">
							Стенки
						</Link>
						<Link to="/category/wardrobes" className="nav-link">
							Прихожие
						</Link>
						<Link to="/category/bedrooms" className="nav-link">
							Спальни
						</Link>
						<Link to="/category/kidRooms" className="nav-link">
							Детские
						</Link>
						<input type="text" placeholder="Поиск" className="search-input" />
						<i className="search-icon"></i>
					</div>
				</nav>
			</div>
		</header>
	);
};

export default Header;
