/* tslint:disable */
export interface OpeningPeriod {
  id?: number;
  opening?: string;
  closing?: string;
  day?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
  shopId?: number;
  durationOfOpening?: string;
  rowVersion?: string;
}
