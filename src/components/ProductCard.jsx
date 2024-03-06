import ProductImage from "../assets/img/product/product1.png";
import ProductImage12 from "../assets/img/product/product12.png";

function ProductCard() {
	return (
		<div className="col-xl-3 col-md-4 col-sm-6">
			<article
				className="single_product wow fadeInUp"
				data-wow-delay="0.1s"
				data-wow-duration="1.1s"
			>
				<figure>
					<div className="product_thumb">
						<a href="product-1.html">
							<img src={ProductImage} alt="" />
						</a>
						<div className="action_links">
							<ul className="d-flex justify-content-center">
								<li className="quick_button">
									<a
										href="#"
										title="Quick View"
										data-bs-toggle="modal"
										data-bs-target="#modal_box"
									>
										{" "}
										<span className="pe-7s-look"></span>
									</a>
								</li>
							</ul>
						</div>
					</div>
					<figcaption className="product_content text-center">
						<h4>
							<a href="product-1.html">Products Name Here</a>
						</h4>
						<div className="price_box">
							<span className="current_price">$22.00</span>
						</div>
					</figcaption>
				</figure>
			</article>
		</div>
	);
}

export default ProductCard;

export function ProductCard2() {
	return (
		<article className="product_list_items border-bottom">
			<figure className="product_list_flex d-flex align-items-center">
				<div className="product_thumb">
					<a href="product-1.html">
						<img src={ProductImage12} alt="" />
					</a>
					<div className="action_links">
						<ul className="d-flex justify-content-center">
							<li className="quick_button">
								<a
									href="#"
									title="Quick View"
									data-bs-toggle="modal"
									data-bs-target="#modal_box"
								>
									<span className="pe-7s-look"></span>
								</a>
							</li>
						</ul>
					</div>
				</div>
				<figcaption className="product_list_content">
					<h4>
						<a href="product-1.html">Products Name Here</a>
					</h4>
					<div className="product__ratting">
						<ul className="d-flex">
							<li>
								<a href="#">
									<i className="ion-ios-star"></i>
								</a>
							</li>
							<li>
								<a href="#">
									<i className="ion-ios-star"></i>
								</a>
							</li>
							<li>
								<a href="#">
									<i className="ion-ios-star"></i>
								</a>
							</li>
							<li>
								<a href="#">
									<i className="ion-ios-star"></i>
								</a>
							</li>
							<li>
								<a href="#">
									<i className="ion-android-star-outline"></i>
								</a>
							</li>
						</ul>
					</div>
					<div className="price_box">
						<span className="current_price">$22.00</span>
					</div>
					<div className="product__desc">
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos aliquam
							maiores impedit temporibus ratione eveniet adipisci ab quisquam in quam.
						</p>
					</div>
					<div className="action_links product_list_action">
						<ul className="d-flex">
							<li className="quick_button">
								<a
									href="#"
									title="Quick View"
									data-bs-toggle="modal"
									data-bs-target="#modal_box"
								>
									<span className="pe-7s-look"></span>
								</a>
							</li>
						</ul>
					</div>
				</figcaption>
			</figure>
		</article>
	);
}
