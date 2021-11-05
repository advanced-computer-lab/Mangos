import '../../App.css';


const SearchBar = () => (
    <form className="visually-hidden" action="/" method="get">
        
        <input
            type="text"
            id="header-search"
            placeholder="search through all flights"
            name="s" 
        />
        
        <button type="submit">Search</button>
    </form>
);


export default SearchBar;