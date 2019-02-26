import ClipboardJS from 'clipboard'

document.addEventListener('DOMContentLoaded', () => {
    const clip = new ClipboardJS('#get-link', {
        text: function () {
            return getLongUrl()
        }
    });

    (document.getElementById('get-link') as HTMLInputElement).addEventListener('click', () => {
        console.log(getLongUrl())
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

async function shortUrl(url: string) {
    const res = await fetch('https://firebasedynamiclinks.googleapis.com/v1/shortLinks?key=AIzaSyB3McXFfPlMWJAvTYhGs_oslhcnzZcJsXQ', {
        method: 'POST'
        , body: JSON.stringify({
            longDynamicLink: 'https://kutiel.page.link/?link=' + url
        })
        , headers: {
            "Content-Type": "application/json",
        },

    })
    return await res.json();
}
