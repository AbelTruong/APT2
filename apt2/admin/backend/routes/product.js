// import express from 'express'
import Controller from '../controllers/product.js'

export default function ProductRoutes(app) {
  app.get('/api/products', Controller.get)
}
