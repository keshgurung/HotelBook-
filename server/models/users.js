import mongoose from 'mongoose'
import uniqueValidator from 'mongoose-unique-validator'
import bcrypt from 'bcrypt'

const userSchema = new mongoose.Schema(
  {
    username: { type: String, unique: true, required: true, maxlength: 30 },
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    stripe_account_id: '',
    stripe_seller: {},
    stripeSession: {},
  },
  { timestamps: true }
)

// REMOVE PASSWORD WHEN RETURNING USER AS JSON
userSchema.set('toJSON', {
  virtuals: true,
  transform(_doc, json) {
    delete json.password // delete password key from JSON object
    return json // return the rest of the object
  },
})

// VIRTUAL FIELD
userSchema.virtual('passwordConfirmation').set(function (passwordConfirmation) {
  this._passwordConfirmation = passwordConfirmation
})

// PRE-VALIDATION
userSchema.pre('validate', function (next) {
  if (
    this.isModified('password') &&
    this.password !== this._passwordConfirmation
  ) {
    this.invalidate('passwordConfirmation', 'Passwords do not match')
  }
  next()
})

// PRE-SAVE. Uses bcrypt to hash a plain text password
userSchema.pre('save', function (next) {
  if (this.isModified('password')) {
    this.password = bcrypt.hashSync(this.password, bcrypt.genSaltSync())
  }
  next()
})

userSchema.methods.validatePassword = function (password) {
  return bcrypt.compareSync(password, this.password)
}

userSchema.plugin(uniqueValidator)

export default mongoose.model('User', userSchema)
