import Blog1 from "../assets/img/blog/blog1.png";
import MetaImage1 from "../assets/img/others/meta-img1.png";

function BlogCard() {
	return (
		<div className="col-lg-4 col-md-6 col-sm-6">
			<div className="single_blog wow fadeInUp" data-wow-delay="0.1s" data-wow-duration="1.1s">
				<div className="blog_thumb">
					<a href="blog-detail-1.html">
						<img src={Blog1} alt="" />
					</a>
				</div>
				<div className="blog_content">
					<div className="blog_arrow_btn">
						<a href="blog-detail-1.html">
							<i className="ion-arrow-right-c"></i>
						</a>
					</div>
					<span>Brakery</span>
					<h3>
						<a href="blog-detail-1.html">Lorem ipsum doloril sit amet consepy.</a>
					</h3>
					<div className="blog__meta d-flex align-items-center">
						<div className="blog__meta__thumb">
							<img src={MetaImage1} alt="" />
						</div>
						<div className="blog__meta__text">
							<ul className="d-flex">
								<li>By: Admin</li>
								<li>
									<i className="icofont-calendar"></i> 22 Aug, 2021
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default BlogCard;
