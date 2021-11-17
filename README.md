# Jeu de mémoire

 ![Made with Node.js](https://img.shields.io/badge/Made%20with-Node.js-green) ![Made with ES6](https://img.shields.io/badge/Made%20with-ES6-yellow) ![Made with CSS3](https://img.shields.io/badge/Made%20with-CSS3-blue) ![Made with HTML5](https://img.shields.io/badge/Made%20with-HTML5-orange)

**Memory game**, un jeu de mémoire conçu avec `JavaScript ES6`, `CSS3`, `HTML5` côté front, et `Node.js` côté back.

Principaux modules `npm` utilisés côté back :

- `express` pour le serveur
- `mysql` pour la gestion des données
- `ejs` pour le templating

## Screenshot

![Screenshot](/screenshot.jpg)

## Règles du jeu

Ce jeu permet d'entraîner votre mémoire. Il se compose de paires de cartes portant des illustrations de fruits identiques.

Avant le début du jeu, les cartes sont mélangées puis retounées. Lorsque le jeu commence, cliquez sur deux cartes de votre choix pour les retourner. Si ces deux cartes sont identiques, elles restent visibles. Dans le cas contraire, elles sont retournées.

La partie est gagnée lorsque toutes les paires de cartes ont été découvertes dans le temps imparti. En fonction de votre résultat, le jeu vous propose de sauvegarder votre score afin qu'il apparaisse dans le tableau des meilleurs scores affiché en début de partie.

## Jouer en ligne

[https://pascaltassel.github.io/Memory-game/](https://pascaltassel.github.io/Memory-game/)

:information_source: Dans la version en ligne, les scores sont sauvegardés dans le navigateur, à l'aide de l'objet `localStorage`.

## Jouer en local

Testé avec les versions suivantes :

- node **12.18.4**
- npm **8.1.3**
- apache **2.4.46**
- MySQL **5.7.31**

### Variables d'environnement

Les variables d'environnement sont définies dans le fichier `.env` :

```
PORT=3000
# database settings
HOST=localhost
DATABASE=memory_game
TABLE=scores
USER=root
PASSWORD=
```
:information_source: Si la base de donnée ou la table sont inexistantes, elles seront automatiquement créées.

## Configuration du jeu

Le fichier `settings.json`, situé à la racine du projet, permet de personnaliser différents paramètres du jeu et le mode de sauvegarde des scores.

| Paramètre       | Type     | Définition                                                                                                   |
| :-------------- | :------- | :----------------------------------------------------------------------------------------------------------- |
| backupMethod    | string   | Mode de sauvegarde des scores : base de données MySQL (`database`) ou dans le navigateur (`localStorage`).   |
| bgCardIncrement | int      | Incrémentation horizontale en `px` de l'image d'arrière-plan des cartes (`/dist/im/cards.png`)               |
| cardsValues     | array    | Tableau de la valeur des cartes (défini dans le même ordre que le sprite d'arrière-plan`/dist/im/cards.png`) |
| debug           | boolean  | Affichage de la valeur des cartes                                                                            |
| duration        | number   | Durée d'une partie, en secondes (entre `60` et `3599`)                                                       |
| nbOccurences    | number   | Nombre de cartes identiques (`2` ou `3`)                                                                     |
| rankingLimit    | number   | Nombre de scores sauvegardés (entre `2` et `10`)                                                             |
| visibleDuration | number   | Durée de visibilité d'une carte avant son retournement (entre `2` et `5`)                                    |

### Compilation des fichiers statiques

Les fichiers `assets/css/memory.css` et `assets/js/memory.js` sont obtenus par compilation des fichiers `.scss` et `.js` enregistrés dans le dossier `assets/src`.

Pour lancer la compilation en mode `dev` ou `production` des fichiers statiques à partir du bundle `webpack.mix.js`, exécuter les commandes suivantes depuis la racine du projet :

```javascript
cd assets/src
npm run production
```