import { LeanDocument } from 'mongoose';
import config from "config"
import Session, { SessionDocument } from '../model/sessionModel'
import { UserDocument } from '../model/userModel';
import {sign} from "../utils/jwtUtils"

export async function createSession(userId: string, userAgent: String) {
    const session = await Session.create({ user: userId, userAgent })
    
    return session.toJSON();
}

export function createAccessToken({
	user,
	session,
}: {
	user:
		| Omit<UserDocument, 'password'>
		| LeanDocument<Omit<UserDocument, 'password'>>;
	session:
		| Omit<SessionDocument, 'password'>
		| LeanDocument<Omit<SessionDocument, 'password'>>;
    }) {
   // Build and return the new access token
    const accessToken = sign({...user, session: session._id },
        { expiresIn: config.get("accessTokenTtl") });
    
    return accessToken
}