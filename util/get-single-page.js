async function getSinglePage(slug) {
    let response
    await fetch(`${process.env.url}/wp-json/wp/v2/pages?slug=${slug}`)
        .then(res => res.json())
        .then(res => response = res)
        .catch(err => response = err)
    return response
}

export default getSinglePage