import { Item, SearchResult } from '@/app/interfaces/SearchResult';
import WebSearchResults from '@/components/WebSearchResults';
import Link from 'next/link';

async function search(term: string): Promise<SearchResult> {
	const res = await fetch(
		`https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CTX_KEY}&q=${term}`
	);
	if (!res.ok) {
		throw new Error('Something went wrong');
	}
	const data = await res.json();
	return data;
}

export default async function WebSearchPage({
	searchParams,
}: {
	searchParams: { searchTerm: string };
}) {
	const results = await search(searchParams.searchTerm);

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

	return <>{results && <WebSearchResults results={results} />}</>;
}
