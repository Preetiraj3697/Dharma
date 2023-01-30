import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";

import "./style.scss";

import { fetchDataFromApi } from "../../utils/api";
import ContentWrapper from "../../components/contentWrapper/ContentWrapper";
// import MovieCard from "../../components/movieCard/MovieCard";
// import Spinner from "../../components/spinner/Spinner";
import noResults from "../../assets/no-results.png";
const SearchResult = () => {
  const [data,setData] = useState(null);
  const [pageNum, setPageNum] = useState(1);
  const [loading, setLoading] = useState(false);
  const {query} = useParams();

  const fetchInitailData = () => {
    setLoading(true);
    fetchDataFromApi(`/search/multi?query=${query}&page=${pageNum}`).them((res)=>{
      setData(res);
      setPageNum((prev)=> prev + 1)
      setLoading(false);
    })
  }
  useEffect(()=>{
    fetchInitailData();
  },[query])
  return (
    <div className="searchResultsPage">
      SearchResult
    </div>
  )
}

export default SearchResult
