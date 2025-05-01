import React, { FC, useEffect, useRef, useState } from "react";
// import "../Header/Header.css";

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
						<a href="Index.html" className="nav-link"></a>
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
						<a href="#" className="nav-link">
							АКЦИИ
						</a>
						<a href="#" className="nav-link">
							НОВИНКИ
						</a>
						<a href="reviews.html" className="nav-link">
							ОТЗЫВЫ
						</a>

						<div className="icons-container">
							<a href="cart.html" id="heart">
								<i className="fa-regular fa-heart"></i>
							</a>
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
						<a href="#" className="nav-link">
							Шкафы
						</a>
						<a href="#" className="nav-link">
							Кухни
						</a>
						<a href="#" className="nav-link">
							Стенки
						</a>
						<a href="#" className="nav-link">
							Прихожие
						</a>
						<a href="#" className="nav-link">
							Спальни
						</a>
						<a href="#" className="nav-link">
							Детские
						</a>
						<input type="text" placeholder="Поиск" className="search-input" />
						<i className="search-icon"></i>
					</div>
				</nav>
			</div>
		</header>
	);
};

export default Header;
