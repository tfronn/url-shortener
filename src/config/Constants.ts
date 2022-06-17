require('dotenv').config()
export const config = { 
  API_URL: "http://localhost:5000",
  MONGO_CONNECTION:`mongodb+srv://tfronn:${process.env.DB_KEY}@url-shortener-tfronn.hzl6w8h.mongodb.net/?retryWrites=true&w=majority`
}