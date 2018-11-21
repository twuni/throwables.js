import { describe, expect, it } from '../spec.helpers';
import Throwable from '.';

describe('throwables/throwable', () => {
  it('is treated like a standard Error object', () => {
    expect(() => {
      throw new Throwable();
    }).to.throw(Error);
  });

  it('is an instance of the standard Error class', () => {
    expect(new Throwable()).to.be.an.instanceOf(Error);
  });

  it('has a stack trace', () => {
    expect(new Throwable()).to.have.property('stack');
  });

  describe('an inheriting class', () => {
    class ChildThrowable extends Throwable {
    }

    it('is treated like a standard Error object', () => {
      expect(() => {
        throw new ChildThrowable();
      }).to.throw(Error);
    });

    it('is an instance of the Throwable class', () => {
      expect(new ChildThrowable()).to.be.an.instanceOf(Throwable);
    });

    it('is an instance of the standard Error class', () => {
      expect(new ChildThrowable()).to.be.an.instanceOf(Error);
    });

    it('has a stack trace', () => {
      expect(new ChildThrowable()).to.have.property('stack');
    });
  });
});

