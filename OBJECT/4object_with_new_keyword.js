function employ(name, sername, workHour) {
    this.name = name;
    this.sername = sername;
    this.workHour = workHour;
}

let n = new employ("Nayan", "Patel", 6);
let j = new employ("Jignesh", "Vador", 6);

console.log(n);  // employ { name: 'Nayan', sername: 'Patel', workHour: 6 }
console.log(j.name);  // Jignesh