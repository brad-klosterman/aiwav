import { FingerprintData, FingerprintDataInput } from '@/generated/wer1-types';
import { ACRCloudResponse } from '../types/acr-cloud-response';
import _ from 'lodash';

export function parseACRCloudResponse(response: ACRCloudResponse[]): FingerprintData[] {
  const positiveResults = _.filter(response, entry => _.get(entry, 'result.status.code', 0) === 0);
  const filteredData = filterData(positiveResults);
  const transformedData = transformData(filteredData);

  return transformedData;
}

// Get the first and last mentions of each matching adjacent acrid in the array.
// Then return first and every other element
function filterData(positiveResults: ACRCloudResponse[]) {
  return positiveResults
    .map((obj, index, arr) => {
      if (obj.result.metadata) {
        let prevObj: ACRCloudResponse = arr[index - 1];
        let currentObj: ACRCloudResponse = obj;
        let nextObj: ACRCloudResponse = arr[index + 1];

        if (prevObj && prevObj.result.metadata) {
          prevObj = filterMusicByScoreAndPlaytime(prevObj);
          currentObj = filterMusicByScoreAndPlaytime(obj);
        }

        if (nextObj && nextObj.result.metadata) {
          nextObj = filterMusicByScoreAndPlaytime(nextObj);
        }

        const isFirstMention =
          !prevObj ||
          (prevObj.result.metadata &&
            currentObj.result.metadata &&
            currentObj.result.metadata.music[0].acrid !== prevObj.result.metadata.music[0].acrid);
        const isLastMention =
          !nextObj ||
          (nextObj.result.metadata &&
            currentObj.result.metadata &&
            currentObj.result.metadata.music[0].acrid !== nextObj.result.metadata.music[0].acrid);

        if (isFirstMention || isLastMention) {
          return currentObj;
        }
      }

      return null;
    })
    .filter((obj): obj is ACRCloudResponse => obj !== null)
    .filter((_, index) => index % 2 === 0);
}

function filterMusicByScoreAndPlaytime(object: ACRCloudResponse): ACRCloudResponse {
  if (object.result.metadata) {
    // Find and filter by maximum score
    const maxScore = _.maxBy(object.result.metadata.music, 'score')?.score;
    const maxScoreMusicList = _.filter(object.result.metadata.music, music => music.score === maxScore);
    // Filter by longest play time
    const longestPlaytimeTrack = _.maxBy(maxScoreMusicList, music => music.sample_end_time_offset_ms - music.sample_begin_time_offset_ms);

    if (longestPlaytimeTrack) {
      return {
        ...object,
        result: {
          ...object.result,
          metadata: {
            ...object.result.metadata,
            music: [longestPlaytimeTrack],
          },
        },
      };
    }
  }

  return object;
}

function transformData(response: ACRCloudResponse[]): FingerprintDataInput[] {
  const transformedData: FingerprintDataInput[] = [];

  response.forEach(item => {
    if (item.result.metadata) {
      const { offset } = item;
      const { music, timestamp_utc } = item.result.metadata;

      const transformedTracks: FingerprintDataInput[] = music.map(track => ({
        acrid: track.acrid,
        album: track.album,
        artists: track.artists,
        duration_ms: track.duration_ms,
        genres: track.genres,
        label: track.label,
        offset: offset,
        release_date: track.release_date,
        score: track.score,
        timestamp_utc: timestamp_utc,
        title: track.title,
      }));

      transformedData.push(...transformedTracks);
    }
  });

  return transformedData;
}
