'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { AiOutlineSearch } from 'react-icons/ai';
import { BsFillMicFill } from 'react-icons/bs';

export default function HomeSearch() {
	const router = useRouter();
	const [input, setinput] = useState('');
	const [randomSearchLoading, setRandomSearchLoading] = useState(false);

	function handleSubmit(e: React.SyntheticEvent) {
		e.preventDefault();
		if (!input.trim()) return;
		router.push(`/search/web?searchTerm=${input}`);
	}

	async function randomSearch() {
		setRandomSearchLoading(true);
		const res = await fetch('https://random-word-api.herokuapp.com/word');
		const word = await res.json();
		if (!word) return;
		router.push(`/search/web?searchTerm=${word}`);
		setRandomSearchLoading(false);
	}

	return (
		<>
			<form
				className="flex w-full mt-5 mx-auto max-w-[90%] border border-gray-200 px-5 py-3 rounded-full hover:shadow-md focus-within:shadow-md transition-shadow sm:max-w-xl lg:max-w-2xl"
				onSubmit={handleSubmit}
			>
				<AiOutlineSearch className="text-xl text-gray-500 mr-3" />
				<input
					type="text"
					name=""
					className="flex-grow focus:outline-none"
					onChange={e => setinput(e.target.value)}
					value={input}
				/>
				<BsFillMicFill className="text-lg" />
			</form>

			<div className="flex flex-col space-y-2 sm:space-y-0 sm:space-x-4 justify-center sm:flex-row mt-8">
				<button type="submit" className="btn" onClick={handleSubmit}>
					Google Search
				</button>
				<button className="btn flex items-center justify-center disabled:opacity-80" onClick={randomSearch} disabled={randomSearchLoading}>
					{randomSearchLoading ? (
						<img src="loading.svg" alt="loading" className="h-6 text-center mx-auto" />
					) : (
						"I'm Feeling Lucky"
					)}
				</button>
			</div>
		</>
	);
}
