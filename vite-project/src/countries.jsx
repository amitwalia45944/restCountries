import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navigation from './Navigation';
import { useBlackTheme } from './Theme';

const CountriesApp = () => {
  const { AlterTheme, changeTheme } = useBlackTheme();

  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(null);
  const [isEmpty, setIsEmpty] = useState(false);
  const [countries, setCountries] = useState([]);
  const [region, setRegionFilter] = useState('');
  const [sortBy, setSortBy] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');
  const [subRegion, setSubRegionFilter] = useState('');
  const [searchValue, setSearch] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    setIsLoading(true);
    setIsError(null);

    const api = 'https://restcountries.com/v3.1/all';
    const apiUrl = api;

    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');

        }

        return response.json();
      })
      .then((data) => {
        setIsLoading(false);

        if (data.length > 0) {
          setCountries(data);
        } else {
          setIsEmpty(true);
        }
      })
      .catch((error) => {
        setIsLoading(false);
        setIsError(error.message);
      });

  }, []);

  function Search() {

    let searchResult = countries.filter((country) => {

      const found1 = country.name.common.toLowerCase().includes(searchValue.toLowerCase());
      const found2 = region === '' || country.region.toLowerCase() === region.toLowerCase();
      const found3 = subRegion === '' || country.subregion?.toLowerCase() === subRegion.toLowerCase();

      return found1 && found2 && found3;
    })
      .slice();

    if (sortBy === 'population') {
      searchResult.sort((first, second) => {
        if (sortOrder === 'asc') {
          return first.population - second.population;
        } else {
          return second.population - first.population;
        }
      });
    } else if (sortBy === 'area') {
      searchResult.sort((first, second) => {
        if (sortOrder === 'asc') {
          return first.area - second.area;
        } else {
          return second.area - first.area;
        }
      });
    }

    return searchResult;
  };

  const regions = [...new Set(countries.map((country) => {
    return country.region;
  }))];

  const subRegions = [...new Set(countries.map((country) => {
    return country.subregion;
  }))]

  return (
    <div className="App">
      <Navigation />

      <main className="App-main">
        {
          isLoading ? (<div>Loading....</div>
          ) : isError ? (<div>Error: {isError}</div>
          ) : isEmpty ? (
            <div>Empty</div>
          ) : (

            <div className="card-container">

              <header className="App-header">

                <div className="countries-app">

                  <input
                    type="text"
                    placeholder="search country"
                    value={searchValue}
                    onChange={(event) => setSearch(event.target.value)}
                  />

                  <div className="search-icon">
                    <i className="fas fa-search"></i>
                  </div>

                  <select
                    className={AlterTheme ? 'dark-theme' : 'light-theme'}
                    value={sortBy}
                    onChange={(event) => setSortBy(event.target.value)}
                  >
                    <option value="">Sort by</option>
                    <option value="population">Population</option>
                    <option value="area">Area</option>
                  </select>

                  <select
                    className={AlterTheme ? 'dark-theme' : 'light-theme'}
                    value={sortOrder}
                    onChange={(event) => setSortOrder(event.target.value)}
                  >
                    <option value="asc">Ascending</option>
                    <option value="desc">Descending</option>
                  </select>

                  <select
                    className={AlterTheme ? 'dark-theme' : 'light-theme'}
                    value={subRegion}
                    onChange={(event) => setSubRegionFilter(event.target.value)}
                  >
                    <option value="">Filter by Sub-Region</option>

                    {subRegions.map((subRegion, index) => (
                      <option key={index} value={subRegion}>
                        {subRegion}
                      </option>
                    ))}

                  </select>

                  <select
                    className={AlterTheme ? 'dark-theme' : 'light-theme'}
                    value={region}
                    onChange={(event) => setRegionFilter(event.target.value)}
                  >
                    <option value="">Filter by Region</option>

                    {regions.map((region, index) => (
                      <option key={index} value={region}>
                        {region}
                      </option>
                    ))}

                  </select>

                </div>

              </header>

              <div className="app-header-main-content">

                {Search().length > 0 ?

                  (Search().map((country, index) => (

                    <div className="card-container-country" key={index} onClick={() => (navigate(`/country/${country.name.common}`))} >

                      <img src={country.flags.png} alt={country.name.common.toLowerCase()} />

                      <div className={`country-detail-part ${AlterTheme ? 'dark-theme' : 'light-theme'}`}>
                        <h4 className='country-name'>{country.name.common}</h4>
                        <div className="country-desc">
                          <h5>Population: {country.population}</h5>
                          <h5>Region: {country.region}</h5>
                          <h5>Sub-Region: {country.subregion}</h5>
                          <h5>Capital: {country.capital}</h5>
                        </div>
                      </div>
                    </div>

                  )))

                  : (<div>No result</div>)
                }
              </div>
            </div>
          )

        }

      </main>

    </div>


  );
};

export default CountriesApp;
