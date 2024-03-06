import BlogCard from "../components/BlogCard";

function Blog() {
	return (
		<>
			<div
				className="breadcrumbs_aree breadcrumbs_bg mb-100"
				data-bgimg="assets/img/others/testimonial-bg.png"
			>
				<div className="container">
					<div className="row">
						<div className="col-12">
							<div className="breadcrumbs_text">
								<h1>BLOGS</h1>
								<ul>
									<li>
										<a href="index.html">Home </a>
									</li>
									<li> / Blogs</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="blog_page_section mb-110">
				<div className="container">
					<div className="row">
						<div className="col-lg-12">
							<div className="blog_page_sidebar">
								<div className="blog_page_inner">
									<div className="row">
										<BlogCard />
										<BlogCard />
										<BlogCard />
										<BlogCard />
										<BlogCard />
										<BlogCard />
									</div>
								</div>
								<div className="pagination blog_pagination_sidebar">
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
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Blog;
