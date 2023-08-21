import React, { useState, useEffect } from 'react';
import { Divide as Hamburger } from 'hamburger-react';
import classnames from 'classnames';
import { Link } from 'react-router-dom';
import useWindowDimensions from '../hooks/useWindowDimensions';

const Navigation = () => {
	const [isOpen, setOpen] = useState(false);
	const [hamCol, setHamCol] = useState('#36383F');
	const { height, width } = useWindowDimensions();
	useEffect(() => {
		if (isOpen) {
			setHamCol('#eb0089');
		} else {
			if (width >= 768) {
				setHamCol('#FFFFFF');
			} else {
				setHamCol('#ffffff');
			}
		}
	}, [isOpen, hamCol]);

	function closeMenu() {
		if (isOpen) {
			setOpen(false);
		}
	}

	return (
		<>
			<div className="fixed top-0 left-0 z-40 flex justify-end w-full pt-1 pr-2">
				<Hamburger
					direction="right"
					className="z-40"
					color={hamCol}
					toggled={isOpen}
					toggle={setOpen}
				/>
			</div>
			<div
				className={classnames(
					'fixed bg-white flex flex-col justify-center items-center z-30 h-screen w-full md:w-1/3 transition-all duration-300 ease-out',
					{ 'left-full': !isOpen },
					{ 'left-0 md:left-2/3': isOpen }
				)}
			>
				<a
					className="mb-4 text-2xl text-trail-slate hover:text-trail-pink"
					onClick={closeMenu}
					href="#map"
				>
					MAP
				</a>
				<a
					className="mb-4 text-2xl text-trail-slate hover:text-trail-pink"
					onClick={closeMenu}
					href="#multi-yards"
				>
					MULTI YARDS
				</a>
				<a
					className="mb-4 text-2xl text-trail-slate hover:text-trail-pink"
					onClick={closeMenu}
					href="#posters"
				>
					POSTERS
				</a>
				<a
					className="mb-5 text-2xl text-trail-slate hover:text-trail-pink"
					onClick={closeMenu}
					href="#contact"
				>
					CONTACT
				</a>
				{/* <Link
					target="_blank"
					className="relative bottom-0 flex items-center justify-center px-5 py-3 text-2xl italic font-normal transition-all ease-out rounded-full hover:drop-shadow-lg hover:bottom-1 hover:font-semibold w-52 bg-trail-yellow text-trail-slate"
					to="https://docs.google.com/forms/d/e/1FAIpQLSc8KOCnmuvlayBKLgsF49soBhuVQDZZpXWhs2r7Ey8B6KkSYw/viewform"
				>
					Sign Up!
				</Link> */}
			</div>
		</>
	);
};

export default Navigation;
