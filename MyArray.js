
function MyArrayPrototype() {
    this.push = function () {
      for (let i = 0; i < arguments.length; i++) {
        this[this.length++] = arguments[i];
      }
      return this.length;
    };
    this.pop = function () {
      if (this.length === 0) {
        return;
      }
      const lastItem = this[this.length - 1];
      delete this[this.length - 1];
      this.length--;
      return lastItem;
    };
  
    this.some = function (funcCheck) {
      for (let index = 0; index < this.length; index++) {
        if (funcCheck(this[index]) === true) {
          return true;
        }
      }
      return false;
    };
  
    this.every = function (funcCheck) {
      for (let index = 0; index < this.length; index++) {
        if (funcCheck(this[index]) === false) {
          return false;
        }
      }
      return true;
    };
  
    this.forEach = function (funcWork) {
      for (let index = 0; index < this.length; index++) {
        funcWork(this[index]);
      }
    };
  
    this.filter = function (funcCheck) {

      const newArr = new MyArray(); 
      for (let index = 0; index < this.length; index++) {
        if (funcCheck(this[index])) {

          newArr.push(this[index]);
        }
      }
      return newArr;
    };
  
    this.map = function (funcWork) {
      const newArr = new MyArray(); 
      for (let index = 0; index < this.length; index++) {
    
        newArr.push(funcWork(this[index]));
      }
      return newArr; 
    };
  }
  
  function MyArray() {
    this.length = 0;
    if (arguments.length === 1) {
      for (let i = 0; i < arguments[0]; i++) {
        this.push(undefined);
      }
      return;
    }
    for (let i = 0; i < arguments.length; i++) {
      this.push(arguments[i]);
    }
  }
  MyArray.prototype = new MyArrayPrototype();
  
  const myArr = new MyArray();
  myArr.push(12, 14, 12);
  myArr.push(56);

  
  function logItem(v) {
    console.log(v);
  }

  const myArr2 = new MyArray();
