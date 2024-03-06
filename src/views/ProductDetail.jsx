import { useState } from "react";
import { useParams } from "react-router-dom";
import Slider from "react-slick";

import ProductImg1 from "../assets/img/product/product1.png";
import ProductImg2 from "../assets/img/product/product2.png";
import ProductImg3 from "../assets/img/product/product3.png";
import ProductImg4 from "../assets/img/product/product4.png";
import ProductImg5 from "../assets/img/product/product5.png";
import ProductImg6 from "../assets/img/product/product6.png";
import ProductImg7 from "../assets/img/product/product7.png";
import ProductImg8 from "../assets/img/product/product8.png";

const sliderSettings = {
	slidesToShow: 4,
	slidesToScroll: 1,
	arrows: false,
	dots: false,
	autoplay: true,
	speed: 300,
	infinite: true,
	responsive: [
		{ breakpoint: 992, settings: { slidesToShow: 3 } },
		{ breakpoint: 768, settings: { slidesToShow: 2 } },
		{ breakpoint: 500, settings: { slidesToShow: 1 } },
	],
};

function ProductDetail() {
	const { productId } = useParams();
	console.log(productId);
	const [selectedImg, setSelectedImg] = useState(ProductImg1);

	return (
		<>
			<div className="single_product_section mb-100">
				<div className="container">
					<div className="row">
						<div className="col-lg-6 col-md-6">
							<div className="single_product_gallery">
								<div className="product_gallery_inner d-flex">
									<div className="product_gallery_main_img">
										{/* Display selected or clicked image */}
										<img src={selectedImg} alt="Product" />
									</div>
									<div className="product_gallery_btn_img">
										{/* List of all small images; clicking them changes the main image */}
										{[
											ProductImg1,
											ProductImg2,
											ProductImg3,
											ProductImg4,
											ProductImg5,
											ProductImg6,
											ProductImg7,
											ProductImg8,
										].map((img, index) => (
											<a
												key={index}
												className="gallery_btn_img_list"
												onClick={() => setSelectedImg(img)}
												href="#"
											>
												<img src={img} alt={`Thumbnail ${index + 1}`} />
											</a>
										))}
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-6 col-md-6">
							<div className="product_details_sidebar">
								<h2 className="product__title">Product Name Here</h2>
								<div className="price_box">
									<span className="current_price">$22.00</span>
								</div>
								<p className="product_details_desc">
									Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
									tempor incididunt ut labore et dolore magna aliqua.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Implement the Tab navigation for Description, Additional Information, etc. */}
			{/* Skipping for brevity */}

			<div className="product_section mb-80">
				<div className="container">
					<div className="section_title text-center mb-55">
						<h2>Related Products</h2>
						{/* Description if needed */}
					</div>
					<Slider
						{...sliderSettings}
						className="row product_slick slick_navigation slick__activation"
					>
						{/* Slider Items */}
						{[
							ProductImg1,
							ProductImg2,
							ProductImg3,
							ProductImg4,
							ProductImg5,
							ProductImg6,
							ProductImg7,
							ProductImg8,
						].map((img, index) => (
							<div key={index} className="col-lg-3">
								<article className="single_product">
									<figure>
										<div className="product_thumb">
											<a href={`product-${index + 1}.html`}>
												<img src={img} alt={`Product ${index + 1}`} />
											</a>
										</div>
										<figcaption className="product_content text-center">
											<h4>
												<a href={`product-${index + 1}.html`}>Product Name Here</a>
											</h4>
											<div className="price_box">
												<span className="current_price">$22.00</span>
											</div>
										</figcaption>
									</figure>
								</article>
							</div>
						))}
					</Slider>
				</div>
			</div>
		</>
	);
}

export default ProductDetail;
