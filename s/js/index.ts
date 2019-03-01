import isMobile from 'is-mobile'

document.addEventListener('DOMContentLoaded', () => {
    type info = {
        img: string
        title: string
        description: string
        msg: string
    }

    const mobile = isMobile.isMobile()
    const share = document.getElementById('share') as HTMLAnchorElement
    console.log('is mobile', mobile)

    function getLongUrl(info: info) {
        const img = encodeURIComponent(info.img)
        const title = encodeURIComponent(info.title)
        const desc = encodeURIComponent(info.description)
        const msg = encodeURIComponent(info.msg)
        const url = `${location.protocol}//${location.host}/${img}/${title}/${desc}/${msg}/`
        console.log(url)
        return url
    }

    async function getShortUrl(info: info): Promise<string> {
        const res = await fetch(`https://avp.io/api/v2/action/shorten?key=ae34615cd0157f29c42263d132e7ef&url=${encodeURIComponent(getLongUrl(info))}`)
        return await res.text()
    }


    (document.getElementById('generator') as HTMLFormElement).addEventListener('submit', async (e) => {
        function getVal(id: string) {
            return (document.getElementById(id) as HTMLInputElement).value
        }

        const info: info = {
            img: (document.querySelector('input[name="img"]:checked') as HTMLInputElement).value,
            title: getVal('title'),
            description: getVal('description'),
            msg: getVal('msg')
        }

        console.log(info)
        e.preventDefault();

        share.href = ''
        const out = document.getElementById('short-url') as HTMLInputElement
        out.value = 'generating link...'
        out.value = await getShortUrl(info)
        if (mobile) {
            share.href = `whatsapp://send?text=${out.value}`
        }
        return false;
    })
})

