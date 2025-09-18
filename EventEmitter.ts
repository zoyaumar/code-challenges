class EventEmitter {
  private events = new Map<string, Function[]>();

  on(event: string, listener: Function) {
    if(this.events.has(event))
        this.events.get(event)?.push(listener)
    else
        this.events.set(event, [listener])
  }

  off(event: string, listener: Function) {
    if (this.events.get(event)!.includes(listener)){
        let index = this.events.get(event)!.indexOf(listener)
        this.events.get(event)!.splice(index, 1)
    }
  }

  emit(event: string, ...args: any[]) {
    let arr: Function[] | undefined = this.events.get(event) 
    for(let func of arr || []) func(args)
  }
}

// Example
const emitter = new EventEmitter();
const greet = (name: string) => console.log(`Hi ${name}`);
emitter.on("hello", greet);
emitter.emit("hello", "Alice"); // Hi Alice
emitter.off("hello", greet);
emitter.emit("hello", "Alice"); 

