```javascript
// Using $inc safely with conditional checks
db.collection('myCollection').updateOne({ name: 'John Doe' }, { $inc: { age: -1 } }, { upsert: false });
// Alternative to prevent negative age
db.collection('myCollection').updateOne(
  { name: 'John Doe' },
  {
    $inc: { age: -1 },
    $min: { age: 0 } // Prevents age from going below zero
  }
);
```