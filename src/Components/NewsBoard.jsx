import { useState } from "react"
import { useEffect } from "react"
import NewsItem from "./NewsItem"

const NewsBoard = ({category}) => {
    const [Article, setArticle] = useState([])
    useEffect(() => {
      const fetchNews = async () => {
        try {
          const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=93a50df0d6b442f2a7cedc321176c531`;
          const response = await fetch(url);
    
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
    
          const data = await response.json();
    
          if (data.articles) {
            setArticle(data.articles);
          } else {
            console.error("No articles found:", data);
            setArticle([]); // Set an empty array to avoid errors
          }
        } catch (error) {
          console.error("Failed to fetch news:", error);
          setArticle([]); // Prevents UI crashes if fetch fails
        }
      };
    
      fetchNews();
    }, [category]);
    
    

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
