Why are Type Guards Necessary? Discuss Various Types of Type Guards and Their Use Cases.

=> Type guard in TypeScript help to check a variables type in code. By checking variables type it reduce the error of code make it smooth. Typescript allow to match specific type, its make easy to check complex type.

Types of type guard

1. (typeof) Type Guard
2. (instanceof) Type Guard
3. (in) Type Guard
4. (Union) Types Guard

1. (typeof) Type Guard
   =>The typeof operator is used to check primitive types like string, number, boolean, symbol, and undefined.It is useful when working with mixed-type variables where the type needs to be verified before.

Example : type AlphaNumeric = string | number;

    // typeof --> type guard
    const add = (param1 : AlphaNumeric, param2 : AlphaNumeric) : AlphaNumeric => {
        if(typeof param1 === "number" && typeof param2 === "number"){
            return param1 + param2;
        }
        else{
            return param1.toString() + param2.toString();
        }

    };

    const result1 = add(5,6);





2. (instanceof) Type Guard
   =>The instanceof type guard in TypeScript checks if an object belongs to a specific class. This is helpful when working with multiple classes.

   Example : class Animal {
        name : string;
        species : string;

        constructor(name : string, species : string){
            this.name = name;
            this.species = species;
        };

        makeSound(){
            console.log(`${this.name} make sound `)
        };
    };

    const isDog = (animal : Animal) : animal is Dogs => {
        return animal instanceof Dogs;
    };
    const isCat = (animal : Animal) : animal is Cats => {
        return animal instanceof Cats;
    };

    const getAnimal = (animal : Animal) => {
        if(isDog(animal)){
            console.log("it is a dog");
            animal.makeBark();
        }
        else if(isCat(animal)){
            console.log("it is a cat")
            animal.makeMeew();
        }
        else{
            console.log("it is a animal but dog or cat not");
            animal.makeSound();
        }
    };




3. (in) Type Guard
   =>The in operator checks if a specified property exists on an object.Useful when dealing with objects that may have different structures but share some common properties.

Example : type NormalUser = {
name : string;
};

    type Admin = {
        name : string;
        role : "admin";
    };

    const getUser = (user : NormalUser | Admin) => {
        if("role" in user){
            console.log("He Is Admin")
        }
        else{
            console.log("He Is User")
        }
    };

    const normalUser : NormalUser = {
        name : "Avijit Biswas";
    };
    const adminUser : Admin = {
        name : "Mr. X",
        role : "admin"
    };

    getUser(normalUser);
    getUser(adminUser);




4. (Union) Types Guard
   =>Union type is helpful when you have different types that share a common field, but the field has different values for each type.

   Example : type Circle = {
    shape: "circle";
    radius: number;
  };

  type Rectangle = {
    shape: "rectangle";
    width: number;
    height: number;
  };

  const calculateShapeArea = (shape: Circle | Rectangle): number => {
    if (shape.shape === "circle") {
      return Math.PI * shape.radius * shape.radius;
    } else if (shape.shape === "rectangle") {
      return shape.height * shape.width;
    } else {
      throw new Error("Unknown shape");
    }
  };

  const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });
  console.log(circleArea);

  const rectangleArea = calculateShapeArea({
    shape: "rectangle",
    width: 4,
    height: 6,
  });
  console.log(rectangleArea);


  
