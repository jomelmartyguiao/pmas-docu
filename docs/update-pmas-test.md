---
id: update-pmas-test
title: Updating PMAS Test Server
---

## Configuring `index.js` and `app.js`

1.  Locate `\pms\client\src\components\Header\index.js` then make sure it looks like this

    ![alt-text](/img/test-link.png)

2.  Locate `\pms\app.js`, then make sure it looks like this

    ![alt-text](/img/test-db.png)

## Login to Pivotal

1.  Download and Install [Cloud Foundry](https://docs.cloudfoundry.org/cf-cli/install-go-cli.html#windows).

2.  Open command prompt, run command

```
cf login -a api.run.pivotal.io
```

3.  Enter credentials:

- Email: `jobelle.ordiz@iainnovations.ph`
- Password: `Zenforce_123`

![alt-text](/img/cmd-cflogin.png)

## Build PMAS

1.  Git bash or open CMD to `pmas` folder, execute command `cd client`
2.  Build pmas, execute command `npm run build`

- IMAGE HERE

## Upload PMAS

1.  On the same directory, run command

```
cf push pmas
```

IMAGE HERE
