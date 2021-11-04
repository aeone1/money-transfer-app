export class FindUserResponseDto {
  id: string;
  name: string;
  login: string;
}

export class UserResponseDto {
  id: string;
  name: string;
  login: string;
}

export class UserBalanceResponseDto {
  id: string;
  balance: number;
}
export class CreateUserDto {
  name: string;
  login: string;
}

export class UpdateUserDto {
  name: string;
  login: string;
}

export class UserTransferBody {
  comment: string;
}
