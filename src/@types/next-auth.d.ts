import 'next-auth'
import { User as PrismaUser } from '@prisma/client'

declare module 'next-auth' {
  interface User extends PrismaUser {
    created_at?: Date | String
  }

  interface Session {
    user: User
  }
}
