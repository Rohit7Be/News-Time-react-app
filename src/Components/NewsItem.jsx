import image from '../assets/news.jpg'

const NewsItem = ({title,description,url,src}) => {
    return (
        <div className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-3 py-3" style={{maxWidth:"340px"}}>
            <img src={src?src:image} style={{height:"200px", width:"300px",}} alt="No Image Found..." className="card-img-top"/>
                <div className="card-body">
                    <h5 className="card-title">{title.slice(0,50)}</h5>
                    <p className="card-text">{description?description.slice(0,90):"No description about this news..."}</p>
                    <a href={url} className="btn btn-primary">Read more</a>
                </div>
        </div>
    )
}

export default NewsItem
