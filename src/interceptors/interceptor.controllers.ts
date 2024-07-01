// import { Controller, Get, Req, Res, UseInterceptors } from "@nestjs/common";
// import { request, response } from "express";
// import { Interceptor } from "./interceptor.Intercept";

// @Controller('intercept')
// @UseInterceptors(new Interceptor())
// export class InterceptorController{

//     @Get()
//     getAll(@Req() request, @Res() response ){
//         // return response.json({
//         //     msg : request.body
//         // })
//         console.log('In Controller');
//         return response.json({"data" : `Using Controller`});
//     }
// }