# Jeu de mémoire

 ![Made with ES6](https://img.shields.io/badge/Made%20with-ES6-yellow) ![Made with CSS3](https://img.shields.io/badge/Made%20with-CSS3-blue) ![Made with HTML5](https://img.shields.io/badge/Made%20with-HTML5-orange)

**Memory game**, un jeu de mémoire conçu en `JavaScript ES6`, `CSS3` et `HTML5`.

## Screenshot

![Screenshot](/screenshot.jpg)

## Règles du jeu

Ce jeu permet d'entraîner votre mémoire. Il se compose de paires de cartes portant des illustrations de fruits identiques.

Avant le début du jeu, les cartes sont mélangées puis retounées. Lorsque le jeu commence, cliquez sur deux cartes de votre choix pour les retourner. Si ces deux cartes sont identiques, elles restent visibles. Dans le cas contraire, elles sont retournées.

La partie est gagnée lorsque toutes les paires de cartes ont été découvertes dans le temps imparti. En fonction de votre résultat, le jeu vous propose de sauvegarder votre score afin qu'il apparaisse dans le tableau des meilleurs scores affiché en début de partie.

## Jouer en ligne

[https://pascaltassel.github.io/Memory-game/](https://pascaltassel.github.io/Memory-game/).

Dans la version en ligne, les scores sont sauvegardés dans le navigateur, à l'aide de l'objet `localStorage`.

## Jouer en local

Développé avec node **12.18.4** et **npm 8.1.3**.

Port du serveur : **3000**.

Si le mode de sauvegarde des scores est défini sur `"database"` dans le [fichier de configuration](#Configuration-du-jeu), vous devrez renseigner les informations de connection au serveur de bases de données `MySQL`, afin que le programme puisse créer une base de données et une table dans laquelle seront sauvegardés les scores.

## Configuration du jeu

Le fichier `settings.json`, situé à la racine du projet, permet de personnaliser différents paramètres relatifs au jeu et au mode de sauvegarde des scores.

### game

| Paramètre       | Type     | Définition                                                                                                   |
| :-------------- | :------- | :----------------------------------------------------------------------------------------------------------- |
| backupMethod    | string   | Mode de sauvegarde des scores : base de données MySQL (`database`) ou dans le navigateur (`localStorage`)              |
| bgCardIncrement | int      | Incrémentation horizontale en `px` de l'image d'arrière-plan des cartes (`/dist/im/cards.png`)               |
| cardsValues     | array    | Tableau de la valeur des cartes (défini dans le même ordre que le sprite d'arrière-plan`/dist/im/cards.png`) |
| debug           | boolean  | Affichage de la valeur des cartes                                                                            |
| duration        | number   | Durée d'une partie, en secondes (entre `60` et `3599`)                                                       |
| nbOccurences    | number   | Nombre de cartes identiques (`2` ou `3`)                                                                     |
| rankingLimit    | number   | Nombre de scores sauvegardés (entre `2` et `10`)                                                             |
| visibleDuration | number   | Durée de visibilité d'une carte avant son retournement (entre `2` et `5`)                                    |

### database

:warning: Si le paramètre `game.backupMethod` est défini sur `database`, les paramètres ci-dessous devront être obligatoirement renseignés.

| Paramètre | Type   | Définition                                                                                                   |
| :-------- | :----- | :----------------------------------------------------------------------------------------------------------- |
| database    | string | Nom de la base de données, exemple : `"memory_game"`                                                         |
| host      | string | Nom du serveur de base données, exemple : `"localhost"`                                                      |
| password  | string | Mot de passe de connection à la base de donnée, exemple : `""`                                               |
| table | string | Nom de la table dédiée à l'enregistrement des scores, exemple : `"scores"`                                   |
| user  | string | Nom d'utilisateur, exemple : `"root"`                                                                        |


:information_source: Si la base de donnée ou la table sont inexistantes, elles seront automatiquement créées.

### Compilation des fichiers statiques

Les fichiers `assets/css/memory.css` et `assets/js/memory.js` sont obtenus par compilation des fichiers présents dans le dossier `assets/src`, à l'aide du bundle `webpack.mix.js`.

Pour lancer la compilation depuis la racine du projet, exécuter les commandes suivantes :

```javascript
cd assets/src
npm run production
```