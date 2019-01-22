import Articles from './model'
import ArticlesPolicy from './policy'

const ArticlesController = {
    getAll(req,res){
        const { page, perPage,} = req.query 
        const articles = Articles.paginate({ },page, perPage)

        res.json({ articles})
    },

    get(req,res){
        
        res.json({ artcles: Articles.find(req.params.id) })
    },

    create(req,res){
        if(ArticlesPolicy.for('create', req.user)){
            const article = Articles.create(req.body)

        res.status(201).json(article)
        }
        else{
            res
                .status(401)
                .json({
                    artcles: {
                        errors:['You ar not allowed to create the articles.']
                    }
                })
        }
    },

    update(req, res){
        const id = req.params.id

        if(ArticlesPolicy.for('update', req.user , Articles.find(id))){
            const articles = Articles.update(id, req.body)

            res.status(200).json({ articles })
        }
        else{
            res
                .status(401)
                .json({
                    artcles: {
                        errors:['You ar not allowed to update the articles.']
                    }
                })
        }
    },

    destroy(req, res){
        const id = req.params.id

        if(ArticlesPolicy.for('destroy', req.user , Articles.find(id))){
            Articles.destroy(id)
            res.status(204)
        }
        else{
            res
                .status(401)
                .json({
                    artcles: {
                        errors:['You ar not allowed to delete the articles.']
                    }
                })
        }
    }
}



export default ArticlesController