import AboutBg from "../assets/img/bg/about-bg.png";
import VideoPlay from "../assets/img/others/video-play.png";

import Brand1 from "../assets/img/others/brand1.png";
import Brand2 from "../assets/img/others/brand2.png";
import Brand3 from "../assets/img/others/brand3.png";
import Brand4 from "../assets/img/others/brand4.png";
import Brand5 from "../assets/img/others/brand5.png";

import BrandHover1 from "../assets/img/others/brand-hover1.png";
import BrandHover2 from "../assets/img/others/brand-hover2.png";
import BrandHover3 from "../assets/img/others/brand-hover3.png";
import BrandHover4 from "../assets/img/others/brand-hover4.png";
import BrandHover5 from "../assets/img/others/brand-hover5.png";

import Team1 from "../assets/img/others/team1.png";
import Team2 from "../assets/img/others/team2.png";
import Team3 from "../assets/img/others/team3.png";

import Service1 from "../assets/img/others/services1.png";
import Service2 from "../assets/img/others/services2.png";
import Service3 from "../assets/img/others/services3.png";

import TestimonialShape from "../assets/img/others/testimonial-shap-thumb.png";

function About() {
	return (
		<>
			<div
				className="about_video-section wow fadeInUp"
				data-wow-delay="0.1s"
				data-wow-duration="1.1s"
			>
				<div className="container">
					<div className="row">
						<div className="col-12">
							<div className="about_video_thumb">
								<img src={AboutBg} alt="" />
								<div className="video_paly_icon">
									<a className="video_popup">
										<img src={VideoPlay} alt="" />
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="about_description_section mb-105">
				<div className="container">
					<div className="row">
						<div className="col-lg-6 col-md-6">
							<div
								className="about_desc wow fadeInUp"
								data-wow-delay="0.1s"
								data-wow-duration="1.1s"
							>
								<h2>Our Vision</h2>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
									eiusmoddll tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
									minim veni quis nostrud exercit ullamco laboris nisi ut aliquip ex ea
									commodo conseql Duis aute irure dolor in reprehendergg in voluptate velit
									esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat.
								</p>
							</div>
						</div>
						<div className="col-lg-6 col-md-6">
							<div
								className="about_desc wow fadeInUp"
								data-wow-delay="0.1s"
								data-wow-duration="1.1s"
							>
								<h2>Our Mission</h2>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
									eiusmoddll tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
									minim veni quis nostrud exercit ullamco laboris nisi ut aliquip ex ea
									commodo conseql Duis aute irure dolor in reprehendergg in voluptate velit
									esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div
				className="brand_section_area mb-100 wow fadeInUp"
				data-wow-delay="0.1s"
				data-wow-duration="1.1s"
			>
				<div className="container">
					<div className="row">
						<div className="col-12">
							<div
								className="brand_inner slick__activation"
								data-slick={`{
								"slidesToShow": 5,
								"slidesToScroll": 1,
                "arrows": false,
                "dots": false,
                "autoplay": false,
                "speed": 300,
                "infinite": true ,  
                "responsive":[  
                  {"breakpoint":992, "settings": { "slidesToShow": 4 } },  
                  {"breakpoint":768, "settings": { "slidesToShow": 3 } }, 
                  {"breakpoint":576, "settings": { "slidesToShow": 2 } }, 
                  {"breakpoint":300, "settings": { "slidesToShow": 1 } }  
                ]                                                     
								}`}
							>
								<div
									className="single_brand"
									style={{
										"filter": "brightness(100%) saturate(0%)",
										"-webkit-filter": "brightness(100%) saturate(0%);",
									}}
								>
									<a className="primary" href="#">
										<img src={Brand1} alt="" />
									</a>
									<a className="secondary" href="#">
										<img src={BrandHover1} alt="" />
									</a>
								</div>
								<div
									className="single_brand"
									style={{
										"filter": "brightness(100%) saturate(0%)",
										"-webkit-filter": "brightness(100%) saturate(0%);",
									}}
								>
									<a className="primary" href="#">
										<img src={Brand2} alt="" />
									</a>
									<a className="secondary" href="#">
										<img src={BrandHover2} alt="" />
									</a>
								</div>
								<div
									className="single_brand"
									style={{
										"filter": "brightness(100%) saturate(0%)",
										"-webkit-filter": "brightness(100%) saturate(0%);",
									}}
								>
									<a className="primary" href="#">
										<img src={Brand3} alt="" />
									</a>
									<a className="secondary" href="#">
										<img src={BrandHover3} alt="" />
									</a>
								</div>
								<div
									className="single_brand"
									style={{
										"filter": "brightness(100%) saturate(0%)",
										"-webkit-filter": "brightness(100%) saturate(0%);",
									}}
								>
									<a className="primary" href="#">
										<img src={Brand4} alt="" />
									</a>
									<a className="secondary" href="#">
										<img src={BrandHover4} alt="" />
									</a>
								</div>
								<div
									className="single_brand"
									style={{
										"filter": "brightness(100%) saturate(0%)",
										"-webkit-filter": "brightness(100%) saturate(0%);",
									}}
								>
									<a className="primary" href="#">
										<img src={Brand5} alt="" />
									</a>
									<a className="secondary" href="#">
										<img src={BrandHover5} alt="" />
									</a>
								</div>
								<div
									className="single_brand"
									style={{
										"filter": "brightness(100%) saturate(0%)",
										"-webkit-filter": "brightness(100%) saturate(0%);",
									}}
								>
									<a className="primary" href="#">
										<img src={Brand1} alt="" />
									</a>
									<a className="secondary" href="#">
										<img src={BrandHover1} alt="" />
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="team_member_section mb-110">
				<div className="container">
					<div
						className="section_title text-center wow fadeInUp mb-50"
						data-wow-delay="0.1s"
						data-wow-duration="1.1s"
					>
						<h2>Team Member</h2>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod <br />{" "}
							tempor incididunt ut labore et dolore magna
						</p>
					</div>
					<div className="team_member_inner">
						<div className="row">
							<div className="col-lg-4 col-md-4 col-sm-6">
								<div
									className="single_team_member wow fadeInUp"
									data-wow-delay="0.1s"
									data-wow-duration="1.1s"
								>
									<div className="team_thumb">
										<a href="#">
											<img src={Team1} alt="" />
										</a>
										<div className="team_text">
											<h3>Kianna Pham</h3>
											<h4>Team Member</h4>
										</div>
									</div>
								</div>
							</div>
							<div className="col-lg-4 col-md-4 col-sm-6">
								<div
									className="single_team_member wow fadeInUp"
									data-wow-delay="0.2s"
									data-wow-duration="1.2s"
								>
									<div className="team_thumb">
										<a href="#">
											<img src={Team2} alt="" />
										</a>
										<div className="team_text">
											<h3>Kianna Pham</h3>
											<h4>Team Member</h4>
										</div>
									</div>
								</div>
							</div>
							<div className="col-lg-4 col-md-4 col-sm-6">
								<div
									className="single_team_member wow fadeInUp"
									data-wow-delay="0.3s"
									data-wow-duration="1.3s"
								>
									<div className="team_thumb">
										<a href="#">
											<img src={Team3} alt="" />
										</a>
										<div className="team_text">
											<h3>Kianna Pham</h3>
											<h4>Team Member</h4>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div
				className="testimonial_section mb-110 wow fadeInUp"
				data-bgimg="assets/img/others/testimonial-bg.png"
				data-wow-delay="0.1s"
				data-wow-duration="1.1s"
			>
				<div className="container">
					<div className="row">
						<div className="col-12">
							<div
								className="testimonial_wrapper slick__activation"
								data-slick='{
                        "slidesToShow": 1,
                        "slidesToScroll": 1,
                        "arrows": false,
                        "dots": false,
                        "autoplay": false,
                        "speed": 300,
                        "infinite": true ,  
                        "responsive":[ 
                          {"breakpoint":500, "settings": { "slidesToShow": 1 } }  
                         ]                                                     
                    }'
							>
								<div className="testimonial_inner d-flex align-items-center">
									<div className="testimonial_thumb">
										<img src={TestimonialShape} alt="" />
									</div>
									<div className="testimonial_content">
										<div className="testimonial_rating">
											<ul>
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
														<i className="ion-ios-star"></i>
													</a>
												</li>
											</ul>
										</div>
										<div className="testimonial_author">
											<h3>Kianna Pham</h3>
											<h4>Customer</h4>
										</div>
										<div className="testimonial_desc">
											<p>
												Lorem ipsum dolor sit amet, consectetur adipisicingl elit, sed
												do eiusmod tempor incididunt ut laboredolor magna aliqua. Ut
												enim ad minim veniam, quis nostru exercitation ullamco laboris
											</p>
										</div>
									</div>
								</div>
								<div className="testimonial_inner d-flex align-items-center">
									<div className="testimonial_thumb">
										<img src={TestimonialShape} alt="" />
									</div>
									<div className="testimonial_content">
										<div className="testimonial_rating">
											<ul>
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
														<i className="ion-ios-star"></i>
													</a>
												</li>
											</ul>
										</div>
										<div className="testimonial_author">
											<h3>Kianna Pham</h3>
											<h4>Customer</h4>
										</div>
										<div className="testimonial_desc">
											<p>
												Lorem ipsum dolor sit amet, consectetur adipisicingl elit, sed
												do eiusmod tempor incididunt ut laboredolor magna aliqua. Ut
												enim ad minim veniam, quis nostru exercitation ullamco laboris
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="service_section mb-110">
				<div className="container">
					<div className="row">
						<div className="col-12">
							<div className="services_section_inner d-flex justify-content-between">
								<div
									className="single_services one text-center wow fadeInUp"
									data-wow-delay="0.1s"
									data-wow-duration="1.1s"
								>
									<div className="services_thumb">
										<img src={Service1} alt="" />
									</div>
									<div className="services_content">
										<h3>
											<a href="shop.html">Pastry</a>
										</h3>
										<p>Lorem ipsum dolor sit ametgtol consecr adipiscing elit.</p>
									</div>
								</div>
								<div
									className="single_services three text-center wow fadeInUp"
									data-wow-delay="0.3s"
									data-wow-duration="1.3s"
								>
									<div className="services_thumb">
										<img src={Service2} alt="" />
									</div>
									<div className="services_content">
										<h3>
											<a href="shop.html">Cofee Cake</a>
										</h3>
										<p>Lorem ipsum dolor sit ametgtol consecr adipiscing elit.</p>
									</div>
								</div>
								<div
									className="single_services four text-center wow fadeInUp"
									data-wow-delay="0.4s"
									data-wow-duration="1.4s"
								>
									<div className="services_thumb">
										<img src={Service3} alt="" />
									</div>
									<div className="services_content">
										<h3>
											<a href="shop.html">Bake Tost</a>
										</h3>
										<p>Lorem ipsum dolor sit ametgtol consecr adipiscing elit.</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default About;
