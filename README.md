# reactjs-course

https://fr.reactjs.org/tutorial/tutorial.html#taking-turns

Project that compiles concepts from React.js

## Composant

- props = Paramètres (propriétés)
- render = Renvoie une arborescence de vues à afficher

## L'état local

_this.state_ dans le constructeur

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

## Normes

- on[event] Pour les props qui représentent des évènements
- handle[event] Méthodes qui gèrent ces évènements

## Autres

concat() ne modifie pas le tableau d'origine.


## Keys
- Pour les listes il faut définir un ID pour chaque élément.
- Prop _key_ est spéciale et reservée en React.
- Key est utilié par React pour savoir quels composants mettre à jour.
- 
```js
<li key={user.id}>{user.name} : {user.taskCount} tâches restantes</li>
```