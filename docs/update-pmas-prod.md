---
id: update-pmas-prod
title: Updating PMAS Production Server
---

## Configuring `index.js` and `app.js`

1.  Locate `\pms\client\src\components\Header\index.js` then make sure it looks like this

    ![alt-text](/img/prod-link.png)

2.  Locate `\pms\app.js`, then make sure it looks like this

    ![alt-text](/img/prod-db.png)

## Build PMAS

1.  Git bash or open CMD to `pmas` folder, execute command `cd client`
2.  Build pmas, execute command `npm run build`

    - IMAGE HERE

## Upload Changes to GitHub

## PuTTY Configuration

1.  Open PuTTY and set the IP Address `52.74.97.97`of PMAS Live.

![alt-text](/img/putty-config1.png)

2.  Go to SSH, then Auth and then click Browse...

![alt-text](/img/putty-config2.png)

3.  Select the private key file `pmas-2.pkk`, then click Open.

![alt-text](/img/putty-config3.png)

> Download private key here

## Pull PMAS in Production Server

1.  Enter username `devops`.
2.  Got to project repository

```
cd pms
```

3.  Update `branch`

```
- git fetch
- git pull
```

4.  Build `client`

```
- cd client
- npm run build
```

5.  Start Application

```
- cd ..
- pm2 start ./bin/www
```
