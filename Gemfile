source 'https://rubygems.org'
git_source(:github) {|repo| "https://github.com/#{repo}.git"}

ruby '2.5.3'

# Bundle edge Rails instead: gem 'rails', github: 'rails/rails'
gem 'rails', '~> 5.2.1'
# Use mysql as the database for Active Record
gem 'mysql2', '>= 0.4.4', '< 0.6.0'
# Use Puma as the app server
gem 'puma', '~> 3.11'
# Use SCSS for stylesheets
gem 'sass-rails', '~> 5.0'
# Use Uglifier as compressor for JavaScript assets
gem 'uglifier', '>= 1.3.0'
# See https://github.com/rails/execjs#readme for more supported runtimes
# gem 'mini_racer', platforms: :ruby

# Use CoffeeScript for .coffee assets and views
gem 'coffee-rails', '~> 4.2'
# Turbolinks makes navigating your web application faster. Read more: https://github.com/turbolinks/turbolinks
gem 'turbolinks', '~> 5'
# Build JSON APIs with ease. Read more: https://github.com/rails/jbuilder
gem 'jbuilder', '~> 2.5'
# Use Redis adapter to run Action Cable in production
# gem 'redis', '~> 4.0'
# Use ActiveModel has_secure_password
# gem 'bcrypt', '~> 3.1.7'

# Reduces boot times through caching; required in config/boot.rb
gem 'bootsnap', '>= 1.1.0', require: false

# Use ActiveStorage variant
# gem 'mini_magick', '~> 4.8'

# Use Capistrano for deployment
gem 'capistrano-rails', group: :development
#
#

group :development, :test do
  # Call 'byebug' anywhere in the code to stop execution and get a debugger console
  gem 'byebug', platforms: [:mri, :mingw, :x64_mingw]
end

group :development do
  # Access an interactive console on exception pages or by calling 'console' anywhere in the code.
  gem 'web-console', '>= 3.3.0'
  gem 'listen', '>= 3.0.5', '< 3.2'
  # Spring speeds up development by keeping your application running in the background. Read more: https://github.com/rails/spring
  gem 'spring'
  gem 'spring-watcher-listen', '~> 2.0.0'
end

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]

##Custom
# bundle exec figaro install
gem 'figaro'

gem 'jquery-rails'

# rails g gentelella:install
gem 'gentelella-rails'

gem 'simple_form'
# rails generate devise:install
# config/environments/development.rb => config.action_mailer.default_url_options = { host: 'localhost', port: 3000 }
# rails generate devise User
# ApplicationController => before_action :authenticate_user!
gem 'devise'

#Google it!
gem 'paperclip', '~> 6.0.0'

gem 'bootstrap_form', '>= 4.0.0.alpha1'

gem 'momentjs-rails', '>= 2.9.0'
gem 'moment_timezone-rails'
gem 'bootstrap3-datetimepicker-rails', '~> 4.17.47'

# application.js    => //= require bootstrap-select
# application.scss  => @import "bootstrap-select";
#                     @import "bootstrap/alerts";
#                     @import "bootstrap/dropdowns";
gem 'bootstrap-select-rails'

#For sql views
gem 'scenic-mysql_adapter'
#for charts
gem 'chartkick'
gem "highcharts-rails"

gem 'groupdate'
gem 'timezone', '~> 1.0'

gem 'bootstrap-daterangepicker-rails'
gem 'matrix'