import { Req } from '@nestjs/common';
import { Controller, Get } from '@nestjs/common';
import { Request } from 'express';
let users=[{
    name:"Utsah",
    id:'1'

},
{
    name:"Sandeep",
    id:'2'

},
{
    name:"Akshay",
    id:'3'

}]
@Controller('user')

export class UserController {
   
    @Get()
    findAllUser(): Array<any> {
        
        return users;
      }
    @Get('userprofile')
    userInfo(@Req() request: Request): object {
        console.log(request.query)
        let userID =request.query.id
        let userInfo=users.filter(user=>{
            return user.id==userID;
        })
        return userInfo
        
      }
}
