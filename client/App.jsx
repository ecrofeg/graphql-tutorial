import React, { useState } from 'react';
import AllBooks from './AllBooks';
import Book from './Book';

export default () => {
	const [selectedBookId, setSelectedBookId] = useState();

	return (
		<div>
			<div>
				<AllBooks onSelect={book => setSelectedBookId(book.id)} />
			</div>

			{selectedBookId && (
				<div>
					<Book id={selectedBookId} />
				</div>
			)}
		</div>
	);
};
