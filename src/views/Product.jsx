import BreadCrum from "../components/BreadCrum";
import ProductCard, { ProductCard2 } from "../components/ProductCard";

function Product() {
	return (
		<>
			<BreadCrum name={"Products"} />

			<div className="product_page_section mb-100">
				<div className="container">
					<div className="row">
						<div className="col-lg-12">
							<div className="product_page_wrapper">
								{/* <!--shop toolbar area start--> */}
								<div className="product_sidebar_header mb-60 d-flex justify-content-between align-items-center">
									<div className="page__amount border">
										<p>
											<span>12</span> Product Found of <span>30</span>
										</p>
									</div>
									<div className="product_header_right d-flex align-items-center">
										{/* <div className="sorting__by d-flex align-items-center">
                                    <span>Sort By : </span>
                                    <form className="select_option" action="#">
                                        <select name="orderby" id="short">
                                            <option selected value="1">Default</option>
                                            <option value="2">Sort by popularity</option>
                                            <option value="3">Sort by newness</option>
                                            <option value="4"> low to high</option>
                                            <option value="5"> high to low</option>
                                            <option value="6">Product Name: Z</option>
                                        </select>
                                    </form>
                                </div> */}
										<div className="product__toolbar__btn">
											<ul className="nav" role="tablist">
												<li className="nav-item">
													<a
														className="active"
														data-bs-toggle="tab"
														href="#grid"
														role="tab"
														aria-controls="grid"
														aria-selected="true"
													>
														<i className="ion-grid"></i>
													</a>
												</li>
												<li className="nav-item">
													<a
														data-bs-toggle="tab"
														href="#list"
														aria-controls="list"
														role="tab"
														aria-selected="false"
													>
														<i className="ion-ios-list"></i>
													</a>
												</li>
											</ul>
										</div>
									</div>
								</div>
								{/* <!--shop toolbar area end--> */}

								{/* <!--shop gallery start--> */}
								<div className="product_page_gallery">
									<div className="tab-content" id="myTabContent">
										<div className="tab-pane fade show active" id="grid">
											<div className="row grid__product">
												<ProductCard />
												<ProductCard />
												<ProductCard />
												<ProductCard />
												<ProductCard />
												<ProductCard />
												<ProductCard />
												<ProductCard />
												<ProductCard />
												<ProductCard />
												<ProductCard />
												<ProductCard />
											</div>
										</div>

										<div className="tab-pane fade" id="list">
											<div className="list__product">
												<ProductCard2 />
												<ProductCard2 />
												<ProductCard2 />
												<ProductCard2 />
											</div>
										</div>
									</div>
								</div>
								<div className="pagination poduct_pagination">
									<ul>
										<li className="current">
											<span>1</span>
										</li>
										<li>
											<a href="#">2</a>
										</li>
										<li>
											<a href="#">3</a>
										</li>
										<li className="next">
											<a href="#">
												<i className="ion-chevron-right"></i>
											</a>
										</li>
									</ul>
								</div>
								{/* <!--shop gallery end--> */}
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Product;
