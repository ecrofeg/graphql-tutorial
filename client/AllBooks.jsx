import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import * as GetAllBooks from './GetAllBooks.graphql';

export default ({ onSelect }) => {
	const { data, loading } = useQuery(GetAllBooks);

	return (
		<div>
			<h1>All books</h1>

			{loading && <div>Loading...</div>}

			{!loading && data.getAllBooks && (
				<ul>
					{data.getAllBooks.map(book => (
						<li key={book.title}>
							{book.id}: {book.title} ({book.author.firstName} {book.author.lastName}){' '}
							<button onClick={() => onSelect(book)}>select</button>
						</li>
					))}
				</ul>
			)}
		</div>
	);
};
