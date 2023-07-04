import { Item } from '@/app/interfaces/SearchResult';

async function search(term: string) {
	const res = await fetch(
		`https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CTX_KEY}&q=${term}`
	);
	const { items } = await res.json();
	console.log(items);
	return items;
}

export default async function WebSearchPage({
	searchParams,
}: {
	searchParams: { searchTerm: string };
}) {
	const results = await search(searchParams.searchTerm);
	return (
		<>{results && results.map((result: Item) => <h1>{result.title}</h1>)}</>
	);
}
