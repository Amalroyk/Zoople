var Person = {
    name: 'amal',
    display: function() {
        console.log(this.name);
    }
};

console.log(Person);
Person.display(); // This will log 'amal' to the console
