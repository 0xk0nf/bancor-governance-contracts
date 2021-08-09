/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  TokenGovernance,
  TokenGovernanceInterface,
} from "../TokenGovernance";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IMintableToken",
        name: "mintableToken",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "previousAdminRole",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "newAdminRole",
        type: "bytes32",
      },
    ],
    name: "RoleAdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleGranted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleRevoked",
    type: "event",
  },
  {
    inputs: [],
    name: "DEFAULT_ADMIN_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "ROLE_GOVERNOR",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "ROLE_MINTER",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "ROLE_SUPERVISOR",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "acceptTokenOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
    ],
    name: "getRoleAdmin",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "getRoleMember",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
    ],
    name: "getRoleMemberCount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "grantRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "hasRole",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "renounceRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "revokeRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "token",
    outputs: [
      {
        internalType: "contract IMintableToken",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x60a06040523480156200001157600080fd5b5060405162000e3038038062000e30833981810160405260208110156200003757600080fd5b50516001600160a01b03811662000095576040805162461bcd60e51b815260206004820152601360248201527f4552525f494e56414c49445f4144445245535300000000000000000000000000604482015290519081900360640190fd5b6001600160601b0319606082901b16608052620000c260008051602062000e108339815191528062000174565b620000fd7ff7c047210237bf53c8285c7817cb2a0024d34daf6d0b9599c37e3e9df2af8f6660008051602062000e1083398151915262000174565b620001497faeaef46186eb59f884e36929b6d682a6ae35e1e43d8f05f058dcefb92b6014617ff7c047210237bf53c8285c7817cb2a0024d34daf6d0b9599c37e3e9df2af8f6662000174565b6200016d60008051602062000e1083398151915262000167620001c6565b620001ca565b50620002da565b600082815260208190526040808220600201549051839285917fbd79b86ffe0ab8e8776151514217cd7cacd52c909f66475c3af44e129f0b00ff9190a460009182526020829052604090912060020155565b3390565b620001d68282620001da565b5050565b600082815260208181526040909120620001ff9183906200076762000253821b17901c565b15620001d6576200020f620001c6565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b60006200026a836001600160a01b03841662000273565b90505b92915050565b6000620002818383620002c2565b620002b9575081546001818101845560008481526020808220909301849055845484825282860190935260409020919091556200026d565b5060006200026d565b60009081526001919091016020526040902054151590565b60805160601c610b096200030760003980610461528061054752806105da52806107455250610b096000f3fe608060405234801561001057600080fd5b50600436106100f55760003560e01c806342966c6811610097578063a217fddf11610066578063a217fddf1461026b578063ca15c87314610273578063d547741f14610290578063fc0c546a146102bc576100f5565b806342966c68146101c75780639010d07c146101e457806391d148541461022357806392afc33a14610263576100f5565b80632f2ff15d116100d35780632f2ff15d1461013957806336568abe1461016757806338a5e0161461019357806340c10f191461019b576100f5565b80630d80af9b146100fa5780632358f35514610114578063248a9ca31461011c575b600080fd5b6101026102c4565b60408051918252519081900360200190f35b6101026102e8565b6101026004803603602081101561013257600080fd5b503561030c565b6101656004803603604081101561014f57600080fd5b50803590602001356001600160a01b0316610321565b005b6101656004803603604081101561017d57600080fd5b50803590602001356001600160a01b031661038d565b6101656103ee565b610165600480360360408110156101b157600080fd5b506001600160a01b0381351690602001356104d4565b610165600480360360208110156101dd57600080fd5b50356105d8565b610207600480360360408110156101fa57600080fd5b5080359060200135610671565b604080516001600160a01b039092168252519081900360200190f35b61024f6004803603604081101561023957600080fd5b50803590602001356001600160a01b0316610692565b604080519115158252519081900360200190f35b6101026106aa565b6101026106ce565b6101026004803603602081101561028957600080fd5b50356106d3565b610165600480360360408110156102a657600080fd5b50803590602001356001600160a01b03166106ea565b610207610743565b7f0c7ade2c7c08453ea605b4a8f3fb0e03e3ffcffbfa41ca8ee543d0fd74cada3881565b7ff7c047210237bf53c8285c7817cb2a0024d34daf6d0b9599c37e3e9df2af8f6681565b60009081526020819052604090206002015490565b6000828152602081905260409020600201546103449061033f61077c565b610692565b61037f5760405162461bcd60e51b815260040180806020018281038252602f815260200180610a46602f913960400191505060405180910390fd5b6103898282610780565b5050565b61039561077c565b6001600160a01b0316816001600160a01b0316146103e45760405162461bcd60e51b815260040180806020018281038252602f815260200180610aa5602f913960400191505060405180910390fd5b61038982826107e9565b61041a7f0c7ade2c7c08453ea605b4a8f3fb0e03e3ffcffbfa41ca8ee543d0fd74cada3861033f61077c565b61045f576040805162461bcd60e51b815260206004820152601160248201527011549497d050d0d154d4d7d11153925151607a1b604482015290519081900360640190fd5b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166379ba50976040518163ffffffff1660e01b8152600401600060405180830381600087803b1580156104ba57600080fd5b505af11580156104ce573d6000803e3d6000fd5b50505050565b6105007faeaef46186eb59f884e36929b6d682a6ae35e1e43d8f05f058dcefb92b60146161033f61077c565b610545576040805162461bcd60e51b815260206004820152601160248201527011549497d050d0d154d4d7d11153925151607a1b604482015290519081900360640190fd5b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663867904b483836040518363ffffffff1660e01b815260040180836001600160a01b0316815260200182815260200192505050600060405180830381600087803b1580156105bc57600080fd5b505af11580156105d0573d6000803e3d6000fd5b505050505050565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663a24835d161060f61077c565b836040518363ffffffff1660e01b815260040180836001600160a01b0316815260200182815260200192505050600060405180830381600087803b15801561065657600080fd5b505af115801561066a573d6000803e3d6000fd5b5050505050565b60008281526020819052604081206106899083610852565b90505b92915050565b6000828152602081905260408120610689908361085e565b7faeaef46186eb59f884e36929b6d682a6ae35e1e43d8f05f058dcefb92b60146181565b600081565b600081815260208190526040812061068c90610873565b6000828152602081905260409020600201546107089061033f61077c565b6103e45760405162461bcd60e51b8152600401808060200182810382526030815260200180610a756030913960400191505060405180910390fd5b7f000000000000000000000000000000000000000000000000000000000000000081565b6000610689836001600160a01b03841661087e565b3390565b60008281526020819052604090206107989082610767565b15610389576107a561077c565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b600082815260208190526040902061080190826108c8565b156103895761080e61077c565b6001600160a01b0316816001600160a01b0316837ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b60405160405180910390a45050565b600061068983836108dd565b6000610689836001600160a01b038416610941565b600061068c82610959565b600061088a8383610941565b6108c05750815460018181018455600084815260208082209093018490558454848252828601909352604090209190915561068c565b50600061068c565b6000610689836001600160a01b03841661095d565b8154600090821061091f5760405162461bcd60e51b8152600401808060200182810382526022815260200180610a246022913960400191505060405180910390fd5b82600001828154811061092e57fe5b9060005260206000200154905092915050565b60009081526001919091016020526040902054151590565b5490565b60008181526001830160205260408120548015610a19578354600019808301919081019060009087908390811061099057fe5b90600052602060002001549050808760000184815481106109ad57fe5b6000918252602080832090910192909255828152600189810190925260409020908401905586548790806109dd57fe5b6001900381819060005260206000200160009055905586600101600087815260200190815260200160002060009055600194505050505061068c565b600091505061068c56fe456e756d657261626c655365743a20696e646578206f7574206f6620626f756e6473416363657373436f6e74726f6c3a2073656e646572206d75737420626520616e2061646d696e20746f206772616e74416363657373436f6e74726f6c3a2073656e646572206d75737420626520616e2061646d696e20746f207265766f6b65416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636520726f6c657320666f722073656c66a26469706673582212206bb4bf86200e1f892169de77804792c997916f61678e3150526cf29f2240807964736f6c634300060c00330c7ade2c7c08453ea605b4a8f3fb0e03e3ffcffbfa41ca8ee543d0fd74cada38";

export class TokenGovernance__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    mintableToken: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<TokenGovernance> {
    return super.deploy(
      mintableToken,
      overrides || {}
    ) as Promise<TokenGovernance>;
  }
  getDeployTransaction(
    mintableToken: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(mintableToken, overrides || {});
  }
  attach(address: string): TokenGovernance {
    return super.attach(address) as TokenGovernance;
  }
  connect(signer: Signer): TokenGovernance__factory {
    return super.connect(signer) as TokenGovernance__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TokenGovernanceInterface {
    return new utils.Interface(_abi) as TokenGovernanceInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TokenGovernance {
    return new Contract(address, _abi, signerOrProvider) as TokenGovernance;
  }
}
