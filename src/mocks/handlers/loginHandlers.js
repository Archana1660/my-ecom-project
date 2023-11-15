import { http, HttpResponse } from 'msw';

export const handleLogin = http.post('https://fakestoreapi.com/auth/login', () => {
    return HttpResponse.json({
        token: "eyJhbGciOiJIUzI1NiIsInR"
    })
})
