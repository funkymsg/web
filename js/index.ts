document.addEventListener('DOMContentLoaded', () => {

    (document.getElementById('get-link') as HTMLInputElement).addEventListener('click', async () => {
        const out = document.getElementById('short-url') as HTMLInputElement
        out.value = 'generating link...'
        console.log('getting long url')
        const longUrl = getLongUrl()
        console.log(longUrl, 'getting short url')
        const shortUrl = (await getShortUrl(longUrl)).shortLink
        console.log(shortUrl)
        out.value = shortUrl
    })
})

function getLongUrl() {
    function getVal(id: string) {
        const el = document.getElementById(id) as HTMLInputElement
        return encodeURIComponent(el.value)
    }

    const img = encodeURIComponent((document.querySelector('input[name="img"]:checked') as HTMLInputElement).value);
    const title = getVal('title')
    const description = getVal('description')
    const msg = getVal('msg')

    return `${location.href}${img}/${title}/${description}/${msg}/`
}

async function getShortUrl(longUrl: string): Promise<{ shortLink: string }> {
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
