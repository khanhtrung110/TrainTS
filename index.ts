//generics

const findItem = <T>(value: T[], index: number): T => {
    return value[index]
}

findItem<number>([1,2], 0)
interface ItemCart {
    name: string,
    price: number
}

class Cart<T> {
    public cart: T[] = []
    addTooCart(product: T) {
        this.cart.push(product);
    }
}

const CartTest = new Cart<ItemCart>;

CartTest.addTooCart({name: 'vitamin', price: 25})

// Keyof Type Operator
const getProperty = <Type, Key extends keyof Type>(obj: Type, key: Key)=> {
    return obj[key];
  }

let x = { a: 1, b: 2, c: 3, d: 4 };

getProperty(x, "a");
getProperty(x, "b");

//Typeof Type

const detectType = (value: number | string) => {
        if (typeof value == "string") {
            return value.toLowerCase();
        }
        return value + 2;
}

const detectTypeTwo = (value: object | string[] | null) => {
    if (value) {
        if (Array.isArray(value)) {
         value.forEach(ele => {
                console.log(ele);
            })
        }else {
          return Object.keys(value);
        }
    }else {
        console.log("No data");   
    }    
}

//Indexed Access
interface User {
    username: string,
    password: number
}

interface Admin extends User {
    isAdmin: boolean;
}

const findUser = (value: User['username']) => {
    //Call Api
}

type I1 = User[keyof User]; // string | number

type Flatten<T> = T extends any[] ? T[number] : T;

const data:Flatten<number[]> = 2;

// Conditional Types

interface NumericId {
    id: number
}

interface StringId {
    id: string
}

interface BooleanId {
    id: boolean
}

type ExtractIdType<T> = T extends {id: string | number} ? T["id"] : never

type NumericIdType = ExtractIdType<NumericId> // type NumericIdType = number
type StringIdType = ExtractIdType<StringId> // type StringIdType = string
type BooleanIdType = ExtractIdType<BooleanId> // type BooleanIdType = never

// Mapped Types

type OptionsFlags<Type> = {
    [Property in keyof Type]: boolean;
};
type Features = {
    darkMode: () => void;
    newUserProfile: () => void;
  };
type FeatureOptions = OptionsFlags<Features>; 
// type FeatureOptions = {
//     darkMode: boolean;
//     newUserProfile: boolean;
// }
//Modifier
// Removes 'readonly' attributes from a type's properties

type CreateMutable<Type> = {
    -readonly [Property in keyof Type]: Type[Property];
  };

type LockedAccount = {
    readonly id: string;
    readonly name: string;
};

type UnlockedAccount = CreateMutable<LockedAccount>;
// type UnlockedAccount = {
//     id: string;
//     name: string;
// }

type Getters<Type> = {
    [Property in keyof Type as `get${Capitalize<string & Property>}`]: () => Type[Property]
};
interface Person {
    name: string;
    age: number;
    location: string;
}
type LazyPerson = Getters<Person>;        
// type LazyPerson = {
//     getName: () => string;
//     getAge: () => number;
//     getLocation: () => string;
// }


// Template Literal
type EmailLocaleIDs = "welcome_email" | "email_heading";
type FooterLocaleIDs = "footer_title" | "footer_sendoff";
 
type AllLocaleIDs = `${EmailLocaleIDs | FooterLocaleIDs}_id`;
          
// type AllLocaleIDs = "welcome_email_id" | "email_heading_id" | "footer_title_id" | "footer_sendoff_id"

//Some information

interface Simple1 {name: string};
interface Simple2 extends Simple1 {age: number};
interface Simple2 {
    class: string
}

function logValue(x: Date | string) {
    if (x instanceof Date) {
      console.log(x.toUTCString());
    } else {
      console.log(x.toUpperCase());
    }
}

type Fish = { swim: () => void };
type Bird = { fly: () => void };
 
function move(animal: Fish | Bird ) {
  if ("swim" in animal) {
    return animal.swim();
  } else {
    return animal.fly();
  }
}