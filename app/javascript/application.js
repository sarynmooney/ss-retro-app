// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"
import React from 'react'
import ReactDOM from 'react-dom'
import HelloWorld from './components/HelloWorld'

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('react-root')
  if (root) {
    ReactDOM.render(<HelloWorld />, root)
  }
})
