import { useState } from 'react';
import { useQuery } from 'react-query';
import { fetchGames } from '@/services/games';
import { fetchCategories } from '@/services/categories';

import Categories from '@/components/Categories';
import GamesList from '@/components/GamesList';
import Header from '@/components/Header';

const GamesView = () => {
  const queryConfig = {
    /* We define how long a query is considered fresh. As long as it's fresh, data will come from the cache. */
    staleTime: 1000 * 60 * 60 * 8,
    refetchOnWindowFocus: false,
  };

  const { isLoading, error, data: games } = useQuery('games', fetchGames, queryConfig);
  const { data: categories } = useQuery('categories', fetchCategories, queryConfig);

  const [category, setCategory] = useState(0);
  const [search, setSearch] = useState('');

  const filterBySearchAndCategory = () =>
    games?.filter(
      ({ categoryIds, name, description }) =>
        categoryIds.includes(category) &&
        (search === '' ||
          name.toLowerCase().includes(search.toLowerCase()) ||
          description.toLowerCase().includes(search.toLowerCase())),
    );

  const filteredGames = filterBySearchAndCategory();

  const handleOnChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <>
      <Header handleOnChange={handleOnChange} value={search} />
      <main className="ui grid">
        <article className="twelve wide column">
          <GamesList filteredGames={filteredGames} isLoading={isLoading} error={error} />
        </article>
        <Categories categories={categories} selected={category} setCategory={setCategory} />
      </main>
    </>
  );
};

export default GamesView;
