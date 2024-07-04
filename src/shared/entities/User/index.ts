export type User = {
  id: number;
  login: string;
  balance: number;
  active: boolean;
  createdAt: Date;
  roleId: number;
  firstName: string;
  secondName: string;
  lastName: string;
  birthday: Date;
  email: string;
  phone: string;
  currencyId: number;
  isPaymentSystemUser: boolean;
  role: string;
  permission: Permission;
  currency: string;
  isVerificated: boolean;
  isHaveFirstDeposit: boolean;
};

export type Permission = {
  canAddSameRole: boolean;
  canTransaction: boolean;
  canCreateRoles: null;
};
