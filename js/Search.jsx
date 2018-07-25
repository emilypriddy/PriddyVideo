import React from 'react';
import ShowCard from './ShowCard';
import preload from '../data.json';

const Search = () => (
	<div className="search">
		<div>
			{preload.shows.map((show) => {
				return (
					<ShowCard {...show} key={show.imdbID} />
				)
			})}
		</div>
	</div>
)

export default Search;