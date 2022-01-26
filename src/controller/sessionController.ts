import { Request, Response } from "express";
import { validatePassword } from "../service/userService";
import {createSession,createAccessToken} from "../service/sessionService"
import config from "config";
import {sign} from "../utils/jwtUtils"

export async function createUserSessionHandler(req: Request, res: Response) {
    // validate the email and password
    const user = validatePassword(req.body);
    if (!user) {
        return res.status(401).send("Invalid username or password");
    }

    // Create a session
    const session = await createSession(user._id, req.get("user-agent") || "");

    const accessToken = createAccessToken({ user, session });

    const refreshToken = sign(session, {
        expiresIn: config.get("refreshTokenTtl")
    })

}