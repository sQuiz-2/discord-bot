# sQuizBot

sQuizBot est un Bot Discord créé pour le jeu sQuiz.gg
Il est écrit en utilisant Discord.js, javascript et en utilisant l'API Twitch.

Son objectif principal est de répertorier tous les lives sur le jeu sQuiz.
Concrètement, il liste tous les lives dans une catégorie donnée sur Twitch.
Initialement créé pour le jeu sQuiz, il est possible de choisir la catégorie à surveiller en utilisant la commande ?game [NAME].

## Installation

En premier, vous devez télécharger et installer [npm](https://www.npmjs.com/).

Ensuite, vous devez cloner le repository.

Puis allez dans le repository.

Et utilisez la commande suivante.

```terminal
yarn install
```

## Usage

Vous devez d'abord spécifier le salon dans lequel le bot devra écrire ses messages (c'est une initialisation, vous pourrez le changer plus tard en utilisant la commande du bot).
Ouvrez le fichier config.json.
Choisissez le salon Discord dans lequel vous voulez que le bot écrive,faites un clic droit dessus et copiez l'ID du salon.
Entrez ensuite l'ID comme valeur de "channelID" dans le fichier config.json.
Enregistrer le fichier

Et entrez

```terminal
yarn start
```

Le bot doit écouter votre commande dans le salon que vous avez demandé.
Exemple ?help

```terminal
!help
```
