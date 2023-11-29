import React, { useEffect, useState } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";


const News = (props)=>{
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [totalResults, setTotalResults] = useState(0);
    
    const caps = (str)=> {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    const updateNews = async ()=> {
        props.progress(10);
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.api}&page=${page+1}&pageSize=${props.pageSize}`
        setPage(page+1);
        let data = await fetch(url);
        let parsedData = await data.json(data);
        setArticles(articles.concat(parsedData.articles));
        setLoading(false);
        setTotalResults(parsedData.totalResults);
        props.progress(100);
    }

    useEffect(() => {
        updateNews();
        document.title = `${caps(props.category)} - News Monkey`
    }, [])

    // handlePreviousClick = async ()=> {
    //     setState({page: page - 1})
    //     updateNews();
    //     // let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=ffc67dbe101b4958ac46228063c07144&page=${page - 1}&pageSize=${props.pageSize}`;
    //     // setState({loading: true});
    //     // let data = await fetch(url);
    //     // let parsedData = await data.json(data);
    //     // setState({
    //     //     page: page - 1,
    //     //     articles: parsedData.articles,
    //     //     loading: false
    //     // });
    // }

    // handleNextClick = async ()=> { 
    //     setState({page: page + 1})
    //     updateNews();
    // }

    const fetchMoreData = ()=> {
        updateNews();
    }

    return (
    <>
        <h2 className='text-center' style={{margin:'65px 0px 35px 0px'}}>NewsMonkey - Top {caps(props.category)} HeadLines</h2>
        {loading && <Spinner/>}
        <InfiniteScroll
            dataLength={articles.length}
            next={fetchMoreData}
            hasMore={articles.length !== totalResults}
            loader={<Spinner/>}>
            <div className="container">
                <div className="row">
                    {articles.map((element) => {
                        return <div className="col-md-4" key ={element.url}>
                            <NewsItem title={element.title ? element.title : " "} description={element.description ? element.description : " "} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
                        </div>
                    })}
                </div>
            </div>
        </InfiniteScroll>
        {/* <div className="container d-flex justify-content-between">
            <button type="button" disabled={page <= 1} className="btn btn-danger btn-m mx-4" onClick={handlePreviousClick}>&larr; Previous</button>
            <button type="button" disabled={page + 1 > (Math.ceil(totalResults/props.pageSize))} className="btn btn-success btn-m mx-4" onClick={handleNextClick}>Next &rarr;</button>
        </div> */}
    </>
    )

}

News.defaultProps = {
    pageSize: 6,
    category: "general",
    country: "in"
}

News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
}

export default News;