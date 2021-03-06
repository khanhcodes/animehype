import Header from './components/Header';
import { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';

function App() {

	const [animeList, setAnimeList] = useState([]);
	const [topAnime, setTopAnime] = useState([]);
	const [search, setSearch] = useState("");

	const getTopAnime = async () => {
		const temp = await fetch(`https://api.jikan.moe/v3/top/anime/1/bypopularity`)
			.then(response => response.json());
		
		setTopAnime(temp.top.slice(0,5));
	}

	useEffect(() => {
		getTopAnime();

		
	}, [])
	
	const handleSearch = e => {
		e.preventDefault();

		fetchAnime(search);
	}

	const fetchAnime = async (query) => {
		const temp = await fetch(`https://api.jikan.moe/v3/search/anime?q=${query}&order_by=title&sort=asc&limit=10`)
			.then(res => res.json());
		
		setAnimeList(temp.results);

	}

	return (
    	<div className="App">
			<Header/>	
			<div className="content-wrap">
				<Sidebar
					topAnime={topAnime} 
				/>
				<MainContent 
					handleSearch={handleSearch}
					search={search}
					setSearch={setSearch}
					animeList={animeList} 
				/>
			</div>
    	</div>
	
  	);
}

export default App;
