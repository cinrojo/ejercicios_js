/* Dado un array de objetos que representan libros, donde cada objeto tiene las propiedades titulo y autor, crea una función que utilice find para encontrar un libro con un autor específico y devolver ese libro.
 */
let libros = [
  { titulo: "Cien años de soledad", autor: "Gabriel García Márquez" },
  { titulo: "El señor de los anillos", autor: "J.R.R. Tolkien" },
  { titulo: "Orgullo y prejuicio", autor: "Jane Austen" },
  { titulo: "1984", autor: "George Orwell" },
  { titulo: "Harry Potter y la piedra filosofal", autor: "J.K. Rowling" },
  { titulo: "Don Quijote de la Mancha", autor: "Miguel de Cervantes" }
];

let libro_filtrado = libros.find ( libro => libro.titulo === "Cien años de soledad")
console.log("el libro buscado es", libro_filtrado)