const initialState = {
    region: 'ING'
};

export default function (state = initialState, action) {
    switch (action.tupe) {
        case 'CHANGE_REGION':
            return {
        ...state,
        region:action.payload,
            };
          
        default:
            return state;
    
    }

}