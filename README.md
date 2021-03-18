# super-aerial-market

## My Installation on Windows 8.1
```
npm install -g @vue/cli

vue create super-aerial-market
```
If you get this error :</br>
vue : Impossible de charger le fichier C:\Users\...\AppData\Roaming\npm\vue.ps1, car l'exécution de scripts est désactivée sur ce système. Pour plus d'informations, consultez about_Execution_Policies à l'adresse http://go.microsoft.com/fwlink/?LinkID=135170.")
Go to Powershell console with admin rights,then :
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
npm install -g json-server
```
Start the mock database after downloading https://drive.google.com/file/d/1bvm62C_s9oH38hIuClKeT-l2EOdFm7gi/view?usp=sharing
```
json-server.cmd --watch .\MOCK_DATA.json
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
