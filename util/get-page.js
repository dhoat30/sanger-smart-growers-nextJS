async function getPage(pageSlug) {
    let response
    await fetch(`${process.env.url}/wp-json/routes/${pageSlug}`)
        .then(res => res.json())
        .then(res => response = res)
        .catch(err => response = err)
    return response
}

export default getPage