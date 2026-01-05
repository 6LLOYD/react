type Person = {
  nom: string;
  prenom: string;
  age: number;
  oui: string;
};

type Exercice = {
  title: string;
  persons: Person[];
};
export const list: Exercice[] = [
  {
    title: "Exo 2",
    persons: [
      { nom: "Dupont", prenom: "Jean", age: 30, oui: "non" },
      { nom: "Durand", prenom: "Marie", age: 25, oui: "oui" },
      { nom: "Martin", prenom: "Paul", age: 40, oui: "non" },
      { nom: "Jean", prenom: "Léa", age: 26, oui: "oui" },
      { nom: "Heimmer", prenom: "Tibo", age: 35, oui: "oui" },
    ],
  },
];
