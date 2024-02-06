import assert from 'assert'
import {Chain, ChainContext, CallContext, Call, Result, Option} from './support'
import * as v120 from './v120'
import * as v121 from './v121'

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
     * Exactly as `transfer`, except the origin must be root and the source account may be
     * specified.
     * ## Complexity
     * - Same as transfer, but additional read and write because the source account is not
     *   assumed to be in the overlay.
     */
    get isV120(): boolean {
        return this._chain.getCallHash('Balances.force_transfer') === '41c6e153cdbfa089b913772e33874641d1c8326d7ccabbf7573043754eb92eb5'
    }

    /**
     * Exactly as `transfer`, except the origin must be root and the source account may be
     * specified.
     * ## Complexity
     * - Same as transfer, but additional read and write because the source account is not
     *   assumed to be in the overlay.
     */
    get asV120(): {source: v120.MultiAddress, dest: v120.MultiAddress, value: bigint} {
        assert(this.isV120)
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
    get isV120(): boolean {
        return this._chain.getCallHash('Balances.force_unreserve') === 'bd3e56c45e5adc33ecf125dd022b4a1433e909357782936a1c1b9400d3dbb3a4'
    }

    /**
     * Unreserve some balance from a user by force.
     * 
     * Can only be called by ROOT.
     */
    get asV120(): {who: v120.MultiAddress, amount: bigint} {
        assert(this.isV120)
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
     * Set the balances of a given account.
     * 
     * This will alter `FreeBalance` and `ReservedBalance` in storage. it will
     * also alter the total issuance of the system (`TotalIssuance`) appropriately.
     * If the new free or reserved balance is below the existential deposit,
     * it will reset the account nonce (`frame_system::AccountNonce`).
     * 
     * The dispatch origin for this call is `root`.
     */
    get isV120(): boolean {
        return this._chain.getCallHash('Balances.set_balance') === '2546a285456474e552e9bbcf23d1824736d1c5cc738861d199fc37a80d3b6d58'
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
    get asV120(): {who: v120.MultiAddress, newFree: bigint, newReserved: bigint} {
        assert(this.isV120)
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
    get isV120(): boolean {
        return this._chain.getCallHash('Balances.transfer') === '547034aabb77818e2d576f3bde0caae86c92d127fbeb12be9b7b3c0f40cbce0e'
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
    get asV120(): {dest: v120.MultiAddress, value: bigint} {
        assert(this.isV120)
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
    get isV120(): boolean {
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
     *   keep the sender account alive (true). ## Complexity
     * - O(1). Just like transfer, but reading the user's transferable balance first.
     */
    get asV120(): {dest: v120.MultiAddress, keepAlive: boolean} {
        assert(this.isV120)
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
     * Same as the [`transfer`] call, but with a check that the transfer will not kill the
     * origin account.
     * 
     * 99% of the time you want [`transfer`] instead.
     * 
     * [`transfer`]: struct.Pallet.html#method.transfer
     */
    get isV120(): boolean {
        return this._chain.getCallHash('Balances.transfer_keep_alive') === '547034aabb77818e2d576f3bde0caae86c92d127fbeb12be9b7b3c0f40cbce0e'
    }

    /**
     * Same as the [`transfer`] call, but with a check that the transfer will not kill the
     * origin account.
     * 
     * 99% of the time you want [`transfer`] instead.
     * 
     * [`transfer`]: struct.Pallet.html#method.transfer
     */
    get asV120(): {dest: v120.MultiAddress, value: bigint} {
        assert(this.isV120)
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
    get isV120(): boolean {
        return this._chain.getCallHash('Grandpa.note_stalled') === '6bb454c2ae9db6ee64dc7f433f0fd3b839727f70c6c835943383346896272c40'
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
    get asV120(): {delay: number, bestFinalizedBlockNumber: number} {
        assert(this.isV120)
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
     * Report voter equivocation/misbehavior. This method will verify the
     * equivocation proof and validate the given key ownership proof
     * against the extracted offender. If both are valid, the offence
     * will be reported.
     */
    get isV120(): boolean {
        return this._chain.getCallHash('Grandpa.report_equivocation') === 'c013519536bd18b242d3dd1699b5d15a8ae1fccf0dd04c12f721418f3b34a23b'
    }

    /**
     * Report voter equivocation/misbehavior. This method will verify the
     * equivocation proof and validate the given key ownership proof
     * against the extracted offender. If both are valid, the offence
     * will be reported.
     */
    get asV120(): {equivocationProof: v120.EquivocationProof, keyOwnerProof: v120.Void} {
        assert(this.isV120)
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
    get isV120(): boolean {
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
    get asV120(): {equivocationProof: v120.EquivocationProof, keyOwnerProof: v120.Void} {
        assert(this.isV120)
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

    get isV120(): boolean {
        return this._chain.getCallHash('SubtensorModule.add_stake') === 'e57b2ac4bf7fde694b19ed828cae94b8dc7efb7fa05d51c0e2bed4a307c2532a'
    }

    get asV120(): {hotkey: Uint8Array, amountStaked: bigint} {
        assert(this.isV120)
        return this._chain.decodeCall(this.call)
    }
}

export class SubtensorModuleBecomeDelegateCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'SubtensorModule.become_delegate')
        this._chain = ctx._chain
        this.call = call
    }

    get isV120(): boolean {
        return this._chain.getCallHash('SubtensorModule.become_delegate') === '106965b530f4675ef2efd0ff1938c01652c89a797fa26794868439237e2130c7'
    }

    get asV120(): {hotkey: Uint8Array} {
        assert(this.isV120)
        return this._chain.decodeCall(this.call)
    }
}

export class SubtensorModuleBenchmarkDrainEmissionCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'SubtensorModule.benchmark_drain_emission')
        this._chain = ctx._chain
        this.call = call
    }

    get isV120(): boolean {
        return this._chain.getCallHash('SubtensorModule.benchmark_drain_emission') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    get asV120(): null {
        assert(this.isV120)
        return this._chain.decodeCall(this.call)
    }
}

export class SubtensorModuleBenchmarkEpochWithWeightsCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'SubtensorModule.benchmark_epoch_with_weights')
        this._chain = ctx._chain
        this.call = call
    }

    get isV120(): boolean {
        return this._chain.getCallHash('SubtensorModule.benchmark_epoch_with_weights') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    get asV120(): null {
        assert(this.isV120)
        return this._chain.decodeCall(this.call)
    }
}

export class SubtensorModuleBenchmarkEpochWithoutWeightsCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'SubtensorModule.benchmark_epoch_without_weights')
        this._chain = ctx._chain
        this.call = call
    }

    get isV120(): boolean {
        return this._chain.getCallHash('SubtensorModule.benchmark_epoch_without_weights') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    get asV120(): null {
        assert(this.isV120)
        return this._chain.decodeCall(this.call)
    }
}

export class SubtensorModuleBurnedRegisterCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'SubtensorModule.burned_register')
        this._chain = ctx._chain
        this.call = call
    }

    get isV120(): boolean {
        return this._chain.getCallHash('SubtensorModule.burned_register') === '884c588227479f530b3d82fbaf6b7f343608feb21918deb5e3ffd716dad576d9'
    }

    get asV120(): {netuid: number, hotkey: Uint8Array} {
        assert(this.isV120)
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

    get isV120(): boolean {
        return this._chain.getCallHash('SubtensorModule.register') === '1c81efbc112a8689378930b248911a3d8acf5902392641ecedee869255f86ae6'
    }

    get asV120(): {netuid: number, blockNumber: bigint, nonce: bigint, work: Uint8Array, hotkey: Uint8Array, coldkey: Uint8Array} {
        assert(this.isV120)
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

    get isV120(): boolean {
        return this._chain.getCallHash('SubtensorModule.remove_stake') === 'a9d22d2e108d3ffa541b148709e162c665772cfabfd7c1aa520c27cfc4e5b790'
    }

    get asV120(): {hotkey: Uint8Array, amountUnstaked: bigint} {
        assert(this.isV120)
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

    get isV120(): boolean {
        return this._chain.getCallHash('SubtensorModule.serve_axon') === '8a17614b27f801bb2935c362736fef77e20698d80c8c2e38eab54f9100cf168b'
    }

    get asV120(): {netuid: number, version: number, ip: bigint, port: number, ipType: number, protocol: number, placeholder1: number, placeholder2: number} {
        assert(this.isV120)
        return this._chain.decodeCall(this.call)
    }
}

export class SubtensorModuleServePrometheusCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'SubtensorModule.serve_prometheus')
        this._chain = ctx._chain
        this.call = call
    }

    get isV120(): boolean {
        return this._chain.getCallHash('SubtensorModule.serve_prometheus') === 'e007ab869a290394edf5a7a1e7d24f397d17dfa5b29fbbc8c0ed88a47227345b'
    }

    get asV120(): {netuid: number, version: number, ip: bigint, port: number, ipType: number} {
        assert(this.isV120)
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

    get isV120(): boolean {
        return this._chain.getCallHash('SubtensorModule.set_weights') === 'caabd4e04e14b0174d28c9b4427a8c35bf2675f128f3537ba21676cb708ea1dc'
    }

    get asV120(): {netuid: number, dests: number[], weights: number[], versionKey: bigint} {
        assert(this.isV120)
        return this._chain.decodeCall(this.call)
    }
}

export class SubtensorModuleSudoAddNetworkCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'SubtensorModule.sudo_add_network')
        this._chain = ctx._chain
        this.call = call
    }

    get isV120(): boolean {
        return this._chain.getCallHash('SubtensorModule.sudo_add_network') === '2051611bf0728fc24c68a59ce4bf0ba8838c90df2739cc21f4182cfc934d6edb'
    }

    get asV120(): {netuid: number, tempo: number, modality: number} {
        assert(this.isV120)
        return this._chain.decodeCall(this.call)
    }
}

export class SubtensorModuleSudoAddNetworkConnectionRequirementCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'SubtensorModule.sudo_add_network_connection_requirement')
        this._chain = ctx._chain
        this.call = call
    }

    get isV120(): boolean {
        return this._chain.getCallHash('SubtensorModule.sudo_add_network_connection_requirement') === '5b48f066c1641c589f61096d41ba94165362e4a73a2677b2714bd39e617c7162'
    }

    get asV120(): {netuidA: number, netuidB: number, requirement: number} {
        assert(this.isV120)
        return this._chain.decodeCall(this.call)
    }
}

export class SubtensorModuleSudoRegisterCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'SubtensorModule.sudo_register')
        this._chain = ctx._chain
        this.call = call
    }

    get isV120(): boolean {
        return this._chain.getCallHash('SubtensorModule.sudo_register') === '30de17d79dac2645e4f1d255b3273ba9fb78ee53c02062d871584ff1be98d237'
    }

    get asV120(): {netuid: number, hotkey: Uint8Array, coldkey: Uint8Array, stake: bigint, balance: bigint} {
        assert(this.isV120)
        return this._chain.decodeCall(this.call)
    }
}

export class SubtensorModuleSudoRemoveNetworkCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'SubtensorModule.sudo_remove_network')
        this._chain = ctx._chain
        this.call = call
    }

    get isV120(): boolean {
        return this._chain.getCallHash('SubtensorModule.sudo_remove_network') === '45e3d5d15bca1fc9e8346909eac66baed10e96a40d2758f3eeaa3985cc5eaa61'
    }

    get asV120(): {netuid: number} {
        assert(this.isV120)
        return this._chain.decodeCall(this.call)
    }
}

export class SubtensorModuleSudoRemoveNetworkConnectionRequirementCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'SubtensorModule.sudo_remove_network_connection_requirement')
        this._chain = ctx._chain
        this.call = call
    }

    get isV120(): boolean {
        return this._chain.getCallHash('SubtensorModule.sudo_remove_network_connection_requirement') === '607f635afe0d2749c9f7ad6c247e86b78f3dcef7e4ef5a634da26a69d7b9bf05'
    }

    get asV120(): {netuidA: number, netuidB: number} {
        assert(this.isV120)
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

    get isV120(): boolean {
        return this._chain.getCallHash('SubtensorModule.sudo_set_activity_cutoff') === '83db0dd4facdef1ef73926d4c5dfc4007819895277fafe60f8ac7d41cd0c3879'
    }

    get asV120(): {netuid: number, activityCutoff: number} {
        assert(this.isV120)
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

    get isV120(): boolean {
        return this._chain.getCallHash('SubtensorModule.sudo_set_adjustment_interval') === 'fcfe8e00443980749243d61ea2822674b1f3a5315f5f30dd49538b602501d95a'
    }

    get asV120(): {netuid: number, adjustmentInterval: number} {
        assert(this.isV120)
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

    get isV120(): boolean {
        return this._chain.getCallHash('SubtensorModule.sudo_set_bonds_moving_average') === '20a54b1f16d07c4838653f0ecc14c5b6e18ccd119031c50aa93fd8711002e053'
    }

    get asV120(): {netuid: number, bondsMovingAverage: bigint} {
        assert(this.isV120)
        return this._chain.decodeCall(this.call)
    }
}

export class SubtensorModuleSudoSetBurnCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'SubtensorModule.sudo_set_burn')
        this._chain = ctx._chain
        this.call = call
    }

    get isV120(): boolean {
        return this._chain.getCallHash('SubtensorModule.sudo_set_burn') === '0202462a00526f96784a009f58cf0af6de85196769123de118545b87767e6fc1'
    }

    get asV120(): {netuid: number, burn: bigint} {
        assert(this.isV120)
        return this._chain.decodeCall(this.call)
    }
}

export class SubtensorModuleSudoSetDefaultTakeCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'SubtensorModule.sudo_set_default_take')
        this._chain = ctx._chain
        this.call = call
    }

    get isV120(): boolean {
        return this._chain.getCallHash('SubtensorModule.sudo_set_default_take') === 'ed1a50eb740deb560d365b29e31efa57de341cc980325106f068d5dce06619cf'
    }

    get asV120(): {defaultTake: number} {
        assert(this.isV120)
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

    get isV120(): boolean {
        return this._chain.getCallHash('SubtensorModule.sudo_set_difficulty') === '791ecfa2033ee7f489144803276e0e3294d9b04019ee7ef1cc8b564299d318c8'
    }

    get asV120(): {netuid: number, difficulty: bigint} {
        assert(this.isV120)
        return this._chain.decodeCall(this.call)
    }
}

export class SubtensorModuleSudoSetEmissionValuesCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'SubtensorModule.sudo_set_emission_values')
        this._chain = ctx._chain
        this.call = call
    }

    get isV120(): boolean {
        return this._chain.getCallHash('SubtensorModule.sudo_set_emission_values') === '0a6a0f1c83f0a1d9f7e44926a0639a605af7a21fe04743972ed7f7c7aa42af85'
    }

    get asV120(): {netuids: number[], emission: bigint[]} {
        assert(this.isV120)
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

    get isV120(): boolean {
        return this._chain.getCallHash('SubtensorModule.sudo_set_immunity_period') === '5b9198d0b7b4972a793217f6bba90663d84fc70d471eda124e30da72938fd30e'
    }

    get asV120(): {netuid: number, immunityPeriod: number} {
        assert(this.isV120)
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

    get isV120(): boolean {
        return this._chain.getCallHash('SubtensorModule.sudo_set_kappa') === 'b41d5665535657f0960c630607e5d90c8d2c4cc20539921995dc34b4209e5423'
    }

    get asV120(): {netuid: number, kappa: number} {
        assert(this.isV120)
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

    get isV120(): boolean {
        return this._chain.getCallHash('SubtensorModule.sudo_set_max_allowed_uids') === '0acc84595940b7b0a67b3ad486f48e9e7f0cf0ddb91d7a8ed93e54a8b3e1dbd9'
    }

    get asV120(): {netuid: number, maxAllowedUids: number} {
        assert(this.isV120)
        return this._chain.decodeCall(this.call)
    }
}

export class SubtensorModuleSudoSetMaxAllowedValidatorsCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'SubtensorModule.sudo_set_max_allowed_validators')
        this._chain = ctx._chain
        this.call = call
    }

    get isV120(): boolean {
        return this._chain.getCallHash('SubtensorModule.sudo_set_max_allowed_validators') === '416e82c8d12bcdeabb2029b635374aa6dd5d81acc1edcb2b4c54b0c1c71b911f'
    }

    get asV120(): {netuid: number, maxAllowedValidators: number} {
        assert(this.isV120)
        return this._chain.decodeCall(this.call)
    }
}

export class SubtensorModuleSudoSetMaxBurnCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'SubtensorModule.sudo_set_max_burn')
        this._chain = ctx._chain
        this.call = call
    }

    get isV120(): boolean {
        return this._chain.getCallHash('SubtensorModule.sudo_set_max_burn') === '37cc0d2c42c614f03309e33fdb86307a7138420b2c913633d6f383e7a6ce2f3c'
    }

    get asV120(): {netuid: number, maxBurn: bigint} {
        assert(this.isV120)
        return this._chain.decodeCall(this.call)
    }
}

export class SubtensorModuleSudoSetMaxDifficultyCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'SubtensorModule.sudo_set_max_difficulty')
        this._chain = ctx._chain
        this.call = call
    }

    get isV120(): boolean {
        return this._chain.getCallHash('SubtensorModule.sudo_set_max_difficulty') === '276d73aa43469687cc3c17cc61d11245c2fb8d329d52c66f5d3f48e57a897b83'
    }

    get asV120(): {netuid: number, maxDifficulty: bigint} {
        assert(this.isV120)
        return this._chain.decodeCall(this.call)
    }
}

export class SubtensorModuleSudoSetMaxRegistrationsPerBlockCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'SubtensorModule.sudo_set_max_registrations_per_block')
        this._chain = ctx._chain
        this.call = call
    }

    get isV120(): boolean {
        return this._chain.getCallHash('SubtensorModule.sudo_set_max_registrations_per_block') === 'c9d5759b2f60bea119d07df3189dcb84b6db658339af03521a6b325c1d5e9fe4'
    }

    get asV120(): {netuid: number, maxRegistrationsPerBlock: number} {
        assert(this.isV120)
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

    get isV120(): boolean {
        return this._chain.getCallHash('SubtensorModule.sudo_set_max_weight_limit') === '94e7b85f4003fbcf804798cfd3cdb0373123341f468413950420b929f7362190'
    }

    get asV120(): {netuid: number, maxWeightLimit: number} {
        assert(this.isV120)
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

    get isV120(): boolean {
        return this._chain.getCallHash('SubtensorModule.sudo_set_min_allowed_weights') === 'c2f88edf6374b0ceaa5a615ce8f9028c5e1c8728ce60fa4a0d076b5684c6d03f'
    }

    get asV120(): {netuid: number, minAllowedWeights: number} {
        assert(this.isV120)
        return this._chain.decodeCall(this.call)
    }
}

export class SubtensorModuleSudoSetMinBurnCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'SubtensorModule.sudo_set_min_burn')
        this._chain = ctx._chain
        this.call = call
    }

    get isV120(): boolean {
        return this._chain.getCallHash('SubtensorModule.sudo_set_min_burn') === '06a4b112ea3fd82a672095fa414119f026defb16580a2e482230f19d296b8ecd'
    }

    get asV120(): {netuid: number, minBurn: bigint} {
        assert(this.isV120)
        return this._chain.decodeCall(this.call)
    }
}

export class SubtensorModuleSudoSetMinDifficultyCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'SubtensorModule.sudo_set_min_difficulty')
        this._chain = ctx._chain
        this.call = call
    }

    get isV120(): boolean {
        return this._chain.getCallHash('SubtensorModule.sudo_set_min_difficulty') === 'be489bc10b131743878c592c40678e1b151848eaf4de95dd8d2eb0518a00a8bd'
    }

    get asV120(): {netuid: number, minDifficulty: bigint} {
        assert(this.isV120)
        return this._chain.decodeCall(this.call)
    }
}

export class SubtensorModuleSudoSetRaoRecycledCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'SubtensorModule.sudo_set_rao_recycled')
        this._chain = ctx._chain
        this.call = call
    }

    get isV120(): boolean {
        return this._chain.getCallHash('SubtensorModule.sudo_set_rao_recycled') === '14125802a9af5e5fee615b825b29c34fb27814a76ee7b579bf399ad9885c5567'
    }

    get asV120(): {netuid: number, raoRecycled: bigint} {
        assert(this.isV120)
        return this._chain.decodeCall(this.call)
    }
}

export class SubtensorModuleSudoSetRegistrationAllowedCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'SubtensorModule.sudo_set_registration_allowed')
        this._chain = ctx._chain
        this.call = call
    }

    get isV121(): boolean {
        return this._chain.getCallHash('SubtensorModule.sudo_set_registration_allowed') === '5c01d4ba8730da4b42647742e1cadaf7057fd3b2b4156f4143d022b1f449fd2d'
    }

    get asV121(): {netuid: number, registrationAllowed: boolean} {
        assert(this.isV121)
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

    get isV120(): boolean {
        return this._chain.getCallHash('SubtensorModule.sudo_set_rho') === '605e41ecd13283c29f8dd03446a0a5c27e532dd6836ed08f179ea693a1218576'
    }

    get asV120(): {netuid: number, rho: number} {
        assert(this.isV120)
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

    get isV120(): boolean {
        return this._chain.getCallHash('SubtensorModule.sudo_set_scaling_law_power') === '44f46395a5c5221c2200ba6df3480a10086d767d69306a603f90c7138d8e0c04'
    }

    get asV120(): {netuid: number, scalingLawPower: number} {
        assert(this.isV120)
        return this._chain.decodeCall(this.call)
    }
}

export class SubtensorModuleSudoSetServingRateLimitCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'SubtensorModule.sudo_set_serving_rate_limit')
        this._chain = ctx._chain
        this.call = call
    }

    get isV120(): boolean {
        return this._chain.getCallHash('SubtensorModule.sudo_set_serving_rate_limit') === '41dec50b060e8036bcc94ccd60a2dfcc83df902e6d5487087c67147a5cbfc8f3'
    }

    get asV120(): {netuid: number, servingRateLimit: bigint} {
        assert(this.isV120)
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

    get isV120(): boolean {
        return this._chain.getCallHash('SubtensorModule.sudo_set_synergy_scaling_law_power') === '5486447fb8d1d9640de4ed2ce47d5c8e66e003927dde8d1110bb67545f71031a'
    }

    get asV120(): {netuid: number, synergyScalingLawPower: number} {
        assert(this.isV120)
        return this._chain.decodeCall(this.call)
    }
}

export class SubtensorModuleSudoSetTargetRegistrationsPerIntervalCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'SubtensorModule.sudo_set_target_registrations_per_interval')
        this._chain = ctx._chain
        this.call = call
    }

    get isV120(): boolean {
        return this._chain.getCallHash('SubtensorModule.sudo_set_target_registrations_per_interval') === 'd40899d7beee4a716e8e254785729bf9b86b048aba5a7d61d876efc20bacda1b'
    }

    get asV120(): {netuid: number, targetRegistrationsPerInterval: number} {
        assert(this.isV120)
        return this._chain.decodeCall(this.call)
    }
}

export class SubtensorModuleSudoSetTempoCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'SubtensorModule.sudo_set_tempo')
        this._chain = ctx._chain
        this.call = call
    }

    get isV121(): boolean {
        return this._chain.getCallHash('SubtensorModule.sudo_set_tempo') === '1cc1a50c9511ad0b79e3700d75abb7feef687c4c14254ec52a0010998e3d500d'
    }

    get asV121(): {netuid: number, tempo: number} {
        assert(this.isV121)
        return this._chain.decodeCall(this.call)
    }
}

export class SubtensorModuleSudoSetTotalIssuanceCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'SubtensorModule.sudo_set_total_issuance')
        this._chain = ctx._chain
        this.call = call
    }

    get isV120(): boolean {
        return this._chain.getCallHash('SubtensorModule.sudo_set_total_issuance') === 'afbca5ef77b8f5f30043e46bcdf9c7079edeead56bc4e7c4c9b499f1ba8137b0'
    }

    get asV120(): {totalIssuance: bigint} {
        assert(this.isV120)
        return this._chain.decodeCall(this.call)
    }
}

export class SubtensorModuleSudoSetTxRateLimitCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'SubtensorModule.sudo_set_tx_rate_limit')
        this._chain = ctx._chain
        this.call = call
    }

    get isV120(): boolean {
        return this._chain.getCallHash('SubtensorModule.sudo_set_tx_rate_limit') === 'f04b2959f02d1ebf6c4b8248f68449fbfc2ac7aef6091f9d3e4ab3397d9d362d'
    }

    get asV120(): {txRateLimit: bigint} {
        assert(this.isV120)
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

    get isV120(): boolean {
        return this._chain.getCallHash('SubtensorModule.sudo_set_validator_batch_size') === '3cf1b9a4b14bfdb5ef1867bc7f8769ff11813e2407a4f10c072c137f8e41e41a'
    }

    get asV120(): {netuid: number, validatorBatchSize: number} {
        assert(this.isV120)
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

    get isV120(): boolean {
        return this._chain.getCallHash('SubtensorModule.sudo_set_validator_epoch_len') === '9e42b5d14ba2af3852f7f18d477ffb2cdd955a9edd0d1a51530d2b582fe1fbc3'
    }

    get asV120(): {netuid: number, validatorEpochLength: number} {
        assert(this.isV120)
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

    get isV120(): boolean {
        return this._chain.getCallHash('SubtensorModule.sudo_set_validator_epochs_per_reset') === 'ea9e4f321ebe84a5fb325b1a4b5bcf60de97ba3e10bd76da4f44f3df31b7edcb'
    }

    get asV120(): {netuid: number, validatorEpochsPerReset: number} {
        assert(this.isV120)
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

    get isV120(): boolean {
        return this._chain.getCallHash('SubtensorModule.sudo_set_validator_exclude_quantile') === '70af7e65047049b284a79fc26d66a7fa6acafd1284907d048ae52ab4e39ab2c1'
    }

    get asV120(): {netuid: number, validatorExcludeQuantile: number} {
        assert(this.isV120)
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

    get isV120(): boolean {
        return this._chain.getCallHash('SubtensorModule.sudo_set_validator_logits_divergence') === 'bf39f2f8747a7b001a2ad5851558cd48f20010ccf602c559b1f4790a80e20b68'
    }

    get asV120(): {netuid: number, validatorLogitsDivergence: number} {
        assert(this.isV120)
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

    get isV120(): boolean {
        return this._chain.getCallHash('SubtensorModule.sudo_set_validator_prune_len') === '18a4ed45c367878e75f830397b6cb922adf47262b3c37c54ab1c2013523d8fe8'
    }

    get asV120(): {netuid: number, validatorPruneLen: bigint} {
        assert(this.isV120)
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

    get isV120(): boolean {
        return this._chain.getCallHash('SubtensorModule.sudo_set_validator_sequence_length') === 'e69844df3b1cf4b6b2d8ec54f5a9cc974a0a55bcf6902d9bd570d60c0fe16cab'
    }

    get asV120(): {netuid: number, validatorSequenceLength: number} {
        assert(this.isV120)
        return this._chain.decodeCall(this.call)
    }
}

export class SubtensorModuleSudoSetWeightsSetRateLimitCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'SubtensorModule.sudo_set_weights_set_rate_limit')
        this._chain = ctx._chain
        this.call = call
    }

    get isV120(): boolean {
        return this._chain.getCallHash('SubtensorModule.sudo_set_weights_set_rate_limit') === 'cd9c4d9cf6e96fc89183a818b5bcffd00c0af1a7e45892e64bb532e5252a2dd1'
    }

    get asV120(): {netuid: number, weightsSetRateLimit: bigint} {
        assert(this.isV120)
        return this._chain.decodeCall(this.call)
    }
}

export class SubtensorModuleSudoSetWeightsVersionKeyCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'SubtensorModule.sudo_set_weights_version_key')
        this._chain = ctx._chain
        this.call = call
    }

    get isV120(): boolean {
        return this._chain.getCallHash('SubtensorModule.sudo_set_weights_version_key') === '95481461f429e9b7836a4b44523bb5bc296a76a64baf4f60094dfb9f36305659'
    }

    get asV120(): {netuid: number, weightsVersionKey: bigint} {
        assert(this.isV120)
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
     * Authenticates the current sudo key and sets the given AccountId (`new`) as the new sudo
     * key.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * ## Complexity
     * - O(1).
     */
    get isV120(): boolean {
        return this._chain.getCallHash('Sudo.set_key') === 'e634aac3331d47a56ff572c52ad90a648769dfbf2c00d7bd44498b4ee41f6ac7'
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
    get asV120(): {new: v120.MultiAddress} {
        assert(this.isV120)
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
     * Authenticates the sudo key and dispatches a function call with `Root` origin.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * ## Complexity
     * - O(1).
     */
    get isV120(): boolean {
        return this._chain.getCallHash('Sudo.sudo') === '6dad091a6255d3737ce82bb2df32cd60b180d60744a4c890e91b1bfc7f8b12ba'
    }

    /**
     * Authenticates the sudo key and dispatches a function call with `Root` origin.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * ## Complexity
     * - O(1).
     */
    get asV120(): {call: v120.Call} {
        assert(this.isV120)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Authenticates the sudo key and dispatches a function call with `Root` origin.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * ## Complexity
     * - O(1).
     */
    get isV121(): boolean {
        return this._chain.getCallHash('Sudo.sudo') === 'e3547cb5094a855fb98994b6f8f2b98d28300573ec08cd2ed569643a2090fbea'
    }

    /**
     * Authenticates the sudo key and dispatches a function call with `Root` origin.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * ## Complexity
     * - O(1).
     */
    get asV121(): {call: v121.Call} {
        assert(this.isV121)
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
     * Authenticates the sudo key and dispatches a function call with `Signed` origin from
     * a given account.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * ## Complexity
     * - O(1).
     */
    get isV120(): boolean {
        return this._chain.getCallHash('Sudo.sudo_as') === '872078eb40c825ea4b7ff83e2aeb6aca49e060a7ac88a0ed676cfdc82b615b98'
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
    get asV120(): {who: v120.MultiAddress, call: v120.Call} {
        assert(this.isV120)
        return this._chain.decodeCall(this.call)
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
    get isV121(): boolean {
        return this._chain.getCallHash('Sudo.sudo_as') === '478b96638a9896d1f946552042a654e7419d3ba83404641e3c773f24507fa483'
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
    get asV121(): {who: v121.MultiAddress, call: v121.Call} {
        assert(this.isV121)
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
     * Authenticates the sudo key and dispatches a function call with `Root` origin.
     * This function does not check the weight of the call, and instead allows the
     * Sudo user to specify the weight of the call.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * ## Complexity
     * - O(1).
     */
    get isV120(): boolean {
        return this._chain.getCallHash('Sudo.sudo_unchecked_weight') === '8ca96f433e8fcd0cc4e82bf68b17dde8169eaa72b3f9f30998f71b0a034ebb74'
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
    get asV120(): {call: v120.Call, weight: v120.Weight} {
        assert(this.isV120)
        return this._chain.decodeCall(this.call)
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
    get isV121(): boolean {
        return this._chain.getCallHash('Sudo.sudo_unchecked_weight') === '918b4df581a945149bb5ac0569700028f25d3cdebd25f828938da5b3c972f515'
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
    get asV121(): {call: v121.Call, weight: v121.Weight} {
        assert(this.isV121)
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
     * Kill all storage items with a key that starts with the given prefix.
     * 
     * **NOTE:** We rely on the Root origin to provide us the number of subkeys under
     * the prefix we are removing to accurately calculate the weight of this function.
     */
    get isV120(): boolean {
        return this._chain.getCallHash('System.kill_prefix') === 'dfbadd42bee8b18fc81cf78683511061181cffbf7a8ebfd3e5719c389b373d93'
    }

    /**
     * Kill all storage items with a key that starts with the given prefix.
     * 
     * **NOTE:** We rely on the Root origin to provide us the number of subkeys under
     * the prefix we are removing to accurately calculate the weight of this function.
     */
    get asV120(): {prefix: Uint8Array, subkeys: number} {
        assert(this.isV120)
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
     * Kill some items from storage.
     */
    get isV120(): boolean {
        return this._chain.getCallHash('System.kill_storage') === 'eac21dc14e927c003d9c634fb019d04128f71f8529d2914b10a56b85289c2c11'
    }

    /**
     * Kill some items from storage.
     */
    get asV120(): {keys: Uint8Array[]} {
        assert(this.isV120)
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
     * Make some on-chain remark.
     * 
     * ## Complexity
     * - `O(1)`
     */
    get isV120(): boolean {
        return this._chain.getCallHash('System.remark') === 'f4e9b5b7572eeae92978087ece9b4f57cb5cab4f16baf5625bb9ec4a432bad63'
    }

    /**
     * Make some on-chain remark.
     * 
     * ## Complexity
     * - `O(1)`
     */
    get asV120(): {remark: Uint8Array} {
        assert(this.isV120)
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
     * Make some on-chain remark and emit event.
     */
    get isV120(): boolean {
        return this._chain.getCallHash('System.remark_with_event') === 'f4e9b5b7572eeae92978087ece9b4f57cb5cab4f16baf5625bb9ec4a432bad63'
    }

    /**
     * Make some on-chain remark and emit event.
     */
    get asV120(): {remark: Uint8Array} {
        assert(this.isV120)
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
     * Set the new runtime code.
     * 
     * ## Complexity
     * - `O(C + S)` where `C` length of `code` and `S` complexity of `can_set_code`
     */
    get isV120(): boolean {
        return this._chain.getCallHash('System.set_code') === '7bf3d4785d9be7a4872f39cbd3702a66e16f7ee01e4446fb4a05624dc0ec4c93'
    }

    /**
     * Set the new runtime code.
     * 
     * ## Complexity
     * - `O(C + S)` where `C` length of `code` and `S` complexity of `can_set_code`
     */
    get asV120(): {code: Uint8Array} {
        assert(this.isV120)
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
     * Set the new runtime code without doing any checks of the given `code`.
     * 
     * ## Complexity
     * - `O(C)` where `C` length of `code`
     */
    get isV120(): boolean {
        return this._chain.getCallHash('System.set_code_without_checks') === '7bf3d4785d9be7a4872f39cbd3702a66e16f7ee01e4446fb4a05624dc0ec4c93'
    }

    /**
     * Set the new runtime code without doing any checks of the given `code`.
     * 
     * ## Complexity
     * - `O(C)` where `C` length of `code`
     */
    get asV120(): {code: Uint8Array} {
        assert(this.isV120)
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
     * Set the number of pages in the WebAssembly environment's heap.
     */
    get isV120(): boolean {
        return this._chain.getCallHash('System.set_heap_pages') === '130172e47c5e517627712b4d084768b98489d920284223ea8ef9c462339b5808'
    }

    /**
     * Set the number of pages in the WebAssembly environment's heap.
     */
    get asV120(): {pages: bigint} {
        assert(this.isV120)
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
     * Set some items of storage.
     */
    get isV120(): boolean {
        return this._chain.getCallHash('System.set_storage') === 'a4fb507615d69849afb1b2ee654006f9be48bb6e960a4674624d6e46e4382083'
    }

    /**
     * Set some items of storage.
     */
    get asV120(): {items: [Uint8Array, Uint8Array][]} {
        assert(this.isV120)
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
    get isV120(): boolean {
        return this._chain.getCallHash('Timestamp.set') === '6a8b8ba2be107f0853b674eec0026cc440b314db44d0e2c59b36e353355aed14'
    }

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
    get asV120(): {now: bigint} {
        assert(this.isV120)
        return this._chain.decodeCall(this.call)
    }
}

export class UtilityAsDerivativeCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Utility.as_derivative')
        this._chain = ctx._chain
        this.call = call
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
    get isV120(): boolean {
        return this._chain.getCallHash('Utility.as_derivative') === '0e108692ce7e81cad0808ec842eb18c8801e15a8e1ab1207f9b484933397128b'
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
    get asV120(): {index: number, call: v120.Call} {
        assert(this.isV120)
        return this._chain.decodeCall(this.call)
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
    get isV121(): boolean {
        return this._chain.getCallHash('Utility.as_derivative') === '018901fb75df5bf0e9e43c9cc948c846db53ed0eee5fa1e71912a212714ec510'
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
    get asV121(): {index: number, call: v121.Call} {
        assert(this.isV121)
        return this._chain.decodeCall(this.call)
    }
}

export class UtilityBatchCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Utility.batch')
        this._chain = ctx._chain
        this.call = call
    }

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
    get isV120(): boolean {
        return this._chain.getCallHash('Utility.batch') === 'af518d17dccb6678c5f106a0675da18d8c51e61f810464133a867cd7a4f3a1ba'
    }

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
    get asV120(): {calls: v120.Call[]} {
        assert(this.isV120)
        return this._chain.decodeCall(this.call)
    }

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
    get isV121(): boolean {
        return this._chain.getCallHash('Utility.batch') === 'b8847cab54431c8c3a476d973795b5a34df9772078a7888a753bb6a99d1a4b45'
    }

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
    get asV121(): {calls: v121.Call[]} {
        assert(this.isV121)
        return this._chain.decodeCall(this.call)
    }
}

export class UtilityBatchAllCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Utility.batch_all')
        this._chain = ctx._chain
        this.call = call
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
    get isV120(): boolean {
        return this._chain.getCallHash('Utility.batch_all') === 'af518d17dccb6678c5f106a0675da18d8c51e61f810464133a867cd7a4f3a1ba'
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
    get asV120(): {calls: v120.Call[]} {
        assert(this.isV120)
        return this._chain.decodeCall(this.call)
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
    get isV121(): boolean {
        return this._chain.getCallHash('Utility.batch_all') === 'b8847cab54431c8c3a476d973795b5a34df9772078a7888a753bb6a99d1a4b45'
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
    get asV121(): {calls: v121.Call[]} {
        assert(this.isV121)
        return this._chain.decodeCall(this.call)
    }
}

export class UtilityDispatchAsCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Utility.dispatch_as')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Dispatches a function call with a provided origin.
     * 
     * The dispatch origin for this call must be _Root_.
     * 
     * ## Complexity
     * - O(1).
     */
    get isV120(): boolean {
        return this._chain.getCallHash('Utility.dispatch_as') === 'ccbb2ad3593bcadd5147d008d2665088faff2f241b22084601d835adf485c634'
    }

    /**
     * Dispatches a function call with a provided origin.
     * 
     * The dispatch origin for this call must be _Root_.
     * 
     * ## Complexity
     * - O(1).
     */
    get asV120(): {asOrigin: v120.OriginCaller, call: v120.Call} {
        assert(this.isV120)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Dispatches a function call with a provided origin.
     * 
     * The dispatch origin for this call must be _Root_.
     * 
     * ## Complexity
     * - O(1).
     */
    get isV121(): boolean {
        return this._chain.getCallHash('Utility.dispatch_as') === '256b83a543c9b93ac7a596ffc8b5e303d931724a6debbeb6a95fb235c5c30612'
    }

    /**
     * Dispatches a function call with a provided origin.
     * 
     * The dispatch origin for this call must be _Root_.
     * 
     * ## Complexity
     * - O(1).
     */
    get asV121(): {asOrigin: v121.OriginCaller, call: v121.Call} {
        assert(this.isV121)
        return this._chain.decodeCall(this.call)
    }
}

export class UtilityForceBatchCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Utility.force_batch')
        this._chain = ctx._chain
        this.call = call
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
    get isV120(): boolean {
        return this._chain.getCallHash('Utility.force_batch') === 'af518d17dccb6678c5f106a0675da18d8c51e61f810464133a867cd7a4f3a1ba'
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
    get asV120(): {calls: v120.Call[]} {
        assert(this.isV120)
        return this._chain.decodeCall(this.call)
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
    get isV121(): boolean {
        return this._chain.getCallHash('Utility.force_batch') === 'b8847cab54431c8c3a476d973795b5a34df9772078a7888a753bb6a99d1a4b45'
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
    get asV121(): {calls: v121.Call[]} {
        assert(this.isV121)
        return this._chain.decodeCall(this.call)
    }
}

export class UtilityWithWeightCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Utility.with_weight')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Dispatch a function call with a specified weight.
     * 
     * This function does not check the weight of the call, and instead allows the
     * Root origin to specify the weight of the call.
     * 
     * The dispatch origin for this call must be _Root_.
     */
    get isV120(): boolean {
        return this._chain.getCallHash('Utility.with_weight') === '8ca96f433e8fcd0cc4e82bf68b17dde8169eaa72b3f9f30998f71b0a034ebb74'
    }

    /**
     * Dispatch a function call with a specified weight.
     * 
     * This function does not check the weight of the call, and instead allows the
     * Root origin to specify the weight of the call.
     * 
     * The dispatch origin for this call must be _Root_.
     */
    get asV120(): {call: v120.Call, weight: v120.Weight} {
        assert(this.isV120)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Dispatch a function call with a specified weight.
     * 
     * This function does not check the weight of the call, and instead allows the
     * Root origin to specify the weight of the call.
     * 
     * The dispatch origin for this call must be _Root_.
     */
    get isV121(): boolean {
        return this._chain.getCallHash('Utility.with_weight') === '918b4df581a945149bb5ac0569700028f25d3cdebd25f828938da5b3c972f515'
    }

    /**
     * Dispatch a function call with a specified weight.
     * 
     * This function does not check the weight of the call, and instead allows the
     * Root origin to specify the weight of the call.
     * 
     * The dispatch origin for this call must be _Root_.
     */
    get asV121(): {call: v121.Call, weight: v121.Weight} {
        assert(this.isV121)
        return this._chain.decodeCall(this.call)
    }
}
