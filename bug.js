```javascript
// Incorrect use of $inc operator
db.collection('myCollection').updateOne({ name: 'John Doe' }, { $inc: { age: -1 } });
```