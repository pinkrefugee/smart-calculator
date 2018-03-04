class SmartCalculator {
  constructor(initialValue) {
    // your implementation
    this.value = initialValue.toString();
  }

  add(number) {
    // your implementation
    this.value += "+";
    this.value += number.toString();
    return this;
  }
  
  subtract(number) {
    // your implementation
    this.value += "-"; 
    this.value += number.toString();
    return this;
  }

  multiply(number) {
    // your implementation
    this.value += "*"; 
    this.value += number.toString();
    return this;
  }

  devide(number) {
    // your implementation
    this.value += "/" 
    this.value += number.toString();
    return this;
  }

  pow(number) {
    // your implementation
    this.value += "**" 
    this.value += number.toString();
    return this;
  }
  
  valueOf() {
    return eval(this.value);
  }
}

module.exports = SmartCalculator;
