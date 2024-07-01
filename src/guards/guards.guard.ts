import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { Request } from "express";

@Injectable()
export class Guard implements CanActivate {

    public key: string = 'asdfgh6754qw345r6t7y@#4';

    canActivate(context: ExecutionContext): boolean {
        const cxt = context.switchToHttp();
        const request = cxt.getRequest<Request>();

        const apiKey = request.headers['key'];

        if (apiKey === undefined) {
            return false;
        }

        return apiKey === this.key;
    }
}
