
let bankBranchInstance; //special variable to store the first intsance if it is created or exits

class BankBranch{
    constructor(branchInfo){
        if(bankBranchInstance == null){
            bankBranchInstance = this;
            this.branchInfo = branchInfo; //this constructor function is gonna return the same instance for ever...because of signleton ...

        }
        return bankBranchInstance//returning the instance if it exists /or created
    }
    getBranchInfo(){
        return this.branchInfo; ///this function is a getter method ...only way to access the info

    }
}
const branchA = new BankBranch('First Branch Created');
const branchB = new BankBranch('Second Branch Created') //they all gonna point to the same instance because of a sigleton pattern

console.log(branchA.getBranchInfo())
console.log(branchB.getBranchInfo())


console.log(branchA === branchB)//these  instance point to the same...because of a singleton Pattern







