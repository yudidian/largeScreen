import type {
  BarSeriesOption, ComposeOption, DatasetComponentOption, GridComponentOption,
  LineSeriesOption,
  TitleComponentOption,
  TooltipComponentOption,
} from 'echarts'

export type EchartsOptions = ComposeOption<BarSeriesOption | LineSeriesOption | TitleComponentOption | TooltipComponentOption
  | GridComponentOption
  | DatasetComponentOption
>
