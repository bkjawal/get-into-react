 class ToDo {
     constructor(title,id){
         this.id  = id || Math.random();//generate id
         this.title = title || '';
         this.isCompleted = false;
     }
 }
 
 export default class ToDoModel {
     
     constructor(){
         this.todos = []
         this.subscribers = [];
     }
     
     subscribe(callback){
         this.subscribers.push(callback);
         let unsubscribe = function(){
             this.subscribers = this.subscribers.filter(function(cb){
                 return cb !== callback;
             })
         }.bind(this)         
         return unsubscribe;         
     }
     inform(){
         this.subscribers.forEach(function(fun){
             if(typeof fun === 'function'){
                 setTimeout(function(){
                     fun();
                 },0)
             }             
         });
     }
     
     addTodo(title){
         this.todos.push(new ToDo(title));
         this.inform();
     }
     
     destroy(id){
          this.todos = this.todos.filter(function(todo){
             return todo.id !== id                
         });
         this.inform();
     }
     
     edit(id,title){
         this.todos = this.todos.map(function(todo){
             if(id === todo.id)
                todo.title = title;
             return todo;
         });
         this.inform();
     }
     
     markCompleted(id){
         this.todos = this.todos.map(function(todo){
             if(id === todo.id)
                todo.isCompleted = true;
             return todo;
         });
         this.inform();
     }
     
      markUnCompleted(id){
         this.todos = this.todos.map(function(todo){
             if(id === todo.id)
                todo.isCompleted = false;
             return todo;
         });
         this.inform();
     }
     
     markCompletedAll(){
         this.todos = this.todos.map(function(todo){
             todo.isCompleted = true;
         });
         this.inform();
     }
     
     toggle(id){
         this.todos = this.todos.map(function(todo){
             if(id === todo.id)
                 todo.isCompleted = !todo.isCompleted;
             return todo;
         });
         this.inform();
     }
     
     toggleAll(){
         this.todos = this.todos.map(function(todo){
             todo.isCompleted = !todo.isCompleted;
             return todo;
         });
         this.inform();
     }
     
     getAll(){
         return this.todos;
     }
     
     getActive(){
         return this.todos.filter(function(todo){
             return !todo.isCompleted;               
         });
     }
     
     getCompleted(){
         return this.todos.filter(function(todo){
             return todo.isCompleted;
         });
     }     
 }