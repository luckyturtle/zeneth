// Type definitions
import { BigNumberish } from '@ethersproject/bignumber';
import { FlashbotsBundleRawTransaction, FlashbotsBundleTransaction } from '@flashbots/ethers-provider-bundle';

export type FlashbotsTransaction = FlashbotsBundleRawTransaction | FlashbotsBundleTransaction;

export interface TransactionFragment {
  data: string;
  gasLimit: BigNumberish;
  to: string;
  value: BigNumberish;
}
