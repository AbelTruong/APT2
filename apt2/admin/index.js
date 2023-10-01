import dotenv from 'dotenv'
import createError from 'http-errors'
import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import cookieParser from 'cookie-parser'
import logger from 'morgan'
import cors from 'cors'
import bodyParser from 'body-parser'

// Load environment variables
dotenv.config({ path: './../.env' })

// import routes
import uploadRoute from './backend/routes/upload.js'
import adminRoute from './backend/routes/index.js'

// lấy ra đường dẫn tới file index.js này
const __filename = fileURLToPath(import.meta.url)
// lấy ra đường dẫn tới cây thư mục làm việc /web
const __dirname = path.dirname(__filename)

console.log('__dirname :>> ', __dirname)

const PORT = process.env.BACKEND_PORT || 5000
const NODE_ENV = process.env.NODE_ENV || 'development'
console.log('NODE_ENV :>> ', NODE_ENV)

// create express app
const app = express()

/**
 * app.set(): thiết lập một số cấu hình cho ứng dụng
 * Ví dụ như biến môi trường, port, tệp dẫn tĩnh hoặc Views engine và bla bla...
 */
app.set('port', PORT)
app.set('views', path.join(__dirname, 'backend/views'))
app.set('view engine', 'pug')

/**
 * dùng để đăng ký một middleware vào ứng dụng
 * app.use([path], middleware): tham số path truyền vào để chỉ định apply một middleware vào một đường dẫn cụ thể
 * nếu không có tham số path thì apply middleware mặc định cho toàn bộ ứng dụng.
 */
app.use(cors())
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())

/**
 * parse application/x-www-form-urlencoded
 * Phân tích cú pháp của request gửi đến trong phần request.body
 * Chuyển đổi chúng (parse) thành một đối tượng js dễ sử dụng
 * { extended: false }: Chỉ parse các dữ liệu JSON, hoặc được mã hóa application/x-www-form-urlencoded
 * { extended: true }: parse hết tất cả đối tượng có thể có trong body
 */
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
/**
 * Chuyển đổi dữ liệu từ client gửi lên thành kiểu dữ liệu JSON.
 */
app.use(bodyParser.json())

/**
 * express.static() là một middleware trong express
 * phục vụ cac tài nguyên như css, js, image từ các thư mục tĩnh trên server.
 */
app.use(
  NODE_ENV === 'development'
    ? express.static(path.join(__dirname, 'public'))
    : express.static(path.join(__dirname, '..', 'web/frontend', 'dist', 'index.html'))
)

// upload routes
uploadRoute(app)

// admin routes
adminRoute(app)

// handle routes NOT FOUND
app.get('/*', function (req, res) {
  NODE_ENV === 'development'
    ? res.render('index', { title: 'Express' })
    : res.sendFile(path.join(__dirname, '..', 'web/frontend', 'dist', 'index.html'))
})

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404))
})

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render('error')
})

// start server
app.listen(PORT, () => {
  console.log(``)
  console.log(`-----------------------------------------------------------`)
  console.log(``)
  console.log(`     Run app: http://localhost:${PORT}/`)
  console.log(`     WELCOME TO ABEL'S BLOGS!!`)
  console.log(``)
  console.log(`-----------------------------------------------------------`)
  console.log(``)
})

export default app
