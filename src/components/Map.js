import React, { useState, useCallback } from 'react';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

const APIKEY = 'AIzaSyCz7nmxDCdWIDzfHaWrcmzHb9ePBgDJTDo';

const Map = () => {
	return (
		<div
			id="map"
			className="bg-[url(./images/map.png)] relative bg-cover bg-center w-full h-screen flex items-center justify-center"
		>
			<div className="absolute top-0 left-0 w-full h-screen bg-white opacity-50 "></div>
			<div id="map"></div>
		</div>
	);
};

export default Map;
