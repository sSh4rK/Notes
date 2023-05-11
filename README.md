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
    "name": "Valentin"
  }
}
```

Démarrage du serveur de développement de l'application React :

```
cd react-notes-esgi-reims-2023
npm start
```

Démarrage du json server :

```
cd react-notes-esgi-reims-2023
cd api
npx json-server --watch api/db.json --port 4000
```
