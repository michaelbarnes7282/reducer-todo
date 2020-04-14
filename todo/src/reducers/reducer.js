
export const initialState = [
{
    item: 'Learn about reducers',
    completed: false,
    id: 3892987589
}]

export const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TODO':
        return [
          ...state,
          {
            item: action.payload,
            completed: false,
            id: new Date()
          }
        ];
  
       case 'TOGGLE_TODO':
        return state.map(item => {
            if (action.payload === item.id){
                return{
                    ...item,
                    completed: !item.completed
                };
            }
            return item;
        })

        case 'CLEAR_DONE':            
            return state.filter(item => !item.completed)
            
            
        
        default:
        return state;
    }
  };