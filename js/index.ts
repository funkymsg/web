
type info = {
    img: string
    title: string
    description: string
    msg: string
}

document.addEventListener('DOMContentLoaded', () => {

    (document.getElementById('get-link') as HTMLInputElement).addEventListener('click', async () => {
        function getVal(id: string) {
            return (document.getElementById(id) as HTMLInputElement).value
        }

        const info: info = {
            img: (document.querySelector('input[name="img"]:checked') as HTMLInputElement).value,
            title: getVal('title'),
            description: getVal('description'),
            msg: getVal('msg')
        }


        const out = document.getElementById('short-url') as HTMLInputElement
        out.value = 'generating link...'
        out.value = (await getShortUrl(info)).shortLink
    })
})

async function getShortUrl(info: info): Promise<{ shortLink: string }> {
    const longUrl = `${location.href}${encodeURIComponent(info.img)}/${encodeURIComponent(info.title)}/${encodeURIComponent(info.description)}/${encodeURIComponent(info.msg)}/`

    const res = await fetch('https://firebasedynamiclinks.googleapis.com/v1/shortLinks?key=AIzaSyB3McXFfPlMWJAvTYhGs_oslhcnzZcJsXQ', {
        method: 'POST'
        , body: JSON.stringify({
            "dynamicLinkInfo": {
                "domainUriPrefix": 'https://kutiel.page.link',
                "link": longUrl,
                "socialMetaTagInfo": {
                    "socialTitle": info.title,
                    "socialDescription": info.description,
                    "socialImageLink": `${location.href}${info.img}`
                }
            },
            "suffix": {
                "option": "SHORT"
            }
        })
        , headers: {
            "Content-Type": "application/json",
        },

    })
    const json = await res.json();
    return json
}
