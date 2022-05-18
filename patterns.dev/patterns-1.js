// Using super 
// class Cookie {
//   constructor(flavor) {
//     this.flavor = flavor;
//   }

//   showTitle() {
//     console.log(`The flavor of this cookie is ${this.flavor}.`);
//   }
// }

// class FavoriteCookie extends Cookie {
//   showTitle() {
//     super.showTitle();
//     console.log(`${this.flavor} is amazing.`);
//   }
// }

// let myCookie = new FavoriteCookie('chocolate');
// myCookie.showTitle();

//-----------
// class CookieWithPrivateMethod {
//   #privateMethod() {
//     return 'delicious cookies';
//   }
  
//   getDescription() {
//     return this.#privateMethod();
//   }
// }

// const myCookie1 = new CookieWithPrivateMethod();
// console.log(myCookie1.getDescription());

// const arr = ['Tom', 1 , 'Bob', 2 , 'Semen'];

// function findNumber(array, num) {
//   array.forEach((element, i) => element === num ? console.log(i) : null);
// }

// findNumber(arr, 'Semen');

