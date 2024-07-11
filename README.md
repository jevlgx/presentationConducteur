Service front de présentation des conducteurs

Ce service est conçu pour être intégré à une application globale et ne peut pas fonctionner de manière autonome.
Table des matières

    Description
    Installation
        Prérequis
        Back-end
        Front-end
    Utilisation
    Technologies utilisées
    Contributeurs

Description

Cette application est un composant du projet de gestion des conducteurs et se limite à la page de présentation d'un conducteur.
Installation
Prérequis

Vous devez avoir installé les éléments suivants sur votre système :

    Git version 2.38.1.windows.1
    Node.js version 10.5.0

Back-end

Récupérez, installez et lancez les services suivants :

- Planning service
- Reservation service
- Review service
- Driver service
- User service

Front-end

    Clonez le dépôt Git :

git clone https://github.com/jevlgx/presentationConducteur.git

    Accédez au dossier du projet :

cd presentationConducteur

    Installez les dépendances :

npm install

Utilisation

    Lancez le front-end :

Exécutez la commande suivante pour lancer le programme :

npm run dev

    Le projet s'ouvre sur le port 3000 :
    Ouvrez votre navigateur et entrez l'adresse
    http://localhost:3000/agent-details-review?driverId=Identifiant du chauffeur dans le service driverService

Remarque : cette méthode est utilisée pour réaliser un simple test du système et vérifier qu'il peut s'intégrer au reste du projet conformément aux directives spécifiées dans les exigences de développement.
Technologies utilisées

Front-end :

    Next.js version 13.4.4

Contributeurs

    William Kamgang (https://github.com/jevlgx)
    Alex Foueguim (https://github.com/El-Prof-ai)
