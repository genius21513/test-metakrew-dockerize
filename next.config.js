/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  reactStrictMode: true,
  distDir: './build',
  images: {
    domains: ['res.cloudinary.com'],
  },
  assetPrefix: isProd? "/metakrew.com/" : "",
  basePath: isProd? "/metakrew.com/" : ""
}
