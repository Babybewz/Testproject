import Serializer from '../serializer'
 
 
 const UserSerializer = {
        ...Serializer,
    
      get(resource){
          const {id , email ,isAdmin} = resource
          return { id,email,isAdmin}
      },

      getAll(users) {
          return users.map(user => this.seraillize(user))
      },
      create(user){
          return this.seraillize(user)
      },
      seraillize(user){
          const { id,email, isAdmin } = user

          return { id, email ,isAdmin}
      }

 }


 export default UserSerializer