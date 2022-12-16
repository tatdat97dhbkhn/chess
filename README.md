The chess is built on the top of [Rails](https://rubyonrails.org/) and [Hotwired](https://hotwired.dev/).

![Screenshot from 2022-12-16 16-16-52](https://user-images.githubusercontent.com/27503213/208065047-f895b3d2-2369-4f63-b6e5-de03c378c981.png)

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

## Start server in dev mode
- `make dev && make debug`

## Access Website
- http://localhost:3001/

## Env variables
- `PG_HOST` - specify Database host
- `PG_PORT` - specify Database port
- `PG_USER` - specify Database user
- `PG_PASSWORD` - specify Database user password
