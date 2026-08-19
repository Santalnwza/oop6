class Employee{
    private _fistname: string;
    private _lastname: string;

    constructor(fname:string,lname:string){
        this._fistname = fname;
        this._lastname = lname;
    }

    get fullname():string{
        return`${this._fistname} ${this._lastname}`;
    }

    set fullname(name:string){
        const [fname,lname]= name.split(' ');
        this._fistname =fname;
        this._lastname =lname;
    }
}
const emp1 = new Employee("Natnaris","Sangrung");
console.log(emp1.fullname);
emp1.fullname = "Santa eiei";
console.log(emp1.fullname);

const emp2 = new Employee("Prayut","kondee");
console.log(emp2.fullname);