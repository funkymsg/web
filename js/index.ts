document.addEventListener('DOMContentLoaded', () => {

    (document.getElementById('get-link') as HTMLInputElement).addEventListener('click', async () => {
        console.log('getting long url')
        const longUrl = getLongUrl()
        console.log('getting short url')
        const shortUrl = (await getShortUrl(longUrl)).shortLink 
        console.log(shortUrl)
        ;
        (document.getElementById('short-url') as HTMLInputElement).value = shortUrl
    })
})

function getLongUrl() {
    function getVal(id: string) {
        const el = document.getElementById(id) as HTMLInputElement
        return encodeURIComponent(el.value)
    }

    const text = getVal('text')
    const title = getVal('title')
    const description = getVal('description')
    const img = encodeURIComponent((document.querySelector('input[name="img"]:checked') as HTMLInputElement).value);

    return `${location.href}/${text}/${title}/${description}/${img}`
}

async function getShortUrl(longUrl: string):Promise<{shortLink:string}> {
    const res = await fetch('https://firebasedynamiclinks.googleapis.com/v1/shortLinks?key=AIzaSyB3McXFfPlMWJAvTYhGs_oslhcnzZcJsXQ', {
        method: 'POST'
        , body: JSON.stringify({
            longDynamicLink: 'https://kutiel.page.link/?link=' + longUrl
        })
        , headers: {
            "Content-Type": "application/json",
        },

    })
    const json = await res.json();
    return json
}
