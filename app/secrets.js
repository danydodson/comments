// secrets.js
const secrets = {
  // dbUri: process.env.DB_URI
  dbUri: 'mongodb+srv://danydodson:IZmJ5l8Qp357l6@working-egitb.mongodb.net/mern-comment-box-v2?retryWrites=true&w=majority'
}

export const getSecret = key => secrets[key]
