import React from 'react';

const Footer = () => {
	return (
		<div className="py-12  bg-slate-800">
			<div className="flex flex-col w-10/12 mx-auto text-white md:flex-row">
				<div className="w-full md:w-1/2">&copy; Stroud Yard Trail 2024</div>
				<div className="w-full pt-3 md:pt-0 md:text-right md:w-1/2">
					Site by{' '}
					<a className="font-semibold " href="https://olielarner.com">
						Olie Larner
					</a>
				</div>
			</div>
		</div>
	);
};

export default Footer;
