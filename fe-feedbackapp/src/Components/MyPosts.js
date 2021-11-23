import React, {useState, useEffect} from 'react';
import { ListGroup } from 'react-bootstrap';
import  "./css/ViewPosts.scss";
import axios from "axios";
import { Link } from 'react-router-dom';


function MyPosts({openSelectedPost}){

    const [myPosts, setMyPosts] = useState([]);
    const [apiNotLoaded, setApiNotLoaded] = useState(false);    

    useEffect(() => {
        // todo: get the logged user
        let idOP = 1;
        getMyPosts(idOP);
    }, []);

    async function getMyPosts(idOP) {
        // get my posts with GET request from the API
        try{
            const response = await axios.get('http://localhost:8080/post', { params: { idOP: idOP } });
            setMyPosts(response.data);
        }
        catch(e){
            console.log(e);
            setApiNotLoaded(true);
        }
        
    }


    const selectPost = (post) => {
        openSelectedPost(post);
    }

    return(
        <>
            <ListGroup>
                {myPosts.length > 0 ? (
                    myPosts.map((post) => (
                        <Link to={{ 
                            pathname: "/post", 
                            state: post.postId 
                           }}
                           className="text-decoration-none">
                        <ListGroup.Item className="activePost" key={post} onClick={() => selectPost(post)}>
                            <div className="postTitle">{post.title}</div>
                            <div className="postDate post-info">Posted on: {post.postDate}</div>
                            <div className="resolveDate post-info">
                                {post.resolveDate === "" ? 
                                <div>Resolved on: {post.resolveDate}</div>
                                :
                                (
                                <div>Not resolved</div>
                                )}
                            </div>
                            
                        </ListGroup.Item>
                        </Link>
                    ))
                ) : 
                (
                    apiNotLoaded ?
                    (
                        <p>Server error. Please reload!</p>
                    )
                    :
                    (
                        <p>You do not have any created posts</p>
                    )
                )}
                
            </ListGroup>
        </>
    )
}

export default MyPosts