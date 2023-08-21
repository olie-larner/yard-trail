import React, { useState, useEffect } from 'react';
import MultiImage from '../images/multi-yard.png';
import classnames from 'classnames';
import { useIntersectionObserver } from '@uidotdev/usehooks';

const MultiYards = () => {
	const [multiYard, setMultiYard] = useState(false);

	const [multi, multiEntry] = useIntersectionObserver({
		threshold: 0.8,
		root: null,
	});

	useEffect(() => {
		if (multiEntry?.isIntersecting === true) {
			setMultiYard(true);
		}
	}, [multiEntry, multi]);

	return (
		<div id="multi-yards" className="py-16 bg-trail-pink">
			<div className="container w-10/12 mx-auto">
				<img
					ref={multi}
					src={MultiImage}
					alt="mutli-yard"
					className={classnames(
						'mx-auto transition-all duration-500 relative',
						{ 'opacity-0 top-8': !multiYard },
						{ 'opacity-100 top-0': multiYard }
					)}
				/>
				<h2 className="mt-10 font-sans text-4xl italic font-extrabold text-center text-white mb-7 md:text-5xl">
					No yard? <br className="md:hidden" />
					Not a problem!
				</h2>
				<p className="w-full mx-auto text-2xl font-light leading-8 text-center text-white md:w-9/12 lg:w-7/12 md:text-3xl">
					If you are yardless and still wish to get involved, you can grab a
					free space to sell your gems at one of our{' '}
					<span className="font-bold ">Mutli-Yards</span>.
					<br />
					Get in contact with your nearest venue from below to get selling:
				</p>
				<div className="w-full mx-auto text-center md:w-9/12">
					<p className="mb-3 font-sans text-4xl italic font-extrabold text-center text-white mt-7">
						Crown and Sceptre
					</p>
					<a
						className="font-sans text-xl font-semibold text-center text-white md:text-3xl"
						href="mailto:roddathomas@yahoo.co.uk"
					>
						roddathomas@yahoo.co.uk
					</a>

					<p className="mb-3 font-sans text-4xl italic font-extrabold text-center text-white mt-7">
						Stroud Rugby Club
					</p>
					<a
						className="font-sans text-xl font-semibold text-center text-white md:text-3xl"
						href="mailto:Events@stroudrugby.co.uk"
					>
						Events@stroudrugby.co.uk
					</a>

					<p className="mb-3 font-sans text-4xl italic font-extrabold text-center text-white mt-7">
						Stroud Brewery
					</p>
					<a
						className="font-sans text-xl font-semibold text-center text-white md:text-3xl"
						href="mailto:richard@stroudbrewery.co.uk"
					>
						richard@stroudbrewery.co.uk
					</a>

					<p className="mb-3 font-sans text-4xl italic font-extrabold text-center text-white mt-7">
						Hawkwood College
					</p>
					<a
						className="font-sans text-xl font-semibold text-center text-white md:text-3xl"
						href="mailto:inhouse@hawkwoodcollege.co.uk"
					>
						inhouse@hawkwoodcollege.co.uk
					</a>
				</div>
			</div>
		</div>
	);
};

export default MultiYards;
