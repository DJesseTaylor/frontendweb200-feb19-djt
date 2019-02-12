describe('Declaring variables etc with TypeScript', () => {
  describe('eventual typing', () => {
    it('an example of eventual typing', () => {
      let age: number;

      age = 49;

      expect(age).toBe(49);
      expect(typeof age).toBe('number');

      // We cause compiler error because age is of type string (code will compile and run however)
      // age = 'Old';
      // expect(typeof age).toBe('string');
    });

    it('implicit typing', () => {
      let age = 49;

      expect(age).toBe(49);

      age = 50;
    });

    it('using const', () => {
      // automatically changes to a const from let when file saves because no value is ever assisgned
      const PI = 3.14159;

      expect(PI).toBe(3.14159);

      // This failes because you are reassigning the const
      // PI = 3;

      const FAVORITE_NUMBERS = [1, 12, 20, 108, 23];

      expect(FAVORITE_NUMBERS[1]).toBe(12);

      FAVORITE_NUMBERS[1] = 32;

      const movie = {
        title: 'Lego Movie 2'
      };

      // you can change what is in an objec or an array but what it is assigned to.
      // movie = { title: 'Thumbalina!'};

      movie.title = 'Thor';
    });
  });
});

describe('literals in typescript', () => {
  it('has number literals', () => {
    const first = 10;
    const second = 10.1;
    const salary = 1_000_000;
    const hex = 0xff;
    const binarayNumber = 0b1010101;
    const octal = 0o744;

    // first = 'tacos'; this fails
  });
  it('has boolean literals', () => {
    const isTrue = true;
    const isFalse = false;
  });
  it('some things about strings', () => {
    const myName = 'putintane'; // auto changes " to ' do to lint settings

    expect(`The name is ${myName}`).toBe('The name is putintane');
  });
  it('has array literals', () => {
    const things = [];
    things[0] = 'Morning';
    things[1] = 99;
    things[200] = things;

    const numbers: number[] = [];

    // numbers[0] = 'Red';
    numbers[0] = 12;

    // const settings: (boolean | string)[] = [];
    const settings: Array<boolean | string> = [];

    settings[0] = true;
    settings[1] = 'Hello';
    // settings[2] = 99;
  });
  describe('tuples', () => {
    it('making the case', () => {
      interface FormattedNameResult {
        fullName: string;
        numberOfLetters: number;
      }
      function formatName(first: string, last: string): FormattedNameResult {
        const fullName = `${last}, ${first}`;
        return {
          fullName,
          numberOfLetters: fullName.length
        };
      }

      const formattedName = formatName('Han', 'Solo');
      expect(formattedName.fullName).toBe('Solo, Han');
      expect(formattedName.numberOfLetters).toBe(9);
    });
    it('a couple pieces before we look at a tuple', () => {

      let d1: [boolean, string, string];
      d1 = [true, '12', 'cat'];

      type Person = [string, string, number, string];

      // type ThingyWithLettersInIt = string;

      // const name: ThingyWithLettersInIt = 'Jeff';

      const warren: Person = ['Warren', 'Ellis', 58, 'Musician'];


    });
    it('formatting a name with a tuple', () => {
      type FormattedNameResult = [string, number];
      function formatName(first: string, last: string): FormattedNameResult {
        const fullName = `${last}, ${first}`;
        return [fullName, fullName.length];
      }

      const answer = formatName('Luke', 'Skywalker');
      expect(answer[0]).toBe('Skywalker, Luke');
      expect(answer[1]).toBe(15);

      const [fn, len] = formatName('Han', 'Solo');
      expect(fn).toBe('Solo, Han');
      expect(len).toBe(9);
    });
  });
});

describe('object literals', () => {
  it('has them', () => {
    interface Person {
      firstName: string;
      lastName: string;
      age: number;
    }

    const joe: Person = {
      firstName: 'Joe',
      lastName: 'Schmidt',
      age: 53
    };

    const jesse: Person = {
      firstName: 'Jesse',
      lastName: 'Taylor',
      age: 27
    };

    joe.firstName = 'Joseph';
    // person.lastname = 'Cho'; typescript prevents you from creating the new property lastname.

    function getPersonInfo(person: Person): string {
      return `This person is ${person.firstName} and they are ${person.age}`;
    }
    console.log(getPersonInfo(jesse));

    const henry = {
      firstName: 'Henry',
      lastName: 'Gonzalez',
      age: 7,
      bday: '10/10/1980'
    };
    getPersonInfo(henry);
  });
  it('using a dictionary', () => {

    interface Actor {
      firstName: string;
      lastName: string;
      agent?: string;
    }
    interface Movie {
      title: string;
      director: string;
      yearReleased: number;
      cast: {
        [key: string]: Actor
      };
    }

    const movie: Movie = {
      title: 'Thor Ragnorak',
      director: 'Waititi',
      yearReleased: 2017,
      cast: {
        // tslint:disable-next-line:object-literal-key-quotes
        'Thor': { firstName: 'Chris', lastName: 'Hemsworth' },
        // tslint:disable-next-line:object-literal-key-quotes
        'Odin': { firstName: 'Anthony', lastName: 'Hopkins', agent: 'Smith' }
      }
    };

    // const actor = movie.cast.filter(cm => cm.role === 'Odin').map(m => m.actor)[0];
    // expect(actor).toBe('Hopkins');

    // tslint:disable-next-line:no-string-literal
    const actor = movie.cast['Odin'].lastName;
    expect(actor).toBe('Hopkins');

    const drStrange: Movie = {
      title: 'Doctor Strange',
      director: 'Smith',
      yearReleased: 2016,
      cast: {
        'Dr. Strange': { firstName: 'Benjamin', lastName: 'Cumberbath', agent: 'Jones' },
        'The Ancient One': { firstName: 'Tilda', lastName: 'Swinton' }
      }
    };
    expect(drStrange.cast['The Ancient One'].lastName).toBe('Swinton');

    interface Dictionary<T> {
      [key: string]: T;
    }

    // Parametric Polymorphism
    const decoder: Dictionary<number> = {
      one: 1,
      two: 2,
      three: 3
    };

    expect(decoder.one + decoder.two).toBe(3);

    type MathOperation = (a: number, b: number) => number;
    const calculator: Dictionary<MathOperation> = {
      add: (a, b) => a + b,
      subtract: (a, b) => a - b,
      multiply: (a, b) => a * b,
      divide: (a, b) => a / b,
      // add: (a, b) => a + b
    };

    expect(calculator.add(2, 3)).toBe(5);
    expect(calculator.multiply(3, 3)).toBe(9);
  });
});
