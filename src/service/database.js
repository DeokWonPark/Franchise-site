import firebaseDatabase from './firebase';
class Database{
    write(path,data){
        firebaseDatabase.ref(path).set(data);
    }

    remove(path){
        firebaseDatabase.ref(path).remove();
    }

    read(path,onUpdate){
        const readDB=firebaseDatabase.ref(path);
        readDB.on('value',(snapshot) => {
            const data=snapshot.val();
            data && onUpdate(data);
        });
        return ()=>{readDB.off();}
    }
}
export default Database;