'use client';
import { useEffect, useState } from 'react';

export default function CountryLookup() {
	const [country, setCountry] = useState('');
	const getCountry = async () => {
		const res = await fetch(
			`https://extreme-ip-lookup.com/json/?key=${process.env.NEXT_PUBLIC_IP_API_KEY}`
		);
		const data = await res.json();
		setCountry(data.country);
	};
	useEffect(() => {
		getCountry();
	}, []);

	return <div>{country}</div>;
}
