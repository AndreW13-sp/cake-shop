import BreadCrum from "../components/BreadCrum";

function Contact() {
	return (
		<>
			<BreadCrum name={"Contact Us"} />

			<div className="contact_page_section mb-100">
				<div className="container">
					<div className="contact_details">
						<div className="row">
							<div className="col-lg-7 col-md-6">
								<div className="contact_info_content">
									<h2>We Are Here Fro Help You! Please Contact Us.</h2>
									<div className="contact_search">
										<form action="#">
											<input placeholder="Enter your country or city" type="text" />
											<button type="submit">
												<i className="ion-ios-search"></i>
											</button>
										</form>
									</div>
									<div className="contact_info_details mb-45">
										<h3>Store In New Work</h3>
										<p>Your address goes here.</p>
										<p>
											<a href="tel:0123456789">0123456789</a>
										</p>
										<p>
											<a href="#">demo@example.com</a>
										</p>
										<p>
											<a href="#">www.example.com</a>
										</p>
										<span>See On The Map</span>
									</div>
									<div className="contact_info_details">
										<h3>Store In New Work</h3>
										<p>Your address goes here.</p>
										<p>
											<a href="tel:0123456789">0123456789</a>
										</p>
										<p>
											<a href="#">demo@example.com</a>
										</p>
										<p>
											<a href="#">www.example.com</a>
										</p>
										<span>See On The Map</span>
									</div>
								</div>
							</div>
							<div className="col-lg-5 col-md-6">
								<div
									className="contact_form"
									data-bgimg="assets/img/others/contact-form-bg-shape.png"
								>
									<h2>Send A Quest</h2>
									<form id="contact-form" action="#">
										<div className="form_input">
											<input name="con_name" placeholder="Name*" type="text" />
										</div>
										<div className="form_input">
											<input name="con_email" placeholder="E-Mail*" type="text" />
										</div>
										<div className="form_input">
											<input name="con_subject" placeholder="Subject" type="text" />
										</div>
										<div className="form_textarea">
											<textarea name="con_message" placeholder="Message Hare"></textarea>
										</div>
										<div className="form_input_btn">
											<button type="submit" className="btn btn-link">
												send message
											</button>
										</div>
										<p className="form-message"></p>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Contact;
