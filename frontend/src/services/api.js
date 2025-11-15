
const api = {
  post: (path, payload) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if(path === '/auth/login') {
        
          if(payload.email && payload.password) {
            const fakeToken = btoa(JSON.stringify({role:'user'})) 
            resolve({ data: { token: 'header.' + fakeToken + '.signature' } })
          } else {
            reject({ response:{ data:{ msg:'Invalid credentials' } } })
          }
        } else if(path === '/auth/register') {
          if(payload.email && payload.password) {
            resolve({ data: { msg: 'Registered' } })
          } else {
            reject({ response:{ data:{ msg:'Missing fields' } } })
          }
        } else {
          resolve({ data: {} })
        }
      }, 700)
    })
  }
}
export default api
