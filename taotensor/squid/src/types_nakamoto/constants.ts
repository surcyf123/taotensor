import assert from 'assert'
import {Block, Chain, ChainContext, BlockContext, Result, Option} from './support'
import * as v100 from './v100'
import * as v102 from './v102'

export class BalancesExistentialDepositConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    /**
     *  The minimum amount required to keep an account open.
     */
    get isV100() {
        return this._chain.getConstantTypeHash('Balances', 'ExistentialDeposit') === 'a73c503ad07b8dce07ffc3646a2c7aeacb1280015e3b79887f6a9b11dae120f1'
    }

    /**
     *  The minimum amount required to keep an account open.
     */
    get asV100(): bigint {
        assert(this.isV100)
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
    get isV102() {
        return this._chain.getConstantTypeHash('Balances', 'MaxLocks') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
    }

    /**
     *  The maximum number of locks that should exist on an account.
     *  Not strictly enforced, but used for weight estimation.
     */
    get asV102(): number {
        assert(this.isV102)
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
    get isV102() {
        return this._chain.getConstantTypeHash('Balances', 'MaxReserves') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
    }

    /**
     *  The maximum number of named reserves that can exist on an account.
     */
    get asV102(): number {
        assert(this.isV102)
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
    get isV102() {
        return this._chain.getConstantTypeHash('Grandpa', 'MaxAuthorities') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
    }

    /**
     *  Max Authorities in use
     */
    get asV102(): number {
        assert(this.isV102)
        return this._chain.getConstant('Grandpa', 'MaxAuthorities')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('Grandpa', 'MaxAuthorities') != null
    }
}

export class SubtensorModuleInitialActivityCutoffConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    /**
     *  Activity constant
     */
    get isV100() {
        return this._chain.getConstantTypeHash('SubtensorModule', 'InitialActivityCutoff') === '2e8052d0ae8d237ad263438f986208df52f4f0e9f529557036c3b179dfb42f21'
    }

    /**
     *  Activity constant
     */
    get asV100(): bigint {
        assert(this.isV100)
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

    /**
     *  Initial adjustment interval.
     */
    get isV100() {
        return this._chain.getConstantTypeHash('SubtensorModule', 'InitialAdjustmentInterval') === '2e8052d0ae8d237ad263438f986208df52f4f0e9f529557036c3b179dfb42f21'
    }

    /**
     *  Initial adjustment interval.
     */
    get asV100(): bigint {
        assert(this.isV100)
        return this._chain.getConstant('SubtensorModule', 'InitialAdjustmentInterval')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('SubtensorModule', 'InitialAdjustmentInterval') != null
    }
}

export class SubtensorModuleInitialBlocksPerStepConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    /**
     *  Blocks per step.
     */
    get isV105() {
        return this._chain.getConstantTypeHash('SubtensorModule', 'InitialBlocksPerStep') === '2e8052d0ae8d237ad263438f986208df52f4f0e9f529557036c3b179dfb42f21'
    }

    /**
     *  Blocks per step.
     */
    get asV105(): bigint {
        assert(this.isV105)
        return this._chain.getConstant('SubtensorModule', 'InitialBlocksPerStep')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('SubtensorModule', 'InitialBlocksPerStep') != null
    }
}

export class SubtensorModuleInitialBondsMovingAverageConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    /**
     *  Blocks per era.
     */
    get isV117() {
        return this._chain.getConstantTypeHash('SubtensorModule', 'InitialBondsMovingAverage') === '2e8052d0ae8d237ad263438f986208df52f4f0e9f529557036c3b179dfb42f21'
    }

    /**
     *  Blocks per era.
     */
    get asV117(): bigint {
        assert(this.isV117)
        return this._chain.getConstant('SubtensorModule', 'InitialBondsMovingAverage')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('SubtensorModule', 'InitialBondsMovingAverage') != null
    }
}

export class SubtensorModuleInitialDifficultyConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    /**
     *  Initial registration difficulty.
     */
    get isV100() {
        return this._chain.getConstantTypeHash('SubtensorModule', 'InitialDifficulty') === '2e8052d0ae8d237ad263438f986208df52f4f0e9f529557036c3b179dfb42f21'
    }

    /**
     *  Initial registration difficulty.
     */
    get asV100(): bigint {
        assert(this.isV100)
        return this._chain.getConstant('SubtensorModule', 'InitialDifficulty')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('SubtensorModule', 'InitialDifficulty') != null
    }
}

export class SubtensorModuleInitialFoundationDistributionConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    /**
     *  Initial foundation distribution
     */
    get isV117() {
        return this._chain.getConstantTypeHash('SubtensorModule', 'InitialFoundationDistribution') === '2e8052d0ae8d237ad263438f986208df52f4f0e9f529557036c3b179dfb42f21'
    }

    /**
     *  Initial foundation distribution
     */
    get asV117(): bigint {
        assert(this.isV117)
        return this._chain.getConstant('SubtensorModule', 'InitialFoundationDistribution')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('SubtensorModule', 'InitialFoundationDistribution') != null
    }
}

export class SubtensorModuleInitialImmunityPeriodConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    /**
     *  Immunity Period Constant.
     */
    get isV107() {
        return this._chain.getConstantTypeHash('SubtensorModule', 'InitialImmunityPeriod') === '2e8052d0ae8d237ad263438f986208df52f4f0e9f529557036c3b179dfb42f21'
    }

    /**
     *  Immunity Period Constant.
     */
    get asV107(): bigint {
        assert(this.isV107)
        return this._chain.getConstant('SubtensorModule', 'InitialImmunityPeriod')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('SubtensorModule', 'InitialImmunityPeriod') != null
    }
}

export class SubtensorModuleInitialIncentivePruningDenominatorConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    /**
     *  Initial incentive pruning denominator
     */
    get isV117() {
        return this._chain.getConstantTypeHash('SubtensorModule', 'InitialIncentivePruningDenominator') === '2e8052d0ae8d237ad263438f986208df52f4f0e9f529557036c3b179dfb42f21'
    }

    /**
     *  Initial incentive pruning denominator
     */
    get asV117(): bigint {
        assert(this.isV117)
        return this._chain.getConstant('SubtensorModule', 'InitialIncentivePruningDenominator')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('SubtensorModule', 'InitialIncentivePruningDenominator') != null
    }
}

export class SubtensorModuleInitialIssuanceConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    /**
     *  Initial registration difficulty.
     */
    get isV100() {
        return this._chain.getConstantTypeHash('SubtensorModule', 'InitialIssuance') === '2e8052d0ae8d237ad263438f986208df52f4f0e9f529557036c3b179dfb42f21'
    }

    /**
     *  Initial registration difficulty.
     */
    get asV100(): bigint {
        assert(this.isV100)
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

    /**
     *  Kappa constant
     */
    get isV107() {
        return this._chain.getConstantTypeHash('SubtensorModule', 'InitialKappa') === '2e8052d0ae8d237ad263438f986208df52f4f0e9f529557036c3b179dfb42f21'
    }

    /**
     *  Kappa constant
     */
    get asV107(): bigint {
        assert(this.isV107)
        return this._chain.getConstant('SubtensorModule', 'InitialKappa')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('SubtensorModule', 'InitialKappa') != null
    }
}

export class SubtensorModuleInitialMaxAllowedMaxMinRatioConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    /**
     *  Initial allowed max min weight ratio
     */
    get isV117() {
        return this._chain.getConstantTypeHash('SubtensorModule', 'InitialMaxAllowedMaxMinRatio') === '2e8052d0ae8d237ad263438f986208df52f4f0e9f529557036c3b179dfb42f21'
    }

    /**
     *  Initial allowed max min weight ratio
     */
    get asV117(): bigint {
        assert(this.isV117)
        return this._chain.getConstant('SubtensorModule', 'InitialMaxAllowedMaxMinRatio')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('SubtensorModule', 'InitialMaxAllowedMaxMinRatio') != null
    }
}

export class SubtensorModuleInitialMaxAllowedUidsConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    /**
     *  Max UID constant
     */
    get isV107() {
        return this._chain.getConstantTypeHash('SubtensorModule', 'InitialMaxAllowedUids') === '2e8052d0ae8d237ad263438f986208df52f4f0e9f529557036c3b179dfb42f21'
    }

    /**
     *  Max UID constant
     */
    get asV107(): bigint {
        assert(this.isV107)
        return this._chain.getConstant('SubtensorModule', 'InitialMaxAllowedUids')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('SubtensorModule', 'InitialMaxAllowedUids') != null
    }
}

export class SubtensorModuleInitialMaxRegistrationsPerBlockConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    /**
     *  Initial max registrations per block.
     */
    get isV100() {
        return this._chain.getConstantTypeHash('SubtensorModule', 'InitialMaxRegistrationsPerBlock') === '2e8052d0ae8d237ad263438f986208df52f4f0e9f529557036c3b179dfb42f21'
    }

    /**
     *  Initial max registrations per block.
     */
    get asV100(): bigint {
        assert(this.isV100)
        return this._chain.getConstant('SubtensorModule', 'InitialMaxRegistrationsPerBlock')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('SubtensorModule', 'InitialMaxRegistrationsPerBlock') != null
    }
}

export class SubtensorModuleInitialMaxWeightLimitConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    /**
     *  Initial max weight limit.
     */
    get isV111() {
        return this._chain.getConstantTypeHash('SubtensorModule', 'InitialMaxWeightLimit') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
    }

    /**
     *  Initial max weight limit.
     */
    get asV111(): number {
        assert(this.isV111)
        return this._chain.getConstant('SubtensorModule', 'InitialMaxWeightLimit')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('SubtensorModule', 'InitialMaxWeightLimit') != null
    }
}

export class SubtensorModuleInitialMinAllowedWeightsConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    /**
     *  Initial min allowed weights.
     */
    get isV117() {
        return this._chain.getConstantTypeHash('SubtensorModule', 'InitialMinAllowedWeights') === '2e8052d0ae8d237ad263438f986208df52f4f0e9f529557036c3b179dfb42f21'
    }

    /**
     *  Initial min allowed weights.
     */
    get asV117(): bigint {
        assert(this.isV117)
        return this._chain.getConstant('SubtensorModule', 'InitialMinAllowedWeights')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('SubtensorModule', 'InitialMinAllowedWeights') != null
    }
}

export class SubtensorModuleInitialRhoConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    /**
     *  Rho constant
     */
    get isV107() {
        return this._chain.getConstantTypeHash('SubtensorModule', 'InitialRho') === '2e8052d0ae8d237ad263438f986208df52f4f0e9f529557036c3b179dfb42f21'
    }

    /**
     *  Rho constant
     */
    get asV107(): bigint {
        assert(this.isV107)
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

    /**
     *  Initial scaling law power.
     */
    get isV111() {
        return this._chain.getConstantTypeHash('SubtensorModule', 'InitialScalingLawPower') === 'afecacff3b029831d50a478055aa405254e6579585f9617d2a2f34743b4aff83'
    }

    /**
     *  Initial scaling law power.
     */
    get asV111(): number {
        assert(this.isV111)
        return this._chain.getConstant('SubtensorModule', 'InitialScalingLawPower')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('SubtensorModule', 'InitialScalingLawPower') != null
    }
}

export class SubtensorModuleInitialStakePruningDenominatorConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    /**
     *  Initial stake pruning denominator
     */
    get isV117() {
        return this._chain.getConstantTypeHash('SubtensorModule', 'InitialStakePruningDenominator') === '2e8052d0ae8d237ad263438f986208df52f4f0e9f529557036c3b179dfb42f21'
    }

    /**
     *  Initial stake pruning denominator
     */
    get asV117(): bigint {
        assert(this.isV117)
        return this._chain.getConstant('SubtensorModule', 'InitialStakePruningDenominator')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('SubtensorModule', 'InitialStakePruningDenominator') != null
    }
}

export class SubtensorModuleInitialStakePruningMinConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    /**
     *  Initial stake pruning min
     */
    get isV108() {
        return this._chain.getConstantTypeHash('SubtensorModule', 'InitialStakePruningMin') === '2e8052d0ae8d237ad263438f986208df52f4f0e9f529557036c3b179dfb42f21'
    }

    /**
     *  Initial stake pruning min
     */
    get asV108(): bigint {
        assert(this.isV108)
        return this._chain.getConstant('SubtensorModule', 'InitialStakePruningMin')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('SubtensorModule', 'InitialStakePruningMin') != null
    }
}

export class SubtensorModuleInitialSynergyScalingLawPowerConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    /**
     *  Initial synergy scaling law power.
     */
    get isV111() {
        return this._chain.getConstantTypeHash('SubtensorModule', 'InitialSynergyScalingLawPower') === 'afecacff3b029831d50a478055aa405254e6579585f9617d2a2f34743b4aff83'
    }

    /**
     *  Initial synergy scaling law power.
     */
    get asV111(): number {
        assert(this.isV111)
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

    /**
     *  Initial target registrations per interval.
     */
    get isV100() {
        return this._chain.getConstantTypeHash('SubtensorModule', 'InitialTargetRegistrationsPerInterval') === '2e8052d0ae8d237ad263438f986208df52f4f0e9f529557036c3b179dfb42f21'
    }

    /**
     *  Initial target registrations per interval.
     */
    get asV100(): bigint {
        assert(this.isV100)
        return this._chain.getConstant('SubtensorModule', 'InitialTargetRegistrationsPerInterval')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('SubtensorModule', 'InitialTargetRegistrationsPerInterval') != null
    }
}

export class SubtensorModuleInitialValidatorBatchSizeConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    /**
     *  Default Batch size.
     */
    get isV117() {
        return this._chain.getConstantTypeHash('SubtensorModule', 'InitialValidatorBatchSize') === '2e8052d0ae8d237ad263438f986208df52f4f0e9f529557036c3b179dfb42f21'
    }

    /**
     *  Default Batch size.
     */
    get asV117(): bigint {
        assert(this.isV117)
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

    /**
     *  Default Epoch length.
     */
    get isV117() {
        return this._chain.getConstantTypeHash('SubtensorModule', 'InitialValidatorEpochLen') === '2e8052d0ae8d237ad263438f986208df52f4f0e9f529557036c3b179dfb42f21'
    }

    /**
     *  Default Epoch length.
     */
    get asV117(): bigint {
        assert(this.isV117)
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

    /**
     *  Default Reset length.
     */
    get isV117() {
        return this._chain.getConstantTypeHash('SubtensorModule', 'InitialValidatorEpochsPerReset') === '2e8052d0ae8d237ad263438f986208df52f4f0e9f529557036c3b179dfb42f21'
    }

    /**
     *  Default Reset length.
     */
    get asV117(): bigint {
        assert(this.isV117)
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

    /**
     *  Initial validator exclude quantile.
     */
    get isV111() {
        return this._chain.getConstantTypeHash('SubtensorModule', 'InitialValidatorExcludeQuantile') === 'afecacff3b029831d50a478055aa405254e6579585f9617d2a2f34743b4aff83'
    }

    /**
     *  Initial validator exclude quantile.
     */
    get asV111(): number {
        assert(this.isV111)
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

    /**
     *  Initial validator logits divergence penalty/threshold.
     */
    get isV112() {
        return this._chain.getConstantTypeHash('SubtensorModule', 'InitialValidatorLogitsDivergence') === '2e8052d0ae8d237ad263438f986208df52f4f0e9f529557036c3b179dfb42f21'
    }

    /**
     *  Initial validator logits divergence penalty/threshold.
     */
    get asV112(): bigint {
        assert(this.isV112)
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

    /**
     *  Initial validator context pruning length.
     */
    get isV112() {
        return this._chain.getConstantTypeHash('SubtensorModule', 'InitialValidatorPruneLen') === '2e8052d0ae8d237ad263438f986208df52f4f0e9f529557036c3b179dfb42f21'
    }

    /**
     *  Initial validator context pruning length.
     */
    get asV112(): bigint {
        assert(this.isV112)
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

    /**
     *  Default Batch size.
     */
    get isV117() {
        return this._chain.getConstantTypeHash('SubtensorModule', 'InitialValidatorSequenceLen') === '2e8052d0ae8d237ad263438f986208df52f4f0e9f529557036c3b179dfb42f21'
    }

    /**
     *  Default Batch size.
     */
    get asV117(): bigint {
        assert(this.isV117)
        return this._chain.getConstant('SubtensorModule', 'InitialValidatorSequenceLen')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('SubtensorModule', 'InitialValidatorSequenceLen') != null
    }
}

export class SubtensorModuleMaximumDifficultyConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    /**
     *  Maximum registration difficulty
     */
    get isV100() {
        return this._chain.getConstantTypeHash('SubtensorModule', 'MaximumDifficulty') === '2e8052d0ae8d237ad263438f986208df52f4f0e9f529557036c3b179dfb42f21'
    }

    /**
     *  Maximum registration difficulty
     */
    get asV100(): bigint {
        assert(this.isV100)
        return this._chain.getConstant('SubtensorModule', 'MaximumDifficulty')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('SubtensorModule', 'MaximumDifficulty') != null
    }
}

export class SubtensorModuleMinimumDifficultyConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    /**
     *  Minimum registration difficulty
     */
    get isV100() {
        return this._chain.getConstantTypeHash('SubtensorModule', 'MinimumDifficulty') === '2e8052d0ae8d237ad263438f986208df52f4f0e9f529557036c3b179dfb42f21'
    }

    /**
     *  Minimum registration difficulty
     */
    get asV100(): bigint {
        assert(this.isV100)
        return this._chain.getConstant('SubtensorModule', 'MinimumDifficulty')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('SubtensorModule', 'MinimumDifficulty') != null
    }
}

export class SubtensorModuleSDebugConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    /**
     *  Debug is on
     */
    get isV100() {
        return this._chain.getConstantTypeHash('SubtensorModule', 'SDebug') === '2e8052d0ae8d237ad263438f986208df52f4f0e9f529557036c3b179dfb42f21'
    }

    /**
     *  Debug is on
     */
    get asV100(): bigint {
        assert(this.isV100)
        return this._chain.getConstant('SubtensorModule', 'SDebug')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('SubtensorModule', 'SDebug') != null
    }
}

export class SubtensorModuleSelfOwnershipConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    /**
     *  Activity constant
     */
    get isV100() {
        return this._chain.getConstantTypeHash('SubtensorModule', 'SelfOwnership') === '2e8052d0ae8d237ad263438f986208df52f4f0e9f529557036c3b179dfb42f21'
    }

    /**
     *  Activity constant
     */
    get asV100(): bigint {
        assert(this.isV100)
        return this._chain.getConstant('SubtensorModule', 'SelfOwnership')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('SubtensorModule', 'SelfOwnership') != null
    }
}

export class SubtensorModuleStepKappaConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    /**
     *  Activity constant
     */
    get isV100() {
        return this._chain.getConstantTypeHash('SubtensorModule', 'StepKappa') === '2e8052d0ae8d237ad263438f986208df52f4f0e9f529557036c3b179dfb42f21'
    }

    /**
     *  Activity constant
     */
    get asV100(): bigint {
        assert(this.isV100)
        return this._chain.getConstant('SubtensorModule', 'StepKappa')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('SubtensorModule', 'StepKappa') != null
    }
}

export class SubtensorModuleStepRhoConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    /**
     *  Activity constant
     */
    get isV100() {
        return this._chain.getConstantTypeHash('SubtensorModule', 'StepRho') === '2e8052d0ae8d237ad263438f986208df52f4f0e9f529557036c3b179dfb42f21'
    }

    /**
     *  Activity constant
     */
    get asV100(): bigint {
        assert(this.isV100)
        return this._chain.getConstant('SubtensorModule', 'StepRho')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('SubtensorModule', 'StepRho') != null
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
    get isV100() {
        return this._chain.getConstantTypeHash('System', 'BlockHashCount') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
    }

    /**
     *  Maximum number of block number to block hash mappings to keep (oldest pruned first).
     */
    get asV100(): number {
        assert(this.isV100)
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
    get isV100() {
        return this._chain.getConstantTypeHash('System', 'BlockLength') === '9aacf667c67dbae172e6d30e5f4026086c8a56d9ebfe50dfdcca3fe40a9f55ca'
    }

    /**
     *  The maximum length of a block (in bytes).
     */
    get asV100(): v100.BlockLength {
        assert(this.isV100)
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
    get isV100() {
        return this._chain.getConstantTypeHash('System', 'BlockWeights') === 'd29c2183888a350ee5f1702b52be3920c60d1d8dd2937c2870d4ec0d78845224'
    }

    /**
     *  Block & extrinsics weights: base values and limits.
     */
    get asV100(): v100.BlockWeights {
        assert(this.isV100)
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
    get isV100() {
        return this._chain.getConstantTypeHash('System', 'DbWeight') === 'f2b1a28b00823bafa34a2cd3123e2e54de1b56f53266976a0fa1bbffc1833341'
    }

    /**
     *  The weight of runtime database operations the runtime can invoke.
     */
    get asV100(): v100.RuntimeDbWeight {
        assert(this.isV100)
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
     *  The designated SS85 prefix of this chain.
     * 
     *  This replaces the "ss58Format" property declared in the chain spec. Reason is
     *  that the runtime should know about the prefix in order to make use of it as
     *  an identifier of the chain.
     */
    get isV100() {
        return this._chain.getConstantTypeHash('System', 'SS58Prefix') === '32def12560ecd411fe2fc796552e97d0d5ee0ea10e059b3d8918c9e94dfdb334'
    }

    /**
     *  The designated SS85 prefix of this chain.
     * 
     *  This replaces the "ss58Format" property declared in the chain spec. Reason is
     *  that the runtime should know about the prefix in order to make use of it as
     *  an identifier of the chain.
     */
    get asV100(): number {
        assert(this.isV100)
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
    get isV100() {
        return this._chain.getConstantTypeHash('System', 'Version') === '331cab7f5b01df97410a7d65f2beb14b0e15a09ec584fa330199159b310ef545'
    }

    /**
     *  Get the chain's current version.
     */
    get asV100(): v100.RuntimeVersion {
        assert(this.isV100)
        return this._chain.getConstant('System', 'Version')
    }

    /**
     *  Get the chain's current version.
     */
    get isV102() {
        return this._chain.getConstantTypeHash('System', 'Version') === 'f6a7df964a5f6d420bccc7ccc38bd9265b00dc71b74c91dc5848badeeaf0cbb8'
    }

    /**
     *  Get the chain's current version.
     */
    get asV102(): v102.RuntimeVersion {
        assert(this.isV102)
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
     *  The minimum period between blocks. Beware that this is different to the *expected* period
     *  that the block production apparatus provides. Your chosen consensus system will generally
     *  work with this to determine a sensible block time. e.g. For Aura, it will be double this
     *  period on default settings.
     */
    get isV100() {
        return this._chain.getConstantTypeHash('Timestamp', 'MinimumPeriod') === '2e8052d0ae8d237ad263438f986208df52f4f0e9f529557036c3b179dfb42f21'
    }

    /**
     *  The minimum period between blocks. Beware that this is different to the *expected* period
     *  that the block production apparatus provides. Your chosen consensus system will generally
     *  work with this to determine a sensible block time. e.g. For Aura, it will be double this
     *  period on default settings.
     */
    get asV100(): bigint {
        assert(this.isV100)
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
    get isV102() {
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
    get asV102(): number {
        assert(this.isV102)
        return this._chain.getConstant('TransactionPayment', 'OperationalFeeMultiplier')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('TransactionPayment', 'OperationalFeeMultiplier') != null
    }
}

export class TransactionPaymentTransactionByteFeeConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    /**
     *  The fee to be paid for making a transaction; the per-byte portion.
     */
    get isV100() {
        return this._chain.getConstantTypeHash('TransactionPayment', 'TransactionByteFee') === 'a73c503ad07b8dce07ffc3646a2c7aeacb1280015e3b79887f6a9b11dae120f1'
    }

    /**
     *  The fee to be paid for making a transaction; the per-byte portion.
     */
    get asV100(): bigint {
        assert(this.isV100)
        return this._chain.getConstant('TransactionPayment', 'TransactionByteFee')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('TransactionPayment', 'TransactionByteFee') != null
    }
}

export class TransactionPaymentWeightToFeeConstant {
    private readonly _chain: Chain

    constructor(ctx: ChainContext) {
        this._chain = ctx._chain
    }

    /**
     *  The polynomial that is applied in order to derive fee from weight.
     */
    get isV100() {
        return this._chain.getConstantTypeHash('TransactionPayment', 'WeightToFee') === 'd295ff43faa22aacf9488b0758072675f9ec61f6824e26dcea8a5c3dcf215b78'
    }

    /**
     *  The polynomial that is applied in order to derive fee from weight.
     */
    get asV100(): v100.WeightToFeeCoefficient[] {
        assert(this.isV100)
        return this._chain.getConstant('TransactionPayment', 'WeightToFee')
    }

    /**
     * Checks whether the constant is defined for the current chain version.
     */
    get isExists(): boolean {
        return this._chain.getConstantTypeHash('TransactionPayment', 'WeightToFee') != null
    }
}
