import 'next-auth'
import { User as PrismaUser } from '@prisma/client'

declare module 'next-auth' {
  export interface User extends PrismaUser {
    created_at?: Date | String
  }
}
