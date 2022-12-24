export interface AccessTokenInfo {
  accessToken: string;
  expiresIn: number;
  getTime: number;
}

export interface AccessConfig {
  access_token: string;
  expires_in: number;
}

export interface WechatError {
  errcode: number;
  errmsg: string;
}

export interface WechatUserInfo {
  openid: string;
  session_key: string;
  unionid?: string;
}
