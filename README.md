# Notes

## Installation

Installation des dépendances de l'application React :

```
npm install
```

## Démarrage

Dans un dossier API, créer un fichier `db.json` avec par exemple ce contenu :

```
{
  "notes": [
    {
      "id": 1,
      "title": "Initiation à React",
      "content": "Lorem ipsum…"
    },
    {
      "id": 2,
      "title": "Utilisation de json-server",
      "content": "Bla bla"
    }
  ],
  "profile": {
    "name": "Arnaud"
  }
}
```

Démarrage du `json-server` :

```
npx json-server --watch api/db.json --port 4000
```

Démarrage du serveur de développement de l'application React :

```
cd webapp
npm start
```
