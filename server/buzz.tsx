import * as elements from 'typed-html';

export function buzz(info: { msg: string, title: string, description: string, img: string }) {
    const msg = info.msg || ''
    const title = info.title || ''
    const description = info.description || ''
    const img = info.img || ''
    const meta = `
    <meta charset="UTF-8">
    <link rel="icon" href="/favicon.png">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <meta property="og:type" content="article" />
    <meta property="og:title" content="${decodeURIComponent(title)}" />
    <meta property="og:description" content="${decodeURIComponent(description)}" />
    <meta property="og:image" content="https://funkymsg.com/${decodeURIComponent(img)}">                
    `

    return '<!DOCTYPE html>' + <html>
        <head>
            {meta}
            <title>{title}</title>
            <link rel='stylesheet' href='/css/index.css' />
        </head>
        <body>
            <div class='message' dir='auto'><div>{msg}</div></div>
        </body>
    </html>
}