import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { Observable } from "rxjs";

@Injectable()
export class Guard implements CanActivate{
    canActivate(context: ExecutionContext): boolean {
        console.log('Yeha se gujarna padega');
        return false;
    }

}