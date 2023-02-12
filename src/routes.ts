import {createCard,deleteCard,getCards,updateCard,sendTelegram} from './functions.js';

import express from 'express';

const app = express();


// only about cards 

app.post('/cards', createCard);

app.get('/cards', getCards);

app.put('/cards/:id', updateCard);

app.delete('/cards/:id', deleteCard);

// send telegram message
app.post('/telegram', sendTelegram);
export default app;