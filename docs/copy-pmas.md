---
id: copy-pmas
title: Setup Files and Softwares
---

## Get a Copy of PMAS

1.  Get a local copy of the project repository run

```
git clone https://github.com/jomelmartyguiao/pms
```

2.  Run `npm install`
3.  cd client, then execute `npm install` again

    > Note: Use branch `master`

## Download and Install

- [NodeJS](https://nodejs.org/en/download/) - 8.11.2 or the latest
- [Yarn](https://yarnpkg.com/lang/en/docs/install/#windows-stable) - v1.15.2 or the latest
- [Git](https://drive.google.com/file/d/1HpJVjnNp6kKp8AKdiPZRV7VN1hxSjj5L/view?usp=sharing) or the latest
- [Robo 3T](https://drive.google.com/file/d/1-5U5dWVsY3rAZ0VE1xfD8cWnr1hAeMm0/view?usp=sharing) or the latest
- [MongoDB](https://drive.google.com/file/d/1JH_3Xy0JC899pHYzYvpPNppl5vIhcOJe/view?usp=sharing) or the latest

## Adding data on `users` collection in MongoDB.

1.  Download `newRFCDATA.csv`.
2.  Open CMD and go to `C:\Program Files\MongoDB\Server\3.4\bin`.

> Note: Ask the permission of Sir Jantzen before running the command for test and prod server.
> Change the path of newRFCDATA.csv on where you place the file.

- Run this command for local DB

```
mongoimport --db rfc-pms --collection "users" --drop --type csv --headerline --host "localhost:27017" --file "C:\JMGGuiao\newRFCDATA.csv" --ignoreBlanks
```

- Run this command for test server DB

```
mongoimport -h ds127362.mlab.com:27362 -d rfcpmas -c users -u rfcpmas -p pmas123 --file "C:\JMGGuiao\newRFCDATA.csv" --type csv --headerline --ignoreBlanks
```

- Run this command for production server DB

```
mongoimport -h ds155073.mlab.com:55073 -d pmasprod -c users -u rfcpmas -p pmas1234 --file "C:\JMGGuiao\newRFCDATA.csv" --type csv --headerline --ignoreBlanks
```

3.  Open Robo 3T and check the `users` collection if the data are uploaded.
