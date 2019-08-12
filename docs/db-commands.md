---
id: db-commands
title: Database Commands
---

## Import Commands

- IMPORT: Localhost USERS Collection
mongoimport --db rfc-pms --collection "users" --drop --type csv --headerline --host "localhost:27017" --file "C:\JMGGuiao\newRFCDATA.csv" --ignoreBlanks

- IMPORT: Production USERS Collection
mongoimport -h ds155073.mlab.com:55073 -d pmasprod -c users -u rfcpmas -p pmas1234 --file "C:\JMGGuiao\newRFCDATA.csv" --type csv --headerline --ignoreBlanks

- IMPORT: Test USERS Collection
mongoimport -h ds127362.mlab.com:27362 -d rfcpmas -c users -u rfcpmas -p pmas123 --file "C:\JMGGuiao\newRFCDATA.csv" --type csv --headerline --ignoreBlanks

- IMPORT: Localhost USERBSCS Collection - JSON FILE
mongoimport --db rfc-pms --collection "userbscs" --host "localhost:27017" --file "C:\JMGGuiao\userbscs.json" --jsonArray

- IMPORT: Test USERBSCS Collection - JSON FILE
mongoimport -h ds127362.mlab.com:27362 -d rfcpmas -c userbscs -u rfcpmas -p pmas123 --file "C:\JMGGuiao\userbscs.json" 

- IMPORT: Production USERBSCS Collection - JSON FILE
mongoimport -h ds155073.mlab.com:55073 -d pmasprod -c userbscs -u rfcpmas -p pmas1234 --file "C:\JMGGuiao\userbscs.json"

## Export Command

- EXPORT: Production USERS Collection
mongoexport -h ds155073.mlab.com:55073 -d pmasprod -c userbscs -u rfcpmas -p pmas1234 --out "C:\JMGGuiao\userbscs.json"
