import React, { useState, useCallback, useMemo } from 'react';
import {
	GoogleMap,
	InfoWindow,
	Marker,
	useLoadScript,
} from '@react-google-maps/api';

import yards from '../data/yards.json';

const APIKEY = 'AIzaSyCz7nmxDCdWIDzfHaWrcmzHb9ePBgDJTDo';

const Map = () => {
	const { isLoaded } = useLoadScript({
		googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY || APIKEY,
	});
	const center = useMemo(() => ({ lat: 51.739767, lng: -2.2188902 }), []);
	const [mapRef, setMapRef] = useState();
	const [isOpen, setIsOpen] = useState(false);
	const [infoWindowData, setInfoWindowData] = useState();
	const markers = yards;

	const onMapLoad = (map) => {
		setMapRef(map);
		const bounds = new google.maps.LatLngBounds();
		markers.yards?.forEach(({ lat, lng }) => bounds.extend({ lat, lng }));
		map.fitBounds(bounds);
	};

	const handleMarkerClick = (id, lat, lng, address) => {
		mapRef?.panTo({ lat, lng });
		setInfoWindowData({ id, address });
		setIsOpen(true);
	};

	return (
		<div
			id="map"
			className="bg-[url(./images/map.png)] relative bg-cover bg-center w-full h-screen flex items-center justify-center"
		>
			{/* <div className="absolute top-0 left-0 w-full h-screen bg-white opacity-50 "></div> */}
			{!isLoaded ? (
				<h1>Loading...</h1>
			) : (
				<GoogleMap
					mapContainerClassName="map-container"
					onLoad={onMapLoad}
					onClick={() => setIsOpen(false)}
				>
					{markers.yards.map(({ address, lat, lng }, ind) => (
						<Marker
							key={ind}
							position={{ lat, lng }}
							onClick={() => {
								handleMarkerClick(ind, lat, lng, address);
							}}
							icon={'http://maps.google.com/mapfiles/ms/icons/pink-dot.png'}
						>
							{isOpen && infoWindowData?.id === ind && (
								<InfoWindow
									onCloseClick={() => {
										setIsOpen(false);
									}}
								>
									<h3>{infoWindowData.address}</h3>
								</InfoWindow>
							)}
						</Marker>
					))}
				</GoogleMap>
			)}
		</div>
	);
};

export default Map;
