import React, { FC } from "react";

interface PopCardProps {
	title: string;
	description: string;
	img: string;
	price: number;
}

const PopCard: FC<PopCardProps> = ({ title, description, img, price }) => {
	return (
		<a href="product.html" className="product-card">
			<div className="product-image">
				<img src={img} alt="Фото продукта" />
			</div>
			<h3 className="product-title">{title}</h3>
			<p className="product-description">{description}</p>
			<span className="product-price">{price} руб</span>
		</a>
	);
};

export default PopCard;
