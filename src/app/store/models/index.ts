export interface StateModel {
  state: string;
  notes: string;
  covid19Site: string;
  covid19SiteSecondary: string;
  covid19SiteTertiary: string;
  covid19SiteQuaternary: string;
  covid19SiteQuinary: string;
  twitter: string;
  covid19SiteOld: string;
  covidTrackingProjectPreferredTotalTestUnits: string;
  covidTrackingProjectPreferredTotalTestField: string;
  totalTestResultsField: string;
  pui: string;
  pum: boolean;
  name: string;
  fips: string;
}

export interface DailyStatistics {
  date: number;
  states: number;
  positive: number;
  negative: number;
  pending: number;
  hospitalizedCurrently: number;
  hospitalizedCumulative: number;
  inIcuCurrently: number;
  inIcuCumulative: number;
  onVentilatorCurrently: number;
  onVentilatorCumulative: number;
  dateChecked: string;
  death: number;
  hospitalized: number;
  totalTestResults: number;
  lastModified: string;
  recovered: number;
  total: number;
  posNeg: number;
  deathIncrease: number;
  hospitalizedIncrease: number;
  negativeIncrease: number;
  positiveIncrease: number;
  totalTestResultsIncrease: number;
  hash: string;
}
