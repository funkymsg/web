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
    <meta property="og:image" content="https://funkymsg.com/img/${decodeURIComponent(img)}">                
    `

    const fontSize = (50 + 5 * msg.length) / msg.length + 'vw'
    return '<!DOCTYPE html>' + <html>
        <head>
            {meta}
            <title>{title}</title>
            <link rel='stylesheet' href='/css/index.css' />
        </head>
        <body>
            <div class='message' dir='auto' style={'font-size:' + fontSize}><div>{msg}</div></div>
            <a id='reply' title='Replay' href="/app/"><i class='icon-reply'></i></a>
        </body>
    </html>
}