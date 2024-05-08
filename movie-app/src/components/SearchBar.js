import React from 'react';

const SearchBar = (props) => {
    return (
        <div className='search-bar search-bar-sm-4'>
            
                <input className="form-control" placeholder="Search...." onChange={props.onChange} />
                <button type="submit">🔍</button>
            
        </div>
    )
}

export default SearchBar;