import React from 'react'
import Head from 'next/head'
import moment from 'moment'
import { DefaultSeo } from "next-seo"

const Layout = (props) => {
  const { articles, volume, issue, article, pageTitle } = props

  return (
    <div>
      <Head>

        {!articles && <title>{pageTitle}</title>}

        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta name="generator" content="Sub Network Solutions" />

        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="theme-color" content="#ffffff" />

        <link href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,500i,600,700,800%7CSatisfy&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href={process.env.DOMAIN + '/assets/plugins/bootstrap/bootstrap.min.css'} />
        <link rel="stylesheet" href={process.env.DOMAIN + '/assets/css/animate.min.css'} />
        <link rel="stylesheet" href={process.env.DOMAIN + '/assets/plugins/fontawesome-free-5.11.2-web/css/all.min.css'} />
        <link rel="stylesheet" href={process.env.DOMAIN + '/assets/plugins/kipso-icons/style.css'} />
        <link rel="stylesheet" href={process.env.DOMAIN + '/assets/css/style.css'} />
        <link rel="stylesheet" href={process.env.DOMAIN + '/assets/css/responsive.css'} />

      </Head>
      <DefaultSeo
        titleTemplate={"%s | JIEAS"}
        title="Journal of International Environmental Application and Science"
        description={'Journal of International Environmental Application and Science (JIEAS), Int. j. environ. pollut. environ. model., ISSN-2636-7661' || ''}
        keywords={'Environmental Pollution, Environmental Modeling, International Journal, peer review'}
      />

      <div className="page-wrapper">

        {props.children}

      </div>

      <script src="/assets/plugins/bootstrap/jquery.min.js"></script>
      <script src="/assets/plugins/bootstrap/bootstrap.min.js"></script>

    </div>
  )
}

export default Layout