import * as elements from 'typed-html';

export function buzz(info: { msg: string, title: string, description: string, img: string }) {
    const text = info.msg || ''
    const title = info.title || ''
    const description = info.description || ''
    const img = info.img || ''
    const meta = `
    <meta charset="UTF-8">
    <link rel="icon" href="/favicon.png">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <meta property="og:type" content="article" />
    <meta property="og:title" content="${title}" />
    <meta property="og:description" content="${description}" />
    <meta property="og:image" content="https://funkymsg.com/${img}">                
    `

    return <html>
        <head>
            {meta}
            <title>{title}</title>
            <link rel='stylesheet' href='/index.css' />
        </head>
        <body>
            <div class='message' dir='auto'><p>{text}</p></div>
        </body>
    </html>
}