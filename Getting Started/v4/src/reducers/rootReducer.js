const initState = {
    posts: [
        {id:'1',title:'Squirtle Laid an Egg',body:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga esse placeat eos! Molestiae asperiores perferendis doloribus tempora eligendi, obcaecati maiores id dolor, aperiam a pariatur aliquam deleniti quos, voluptatem sint.'},
        {id:'2',title:'Charmander Laid an Egg',body:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga esse placeat eos! Molestiae asperiores perferendis doloribus tempora eligendi, obcaecati maiores id dolor, aperiam a pariatur aliquam deleniti quos, voluptatem sint.'},
        {id:'3',title:'Metwo Laid an Egg',body:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga esse placeat eos! Molestiae asperiores perferendis doloribus tempora eligendi, obcaecati maiores id dolor, aperiam a pariatur aliquam deleniti quos, voluptatem sint.'}
    ]
}

const rootReducer = (state=initState,action) => {
    if (action.type==="DELETE_POST"){
        let newPosts = state.posts.filter(post =>{
            return post.id !== action.id
        })

        return {
          ...state,
          posts:newPosts
        }
        
        
    }
    return state;
}

export default rootReducer;