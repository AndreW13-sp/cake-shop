// eslint-disable-next-line react/prop-types
function BreadCrum({ name }) {
	return (
		<div
			className="breadcrumbs_aree breadcrumbs_bg mb-100"
			data-bgimg="assets/img/others/testimonial-bg.png"
		>
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="breadcrumbs_text">
							<h1>{name}</h1>
							<ul>
								<li>
									<a href="index.html">Home </a>
								</li>
								<li> / {name}</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default BreadCrum;
