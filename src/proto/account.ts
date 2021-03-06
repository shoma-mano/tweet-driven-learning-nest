/**
* This file is auto-generated by nestjs-proto-gen-ts
*/

import { Observable } from 'rxjs';
import { Metadata } from '@grpc/grpc-js';

export namespace account {
    export interface AccountService {
        findOneByUID(data: UID, metadata?: Metadata): Observable<Account>;
        createAccount(data: CreateAccountInput, metadata?: Metadata): Observable<common.AffectedRows>;
    }
    export interface UID {
        UID?: string;
    }
    export interface Account {
        ID?: number;
        UID?: string;
        Name?: string;
        Bio?: string;
    }
    export interface CreateAccountInput {
        UID?: string;
        Name?: string;
        Bio?: string;
    }
}
export namespace common {
    export interface AffectedRows {
        AffectedRows?: number;
    }
    // tslint:disable-next-line:no-empty-interface
    export interface Empty {
    }
}

