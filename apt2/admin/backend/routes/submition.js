import Controller from '../controllers/submition.js'

export default function SubmitRoutes(app) {
  app.get('/api/submit', Controller.submit)
}
