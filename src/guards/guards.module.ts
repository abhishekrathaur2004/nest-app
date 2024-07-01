import { Module } from "@nestjs/common";
import { GuardController } from "./guards.controller";


@Module({
    imports: [],
    controllers:[GuardController],
    providers:[],
})
export class GuardModule{
    constructor(){
        // console.log('Guard Module v chl gya')
    }
}