`Observable` is a class inside `rxjs` (Reactive Exetension for javascript)  
`rxjs`: A library (stands for "Reactive Extensions for JavaScript"). It provides tools for reactive programming — mostly. Observables and operators (like map, filter, retry, etc.).
`Observable`: A class (or technically, a generic class) inside the rxjs library.  


> **An `Observable` is like a *stream* of data that can be observed over time.**  
`Observable<T>` are made to recieve request from backend with generic datatype  
The `Observable<T>` is a representation of what your Angular app expects to receive.  
The Observable is only responsible for handling the response (receiving data).  

It **emits values** (data) either **immediately** or **over time**, and you can **subscribe** to it to receive those values.

---

### Think of it like this:
- An `Observable` is like a *radio station* 🎙️.
- You (the subscriber) *tune into* the station to *receive broadcasts* (data).
- Until you **subscribe**, you don't get anything.

---

### In **Angular** and **RxJS**, you often use Observables for:
- **HTTP requests** (e.g., `this.http.get()` returns an Observable),
- **Form value changes**,
- **Button clicks or mouse events**,
- **WebSocket messages**,
- **Timers and intervals**,
- **Streams of data from services**.

---

### Example:

```typescript
import { Observable } from 'rxjs';

const myObservable = new Observable(observer => {
  observer.next('First value');  // send a value
  observer.next('Second value'); // send another
  observer.complete();           // finish the observable
});

// Subscribe to the Observable to start receiving values
myObservable.subscribe({
  next: (value) => console.log('Received:', value),
  complete: () => console.log('Completed'),
});
```

**Output:**
```
Received: First value
Received: Second value
Completed
```

---

### Why is it important?

- Observables let you **handle asynchronous operations** in a **powerful** and **flexible** way.
- They support things like **retrying**, **cancelling**, **combining streams**, **transforming data** (`map`, `filter`, etc.).