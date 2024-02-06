import type {Result, Option} from './support'

export type BalanceStatus = BalanceStatus_Free | BalanceStatus_Reserved

export interface BalanceStatus_Free {
    __kind: 'Free'
}

export interface BalanceStatus_Reserved {
    __kind: 'Reserved'
}

export type Type_37 = Type_37_Ok | Type_37_Err

export interface Type_37_Ok {
    __kind: 'Ok'
}

export interface Type_37_Err {
    __kind: 'Err'
    value: DispatchError
}

export type DispatchError = DispatchError_Other | DispatchError_CannotLookup | DispatchError_BadOrigin | DispatchError_Module | DispatchError_ConsumerRemaining | DispatchError_NoProviders | DispatchError_TooManyConsumers | DispatchError_Token | DispatchError_Arithmetic | DispatchError_Transactional | DispatchError_Exhausted | DispatchError_Corruption | DispatchError_Unavailable

export interface DispatchError_Other {
    __kind: 'Other'
}

export interface DispatchError_CannotLookup {
    __kind: 'CannotLookup'
}

export interface DispatchError_BadOrigin {
    __kind: 'BadOrigin'
}

export interface DispatchError_Module {
    __kind: 'Module'
    value: ModuleError
}

export interface DispatchError_ConsumerRemaining {
    __kind: 'ConsumerRemaining'
}

export interface DispatchError_NoProviders {
    __kind: 'NoProviders'
}

export interface DispatchError_TooManyConsumers {
    __kind: 'TooManyConsumers'
}

export interface DispatchError_Token {
    __kind: 'Token'
    value: TokenError
}

export interface DispatchError_Arithmetic {
    __kind: 'Arithmetic'
    value: ArithmeticError
}

export interface DispatchError_Transactional {
    __kind: 'Transactional'
    value: TransactionalError
}

export interface DispatchError_Exhausted {
    __kind: 'Exhausted'
}

export interface DispatchError_Corruption {
    __kind: 'Corruption'
}

export interface DispatchError_Unavailable {
    __kind: 'Unavailable'
}

export interface DispatchInfo {
    weight: Weight
    class: DispatchClass
    paysFee: Pays
}

export type MultiAddress = MultiAddress_Id | MultiAddress_Index | MultiAddress_Raw | MultiAddress_Address32 | MultiAddress_Address20

export interface MultiAddress_Id {
    __kind: 'Id'
    value: Uint8Array
}

export interface MultiAddress_Index {
    __kind: 'Index'
    value: null
}

export interface MultiAddress_Raw {
    __kind: 'Raw'
    value: Uint8Array
}

export interface MultiAddress_Address32 {
    __kind: 'Address32'
    value: Uint8Array
}

export interface MultiAddress_Address20 {
    __kind: 'Address20'
    value: Uint8Array
}

export interface EquivocationProof {
    setId: bigint
    equivocation: Equivocation
}

export type Void = never

export type Call = Call_System | Call_Timestamp | Call_Grandpa | Call_Balances | Call_Sudo | Call_SubtensorModule | Call_Utility

export interface Call_System {
    __kind: 'System'
    value: SystemCall
}

export interface Call_Timestamp {
    __kind: 'Timestamp'
    value: TimestampCall
}

export interface Call_Grandpa {
    __kind: 'Grandpa'
    value: GrandpaCall
}

export interface Call_Balances {
    __kind: 'Balances'
    value: BalancesCall
}

export interface Call_Sudo {
    __kind: 'Sudo'
    value: SudoCall
}

export interface Call_SubtensorModule {
    __kind: 'SubtensorModule'
    value: SubtensorModuleCall
}

export interface Call_Utility {
    __kind: 'Utility'
    value: UtilityCall
}

export interface Weight {
    refTime: bigint
    proofSize: bigint
}

export type OriginCaller = OriginCaller_system | OriginCaller_Void

export interface OriginCaller_system {
    __kind: 'system'
    value: RawOrigin
}

export interface OriginCaller_Void {
    __kind: 'Void'
    value: Void
}

export interface AccountData {
    free: bigint
    reserved: bigint
    miscFrozen: bigint
    feeFrozen: bigint
}

export interface BalanceLock {
    id: Uint8Array
    amount: bigint
    reasons: Reasons
}

export interface ReserveData {
    id: Uint8Array
    amount: bigint
}

export interface StoredPendingChange {
    scheduledAt: number
    delay: number
    nextAuthorities: [Uint8Array, bigint][]
    forced: (number | undefined)
}

export type StoredState = StoredState_Live | StoredState_PendingPause | StoredState_Paused | StoredState_PendingResume

export interface StoredState_Live {
    __kind: 'Live'
}

export interface StoredState_PendingPause {
    __kind: 'PendingPause'
    scheduledAt: number
    delay: number
}

export interface StoredState_Paused {
    __kind: 'Paused'
}

export interface StoredState_PendingResume {
    __kind: 'PendingResume'
    scheduledAt: number
    delay: number
}

export interface AxonInfo {
    block: bigint
    version: number
    ip: bigint
    port: number
    ipType: number
    protocol: number
    placeholder1: number
    placeholder2: number
}

export interface PrometheusInfo {
    block: bigint
    version: number
    ip: bigint
    port: number
    ipType: number
}

export interface AccountInfo {
    nonce: number
    consumers: number
    providers: number
    sufficients: number
    data: AccountData
}

export interface PerDispatchClass {
    normal: Weight
    operational: Weight
    mandatory: Weight
}

export interface Digest {
    logs: DigestItem[]
}

export interface EventRecord {
    phase: Phase
    event: Event
    topics: Uint8Array[]
}

export type Phase = Phase_ApplyExtrinsic | Phase_Finalization | Phase_Initialization

export interface Phase_ApplyExtrinsic {
    __kind: 'ApplyExtrinsic'
    value: number
}

export interface Phase_Finalization {
    __kind: 'Finalization'
}

export interface Phase_Initialization {
    __kind: 'Initialization'
}

export interface LastRuntimeUpgradeInfo {
    specVersion: number
    specName: string
}

export type Releases = Releases_V1Ancient | Releases_V2

export interface Releases_V1Ancient {
    __kind: 'V1Ancient'
}

export interface Releases_V2 {
    __kind: 'V2'
}

export interface BlockLength {
    max: Type_60
}

export interface BlockWeights {
    baseBlock: Weight
    maxBlock: Weight
    perClass: Type_56
}

export interface RuntimeDbWeight {
    read: bigint
    write: bigint
}

export interface RuntimeVersion {
    specName: string
    implName: string
    authoringVersion: number
    specVersion: number
    implVersion: number
    apis: [Uint8Array, number][]
    transactionVersion: number
    stateVersion: number
}

export interface ModuleError {
    index: number
    error: Uint8Array
}

export type TokenError = TokenError_NoFunds | TokenError_WouldDie | TokenError_BelowMinimum | TokenError_CannotCreate | TokenError_UnknownAsset | TokenError_Frozen | TokenError_Unsupported

export interface TokenError_NoFunds {
    __kind: 'NoFunds'
}

export interface TokenError_WouldDie {
    __kind: 'WouldDie'
}

export interface TokenError_BelowMinimum {
    __kind: 'BelowMinimum'
}

export interface TokenError_CannotCreate {
    __kind: 'CannotCreate'
}

export interface TokenError_UnknownAsset {
    __kind: 'UnknownAsset'
}

export interface TokenError_Frozen {
    __kind: 'Frozen'
}

export interface TokenError_Unsupported {
    __kind: 'Unsupported'
}

export type ArithmeticError = ArithmeticError_Underflow | ArithmeticError_Overflow | ArithmeticError_DivisionByZero

export interface ArithmeticError_Underflow {
    __kind: 'Underflow'
}

export interface ArithmeticError_Overflow {
    __kind: 'Overflow'
}

export interface ArithmeticError_DivisionByZero {
    __kind: 'DivisionByZero'
}

export type TransactionalError = TransactionalError_LimitReached | TransactionalError_NoLayer

export interface TransactionalError_LimitReached {
    __kind: 'LimitReached'
}

export interface TransactionalError_NoLayer {
    __kind: 'NoLayer'
}

export type DispatchClass = DispatchClass_Normal | DispatchClass_Operational | DispatchClass_Mandatory

export interface DispatchClass_Normal {
    __kind: 'Normal'
}

export interface DispatchClass_Operational {
    __kind: 'Operational'
}

export interface DispatchClass_Mandatory {
    __kind: 'Mandatory'
}

export type Pays = Pays_Yes | Pays_No

export interface Pays_Yes {
    __kind: 'Yes'
}

export interface Pays_No {
    __kind: 'No'
}

export type Equivocation = Equivocation_Prevote | Equivocation_Precommit

export interface Equivocation_Prevote {
    __kind: 'Prevote'
    value: Type_82
}

export interface Equivocation_Precommit {
    __kind: 'Precommit'
    value: Type_88
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type SystemCall = SystemCall_remark | SystemCall_set_heap_pages | SystemCall_set_code | SystemCall_set_code_without_checks | SystemCall_set_storage | SystemCall_kill_storage | SystemCall_kill_prefix | SystemCall_remark_with_event

/**
 * Make some on-chain remark.
 * 
 * ## Complexity
 * - `O(1)`
 */
export interface SystemCall_remark {
    __kind: 'remark'
    remark: Uint8Array
}

/**
 * Set the number of pages in the WebAssembly environment's heap.
 */
export interface SystemCall_set_heap_pages {
    __kind: 'set_heap_pages'
    pages: bigint
}

/**
 * Set the new runtime code.
 * 
 * ## Complexity
 * - `O(C + S)` where `C` length of `code` and `S` complexity of `can_set_code`
 */
export interface SystemCall_set_code {
    __kind: 'set_code'
    code: Uint8Array
}

/**
 * Set the new runtime code without doing any checks of the given `code`.
 * 
 * ## Complexity
 * - `O(C)` where `C` length of `code`
 */
export interface SystemCall_set_code_without_checks {
    __kind: 'set_code_without_checks'
    code: Uint8Array
}

/**
 * Set some items of storage.
 */
export interface SystemCall_set_storage {
    __kind: 'set_storage'
    items: [Uint8Array, Uint8Array][]
}

/**
 * Kill some items from storage.
 */
export interface SystemCall_kill_storage {
    __kind: 'kill_storage'
    keys: Uint8Array[]
}

/**
 * Kill all storage items with a key that starts with the given prefix.
 * 
 * **NOTE:** We rely on the Root origin to provide us the number of subkeys under
 * the prefix we are removing to accurately calculate the weight of this function.
 */
export interface SystemCall_kill_prefix {
    __kind: 'kill_prefix'
    prefix: Uint8Array
    subkeys: number
}

/**
 * Make some on-chain remark and emit event.
 */
export interface SystemCall_remark_with_event {
    __kind: 'remark_with_event'
    remark: Uint8Array
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type TimestampCall = TimestampCall_set

/**
 * Set the current time.
 * 
 * This call should be invoked exactly once per block. It will panic at the finalization
 * phase, if this call hasn't been invoked by that time.
 * 
 * The timestamp should be greater than the previous one by the amount specified by
 * `MinimumPeriod`.
 * 
 * The dispatch origin for this call must be `Inherent`.
 * 
 * ## Complexity
 * - `O(1)` (Note that implementations of `OnTimestampSet` must also be `O(1)`)
 * - 1 storage read and 1 storage mutation (codec `O(1)`). (because of `DidUpdate::take` in
 *   `on_finalize`)
 * - 1 event handler `on_timestamp_set`. Must be `O(1)`.
 */
export interface TimestampCall_set {
    __kind: 'set'
    now: bigint
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type GrandpaCall = GrandpaCall_report_equivocation | GrandpaCall_report_equivocation_unsigned | GrandpaCall_note_stalled

/**
 * Report voter equivocation/misbehavior. This method will verify the
 * equivocation proof and validate the given key ownership proof
 * against the extracted offender. If both are valid, the offence
 * will be reported.
 */
export interface GrandpaCall_report_equivocation {
    __kind: 'report_equivocation'
    equivocationProof: EquivocationProof
    keyOwnerProof: Void
}

/**
 * Report voter equivocation/misbehavior. This method will verify the
 * equivocation proof and validate the given key ownership proof
 * against the extracted offender. If both are valid, the offence
 * will be reported.
 * 
 * This extrinsic must be called unsigned and it is expected that only
 * block authors will call it (validated in `ValidateUnsigned`), as such
 * if the block author is defined it will be defined as the equivocation
 * reporter.
 */
export interface GrandpaCall_report_equivocation_unsigned {
    __kind: 'report_equivocation_unsigned'
    equivocationProof: EquivocationProof
    keyOwnerProof: Void
}

/**
 * Note that the current authority set of the GRANDPA finality gadget has stalled.
 * 
 * This will trigger a forced authority set change at the beginning of the next session, to
 * be enacted `delay` blocks after that. The `delay` should be high enough to safely assume
 * that the block signalling the forced change will not be re-orged e.g. 1000 blocks.
 * The block production rate (which may be slowed down because of finality lagging) should
 * be taken into account when choosing the `delay`. The GRANDPA voters based on the new
 * authority will start voting on top of `best_finalized_block_number` for new finalized
 * blocks. `best_finalized_block_number` should be the highest of the latest finalized
 * block of all validators of the new authority set.
 * 
 * Only callable by root.
 */
export interface GrandpaCall_note_stalled {
    __kind: 'note_stalled'
    delay: number
    bestFinalizedBlockNumber: number
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type BalancesCall = BalancesCall_transfer | BalancesCall_set_balance | BalancesCall_force_transfer | BalancesCall_transfer_keep_alive | BalancesCall_transfer_all | BalancesCall_force_unreserve

/**
 * Transfer some liquid free balance to another account.
 * 
 * `transfer` will set the `FreeBalance` of the sender and receiver.
 * If the sender's account is below the existential deposit as a result
 * of the transfer, the account will be reaped.
 * 
 * The dispatch origin for this call must be `Signed` by the transactor.
 * 
 * ## Complexity
 * - Dependent on arguments but not critical, given proper implementations for input config
 *   types. See related functions below.
 * - It contains a limited number of reads and writes internally and no complex
 *   computation.
 * 
 * Related functions:
 * 
 *   - `ensure_can_withdraw` is always called internally but has a bounded complexity.
 *   - Transferring balances to accounts that did not exist before will cause
 *     `T::OnNewAccount::on_new_account` to be called.
 *   - Removing enough funds from an account will trigger `T::DustRemoval::on_unbalanced`.
 *   - `transfer_keep_alive` works the same way as `transfer`, but has an additional check
 *     that the transfer will not kill the origin account.
 */
export interface BalancesCall_transfer {
    __kind: 'transfer'
    dest: MultiAddress
    value: bigint
}

/**
 * Set the balances of a given account.
 * 
 * This will alter `FreeBalance` and `ReservedBalance` in storage. it will
 * also alter the total issuance of the system (`TotalIssuance`) appropriately.
 * If the new free or reserved balance is below the existential deposit,
 * it will reset the account nonce (`frame_system::AccountNonce`).
 * 
 * The dispatch origin for this call is `root`.
 */
export interface BalancesCall_set_balance {
    __kind: 'set_balance'
    who: MultiAddress
    newFree: bigint
    newReserved: bigint
}

/**
 * Exactly as `transfer`, except the origin must be root and the source account may be
 * specified.
 * ## Complexity
 * - Same as transfer, but additional read and write because the source account is not
 *   assumed to be in the overlay.
 */
export interface BalancesCall_force_transfer {
    __kind: 'force_transfer'
    source: MultiAddress
    dest: MultiAddress
    value: bigint
}

/**
 * Same as the [`transfer`] call, but with a check that the transfer will not kill the
 * origin account.
 * 
 * 99% of the time you want [`transfer`] instead.
 * 
 * [`transfer`]: struct.Pallet.html#method.transfer
 */
export interface BalancesCall_transfer_keep_alive {
    __kind: 'transfer_keep_alive'
    dest: MultiAddress
    value: bigint
}

/**
 * Transfer the entire transferable balance from the caller account.
 * 
 * NOTE: This function only attempts to transfer _transferable_ balances. This means that
 * any locked, reserved, or existential deposits (when `keep_alive` is `true`), will not be
 * transferred by this function. To ensure that this function results in a killed account,
 * you might need to prepare the account by removing any reference counters, storage
 * deposits, etc...
 * 
 * The dispatch origin of this call must be Signed.
 * 
 * - `dest`: The recipient of the transfer.
 * - `keep_alive`: A boolean to determine if the `transfer_all` operation should send all
 *   of the funds the account has, causing the sender account to be killed (false), or
 *   transfer everything except at least the existential deposit, which will guarantee to
 *   keep the sender account alive (true). ## Complexity
 * - O(1). Just like transfer, but reading the user's transferable balance first.
 */
export interface BalancesCall_transfer_all {
    __kind: 'transfer_all'
    dest: MultiAddress
    keepAlive: boolean
}

/**
 * Unreserve some balance from a user by force.
 * 
 * Can only be called by ROOT.
 */
export interface BalancesCall_force_unreserve {
    __kind: 'force_unreserve'
    who: MultiAddress
    amount: bigint
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type SudoCall = SudoCall_sudo | SudoCall_sudo_unchecked_weight | SudoCall_set_key | SudoCall_sudo_as

/**
 * Authenticates the sudo key and dispatches a function call with `Root` origin.
 * 
 * The dispatch origin for this call must be _Signed_.
 * 
 * ## Complexity
 * - O(1).
 */
export interface SudoCall_sudo {
    __kind: 'sudo'
    call: Call
}

/**
 * Authenticates the sudo key and dispatches a function call with `Root` origin.
 * This function does not check the weight of the call, and instead allows the
 * Sudo user to specify the weight of the call.
 * 
 * The dispatch origin for this call must be _Signed_.
 * 
 * ## Complexity
 * - O(1).
 */
export interface SudoCall_sudo_unchecked_weight {
    __kind: 'sudo_unchecked_weight'
    call: Call
    weight: Weight
}

/**
 * Authenticates the current sudo key and sets the given AccountId (`new`) as the new sudo
 * key.
 * 
 * The dispatch origin for this call must be _Signed_.
 * 
 * ## Complexity
 * - O(1).
 */
export interface SudoCall_set_key {
    __kind: 'set_key'
    new: MultiAddress
}

/**
 * Authenticates the sudo key and dispatches a function call with `Signed` origin from
 * a given account.
 * 
 * The dispatch origin for this call must be _Signed_.
 * 
 * ## Complexity
 * - O(1).
 */
export interface SudoCall_sudo_as {
    __kind: 'sudo_as'
    who: MultiAddress
    call: Call
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type SubtensorModuleCall = SubtensorModuleCall_set_weights | SubtensorModuleCall_become_delegate | SubtensorModuleCall_add_stake | SubtensorModuleCall_remove_stake | SubtensorModuleCall_serve_axon | SubtensorModuleCall_serve_prometheus | SubtensorModuleCall_register | SubtensorModuleCall_burned_register | SubtensorModuleCall_sudo_register | SubtensorModuleCall_sudo_add_network | SubtensorModuleCall_sudo_remove_network | SubtensorModuleCall_sudo_set_emission_values | SubtensorModuleCall_sudo_add_network_connection_requirement | SubtensorModuleCall_sudo_remove_network_connection_requirement | SubtensorModuleCall_sudo_set_default_take | SubtensorModuleCall_sudo_set_serving_rate_limit | SubtensorModuleCall_sudo_set_tx_rate_limit | SubtensorModuleCall_sudo_set_max_burn | SubtensorModuleCall_sudo_set_min_burn | SubtensorModuleCall_sudo_set_burn | SubtensorModuleCall_sudo_set_max_difficulty | SubtensorModuleCall_sudo_set_min_difficulty | SubtensorModuleCall_sudo_set_weights_set_rate_limit | SubtensorModuleCall_sudo_set_weights_version_key | SubtensorModuleCall_sudo_set_bonds_moving_average | SubtensorModuleCall_sudo_set_max_allowed_validators | SubtensorModuleCall_sudo_set_difficulty | SubtensorModuleCall_sudo_set_adjustment_interval | SubtensorModuleCall_sudo_set_target_registrations_per_interval | SubtensorModuleCall_sudo_set_activity_cutoff | SubtensorModuleCall_sudo_set_rho | SubtensorModuleCall_sudo_set_kappa | SubtensorModuleCall_sudo_set_max_allowed_uids | SubtensorModuleCall_sudo_set_min_allowed_weights | SubtensorModuleCall_sudo_set_validator_batch_size | SubtensorModuleCall_sudo_set_validator_sequence_length | SubtensorModuleCall_sudo_set_validator_epochs_per_reset | SubtensorModuleCall_sudo_set_validator_exclude_quantile | SubtensorModuleCall_sudo_set_validator_prune_len | SubtensorModuleCall_sudo_set_validator_logits_divergence | SubtensorModuleCall_sudo_set_validator_epoch_len | SubtensorModuleCall_sudo_set_scaling_law_power | SubtensorModuleCall_sudo_set_synergy_scaling_law_power | SubtensorModuleCall_sudo_set_immunity_period | SubtensorModuleCall_sudo_set_max_weight_limit | SubtensorModuleCall_sudo_set_max_registrations_per_block | SubtensorModuleCall_sudo_set_total_issuance | SubtensorModuleCall_sudo_set_rao_recycled | SubtensorModuleCall_benchmark_epoch_with_weights | SubtensorModuleCall_benchmark_epoch_without_weights | SubtensorModuleCall_benchmark_drain_emission

export interface SubtensorModuleCall_set_weights {
    __kind: 'set_weights'
    netuid: number
    dests: number[]
    weights: number[]
    versionKey: bigint
}

export interface SubtensorModuleCall_become_delegate {
    __kind: 'become_delegate'
    hotkey: Uint8Array
}

export interface SubtensorModuleCall_add_stake {
    __kind: 'add_stake'
    hotkey: Uint8Array
    amountStaked: bigint
}

export interface SubtensorModuleCall_remove_stake {
    __kind: 'remove_stake'
    hotkey: Uint8Array
    amountUnstaked: bigint
}

export interface SubtensorModuleCall_serve_axon {
    __kind: 'serve_axon'
    netuid: number
    version: number
    ip: bigint
    port: number
    ipType: number
    protocol: number
    placeholder1: number
    placeholder2: number
}

export interface SubtensorModuleCall_serve_prometheus {
    __kind: 'serve_prometheus'
    netuid: number
    version: number
    ip: bigint
    port: number
    ipType: number
}

export interface SubtensorModuleCall_register {
    __kind: 'register'
    netuid: number
    blockNumber: bigint
    nonce: bigint
    work: Uint8Array
    hotkey: Uint8Array
    coldkey: Uint8Array
}

export interface SubtensorModuleCall_burned_register {
    __kind: 'burned_register'
    netuid: number
    hotkey: Uint8Array
}

export interface SubtensorModuleCall_sudo_register {
    __kind: 'sudo_register'
    netuid: number
    hotkey: Uint8Array
    coldkey: Uint8Array
    stake: bigint
    balance: bigint
}

export interface SubtensorModuleCall_sudo_add_network {
    __kind: 'sudo_add_network'
    netuid: number
    tempo: number
    modality: number
}

export interface SubtensorModuleCall_sudo_remove_network {
    __kind: 'sudo_remove_network'
    netuid: number
}

export interface SubtensorModuleCall_sudo_set_emission_values {
    __kind: 'sudo_set_emission_values'
    netuids: number[]
    emission: bigint[]
}

export interface SubtensorModuleCall_sudo_add_network_connection_requirement {
    __kind: 'sudo_add_network_connection_requirement'
    netuidA: number
    netuidB: number
    requirement: number
}

export interface SubtensorModuleCall_sudo_remove_network_connection_requirement {
    __kind: 'sudo_remove_network_connection_requirement'
    netuidA: number
    netuidB: number
}

export interface SubtensorModuleCall_sudo_set_default_take {
    __kind: 'sudo_set_default_take'
    defaultTake: number
}

export interface SubtensorModuleCall_sudo_set_serving_rate_limit {
    __kind: 'sudo_set_serving_rate_limit'
    netuid: number
    servingRateLimit: bigint
}

export interface SubtensorModuleCall_sudo_set_tx_rate_limit {
    __kind: 'sudo_set_tx_rate_limit'
    txRateLimit: bigint
}

export interface SubtensorModuleCall_sudo_set_max_burn {
    __kind: 'sudo_set_max_burn'
    netuid: number
    maxBurn: bigint
}

export interface SubtensorModuleCall_sudo_set_min_burn {
    __kind: 'sudo_set_min_burn'
    netuid: number
    minBurn: bigint
}

export interface SubtensorModuleCall_sudo_set_burn {
    __kind: 'sudo_set_burn'
    netuid: number
    burn: bigint
}

export interface SubtensorModuleCall_sudo_set_max_difficulty {
    __kind: 'sudo_set_max_difficulty'
    netuid: number
    maxDifficulty: bigint
}

export interface SubtensorModuleCall_sudo_set_min_difficulty {
    __kind: 'sudo_set_min_difficulty'
    netuid: number
    minDifficulty: bigint
}

export interface SubtensorModuleCall_sudo_set_weights_set_rate_limit {
    __kind: 'sudo_set_weights_set_rate_limit'
    netuid: number
    weightsSetRateLimit: bigint
}

export interface SubtensorModuleCall_sudo_set_weights_version_key {
    __kind: 'sudo_set_weights_version_key'
    netuid: number
    weightsVersionKey: bigint
}

export interface SubtensorModuleCall_sudo_set_bonds_moving_average {
    __kind: 'sudo_set_bonds_moving_average'
    netuid: number
    bondsMovingAverage: bigint
}

export interface SubtensorModuleCall_sudo_set_max_allowed_validators {
    __kind: 'sudo_set_max_allowed_validators'
    netuid: number
    maxAllowedValidators: number
}

export interface SubtensorModuleCall_sudo_set_difficulty {
    __kind: 'sudo_set_difficulty'
    netuid: number
    difficulty: bigint
}

export interface SubtensorModuleCall_sudo_set_adjustment_interval {
    __kind: 'sudo_set_adjustment_interval'
    netuid: number
    adjustmentInterval: number
}

export interface SubtensorModuleCall_sudo_set_target_registrations_per_interval {
    __kind: 'sudo_set_target_registrations_per_interval'
    netuid: number
    targetRegistrationsPerInterval: number
}

export interface SubtensorModuleCall_sudo_set_activity_cutoff {
    __kind: 'sudo_set_activity_cutoff'
    netuid: number
    activityCutoff: number
}

export interface SubtensorModuleCall_sudo_set_rho {
    __kind: 'sudo_set_rho'
    netuid: number
    rho: number
}

export interface SubtensorModuleCall_sudo_set_kappa {
    __kind: 'sudo_set_kappa'
    netuid: number
    kappa: number
}

export interface SubtensorModuleCall_sudo_set_max_allowed_uids {
    __kind: 'sudo_set_max_allowed_uids'
    netuid: number
    maxAllowedUids: number
}

export interface SubtensorModuleCall_sudo_set_min_allowed_weights {
    __kind: 'sudo_set_min_allowed_weights'
    netuid: number
    minAllowedWeights: number
}

export interface SubtensorModuleCall_sudo_set_validator_batch_size {
    __kind: 'sudo_set_validator_batch_size'
    netuid: number
    validatorBatchSize: number
}

export interface SubtensorModuleCall_sudo_set_validator_sequence_length {
    __kind: 'sudo_set_validator_sequence_length'
    netuid: number
    validatorSequenceLength: number
}

export interface SubtensorModuleCall_sudo_set_validator_epochs_per_reset {
    __kind: 'sudo_set_validator_epochs_per_reset'
    netuid: number
    validatorEpochsPerReset: number
}

export interface SubtensorModuleCall_sudo_set_validator_exclude_quantile {
    __kind: 'sudo_set_validator_exclude_quantile'
    netuid: number
    validatorExcludeQuantile: number
}

export interface SubtensorModuleCall_sudo_set_validator_prune_len {
    __kind: 'sudo_set_validator_prune_len'
    netuid: number
    validatorPruneLen: bigint
}

export interface SubtensorModuleCall_sudo_set_validator_logits_divergence {
    __kind: 'sudo_set_validator_logits_divergence'
    netuid: number
    validatorLogitsDivergence: number
}

export interface SubtensorModuleCall_sudo_set_validator_epoch_len {
    __kind: 'sudo_set_validator_epoch_len'
    netuid: number
    validatorEpochLength: number
}

export interface SubtensorModuleCall_sudo_set_scaling_law_power {
    __kind: 'sudo_set_scaling_law_power'
    netuid: number
    scalingLawPower: number
}

export interface SubtensorModuleCall_sudo_set_synergy_scaling_law_power {
    __kind: 'sudo_set_synergy_scaling_law_power'
    netuid: number
    synergyScalingLawPower: number
}

export interface SubtensorModuleCall_sudo_set_immunity_period {
    __kind: 'sudo_set_immunity_period'
    netuid: number
    immunityPeriod: number
}

export interface SubtensorModuleCall_sudo_set_max_weight_limit {
    __kind: 'sudo_set_max_weight_limit'
    netuid: number
    maxWeightLimit: number
}

export interface SubtensorModuleCall_sudo_set_max_registrations_per_block {
    __kind: 'sudo_set_max_registrations_per_block'
    netuid: number
    maxRegistrationsPerBlock: number
}

export interface SubtensorModuleCall_sudo_set_total_issuance {
    __kind: 'sudo_set_total_issuance'
    totalIssuance: bigint
}

export interface SubtensorModuleCall_sudo_set_rao_recycled {
    __kind: 'sudo_set_rao_recycled'
    netuid: number
    raoRecycled: bigint
}

export interface SubtensorModuleCall_benchmark_epoch_with_weights {
    __kind: 'benchmark_epoch_with_weights'
}

export interface SubtensorModuleCall_benchmark_epoch_without_weights {
    __kind: 'benchmark_epoch_without_weights'
}

export interface SubtensorModuleCall_benchmark_drain_emission {
    __kind: 'benchmark_drain_emission'
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type UtilityCall = UtilityCall_batch | UtilityCall_as_derivative | UtilityCall_batch_all | UtilityCall_dispatch_as | UtilityCall_force_batch | UtilityCall_with_weight

/**
 * Send a batch of dispatch calls.
 * 
 * May be called from any origin except `None`.
 * 
 * - `calls`: The calls to be dispatched from the same origin. The number of call must not
 *   exceed the constant: `batched_calls_limit` (available in constant metadata).
 * 
 * If origin is root then the calls are dispatched without checking origin filter. (This
 * includes bypassing `frame_system::Config::BaseCallFilter`).
 * 
 * ## Complexity
 * - O(C) where C is the number of calls to be batched.
 * 
 * This will return `Ok` in all circumstances. To determine the success of the batch, an
 * event is deposited. If a call failed and the batch was interrupted, then the
 * `BatchInterrupted` event is deposited, along with the number of successful calls made
 * and the error of the failed call. If all were successful, then the `BatchCompleted`
 * event is deposited.
 */
export interface UtilityCall_batch {
    __kind: 'batch'
    calls: Call[]
}

/**
 * Send a call through an indexed pseudonym of the sender.
 * 
 * Filter from origin are passed along. The call will be dispatched with an origin which
 * use the same filter as the origin of this call.
 * 
 * NOTE: If you need to ensure that any account-based filtering is not honored (i.e.
 * because you expect `proxy` to have been used prior in the call stack and you do not want
 * the call restrictions to apply to any sub-accounts), then use `as_multi_threshold_1`
 * in the Multisig pallet instead.
 * 
 * NOTE: Prior to version *12, this was called `as_limited_sub`.
 * 
 * The dispatch origin for this call must be _Signed_.
 */
export interface UtilityCall_as_derivative {
    __kind: 'as_derivative'
    index: number
    call: Call
}

/**
 * Send a batch of dispatch calls and atomically execute them.
 * The whole transaction will rollback and fail if any of the calls failed.
 * 
 * May be called from any origin except `None`.
 * 
 * - `calls`: The calls to be dispatched from the same origin. The number of call must not
 *   exceed the constant: `batched_calls_limit` (available in constant metadata).
 * 
 * If origin is root then the calls are dispatched without checking origin filter. (This
 * includes bypassing `frame_system::Config::BaseCallFilter`).
 * 
 * ## Complexity
 * - O(C) where C is the number of calls to be batched.
 */
export interface UtilityCall_batch_all {
    __kind: 'batch_all'
    calls: Call[]
}

/**
 * Dispatches a function call with a provided origin.
 * 
 * The dispatch origin for this call must be _Root_.
 * 
 * ## Complexity
 * - O(1).
 */
export interface UtilityCall_dispatch_as {
    __kind: 'dispatch_as'
    asOrigin: OriginCaller
    call: Call
}

/**
 * Send a batch of dispatch calls.
 * Unlike `batch`, it allows errors and won't interrupt.
 * 
 * May be called from any origin except `None`.
 * 
 * - `calls`: The calls to be dispatched from the same origin. The number of call must not
 *   exceed the constant: `batched_calls_limit` (available in constant metadata).
 * 
 * If origin is root then the calls are dispatch without checking origin filter. (This
 * includes bypassing `frame_system::Config::BaseCallFilter`).
 * 
 * ## Complexity
 * - O(C) where C is the number of calls to be batched.
 */
export interface UtilityCall_force_batch {
    __kind: 'force_batch'
    calls: Call[]
}

/**
 * Dispatch a function call with a specified weight.
 * 
 * This function does not check the weight of the call, and instead allows the
 * Root origin to specify the weight of the call.
 * 
 * The dispatch origin for this call must be _Root_.
 */
export interface UtilityCall_with_weight {
    __kind: 'with_weight'
    call: Call
    weight: Weight
}

export type RawOrigin = RawOrigin_Root | RawOrigin_Signed | RawOrigin_None

export interface RawOrigin_Root {
    __kind: 'Root'
}

export interface RawOrigin_Signed {
    __kind: 'Signed'
    value: Uint8Array
}

export interface RawOrigin_None {
    __kind: 'None'
}

export type Reasons = Reasons_Fee | Reasons_Misc | Reasons_All

export interface Reasons_Fee {
    __kind: 'Fee'
}

export interface Reasons_Misc {
    __kind: 'Misc'
}

export interface Reasons_All {
    __kind: 'All'
}

export type DigestItem = DigestItem_PreRuntime | DigestItem_Consensus | DigestItem_Seal | DigestItem_Other | DigestItem_RuntimeEnvironmentUpdated

export interface DigestItem_PreRuntime {
    __kind: 'PreRuntime'
    value: [Uint8Array, Uint8Array]
}

export interface DigestItem_Consensus {
    __kind: 'Consensus'
    value: [Uint8Array, Uint8Array]
}

export interface DigestItem_Seal {
    __kind: 'Seal'
    value: [Uint8Array, Uint8Array]
}

export interface DigestItem_Other {
    __kind: 'Other'
    value: Uint8Array
}

export interface DigestItem_RuntimeEnvironmentUpdated {
    __kind: 'RuntimeEnvironmentUpdated'
}

export type Event = Event_System | Event_Grandpa | Event_Balances | Event_TransactionPayment | Event_Sudo | Event_SubtensorModule | Event_Utility

export interface Event_System {
    __kind: 'System'
    value: SystemEvent
}

export interface Event_Grandpa {
    __kind: 'Grandpa'
    value: GrandpaEvent
}

export interface Event_Balances {
    __kind: 'Balances'
    value: BalancesEvent
}

export interface Event_TransactionPayment {
    __kind: 'TransactionPayment'
    value: TransactionPaymentEvent
}

export interface Event_Sudo {
    __kind: 'Sudo'
    value: SudoEvent
}

export interface Event_SubtensorModule {
    __kind: 'SubtensorModule'
    value: SubtensorModuleEvent
}

export interface Event_Utility {
    __kind: 'Utility'
    value: UtilityEvent
}

export interface Type_60 {
    normal: number
    operational: number
    mandatory: number
}

export interface Type_56 {
    normal: WeightsPerClass
    operational: WeightsPerClass
    mandatory: WeightsPerClass
}

export interface Type_82 {
    roundNumber: bigint
    identity: Uint8Array
    first: [Prevote, Uint8Array]
    second: [Prevote, Uint8Array]
}

export interface Type_88 {
    roundNumber: bigint
    identity: Uint8Array
    first: [Precommit, Uint8Array]
    second: [Precommit, Uint8Array]
}

/**
 * Event for the System pallet.
 */
export type SystemEvent = SystemEvent_ExtrinsicSuccess | SystemEvent_ExtrinsicFailed | SystemEvent_CodeUpdated | SystemEvent_NewAccount | SystemEvent_KilledAccount | SystemEvent_Remarked

/**
 * An extrinsic completed successfully.
 */
export interface SystemEvent_ExtrinsicSuccess {
    __kind: 'ExtrinsicSuccess'
    dispatchInfo: DispatchInfo
}

/**
 * An extrinsic failed.
 */
export interface SystemEvent_ExtrinsicFailed {
    __kind: 'ExtrinsicFailed'
    dispatchError: DispatchError
    dispatchInfo: DispatchInfo
}

/**
 * `:code` was updated.
 */
export interface SystemEvent_CodeUpdated {
    __kind: 'CodeUpdated'
}

/**
 * A new account was created.
 */
export interface SystemEvent_NewAccount {
    __kind: 'NewAccount'
    account: Uint8Array
}

/**
 * An account was reaped.
 */
export interface SystemEvent_KilledAccount {
    __kind: 'KilledAccount'
    account: Uint8Array
}

/**
 * On on-chain remark happened.
 */
export interface SystemEvent_Remarked {
    __kind: 'Remarked'
    sender: Uint8Array
    hash: Uint8Array
}

/**
 * 
			The [event](https://docs.substrate.io/main-docs/build/events-errors/) emitted
			by this pallet.
			
 */
export type GrandpaEvent = GrandpaEvent_NewAuthorities | GrandpaEvent_Paused | GrandpaEvent_Resumed

/**
 * New authority set has been applied.
 */
export interface GrandpaEvent_NewAuthorities {
    __kind: 'NewAuthorities'
    authoritySet: [Uint8Array, bigint][]
}

/**
 * Current authority set has been paused.
 */
export interface GrandpaEvent_Paused {
    __kind: 'Paused'
}

/**
 * Current authority set has been resumed.
 */
export interface GrandpaEvent_Resumed {
    __kind: 'Resumed'
}

/**
 * 
			The [event](https://docs.substrate.io/main-docs/build/events-errors/) emitted
			by this pallet.
			
 */
export type BalancesEvent = BalancesEvent_Endowed | BalancesEvent_DustLost | BalancesEvent_Transfer | BalancesEvent_BalanceSet | BalancesEvent_Reserved | BalancesEvent_Unreserved | BalancesEvent_ReserveRepatriated | BalancesEvent_Deposit | BalancesEvent_Withdraw | BalancesEvent_Slashed

/**
 * An account was created with some free balance.
 */
export interface BalancesEvent_Endowed {
    __kind: 'Endowed'
    account: Uint8Array
    freeBalance: bigint
}

/**
 * An account was removed whose balance was non-zero but below ExistentialDeposit,
 * resulting in an outright loss.
 */
export interface BalancesEvent_DustLost {
    __kind: 'DustLost'
    account: Uint8Array
    amount: bigint
}

/**
 * Transfer succeeded.
 */
export interface BalancesEvent_Transfer {
    __kind: 'Transfer'
    from: Uint8Array
    to: Uint8Array
    amount: bigint
}

/**
 * A balance was set by root.
 */
export interface BalancesEvent_BalanceSet {
    __kind: 'BalanceSet'
    who: Uint8Array
    free: bigint
    reserved: bigint
}

/**
 * Some balance was reserved (moved from free to reserved).
 */
export interface BalancesEvent_Reserved {
    __kind: 'Reserved'
    who: Uint8Array
    amount: bigint
}

/**
 * Some balance was unreserved (moved from reserved to free).
 */
export interface BalancesEvent_Unreserved {
    __kind: 'Unreserved'
    who: Uint8Array
    amount: bigint
}

/**
 * Some balance was moved from the reserve of the first account to the second account.
 * Final argument indicates the destination balance type.
 */
export interface BalancesEvent_ReserveRepatriated {
    __kind: 'ReserveRepatriated'
    from: Uint8Array
    to: Uint8Array
    amount: bigint
    destinationStatus: BalanceStatus
}

/**
 * Some amount was deposited (e.g. for transaction fees).
 */
export interface BalancesEvent_Deposit {
    __kind: 'Deposit'
    who: Uint8Array
    amount: bigint
}

/**
 * Some amount was withdrawn from the account (e.g. for transaction fees).
 */
export interface BalancesEvent_Withdraw {
    __kind: 'Withdraw'
    who: Uint8Array
    amount: bigint
}

/**
 * Some amount was removed from the account (e.g. for misbehavior).
 */
export interface BalancesEvent_Slashed {
    __kind: 'Slashed'
    who: Uint8Array
    amount: bigint
}

/**
 * 
			The [event](https://docs.substrate.io/main-docs/build/events-errors/) emitted
			by this pallet.
			
 */
export type TransactionPaymentEvent = TransactionPaymentEvent_TransactionFeePaid

/**
 * A transaction fee `actual_fee`, of which `tip` was added to the minimum inclusion fee,
 * has been paid by `who`.
 */
export interface TransactionPaymentEvent_TransactionFeePaid {
    __kind: 'TransactionFeePaid'
    who: Uint8Array
    actualFee: bigint
    tip: bigint
}

/**
 * 
			The [event](https://docs.substrate.io/main-docs/build/events-errors/) emitted
			by this pallet.
			
 */
export type SudoEvent = SudoEvent_Sudid | SudoEvent_KeyChanged | SudoEvent_SudoAsDone

/**
 * A sudo just took place. \[result\]
 */
export interface SudoEvent_Sudid {
    __kind: 'Sudid'
    sudoResult: Type_37
}

/**
 * The \[sudoer\] just switched identity; the old key is supplied if one existed.
 */
export interface SudoEvent_KeyChanged {
    __kind: 'KeyChanged'
    oldSudoer: (Uint8Array | undefined)
}

/**
 * A sudo just took place. \[result\]
 */
export interface SudoEvent_SudoAsDone {
    __kind: 'SudoAsDone'
    sudoResult: Type_37
}

/**
 * 
			The [event](https://docs.substrate.io/main-docs/build/events-errors/) emitted
			by this pallet.
			
 */
export type SubtensorModuleEvent = SubtensorModuleEvent_NetworkAdded | SubtensorModuleEvent_NetworkRemoved | SubtensorModuleEvent_StakeAdded | SubtensorModuleEvent_StakeRemoved | SubtensorModuleEvent_WeightsSet | SubtensorModuleEvent_NeuronRegistered | SubtensorModuleEvent_BulkNeuronsRegistered | SubtensorModuleEvent_BulkBalancesSet | SubtensorModuleEvent_MaxAllowedUidsSet | SubtensorModuleEvent_MaxWeightLimitSet | SubtensorModuleEvent_DifficultySet | SubtensorModuleEvent_AdjustmentIntervalSet | SubtensorModuleEvent_RegistrationPerIntervalSet | SubtensorModuleEvent_MaxRegistrationsPerBlockSet | SubtensorModuleEvent_ActivityCutoffSet | SubtensorModuleEvent_RhoSet | SubtensorModuleEvent_KappaSet | SubtensorModuleEvent_MinAllowedWeightSet | SubtensorModuleEvent_ValidatorBatchSizeSet | SubtensorModuleEvent_ValidatorSequenceLengthSet | SubtensorModuleEvent_ValidatorEpochPerResetSet | SubtensorModuleEvent_ValidatorExcludeQuantileSet | SubtensorModuleEvent_ValidatorEpochLengthSet | SubtensorModuleEvent_ValidatorLogitsDivergenceSet | SubtensorModuleEvent_ValidatorPruneLenSet | SubtensorModuleEvent_ScalingLawPowerSet | SubtensorModuleEvent_SynergyScalingLawPowerSet | SubtensorModuleEvent_WeightsSetRateLimitSet | SubtensorModuleEvent_ImmunityPeriodSet | SubtensorModuleEvent_BondsMovingAverageSet | SubtensorModuleEvent_MaxAllowedValidatorsSet | SubtensorModuleEvent_AxonServed | SubtensorModuleEvent_PrometheusServed | SubtensorModuleEvent_EmissionValuesSet | SubtensorModuleEvent_NetworkConnectionAdded | SubtensorModuleEvent_NetworkConnectionRemoved | SubtensorModuleEvent_DelegateAdded | SubtensorModuleEvent_DefaultTakeSet | SubtensorModuleEvent_WeightsVersionKeySet | SubtensorModuleEvent_MinDifficultySet | SubtensorModuleEvent_MaxDifficultySet | SubtensorModuleEvent_ServingRateLimitSet | SubtensorModuleEvent_BurnSet | SubtensorModuleEvent_MaxBurnSet | SubtensorModuleEvent_MinBurnSet | SubtensorModuleEvent_TxRateLimitSet | SubtensorModuleEvent_RAORecycledForRegistrationSet

export interface SubtensorModuleEvent_NetworkAdded {
    __kind: 'NetworkAdded'
    value: [number, number]
}

export interface SubtensorModuleEvent_NetworkRemoved {
    __kind: 'NetworkRemoved'
    value: number
}

export interface SubtensorModuleEvent_StakeAdded {
    __kind: 'StakeAdded'
    value: [Uint8Array, bigint]
}

export interface SubtensorModuleEvent_StakeRemoved {
    __kind: 'StakeRemoved'
    value: [Uint8Array, bigint]
}

export interface SubtensorModuleEvent_WeightsSet {
    __kind: 'WeightsSet'
    value: [number, number]
}

export interface SubtensorModuleEvent_NeuronRegistered {
    __kind: 'NeuronRegistered'
    value: [number, number, Uint8Array]
}

export interface SubtensorModuleEvent_BulkNeuronsRegistered {
    __kind: 'BulkNeuronsRegistered'
    value: [number, number]
}

export interface SubtensorModuleEvent_BulkBalancesSet {
    __kind: 'BulkBalancesSet'
    value: [number, number]
}

export interface SubtensorModuleEvent_MaxAllowedUidsSet {
    __kind: 'MaxAllowedUidsSet'
    value: [number, number]
}

export interface SubtensorModuleEvent_MaxWeightLimitSet {
    __kind: 'MaxWeightLimitSet'
    value: [number, number]
}

export interface SubtensorModuleEvent_DifficultySet {
    __kind: 'DifficultySet'
    value: [number, bigint]
}

export interface SubtensorModuleEvent_AdjustmentIntervalSet {
    __kind: 'AdjustmentIntervalSet'
    value: [number, number]
}

export interface SubtensorModuleEvent_RegistrationPerIntervalSet {
    __kind: 'RegistrationPerIntervalSet'
    value: [number, number]
}

export interface SubtensorModuleEvent_MaxRegistrationsPerBlockSet {
    __kind: 'MaxRegistrationsPerBlockSet'
    value: [number, number]
}

export interface SubtensorModuleEvent_ActivityCutoffSet {
    __kind: 'ActivityCutoffSet'
    value: [number, number]
}

export interface SubtensorModuleEvent_RhoSet {
    __kind: 'RhoSet'
    value: [number, number]
}

export interface SubtensorModuleEvent_KappaSet {
    __kind: 'KappaSet'
    value: [number, number]
}

export interface SubtensorModuleEvent_MinAllowedWeightSet {
    __kind: 'MinAllowedWeightSet'
    value: [number, number]
}

export interface SubtensorModuleEvent_ValidatorBatchSizeSet {
    __kind: 'ValidatorBatchSizeSet'
    value: [number, number]
}

export interface SubtensorModuleEvent_ValidatorSequenceLengthSet {
    __kind: 'ValidatorSequenceLengthSet'
    value: [number, number]
}

export interface SubtensorModuleEvent_ValidatorEpochPerResetSet {
    __kind: 'ValidatorEpochPerResetSet'
    value: [number, number]
}

export interface SubtensorModuleEvent_ValidatorExcludeQuantileSet {
    __kind: 'ValidatorExcludeQuantileSet'
    value: [number, number]
}

export interface SubtensorModuleEvent_ValidatorEpochLengthSet {
    __kind: 'ValidatorEpochLengthSet'
    value: [number, number]
}

export interface SubtensorModuleEvent_ValidatorLogitsDivergenceSet {
    __kind: 'ValidatorLogitsDivergenceSet'
    value: [number, number]
}

export interface SubtensorModuleEvent_ValidatorPruneLenSet {
    __kind: 'ValidatorPruneLenSet'
    value: [number, bigint]
}

export interface SubtensorModuleEvent_ScalingLawPowerSet {
    __kind: 'ScalingLawPowerSet'
    value: [number, number]
}

export interface SubtensorModuleEvent_SynergyScalingLawPowerSet {
    __kind: 'SynergyScalingLawPowerSet'
    value: [number, number]
}

export interface SubtensorModuleEvent_WeightsSetRateLimitSet {
    __kind: 'WeightsSetRateLimitSet'
    value: [number, bigint]
}

export interface SubtensorModuleEvent_ImmunityPeriodSet {
    __kind: 'ImmunityPeriodSet'
    value: [number, number]
}

export interface SubtensorModuleEvent_BondsMovingAverageSet {
    __kind: 'BondsMovingAverageSet'
    value: [number, bigint]
}

export interface SubtensorModuleEvent_MaxAllowedValidatorsSet {
    __kind: 'MaxAllowedValidatorsSet'
    value: [number, number]
}

export interface SubtensorModuleEvent_AxonServed {
    __kind: 'AxonServed'
    value: [number, Uint8Array]
}

export interface SubtensorModuleEvent_PrometheusServed {
    __kind: 'PrometheusServed'
    value: [number, Uint8Array]
}

export interface SubtensorModuleEvent_EmissionValuesSet {
    __kind: 'EmissionValuesSet'
}

export interface SubtensorModuleEvent_NetworkConnectionAdded {
    __kind: 'NetworkConnectionAdded'
    value: [number, number, number]
}

export interface SubtensorModuleEvent_NetworkConnectionRemoved {
    __kind: 'NetworkConnectionRemoved'
    value: [number, number]
}

export interface SubtensorModuleEvent_DelegateAdded {
    __kind: 'DelegateAdded'
    value: [Uint8Array, Uint8Array, number]
}

export interface SubtensorModuleEvent_DefaultTakeSet {
    __kind: 'DefaultTakeSet'
    value: number
}

export interface SubtensorModuleEvent_WeightsVersionKeySet {
    __kind: 'WeightsVersionKeySet'
    value: [number, bigint]
}

export interface SubtensorModuleEvent_MinDifficultySet {
    __kind: 'MinDifficultySet'
    value: [number, bigint]
}

export interface SubtensorModuleEvent_MaxDifficultySet {
    __kind: 'MaxDifficultySet'
    value: [number, bigint]
}

export interface SubtensorModuleEvent_ServingRateLimitSet {
    __kind: 'ServingRateLimitSet'
    value: [number, bigint]
}

export interface SubtensorModuleEvent_BurnSet {
    __kind: 'BurnSet'
    value: [number, bigint]
}

export interface SubtensorModuleEvent_MaxBurnSet {
    __kind: 'MaxBurnSet'
    value: [number, bigint]
}

export interface SubtensorModuleEvent_MinBurnSet {
    __kind: 'MinBurnSet'
    value: [number, bigint]
}

export interface SubtensorModuleEvent_TxRateLimitSet {
    __kind: 'TxRateLimitSet'
    value: bigint
}

export interface SubtensorModuleEvent_RAORecycledForRegistrationSet {
    __kind: 'RAORecycledForRegistrationSet'
    value: [number, bigint]
}

/**
 * 
			The [event](https://docs.substrate.io/main-docs/build/events-errors/) emitted
			by this pallet.
			
 */
export type UtilityEvent = UtilityEvent_BatchInterrupted | UtilityEvent_BatchCompleted | UtilityEvent_BatchCompletedWithErrors | UtilityEvent_ItemCompleted | UtilityEvent_ItemFailed | UtilityEvent_DispatchedAs

/**
 * Batch of dispatches did not complete fully. Index of first failing dispatch given, as
 * well as the error.
 */
export interface UtilityEvent_BatchInterrupted {
    __kind: 'BatchInterrupted'
    index: number
    error: DispatchError
}

/**
 * Batch of dispatches completed fully with no error.
 */
export interface UtilityEvent_BatchCompleted {
    __kind: 'BatchCompleted'
}

/**
 * Batch of dispatches completed but has errors.
 */
export interface UtilityEvent_BatchCompletedWithErrors {
    __kind: 'BatchCompletedWithErrors'
}

/**
 * A single item within a Batch of dispatches has completed with no error.
 */
export interface UtilityEvent_ItemCompleted {
    __kind: 'ItemCompleted'
}

/**
 * A single item within a Batch of dispatches has completed with error.
 */
export interface UtilityEvent_ItemFailed {
    __kind: 'ItemFailed'
    error: DispatchError
}

/**
 * A call was dispatched.
 */
export interface UtilityEvent_DispatchedAs {
    __kind: 'DispatchedAs'
    result: Type_37
}

export interface WeightsPerClass {
    baseExtrinsic: Weight
    maxExtrinsic: (Weight | undefined)
    maxTotal: (Weight | undefined)
    reserved: (Weight | undefined)
}

export interface Prevote {
    targetHash: Uint8Array
    targetNumber: number
}

export interface Precommit {
    targetHash: Uint8Array
    targetNumber: number
}
