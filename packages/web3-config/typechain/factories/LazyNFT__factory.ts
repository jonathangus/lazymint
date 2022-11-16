/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { LazyNFT, LazyNFTInterface } from "../LazyNFT";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "uri_",
        type: "string",
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
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "values",
        type: "uint256[]",
      },
    ],
    name: "TransferBatch",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "TransferSingle",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "value",
        type: "string",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "URI",
    type: "event",
  },
  {
    inputs: [],
    name: "addWatcher",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "balanceOf",
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
        internalType: "address[]",
        name: "accounts",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
    ],
    name: "balanceOfBatch",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
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
        name: "",
        type: "address",
      },
    ],
    name: "minted",
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
    inputs: [],
    name: "owner",
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
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "amounts",
        type: "uint256[]",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeBatchTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "newuri",
        type: "string",
      },
    ],
    name: "setURI",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
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
    inputs: [],
    name: "tempMint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "uri",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "watchers",
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
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162003333380380620033338339818101604052810190620000379190620003a8565b8062000049816200007160201b60201c565b506200006a6200005e6200008d60201b60201c565b6200009560201b60201c565b506200045d565b8060029080519060200190620000899291906200015b565b5050565b600033905090565b6000600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b828054620001699062000428565b90600052602060002090601f0160209004810192826200018d5760008555620001d9565b82601f10620001a857805160ff1916838001178555620001d9565b82800160010185558215620001d9579182015b82811115620001d8578251825591602001919060010190620001bb565b5b509050620001e89190620001ec565b5090565b5b8082111562000207576000816000905550600101620001ed565b5090565b6000604051905090565b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b620002748262000229565b810181811067ffffffffffffffff821117156200029657620002956200023a565b5b80604052505050565b6000620002ab6200020b565b9050620002b9828262000269565b919050565b600067ffffffffffffffff821115620002dc57620002db6200023a565b5b620002e78262000229565b9050602081019050919050565b60005b8381101562000314578082015181840152602081019050620002f7565b8381111562000324576000848401525b50505050565b6000620003416200033b84620002be565b6200029f565b90508281526020810184848401111562000360576200035f62000224565b5b6200036d848285620002f4565b509392505050565b600082601f8301126200038d576200038c6200021f565b5b81516200039f8482602086016200032a565b91505092915050565b600060208284031215620003c157620003c062000215565b5b600082015167ffffffffffffffff811115620003e257620003e16200021a565b5b620003f08482850162000375565b91505092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806200044157607f821691505b602082108103620004575762000456620003f9565b5b50919050565b612ec6806200046d6000396000f3fe608060405234801561001057600080fd5b50600436106100ff5760003560e01c8063715018a611610097578063b3c6435f11610066578063b3c6435f146102aa578063e985e9c5146102b4578063f242432a146102e4578063f2fde38b14610300576100ff565b8063715018a61461025c57806374402d21146102665780638da5cb5b14610270578063a22cb4651461028e576100ff565b80631e7269c5116100d35780631e7269c5146101b05780632eb2c2d6146101e05780634e1273f4146101fc578063596150d71461022c576100ff565b8062fdd58e1461010457806301ffc9a71461013457806302fe5305146101645780630e89341c14610180575b600080fd5b61011e60048036038101906101199190611a92565b61031c565b60405161012b9190611ae1565b60405180910390f35b61014e60048036038101906101499190611b54565b6103e4565b60405161015b9190611b9c565b60405180910390f35b61017e60048036038101906101799190611cfd565b6104c6565b005b61019a60048036038101906101959190611d46565b6104da565b6040516101a79190611dfb565b60405180910390f35b6101ca60048036038101906101c59190611e1d565b61056e565b6040516101d79190611b9c565b60405180910390f35b6101fa60048036038101906101f59190611fb3565b61058e565b005b61021660048036038101906102119190612145565b61062f565b604051610223919061227b565b60405180910390f35b61024660048036038101906102419190611e1d565b610748565b6040516102539190611b9c565b60405180910390f35b610264610768565b005b61026e61077c565b005b6102786107f2565b60405161028591906122ac565b60405180910390f35b6102a860048036038101906102a391906122f3565b61081c565b005b6102b2610832565b005b6102ce60048036038101906102c99190612333565b61088c565b6040516102db9190611b9c565b60405180910390f35b6102fe60048036038101906102f99190612373565b610920565b005b61031a60048036038101906103159190611e1d565b6109c1565b005b60008073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff160361038c576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103839061247c565b60405180910390fd5b60008083815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b60007fd9b67a26000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614806104af57507f0e89341c000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b806104bf57506104be82610a44565b5b9050919050565b6104ce610aae565b6104d781610b2c565b50565b6060600280546104e9906124cb565b80601f0160208091040260200160405190810160405280929190818152602001828054610515906124cb565b80156105625780601f1061053757610100808354040283529160200191610562565b820191906000526020600020905b81548152906001019060200180831161054557829003601f168201915b50505050509050919050565b60056020528060005260406000206000915054906101000a900460ff1681565b610596610b46565b73ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1614806105dc57506105db856105d6610b46565b61088c565b5b61061b576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106129061256e565b60405180910390fd5b6106288585858585610b4e565b5050505050565b60608151835114610675576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161066c90612600565b60405180910390fd5b6000835167ffffffffffffffff81111561069257610691611bd2565b5b6040519080825280602002602001820160405280156106c05781602001602082028036833780820191505090505b50905060005b845181101561073d5761070d8582815181106106e5576106e4612620565b5b6020026020010151858381518110610700576106ff612620565b5b602002602001015161031c565b8282815181106107205761071f612620565b5b602002602001018181525050806107369061267e565b90506106c6565b508091505092915050565b60046020528060005260406000206000915054906101000a900460ff1681565b610770610aae565b61077a6000610e6f565b565b6107983360018060405180602001604052806000815250610f35565b6001600560003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908315150217905550565b6000600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b61082e610827610b46565b83836110e5565b5050565b6001600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908315150217905550565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b610928610b46565b73ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff16148061096e575061096d85610968610b46565b61088c565b5b6109ad576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109a49061256e565b60405180910390fd5b6109ba8585858585611251565b5050505050565b6109c9610aae565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603610a38576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a2f90612738565b60405180910390fd5b610a4181610e6f565b50565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b610ab6610b46565b73ffffffffffffffffffffffffffffffffffffffff16610ad46107f2565b73ffffffffffffffffffffffffffffffffffffffff1614610b2a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b21906127a4565b60405180910390fd5b565b8060029080519060200190610b42929190611947565b5050565b600033905090565b8151835114610b92576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b8990612836565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff1603610c01576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610bf8906128c8565b60405180910390fd5b6000610c0b610b46565b9050610c1b8187878787876114ec565b60005b8451811015610dcc576000858281518110610c3c57610c3b612620565b5b602002602001015190506000858381518110610c5b57610c5a612620565b5b60200260200101519050600080600084815260200190815260200160002060008b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905081811015610cfc576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610cf39061295a565b60405180910390fd5b81810360008085815260200190815260200160002060008c73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508160008085815260200190815260200160002060008b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610db1919061297a565b9250508190555050505080610dc59061267e565b9050610c1e565b508473ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167f4a39dc06d4c0dbc64b70af90fd698a233a518aa5d07e595d983b8c0526c8f7fb8787604051610e439291906129d0565b60405180910390a4610e598187878787876114f4565b610e678187878787876114fc565b505050505050565b6000600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff1603610fa4576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f9b90612a79565b60405180910390fd5b6000610fae610b46565b90506000610fbb856116d3565b90506000610fc8856116d3565b9050610fd9836000898585896114ec565b8460008088815260200190815260200160002060008973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254611038919061297a565b925050819055508673ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f6289896040516110b6929190612a99565b60405180910390a46110cd836000898585896114f4565b6110dc8360008989898961174d565b50505050505050565b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603611153576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161114a90612b34565b60405180910390fd5b80600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31836040516112449190611b9c565b60405180910390a3505050565b600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff16036112c0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016112b7906128c8565b60405180910390fd5b60006112ca610b46565b905060006112d7856116d3565b905060006112e4856116d3565b90506112f48389898585896114ec565b600080600088815260200190815260200160002060008a73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205490508581101561138b576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016113829061295a565b60405180910390fd5b85810360008089815260200190815260200160002060008b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508560008089815260200190815260200160002060008a73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254611440919061297a565b925050819055508773ffffffffffffffffffffffffffffffffffffffff168973ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff167fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f628a8a6040516114bd929190612a99565b60405180910390a46114d3848a8a86868a6114f4565b6114e1848a8a8a8a8a61174d565b505050505050505050565b505050505050565b505050505050565b61151b8473ffffffffffffffffffffffffffffffffffffffff16611924565b156116cb578373ffffffffffffffffffffffffffffffffffffffff1663bc197c8187878686866040518663ffffffff1660e01b8152600401611561959493929190612ba9565b6020604051808303816000875af192505050801561159d57506040513d601f19601f8201168201806040525081019061159a9190612c26565b60015b611642576115a9612c60565b806308c379a00361160557506115bd612c82565b806115c85750611607565b806040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016115fc9190611dfb565b60405180910390fd5b505b6040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161163990612d84565b60405180910390fd5b63bc197c8160e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916146116c9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016116c090612e16565b60405180910390fd5b505b505050505050565b60606000600167ffffffffffffffff8111156116f2576116f1611bd2565b5b6040519080825280602002602001820160405280156117205781602001602082028036833780820191505090505b509050828160008151811061173857611737612620565b5b60200260200101818152505080915050919050565b61176c8473ffffffffffffffffffffffffffffffffffffffff16611924565b1561191c578373ffffffffffffffffffffffffffffffffffffffff1663f23a6e6187878686866040518663ffffffff1660e01b81526004016117b2959493929190612e36565b6020604051808303816000875af19250505080156117ee57506040513d601f19601f820116820180604052508101906117eb9190612c26565b60015b611893576117fa612c60565b806308c379a003611856575061180e612c82565b806118195750611858565b806040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161184d9190611dfb565b60405180910390fd5b505b6040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161188a90612d84565b60405180910390fd5b63f23a6e6160e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161461191a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161191190612e16565b60405180910390fd5b505b505050505050565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b828054611953906124cb565b90600052602060002090601f01602090048101928261197557600085556119bc565b82601f1061198e57805160ff19168380011785556119bc565b828001600101855582156119bc579182015b828111156119bb5782518255916020019190600101906119a0565b5b5090506119c991906119cd565b5090565b5b808211156119e65760008160009055506001016119ce565b5090565b6000604051905090565b600080fd5b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000611a29826119fe565b9050919050565b611a3981611a1e565b8114611a4457600080fd5b50565b600081359050611a5681611a30565b92915050565b6000819050919050565b611a6f81611a5c565b8114611a7a57600080fd5b50565b600081359050611a8c81611a66565b92915050565b60008060408385031215611aa957611aa86119f4565b5b6000611ab785828601611a47565b9250506020611ac885828601611a7d565b9150509250929050565b611adb81611a5c565b82525050565b6000602082019050611af66000830184611ad2565b92915050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b611b3181611afc565b8114611b3c57600080fd5b50565b600081359050611b4e81611b28565b92915050565b600060208284031215611b6a57611b696119f4565b5b6000611b7884828501611b3f565b91505092915050565b60008115159050919050565b611b9681611b81565b82525050565b6000602082019050611bb16000830184611b8d565b92915050565b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b611c0a82611bc1565b810181811067ffffffffffffffff82111715611c2957611c28611bd2565b5b80604052505050565b6000611c3c6119ea565b9050611c488282611c01565b919050565b600067ffffffffffffffff821115611c6857611c67611bd2565b5b611c7182611bc1565b9050602081019050919050565b82818337600083830152505050565b6000611ca0611c9b84611c4d565b611c32565b905082815260208101848484011115611cbc57611cbb611bbc565b5b611cc7848285611c7e565b509392505050565b600082601f830112611ce457611ce3611bb7565b5b8135611cf4848260208601611c8d565b91505092915050565b600060208284031215611d1357611d126119f4565b5b600082013567ffffffffffffffff811115611d3157611d306119f9565b5b611d3d84828501611ccf565b91505092915050565b600060208284031215611d5c57611d5b6119f4565b5b6000611d6a84828501611a7d565b91505092915050565b600081519050919050565b600082825260208201905092915050565b60005b83811015611dad578082015181840152602081019050611d92565b83811115611dbc576000848401525b50505050565b6000611dcd82611d73565b611dd78185611d7e565b9350611de7818560208601611d8f565b611df081611bc1565b840191505092915050565b60006020820190508181036000830152611e158184611dc2565b905092915050565b600060208284031215611e3357611e326119f4565b5b6000611e4184828501611a47565b91505092915050565b600067ffffffffffffffff821115611e6557611e64611bd2565b5b602082029050602081019050919050565b600080fd5b6000611e8e611e8984611e4a565b611c32565b90508083825260208201905060208402830185811115611eb157611eb0611e76565b5b835b81811015611eda5780611ec68882611a7d565b845260208401935050602081019050611eb3565b5050509392505050565b600082601f830112611ef957611ef8611bb7565b5b8135611f09848260208601611e7b565b91505092915050565b600067ffffffffffffffff821115611f2d57611f2c611bd2565b5b611f3682611bc1565b9050602081019050919050565b6000611f56611f5184611f12565b611c32565b905082815260208101848484011115611f7257611f71611bbc565b5b611f7d848285611c7e565b509392505050565b600082601f830112611f9a57611f99611bb7565b5b8135611faa848260208601611f43565b91505092915050565b600080600080600060a08688031215611fcf57611fce6119f4565b5b6000611fdd88828901611a47565b9550506020611fee88828901611a47565b945050604086013567ffffffffffffffff81111561200f5761200e6119f9565b5b61201b88828901611ee4565b935050606086013567ffffffffffffffff81111561203c5761203b6119f9565b5b61204888828901611ee4565b925050608086013567ffffffffffffffff811115612069576120686119f9565b5b61207588828901611f85565b9150509295509295909350565b600067ffffffffffffffff82111561209d5761209c611bd2565b5b602082029050602081019050919050565b60006120c16120bc84612082565b611c32565b905080838252602082019050602084028301858111156120e4576120e3611e76565b5b835b8181101561210d57806120f98882611a47565b8452602084019350506020810190506120e6565b5050509392505050565b600082601f83011261212c5761212b611bb7565b5b813561213c8482602086016120ae565b91505092915050565b6000806040838503121561215c5761215b6119f4565b5b600083013567ffffffffffffffff81111561217a576121796119f9565b5b61218685828601612117565b925050602083013567ffffffffffffffff8111156121a7576121a66119f9565b5b6121b385828601611ee4565b9150509250929050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b6121f281611a5c565b82525050565b600061220483836121e9565b60208301905092915050565b6000602082019050919050565b6000612228826121bd565b61223281856121c8565b935061223d836121d9565b8060005b8381101561226e57815161225588826121f8565b975061226083612210565b925050600181019050612241565b5085935050505092915050565b60006020820190508181036000830152612295818461221d565b905092915050565b6122a681611a1e565b82525050565b60006020820190506122c1600083018461229d565b92915050565b6122d081611b81565b81146122db57600080fd5b50565b6000813590506122ed816122c7565b92915050565b6000806040838503121561230a576123096119f4565b5b600061231885828601611a47565b9250506020612329858286016122de565b9150509250929050565b6000806040838503121561234a576123496119f4565b5b600061235885828601611a47565b925050602061236985828601611a47565b9150509250929050565b600080600080600060a0868803121561238f5761238e6119f4565b5b600061239d88828901611a47565b95505060206123ae88828901611a47565b94505060406123bf88828901611a7d565b93505060606123d088828901611a7d565b925050608086013567ffffffffffffffff8111156123f1576123f06119f9565b5b6123fd88828901611f85565b9150509295509295909350565b7f455243313135353a2061646472657373207a65726f206973206e6f742061207660008201527f616c6964206f776e657200000000000000000000000000000000000000000000602082015250565b6000612466602a83611d7e565b91506124718261240a565b604082019050919050565b6000602082019050818103600083015261249581612459565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806124e357607f821691505b6020821081036124f6576124f561249c565b5b50919050565b7f455243313135353a2063616c6c6572206973206e6f7420746f6b656e206f776e60008201527f6572206e6f7220617070726f7665640000000000000000000000000000000000602082015250565b6000612558602f83611d7e565b9150612563826124fc565b604082019050919050565b600060208201905081810360008301526125878161254b565b9050919050565b7f455243313135353a206163636f756e747320616e6420696473206c656e67746860008201527f206d69736d617463680000000000000000000000000000000000000000000000602082015250565b60006125ea602983611d7e565b91506125f58261258e565b604082019050919050565b60006020820190508181036000830152612619816125dd565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600061268982611a5c565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82036126bb576126ba61264f565b5b600182019050919050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b6000612722602683611d7e565b915061272d826126c6565b604082019050919050565b6000602082019050818103600083015261275181612715565b9050919050565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b600061278e602083611d7e565b915061279982612758565b602082019050919050565b600060208201905081810360008301526127bd81612781565b9050919050565b7f455243313135353a2069647320616e6420616d6f756e7473206c656e6774682060008201527f6d69736d61746368000000000000000000000000000000000000000000000000602082015250565b6000612820602883611d7e565b915061282b826127c4565b604082019050919050565b6000602082019050818103600083015261284f81612813565b9050919050565b7f455243313135353a207472616e7366657220746f20746865207a65726f20616460008201527f6472657373000000000000000000000000000000000000000000000000000000602082015250565b60006128b2602583611d7e565b91506128bd82612856565b604082019050919050565b600060208201905081810360008301526128e1816128a5565b9050919050565b7f455243313135353a20696e73756666696369656e742062616c616e636520666f60008201527f72207472616e7366657200000000000000000000000000000000000000000000602082015250565b6000612944602a83611d7e565b915061294f826128e8565b604082019050919050565b6000602082019050818103600083015261297381612937565b9050919050565b600061298582611a5c565b915061299083611a5c565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff038211156129c5576129c461264f565b5b828201905092915050565b600060408201905081810360008301526129ea818561221d565b905081810360208301526129fe818461221d565b90509392505050565b7f455243313135353a206d696e7420746f20746865207a65726f2061646472657360008201527f7300000000000000000000000000000000000000000000000000000000000000602082015250565b6000612a63602183611d7e565b9150612a6e82612a07565b604082019050919050565b60006020820190508181036000830152612a9281612a56565b9050919050565b6000604082019050612aae6000830185611ad2565b612abb6020830184611ad2565b9392505050565b7f455243313135353a2073657474696e6720617070726f76616c2073746174757360008201527f20666f722073656c660000000000000000000000000000000000000000000000602082015250565b6000612b1e602983611d7e565b9150612b2982612ac2565b604082019050919050565b60006020820190508181036000830152612b4d81612b11565b9050919050565b600081519050919050565b600082825260208201905092915050565b6000612b7b82612b54565b612b858185612b5f565b9350612b95818560208601611d8f565b612b9e81611bc1565b840191505092915050565b600060a082019050612bbe600083018861229d565b612bcb602083018761229d565b8181036040830152612bdd818661221d565b90508181036060830152612bf1818561221d565b90508181036080830152612c058184612b70565b90509695505050505050565b600081519050612c2081611b28565b92915050565b600060208284031215612c3c57612c3b6119f4565b5b6000612c4a84828501612c11565b91505092915050565b60008160e01c9050919050565b600060033d1115612c7f5760046000803e612c7c600051612c53565b90505b90565b600060443d10612d0f57612c946119ea565b60043d036004823e80513d602482011167ffffffffffffffff82111715612cbc575050612d0f565b808201805167ffffffffffffffff811115612cda5750505050612d0f565b80602083010160043d038501811115612cf7575050505050612d0f565b612d0682602001850186611c01565b82955050505050505b90565b7f455243313135353a207472616e7366657220746f206e6f6e204552433131353560008201527f526563656976657220696d706c656d656e746572000000000000000000000000602082015250565b6000612d6e603483611d7e565b9150612d7982612d12565b604082019050919050565b60006020820190508181036000830152612d9d81612d61565b9050919050565b7f455243313135353a204552433131353552656365697665722072656a6563746560008201527f6420746f6b656e73000000000000000000000000000000000000000000000000602082015250565b6000612e00602883611d7e565b9150612e0b82612da4565b604082019050919050565b60006020820190508181036000830152612e2f81612df3565b9050919050565b600060a082019050612e4b600083018861229d565b612e58602083018761229d565b612e656040830186611ad2565b612e726060830185611ad2565b8181036080830152612e848184612b70565b9050969550505050505056fea2646970667358221220fc6da2c8cf74a6fe92b770735ce72bee1acfb31cfca07803adcc14c94207085164736f6c634300080e0033";

type LazyNFTConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: LazyNFTConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class LazyNFT__factory extends ContractFactory {
  constructor(...args: LazyNFTConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "LazyNFT";
  }

  deploy(
    uri_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<LazyNFT> {
    return super.deploy(uri_, overrides || {}) as Promise<LazyNFT>;
  }
  getDeployTransaction(
    uri_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(uri_, overrides || {});
  }
  attach(address: string): LazyNFT {
    return super.attach(address) as LazyNFT;
  }
  connect(signer: Signer): LazyNFT__factory {
    return super.connect(signer) as LazyNFT__factory;
  }
  static readonly contractName: "LazyNFT";
  public readonly contractName: "LazyNFT";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): LazyNFTInterface {
    return new utils.Interface(_abi) as LazyNFTInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): LazyNFT {
    return new Contract(address, _abi, signerOrProvider) as LazyNFT;
  }
}
