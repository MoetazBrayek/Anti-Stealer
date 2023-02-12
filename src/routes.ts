import {createObjSpy,deleteObjSpy,getObjSpy,updateObjSpy,sendTelegram} from './functions.js';

import express from 'express';

const app = express();


// only about cards 

app.post('/cards', createObjSpy);

app.get('/cards', getObjSpy);

app.put('/cards/:id', updateObjSpy);

app.delete('/cards/:id', deleteObjSpy);

// send telegram message
app.post('/telegram', sendTelegram);
export default app;