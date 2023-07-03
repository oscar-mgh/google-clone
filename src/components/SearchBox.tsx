'use client';

import { SyntheticEvent, useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { RxCross2 } from 'react-icons/rx';
import { BsFillMicFill } from 'react-icons/bs';
import { AiOutlineSearch } from 'react-icons/ai';

export default function SearchBox() {
	const router = useRouter();
	const searchParams = useSearchParams();
	const searchTerm = searchParams.get('searchTerm');
	const [term, setTerm] = useState(searchTerm || '');

	function handleSubmit(e: SyntheticEvent) {
		e.preventDefault();
        if (!term) return;
		router.push(`/search/web?searchTerm=${term}`);
	}

	return (
		<form
			className="flex border border-gray-200 rounded-full shadow-md px-6 py-3 ml-10 mr-5 flex-grow max-w-3xl max-h-12 items-center"
			onSubmit={handleSubmit}
		>
			<input
				type="text"
				name=""
				className="w-full focus:outline-none"
				value={term}
				onChange={e => setTerm(e.target.value)}
			/>
			<RxCross2
				className="text-2xl text-gray-400 cursor-pointer sm:mr-2"
				onChange={() => setTerm('')}
			/>
			<BsFillMicFill className="hidden sm:inline-flex text-4xl text-blue-500 pl-4 border-l-2 border-gray-200 mr-4 cursor-pointer" />
			<AiOutlineSearch className="text-2xl hidden sm:inline-flex text-blue-500 cursor-pointer" onClick={handleSubmit} />
            <button type='submit' className='hidden'>submit</button>
		</form>
	);
}
