import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import * as GetBook from './GetBook.graphql';

export default ({ id }) => {
	const { data, loading } = useQuery(GetBook, {
		variables: {
			id: id
		}
	});

	const book = data ? data.getBook : null;

	return book ? (
		<div>
			<h1>{book.title}</h1>
		</div>
	) : (
		<div>Loading...</div>
	);
};
