# IoT-gateway-challenge-step-2
[![Build Status](https://travis-ci.org/bgauduch/IoT-gateway-challenge-step-2.svg?branch=master)](https://travis-ci.org/bgauduch/IoT-gateway-challenge-step-2) [![dependencies](https://david-dm.org/bgauduch/IoT-gateway-challenge-step-2.svg)](https://david-dm.org/bgauduch/IoT-gateway-challenge-step-2) [![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

## Second step : optimizations
=> gatling benchmark

## launch
1. launch influxdB : 'docker run -d -p 8083:8083 -p 8086:8086 -e ADMIN_USER="iot" -e INFLUXDB_INIT_PWD="pswd" -e PRE_CREATE_DB="sensordb" tutum/influxdb:latest'
2. launch API : 'cd api && npm start'


More information : [https://github.com/ltoinel/IoT-Development-Challenge](https://github.com/ltoinel/IoT-Development-Challenge)