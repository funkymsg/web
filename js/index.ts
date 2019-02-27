
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
        out.value = await getShortUrl(info)
    })
})

function getLongUrl(info: info) {
    return `${location.href}${encodeURIComponent(info.img)}/${encodeURIComponent(info.title)}/${encodeURIComponent(info.description)}/${encodeURIComponent(info.msg)}/`
}

async function getShortUrl(info: info): Promise<string> {
    const res = await fetch(`https://avp.io/api/v2/action/shorten?key=ae34615cd0157f29c42263d132e7ef&url=${encodeURIComponent(getLongUrl(info))}`)
    return await res.text()
}

