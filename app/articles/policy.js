import Policy from '../policy'

const ArticlesPolicy = {
    ...Policy,
    
    create(user){
        return !!user
    },

    update(user, articles){
        return user && user.id === articles.authorId
    },

    destroy(user, artcles){
        return user && (user.isAdmin || user.id === articles.authorId)
    }
}

export default ArticlesPolicy