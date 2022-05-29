/**
 * This file is auto-generated by nestjs-proto-gen-ts
 */

import { Observable } from 'rxjs';
import { Metadata } from '@grpc/grpc-js';

export interface AccountService {
  findOneByUid(data: UID, metadata?: Metadata): Observable<AccountInterface>;

  createAccount(
    data: CreateAccountInput,
    metadata?: Metadata,
  ): Observable<AffectedRows>;
}

// tslint:disable-next-line:no-empty-interface
export interface Empty {
}

export interface UID {
  UID?: string;
}

export interface AccountInterface {
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

export interface AffectedRows {
  AffectedRows?: number;
}

