import React from 'react';

const SpringYardTrail = () => {
	return (
		<div id="spring-yard-trail" className=" bg-trail-yellow pt-11 md:pt-16">
			<div className="container w-10/12 mx-auto text-center pb-11 md:pb-16">
				<h2 className="mb-8 font-sans text-5xl italic font-extrabold text-center md:text-8xl text-trail-pink">
					Whiteshill & Ruscombe Yard Trail 2024
				</h2>
				<div className="flex flex-col justify-center text-center align-middle">
					<p className="mb-5 text-5xl font-bold text-slate-900">
						Bank Holiday Monday May 6th 2024
					</p>

					<a
						className="relative bottom-0 flex items-center self-center justify-center px-5 py-3 text-2xl italic font-bold transition-all ease-out rounded-full mb-9 mt-7 hover:drop-shadow-lg hover:bottom-1 hover:font-semibold w-52 bg-trail-pink text-trail-slate"
						href="../maps/Whiteshill-Ruscome-Yard-Trail-2024.pdf"
						target="_blank"
					>
						Download Map
					</a>

					<a
						className="relative bottom-0 flex items-center self-center justify-center px-5 py-3 text-2xl italic font-bold transition-all ease-out bg-white rounded-full mb-9 hover:drop-shadow-lg hover:bottom-1 hover:font-semibold w-52 text-trail-pink"
						href="../maps/Whiteshill-Ruscome-Yard-Trail-2024-List.pdf"
						target="_blank"
					>
						Download Yard&nbsp;List
					</a>

					<p className="mx-auto text-2xl text-slate-900 md:w-8/12">
						Come and check out the new{' '}
						<strong>Whiteshill & Ruscombe Yard Trail</strong>, with loads of
						amazing stalls. A perfect chance to meet the community and check out
						some goodies.
					</p>
				</div>
			</div>
			<div className="bg-[url(./images/past-trails/superyard.jpg)] h-48 md:h-72 w-full bg-cover bg-top md:bg-center" />
		</div>
	);
};

export default SpringYardTrail;
