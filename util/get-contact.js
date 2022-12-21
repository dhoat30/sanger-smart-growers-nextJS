async function getContact(cpt) {
    let response
    await fetch(`${process.env.url}/wp-json/webduel/v1/gonogo`)
        .then(res => res.json())
        .then(res => response = res)
        .catch(err => response = err)
    return response
}

export default getContact