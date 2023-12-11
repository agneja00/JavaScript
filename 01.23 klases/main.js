// Sukurti klasę pavadinimu "Cylinder"
//  - Ji turi turėti 2 atributus, kuriuos gauna konstruktoriuje: "height" ir "radius"
//  - Ji turi turėti 2 metodus: "getVolume" ir "getSurfaceArea"
//     - "getVolume" metodas turi grąžinti cilindro turį. Formulė: "pi * radius * radius * height"
//     - "getSurfaceArea" metodas turi grąžinti cilindro paviršiaus plotą. Formulė: "2 * pi * radius * (radius + height)"

class Cylinder {
    constructor(height, radius) {
        this.height = height;
        this.radius = radius;
    }

    getVolume() {
        const turis = Math.PI * this.radius * this.radius * this.height;
        return turis;
    }

    getSurfaceArea() {
        const plotas = 2 * Math.PI * this.radius * (this.radius + this.height);
        return plotas;
    }
}
const cylinder = new Cylinder(2, 10);
console.log(cylinder.getSurfaceArea())

// Sukurti dvi klases:
//  - Knyga (Book)
//  - Biblioteka (Library)

// Klasės aprašymai:

// Knyga turi savybes: pavadinimas (string), autorius (string), puslapiu skaicius (number), metai (number), leidykla (string).

// Biblioteka turi savybes: pavadinimas (string), adresas (string), knygos (array).

// Biblioteka turi metodus:
//  - addBook(book) - prideda knyga i bibliotekos knygu sarasa

//  - removeBook(book) - istrina knyga is bibliotekos knygu saraso (jei nezinote kaip daryti - praleiskite)

//  - bookCount() - grazina bibliotekos knygu skaiciu

//  - bookList() - grazina bibliotekos knygu sarasa

//  - bookListByAuthor(author) - grazina bibliotekos knygu sarasa (array) pagal autoriu
//     /*
//      *
//      * Sufleris:
//      * for (let book in this.bookList) {
//      *    if (book.author === author) {
//      *        // ...sprendimas cia...
//      *    }
//      * }
//      *
//      */

//  - bookListByPublisher(publisher) - grazina bibliotekos knygu sarasa pagal leidykla
//     Identiskas sprendimas kaip ir bookListByAuthor(author)

//  - bookListByYear(year) - grazina bibliotekos knygu sarasa pagal metus
//     Identiskas sprendimas kaip ir bookListByAuthor(author)

//  - bookListWithPagesGreaterThan(pageCount) - grazina bibliotekos knygu sarasa su puslapiu skaiciumi didesniu uz pageCount

//  - bookListWithPagesLessThan(pageCount) - grazina bibliotekos knygu sarasa su puslapiu skaiciumi mazesniu uz pageCount

// Sukūrus klases sukurkite knygas:

// const hemingway = new Book('For Whom the Bell Tolls', 'Ernest Hemingway', 350, 1940, 'Charles Scribner\'s Sons');
// const tolkien = new Book('The Lord of the Rings', 'J. R. R. Tolkien', 1216, 1954, 'Allen & Unwin');
// const tolkien2 = new Book('The Hobbit', 'J. R. R. Tolkien', 310, 1937, 'Allen & Unwin');
// const tolkien3 = new Book('The Silmarillion', 'J. R. R. Tolkien', 400, 1977, 'Allen & Unwin');
// const orwell = new Book('1984', 'George Orwell', 328, 1949, 'Secker & Warburg');
// const orwell2 = new Book('Animal Farm', 'George Orwell', 112, 1945, 'Secker & Warburg');
// const remarque = new Book('All Quiet on the Western Front', 'Erich Maria Remarque', 352, 1929, 'Harcourt, Brace and Company');
// const remarque2 = new Book('Three Comrades', 'Erich Maria Remarque', 320, 1936, 'Harcourt, Brace and Company');
// const remarque3 = new Book('Arch of Triumph', 'Erich Maria Remarque', 320, 1945, 'Harcourt, Brace and Company');
// const remarque4 = new Book('The Road Back', 'Erich Maria Remarque', 320, 1954, 'Harcourt, Brace and Company');
// const herbert = new Book('Dune', 'Frank Herbert', 604, 1965, 'Chilton Books');
// const herbert2 = new Book('Dune Messiah', 'Frank Herbert', 512, 1969, 'Chilton Books');
// const herbert3 = new Book('Children of Dune', 'Frank Herbert', 512, 1976, 'Chilton Books');
// const herbert4 = new Book('God Emperor of Dune', 'Frank Herbert', 512, 1981, 'Chilton Books');

// Sukurkite biblioteką:

// const library = new Library('Biblioteka', 'Vilnius');

// ir į ją įdėkite knygas.

// Išbandykite bibliotekos metodus:

// console.log(library.bookCount()); // 14
// console.log(library.bookList()); // grazina visu knygu sarasa
// console.log(library.bookListByAuthor('J. R. R. Tolkien')); // grazina tolkien knygu sarasa
// console.log(library.bookListByPublisher('Allen & Unwin')); // grazina tolkien knygu sarasa
// console.log(library.bookListByYear(1949)); // grazina orwell knygu sarasa
// console.log(library.bookListWithPagesGreaterThan(500)); // grazina herbert knygu sarasa

/**
 * Knyga turi savybes:
 * pavadinimas (string),
 * autorius (string),
 * puslapiu skaicius (number),
 * metai (number),
 * leidykla (string).
 */

class Book {
    constructor(name, author, pageNumber, year, publisher) {
      // pavadinimas (string),
      this.name = name;
      // autorius (string),
      this.author = author;
      // puslapiu skaicius (number),
      this.pageNumber = pageNumber;
      // metai (number),
      this.year = year;
      // leidykla (string).
      this.publisher = publisher;
    }
  }
  
  /**
   * Biblioteka turi savybes: pavadinimas (string), adresas (string), knygos (array).
   */
  
  class Library {
    // kai nurodome argumentuose "argName = <reiksme>", jam nurodome numatytąją "default" reikšmę
    constructor(name, address, books = []) {
      this.name = name;
      this.address = address;
      this.books = [...books];
    }
  
    addBook(book) {
      this.books.push(book);
    }
  
    removeBook(book) {
      /**
       * books - [hemingway, herber4]
       * book - herbert4
       * result - [hemingway]
       */
      const result = [];
  
      for (let listBook of this.books) {
        if (listBook.name !== book.name) {
          result.push(listBook);
        }
      }
  
      this.books = result;
    }
  
    bookCount() {
      return this.books.length;
    }
  
    bookList() {
      return this.books;
    }
  
    bookListByAuthor(author /* string */) {
      // grazinti sarasa, kur autorius === book.author
  
      const result = [];
  
      for (let book of this.books) {
        if (book.author === author) {
          result.push(book);
        }
      }
  
      return result;
    }
  }
  
  const hemingway = new Book(
    "For Whom the Bell Tolls",
    "Ernest Hemingway",
    350,
    1940,
    "Charles Scribner's Sons"
  );
  console.log(hemingway);
  const tolkien = new Book(
    "The Lord of the Rings",
    "J. R. R. Tolkien",
    1216,
    1954,
    "Allen & Unwin"
  );
  console.log(tolkien);
  const tolkien2 = new Book(
    "The Hobbit",
    "J. R. R. Tolkien",
    310,
    1937,
    "Allen & Unwin"
  );
  const tolkien3 = new Book(
    "The Silmarillion",
    "J. R. R. Tolkien",
    400,
    1977,
    "Allen & Unwin"
  );
  const orwell = new Book("1984", "George Orwell", 328, 1949, "Secker & Warburg");
  const orwell2 = new Book(
    "Animal Farm",
    "George Orwell",
    112,
    1945,
    "Secker & Warburg"
  );
  const remarque = new Book(
    "All Quiet on the Western Front",
    "Erich Maria Remarque",
    352,
    1929,
    "Harcourt, Brace and Company"
  );
  const remarque2 = new Book(
    "Three Comrades",
    "Erich Maria Remarque",
    320,
    1936,
    "Harcourt, Brace and Company"
  );
  const remarque3 = new Book(
    "Arch of Triumph",
    "Erich Maria Remarque",
    320,
    1945,
    "Harcourt, Brace and Company"
  );
  const remarque4 = new Book(
    "The Road Back",
    "Erich Maria Remarque",
    320,
    1954,
    "Harcourt, Brace and Company"
  );
  const herbert = new Book("Dune", "Frank Herbert", 604, 1965, "Chilton Books");
  const herbert2 = new Book(
    "Dune Messiah",
    "Frank Herbert",
    512,
    1969,
    "Chilton Books"
  );
  const herbert3 = new Book(
    "Children of Dune",
    "Frank Herbert",
    512,
    1976,
    "Chilton Books"
  );
  const herbert4 = new Book(
    "God Emperor of Dune",
    "Frank Herbert",
    512,
    1981,
    "Chilton Books"
  );
  const initialBooks = [herbert4];
  
  const vilniausBiblioteka = new Library(
    "Martyno Mažvydo biblioteka",
    "kažkokia g.",
    initialBooks
  );
  
  vilniausBiblioteka.addBook(hemingway);
  vilniausBiblioteka.addBook(herbert3);
  vilniausBiblioteka.addBook(herbert2);
  vilniausBiblioteka.addBook(herbert);
  
  console.log(vilniausBiblioteka.bookCount(), vilniausBiblioteka.bookList());
  
  const list = vilniausBiblioteka.bookListByAuthor("Frank Herbert");
  console.log("LIST", list);

  
//   Sukurkime tris klases: produktai, krepselio produktai ir krepselis.

// Produktas turi savybes: id (number), pavadinimas (name), kaina (price), nuotraukos url (imagUrl), aprasymas(description) ir likutis(stock).
//  - id turi buti random sugeneruotas, kiekvienam produktui unikalus skaicius.
//     - šiam pratimui sukurkime produktus su id nuo 1 iki n. 

// Krepselio produktas turi savybes: pavadinimas(name), kaina(price), nuotraukos url(imageUrl), aprasymas(description), kiekis(quantity) ir visa suma (totalPrice).
// SVARBU!: likutis ir kiekis nėra tie patys atributai!
//     Krepselio produktas turi paveldimuma (extends) is produktu klases.
//     Krepselio produktas konstruktoriuje priima produkta (klase) ir kieki. new CartProduct(product, quantity)
//         jei kiekis yra didesnis uz produkto likuti, tai kiekis turi buti lygus produkto likuciui.

//     Krepselio produktas turi tris metodus:
//     1. didinti kieki (kiekis++)
//         - jis turi atnaujinti ir visa suma (totalPrice)
//     2. mažtinti kieki (kiekis--)
//         - jis turi atnaujinti ir visa suma (totalPrice)
//     3. nustatyti kieki (kiekis = number)
//         - jis turi atnaujinti ir visa suma (totalPrice)


// Krepselis turi savybes: krepselio produktus (cart products - array), bendra krepselio suma (totalCartPrice) ir bendra kiekis (totalCartQuantity).

// Krepselis turi metodus:
// 1. prideti produktus i krepseli (addProduct)
//     - jei krepselio produkto kiekis lygus 0, tai i krepseli preke neprisideda
//     - jei krepselyje jau yra toks produktas, tai turi didinti jo kieki
//     - atnaujinti bendra krepselio suma (totalCartPrice)
//     - atnaujinti bendra kieki (totalCartQuantity)
// 2. pasalinti produktus is krepselio (removeProduct)
//     - jei krepselyje yra toks produktas, tai turi mazinti jo kieki
//     - jei krepselyje yra toks produktas ir jo kiekis yra 0, tai turi pasalinti produktas is krepselio
//     - atnaujinti bendra krepselio suma (totalCartPrice)
//     - atnaujinti bendra kieki (totalCartQuantity)
// 3. pirkti produktus (buyProducts)
//     - console.log visus produktus
//     - console.log bendra krepselio suma (totalCartPrice)
//     - console.log bendra kieki (totalCartQuantity)
//     - turi pasalinti visus produktus is krepselio
//     - atnaujinti bendra krepselio suma (totalCartPrice)
//     - atnaujinti bendra kieki (totalCartQuantity)

// Produktu pavyzdiai su duomenimis:

// const products = [
//     {
//         id: 1,
//         name: 'Product 1',
//         price: 100,
//         imageUrl: 'https://picsum.photos/200/300',
//         description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies tincidunt, nunc nisl aliquam nisl, eget aliquam nisl nunc vel nisl. Donec auctor, nisl eget ultricies tincidunt, nunc nisl aliquam nisl, eget aliquam nisl nunc vel nisl.',
//         stock: 10
//     },
//     {
//         id: 2,
//         name: 'Product 2',
//         price: 200,
//         imageUrl: 'https://picsum.photos/200/300',
//         description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies tincidunt, nunc nisl aliquam nisl, eget aliquam nisl nunc vel nisl. Donec auctor, nisl eget ultricies tincidunt, nunc nisl aliquam nisl, eget aliquam nisl nunc vel nisl.',
//         stock: 20
//     },
//     {
//         id: 3,
//         name: 'Product 3',
//         price: 300,
//         imageUrl: 'https://picsum.photos/200/300',
//         description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies tincidunt, nunc nisl aliquam nisl, eget aliquam nisl nunc vel nisl. Donec auctor, nisl eget ultricies tincidunt, nunc nisl aliquam nisl, eget aliquam nisl nunc vel nisl.',
//         stock: 30
//     },
//     {
//         id: 4,
//         name: 'Product 4',
//         price: 400,
//         imageUrl: 'https://picsum.photos/200/300',
//         description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies tincidunt, nunc nisl aliquam nisl, eget aliquam nisl nunc vel nisl. Donec auctor, nisl eget ultricies tincidunt, nunc nisl aliquam nisl, eget aliquam nisl nunc vel nisl.',
//         stock: 40
//     },
// ];

// Sukurkime tris klases: produktai, krepselio produktai ir krepselis.

class Product {
    constructor(name, price, imageURL, description, stock) {
      this.id = Math.round(Math.random() * 10 ** 16);
      this.name = name;
      this.price = price;
      this.imageURL = imageURL;
      this.description = description;
      this.stock = stock;
    }
  }
  const exampleProduct = new Product(
    "A Book",
    24.99,
    "#",
    "A very good book",
    10
  );
  
  const exampleProduct2 = new Product(
    "A Bike",
    300.99,
    "#",
    "A very good bike",
    5
  );
  
  const exampleProduct3 = new Product(
    "Pillow",
    20.99,
    "#",
    "A very good pillow",
    200
  );
  
  class CartProduct extends Product {
    //
    constructor(product, quantity) {
      super(
        product.name,
        product.price,
        product.imageURL,
        product.description,
        product.stock
      );
  
      const validQty = quantity > product.stock ? product.stock : quantity;
  
      this.assignQuantityAndTotalPrice(validQty);
    }
  
    increaseCount() {
      const newQty = this.quantity + 1;
  
      if (newQty > this.stock) {
        return;
      }
  
      this.assignQuantityAndTotalPrice(newQty);
    }
  
    decreaseCount() {
      const newQty = this.quantity - 1;
  
      if (newQty < 0) {
        return;
      }
  
      this.assignQuantityAndTotalPrice(newQty);
    }
  
    assignQuantity(quantity) {
      if (quantity < 0 || quantity > this.stock) {
        return;
      }
  
      this.assignQuantityAndTotalPrice(quantity);
    }
  
    assignQuantityAndTotalPrice(quantity) {
      this.quantity = quantity;
      this.totalPrice = (this.price * 100 * quantity) / 100;
    }
  }
  
  const cartProduct = new CartProduct(exampleProduct, 9);
  const cartProduct2 = new CartProduct(exampleProduct2, 2);
  console.log(cartProduct.quantity); // 9
  
  cartProduct.increaseCount();
  console.log(cartProduct.quantity); // 10
  
  cartProduct.increaseCount();
  console.log(cartProduct.quantity); // 10
  
  cartProduct.decreaseCount();
  console.log(cartProduct.quantity); // 9
  
  cartProduct.assignQuantity(3);
  console.log(cartProduct.quantity); // 3
  
  class Cart {
    constructor() {
      this.products = [];
      this.totalCartPrice = 0;
      this.totalCartQuantity = 0;
    }
  
    addProduct(product) {
      /**
      1. prideti produktus i krepseli (addProduct)
      - jei krepselio produkto kiekis lygus 0, tai i krepseli preke neprisideda
      - jei krepselyje jau yra toks produktas, tai turi didinti jo kieki
      - atnaujinti bendra krepselio suma (totalCartPrice)
      - atnaujinti bendra kieki (totalCartQuantity)
       */
  
      let isAssignedQty = false;
      for (let innerProduct of this.products) {
        if (innerProduct.id === product.id) {
          const newQuantity = innerProduct.quantity + product.quantity;
          innerProduct.assignQuantity(newQuantity);
          isAssignedQty = true;
        }
      }
  
      if (!isAssignedQty) {
        this.products.push(product);
      }
  
      this.updateCartTotalPriceAndQuantity();
    }
  
    updateCartTotalPriceAndQuantity() {
      let newCartQty = 0;
      let newCartTotalPrice = 0;
  
      for (let product of this.products) {
        newCartTotalPrice += product.totalPrice * 100;
        newCartQty += product.quantity;
      }
  
      this.totalCartPrice = newCartTotalPrice / 100;
      this.totalCartQuantity = newCartQty;
    }
  }
  
  const myCart = new Cart();
  myCart.addProduct(cartProduct);
  myCart.addProduct(cartProduct);
  myCart.addProduct(cartProduct2);
  
  console.log(myCart);
  