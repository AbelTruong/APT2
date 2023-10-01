import Controller from '../controllers/auth.js'

export default function AuthRoutes(app) {
  app.get('/admin-management/login', Controller.login)
  app.get('/admin-management/logout', Controller.logout)
  app.get('/admin-management/register', Controller.register)
  app.get('/admin-management/refresh-token', Controller.login)
}
