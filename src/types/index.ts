export interface UserResponse {
  id: string;
  username: string;
  avatar: string;
  discriminator: string;
  public_flags: number;
  flags: number;
  email?: string;
  verified?: boolean;
  locale: string;
  mfa_enabled: boolean;
  premium_type: 0 | 1 | 2;
  isMember?: boolean;
}