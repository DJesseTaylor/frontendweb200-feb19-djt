import { tassign } from 'tassign';

describe('immutability', () => {
  describe('with arrays', () => {
    it('addan item to an array', () => {
      const numbers = [1, 2, 3, 4, 5];

      const newNumbers = [...numbers, 6];

      expect(newNumbers).toEqual([1, 2, 3, 4, 5, 6]);
      expect(numbers).toEqual([1, 2, 3, 4, 5]);
    });
    it('removing an item from an array', () => {
      const numbers = [1, 2, 3, 4, 5];

      const newNumbers = numbers.filter(n => n !== 3);

      expect(newNumbers).toEqual([1, 2, 4, 5]);
    });
    it('combining', () => {
      const numbers = [1, 2, 3, 4, 5];
      const newNumbers = [...numbers.filter(n => n !== 3), 6];

      expect(newNumbers).toEqual([1, 2, 4, 5, 6]);
    });
  });

  describe('immutability with objects', () => {
    it('adding a property to an object', () => {
      const movie: any = {
        title: 'Thor Ragnorak',
        director: 'Taika waititi'
      };
      const newMovie = { ...movie, yearReleased: 2017 };

      expect(newMovie).toEqual({
        title: 'Thor Ragnorak',
        director: 'Taika waititi',
        yearReleased: 2017
      });
    });

    it('using a dictionary', () => {
      interface Task {
        id: string;
        description: string;
      }

      interface Dictionary<T> {
        [key: string]: T;
      }

      const tasks: Dictionary<Task> = {
        1: {
          id: '1',
          description: 'Clean Garage'
        },
        2: {
          id: '2',
          description: 'Change lightbulbs'
        }
      };

      const two = tasks['2'];

      const newTasks = { 185: { id: '185', description: 'Take boxes to recycling' }, ...tasks };
    });

    it('modifying a property of an object', () => {
      const movie = { title: 'Jaws', director: 'Spielberg', yearReleased: 1978 };

      // requires {} because it will modify the first element passed in in addition to returning the union of the objects
      // aslo can just added elements if you misspell.
      const fixedMovie = Object.assign({}, movie, { yearReleased: 1977 });

      expect(fixedMovie).toEqual({
        title: 'Jaws', director: 'Spielberg', yearReleased: 1977
      });
    });
    it('using tassign', () => {
      const movie = { title: 'Jaws', director: 'Spielberg', yearReleased: 1978 };

      // if you misspell the property it will fail.
      const fixedMovie = tassign(movie, { yearReleased: 1977 });

      expect(fixedMovie).toEqual({
        title: 'Jaws', director: 'Spielberg', yearReleased: 1977
      });
    });
  });
});
