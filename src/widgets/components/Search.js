import React from 'react';
import './Search.css';

const Search = (props) =>  (
  <form
    className="Search"
    onSubmit={props.handleSubmit}
  >
    <input type="text"
     placeholder="Buscar algo"
     className="Search-input"
     name="search"
     onChange={props.handleChange}
     value={props.value}
    />
  </form>
)

export default Search