import NextAuth from "next-auth";
import { authConfig} from "./auth.config";
import Credentials from 'next-auth/providers/credentials'
import type {User} from "@/app/lib/definitions"
import bcrypt from "bcrypt" 
import postgres from "postgres"

import {z} from 'zod'

const sql = postgres(process.env.DATABASE_URL!,{ssl:require})

async function getUser(email:string):Promise<User | null>{
  try{
    const users = await sql<User[]> `SELECT * FROM users WHERE email=${email} `
    return users[0] || null
  }
  catch(error){
    console.error("Error fetching user:",error)
    return null
  }
}

export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [Credentials({
    async authorize(credentials){
      const parsedCredentials = z.object({
        email: z.string().email(),
        password: z.string().min(6)
      }).safeParse(credentials);

      if (parsedCredentials.success) {
        const {email, password} = parsedCredentials.data
        const user = await getUser(email)
        if (!user) return null
        const passwordMatch = await bcrypt.compare(password, user.password)

        if (passwordMatch) return user
        return null
      }

      console.log("invalid credentials")
      return null
      
    }
   
  })],

});
