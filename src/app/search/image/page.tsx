import { ImageSearchResult } from '@/app/interfaces/ImageSearchResult';
import ImageSearchResults from '@/components/ImageSearchResults';
import Link from 'next/link';

async function search(term: string, index: string): Promise<ImageSearchResult> {
	const res = await fetch(
		`https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${
			process.env.CTX_KEY
		}&q=${term}&searchType=image&start=${index || 1}`
	);
	if (!res.ok) {
		throw new Error('Something went wrong');
	}
	const data = await res.json();
	return data;
}

export default async function ImageSearchPage({
	searchParams,
}: {
	searchParams: { searchTerm: string; start: string };
}) {
	const startIndex = searchParams.start;
	const results = await search(searchParams.searchTerm, startIndex);

	if (!results) {
		return (
			<div className="flex flex-col justify-center items-center pt-10">
				<h1 className="text-3xl mb-4">No results found</h1>
				<p className="text-lg">
					Try searching for something else or go back to the{' '}
					<Link href="/" className="text-blue-500 text-center">
						Homepage.
					</Link>
				</p>
			</div>
		);
	}

	return <>{results && <ImageSearchResults results={results} />}</>;
}
