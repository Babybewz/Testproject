const Finder ={
    where(condition) {
        const collection = this.collection()
        console.log(condition)
        return Object.keys(condition)
                    .reduce(
                        (result,key) => result.filter(item => item[key] == condition[key]),collection
                    )
    },

 

    findAll(){
        return this.collection()
    },


    find(id){
        return this.collection().find(record => record.id === +id)
    },

    findIndex(id) {
        return this.collection().findIndex(record => record.id === +id)
    }
}

export default Finder