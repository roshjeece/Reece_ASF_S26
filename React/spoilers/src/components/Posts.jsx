import Replies from "./Replies.jsx";

const Posts = ({donkey}) => {
    let {source, alt, date, content} = donkey;
    return (
        <div style={{border: "orange 2px solid"}}>
            <img src={source} alt={alt} style={{ width: "100%", maxWidth: "600px", height: "auto", display: "block", margin: "0 auto" }}/>            <p>{date}</p>
            <p>POST CONTENT: {content}
            </p>
            <div>
                <button>Like</button>
                <button>Dislike</button>
            </div>
            <div>
                {<button>REPLY</button>}
            </div>
            <div>
                <Replies/>
                <Replies/>
                <Replies/>
            </div>
        </div>
    )
}

export default Posts;