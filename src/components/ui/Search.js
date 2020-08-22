import React, { useState } from 'react';

const Search = ({ getQuery }) => {
    const [text, setText] = useState('');
    const onChangeHandler = (q) => {
        setText(q);
        getQuery(q);
    }

    return (
        <section className = "search">
            <form>
                <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Search ..."
                    autoFocus 
                    value={text}
                    onChange={(e) => onChangeHandler(e.target.value)}
                />
            </form>
        </section>
    )
}

export default Search
