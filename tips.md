# Application Todo

## Etapes type à suivre pour un projet

### #1 Créer un dossier 

```shell
mkdir <name of file>
```

### #2 Initialisation


```shell
npm init
```

```shell
git init
```

### #3 Fichiers de base

- Créer le gitignore
Ressource de gitignore [ici](https://github.com/github/gitignore)

On retrouve tous les gitignore qu'on utilise potentiellement, cette ressource permet d'avoir un template de fichiers de base

- Créer le .env et .env.example

- Télécharger les dépendances

Liste : 
    - express
    -   
    -

- Organiser nos dossiers sur une architecture MVC



### Approche code first 

(autre approche que DB first)

Création de la base de données à partir de Sequelize en le codant

Créer index.js :

- !!! PREMIER réflexe NodeJs project : le require dotenv !!
- Mettre tous les imports de modules en haut recommandé

```js
app.use(session({
    secret: process.env.SESSION_SECRET,
    //quand une requete rentre, recréation du cookie pour préserver les informations
    resave: true, 
    saveUninitialized: true,
    cookie: {}
}));
```



