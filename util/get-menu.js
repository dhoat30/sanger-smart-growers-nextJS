async function getMenu(menuID) {
    let response
    await fetch(`${process.env.url}/wp-json/routes/menu`)
        .then(res => res.json())
        .then(res => response = res)
        .catch(err => response = err)
    return response
}

export default getMenu