import type {Result, Option} from './support'

export type Call = Call_System | Call_Timestamp | Call_Grandpa | Call_Balances | Call_Sudo | Call_SubtensorModule

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

export interface EventRecord {
    phase: Phase
    event: Event
    topics: Uint8Array[]
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type SystemCall = SystemCall_fill_block | SystemCall_remark | SystemCall_set_heap_pages | SystemCall_set_code | SystemCall_set_code_without_checks | SystemCall_set_storage | SystemCall_kill_storage | SystemCall_kill_prefix | SystemCall_remark_with_event

/**
 * A dispatch that will fill the block weight up to the given ratio.
 */
export interface SystemCall_fill_block {
    __kind: 'fill_block'
    ratio: number
}

/**
 * Make some on-chain remark.
 * 
 * # <weight>
 * - `O(1)`
 * # </weight>
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
 * # <weight>
 * - `O(C + S)` where `C` length of `code` and `S` complexity of `can_set_code`
 * - 1 call to `can_set_code`: `O(S)` (calls `sp_io::misc::runtime_version` which is
 *   expensive).
 * - 1 storage write (codec `O(C)`).
 * - 1 digest item.
 * - 1 event.
 * The weight of this function is dependent on the runtime, but generally this is very
 * expensive. We will treat this as a full block.
 * # </weight>
 */
export interface SystemCall_set_code {
    __kind: 'set_code'
    code: Uint8Array
}

/**
 * Set the new runtime code without doing any checks of the given `code`.
 * 
 * # <weight>
 * - `O(C)` where `C` length of `code`
 * - 1 storage write (codec `O(C)`).
 * - 1 digest item.
 * - 1 event.
 * The weight of this function is dependent on the runtime. We will treat this as a full
 * block. # </weight>
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
 * # <weight>
 * - `O(1)` (Note that implementations of `OnTimestampSet` must also be `O(1)`)
 * - 1 storage read and 1 storage mutation (codec `O(1)`). (because of `DidUpdate::take` in
 *   `on_finalize`)
 * - 1 event handler `on_timestamp_set`. Must be `O(1)`.
 * # </weight>
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
 * Note that the current authority set of the GRANDPA finality gadget has
 * stalled. This will trigger a forced authority set change at the beginning
 * of the next session, to be enacted `delay` blocks after that. The delay
 * should be high enough to safely assume that the block signalling the
 * forced change will not be re-orged (e.g. 1000 blocks). The GRANDPA voters
 * will start the new authority set using the given finalized block as base.
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
 * # <weight>
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
 * ---------------------------------
 * - Origin account is already in memory, so no DB operations for them.
 * # </weight>
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
 * # <weight>
 * - Same as transfer, but additional read and write because the source account is not
 *   assumed to be in the overlay.
 * # </weight>
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
 *   keep the sender account alive (true). # <weight>
 * - O(1). Just like transfer, but reading the user's transferable balance first.
 *   #</weight>
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
 * # <weight>
 * - O(1).
 * - Limited storage reads.
 * - One DB write (event).
 * - Weight of derivative `call` execution + 10,000.
 * # </weight>
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
 * # <weight>
 * - O(1).
 * - The weight of this call is defined by the caller.
 * # </weight>
 */
export interface SudoCall_sudo_unchecked_weight {
    __kind: 'sudo_unchecked_weight'
    call: Call
    weight: bigint
}

/**
 * Authenticates the current sudo key and sets the given AccountId (`new`) as the new sudo
 * key.
 * 
 * The dispatch origin for this call must be _Signed_.
 * 
 * # <weight>
 * - O(1).
 * - Limited storage reads.
 * - One DB change.
 * # </weight>
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
 * # <weight>
 * - O(1).
 * - Limited storage reads.
 * - One DB write (event).
 * - Weight of derivative `call` execution + 10,000.
 * # </weight>
 */
export interface SudoCall_sudo_as {
    __kind: 'sudo_as'
    who: MultiAddress
    call: Call
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type SubtensorModuleCall = SubtensorModuleCall_set_weights | SubtensorModuleCall_add_stake | SubtensorModuleCall_remove_stake | SubtensorModuleCall_serve_axon | SubtensorModuleCall_register | SubtensorModuleCall_sudo_set_blocks_per_step | SubtensorModuleCall_sudo_set_bonds_moving_average | SubtensorModuleCall_sudo_set_difficulty | SubtensorModuleCall_sudo_set_adjustment_interval | SubtensorModuleCall_sudo_set_activity_cutoff | SubtensorModuleCall_sudo_target_registrations_per_interval | SubtensorModuleCall_sudo_set_rho | SubtensorModuleCall_sudo_set_kappa | SubtensorModuleCall_sudo_set_max_allowed_uids | SubtensorModuleCall_sudo_set_min_allowed_weights | SubtensorModuleCall_sudo_set_max_allowed_max_min_ratio | SubtensorModuleCall_sudo_set_max_weight_limit | SubtensorModuleCall_sudo_set_validator_batch_size | SubtensorModuleCall_sudo_set_validator_sequence_length | SubtensorModuleCall_sudo_set_validator_epoch_len | SubtensorModuleCall_sudo_set_validator_epochs_per_reset | SubtensorModuleCall_sudo_set_incentive_pruning_denominator | SubtensorModuleCall_sudo_set_stake_pruning_denominator | SubtensorModuleCall_sudo_set_stake_pruning_min | SubtensorModuleCall_sudo_set_immunity_period | SubtensorModuleCall_sudo_reset_bonds | SubtensorModuleCall_sudo_set_scaling_law_power | SubtensorModuleCall_sudo_set_synergy_scaling_law_power | SubtensorModuleCall_sudo_set_validator_exclude_quantile

/**
 * --- Sets the caller weights for the incentive mechanism. The call can be
 * made from the hotkey account so is potentially insecure, however, the damage
 * of changing weights is minimal if caught early. This function includes all the
 * checks that the passed weights meet the requirements. Stored as u32s they represent
 * rational values in the range [0,1] which sum to 1 and can be interpreted as
 * probabilities. The specific weights determine how inflation propagates outward
 * from this peer. 
 * 
 * Note: The 32 bit integers weights should represent 1.0 as the max u32.
 * However, the function normalizes all integers to u32_max anyway. This means that if the sum of all
 * elements is larger or smaller than the amount of elements * u32_max, all elements
 * will be corrected for this deviation. 
 * 
 * # Args:
 * 	* `origin`: (<T as frame_system::Config>Origin):
 * 		- The caller, a hotkey who wishes to set their weights.
 * 
 * 	* `uids` (Vec<u32>):
 * 		- The edge endpoint for the weight, i.e. j for w_ij.
 * 
 * 	* 'weights' (Vec<u32>):
 * 		- The u32 integer encoded weights. Interpreted as rational
 * 		values in the range [0,1]. They must sum to in32::MAX.
 * 
 * # Event:
 * 	* WeightsSet;
 * 		- On successfully setting the weights on chain.
 * 
 * # Raises:
 * 	* 'WeightVecNotEqualSize':
 * 		- If the passed weights and uids have unequal size.
 * 
 * 	* 'WeightSumToLarge':
 * 		- When the calling coldkey is not associated with the hotkey account.
 * 
 * 	* 'InsufficientBalance':
 * 		- When the amount to stake exceeds the amount of balance in the
 * 		associated colkey account.
 * 
 */
export interface SubtensorModuleCall_set_weights {
    __kind: 'set_weights'
    dests: number[]
    weights: number[]
}

/**
 * --- Adds stake to a neuron account. The call is made from the
 * coldkey account linked in the neurons's NeuronMetadata.
 * Only the associated coldkey is allowed to make staking and
 * unstaking requests. This protects the neuron against
 * attacks on its hotkey running in production code.
 * 
 * # Args:
 * 	* 'origin': (<T as frame_system::Config>Origin):
 * 		- The caller, a coldkey signature associated with the hotkey account.
 * 
 * 	* 'hotkey' (T::AccountId):
 * 		- The hotkey account to add stake to.
 * 
 * 	* 'ammount_staked' (u64):
 * 		- The ammount to transfer from the balances account of the cold key
 * 		into the staking account of the hotkey.
 * 
 * # Event:
 * 	* 'StakeAdded':
 * 		- On the successful staking of funds.
 * 
 * # Raises:
 * 	* 'NotRegistered':
 * 		- If the hotkey account is not active (has not subscribed)
 * 
 * 	* 'NonAssociatedColdKey':
 * 		- When the calling coldkey is not associated with the hotkey account.
 * 
 * 	* 'InsufficientBalance':
 * 		- When the amount to stake exceeds the amount of balance in the
 * 		associated colkey account.
 * 
 */
export interface SubtensorModuleCall_add_stake {
    __kind: 'add_stake'
    hotkey: Uint8Array
    ammountStaked: bigint
}

/**
 * ---- Remove stake from the staking account. The call must be made
 * from the coldkey account attached to the neuron metadata. Only this key
 * has permission to make staking and unstaking requests.
 * 
 * # Args:
 * 	* 'origin': (<T as frame_system::Config>Origin):
 * 		- The caller, a coldkey signature associated with the hotkey account.
 * 
 * 	* 'hotkey' (T::AccountId):
 * 		- The hotkey account to withdraw stake from.
 * 
 * 	* 'ammount_unstaked' (u64):
 * 		- The ammount to transfer from the staking account into the balance
 * 		of the coldkey.
 * 
 * # Event:
 * 	* 'StakeRemoved':
 * 		- On successful withdrawl.
 * 
 * # Raises:
 * 	* 'NonAssociatedColdKey':
 * 		- When the calling coldkey is not associated with the hotkey account.
 * 
 * 	* 'NotEnoughStaketoWithdraw':
 * 		- When the amount to unstake exceeds the quantity staked in the
 * 		associated hotkey staking account.
 * 
 */
export interface SubtensorModuleCall_remove_stake {
    __kind: 'remove_stake'
    hotkey: Uint8Array
    ammountUnstaked: bigint
}

/**
 * ---- Serves or updates axon information for the neuron associated with the caller. If the caller
 * already registered the metadata is updated. If the caller is not registered this call throws NotRegsitered.
 * 
 * # Args:
 * 	* 'origin': (<T as frame_system::Config>Origin):
 * 		- The caller, a hotkey associated of the registered neuron.
 * 
 * 	* 'ip' (u128):
 * 		- The u64 encoded IP address of type 6 or 4.
 * 
 * 	* 'port' (u16):
 * 		- The port number where this neuron receives RPC requests.
 * 
 * 	* 'ip_type' (u8):
 * 		- The ip type one of (4,6).
 * 
 * 	* 'modality' (u8):
 * 		- The neuron modality type.
 * 
 * # Event:
 * 	* 'AxonServed':
 * 		- On subscription of a new neuron to the active set.
 * 
 */
export interface SubtensorModuleCall_serve_axon {
    __kind: 'serve_axon'
    version: number
    ip: bigint
    port: number
    ipType: number
    modality: number
}

/**
 * ---- Registers a new neuron to the graph. 
 * 
 * # Args:
 * 	* 'origin': (<T as frame_system::Config>Origin):
 * 		- The caller, registration key as found in RegistrationKey::get(0);
 * 
 * 	* 'block_number' (u64):
 * 		- Block number of hash to attempt.
 * 
 * 	* 'nonce' (u64):
 * 		- Hashing nonce as a u64.
 * 
 * 	* 'work' (Vec<u8>):
 * 		- Work hash as list of bytes.
 * 
 * 	* 'hotkey' (T::AccountId,):
 * 		- Hotkey to register.
 * 
 * 	* 'coldkey' (T::AccountId,):
 * 		- Coldkey to register.
 * 
 * # Event:
 * 	* 'NeuronRegistered':
 * 		- On subscription of a new neuron to the active set.
 * 
 */
export interface SubtensorModuleCall_register {
    __kind: 'register'
    blockNumber: bigint
    nonce: bigint
    work: Uint8Array
    hotkey: Uint8Array
    coldkey: Uint8Array
}

/**
 * ---- SUDO ONLY FUNCTIONS
 * 
 * # Args:
 * 	* 'origin': (<T as frame_system::Config>Origin):
 * 		- The caller, must be sudo.
 * 
 * ONE OF:
 * 	* 'adjustment_interval' (u64):
 * 	* 'activity_cutoff' (u64):
 * 	* 'difficulty' (u64):
 * 
 * # Events:
 * 		* 'DifficultySet'
 * 	* 'AdjustmentIntervalSet'
 * 		* 'ActivityCuttoffSet'
 * 		* 'TargetRegistrationsPerIntervalSet'
 * 
 * 
 */
export interface SubtensorModuleCall_sudo_set_blocks_per_step {
    __kind: 'sudo_set_blocks_per_step'
    blocksPerStep: bigint
}

export interface SubtensorModuleCall_sudo_set_bonds_moving_average {
    __kind: 'sudo_set_bonds_moving_average'
    bondsMovingAverage: bigint
}

export interface SubtensorModuleCall_sudo_set_difficulty {
    __kind: 'sudo_set_difficulty'
    difficulty: bigint
}

export interface SubtensorModuleCall_sudo_set_adjustment_interval {
    __kind: 'sudo_set_adjustment_interval'
    adjustmentInterval: bigint
}

export interface SubtensorModuleCall_sudo_set_activity_cutoff {
    __kind: 'sudo_set_activity_cutoff'
    activityCutoff: bigint
}

export interface SubtensorModuleCall_sudo_target_registrations_per_interval {
    __kind: 'sudo_target_registrations_per_interval'
    targetRegistrationsPerInterval: bigint
}

export interface SubtensorModuleCall_sudo_set_rho {
    __kind: 'sudo_set_rho'
    rho: bigint
}

export interface SubtensorModuleCall_sudo_set_kappa {
    __kind: 'sudo_set_kappa'
    kappa: bigint
}

export interface SubtensorModuleCall_sudo_set_max_allowed_uids {
    __kind: 'sudo_set_max_allowed_uids'
    maxAllowedUids: bigint
}

export interface SubtensorModuleCall_sudo_set_min_allowed_weights {
    __kind: 'sudo_set_min_allowed_weights'
    minAllowedWeights: bigint
}

export interface SubtensorModuleCall_sudo_set_max_allowed_max_min_ratio {
    __kind: 'sudo_set_max_allowed_max_min_ratio'
    maxAllowedMaxMinRatio: bigint
}

export interface SubtensorModuleCall_sudo_set_max_weight_limit {
    __kind: 'sudo_set_max_weight_limit'
    maxWeightLimit: number
}

export interface SubtensorModuleCall_sudo_set_validator_batch_size {
    __kind: 'sudo_set_validator_batch_size'
    validatorBatchSize: bigint
}

export interface SubtensorModuleCall_sudo_set_validator_sequence_length {
    __kind: 'sudo_set_validator_sequence_length'
    validatorSequenceLength: bigint
}

export interface SubtensorModuleCall_sudo_set_validator_epoch_len {
    __kind: 'sudo_set_validator_epoch_len'
    validatorEpochLen: bigint
}

export interface SubtensorModuleCall_sudo_set_validator_epochs_per_reset {
    __kind: 'sudo_set_validator_epochs_per_reset'
    validatorEpochsPerReset: bigint
}

export interface SubtensorModuleCall_sudo_set_incentive_pruning_denominator {
    __kind: 'sudo_set_incentive_pruning_denominator'
    incentivePruningDenominator: bigint
}

export interface SubtensorModuleCall_sudo_set_stake_pruning_denominator {
    __kind: 'sudo_set_stake_pruning_denominator'
    stakePruningDenominator: bigint
}

export interface SubtensorModuleCall_sudo_set_stake_pruning_min {
    __kind: 'sudo_set_stake_pruning_min'
    stakePruningMin: bigint
}

export interface SubtensorModuleCall_sudo_set_immunity_period {
    __kind: 'sudo_set_immunity_period'
    immunityPeriod: bigint
}

export interface SubtensorModuleCall_sudo_reset_bonds {
    __kind: 'sudo_reset_bonds'
}

export interface SubtensorModuleCall_sudo_set_scaling_law_power {
    __kind: 'sudo_set_scaling_law_power'
    scalingLawPower: number
}

export interface SubtensorModuleCall_sudo_set_synergy_scaling_law_power {
    __kind: 'sudo_set_synergy_scaling_law_power'
    synergyScalingLawPower: number
}

export interface SubtensorModuleCall_sudo_set_validator_exclude_quantile {
    __kind: 'sudo_set_validator_exclude_quantile'
    validatorExcludeQuantile: number
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

export type Event = Event_System | Event_Grandpa | Event_Balances | Event_Sudo | Event_SubtensorModule

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

export interface Event_Sudo {
    __kind: 'Sudo'
    value: SudoEvent
}

export interface Event_SubtensorModule {
    __kind: 'SubtensorModule'
    value: SubtensorModuleEvent
}

export interface EquivocationProof {
    setId: bigint
    equivocation: Equivocation
}

export type Void = never

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
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
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
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
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
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export type SudoEvent = SudoEvent_Sudid | SudoEvent_KeyChanged | SudoEvent_SudoAsDone

/**
 * A sudo just took place. \[result\]
 */
export interface SudoEvent_Sudid {
    __kind: 'Sudid'
    sudoResult: Type_34
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
    sudoResult: Type_34
}

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export type SubtensorModuleEvent = SubtensorModuleEvent_SomethingStored | SubtensorModuleEvent_WeightsSet | SubtensorModuleEvent_NeuronRegistered | SubtensorModuleEvent_AxonServed | SubtensorModuleEvent_StakeAdded | SubtensorModuleEvent_StakeRemoved | SubtensorModuleEvent_DifficultySet | SubtensorModuleEvent_BlocksPerStepSet | SubtensorModuleEvent_BondsMovingAverageSet | SubtensorModuleEvent_AdjustmentIntervalSet | SubtensorModuleEvent_ActivityCuttoffSet | SubtensorModuleEvent_TargetRegistrationsPerIntervalSet | SubtensorModuleEvent_RhoSet | SubtensorModuleEvent_KappaSet | SubtensorModuleEvent_MaxAllowedUidsSet | SubtensorModuleEvent_MinAllowedWeightsSet | SubtensorModuleEvent_MaxAllowedMaxMinRatioSet | SubtensorModuleEvent_MaxWeightLimitSet | SubtensorModuleEvent_IncentivePruningDenominatorSet | SubtensorModuleEvent_StakePruningDenominatorSet | SubtensorModuleEvent_StakePruningMinSet | SubtensorModuleEvent_FoundationAccountSet | SubtensorModuleEvent_FoundationDistributionSet | SubtensorModuleEvent_ScalingLawPowerSet | SubtensorModuleEvent_SynergyScalingLawPowerSet | SubtensorModuleEvent_ValidatorExcludeQuantileSet | SubtensorModuleEvent_ValidatorEpochLenSet | SubtensorModuleEvent_ValidatorEpochsPerResetSet | SubtensorModuleEvent_ValidatorBatchSizeSet | SubtensorModuleEvent_ValidatorSequenceLengthSet | SubtensorModuleEvent_ImmunityPeriodSet | SubtensorModuleEvent_ResetBonds

/**
 * Event documentation should end with an array that provides descriptive names for event
 * parameters. [something, who]
 */
export interface SubtensorModuleEvent_SomethingStored {
    __kind: 'SomethingStored'
    value: [number, Uint8Array]
}

/**
 * ---- Event created when a caller successfully set's their weights
 * on the chain.
 */
export interface SubtensorModuleEvent_WeightsSet {
    __kind: 'WeightsSet'
    value: Uint8Array
}

/**
 * --- Event created when a new neuron account has been registered to 
 * the chain.
 */
export interface SubtensorModuleEvent_NeuronRegistered {
    __kind: 'NeuronRegistered'
    value: number
}

/**
 * --- Event created when the axon server information is added to the network.
 */
export interface SubtensorModuleEvent_AxonServed {
    __kind: 'AxonServed'
    value: number
}

/**
 * --- Event created during when stake has been transfered from 
 * the coldkey onto the hotkey staking account.
 */
export interface SubtensorModuleEvent_StakeAdded {
    __kind: 'StakeAdded'
    value: [Uint8Array, bigint]
}

/**
 * --- Event created when stake has been removed from 
 * the staking account into the coldkey account.
 */
export interface SubtensorModuleEvent_StakeRemoved {
    __kind: 'StakeRemoved'
    value: [Uint8Array, bigint]
}

/**
 * --- Event created when the difficulty has been set.
 */
export interface SubtensorModuleEvent_DifficultySet {
    __kind: 'DifficultySet'
    value: bigint
}

/**
 * --- Event created when default blocks per step has been set.
 */
export interface SubtensorModuleEvent_BlocksPerStepSet {
    __kind: 'BlocksPerStepSet'
    value: bigint
}

/**
 * --- Event created when bonds moving average set.
 */
export interface SubtensorModuleEvent_BondsMovingAverageSet {
    __kind: 'BondsMovingAverageSet'
    value: bigint
}

/**
 * --- Event created when the difficulty adjustment interval has been set.
 */
export interface SubtensorModuleEvent_AdjustmentIntervalSet {
    __kind: 'AdjustmentIntervalSet'
    value: bigint
}

/**
 * --- Event created when the activity cuttoff has been set.
 */
export interface SubtensorModuleEvent_ActivityCuttoffSet {
    __kind: 'ActivityCuttoffSet'
    value: bigint
}

/**
 * --- Event created when the target registrations per interval has been set.
 */
export interface SubtensorModuleEvent_TargetRegistrationsPerIntervalSet {
    __kind: 'TargetRegistrationsPerIntervalSet'
    value: bigint
}

/**
 * --- Event created when mechanism rho has been set.
 */
export interface SubtensorModuleEvent_RhoSet {
    __kind: 'RhoSet'
    value: bigint
}

/**
 * --- Event created when mechanism kappa has been set.
 */
export interface SubtensorModuleEvent_KappaSet {
    __kind: 'KappaSet'
    value: bigint
}

/**
 * --- Event created when max allowed uids has been set.
 */
export interface SubtensorModuleEvent_MaxAllowedUidsSet {
    __kind: 'MaxAllowedUidsSet'
    value: bigint
}

/**
 * --- Event created when min allowed weights has been set.
 */
export interface SubtensorModuleEvent_MinAllowedWeightsSet {
    __kind: 'MinAllowedWeightsSet'
    value: bigint
}

/**
 * --- Event created when the max allowed max min ration has been set.
 */
export interface SubtensorModuleEvent_MaxAllowedMaxMinRatioSet {
    __kind: 'MaxAllowedMaxMinRatioSet'
    value: bigint
}

/**
 * --- Event created when the max weight limit has been set.
 */
export interface SubtensorModuleEvent_MaxWeightLimitSet {
    __kind: 'MaxWeightLimitSet'
    value: number
}

/**
 * --- Event created when the incentive pruning denominator has been set.
 */
export interface SubtensorModuleEvent_IncentivePruningDenominatorSet {
    __kind: 'IncentivePruningDenominatorSet'
    value: bigint
}

/**
 * --- Event created when the stake pruning denominator has been set.
 */
export interface SubtensorModuleEvent_StakePruningDenominatorSet {
    __kind: 'StakePruningDenominatorSet'
    value: bigint
}

/**
 * --- Event created when the stake pruning min has been set.
 */
export interface SubtensorModuleEvent_StakePruningMinSet {
    __kind: 'StakePruningMinSet'
    value: bigint
}

/**
 * --- Event created when the foundation account has been set.
 */
export interface SubtensorModuleEvent_FoundationAccountSet {
    __kind: 'FoundationAccountSet'
    value: Uint8Array
}

/**
 * --- Event created when the foundation distribution has been set.
 */
export interface SubtensorModuleEvent_FoundationDistributionSet {
    __kind: 'FoundationDistributionSet'
    value: bigint
}

/**
 * --- Event created when the scaling law power has been set.
 */
export interface SubtensorModuleEvent_ScalingLawPowerSet {
    __kind: 'ScalingLawPowerSet'
    value: number
}

/**
 * --- Event created when the synergy scaling law power has been set.
 */
export interface SubtensorModuleEvent_SynergyScalingLawPowerSet {
    __kind: 'SynergyScalingLawPowerSet'
    value: number
}

/**
 * --- Event created when the validator exclude quantile has been set.
 */
export interface SubtensorModuleEvent_ValidatorExcludeQuantileSet {
    __kind: 'ValidatorExcludeQuantileSet'
    value: number
}

/**
 * --- Event created when the validator default epoch length has been set.
 */
export interface SubtensorModuleEvent_ValidatorEpochLenSet {
    __kind: 'ValidatorEpochLenSet'
    value: bigint
}

/**
 * --- Event created when the validator default epoch per reset has been set.
 */
export interface SubtensorModuleEvent_ValidatorEpochsPerResetSet {
    __kind: 'ValidatorEpochsPerResetSet'
    value: bigint
}

/**
 * --- Event created when the batch size has been set.
 */
export interface SubtensorModuleEvent_ValidatorBatchSizeSet {
    __kind: 'ValidatorBatchSizeSet'
    value: bigint
}

/**
 * --- Event created when the sequence length has been set.
 */
export interface SubtensorModuleEvent_ValidatorSequenceLengthSet {
    __kind: 'ValidatorSequenceLengthSet'
    value: bigint
}

/**
 * --- Event created when the immunity period has been set.
 */
export interface SubtensorModuleEvent_ImmunityPeriodSet {
    __kind: 'ImmunityPeriodSet'
    value: bigint
}

/**
 * --- Event thrown when bonds have been reset.
 */
export interface SubtensorModuleEvent_ResetBonds {
    __kind: 'ResetBonds'
}

export type Equivocation = Equivocation_Prevote | Equivocation_Precommit

export interface Equivocation_Prevote {
    __kind: 'Prevote'
    value: Type_80
}

export interface Equivocation_Precommit {
    __kind: 'Precommit'
    value: Type_86
}

export interface DispatchInfo {
    weight: bigint
    class: DispatchClass
    paysFee: Pays
}

export type DispatchError = DispatchError_Other | DispatchError_CannotLookup | DispatchError_BadOrigin | DispatchError_Module | DispatchError_ConsumerRemaining | DispatchError_NoProviders | DispatchError_TooManyConsumers | DispatchError_Token | DispatchError_Arithmetic

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

export type BalanceStatus = BalanceStatus_Free | BalanceStatus_Reserved

export interface BalanceStatus_Free {
    __kind: 'Free'
}

export interface BalanceStatus_Reserved {
    __kind: 'Reserved'
}

export type Type_34 = Type_34_Ok | Type_34_Err

export interface Type_34_Ok {
    __kind: 'Ok'
}

export interface Type_34_Err {
    __kind: 'Err'
    value: DispatchError
}

export interface Type_80 {
    roundNumber: bigint
    identity: Uint8Array
    first: [Prevote, Uint8Array]
    second: [Prevote, Uint8Array]
}

export interface Type_86 {
    roundNumber: bigint
    identity: Uint8Array
    first: [Precommit, Uint8Array]
    second: [Precommit, Uint8Array]
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

export interface ModuleError {
    index: number
    error: number
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

export interface Prevote {
    targetHash: Uint8Array
    targetNumber: number
}

export interface Precommit {
    targetHash: Uint8Array
    targetNumber: number
}
