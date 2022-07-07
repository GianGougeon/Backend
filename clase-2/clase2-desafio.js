/* 
1. Declarar la clase Usuario
2. Declarar los atributos
3.  Hacer que Usuario cuente con los siguientes métodos:
    getFullName(): String. Retorna el completo del usuario. Utilizar template strings.
    addMascota(String): void. Recibe un nombre de mascota y lo agrega al array de mascotas.
    countMascotas(): Number. Retorna la cantidad de mascotas que tiene el usuario.
    addBook(String, String): void. Recibe un string 'nombre' y un string 'autor' y debe agregar un objeto: { nombre: String, autor: String } al array de libros.
    getBookNames(): String[]. Retorna un array con sólo los nombres del array de libros del usuario.  */

class Usuario {
    constructor(nombre, apellido) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = [];
        this.mascotas = [];
    }

    getFullName() {
        return `${this.nombre} ${this.apellido}`;
    }
    addMascota(mascota) {
        this.mascotas.push(mascota);
    }
    countMascotas() {
        return this.mascotas.length;
    }
    addBook(nombre, autor) {
        this.libros.push({
            nombre,
            autor
        });
    }
    getBookNames() {
        return this.libros.map(libro => libro.nombre);
    }
}

const user = new Usuario('Elon', 'Musk', [], []);
console.log(user.getFullName());
user.addMascota('gato');
user.addMascota('perro');
console.log(user.countMascotas());
user.addBook('Harry Potter', 'J.K. Rowling');
user.addBook('El señor de los anillos', 'J.R.R. Tolkien');
console.log(user.getBookNames());

console.log(user)