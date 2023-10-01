import Controller from '../controllers/user.js'

export default function UserRoutes(app) {
  app.get('/api/users/get-all', Controller.getAll)
  app.get('/api/users', Controller.find)
  app.get('/api/users/count', Controller.count)
  app.get('/api/users/:id', Controller.findById)
  app.post('/api/users', Controller.create)
  app.put('/api/users/:id', Controller.update)
  app.delete('/api/users/:id', Controller.delete)
}
