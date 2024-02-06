import type {Result, Option} from './support'

export type Type_70 = Type_70_System | Type_70_Timestamp | Type_70_Grandpa | Type_70_Balances | Type_70_Sudo | Type_70_SubtensorModule

export interface Type_70_System {
    __kind: 'System'
    value: SystemCall
}

export interface Type_70_Timestamp {
    __kind: 'Timestamp'
    value: TimestampCall
}

export interface Type_70_Grandpa {
    __kind: 'Grandpa'
    value: GrandpaCall
}

export interface Type_70_Balances {
    __kind: 'Balances'
    value: BalancesCall
}

export interface Type_70_Sudo {
    __kind: 'Sudo'
    value: SudoCall
}

export interface Type_70_SubtensorModule {
    __kind: 'SubtensorModule'
    value: SubtensorModuleCall
}

export type LookupSource = LookupSource_Id | LookupSource_Index | LookupSource_Raw | LookupSource_Address32 | LookupSource_Address20

export interface LookupSource_Id {
    __kind: 'Id'
    value: Uint8Array
}

export interface LookupSource_Index {
    __kind: 'Index'
    value: number
}

export interface LookupSource_Raw {
    __kind: 'Raw'
    value: Uint8Array
}

export interface LookupSource_Address32 {
    __kind: 'Address32'
    value: Uint8Array
}

export interface LookupSource_Address20 {
    __kind: 'Address20'
    value: Uint8Array
}

export interface EventRecord {
    phase: Phase
    event: Event
    topics: Uint8Array[]
}

export type SystemCall = SystemCall_fill_block | SystemCall_remark | SystemCall_set_heap_pages | SystemCall_set_code | SystemCall_set_code_without_checks | SystemCall_set_changes_trie_config | SystemCall_set_storage | SystemCall_kill_storage | SystemCall_kill_prefix | SystemCall_remark_with_event

/**
 *  A dispatch that will fill the block weight up to the given ratio.
 */
export interface SystemCall_fill_block {
    __kind: 'fill_block'
    ratio: number
}

/**
 *  Make some on-chain remark.
 * 
 *  # <weight>
 *  - `O(1)`
 *  # </weight>
 */
export interface SystemCall_remark {
    __kind: 'remark'
    remark: Uint8Array
}

/**
 *  Set the number of pages in the WebAssembly environment's heap.
 * 
 *  # <weight>
 *  - `O(1)`
 *  - 1 storage write.
 *  - Base Weight: 1.405 µs
 *  - 1 write to HEAP_PAGES
 *  # </weight>
 */
export interface SystemCall_set_heap_pages {
    __kind: 'set_heap_pages'
    pages: bigint
}

/**
 *  Set the new runtime code.
 * 
 *  # <weight>
 *  - `O(C + S)` where `C` length of `code` and `S` complexity of `can_set_code`
 *  - 1 storage write (codec `O(C)`).
 *  - 1 call to `can_set_code`: `O(S)` (calls `sp_io::misc::runtime_version` which is expensive).
 *  - 1 event.
 *  The weight of this function is dependent on the runtime, but generally this is very expensive.
 *  We will treat this as a full block.
 *  # </weight>
 */
export interface SystemCall_set_code {
    __kind: 'set_code'
    code: Uint8Array
}

/**
 *  Set the new runtime code without doing any checks of the given `code`.
 * 
 *  # <weight>
 *  - `O(C)` where `C` length of `code`
 *  - 1 storage write (codec `O(C)`).
 *  - 1 event.
 *  The weight of this function is dependent on the runtime. We will treat this as a full block.
 *  # </weight>
 */
export interface SystemCall_set_code_without_checks {
    __kind: 'set_code_without_checks'
    code: Uint8Array
}

/**
 *  Set the new changes trie configuration.
 * 
 *  # <weight>
 *  - `O(1)`
 *  - 1 storage write or delete (codec `O(1)`).
 *  - 1 call to `deposit_log`: Uses `append` API, so O(1)
 *  - Base Weight: 7.218 µs
 *  - DB Weight:
 *      - Writes: Changes Trie, System Digest
 *  # </weight>
 */
export interface SystemCall_set_changes_trie_config {
    __kind: 'set_changes_trie_config'
    changesTrieConfig: (ChangesTrieConfiguration | undefined)
}

/**
 *  Set some items of storage.
 * 
 *  # <weight>
 *  - `O(I)` where `I` length of `items`
 *  - `I` storage writes (`O(1)`).
 *  - Base Weight: 0.568 * i µs
 *  - Writes: Number of items
 *  # </weight>
 */
export interface SystemCall_set_storage {
    __kind: 'set_storage'
    items: [Uint8Array, Uint8Array][]
}

/**
 *  Kill some items from storage.
 * 
 *  # <weight>
 *  - `O(IK)` where `I` length of `keys` and `K` length of one key
 *  - `I` storage deletions.
 *  - Base Weight: .378 * i µs
 *  - Writes: Number of items
 *  # </weight>
 */
export interface SystemCall_kill_storage {
    __kind: 'kill_storage'
    keys: Uint8Array[]
}

/**
 *  Kill all storage items with a key that starts with the given prefix.
 * 
 *  **NOTE:** We rely on the Root origin to provide us the number of subkeys under
 *  the prefix we are removing to accurately calculate the weight of this function.
 * 
 *  # <weight>
 *  - `O(P)` where `P` amount of keys with prefix `prefix`
 *  - `P` storage deletions.
 *  - Base Weight: 0.834 * P µs
 *  - Writes: Number of subkeys + 1
 *  # </weight>
 */
export interface SystemCall_kill_prefix {
    __kind: 'kill_prefix'
    prefix: Uint8Array
    subkeys: number
}

/**
 *  Make some on-chain remark and emit event.
 * 
 *  # <weight>
 *  - `O(b)` where b is the length of the remark.
 *  - 1 event.
 *  # </weight>
 */
export interface SystemCall_remark_with_event {
    __kind: 'remark_with_event'
    remark: Uint8Array
}

export type TimestampCall = TimestampCall_set

/**
 *  Set the current time.
 * 
 *  This call should be invoked exactly once per block. It will panic at the finalization
 *  phase, if this call hasn't been invoked by that time.
 * 
 *  The timestamp should be greater than the previous one by the amount specified by
 *  `MinimumPeriod`.
 * 
 *  The dispatch origin for this call must be `Inherent`.
 * 
 *  # <weight>
 *  - `O(1)` (Note that implementations of `OnTimestampSet` must also be `O(1)`)
 *  - 1 storage read and 1 storage mutation (codec `O(1)`). (because of `DidUpdate::take` in `on_finalize`)
 *  - 1 event handler `on_timestamp_set`. Must be `O(1)`.
 *  # </weight>
 */
export interface TimestampCall_set {
    __kind: 'set'
    now: bigint
}

export type GrandpaCall = GrandpaCall_report_equivocation | GrandpaCall_report_equivocation_unsigned | GrandpaCall_note_stalled

/**
 *  Report voter equivocation/misbehavior. This method will verify the
 *  equivocation proof and validate the given key ownership proof
 *  against the extracted offender. If both are valid, the offence
 *  will be reported.
 */
export interface GrandpaCall_report_equivocation {
    __kind: 'report_equivocation'
    equivocationProof: GrandpaEquivocationProof
    keyOwnerProof: KeyOwnerProof
}

/**
 *  Report voter equivocation/misbehavior. This method will verify the
 *  equivocation proof and validate the given key ownership proof
 *  against the extracted offender. If both are valid, the offence
 *  will be reported.
 * 
 *  This extrinsic must be called unsigned and it is expected that only
 *  block authors will call it (validated in `ValidateUnsigned`), as such
 *  if the block author is defined it will be defined as the equivocation
 *  reporter.
 */
export interface GrandpaCall_report_equivocation_unsigned {
    __kind: 'report_equivocation_unsigned'
    equivocationProof: GrandpaEquivocationProof
    keyOwnerProof: KeyOwnerProof
}

/**
 *  Note that the current authority set of the GRANDPA finality gadget has
 *  stalled. This will trigger a forced authority set change at the beginning
 *  of the next session, to be enacted `delay` blocks after that. The delay
 *  should be high enough to safely assume that the block signalling the
 *  forced change will not be re-orged (e.g. 1000 blocks). The GRANDPA voters
 *  will start the new authority set using the given finalized block as base.
 *  Only callable by root.
 */
export interface GrandpaCall_note_stalled {
    __kind: 'note_stalled'
    delay: number
    bestFinalizedBlockNumber: number
}

export type BalancesCall = BalancesCall_transfer | BalancesCall_set_balance | BalancesCall_force_transfer | BalancesCall_transfer_keep_alive | BalancesCall_transfer_all

/**
 *  Transfer some liquid free balance to another account.
 * 
 *  `transfer` will set the `FreeBalance` of the sender and receiver.
 *  It will decrease the total issuance of the system by the `TransferFee`.
 *  If the sender's account is below the existential deposit as a result
 *  of the transfer, the account will be reaped.
 * 
 *  The dispatch origin for this call must be `Signed` by the transactor.
 * 
 *  # <weight>
 *  - Dependent on arguments but not critical, given proper implementations for
 *    input config types. See related functions below.
 *  - It contains a limited number of reads and writes internally and no complex computation.
 * 
 *  Related functions:
 * 
 *    - `ensure_can_withdraw` is always called internally but has a bounded complexity.
 *    - Transferring balances to accounts that did not exist before will cause
 *       `T::OnNewAccount::on_new_account` to be called.
 *    - Removing enough funds from an account will trigger `T::DustRemoval::on_unbalanced`.
 *    - `transfer_keep_alive` works the same way as `transfer`, but has an additional
 *      check that the transfer will not kill the origin account.
 *  ---------------------------------
 *  - Base Weight: 73.64 µs, worst case scenario (account created, account removed)
 *  - DB Weight: 1 Read and 1 Write to destination account
 *  - Origin account is already in memory, so no DB operations for them.
 *  # </weight>
 */
export interface BalancesCall_transfer {
    __kind: 'transfer'
    dest: LookupSource
    value: bigint
}

/**
 *  Set the balances of a given account.
 * 
 *  This will alter `FreeBalance` and `ReservedBalance` in storage. it will
 *  also decrease the total issuance of the system (`TotalIssuance`).
 *  If the new free or reserved balance is below the existential deposit,
 *  it will reset the account nonce (`frame_system::AccountNonce`).
 * 
 *  The dispatch origin for this call is `root`.
 * 
 *  # <weight>
 *  - Independent of the arguments.
 *  - Contains a limited number of reads and writes.
 *  ---------------------
 *  - Base Weight:
 *      - Creating: 27.56 µs
 *      - Killing: 35.11 µs
 *  - DB Weight: 1 Read, 1 Write to `who`
 *  # </weight>
 */
export interface BalancesCall_set_balance {
    __kind: 'set_balance'
    who: LookupSource
    newFree: bigint
    newReserved: bigint
}

/**
 *  Exactly as `transfer`, except the origin must be root and the source account may be
 *  specified.
 *  # <weight>
 *  - Same as transfer, but additional read and write because the source account is
 *    not assumed to be in the overlay.
 *  # </weight>
 */
export interface BalancesCall_force_transfer {
    __kind: 'force_transfer'
    source: LookupSource
    dest: LookupSource
    value: bigint
}

/**
 *  Same as the [`transfer`] call, but with a check that the transfer will not kill the
 *  origin account.
 * 
 *  99% of the time you want [`transfer`] instead.
 * 
 *  [`transfer`]: struct.Pallet.html#method.transfer
 *  # <weight>
 *  - Cheaper than transfer because account cannot be killed.
 *  - Base Weight: 51.4 µs
 *  - DB Weight: 1 Read and 1 Write to dest (sender is in overlay already)
 *  #</weight>
 */
export interface BalancesCall_transfer_keep_alive {
    __kind: 'transfer_keep_alive'
    dest: LookupSource
    value: bigint
}

/**
 *  Transfer the entire transferable balance from the caller account.
 * 
 *  NOTE: This function only attempts to transfer _transferable_ balances. This means that
 *  any locked, reserved, or existential deposits (when `keep_alive` is `true`), will not be
 *  transferred by this function. To ensure that this function results in a killed account,
 *  you might need to prepare the account by removing any reference counters, storage
 *  deposits, etc...
 * 
 *  The dispatch origin of this call must be Signed.
 * 
 *  - `dest`: The recipient of the transfer.
 *  - `keep_alive`: A boolean to determine if the `transfer_all` operation should send all
 *    of the funds the account has, causing the sender account to be killed (false), or
 *    transfer everything except at least the existential deposit, which will guarantee to
 *    keep the sender account alive (true).
 *    # <weight>
 *  - O(1). Just like transfer, but reading the user's transferable balance first.
 *    #</weight>
 */
export interface BalancesCall_transfer_all {
    __kind: 'transfer_all'
    dest: LookupSource
    keepAlive: boolean
}

export type SudoCall = SudoCall_sudo | SudoCall_sudo_unchecked_weight | SudoCall_set_key | SudoCall_sudo_as

/**
 *  Authenticates the sudo key and dispatches a function call with `Root` origin.
 * 
 *  The dispatch origin for this call must be _Signed_.
 * 
 *  # <weight>
 *  - O(1).
 *  - Limited storage reads.
 *  - One DB write (event).
 *  - Weight of derivative `call` execution + 10,000.
 *  # </weight>
 */
export interface SudoCall_sudo {
    __kind: 'sudo'
    call: Type_70
}

/**
 *  Authenticates the sudo key and dispatches a function call with `Root` origin.
 *  This function does not check the weight of the call, and instead allows the
 *  Sudo user to specify the weight of the call.
 * 
 *  The dispatch origin for this call must be _Signed_.
 * 
 *  # <weight>
 *  - O(1).
 *  - The weight of this call is defined by the caller.
 *  # </weight>
 */
export interface SudoCall_sudo_unchecked_weight {
    __kind: 'sudo_unchecked_weight'
    call: Type_70
    weight: bigint
}

/**
 *  Authenticates the current sudo key and sets the given AccountId (`new`) as the new sudo key.
 * 
 *  The dispatch origin for this call must be _Signed_.
 * 
 *  # <weight>
 *  - O(1).
 *  - Limited storage reads.
 *  - One DB change.
 *  # </weight>
 */
export interface SudoCall_set_key {
    __kind: 'set_key'
    new: LookupSource
}

/**
 *  Authenticates the sudo key and dispatches a function call with `Signed` origin from
 *  a given account.
 * 
 *  The dispatch origin for this call must be _Signed_.
 * 
 *  # <weight>
 *  - O(1).
 *  - Limited storage reads.
 *  - One DB write (event).
 *  - Weight of derivative `call` execution + 10,000.
 *  # </weight>
 */
export interface SudoCall_sudo_as {
    __kind: 'sudo_as'
    who: LookupSource
    call: Type_70
}

export type SubtensorModuleCall = SubtensorModuleCall_set_weights | SubtensorModuleCall_add_stake | SubtensorModuleCall_remove_stake | SubtensorModuleCall_serve_axon | SubtensorModuleCall_register | SubtensorModuleCall_sudo_set_blocks_per_step | SubtensorModuleCall_sudo_set_bonds_moving_average | SubtensorModuleCall_sudo_set_difficulty | SubtensorModuleCall_sudo_set_adjustment_interval | SubtensorModuleCall_sudo_set_activity_cutoff | SubtensorModuleCall_sudo_target_registrations_per_interval | SubtensorModuleCall_sudo_set_rho | SubtensorModuleCall_sudo_set_kappa | SubtensorModuleCall_sudo_set_max_allowed_uids | SubtensorModuleCall_sudo_set_min_allowed_weights | SubtensorModuleCall_sudo_set_max_allowed_max_min_ratio | SubtensorModuleCall_sudo_set_validator_batch_size | SubtensorModuleCall_sudo_set_validator_sequence_length | SubtensorModuleCall_sudo_set_validator_epoch_len | SubtensorModuleCall_sudo_set_validator_epochs_per_reset | SubtensorModuleCall_sudo_set_incentive_pruning_denominator | SubtensorModuleCall_sudo_set_stake_pruning_denominator | SubtensorModuleCall_sudo_set_foundation_account | SubtensorModuleCall_sudo_set_foundation_distribution | SubtensorModuleCall_sudo_set_immunity_period | SubtensorModuleCall_sudo_reset_bonds

/**
 *  --- Sets the caller weights for the incentive mechanism. The call can be
 *  made from the hotkey account so is potentially insecure, however, the damage
 *  of changing weights is minimal if caught early. This function includes all the
 *  checks that the passed weights meet the requirements. Stored as u32s they represent
 *  rational values in the range [0,1] which sum to 1 and can be interpreted as
 *  probabilities. The specific weights determine how inflation propagates outward
 *  from this peer. 
 *  
 *  Note: The 32 bit integers weights should represent 1.0 as the max u32.
 *  However, the function normalizes all integers to u32_max anyway. This means that if the sum of all
 *  elements is larger or smaller than the amount of elements * u32_max, all elements
 *  will be corrected for this deviation. 
 *  
 *  # Args:
 *  	* `origin`: (<T as frame_system::Config>Origin):
 *  		- The caller, a hotkey who wishes to set their weights.
 *  
 *  	* `uids` (Vec<u32>):
 *  		- The edge endpoint for the weight, i.e. j for w_ij.
 * 
 *  	* 'weights' (Vec<u32>):
 *  		- The u32 integer encoded weights. Interpreted as rational
 *  		values in the range [0,1]. They must sum to in32::MAX.
 * 
 *  # Event:
 *  	* WeightsSet;
 *  		- On successfully setting the weights on chain.
 * 
 *  # Raises:
 *  	* 'WeightVecNotEqualSize':
 *  		- If the passed weights and uids have unequal size.
 * 
 *  	* 'WeightSumToLarge':
 *  		- When the calling coldkey is not associated with the hotkey account.
 * 
 *  	* 'InsufficientBalance':
 *  		- When the amount to stake exceeds the amount of balance in the
 *  		associated colkey account.
 * 
 */
export interface SubtensorModuleCall_set_weights {
    __kind: 'set_weights'
    dests: number[]
    weights: number[]
}

/**
 *  --- Adds stake to a neuron account. The call is made from the
 *  coldkey account linked in the neurons's NeuronMetadata.
 *  Only the associated coldkey is allowed to make staking and
 *  unstaking requests. This protects the neuron against
 *  attacks on its hotkey running in production code.
 * 
 *  # Args:
 *  	* 'origin': (<T as frame_system::Config>Origin):
 *  		- The caller, a coldkey signature associated with the hotkey account.
 * 
 *  	* 'hotkey' (T::AccountId):
 *  		- The hotkey account to add stake to.
 * 
 *  	* 'ammount_staked' (u64):
 *  		- The ammount to transfer from the balances account of the cold key
 *  		into the staking account of the hotkey.
 * 
 *  # Event:
 *  	* 'StakeAdded':
 *  		- On the successful staking of funds.
 * 
 *  # Raises:
 *  	* 'NotRegistered':
 *  		- If the hotkey account is not active (has not subscribed)
 * 
 *  	* 'NonAssociatedColdKey':
 *  		- When the calling coldkey is not associated with the hotkey account.
 * 
 *  	* 'InsufficientBalance':
 *  		- When the amount to stake exceeds the amount of balance in the
 *  		associated colkey account.
 * 
 */
export interface SubtensorModuleCall_add_stake {
    __kind: 'add_stake'
    hotkey: Uint8Array
    ammountStaked: bigint
}

/**
 *  ---- Remove stake from the staking account. The call must be made
 *  from the coldkey account attached to the neuron metadata. Only this key
 *  has permission to make staking and unstaking requests.
 * 
 *  # Args:
 *  	* 'origin': (<T as frame_system::Config>Origin):
 *  		- The caller, a coldkey signature associated with the hotkey account.
 * 
 *  	* 'hotkey' (T::AccountId):
 *  		- The hotkey account to withdraw stake from.
 * 
 *  	* 'ammount_unstaked' (u64):
 *  		- The ammount to transfer from the staking account into the balance
 *  		of the coldkey.
 * 
 *  # Event:
 *  	* 'StakeRemoved':
 *  		- On successful withdrawl.
 * 
 *  # Raises:
 *  	* 'NonAssociatedColdKey':
 *  		- When the calling coldkey is not associated with the hotkey account.
 * 
 *  	* 'NotEnoughStaketoWithdraw':
 *  		- When the amount to unstake exceeds the quantity staked in the
 *  		associated hotkey staking account.
 * 
 */
export interface SubtensorModuleCall_remove_stake {
    __kind: 'remove_stake'
    hotkey: Uint8Array
    ammountUnstaked: bigint
}

/**
 *  ---- Serves or updates axon information for the neuron associated with the caller. If the caller
 *  already registered the metadata is updated. If the caller is not registered this call throws NotRegsitered.
 * 
 *  # Args:
 *  	* 'origin': (<T as frame_system::Config>Origin):
 *  		- The caller, a hotkey associated of the registered neuron.
 * 
 *  	* 'ip' (u128):
 *  		- The u64 encoded IP address of type 6 or 4.
 * 
 *  	* 'port' (u16):
 *  		- The port number where this neuron receives RPC requests.
 * 
 *  	* 'ip_type' (u8):
 *  		- The ip type one of (4,6).
 * 
 *  	* 'modality' (u8):
 *  		- The neuron modality type.
 * 
 *  # Event:
 *  	* 'AxonServed':
 *  		- On subscription of a new neuron to the active set.
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
 *  ---- Registers a new neuron to the graph. 
 * 
 *  # Args:
 *  	* 'origin': (<T as frame_system::Config>Origin):
 *  		- The caller, registration key as found in RegistrationKey::get(0);
 * 
 *  	* 'block_number' (u64):
 *  		- Block number of hash to attempt.
 * 
 *  	* 'nonce' (u64):
 *  		- Hashing nonce as a u64.
 * 
 *  	* 'work' (Vec<u8>):
 *  		- Work hash as list of bytes.
 *  
 *  	* 'hotkey' (T::AccountId,):
 *  		- Hotkey to register.
 *  
 *  	* 'coldkey' (T::AccountId,):
 *  		- Coldkey to register.
 * 
 *  # Event:
 *  	* 'NeuronRegistered':
 *  		- On subscription of a new neuron to the active set.
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
 *  ---- SUDO ONLY FUNCTIONS
 * 
 *  # Args:
 *  	* 'origin': (<T as frame_system::Config>Origin):
 *  		- The caller, must be sudo.
 * 
 *  ONE OF:
 *  	* 'adjustment_interval' (u64):
 *  	* 'activity_cutoff' (u64):
 *  	* 'difficulty' (u64):
 * 
 *  # Events:
 * 		* 'DifficultySet'
 *  	* 'AdjustmentIntervalSet'
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

export interface SubtensorModuleCall_sudo_set_foundation_account {
    __kind: 'sudo_set_foundation_account'
    foundationAccount: Uint8Array
}

export interface SubtensorModuleCall_sudo_set_foundation_distribution {
    __kind: 'sudo_set_foundation_distribution'
    foundationDistribution: bigint
}

export interface SubtensorModuleCall_sudo_set_immunity_period {
    __kind: 'sudo_set_immunity_period'
    immunityPeriod: bigint
}

export interface SubtensorModuleCall_sudo_reset_bonds {
    __kind: 'sudo_reset_bonds'
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

export interface ChangesTrieConfiguration {
    digestInterval: number
    digestLevels: number
}

export interface GrandpaEquivocationProof {
    setId: bigint
    equivocation: GrandpaEquivocation
}

export interface KeyOwnerProof {
    session: number
    trieNodes: Uint8Array[]
    validatorCount: number
}

export type SystemEvent = SystemEvent_ExtrinsicSuccess | SystemEvent_ExtrinsicFailed | SystemEvent_CodeUpdated | SystemEvent_NewAccount | SystemEvent_KilledAccount | SystemEvent_Remarked

/**
 *  An extrinsic completed successfully. \[info\]
 */
export interface SystemEvent_ExtrinsicSuccess {
    __kind: 'ExtrinsicSuccess'
    value: DispatchInfo
}

/**
 *  An extrinsic failed. \[error, info\]
 */
export interface SystemEvent_ExtrinsicFailed {
    __kind: 'ExtrinsicFailed'
    value: [DispatchError, DispatchInfo]
}

/**
 *  `:code` was updated.
 */
export interface SystemEvent_CodeUpdated {
    __kind: 'CodeUpdated'
}

/**
 *  A new \[account\] was created.
 */
export interface SystemEvent_NewAccount {
    __kind: 'NewAccount'
    value: Uint8Array
}

/**
 *  An \[account\] was reaped.
 */
export interface SystemEvent_KilledAccount {
    __kind: 'KilledAccount'
    value: Uint8Array
}

/**
 *  On on-chain remark happened. \[origin, remark_hash\]
 */
export interface SystemEvent_Remarked {
    __kind: 'Remarked'
    value: [Uint8Array, Uint8Array]
}

export type GrandpaEvent = GrandpaEvent_NewAuthorities | GrandpaEvent_Paused | GrandpaEvent_Resumed

/**
 *  New authority set has been applied. \[authority_set\]
 */
export interface GrandpaEvent_NewAuthorities {
    __kind: 'NewAuthorities'
    value: [Uint8Array, bigint][]
}

/**
 *  Current authority set has been paused.
 */
export interface GrandpaEvent_Paused {
    __kind: 'Paused'
}

/**
 *  Current authority set has been resumed.
 */
export interface GrandpaEvent_Resumed {
    __kind: 'Resumed'
}

export type BalancesEvent = BalancesEvent_Endowed | BalancesEvent_DustLost | BalancesEvent_Transfer | BalancesEvent_BalanceSet | BalancesEvent_Deposit | BalancesEvent_Reserved | BalancesEvent_Unreserved | BalancesEvent_ReserveRepatriated

/**
 *  An account was created with some free balance. \[account, free_balance\]
 */
export interface BalancesEvent_Endowed {
    __kind: 'Endowed'
    value: [Uint8Array, bigint]
}

/**
 *  An account was removed whose balance was non-zero but below ExistentialDeposit,
 *  resulting in an outright loss. \[account, balance\]
 */
export interface BalancesEvent_DustLost {
    __kind: 'DustLost'
    value: [Uint8Array, bigint]
}

/**
 *  Transfer succeeded. \[from, to, value\]
 */
export interface BalancesEvent_Transfer {
    __kind: 'Transfer'
    value: [Uint8Array, Uint8Array, bigint]
}

/**
 *  A balance was set by root. \[who, free, reserved\]
 */
export interface BalancesEvent_BalanceSet {
    __kind: 'BalanceSet'
    value: [Uint8Array, bigint, bigint]
}

/**
 *  Some amount was deposited (e.g. for transaction fees). \[who, deposit\]
 */
export interface BalancesEvent_Deposit {
    __kind: 'Deposit'
    value: [Uint8Array, bigint]
}

/**
 *  Some balance was reserved (moved from free to reserved). \[who, value\]
 */
export interface BalancesEvent_Reserved {
    __kind: 'Reserved'
    value: [Uint8Array, bigint]
}

/**
 *  Some balance was unreserved (moved from reserved to free). \[who, value\]
 */
export interface BalancesEvent_Unreserved {
    __kind: 'Unreserved'
    value: [Uint8Array, bigint]
}

/**
 *  Some balance was moved from the reserve of the first account to the second account.
 *  Final argument indicates the destination balance type.
 *  \[from, to, balance, destination_status\]
 */
export interface BalancesEvent_ReserveRepatriated {
    __kind: 'ReserveRepatriated'
    value: [Uint8Array, Uint8Array, bigint, BalanceStatus]
}

export type SudoEvent = SudoEvent_Sudid | SudoEvent_KeyChanged | SudoEvent_SudoAsDone

/**
 *  A sudo just took place. \[result\]
 */
export interface SudoEvent_Sudid {
    __kind: 'Sudid'
    value: DispatchResult
}

/**
 *  The \[sudoer\] just switched identity; the old key is supplied.
 */
export interface SudoEvent_KeyChanged {
    __kind: 'KeyChanged'
    value: Uint8Array
}

/**
 *  A sudo just took place. \[result\]
 */
export interface SudoEvent_SudoAsDone {
    __kind: 'SudoAsDone'
    value: DispatchResult
}

export type SubtensorModuleEvent = SubtensorModuleEvent_WeightsSet | SubtensorModuleEvent_NeuronRegistered | SubtensorModuleEvent_AxonServed | SubtensorModuleEvent_StakeAdded | SubtensorModuleEvent_StakeRemoved | SubtensorModuleEvent_DifficultySet | SubtensorModuleEvent_BlocksPerStepSet | SubtensorModuleEvent_BondsMovingAverageSet | SubtensorModuleEvent_AdjustmentIntervalSet | SubtensorModuleEvent_ActivityCuttoffSet | SubtensorModuleEvent_TargetRegistrationsPerIntervalSet | SubtensorModuleEvent_RhoSet | SubtensorModuleEvent_KappaSet | SubtensorModuleEvent_MaxAllowedUidsSet | SubtensorModuleEvent_MinAllowedWeightsSet | SubtensorModuleEvent_MaxAllowedMaxMinRatioSet | SubtensorModuleEvent_IncentivePruningDenominatorSet | SubtensorModuleEvent_StakePruningDenominatorSet | SubtensorModuleEvent_FoundationAccountSet | SubtensorModuleEvent_FoundationDistributionSet | SubtensorModuleEvent_ValidatorEpochLenSet | SubtensorModuleEvent_ValidatorEpochsPerResetSet | SubtensorModuleEvent_ValidatorBatchSizeSet | SubtensorModuleEvent_ValidatorSequenceLengthSet | SubtensorModuleEvent_ImmunityPeriodSet | SubtensorModuleEvent_ResetBonds

/**
 *  ---- Event created when a caller successfully set's their weights
 *  on the chain.
 */
export interface SubtensorModuleEvent_WeightsSet {
    __kind: 'WeightsSet'
    value: Uint8Array
}

/**
 *  --- Event created when a new neuron account has been registered to 
 *  the chain.
 */
export interface SubtensorModuleEvent_NeuronRegistered {
    __kind: 'NeuronRegistered'
    value: number
}

/**
 *  --- Event created when the axon server information is added to the network.
 */
export interface SubtensorModuleEvent_AxonServed {
    __kind: 'AxonServed'
    value: number
}

/**
 *  --- Event created during when stake has been transfered from 
 *  the coldkey onto the hotkey staking account.
 */
export interface SubtensorModuleEvent_StakeAdded {
    __kind: 'StakeAdded'
    value: [Uint8Array, bigint]
}

/**
 *  --- Event created when stake has been removed from 
 *  the staking account into the coldkey account.
 */
export interface SubtensorModuleEvent_StakeRemoved {
    __kind: 'StakeRemoved'
    value: [Uint8Array, bigint]
}

/**
 *  --- Event created when the difficulty has been set.
 */
export interface SubtensorModuleEvent_DifficultySet {
    __kind: 'DifficultySet'
    value: bigint
}

/**
 *  --- Event created when default blocks per step has been set.
 */
export interface SubtensorModuleEvent_BlocksPerStepSet {
    __kind: 'BlocksPerStepSet'
    value: bigint
}

/**
 *  --- Event created when bonds moving average set.
 */
export interface SubtensorModuleEvent_BondsMovingAverageSet {
    __kind: 'BondsMovingAverageSet'
    value: bigint
}

/**
 *  --- Event created when the difficulty adjustment interval has been set.
 */
export interface SubtensorModuleEvent_AdjustmentIntervalSet {
    __kind: 'AdjustmentIntervalSet'
    value: bigint
}

/**
 *  --- Event created when the activity cuttoff has been set.
 */
export interface SubtensorModuleEvent_ActivityCuttoffSet {
    __kind: 'ActivityCuttoffSet'
    value: bigint
}

/**
 *  --- Event created when the target registrations per interval has been set.
 */
export interface SubtensorModuleEvent_TargetRegistrationsPerIntervalSet {
    __kind: 'TargetRegistrationsPerIntervalSet'
    value: bigint
}

/**
 *  --- Event created when mechanism rho has been set.
 */
export interface SubtensorModuleEvent_RhoSet {
    __kind: 'RhoSet'
    value: bigint
}

/**
 *  --- Event created when mechanism kappa has been set.
 */
export interface SubtensorModuleEvent_KappaSet {
    __kind: 'KappaSet'
    value: bigint
}

/**
 *  --- Event created when max allowed uids has been set.
 */
export interface SubtensorModuleEvent_MaxAllowedUidsSet {
    __kind: 'MaxAllowedUidsSet'
    value: bigint
}

/**
 *  --- Event created when min allowed weights has been set.
 */
export interface SubtensorModuleEvent_MinAllowedWeightsSet {
    __kind: 'MinAllowedWeightsSet'
    value: bigint
}

/**
 *  --- Event created when the max allowed max min ration has been set.
 */
export interface SubtensorModuleEvent_MaxAllowedMaxMinRatioSet {
    __kind: 'MaxAllowedMaxMinRatioSet'
    value: bigint
}

/**
 *  --- Event created when the incentive pruning denominator has been set.
 */
export interface SubtensorModuleEvent_IncentivePruningDenominatorSet {
    __kind: 'IncentivePruningDenominatorSet'
    value: bigint
}

/**
 *  --- Event created when the stake pruning denominator has been set.
 */
export interface SubtensorModuleEvent_StakePruningDenominatorSet {
    __kind: 'StakePruningDenominatorSet'
    value: bigint
}

/**
 *  --- Event created when the foundation account has been set.
 */
export interface SubtensorModuleEvent_FoundationAccountSet {
    __kind: 'FoundationAccountSet'
    value: Uint8Array
}

/**
 *  --- Event created when the foundation distribution has been set.
 */
export interface SubtensorModuleEvent_FoundationDistributionSet {
    __kind: 'FoundationDistributionSet'
    value: bigint
}

/**
 *  --- Event created when the validator default epoch length has been set.
 */
export interface SubtensorModuleEvent_ValidatorEpochLenSet {
    __kind: 'ValidatorEpochLenSet'
    value: bigint
}

/**
 *  --- Event created when the validator default epoch per reset has been set.
 */
export interface SubtensorModuleEvent_ValidatorEpochsPerResetSet {
    __kind: 'ValidatorEpochsPerResetSet'
    value: bigint
}

/**
 *  --- Event created when the batch size has been set.
 */
export interface SubtensorModuleEvent_ValidatorBatchSizeSet {
    __kind: 'ValidatorBatchSizeSet'
    value: bigint
}

/**
 *  --- Event created when the sequence length has been set.
 */
export interface SubtensorModuleEvent_ValidatorSequenceLengthSet {
    __kind: 'ValidatorSequenceLengthSet'
    value: bigint
}

/**
 *  --- Event created when the immunity period has been set.
 */
export interface SubtensorModuleEvent_ImmunityPeriodSet {
    __kind: 'ImmunityPeriodSet'
    value: bigint
}

/**
 *  --- Event thrown when bonds have been reset.
 */
export interface SubtensorModuleEvent_ResetBonds {
    __kind: 'ResetBonds'
}

export type GrandpaEquivocation = GrandpaEquivocation_Prevote | GrandpaEquivocation_Precommit

export interface GrandpaEquivocation_Prevote {
    __kind: 'Prevote'
    value: GrandpaEquivocationValue
}

export interface GrandpaEquivocation_Precommit {
    __kind: 'Precommit'
    value: GrandpaEquivocationValue
}

export interface DispatchInfo {
    weight: bigint
    class: DispatchClass
    paysFee: Pays
}

export type DispatchError = DispatchError_Other | DispatchError_CannotLookup | DispatchError_BadOrigin | DispatchError_Module | DispatchError_ConsumerRemaining | DispatchError_NoProviders | DispatchError_Token | DispatchError_Arithmetic

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
    value: DispatchErrorModule
}

export interface DispatchError_ConsumerRemaining {
    __kind: 'ConsumerRemaining'
}

export interface DispatchError_NoProviders {
    __kind: 'NoProviders'
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

export type DispatchResult = DispatchResult_Ok | DispatchResult_Err

export interface DispatchResult_Ok {
    __kind: 'Ok'
}

export interface DispatchResult_Err {
    __kind: 'Err'
    value: DispatchError
}

export interface GrandpaEquivocationValue {
    roundNumber: bigint
    identity: Uint8Array
    first: [GrandpaPrevote, Uint8Array]
    second: [GrandpaPrevote, Uint8Array]
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

export interface DispatchErrorModule {
    index: number
    error: number
}

export type TokenError = TokenError_NoFunds | TokenError_WouldDie | TokenError_BelowMinimum | TokenError_CannotCreate | TokenError_UnknownAsset | TokenError_Frozen | TokenError_Underflow | TokenError_Overflow

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

export interface TokenError_Underflow {
    __kind: 'Underflow'
}

export interface TokenError_Overflow {
    __kind: 'Overflow'
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

export interface GrandpaPrevote {
    targetHash: Uint8Array
    targetNumber: number
}
