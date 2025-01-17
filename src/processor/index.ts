import { aggregate } from '../aggregator';
import { normalise } from '../data-normaliser';
import { decompress } from '../decompressor';
import { getDateFromUrl } from '../utils/date';
import { getTimeframeFromUrl } from '../utils/range';
import { ProcessDataInput, ProcessDataOutput } from './types';

function processData({
  instrument,
  requestedTimeframe,
  bufferObjects,
  priceType,
  volumes,
  volumeUnits,
  ignoreFlats
}: ProcessDataInput): ProcessDataOutput {
  const result: ProcessDataOutput = [];

  for (let i = 0, n = bufferObjects.length; i < n; i++) {
    const { url, buffer } = bufferObjects[i];

    const startDate = getDateFromUrl(url);
    const urlTimeframe = getTimeframeFromUrl(url);

    const decompressedData = decompress({ buffer, timeframe: urlTimeframe });
    const normalisedData = normalise({
      data: decompressedData,
      timeframe: urlTimeframe,
      startTs: +startDate,
      instrument,
      volumes,
      volumeUnits
    });

    const aggregatedData = aggregate({
      data: normalisedData,
      fromTimeframe: urlTimeframe,
      toTimeframe: requestedTimeframe,
      priceType,
      ignoreFlats,
      startTs: +startDate,
      volumes
    });

    for (let j = 0, m = aggregatedData.length; j < m; j++) {
      result.push(aggregatedData[j]);
    }
  }

  return result;
}

export { processData };
