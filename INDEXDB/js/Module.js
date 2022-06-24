const productdb =(dbname, table) =>{
    //CREATE DATABASE

    const db = new Dexie(dbname)
    db.version(1).stores(table);
    db.open();
    return db;
}

//INSERT FUNCTION
const bulkcreate =(dbtable, data) =>{
    empty(data);
    if(flag){
        dbtable.bulkAdd([data]);
        console.log("Data inserted successfully...")
    }else{
        console.log("Please Provide Data...")
    }
        return flag;
}

//CHECK TEXTBOX VALIDATION
const empty = object =>{
    let flag = false;

    for(const value in object){
        if(object[value]!="" && object.hasOwnProperty(value)){
            flag = true;
        }else{
            flag = false;
        }
    }   return flag;
}

export default productdb;
export {
    bulkcreate;
}