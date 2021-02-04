export const increment = () => {
    return {
        type: 'INCREMENT'
    }
}

export const userAction = (data) => {
    return {
        type: 'USER_ADD',
        data: data
    }
}