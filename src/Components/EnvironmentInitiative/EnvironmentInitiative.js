import React from "react";
import "./EnvironmentInitiative.css";
export default function EnvironmentInitiative() {
	return (
		<section className='envinitiative'>
			<div className='custom_container_left'>
				<div className='d-flex flex-wrap'>
					<div className='col-12 col-md-5'>
						<h3 className='title'>
							Environment <br />
							Initiative
						</h3>
						<p className='title_brief'>
							Earth is the third planet from the Sun and the only{" "}
							<br className='d-none d-md-inline-block' />
							astronomical object known to harbor life. According
							to <br className='d-none d-md-inline-block' />
							radiometric dating estimation and other evidence,
							Earth
							<br className='d-none d-md-inline-block' /> formed
							over 4.5 billion years ago.
						</p>
					</div>
					<div className='col-12 col-md-7'>
						<div className='image_wrapper'>
							<span>
								<img
									className='img-fluid'
									src='/assets/envinitiative/envInitiative1.png'
									alt=''
									srcset=''
								/>
							</span>
							<span>
								<img
									className='img-fluid'
									src='/assets/envinitiative/envInitiative2.png'
									alt=''
									srcset=''
								/>
							</span>
						</div>
					</div>
				</div>
			</div>
			<div className='custom_container_left'>
				<div className='d-flex flex-wrap  handbook'>
					<div className='col-12 col-md-5'>
						<h3 className='title'>The Green Handbook</h3>
						<h6 className='writer'>~ Inaayat Passi</h6>
						<p className='title_brief' style={{}}>
							Nunc nunc vitae mauris eu. Leo vitae maecenas
							consequat orci malesuada dui, consectetur. Fames
							magna purus sollicitudin cursus. Lacinia purus
							lectus varius turpis porttitor in sapien blandit. In
							pellentesque adipiscing arcu est id libero diam
							vitae enim. Tristique mauris ultricies lacus mi sit
							mauris feugiat aliquet at. At risus quam neque
							pharetra duis tellus. Scelerisque purus pellentesque
							ultrices integer sed. Nec dignissim felis aenean
							consequat mi vitae. Sed ultricies porta neque
							accumsan, nunc, nunc, eget. Nisl ac sed fermentum
							faucibus egestas dolor. Phasellus integer at ac ut
							dictumst at. Sed nisl mattis a sit accumsan odio
							malesuada suspendisse. Libero vulputate id mauris
							fermentum ac, nulla lectus et gravida. Eu bibendum
							convallis aliquam quam tortor, tellus sagittis.
							Elementum fames dignissim quam non dictum tempor,
							imperdiet. Hendrerit lectus varius tempor, nunc,
							sodales odio. Id luctus magna scelerisque dignissim
							rhoncus laoreet. Quam sagittis dolor justo ligula
							leo eget venenatis vitae. Sagittis parturient sed
							pellentesque feugiat. Orci, morbi ipsum a semper.
							Quis feugiat risus amet nunc cursus semper erat
							elementum. Metus diam, ac sed non in. Bibendum
							consectetur eget at pellentesque euismod morbi
							fringilla nunc, elit. Auctor tortor pellentesque ac
							gravida nisl tellus mauris eget. Nulla.
						</p>
						<div className='mt-5'>
							<span className='me-2 viewPdf'>View PDF</span>
							<span>
								<img
									src='/assets/blackLinkArrow.png'
									alt=''
									className='img-fluid'
								/>
							</span>
						</div>
					</div>
					<div className='col-12 col-md-7 d-flex justify-content-center'>
						<div className='handbook_image'>
							<img
								className='img-fluid'
								src='/assets/envinitiative/handbook.png'
								alt=''
								srcset=''
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
