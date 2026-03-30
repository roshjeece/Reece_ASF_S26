const BlogHeader = () => {
    const theStyles = {
        border: "2px red solid",
        margin: "0",        // REMOVE auto margin, let layout handle spacing
        padding: "8px"      // ADD padding so text isn't flush with the border
    }

    return (
        <h1 style={theStyles}>I am the BlogHeader</h1>
    )
}

export default BlogHeader;