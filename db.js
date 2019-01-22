export default{
    
    categories:[
        {
            id:1,
            title: 'Languages'
        },
        {
            id:2,
            title: 'DevOps'
        },
        {
            id:3,
            title: 'Editors'
        }
    ],
    articles: [
        {
            id:1,
            title: 'Introduction to JavasScrpt',
            content: 'Lorem Ipsum',
            authorId:1,
            categoryId:1
        },
        {
            id:2,
            title: 'Introduction to Python',
            content: 'Lorem Ipsum',
            authorId:1,
            categoryId:1
        },
        {
            id:3,
            title: 'Introduction to Elixir',
            content: 'Lorem Ipsum',
            authorId:2,
            categoryId:2
        },
        {
            id:4,
            title: 'Introduction to Ruby',
            content: 'Lorem Ipsum',
            authorId:2,
            categoryId:1
        },
       
    ],
    users:[
        {
            id: 1,
            email: 'babelcoder@gmail.com',
            isAdmin:true,
            password: '$2a$12$.rjS5exZpVo3aC2TuRsV0'
        },{
            id: 1,
            email: 'somchat@haha.com',
            isAdmin:false,
            password: '$2a$12$.rjS5exZpVo3aC2TuRsV0'
        }
    ]



}
