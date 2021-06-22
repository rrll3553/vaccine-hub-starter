const { UnauthorizedError} = require("../utils/errors")

class User {
    static async login(credentials) {
    // user should submit email and pw 
    // if any fields are missing, throw an error 

    // lookup user in db by email
    // if user is found, compare submitted pw with pw in db 
    // if there is a match, return user 

    // if any of this goes wrong, throw an error 
    throw new UnauthorizedError("Invalid email/pw combo")
    }

    static async register(credentials) {
    // user should submit email, pw
    // if any field missing, throw an error 

    // check to see if the user already exist in db, if so throw an error 

    // take the user pw and hash it 
    // take the email and lowercase it 

    // create a new user in the db with all their info
    // return the user
    }
}

module.exports = User