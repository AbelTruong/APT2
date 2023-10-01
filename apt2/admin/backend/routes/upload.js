import Controller from '../controllers/upload.js'
import MulterUpload from '../connector/multer/index.js'

export default function uploadRoute(app) {
  app.post('/uploads', MulterUpload.array('images', 10), Controller.upload)
}
