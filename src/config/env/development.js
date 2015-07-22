export default {
  api: {
    baseUrl: 'http://localhost:3000/api/'
  },
  auth: {
    google:{
      url: 'http://localhost:3000/auth/google',
      clientId: '599047877515-mqahp4fo89j1lt9mlnsg884sht1ijslk.apps.googleusercontent.com'
    },
    baseUrl : 'http://localhost:3000',
    tokenPrefix: 'Ambient',
    logoutRedirect: '/login'
  }
}
