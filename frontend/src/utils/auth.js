export function saveToken(t){ localStorage.setItem('vasundhara_token', t) }
export function getToken(){ return localStorage.getItem('vasundhara_token') }
export function removeToken(){ localStorage.removeItem('vasundhara_token') }
