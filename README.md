![Maintenance](https://img.shields.io/maintenance/no/2018.svg?style=flat-square)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)
# IoT-gateway-challenge-step-2

## Second step : optimizations
=> gatling benchmark

## launch
1. launch influxdB : 'docker run -d -p 8083:8083 -p 8086:8086 -e ADMIN_USER="iot" -e INFLUXDB_INIT_PWD="pswd" -e PRE_CREATE_DB="sensordb" tutum/influxdb:latest'
2. launch API : 'cd api && npm start'


More information : [https://github.com/ltoinel/IoT-Development-Challenge](https://github.com/ltoinel/IoT-Development-Challenge)
