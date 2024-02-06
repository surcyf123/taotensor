import assert from 'assert'
import {Chain, ChainContext, EventContext, Event, Result, Option} from './support'
import * as v100 from './v100'
import * as v102 from './v102'

export class BalancesBalanceSetEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Balances.BalanceSet')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  A balance was set by root. \[who, free, reserved\]
     */
    get isV100(): boolean {
        return this._chain.getEventHash('Balances.BalanceSet') === '0f263bfdefa394edfb38d20d33662423a2e0902235b599f9b2b0292f157f0902'
    }

    /**
     *  A balance was set by root. \[who, free, reserved\]
     */
    get asV100(): [Uint8Array, bigint, bigint] {
        assert(this.isV100)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A balance was set by root.
     */
    get isV102(): boolean {
        return this._chain.getEventHash('Balances.BalanceSet') === '1e2b5d5a07046e6d6e5507661d3f3feaddfb41fc609a2336b24957322080ca77'
    }

    /**
     * A balance was set by root.
     */
    get asV102(): {who: Uint8Array, free: bigint, reserved: bigint} {
        assert(this.isV102)
        return this._chain.decodeEvent(this.event)
    }
}

export class BalancesDepositEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Balances.Deposit')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  Some amount was deposited (e.g. for transaction fees). \[who, deposit\]
     */
    get isV100(): boolean {
        return this._chain.getEventHash('Balances.Deposit') === '23bebce4ca9ed37548947d07d4dc50e772f07401b9a416b6aa2f3e9cb5adcaf4'
    }

    /**
     *  Some amount was deposited (e.g. for transaction fees). \[who, deposit\]
     */
    get asV100(): [Uint8Array, bigint] {
        assert(this.isV100)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Some amount was deposited (e.g. for transaction fees).
     */
    get isV102(): boolean {
        return this._chain.getEventHash('Balances.Deposit') === 'e84a34a6a3d577b31f16557bd304282f4fe4cbd7115377f4687635dc48e52ba5'
    }

    /**
     * Some amount was deposited (e.g. for transaction fees).
     */
    get asV102(): {who: Uint8Array, amount: bigint} {
        assert(this.isV102)
        return this._chain.decodeEvent(this.event)
    }
}

export class BalancesDustLostEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Balances.DustLost')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  An account was removed whose balance was non-zero but below ExistentialDeposit,
     *  resulting in an outright loss. \[account, balance\]
     */
    get isV100(): boolean {
        return this._chain.getEventHash('Balances.DustLost') === '23bebce4ca9ed37548947d07d4dc50e772f07401b9a416b6aa2f3e9cb5adcaf4'
    }

    /**
     *  An account was removed whose balance was non-zero but below ExistentialDeposit,
     *  resulting in an outright loss. \[account, balance\]
     */
    get asV100(): [Uint8Array, bigint] {
        assert(this.isV100)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * An account was removed whose balance was non-zero but below ExistentialDeposit,
     * resulting in an outright loss.
     */
    get isV102(): boolean {
        return this._chain.getEventHash('Balances.DustLost') === '504f155afb2789c50df19d1f747fb2dc0e99bf8b7623c30bdb5cf82029fec760'
    }

    /**
     * An account was removed whose balance was non-zero but below ExistentialDeposit,
     * resulting in an outright loss.
     */
    get asV102(): {account: Uint8Array, amount: bigint} {
        assert(this.isV102)
        return this._chain.decodeEvent(this.event)
    }
}

export class BalancesEndowedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Balances.Endowed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  An account was created with some free balance. \[account, free_balance\]
     */
    get isV100(): boolean {
        return this._chain.getEventHash('Balances.Endowed') === '23bebce4ca9ed37548947d07d4dc50e772f07401b9a416b6aa2f3e9cb5adcaf4'
    }

    /**
     *  An account was created with some free balance. \[account, free_balance\]
     */
    get asV100(): [Uint8Array, bigint] {
        assert(this.isV100)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * An account was created with some free balance.
     */
    get isV102(): boolean {
        return this._chain.getEventHash('Balances.Endowed') === '75951f685df19cbb5fdda09cf928a105518ceca9576d95bd18d4fac8802730ca'
    }

    /**
     * An account was created with some free balance.
     */
    get asV102(): {account: Uint8Array, freeBalance: bigint} {
        assert(this.isV102)
        return this._chain.decodeEvent(this.event)
    }
}

export class BalancesReserveRepatriatedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Balances.ReserveRepatriated')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  Some balance was moved from the reserve of the first account to the second account.
     *  Final argument indicates the destination balance type.
     *  \[from, to, balance, destination_status\]
     */
    get isV100(): boolean {
        return this._chain.getEventHash('Balances.ReserveRepatriated') === '68e9ec5664c8ffe977da0c890bac43122a5cf13565c1c936e2120ba4980bcf31'
    }

    /**
     *  Some balance was moved from the reserve of the first account to the second account.
     *  Final argument indicates the destination balance type.
     *  \[from, to, balance, destination_status\]
     */
    get asV100(): [Uint8Array, Uint8Array, bigint, v100.BalanceStatus] {
        assert(this.isV100)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Some balance was moved from the reserve of the first account to the second account.
     * Final argument indicates the destination balance type.
     */
    get isV102(): boolean {
        return this._chain.getEventHash('Balances.ReserveRepatriated') === '6232d50d422cea3a6fd21da36387df36d1d366405d0c589566c6de85c9cf541f'
    }

    /**
     * Some balance was moved from the reserve of the first account to the second account.
     * Final argument indicates the destination balance type.
     */
    get asV102(): {from: Uint8Array, to: Uint8Array, amount: bigint, destinationStatus: v102.BalanceStatus} {
        assert(this.isV102)
        return this._chain.decodeEvent(this.event)
    }
}

export class BalancesReservedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Balances.Reserved')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  Some balance was reserved (moved from free to reserved). \[who, value\]
     */
    get isV100(): boolean {
        return this._chain.getEventHash('Balances.Reserved') === '23bebce4ca9ed37548947d07d4dc50e772f07401b9a416b6aa2f3e9cb5adcaf4'
    }

    /**
     *  Some balance was reserved (moved from free to reserved). \[who, value\]
     */
    get asV100(): [Uint8Array, bigint] {
        assert(this.isV100)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Some balance was reserved (moved from free to reserved).
     */
    get isV102(): boolean {
        return this._chain.getEventHash('Balances.Reserved') === 'e84a34a6a3d577b31f16557bd304282f4fe4cbd7115377f4687635dc48e52ba5'
    }

    /**
     * Some balance was reserved (moved from free to reserved).
     */
    get asV102(): {who: Uint8Array, amount: bigint} {
        assert(this.isV102)
        return this._chain.decodeEvent(this.event)
    }
}

export class BalancesSlashedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Balances.Slashed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Some amount was removed from the account (e.g. for misbehavior).
     */
    get isV102(): boolean {
        return this._chain.getEventHash('Balances.Slashed') === 'e84a34a6a3d577b31f16557bd304282f4fe4cbd7115377f4687635dc48e52ba5'
    }

    /**
     * Some amount was removed from the account (e.g. for misbehavior).
     */
    get asV102(): {who: Uint8Array, amount: bigint} {
        assert(this.isV102)
        return this._chain.decodeEvent(this.event)
    }
}

export class BalancesTransferEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Balances.Transfer')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  Transfer succeeded. \[from, to, value\]
     */
    get isV100(): boolean {
        return this._chain.getEventHash('Balances.Transfer') === 'dad2bcdca357505fa3c7832085d0db53ce6f902bd9f5b52823ee8791d351872c'
    }

    /**
     *  Transfer succeeded. \[from, to, value\]
     */
    get asV100(): [Uint8Array, Uint8Array, bigint] {
        assert(this.isV100)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Transfer succeeded.
     */
    get isV102(): boolean {
        return this._chain.getEventHash('Balances.Transfer') === '0ffdf35c495114c2d42a8bf6c241483fd5334ca0198662e14480ad040f1e3a66'
    }

    /**
     * Transfer succeeded.
     */
    get asV102(): {from: Uint8Array, to: Uint8Array, amount: bigint} {
        assert(this.isV102)
        return this._chain.decodeEvent(this.event)
    }
}

export class BalancesUnreservedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Balances.Unreserved')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  Some balance was unreserved (moved from reserved to free). \[who, value\]
     */
    get isV100(): boolean {
        return this._chain.getEventHash('Balances.Unreserved') === '23bebce4ca9ed37548947d07d4dc50e772f07401b9a416b6aa2f3e9cb5adcaf4'
    }

    /**
     *  Some balance was unreserved (moved from reserved to free). \[who, value\]
     */
    get asV100(): [Uint8Array, bigint] {
        assert(this.isV100)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Some balance was unreserved (moved from reserved to free).
     */
    get isV102(): boolean {
        return this._chain.getEventHash('Balances.Unreserved') === 'e84a34a6a3d577b31f16557bd304282f4fe4cbd7115377f4687635dc48e52ba5'
    }

    /**
     * Some balance was unreserved (moved from reserved to free).
     */
    get asV102(): {who: Uint8Array, amount: bigint} {
        assert(this.isV102)
        return this._chain.decodeEvent(this.event)
    }
}

export class BalancesWithdrawEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Balances.Withdraw')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Some amount was withdrawn from the account (e.g. for transaction fees).
     */
    get isV102(): boolean {
        return this._chain.getEventHash('Balances.Withdraw') === 'e84a34a6a3d577b31f16557bd304282f4fe4cbd7115377f4687635dc48e52ba5'
    }

    /**
     * Some amount was withdrawn from the account (e.g. for transaction fees).
     */
    get asV102(): {who: Uint8Array, amount: bigint} {
        assert(this.isV102)
        return this._chain.decodeEvent(this.event)
    }
}

export class GrandpaNewAuthoritiesEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Grandpa.NewAuthorities')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  New authority set has been applied. \[authority_set\]
     */
    get isV100(): boolean {
        return this._chain.getEventHash('Grandpa.NewAuthorities') === 'a1a8c88e19b8fedde4aab1bef41aa9e1bdfc3748b1e39f7ad5bb09d0347d9505'
    }

    /**
     *  New authority set has been applied. \[authority_set\]
     */
    get asV100(): [Uint8Array, bigint][] {
        assert(this.isV100)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * New authority set has been applied.
     */
    get isV102(): boolean {
        return this._chain.getEventHash('Grandpa.NewAuthorities') === 'e25505d283e6b21359efad4ea3b01da035cbbe2b268fd3cbfb12ca0b5577a9de'
    }

    /**
     * New authority set has been applied.
     */
    get asV102(): {authoritySet: [Uint8Array, bigint][]} {
        assert(this.isV102)
        return this._chain.decodeEvent(this.event)
    }
}

export class GrandpaPausedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Grandpa.Paused')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  Current authority set has been paused.
     */
    get isV100(): boolean {
        return this._chain.getEventHash('Grandpa.Paused') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     *  Current authority set has been paused.
     */
    get asV100(): null {
        assert(this.isV100)
        return this._chain.decodeEvent(this.event)
    }
}

export class GrandpaResumedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Grandpa.Resumed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  Current authority set has been resumed.
     */
    get isV100(): boolean {
        return this._chain.getEventHash('Grandpa.Resumed') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     *  Current authority set has been resumed.
     */
    get asV100(): null {
        assert(this.isV100)
        return this._chain.decodeEvent(this.event)
    }
}

export class SubtensorModuleActivityCuttoffSetEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'SubtensorModule.ActivityCuttoffSet')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  --- Event created when the activity cuttoff has been set.
     */
    get isV105(): boolean {
        return this._chain.getEventHash('SubtensorModule.ActivityCuttoffSet') === '0e1caef0df80727d2768bc480792261a4e7615b57b3e8182c7f664f06c96a08e'
    }

    /**
     *  --- Event created when the activity cuttoff has been set.
     */
    get asV105(): bigint {
        assert(this.isV105)
        return this._chain.decodeEvent(this.event)
    }
}

export class SubtensorModuleAdjustmentIntervalSetEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'SubtensorModule.AdjustmentIntervalSet')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  --- Event created when the difficulty adjustment interval has been set.
     */
    get isV105(): boolean {
        return this._chain.getEventHash('SubtensorModule.AdjustmentIntervalSet') === '0e1caef0df80727d2768bc480792261a4e7615b57b3e8182c7f664f06c96a08e'
    }

    /**
     *  --- Event created when the difficulty adjustment interval has been set.
     */
    get asV105(): bigint {
        assert(this.isV105)
        return this._chain.decodeEvent(this.event)
    }
}

export class SubtensorModuleAxonServedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'SubtensorModule.AxonServed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  --- Event created when the axon server information is added to the network.
     */
    get isV100(): boolean {
        return this._chain.getEventHash('SubtensorModule.AxonServed') === '0a0f30b1ade5af5fade6413c605719d59be71340cf4884f65ee9858eb1c38f6c'
    }

    /**
     *  --- Event created when the axon server information is added to the network.
     */
    get asV100(): number {
        assert(this.isV100)
        return this._chain.decodeEvent(this.event)
    }
}

export class SubtensorModuleBlocksPerStepSetEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'SubtensorModule.BlocksPerStepSet')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  --- Event created when default blocks per step has been set.
     */
    get isV105(): boolean {
        return this._chain.getEventHash('SubtensorModule.BlocksPerStepSet') === '0e1caef0df80727d2768bc480792261a4e7615b57b3e8182c7f664f06c96a08e'
    }

    /**
     *  --- Event created when default blocks per step has been set.
     */
    get asV105(): bigint {
        assert(this.isV105)
        return this._chain.decodeEvent(this.event)
    }
}

export class SubtensorModuleBondsMovingAverageSetEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'SubtensorModule.BondsMovingAverageSet')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  --- Event created when bonds moving average set.
     */
    get isV117(): boolean {
        return this._chain.getEventHash('SubtensorModule.BondsMovingAverageSet') === '0e1caef0df80727d2768bc480792261a4e7615b57b3e8182c7f664f06c96a08e'
    }

    /**
     *  --- Event created when bonds moving average set.
     */
    get asV117(): bigint {
        assert(this.isV117)
        return this._chain.decodeEvent(this.event)
    }
}

export class SubtensorModuleDifficultySetEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'SubtensorModule.DifficultySet')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  --- Event created when the difficulty has been set.
     */
    get isV105(): boolean {
        return this._chain.getEventHash('SubtensorModule.DifficultySet') === '0e1caef0df80727d2768bc480792261a4e7615b57b3e8182c7f664f06c96a08e'
    }

    /**
     *  --- Event created when the difficulty has been set.
     */
    get asV105(): bigint {
        assert(this.isV105)
        return this._chain.decodeEvent(this.event)
    }
}

export class SubtensorModuleFoundationAccountSetEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'SubtensorModule.FoundationAccountSet')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  --- Event created when the foundation account has been set.
     */
    get isV117(): boolean {
        return this._chain.getEventHash('SubtensorModule.FoundationAccountSet') === '21ea0c8f2488eafafdea1de92b54cd17d8b1caff525e37616abf0ff93f11531d'
    }

    /**
     *  --- Event created when the foundation account has been set.
     */
    get asV117(): Uint8Array {
        assert(this.isV117)
        return this._chain.decodeEvent(this.event)
    }
}

export class SubtensorModuleFoundationDistributionSetEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'SubtensorModule.FoundationDistributionSet')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  --- Event created when the foundation distribution has been set.
     */
    get isV117(): boolean {
        return this._chain.getEventHash('SubtensorModule.FoundationDistributionSet') === '0e1caef0df80727d2768bc480792261a4e7615b57b3e8182c7f664f06c96a08e'
    }

    /**
     *  --- Event created when the foundation distribution has been set.
     */
    get asV117(): bigint {
        assert(this.isV117)
        return this._chain.decodeEvent(this.event)
    }
}

export class SubtensorModuleImmunityPeriodSetEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'SubtensorModule.ImmunityPeriodSet')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  --- Event created when the immunity period has been set.
     */
    get isV107(): boolean {
        return this._chain.getEventHash('SubtensorModule.ImmunityPeriodSet') === '0e1caef0df80727d2768bc480792261a4e7615b57b3e8182c7f664f06c96a08e'
    }

    /**
     *  --- Event created when the immunity period has been set.
     */
    get asV107(): bigint {
        assert(this.isV107)
        return this._chain.decodeEvent(this.event)
    }
}

export class SubtensorModuleIncentivePruningDenominatorSetEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'SubtensorModule.IncentivePruningDenominatorSet')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  --- Event created when the incentive pruning denominator has been set.
     */
    get isV117(): boolean {
        return this._chain.getEventHash('SubtensorModule.IncentivePruningDenominatorSet') === '0e1caef0df80727d2768bc480792261a4e7615b57b3e8182c7f664f06c96a08e'
    }

    /**
     *  --- Event created when the incentive pruning denominator has been set.
     */
    get asV117(): bigint {
        assert(this.isV117)
        return this._chain.decodeEvent(this.event)
    }
}

export class SubtensorModuleKappaSetEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'SubtensorModule.KappaSet')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  --- Event created when mechanism kappa has been set.
     */
    get isV107(): boolean {
        return this._chain.getEventHash('SubtensorModule.KappaSet') === '0e1caef0df80727d2768bc480792261a4e7615b57b3e8182c7f664f06c96a08e'
    }

    /**
     *  --- Event created when mechanism kappa has been set.
     */
    get asV107(): bigint {
        assert(this.isV107)
        return this._chain.decodeEvent(this.event)
    }
}

export class SubtensorModuleMaxAllowedMaxMinRatioSetEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'SubtensorModule.MaxAllowedMaxMinRatioSet')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  --- Event created when the max allowed max min ration has been set.
     */
    get isV117(): boolean {
        return this._chain.getEventHash('SubtensorModule.MaxAllowedMaxMinRatioSet') === '0e1caef0df80727d2768bc480792261a4e7615b57b3e8182c7f664f06c96a08e'
    }

    /**
     *  --- Event created when the max allowed max min ration has been set.
     */
    get asV117(): bigint {
        assert(this.isV117)
        return this._chain.decodeEvent(this.event)
    }
}

export class SubtensorModuleMaxAllowedUidsSetEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'SubtensorModule.MaxAllowedUidsSet')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  --- Event created when max allowed uids has been set.
     */
    get isV107(): boolean {
        return this._chain.getEventHash('SubtensorModule.MaxAllowedUidsSet') === '0e1caef0df80727d2768bc480792261a4e7615b57b3e8182c7f664f06c96a08e'
    }

    /**
     *  --- Event created when max allowed uids has been set.
     */
    get asV107(): bigint {
        assert(this.isV107)
        return this._chain.decodeEvent(this.event)
    }
}

export class SubtensorModuleMaxWeightLimitSetEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'SubtensorModule.MaxWeightLimitSet')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * --- Event created when the max weight limit has been set.
     */
    get isV111(): boolean {
        return this._chain.getEventHash('SubtensorModule.MaxWeightLimitSet') === '0a0f30b1ade5af5fade6413c605719d59be71340cf4884f65ee9858eb1c38f6c'
    }

    /**
     * --- Event created when the max weight limit has been set.
     */
    get asV111(): number {
        assert(this.isV111)
        return this._chain.decodeEvent(this.event)
    }
}

export class SubtensorModuleMinAllowedWeightsSetEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'SubtensorModule.MinAllowedWeightsSet')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  --- Event created when min allowed weights has been set.
     */
    get isV117(): boolean {
        return this._chain.getEventHash('SubtensorModule.MinAllowedWeightsSet') === '0e1caef0df80727d2768bc480792261a4e7615b57b3e8182c7f664f06c96a08e'
    }

    /**
     *  --- Event created when min allowed weights has been set.
     */
    get asV117(): bigint {
        assert(this.isV117)
        return this._chain.decodeEvent(this.event)
    }
}

export class SubtensorModuleNeuronRegisteredEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'SubtensorModule.NeuronRegistered')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  --- Event created when a new neuron account has been registered to 
     *  the chain.
     */
    get isV100(): boolean {
        return this._chain.getEventHash('SubtensorModule.NeuronRegistered') === '0a0f30b1ade5af5fade6413c605719d59be71340cf4884f65ee9858eb1c38f6c'
    }

    /**
     *  --- Event created when a new neuron account has been registered to 
     *  the chain.
     */
    get asV100(): number {
        assert(this.isV100)
        return this._chain.decodeEvent(this.event)
    }
}

export class SubtensorModuleResetBondsEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'SubtensorModule.ResetBonds')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  --- Event thrown when bonds have been reset.
     */
    get isV118(): boolean {
        return this._chain.getEventHash('SubtensorModule.ResetBonds') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     *  --- Event thrown when bonds have been reset.
     */
    get asV118(): null {
        assert(this.isV118)
        return this._chain.decodeEvent(this.event)
    }
}

export class SubtensorModuleRhoSetEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'SubtensorModule.RhoSet')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  --- Event created when mechanism rho has been set.
     */
    get isV107(): boolean {
        return this._chain.getEventHash('SubtensorModule.RhoSet') === '0e1caef0df80727d2768bc480792261a4e7615b57b3e8182c7f664f06c96a08e'
    }

    /**
     *  --- Event created when mechanism rho has been set.
     */
    get asV107(): bigint {
        assert(this.isV107)
        return this._chain.decodeEvent(this.event)
    }
}

export class SubtensorModuleScalingLawPowerSetEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'SubtensorModule.ScalingLawPowerSet')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * --- Event created when the scaling law power has been set.
     */
    get isV111(): boolean {
        return this._chain.getEventHash('SubtensorModule.ScalingLawPowerSet') === '3db3753dcff7ca8b313d91fce9f0cd33b8f6c491f0697e71d850b62d343b9faf'
    }

    /**
     * --- Event created when the scaling law power has been set.
     */
    get asV111(): number {
        assert(this.isV111)
        return this._chain.decodeEvent(this.event)
    }
}

export class SubtensorModuleSomethingStoredEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'SubtensorModule.SomethingStored')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Event documentation should end with an array that provides descriptive names for event
     * parameters. [something, who]
     */
    get isV102(): boolean {
        return this._chain.getEventHash('SubtensorModule.SomethingStored') === '0379562584d6426ccff49705dfa9dba95ad94215b772fd97d0ad0c4ca0001c12'
    }

    /**
     * Event documentation should end with an array that provides descriptive names for event
     * parameters. [something, who]
     */
    get asV102(): [number, Uint8Array] {
        assert(this.isV102)
        return this._chain.decodeEvent(this.event)
    }
}

export class SubtensorModuleStakeAddedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'SubtensorModule.StakeAdded')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  --- Event created during when stake has been transfered from 
     *  the coldkey onto the hotkey staking account.
     */
    get isV100(): boolean {
        return this._chain.getEventHash('SubtensorModule.StakeAdded') === 'fb1b6c83a547837ce9f07d7b623e71a4fec6cea1d51d01009d24c5a20e53d816'
    }

    /**
     *  --- Event created during when stake has been transfered from 
     *  the coldkey onto the hotkey staking account.
     */
    get asV100(): [Uint8Array, bigint] {
        assert(this.isV100)
        return this._chain.decodeEvent(this.event)
    }
}

export class SubtensorModuleStakePruningDenominatorSetEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'SubtensorModule.StakePruningDenominatorSet')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  --- Event created when the stake pruning denominator has been set.
     */
    get isV117(): boolean {
        return this._chain.getEventHash('SubtensorModule.StakePruningDenominatorSet') === '0e1caef0df80727d2768bc480792261a4e7615b57b3e8182c7f664f06c96a08e'
    }

    /**
     *  --- Event created when the stake pruning denominator has been set.
     */
    get asV117(): bigint {
        assert(this.isV117)
        return this._chain.decodeEvent(this.event)
    }
}

export class SubtensorModuleStakePruningMinSetEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'SubtensorModule.StakePruningMinSet')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * --- Event created when the stake pruning min has been set.
     */
    get isV108(): boolean {
        return this._chain.getEventHash('SubtensorModule.StakePruningMinSet') === '0e1caef0df80727d2768bc480792261a4e7615b57b3e8182c7f664f06c96a08e'
    }

    /**
     * --- Event created when the stake pruning min has been set.
     */
    get asV108(): bigint {
        assert(this.isV108)
        return this._chain.decodeEvent(this.event)
    }
}

export class SubtensorModuleStakeRemovedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'SubtensorModule.StakeRemoved')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  --- Event created when stake has been removed from 
     *  the staking account into the coldkey account.
     */
    get isV100(): boolean {
        return this._chain.getEventHash('SubtensorModule.StakeRemoved') === 'fb1b6c83a547837ce9f07d7b623e71a4fec6cea1d51d01009d24c5a20e53d816'
    }

    /**
     *  --- Event created when stake has been removed from 
     *  the staking account into the coldkey account.
     */
    get asV100(): [Uint8Array, bigint] {
        assert(this.isV100)
        return this._chain.decodeEvent(this.event)
    }
}

export class SubtensorModuleSynergyScalingLawPowerSetEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'SubtensorModule.SynergyScalingLawPowerSet')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * --- Event created when the synergy scaling law power has been set.
     */
    get isV111(): boolean {
        return this._chain.getEventHash('SubtensorModule.SynergyScalingLawPowerSet') === '3db3753dcff7ca8b313d91fce9f0cd33b8f6c491f0697e71d850b62d343b9faf'
    }

    /**
     * --- Event created when the synergy scaling law power has been set.
     */
    get asV111(): number {
        assert(this.isV111)
        return this._chain.decodeEvent(this.event)
    }
}

export class SubtensorModuleTargetRegistrationsPerIntervalSetEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'SubtensorModule.TargetRegistrationsPerIntervalSet')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  --- Event created when the target registrations per interval has been set.
     */
    get isV105(): boolean {
        return this._chain.getEventHash('SubtensorModule.TargetRegistrationsPerIntervalSet') === '0e1caef0df80727d2768bc480792261a4e7615b57b3e8182c7f664f06c96a08e'
    }

    /**
     *  --- Event created when the target registrations per interval has been set.
     */
    get asV105(): bigint {
        assert(this.isV105)
        return this._chain.decodeEvent(this.event)
    }
}

export class SubtensorModuleValidatorBatchSizeSetEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'SubtensorModule.ValidatorBatchSizeSet')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  --- Event created when the batch size has been set.
     */
    get isV117(): boolean {
        return this._chain.getEventHash('SubtensorModule.ValidatorBatchSizeSet') === '0e1caef0df80727d2768bc480792261a4e7615b57b3e8182c7f664f06c96a08e'
    }

    /**
     *  --- Event created when the batch size has been set.
     */
    get asV117(): bigint {
        assert(this.isV117)
        return this._chain.decodeEvent(this.event)
    }
}

export class SubtensorModuleValidatorEpochLenSetEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'SubtensorModule.ValidatorEpochLenSet')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  --- Event created when the validator default epoch length has been set.
     */
    get isV117(): boolean {
        return this._chain.getEventHash('SubtensorModule.ValidatorEpochLenSet') === '0e1caef0df80727d2768bc480792261a4e7615b57b3e8182c7f664f06c96a08e'
    }

    /**
     *  --- Event created when the validator default epoch length has been set.
     */
    get asV117(): bigint {
        assert(this.isV117)
        return this._chain.decodeEvent(this.event)
    }
}

export class SubtensorModuleValidatorEpochsPerResetSetEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'SubtensorModule.ValidatorEpochsPerResetSet')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  --- Event created when the validator default epoch per reset has been set.
     */
    get isV117(): boolean {
        return this._chain.getEventHash('SubtensorModule.ValidatorEpochsPerResetSet') === '0e1caef0df80727d2768bc480792261a4e7615b57b3e8182c7f664f06c96a08e'
    }

    /**
     *  --- Event created when the validator default epoch per reset has been set.
     */
    get asV117(): bigint {
        assert(this.isV117)
        return this._chain.decodeEvent(this.event)
    }
}

export class SubtensorModuleValidatorExcludeQuantileSetEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'SubtensorModule.ValidatorExcludeQuantileSet')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * --- Event created when the validator exclude quantile has been set.
     */
    get isV111(): boolean {
        return this._chain.getEventHash('SubtensorModule.ValidatorExcludeQuantileSet') === '3db3753dcff7ca8b313d91fce9f0cd33b8f6c491f0697e71d850b62d343b9faf'
    }

    /**
     * --- Event created when the validator exclude quantile has been set.
     */
    get asV111(): number {
        assert(this.isV111)
        return this._chain.decodeEvent(this.event)
    }
}

export class SubtensorModuleValidatorLogitsDivergenceSetEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'SubtensorModule.ValidatorLogitsDivergenceSet')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * --- Event created when the validator logits divergence value has been set.
     */
    get isV112(): boolean {
        return this._chain.getEventHash('SubtensorModule.ValidatorLogitsDivergenceSet') === '0e1caef0df80727d2768bc480792261a4e7615b57b3e8182c7f664f06c96a08e'
    }

    /**
     * --- Event created when the validator logits divergence value has been set.
     */
    get asV112(): bigint {
        assert(this.isV112)
        return this._chain.decodeEvent(this.event)
    }
}

export class SubtensorModuleValidatorPruneLenSetEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'SubtensorModule.ValidatorPruneLenSet')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * --- Event created when the validator pruning length has been set.
     */
    get isV112(): boolean {
        return this._chain.getEventHash('SubtensorModule.ValidatorPruneLenSet') === '0e1caef0df80727d2768bc480792261a4e7615b57b3e8182c7f664f06c96a08e'
    }

    /**
     * --- Event created when the validator pruning length has been set.
     */
    get asV112(): bigint {
        assert(this.isV112)
        return this._chain.decodeEvent(this.event)
    }
}

export class SubtensorModuleValidatorSequenceLengthSetEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'SubtensorModule.ValidatorSequenceLengthSet')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  --- Event created when the sequence length has been set.
     */
    get isV117(): boolean {
        return this._chain.getEventHash('SubtensorModule.ValidatorSequenceLengthSet') === '0e1caef0df80727d2768bc480792261a4e7615b57b3e8182c7f664f06c96a08e'
    }

    /**
     *  --- Event created when the sequence length has been set.
     */
    get asV117(): bigint {
        assert(this.isV117)
        return this._chain.decodeEvent(this.event)
    }
}

export class SubtensorModuleWeightsSetEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'SubtensorModule.WeightsSet')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  ---- Event created when a caller successfully set's their weights
     *  on the chain.
     */
    get isV100(): boolean {
        return this._chain.getEventHash('SubtensorModule.WeightsSet') === '21ea0c8f2488eafafdea1de92b54cd17d8b1caff525e37616abf0ff93f11531d'
    }

    /**
     *  ---- Event created when a caller successfully set's their weights
     *  on the chain.
     */
    get asV100(): Uint8Array {
        assert(this.isV100)
        return this._chain.decodeEvent(this.event)
    }
}

export class SudoKeyChangedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Sudo.KeyChanged')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  The \[sudoer\] just switched identity; the old key is supplied.
     */
    get isV100(): boolean {
        return this._chain.getEventHash('Sudo.KeyChanged') === '21ea0c8f2488eafafdea1de92b54cd17d8b1caff525e37616abf0ff93f11531d'
    }

    /**
     *  The \[sudoer\] just switched identity; the old key is supplied.
     */
    get asV100(): Uint8Array {
        assert(this.isV100)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * The \[sudoer\] just switched identity; the old key is supplied if one existed.
     */
    get isV102(): boolean {
        return this._chain.getEventHash('Sudo.KeyChanged') === 'b94a7a753f8f0b026120555f1f1c70878235307461e256807cb791dad15244c2'
    }

    /**
     * The \[sudoer\] just switched identity; the old key is supplied if one existed.
     */
    get asV102(): {oldSudoer: (Uint8Array | undefined)} {
        assert(this.isV102)
        return this._chain.decodeEvent(this.event)
    }
}

export class SudoSudidEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Sudo.Sudid')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  A sudo just took place. \[result\]
     */
    get isV100(): boolean {
        return this._chain.getEventHash('Sudo.Sudid') === '5ac9a036c40a8da705ceb275764da05df0d46faf9a0778b7aa8dc7edf210ee1d'
    }

    /**
     *  A sudo just took place. \[result\]
     */
    get asV100(): v100.DispatchResult {
        assert(this.isV100)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A sudo just took place. \[result\]
     */
    get isV102(): boolean {
        return this._chain.getEventHash('Sudo.Sudid') === '7cde07a00087fe00204a886eb195e51ab4ed328b48e00f89cab63a3354eedb31'
    }

    /**
     * A sudo just took place. \[result\]
     */
    get asV102(): {sudoResult: v102.Type_34} {
        assert(this.isV102)
        return this._chain.decodeEvent(this.event)
    }
}

export class SudoSudoAsDoneEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Sudo.SudoAsDone')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  A sudo just took place. \[result\]
     */
    get isV100(): boolean {
        return this._chain.getEventHash('Sudo.SudoAsDone') === '5ac9a036c40a8da705ceb275764da05df0d46faf9a0778b7aa8dc7edf210ee1d'
    }

    /**
     *  A sudo just took place. \[result\]
     */
    get asV100(): v100.DispatchResult {
        assert(this.isV100)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A sudo just took place. \[result\]
     */
    get isV102(): boolean {
        return this._chain.getEventHash('Sudo.SudoAsDone') === '7cde07a00087fe00204a886eb195e51ab4ed328b48e00f89cab63a3354eedb31'
    }

    /**
     * A sudo just took place. \[result\]
     */
    get asV102(): {sudoResult: v102.Type_34} {
        assert(this.isV102)
        return this._chain.decodeEvent(this.event)
    }
}

export class SystemCodeUpdatedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'System.CodeUpdated')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  `:code` was updated.
     */
    get isV100(): boolean {
        return this._chain.getEventHash('System.CodeUpdated') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     *  `:code` was updated.
     */
    get asV100(): null {
        assert(this.isV100)
        return this._chain.decodeEvent(this.event)
    }
}

export class SystemExtrinsicFailedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'System.ExtrinsicFailed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  An extrinsic failed. \[error, info\]
     */
    get isV100(): boolean {
        return this._chain.getEventHash('System.ExtrinsicFailed') === '09be5714d55bec634be0e5bf6ca98e24886f3a530b5649b618b20e4514550b91'
    }

    /**
     *  An extrinsic failed. \[error, info\]
     */
    get asV100(): [v100.DispatchError, v100.DispatchInfo] {
        assert(this.isV100)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * An extrinsic failed.
     */
    get isV102(): boolean {
        return this._chain.getEventHash('System.ExtrinsicFailed') === '3b8e9f2b48f4b6f0f996d20434018cdbe20aacb2470e779d965d42dad18b0a4e'
    }

    /**
     * An extrinsic failed.
     */
    get asV102(): {dispatchError: v102.DispatchError, dispatchInfo: v102.DispatchInfo} {
        assert(this.isV102)
        return this._chain.decodeEvent(this.event)
    }
}

export class SystemExtrinsicSuccessEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'System.ExtrinsicSuccess')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  An extrinsic completed successfully. \[info\]
     */
    get isV100(): boolean {
        return this._chain.getEventHash('System.ExtrinsicSuccess') === '00a75e03130fe6755b02b23ca285a19efc2bd57964ead02525eedef36cbf1bd4'
    }

    /**
     *  An extrinsic completed successfully. \[info\]
     */
    get asV100(): v100.DispatchInfo {
        assert(this.isV100)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * An extrinsic completed successfully.
     */
    get isV102(): boolean {
        return this._chain.getEventHash('System.ExtrinsicSuccess') === '407ed94c14f243acbe2cdb53df52c37d97bbb5ae550a10a6036bf59677cdd165'
    }

    /**
     * An extrinsic completed successfully.
     */
    get asV102(): {dispatchInfo: v102.DispatchInfo} {
        assert(this.isV102)
        return this._chain.decodeEvent(this.event)
    }
}

export class SystemKilledAccountEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'System.KilledAccount')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  An \[account\] was reaped.
     */
    get isV100(): boolean {
        return this._chain.getEventHash('System.KilledAccount') === '21ea0c8f2488eafafdea1de92b54cd17d8b1caff525e37616abf0ff93f11531d'
    }

    /**
     *  An \[account\] was reaped.
     */
    get asV100(): Uint8Array {
        assert(this.isV100)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * An account was reaped.
     */
    get isV102(): boolean {
        return this._chain.getEventHash('System.KilledAccount') === '7fb7672b764b0a4f0c4910fddefec0709628843df7ad0073a97eede13c53ca92'
    }

    /**
     * An account was reaped.
     */
    get asV102(): {account: Uint8Array} {
        assert(this.isV102)
        return this._chain.decodeEvent(this.event)
    }
}

export class SystemNewAccountEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'System.NewAccount')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  A new \[account\] was created.
     */
    get isV100(): boolean {
        return this._chain.getEventHash('System.NewAccount') === '21ea0c8f2488eafafdea1de92b54cd17d8b1caff525e37616abf0ff93f11531d'
    }

    /**
     *  A new \[account\] was created.
     */
    get asV100(): Uint8Array {
        assert(this.isV100)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A new account was created.
     */
    get isV102(): boolean {
        return this._chain.getEventHash('System.NewAccount') === '7fb7672b764b0a4f0c4910fddefec0709628843df7ad0073a97eede13c53ca92'
    }

    /**
     * A new account was created.
     */
    get asV102(): {account: Uint8Array} {
        assert(this.isV102)
        return this._chain.decodeEvent(this.event)
    }
}

export class SystemRemarkedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'System.Remarked')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  On on-chain remark happened. \[origin, remark_hash\]
     */
    get isV100(): boolean {
        return this._chain.getEventHash('System.Remarked') === 'e54ae910805a8a9413af1a7f5885a5d0ba5f4e105175cd6b0ce2a8702ddf1861'
    }

    /**
     *  On on-chain remark happened. \[origin, remark_hash\]
     */
    get asV100(): [Uint8Array, Uint8Array] {
        assert(this.isV100)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * On on-chain remark happened.
     */
    get isV102(): boolean {
        return this._chain.getEventHash('System.Remarked') === 'c58b73482fe762a6dcca2f35266f0d1739333312cf7a50eea55c666d0cda6101'
    }

    /**
     * On on-chain remark happened.
     */
    get asV102(): {sender: Uint8Array, hash: Uint8Array} {
        assert(this.isV102)
        return this._chain.decodeEvent(this.event)
    }
}
