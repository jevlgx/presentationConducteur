# Application Web de chat automatisable

Cette application web est composée d'un front-end développé avec React et d'un back-end développé avec Node.js et Express.

## Table des matières
1. [Description](#description)
2. [Installation](#installation)
   1. [Prérequis](#prérequis)
   2. [Back-end](#back-end)
   3. [Front-end](#front-end)
3. [Utilisation](#utilisation)
4. [Technologies utilisées](#technologies-utilisées)
5. [Contributeurs](#contributeurs)
6. [Licence](#licence)

## Description
Cette application est un composant du projet de classe de gestion des conducteurs et se limite à la page de présentation d'un conducteur

## Installation

### Prérequis
Vous devez avoir installé les éléments suivants sur votre système :
- Git version 2.38.1.windows.1
- Nodejs V10.5.0

### Back-end
Récupérer, installer et lancer les services Utilisés :
```
- Planning service
- Reservation service
- Review service
- Driver service
- User service
```
### Front-end
1. Clonez le dépôt Git :
```
git clone https://github.com/jevlgx/presentationConducteur.git
```
2. Accédez au dossier du projet :
```
cd presentationConducteur
```
3. Installez les dépendances :
```
npm install
```
## Utilisation

1. Lancez le front-end :

Entrez la commande suivante pour lancer le programme :
```
npm run dev
```

2. Le projet s'ouvvre sur le port 3000 :
Ouvrez votre navigateur et entrez l'adresse
`http://localhost:3000/agent-details-review?driverId=Identifiant du chauffeur dans le service driverService`

NB: cette methode est utilisée pour réaliser un simple test du système et vérifier qu'il saura s'intégrer au reste du projet suivant les directives qui ont été spécifiées dans les exigences de développement

## Technologies utilisées
Front-end :
- Next js V13.4.4

## Contributeurs
- William Kamgang (https://github.com/jevlgx)
- Alex Foueguim (https://github.com/El-Prof-ai)
