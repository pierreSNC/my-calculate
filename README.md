# My Calculate -  Test Unitaire avec Playwright et Jest

## Description

Ce projet contient des tests unitaires et des tests de bout en bout (E2E) pour une application de calculatrice simple. Les tests sont réalisés à l'aide de **Jest** pour les tests unitaires et de **Playwright** pour les tests E2E (end-to-end).

Les tests unitaires vérifient le bon fonctionnement des fonctions de calcul (addition, soustraction, multiplication, division), tandis que les tests E2E valident l'interface utilisateur et les interactions de l'utilisateur avec l'application.

## Prérequis

Avant de pouvoir exécuter les tests, assurez-vous que vous avez installé **Node.js** et **npm** sur votre machine.

1. [Téléchargez Node.js ici](https://nodejs.org/) si ce n'est pas déjà fait.
2. Assurez-vous d'avoir npm installé avec Node.js (npm est inclus par défaut avec Node.js).

## Installation

Clonez ce repository et installez les dépendances du projet.

```bash
git clone <url-du-repository>
cd Projet_test_unitaire
npm install
```

## Scripts

### 1. Exécution des tests unitaires (Jest)

Pour exécuter les tests unitaires (unit tests) qui vérifient la logique de la calculatrice, utilisez la commande suivante :

```bash
npm test
```

### 2. Exécution des tests de bout en bout (E2E) avec Playwright

Pour exécuter les tests de bout en bout (end-to-end tests) qui vérifient l'interface utilisateur de la calculatrice, utilisez la commande suivante :

```bash
npm run test:e2e
```
