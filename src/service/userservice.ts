import { Injectable } from '@angular/core';

import { User } from 'src/model/user';


@Injectable()
export class UserService
{
    uarr=[
            new User("nisha","nisha123"),
            new User("nikita","nikita123"),
            new User("rohini","rohini123"),
            new User("rachana","rachana123")
        ];

    loginAuthentication():User[]
    {
        return this.uarr;
    }
}