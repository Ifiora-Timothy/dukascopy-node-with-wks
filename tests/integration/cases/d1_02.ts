const config = {
  instrument: 'eurusd',
  dates: { from: '2019-02-01', to: '2019-03-01' },
  timeframe: 'd1',
  volumes: true,
  utcOffset: 0
};

const expectedOutput = [
  [1548979200000, 1.14482, 1.14884, 1.14343, 1.14547, 398191.5376],
  [1549231200000, 1.14503, 1.14581, 1.14503, 1.14543, 6497.2199],
  [1549238400000, 1.14543, 1.14603, 1.14244, 1.14349, 367141.9844],
  [1549324800000, 1.14348, 1.14404, 1.14011, 1.14087, 331771.9794],
  [1549411200000, 1.14087, 1.14091, 1.13608, 1.13656, 350166.0903],
  [1549497600000, 1.13655, 1.13675, 1.13244, 1.13382, 375756.2372],
  [1549584000000, 1.13382, 1.13508, 1.13207, 1.13207, 330732.8092],
  [1549836000000, 1.13186, 1.13248, 1.13148, 1.13237, 8475.74],
  [1549843200000, 1.13239, 1.13298, 1.12672, 1.12785, 378811.6179],
  [1549929600000, 1.12785, 1.13396, 1.12577, 1.13336, 404102.6581],
  [1550016000000, 1.13336, 1.13414, 1.1249, 1.12646, 380532.4111],
  [1550102400000, 1.12646, 1.13098, 1.12498, 1.12947, 416725.5624],
  [1550188800000, 1.12946, 1.13061, 1.1234, 1.12925, 428528.3399],
  [1550440800000, 1.12906, 1.12959, 1.12889, 1.12948, 8065.0999],
  [1550448000000, 1.12948, 1.13338, 1.12937, 1.13114, 264432.3615],
  [1550534400000, 1.13115, 1.13574, 1.12755, 1.13399, 408625.0242],
  [1550620800000, 1.13399, 1.13711, 1.13249, 1.13461, 393154.5111],
  [1550707200000, 1.13461, 1.13663, 1.13202, 1.13398, 444394.7101],
  [1550793600000, 1.13399, 1.13556, 1.13161, 1.13319, 385471.6626],
  [1551045600000, 1.1334, 1.13421, 1.13281, 1.1342, 10788.8699],
  [1551052800000, 1.13421, 1.13675, 1.13367, 1.13647, 368447.7604],
  [1551139200000, 1.13647, 1.14027, 1.1345, 1.1393, 417596.3036],
  [1551225600000, 1.13931, 1.14036, 1.13622, 1.13795, 422988.3482],
  [1551312000000, 1.13796, 1.14197, 1.13595, 1.1373, 457608.48]
];

export { config, expectedOutput };