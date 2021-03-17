# super-aerial-market

## My Installation on Windows 8.1
```
npm install -g @vue/cli
```
Go to Powershell console with admin rights  (KEEP your initial console if you do not get windows following error message :</br>
vue : Impossible de charger le fichier C:\Users\...\AppData\Roaming\npm\vue.ps1, car l'exécution de scripts est désactivée sur ce système. Pour plus d'informations, consultez about_Execution_Policies à l'adresse http://go.microsoft.com/fwlink/?LinkID=135170.")
```
Set-ExecutionPolicy RemoteSigned

vue create super-aerial-market
...
    Vue CLI v4.5.11
? Please pick a preset: Default ([Vue 2] babel, eslint)
    ...
    ?  Successfully created project super-aerial-market.
```
Go back to your initial console (if not done yet)
```
cd super-aerial-market
npm run serve
```
Install required libraries
```
npm install vue-router
npm install vuex
npm install axios
```
Init your GIT repo with your favorite platform


## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
