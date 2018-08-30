/**
 *
 * FlightListGraph
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

// import styled from 'styled-components';
import datefns from 'date-fns';
const Chart = require('../../../chartjs/Chart.bundle.min');


function getRandomColor() {
  const letters = '0123456789ABCDEF'.split('');
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

/* eslint-disable react/prefer-stateless-function */
class FlightListGraph extends React.Component {
  constructor(props){
    super(props);
    this.updateChart=this.updateChart.bind(this)
  }

  componentDidMount() {
   this.updateChart();
  }

  componentDidUpdate(prevProps){
    if(this.props!==prevProps){
      this.updateChart();
    }
  }

  updateChart(){
    const node = this.node;

    const getChartData = flights => {
      const solution = {
        data: { datasets: [] },
        options: {
          legend: {

            onClick: e => e.stopPropagation(),
            // onHover(e, legendItem) {
            //   const index = legendItem.datasetIndex;
            //   const ci = this.chart;
            //   const meta = ci.getDatasetMeta(index);
            //   console.log(e, legendItem, index, node, ci, meta);
            // },
          },
          tooltips: {
            mode: 'index',
            position: 'nearest',
            itemSort: (a, b) => a.yLabel - b.yLabel,
            intersect: false,
            callbacks: {
              label: function (tooltipItem, data) {
                var label = data.datasets[tooltipItem.datasetIndex].label || '';

                label += ': ';
                label += '$' + tooltipItem.yLabel;
                return label;
              },
            }
          },
          scales: {
            xAxes: [
              {
                type: 'time',
                labelString: 'Departing',
                time: {
                  //   displayFormats: {
                  //   day:	'MMM D',
                  // },

                  unit: 'day'
                },
              }

            ],
            yAxes: [
              {
                ticks: {
                  // Include a dollar sign in the ticks
                  callback: function (value) {
                    return '$' + value;
                  }
                },
                labelString: 'Price'
              }
            ]
          },
        },
      };

      const destinations = Array.from(new Set(flights.map(f => f.to_id)));

      for (const destination of destinations) {
        const data = [];
        const flightsInDest = flights.filter(
          flight => flight.to_id === destination,
        );

        flightsInDest.forEach(flight => {
          const x = datefns.format(flight.departing, 'YYYY-MM-DD');
          data.push({ x, y: flight.price });
        });


        const label = `${flightsInDest[0].city.name} ${flightsInDest[0].country.emoji}`;
        data.sort((a, b) => new Date(b.x) - new Date(a.x));
        const color = getRandomColor();
        const series = {
          label,
          backgroundColor: color,

          borderColor: color, fill: false,
          data,
        };

        solution.data.datasets.push(series);
      }

      return solution;
    };

    const chartData = getChartData(this.props.flights);

    const myChart = new Chart(node, {
      type: 'line',
      ...chartData,
    });
  }

  render() {
    // if (this.props.flights.length === 0) {
    //   return <div>No Flights Found</div>;
    // }

    return (
      <div>
        <canvas
          style={{ width: 760, height: 500 }}
          ref={node => (this.node = node)}
        />
      </div>
    );
  }
}

FlightListGraph.propTypes = { flights: PropTypes.array };

export default FlightListGraph;
