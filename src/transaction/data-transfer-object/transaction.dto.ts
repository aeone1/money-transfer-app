export class FindTransactionResponseDto {
  id: string;
  sender_id: string;
  reciever_id: string;
  status: string;
}

export class TransactionResponseDto {
  id: string;
  sender_id: string;
  reciever_id: string;
  status: string;
}

export class UpdateTransactionDto {
  id: string;
  sender_id: string;
  reciever_id: string;
  status: string;
}
