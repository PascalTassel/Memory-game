# Jeu de mémoire

![Made with CSS3](https://img.shields.io/badge/Made%20with-CSS3-blue) ![Made with HTML5](https://img.shields.io/badge/Made%20with-HTML5-orange) ![Made with ES6](https://img.shields.io/badge/Made%20with-ES6-yellow)

Bienvenue sur **Memory game**, un jeu de mémoire conçu en `HTML5`, `CSS3` et `JavaScript ES6`.

## Prérequis

Par défaut, aucun prérequis technique n'est nécessaire pour jouer.

Cependant, si le mode de sauvegarde des scores est défini sur `'database'` dans le fichier de configuration, vous devrez renseigner les informations de connection à une base de données `MySql`, afin que le programme puisse créer une base de données et une table dans laquelle seront sauvegardés les scores.

## Règles du jeu

Ce jeu permet d'entraîner votre mémoire. Il se compose de paires de cartes portant des illustrations de fruits identiques.

Avant le début du jeu, les cartes sont mélangées puis retounées. Lorsque le jeu commence, cliquez sur deux cartes de votre choix pour les retourner. Si ces deux cartes sont identiques, elles restent visibles. Dans le cas contraire, elles sont retournées.

La partie est gagnée lorsque toutes les paires de cartes ont été découvertes dans le temps imparti. En fonction de votre résultat, le jeu vous propose de sauvegarder votre score afin qu'il apparaisse dans le tableau des meilleurs scores affiché en début de partie.

### Configuration du jeu

Le fichier `settings.json`, situé à la racine du projet, permet de personnaliser différents paramètres relatifs au jeu et au mode de sauvegarde des scores.

#### game

| Paramètre       | Type     | Définition                                                                                                   |
| :-------------- | :------- | :----------------------------------------------------------------------------------------------------------- |
| backupMethod    | string   | Mode de sauvegarde des scores : base de données MySql (`database`) ou en local (`localStorage`)              |
| bgCardIncrement | int      | Incrémentation en `px` horizontale de l'image d'arrière-plan des cartes (`/dist/im/cards.png`)               |
| cardsValues     | array    | Tableau de la valeur des cartes (défini dans le même ordre que le sprite d'arrière-plan`/dist/im/cards.png`) |
| debug           | boolean  | Affichage de la valeur des cartes                                                                            |
| duration        | number   | Durée d'une partie, en secondes (entre `60` et `3599`)                                                       |
| nbOccurences    | number   | Nombre de cartes identiques (`2` ou `3`)                                                                     |
| rankingLimit    | number   | Nombre de scores sauvegardés (entre `2` et `10`)                                                             |
| visibleDuration | number   | Durée de visibilité d'une carte avant son retournement (entre `2` et `5`)                                    |

#### database

:warning: Si le paramètre `game.backupMethod` est défini sur `database`, les paramètres ci-dessous devront être obligatoirement renseignés.

| Paramètre | Type   | Définition                                                                                                   |
| :-------- | :----- | :----------------------------------------------------------------------------------------------------------- |
| dbName    | string | Nom de la base de données, exemple : `"memory_game"`                                                         |
| host      | string | Nom du serveur de base données, exemple : `"localhost"`                                                      |
| password  | string | Mot de passe de connection à la base de donnée, exemple : `"/dist/im/cards.png"`                             |
| tableName | string | Nom d'utilisateur, exemple : `"root"`                                                                        |
| userName  | string | Durée de visibilité d'une carte avant son retournement (entre `2` et `5`)                                    |
