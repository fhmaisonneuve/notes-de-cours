////////////////////////////////////////////////////////////////////////////////
// LES BASES DE L'OBJET ////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
//
// Un objet est une collection de *données* apparentées et/ou de
// *fonctionnalités* qui se composent de plusieurs variables et fonctions,
// appelées propriétés et méthodes quand elles sont dans des objets.
//
// Un objet est fait de plusieurs *membres*, chacun ayant un *nom* et une
// *valeur*. Quand la valeur est une donnée, le membre est une *propriété*.
// Quand la valeur est une fonction, le membre est une *méthode*.
//
//////////
// EXEMPLE
//
// Ici, l'objet est créé grâce à un *objet littéral* : on écrit littéralement le
// contenu de l'objet pour le créer. On distinguera plus tard cette structure
// des objets instanciés depuis des *classes*.


////////////////////////////////////////////////////////////////////////////////
// NOTATION AVEC UN POINT
//
// Jusqu'à présent, nous avons accéder aux membres de l'objet en utilisant la
// notation avec un point (`personne.age`, `personne.nom[0]`, `personne.bio()`).
//
// Le nom de l'objet (`personne`) agit comme un *espace de noms* (ou *namespace*
// en anglais), c'est à dire qu'il doit être entré en premier pour accéder aux
// membres encapsulés dans l'objet.
//
// Il est même possible de donner un autre objet comme valeur d'un membre de
// l'objet.
//
//////////
// EXEMPLE
//
// Ici, nous créons un *sous-espace de noms*. Pour accéder à ces éléments, il
// suffit de chaîner une étape de plus avec un autre point.


////////////////////////////////////////////////////////////////////////////////
// NOTATION AVEC LES CROCHETS
//
// Il y a une autre façon d'accéder aux membres d'un objet : la notation avec
// les crochets.
//
//////////
// EXEMPLE






////////////////////////////////////////////////////////////////////////////////
// DÉFINIR LES MEMBRES D'UN OBJET
//
// Vous pouvez aussi modifier la valeur d'un membre d'un objet en déclarant
// simplement le membre que vous souhaitez modifier.
//
//////////
// EXEMPLE


//////////
// EXEMPLE
//
// Ainsi, on peut utiliser la notation par crochet pour définir dynamiquement
// les valeurs ou les noms des membres.

personne3= {
    nom: "Doe",
    prenom: "John",
    salutation: function() {
        return "Bonjour! Je m'appelle " + this.prenom + " " + this.nom + ".";
    }
}

const newProperty = "age";
personne3[newProperty] = 42;
console.log(personne3.age);


console.log(personne3.salutation());

////////////////////////////////////////////////////////////////////////////////
// MOT CLÉ `this`
//
// Le mot-clé `this` se réfère à l'objet courant dans lequel le code est écrit.
//
// Ce n'est pas très utile quand on écrit des objets littéraux à la main, mais
// ça prend tout son sens quand on génère des objets dynamiques (avec des
// constructeurs par exemple).

////////////////////////////////////////////////////////////////////////////////
// LES CONSTRUCTEURS
//
// Les objets littéraux sont utiles pour la création d'objets uniques, mais s'il
// faut créer plus qu'un object, ou si nous désirons mettre à jour ses
// propriétés, alors ils deviennent vite inadéquats.
//
// Prenez le code suivant :


// Il n'est pas très efficace. Non seulement faut-il se répéter, mais il faut se
// rappeler de changer les 2 objets si nous désirons leur ajouter une propriété.
//
// Pour simplifier, il faudrait définir la « forme » de l'objet `personne` --
// c'est-à-dire les différentes propriétés et méthodes qu'il peut contenir -- et
// puis créer nos objets à partir de cette forme.
//
// On peut faire cela à l'aide d'une fonction :


// Une manière moins verbeuse de faire la même chose est d'utiliser un
// *constructeur*. Un constructeur est une fonction appelée avec la mot clé
// `new`. Une fois appelé, le constructeur :
//
// - crée un nouvel objet
// - assigne `this` au nouvel objet
// - exécute le code dans la fonction
// - retourne le nouvel objet
//
// Un constructeur est conventionnellement appelé selon l'objet qu'il crée, et
// commence avec une lettre majuscule.


////////////////////////////////////////////////////////////////////////////////
// RESSOURCES
//
// - https://developer.mozilla.org/fr/docs/Learn/JavaScript/Objects/Basics
