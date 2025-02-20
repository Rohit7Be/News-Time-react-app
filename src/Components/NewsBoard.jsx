import { useState } from "react"
import { useEffect } from "react"
import NewsItem from "./NewsItem"

const NewsBoard = ({category}) => {
    const [Article, setArticle] = useState([])
    useEffect(() => {
      let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=93a50df0d6b442f2a7cedc321176c531`
      fetch(url).then(response=> response.json()).then(data=>setArticle(data.articles));
    },[category])
    

  return (
    <div>
      <h2 className="text-center bg-danger text-light">Latest <span>Headlines</span></h2>
      {Article.map((news,index)=>{
        return <NewsItem key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url}/>
      })}
    </div>
  )
}

export default NewsBoard
