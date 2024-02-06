import assert from 'assert'
import {Block, Chain, ChainContext, BlockContext, Result, Option} from './support'
import * as v120 from './v120'

export class BalancesExistentialDepositConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    /**
     *  The minimum amount required to keep an account open.
     */
    get isV120() {
        return this._chain.getConstantTypeHash('Balances', 'ExistentialDeposit') === '2e8052d0ae8d237ad263438f986208df52f4f0e9f529557036c3b179dfb42f21'
    }

    /**
     *  The minimum amount required to keep an account open.
     */
    get asV120(): bigint {
        assert(this.isV120)
        return this._chain.getConstant('Balances', 'ExistentialDeposit')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('Balances', 'ExistentialDeposit') != null
    }
}

export class BalancesMaxLocksConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    /**
     *  The maximum number of locks that should exist on an account.
     *  Not strictly enforced, but used for weight estimation.
     */
    get isV120() {
        return this._chain.getConstantTypeHash('Balances', 'MaxLocks') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
    }

    /**
     *  The maximum number of locks that should exist on an account.
     *  Not strictly enforced, but used for weight estimation.
     */
    get asV120(): number {
        assert(this.isV120)
        return this._chain.getConstant('Balances', 'MaxLocks')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('Balances', 'MaxLocks') != null
    }
}

export class BalancesMaxReservesConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    /**
     *  The maximum number of named reserves that can exist on an account.
     */
    get isV120() {
        return this._chain.getConstantTypeHash('Balances', 'MaxReserves') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
    }

    /**
     *  The maximum number of named reserves that can exist on an account.
     */
    get asV120(): number {
        assert(this.isV120)
        return this._chain.getConstant('Balances', 'MaxReserves')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('Balances', 'MaxReserves') != null
    }
}

export class GrandpaMaxAuthoritiesConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    /**
     *  Max Authorities in use
     */
    get isV120() {
        return this._chain.getConstantTypeHash('Grandpa', 'MaxAuthorities') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
    }

    /**
     *  Max Authorities in use
     */
    get asV120(): number {
        assert(this.isV120)
        return this._chain.getConstant('Grandpa', 'MaxAuthorities')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('Grandpa', 'MaxAuthorities') != null
    }
}

export class GrandpaMaxSetIdSessionEntriesConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    /**
     *  The maximum number of entries to keep in the set id to session index mapping.
     * 
     *  Since the `SetIdSession` map is only used for validating equivocations this
     *  value should relate to the bonding duration of whatever staking system is
     *  being used (if any). If equivocation handling is not enabled then this value
     *  can be zero.
     */
    get isV120() {
        return this._chain.getConstantTypeHash('Grandpa', 'MaxSetIdSessionEntries') === '2e8052d0ae8d237ad263438f986208df52f4f0e9f529557036c3b179dfb42f21'
    }

    /**
     *  The maximum number of entries to keep in the set id to session index mapping.
     * 
     *  Since the `SetIdSession` map is only used for validating equivocations this
     *  value should relate to the bonding duration of whatever staking system is
     *  being used (if any). If equivocation handling is not enabled then this value
     *  can be zero.
     */
    get asV120(): bigint {
        assert(this.isV120)
        return this._chain.getConstant('Grandpa', 'MaxSetIdSessionEntries')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('Grandpa', 'MaxSetIdSessionEntries') != null
    }
}

export class SubtensorModuleInitialActivityCutoffConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    get isV120() {
        return this._chain.getConstantTypeHash('SubtensorModule', 'InitialActivityCutoff') === '32def12560ecd411fe2fc796552e97d0d5ee0ea10e059b3d8918c9e94dfdb334'
    }

    get asV120(): number {
        assert(this.isV120)
        return this._chain.getConstant('SubtensorModule', 'InitialActivityCutoff')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('SubtensorModule', 'InitialActivityCutoff') != null
    }
}

export class SubtensorModuleInitialAdjustmentIntervalConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    get isV120() {
        return this._chain.getConstantTypeHash('SubtensorModule', 'InitialAdjustmentInterval') === '32def12560ecd411fe2fc796552e97d0d5ee0ea10e059b3d8918c9e94dfdb334'
    }

    get asV120(): number {
        assert(this.isV120)
        return this._chain.getConstant('SubtensorModule', 'InitialAdjustmentInterval')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('SubtensorModule', 'InitialAdjustmentInterval') != null
    }
}

export class SubtensorModuleInitialBondsMovingAverageConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    get isV120() {
        return this._chain.getConstantTypeHash('SubtensorModule', 'InitialBondsMovingAverage') === '2e8052d0ae8d237ad263438f986208df52f4f0e9f529557036c3b179dfb42f21'
    }

    get asV120(): bigint {
        assert(this.isV120)
        return this._chain.getConstant('SubtensorModule', 'InitialBondsMovingAverage')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('SubtensorModule', 'InitialBondsMovingAverage') != null
    }
}

export class SubtensorModuleInitialBurnConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    get isV120() {
        return this._chain.getConstantTypeHash('SubtensorModule', 'InitialBurn') === '2e8052d0ae8d237ad263438f986208df52f4f0e9f529557036c3b179dfb42f21'
    }

    get asV120(): bigint {
        assert(this.isV120)
        return this._chain.getConstant('SubtensorModule', 'InitialBurn')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('SubtensorModule', 'InitialBurn') != null
    }
}

export class SubtensorModuleInitialDefaultTakeConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    get isV120() {
        return this._chain.getConstantTypeHash('SubtensorModule', 'InitialDefaultTake') === '32def12560ecd411fe2fc796552e97d0d5ee0ea10e059b3d8918c9e94dfdb334'
    }

    get asV120(): number {
        assert(this.isV120)
        return this._chain.getConstant('SubtensorModule', 'InitialDefaultTake')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('SubtensorModule', 'InitialDefaultTake') != null
    }
}

export class SubtensorModuleInitialDifficultyConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    get isV120() {
        return this._chain.getConstantTypeHash('SubtensorModule', 'InitialDifficulty') === '2e8052d0ae8d237ad263438f986208df52f4f0e9f529557036c3b179dfb42f21'
    }

    get asV120(): bigint {
        assert(this.isV120)
        return this._chain.getConstant('SubtensorModule', 'InitialDifficulty')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('SubtensorModule', 'InitialDifficulty') != null
    }
}

export class SubtensorModuleInitialEmissionValueConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    get isV120() {
        return this._chain.getConstantTypeHash('SubtensorModule', 'InitialEmissionValue') === '32def12560ecd411fe2fc796552e97d0d5ee0ea10e059b3d8918c9e94dfdb334'
    }

    get asV120(): number {
        assert(this.isV120)
        return this._chain.getConstant('SubtensorModule', 'InitialEmissionValue')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('SubtensorModule', 'InitialEmissionValue') != null
    }
}

export class SubtensorModuleInitialImmunityPeriodConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    get isV120() {
        return this._chain.getConstantTypeHash('SubtensorModule', 'InitialImmunityPeriod') === '32def12560ecd411fe2fc796552e97d0d5ee0ea10e059b3d8918c9e94dfdb334'
    }

    get asV120(): number {
        assert(this.isV120)
        return this._chain.getConstant('SubtensorModule', 'InitialImmunityPeriod')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('SubtensorModule', 'InitialImmunityPeriod') != null
    }
}

export class SubtensorModuleInitialIssuanceConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    get isV120() {
        return this._chain.getConstantTypeHash('SubtensorModule', 'InitialIssuance') === '2e8052d0ae8d237ad263438f986208df52f4f0e9f529557036c3b179dfb42f21'
    }

    get asV120(): bigint {
        assert(this.isV120)
        return this._chain.getConstant('SubtensorModule', 'InitialIssuance')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('SubtensorModule', 'InitialIssuance') != null
    }
}

export class SubtensorModuleInitialKappaConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    get isV120() {
        return this._chain.getConstantTypeHash('SubtensorModule', 'InitialKappa') === '32def12560ecd411fe2fc796552e97d0d5ee0ea10e059b3d8918c9e94dfdb334'
    }

    get asV120(): number {
        assert(this.isV120)
        return this._chain.getConstant('SubtensorModule', 'InitialKappa')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('SubtensorModule', 'InitialKappa') != null
    }
}

export class SubtensorModuleInitialMaxAllowedUidsConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    get isV120() {
        return this._chain.getConstantTypeHash('SubtensorModule', 'InitialMaxAllowedUids') === '32def12560ecd411fe2fc796552e97d0d5ee0ea10e059b3d8918c9e94dfdb334'
    }

    get asV120(): number {
        assert(this.isV120)
        return this._chain.getConstant('SubtensorModule', 'InitialMaxAllowedUids')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('SubtensorModule', 'InitialMaxAllowedUids') != null
    }
}

export class SubtensorModuleInitialMaxAllowedValidatorsConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    get isV120() {
        return this._chain.getConstantTypeHash('SubtensorModule', 'InitialMaxAllowedValidators') === '32def12560ecd411fe2fc796552e97d0d5ee0ea10e059b3d8918c9e94dfdb334'
    }

    get asV120(): number {
        assert(this.isV120)
        return this._chain.getConstant('SubtensorModule', 'InitialMaxAllowedValidators')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('SubtensorModule', 'InitialMaxAllowedValidators') != null
    }
}

export class SubtensorModuleInitialMaxBurnConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    get isV120() {
        return this._chain.getConstantTypeHash('SubtensorModule', 'InitialMaxBurn') === '2e8052d0ae8d237ad263438f986208df52f4f0e9f529557036c3b179dfb42f21'
    }

    get asV120(): bigint {
        assert(this.isV120)
        return this._chain.getConstant('SubtensorModule', 'InitialMaxBurn')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('SubtensorModule', 'InitialMaxBurn') != null
    }
}

export class SubtensorModuleInitialMaxDifficultyConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    get isV120() {
        return this._chain.getConstantTypeHash('SubtensorModule', 'InitialMaxDifficulty') === '2e8052d0ae8d237ad263438f986208df52f4f0e9f529557036c3b179dfb42f21'
    }

    get asV120(): bigint {
        assert(this.isV120)
        return this._chain.getConstant('SubtensorModule', 'InitialMaxDifficulty')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('SubtensorModule', 'InitialMaxDifficulty') != null
    }
}

export class SubtensorModuleInitialMaxRegistrationsPerBlockConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    get isV120() {
        return this._chain.getConstantTypeHash('SubtensorModule', 'InitialMaxRegistrationsPerBlock') === '32def12560ecd411fe2fc796552e97d0d5ee0ea10e059b3d8918c9e94dfdb334'
    }

    get asV120(): number {
        assert(this.isV120)
        return this._chain.getConstant('SubtensorModule', 'InitialMaxRegistrationsPerBlock')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('SubtensorModule', 'InitialMaxRegistrationsPerBlock') != null
    }
}

export class SubtensorModuleInitialMaxWeightsLimitConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    get isV120() {
        return this._chain.getConstantTypeHash('SubtensorModule', 'InitialMaxWeightsLimit') === '32def12560ecd411fe2fc796552e97d0d5ee0ea10e059b3d8918c9e94dfdb334'
    }

    get asV120(): number {
        assert(this.isV120)
        return this._chain.getConstant('SubtensorModule', 'InitialMaxWeightsLimit')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('SubtensorModule', 'InitialMaxWeightsLimit') != null
    }
}

export class SubtensorModuleInitialMinAllowedWeightsConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    get isV120() {
        return this._chain.getConstantTypeHash('SubtensorModule', 'InitialMinAllowedWeights') === '32def12560ecd411fe2fc796552e97d0d5ee0ea10e059b3d8918c9e94dfdb334'
    }

    get asV120(): number {
        assert(this.isV120)
        return this._chain.getConstant('SubtensorModule', 'InitialMinAllowedWeights')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('SubtensorModule', 'InitialMinAllowedWeights') != null
    }
}

export class SubtensorModuleInitialMinBurnConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    get isV120() {
        return this._chain.getConstantTypeHash('SubtensorModule', 'InitialMinBurn') === '2e8052d0ae8d237ad263438f986208df52f4f0e9f529557036c3b179dfb42f21'
    }

    get asV120(): bigint {
        assert(this.isV120)
        return this._chain.getConstant('SubtensorModule', 'InitialMinBurn')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('SubtensorModule', 'InitialMinBurn') != null
    }
}

export class SubtensorModuleInitialMinDifficultyConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    get isV120() {
        return this._chain.getConstantTypeHash('SubtensorModule', 'InitialMinDifficulty') === '2e8052d0ae8d237ad263438f986208df52f4f0e9f529557036c3b179dfb42f21'
    }

    get asV120(): bigint {
        assert(this.isV120)
        return this._chain.getConstant('SubtensorModule', 'InitialMinDifficulty')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('SubtensorModule', 'InitialMinDifficulty') != null
    }
}

export class SubtensorModuleInitialPruningScoreConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    get isV120() {
        return this._chain.getConstantTypeHash('SubtensorModule', 'InitialPruningScore') === '32def12560ecd411fe2fc796552e97d0d5ee0ea10e059b3d8918c9e94dfdb334'
    }

    get asV120(): number {
        assert(this.isV120)
        return this._chain.getConstant('SubtensorModule', 'InitialPruningScore')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('SubtensorModule', 'InitialPruningScore') != null
    }
}

export class SubtensorModuleInitialRAORecycledForRegistrationConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    get isV120() {
        return this._chain.getConstantTypeHash('SubtensorModule', 'InitialRAORecycledForRegistration') === '2e8052d0ae8d237ad263438f986208df52f4f0e9f529557036c3b179dfb42f21'
    }

    get asV120(): bigint {
        assert(this.isV120)
        return this._chain.getConstant('SubtensorModule', 'InitialRAORecycledForRegistration')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('SubtensorModule', 'InitialRAORecycledForRegistration') != null
    }
}

export class SubtensorModuleInitialRhoConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    get isV120() {
        return this._chain.getConstantTypeHash('SubtensorModule', 'InitialRho') === '32def12560ecd411fe2fc796552e97d0d5ee0ea10e059b3d8918c9e94dfdb334'
    }

    get asV120(): number {
        assert(this.isV120)
        return this._chain.getConstant('SubtensorModule', 'InitialRho')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('SubtensorModule', 'InitialRho') != null
    }
}

export class SubtensorModuleInitialScalingLawPowerConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    get isV120() {
        return this._chain.getConstantTypeHash('SubtensorModule', 'InitialScalingLawPower') === '32def12560ecd411fe2fc796552e97d0d5ee0ea10e059b3d8918c9e94dfdb334'
    }

    get asV120(): number {
        assert(this.isV120)
        return this._chain.getConstant('SubtensorModule', 'InitialScalingLawPower')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('SubtensorModule', 'InitialScalingLawPower') != null
    }
}

export class SubtensorModuleInitialServingRateLimitConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    get isV120() {
        return this._chain.getConstantTypeHash('SubtensorModule', 'InitialServingRateLimit') === '2e8052d0ae8d237ad263438f986208df52f4f0e9f529557036c3b179dfb42f21'
    }

    get asV120(): bigint {
        assert(this.isV120)
        return this._chain.getConstant('SubtensorModule', 'InitialServingRateLimit')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('SubtensorModule', 'InitialServingRateLimit') != null
    }
}

export class SubtensorModuleInitialSynergyScalingLawPowerConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    get isV120() {
        return this._chain.getConstantTypeHash('SubtensorModule', 'InitialSynergyScalingLawPower') === '32def12560ecd411fe2fc796552e97d0d5ee0ea10e059b3d8918c9e94dfdb334'
    }

    get asV120(): number {
        assert(this.isV120)
        return this._chain.getConstant('SubtensorModule', 'InitialSynergyScalingLawPower')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('SubtensorModule', 'InitialSynergyScalingLawPower') != null
    }
}

export class SubtensorModuleInitialTargetRegistrationsPerIntervalConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    get isV120() {
        return this._chain.getConstantTypeHash('SubtensorModule', 'InitialTargetRegistrationsPerInterval') === '32def12560ecd411fe2fc796552e97d0d5ee0ea10e059b3d8918c9e94dfdb334'
    }

    get asV120(): number {
        assert(this.isV120)
        return this._chain.getConstant('SubtensorModule', 'InitialTargetRegistrationsPerInterval')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('SubtensorModule', 'InitialTargetRegistrationsPerInterval') != null
    }
}

export class SubtensorModuleInitialTempoConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    get isV120() {
        return this._chain.getConstantTypeHash('SubtensorModule', 'InitialTempo') === '32def12560ecd411fe2fc796552e97d0d5ee0ea10e059b3d8918c9e94dfdb334'
    }

    get asV120(): number {
        assert(this.isV120)
        return this._chain.getConstant('SubtensorModule', 'InitialTempo')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('SubtensorModule', 'InitialTempo') != null
    }
}

export class SubtensorModuleInitialTxRateLimitConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    get isV120() {
        return this._chain.getConstantTypeHash('SubtensorModule', 'InitialTxRateLimit') === '2e8052d0ae8d237ad263438f986208df52f4f0e9f529557036c3b179dfb42f21'
    }

    get asV120(): bigint {
        assert(this.isV120)
        return this._chain.getConstant('SubtensorModule', 'InitialTxRateLimit')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('SubtensorModule', 'InitialTxRateLimit') != null
    }
}

export class SubtensorModuleInitialValidatorBatchSizeConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    get isV120() {
        return this._chain.getConstantTypeHash('SubtensorModule', 'InitialValidatorBatchSize') === '32def12560ecd411fe2fc796552e97d0d5ee0ea10e059b3d8918c9e94dfdb334'
    }

    get asV120(): number {
        assert(this.isV120)
        return this._chain.getConstant('SubtensorModule', 'InitialValidatorBatchSize')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('SubtensorModule', 'InitialValidatorBatchSize') != null
    }
}

export class SubtensorModuleInitialValidatorEpochLenConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    get isV120() {
        return this._chain.getConstantTypeHash('SubtensorModule', 'InitialValidatorEpochLen') === '32def12560ecd411fe2fc796552e97d0d5ee0ea10e059b3d8918c9e94dfdb334'
    }

    get asV120(): number {
        assert(this.isV120)
        return this._chain.getConstant('SubtensorModule', 'InitialValidatorEpochLen')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('SubtensorModule', 'InitialValidatorEpochLen') != null
    }
}

export class SubtensorModuleInitialValidatorEpochsPerResetConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    get isV120() {
        return this._chain.getConstantTypeHash('SubtensorModule', 'InitialValidatorEpochsPerReset') === '32def12560ecd411fe2fc796552e97d0d5ee0ea10e059b3d8918c9e94dfdb334'
    }

    get asV120(): number {
        assert(this.isV120)
        return this._chain.getConstant('SubtensorModule', 'InitialValidatorEpochsPerReset')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('SubtensorModule', 'InitialValidatorEpochsPerReset') != null
    }
}

export class SubtensorModuleInitialValidatorExcludeQuantileConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    get isV120() {
        return this._chain.getConstantTypeHash('SubtensorModule', 'InitialValidatorExcludeQuantile') === '32def12560ecd411fe2fc796552e97d0d5ee0ea10e059b3d8918c9e94dfdb334'
    }

    get asV120(): number {
        assert(this.isV120)
        return this._chain.getConstant('SubtensorModule', 'InitialValidatorExcludeQuantile')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('SubtensorModule', 'InitialValidatorExcludeQuantile') != null
    }
}

export class SubtensorModuleInitialValidatorLogitsDivergenceConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    get isV120() {
        return this._chain.getConstantTypeHash('SubtensorModule', 'InitialValidatorLogitsDivergence') === '32def12560ecd411fe2fc796552e97d0d5ee0ea10e059b3d8918c9e94dfdb334'
    }

    get asV120(): number {
        assert(this.isV120)
        return this._chain.getConstant('SubtensorModule', 'InitialValidatorLogitsDivergence')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('SubtensorModule', 'InitialValidatorLogitsDivergence') != null
    }
}

export class SubtensorModuleInitialValidatorPruneLenConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    get isV120() {
        return this._chain.getConstantTypeHash('SubtensorModule', 'InitialValidatorPruneLen') === '2e8052d0ae8d237ad263438f986208df52f4f0e9f529557036c3b179dfb42f21'
    }

    get asV120(): bigint {
        assert(this.isV120)
        return this._chain.getConstant('SubtensorModule', 'InitialValidatorPruneLen')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('SubtensorModule', 'InitialValidatorPruneLen') != null
    }
}

export class SubtensorModuleInitialValidatorSequenceLenConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    get isV120() {
        return this._chain.getConstantTypeHash('SubtensorModule', 'InitialValidatorSequenceLen') === '32def12560ecd411fe2fc796552e97d0d5ee0ea10e059b3d8918c9e94dfdb334'
    }

    get asV120(): number {
        assert(this.isV120)
        return this._chain.getConstant('SubtensorModule', 'InitialValidatorSequenceLen')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('SubtensorModule', 'InitialValidatorSequenceLen') != null
    }
}

export class SubtensorModuleInitialWeightsVersionKeyConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    get isV120() {
        return this._chain.getConstantTypeHash('SubtensorModule', 'InitialWeightsVersionKey') === '2e8052d0ae8d237ad263438f986208df52f4f0e9f529557036c3b179dfb42f21'
    }

    get asV120(): bigint {
        assert(this.isV120)
        return this._chain.getConstant('SubtensorModule', 'InitialWeightsVersionKey')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('SubtensorModule', 'InitialWeightsVersionKey') != null
    }
}

export class SystemBlockHashCountConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    /**
     *  Maximum number of block number to block hash mappings to keep (oldest pruned first).
     */
    get isV120() {
        return this._chain.getConstantTypeHash('System', 'BlockHashCount') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
    }

    /**
     *  Maximum number of block number to block hash mappings to keep (oldest pruned first).
     */
    get asV120(): number {
        assert(this.isV120)
        return this._chain.getConstant('System', 'BlockHashCount')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('System', 'BlockHashCount') != null
    }
}

export class SystemBlockLengthConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    /**
     *  The maximum length of a block (in bytes).
     */
    get isV120() {
        return this._chain.getConstantTypeHash('System', 'BlockLength') === '9aacf667c67dbae172e6d30e5f4026086c8a56d9ebfe50dfdcca3fe40a9f55ca'
    }

    /**
     *  The maximum length of a block (in bytes).
     */
    get asV120(): v120.BlockLength {
        assert(this.isV120)
        return this._chain.getConstant('System', 'BlockLength')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('System', 'BlockLength') != null
    }
}

export class SystemBlockWeightsConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    /**
     *  Block & extrinsics weights: base values and limits.
     */
    get isV120() {
        return this._chain.getConstantTypeHash('System', 'BlockWeights') === 'fa5692d9032f25a42ae01892fea053f75130751d1302a6b4db45a7a98a9d0760'
    }

    /**
     *  Block & extrinsics weights: base values and limits.
     */
    get asV120(): v120.BlockWeights {
        assert(this.isV120)
        return this._chain.getConstant('System', 'BlockWeights')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('System', 'BlockWeights') != null
    }
}

export class SystemDbWeightConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    /**
     *  The weight of runtime database operations the runtime can invoke.
     */
    get isV120() {
        return this._chain.getConstantTypeHash('System', 'DbWeight') === 'f2b1a28b00823bafa34a2cd3123e2e54de1b56f53266976a0fa1bbffc1833341'
    }

    /**
     *  The weight of runtime database operations the runtime can invoke.
     */
    get asV120(): v120.RuntimeDbWeight {
        assert(this.isV120)
        return this._chain.getConstant('System', 'DbWeight')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('System', 'DbWeight') != null
    }
}

export class SystemSS58PrefixConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    /**
     *  The designated SS58 prefix of this chain.
     * 
     *  This replaces the "ss58Format" property declared in the chain spec. Reason is
     *  that the runtime should know about the prefix in order to make use of it as
     *  an identifier of the chain.
     */
    get isV120() {
        return this._chain.getConstantTypeHash('System', 'SS58Prefix') === '32def12560ecd411fe2fc796552e97d0d5ee0ea10e059b3d8918c9e94dfdb334'
    }

    /**
     *  The designated SS58 prefix of this chain.
     * 
     *  This replaces the "ss58Format" property declared in the chain spec. Reason is
     *  that the runtime should know about the prefix in order to make use of it as
     *  an identifier of the chain.
     */
    get asV120(): number {
        assert(this.isV120)
        return this._chain.getConstant('System', 'SS58Prefix')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('System', 'SS58Prefix') != null
    }
}

export class SystemVersionConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    /**
     *  Get the chain's current version.
     */
    get isV120() {
        return this._chain.getConstantTypeHash('System', 'Version') === 'f6a7df964a5f6d420bccc7ccc38bd9265b00dc71b74c91dc5848badeeaf0cbb8'
    }

    /**
     *  Get the chain's current version.
     */
    get asV120(): v120.RuntimeVersion {
        assert(this.isV120)
        return this._chain.getConstant('System', 'Version')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('System', 'Version') != null
    }
}

export class TimestampMinimumPeriodConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    /**
     *  The minimum period between blocks. Beware that this is different to the *expected*
     *  period that the block production apparatus provides. Your chosen consensus system will
     *  generally work with this to determine a sensible block time. e.g. For Aura, it will be
     *  double this period on default settings.
     */
    get isV120() {
        return this._chain.getConstantTypeHash('Timestamp', 'MinimumPeriod') === '2e8052d0ae8d237ad263438f986208df52f4f0e9f529557036c3b179dfb42f21'
    }

    /**
     *  The minimum period between blocks. Beware that this is different to the *expected*
     *  period that the block production apparatus provides. Your chosen consensus system will
     *  generally work with this to determine a sensible block time. e.g. For Aura, it will be
     *  double this period on default settings.
     */
    get asV120(): bigint {
        assert(this.isV120)
        return this._chain.getConstant('Timestamp', 'MinimumPeriod')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('Timestamp', 'MinimumPeriod') != null
    }
}

export class TransactionPaymentOperationalFeeMultiplierConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    /**
     *  A fee mulitplier for `Operational` extrinsics to compute "virtual tip" to boost their
     *  `priority`
     * 
     *  This value is multipled by the `final_fee` to obtain a "virtual tip" that is later
     *  added to a tip component in regular `priority` calculations.
     *  It means that a `Normal` transaction can front-run a similarly-sized `Operational`
     *  extrinsic (with no tip), by including a tip value greater than the virtual tip.
     * 
     *  ```rust,ignore
     *  // For `Normal`
     *  let priority = priority_calc(tip);
     * 
     *  // For `Operational`
     *  let virtual_tip = (inclusion_fee + tip) * OperationalFeeMultiplier;
     *  let priority = priority_calc(tip + virtual_tip);
     *  ```
     * 
     *  Note that since we use `final_fee` the multiplier applies also to the regular `tip`
     *  sent with the transaction. So, not only does the transaction get a priority bump based
     *  on the `inclusion_fee`, but we also amplify the impact of tips applied to `Operational`
     *  transactions.
     */
    get isV120() {
        return this._chain.getConstantTypeHash('TransactionPayment', 'OperationalFeeMultiplier') === 'afecacff3b029831d50a478055aa405254e6579585f9617d2a2f34743b4aff83'
    }

    /**
     *  A fee mulitplier for `Operational` extrinsics to compute "virtual tip" to boost their
     *  `priority`
     * 
     *  This value is multipled by the `final_fee` to obtain a "virtual tip" that is later
     *  added to a tip component in regular `priority` calculations.
     *  It means that a `Normal` transaction can front-run a similarly-sized `Operational`
     *  extrinsic (with no tip), by including a tip value greater than the virtual tip.
     * 
     *  ```rust,ignore
     *  // For `Normal`
     *  let priority = priority_calc(tip);
     * 
     *  // For `Operational`
     *  let virtual_tip = (inclusion_fee + tip) * OperationalFeeMultiplier;
     *  let priority = priority_calc(tip + virtual_tip);
     *  ```
     * 
     *  Note that since we use `final_fee` the multiplier applies also to the regular `tip`
     *  sent with the transaction. So, not only does the transaction get a priority bump based
     *  on the `inclusion_fee`, but we also amplify the impact of tips applied to `Operational`
     *  transactions.
     */
    get asV120(): number {
        assert(this.isV120)
        return this._chain.getConstant('TransactionPayment', 'OperationalFeeMultiplier')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('TransactionPayment', 'OperationalFeeMultiplier') != null
    }
}

export class Utilitybatched_calls_limitConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    /**
     *  The limit on the number of batched calls.
     */
    get isV120() {
        return this._chain.getConstantTypeHash('Utility', 'batched_calls_limit') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
    }

    /**
     *  The limit on the number of batched calls.
     */
    get asV120(): number {
        assert(this.isV120)
        return this._chain.getConstant('Utility', 'batched_calls_limit')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('Utility', 'batched_calls_limit') != null
    }
}
