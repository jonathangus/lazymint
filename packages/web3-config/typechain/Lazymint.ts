/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export interface LazymintInterface extends utils.Interface {
  contractName: "Lazymint";
  functions: {
    "acceptOwnership()": FunctionFragment;
    "addWatcher()": FunctionFragment;
    "addressesToVerify(uint256)": FunctionFragment;
    "approved()": FunctionFragment;
    "batchVerify()": FunctionFragment;
    "buidl(address)": FunctionFragment;
    "checkUpkeep(bytes)": FunctionFragment;
    "counter()": FunctionFragment;
    "fulfill(bytes32,bool)": FunctionFragment;
    "interval()": FunctionFragment;
    "lastChecked()": FunctionFragment;
    "lastTimeStamp()": FunctionFragment;
    "owner()": FunctionFragment;
    "performUpkeep(bytes)": FunctionFragment;
    "requestVolumeData(address)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "uintToString(uint256)": FunctionFragment;
    "urlTest()": FunctionFragment;
    "volume()": FunctionFragment;
    "watchers(address)": FunctionFragment;
    "withdrawLink()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "acceptOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "addWatcher",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "addressesToVerify",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "approved", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "batchVerify",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "buidl", values: [string]): string;
  encodeFunctionData(
    functionFragment: "checkUpkeep",
    values: [BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "counter", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "fulfill",
    values: [BytesLike, boolean]
  ): string;
  encodeFunctionData(functionFragment: "interval", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "lastChecked",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "lastTimeStamp",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "performUpkeep",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "requestVolumeData",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "uintToString",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "urlTest", values?: undefined): string;
  encodeFunctionData(functionFragment: "volume", values?: undefined): string;
  encodeFunctionData(functionFragment: "watchers", values: [string]): string;
  encodeFunctionData(
    functionFragment: "withdrawLink",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "acceptOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "addWatcher", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "addressesToVerify",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "approved", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "batchVerify",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "buidl", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "checkUpkeep",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "counter", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "fulfill", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "interval", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "lastChecked",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "lastTimeStamp",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "performUpkeep",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "requestVolumeData",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "uintToString",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "urlTest", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "volume", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "watchers", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "withdrawLink",
    data: BytesLike
  ): Result;

  events: {
    "ChainlinkCancelled(bytes32)": EventFragment;
    "ChainlinkFulfilled(bytes32)": EventFragment;
    "ChainlinkRequested(bytes32)": EventFragment;
    "OwnershipTransferRequested(address,address)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
    "RequestVolume(bytes32,bool,string)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "ChainlinkCancelled"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ChainlinkFulfilled"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ChainlinkRequested"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferRequested"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RequestVolume"): EventFragment;
}

export type ChainlinkCancelledEvent = TypedEvent<[string], { id: string }>;

export type ChainlinkCancelledEventFilter =
  TypedEventFilter<ChainlinkCancelledEvent>;

export type ChainlinkFulfilledEvent = TypedEvent<[string], { id: string }>;

export type ChainlinkFulfilledEventFilter =
  TypedEventFilter<ChainlinkFulfilledEvent>;

export type ChainlinkRequestedEvent = TypedEvent<[string], { id: string }>;

export type ChainlinkRequestedEventFilter =
  TypedEventFilter<ChainlinkRequestedEvent>;

export type OwnershipTransferRequestedEvent = TypedEvent<
  [string, string],
  { from: string; to: string }
>;

export type OwnershipTransferRequestedEventFilter =
  TypedEventFilter<OwnershipTransferRequestedEvent>;

export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  { from: string; to: string }
>;

export type OwnershipTransferredEventFilter =
  TypedEventFilter<OwnershipTransferredEvent>;

export type RequestVolumeEvent = TypedEvent<
  [string, boolean, string],
  { requestId: string; approved: boolean; lastChecked: string }
>;

export type RequestVolumeEventFilter = TypedEventFilter<RequestVolumeEvent>;

export interface Lazymint extends BaseContract {
  contractName: "Lazymint";
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: LazymintInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    acceptOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "acceptOwnership()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    addWatcher(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "addWatcher()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    addressesToVerify(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    "addressesToVerify(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    approved(overrides?: CallOverrides): Promise<[boolean]>;

    "approved()"(overrides?: CallOverrides): Promise<[boolean]>;

    batchVerify(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "batchVerify()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    buidl(
      _wallet: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "buidl(address)"(
      _wallet: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    checkUpkeep(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean, string] & { upkeepNeeded: boolean }>;

    "checkUpkeep(bytes)"(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean, string] & { upkeepNeeded: boolean }>;

    counter(overrides?: CallOverrides): Promise<[BigNumber]>;

    "counter()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    fulfill(
      _requestId: BytesLike,
      _approved: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "fulfill(bytes32,bool)"(
      _requestId: BytesLike,
      _approved: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    interval(overrides?: CallOverrides): Promise<[BigNumber]>;

    "interval()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    lastChecked(overrides?: CallOverrides): Promise<[string]>;

    "lastChecked()"(overrides?: CallOverrides): Promise<[string]>;

    lastTimeStamp(overrides?: CallOverrides): Promise<[BigNumber]>;

    "lastTimeStamp()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    "owner()"(overrides?: CallOverrides): Promise<[string]>;

    performUpkeep(
      arg0: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "performUpkeep(bytes)"(
      arg0: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    requestVolumeData(
      _wallet: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "requestVolumeData(address)"(
      _wallet: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    transferOwnership(
      to: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "transferOwnership(address)"(
      to: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    uintToString(
      _value: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    "uintToString(uint256)"(
      _value: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    urlTest(overrides?: CallOverrides): Promise<[string]>;

    "urlTest()"(overrides?: CallOverrides): Promise<[string]>;

    volume(overrides?: CallOverrides): Promise<[BigNumber]>;

    "volume()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    watchers(arg0: string, overrides?: CallOverrides): Promise<[boolean]>;

    "watchers(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    withdrawLink(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "withdrawLink()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  acceptOwnership(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "acceptOwnership()"(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  addWatcher(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "addWatcher()"(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  addressesToVerify(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  "addressesToVerify(uint256)"(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  approved(overrides?: CallOverrides): Promise<boolean>;

  "approved()"(overrides?: CallOverrides): Promise<boolean>;

  batchVerify(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "batchVerify()"(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  buidl(
    _wallet: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "buidl(address)"(
    _wallet: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  checkUpkeep(
    arg0: BytesLike,
    overrides?: CallOverrides
  ): Promise<[boolean, string] & { upkeepNeeded: boolean }>;

  "checkUpkeep(bytes)"(
    arg0: BytesLike,
    overrides?: CallOverrides
  ): Promise<[boolean, string] & { upkeepNeeded: boolean }>;

  counter(overrides?: CallOverrides): Promise<BigNumber>;

  "counter()"(overrides?: CallOverrides): Promise<BigNumber>;

  fulfill(
    _requestId: BytesLike,
    _approved: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "fulfill(bytes32,bool)"(
    _requestId: BytesLike,
    _approved: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  interval(overrides?: CallOverrides): Promise<BigNumber>;

  "interval()"(overrides?: CallOverrides): Promise<BigNumber>;

  lastChecked(overrides?: CallOverrides): Promise<string>;

  "lastChecked()"(overrides?: CallOverrides): Promise<string>;

  lastTimeStamp(overrides?: CallOverrides): Promise<BigNumber>;

  "lastTimeStamp()"(overrides?: CallOverrides): Promise<BigNumber>;

  owner(overrides?: CallOverrides): Promise<string>;

  "owner()"(overrides?: CallOverrides): Promise<string>;

  performUpkeep(
    arg0: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "performUpkeep(bytes)"(
    arg0: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  requestVolumeData(
    _wallet: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "requestVolumeData(address)"(
    _wallet: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  transferOwnership(
    to: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "transferOwnership(address)"(
    to: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  uintToString(
    _value: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  "uintToString(uint256)"(
    _value: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  urlTest(overrides?: CallOverrides): Promise<string>;

  "urlTest()"(overrides?: CallOverrides): Promise<string>;

  volume(overrides?: CallOverrides): Promise<BigNumber>;

  "volume()"(overrides?: CallOverrides): Promise<BigNumber>;

  watchers(arg0: string, overrides?: CallOverrides): Promise<boolean>;

  "watchers(address)"(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  withdrawLink(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "withdrawLink()"(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    acceptOwnership(overrides?: CallOverrides): Promise<void>;

    "acceptOwnership()"(overrides?: CallOverrides): Promise<void>;

    addWatcher(overrides?: CallOverrides): Promise<void>;

    "addWatcher()"(overrides?: CallOverrides): Promise<void>;

    addressesToVerify(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    "addressesToVerify(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    approved(overrides?: CallOverrides): Promise<boolean>;

    "approved()"(overrides?: CallOverrides): Promise<boolean>;

    batchVerify(overrides?: CallOverrides): Promise<void>;

    "batchVerify()"(overrides?: CallOverrides): Promise<void>;

    buidl(_wallet: string, overrides?: CallOverrides): Promise<void>;

    "buidl(address)"(_wallet: string, overrides?: CallOverrides): Promise<void>;

    checkUpkeep(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean, string] & { upkeepNeeded: boolean }>;

    "checkUpkeep(bytes)"(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean, string] & { upkeepNeeded: boolean }>;

    counter(overrides?: CallOverrides): Promise<BigNumber>;

    "counter()"(overrides?: CallOverrides): Promise<BigNumber>;

    fulfill(
      _requestId: BytesLike,
      _approved: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    "fulfill(bytes32,bool)"(
      _requestId: BytesLike,
      _approved: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    interval(overrides?: CallOverrides): Promise<BigNumber>;

    "interval()"(overrides?: CallOverrides): Promise<BigNumber>;

    lastChecked(overrides?: CallOverrides): Promise<string>;

    "lastChecked()"(overrides?: CallOverrides): Promise<string>;

    lastTimeStamp(overrides?: CallOverrides): Promise<BigNumber>;

    "lastTimeStamp()"(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<string>;

    "owner()"(overrides?: CallOverrides): Promise<string>;

    performUpkeep(arg0: BytesLike, overrides?: CallOverrides): Promise<void>;

    "performUpkeep(bytes)"(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    requestVolumeData(
      _wallet: string,
      overrides?: CallOverrides
    ): Promise<string>;

    "requestVolumeData(address)"(
      _wallet: string,
      overrides?: CallOverrides
    ): Promise<string>;

    transferOwnership(to: string, overrides?: CallOverrides): Promise<void>;

    "transferOwnership(address)"(
      to: string,
      overrides?: CallOverrides
    ): Promise<void>;

    uintToString(
      _value: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    "uintToString(uint256)"(
      _value: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    urlTest(overrides?: CallOverrides): Promise<string>;

    "urlTest()"(overrides?: CallOverrides): Promise<string>;

    volume(overrides?: CallOverrides): Promise<BigNumber>;

    "volume()"(overrides?: CallOverrides): Promise<BigNumber>;

    watchers(arg0: string, overrides?: CallOverrides): Promise<boolean>;

    "watchers(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    withdrawLink(overrides?: CallOverrides): Promise<void>;

    "withdrawLink()"(overrides?: CallOverrides): Promise<void>;
  };

  filters: {
    "ChainlinkCancelled(bytes32)"(
      id?: BytesLike | null
    ): ChainlinkCancelledEventFilter;
    ChainlinkCancelled(id?: BytesLike | null): ChainlinkCancelledEventFilter;

    "ChainlinkFulfilled(bytes32)"(
      id?: BytesLike | null
    ): ChainlinkFulfilledEventFilter;
    ChainlinkFulfilled(id?: BytesLike | null): ChainlinkFulfilledEventFilter;

    "ChainlinkRequested(bytes32)"(
      id?: BytesLike | null
    ): ChainlinkRequestedEventFilter;
    ChainlinkRequested(id?: BytesLike | null): ChainlinkRequestedEventFilter;

    "OwnershipTransferRequested(address,address)"(
      from?: string | null,
      to?: string | null
    ): OwnershipTransferRequestedEventFilter;
    OwnershipTransferRequested(
      from?: string | null,
      to?: string | null
    ): OwnershipTransferRequestedEventFilter;

    "OwnershipTransferred(address,address)"(
      from?: string | null,
      to?: string | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      from?: string | null,
      to?: string | null
    ): OwnershipTransferredEventFilter;

    "RequestVolume(bytes32,bool,string)"(
      requestId?: BytesLike | null,
      approved?: null,
      lastChecked?: null
    ): RequestVolumeEventFilter;
    RequestVolume(
      requestId?: BytesLike | null,
      approved?: null,
      lastChecked?: null
    ): RequestVolumeEventFilter;
  };

  estimateGas: {
    acceptOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "acceptOwnership()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    addWatcher(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "addWatcher()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    addressesToVerify(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "addressesToVerify(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    approved(overrides?: CallOverrides): Promise<BigNumber>;

    "approved()"(overrides?: CallOverrides): Promise<BigNumber>;

    batchVerify(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "batchVerify()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    buidl(
      _wallet: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "buidl(address)"(
      _wallet: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    checkUpkeep(arg0: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

    "checkUpkeep(bytes)"(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    counter(overrides?: CallOverrides): Promise<BigNumber>;

    "counter()"(overrides?: CallOverrides): Promise<BigNumber>;

    fulfill(
      _requestId: BytesLike,
      _approved: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "fulfill(bytes32,bool)"(
      _requestId: BytesLike,
      _approved: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    interval(overrides?: CallOverrides): Promise<BigNumber>;

    "interval()"(overrides?: CallOverrides): Promise<BigNumber>;

    lastChecked(overrides?: CallOverrides): Promise<BigNumber>;

    "lastChecked()"(overrides?: CallOverrides): Promise<BigNumber>;

    lastTimeStamp(overrides?: CallOverrides): Promise<BigNumber>;

    "lastTimeStamp()"(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    "owner()"(overrides?: CallOverrides): Promise<BigNumber>;

    performUpkeep(
      arg0: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "performUpkeep(bytes)"(
      arg0: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    requestVolumeData(
      _wallet: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "requestVolumeData(address)"(
      _wallet: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    transferOwnership(
      to: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "transferOwnership(address)"(
      to: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    uintToString(
      _value: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "uintToString(uint256)"(
      _value: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    urlTest(overrides?: CallOverrides): Promise<BigNumber>;

    "urlTest()"(overrides?: CallOverrides): Promise<BigNumber>;

    volume(overrides?: CallOverrides): Promise<BigNumber>;

    "volume()"(overrides?: CallOverrides): Promise<BigNumber>;

    watchers(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    "watchers(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    withdrawLink(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "withdrawLink()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    acceptOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "acceptOwnership()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    addWatcher(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "addWatcher()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    addressesToVerify(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "addressesToVerify(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    approved(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "approved()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    batchVerify(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "batchVerify()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    buidl(
      _wallet: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "buidl(address)"(
      _wallet: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    checkUpkeep(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "checkUpkeep(bytes)"(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    counter(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "counter()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    fulfill(
      _requestId: BytesLike,
      _approved: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "fulfill(bytes32,bool)"(
      _requestId: BytesLike,
      _approved: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    interval(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "interval()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    lastChecked(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "lastChecked()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    lastTimeStamp(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "lastTimeStamp()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "owner()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    performUpkeep(
      arg0: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "performUpkeep(bytes)"(
      arg0: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    requestVolumeData(
      _wallet: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "requestVolumeData(address)"(
      _wallet: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      to: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "transferOwnership(address)"(
      to: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    uintToString(
      _value: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "uintToString(uint256)"(
      _value: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    urlTest(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "urlTest()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    volume(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "volume()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    watchers(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "watchers(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    withdrawLink(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "withdrawLink()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
