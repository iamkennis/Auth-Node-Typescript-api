import { omit } from "lodash";
import { DocumentDefinition } from "mongoose"
import User, { UserDocument } from "../model/userModel"


export async function createUser(input: DocumentDefinition<UserDocument>) {
    try {
        return await User.create(input);
    } catch (error: any | unknown) {
        throw new Error(error)
    }
}

function findUser() { }

export async function validatePassword({ email, password }: {
    email: UserDocument["email"];
    password: string
}) {
    const user = await User.findOne({ email })
    
    if (!user) {
        return false;
    }

    const isvalid = await user.comparePassword(password);

    if (!isvalid) {
        return false
    }

    return omit(user.toJSON(),"password")
}