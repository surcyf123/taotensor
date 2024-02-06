`delegateInfo_getDelegates` List of all registered validators based on json file from github?

```typescript
// Similar to hyper parameters
const subnetInfo = await api.rpc.subnetInfo.getSubnetInfo(1);
console.log("subnetInfo", subnetInfo);
const decodedSubnetInfo = api.createType("SubnetInfo", subnetInfo);
console.log("decodedSubnetInfo", decodedSubnetInfo.toHuman());

{
    "netuid": "1",
    "rho": "10",
    "kappa": "32,767",
    "difficulty": "628,051,757,812,500",
    "immunityPeriod": "7,200",
    "validatorBatchSize": "1",
    "validatorSequenceLength": "256",
    "validatorEpochsPerReset": "60",
    "validatorEpochLength": "100",
    "maxAllowedValidators": "128",
    "minAllowedWeights": "8",
    "maxWeightsLimit": "455",
    "scalingLawPower": "50",
    "synergyScalingLawPower": "50",
    "subnetworkN": "1,024",
    "maxAllowedUids": "1,024",
    "blocksSinceLastStep": "48",
    "tempo": "99",
    "networkModality": "1",
    "networkConnect": [],
    "emissionValues": "715,555,555",
    "burn": "2,812,500,000"
}
```
