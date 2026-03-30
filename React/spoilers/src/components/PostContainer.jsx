import Posts from "./Posts.jsx";

const PostContainer = ({mule}) => {
    // Array.map() returns a NEW array
    let results = mule.map((post)=>{
        return <Posts donkey={post}/>

    })

    return (

        <div style={{border: "yellow 2px solid"}}>
            <h1>Post Container</h1>
            {results}
        </div>

    )
}

export default PostContainer;