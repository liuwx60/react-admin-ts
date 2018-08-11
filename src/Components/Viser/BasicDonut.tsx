import { Chart, Tooltip, Axis, Legend, Coord, Pie } from 'viser-react';
import * as React from 'react';

// tslint:disable-next-line:no-var-requires
const DataSet = require('@antv/data-set');

const sourceData = [
  { item: '事例一', count: 40 },
  { item: '事例二', count: 21 },
  { item: '事例三', count: 17 },
  { item: '事例四', count: 13 },
  { item: '事例五', count: 9 }
];

const scale = [{
  dataKey: 'percent',
  min: 0,
  formatter: '.0%',
}];

const dv = new DataSet.View().source(sourceData);
dv.transform({
  type: 'percent',
  field: 'count',
  dimension: 'item',
  as: 'percent'
});
const data = dv.rows;

export default class BasicDonut extends React.Component {
  public render() {
    return (
      <Chart forceFit={true} height={400} data={data} scale={scale} padding="auto">
        <Tooltip showTitle={false} />
        <Axis />
        <Legend dataKey="item" />
        <Coord type="theta" radius={0.75} innerRadius={0.6} />
        <Pie position="percent" color="item" style={{ stroke: '#fff', lineWidth: 1 }}
          label={['percent', {
            formatter: (val: any, item: any) => {
              return item.point.item + ': ' + val;
            }
          }]}
        />
      </Chart>
    );
  }
}