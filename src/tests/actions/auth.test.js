import { login, logout } from '../../actions/auth'

test('should call login action object', () => {
    const uid = '123qwe'
    const loginUser = login(uid)
    expect(loginUser).toEqual({
        type: 'LOGIN',
        uid: '123qwe'
    })
})

test('should call logout action object', () => {
    const login = logout()
    expect(login).toEqual({
        type: 'LOGOUT'
    })
})