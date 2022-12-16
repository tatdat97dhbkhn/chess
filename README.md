The chess is built on the top of [Rails](https://rubyonrails.org/) and [Hotwired](https://hotwired.dev/).

- [Requirements](#requirements)
- [Setup](#setup)
- [Start server in dev mode](#start-server-in-dev-mode)
- [Access Website](#access-website)
- [Env variables](#env-variables)
- [Database migrations](./doc/database-migrations.md)

## Requirements

- Docker (https://www.docker.com/)

## Setup
- `echo "9f5076bd8a2fc7d23cf066ed826f2f19" > config/master.key`
- `chmod +x entrypoint_development.sh`
- `cp .env.example .env`
- `make build`
- `make db-setup`
- `make migrate`
- `make seed`

## Start server in dev mode
- `make dev && make debug`

## Access Website
- http://localhost:3001/

## Env variables
- `PG_HOST` - specify Database host
- `PG_PORT` - specify Database port
- `PG_USER` - specify Database user
- `PG_PASSWORD` - specify Database user password
