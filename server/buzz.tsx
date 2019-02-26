import * as elements from 'typed-html';

export function buzz(info: { msg: string, title: string, description: string, img: string }) {
    const text = info.msg || ''
    const title = info.title || ''
    const description = info.description || ''
    const img = info.img || ''
    const meta = `
    <meta charset="UTF-8">
    <link rel="icon" href="/favicon.png">
    <meta property="og:title" content="${title}" />
    <meta property="og:description" content="${description}" />
    <meta property="og:image" itemprop="image" content="/${img}">                
    `

    return <html>
        <head>
            {meta}
            <link rel='stylesheet' href='/index.css' />
        </head>
        <body>
            <div class='message' dir='auto'><p>{text}</p></div>
        </body>
    </html>
}