/**
 * Practice: Making methods
 *
 * - Create a method for each object property.
 * - The method receives a value to match the property to be changed.
 * - Create a simple function to replace the current property value with the received value.
 * - Test the method by sending new values and checking the properties in the console.
 */

const backpack = {
    name: "Everyday Backpack",
    volume: 30,
    color: "grey",
    pocketNum: 15,
    strapLength: {
      left: 26,
      right: 26,
    },
    toggleLid: function (lidStatus) {
      this.lidOpen = lidStatus;
    },
    newStrapLength: function (lengthLeft, lengthRight) {
      this.strapLength.left = lengthLeft;
      this.strapLength.right = lengthRight;
    },
    letNewName: function (newName) {
        this.name = newName;
    },
    letAge: function (newAge) {
        this.age = newAge;
    }
  };

  console.log("backpack before:", backpack.name)
  backpack.letNewName("oleg")
  console.log("backpack after:", backpack.name )


/**
 * Practice: Making classes and objects
 *
 * - Find a type of object you have more than one of in your house (eg. clothing, writing tools, etc).
 * - Create a class describing this object type - its properties and methods.
 * - Create several objects using the class.
 * - Test the objecs by calling their properties and using their methods in the console.
 */

class Backpack {
    constructor(
      name,
      volume,
      color,
      pocketNum,
      strapLengthL,
      strapLengthR,
      lidOpen,
      dateAcquired
    ) {
      this.name = name;
      this.volume = volume;
      this.color = color;
      this.pocketNum = pocketNum;
      this.strapLength = {
        left: strapLengthL,
        right: strapLengthR,
      };
      this.lidOpen = lidOpen;
      this.dateAcquired = dateAcquired;
    }
    toggleLid(lidStatus) {
      this.lidOpen = lidStatus;
    }
    newStrapLength(lengthLeft, lengthRight) {
      this.strapLength.left = lengthLeft;
      this.strapLength.right = lengthRight;
    }
    backpackAge() {
      let now = new Date();
      let acquired = new Date(this.dateAcquired);
      let elapsed = now - acquired; // elapsed time in milliseconds
      let daysSinceAcquired = Math.floor(elapsed / (1000 * 3600 * 24));
      return daysSinceAcquired;
    }
  }

class Jeans {
    constructor (
        size,
        color,
        brend,
        price,
    ) {
        this.size = size;
        this.color = color;
        this.brend = brend;
        this.price = price;
    }
}

const NewJeans = new Jeans (
    "xxl",
    "red",
    "CK",
    "199"
)
console.log(NewJeans)



/**
 * Challenge: Create a new object type
 * 
 * - Create a new object type "Book" using a class or an object constructor function.
 * - Add at least 5 book objects.
 */

class Book {
    constructor(
      title,
      author,
      ISBN,
      pubYear,
      pageNumber,
      currentPage,
      readStatus
    ) {
      this.title = title;
      this.author = author;
      this.ISBN = ISBN;
      this.pubYear = pubYear;
      this.pageNumber = pageNumber;
      this.currentPage = currentPage;
      this.readStatus = readStatus;
    }
    updateCurrentPage(newCurrentPage) {
      this.currentPage = newCurrentPage;
    }
    updateReadStatus(newReadStatus) {
      this.readStatus = newReadStatus;
    }
  }

  // Book param order: title, author, ISBN, pubYear, pageNumber, currentPage, readStatus
const surveillanceCapitalism = new Book(
    "The Age of Surveillance Capitalism",
    "Shoshana Zuboff",
    9781610395694,
    "2019",
    691,
    691,
    "Finished"
  );
  console.log(surveillanceCapitalism);
  
  const consciousCreative = new Book(
    "The Conscious Creative",
    "Kelly Small",
    9781487008024,
    "2020",
    216,
    216,
    "Finished"
  );
  console.log(consciousCreative);
  
  const techVirtues = new Book(
    "Technology and the Virtues",
    "Shannon Vallor",
    9780190905286,
    "2016",
    309,
    138,
    "Reading"
  )
  console.log(techVirtues);
  
  const poohPhil = new Book(
    "Pooh and the Philosophers",
    "John Tyerman Williams",
    9780749320706,
    "1995",
    192,
    108,
    "Reading"
  )
  console.log(poohPhil);
  
  const zen = new Book(
    "Zen and the Art of Motorcycle Maintenance",
    "Robert M. Pirsig",
    9780060958329,
    "1974",
    449,
    449,
    "Finished"
  )
  console.log(zen);
