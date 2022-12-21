# frozen_string_literal: true

# Pin npm packages by running ./bin/importmap

pin 'application', preload: true
pin '@hotwired/turbo-rails', to: 'turbo.min.js', preload: true
pin '@hotwired/stimulus', to: 'stimulus.min.js', preload: true
pin '@hotwired/stimulus-loading', to: 'stimulus-loading.js', preload: true
pin_all_from 'app/javascript/controllers', under: 'controllers'
pin 'chessboardjs', to: 'https://ga.jspm.io/npm:chessboardjs@0.0.1/www/js/chessboard.js'
pin 'chess.js', to: 'https://ga.jspm.io/npm:chess.js@1.0.0-alpha.0/dist/chess.js'
pin 'jquery', to: 'https://ga.jspm.io/npm:jquery@3.6.1/dist/jquery.js'
