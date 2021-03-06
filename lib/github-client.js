'use strict'

const GitHub = require('github')

const githubClient = new GitHub({
  version: '3.0.0',
  protocol: 'https',
  host: 'api.github.com',
  timeout: 5 * 1000,
  headers: {
    'user-agent': 'Bunto GitHub Bot v1.0-beta'
  }
})

githubClient.authenticate({
  type: 'oauth',
  token: process.env.GITHUB_TOKEN
})

module.exports = githubClient
