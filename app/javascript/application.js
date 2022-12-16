// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"

import jQuery from "jquery"
window.$ = window.jQuery = jQuery;

import "controllers"
