async function getAllPosts(postSlug) {
    let response
    await fetch(`${process.env.url}/wp-json/wp/v2/posts`)
        .then(res => res.json())
        .then(res => response = res)
        .catch(err => response = err)
    return response
}

export default getAllPosts