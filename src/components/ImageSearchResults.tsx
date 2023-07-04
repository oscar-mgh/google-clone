import { ImageSearchResult } from '@/app/interfaces/ImageSearchResult';
import { Item } from '../app/interfaces/ImageSearchResult';
import Link from 'next/link';
import Parser from 'html-react-parser';

export default function ImageSearchResults({
	results,
}: {
	results: ImageSearchResult;
}) {
	return (
		<div className="pb-24 mt-4">
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-3 space-x-4">
				{results.items.map((result: Item) => (
					<div className="mb-8" key={result.link}>
						<div className="group">
							<Link href={result.image.contextLink}>
								<img
									src={result.link}
									alt={result.title}
									className="mx-auto h-52 group-hover:shadow-xl w-full object-contain transition-shadow rounded-xl bg-gray-100"
								/>
							</Link>
							<div className="mt-2">
								<Link href={result.image.contextLink}>
									<h2 className="hover:underline truncate text-sm">
										{result.displayLink}
									</h2>
								</Link>
								<Link href={result.image.contextLink}>
									<p className="text-gray-600 text-sm">
										{Parser(result.htmlTitle)}
									</p>
								</Link>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
