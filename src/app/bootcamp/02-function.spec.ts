import { compose } from './compose';
import { formatName } from './utils';

describe('functions', () => {
  it('arbitrary number of parameters', () => {
    // ... means take all of the rest of the parameters and put them in an array named rest
    function add(a: number, b: number, ...rest: number[]): number {
      const firstTwo = a + b;
      return rest.reduce((prev, next) => prev + next, firstTwo);
    }

    expect(add(2, 2)).toBe(4);
    expect(add(2, 2, 4)).toBe(8);
    expect(add(2, 2, 4, 8, 16, 32)).toBe(64);
  });
  describe('function literals', () => {
    it('has a few kinds', () => {
      // Named function
      expect(add(3, 2)).toBe(5);

      function add(a: number, b: number): number {
        return a + b;
      }

      // anonymous function
      // IIFE- immediately invoked function expression
      /*(function () {
        console.log('In the IIFE');
        const name = 'Pete!';
      })();  This is fine code but cause a lint error that was pissing me off*/

      // anonymous function with a variable referring to it, using the phat arrow (lambda) operator.
      const multiply = (a: number, b: number) => a * b;

      expect(multiply(4, 5)).toBe(20);
    });
  });
});

describe('higher order function', () => {
  it('an example', () => {
    expect(formatName('Han', 'Solo')).toBe('Solo, Han');

    const makeFlashy = (n: string) => `***${n}***`;
    expect(formatName('Han', 'Solo', makeFlashy)).toBe('***Solo, Han***');

    const makeUpperCase = (n: string) => n.toUpperCase();

    expect(formatName('Han', 'Solo', makeUpperCase)).toBe('SOLO, HAN');

    const doBoth = compose(makeUpperCase, makeFlashy);

    expect(formatName('Han', 'Solo', doBoth)).toBe('***SOLO, HAN***');
  });
});

describe('practical', () => {
  interface Payments {
    date: string;
    amount: number;
    customer: string;
  }

  const payments: Payments[] = [
    { date: '1/1/2018', amount: 300, customer: 'Bob' },
    { date: '2/1/2018', amount: 150, customer: 'Bob' },
    { date: '3/1/2018', amount: 300, customer: 'Sue' },
    { date: '4/1/2018', amount: 440, customer: 'Bob' }
  ];

  it('Your practice', () => {
    interface Answer {
      total: number;
    }

    const getPayments = (prev: Answer, next: Payments) => {
      return { total: prev.total + next.amount };
    };

    const answer: Answer = {
      total: 0
    };
    answer.total = payments.filter((p) => p.customer === 'Bob').reduce(getPayments, { total: 0 }).total;

    expect(answer.total).toBe(890);

  });
});
