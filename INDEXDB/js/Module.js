const productdb =(dbname, table) =>{
    //CREATE DATABASE

    const db = new Dexie(dbname)
    db.version(1).stores(table);
    db.open();
    return db;
}

export default productdb;