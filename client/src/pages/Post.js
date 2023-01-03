const Post = ({ post }) => {
    return (
        <article>
            <h2>{post.Name}</h2>
            <p>{post.Address}</p>
            <p>{post.Subcription}</p>
            <p>{post.Uploadimage}</p>
            <p>Post ID: {post.id}</p>
        </article>
    )
}
export default Post