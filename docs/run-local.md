---
id: run-local
title: Run PMAS Locally
---

## Run MongoDB

Open the `mongod.exe` application `C:\Program Files\MongoDB\Server\3.4\bin`.

> Note: You can add the exe to the taskbar for easy access since it is needed every time you run the application.

## Run Project

1.  Git bash or open CMD to `pmas` folder.
2.  Run the server. Execute command `yarn dev`.

> An error will show because `access-token` and `userId` are not set in the local storage.

![alt-text](/img/error-starting.png)

## Setup access_token and userId in local storage.

1.  Go to JSON Web Tokens [JWT](https://jwt.io/).

    ![alt-text](/img/jwt.png)

2.  Change the `PAYLOAD` to

```
{
"exp": 1566593123,
"id": "14421",
"iss": "http://localhost:63939/",
"aud": "http://localhost:63939/"
}
```

3.  Change the `VERIFY SIGNATURE` to `veryVerySecretKey`.
4.  Copy the generated token.

```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjY1OTMxMjMsImlkIjoiMTQ0MjEiLCJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjYzOTM5LyIsImF1ZCI6Imh0dHA6Ly9sb2NhbGhvc3Q6NjM5MzkvIn0.n6SwzLnjzsLNBEYJEF-7Fl8D49la65E7CdhBLMTJf5Y
```

5.  Go to browser's `DevTools`. Click `Application`. Find `Local Storage` then add the `access token` and `userId` of the user.

![alt-text](/img/local-storage.png)

6.  Then access [PMAS](http://localhost:3000/app/evaluationform).
