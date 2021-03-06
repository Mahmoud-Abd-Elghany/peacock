const INITIAL_STATE = [
    {
        title: 'Hats',
        imageURL: 'https://images.unsplash.com/photo-1465931577419-3e7f810dc552?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        id: 1,
        linkUrl: 'shop/hats'
    },
    {
        title: 'Jackets',
        imageURL: 'https://images.unsplash.com/photo-1587821100455-3c4313578ccb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=804&q=80',
        id: 2,
        linkUrl: 'shop/jackets'
    },
    {
        title: 'Sneakers',
        imageURL: 'https://images.unsplash.com/photo-1527431016-15eb83515018?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        id: 3,
        linkUrl: 'shop/sneakers'
    },
    {
        title: 'Men',
        imageURL: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        size: 'large',
        id: 4,
        linkUrl: 'shop/men'
    },
    {
        title: 'Women',
        imageURL: 'https://images.unsplash.com/photo-1518577915332-c2a19f149a75?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=784&q=80',
        size: 'large',
        id: 5,
        linkUrl: 'shop/women'
    }
];

const menuListReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        default:
            return state;
    }
}

export default menuListReducer