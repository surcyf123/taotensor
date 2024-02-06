import assert from 'assert'
import {Block, BlockContext, Chain, ChainContext, Option, Result, StorageBase} from './support'
import * as v100 from './v100'
import * as v105 from './v105'
import * as v107 from './v107'
import * as v117 from './v117'
import * as v118 from './v118'
import * as v102 from './v102'
import * as v108 from './v108'
import * as v111 from './v111'
import * as v112 from './v112'

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
    get isV102(): boolean {
        return this.getTypeHash() === 'f5df25eadcdffaa0d2a68b199d671d3921ca36a7b70d22d57506dca52b4b5895'
    }

    /**
     *  The current authority set.
     */
    get asV102(): AuraAuthoritiesStorageV102 {
        assert(this.isV102)
        return this as any
    }
}

/**
 *  The current authority set.
 */
export interface AuraAuthoritiesStorageV102 {
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
    get isV102(): boolean {
        return this.getTypeHash() === '95ff4f914f08e149ddbe1ae2dcb1743bbf9aaae69d04c486e1a398cacfcca06a'
    }

    /**
     *  The current slot of this block.
     * 
     *  This will be set in `on_initialize`.
     */
    get asV102(): AuraCurrentSlotStorageV102 {
        assert(this.isV102)
        return this as any
    }
}

/**
 *  The current slot of this block.
 * 
 *  This will be set in `on_initialize`.
 */
export interface AuraCurrentSlotStorageV102 {
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
     *  The balance of an account.
     * 
     *  NOTE: This is only used in the case that this pallet is used to store balances.
     */
    get isV100(): boolean {
        return this.getTypeHash() === '0b3b4bf0dd7388459eba461bc7c3226bf58608c941710a714e02f33ec0f91e78'
    }

    /**
     *  The balance of an account.
     * 
     *  NOTE: This is only used in the case that this pallet is used to store balances.
     */
    get asV100(): BalancesAccountStorageV100 {
        assert(this.isV100)
        return this as any
    }
}

/**
 *  The balance of an account.
 * 
 *  NOTE: This is only used in the case that this pallet is used to store balances.
 */
export interface BalancesAccountStorageV100 {
    get(key: Uint8Array): Promise<v100.AccountData>
    getAll(): Promise<v100.AccountData[]>
    getMany(keys: Uint8Array[]): Promise<v100.AccountData[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v100.AccountData][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v100.AccountData][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v100.AccountData][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v100.AccountData][]>
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
    get isV100(): boolean {
        return this.getTypeHash() === 'e393b3a20a6d47aee703c898fda1db02fffe128e4692a5861f416ecc67b13a86'
    }

    /**
     *  Any liquidity locks on some account balances.
     *  NOTE: Should only be accessed when setting, changing and freeing a lock.
     */
    get asV100(): BalancesLocksStorageV100 {
        assert(this.isV100)
        return this as any
    }
}

/**
 *  Any liquidity locks on some account balances.
 *  NOTE: Should only be accessed when setting, changing and freeing a lock.
 */
export interface BalancesLocksStorageV100 {
    get(key: Uint8Array): Promise<v100.BalanceLock[]>
    getAll(): Promise<v100.BalanceLock[][]>
    getMany(keys: Uint8Array[]): Promise<v100.BalanceLock[][]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v100.BalanceLock[]][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v100.BalanceLock[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v100.BalanceLock[]][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v100.BalanceLock[]][]>
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
    get isV100(): boolean {
        return this.getTypeHash() === '474ab364918936227f04514c303c572bb070961f30f593f2cbb3e25426aba37a'
    }

    /**
     *  Named reserves on some account balances.
     */
    get asV100(): BalancesReservesStorageV100 {
        assert(this.isV100)
        return this as any
    }
}

/**
 *  Named reserves on some account balances.
 */
export interface BalancesReservesStorageV100 {
    get(key: Uint8Array): Promise<v100.ReserveData[]>
    getAll(): Promise<v100.ReserveData[][]>
    getMany(keys: Uint8Array[]): Promise<v100.ReserveData[][]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v100.ReserveData[]][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v100.ReserveData[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v100.ReserveData[]][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v100.ReserveData[]][]>
}

export class BalancesStorageVersionStorage extends StorageBase {
    protected getPrefix() {
        return 'Balances'
    }

    protected getName() {
        return 'StorageVersion'
    }

    /**
     *  Storage version of the pallet.
     * 
     *  This is set to v2.0.0 for new networks.
     */
    get isV100(): boolean {
        return this.getTypeHash() === '78a0d483d7fe4fc699def1765b9b22deed84e9f003169321f89a7b2c516a4ffe'
    }

    /**
     *  Storage version of the pallet.
     * 
     *  This is set to v2.0.0 for new networks.
     */
    get asV100(): BalancesStorageVersionStorageV100 {
        assert(this.isV100)
        return this as any
    }

    /**
     *  Storage version of the pallet.
     * 
     *  This is set to v2.0.0 for new networks.
     */
    get isV102(): boolean {
        return this.getTypeHash() === '1431e80ffaa4d10a7fe714faa381ada05c3baae7e12aa80f24f8728a41ba57c4'
    }

    /**
     *  Storage version of the pallet.
     * 
     *  This is set to v2.0.0 for new networks.
     */
    get asV102(): BalancesStorageVersionStorageV102 {
        assert(this.isV102)
        return this as any
    }
}

/**
 *  Storage version of the pallet.
 * 
 *  This is set to v2.0.0 for new networks.
 */
export interface BalancesStorageVersionStorageV100 {
    get(): Promise<v100.Releases>
}

/**
 *  Storage version of the pallet.
 * 
 *  This is set to v2.0.0 for new networks.
 */
export interface BalancesStorageVersionStorageV102 {
    get(): Promise<v102.Releases>
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
    get isV100(): boolean {
        return this.getTypeHash() === 'f8ebe28eb30158172c0ccf672f7747c46a244f892d08ef2ebcbaadde34a26bc0'
    }

    /**
     *  The total units issued in the system.
     */
    get asV100(): BalancesTotalIssuanceStorageV100 {
        assert(this.isV100)
        return this as any
    }
}

/**
 *  The total units issued in the system.
 */
export interface BalancesTotalIssuanceStorageV100 {
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
    get isV100(): boolean {
        return this.getTypeHash() === '95ff4f914f08e149ddbe1ae2dcb1743bbf9aaae69d04c486e1a398cacfcca06a'
    }

    /**
     *  The number of changes (both in terms of keys and underlying economic responsibilities)
     *  in the "set" of Grandpa validators from genesis.
     */
    get asV100(): GrandpaCurrentSetIdStorageV100 {
        assert(this.isV100)
        return this as any
    }
}

/**
 *  The number of changes (both in terms of keys and underlying economic responsibilities)
 *  in the "set" of Grandpa validators from genesis.
 */
export interface GrandpaCurrentSetIdStorageV100 {
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
    get isV100(): boolean {
        return this.getTypeHash() === 'a926ad48d1a07d1162c5fdb99f3f6cef39c7c5a115a92ff9ccf0357bae4bf2ed'
    }

    /**
     *  next block number where we can force a change.
     */
    get asV100(): GrandpaNextForcedStorageV100 {
        assert(this.isV100)
        return this as any
    }
}

/**
 *  next block number where we can force a change.
 */
export interface GrandpaNextForcedStorageV100 {
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
    get isV100(): boolean {
        return this.getTypeHash() === '13755304b861af7343de28e9c0f8c93252785a6950a8ef864736ceb88092a3c7'
    }

    /**
     *  Pending change: (signaled at, scheduled change).
     */
    get asV100(): GrandpaPendingChangeStorageV100 {
        assert(this.isV100)
        return this as any
    }

    /**
     *  Pending change: (signaled at, scheduled change).
     */
    get isV102(): boolean {
        return this.getTypeHash() === 'd8fc2937fb26b147a79b5d1c609ef3bb0386ef95a7bac7b1d42b218773058c3b'
    }

    /**
     *  Pending change: (signaled at, scheduled change).
     */
    get asV102(): GrandpaPendingChangeStorageV102 {
        assert(this.isV102)
        return this as any
    }
}

/**
 *  Pending change: (signaled at, scheduled change).
 */
export interface GrandpaPendingChangeStorageV100 {
    get(): Promise<(v100.StoredPendingChange | undefined)>
}

/**
 *  Pending change: (signaled at, scheduled change).
 */
export interface GrandpaPendingChangeStorageV102 {
    get(): Promise<(v102.StoredPendingChange | undefined)>
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
     *  TWOX-NOTE: `SetId` is not under user control.
     */
    get isV100(): boolean {
        return this.getTypeHash() === '2d385d75717e58066ac593e8c94f49e0ce544a47573cd5889073ca2ac7c97de9'
    }

    /**
     *  A mapping from grandpa set ID to the index of the *most recent* session for which its
     *  members were responsible.
     * 
     *  TWOX-NOTE: `SetId` is not under user control.
     */
    get asV100(): GrandpaSetIdSessionStorageV100 {
        assert(this.isV100)
        return this as any
    }
}

/**
 *  A mapping from grandpa set ID to the index of the *most recent* session for which its
 *  members were responsible.
 * 
 *  TWOX-NOTE: `SetId` is not under user control.
 */
export interface GrandpaSetIdSessionStorageV100 {
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
    get isV100(): boolean {
        return this.getTypeHash() === '3b9e892deedcedebca6cccb95fac40be1ea485932811a2dcae3ec80a6b871360'
    }

    /**
     *  `true` if we are currently stalled.
     */
    get asV100(): GrandpaStalledStorageV100 {
        assert(this.isV100)
        return this as any
    }
}

/**
 *  `true` if we are currently stalled.
 */
export interface GrandpaStalledStorageV100 {
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
    get isV100(): boolean {
        return this.getTypeHash() === 'd29e1b762b13b4994e98ec10b0ecf04d5e9132829fb105fd6b9bc2a98b77ee17'
    }

    /**
     *  State of the current authority set.
     */
    get asV100(): GrandpaStateStorageV100 {
        assert(this.isV100)
        return this as any
    }

    /**
     *  State of the current authority set.
     */
    get isV102(): boolean {
        return this.getTypeHash() === '7e7a7e0912740b55ac7227f3f2a3612d23a3fefb1cd7f6da52f12f322350a0ce'
    }

    /**
     *  State of the current authority set.
     */
    get asV102(): GrandpaStateStorageV102 {
        assert(this.isV102)
        return this as any
    }
}

/**
 *  State of the current authority set.
 */
export interface GrandpaStateStorageV100 {
    get(): Promise<v100.StoredState>
}

/**
 *  State of the current authority set.
 */
export interface GrandpaStateStorageV102 {
    get(): Promise<v102.StoredState>
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
    get isV100(): boolean {
        return this.getTypeHash() === 'f5df25eadcdffaa0d2a68b199d671d3921ca36a7b70d22d57506dca52b4b5895'
    }

    /**
     *  Series of block headers from the last 81 blocks that acts as random seed material. This
     *  is arranged as a ring buffer with `block_number % 81` being the index into the `Vec` of
     *  the oldest hash.
     */
    get asV100(): RandomnessCollectiveFlipRandomMaterialStorageV100 {
        assert(this.isV100)
        return this as any
    }
}

/**
 *  Series of block headers from the last 81 blocks that acts as random seed material. This
 *  is arranged as a ring buffer with `block_number % 81` being the index into the `Vec` of
 *  the oldest hash.
 */
export interface RandomnessCollectiveFlipRandomMaterialStorageV100 {
    get(): Promise<Uint8Array[]>
}

export class SubtensorModuleActivityCutoffStorage extends StorageBase {
    protected getPrefix() {
        return 'SubtensorModule'
    }

    protected getName() {
        return 'ActivityCutoff'
    }

    get isV100(): boolean {
        return this.getTypeHash() === '95ff4f914f08e149ddbe1ae2dcb1743bbf9aaae69d04c486e1a398cacfcca06a'
    }

    get asV100(): SubtensorModuleActivityCutoffStorageV100 {
        assert(this.isV100)
        return this as any
    }
}

export interface SubtensorModuleActivityCutoffStorageV100 {
    get(): Promise<bigint>
}

export class SubtensorModuleAdjustmentIntervalStorage extends StorageBase {
    protected getPrefix() {
        return 'SubtensorModule'
    }

    protected getName() {
        return 'AdjustmentInterval'
    }

    get isV100(): boolean {
        return this.getTypeHash() === '95ff4f914f08e149ddbe1ae2dcb1743bbf9aaae69d04c486e1a398cacfcca06a'
    }

    get asV100(): SubtensorModuleAdjustmentIntervalStorageV100 {
        assert(this.isV100)
        return this as any
    }
}

export interface SubtensorModuleAdjustmentIntervalStorageV100 {
    get(): Promise<bigint>
}

export class SubtensorModuleBlockAtRegistrationStorage extends StorageBase {
    protected getPrefix() {
        return 'SubtensorModule'
    }

    protected getName() {
        return 'BlockAtRegistration'
    }

    get isV107(): boolean {
        return this.getTypeHash() === '228bf827d35e95d258d11cd66d3469a9c64a8ee7fbe63ce51106d34980b5a861'
    }

    get asV107(): SubtensorModuleBlockAtRegistrationStorageV107 {
        assert(this.isV107)
        return this as any
    }
}

export interface SubtensorModuleBlockAtRegistrationStorageV107 {
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

export class SubtensorModuleBlocksPerStepStorage extends StorageBase {
    protected getPrefix() {
        return 'SubtensorModule'
    }

    protected getName() {
        return 'BlocksPerStep'
    }

    get isV105(): boolean {
        return this.getTypeHash() === '95ff4f914f08e149ddbe1ae2dcb1743bbf9aaae69d04c486e1a398cacfcca06a'
    }

    get asV105(): SubtensorModuleBlocksPerStepStorageV105 {
        assert(this.isV105)
        return this as any
    }
}

export interface SubtensorModuleBlocksPerStepStorageV105 {
    get(): Promise<bigint>
}

export class SubtensorModuleBlocksSinceLastStepStorage extends StorageBase {
    protected getPrefix() {
        return 'SubtensorModule'
    }

    protected getName() {
        return 'BlocksSinceLastStep'
    }

    get isV105(): boolean {
        return this.getTypeHash() === '95ff4f914f08e149ddbe1ae2dcb1743bbf9aaae69d04c486e1a398cacfcca06a'
    }

    get asV105(): SubtensorModuleBlocksSinceLastStepStorageV105 {
        assert(this.isV105)
        return this as any
    }
}

export interface SubtensorModuleBlocksSinceLastStepStorageV105 {
    get(): Promise<bigint>
}

export class SubtensorModuleBondsMovingAverageStorage extends StorageBase {
    protected getPrefix() {
        return 'SubtensorModule'
    }

    protected getName() {
        return 'BondsMovingAverage'
    }

    get isV117(): boolean {
        return this.getTypeHash() === '95ff4f914f08e149ddbe1ae2dcb1743bbf9aaae69d04c486e1a398cacfcca06a'
    }

    get asV117(): SubtensorModuleBondsMovingAverageStorageV117 {
        assert(this.isV117)
        return this as any
    }
}

export interface SubtensorModuleBondsMovingAverageStorageV117 {
    get(): Promise<bigint>
}

export class SubtensorModuleDifficultyStorage extends StorageBase {
    protected getPrefix() {
        return 'SubtensorModule'
    }

    protected getName() {
        return 'Difficulty'
    }

    get isV100(): boolean {
        return this.getTypeHash() === '95ff4f914f08e149ddbe1ae2dcb1743bbf9aaae69d04c486e1a398cacfcca06a'
    }

    get asV100(): SubtensorModuleDifficultyStorageV100 {
        assert(this.isV100)
        return this as any
    }
}

export interface SubtensorModuleDifficultyStorageV100 {
    get(): Promise<bigint>
}

export class SubtensorModuleFoundationAccountStorage extends StorageBase {
    protected getPrefix() {
        return 'SubtensorModule'
    }

    protected getName() {
        return 'FoundationAccount'
    }

    /**
     *  #[pallet::type_value] 
     *  pub fn DefaultFoundationAccount<T: Config>() -> u64 { T::InitialFoundationAccount::get() }
     */
    get isV117(): boolean {
        return this.getTypeHash() === '146c0d1dce070e2a43f497c479248a882f4ed48937203ea336e85dcf2fa0ec6c'
    }

    /**
     *  #[pallet::type_value] 
     *  pub fn DefaultFoundationAccount<T: Config>() -> u64 { T::InitialFoundationAccount::get() }
     */
    get asV117(): SubtensorModuleFoundationAccountStorageV117 {
        assert(this.isV117)
        return this as any
    }

    /**
     *  #[pallet::type_value] 
     *  pub fn DefaultFoundationAccount<T: Config>() -> u64 { T::InitialFoundationAccount::get() }
     */
    get isV102(): boolean {
        return this.getTypeHash() === '8620bdc4f360add1f8e58e488bdba4fa9b6dab86ecdd1c942b8d9de43ede38e5'
    }

    /**
     *  #[pallet::type_value] 
     *  pub fn DefaultFoundationAccount<T: Config>() -> u64 { T::InitialFoundationAccount::get() }
     */
    get asV102(): SubtensorModuleFoundationAccountStorageV102 {
        assert(this.isV102)
        return this as any
    }
}

/**
 *  #[pallet::type_value] 
 *  pub fn DefaultFoundationAccount<T: Config>() -> u64 { T::InitialFoundationAccount::get() }
 */
export interface SubtensorModuleFoundationAccountStorageV117 {
    get(): Promise<Uint8Array>
}

/**
 *  #[pallet::type_value] 
 *  pub fn DefaultFoundationAccount<T: Config>() -> u64 { T::InitialFoundationAccount::get() }
 */
export interface SubtensorModuleFoundationAccountStorageV102 {
    get(): Promise<(Uint8Array | undefined)>
}

export class SubtensorModuleFoundationDistributionStorage extends StorageBase {
    protected getPrefix() {
        return 'SubtensorModule'
    }

    protected getName() {
        return 'FoundationDistribution'
    }

    get isV117(): boolean {
        return this.getTypeHash() === '95ff4f914f08e149ddbe1ae2dcb1743bbf9aaae69d04c486e1a398cacfcca06a'
    }

    get asV117(): SubtensorModuleFoundationDistributionStorageV117 {
        assert(this.isV117)
        return this as any
    }
}

export interface SubtensorModuleFoundationDistributionStorageV117 {
    get(): Promise<bigint>
}

export class SubtensorModuleHotkeysStorage extends StorageBase {
    protected getPrefix() {
        return 'SubtensorModule'
    }

    protected getName() {
        return 'Hotkeys'
    }

    /**
     *  ---- Maps from hotkey to uid.
     */
    get isV100(): boolean {
        return this.getTypeHash() === '25f0d63900988134e6767c7fe398885c0448fd3bd7a0d8ff90cf6b33a482cebd'
    }

    /**
     *  ---- Maps from hotkey to uid.
     */
    get asV100(): SubtensorModuleHotkeysStorageV100 {
        assert(this.isV100)
        return this as any
    }
}

/**
 *  ---- Maps from hotkey to uid.
 */
export interface SubtensorModuleHotkeysStorageV100 {
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

export class SubtensorModuleImmunityPeriodStorage extends StorageBase {
    protected getPrefix() {
        return 'SubtensorModule'
    }

    protected getName() {
        return 'ImmunityPeriod'
    }

    get isV107(): boolean {
        return this.getTypeHash() === '95ff4f914f08e149ddbe1ae2dcb1743bbf9aaae69d04c486e1a398cacfcca06a'
    }

    get asV107(): SubtensorModuleImmunityPeriodStorageV107 {
        assert(this.isV107)
        return this as any
    }
}

export interface SubtensorModuleImmunityPeriodStorageV107 {
    get(): Promise<bigint>
}

export class SubtensorModuleIncentivePruningDenominatorStorage extends StorageBase {
    protected getPrefix() {
        return 'SubtensorModule'
    }

    protected getName() {
        return 'IncentivePruningDenominator'
    }

    get isV117(): boolean {
        return this.getTypeHash() === '95ff4f914f08e149ddbe1ae2dcb1743bbf9aaae69d04c486e1a398cacfcca06a'
    }

    get asV117(): SubtensorModuleIncentivePruningDenominatorStorageV117 {
        assert(this.isV117)
        return this as any
    }
}

export interface SubtensorModuleIncentivePruningDenominatorStorageV117 {
    get(): Promise<bigint>
}

export class SubtensorModuleKappaStorage extends StorageBase {
    protected getPrefix() {
        return 'SubtensorModule'
    }

    protected getName() {
        return 'Kappa'
    }

    get isV107(): boolean {
        return this.getTypeHash() === '95ff4f914f08e149ddbe1ae2dcb1743bbf9aaae69d04c486e1a398cacfcca06a'
    }

    get asV107(): SubtensorModuleKappaStorageV107 {
        assert(this.isV107)
        return this as any
    }
}

export interface SubtensorModuleKappaStorageV107 {
    get(): Promise<bigint>
}

export class SubtensorModuleLastDifficultyAdjustmentBlockStorage extends StorageBase {
    protected getPrefix() {
        return 'SubtensorModule'
    }

    protected getName() {
        return 'LastDifficultyAdjustmentBlock'
    }

    get isV100(): boolean {
        return this.getTypeHash() === '95ff4f914f08e149ddbe1ae2dcb1743bbf9aaae69d04c486e1a398cacfcca06a'
    }

    get asV100(): SubtensorModuleLastDifficultyAdjustmentBlockStorageV100 {
        assert(this.isV100)
        return this as any
    }
}

export interface SubtensorModuleLastDifficultyAdjustmentBlockStorageV100 {
    get(): Promise<bigint>
}

export class SubtensorModuleLastMechansimStepBlockStorage extends StorageBase {
    protected getPrefix() {
        return 'SubtensorModule'
    }

    protected getName() {
        return 'LastMechansimStepBlock'
    }

    get isV107(): boolean {
        return this.getTypeHash() === '95ff4f914f08e149ddbe1ae2dcb1743bbf9aaae69d04c486e1a398cacfcca06a'
    }

    get asV107(): SubtensorModuleLastMechansimStepBlockStorageV107 {
        assert(this.isV107)
        return this as any
    }
}

export interface SubtensorModuleLastMechansimStepBlockStorageV107 {
    get(): Promise<bigint>
}

export class SubtensorModuleMaxAllowedMaxMinRatioStorage extends StorageBase {
    protected getPrefix() {
        return 'SubtensorModule'
    }

    protected getName() {
        return 'MaxAllowedMaxMinRatio'
    }

    get isV117(): boolean {
        return this.getTypeHash() === '95ff4f914f08e149ddbe1ae2dcb1743bbf9aaae69d04c486e1a398cacfcca06a'
    }

    get asV117(): SubtensorModuleMaxAllowedMaxMinRatioStorageV117 {
        assert(this.isV117)
        return this as any
    }
}

export interface SubtensorModuleMaxAllowedMaxMinRatioStorageV117 {
    get(): Promise<bigint>
}

export class SubtensorModuleMaxAllowedUidsStorage extends StorageBase {
    protected getPrefix() {
        return 'SubtensorModule'
    }

    protected getName() {
        return 'MaxAllowedUids'
    }

    get isV107(): boolean {
        return this.getTypeHash() === '95ff4f914f08e149ddbe1ae2dcb1743bbf9aaae69d04c486e1a398cacfcca06a'
    }

    get asV107(): SubtensorModuleMaxAllowedUidsStorageV107 {
        assert(this.isV107)
        return this as any
    }
}

export interface SubtensorModuleMaxAllowedUidsStorageV107 {
    get(): Promise<bigint>
}

export class SubtensorModuleMaxRegistrationsPerBlockStorage extends StorageBase {
    protected getPrefix() {
        return 'SubtensorModule'
    }

    protected getName() {
        return 'MaxRegistrationsPerBlock'
    }

    get isV100(): boolean {
        return this.getTypeHash() === '95ff4f914f08e149ddbe1ae2dcb1743bbf9aaae69d04c486e1a398cacfcca06a'
    }

    get asV100(): SubtensorModuleMaxRegistrationsPerBlockStorageV100 {
        assert(this.isV100)
        return this as any
    }
}

export interface SubtensorModuleMaxRegistrationsPerBlockStorageV100 {
    get(): Promise<bigint>
}

export class SubtensorModuleMaxWeightLimitStorage extends StorageBase {
    protected getPrefix() {
        return 'SubtensorModule'
    }

    protected getName() {
        return 'MaxWeightLimit'
    }

    get isV111(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    get asV111(): SubtensorModuleMaxWeightLimitStorageV111 {
        assert(this.isV111)
        return this as any
    }
}

export interface SubtensorModuleMaxWeightLimitStorageV111 {
    get(): Promise<number>
}

export class SubtensorModuleMinAllowedWeightsStorage extends StorageBase {
    protected getPrefix() {
        return 'SubtensorModule'
    }

    protected getName() {
        return 'MinAllowedWeights'
    }

    get isV117(): boolean {
        return this.getTypeHash() === '95ff4f914f08e149ddbe1ae2dcb1743bbf9aaae69d04c486e1a398cacfcca06a'
    }

    get asV117(): SubtensorModuleMinAllowedWeightsStorageV117 {
        assert(this.isV117)
        return this as any
    }
}

export interface SubtensorModuleMinAllowedWeightsStorageV117 {
    get(): Promise<bigint>
}

export class SubtensorModuleNStorage extends StorageBase {
    protected getPrefix() {
        return 'SubtensorModule'
    }

    protected getName() {
        return 'N'
    }

    /**
     *  ************************************************************
     * 	*---- Storage Objects
     *  ************************************************************
     */
    get isV100(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  ************************************************************
     * 	*---- Storage Objects
     *  ************************************************************
     */
    get asV100(): SubtensorModuleNStorageV100 {
        assert(this.isV100)
        return this as any
    }
}

/**
 *  ************************************************************
 * 	*---- Storage Objects
 *  ************************************************************
 */
export interface SubtensorModuleNStorageV100 {
    get(): Promise<number>
}

export class SubtensorModuleNeuronsStorage extends StorageBase {
    protected getPrefix() {
        return 'SubtensorModule'
    }

    protected getName() {
        return 'Neurons'
    }

    /**
     *  ---- Maps from uid to neuron.
     */
    get isV100(): boolean {
        return this.getTypeHash() === '893f13529c7086c600265efd340b02f4932efb16e4e5333ac6438bb1211f40fc'
    }

    /**
     *  ---- Maps from uid to neuron.
     */
    get asV100(): SubtensorModuleNeuronsStorageV100 {
        assert(this.isV100)
        return this as any
    }

    /**
     *  ---- Maps from uid to neuron.
     */
    get isV102(): boolean {
        return this.getTypeHash() === 'cbc065bbbd03da47ff8773a7e0759ac31699415f3b19f3daf59a3bee00cd302e'
    }

    /**
     *  ---- Maps from uid to neuron.
     */
    get asV102(): SubtensorModuleNeuronsStorageV102 {
        assert(this.isV102)
        return this as any
    }
}

/**
 *  ---- Maps from uid to neuron.
 */
export interface SubtensorModuleNeuronsStorageV100 {
    get(key: number): Promise<v100.NeuronMetadataOf>
    getAll(): Promise<v100.NeuronMetadataOf[]>
    getMany(keys: number[]): Promise<v100.NeuronMetadataOf[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v100.NeuronMetadataOf][]>
    getPairs(key: number): Promise<[k: number, v: v100.NeuronMetadataOf][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v100.NeuronMetadataOf][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v100.NeuronMetadataOf][]>
}

/**
 *  ---- Maps from uid to neuron.
 */
export interface SubtensorModuleNeuronsStorageV102 {
    get(key: number): Promise<(v102.NeuronMetadata | undefined)>
    getAll(): Promise<v102.NeuronMetadata[]>
    getMany(keys: number[]): Promise<(v102.NeuronMetadata | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v102.NeuronMetadata][]>
    getPairs(key: number): Promise<[k: number, v: v102.NeuronMetadata][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v102.NeuronMetadata][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v102.NeuronMetadata][]>
}

export class SubtensorModuleNeuronsToPruneAtNextEpochStorage extends StorageBase {
    protected getPrefix() {
        return 'SubtensorModule'
    }

    protected getName() {
        return 'NeuronsToPruneAtNextEpoch'
    }

    /**
     *  ---- Maps from uid to uid as a set which we use to record uids to prune at next epoch.
     */
    get isV107(): boolean {
        return this.getTypeHash() === 'be37cd27c0e60862618e14817365ea9f5c3c45854fea63a6259de44af2521364'
    }

    /**
     *  ---- Maps from uid to uid as a set which we use to record uids to prune at next epoch.
     */
    get asV107(): SubtensorModuleNeuronsToPruneAtNextEpochStorageV107 {
        assert(this.isV107)
        return this as any
    }
}

/**
 *  ---- Maps from uid to uid as a set which we use to record uids to prune at next epoch.
 */
export interface SubtensorModuleNeuronsToPruneAtNextEpochStorageV107 {
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

export class SubtensorModuleRegistrationsThisBlockStorage extends StorageBase {
    protected getPrefix() {
        return 'SubtensorModule'
    }

    protected getName() {
        return 'RegistrationsThisBlock'
    }

    get isV100(): boolean {
        return this.getTypeHash() === '95ff4f914f08e149ddbe1ae2dcb1743bbf9aaae69d04c486e1a398cacfcca06a'
    }

    get asV100(): SubtensorModuleRegistrationsThisBlockStorageV100 {
        assert(this.isV100)
        return this as any
    }
}

export interface SubtensorModuleRegistrationsThisBlockStorageV100 {
    get(): Promise<bigint>
}

export class SubtensorModuleRegistrationsThisIntervalStorage extends StorageBase {
    protected getPrefix() {
        return 'SubtensorModule'
    }

    protected getName() {
        return 'RegistrationsThisInterval'
    }

    get isV100(): boolean {
        return this.getTypeHash() === '95ff4f914f08e149ddbe1ae2dcb1743bbf9aaae69d04c486e1a398cacfcca06a'
    }

    get asV100(): SubtensorModuleRegistrationsThisIntervalStorageV100 {
        assert(this.isV100)
        return this as any
    }
}

export interface SubtensorModuleRegistrationsThisIntervalStorageV100 {
    get(): Promise<bigint>
}

export class SubtensorModuleRhoStorage extends StorageBase {
    protected getPrefix() {
        return 'SubtensorModule'
    }

    protected getName() {
        return 'Rho'
    }

    get isV107(): boolean {
        return this.getTypeHash() === '95ff4f914f08e149ddbe1ae2dcb1743bbf9aaae69d04c486e1a398cacfcca06a'
    }

    get asV107(): SubtensorModuleRhoStorageV107 {
        assert(this.isV107)
        return this as any
    }
}

export interface SubtensorModuleRhoStorageV107 {
    get(): Promise<bigint>
}

export class SubtensorModuleScalingLawPowerStorage extends StorageBase {
    protected getPrefix() {
        return 'SubtensorModule'
    }

    protected getName() {
        return 'ScalingLawPower'
    }

    get isV111(): boolean {
        return this.getTypeHash() === '8b3376fac84361c8fa9d2d145fe641638bab307a3907f7668e9b00eb0cf1f864'
    }

    get asV111(): SubtensorModuleScalingLawPowerStorageV111 {
        assert(this.isV111)
        return this as any
    }
}

export interface SubtensorModuleScalingLawPowerStorageV111 {
    get(): Promise<number>
}

export class SubtensorModuleStakePruningDenominatorStorage extends StorageBase {
    protected getPrefix() {
        return 'SubtensorModule'
    }

    protected getName() {
        return 'StakePruningDenominator'
    }

    get isV117(): boolean {
        return this.getTypeHash() === '95ff4f914f08e149ddbe1ae2dcb1743bbf9aaae69d04c486e1a398cacfcca06a'
    }

    get asV117(): SubtensorModuleStakePruningDenominatorStorageV117 {
        assert(this.isV117)
        return this as any
    }
}

export interface SubtensorModuleStakePruningDenominatorStorageV117 {
    get(): Promise<bigint>
}

export class SubtensorModuleStakePruningMinStorage extends StorageBase {
    protected getPrefix() {
        return 'SubtensorModule'
    }

    protected getName() {
        return 'StakePruningMin'
    }

    get isV108(): boolean {
        return this.getTypeHash() === '95ff4f914f08e149ddbe1ae2dcb1743bbf9aaae69d04c486e1a398cacfcca06a'
    }

    get asV108(): SubtensorModuleStakePruningMinStorageV108 {
        assert(this.isV108)
        return this as any
    }
}

export interface SubtensorModuleStakePruningMinStorageV108 {
    get(): Promise<bigint>
}

export class SubtensorModuleSynergyScalingLawPowerStorage extends StorageBase {
    protected getPrefix() {
        return 'SubtensorModule'
    }

    protected getName() {
        return 'SynergyScalingLawPower'
    }

    get isV111(): boolean {
        return this.getTypeHash() === '8b3376fac84361c8fa9d2d145fe641638bab307a3907f7668e9b00eb0cf1f864'
    }

    get asV111(): SubtensorModuleSynergyScalingLawPowerStorageV111 {
        assert(this.isV111)
        return this as any
    }
}

export interface SubtensorModuleSynergyScalingLawPowerStorageV111 {
    get(): Promise<number>
}

export class SubtensorModuleTargetRegistrationsPerIntervalStorage extends StorageBase {
    protected getPrefix() {
        return 'SubtensorModule'
    }

    protected getName() {
        return 'TargetRegistrationsPerInterval'
    }

    get isV100(): boolean {
        return this.getTypeHash() === '95ff4f914f08e149ddbe1ae2dcb1743bbf9aaae69d04c486e1a398cacfcca06a'
    }

    get asV100(): SubtensorModuleTargetRegistrationsPerIntervalStorageV100 {
        assert(this.isV100)
        return this as any
    }
}

export interface SubtensorModuleTargetRegistrationsPerIntervalStorageV100 {
    get(): Promise<bigint>
}

export class SubtensorModuleTotalBondsPurchasedStorage extends StorageBase {
    protected getPrefix() {
        return 'SubtensorModule'
    }

    protected getName() {
        return 'TotalBondsPurchased'
    }

    get isV100(): boolean {
        return this.getTypeHash() === '95ff4f914f08e149ddbe1ae2dcb1743bbf9aaae69d04c486e1a398cacfcca06a'
    }

    get asV100(): SubtensorModuleTotalBondsPurchasedStorageV100 {
        assert(this.isV100)
        return this as any
    }
}

export interface SubtensorModuleTotalBondsPurchasedStorageV100 {
    get(): Promise<bigint>
}

export class SubtensorModuleTotalEmissionStorage extends StorageBase {
    protected getPrefix() {
        return 'SubtensorModule'
    }

    protected getName() {
        return 'TotalEmission'
    }

    get isV100(): boolean {
        return this.getTypeHash() === '95ff4f914f08e149ddbe1ae2dcb1743bbf9aaae69d04c486e1a398cacfcca06a'
    }

    get asV100(): SubtensorModuleTotalEmissionStorageV100 {
        assert(this.isV100)
        return this as any
    }
}

export interface SubtensorModuleTotalEmissionStorageV100 {
    get(): Promise<bigint>
}

export class SubtensorModuleTotalIssuanceStorage extends StorageBase {
    protected getPrefix() {
        return 'SubtensorModule'
    }

    protected getName() {
        return 'TotalIssuance'
    }

    get isV100(): boolean {
        return this.getTypeHash() === '95ff4f914f08e149ddbe1ae2dcb1743bbf9aaae69d04c486e1a398cacfcca06a'
    }

    get asV100(): SubtensorModuleTotalIssuanceStorageV100 {
        assert(this.isV100)
        return this as any
    }
}

export interface SubtensorModuleTotalIssuanceStorageV100 {
    get(): Promise<bigint>
}

export class SubtensorModuleTotalStakeStorage extends StorageBase {
    protected getPrefix() {
        return 'SubtensorModule'
    }

    protected getName() {
        return 'TotalStake'
    }

    get isV100(): boolean {
        return this.getTypeHash() === '95ff4f914f08e149ddbe1ae2dcb1743bbf9aaae69d04c486e1a398cacfcca06a'
    }

    get asV100(): SubtensorModuleTotalStakeStorageV100 {
        assert(this.isV100)
        return this as any
    }
}

export interface SubtensorModuleTotalStakeStorageV100 {
    get(): Promise<bigint>
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

    get isV117(): boolean {
        return this.getTypeHash() === '95ff4f914f08e149ddbe1ae2dcb1743bbf9aaae69d04c486e1a398cacfcca06a'
    }

    get asV117(): SubtensorModuleValidatorBatchSizeStorageV117 {
        assert(this.isV117)
        return this as any
    }
}

export interface SubtensorModuleValidatorBatchSizeStorageV117 {
    get(): Promise<bigint>
}

export class SubtensorModuleValidatorEpochLenStorage extends StorageBase {
    protected getPrefix() {
        return 'SubtensorModule'
    }

    protected getName() {
        return 'ValidatorEpochLen'
    }

    get isV117(): boolean {
        return this.getTypeHash() === '95ff4f914f08e149ddbe1ae2dcb1743bbf9aaae69d04c486e1a398cacfcca06a'
    }

    get asV117(): SubtensorModuleValidatorEpochLenStorageV117 {
        assert(this.isV117)
        return this as any
    }
}

export interface SubtensorModuleValidatorEpochLenStorageV117 {
    get(): Promise<bigint>
}

export class SubtensorModuleValidatorEpochsPerResetStorage extends StorageBase {
    protected getPrefix() {
        return 'SubtensorModule'
    }

    protected getName() {
        return 'ValidatorEpochsPerReset'
    }

    get isV117(): boolean {
        return this.getTypeHash() === '95ff4f914f08e149ddbe1ae2dcb1743bbf9aaae69d04c486e1a398cacfcca06a'
    }

    get asV117(): SubtensorModuleValidatorEpochsPerResetStorageV117 {
        assert(this.isV117)
        return this as any
    }
}

export interface SubtensorModuleValidatorEpochsPerResetStorageV117 {
    get(): Promise<bigint>
}

export class SubtensorModuleValidatorExcludeQuantileStorage extends StorageBase {
    protected getPrefix() {
        return 'SubtensorModule'
    }

    protected getName() {
        return 'ValidatorExcludeQuantile'
    }

    get isV111(): boolean {
        return this.getTypeHash() === '8b3376fac84361c8fa9d2d145fe641638bab307a3907f7668e9b00eb0cf1f864'
    }

    get asV111(): SubtensorModuleValidatorExcludeQuantileStorageV111 {
        assert(this.isV111)
        return this as any
    }
}

export interface SubtensorModuleValidatorExcludeQuantileStorageV111 {
    get(): Promise<number>
}

export class SubtensorModuleValidatorLogitsDivergenceStorage extends StorageBase {
    protected getPrefix() {
        return 'SubtensorModule'
    }

    protected getName() {
        return 'ValidatorLogitsDivergence'
    }

    get isV112(): boolean {
        return this.getTypeHash() === '95ff4f914f08e149ddbe1ae2dcb1743bbf9aaae69d04c486e1a398cacfcca06a'
    }

    get asV112(): SubtensorModuleValidatorLogitsDivergenceStorageV112 {
        assert(this.isV112)
        return this as any
    }
}

export interface SubtensorModuleValidatorLogitsDivergenceStorageV112 {
    get(): Promise<bigint>
}

export class SubtensorModuleValidatorPruneLenStorage extends StorageBase {
    protected getPrefix() {
        return 'SubtensorModule'
    }

    protected getName() {
        return 'ValidatorPruneLen'
    }

    get isV112(): boolean {
        return this.getTypeHash() === '95ff4f914f08e149ddbe1ae2dcb1743bbf9aaae69d04c486e1a398cacfcca06a'
    }

    get asV112(): SubtensorModuleValidatorPruneLenStorageV112 {
        assert(this.isV112)
        return this as any
    }
}

export interface SubtensorModuleValidatorPruneLenStorageV112 {
    get(): Promise<bigint>
}

export class SubtensorModuleValidatorSequenceLengthStorage extends StorageBase {
    protected getPrefix() {
        return 'SubtensorModule'
    }

    protected getName() {
        return 'ValidatorSequenceLength'
    }

    get isV117(): boolean {
        return this.getTypeHash() === '95ff4f914f08e149ddbe1ae2dcb1743bbf9aaae69d04c486e1a398cacfcca06a'
    }

    get asV117(): SubtensorModuleValidatorSequenceLengthStorageV117 {
        assert(this.isV117)
        return this as any
    }
}

export interface SubtensorModuleValidatorSequenceLengthStorageV117 {
    get(): Promise<bigint>
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
    get isV100(): boolean {
        return this.getTypeHash() === '146c0d1dce070e2a43f497c479248a882f4ed48937203ea336e85dcf2fa0ec6c'
    }

    /**
     *  The `AccountId` of the sudo key.
     */
    get asV100(): SudoKeyStorageV100 {
        assert(this.isV100)
        return this as any
    }

    /**
     *  The `AccountId` of the sudo key.
     */
    get isV102(): boolean {
        return this.getTypeHash() === '8620bdc4f360add1f8e58e488bdba4fa9b6dab86ecdd1c942b8d9de43ede38e5'
    }

    /**
     *  The `AccountId` of the sudo key.
     */
    get asV102(): SudoKeyStorageV102 {
        assert(this.isV102)
        return this as any
    }
}

/**
 *  The `AccountId` of the sudo key.
 */
export interface SudoKeyStorageV100 {
    get(): Promise<Uint8Array>
}

/**
 *  The `AccountId` of the sudo key.
 */
export interface SudoKeyStorageV102 {
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
    get isV100(): boolean {
        return this.getTypeHash() === '1ddc7ade926221442c388ee4405a71c9428e548fab037445aaf4b3a78f4735c1'
    }

    /**
     *  The full account information for a particular account ID.
     */
    get asV100(): SystemAccountStorageV100 {
        assert(this.isV100)
        return this as any
    }
}

/**
 *  The full account information for a particular account ID.
 */
export interface SystemAccountStorageV100 {
    get(key: Uint8Array): Promise<v100.AccountInfo>
    getAll(): Promise<v100.AccountInfo[]>
    getMany(keys: Uint8Array[]): Promise<v100.AccountInfo[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v100.AccountInfo][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v100.AccountInfo][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v100.AccountInfo][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v100.AccountInfo][]>
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
    get isV100(): boolean {
        return this.getTypeHash() === 'a926ad48d1a07d1162c5fdb99f3f6cef39c7c5a115a92ff9ccf0357bae4bf2ed'
    }

    /**
     *  Total length (in bytes) for all extrinsics put together, for the current block.
     */
    get asV100(): SystemAllExtrinsicsLenStorageV100 {
        assert(this.isV100)
        return this as any
    }
}

/**
 *  Total length (in bytes) for all extrinsics put together, for the current block.
 */
export interface SystemAllExtrinsicsLenStorageV100 {
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
    get isV100(): boolean {
        return this.getTypeHash() === '06f5703796027f4b198d4ffd50b721273430d8ff663660646793873168f9df17'
    }

    /**
     *  Map of block numbers to block hashes.
     */
    get asV100(): SystemBlockHashStorageV100 {
        assert(this.isV100)
        return this as any
    }
}

/**
 *  Map of block numbers to block hashes.
 */
export interface SystemBlockHashStorageV100 {
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
    get isV100(): boolean {
        return this.getTypeHash() === '3117e920c869758010946f61bdfb045561b02a263bdc3bcff42e4ce915e4e5d4'
    }

    /**
     *  The current weight for the block.
     */
    get asV100(): SystemBlockWeightStorageV100 {
        assert(this.isV100)
        return this as any
    }
}

/**
 *  The current weight for the block.
 */
export interface SystemBlockWeightStorageV100 {
    get(): Promise<v100.ConsumedWeight>
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
    get isV100(): boolean {
        return this.getTypeHash() === '1d49db8c467b8ce13c8d27dfc1293265e11d9e73050b590ac44aa31ca0eec876'
    }

    /**
     *  Digest of the current block, also part of the block header.
     */
    get asV100(): SystemDigestStorageV100 {
        assert(this.isV100)
        return this as any
    }

    /**
     *  Digest of the current block, also part of the block header.
     */
    get isV102(): boolean {
        return this.getTypeHash() === '6edb48fd53810bda6cc1015d69e4aacd63966970836398edb4a47cec0bf3fa85'
    }

    /**
     *  Digest of the current block, also part of the block header.
     */
    get asV102(): SystemDigestStorageV102 {
        assert(this.isV102)
        return this as any
    }
}

/**
 *  Digest of the current block, also part of the block header.
 */
export interface SystemDigestStorageV100 {
    get(): Promise<v100.DigestOf>
}

/**
 *  Digest of the current block, also part of the block header.
 */
export interface SystemDigestStorageV102 {
    get(): Promise<v102.Digest>
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
    get isV100(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  The number of events in the `Events<T>` list.
     */
    get asV100(): SystemEventCountStorageV100 {
        assert(this.isV100)
        return this as any
    }
}

/**
 *  The number of events in the `Events<T>` list.
 */
export interface SystemEventCountStorageV100 {
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
    get isV100(): boolean {
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
    get asV100(): SystemEventTopicsStorageV100 {
        assert(this.isV100)
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
export interface SystemEventTopicsStorageV100 {
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
     */
    get isV100(): boolean {
        return this.getTypeHash() === 'c14fbc63576ad1aba15f4f0fb3318883398c3f57e76f5889a39a95f378f5fde5'
    }

    /**
     *  Events deposited for the current block.
     */
    get asV100(): SystemEventsStorageV100 {
        assert(this.isV100)
        return this as any
    }

    /**
     *  Events deposited for the current block.
     */
    get isV105(): boolean {
        return this.getTypeHash() === 'fd424d09deeaf3d2df0bdffc34f8e90490f9baf665d8ed77f2286dcdd16ad8f4'
    }

    /**
     *  Events deposited for the current block.
     */
    get asV105(): SystemEventsStorageV105 {
        assert(this.isV105)
        return this as any
    }

    /**
     *  Events deposited for the current block.
     */
    get isV107(): boolean {
        return this.getTypeHash() === '8df9f5e1209ed07fa3b5f995b21262824c9870eee2cb8a8c28430be9a9e32208'
    }

    /**
     *  Events deposited for the current block.
     */
    get asV107(): SystemEventsStorageV107 {
        assert(this.isV107)
        return this as any
    }

    /**
     *  Events deposited for the current block.
     */
    get isV117(): boolean {
        return this.getTypeHash() === '3eb00c2ddd71636f3185ac1c37b01e38400a3f0e83c6d1970342cf7fac222a4e'
    }

    /**
     *  Events deposited for the current block.
     */
    get asV117(): SystemEventsStorageV117 {
        assert(this.isV117)
        return this as any
    }

    /**
     *  Events deposited for the current block.
     */
    get isV118(): boolean {
        return this.getTypeHash() === 'b5656473936da35330d846b9711cb66e896bbf824ae24005886cabc9b8371365'
    }

    /**
     *  Events deposited for the current block.
     */
    get asV118(): SystemEventsStorageV118 {
        assert(this.isV118)
        return this as any
    }

    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: This storage item is explicitly unbounded since it is never intended to be read
     *  from within the runtime.
     */
    get isV102(): boolean {
        return this.getTypeHash() === 'd49c17c14bb022c20a3b72813e5efa6d0b568b9d8429cb686a93260aae3cfda6'
    }

    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: This storage item is explicitly unbounded since it is never intended to be read
     *  from within the runtime.
     */
    get asV102(): SystemEventsStorageV102 {
        assert(this.isV102)
        return this as any
    }

    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: This storage item is explicitly unbounded since it is never intended to be read
     *  from within the runtime.
     */
    get isV108(): boolean {
        return this.getTypeHash() === '6b1cc34489b93aef9db280772111a0f2e1223222700387bdaec837f598386103'
    }

    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: This storage item is explicitly unbounded since it is never intended to be read
     *  from within the runtime.
     */
    get asV108(): SystemEventsStorageV108 {
        assert(this.isV108)
        return this as any
    }

    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: This storage item is explicitly unbounded since it is never intended to be read
     *  from within the runtime.
     */
    get isV111(): boolean {
        return this.getTypeHash() === 'd00d13a784e362f3c57648c669101b8383d24ef241f1456d17aa3509c784678b'
    }

    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: This storage item is explicitly unbounded since it is never intended to be read
     *  from within the runtime.
     */
    get asV111(): SystemEventsStorageV111 {
        assert(this.isV111)
        return this as any
    }

    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: This storage item is explicitly unbounded since it is never intended to be read
     *  from within the runtime.
     */
    get isV112(): boolean {
        return this.getTypeHash() === 'c23ad12ec1e68b74d0fa5f1cfa9d8a9eb502b77fb035b3b4ba6fec626a088787'
    }

    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: This storage item is explicitly unbounded since it is never intended to be read
     *  from within the runtime.
     */
    get asV112(): SystemEventsStorageV112 {
        assert(this.isV112)
        return this as any
    }
}

/**
 *  Events deposited for the current block.
 */
export interface SystemEventsStorageV100 {
    get(): Promise<v100.EventRecord[]>
}

/**
 *  Events deposited for the current block.
 */
export interface SystemEventsStorageV105 {
    get(): Promise<v105.EventRecord[]>
}

/**
 *  Events deposited for the current block.
 */
export interface SystemEventsStorageV107 {
    get(): Promise<v107.EventRecord[]>
}

/**
 *  Events deposited for the current block.
 */
export interface SystemEventsStorageV117 {
    get(): Promise<v117.EventRecord[]>
}

/**
 *  Events deposited for the current block.
 */
export interface SystemEventsStorageV118 {
    get(): Promise<v118.EventRecord[]>
}

/**
 *  Events deposited for the current block.
 * 
 *  NOTE: This storage item is explicitly unbounded since it is never intended to be read
 *  from within the runtime.
 */
export interface SystemEventsStorageV102 {
    get(): Promise<v102.EventRecord[]>
}

/**
 *  Events deposited for the current block.
 * 
 *  NOTE: This storage item is explicitly unbounded since it is never intended to be read
 *  from within the runtime.
 */
export interface SystemEventsStorageV108 {
    get(): Promise<v108.EventRecord[]>
}

/**
 *  Events deposited for the current block.
 * 
 *  NOTE: This storage item is explicitly unbounded since it is never intended to be read
 *  from within the runtime.
 */
export interface SystemEventsStorageV111 {
    get(): Promise<v111.EventRecord[]>
}

/**
 *  Events deposited for the current block.
 * 
 *  NOTE: This storage item is explicitly unbounded since it is never intended to be read
 *  from within the runtime.
 */
export interface SystemEventsStorageV112 {
    get(): Promise<v112.EventRecord[]>
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
    get isV100(): boolean {
        return this.getTypeHash() === '0ad1e323fa21971add5b3b0cc709a6e02dc7c64db7d344c1a67ec0227969ae75'
    }

    /**
     *  The execution phase of the block.
     */
    get asV100(): SystemExecutionPhaseStorageV100 {
        assert(this.isV100)
        return this as any
    }
}

/**
 *  The execution phase of the block.
 */
export interface SystemExecutionPhaseStorageV100 {
    get(): Promise<(v100.Phase | undefined)>
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
    get isV100(): boolean {
        return this.getTypeHash() === 'a926ad48d1a07d1162c5fdb99f3f6cef39c7c5a115a92ff9ccf0357bae4bf2ed'
    }

    /**
     *  Total extrinsics count for the current block.
     */
    get asV100(): SystemExtrinsicCountStorageV100 {
        assert(this.isV100)
        return this as any
    }
}

/**
 *  Total extrinsics count for the current block.
 */
export interface SystemExtrinsicCountStorageV100 {
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
    get isV100(): boolean {
        return this.getTypeHash() === 'f278d7d239e9ac4cbb0509cc885124fd45c3f5b75452aba0391701e1a886debb'
    }

    /**
     *  Extrinsics data for the current block (maps an extrinsic's index to its data).
     */
    get asV100(): SystemExtrinsicDataStorageV100 {
        assert(this.isV100)
        return this as any
    }
}

/**
 *  Extrinsics data for the current block (maps an extrinsic's index to its data).
 */
export interface SystemExtrinsicDataStorageV100 {
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
    get isV100(): boolean {
        return this.getTypeHash() === 'e03e445e7a7694163bede3a772a8a347abf7a3a00424fbafec75f819d6173a17'
    }

    /**
     *  Stores the `spec_version` and `spec_name` of when the last runtime upgrade happened.
     */
    get asV100(): SystemLastRuntimeUpgradeStorageV100 {
        assert(this.isV100)
        return this as any
    }
}

/**
 *  Stores the `spec_version` and `spec_name` of when the last runtime upgrade happened.
 */
export interface SystemLastRuntimeUpgradeStorageV100 {
    get(): Promise<(v100.LastRuntimeUpgradeInfo | undefined)>
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
    get isV100(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  The current block number being processed. Set by `execute_block`.
     */
    get asV100(): SystemNumberStorageV100 {
        assert(this.isV100)
        return this as any
    }
}

/**
 *  The current block number being processed. Set by `execute_block`.
 */
export interface SystemNumberStorageV100 {
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
    get isV100(): boolean {
        return this.getTypeHash() === '146c0d1dce070e2a43f497c479248a882f4ed48937203ea336e85dcf2fa0ec6c'
    }

    /**
     *  Hash of the previous block.
     */
    get asV100(): SystemParentHashStorageV100 {
        assert(this.isV100)
        return this as any
    }
}

/**
 *  Hash of the previous block.
 */
export interface SystemParentHashStorageV100 {
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
    get isV100(): boolean {
        return this.getTypeHash() === '1b6fbf1674d189f761a7ac63093bf5c755bf073dd9d9f0dbe657289f92575db5'
    }

    /**
     *  True if we have upgraded so that AccountInfo contains three types of `RefCount`. False
     *  (default) if not.
     */
    get asV100(): SystemUpgradedToTripleRefCountStorageV100 {
        assert(this.isV100)
        return this as any
    }
}

/**
 *  True if we have upgraded so that AccountInfo contains three types of `RefCount`. False
 *  (default) if not.
 */
export interface SystemUpgradedToTripleRefCountStorageV100 {
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
    get isV100(): boolean {
        return this.getTypeHash() === '1b6fbf1674d189f761a7ac63093bf5c755bf073dd9d9f0dbe657289f92575db5'
    }

    /**
     *  True if we have upgraded so that `type RefCount` is `u32`. False (default) if not.
     */
    get asV100(): SystemUpgradedToU32RefCountStorageV100 {
        assert(this.isV100)
        return this as any
    }
}

/**
 *  True if we have upgraded so that `type RefCount` is `u32`. False (default) if not.
 */
export interface SystemUpgradedToU32RefCountStorageV100 {
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
    get isV100(): boolean {
        return this.getTypeHash() === '1b6fbf1674d189f761a7ac63093bf5c755bf073dd9d9f0dbe657289f92575db5'
    }

    /**
     *  Did the timestamp get updated in this block?
     */
    get asV100(): TimestampDidUpdateStorageV100 {
        assert(this.isV100)
        return this as any
    }
}

/**
 *  Did the timestamp get updated in this block?
 */
export interface TimestampDidUpdateStorageV100 {
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
    get isV100(): boolean {
        return this.getTypeHash() === '95ff4f914f08e149ddbe1ae2dcb1743bbf9aaae69d04c486e1a398cacfcca06a'
    }

    /**
     *  Current time for the current block.
     */
    get asV100(): TimestampNowStorageV100 {
        assert(this.isV100)
        return this as any
    }
}

/**
 *  Current time for the current block.
 */
export interface TimestampNowStorageV100 {
    get(): Promise<bigint>
}

export class TransactionPaymentNextFeeMultiplierStorage extends StorageBase {
    protected getPrefix() {
        return 'TransactionPayment'
    }

    protected getName() {
        return 'NextFeeMultiplier'
    }

    get isV100(): boolean {
        return this.getTypeHash() === '8840628264db1877ef5c3718a00459d4b519de0922f813836237f71320a25aa6'
    }

    get asV100(): TransactionPaymentNextFeeMultiplierStorageV100 {
        assert(this.isV100)
        return this as any
    }

    get isV102(): boolean {
        return this.getTypeHash() === 'f8ebe28eb30158172c0ccf672f7747c46a244f892d08ef2ebcbaadde34a26bc0'
    }

    get asV102(): TransactionPaymentNextFeeMultiplierStorageV102 {
        assert(this.isV102)
        return this as any
    }
}

export interface TransactionPaymentNextFeeMultiplierStorageV100 {
    get(): Promise<bigint>
}

export interface TransactionPaymentNextFeeMultiplierStorageV102 {
    get(): Promise<bigint>
}

export class TransactionPaymentStorageVersionStorage extends StorageBase {
    protected getPrefix() {
        return 'TransactionPayment'
    }

    protected getName() {
        return 'StorageVersion'
    }

    get isV100(): boolean {
        return this.getTypeHash() === '78a0d483d7fe4fc699def1765b9b22deed84e9f003169321f89a7b2c516a4ffe'
    }

    get asV100(): TransactionPaymentStorageVersionStorageV100 {
        assert(this.isV100)
        return this as any
    }

    get isV102(): boolean {
        return this.getTypeHash() === '7a0b9b43fb3e876cfa92bb4b00e569ef9a82972b0600c8a8570e064c7e3890fd'
    }

    get asV102(): TransactionPaymentStorageVersionStorageV102 {
        assert(this.isV102)
        return this as any
    }
}

export interface TransactionPaymentStorageVersionStorageV100 {
    get(): Promise<v100.Releases>
}

export interface TransactionPaymentStorageVersionStorageV102 {
    get(): Promise<v102.Type_106>
}
