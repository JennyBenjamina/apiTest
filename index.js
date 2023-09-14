const express = require('express')
const app = express()

const scorecardData = [
  {
    title: 'New Tasks',
    horizontal: true,
    data: [
      {
        id: '1',
        hole: '1',
        par: '5',
        yards: '543',
        strokeIndex: '3',
      },
      {
        id: '2',
        hole: '2',
        par: '5',
        yards: '543',
        strokeIndex: '3',
      },
      {
        id: '3',
        hole: '3',
        par: '5',
        yards: '543',
        strokeIndex: '3',
      },
      {
        id: '4',
        hole: '4',
        par: '5',
        yards: '543',
        strokeIndex: '3',
      },
      {
        id: '5',
        hole: '5',
        par: '5',
        yards: '543',
        strokeIndex: '3',
      },
      {
        id: '11',
        hole: '6',
        par: '5',
        yards: '543',
        strokeIndex: '3',
      },
      {
        id: '22',
        hole: '7',
        par: '5',
        yards: '543',
        strokeIndex: '3',
      },
      {
        id: '33',
        hole: '8',
        par: '5',
        yards: '543',
        strokeIndex: '3',
      },
      {
        id: '44',
        hole: '9',
        par: '5',
        yards: '543',
        strokeIndex: '3',
      },
      {
        id: '55',
        hole: 'out',
        par: '5',
        yards: '543',
        strokeIndex: '3',
      },
      {
        id: '16',
        hole: '10',
        par: '5',
        yards: '543',
        strokeIndex: '3',
      },
      {
        id: '26',
        hole: '11',
        par: '5',
        yards: '543',
        strokeIndex: '3',
      },
      {
        id: '36',
        hole: '12',
        par: '5',
        yards: '543',
        strokeIndex: '3',
      },
      {
        id: '46',
        hole: '13',
        par: '5',
        yards: '543',
        strokeIndex: '3',
      },
      {
        id: '566',
        hole: '14',
        par: '5',
        yards: '543',
        strokeIndex: '3',
      },
      {
        id: '326',
        hole: '15',
        par: '5',
        yards: '543',
        strokeIndex: '3',
      },
      {
        id: '136',
        hole: '16',
        par: '5',
        yards: '543',
        strokeIndex: '3',
      },
      {
        id: '468',
        hole: '17',
        par: '5',
        yards: '543',
        strokeIndex: '3',
      },
      {
        id: '596',
        hole: '18',
        par: '5',
        yards: '543',
        strokeIndex: '3',
      },
      {
        id: '505',
        hole: 'In',
        par: '5',
        yards: '543',
        strokeIndex: '3',
      },
      {
        id: '551',
        hole: 'Total',
        par: '5',
        yards: '543',
        strokeIndex: '3',
      },
    ],
  },
];


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/scorecard', (req, res)=>{
  res.json(scorecardData)
})

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
