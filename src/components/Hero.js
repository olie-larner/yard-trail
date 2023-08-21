import React from 'react';
import { ReactSVG } from 'react-svg';
import classnames from 'classnames';
import { Link } from 'react-router-dom';

const Hero = (trigger) => {
	return (
		<div className="relative flex flex-col w-full bg-trail-pink md:h-screen lg:flex-row">
			<div className="w-full lg:w-1/2 h-96 md:h-2/3 lg:h-screen flex justify-center flex-col bg-no-repeat bg-cover bg-bottom bg-[url(./images/past-trails/past-nine.jpg)]">
				<div
					className={classnames(
						'w-full lg:w-[50%] absolute top-0 bottom-0 left-0 transition-all duration-500 delay-[2.0s]',
						{ 'opacity-0': trigger.trigger },
						{ 'opacity-100': !trigger.trigger }
					)}
				>
					<ReactSVG
						src="./logos/black-logo.svg"
						className={classnames(
							'transition-all relative duration-1000 delay-[2.0s] w-full fill-stone-200',
							{ ' top-[150px]': trigger.trigger },
							{ 'top-[100px]': !trigger.trigger }
						)}
					/>
				</div>
			</div>
			<div className="flex flex-col justify-center w-full h-auto px-8 py-10 lg:w-1/2 md:h-1/3 lg:h-screen lg:pl-11">
				<h2 className="font-sans text-5xl italic font-extrabold text-white">
					Monday <br className="md:hidden lg:block" />
					28th August 2023
				</h2>
				<p className="text-3xl italic font-light leading-8 text-white md:leading-9 pt-7">
					Stroud’s town-wide yard sale event <br />
					Sell from your doorstep
					<br />
					Keep stuff out of landfill
					<br />
					Build your community.
					<br />
				</p>

				{/* <Link
					target="_blank"
					className="relative bottom-0 flex items-center justify-center px-5 py-3 text-2xl italic font-normal transition-all ease-out rounded-full mt-7 hover:drop-shadow-lg hover:bottom-1 hover:font-semibold w-52 bg-trail-yellow text-trail-slate"
					to="https://docs.google.com/forms/d/e/1FAIpQLSc8KOCnmuvlayBKLgsF49soBhuVQDZZpXWhs2r7Ey8B6KkSYw/viewform"
				>
					Sign Up!
				</Link> */}
			</div>
		</div>
	);
};

export default Hero;
