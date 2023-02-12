import React, { useState, useEffect } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import Navbar from "./Navbar";
import LoadingBar from "react-top-loading-bar";
import Modal from "./Model";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {

    alert(process.env.REACT_APP_USER_NAME)
  }, []);


  async function fetchData() {
    setProgress(40);
    const response = await fetch(
      `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${process.env.REACT_APP_NEWS_API_KEY}&pageSize=${props.pageSize}&page=${page}`
    );
    let jsonData = await response.json();
    setProgress(70);
    setPage(page);
    setArticles(jsonData?.articles)
    setTotalResults(jsonData?.totalResults);
    setProgress(100);
  }


  function fetchMoreData() {
    if (page + 1 > !Math.ceil(totalResults / props.pageSize)) {
      async function fetchData() {
        const response = await fetch(
          `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${process.env.REACT_APP_NEWS_API_KEY}&pageSize=${props.pageSize}&page=${page+1}`
        );
        let jsonData = await response.json();
        setPage(page+1);
        setArticles(articles.concat(jsonData?.articles));
      }
      fetchData();
    }
  }

  return (
    <>
      <Navbar />
      <LoadingBar
        color="#f11946"
        progress={progress}
        height={3}
        //onLoaderFinished={() => this.setState({progress:100})}
      />
      <div style={{marginTop:'70px'}}>
        <h3 className="text-center my-3">
          Udeesha Bag Nursery - Plants Headlines
        </h3>
        {/* <InfiniteScroll
          dataLength={articles.length}
          next={() => fetchMoreData()}
          hasMore={true}
          loader={<Spinner />}
        >
          <div className="container">
            <div className="row">
              {articles &&
                articles.map((value, index) => {
                  return (
                    <div className="col-md-4 my-3" key={index}>
                      <NewsItem
                        title={value.title && value.title.slice(0, 80)}
                        description={
                          value.description && value.description.slice(0, 150)
                        }
                        newsUrl={value.url}
                        imageUrl={value.urlToImage}
                        publishedAt={value.publishedAt}
                        Auther={value.author}
                        source={value?.source?.name}
                      />
                    </div>
                  );
                })}
            </div>
          </div>
        </InfiniteScroll> */}
      </div>
    </>
  );
};

export default News;

News.defaultProps = {
  pageSize: 9,
  country: "in",
  category: "general",
};
News.propsTypes = {
  pageSize: PropTypes.number,
  country: PropTypes.string,
  category: PropTypes.string,
};
