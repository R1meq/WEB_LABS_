import React, {useState, useEffect } from "react";
import Filter from "../components/Filter";
import Article from "../components/Article";
import { getAllShoesRequset,getFetchData } from "../components/api";
import Loader from "../components/Loader";

function Catalog() {
    const [allShoes,setAllShoes] = useState([]);
    const [title, setSearchTerm] = useState('');
    const [color, setColor] = useState('color');
    const [type, setType] = useState('type');
    const [fetchedShoes,setFetchShoes] = useState([]);
    const [isLoading,setIsLoading] = useState(false)
    
  useEffect(() => {
      setIsLoading(true)
      getFetchData()
      .then(resp => {
        setTimeout(() => {
          setFetchShoes(resp);
          setAllShoes(resp);
          setIsLoading(false);
        }, 1000);
      })
  }, []);

  const cancelHandler = () => {
      setColor("Color");
      setType("Type");
      setSearchTerm("")
      getAllShoesRequset()
          .then(resp => {
              setFetchShoes(resp)
      })
  }

    function handleSearchChange(event) {
        setSearchTerm(event.target.value);
    }

  
    function filterCardFetched() {
      getFetchData(color, type, title)
        .then(data => setFetchShoes(data))
        .catch(error => console.error(error));
    }

    function searchFetch(event) {
      event.preventDefault();
      getFetchData(color, type, title)
        .then(data => setFetchShoes(data))
        .catch(error => console.log(error)); 
    }

    const createArticles = (item) => (
      <Article
        key={item.key}
        id={item.id}
        imgUrl={item.img_url}
        title={item.title}
        description={item.description}
        type={item.type}
        color={item.color}
        size={item.size}
        price={item.price}
        pagesId={allShoes}
      />
    );
  
    return (
        <>  
            <form className="SearchWrapper">
              <button onClick={searchFetch} className="searchButton">
                <img src="https://cdn1.iconfinder.com/data/icons/material-design-icons-light/24/magnify-64.png"/>
              </button>
              <input type="text" className="SearchBox" placeholder="Search..." onChange={handleSearchChange} value={title}/>
            </form>
            <div className="catalog">
                <Filter
                color={color}
                type={type}
                setColor={setColor}
                setType={setType}
                cancelHandler={cancelHandler}
                filterCard={filterCardFetched}
                />
                <main className="articleCard" style={fetchedShoes.length === 0 ? { display: 'flex', justifyContent: 'center' } : {}}>
                {isLoading ? <Loader /> : ""}
                  {fetchedShoes.map(createArticles)}
                  {!isLoading && fetchedShoes.length === 0 &&
                  <div className="title_empty">Such products don't exist</div> 
                  }
                </main>
            </div>
        </>
    );
  }

export default Catalog