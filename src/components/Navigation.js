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
				setHamCol('#eb0089');
			} else {
				setHamCol('#eb0089');
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
					'fixed bg-white flex flex-col justify-center items-center text-center z-30 h-screen w-full md:w-1/3 transition-all duration-300 ease-out',
					{ 'left-full': !isOpen },
					{ 'left-0 md:left-2/3': isOpen }
				)}
			>
				{/* <a
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
          href="#super-yard"
        >
          SUPER YARD
        </a>
        <a
          className="mb-4 text-2xl text-trail-slate hover:text-trail-pink"
          onClick={closeMenu}
          href="#posters"
        >
          POSTERS
        </a> */}

				<a
					className="mb-5 text-2xl text-trail-slate hover:text-trail-pink"
					onClick={closeMenu}
					href="#spring-yard-trail"
				>
					WHITESHILL & RUSCOMBE TRAIL 2024
				</a>
				<a
					className="mb-5 text-2xl text-trail-slate hover:text-trail-pink"
					onClick={closeMenu}
					href="#contact"
				>
					CONTACT
				</a>
				{/* <a 
					target="_blank"
					className="relative bottom-0 flex items-center justify-center px-5 py-3 text-2xl italic font-normal transition-all ease-out rounded-full hover:drop-shadow-lg hover:bottom-1 hover:font-semibold w-52 bg-trail-yellow text-trail-slate"
					to="https://docs.google.com/forms/d/e/1FAIpQLSfw43ZAnv_XOhtauK6Vj4_7IpvQxQ7kHYsBkJIz1SD5oVoRDw/viewform?vc=0&c=0&w=1&flr=0&pli=1"
				>
					Sign Up!
				</a> */}

				<a
					className="relative bottom-0 flex items-center self-center justify-center px-5 py-3 mb-5 text-2xl italic font-bold transition-all ease-out rounded-full mt-7 hover:drop-shadow-lg hover:bottom-1 hover:font-semibold w-52 bg-trail-pink text-trail-slate"
					href="../maps/Whiteshill-Ruscome-Yard-Trail-2024.pdf"
					target="_blank"
				>
					Download Map
				</a>
				<a
					className="relative bottom-0 flex items-center self-center justify-center px-5 py-3 text-2xl italic font-bold transition-all ease-out rounded-full bg-trail-yellow mb-9 mt-7 hover:drop-shadow-lg hover:bottom-1 hover:font-semibold w-52 text-trail-pink"
					href="../maps/Whiteshill-Ruscome-Yard-Trail-2024-List.pdf"
					target="_blank"
				>
					Download Yard&nbsp;List
				</a>
			</div>
		</>
	);
};

export default Navigation;
