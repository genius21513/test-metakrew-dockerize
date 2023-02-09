/** @type {import('next').NextConfig} */

// const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  reactStrictMode: true,
  distDir: './build',
  images: {
    domains: ['res.cloudinary.com'],
  },
  // assetPrefix: isProd? "/metakrew.com/" : "",   // include js, css files
  // basePath: isProd? "/metakrew.com" : "."     // include all links, routing urls
}
