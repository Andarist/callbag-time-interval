# callbag-time-interval

Callbag operator which emits the value with time elapsed since last emission.

## Example

```js
import forEach from 'callbag-for-each'
import pipe from 'callbag-pipe'
import take from 'callbag-take'
import timer from 'callbag-timer'
import timeInterval from 'callbag-time-interval'

pipe(
  timer(100, 1000),
  timeInterval,
  take(5),
  forEach(value => {
    // will log:
    // [100, 0]
    // [1000, 1]
    // [1000, 2]
    // [1000, 3]
    // [1000, 4]
    console.log(value)
  }),
)
```
