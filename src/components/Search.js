import React from 'react';
import { NavLink } from 'react-router-dom';

const Search = () => {
    
    return (
        <div>
            <form action="api" method="GET">
                <label>아아디</label>
                <input name="id"/>
                <button type="submit">검색</button>
            </form>
        </div>
    );
}

export default Search;

