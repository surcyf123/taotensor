import assert from 'assert'
import {Block, BlockContext, Chain, ChainContext, Option, Result, StorageBase} from './support'
import * as v120 from './v120'
import * as v121 from './v121'

export class AuraAuthoritiesStorage extends StorageBase {
    protected getPrefix() {
        return 'Aura'
    }

    protected getName() {
        return 'Authorities'
    }

    /**
     *  The current authority set.
     */
    get isV120(): boolean {
        return this.getTypeHash() === 'f5df25eadcdffaa0d2a68b199d671d3921ca36a7b70d22d57506dca52b4b5895'
    }

    /**
     *  The current authority set.
     */
    get asV120(): AuraAuthoritiesStorageV120 {
        assert(this.isV120)
        return this as any
    }
}

/**
 *  The current authority set.
 */
export interface AuraAuthoritiesStorageV120 {
    get(): Promise<Uint8Array[]>
}

export class AuraCurrentSlotStorage extends StorageBase {
    protected getPrefix() {
        return 'Aura'
    }

    protected getName() {
        return 'CurrentSlot'
    }

    /**
     *  The current slot of this block.
     * 
     *  This will be set in `on_initialize`.
     */
    get isV120(): boolean {
        return this.getTypeHash() === '95ff4f914f08e149ddbe1ae2dcb1743bbf9aaae69d04c486e1a398cacfcca06a'
    }

    /**
     *  The current slot of this block.
     * 
     *  This will be set in `on_initialize`.
     */
    get asV120(): AuraCurrentSlotStorageV120 {
        assert(this.isV120)
        return this as any
    }
}

/**
 *  The current slot of this block.
 * 
 *  This will be set in `on_initialize`.
 */
export interface AuraCurrentSlotStorageV120 {
    get(): Promise<bigint>
}

export class BalancesAccountStorage extends StorageBase {
    protected getPrefix() {
        return 'Balances'
    }

    protected getName() {
        return 'Account'
    }

    /**
     *  The Balances pallet example of storing the balance of an account.
     * 
     *  # Example
     * 
     *  ```nocompile
     *   impl pallet_balances::Config for Runtime {
     *     type AccountStore = StorageMapShim<Self::Account<Runtime>, frame_system::Provider<Runtime>, AccountId, Self::AccountData<Balance>>
     *   }
     *  ```
     * 
     *  You can also store the balance of an account in the `System` pallet.
     * 
     *  # Example
     * 
     *  ```nocompile
     *   impl pallet_balances::Config for Runtime {
     *    type AccountStore = System
     *   }
     *  ```
     * 
     *  But this comes with tradeoffs, storing account balances in the system pallet stores
     *  `frame_system` data alongside the account data contrary to storing account balances in the
     *  `Balances` pallet, which uses a `StorageMap` to store balances data only.
     *  NOTE: This is only used in the case that this pallet is used to store balances.
     */
    get isV120(): boolean {
        return this.getTypeHash() === 'dba1bfeb1258117ae732d6352c5990b0a43384798842bb1ba85a19e1c4e289aa'
    }

    /**
     *  The Balances pallet example of storing the balance of an account.
     * 
     *  # Example
     * 
     *  ```nocompile
     *   impl pallet_balances::Config for Runtime {
     *     type AccountStore = StorageMapShim<Self::Account<Runtime>, frame_system::Provider<Runtime>, AccountId, Self::AccountData<Balance>>
     *   }
     *  ```
     * 
     *  You can also store the balance of an account in the `System` pallet.
     * 
     *  # Example
     * 
     *  ```nocompile
     *   impl pallet_balances::Config for Runtime {
     *    type AccountStore = System
     *   }
     *  ```
     * 
     *  But this comes with tradeoffs, storing account balances in the system pallet stores
     *  `frame_system` data alongside the account data contrary to storing account balances in the
     *  `Balances` pallet, which uses a `StorageMap` to store balances data only.
     *  NOTE: This is only used in the case that this pallet is used to store balances.
     */
    get asV120(): BalancesAccountStorageV120 {
        assert(this.isV120)
        return this as any
    }
}

/**
 *  The Balances pallet example of storing the balance of an account.
 * 
 *  # Example
 * 
 *  ```nocompile
 *   impl pallet_balances::Config for Runtime {
 *     type AccountStore = StorageMapShim<Self::Account<Runtime>, frame_system::Provider<Runtime>, AccountId, Self::AccountData<Balance>>
 *   }
 *  ```
 * 
 *  You can also store the balance of an account in the `System` pallet.
 * 
 *  # Example
 * 
 *  ```nocompile
 *   impl pallet_balances::Config for Runtime {
 *    type AccountStore = System
 *   }
 *  ```
 * 
 *  But this comes with tradeoffs, storing account balances in the system pallet stores
 *  `frame_system` data alongside the account data contrary to storing account balances in the
 *  `Balances` pallet, which uses a `StorageMap` to store balances data only.
 *  NOTE: This is only used in the case that this pallet is used to store balances.
 */
export interface BalancesAccountStorageV120 {
    get(key: Uint8Array): Promise<v120.AccountData>
    getAll(): Promise<v120.AccountData[]>
    getMany(keys: Uint8Array[]): Promise<v120.AccountData[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v120.AccountData][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v120.AccountData][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v120.AccountData][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v120.AccountData][]>
}

export class BalancesInactiveIssuanceStorage extends StorageBase {
    protected getPrefix() {
        return 'Balances'
    }

    protected getName() {
        return 'InactiveIssuance'
    }

    /**
     *  The total units of outstanding deactivated balance in the system.
     */
    get isV120(): boolean {
        return this.getTypeHash() === '95ff4f914f08e149ddbe1ae2dcb1743bbf9aaae69d04c486e1a398cacfcca06a'
    }

    /**
     *  The total units of outstanding deactivated balance in the system.
     */
    get asV120(): BalancesInactiveIssuanceStorageV120 {
        assert(this.isV120)
        return this as any
    }
}

/**
 *  The total units of outstanding deactivated balance in the system.
 */
export interface BalancesInactiveIssuanceStorageV120 {
    get(): Promise<bigint>
}

export class BalancesLocksStorage extends StorageBase {
    protected getPrefix() {
        return 'Balances'
    }

    protected getName() {
        return 'Locks'
    }

    /**
     *  Any liquidity locks on some account balances.
     *  NOTE: Should only be accessed when setting, changing and freeing a lock.
     */
    get isV120(): boolean {
        return this.getTypeHash() === '1fd03ed79b885693f584f13fe463dfd4dff4135ad8a64aef22d7a9a4ed76b737'
    }

    /**
     *  Any liquidity locks on some account balances.
     *  NOTE: Should only be accessed when setting, changing and freeing a lock.
     */
    get asV120(): BalancesLocksStorageV120 {
        assert(this.isV120)
        return this as any
    }
}

/**
 *  Any liquidity locks on some account balances.
 *  NOTE: Should only be accessed when setting, changing and freeing a lock.
 */
export interface BalancesLocksStorageV120 {
    get(key: Uint8Array): Promise<v120.BalanceLock[]>
    getAll(): Promise<v120.BalanceLock[][]>
    getMany(keys: Uint8Array[]): Promise<v120.BalanceLock[][]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v120.BalanceLock[]][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v120.BalanceLock[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v120.BalanceLock[]][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v120.BalanceLock[]][]>
}

export class BalancesReservesStorage extends StorageBase {
    protected getPrefix() {
        return 'Balances'
    }

    protected getName() {
        return 'Reserves'
    }

    /**
     *  Named reserves on some account balances.
     */
    get isV120(): boolean {
        return this.getTypeHash() === '08a78bdfa0c3e61a3737bcbc0f929bb14b5531a416f88db7d077526cfac0d083'
    }

    /**
     *  Named reserves on some account balances.
     */
    get asV120(): BalancesReservesStorageV120 {
        assert(this.isV120)
        return this as any
    }
}

/**
 *  Named reserves on some account balances.
 */
export interface BalancesReservesStorageV120 {
    get(key: Uint8Array): Promise<v120.ReserveData[]>
    getAll(): Promise<v120.ReserveData[][]>
    getMany(keys: Uint8Array[]): Promise<v120.ReserveData[][]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v120.ReserveData[]][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v120.ReserveData[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v120.ReserveData[]][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v120.ReserveData[]][]>
}

export class BalancesTotalIssuanceStorage extends StorageBase {
    protected getPrefix() {
        return 'Balances'
    }

    protected getName() {
        return 'TotalIssuance'
    }

    /**
     *  The total units issued in the system.
     */
    get isV120(): boolean {
        return this.getTypeHash() === '95ff4f914f08e149ddbe1ae2dcb1743bbf9aaae69d04c486e1a398cacfcca06a'
    }

    /**
     *  The total units issued in the system.
     */
    get asV120(): BalancesTotalIssuanceStorageV120 {
        assert(this.isV120)
        return this as any
    }
}

/**
 *  The total units issued in the system.
 */
export interface BalancesTotalIssuanceStorageV120 {
    get(): Promise<bigint>
}

export class GrandpaCurrentSetIdStorage extends StorageBase {
    protected getPrefix() {
        return 'Grandpa'
    }

    protected getName() {
        return 'CurrentSetId'
    }

    /**
     *  The number of changes (both in terms of keys and underlying economic responsibilities)
     *  in the "set" of Grandpa validators from genesis.
     */
    get isV120(): boolean {
        return this.getTypeHash() === '95ff4f914f08e149ddbe1ae2dcb1743bbf9aaae69d04c486e1a398cacfcca06a'
    }

    /**
     *  The number of changes (both in terms of keys and underlying economic responsibilities)
     *  in the "set" of Grandpa validators from genesis.
     */
    get asV120(): GrandpaCurrentSetIdStorageV120 {
        assert(this.isV120)
        return this as any
    }
}

/**
 *  The number of changes (both in terms of keys and underlying economic responsibilities)
 *  in the "set" of Grandpa validators from genesis.
 */
export interface GrandpaCurrentSetIdStorageV120 {
    get(): Promise<bigint>
}

export class GrandpaNextForcedStorage extends StorageBase {
    protected getPrefix() {
        return 'Grandpa'
    }

    protected getName() {
        return 'NextForced'
    }

    /**
     *  next block number where we can force a change.
     */
    get isV120(): boolean {
        return this.getTypeHash() === 'a926ad48d1a07d1162c5fdb99f3f6cef39c7c5a115a92ff9ccf0357bae4bf2ed'
    }

    /**
     *  next block number where we can force a change.
     */
    get asV120(): GrandpaNextForcedStorageV120 {
        assert(this.isV120)
        return this as any
    }
}

/**
 *  next block number where we can force a change.
 */
export interface GrandpaNextForcedStorageV120 {
    get(): Promise<(number | undefined)>
}

export class GrandpaPendingChangeStorage extends StorageBase {
    protected getPrefix() {
        return 'Grandpa'
    }

    protected getName() {
        return 'PendingChange'
    }

    /**
     *  Pending change: (signaled at, scheduled change).
     */
    get isV120(): boolean {
        return this.getTypeHash() === 'd8fc2937fb26b147a79b5d1c609ef3bb0386ef95a7bac7b1d42b218773058c3b'
    }

    /**
     *  Pending change: (signaled at, scheduled change).
     */
    get asV120(): GrandpaPendingChangeStorageV120 {
        assert(this.isV120)
        return this as any
    }
}

/**
 *  Pending change: (signaled at, scheduled change).
 */
export interface GrandpaPendingChangeStorageV120 {
    get(): Promise<(v120.StoredPendingChange | undefined)>
}

export class GrandpaSetIdSessionStorage extends StorageBase {
    protected getPrefix() {
        return 'Grandpa'
    }

    protected getName() {
        return 'SetIdSession'
    }

    /**
     *  A mapping from grandpa set ID to the index of the *most recent* session for which its
     *  members were responsible.
     * 
     *  This is only used for validating equivocation proofs. An equivocation proof must
     *  contains a key-ownership proof for a given session, therefore we need a way to tie
     *  together sessions and GRANDPA set ids, i.e. we need to validate that a validator
     *  was the owner of a given key on a given session, and what the active set ID was
     *  during that session.
     * 
     *  TWOX-NOTE: `SetId` is not under user control.
     */
    get isV120(): boolean {
        return this.getTypeHash() === '2d385d75717e58066ac593e8c94f49e0ce544a47573cd5889073ca2ac7c97de9'
    }

    /**
     *  A mapping from grandpa set ID to the index of the *most recent* session for which its
     *  members were responsible.
     * 
     *  This is only used for validating equivocation proofs. An equivocation proof must
     *  contains a key-ownership proof for a given session, therefore we need a way to tie
     *  together sessions and GRANDPA set ids, i.e. we need to validate that a validator
     *  was the owner of a given key on a given session, and what the active set ID was
     *  during that session.
     * 
     *  TWOX-NOTE: `SetId` is not under user control.
     */
    get asV120(): GrandpaSetIdSessionStorageV120 {
        assert(this.isV120)
        return this as any
    }
}

/**
 *  A mapping from grandpa set ID to the index of the *most recent* session for which its
 *  members were responsible.
 * 
 *  This is only used for validating equivocation proofs. An equivocation proof must
 *  contains a key-ownership proof for a given session, therefore we need a way to tie
 *  together sessions and GRANDPA set ids, i.e. we need to validate that a validator
 *  was the owner of a given key on a given session, and what the active set ID was
 *  during that session.
 * 
 *  TWOX-NOTE: `SetId` is not under user control.
 */
export interface GrandpaSetIdSessionStorageV120 {
    get(key: bigint): Promise<(number | undefined)>
    getAll(): Promise<number[]>
    getMany(keys: bigint[]): Promise<(number | undefined)[]>
    getKeys(): Promise<bigint[]>
    getKeys(key: bigint): Promise<bigint[]>
    getKeysPaged(pageSize: number): AsyncIterable<bigint[]>
    getKeysPaged(pageSize: number, key: bigint): AsyncIterable<bigint[]>
    getPairs(): Promise<[k: bigint, v: number][]>
    getPairs(key: bigint): Promise<[k: bigint, v: number][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: bigint, v: number][]>
    getPairsPaged(pageSize: number, key: bigint): AsyncIterable<[k: bigint, v: number][]>
}

export class GrandpaStalledStorage extends StorageBase {
    protected getPrefix() {
        return 'Grandpa'
    }

    protected getName() {
        return 'Stalled'
    }

    /**
     *  `true` if we are currently stalled.
     */
    get isV120(): boolean {
        return this.getTypeHash() === '3b9e892deedcedebca6cccb95fac40be1ea485932811a2dcae3ec80a6b871360'
    }

    /**
     *  `true` if we are currently stalled.
     */
    get asV120(): GrandpaStalledStorageV120 {
        assert(this.isV120)
        return this as any
    }
}

/**
 *  `true` if we are currently stalled.
 */
export interface GrandpaStalledStorageV120 {
    get(): Promise<([number, number] | undefined)>
}

export class GrandpaStateStorage extends StorageBase {
    protected getPrefix() {
        return 'Grandpa'
    }

    protected getName() {
        return 'State'
    }

    /**
     *  State of the current authority set.
     */
    get isV120(): boolean {
        return this.getTypeHash() === '7e7a7e0912740b55ac7227f3f2a3612d23a3fefb1cd7f6da52f12f322350a0ce'
    }

    /**
     *  State of the current authority set.
     */
    get asV120(): GrandpaStateStorageV120 {
        assert(this.isV120)
        return this as any
    }
}

/**
 *  State of the current authority set.
 */
export interface GrandpaStateStorageV120 {
    get(): Promise<v120.StoredState>
}

export class RandomnessCollectiveFlipRandomMaterialStorage extends StorageBase {
    protected getPrefix() {
        return 'RandomnessCollectiveFlip'
    }

    protected getName() {
        return 'RandomMaterial'
    }

    /**
     *  Series of block headers from the last 81 blocks that acts as random seed material. This
     *  is arranged as a ring buffer with `block_number % 81` being the index into the `Vec` of
     *  the oldest hash.
     */
    get isV120(): boolean {
        return this.getTypeHash() === 'f5df25eadcdffaa0d2a68b199d671d3921ca36a7b70d22d57506dca52b4b5895'
    }

    /**
     *  Series of block headers from the last 81 blocks that acts as random seed material. This
     *  is arranged as a ring buffer with `block_number % 81` being the index into the `Vec` of
     *  the oldest hash.
     */
    get asV120(): RandomnessCollectiveFlipRandomMaterialStorageV120 {
        assert(this.isV120)
        return this as any
    }
}

/**
 *  Series of block headers from the last 81 blocks that acts as random seed material. This
 *  is arranged as a ring buffer with `block_number % 81` being the index into the `Vec` of
 *  the oldest hash.
 */
export interface RandomnessCollectiveFlipRandomMaterialStorageV120 {
    get(): Promise<Uint8Array[]>
}

export class SubtensorModuleActiveStorage extends StorageBase {
    protected getPrefix() {
        return 'SubtensorModule'
    }

    protected getName() {
        return 'Active'
    }

    get isV120(): boolean {
        return this.getTypeHash() === 'ffe2782ffdb70d89dbfad4a610e25e5e186b5b8254437895d78f2561ba5f42fc'
    }

    get asV120(): SubtensorModuleActiveStorageV120 {
        assert(this.isV120)
        return this as any
    }
}

export interface SubtensorModuleActiveStorageV120 {
    get(key: number): Promise<boolean[]>
    getAll(): Promise<boolean[][]>
    getMany(keys: number[]): Promise<boolean[][]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: boolean[]][]>
    getPairs(key: number): Promise<[k: number, v: boolean[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: boolean[]][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: boolean[]][]>
}

export class SubtensorModuleActivityCutoffStorage extends StorageBase {
    protected getPrefix() {
        return 'SubtensorModule'
    }

    protected getName() {
        return 'ActivityCutoff'
    }

    get isV120(): boolean {
        return this.getTypeHash() === '9e7908b8124823e36125c1c3c4eeb83bc98bf3a24d470648d5614f9fff471ed9'
    }

    get asV120(): SubtensorModuleActivityCutoffStorageV120 {
        assert(this.isV120)
        return this as any
    }
}

export interface SubtensorModuleActivityCutoffStorageV120 {
    get(key: number): Promise<number>
    getAll(): Promise<number[]>
    getMany(keys: number[]): Promise<number[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: number][]>
    getPairs(key: number): Promise<[k: number, v: number][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: number][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: number][]>
}

export class SubtensorModuleAdjustmentIntervalStorage extends StorageBase {
    protected getPrefix() {
        return 'SubtensorModule'
    }

    protected getName() {
        return 'AdjustmentInterval'
    }

    get isV120(): boolean {
        return this.getTypeHash() === '9e7908b8124823e36125c1c3c4eeb83bc98bf3a24d470648d5614f9fff471ed9'
    }

    get asV120(): SubtensorModuleAdjustmentIntervalStorageV120 {
        assert(this.isV120)
        return this as any
    }
}

export interface SubtensorModuleAdjustmentIntervalStorageV120 {
    get(key: number): Promise<number>
    getAll(): Promise<number[]>
    getMany(keys: number[]): Promise<number[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: number][]>
    getPairs(key: number): Promise<[k: number, v: number][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: number][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: number][]>
}

export class SubtensorModuleAxonsStorage extends StorageBase {
    protected getPrefix() {
        return 'SubtensorModule'
    }

    protected getName() {
        return 'Axons'
    }

    get isV120(): boolean {
        return this.getTypeHash() === '7bb793ae97d6179030bb9d2f2b5de731a1d99d443b274f7d5c56d02cb1eb547c'
    }

    get asV120(): SubtensorModuleAxonsStorageV120 {
        assert(this.isV120)
        return this as any
    }
}

export interface SubtensorModuleAxonsStorageV120 {
    get(key1: number, key2: Uint8Array): Promise<(v120.AxonInfo | undefined)>
    getAll(): Promise<v120.AxonInfo[]>
    getMany(keys: [number, Uint8Array][]): Promise<(v120.AxonInfo | undefined)[]>
    getKeys(): Promise<[number, Uint8Array][]>
    getKeys(key1: number): Promise<[number, Uint8Array][]>
    getKeys(key1: number, key2: Uint8Array): Promise<[number, Uint8Array][]>
    getKeysPaged(pageSize: number): AsyncIterable<[number, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: number): AsyncIterable<[number, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: number, key2: Uint8Array): AsyncIterable<[number, Uint8Array][]>
    getPairs(): Promise<[k: [number, Uint8Array], v: v120.AxonInfo][]>
    getPairs(key1: number): Promise<[k: [number, Uint8Array], v: v120.AxonInfo][]>
    getPairs(key1: number, key2: Uint8Array): Promise<[k: [number, Uint8Array], v: v120.AxonInfo][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [number, Uint8Array], v: v120.AxonInfo][]>
    getPairsPaged(pageSize: number, key1: number): AsyncIterable<[k: [number, Uint8Array], v: v120.AxonInfo][]>
    getPairsPaged(pageSize: number, key1: number, key2: Uint8Array): AsyncIterable<[k: [number, Uint8Array], v: v120.AxonInfo][]>
}

export class SubtensorModuleBlockAtRegistrationStorage extends StorageBase {
    protected getPrefix() {
        return 'SubtensorModule'
    }

    protected getName() {
        return 'BlockAtRegistration'
    }

    get isV120(): boolean {
        return this.getTypeHash() === '46a856e1824ed949deb7b9d41315549083bd450942b32a000514dbe27ca1168e'
    }

    get asV120(): SubtensorModuleBlockAtRegistrationStorageV120 {
        assert(this.isV120)
        return this as any
    }
}

export interface SubtensorModuleBlockAtRegistrationStorageV120 {
    get(key1: number, key2: number): Promise<bigint>
    getAll(): Promise<bigint[]>
    getMany(keys: [number, number][]): Promise<bigint[]>
    getKeys(): Promise<[number, number][]>
    getKeys(key1: number): Promise<[number, number][]>
    getKeys(key1: number, key2: number): Promise<[number, number][]>
    getKeysPaged(pageSize: number): AsyncIterable<[number, number][]>
    getKeysPaged(pageSize: number, key1: number): AsyncIterable<[number, number][]>
    getKeysPaged(pageSize: number, key1: number, key2: number): AsyncIterable<[number, number][]>
    getPairs(): Promise<[k: [number, number], v: bigint][]>
    getPairs(key1: number): Promise<[k: [number, number], v: bigint][]>
    getPairs(key1: number, key2: number): Promise<[k: [number, number], v: bigint][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [number, number], v: bigint][]>
    getPairsPaged(pageSize: number, key1: number): AsyncIterable<[k: [number, number], v: bigint][]>
    getPairsPaged(pageSize: number, key1: number, key2: number): AsyncIterable<[k: [number, number], v: bigint][]>
}

export class SubtensorModuleBlockEmissionStorage extends StorageBase {
    protected getPrefix() {
        return 'SubtensorModule'
    }

    protected getName() {
        return 'BlockEmission'
    }

    get isV120(): boolean {
        return this.getTypeHash() === '95ff4f914f08e149ddbe1ae2dcb1743bbf9aaae69d04c486e1a398cacfcca06a'
    }

    get asV120(): SubtensorModuleBlockEmissionStorageV120 {
        assert(this.isV120)
        return this as any
    }
}

export interface SubtensorModuleBlockEmissionStorageV120 {
    get(): Promise<bigint>
}

export class SubtensorModuleBlocksSinceLastStepStorage extends StorageBase {
    protected getPrefix() {
        return 'SubtensorModule'
    }

    protected getName() {
        return 'BlocksSinceLastStep'
    }

    get isV120(): boolean {
        return this.getTypeHash() === 'd3e59d805c520391cc625ad2bf03c6f9aa8ff3a07b1e6c16d11a34fd9c5392a9'
    }

    get asV120(): SubtensorModuleBlocksSinceLastStepStorageV120 {
        assert(this.isV120)
        return this as any
    }
}

export interface SubtensorModuleBlocksSinceLastStepStorageV120 {
    get(key: number): Promise<bigint>
    getAll(): Promise<bigint[]>
    getMany(keys: number[]): Promise<bigint[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: bigint][]>
    getPairs(key: number): Promise<[k: number, v: bigint][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: bigint][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: bigint][]>
}

export class SubtensorModuleBondsStorage extends StorageBase {
    protected getPrefix() {
        return 'SubtensorModule'
    }

    protected getName() {
        return 'Bonds'
    }

    get isV120(): boolean {
        return this.getTypeHash() === '3d36a1ff6bd0385d642d961841d4d795ce0b4ecc2dc51528fe95536753d59aab'
    }

    get asV120(): SubtensorModuleBondsStorageV120 {
        assert(this.isV120)
        return this as any
    }
}

export interface SubtensorModuleBondsStorageV120 {
    get(key1: number, key2: number): Promise<[number, number][]>
    getAll(): Promise<[number, number][][]>
    getMany(keys: [number, number][]): Promise<[number, number][][]>
    getKeys(): Promise<[number, number][]>
    getKeys(key1: number): Promise<[number, number][]>
    getKeys(key1: number, key2: number): Promise<[number, number][]>
    getKeysPaged(pageSize: number): AsyncIterable<[number, number][]>
    getKeysPaged(pageSize: number, key1: number): AsyncIterable<[number, number][]>
    getKeysPaged(pageSize: number, key1: number, key2: number): AsyncIterable<[number, number][]>
    getPairs(): Promise<[k: [number, number], v: [number, number][]][]>
    getPairs(key1: number): Promise<[k: [number, number], v: [number, number][]][]>
    getPairs(key1: number, key2: number): Promise<[k: [number, number], v: [number, number][]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [number, number], v: [number, number][]][]>
    getPairsPaged(pageSize: number, key1: number): AsyncIterable<[k: [number, number], v: [number, number][]][]>
    getPairsPaged(pageSize: number, key1: number, key2: number): AsyncIterable<[k: [number, number], v: [number, number][]][]>
}

export class SubtensorModuleBondsMovingAverageStorage extends StorageBase {
    protected getPrefix() {
        return 'SubtensorModule'
    }

    protected getName() {
        return 'BondsMovingAverage'
    }

    get isV120(): boolean {
        return this.getTypeHash() === 'd3e59d805c520391cc625ad2bf03c6f9aa8ff3a07b1e6c16d11a34fd9c5392a9'
    }

    get asV120(): SubtensorModuleBondsMovingAverageStorageV120 {
        assert(this.isV120)
        return this as any
    }
}

export interface SubtensorModuleBondsMovingAverageStorageV120 {
    get(key: number): Promise<bigint>
    getAll(): Promise<bigint[]>
    getMany(keys: number[]): Promise<bigint[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: bigint][]>
    getPairs(key: number): Promise<[k: number, v: bigint][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: bigint][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: bigint][]>
}

export class SubtensorModuleBurnStorage extends StorageBase {
    protected getPrefix() {
        return 'SubtensorModule'
    }

    protected getName() {
        return 'Burn'
    }

    get isV120(): boolean {
        return this.getTypeHash() === 'd3e59d805c520391cc625ad2bf03c6f9aa8ff3a07b1e6c16d11a34fd9c5392a9'
    }

    get asV120(): SubtensorModuleBurnStorageV120 {
        assert(this.isV120)
        return this as any
    }
}

export interface SubtensorModuleBurnStorageV120 {
    get(key: number): Promise<bigint>
    getAll(): Promise<bigint[]>
    getMany(keys: number[]): Promise<bigint[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: bigint][]>
    getPairs(key: number): Promise<[k: number, v: bigint][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: bigint][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: bigint][]>
}

export class SubtensorModuleBurnRegistrationsThisIntervalStorage extends StorageBase {
    protected getPrefix() {
        return 'SubtensorModule'
    }

    protected getName() {
        return 'BurnRegistrationsThisInterval'
    }

    get isV120(): boolean {
        return this.getTypeHash() === '9e7908b8124823e36125c1c3c4eeb83bc98bf3a24d470648d5614f9fff471ed9'
    }

    get asV120(): SubtensorModuleBurnRegistrationsThisIntervalStorageV120 {
        assert(this.isV120)
        return this as any
    }
}

export interface SubtensorModuleBurnRegistrationsThisIntervalStorageV120 {
    get(key: number): Promise<number>
    getAll(): Promise<number[]>
    getMany(keys: number[]): Promise<number[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: number][]>
    getPairs(key: number): Promise<[k: number, v: number][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: number][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: number][]>
}

export class SubtensorModuleConsensusStorage extends StorageBase {
    protected getPrefix() {
        return 'SubtensorModule'
    }

    protected getName() {
        return 'Consensus'
    }

    get isV120(): boolean {
        return this.getTypeHash() === '4ad3ba33a23696af6a3f008abbabfdaf2f6e27575ee2ea004ec76fea93963bca'
    }

    get asV120(): SubtensorModuleConsensusStorageV120 {
        assert(this.isV120)
        return this as any
    }
}

export interface SubtensorModuleConsensusStorageV120 {
    get(key: number): Promise<number[]>
    getAll(): Promise<number[][]>
    getMany(keys: number[]): Promise<number[][]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: number[]][]>
    getPairs(key: number): Promise<[k: number, v: number[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: number[]][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: number[]][]>
}

export class SubtensorModuleDefaultTakeStorage extends StorageBase {
    protected getPrefix() {
        return 'SubtensorModule'
    }

    protected getName() {
        return 'DefaultTake'
    }

    get isV120(): boolean {
        return this.getTypeHash() === 'a863022e4ed74c574d4df8778565bf755f6f88a8279ed05d8097a21bc6ec382e'
    }

    get asV120(): SubtensorModuleDefaultTakeStorageV120 {
        assert(this.isV120)
        return this as any
    }
}

export interface SubtensorModuleDefaultTakeStorageV120 {
    get(): Promise<number>
}

export class SubtensorModuleDelegatesStorage extends StorageBase {
    protected getPrefix() {
        return 'SubtensorModule'
    }

    protected getName() {
        return 'Delegates'
    }

    get isV120(): boolean {
        return this.getTypeHash() === '5aa976e16dd46ae39888720aef759d0c24bcf1ca5f9f9b91f4f3e55130833d50'
    }

    get asV120(): SubtensorModuleDelegatesStorageV120 {
        assert(this.isV120)
        return this as any
    }
}

export interface SubtensorModuleDelegatesStorageV120 {
    get(key: Uint8Array): Promise<number>
    getAll(): Promise<number[]>
    getMany(keys: Uint8Array[]): Promise<number[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: number][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: number][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: number][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: number][]>
}

export class SubtensorModuleDifficultyStorage extends StorageBase {
    protected getPrefix() {
        return 'SubtensorModule'
    }

    protected getName() {
        return 'Difficulty'
    }

    get isV120(): boolean {
        return this.getTypeHash() === 'd3e59d805c520391cc625ad2bf03c6f9aa8ff3a07b1e6c16d11a34fd9c5392a9'
    }

    get asV120(): SubtensorModuleDifficultyStorageV120 {
        assert(this.isV120)
        return this as any
    }
}

export interface SubtensorModuleDifficultyStorageV120 {
    get(key: number): Promise<bigint>
    getAll(): Promise<bigint[]>
    getMany(keys: number[]): Promise<bigint[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: bigint][]>
    getPairs(key: number): Promise<[k: number, v: bigint][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: bigint][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: bigint][]>
}

export class SubtensorModuleDividendsStorage extends StorageBase {
    protected getPrefix() {
        return 'SubtensorModule'
    }

    protected getName() {
        return 'Dividends'
    }

    get isV120(): boolean {
        return this.getTypeHash() === '4ad3ba33a23696af6a3f008abbabfdaf2f6e27575ee2ea004ec76fea93963bca'
    }

    get asV120(): SubtensorModuleDividendsStorageV120 {
        assert(this.isV120)
        return this as any
    }
}

export interface SubtensorModuleDividendsStorageV120 {
    get(key: number): Promise<number[]>
    getAll(): Promise<number[][]>
    getMany(keys: number[]): Promise<number[][]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: number[]][]>
    getPairs(key: number): Promise<[k: number, v: number[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: number[]][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: number[]][]>
}

export class SubtensorModuleEmissionStorage extends StorageBase {
    protected getPrefix() {
        return 'SubtensorModule'
    }

    protected getName() {
        return 'Emission'
    }

    get isV120(): boolean {
        return this.getTypeHash() === '8fb83d2c81de8915c74522e886b7bb09e01c78c2184fa1b54da1c8f56c61e744'
    }

    get asV120(): SubtensorModuleEmissionStorageV120 {
        assert(this.isV120)
        return this as any
    }
}

export interface SubtensorModuleEmissionStorageV120 {
    get(key: number): Promise<bigint[]>
    getAll(): Promise<bigint[][]>
    getMany(keys: number[]): Promise<bigint[][]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: bigint[]][]>
    getPairs(key: number): Promise<[k: number, v: bigint[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: bigint[]][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: bigint[]][]>
}

export class SubtensorModuleEmissionValuesStorage extends StorageBase {
    protected getPrefix() {
        return 'SubtensorModule'
    }

    protected getName() {
        return 'EmissionValues'
    }

    get isV120(): boolean {
        return this.getTypeHash() === 'd3e59d805c520391cc625ad2bf03c6f9aa8ff3a07b1e6c16d11a34fd9c5392a9'
    }

    get asV120(): SubtensorModuleEmissionValuesStorageV120 {
        assert(this.isV120)
        return this as any
    }
}

export interface SubtensorModuleEmissionValuesStorageV120 {
    get(key: number): Promise<bigint>
    getAll(): Promise<bigint[]>
    getMany(keys: number[]): Promise<bigint[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: bigint][]>
    getPairs(key: number): Promise<[k: number, v: bigint][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: bigint][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: bigint][]>
}

export class SubtensorModuleImmunityPeriodStorage extends StorageBase {
    protected getPrefix() {
        return 'SubtensorModule'
    }

    protected getName() {
        return 'ImmunityPeriod'
    }

    get isV120(): boolean {
        return this.getTypeHash() === '9e7908b8124823e36125c1c3c4eeb83bc98bf3a24d470648d5614f9fff471ed9'
    }

    get asV120(): SubtensorModuleImmunityPeriodStorageV120 {
        assert(this.isV120)
        return this as any
    }
}

export interface SubtensorModuleImmunityPeriodStorageV120 {
    get(key: number): Promise<number>
    getAll(): Promise<number[]>
    getMany(keys: number[]): Promise<number[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: number][]>
    getPairs(key: number): Promise<[k: number, v: number][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: number][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: number][]>
}

export class SubtensorModuleIncentiveStorage extends StorageBase {
    protected getPrefix() {
        return 'SubtensorModule'
    }

    protected getName() {
        return 'Incentive'
    }

    get isV120(): boolean {
        return this.getTypeHash() === '4ad3ba33a23696af6a3f008abbabfdaf2f6e27575ee2ea004ec76fea93963bca'
    }

    get asV120(): SubtensorModuleIncentiveStorageV120 {
        assert(this.isV120)
        return this as any
    }
}

export interface SubtensorModuleIncentiveStorageV120 {
    get(key: number): Promise<number[]>
    getAll(): Promise<number[][]>
    getMany(keys: number[]): Promise<number[][]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: number[]][]>
    getPairs(key: number): Promise<[k: number, v: number[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: number[]][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: number[]][]>
}

export class SubtensorModuleIsNetworkMemberStorage extends StorageBase {
    protected getPrefix() {
        return 'SubtensorModule'
    }

    protected getName() {
        return 'IsNetworkMember'
    }

    get isV120(): boolean {
        return this.getTypeHash() === 'c5f185121a9ed330ac3f405f9e0a1469d2be9512c46dd0b162e6294cc8d7771d'
    }

    get asV120(): SubtensorModuleIsNetworkMemberStorageV120 {
        assert(this.isV120)
        return this as any
    }
}

export interface SubtensorModuleIsNetworkMemberStorageV120 {
    get(key1: Uint8Array, key2: number): Promise<boolean>
    getAll(): Promise<boolean[]>
    getMany(keys: [Uint8Array, number][]): Promise<boolean[]>
    getKeys(): Promise<[Uint8Array, number][]>
    getKeys(key1: Uint8Array): Promise<[Uint8Array, number][]>
    getKeys(key1: Uint8Array, key2: number): Promise<[Uint8Array, number][]>
    getKeysPaged(pageSize: number): AsyncIterable<[Uint8Array, number][]>
    getKeysPaged(pageSize: number, key1: Uint8Array): AsyncIterable<[Uint8Array, number][]>
    getKeysPaged(pageSize: number, key1: Uint8Array, key2: number): AsyncIterable<[Uint8Array, number][]>
    getPairs(): Promise<[k: [Uint8Array, number], v: boolean][]>
    getPairs(key1: Uint8Array): Promise<[k: [Uint8Array, number], v: boolean][]>
    getPairs(key1: Uint8Array, key2: number): Promise<[k: [Uint8Array, number], v: boolean][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [Uint8Array, number], v: boolean][]>
    getPairsPaged(pageSize: number, key1: Uint8Array): AsyncIterable<[k: [Uint8Array, number], v: boolean][]>
    getPairsPaged(pageSize: number, key1: Uint8Array, key2: number): AsyncIterable<[k: [Uint8Array, number], v: boolean][]>
}

export class SubtensorModuleKappaStorage extends StorageBase {
    protected getPrefix() {
        return 'SubtensorModule'
    }

    protected getName() {
        return 'Kappa'
    }

    get isV120(): boolean {
        return this.getTypeHash() === '9e7908b8124823e36125c1c3c4eeb83bc98bf3a24d470648d5614f9fff471ed9'
    }

    get asV120(): SubtensorModuleKappaStorageV120 {
        assert(this.isV120)
        return this as any
    }
}

export interface SubtensorModuleKappaStorageV120 {
    get(key: number): Promise<number>
    getAll(): Promise<number[]>
    getMany(keys: number[]): Promise<number[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: number][]>
    getPairs(key: number): Promise<[k: number, v: number][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: number][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: number][]>
}

export class SubtensorModuleKeysStorage extends StorageBase {
    protected getPrefix() {
        return 'SubtensorModule'
    }

    protected getName() {
        return 'Keys'
    }

    get isV120(): boolean {
        return this.getTypeHash() === 'e17950fb2b2036897c0d86867dbef2703f85312b258a13b660ec6dfdf568eec5'
    }

    get asV120(): SubtensorModuleKeysStorageV120 {
        assert(this.isV120)
        return this as any
    }
}

export interface SubtensorModuleKeysStorageV120 {
    get(key1: number, key2: number): Promise<Uint8Array>
    getAll(): Promise<Uint8Array[]>
    getMany(keys: [number, number][]): Promise<Uint8Array[]>
    getKeys(): Promise<[number, number][]>
    getKeys(key1: number): Promise<[number, number][]>
    getKeys(key1: number, key2: number): Promise<[number, number][]>
    getKeysPaged(pageSize: number): AsyncIterable<[number, number][]>
    getKeysPaged(pageSize: number, key1: number): AsyncIterable<[number, number][]>
    getKeysPaged(pageSize: number, key1: number, key2: number): AsyncIterable<[number, number][]>
    getPairs(): Promise<[k: [number, number], v: Uint8Array][]>
    getPairs(key1: number): Promise<[k: [number, number], v: Uint8Array][]>
    getPairs(key1: number, key2: number): Promise<[k: [number, number], v: Uint8Array][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [number, number], v: Uint8Array][]>
    getPairsPaged(pageSize: number, key1: number): AsyncIterable<[k: [number, number], v: Uint8Array][]>
    getPairsPaged(pageSize: number, key1: number, key2: number): AsyncIterable<[k: [number, number], v: Uint8Array][]>
}

export class SubtensorModuleLastAdjustmentBlockStorage extends StorageBase {
    protected getPrefix() {
        return 'SubtensorModule'
    }

    protected getName() {
        return 'LastAdjustmentBlock'
    }

    get isV120(): boolean {
        return this.getTypeHash() === 'd3e59d805c520391cc625ad2bf03c6f9aa8ff3a07b1e6c16d11a34fd9c5392a9'
    }

    get asV120(): SubtensorModuleLastAdjustmentBlockStorageV120 {
        assert(this.isV120)
        return this as any
    }
}

export interface SubtensorModuleLastAdjustmentBlockStorageV120 {
    get(key: number): Promise<bigint>
    getAll(): Promise<bigint[]>
    getMany(keys: number[]): Promise<bigint[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: bigint][]>
    getPairs(key: number): Promise<[k: number, v: bigint][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: bigint][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: bigint][]>
}

export class SubtensorModuleLastMechansimStepBlockStorage extends StorageBase {
    protected getPrefix() {
        return 'SubtensorModule'
    }

    protected getName() {
        return 'LastMechansimStepBlock'
    }

    get isV120(): boolean {
        return this.getTypeHash() === 'd3e59d805c520391cc625ad2bf03c6f9aa8ff3a07b1e6c16d11a34fd9c5392a9'
    }

    get asV120(): SubtensorModuleLastMechansimStepBlockStorageV120 {
        assert(this.isV120)
        return this as any
    }
}

export interface SubtensorModuleLastMechansimStepBlockStorageV120 {
    get(key: number): Promise<bigint>
    getAll(): Promise<bigint[]>
    getMany(keys: number[]): Promise<bigint[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: bigint][]>
    getPairs(key: number): Promise<[k: number, v: bigint][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: bigint][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: bigint][]>
}

export class SubtensorModuleLastTxBlockStorage extends StorageBase {
    protected getPrefix() {
        return 'SubtensorModule'
    }

    protected getName() {
        return 'LastTxBlock'
    }

    get isV120(): boolean {
        return this.getTypeHash() === 'be10e0a08b3d57d55aed3143c1cce9e19ddcb1e47649f2ec0b31f919ed797d38'
    }

    get asV120(): SubtensorModuleLastTxBlockStorageV120 {
        assert(this.isV120)
        return this as any
    }
}

export interface SubtensorModuleLastTxBlockStorageV120 {
    get(key: Uint8Array): Promise<bigint>
    getAll(): Promise<bigint[]>
    getMany(keys: Uint8Array[]): Promise<bigint[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: bigint][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: bigint][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: bigint][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: bigint][]>
}

export class SubtensorModuleLastUpdateStorage extends StorageBase {
    protected getPrefix() {
        return 'SubtensorModule'
    }

    protected getName() {
        return 'LastUpdate'
    }

    get isV120(): boolean {
        return this.getTypeHash() === '8fb83d2c81de8915c74522e886b7bb09e01c78c2184fa1b54da1c8f56c61e744'
    }

    get asV120(): SubtensorModuleLastUpdateStorageV120 {
        assert(this.isV120)
        return this as any
    }
}

export interface SubtensorModuleLastUpdateStorageV120 {
    get(key: number): Promise<bigint[]>
    getAll(): Promise<bigint[][]>
    getMany(keys: number[]): Promise<bigint[][]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: bigint[]][]>
    getPairs(key: number): Promise<[k: number, v: bigint[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: bigint[]][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: bigint[]][]>
}

export class SubtensorModuleLoadedEmissionStorage extends StorageBase {
    protected getPrefix() {
        return 'SubtensorModule'
    }

    protected getName() {
        return 'LoadedEmission'
    }

    get isV120(): boolean {
        return this.getTypeHash() === '099fe540bf8ec6142cec4c28a777a4147e2bb26e83800a5ef32eb3e99c296249'
    }

    get asV120(): SubtensorModuleLoadedEmissionStorageV120 {
        assert(this.isV120)
        return this as any
    }

    get isV121(): boolean {
        return this.getTypeHash() === 'f3f7ad5510222049e33569eb8ce87cf16242085658ee7250851eacf4e7c64504'
    }

    get asV121(): SubtensorModuleLoadedEmissionStorageV121 {
        assert(this.isV121)
        return this as any
    }
}

export interface SubtensorModuleLoadedEmissionStorageV120 {
    get(key: number): Promise<([Uint8Array, bigint][] | undefined)>
    getAll(): Promise<[Uint8Array, bigint][][]>
    getMany(keys: number[]): Promise<([Uint8Array, bigint][] | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: [Uint8Array, bigint][]][]>
    getPairs(key: number): Promise<[k: number, v: [Uint8Array, bigint][]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: [Uint8Array, bigint][]][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: [Uint8Array, bigint][]][]>
}

export interface SubtensorModuleLoadedEmissionStorageV121 {
    get(key: number): Promise<([Uint8Array, bigint, bigint][] | undefined)>
    getAll(): Promise<[Uint8Array, bigint, bigint][][]>
    getMany(keys: number[]): Promise<([Uint8Array, bigint, bigint][] | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: [Uint8Array, bigint, bigint][]][]>
    getPairs(key: number): Promise<[k: number, v: [Uint8Array, bigint, bigint][]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: [Uint8Array, bigint, bigint][]][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: [Uint8Array, bigint, bigint][]][]>
}

export class SubtensorModuleMaxAllowedUidsStorage extends StorageBase {
    protected getPrefix() {
        return 'SubtensorModule'
    }

    protected getName() {
        return 'MaxAllowedUids'
    }

    get isV120(): boolean {
        return this.getTypeHash() === '9e7908b8124823e36125c1c3c4eeb83bc98bf3a24d470648d5614f9fff471ed9'
    }

    get asV120(): SubtensorModuleMaxAllowedUidsStorageV120 {
        assert(this.isV120)
        return this as any
    }
}

export interface SubtensorModuleMaxAllowedUidsStorageV120 {
    get(key: number): Promise<number>
    getAll(): Promise<number[]>
    getMany(keys: number[]): Promise<number[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: number][]>
    getPairs(key: number): Promise<[k: number, v: number][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: number][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: number][]>
}

export class SubtensorModuleMaxAllowedValidatorsStorage extends StorageBase {
    protected getPrefix() {
        return 'SubtensorModule'
    }

    protected getName() {
        return 'MaxAllowedValidators'
    }

    get isV120(): boolean {
        return this.getTypeHash() === '9e7908b8124823e36125c1c3c4eeb83bc98bf3a24d470648d5614f9fff471ed9'
    }

    get asV120(): SubtensorModuleMaxAllowedValidatorsStorageV120 {
        assert(this.isV120)
        return this as any
    }
}

export interface SubtensorModuleMaxAllowedValidatorsStorageV120 {
    get(key: number): Promise<number>
    getAll(): Promise<number[]>
    getMany(keys: number[]): Promise<number[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: number][]>
    getPairs(key: number): Promise<[k: number, v: number][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: number][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: number][]>
}

export class SubtensorModuleMaxBurnStorage extends StorageBase {
    protected getPrefix() {
        return 'SubtensorModule'
    }

    protected getName() {
        return 'MaxBurn'
    }

    get isV120(): boolean {
        return this.getTypeHash() === 'd3e59d805c520391cc625ad2bf03c6f9aa8ff3a07b1e6c16d11a34fd9c5392a9'
    }

    get asV120(): SubtensorModuleMaxBurnStorageV120 {
        assert(this.isV120)
        return this as any
    }
}

export interface SubtensorModuleMaxBurnStorageV120 {
    get(key: number): Promise<bigint>
    getAll(): Promise<bigint[]>
    getMany(keys: number[]): Promise<bigint[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: bigint][]>
    getPairs(key: number): Promise<[k: number, v: bigint][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: bigint][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: bigint][]>
}

export class SubtensorModuleMaxDifficultyStorage extends StorageBase {
    protected getPrefix() {
        return 'SubtensorModule'
    }

    protected getName() {
        return 'MaxDifficulty'
    }

    get isV120(): boolean {
        return this.getTypeHash() === 'd3e59d805c520391cc625ad2bf03c6f9aa8ff3a07b1e6c16d11a34fd9c5392a9'
    }

    get asV120(): SubtensorModuleMaxDifficultyStorageV120 {
        assert(this.isV120)
        return this as any
    }
}

export interface SubtensorModuleMaxDifficultyStorageV120 {
    get(key: number): Promise<bigint>
    getAll(): Promise<bigint[]>
    getMany(keys: number[]): Promise<bigint[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: bigint][]>
    getPairs(key: number): Promise<[k: number, v: bigint][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: bigint][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: bigint][]>
}

export class SubtensorModuleMaxRegistrationsPerBlockStorage extends StorageBase {
    protected getPrefix() {
        return 'SubtensorModule'
    }

    protected getName() {
        return 'MaxRegistrationsPerBlock'
    }

    get isV120(): boolean {
        return this.getTypeHash() === '9e7908b8124823e36125c1c3c4eeb83bc98bf3a24d470648d5614f9fff471ed9'
    }

    get asV120(): SubtensorModuleMaxRegistrationsPerBlockStorageV120 {
        assert(this.isV120)
        return this as any
    }
}

export interface SubtensorModuleMaxRegistrationsPerBlockStorageV120 {
    get(key: number): Promise<number>
    getAll(): Promise<number[]>
    getMany(keys: number[]): Promise<number[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: number][]>
    getPairs(key: number): Promise<[k: number, v: number][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: number][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: number][]>
}

export class SubtensorModuleMaxWeightsLimitStorage extends StorageBase {
    protected getPrefix() {
        return 'SubtensorModule'
    }

    protected getName() {
        return 'MaxWeightsLimit'
    }

    get isV120(): boolean {
        return this.getTypeHash() === '9e7908b8124823e36125c1c3c4eeb83bc98bf3a24d470648d5614f9fff471ed9'
    }

    get asV120(): SubtensorModuleMaxWeightsLimitStorageV120 {
        assert(this.isV120)
        return this as any
    }
}

export interface SubtensorModuleMaxWeightsLimitStorageV120 {
    get(key: number): Promise<number>
    getAll(): Promise<number[]>
    getMany(keys: number[]): Promise<number[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: number][]>
    getPairs(key: number): Promise<[k: number, v: number][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: number][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: number][]>
}

export class SubtensorModuleMinAllowedWeightsStorage extends StorageBase {
    protected getPrefix() {
        return 'SubtensorModule'
    }

    protected getName() {
        return 'MinAllowedWeights'
    }

    get isV120(): boolean {
        return this.getTypeHash() === '9e7908b8124823e36125c1c3c4eeb83bc98bf3a24d470648d5614f9fff471ed9'
    }

    get asV120(): SubtensorModuleMinAllowedWeightsStorageV120 {
        assert(this.isV120)
        return this as any
    }
}

export interface SubtensorModuleMinAllowedWeightsStorageV120 {
    get(key: number): Promise<number>
    getAll(): Promise<number[]>
    getMany(keys: number[]): Promise<number[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: number][]>
    getPairs(key: number): Promise<[k: number, v: number][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: number][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: number][]>
}

export class SubtensorModuleMinBurnStorage extends StorageBase {
    protected getPrefix() {
        return 'SubtensorModule'
    }

    protected getName() {
        return 'MinBurn'
    }

    get isV120(): boolean {
        return this.getTypeHash() === 'd3e59d805c520391cc625ad2bf03c6f9aa8ff3a07b1e6c16d11a34fd9c5392a9'
    }

    get asV120(): SubtensorModuleMinBurnStorageV120 {
        assert(this.isV120)
        return this as any
    }
}

export interface SubtensorModuleMinBurnStorageV120 {
    get(key: number): Promise<bigint>
    getAll(): Promise<bigint[]>
    getMany(keys: number[]): Promise<bigint[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: bigint][]>
    getPairs(key: number): Promise<[k: number, v: bigint][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: bigint][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: bigint][]>
}

export class SubtensorModuleMinDifficultyStorage extends StorageBase {
    protected getPrefix() {
        return 'SubtensorModule'
    }

    protected getName() {
        return 'MinDifficulty'
    }

    get isV120(): boolean {
        return this.getTypeHash() === 'd3e59d805c520391cc625ad2bf03c6f9aa8ff3a07b1e6c16d11a34fd9c5392a9'
    }

    get asV120(): SubtensorModuleMinDifficultyStorageV120 {
        assert(this.isV120)
        return this as any
    }
}

export interface SubtensorModuleMinDifficultyStorageV120 {
    get(key: number): Promise<bigint>
    getAll(): Promise<bigint[]>
    getMany(keys: number[]): Promise<bigint[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: bigint][]>
    getPairs(key: number): Promise<[k: number, v: bigint][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: bigint][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: bigint][]>
}

export class SubtensorModuleNetworkConnectStorage extends StorageBase {
    protected getPrefix() {
        return 'SubtensorModule'
    }

    protected getName() {
        return 'NetworkConnect'
    }

    get isV120(): boolean {
        return this.getTypeHash() === '46166015aec2bcb50f5218199ee4e6d7a7cbce6ab8d583c4fadb578e38ca4d0c'
    }

    get asV120(): SubtensorModuleNetworkConnectStorageV120 {
        assert(this.isV120)
        return this as any
    }
}

export interface SubtensorModuleNetworkConnectStorageV120 {
    get(key1: number, key2: number): Promise<(number | undefined)>
    getAll(): Promise<number[]>
    getMany(keys: [number, number][]): Promise<(number | undefined)[]>
    getKeys(): Promise<[number, number][]>
    getKeys(key1: number): Promise<[number, number][]>
    getKeys(key1: number, key2: number): Promise<[number, number][]>
    getKeysPaged(pageSize: number): AsyncIterable<[number, number][]>
    getKeysPaged(pageSize: number, key1: number): AsyncIterable<[number, number][]>
    getKeysPaged(pageSize: number, key1: number, key2: number): AsyncIterable<[number, number][]>
    getPairs(): Promise<[k: [number, number], v: number][]>
    getPairs(key1: number): Promise<[k: [number, number], v: number][]>
    getPairs(key1: number, key2: number): Promise<[k: [number, number], v: number][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [number, number], v: number][]>
    getPairsPaged(pageSize: number, key1: number): AsyncIterable<[k: [number, number], v: number][]>
    getPairsPaged(pageSize: number, key1: number, key2: number): AsyncIterable<[k: [number, number], v: number][]>
}

export class SubtensorModuleNetworkModalityStorage extends StorageBase {
    protected getPrefix() {
        return 'SubtensorModule'
    }

    protected getName() {
        return 'NetworkModality'
    }

    get isV120(): boolean {
        return this.getTypeHash() === '9e7908b8124823e36125c1c3c4eeb83bc98bf3a24d470648d5614f9fff471ed9'
    }

    get asV120(): SubtensorModuleNetworkModalityStorageV120 {
        assert(this.isV120)
        return this as any
    }
}

export interface SubtensorModuleNetworkModalityStorageV120 {
    get(key: number): Promise<number>
    getAll(): Promise<number[]>
    getMany(keys: number[]): Promise<number[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: number][]>
    getPairs(key: number): Promise<[k: number, v: number][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: number][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: number][]>
}

export class SubtensorModuleNetworkRegistrationAllowedStorage extends StorageBase {
    protected getPrefix() {
        return 'SubtensorModule'
    }

    protected getName() {
        return 'NetworkRegistrationAllowed'
    }

    get isV121(): boolean {
        return this.getTypeHash() === '886ad416eefc84cf2045e72dd7324563036d7199510c820db27b7aa68ae20063'
    }

    get asV121(): SubtensorModuleNetworkRegistrationAllowedStorageV121 {
        assert(this.isV121)
        return this as any
    }
}

export interface SubtensorModuleNetworkRegistrationAllowedStorageV121 {
    get(key: number): Promise<boolean>
    getAll(): Promise<boolean[]>
    getMany(keys: number[]): Promise<boolean[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: boolean][]>
    getPairs(key: number): Promise<[k: number, v: boolean][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: boolean][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: boolean][]>
}

export class SubtensorModuleNetworksAddedStorage extends StorageBase {
    protected getPrefix() {
        return 'SubtensorModule'
    }

    protected getName() {
        return 'NetworksAdded'
    }

    get isV120(): boolean {
        return this.getTypeHash() === '886ad416eefc84cf2045e72dd7324563036d7199510c820db27b7aa68ae20063'
    }

    get asV120(): SubtensorModuleNetworksAddedStorageV120 {
        assert(this.isV120)
        return this as any
    }
}

export interface SubtensorModuleNetworksAddedStorageV120 {
    get(key: number): Promise<boolean>
    getAll(): Promise<boolean[]>
    getMany(keys: number[]): Promise<boolean[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: boolean][]>
    getPairs(key: number): Promise<[k: number, v: boolean][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: boolean][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: boolean][]>
}

export class SubtensorModuleNeuronsToPruneAtNextEpochStorage extends StorageBase {
    protected getPrefix() {
        return 'SubtensorModule'
    }

    protected getName() {
        return 'NeuronsToPruneAtNextEpoch'
    }

    get isV120(): boolean {
        return this.getTypeHash() === '9e7908b8124823e36125c1c3c4eeb83bc98bf3a24d470648d5614f9fff471ed9'
    }

    get asV120(): SubtensorModuleNeuronsToPruneAtNextEpochStorageV120 {
        assert(this.isV120)
        return this as any
    }
}

export interface SubtensorModuleNeuronsToPruneAtNextEpochStorageV120 {
    get(key: number): Promise<number>
    getAll(): Promise<number[]>
    getMany(keys: number[]): Promise<number[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: number][]>
    getPairs(key: number): Promise<[k: number, v: number][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: number][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: number][]>
}

export class SubtensorModuleOwnerStorage extends StorageBase {
    protected getPrefix() {
        return 'SubtensorModule'
    }

    protected getName() {
        return 'Owner'
    }

    get isV120(): boolean {
        return this.getTypeHash() === '10466457cf66da8c0be95e7566d9bb601ad970b0e0f325efae9ddd5aeb69a272'
    }

    get asV120(): SubtensorModuleOwnerStorageV120 {
        assert(this.isV120)
        return this as any
    }
}

export interface SubtensorModuleOwnerStorageV120 {
    get(key: Uint8Array): Promise<Uint8Array>
    getAll(): Promise<Uint8Array[]>
    getMany(keys: Uint8Array[]): Promise<Uint8Array[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: Uint8Array][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: Uint8Array][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: Uint8Array][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: Uint8Array][]>
}

export class SubtensorModulePOWRegistrationsThisIntervalStorage extends StorageBase {
    protected getPrefix() {
        return 'SubtensorModule'
    }

    protected getName() {
        return 'POWRegistrationsThisInterval'
    }

    get isV120(): boolean {
        return this.getTypeHash() === '9e7908b8124823e36125c1c3c4eeb83bc98bf3a24d470648d5614f9fff471ed9'
    }

    get asV120(): SubtensorModulePOWRegistrationsThisIntervalStorageV120 {
        assert(this.isV120)
        return this as any
    }
}

export interface SubtensorModulePOWRegistrationsThisIntervalStorageV120 {
    get(key: number): Promise<number>
    getAll(): Promise<number[]>
    getMany(keys: number[]): Promise<number[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: number][]>
    getPairs(key: number): Promise<[k: number, v: number][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: number][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: number][]>
}

export class SubtensorModulePendingEmissionStorage extends StorageBase {
    protected getPrefix() {
        return 'SubtensorModule'
    }

    protected getName() {
        return 'PendingEmission'
    }

    get isV120(): boolean {
        return this.getTypeHash() === 'd3e59d805c520391cc625ad2bf03c6f9aa8ff3a07b1e6c16d11a34fd9c5392a9'
    }

    get asV120(): SubtensorModulePendingEmissionStorageV120 {
        assert(this.isV120)
        return this as any
    }
}

export interface SubtensorModulePendingEmissionStorageV120 {
    get(key: number): Promise<bigint>
    getAll(): Promise<bigint[]>
    getMany(keys: number[]): Promise<bigint[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: bigint][]>
    getPairs(key: number): Promise<[k: number, v: bigint][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: bigint][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: bigint][]>
}

export class SubtensorModulePrometheusStorage extends StorageBase {
    protected getPrefix() {
        return 'SubtensorModule'
    }

    protected getName() {
        return 'Prometheus'
    }

    get isV120(): boolean {
        return this.getTypeHash() === '7300af29ae4e1a717fe3d36e110f2be1bc5966068aef569e4781018e0bc7294a'
    }

    get asV120(): SubtensorModulePrometheusStorageV120 {
        assert(this.isV120)
        return this as any
    }
}

export interface SubtensorModulePrometheusStorageV120 {
    get(key1: number, key2: Uint8Array): Promise<(v120.PrometheusInfo | undefined)>
    getAll(): Promise<v120.PrometheusInfo[]>
    getMany(keys: [number, Uint8Array][]): Promise<(v120.PrometheusInfo | undefined)[]>
    getKeys(): Promise<[number, Uint8Array][]>
    getKeys(key1: number): Promise<[number, Uint8Array][]>
    getKeys(key1: number, key2: Uint8Array): Promise<[number, Uint8Array][]>
    getKeysPaged(pageSize: number): AsyncIterable<[number, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: number): AsyncIterable<[number, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: number, key2: Uint8Array): AsyncIterable<[number, Uint8Array][]>
    getPairs(): Promise<[k: [number, Uint8Array], v: v120.PrometheusInfo][]>
    getPairs(key1: number): Promise<[k: [number, Uint8Array], v: v120.PrometheusInfo][]>
    getPairs(key1: number, key2: Uint8Array): Promise<[k: [number, Uint8Array], v: v120.PrometheusInfo][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [number, Uint8Array], v: v120.PrometheusInfo][]>
    getPairsPaged(pageSize: number, key1: number): AsyncIterable<[k: [number, Uint8Array], v: v120.PrometheusInfo][]>
    getPairsPaged(pageSize: number, key1: number, key2: Uint8Array): AsyncIterable<[k: [number, Uint8Array], v: v120.PrometheusInfo][]>
}

export class SubtensorModulePruningScoresStorage extends StorageBase {
    protected getPrefix() {
        return 'SubtensorModule'
    }

    protected getName() {
        return 'PruningScores'
    }

    get isV120(): boolean {
        return this.getTypeHash() === '4ad3ba33a23696af6a3f008abbabfdaf2f6e27575ee2ea004ec76fea93963bca'
    }

    get asV120(): SubtensorModulePruningScoresStorageV120 {
        assert(this.isV120)
        return this as any
    }
}

export interface SubtensorModulePruningScoresStorageV120 {
    get(key: number): Promise<number[]>
    getAll(): Promise<number[][]>
    getMany(keys: number[]): Promise<number[][]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: number[]][]>
    getPairs(key: number): Promise<[k: number, v: number[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: number[]][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: number[]][]>
}

export class SubtensorModuleRAORecycledForRegistrationStorage extends StorageBase {
    protected getPrefix() {
        return 'SubtensorModule'
    }

    protected getName() {
        return 'RAORecycledForRegistration'
    }

    get isV120(): boolean {
        return this.getTypeHash() === 'd3e59d805c520391cc625ad2bf03c6f9aa8ff3a07b1e6c16d11a34fd9c5392a9'
    }

    get asV120(): SubtensorModuleRAORecycledForRegistrationStorageV120 {
        assert(this.isV120)
        return this as any
    }
}

export interface SubtensorModuleRAORecycledForRegistrationStorageV120 {
    get(key: number): Promise<bigint>
    getAll(): Promise<bigint[]>
    getMany(keys: number[]): Promise<bigint[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: bigint][]>
    getPairs(key: number): Promise<[k: number, v: bigint][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: bigint][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: bigint][]>
}

export class SubtensorModuleRankStorage extends StorageBase {
    protected getPrefix() {
        return 'SubtensorModule'
    }

    protected getName() {
        return 'Rank'
    }

    get isV120(): boolean {
        return this.getTypeHash() === '4ad3ba33a23696af6a3f008abbabfdaf2f6e27575ee2ea004ec76fea93963bca'
    }

    get asV120(): SubtensorModuleRankStorageV120 {
        assert(this.isV120)
        return this as any
    }
}

export interface SubtensorModuleRankStorageV120 {
    get(key: number): Promise<number[]>
    getAll(): Promise<number[][]>
    getMany(keys: number[]): Promise<number[][]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: number[]][]>
    getPairs(key: number): Promise<[k: number, v: number[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: number[]][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: number[]][]>
}

export class SubtensorModuleRegistrationsThisBlockStorage extends StorageBase {
    protected getPrefix() {
        return 'SubtensorModule'
    }

    protected getName() {
        return 'RegistrationsThisBlock'
    }

    get isV120(): boolean {
        return this.getTypeHash() === '9e7908b8124823e36125c1c3c4eeb83bc98bf3a24d470648d5614f9fff471ed9'
    }

    get asV120(): SubtensorModuleRegistrationsThisBlockStorageV120 {
        assert(this.isV120)
        return this as any
    }
}

export interface SubtensorModuleRegistrationsThisBlockStorageV120 {
    get(key: number): Promise<number>
    getAll(): Promise<number[]>
    getMany(keys: number[]): Promise<number[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: number][]>
    getPairs(key: number): Promise<[k: number, v: number][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: number][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: number][]>
}

export class SubtensorModuleRegistrationsThisIntervalStorage extends StorageBase {
    protected getPrefix() {
        return 'SubtensorModule'
    }

    protected getName() {
        return 'RegistrationsThisInterval'
    }

    get isV120(): boolean {
        return this.getTypeHash() === '9e7908b8124823e36125c1c3c4eeb83bc98bf3a24d470648d5614f9fff471ed9'
    }

    get asV120(): SubtensorModuleRegistrationsThisIntervalStorageV120 {
        assert(this.isV120)
        return this as any
    }
}

export interface SubtensorModuleRegistrationsThisIntervalStorageV120 {
    get(key: number): Promise<number>
    getAll(): Promise<number[]>
    getMany(keys: number[]): Promise<number[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: number][]>
    getPairs(key: number): Promise<[k: number, v: number][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: number][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: number][]>
}

export class SubtensorModuleRhoStorage extends StorageBase {
    protected getPrefix() {
        return 'SubtensorModule'
    }

    protected getName() {
        return 'Rho'
    }

    get isV120(): boolean {
        return this.getTypeHash() === '9e7908b8124823e36125c1c3c4eeb83bc98bf3a24d470648d5614f9fff471ed9'
    }

    get asV120(): SubtensorModuleRhoStorageV120 {
        assert(this.isV120)
        return this as any
    }
}

export interface SubtensorModuleRhoStorageV120 {
    get(key: number): Promise<number>
    getAll(): Promise<number[]>
    getMany(keys: number[]): Promise<number[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: number][]>
    getPairs(key: number): Promise<[k: number, v: number][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: number][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: number][]>
}

export class SubtensorModuleScalingLawPowerStorage extends StorageBase {
    protected getPrefix() {
        return 'SubtensorModule'
    }

    protected getName() {
        return 'ScalingLawPower'
    }

    get isV120(): boolean {
        return this.getTypeHash() === '9e7908b8124823e36125c1c3c4eeb83bc98bf3a24d470648d5614f9fff471ed9'
    }

    get asV120(): SubtensorModuleScalingLawPowerStorageV120 {
        assert(this.isV120)
        return this as any
    }
}

export interface SubtensorModuleScalingLawPowerStorageV120 {
    get(key: number): Promise<number>
    getAll(): Promise<number[]>
    getMany(keys: number[]): Promise<number[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: number][]>
    getPairs(key: number): Promise<[k: number, v: number][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: number][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: number][]>
}

export class SubtensorModuleServingRateLimitStorage extends StorageBase {
    protected getPrefix() {
        return 'SubtensorModule'
    }

    protected getName() {
        return 'ServingRateLimit'
    }

    get isV120(): boolean {
        return this.getTypeHash() === 'd3e59d805c520391cc625ad2bf03c6f9aa8ff3a07b1e6c16d11a34fd9c5392a9'
    }

    get asV120(): SubtensorModuleServingRateLimitStorageV120 {
        assert(this.isV120)
        return this as any
    }
}

export interface SubtensorModuleServingRateLimitStorageV120 {
    get(key: number): Promise<bigint>
    getAll(): Promise<bigint[]>
    getMany(keys: number[]): Promise<bigint[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: bigint][]>
    getPairs(key: number): Promise<[k: number, v: bigint][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: bigint][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: bigint][]>
}

export class SubtensorModuleStakeStorage extends StorageBase {
    protected getPrefix() {
        return 'SubtensorModule'
    }

    protected getName() {
        return 'Stake'
    }

    get isV120(): boolean {
        return this.getTypeHash() === 'f92b1ce45982bf6823616d5ff3e74ade26e4bfabd1ef2f286ba44b7a5a10ee21'
    }

    get asV120(): SubtensorModuleStakeStorageV120 {
        assert(this.isV120)
        return this as any
    }
}

export interface SubtensorModuleStakeStorageV120 {
    get(key1: Uint8Array, key2: Uint8Array): Promise<bigint>
    getAll(): Promise<bigint[]>
    getMany(keys: [Uint8Array, Uint8Array][]): Promise<bigint[]>
    getKeys(): Promise<[Uint8Array, Uint8Array][]>
    getKeys(key1: Uint8Array): Promise<[Uint8Array, Uint8Array][]>
    getKeys(key1: Uint8Array, key2: Uint8Array): Promise<[Uint8Array, Uint8Array][]>
    getKeysPaged(pageSize: number): AsyncIterable<[Uint8Array, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: Uint8Array): AsyncIterable<[Uint8Array, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: Uint8Array, key2: Uint8Array): AsyncIterable<[Uint8Array, Uint8Array][]>
    getPairs(): Promise<[k: [Uint8Array, Uint8Array], v: bigint][]>
    getPairs(key1: Uint8Array): Promise<[k: [Uint8Array, Uint8Array], v: bigint][]>
    getPairs(key1: Uint8Array, key2: Uint8Array): Promise<[k: [Uint8Array, Uint8Array], v: bigint][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [Uint8Array, Uint8Array], v: bigint][]>
    getPairsPaged(pageSize: number, key1: Uint8Array): AsyncIterable<[k: [Uint8Array, Uint8Array], v: bigint][]>
    getPairsPaged(pageSize: number, key1: Uint8Array, key2: Uint8Array): AsyncIterable<[k: [Uint8Array, Uint8Array], v: bigint][]>
}

export class SubtensorModuleSubnetworkNStorage extends StorageBase {
    protected getPrefix() {
        return 'SubtensorModule'
    }

    protected getName() {
        return 'SubnetworkN'
    }

    get isV120(): boolean {
        return this.getTypeHash() === '9e7908b8124823e36125c1c3c4eeb83bc98bf3a24d470648d5614f9fff471ed9'
    }

    get asV120(): SubtensorModuleSubnetworkNStorageV120 {
        assert(this.isV120)
        return this as any
    }
}

export interface SubtensorModuleSubnetworkNStorageV120 {
    get(key: number): Promise<number>
    getAll(): Promise<number[]>
    getMany(keys: number[]): Promise<number[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: number][]>
    getPairs(key: number): Promise<[k: number, v: number][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: number][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: number][]>
}

export class SubtensorModuleSynergyScalingLawPowerStorage extends StorageBase {
    protected getPrefix() {
        return 'SubtensorModule'
    }

    protected getName() {
        return 'SynergyScalingLawPower'
    }

    get isV120(): boolean {
        return this.getTypeHash() === '9e7908b8124823e36125c1c3c4eeb83bc98bf3a24d470648d5614f9fff471ed9'
    }

    get asV120(): SubtensorModuleSynergyScalingLawPowerStorageV120 {
        assert(this.isV120)
        return this as any
    }
}

export interface SubtensorModuleSynergyScalingLawPowerStorageV120 {
    get(key: number): Promise<number>
    getAll(): Promise<number[]>
    getMany(keys: number[]): Promise<number[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: number][]>
    getPairs(key: number): Promise<[k: number, v: number][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: number][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: number][]>
}

export class SubtensorModuleTargetRegistrationsPerIntervalStorage extends StorageBase {
    protected getPrefix() {
        return 'SubtensorModule'
    }

    protected getName() {
        return 'TargetRegistrationsPerInterval'
    }

    get isV120(): boolean {
        return this.getTypeHash() === '9e7908b8124823e36125c1c3c4eeb83bc98bf3a24d470648d5614f9fff471ed9'
    }

    get asV120(): SubtensorModuleTargetRegistrationsPerIntervalStorageV120 {
        assert(this.isV120)
        return this as any
    }
}

export interface SubtensorModuleTargetRegistrationsPerIntervalStorageV120 {
    get(key: number): Promise<number>
    getAll(): Promise<number[]>
    getMany(keys: number[]): Promise<number[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: number][]>
    getPairs(key: number): Promise<[k: number, v: number][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: number][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: number][]>
}

export class SubtensorModuleTempoStorage extends StorageBase {
    protected getPrefix() {
        return 'SubtensorModule'
    }

    protected getName() {
        return 'Tempo'
    }

    get isV120(): boolean {
        return this.getTypeHash() === '9e7908b8124823e36125c1c3c4eeb83bc98bf3a24d470648d5614f9fff471ed9'
    }

    get asV120(): SubtensorModuleTempoStorageV120 {
        assert(this.isV120)
        return this as any
    }
}

export interface SubtensorModuleTempoStorageV120 {
    get(key: number): Promise<number>
    getAll(): Promise<number[]>
    getMany(keys: number[]): Promise<number[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: number][]>
    getPairs(key: number): Promise<[k: number, v: number][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: number][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: number][]>
}

export class SubtensorModuleTotalColdkeyStakeStorage extends StorageBase {
    protected getPrefix() {
        return 'SubtensorModule'
    }

    protected getName() {
        return 'TotalColdkeyStake'
    }

    get isV120(): boolean {
        return this.getTypeHash() === 'be10e0a08b3d57d55aed3143c1cce9e19ddcb1e47649f2ec0b31f919ed797d38'
    }

    get asV120(): SubtensorModuleTotalColdkeyStakeStorageV120 {
        assert(this.isV120)
        return this as any
    }
}

export interface SubtensorModuleTotalColdkeyStakeStorageV120 {
    get(key: Uint8Array): Promise<bigint>
    getAll(): Promise<bigint[]>
    getMany(keys: Uint8Array[]): Promise<bigint[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: bigint][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: bigint][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: bigint][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: bigint][]>
}

export class SubtensorModuleTotalHotkeyStakeStorage extends StorageBase {
    protected getPrefix() {
        return 'SubtensorModule'
    }

    protected getName() {
        return 'TotalHotkeyStake'
    }

    get isV120(): boolean {
        return this.getTypeHash() === 'be10e0a08b3d57d55aed3143c1cce9e19ddcb1e47649f2ec0b31f919ed797d38'
    }

    get asV120(): SubtensorModuleTotalHotkeyStakeStorageV120 {
        assert(this.isV120)
        return this as any
    }
}

export interface SubtensorModuleTotalHotkeyStakeStorageV120 {
    get(key: Uint8Array): Promise<bigint>
    getAll(): Promise<bigint[]>
    getMany(keys: Uint8Array[]): Promise<bigint[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: bigint][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: bigint][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: bigint][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: bigint][]>
}

export class SubtensorModuleTotalIssuanceStorage extends StorageBase {
    protected getPrefix() {
        return 'SubtensorModule'
    }

    protected getName() {
        return 'TotalIssuance'
    }

    get isV120(): boolean {
        return this.getTypeHash() === '95ff4f914f08e149ddbe1ae2dcb1743bbf9aaae69d04c486e1a398cacfcca06a'
    }

    get asV120(): SubtensorModuleTotalIssuanceStorageV120 {
        assert(this.isV120)
        return this as any
    }
}

export interface SubtensorModuleTotalIssuanceStorageV120 {
    get(): Promise<bigint>
}

export class SubtensorModuleTotalNetworksStorage extends StorageBase {
    protected getPrefix() {
        return 'SubtensorModule'
    }

    protected getName() {
        return 'TotalNetworks'
    }

    get isV120(): boolean {
        return this.getTypeHash() === 'a863022e4ed74c574d4df8778565bf755f6f88a8279ed05d8097a21bc6ec382e'
    }

    get asV120(): SubtensorModuleTotalNetworksStorageV120 {
        assert(this.isV120)
        return this as any
    }
}

export interface SubtensorModuleTotalNetworksStorageV120 {
    get(): Promise<number>
}

export class SubtensorModuleTotalStakeStorage extends StorageBase {
    protected getPrefix() {
        return 'SubtensorModule'
    }

    protected getName() {
        return 'TotalStake'
    }

    get isV120(): boolean {
        return this.getTypeHash() === '95ff4f914f08e149ddbe1ae2dcb1743bbf9aaae69d04c486e1a398cacfcca06a'
    }

    get asV120(): SubtensorModuleTotalStakeStorageV120 {
        assert(this.isV120)
        return this as any
    }
}

export interface SubtensorModuleTotalStakeStorageV120 {
    get(): Promise<bigint>
}

export class SubtensorModuleTrustStorage extends StorageBase {
    protected getPrefix() {
        return 'SubtensorModule'
    }

    protected getName() {
        return 'Trust'
    }

    get isV120(): boolean {
        return this.getTypeHash() === '4ad3ba33a23696af6a3f008abbabfdaf2f6e27575ee2ea004ec76fea93963bca'
    }

    get asV120(): SubtensorModuleTrustStorageV120 {
        assert(this.isV120)
        return this as any
    }
}

export interface SubtensorModuleTrustStorageV120 {
    get(key: number): Promise<number[]>
    getAll(): Promise<number[][]>
    getMany(keys: number[]): Promise<number[][]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: number[]][]>
    getPairs(key: number): Promise<[k: number, v: number[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: number[]][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: number[]][]>
}

export class SubtensorModuleTxRateLimitStorage extends StorageBase {
    protected getPrefix() {
        return 'SubtensorModule'
    }

    protected getName() {
        return 'TxRateLimit'
    }

    get isV120(): boolean {
        return this.getTypeHash() === '95ff4f914f08e149ddbe1ae2dcb1743bbf9aaae69d04c486e1a398cacfcca06a'
    }

    get asV120(): SubtensorModuleTxRateLimitStorageV120 {
        assert(this.isV120)
        return this as any
    }
}

export interface SubtensorModuleTxRateLimitStorageV120 {
    get(): Promise<bigint>
}

export class SubtensorModuleUidsStorage extends StorageBase {
    protected getPrefix() {
        return 'SubtensorModule'
    }

    protected getName() {
        return 'Uids'
    }

    get isV120(): boolean {
        return this.getTypeHash() === '23220d934e30714113095e35a802fef4225923b9311510bf2e654d9a0b87892b'
    }

    get asV120(): SubtensorModuleUidsStorageV120 {
        assert(this.isV120)
        return this as any
    }
}

export interface SubtensorModuleUidsStorageV120 {
    get(key1: number, key2: Uint8Array): Promise<(number | undefined)>
    getAll(): Promise<number[]>
    getMany(keys: [number, Uint8Array][]): Promise<(number | undefined)[]>
    getKeys(): Promise<[number, Uint8Array][]>
    getKeys(key1: number): Promise<[number, Uint8Array][]>
    getKeys(key1: number, key2: Uint8Array): Promise<[number, Uint8Array][]>
    getKeysPaged(pageSize: number): AsyncIterable<[number, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: number): AsyncIterable<[number, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: number, key2: Uint8Array): AsyncIterable<[number, Uint8Array][]>
    getPairs(): Promise<[k: [number, Uint8Array], v: number][]>
    getPairs(key1: number): Promise<[k: [number, Uint8Array], v: number][]>
    getPairs(key1: number, key2: Uint8Array): Promise<[k: [number, Uint8Array], v: number][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [number, Uint8Array], v: number][]>
    getPairsPaged(pageSize: number, key1: number): AsyncIterable<[k: [number, Uint8Array], v: number][]>
    getPairsPaged(pageSize: number, key1: number, key2: Uint8Array): AsyncIterable<[k: [number, Uint8Array], v: number][]>
}

export class SubtensorModuleUsedWorkStorage extends StorageBase {
    protected getPrefix() {
        return 'SubtensorModule'
    }

    protected getName() {
        return 'UsedWork'
    }

    get isV120(): boolean {
        return this.getTypeHash() === 'ec1d1beab1587b54b80d10cc9e88a63f8d73a3af7d03194a8bc5254b911a3b43'
    }

    get asV120(): SubtensorModuleUsedWorkStorageV120 {
        assert(this.isV120)
        return this as any
    }
}

export interface SubtensorModuleUsedWorkStorageV120 {
    get(key: Uint8Array): Promise<bigint>
    getAll(): Promise<bigint[]>
    getMany(keys: Uint8Array[]): Promise<bigint[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: bigint][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: bigint][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: bigint][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: bigint][]>
}

export class SubtensorModuleValidatorBatchSizeStorage extends StorageBase {
    protected getPrefix() {
        return 'SubtensorModule'
    }

    protected getName() {
        return 'ValidatorBatchSize'
    }

    get isV120(): boolean {
        return this.getTypeHash() === '9e7908b8124823e36125c1c3c4eeb83bc98bf3a24d470648d5614f9fff471ed9'
    }

    get asV120(): SubtensorModuleValidatorBatchSizeStorageV120 {
        assert(this.isV120)
        return this as any
    }
}

export interface SubtensorModuleValidatorBatchSizeStorageV120 {
    get(key: number): Promise<number>
    getAll(): Promise<number[]>
    getMany(keys: number[]): Promise<number[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: number][]>
    getPairs(key: number): Promise<[k: number, v: number][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: number][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: number][]>
}

export class SubtensorModuleValidatorEpochLenStorage extends StorageBase {
    protected getPrefix() {
        return 'SubtensorModule'
    }

    protected getName() {
        return 'ValidatorEpochLen'
    }

    get isV120(): boolean {
        return this.getTypeHash() === '9e7908b8124823e36125c1c3c4eeb83bc98bf3a24d470648d5614f9fff471ed9'
    }

    get asV120(): SubtensorModuleValidatorEpochLenStorageV120 {
        assert(this.isV120)
        return this as any
    }
}

export interface SubtensorModuleValidatorEpochLenStorageV120 {
    get(key: number): Promise<number>
    getAll(): Promise<number[]>
    getMany(keys: number[]): Promise<number[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: number][]>
    getPairs(key: number): Promise<[k: number, v: number][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: number][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: number][]>
}

export class SubtensorModuleValidatorEpochsPerResetStorage extends StorageBase {
    protected getPrefix() {
        return 'SubtensorModule'
    }

    protected getName() {
        return 'ValidatorEpochsPerReset'
    }

    get isV120(): boolean {
        return this.getTypeHash() === '9e7908b8124823e36125c1c3c4eeb83bc98bf3a24d470648d5614f9fff471ed9'
    }

    get asV120(): SubtensorModuleValidatorEpochsPerResetStorageV120 {
        assert(this.isV120)
        return this as any
    }
}

export interface SubtensorModuleValidatorEpochsPerResetStorageV120 {
    get(key: number): Promise<number>
    getAll(): Promise<number[]>
    getMany(keys: number[]): Promise<number[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: number][]>
    getPairs(key: number): Promise<[k: number, v: number][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: number][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: number][]>
}

export class SubtensorModuleValidatorExcludeQuantileStorage extends StorageBase {
    protected getPrefix() {
        return 'SubtensorModule'
    }

    protected getName() {
        return 'ValidatorExcludeQuantile'
    }

    get isV120(): boolean {
        return this.getTypeHash() === '9e7908b8124823e36125c1c3c4eeb83bc98bf3a24d470648d5614f9fff471ed9'
    }

    get asV120(): SubtensorModuleValidatorExcludeQuantileStorageV120 {
        assert(this.isV120)
        return this as any
    }
}

export interface SubtensorModuleValidatorExcludeQuantileStorageV120 {
    get(key: number): Promise<number>
    getAll(): Promise<number[]>
    getMany(keys: number[]): Promise<number[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: number][]>
    getPairs(key: number): Promise<[k: number, v: number][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: number][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: number][]>
}

export class SubtensorModuleValidatorLogitsDivergenceStorage extends StorageBase {
    protected getPrefix() {
        return 'SubtensorModule'
    }

    protected getName() {
        return 'ValidatorLogitsDivergence'
    }

    get isV120(): boolean {
        return this.getTypeHash() === '9e7908b8124823e36125c1c3c4eeb83bc98bf3a24d470648d5614f9fff471ed9'
    }

    get asV120(): SubtensorModuleValidatorLogitsDivergenceStorageV120 {
        assert(this.isV120)
        return this as any
    }
}

export interface SubtensorModuleValidatorLogitsDivergenceStorageV120 {
    get(key: number): Promise<number>
    getAll(): Promise<number[]>
    getMany(keys: number[]): Promise<number[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: number][]>
    getPairs(key: number): Promise<[k: number, v: number][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: number][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: number][]>
}

export class SubtensorModuleValidatorPermitStorage extends StorageBase {
    protected getPrefix() {
        return 'SubtensorModule'
    }

    protected getName() {
        return 'ValidatorPermit'
    }

    get isV120(): boolean {
        return this.getTypeHash() === 'ffe2782ffdb70d89dbfad4a610e25e5e186b5b8254437895d78f2561ba5f42fc'
    }

    get asV120(): SubtensorModuleValidatorPermitStorageV120 {
        assert(this.isV120)
        return this as any
    }
}

export interface SubtensorModuleValidatorPermitStorageV120 {
    get(key: number): Promise<boolean[]>
    getAll(): Promise<boolean[][]>
    getMany(keys: number[]): Promise<boolean[][]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: boolean[]][]>
    getPairs(key: number): Promise<[k: number, v: boolean[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: boolean[]][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: boolean[]][]>
}

export class SubtensorModuleValidatorPruneLenStorage extends StorageBase {
    protected getPrefix() {
        return 'SubtensorModule'
    }

    protected getName() {
        return 'ValidatorPruneLen'
    }

    get isV120(): boolean {
        return this.getTypeHash() === 'd3e59d805c520391cc625ad2bf03c6f9aa8ff3a07b1e6c16d11a34fd9c5392a9'
    }

    get asV120(): SubtensorModuleValidatorPruneLenStorageV120 {
        assert(this.isV120)
        return this as any
    }
}

export interface SubtensorModuleValidatorPruneLenStorageV120 {
    get(key: number): Promise<bigint>
    getAll(): Promise<bigint[]>
    getMany(keys: number[]): Promise<bigint[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: bigint][]>
    getPairs(key: number): Promise<[k: number, v: bigint][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: bigint][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: bigint][]>
}

export class SubtensorModuleValidatorSequenceLengthStorage extends StorageBase {
    protected getPrefix() {
        return 'SubtensorModule'
    }

    protected getName() {
        return 'ValidatorSequenceLength'
    }

    get isV120(): boolean {
        return this.getTypeHash() === '9e7908b8124823e36125c1c3c4eeb83bc98bf3a24d470648d5614f9fff471ed9'
    }

    get asV120(): SubtensorModuleValidatorSequenceLengthStorageV120 {
        assert(this.isV120)
        return this as any
    }
}

export interface SubtensorModuleValidatorSequenceLengthStorageV120 {
    get(key: number): Promise<number>
    getAll(): Promise<number[]>
    getMany(keys: number[]): Promise<number[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: number][]>
    getPairs(key: number): Promise<[k: number, v: number][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: number][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: number][]>
}

export class SubtensorModuleValidatorTrustStorage extends StorageBase {
    protected getPrefix() {
        return 'SubtensorModule'
    }

    protected getName() {
        return 'ValidatorTrust'
    }

    get isV120(): boolean {
        return this.getTypeHash() === '4ad3ba33a23696af6a3f008abbabfdaf2f6e27575ee2ea004ec76fea93963bca'
    }

    get asV120(): SubtensorModuleValidatorTrustStorageV120 {
        assert(this.isV120)
        return this as any
    }
}

export interface SubtensorModuleValidatorTrustStorageV120 {
    get(key: number): Promise<number[]>
    getAll(): Promise<number[][]>
    getMany(keys: number[]): Promise<number[][]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: number[]][]>
    getPairs(key: number): Promise<[k: number, v: number[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: number[]][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: number[]][]>
}

export class SubtensorModuleWeightsStorage extends StorageBase {
    protected getPrefix() {
        return 'SubtensorModule'
    }

    protected getName() {
        return 'Weights'
    }

    get isV120(): boolean {
        return this.getTypeHash() === '3d36a1ff6bd0385d642d961841d4d795ce0b4ecc2dc51528fe95536753d59aab'
    }

    get asV120(): SubtensorModuleWeightsStorageV120 {
        assert(this.isV120)
        return this as any
    }
}

export interface SubtensorModuleWeightsStorageV120 {
    get(key1: number, key2: number): Promise<[number, number][]>
    getAll(): Promise<[number, number][][]>
    getMany(keys: [number, number][]): Promise<[number, number][][]>
    getKeys(): Promise<[number, number][]>
    getKeys(key1: number): Promise<[number, number][]>
    getKeys(key1: number, key2: number): Promise<[number, number][]>
    getKeysPaged(pageSize: number): AsyncIterable<[number, number][]>
    getKeysPaged(pageSize: number, key1: number): AsyncIterable<[number, number][]>
    getKeysPaged(pageSize: number, key1: number, key2: number): AsyncIterable<[number, number][]>
    getPairs(): Promise<[k: [number, number], v: [number, number][]][]>
    getPairs(key1: number): Promise<[k: [number, number], v: [number, number][]][]>
    getPairs(key1: number, key2: number): Promise<[k: [number, number], v: [number, number][]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [number, number], v: [number, number][]][]>
    getPairsPaged(pageSize: number, key1: number): AsyncIterable<[k: [number, number], v: [number, number][]][]>
    getPairsPaged(pageSize: number, key1: number, key2: number): AsyncIterable<[k: [number, number], v: [number, number][]][]>
}

export class SubtensorModuleWeightsSetRateLimitStorage extends StorageBase {
    protected getPrefix() {
        return 'SubtensorModule'
    }

    protected getName() {
        return 'WeightsSetRateLimit'
    }

    get isV120(): boolean {
        return this.getTypeHash() === 'd3e59d805c520391cc625ad2bf03c6f9aa8ff3a07b1e6c16d11a34fd9c5392a9'
    }

    get asV120(): SubtensorModuleWeightsSetRateLimitStorageV120 {
        assert(this.isV120)
        return this as any
    }
}

export interface SubtensorModuleWeightsSetRateLimitStorageV120 {
    get(key: number): Promise<bigint>
    getAll(): Promise<bigint[]>
    getMany(keys: number[]): Promise<bigint[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: bigint][]>
    getPairs(key: number): Promise<[k: number, v: bigint][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: bigint][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: bigint][]>
}

export class SubtensorModuleWeightsVersionKeyStorage extends StorageBase {
    protected getPrefix() {
        return 'SubtensorModule'
    }

    protected getName() {
        return 'WeightsVersionKey'
    }

    get isV120(): boolean {
        return this.getTypeHash() === 'd3e59d805c520391cc625ad2bf03c6f9aa8ff3a07b1e6c16d11a34fd9c5392a9'
    }

    get asV120(): SubtensorModuleWeightsVersionKeyStorageV120 {
        assert(this.isV120)
        return this as any
    }
}

export interface SubtensorModuleWeightsVersionKeyStorageV120 {
    get(key: number): Promise<bigint>
    getAll(): Promise<bigint[]>
    getMany(keys: number[]): Promise<bigint[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: bigint][]>
    getPairs(key: number): Promise<[k: number, v: bigint][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: bigint][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: bigint][]>
}

export class SudoKeyStorage extends StorageBase {
    protected getPrefix() {
        return 'Sudo'
    }

    protected getName() {
        return 'Key'
    }

    /**
     *  The `AccountId` of the sudo key.
     */
    get isV120(): boolean {
        return this.getTypeHash() === '8620bdc4f360add1f8e58e488bdba4fa9b6dab86ecdd1c942b8d9de43ede38e5'
    }

    /**
     *  The `AccountId` of the sudo key.
     */
    get asV120(): SudoKeyStorageV120 {
        assert(this.isV120)
        return this as any
    }
}

/**
 *  The `AccountId` of the sudo key.
 */
export interface SudoKeyStorageV120 {
    get(): Promise<(Uint8Array | undefined)>
}

export class SystemAccountStorage extends StorageBase {
    protected getPrefix() {
        return 'System'
    }

    protected getName() {
        return 'Account'
    }

    /**
     *  The full account information for a particular account ID.
     */
    get isV120(): boolean {
        return this.getTypeHash() === '6890c1aff9ee8613f29f28c61a4338c5967aa55e87574dc736c9de25fae1f270'
    }

    /**
     *  The full account information for a particular account ID.
     */
    get asV120(): SystemAccountStorageV120 {
        assert(this.isV120)
        return this as any
    }
}

/**
 *  The full account information for a particular account ID.
 */
export interface SystemAccountStorageV120 {
    get(key: Uint8Array): Promise<v120.AccountInfo>
    getAll(): Promise<v120.AccountInfo[]>
    getMany(keys: Uint8Array[]): Promise<v120.AccountInfo[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v120.AccountInfo][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v120.AccountInfo][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v120.AccountInfo][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v120.AccountInfo][]>
}

export class SystemAllExtrinsicsLenStorage extends StorageBase {
    protected getPrefix() {
        return 'System'
    }

    protected getName() {
        return 'AllExtrinsicsLen'
    }

    /**
     *  Total length (in bytes) for all extrinsics put together, for the current block.
     */
    get isV120(): boolean {
        return this.getTypeHash() === 'a926ad48d1a07d1162c5fdb99f3f6cef39c7c5a115a92ff9ccf0357bae4bf2ed'
    }

    /**
     *  Total length (in bytes) for all extrinsics put together, for the current block.
     */
    get asV120(): SystemAllExtrinsicsLenStorageV120 {
        assert(this.isV120)
        return this as any
    }
}

/**
 *  Total length (in bytes) for all extrinsics put together, for the current block.
 */
export interface SystemAllExtrinsicsLenStorageV120 {
    get(): Promise<(number | undefined)>
}

export class SystemBlockHashStorage extends StorageBase {
    protected getPrefix() {
        return 'System'
    }

    protected getName() {
        return 'BlockHash'
    }

    /**
     *  Map of block numbers to block hashes.
     */
    get isV120(): boolean {
        return this.getTypeHash() === '06f5703796027f4b198d4ffd50b721273430d8ff663660646793873168f9df17'
    }

    /**
     *  Map of block numbers to block hashes.
     */
    get asV120(): SystemBlockHashStorageV120 {
        assert(this.isV120)
        return this as any
    }
}

/**
 *  Map of block numbers to block hashes.
 */
export interface SystemBlockHashStorageV120 {
    get(key: number): Promise<Uint8Array>
    getAll(): Promise<Uint8Array[]>
    getMany(keys: number[]): Promise<Uint8Array[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: Uint8Array][]>
    getPairs(key: number): Promise<[k: number, v: Uint8Array][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: Uint8Array][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: Uint8Array][]>
}

export class SystemBlockWeightStorage extends StorageBase {
    protected getPrefix() {
        return 'System'
    }

    protected getName() {
        return 'BlockWeight'
    }

    /**
     *  The current weight for the block.
     */
    get isV120(): boolean {
        return this.getTypeHash() === '1b5ecb31f1f780ce8b20535384ce7b3159da495c9f1cbf13a2f253ccb02ae175'
    }

    /**
     *  The current weight for the block.
     */
    get asV120(): SystemBlockWeightStorageV120 {
        assert(this.isV120)
        return this as any
    }
}

/**
 *  The current weight for the block.
 */
export interface SystemBlockWeightStorageV120 {
    get(): Promise<v120.PerDispatchClass>
}

export class SystemDigestStorage extends StorageBase {
    protected getPrefix() {
        return 'System'
    }

    protected getName() {
        return 'Digest'
    }

    /**
     *  Digest of the current block, also part of the block header.
     */
    get isV120(): boolean {
        return this.getTypeHash() === '6edb48fd53810bda6cc1015d69e4aacd63966970836398edb4a47cec0bf3fa85'
    }

    /**
     *  Digest of the current block, also part of the block header.
     */
    get asV120(): SystemDigestStorageV120 {
        assert(this.isV120)
        return this as any
    }
}

/**
 *  Digest of the current block, also part of the block header.
 */
export interface SystemDigestStorageV120 {
    get(): Promise<v120.Digest>
}

export class SystemEventCountStorage extends StorageBase {
    protected getPrefix() {
        return 'System'
    }

    protected getName() {
        return 'EventCount'
    }

    /**
     *  The number of events in the `Events<T>` list.
     */
    get isV120(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  The number of events in the `Events<T>` list.
     */
    get asV120(): SystemEventCountStorageV120 {
        assert(this.isV120)
        return this as any
    }
}

/**
 *  The number of events in the `Events<T>` list.
 */
export interface SystemEventCountStorageV120 {
    get(): Promise<number>
}

export class SystemEventTopicsStorage extends StorageBase {
    protected getPrefix() {
        return 'System'
    }

    protected getName() {
        return 'EventTopics'
    }

    /**
     *  Mapping between a topic (represented by T::Hash) and a vector of indexes
     *  of events in the `<Events<T>>` list.
     * 
     *  All topic vectors have deterministic storage locations depending on the topic. This
     *  allows light-clients to leverage the changes trie storage tracking mechanism and
     *  in case of changes fetch the list of events of interest.
     * 
     *  The value has the type `(T::BlockNumber, EventIndex)` because if we used only just
     *  the `EventIndex` then in case if the topic has the same contents on the next block
     *  no notification will be triggered thus the event might be lost.
     */
    get isV120(): boolean {
        return this.getTypeHash() === 'd5ef37ba3daec264a9dcba5a29bf5b2ff23eb80b912936f924f44a8db557c58d'
    }

    /**
     *  Mapping between a topic (represented by T::Hash) and a vector of indexes
     *  of events in the `<Events<T>>` list.
     * 
     *  All topic vectors have deterministic storage locations depending on the topic. This
     *  allows light-clients to leverage the changes trie storage tracking mechanism and
     *  in case of changes fetch the list of events of interest.
     * 
     *  The value has the type `(T::BlockNumber, EventIndex)` because if we used only just
     *  the `EventIndex` then in case if the topic has the same contents on the next block
     *  no notification will be triggered thus the event might be lost.
     */
    get asV120(): SystemEventTopicsStorageV120 {
        assert(this.isV120)
        return this as any
    }
}

/**
 *  Mapping between a topic (represented by T::Hash) and a vector of indexes
 *  of events in the `<Events<T>>` list.
 * 
 *  All topic vectors have deterministic storage locations depending on the topic. This
 *  allows light-clients to leverage the changes trie storage tracking mechanism and
 *  in case of changes fetch the list of events of interest.
 * 
 *  The value has the type `(T::BlockNumber, EventIndex)` because if we used only just
 *  the `EventIndex` then in case if the topic has the same contents on the next block
 *  no notification will be triggered thus the event might be lost.
 */
export interface SystemEventTopicsStorageV120 {
    get(key: Uint8Array): Promise<[number, number][]>
    getAll(): Promise<[number, number][][]>
    getMany(keys: Uint8Array[]): Promise<[number, number][][]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: [number, number][]][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: [number, number][]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: [number, number][]][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: [number, number][]][]>
}

export class SystemEventsStorage extends StorageBase {
    protected getPrefix() {
        return 'System'
    }

    protected getName() {
        return 'Events'
    }

    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    get isV120(): boolean {
        return this.getTypeHash() === '7d1b086dd72ca668731b43815466b555c5dfb2ea2abd5a046b8ec50db0ecad96'
    }

    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    get asV120(): SystemEventsStorageV120 {
        assert(this.isV120)
        return this as any
    }

    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    get isV121(): boolean {
        return this.getTypeHash() === 'd66e78002c5732e255e6525b91ab441017c46099405aa7270875d24ac7a64290'
    }

    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    get asV121(): SystemEventsStorageV121 {
        assert(this.isV121)
        return this as any
    }
}

/**
 *  Events deposited for the current block.
 * 
 *  NOTE: The item is unbound and should therefore never be read on chain.
 *  It could otherwise inflate the PoV size of a block.
 * 
 *  Events have a large in-memory size. Box the events to not go out-of-memory
 *  just in case someone still reads them from within the runtime.
 */
export interface SystemEventsStorageV120 {
    get(): Promise<v120.EventRecord[]>
}

/**
 *  Events deposited for the current block.
 * 
 *  NOTE: The item is unbound and should therefore never be read on chain.
 *  It could otherwise inflate the PoV size of a block.
 * 
 *  Events have a large in-memory size. Box the events to not go out-of-memory
 *  just in case someone still reads them from within the runtime.
 */
export interface SystemEventsStorageV121 {
    get(): Promise<v121.EventRecord[]>
}

export class SystemExecutionPhaseStorage extends StorageBase {
    protected getPrefix() {
        return 'System'
    }

    protected getName() {
        return 'ExecutionPhase'
    }

    /**
     *  The execution phase of the block.
     */
    get isV120(): boolean {
        return this.getTypeHash() === '0ad1e323fa21971add5b3b0cc709a6e02dc7c64db7d344c1a67ec0227969ae75'
    }

    /**
     *  The execution phase of the block.
     */
    get asV120(): SystemExecutionPhaseStorageV120 {
        assert(this.isV120)
        return this as any
    }
}

/**
 *  The execution phase of the block.
 */
export interface SystemExecutionPhaseStorageV120 {
    get(): Promise<(v120.Phase | undefined)>
}

export class SystemExtrinsicCountStorage extends StorageBase {
    protected getPrefix() {
        return 'System'
    }

    protected getName() {
        return 'ExtrinsicCount'
    }

    /**
     *  Total extrinsics count for the current block.
     */
    get isV120(): boolean {
        return this.getTypeHash() === 'a926ad48d1a07d1162c5fdb99f3f6cef39c7c5a115a92ff9ccf0357bae4bf2ed'
    }

    /**
     *  Total extrinsics count for the current block.
     */
    get asV120(): SystemExtrinsicCountStorageV120 {
        assert(this.isV120)
        return this as any
    }
}

/**
 *  Total extrinsics count for the current block.
 */
export interface SystemExtrinsicCountStorageV120 {
    get(): Promise<(number | undefined)>
}

export class SystemExtrinsicDataStorage extends StorageBase {
    protected getPrefix() {
        return 'System'
    }

    protected getName() {
        return 'ExtrinsicData'
    }

    /**
     *  Extrinsics data for the current block (maps an extrinsic's index to its data).
     */
    get isV120(): boolean {
        return this.getTypeHash() === 'f278d7d239e9ac4cbb0509cc885124fd45c3f5b75452aba0391701e1a886debb'
    }

    /**
     *  Extrinsics data for the current block (maps an extrinsic's index to its data).
     */
    get asV120(): SystemExtrinsicDataStorageV120 {
        assert(this.isV120)
        return this as any
    }
}

/**
 *  Extrinsics data for the current block (maps an extrinsic's index to its data).
 */
export interface SystemExtrinsicDataStorageV120 {
    get(key: number): Promise<Uint8Array>
    getAll(): Promise<Uint8Array[]>
    getMany(keys: number[]): Promise<Uint8Array[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: Uint8Array][]>
    getPairs(key: number): Promise<[k: number, v: Uint8Array][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: Uint8Array][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: Uint8Array][]>
}

export class SystemLastRuntimeUpgradeStorage extends StorageBase {
    protected getPrefix() {
        return 'System'
    }

    protected getName() {
        return 'LastRuntimeUpgrade'
    }

    /**
     *  Stores the `spec_version` and `spec_name` of when the last runtime upgrade happened.
     */
    get isV120(): boolean {
        return this.getTypeHash() === 'e03e445e7a7694163bede3a772a8a347abf7a3a00424fbafec75f819d6173a17'
    }

    /**
     *  Stores the `spec_version` and `spec_name` of when the last runtime upgrade happened.
     */
    get asV120(): SystemLastRuntimeUpgradeStorageV120 {
        assert(this.isV120)
        return this as any
    }
}

/**
 *  Stores the `spec_version` and `spec_name` of when the last runtime upgrade happened.
 */
export interface SystemLastRuntimeUpgradeStorageV120 {
    get(): Promise<(v120.LastRuntimeUpgradeInfo | undefined)>
}

export class SystemNumberStorage extends StorageBase {
    protected getPrefix() {
        return 'System'
    }

    protected getName() {
        return 'Number'
    }

    /**
     *  The current block number being processed. Set by `execute_block`.
     */
    get isV120(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  The current block number being processed. Set by `execute_block`.
     */
    get asV120(): SystemNumberStorageV120 {
        assert(this.isV120)
        return this as any
    }
}

/**
 *  The current block number being processed. Set by `execute_block`.
 */
export interface SystemNumberStorageV120 {
    get(): Promise<number>
}

export class SystemParentHashStorage extends StorageBase {
    protected getPrefix() {
        return 'System'
    }

    protected getName() {
        return 'ParentHash'
    }

    /**
     *  Hash of the previous block.
     */
    get isV120(): boolean {
        return this.getTypeHash() === '146c0d1dce070e2a43f497c479248a882f4ed48937203ea336e85dcf2fa0ec6c'
    }

    /**
     *  Hash of the previous block.
     */
    get asV120(): SystemParentHashStorageV120 {
        assert(this.isV120)
        return this as any
    }
}

/**
 *  Hash of the previous block.
 */
export interface SystemParentHashStorageV120 {
    get(): Promise<Uint8Array>
}

export class SystemUpgradedToTripleRefCountStorage extends StorageBase {
    protected getPrefix() {
        return 'System'
    }

    protected getName() {
        return 'UpgradedToTripleRefCount'
    }

    /**
     *  True if we have upgraded so that AccountInfo contains three types of `RefCount`. False
     *  (default) if not.
     */
    get isV120(): boolean {
        return this.getTypeHash() === '1b6fbf1674d189f761a7ac63093bf5c755bf073dd9d9f0dbe657289f92575db5'
    }

    /**
     *  True if we have upgraded so that AccountInfo contains three types of `RefCount`. False
     *  (default) if not.
     */
    get asV120(): SystemUpgradedToTripleRefCountStorageV120 {
        assert(this.isV120)
        return this as any
    }
}

/**
 *  True if we have upgraded so that AccountInfo contains three types of `RefCount`. False
 *  (default) if not.
 */
export interface SystemUpgradedToTripleRefCountStorageV120 {
    get(): Promise<boolean>
}

export class SystemUpgradedToU32RefCountStorage extends StorageBase {
    protected getPrefix() {
        return 'System'
    }

    protected getName() {
        return 'UpgradedToU32RefCount'
    }

    /**
     *  True if we have upgraded so that `type RefCount` is `u32`. False (default) if not.
     */
    get isV120(): boolean {
        return this.getTypeHash() === '1b6fbf1674d189f761a7ac63093bf5c755bf073dd9d9f0dbe657289f92575db5'
    }

    /**
     *  True if we have upgraded so that `type RefCount` is `u32`. False (default) if not.
     */
    get asV120(): SystemUpgradedToU32RefCountStorageV120 {
        assert(this.isV120)
        return this as any
    }
}

/**
 *  True if we have upgraded so that `type RefCount` is `u32`. False (default) if not.
 */
export interface SystemUpgradedToU32RefCountStorageV120 {
    get(): Promise<boolean>
}

export class TimestampDidUpdateStorage extends StorageBase {
    protected getPrefix() {
        return 'Timestamp'
    }

    protected getName() {
        return 'DidUpdate'
    }

    /**
     *  Did the timestamp get updated in this block?
     */
    get isV120(): boolean {
        return this.getTypeHash() === '1b6fbf1674d189f761a7ac63093bf5c755bf073dd9d9f0dbe657289f92575db5'
    }

    /**
     *  Did the timestamp get updated in this block?
     */
    get asV120(): TimestampDidUpdateStorageV120 {
        assert(this.isV120)
        return this as any
    }
}

/**
 *  Did the timestamp get updated in this block?
 */
export interface TimestampDidUpdateStorageV120 {
    get(): Promise<boolean>
}

export class TimestampNowStorage extends StorageBase {
    protected getPrefix() {
        return 'Timestamp'
    }

    protected getName() {
        return 'Now'
    }

    /**
     *  Current time for the current block.
     */
    get isV120(): boolean {
        return this.getTypeHash() === '95ff4f914f08e149ddbe1ae2dcb1743bbf9aaae69d04c486e1a398cacfcca06a'
    }

    /**
     *  Current time for the current block.
     */
    get asV120(): TimestampNowStorageV120 {
        assert(this.isV120)
        return this as any
    }
}

/**
 *  Current time for the current block.
 */
export interface TimestampNowStorageV120 {
    get(): Promise<bigint>
}

export class TransactionPaymentNextFeeMultiplierStorage extends StorageBase {
    protected getPrefix() {
        return 'TransactionPayment'
    }

    protected getName() {
        return 'NextFeeMultiplier'
    }

    get isV120(): boolean {
        return this.getTypeHash() === 'f8ebe28eb30158172c0ccf672f7747c46a244f892d08ef2ebcbaadde34a26bc0'
    }

    get asV120(): TransactionPaymentNextFeeMultiplierStorageV120 {
        assert(this.isV120)
        return this as any
    }
}

export interface TransactionPaymentNextFeeMultiplierStorageV120 {
    get(): Promise<bigint>
}

export class TransactionPaymentStorageVersionStorage extends StorageBase {
    protected getPrefix() {
        return 'TransactionPayment'
    }

    protected getName() {
        return 'StorageVersion'
    }

    get isV120(): boolean {
        return this.getTypeHash() === '7a0b9b43fb3e876cfa92bb4b00e569ef9a82972b0600c8a8570e064c7e3890fd'
    }

    get asV120(): TransactionPaymentStorageVersionStorageV120 {
        assert(this.isV120)
        return this as any
    }
}

export interface TransactionPaymentStorageVersionStorageV120 {
    get(): Promise<v120.Releases>
}
