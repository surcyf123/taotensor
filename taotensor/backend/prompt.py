# import bittensor
from typing import Dict, List, Union
from bittensor import BittensorLLM, prompting, metagraph, wallet, subtensor
import torch

foundation_hotkey = "5F4tQyWrhfGVcNhoqeiNsR6KjD4wMZ2kfhLj4oHYuyHbZAc3"

# import time
# from typing import List
# from bittensor import Keypair, metagraph, text_prompting


# class ValidatorPrompter:
#     """
#     ValidatorPrompter is a class that allows us to prompt the bittensor network
#     Initialisation of this class is expensive because of the metagraph,
#     so we want initialize it once and then reuse the instance for api requests.
#     """

#     def __init__(self, hotkey: Keypair, netuid: int):
#         self.metagraph: metagraph = metagraph(netuid)
#         self.hotkey = hotkey

#     def _get_dendrite(self, uid):
#         axon = self.metagraph.axons[uid]
#         return text_prompting(keypair=self.hotkey, axon=axon)

#     def query_network(self, messages, uid=None):
#         roles = [el["role"] for el in messages]
#         messages = [el["content"] for el in messages]
#         dendrite = self._get_dendrite(uid)

#         out = dendrite(roles=roles, messages=messages)
#         return out


# hotkey = wallet(name="default").create_if_non_existent().hotkey
# # hotkey = bittensor.Keypair.create_from_mnemonic
# validator_prompter = ValidatorPrompter(hotkey, 1)

mg = metagraph(1)


# class prompting_custom(torch.nn.Module):
#     _axon: "axon_info"
#     _dendrite: "Dendrite"
#     _subtensor: "Subtensor"
#     _hotkey: str
#     _keypair: "Keypair"

#     def __init__(
#         self,
#         wallet_name: str = "default",
#         hotkey: str = foundation_hotkey,
#         subtensor_: Optional["Subtensor"] = None,
#         axon_: Optional["axon_info"] = None,
#         use_coldkey: bool = False,
#     ):
#         super(prompting_custom, self).__init__()
#         self._hotkey = hotkey
#         self._subtensor = subtensor() if subtensor_ is None else subtensor_
#         if use_coldkey:
#             self._keypair = wallet(name=wallet_name).create_if_non_existent().coldkey
#         else:
#             self._keypair = wallet(name=wallet_name).create_if_non_existent().hotkey

#         if axon_ is not None:
#             self._axon = axon_
#         else:
#             self._metagraph = metagraph(1)
#             self._axon = self._metagraph.axons[
#                 self._metagraph.hotkeys.index(self._hotkey)
#             ]
#         self._dendrite = text_prompting(keypair=self._keypair, axon=self._axon)

#     @staticmethod
#     def format_content(
#         content: Union[str, List[str], List[Dict[str, str]]]
#     ) -> Tuple[List[str], List[str]]:
#         if isinstance(content, str):
#             return ["system", "user"], [default_prompt, content]
#         elif isinstance(content, list):
#             if isinstance(content[0], str):
#                 return ["user" for _ in content], content
#             elif isinstance(content[0], dict):
#                 return [dictitem[list(dictitem.keys())[0]] for dictitem in content], [
#                     dictitem[list(dictitem.keys())[1]] for dictitem in content
#                 ]
#             else:
#                 raise ValueError("content has invalid type {}".format(type(content)))
#         else:
#             raise ValueError("content has invalid type {}".format(type(content)))

#     def forward(
#         self,
#         content: Union[str, List[str], List[Dict[str, str]]],
#         timeout: float = 24,
#         return_call: bool = False,
#         return_all: bool = False,
#     ) -> Union[str, List[str]]:
#         roles, messages = self.format_content(content)
#         if not return_all:
#             return self._dendrite.forward(
#                 roles=roles, messages=messages, timeout=timeout
#             ).completion
#         else:
#             return self._dendrite.multi_forward(
#                 roles=roles, messages=messages, timeout=timeout
#             ).multi_completions

#     async def async_forward(
#         self,
#         content: Union[str, List[str], List[Dict[str, str]]],
#         timeout: float = 24,
#         return_all: bool = False,
#     ) -> Union[str, List[str]]:
#         roles, messages = self.format_content(content)
#         if not return_all:
#             return await self._dendrite.async_forward(
#                 roles=roles, messages=messages, timeout=timeout
#             ).completion
#         else:
#             return self._dendrite.async_multi_forward(
#                 roles=roles, messages=messages, timeout=timeout
#             ).multi_completions


#
prompt = "Specifically What kind of model are you? Acceptable answers could for example be gpt2, chat-gpt3.5, etc"
while True:
    uid = int(input("UID: "))
    # res = validator_prompter.query_network(
    #     messages=[{"role": "user", "content": "Tell a joke"}],
    #     uid=int(uid),
    # )
    ax = mg.axons[uid]
    print("axon", ax)
    # out = dendrite(roles=["user"], messages=["Tell a joke"])
    prompter = prompting(axon_=ax, wallet_name="tao2", use_coldkey=False)

    print("promper", prompter)

    res = prompter._dendrite.forward(roles=["user"], messages=[prompt], timeout=24)
    print("res", res)
    print("response from axon", ax, ": ", res.completion)

    out = prompter(prompt)

    print("\n\n")
    print("prompter out", out)


#                                                                 Wallet - zeta:5FUTcZc6Ag41xwRADDfCrDmCHE82SaacZPdthtFPkzzSUWtQ
# Subnet: 1
# COLDKEY  HOTKEY  UID  ACTIVE  STAKE(τ)     RANK    TRUST  CONSENSUS  INCENTIVE  DIVIDENDS  EMISSION(ρ)   VTRUST  VPERMIT  UPDATED  AXON                HOTKEY_SS58
# zeta     1       841   False   0.00000  0.00000  0.00000    0.00000    0.00000    0.00000            0  0.00000            136258  54.183.8.41:25775   5HT9jRWcSDT7rnAuyajjhDWd67NorzZx2mD9ks…
# zeta     2       285   False   0.00000  0.00000  0.00000    0.00000    0.00000    0.00000            0  0.00000             19092  54.241.62.28:30000  5C8CPFrt37WqmjPN3x6xLXs3UhJqdFJ1JHUB86…
#                  2                      0.00000  0.00000    0.00000    0.00000    0.00000           ρ0  0.00000
