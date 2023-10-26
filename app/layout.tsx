import '../assets/style.scss'
import Layout from '@/layout/Layout'
import React from 'react'
import {Poppins} from 'next/font/google'

const poppins = Poppins({
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    subsets: ['latin', 'latin-ext']
})
export const metadata = {
    title: 'JIEAS - Journal of International Environmental Application and Science',
    description: 'Journal of International Environmental Application and Science (JIEAS), Int. j. environ. pollut. environ. model., ISSN-2636-7661',
    openGraph: {
        title: 'IJEPEM - Journal of International Environmental Application and Science',
        description: 'Journal of International Environmental Application and Science (JIEAS), Int. j. environ. pollut. environ. model., ISSN-2636-7661',
        url: 'https://jieas.com/',
        siteName: 'JIEAS',
        locale: 'en-US',
        type: 'website'
    }
}

export default function RootLayout({children}: {
    children: React.ReactNode
}) {
    return (
        <html lang='en'>
        <head>
            <meta charSet='UTF-8'/>
            <meta name='viewport' content='width=device-width, initial-scale=1.0'/>
            <meta httpEquiv='X-UA-Compatible' content='ie=edge'/>
            <link rel='icon' href='/favicon.ico'/>
        </head>
        <body className={poppins.className}>
        <div className="page-wrapper">
            <Layout>
                {children}
            </Layout>
        </div>
        </body>
        </html>
    )
}
