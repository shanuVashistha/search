import React, {useContext} from 'react';

import {AppContext} from '../contexts/AppContext/AppContext';

import Logo from '../assets/logo.svg';
import SearchBar from '../components/SearchBar/SearchBar';
import Button from '../components/Button/Button';

function Home() {
    const {searchTerm, gooptSearch} = useContext(AppContext);

    return (
        <div className="flex flex-col w-full h-screen">
            <div className="flex flex-col items-center justify-center w-full h-full space-y-7">
                <img src={Logo} style={{width: 120}}/>

                <SearchBar
                    className="w-5/12 h-12"
                    autoFocus={true}
                />

                <div className="space-x-3">
                    <Button
                        onClick={() => gooptSearch(searchTerm)}
                        className="w-max"
                    >
                        Search
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default Home;
