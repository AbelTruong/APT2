import ProductRoutes from './product.js'
import UserRoutes from './user.js'
import AuthRoutes from './auth.js'
import SubmitRoutes from './submition.js'

export default function adminRoute(app) {
  ProductRoutes(app)
  UserRoutes(app)
  AuthRoutes(app)
  SubmitRoutes(app)
}
