import { Controller, Get, UseGuards } from "@nestjs/common";
import { Guard } from "./guards.guard";

@Controller('protected')
export class GuardController{

    @Get()
    @UseGuards(Guard)
    getAll(){
        return `Did you get everything? in protected room `
    }
}
