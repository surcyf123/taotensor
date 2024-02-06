import assert from 'assert'
import {Chain, ChainContext, EventContext, Event, Result, Option} from './support'
import * as v120 from './v120'

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
     * A balance was set by root.
     */
    get isV120(): boolean {
        return this._chain.getEventHash('Balances.BalanceSet') === 'b4d2b0fc2c83a5ecdfe1f464f6a34a7033a46fa4b350c30adf88a14a165f4341'
    }

    /**
     * A balance was set by root.
     */
    get asV120(): {who: Uint8Array, free: bigint, reserved: bigint} {
        assert(this.isV120)
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
     * Some amount was deposited (e.g. for transaction fees).
     */
    get isV120(): boolean {
        return this._chain.getEventHash('Balances.Deposit') === '8f5ae8789e3029a8bf020555efdf2b36a3f3c193d913a3b7e957085a989205d5'
    }

    /**
     * Some amount was deposited (e.g. for transaction fees).
     */
    get asV120(): {who: Uint8Array, amount: bigint} {
        assert(this.isV120)
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
     * An account was removed whose balance was non-zero but below ExistentialDeposit,
     * resulting in an outright loss.
     */
    get isV120(): boolean {
        return this._chain.getEventHash('Balances.DustLost') === '9c3814f4d9f83cddc03894caaffbfff75907584b6dee856253edc88d166ea2ad'
    }

    /**
     * An account was removed whose balance was non-zero but below ExistentialDeposit,
     * resulting in an outright loss.
     */
    get asV120(): {account: Uint8Array, amount: bigint} {
        assert(this.isV120)
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
     * An account was created with some free balance.
     */
    get isV120(): boolean {
        return this._chain.getEventHash('Balances.Endowed') === '32251ceab2919f16318590a515827e286d1dcaf6ea2c3412a98522f1f980e1f1'
    }

    /**
     * An account was created with some free balance.
     */
    get asV120(): {account: Uint8Array, freeBalance: bigint} {
        assert(this.isV120)
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
     * Some balance was moved from the reserve of the first account to the second account.
     * Final argument indicates the destination balance type.
     */
    get isV120(): boolean {
        return this._chain.getEventHash('Balances.ReserveRepatriated') === 'd157e6b58ecbb420017062bca87a4de7d75c964d50ace348a9793efe772daae4'
    }

    /**
     * Some balance was moved from the reserve of the first account to the second account.
     * Final argument indicates the destination balance type.
     */
    get asV120(): {from: Uint8Array, to: Uint8Array, amount: bigint, destinationStatus: v120.BalanceStatus} {
        assert(this.isV120)
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
     * Some balance was reserved (moved from free to reserved).
     */
    get isV120(): boolean {
        return this._chain.getEventHash('Balances.Reserved') === '8f5ae8789e3029a8bf020555efdf2b36a3f3c193d913a3b7e957085a989205d5'
    }

    /**
     * Some balance was reserved (moved from free to reserved).
     */
    get asV120(): {who: Uint8Array, amount: bigint} {
        assert(this.isV120)
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
    get isV120(): boolean {
        return this._chain.getEventHash('Balances.Slashed') === '8f5ae8789e3029a8bf020555efdf2b36a3f3c193d913a3b7e957085a989205d5'
    }

    /**
     * Some amount was removed from the account (e.g. for misbehavior).
     */
    get asV120(): {who: Uint8Array, amount: bigint} {
        assert(this.isV120)
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
     * Transfer succeeded.
     */
    get isV120(): boolean {
        return this._chain.getEventHash('Balances.Transfer') === '6bf095c280a1e7d2e72f60befe24c50c552cb3a8ee966ed5f8f645d2ea542007'
    }

    /**
     * Transfer succeeded.
     */
    get asV120(): {from: Uint8Array, to: Uint8Array, amount: bigint} {
        assert(this.isV120)
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
     * Some balance was unreserved (moved from reserved to free).
     */
    get isV120(): boolean {
        return this._chain.getEventHash('Balances.Unreserved') === '8f5ae8789e3029a8bf020555efdf2b36a3f3c193d913a3b7e957085a989205d5'
    }

    /**
     * Some balance was unreserved (moved from reserved to free).
     */
    get asV120(): {who: Uint8Array, amount: bigint} {
        assert(this.isV120)
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
    get isV120(): boolean {
        return this._chain.getEventHash('Balances.Withdraw') === '8f5ae8789e3029a8bf020555efdf2b36a3f3c193d913a3b7e957085a989205d5'
    }

    /**
     * Some amount was withdrawn from the account (e.g. for transaction fees).
     */
    get asV120(): {who: Uint8Array, amount: bigint} {
        assert(this.isV120)
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
     * New authority set has been applied.
     */
    get isV120(): boolean {
        return this._chain.getEventHash('Grandpa.NewAuthorities') === 'e25505d283e6b21359efad4ea3b01da035cbbe2b268fd3cbfb12ca0b5577a9de'
    }

    /**
     * New authority set has been applied.
     */
    get asV120(): {authoritySet: [Uint8Array, bigint][]} {
        assert(this.isV120)
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
     * Current authority set has been paused.
     */
    get isV120(): boolean {
        return this._chain.getEventHash('Grandpa.Paused') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     * Current authority set has been paused.
     */
    get asV120(): null {
        assert(this.isV120)
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
     * Current authority set has been resumed.
     */
    get isV120(): boolean {
        return this._chain.getEventHash('Grandpa.Resumed') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     * Current authority set has been resumed.
     */
    get asV120(): null {
        assert(this.isV120)
        return this._chain.decodeEvent(this.event)
    }
}

export class SubtensorModuleActivityCutoffSetEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'SubtensorModule.ActivityCutoffSet')
        this._chain = ctx._chain
        this.event = event
    }

    get isV120(): boolean {
        return this._chain.getEventHash('SubtensorModule.ActivityCutoffSet') === 'dad8cc7e7c9eb6faac84e0abde9fee1c92b9491647a7e864095f4f3d3a60fa82'
    }

    get asV120(): [number, number] {
        assert(this.isV120)
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

    get isV120(): boolean {
        return this._chain.getEventHash('SubtensorModule.AdjustmentIntervalSet') === 'dad8cc7e7c9eb6faac84e0abde9fee1c92b9491647a7e864095f4f3d3a60fa82'
    }

    get asV120(): [number, number] {
        assert(this.isV120)
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

    get isV120(): boolean {
        return this._chain.getEventHash('SubtensorModule.AxonServed') === '985721f111386124bd070912fa6a26e5d2ad9fbb04cd41a32f72193747e45fff'
    }

    get asV120(): [number, Uint8Array] {
        assert(this.isV120)
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

    get isV120(): boolean {
        return this._chain.getEventHash('SubtensorModule.BondsMovingAverageSet') === '63497f5b43ccaec48c63c145483201d1401c337201351f20084f825c2c167674'
    }

    get asV120(): [number, bigint] {
        assert(this.isV120)
        return this._chain.decodeEvent(this.event)
    }
}

export class SubtensorModuleBulkBalancesSetEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'SubtensorModule.BulkBalancesSet')
        this._chain = ctx._chain
        this.event = event
    }

    get isV120(): boolean {
        return this._chain.getEventHash('SubtensorModule.BulkBalancesSet') === 'dad8cc7e7c9eb6faac84e0abde9fee1c92b9491647a7e864095f4f3d3a60fa82'
    }

    get asV120(): [number, number] {
        assert(this.isV120)
        return this._chain.decodeEvent(this.event)
    }
}

export class SubtensorModuleBulkNeuronsRegisteredEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'SubtensorModule.BulkNeuronsRegistered')
        this._chain = ctx._chain
        this.event = event
    }

    get isV120(): boolean {
        return this._chain.getEventHash('SubtensorModule.BulkNeuronsRegistered') === 'dad8cc7e7c9eb6faac84e0abde9fee1c92b9491647a7e864095f4f3d3a60fa82'
    }

    get asV120(): [number, number] {
        assert(this.isV120)
        return this._chain.decodeEvent(this.event)
    }
}

export class SubtensorModuleBurnSetEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'SubtensorModule.BurnSet')
        this._chain = ctx._chain
        this.event = event
    }

    get isV120(): boolean {
        return this._chain.getEventHash('SubtensorModule.BurnSet') === '63497f5b43ccaec48c63c145483201d1401c337201351f20084f825c2c167674'
    }

    get asV120(): [number, bigint] {
        assert(this.isV120)
        return this._chain.decodeEvent(this.event)
    }
}

export class SubtensorModuleDefaultTakeSetEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'SubtensorModule.DefaultTakeSet')
        this._chain = ctx._chain
        this.event = event
    }

    get isV120(): boolean {
        return this._chain.getEventHash('SubtensorModule.DefaultTakeSet') === '2867d603480efbd64b8d7f59eec909b0f616218de954fdcef887ca180e013de4'
    }

    get asV120(): number {
        assert(this.isV120)
        return this._chain.decodeEvent(this.event)
    }
}

export class SubtensorModuleDelegateAddedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'SubtensorModule.DelegateAdded')
        this._chain = ctx._chain
        this.event = event
    }

    get isV120(): boolean {
        return this._chain.getEventHash('SubtensorModule.DelegateAdded') === '5cc747fe2193f4a6414b936ddb90e40c9df7228525b7392b3be94324867d9bec'
    }

    get asV120(): [Uint8Array, Uint8Array, number] {
        assert(this.isV120)
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

    get isV120(): boolean {
        return this._chain.getEventHash('SubtensorModule.DifficultySet') === '63497f5b43ccaec48c63c145483201d1401c337201351f20084f825c2c167674'
    }

    get asV120(): [number, bigint] {
        assert(this.isV120)
        return this._chain.decodeEvent(this.event)
    }
}

export class SubtensorModuleEmissionValuesSetEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'SubtensorModule.EmissionValuesSet')
        this._chain = ctx._chain
        this.event = event
    }

    get isV120(): boolean {
        return this._chain.getEventHash('SubtensorModule.EmissionValuesSet') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    get asV120(): null {
        assert(this.isV120)
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

    get isV120(): boolean {
        return this._chain.getEventHash('SubtensorModule.ImmunityPeriodSet') === 'dad8cc7e7c9eb6faac84e0abde9fee1c92b9491647a7e864095f4f3d3a60fa82'
    }

    get asV120(): [number, number] {
        assert(this.isV120)
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

    get isV120(): boolean {
        return this._chain.getEventHash('SubtensorModule.KappaSet') === 'dad8cc7e7c9eb6faac84e0abde9fee1c92b9491647a7e864095f4f3d3a60fa82'
    }

    get asV120(): [number, number] {
        assert(this.isV120)
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

    get isV120(): boolean {
        return this._chain.getEventHash('SubtensorModule.MaxAllowedUidsSet') === 'dad8cc7e7c9eb6faac84e0abde9fee1c92b9491647a7e864095f4f3d3a60fa82'
    }

    get asV120(): [number, number] {
        assert(this.isV120)
        return this._chain.decodeEvent(this.event)
    }
}

export class SubtensorModuleMaxAllowedValidatorsSetEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'SubtensorModule.MaxAllowedValidatorsSet')
        this._chain = ctx._chain
        this.event = event
    }

    get isV120(): boolean {
        return this._chain.getEventHash('SubtensorModule.MaxAllowedValidatorsSet') === 'dad8cc7e7c9eb6faac84e0abde9fee1c92b9491647a7e864095f4f3d3a60fa82'
    }

    get asV120(): [number, number] {
        assert(this.isV120)
        return this._chain.decodeEvent(this.event)
    }
}

export class SubtensorModuleMaxBurnSetEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'SubtensorModule.MaxBurnSet')
        this._chain = ctx._chain
        this.event = event
    }

    get isV120(): boolean {
        return this._chain.getEventHash('SubtensorModule.MaxBurnSet') === '63497f5b43ccaec48c63c145483201d1401c337201351f20084f825c2c167674'
    }

    get asV120(): [number, bigint] {
        assert(this.isV120)
        return this._chain.decodeEvent(this.event)
    }
}

export class SubtensorModuleMaxDifficultySetEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'SubtensorModule.MaxDifficultySet')
        this._chain = ctx._chain
        this.event = event
    }

    get isV120(): boolean {
        return this._chain.getEventHash('SubtensorModule.MaxDifficultySet') === '63497f5b43ccaec48c63c145483201d1401c337201351f20084f825c2c167674'
    }

    get asV120(): [number, bigint] {
        assert(this.isV120)
        return this._chain.decodeEvent(this.event)
    }
}

export class SubtensorModuleMaxRegistrationsPerBlockSetEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'SubtensorModule.MaxRegistrationsPerBlockSet')
        this._chain = ctx._chain
        this.event = event
    }

    get isV120(): boolean {
        return this._chain.getEventHash('SubtensorModule.MaxRegistrationsPerBlockSet') === 'dad8cc7e7c9eb6faac84e0abde9fee1c92b9491647a7e864095f4f3d3a60fa82'
    }

    get asV120(): [number, number] {
        assert(this.isV120)
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

    get isV120(): boolean {
        return this._chain.getEventHash('SubtensorModule.MaxWeightLimitSet') === 'dad8cc7e7c9eb6faac84e0abde9fee1c92b9491647a7e864095f4f3d3a60fa82'
    }

    get asV120(): [number, number] {
        assert(this.isV120)
        return this._chain.decodeEvent(this.event)
    }
}

export class SubtensorModuleMinAllowedWeightSetEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'SubtensorModule.MinAllowedWeightSet')
        this._chain = ctx._chain
        this.event = event
    }

    get isV120(): boolean {
        return this._chain.getEventHash('SubtensorModule.MinAllowedWeightSet') === 'dad8cc7e7c9eb6faac84e0abde9fee1c92b9491647a7e864095f4f3d3a60fa82'
    }

    get asV120(): [number, number] {
        assert(this.isV120)
        return this._chain.decodeEvent(this.event)
    }
}

export class SubtensorModuleMinBurnSetEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'SubtensorModule.MinBurnSet')
        this._chain = ctx._chain
        this.event = event
    }

    get isV120(): boolean {
        return this._chain.getEventHash('SubtensorModule.MinBurnSet') === '63497f5b43ccaec48c63c145483201d1401c337201351f20084f825c2c167674'
    }

    get asV120(): [number, bigint] {
        assert(this.isV120)
        return this._chain.decodeEvent(this.event)
    }
}

export class SubtensorModuleMinDifficultySetEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'SubtensorModule.MinDifficultySet')
        this._chain = ctx._chain
        this.event = event
    }

    get isV120(): boolean {
        return this._chain.getEventHash('SubtensorModule.MinDifficultySet') === '63497f5b43ccaec48c63c145483201d1401c337201351f20084f825c2c167674'
    }

    get asV120(): [number, bigint] {
        assert(this.isV120)
        return this._chain.decodeEvent(this.event)
    }
}

export class SubtensorModuleNetworkAddedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'SubtensorModule.NetworkAdded')
        this._chain = ctx._chain
        this.event = event
    }

    get isV120(): boolean {
        return this._chain.getEventHash('SubtensorModule.NetworkAdded') === 'dad8cc7e7c9eb6faac84e0abde9fee1c92b9491647a7e864095f4f3d3a60fa82'
    }

    get asV120(): [number, number] {
        assert(this.isV120)
        return this._chain.decodeEvent(this.event)
    }
}

export class SubtensorModuleNetworkConnectionAddedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'SubtensorModule.NetworkConnectionAdded')
        this._chain = ctx._chain
        this.event = event
    }

    get isV120(): boolean {
        return this._chain.getEventHash('SubtensorModule.NetworkConnectionAdded') === 'f0797ddedb40b1e462a8533a3c251ff7042c5660b12c78e1ddb144c0b265b80a'
    }

    get asV120(): [number, number, number] {
        assert(this.isV120)
        return this._chain.decodeEvent(this.event)
    }
}

export class SubtensorModuleNetworkConnectionRemovedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'SubtensorModule.NetworkConnectionRemoved')
        this._chain = ctx._chain
        this.event = event
    }

    get isV120(): boolean {
        return this._chain.getEventHash('SubtensorModule.NetworkConnectionRemoved') === 'dad8cc7e7c9eb6faac84e0abde9fee1c92b9491647a7e864095f4f3d3a60fa82'
    }

    get asV120(): [number, number] {
        assert(this.isV120)
        return this._chain.decodeEvent(this.event)
    }
}

export class SubtensorModuleNetworkRemovedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'SubtensorModule.NetworkRemoved')
        this._chain = ctx._chain
        this.event = event
    }

    get isV120(): boolean {
        return this._chain.getEventHash('SubtensorModule.NetworkRemoved') === '2867d603480efbd64b8d7f59eec909b0f616218de954fdcef887ca180e013de4'
    }

    get asV120(): number {
        assert(this.isV120)
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

    get isV120(): boolean {
        return this._chain.getEventHash('SubtensorModule.NeuronRegistered') === '3c8da4069aae1f785fc41d706f3990947422f58b54afec215dd7893174b769ab'
    }

    get asV120(): [number, number, Uint8Array] {
        assert(this.isV120)
        return this._chain.decodeEvent(this.event)
    }
}

export class SubtensorModulePrometheusServedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'SubtensorModule.PrometheusServed')
        this._chain = ctx._chain
        this.event = event
    }

    get isV120(): boolean {
        return this._chain.getEventHash('SubtensorModule.PrometheusServed') === '985721f111386124bd070912fa6a26e5d2ad9fbb04cd41a32f72193747e45fff'
    }

    get asV120(): [number, Uint8Array] {
        assert(this.isV120)
        return this._chain.decodeEvent(this.event)
    }
}

export class SubtensorModuleRaoRecycledForRegistrationSetEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'SubtensorModule.RAORecycledForRegistrationSet')
        this._chain = ctx._chain
        this.event = event
    }

    get isV120(): boolean {
        return this._chain.getEventHash('SubtensorModule.RAORecycledForRegistrationSet') === '63497f5b43ccaec48c63c145483201d1401c337201351f20084f825c2c167674'
    }

    get asV120(): [number, bigint] {
        assert(this.isV120)
        return this._chain.decodeEvent(this.event)
    }
}

export class SubtensorModuleRegistrationAllowedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'SubtensorModule.RegistrationAllowed')
        this._chain = ctx._chain
        this.event = event
    }

    get isV121(): boolean {
        return this._chain.getEventHash('SubtensorModule.RegistrationAllowed') === '37287d0e206a6c005c77053efd62fd37cf930a2e865a965daf9ea9a30ccda1e2'
    }

    get asV121(): [number, boolean] {
        assert(this.isV121)
        return this._chain.decodeEvent(this.event)
    }
}

export class SubtensorModuleRegistrationPerIntervalSetEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'SubtensorModule.RegistrationPerIntervalSet')
        this._chain = ctx._chain
        this.event = event
    }

    get isV120(): boolean {
        return this._chain.getEventHash('SubtensorModule.RegistrationPerIntervalSet') === 'dad8cc7e7c9eb6faac84e0abde9fee1c92b9491647a7e864095f4f3d3a60fa82'
    }

    get asV120(): [number, number] {
        assert(this.isV120)
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

    get isV120(): boolean {
        return this._chain.getEventHash('SubtensorModule.RhoSet') === 'dad8cc7e7c9eb6faac84e0abde9fee1c92b9491647a7e864095f4f3d3a60fa82'
    }

    get asV120(): [number, number] {
        assert(this.isV120)
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

    get isV120(): boolean {
        return this._chain.getEventHash('SubtensorModule.ScalingLawPowerSet') === 'dad8cc7e7c9eb6faac84e0abde9fee1c92b9491647a7e864095f4f3d3a60fa82'
    }

    get asV120(): [number, number] {
        assert(this.isV120)
        return this._chain.decodeEvent(this.event)
    }
}

export class SubtensorModuleServingRateLimitSetEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'SubtensorModule.ServingRateLimitSet')
        this._chain = ctx._chain
        this.event = event
    }

    get isV120(): boolean {
        return this._chain.getEventHash('SubtensorModule.ServingRateLimitSet') === '63497f5b43ccaec48c63c145483201d1401c337201351f20084f825c2c167674'
    }

    get asV120(): [number, bigint] {
        assert(this.isV120)
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

    get isV120(): boolean {
        return this._chain.getEventHash('SubtensorModule.StakeAdded') === 'fb1b6c83a547837ce9f07d7b623e71a4fec6cea1d51d01009d24c5a20e53d816'
    }

    get asV120(): [Uint8Array, bigint] {
        assert(this.isV120)
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

    get isV120(): boolean {
        return this._chain.getEventHash('SubtensorModule.StakeRemoved') === 'fb1b6c83a547837ce9f07d7b623e71a4fec6cea1d51d01009d24c5a20e53d816'
    }

    get asV120(): [Uint8Array, bigint] {
        assert(this.isV120)
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

    get isV120(): boolean {
        return this._chain.getEventHash('SubtensorModule.SynergyScalingLawPowerSet') === 'dad8cc7e7c9eb6faac84e0abde9fee1c92b9491647a7e864095f4f3d3a60fa82'
    }

    get asV120(): [number, number] {
        assert(this.isV120)
        return this._chain.decodeEvent(this.event)
    }
}

export class SubtensorModuleTempoSetEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'SubtensorModule.TempoSet')
        this._chain = ctx._chain
        this.event = event
    }

    get isV121(): boolean {
        return this._chain.getEventHash('SubtensorModule.TempoSet') === 'dad8cc7e7c9eb6faac84e0abde9fee1c92b9491647a7e864095f4f3d3a60fa82'
    }

    get asV121(): [number, number] {
        assert(this.isV121)
        return this._chain.decodeEvent(this.event)
    }
}

export class SubtensorModuleTxRateLimitSetEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'SubtensorModule.TxRateLimitSet')
        this._chain = ctx._chain
        this.event = event
    }

    get isV120(): boolean {
        return this._chain.getEventHash('SubtensorModule.TxRateLimitSet') === '0e1caef0df80727d2768bc480792261a4e7615b57b3e8182c7f664f06c96a08e'
    }

    get asV120(): bigint {
        assert(this.isV120)
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

    get isV120(): boolean {
        return this._chain.getEventHash('SubtensorModule.ValidatorBatchSizeSet') === 'dad8cc7e7c9eb6faac84e0abde9fee1c92b9491647a7e864095f4f3d3a60fa82'
    }

    get asV120(): [number, number] {
        assert(this.isV120)
        return this._chain.decodeEvent(this.event)
    }
}

export class SubtensorModuleValidatorEpochLengthSetEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'SubtensorModule.ValidatorEpochLengthSet')
        this._chain = ctx._chain
        this.event = event
    }

    get isV120(): boolean {
        return this._chain.getEventHash('SubtensorModule.ValidatorEpochLengthSet') === 'dad8cc7e7c9eb6faac84e0abde9fee1c92b9491647a7e864095f4f3d3a60fa82'
    }

    get asV120(): [number, number] {
        assert(this.isV120)
        return this._chain.decodeEvent(this.event)
    }
}

export class SubtensorModuleValidatorEpochPerResetSetEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'SubtensorModule.ValidatorEpochPerResetSet')
        this._chain = ctx._chain
        this.event = event
    }

    get isV120(): boolean {
        return this._chain.getEventHash('SubtensorModule.ValidatorEpochPerResetSet') === 'dad8cc7e7c9eb6faac84e0abde9fee1c92b9491647a7e864095f4f3d3a60fa82'
    }

    get asV120(): [number, number] {
        assert(this.isV120)
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

    get isV120(): boolean {
        return this._chain.getEventHash('SubtensorModule.ValidatorExcludeQuantileSet') === 'dad8cc7e7c9eb6faac84e0abde9fee1c92b9491647a7e864095f4f3d3a60fa82'
    }

    get asV120(): [number, number] {
        assert(this.isV120)
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

    get isV120(): boolean {
        return this._chain.getEventHash('SubtensorModule.ValidatorLogitsDivergenceSet') === 'dad8cc7e7c9eb6faac84e0abde9fee1c92b9491647a7e864095f4f3d3a60fa82'
    }

    get asV120(): [number, number] {
        assert(this.isV120)
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

    get isV120(): boolean {
        return this._chain.getEventHash('SubtensorModule.ValidatorPruneLenSet') === '63497f5b43ccaec48c63c145483201d1401c337201351f20084f825c2c167674'
    }

    get asV120(): [number, bigint] {
        assert(this.isV120)
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

    get isV120(): boolean {
        return this._chain.getEventHash('SubtensorModule.ValidatorSequenceLengthSet') === 'dad8cc7e7c9eb6faac84e0abde9fee1c92b9491647a7e864095f4f3d3a60fa82'
    }

    get asV120(): [number, number] {
        assert(this.isV120)
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

    get isV120(): boolean {
        return this._chain.getEventHash('SubtensorModule.WeightsSet') === 'dad8cc7e7c9eb6faac84e0abde9fee1c92b9491647a7e864095f4f3d3a60fa82'
    }

    get asV120(): [number, number] {
        assert(this.isV120)
        return this._chain.decodeEvent(this.event)
    }
}

export class SubtensorModuleWeightsSetRateLimitSetEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'SubtensorModule.WeightsSetRateLimitSet')
        this._chain = ctx._chain
        this.event = event
    }

    get isV120(): boolean {
        return this._chain.getEventHash('SubtensorModule.WeightsSetRateLimitSet') === '63497f5b43ccaec48c63c145483201d1401c337201351f20084f825c2c167674'
    }

    get asV120(): [number, bigint] {
        assert(this.isV120)
        return this._chain.decodeEvent(this.event)
    }
}

export class SubtensorModuleWeightsVersionKeySetEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'SubtensorModule.WeightsVersionKeySet')
        this._chain = ctx._chain
        this.event = event
    }

    get isV120(): boolean {
        return this._chain.getEventHash('SubtensorModule.WeightsVersionKeySet') === '63497f5b43ccaec48c63c145483201d1401c337201351f20084f825c2c167674'
    }

    get asV120(): [number, bigint] {
        assert(this.isV120)
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
     * The \[sudoer\] just switched identity; the old key is supplied if one existed.
     */
    get isV120(): boolean {
        return this._chain.getEventHash('Sudo.KeyChanged') === 'b94a7a753f8f0b026120555f1f1c70878235307461e256807cb791dad15244c2'
    }

    /**
     * The \[sudoer\] just switched identity; the old key is supplied if one existed.
     */
    get asV120(): {oldSudoer: (Uint8Array | undefined)} {
        assert(this.isV120)
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
     * A sudo just took place. \[result\]
     */
    get isV120(): boolean {
        return this._chain.getEventHash('Sudo.Sudid') === '1b4cd14e3ef27d194a19f72ca99c0748bad5378dacf5240cdcde1536e1d11dad'
    }

    /**
     * A sudo just took place. \[result\]
     */
    get asV120(): {sudoResult: v120.Type_37} {
        assert(this.isV120)
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
     * A sudo just took place. \[result\]
     */
    get isV120(): boolean {
        return this._chain.getEventHash('Sudo.SudoAsDone') === '1b4cd14e3ef27d194a19f72ca99c0748bad5378dacf5240cdcde1536e1d11dad'
    }

    /**
     * A sudo just took place. \[result\]
     */
    get asV120(): {sudoResult: v120.Type_37} {
        assert(this.isV120)
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
     * `:code` was updated.
     */
    get isV120(): boolean {
        return this._chain.getEventHash('System.CodeUpdated') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     * `:code` was updated.
     */
    get asV120(): null {
        assert(this.isV120)
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
     * An extrinsic failed.
     */
    get isV120(): boolean {
        return this._chain.getEventHash('System.ExtrinsicFailed') === '36c29895cd15b6f845bb064a671635ce07ef9de9648695c2803020e8510d0fb3'
    }

    /**
     * An extrinsic failed.
     */
    get asV120(): {dispatchError: v120.DispatchError, dispatchInfo: v120.DispatchInfo} {
        assert(this.isV120)
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
     * An extrinsic completed successfully.
     */
    get isV120(): boolean {
        return this._chain.getEventHash('System.ExtrinsicSuccess') === '6b78214e1591ecc2de1662ebf5ca93838612414a62415cde1cdd2962f8235a92'
    }

    /**
     * An extrinsic completed successfully.
     */
    get asV120(): {dispatchInfo: v120.DispatchInfo} {
        assert(this.isV120)
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
     * An account was reaped.
     */
    get isV120(): boolean {
        return this._chain.getEventHash('System.KilledAccount') === '7fb7672b764b0a4f0c4910fddefec0709628843df7ad0073a97eede13c53ca92'
    }

    /**
     * An account was reaped.
     */
    get asV120(): {account: Uint8Array} {
        assert(this.isV120)
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
     * A new account was created.
     */
    get isV120(): boolean {
        return this._chain.getEventHash('System.NewAccount') === '7fb7672b764b0a4f0c4910fddefec0709628843df7ad0073a97eede13c53ca92'
    }

    /**
     * A new account was created.
     */
    get asV120(): {account: Uint8Array} {
        assert(this.isV120)
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
     * On on-chain remark happened.
     */
    get isV120(): boolean {
        return this._chain.getEventHash('System.Remarked') === 'c58b73482fe762a6dcca2f35266f0d1739333312cf7a50eea55c666d0cda6101'
    }

    /**
     * On on-chain remark happened.
     */
    get asV120(): {sender: Uint8Array, hash: Uint8Array} {
        assert(this.isV120)
        return this._chain.decodeEvent(this.event)
    }
}

export class TransactionPaymentTransactionFeePaidEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'TransactionPayment.TransactionFeePaid')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A transaction fee `actual_fee`, of which `tip` was added to the minimum inclusion fee,
     * has been paid by `who`.
     */
    get isV120(): boolean {
        return this._chain.getEventHash('TransactionPayment.TransactionFeePaid') === 'dd3c9a33bd7cfbfd8ab9723c8c903f712271eee00aee798dc1f9f15ff8a1aebc'
    }

    /**
     * A transaction fee `actual_fee`, of which `tip` was added to the minimum inclusion fee,
     * has been paid by `who`.
     */
    get asV120(): {who: Uint8Array, actualFee: bigint, tip: bigint} {
        assert(this.isV120)
        return this._chain.decodeEvent(this.event)
    }
}

export class UtilityBatchCompletedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Utility.BatchCompleted')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Batch of dispatches completed fully with no error.
     */
    get isV120(): boolean {
        return this._chain.getEventHash('Utility.BatchCompleted') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     * Batch of dispatches completed fully with no error.
     */
    get asV120(): null {
        assert(this.isV120)
        return this._chain.decodeEvent(this.event)
    }
}

export class UtilityBatchCompletedWithErrorsEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Utility.BatchCompletedWithErrors')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Batch of dispatches completed but has errors.
     */
    get isV120(): boolean {
        return this._chain.getEventHash('Utility.BatchCompletedWithErrors') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     * Batch of dispatches completed but has errors.
     */
    get asV120(): null {
        assert(this.isV120)
        return this._chain.decodeEvent(this.event)
    }
}

export class UtilityBatchInterruptedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Utility.BatchInterrupted')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Batch of dispatches did not complete fully. Index of first failing dispatch given, as
     * well as the error.
     */
    get isV120(): boolean {
        return this._chain.getEventHash('Utility.BatchInterrupted') === '14dbb9456065a44deeed159d4dbd21796ec92754c0494d698c9bcc529d0f7279'
    }

    /**
     * Batch of dispatches did not complete fully. Index of first failing dispatch given, as
     * well as the error.
     */
    get asV120(): {index: number, error: v120.DispatchError} {
        assert(this.isV120)
        return this._chain.decodeEvent(this.event)
    }
}

export class UtilityDispatchedAsEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Utility.DispatchedAs')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A call was dispatched.
     */
    get isV120(): boolean {
        return this._chain.getEventHash('Utility.DispatchedAs') === 'd15218d9451baa25e4e3c2b30a15d679f7c3c9aa3d43b64b531831430663eb58'
    }

    /**
     * A call was dispatched.
     */
    get asV120(): {result: v120.Type_37} {
        assert(this.isV120)
        return this._chain.decodeEvent(this.event)
    }
}

export class UtilityItemCompletedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Utility.ItemCompleted')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A single item within a Batch of dispatches has completed with no error.
     */
    get isV120(): boolean {
        return this._chain.getEventHash('Utility.ItemCompleted') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     * A single item within a Batch of dispatches has completed with no error.
     */
    get asV120(): null {
        assert(this.isV120)
        return this._chain.decodeEvent(this.event)
    }
}

export class UtilityItemFailedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Utility.ItemFailed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A single item within a Batch of dispatches has completed with error.
     */
    get isV120(): boolean {
        return this._chain.getEventHash('Utility.ItemFailed') === '58463e011dfd19c6786d4056e9e9452b33b4cb0fcf9c6e8c032e8ad7d16b0d34'
    }

    /**
     * A single item within a Batch of dispatches has completed with error.
     */
    get asV120(): {error: v120.DispatchError} {
        assert(this.isV120)
        return this._chain.decodeEvent(this.event)
    }
}
