import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: { type: String, unique: true, required: true},
  password: {type: String, required: true }
});

const userValidator = (user) => {
    return user!==null;
}

const passwordValidator = (password) => {
    if(password==null){return false}
    let passwordCheck = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    return passwordCheck.test(password);
}

UserSchema.path("username").validate(userValidator);
UserSchema.path("password").validate(passwordValidator);

export default mongoose.model('User', UserSchema);