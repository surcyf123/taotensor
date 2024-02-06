import assert from 'assert'
import {Chain, ChainContext, CallContext, Call, Result, Option} from './support'
import * as v100 from './v100'
import * as v105 from './v105'
import * as v107 from './v107'
import * as v117 from './v117'
import * as v118 from './v118'
import * as v102 from './v102'
import * as v108 from './v108'
import * as v111 from './v111'
import * as v112 from './v112'

export class BalancesForceTransferCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Balances.force_transfer')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Exactly as `transfer`, except the origin must be root and the source account may be
     *  specified.
     *  # <weight>
     *  - Same as transfer, but additional read and write because the source account is
     *    not assumed to be in the overlay.
     *  # </weight>
     */
    get isV100(): boolean {
        return this._chain.getCallHash('Balances.force_transfer') === '906df11f4f65ebd03a2b87ba248e1fba11c3a0bca42c892bee828bac3ec80348'
    }

    /**
     *  Exactly as `transfer`, except the origin must be root and the source account may be
     *  specified.
     *  # <weight>
     *  - Same as transfer, but additional read and write because the source account is
     *    not assumed to be in the overlay.
     *  # </weight>
     */
    get asV100(): {source: v100.LookupSource, dest: v100.LookupSource, value: bigint} {
        assert(this.isV100)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Exactly as `transfer`, except the origin must be root and the source account may be
     * specified.
     * # <weight>
     * - Same as transfer, but additional read and write because the source account is not
     *   assumed to be in the overlay.
     * # </weight>
     */
    get isV102(): boolean {
        return this._chain.getCallHash('Balances.force_transfer') === 'e5944fbe8224a17fe49f9c1d1d01efaf87fb1778fd39618512af54c9ba6f9dff'
    }

    /**
     * Exactly as `transfer`, except the origin must be root and the source account may be
     * specified.
     * # <weight>
     * - Same as transfer, but additional read and write because the source account is not
     *   assumed to be in the overlay.
     * # </weight>
     */
    get asV102(): {source: v102.MultiAddress, dest: v102.MultiAddress, value: bigint} {
        assert(this.isV102)
        return this._chain.decodeCall(this.call)
    }
}

export class BalancesForceUnreserveCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Balances.force_unreserve')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Unreserve some balance from a user by force.
     * 
     * Can only be called by ROOT.
     */
    get isV102(): boolean {
        return this._chain.getCallHash('Balances.force_unreserve') === '30bc48977e2a7ad3fc8ac014948ded50fc54886bad9a1f65b02bb64f27d8a6be'
    }

    /**
     * Unreserve some balance from a user by force.
     * 
     * Can only be called by ROOT.
     */
    get asV102(): {who: v102.MultiAddress, amount: bigint} {
        assert(this.isV102)
        return this._chain.decodeCall(this.call)
    }
}

export class BalancesSetBalanceCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Balances.set_balance')
        this._chain = ctx._chain
        this.call = call
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
    get isV100(): boolean {
        return this._chain.getCallHash('Balances.set_balance') === '94e2a75e6cd4bfc2ec9211ae3a29870014cac2dd2f37c1f9634b6e4bbef0442f'
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
    get asV100(): {who: v100.LookupSource, newFree: bigint, newReserved: bigint} {
        assert(this.isV100)
        return this._chain.decodeCall(this.call)
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
    get isV102(): boolean {
        return this._chain.getCallHash('Balances.set_balance') === 'beb82909d38c015bc075ff8b107e47a02f8772bf5cf681d6cd84ef685e448a8f'
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
    get asV102(): {who: v102.MultiAddress, newFree: bigint, newReserved: bigint} {
        assert(this.isV102)
        return this._chain.decodeCall(this.call)
    }
}

export class BalancesTransferCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Balances.transfer')
        this._chain = ctx._chain
        this.call = call
    }

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
    get isV100(): boolean {
        return this._chain.getCallHash('Balances.transfer') === 'c3f0f475940fc4bef49b298f76ba345680f20fc48d5899b4678314a07e2ce090'
    }

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
    get asV100(): {dest: v100.LookupSource, value: bigint} {
        assert(this.isV100)
        return this._chain.decodeCall(this.call)
    }

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
    get isV102(): boolean {
        return this._chain.getCallHash('Balances.transfer') === 'fc85bea9d0d171982f66e8a55667d58dc9a1612bcafe84309942bf47e23e3094'
    }

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
    get asV102(): {dest: v102.MultiAddress, value: bigint} {
        assert(this.isV102)
        return this._chain.decodeCall(this.call)
    }
}

export class BalancesTransferAllCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Balances.transfer_all')
        this._chain = ctx._chain
        this.call = call
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
    get isV100(): boolean {
        return this._chain.getCallHash('Balances.transfer_all') === '56952003e07947f758a9928d8462037abffea6a7fa991c0d3451f5c47d45f254'
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
    get asV100(): {dest: v100.LookupSource, keepAlive: boolean} {
        assert(this.isV100)
        return this._chain.decodeCall(this.call)
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
    get isV102(): boolean {
        return this._chain.getCallHash('Balances.transfer_all') === '9c94c2ca9979f6551af6e123fb6b6ba14d026f862f9a023706f8f88c556b355f'
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
    get asV102(): {dest: v102.MultiAddress, keepAlive: boolean} {
        assert(this.isV102)
        return this._chain.decodeCall(this.call)
    }
}

export class BalancesTransferKeepAliveCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Balances.transfer_keep_alive')
        this._chain = ctx._chain
        this.call = call
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
    get isV100(): boolean {
        return this._chain.getCallHash('Balances.transfer_keep_alive') === 'c3f0f475940fc4bef49b298f76ba345680f20fc48d5899b4678314a07e2ce090'
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
    get asV100(): {dest: v100.LookupSource, value: bigint} {
        assert(this.isV100)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Same as the [`transfer`] call, but with a check that the transfer will not kill the
     * origin account.
     * 
     * 99% of the time you want [`transfer`] instead.
     * 
     * [`transfer`]: struct.Pallet.html#method.transfer
     */
    get isV102(): boolean {
        return this._chain.getCallHash('Balances.transfer_keep_alive') === 'fc85bea9d0d171982f66e8a55667d58dc9a1612bcafe84309942bf47e23e3094'
    }

    /**
     * Same as the [`transfer`] call, but with a check that the transfer will not kill the
     * origin account.
     * 
     * 99% of the time you want [`transfer`] instead.
     * 
     * [`transfer`]: struct.Pallet.html#method.transfer
     */
    get asV102(): {dest: v102.MultiAddress, value: bigint} {
        assert(this.isV102)
        return this._chain.decodeCall(this.call)
    }
}

export class GrandpaNoteStalledCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Grandpa.note_stalled')
        this._chain = ctx._chain
        this.call = call
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
    get isV100(): boolean {
        return this._chain.getCallHash('Grandpa.note_stalled') === '6bb454c2ae9db6ee64dc7f433f0fd3b839727f70c6c835943383346896272c40'
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
    get asV100(): {delay: number, bestFinalizedBlockNumber: number} {
        assert(this.isV100)
        return this._chain.decodeCall(this.call)
    }
}

export class GrandpaReportEquivocationCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Grandpa.report_equivocation')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Report voter equivocation/misbehavior. This method will verify the
     *  equivocation proof and validate the given key ownership proof
     *  against the extracted offender. If both are valid, the offence
     *  will be reported.
     */
    get isV100(): boolean {
        return this._chain.getCallHash('Grandpa.report_equivocation') === '2c17e0cc8689d3a9ff22e793f8bfe646fd06a870bc9abcba005b8b772edc8677'
    }

    /**
     *  Report voter equivocation/misbehavior. This method will verify the
     *  equivocation proof and validate the given key ownership proof
     *  against the extracted offender. If both are valid, the offence
     *  will be reported.
     */
    get asV100(): {equivocationProof: v100.GrandpaEquivocationProof, keyOwnerProof: v100.KeyOwnerProof} {
        assert(this.isV100)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Report voter equivocation/misbehavior. This method will verify the
     * equivocation proof and validate the given key ownership proof
     * against the extracted offender. If both are valid, the offence
     * will be reported.
     */
    get isV102(): boolean {
        return this._chain.getCallHash('Grandpa.report_equivocation') === 'c013519536bd18b242d3dd1699b5d15a8ae1fccf0dd04c12f721418f3b34a23b'
    }

    /**
     * Report voter equivocation/misbehavior. This method will verify the
     * equivocation proof and validate the given key ownership proof
     * against the extracted offender. If both are valid, the offence
     * will be reported.
     */
    get asV102(): {equivocationProof: v102.EquivocationProof, keyOwnerProof: v102.Void} {
        assert(this.isV102)
        return this._chain.decodeCall(this.call)
    }
}

export class GrandpaReportEquivocationUnsignedCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Grandpa.report_equivocation_unsigned')
        this._chain = ctx._chain
        this.call = call
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
    get isV100(): boolean {
        return this._chain.getCallHash('Grandpa.report_equivocation_unsigned') === '2c17e0cc8689d3a9ff22e793f8bfe646fd06a870bc9abcba005b8b772edc8677'
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
    get asV100(): {equivocationProof: v100.GrandpaEquivocationProof, keyOwnerProof: v100.KeyOwnerProof} {
        assert(this.isV100)
        return this._chain.decodeCall(this.call)
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
    get isV102(): boolean {
        return this._chain.getCallHash('Grandpa.report_equivocation_unsigned') === 'c013519536bd18b242d3dd1699b5d15a8ae1fccf0dd04c12f721418f3b34a23b'
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
    get asV102(): {equivocationProof: v102.EquivocationProof, keyOwnerProof: v102.Void} {
        assert(this.isV102)
        return this._chain.decodeCall(this.call)
    }
}

export class SubtensorModuleAddStakeCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'SubtensorModule.add_stake')
        this._chain = ctx._chain
        this.call = call
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
    get isV100(): boolean {
        return this._chain.getCallHash('SubtensorModule.add_stake') === '47947b15e79542745e562337d60a597d1cb3e607fedb3b8ddf3031bd9c851c8e'
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
    get asV100(): {hotkey: Uint8Array, ammountStaked: bigint} {
        assert(this.isV100)
        return this._chain.decodeCall(this.call)
    }
}

export class SubtensorModuleRegisterCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'SubtensorModule.register')
        this._chain = ctx._chain
        this.call = call
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
    get isV100(): boolean {
        return this._chain.getCallHash('SubtensorModule.register') === 'a44fa36842296bdecd3e7ba62c3682cf4366d2a512daa819104386d274823e11'
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
    get asV100(): {blockNumber: bigint, nonce: bigint, work: Uint8Array, hotkey: Uint8Array, coldkey: Uint8Array} {
        assert(this.isV100)
        return this._chain.decodeCall(this.call)
    }
}

export class SubtensorModuleRemoveStakeCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'SubtensorModule.remove_stake')
        this._chain = ctx._chain
        this.call = call
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
    get isV100(): boolean {
        return this._chain.getCallHash('SubtensorModule.remove_stake') === 'b0996cd52e1578105cf40287e6029174d755e91f5dde879ca2c40137967054f5'
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
    get asV100(): {hotkey: Uint8Array, ammountUnstaked: bigint} {
        assert(this.isV100)
        return this._chain.decodeCall(this.call)
    }
}

export class SubtensorModuleServeAxonCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'SubtensorModule.serve_axon')
        this._chain = ctx._chain
        this.call = call
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
    get isV100(): boolean {
        return this._chain.getCallHash('SubtensorModule.serve_axon') === '94845781f0e5a91eb5c3cd88d2957e9eecfcec091d1341727ed239d543ef78ba'
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
    get asV100(): {version: number, ip: bigint, port: number, ipType: number, modality: number} {
        assert(this.isV100)
        return this._chain.decodeCall(this.call)
    }
}

export class SubtensorModuleSetWeightsCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'SubtensorModule.set_weights')
        this._chain = ctx._chain
        this.call = call
    }

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
    get isV100(): boolean {
        return this._chain.getCallHash('SubtensorModule.set_weights') === '9f7d8e407de82abe4fb40baa22d8c26da1d1f136b7a52d235933cd5f3f3a1d2a'
    }

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
    get asV100(): {dests: number[], weights: number[]} {
        assert(this.isV100)
        return this._chain.decodeCall(this.call)
    }
}

export class SubtensorModuleSudoResetBondsCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'SubtensorModule.sudo_reset_bonds')
        this._chain = ctx._chain
        this.call = call
    }

    get isV118(): boolean {
        return this._chain.getCallHash('SubtensorModule.sudo_reset_bonds') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    get asV118(): null {
        assert(this.isV118)
        return this._chain.decodeCall(this.call)
    }
}

export class SubtensorModuleSudoSetActivityCutoffCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'SubtensorModule.sudo_set_activity_cutoff')
        this._chain = ctx._chain
        this.call = call
    }

    get isV105(): boolean {
        return this._chain.getCallHash('SubtensorModule.sudo_set_activity_cutoff') === '65c5fe3e1cc0498edfe2d19b0c93b0c238de208631080344eb53613abdee831a'
    }

    get asV105(): {activityCutoff: bigint} {
        assert(this.isV105)
        return this._chain.decodeCall(this.call)
    }
}

export class SubtensorModuleSudoSetAdjustmentIntervalCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'SubtensorModule.sudo_set_adjustment_interval')
        this._chain = ctx._chain
        this.call = call
    }

    get isV105(): boolean {
        return this._chain.getCallHash('SubtensorModule.sudo_set_adjustment_interval') === '1f65d1fd200b5c4a9b5144563abd7f6d1fd97711c7ea3a11aa7c04d7afb9511c'
    }

    get asV105(): {adjustmentInterval: bigint} {
        assert(this.isV105)
        return this._chain.decodeCall(this.call)
    }
}

export class SubtensorModuleSudoSetBlocksPerStepCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'SubtensorModule.sudo_set_blocks_per_step')
        this._chain = ctx._chain
        this.call = call
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
    get isV105(): boolean {
        return this._chain.getCallHash('SubtensorModule.sudo_set_blocks_per_step') === '66d381e540ff73cd4ba34c18073159453471005ea85c2309e3abc88f2b4bba31'
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
    get asV105(): {blocksPerStep: bigint} {
        assert(this.isV105)
        return this._chain.decodeCall(this.call)
    }
}

export class SubtensorModuleSudoSetBondsMovingAverageCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'SubtensorModule.sudo_set_bonds_moving_average')
        this._chain = ctx._chain
        this.call = call
    }

    get isV117(): boolean {
        return this._chain.getCallHash('SubtensorModule.sudo_set_bonds_moving_average') === 'a5143b04eb72d13be2a43b4751c438b5454eb75148e897be95efc6f5f0bf7ce4'
    }

    get asV117(): {bondsMovingAverage: bigint} {
        assert(this.isV117)
        return this._chain.decodeCall(this.call)
    }
}

export class SubtensorModuleSudoSetDifficultyCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'SubtensorModule.sudo_set_difficulty')
        this._chain = ctx._chain
        this.call = call
    }

    get isV105(): boolean {
        return this._chain.getCallHash('SubtensorModule.sudo_set_difficulty') === 'ba92392f6aca8161f87b6bef0d2191e2b1835e8351bcb32ca1c366c4e9e06935'
    }

    get asV105(): {difficulty: bigint} {
        assert(this.isV105)
        return this._chain.decodeCall(this.call)
    }
}

export class SubtensorModuleSudoSetFoundationAccountCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'SubtensorModule.sudo_set_foundation_account')
        this._chain = ctx._chain
        this.call = call
    }

    get isV117(): boolean {
        return this._chain.getCallHash('SubtensorModule.sudo_set_foundation_account') === '2a146ffd12394a4e93aef59d178a79b0925ab2f08a27fb093eed768c2ea4dc8e'
    }

    get asV117(): {foundationAccount: Uint8Array} {
        assert(this.isV117)
        return this._chain.decodeCall(this.call)
    }
}

export class SubtensorModuleSudoSetFoundationDistributionCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'SubtensorModule.sudo_set_foundation_distribution')
        this._chain = ctx._chain
        this.call = call
    }

    get isV117(): boolean {
        return this._chain.getCallHash('SubtensorModule.sudo_set_foundation_distribution') === 'e9ef79e6cdb44dc63d7476b4a726902c72b600f66c79787c667fc3db2ae61ec6'
    }

    get asV117(): {foundationDistribution: bigint} {
        assert(this.isV117)
        return this._chain.decodeCall(this.call)
    }
}

export class SubtensorModuleSudoSetImmunityPeriodCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'SubtensorModule.sudo_set_immunity_period')
        this._chain = ctx._chain
        this.call = call
    }

    get isV107(): boolean {
        return this._chain.getCallHash('SubtensorModule.sudo_set_immunity_period') === '54cbdab4109c432cd0f94719db520375f41eb367a807057469cfba38cf81d919'
    }

    get asV107(): {immunityPeriod: bigint} {
        assert(this.isV107)
        return this._chain.decodeCall(this.call)
    }
}

export class SubtensorModuleSudoSetIncentivePruningDenominatorCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'SubtensorModule.sudo_set_incentive_pruning_denominator')
        this._chain = ctx._chain
        this.call = call
    }

    get isV117(): boolean {
        return this._chain.getCallHash('SubtensorModule.sudo_set_incentive_pruning_denominator') === 'cdbb5a4f9ca662aa4a2654bdd743017e8df35103ed1d266a282cf1e6fec7f8c0'
    }

    get asV117(): {incentivePruningDenominator: bigint} {
        assert(this.isV117)
        return this._chain.decodeCall(this.call)
    }
}

export class SubtensorModuleSudoSetKappaCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'SubtensorModule.sudo_set_kappa')
        this._chain = ctx._chain
        this.call = call
    }

    get isV107(): boolean {
        return this._chain.getCallHash('SubtensorModule.sudo_set_kappa') === 'bb7296ecdd0b1a49a51f445d3bbee968cc1e4e72d678a8b7202aaef07251f02a'
    }

    get asV107(): {kappa: bigint} {
        assert(this.isV107)
        return this._chain.decodeCall(this.call)
    }
}

export class SubtensorModuleSudoSetMaxAllowedMaxMinRatioCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'SubtensorModule.sudo_set_max_allowed_max_min_ratio')
        this._chain = ctx._chain
        this.call = call
    }

    get isV117(): boolean {
        return this._chain.getCallHash('SubtensorModule.sudo_set_max_allowed_max_min_ratio') === '899f70be360edf3c190aa75a811e602c9e26cf55d266099100d80fb902055555'
    }

    get asV117(): {maxAllowedMaxMinRatio: bigint} {
        assert(this.isV117)
        return this._chain.decodeCall(this.call)
    }
}

export class SubtensorModuleSudoSetMaxAllowedUidsCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'SubtensorModule.sudo_set_max_allowed_uids')
        this._chain = ctx._chain
        this.call = call
    }

    get isV107(): boolean {
        return this._chain.getCallHash('SubtensorModule.sudo_set_max_allowed_uids') === 'b1bf306626ce5d539f5231e9bc1bdd6bff6881b043f69ac558ab9ec5a890c1dc'
    }

    get asV107(): {maxAllowedUids: bigint} {
        assert(this.isV107)
        return this._chain.decodeCall(this.call)
    }
}

export class SubtensorModuleSudoSetMaxWeightLimitCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'SubtensorModule.sudo_set_max_weight_limit')
        this._chain = ctx._chain
        this.call = call
    }

    get isV111(): boolean {
        return this._chain.getCallHash('SubtensorModule.sudo_set_max_weight_limit') === '807f867154b42f05b7ad9bffc76e165de049522882a3051bc6d217ed952d0cce'
    }

    get asV111(): {maxWeightLimit: number} {
        assert(this.isV111)
        return this._chain.decodeCall(this.call)
    }
}

export class SubtensorModuleSudoSetMinAllowedWeightsCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'SubtensorModule.sudo_set_min_allowed_weights')
        this._chain = ctx._chain
        this.call = call
    }

    get isV117(): boolean {
        return this._chain.getCallHash('SubtensorModule.sudo_set_min_allowed_weights') === 'bdcd835fd37936f082115ad8bf87640892e9e759e527b399182afddb69682a64'
    }

    get asV117(): {minAllowedWeights: bigint} {
        assert(this.isV117)
        return this._chain.decodeCall(this.call)
    }
}

export class SubtensorModuleSudoSetRhoCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'SubtensorModule.sudo_set_rho')
        this._chain = ctx._chain
        this.call = call
    }

    get isV107(): boolean {
        return this._chain.getCallHash('SubtensorModule.sudo_set_rho') === '2784cb3e8e4ede9b0db064b0099b6d048dc58a0d4af5288d4e7190ac10c02df8'
    }

    get asV107(): {rho: bigint} {
        assert(this.isV107)
        return this._chain.decodeCall(this.call)
    }
}

export class SubtensorModuleSudoSetScalingLawPowerCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'SubtensorModule.sudo_set_scaling_law_power')
        this._chain = ctx._chain
        this.call = call
    }

    get isV111(): boolean {
        return this._chain.getCallHash('SubtensorModule.sudo_set_scaling_law_power') === 'cbe1678425beb50fafcdceda94b7158bc08f64b195bf9fe55c1a74500012f2b1'
    }

    get asV111(): {scalingLawPower: number} {
        assert(this.isV111)
        return this._chain.decodeCall(this.call)
    }
}

export class SubtensorModuleSudoSetStakePruningDenominatorCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'SubtensorModule.sudo_set_stake_pruning_denominator')
        this._chain = ctx._chain
        this.call = call
    }

    get isV117(): boolean {
        return this._chain.getCallHash('SubtensorModule.sudo_set_stake_pruning_denominator') === 'e27dd0caf9a7dc1da22dab7a81ebb80e41ccee489b9e4a3508ba80e4f6116cec'
    }

    get asV117(): {stakePruningDenominator: bigint} {
        assert(this.isV117)
        return this._chain.decodeCall(this.call)
    }
}

export class SubtensorModuleSudoSetStakePruningMinCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'SubtensorModule.sudo_set_stake_pruning_min')
        this._chain = ctx._chain
        this.call = call
    }

    get isV108(): boolean {
        return this._chain.getCallHash('SubtensorModule.sudo_set_stake_pruning_min') === 'af46b8569a2aa8aa9bd5cdef073dec33a34c208facaa02ebdebe0c677a077330'
    }

    get asV108(): {stakePruningMin: bigint} {
        assert(this.isV108)
        return this._chain.decodeCall(this.call)
    }
}

export class SubtensorModuleSudoSetSynergyScalingLawPowerCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'SubtensorModule.sudo_set_synergy_scaling_law_power')
        this._chain = ctx._chain
        this.call = call
    }

    get isV111(): boolean {
        return this._chain.getCallHash('SubtensorModule.sudo_set_synergy_scaling_law_power') === 'dc5a2b10aeff17f9e6313c3da5b602e834485f8245c06554ccd26061384374de'
    }

    get asV111(): {synergyScalingLawPower: number} {
        assert(this.isV111)
        return this._chain.decodeCall(this.call)
    }
}

export class SubtensorModuleSudoSetValidatorBatchSizeCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'SubtensorModule.sudo_set_validator_batch_size')
        this._chain = ctx._chain
        this.call = call
    }

    get isV117(): boolean {
        return this._chain.getCallHash('SubtensorModule.sudo_set_validator_batch_size') === '04ae9653e8c725eab34f971cabed1d29ef43b82912251de00bcd03d78dcc08c9'
    }

    get asV117(): {validatorBatchSize: bigint} {
        assert(this.isV117)
        return this._chain.decodeCall(this.call)
    }
}

export class SubtensorModuleSudoSetValidatorEpochLenCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'SubtensorModule.sudo_set_validator_epoch_len')
        this._chain = ctx._chain
        this.call = call
    }

    get isV117(): boolean {
        return this._chain.getCallHash('SubtensorModule.sudo_set_validator_epoch_len') === '70f8c3998c2a0260b725c868286694b652d15ae65d255dc719c6e473256f5b60'
    }

    get asV117(): {validatorEpochLen: bigint} {
        assert(this.isV117)
        return this._chain.decodeCall(this.call)
    }
}

export class SubtensorModuleSudoSetValidatorEpochsPerResetCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'SubtensorModule.sudo_set_validator_epochs_per_reset')
        this._chain = ctx._chain
        this.call = call
    }

    get isV117(): boolean {
        return this._chain.getCallHash('SubtensorModule.sudo_set_validator_epochs_per_reset') === '2369c0d2b0dae4d43dd0bb58905494297cb241edc56e7ba9629f6668c49927aa'
    }

    get asV117(): {validatorEpochsPerReset: bigint} {
        assert(this.isV117)
        return this._chain.decodeCall(this.call)
    }
}

export class SubtensorModuleSudoSetValidatorExcludeQuantileCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'SubtensorModule.sudo_set_validator_exclude_quantile')
        this._chain = ctx._chain
        this.call = call
    }

    get isV111(): boolean {
        return this._chain.getCallHash('SubtensorModule.sudo_set_validator_exclude_quantile') === 'cfb3e693fab813c0d49d296f7a151bee5fdff76e249ecdbaecf1f97a8bbcd01c'
    }

    get asV111(): {validatorExcludeQuantile: number} {
        assert(this.isV111)
        return this._chain.decodeCall(this.call)
    }
}

export class SubtensorModuleSudoSetValidatorLogitsDivergenceCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'SubtensorModule.sudo_set_validator_logits_divergence')
        this._chain = ctx._chain
        this.call = call
    }

    get isV112(): boolean {
        return this._chain.getCallHash('SubtensorModule.sudo_set_validator_logits_divergence') === '3bc3b0d5edf82ff41d42589c29f57bbf5d47270f58c36cd675d3d659d3c95bad'
    }

    get asV112(): {validatorLogitsDivergence: bigint} {
        assert(this.isV112)
        return this._chain.decodeCall(this.call)
    }
}

export class SubtensorModuleSudoSetValidatorPruneLenCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'SubtensorModule.sudo_set_validator_prune_len')
        this._chain = ctx._chain
        this.call = call
    }

    get isV112(): boolean {
        return this._chain.getCallHash('SubtensorModule.sudo_set_validator_prune_len') === 'e28ff07823af9fbb46edd1c5143ebf8187ec1508ae775d0b5b2030ecc8f84f70'
    }

    get asV112(): {validatorPruneLen: bigint} {
        assert(this.isV112)
        return this._chain.decodeCall(this.call)
    }
}

export class SubtensorModuleSudoSetValidatorSequenceLengthCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'SubtensorModule.sudo_set_validator_sequence_length')
        this._chain = ctx._chain
        this.call = call
    }

    get isV117(): boolean {
        return this._chain.getCallHash('SubtensorModule.sudo_set_validator_sequence_length') === '6efd56d1af768b48e29c812c6c6992effe1665a9c47962852ec48935177191ab'
    }

    get asV117(): {validatorSequenceLength: bigint} {
        assert(this.isV117)
        return this._chain.decodeCall(this.call)
    }
}

export class SubtensorModuleSudoTargetRegistrationsPerIntervalCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'SubtensorModule.sudo_target_registrations_per_interval')
        this._chain = ctx._chain
        this.call = call
    }

    get isV105(): boolean {
        return this._chain.getCallHash('SubtensorModule.sudo_target_registrations_per_interval') === 'ebc9ba19dea6d7ee81abdea580112753ff8e0dab26e35dd06373f9cfd3533fd2'
    }

    get asV105(): {targetRegistrationsPerInterval: bigint} {
        assert(this.isV105)
        return this._chain.decodeCall(this.call)
    }
}

export class SudoSetKeyCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Sudo.set_key')
        this._chain = ctx._chain
        this.call = call
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
    get isV100(): boolean {
        return this._chain.getCallHash('Sudo.set_key') === 'd0eb457ece644571cebe79cbdd64ef1453c382048ffec79f9c403f7bc8f90020'
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
    get asV100(): {new: v100.LookupSource} {
        assert(this.isV100)
        return this._chain.decodeCall(this.call)
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
    get isV102(): boolean {
        return this._chain.getCallHash('Sudo.set_key') === 'e634aac3331d47a56ff572c52ad90a648769dfbf2c00d7bd44498b4ee41f6ac7'
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
    get asV102(): {new: v102.MultiAddress} {
        assert(this.isV102)
        return this._chain.decodeCall(this.call)
    }
}

export class SudoSudoCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Sudo.sudo')
        this._chain = ctx._chain
        this.call = call
    }

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
    get isV100(): boolean {
        return this._chain.getCallHash('Sudo.sudo') === 'f831eefb1819884017e40748722d113834d31fa5b56e86e72e2614b694404802'
    }

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
    get asV100(): {call: v100.Type_69} {
        assert(this.isV100)
        return this._chain.decodeCall(this.call)
    }

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
    get isV105(): boolean {
        return this._chain.getCallHash('Sudo.sudo') === 'b726517249f661f4efcc2b6c045ac8dfbb8783bbf5e4a12e6165bc274c48b862'
    }

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
    get asV105(): {call: v105.Type_69} {
        assert(this.isV105)
        return this._chain.decodeCall(this.call)
    }

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
    get isV107(): boolean {
        return this._chain.getCallHash('Sudo.sudo') === 'f666e89b698813cb94e7d03beb84d7f3f4bf22775dd7f218ac7c76327fdb3c3b'
    }

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
    get asV107(): {call: v107.Type_69} {
        assert(this.isV107)
        return this._chain.decodeCall(this.call)
    }

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
    get isV117(): boolean {
        return this._chain.getCallHash('Sudo.sudo') === '70231469d4cd8d73ac9224ff7c100ca3fa774f8163eb2fb3d909d3d18ddf2300'
    }

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
    get asV117(): {call: v117.Type_70} {
        assert(this.isV117)
        return this._chain.decodeCall(this.call)
    }

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
    get isV118(): boolean {
        return this._chain.getCallHash('Sudo.sudo') === '57e982c28dde90c9b750cec541cabd364ff26714e4a8ec41f542985d3698279b'
    }

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
    get asV118(): {call: v118.Type_70} {
        assert(this.isV118)
        return this._chain.decodeCall(this.call)
    }

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
    get isV102(): boolean {
        return this._chain.getCallHash('Sudo.sudo') === 'e853a45dd5b05027f0a9066eb3069ae53a6b8536ced37f35fdf3ece3c96520c0'
    }

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
    get asV102(): {call: v102.Call} {
        assert(this.isV102)
        return this._chain.decodeCall(this.call)
    }

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
    get isV108(): boolean {
        return this._chain.getCallHash('Sudo.sudo') === 'dad43498488b4a79148a875d5cfd1210ecc46f870b545902c630aedbdc05d4e2'
    }

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
    get asV108(): {call: v108.Call} {
        assert(this.isV108)
        return this._chain.decodeCall(this.call)
    }

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
    get isV111(): boolean {
        return this._chain.getCallHash('Sudo.sudo') === 'cd64af89d6278ea63a1b1511aa31731136a8239b21cbb31d850c06e315401c3b'
    }

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
    get asV111(): {call: v111.Call} {
        assert(this.isV111)
        return this._chain.decodeCall(this.call)
    }

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
    get isV112(): boolean {
        return this._chain.getCallHash('Sudo.sudo') === '13c44e9eeae445849cf3e0182a3cfd45b3e6bee0448eb319968e678434bb0daf'
    }

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
    get asV112(): {call: v112.Call} {
        assert(this.isV112)
        return this._chain.decodeCall(this.call)
    }
}

export class SudoSudoAsCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Sudo.sudo_as')
        this._chain = ctx._chain
        this.call = call
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
    get isV100(): boolean {
        return this._chain.getCallHash('Sudo.sudo_as') === '49a841cd13962faba81cd74d65bbf51738da27aab2d7ba57c3926d5675ce94fd'
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
    get asV100(): {who: v100.LookupSource, call: v100.Type_69} {
        assert(this.isV100)
        return this._chain.decodeCall(this.call)
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
    get isV105(): boolean {
        return this._chain.getCallHash('Sudo.sudo_as') === '3be2744eeaa1f6431fa4fbaf2f4cfad409e1f5cfc5ae45db9cc4071b7d2f34c1'
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
    get asV105(): {who: v105.LookupSource, call: v105.Type_69} {
        assert(this.isV105)
        return this._chain.decodeCall(this.call)
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
    get isV107(): boolean {
        return this._chain.getCallHash('Sudo.sudo_as') === '18148b4b6b36ee2e3016689426d42b0432d26316d9a64d5149b0e5b3fb5de940'
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
    get asV107(): {who: v107.LookupSource, call: v107.Type_69} {
        assert(this.isV107)
        return this._chain.decodeCall(this.call)
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
    get isV117(): boolean {
        return this._chain.getCallHash('Sudo.sudo_as') === 'db08e2af7c416882b622e4073522a68895c4ff676f6f91dfc6055b2db3325a15'
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
    get asV117(): {who: v117.LookupSource, call: v117.Type_70} {
        assert(this.isV117)
        return this._chain.decodeCall(this.call)
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
    get isV118(): boolean {
        return this._chain.getCallHash('Sudo.sudo_as') === 'c978f0b664be4effe4d55edb54a3502c305e34476ef6a173b3dab54f6868d7e8'
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
    get asV118(): {who: v118.LookupSource, call: v118.Type_70} {
        assert(this.isV118)
        return this._chain.decodeCall(this.call)
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
    get isV102(): boolean {
        return this._chain.getCallHash('Sudo.sudo_as') === 'c8d3d9eb707d08fb8865dc2d8deab3c9f7f7985415c87e083d0b6845d2348552'
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
    get asV102(): {who: v102.MultiAddress, call: v102.Call} {
        assert(this.isV102)
        return this._chain.decodeCall(this.call)
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
    get isV108(): boolean {
        return this._chain.getCallHash('Sudo.sudo_as') === 'cb167323a44edd6514423fea8db7f3d0e87f39dada4ce8a437679872da0a820d'
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
    get asV108(): {who: v108.MultiAddress, call: v108.Call} {
        assert(this.isV108)
        return this._chain.decodeCall(this.call)
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
    get isV111(): boolean {
        return this._chain.getCallHash('Sudo.sudo_as') === 'df6ca489bc913769d3834176d11a28cd51cf354fb141848d0fa2e75c4d48ae51'
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
    get asV111(): {who: v111.MultiAddress, call: v111.Call} {
        assert(this.isV111)
        return this._chain.decodeCall(this.call)
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
    get isV112(): boolean {
        return this._chain.getCallHash('Sudo.sudo_as') === '9a47b7ec7976493071b1aad3943856895170e79eb4897dce53a73035b8f89468'
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
    get asV112(): {who: v112.MultiAddress, call: v112.Call} {
        assert(this.isV112)
        return this._chain.decodeCall(this.call)
    }
}

export class SudoSudoUncheckedWeightCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Sudo.sudo_unchecked_weight')
        this._chain = ctx._chain
        this.call = call
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
    get isV100(): boolean {
        return this._chain.getCallHash('Sudo.sudo_unchecked_weight') === 'fd9fcd7cd94c6ea175026f11a9614b38112578a7c30abfc01669a9319c487d3f'
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
    get asV100(): {call: v100.Type_69, weight: bigint} {
        assert(this.isV100)
        return this._chain.decodeCall(this.call)
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
    get isV105(): boolean {
        return this._chain.getCallHash('Sudo.sudo_unchecked_weight') === '0a86a935b7a2f1546d07528f25ab056e01c9a4fedb9f29510f6f640bd30f9917'
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
    get asV105(): {call: v105.Type_69, weight: bigint} {
        assert(this.isV105)
        return this._chain.decodeCall(this.call)
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
    get isV107(): boolean {
        return this._chain.getCallHash('Sudo.sudo_unchecked_weight') === 'a2ef90a47b68be1ed5284db6a6122a6f314a2c60c94763cbdcde05ee7bfa7352'
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
    get asV107(): {call: v107.Type_69, weight: bigint} {
        assert(this.isV107)
        return this._chain.decodeCall(this.call)
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
    get isV117(): boolean {
        return this._chain.getCallHash('Sudo.sudo_unchecked_weight') === 'b9ea96b0226b9dcfe6619696cbdf26ab0a1280618953b7bb4d3fde79f6e8fc13'
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
    get asV117(): {call: v117.Type_70, weight: bigint} {
        assert(this.isV117)
        return this._chain.decodeCall(this.call)
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
    get isV118(): boolean {
        return this._chain.getCallHash('Sudo.sudo_unchecked_weight') === 'c7ad2cf95ac9d305edfbd73783240b8cfbfb5431559d0c004090c27a8d374fc6'
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
    get asV118(): {call: v118.Type_70, weight: bigint} {
        assert(this.isV118)
        return this._chain.decodeCall(this.call)
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
    get isV102(): boolean {
        return this._chain.getCallHash('Sudo.sudo_unchecked_weight') === 'e42c5d5ea8928b383af65325d13ec1eb08f5444c57a71f94ed10d278077a317b'
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
    get asV102(): {call: v102.Call, weight: bigint} {
        assert(this.isV102)
        return this._chain.decodeCall(this.call)
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
    get isV108(): boolean {
        return this._chain.getCallHash('Sudo.sudo_unchecked_weight') === '9b04702bac1c48de005997eff060cb74922967e745176fdc78c3f25ae62d281d'
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
    get asV108(): {call: v108.Call, weight: bigint} {
        assert(this.isV108)
        return this._chain.decodeCall(this.call)
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
    get isV111(): boolean {
        return this._chain.getCallHash('Sudo.sudo_unchecked_weight') === '4e9982c7811f7cd665d8b171ec0acb9e74679dd974e98daf4413b2e3c142bf02'
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
    get asV111(): {call: v111.Call, weight: bigint} {
        assert(this.isV111)
        return this._chain.decodeCall(this.call)
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
    get isV112(): boolean {
        return this._chain.getCallHash('Sudo.sudo_unchecked_weight') === 'dbe73bbdfcb847ee22cd61a00fcfb8675866387a8ca6ec5f53e2d6af182e2163'
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
    get asV112(): {call: v112.Call, weight: bigint} {
        assert(this.isV112)
        return this._chain.decodeCall(this.call)
    }
}

export class SystemFillBlockCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'System.fill_block')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  A dispatch that will fill the block weight up to the given ratio.
     */
    get isV100(): boolean {
        return this._chain.getCallHash('System.fill_block') === '41c1841312db092642508be699e4a3f54d52efe2dcaa8101ca9518398fb70c49'
    }

    /**
     *  A dispatch that will fill the block weight up to the given ratio.
     */
    get asV100(): {ratio: number} {
        assert(this.isV100)
        return this._chain.decodeCall(this.call)
    }
}

export class SystemKillPrefixCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'System.kill_prefix')
        this._chain = ctx._chain
        this.call = call
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
    get isV100(): boolean {
        return this._chain.getCallHash('System.kill_prefix') === 'dfbadd42bee8b18fc81cf78683511061181cffbf7a8ebfd3e5719c389b373d93'
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
    get asV100(): {prefix: Uint8Array, subkeys: number} {
        assert(this.isV100)
        return this._chain.decodeCall(this.call)
    }
}

export class SystemKillStorageCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'System.kill_storage')
        this._chain = ctx._chain
        this.call = call
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
    get isV100(): boolean {
        return this._chain.getCallHash('System.kill_storage') === 'eac21dc14e927c003d9c634fb019d04128f71f8529d2914b10a56b85289c2c11'
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
    get asV100(): {keys: Uint8Array[]} {
        assert(this.isV100)
        return this._chain.decodeCall(this.call)
    }
}

export class SystemRemarkCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'System.remark')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Make some on-chain remark.
     * 
     *  # <weight>
     *  - `O(1)`
     *  # </weight>
     */
    get isV100(): boolean {
        return this._chain.getCallHash('System.remark') === 'f4e9b5b7572eeae92978087ece9b4f57cb5cab4f16baf5625bb9ec4a432bad63'
    }

    /**
     *  Make some on-chain remark.
     * 
     *  # <weight>
     *  - `O(1)`
     *  # </weight>
     */
    get asV100(): {remark: Uint8Array} {
        assert(this.isV100)
        return this._chain.decodeCall(this.call)
    }
}

export class SystemRemarkWithEventCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'System.remark_with_event')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Make some on-chain remark and emit event.
     * 
     *  # <weight>
     *  - `O(b)` where b is the length of the remark.
     *  - 1 event.
     *  # </weight>
     */
    get isV100(): boolean {
        return this._chain.getCallHash('System.remark_with_event') === 'f4e9b5b7572eeae92978087ece9b4f57cb5cab4f16baf5625bb9ec4a432bad63'
    }

    /**
     *  Make some on-chain remark and emit event.
     * 
     *  # <weight>
     *  - `O(b)` where b is the length of the remark.
     *  - 1 event.
     *  # </weight>
     */
    get asV100(): {remark: Uint8Array} {
        assert(this.isV100)
        return this._chain.decodeCall(this.call)
    }
}

export class SystemSetChangesTrieConfigCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'System.set_changes_trie_config')
        this._chain = ctx._chain
        this.call = call
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
    get isV100(): boolean {
        return this._chain.getCallHash('System.set_changes_trie_config') === 'ced137e2f8792ce87e1f2b20f97e1de9a31001f9c44069dc6e73b9e4c061c311'
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
    get asV100(): {changesTrieConfig: (v100.ChangesTrieConfiguration | undefined)} {
        assert(this.isV100)
        return this._chain.decodeCall(this.call)
    }
}

export class SystemSetCodeCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'System.set_code')
        this._chain = ctx._chain
        this.call = call
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
    get isV100(): boolean {
        return this._chain.getCallHash('System.set_code') === '7bf3d4785d9be7a4872f39cbd3702a66e16f7ee01e4446fb4a05624dc0ec4c93'
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
    get asV100(): {code: Uint8Array} {
        assert(this.isV100)
        return this._chain.decodeCall(this.call)
    }
}

export class SystemSetCodeWithoutChecksCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'System.set_code_without_checks')
        this._chain = ctx._chain
        this.call = call
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
    get isV100(): boolean {
        return this._chain.getCallHash('System.set_code_without_checks') === '7bf3d4785d9be7a4872f39cbd3702a66e16f7ee01e4446fb4a05624dc0ec4c93'
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
    get asV100(): {code: Uint8Array} {
        assert(this.isV100)
        return this._chain.decodeCall(this.call)
    }
}

export class SystemSetHeapPagesCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'System.set_heap_pages')
        this._chain = ctx._chain
        this.call = call
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
    get isV100(): boolean {
        return this._chain.getCallHash('System.set_heap_pages') === '130172e47c5e517627712b4d084768b98489d920284223ea8ef9c462339b5808'
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
    get asV100(): {pages: bigint} {
        assert(this.isV100)
        return this._chain.decodeCall(this.call)
    }
}

export class SystemSetStorageCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'System.set_storage')
        this._chain = ctx._chain
        this.call = call
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
    get isV100(): boolean {
        return this._chain.getCallHash('System.set_storage') === 'a4fb507615d69849afb1b2ee654006f9be48bb6e960a4674624d6e46e4382083'
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
    get asV100(): {items: [Uint8Array, Uint8Array][]} {
        assert(this.isV100)
        return this._chain.decodeCall(this.call)
    }
}

export class TimestampSetCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Timestamp.set')
        this._chain = ctx._chain
        this.call = call
    }

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
    get isV100(): boolean {
        return this._chain.getCallHash('Timestamp.set') === '6a8b8ba2be107f0853b674eec0026cc440b314db44d0e2c59b36e353355aed14'
    }

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
    get asV100(): {now: bigint} {
        assert(this.isV100)
        return this._chain.decodeCall(this.call)
    }
}
