function Bibl(n){
    let a = n;
    if(typeof a ==='string'){
        console.log('string');
    }
    else if(typeof a === 'number'){
        console.log('number');
    }
    else if(typeof a === 'object'){
        console.log('obj');
    }
}
module.exports=Bibl;