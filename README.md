# flux-capacitor
A time machine for JS objects

```
npm install --save mxm-flux-capacitor
```
...
```javascript
var FluxCapacitor = require('mxm-flux-capacitor');
var capacitor = new FluxCapacitor();

var obj = {some:'object'};

// Push the current state of obj to the capacitor
capacitor.charge(obj);

// Alter obj
obj.some = 'thing else';

// Push again
capacitor.charge(obj);
console.log(capacitor.charger); // [{some: 'object'}, {some: 'thing else'}]

// Revert to first state
obj = capacitor.back();
// or
obj = capacitor.jump(0);
console.log(obj); // {some: 'object'}

// Go forward again
obj = capacitor.forward();
// or
obj = capacitor.jump(capacitor.charger.length -1);
console.log(obj); // {some: 'thing else'}

// Get current year (index)
var current = capacitor.year; // Default: -1, no charges

// Set max number of objects to remember
capacitor.maxOverload = 20; // Default: 10

// Reset capacitor (delete all states)
capacitor.supercharge();
```
