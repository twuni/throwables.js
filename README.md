# Throwables.js

Extensible base classes for native JavaScript errors, providing
more general support for different types of throwable things, like
warnings, failures, and panic.

## Features

 * Satisfies `throwable instanceof Error`
 * Extensible via ES6 class inheritance (unlike the native `Error`)
 * Provides a stack trace (via the `#stack` property)
 * Set additional properties upon initialization (no need to initialize, mutate, then throw)
 * Cleaner code, by making it easy to pass along additional context with a thrown object

## Installing

### Yarn

```
$ yarn add @twuni/throwables
```

### NPM

```
$ npm install @twuni/throwables
```

## Usage

```javascript
import Failure from '@twuni/throwables/failure';

// Extend it like you would any other ES6 class
class AuthenticationFailure extends Failure {
  constructor(parameters = {}) {
    super({ message: 'Authentication failed', ...parameters });
  }
}

// Throw it like you would any other error
throw new AuthenticationFailure();
```
