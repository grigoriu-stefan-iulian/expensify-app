import authReducer from '../../reducers/auth'

test('should set auth reducer default state', () => {
    const auth = authReducer(undefined, { type: '@@INIT' })
    expect(auth).toEqual({})
})

test('should call the login case', () => {
    const action = {
        type: 'LOGIN',
        uid: '123qwe'
    }
    const state = authReducer({}, action)
    expect(state).toEqual({
        uid: '123qwe'
    })
})

test('should call the logout case', () => {
    const action = {
        type: 'LOGOUT'
    }
    const state = authReducer({ uid: 'some id' }, action)
    expect(state).toEqual({})
})