import './blog.css';

function toText(node) {
    let tag = document.createElement("div");
    tag.innerHTML = node;
    node = tag.innerText;
    return node;
  }

function shortenText(text, startingPoint, maxLength) {
return text.length > maxLength
    ? text.slice(startingPoint, maxLength)
    : text;
}

function BlogPost(props) {
    return(
        <div className="card blog">
            <img src={props.blog.thumbnail} alt={props.blog.title} className="card-img-top"/>
            <div className="card-body">
                <h5 className="card-title h4 mb-2"><strong>{props.blog.title}</strong></h5>
                <p className="card-text">{shortenText(toText(props.blog.content),0,250)+ '...'}<br/><a href={props.blog.link} target="_blank" rel="noreferrer noopener">read more</a></p>
            </div>
        </div>
    );
}

export default BlogPost;