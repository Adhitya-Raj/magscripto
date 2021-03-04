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
        <div className="card">
            <img src={props.blog.thumbnail} alt={props.blog.title} className="card-img-top"/>
            <div className="card-body">
                <h5 className="card-title">{props.blog.title}</h5>
                <p className="card-text">{shortenText(toText(props.blog.content),0,250)+ '...'} <a href={props.blog.link}>read more</a></p>
            </div>
        </div>
    );
}

export default BlogPost;