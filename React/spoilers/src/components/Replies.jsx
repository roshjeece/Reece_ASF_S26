const Replies = () => {
    return (
        <div style={{border: "maroon 2px solid"}}>
            <p>Date: 3/31/26</p>
            <p>REPLY CONTENT: Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab architecto ea enim est, et ex fugiat impedit, minima, natus odit possimus praesentium quam quas quibusdam sunt tempore vel velit?
            </p>
            <div>
                <button>Like</button>
                <button>Dislike</button>
            </div>
            <div>
                {<button>REPLY</button>}
            </div>
        </div>
    )
}

export default Replies;