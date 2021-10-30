import mongoose, { Schema } from 'mongoose';

const ScheSchema = new Schema({
  body: String,
  publishedDate: {
    type: Date,
    default: Date.now, // 현재 날짜를 기본 값으로 지정
  },
  user: {
    _id: mongoose.Types.ObjectId,
    username: String,
  },
  checked: {
    type: Boolean,
    default: false,
  },
});

const Sche = mongoose.model('Sche', ScheSchema);
export default Sche;
