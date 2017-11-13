## asus-reboot

Reboots the Asus 4G-AC55U Router that tends to hang every now and then.

## usage

```
npm install
logintoken="<your-login-token>" node reboot.js
```

...where `<your-login-token>` is the login token for your router. You can 
find the login token by inspecting the POST request sent by the admin UI
login page when you log in.
