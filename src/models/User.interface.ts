interface User {
    id: number,
    name: string,
    username: string,
    address: {
        street: string
    }
    phone?: string,
}

export default User