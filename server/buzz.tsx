import * as elements from 'typed-html';

export function buzz(info: { text: string, title: string, description: string, img: string }) {
    const text = info.text || ''
    const title = info.title || 'WOW'
    const description = info.description || 'You wont'
    const img = info.img || ''
    const meta = `
    <meta property="og:title" content="${title}" />
    <meta property="og:description" content="${description}" />
    <meta property="og:image" itemprop="image" content="${img}">                
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