export type TYPE_PAGE = {
  hasNext: boolean;
  hasPrevious: boolean;
  itemCount: number;
  page: number;
  pageCount: number;
  take: number;
};

export type TYPE_RESPONSE = {
  data?: any;
  meta?: TYPE_PAGE;
};

export type TYPE_USER = {
  id?: string;
  name?: string;
  email?: string;
};

export type TYPE_MESSAGES = {
  id?: string;
  message: string;
};