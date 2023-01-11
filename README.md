# React

https://fr.reactjs.org/tutorial/tutorial.html#taking-turns

Project that compiles concepts from React.js

## Liste des composants

- Functional Component
- Presentational Component
- Stateless Component
- Dumb Component
- Class Component
- Container Component
- Statefull Component
- Smart Component

## Composant

- props = Paramètres (propriétés)
- render = Renvoie une arborescence de vues à afficher

## L'état local

_This.State_ dans le constructeur

## State

setState() pour modifier l'état d'un composant.

## Props

Read-only, les composants ne peuvent pas les modifier.

## Attribues en JSX

```js
    // If JS expression
<div id={user.id}></div>
// If attribute
<div id="name"></div>
```

### Composants contrôlés

Composants enfants qui n'ont pas d'état local, car un composant parent
dispose d'un contrôle complet sur eux

## Immutabilité

- Permet de conserver intactes les versions précedentes
  de l'historique pour les réutiliser après.
- Permet de detecter des modifications.
- Permet la construction de _composants purs_
- Des données immuables facilitent la détection des modifications,
  ce qui permet de déterminer quel composant doît être rafrâichi.

## Fonctions composants

Ne contiennent qu'une méthode _render_ et n'ont pas leur propré état.<br>
N'héritent pas de _React.Component_. On peut écrire une fonction qui prendra
les props en argument:

```js
function Square(props) {
    return (
        <button className="square" onClick={props.onClick}>
            {props.value}
        </button>
    );
}
```

## Modification des données

- Muter : Modifier diréctement les valeurs

```js
var player = {score: 1, name: 'Jérémie'};
player.score = 2;
```

- Remplacer les données d'origine par une nouvelle copie

```js
var player = {score: 1, name: 'Jérémie'};
var newPlayer = {...player, score: 2};
```

## Hooks

Permet d'utiliser state à l'interieur d'un composant fonctionnel.

```js
import React, {useState} from 'react';

const Hello = () => {
    // Array destructuring because useState return 2 values (variable and set function)
    const [name, setName] = useState('initialValue');
    return <h1>{name}</h1>;
};
```

## Méthodes du cycle de vie

Mounting - Lorsqu'un composant est affichl dans la page - componentDidMount : Methode appelée quand un composant est
affiché dans la page (initialiser des variables)
Unmounting - Lorsqu'un composant est supprimé de la page - componentDidUnount : Methode appelée quand un composant est
supprimé de la page (liberer des ressources)

## Normes

- on[event] Pour les props qui représentent des évènements
- handle[event] Méthodes qui gèrent ces évènements

## Autres

concat() ne modifie pas le tableau d'origine.

## Keys

- Pour les listes il faut définir un ID pour chaque élément.
- Prop _key_ est spéciale et reservée en React.
- Key est utilié par React pour savoir quels composants mettre à jour.

```jsx
<li key={user.id}>
    {user.name} : {user.taskCount} tâches restantes
</li>
```

# Javascript

## Fonctions

- Regular function => object 'arguments'.
- Arrow function => (...args).
- Callback function => Fonction qui peut être passée en paramètre dans une autre fonction.
- Returning function = Fonction qui retourne une fonction.

## Déstructuration

### Array

```js
// C'est possible de définir des valeurs par défaut
const [num1, num2 = 2, num3] = numbers

// Ignorer un élément durant la destructuration
const [num1, , num3] = numbers

// Prendre le reste d'un tableau avec (...)
const [num1, num2, ...rest] = nums // Rest === Array

```

### Boucles

```js
const countries = [['Finland', 'Helsinki'], ['Sweden', 'Stockholm']]

for (const [country, city] of countries) {
    // Code
}
```

### Objets

Quand on déstructure un objet le nom de la variable doit être le mème que celui de l'attribut de l'objet.

```js
const rectangle = {width: 20, height: 10,}

let {width, height} = rectangle

// Renommer les variables
let {width: w, height: h} = rectangle

// Un pas 
const {object1: {prop1, prop2}, object2: {prop1}, array: [one, two]} = props

// Modifier ou changer un objet lors d'une copie
const copiedUser = {...user, title: 'instructor'}
```

### Fonctions

```js
// Destructuring function parameter
const calcualteArea = ({width, height}) => width * height
```

## Fonctional programming

- **forEach** <br>
  Prend en paramètre une callback function. Paramètres = (élément, index, le tableau lui-mème).
- **map**
- **filter**
- **reduce :** <br>
  Retourne une seule valeur. Utilisée pour ajouter, multiplier ou concatener tous les éléments d'un tableau.
- **find** <br>
  Retourne la première occurrence d'un élément.
- **findIndex** <br>
  Retourne l'index de la première occurrence d'un élément.
- **some** <br>
  Retourne true si un ou plusieurs éléments respectent une condition donnée.
- **every** <br>
  Retourne true si tous les éléments respectent une condition donnée.

## Scope

- Window = Variable crée sans let var ou const

# Autres

- Array.shift -> Suprimme un élément du début d'un tableau
- Array.unshift -> Ajoute un élément au début d'un tableau
- for in est utilisé pour les objets
- spread operator = "..."
- const est utilisé pour = constant value, array, object, arrow function et function expression.
- Object.assign: Copie un objet sans modifier l'original.
- hasOwnProperty: Vérifie si une propriété est présente dans un objet.