var person = {
    _name: '',
    get name(){
        return this._name;
    },
    set name(n){
        this._name = n;
    }
}

function update(){
    console.log('修改了');
}