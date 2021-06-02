export default class PasswordSchema {
    static schema = {
        name: 'Password',
        primaryKey: 'id',
        properties: {
            id: { type: 'int', indexed: true },
            name: 'string',
            address: 'string',
            user: 'string',
            password: 'string'
        }
    }
}