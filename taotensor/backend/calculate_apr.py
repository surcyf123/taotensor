def calculate_apr(
    starting_stake: float,
    starting_issuance: float,
    daily_inflation: int,
    staked_percentage: float,
    days: int,
):
    stake = starting_stake
    issuance = starting_issuance
    inflation = daily_inflation
    total_staked_percentage = staked_percentage
    for _ in range(days):
        total_staked = issuance * total_staked_percentage
        daily_rewards = 3600 * stake / total_staked
        stake += daily_rewards
        issuance += inflation
    APR: float = (stake - starting_stake) / starting_stake * 100
    return APR, stake
