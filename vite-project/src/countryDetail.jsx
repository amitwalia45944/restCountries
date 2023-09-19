import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from './header';

function CountryDetail() {
    const { name } = useParams();
    const [found, setCountryData] = useState(null);
    const [theme, setTheme] = useState(false);

    const navigate = useNavigate();

    const changeTheme = () => {
        setTheme(!theme);
    };

    useEffect(() => {
        const apiUrl = `https://restcountries.com/v3.1/name/${name}`;

        fetch(apiUrl)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((data) => {
                if (data.length > 0) {
                    setCountryData(data[0]);
                }
            })
            .catch((error) => {
                console.log(error);
            });
    }, [name]);

    if (!found) {
        return null;
    }

    return (
        <>
            <div className={`App ${theme ? 'dark-theme' : 'light-theme'}`}>

                <Header theme={theme} changeTheme={changeTheme} />

                <div className="header-content">
                    <div className="search-part">
                        <button onClick={() => navigate(-1)}>Back</button>
                    </div>

                    <div className="country-details ">
                        <div className="country-details ">

                            <div className="country-details-header">
                                <img src={found.flags.png} alt={found.name.common} />
                            </div>

                            <div className="country-detail-information">

                                <div className="top">
                                    <h2>{found.name.common}</h2>
                                </div>

                                <div className="middle">
                                    <div className="middle-left">
                                        <p><span>Native Name:</span> {found.name.common}</p>
                                        <p><span>Population:</span> {found.population}</p>
                                        <p><span>Region:</span> {found.region}</p>
                                        <p><span>Sub-Region:</span> {found.subregion}</p>
                                        <p><span>Capital:</span> {found.capital}</p>

                                    </div>

                                    <div className="middle-right">
                                        <p><span>Currencies:</span>  {Object.values(found.currencies)[0].name}</p>
                                        <p><span>Top Level Domain:</span> {found.tld}</p>
                                        <p><span>Languages:</span> {Object.values(found.languages).join(', ')}</p>
                                    </div>
                                </div>

                                <div className="bottom">
                                    <p><span>Bordering Countries:</span> {found.borders ? found.borders.join(', ') : 'No border countries'}</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}

export default CountryDetail;
