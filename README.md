<img src="https://github.com/Corrosion-One/corrosion-one/raw/master/favicon.svg" width=250>

Corrosion One 
------------------

This is the core codebase for corrosion one. It contains

- c1_backend: python flask based backend
- c1_frontned: react pwa based web frontend

## IMPORTANT: Developer Notes

Please follow the mandatory style guides for code acceptance. [Python Style Guide](https://github.com/haydenth/style-guides/blob/master/PYTHON.md) and [Javascript style Guide](https://github.com/haydenth/style-guides/blob/master/JAVASCRIPT.md). If you think there are mistakes in the style guides, please submit a pull request to @haydenth


## Setting up the frontend

To configure the frontend, you'll need to build your docker container for `c1_frontend` and install npm modules locally. The `c1_frontend` folder should be mounted inside the container so if you edit anything, it will change in real time. The below commands should work

```
cd c1_frontend
npm i 
cd ..
docker-compose build c1_frontend
```

## setting up the backend & database

This is pretty straightforward too but you may have to build and rebuild the database a few times. It should automatically import whatever is in the `data.sql.gz` file into a development database.

```
docker-compose build c1_db
docker-compose build c1_backend
docker-compose up
```

To connect to the local database, run the command below. You may wish to create a bash alias for this.

```
docker exec -ti c1_db psql --user user db
```

You should be able to select * from the users table to see at least the main admin user (@haydenth)

```
db=# select * from users;
 id |          email           |         created_at         | is_admin |    name
    |        last_seen_at        | login_type | password_hash | disabled_at | is
_email_user | phone 
----+--------------------------+----------------------------+----------+--------
----+----------------------------+------------+---------------+-------------+---
------------+-------
  1 | thayden@corrosionone.com | 2020-09-11 14:23:01.751187 | t        | Tom Hay
den | 2020-09-11 16:03:33.707789 | azure      |               |             |   
            | 
(1 row)
```

If this is empty, do the following to re-create the database

```
docker-compose rm c1_db
docker-compose build c1_db
docker-compose up c1_db
```

Then wait until it completes building and says it is ready for connections and it should be good now. If it still doesn't work, reach out to @haydenth

## Running a database migration

Adding fields to the database is a multi-step process. The reason for this is so that all developers & production keep the same database schema in sync. The migration process works like this:

- Add or modify a model file in the `c1_backend/web/models` location
- Make sure the change is reference in `c1_backend/web/models/__init__.py`
- Run the following command to autogenerate a migration, replacing MESSAGE with a commit message for what you are trying to do

```
docker exec -it c1_backend flask db revision --autogenerate -m "MESSAGE"
```

- You should be able to view the migration in the `c1_backend/migrations/versions/` folder. *Make sure you commit this migration to version control!*
- Run the below command to complete the migration

```
docker exec -it c1_backend flask db upgrade
```

If the database migration fails or if you have questions contact @haydenth via github issue or email, please!

## Releasing Front-end Code

In order to release code you need to have an `awskeys.sh` file on hand that looks like the following but with actual keys assigned to you. This file *does not* get checked into version control!

```
#!/bin/bash

export AWS_ACCESS_KEY_ID=
export AWS_SECRET_ACCESS_KEY=
export AWS_DEFAULT_REGION=us-east-2
```

Once you have that, run the following:

```
./release-beta.sh
```

It should deploy the current react site out to beta.corrosionone.com. This will be hosted on an AWS S3 bucket and distributed via AWS Cloudfront, so the invalidation & site update may take a few minutes from the time of release to when you see it live.

## Releasing Back-end Code

Releasing backend code is a little trickier because you will have to have the following components which contain secrets and should be treated with caution.

- An `awskeys.sh` file that has your AWS keys
- A `prod_config/env_vars` file that has the production AWS env variables 

Once you have those, just run 

```
./release-backend.sh
```

And it should deploy out the backend code. This may take 5 minutes or more, because it will have to run any database migrations, create a new instance out on AWS ECS, and then update all the load balancer configurations. Once deployed, it will be live on `backend.corrosionone.com` and on `api.corrosionone.com`


## Database Merged heads

Sometimes if two or more developers are commiting code on the same branch which changes the database schema, you end up with diverged heads. To solve and merge heads back together you can run the following command

```
docker exec -ti c1_backend flask db merge heads
docker exec -it c1_backend flask db upgrade
```

This will create a database migration that you will then have to add to version control and make sure you commit.

## Notes on development workflow

Some quick notes on the preferred development workflow for this project:

- Feel free to work directly on the master branch and contribute code directly to master. Remote branches are fine for larger bodies of work, but at least during the initial sprint, let's keep in master.
- Release your code at least once a day and update the team with any notes on what you've released

If you're not sure about anything feel free to bug @haydenth

## API

The production API host is at `api.corrosionone.com`. please follow the following format for API endpoints

- Store them in a file at `c1_backend/web/api/`
- Please prefix all routes with `/api/` to avoid confusion with the administrative services

## Timezones 

This might sound irritating to some, but please store any timstamps worked with in the database in US Central timezone (US/Central). However, when passing information from the frontend -> API feel free to use UTC or whatever format works best (Timestamp, TZ) or UTC timezone.

## Tips

Create an alias from `docker-compose` to `dc`. Add this to your `.bashrc
```
alias dc='docker-compose'
```
