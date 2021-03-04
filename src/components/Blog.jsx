import React from 'react';
import getBlogs from '../services/fetchBlog';
import BlogPost from '../components/BlogPost';

class Blog extends React.Component {
    constructor(props){
        super(props);
        this.state = {blogPostsData: [], blogPosts: []}
    }

    async componentDidMount(){
        await getBlogs().then(
            (res) => {
                var data = res.data.items;
                this.setState({blogPostsData: [...data]}); 
            }
        )
        .catch(err=>{
            console.log(err);
        });
        var list = this.state.blogPostsData.map(
            function(blog,index){
                return <div className="col"><BlogPost key={index} blog={blog}></BlogPost></div>;
            });
            this.setState({blogPosts: [...list] });
    }

    render(){
        return (
            <div className="main">
                <div className="text-center">
                    <h1 className="display-2">Blog</h1>
                    <h2 className="display-5">Read and Mellow!</h2>
                </div>
                <div className="container">
                    <div className="row row-cols-1 row-cols-md-2 g-3">
                        {this.state.blogPosts}
                    </div>
                </div>
            </div>
        );
    }
}

export default Blog;