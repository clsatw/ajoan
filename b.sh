#!/bin/bash
#	build all 

git pull
npm run build
npm run build:zh-hant
npm run build:zh-hans
sudo pm2 restart server

