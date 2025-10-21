class people {
    constructor(firstName, lastName, age, job) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.job = job
    }

    infoPeople() {
        Object.keys(this).forEach((pessoa) => {
            console.log(`${this[pessoa]}`)
        } )
    }
}

// npm init -y
// npm install --save-dev @babel/cli @babel/core @babel/preset-env 
// npx babel js/main.js -o js/bundle.js --presets=@babel/env      