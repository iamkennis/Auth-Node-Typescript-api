import { Request, Response } from 'express'
import { omit } from 'lodash'
import { createUser } from '../service/userService'
import log from '../logger'


export async function createUserHandler(req:Request, res: Response) {
    try {
			const user = await createUser(req.body);
			return res.send(omit(user.toJSON(), 'password'));
		} catch (e: any | unknown) {
			log.error(e);
			return res.status(409).send(e.message);
		}
}

export async function createUserSessionHandler(req: Request, res: Response) {
	
}