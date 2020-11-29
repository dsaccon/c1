#!/bin/bash

docker exec -it c1_db pg_dump --no-owner --no-privileges --user user db | gzip > data.sql.gz
