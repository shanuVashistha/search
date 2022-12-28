import React from 'react';

import Logo from '../../assets/logo.svg';
import SearchBar from '../SearchBar/SearchBar';

function SearchHeader() {
    return (
        <header className="flex items-center content-center w-full px-6 py-2 border border-googray-light">
            <a href="/">
                <img src={Logo} style={{width: 80, height: 30}}/>
            </a>
            <SearchBar className="w-1/2"/>
        </header>
    );
}

export default SearchHeader;
