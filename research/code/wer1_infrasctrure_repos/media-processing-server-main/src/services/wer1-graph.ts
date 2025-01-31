import fetch from 'cross-fetch';
import { logger } from '../boilerplate/createLogger';
import { FingerprintDataInput, FingerprintData } from '../generated/wer1-types';
import { gql, ApolloClient, InMemoryCache, HttpLink } from '@apollo/client/core';

const cache = new InMemoryCache();
const link = new HttpLink({
  uri: process.env.GRAPH_API_URL,
  fetch,
});

interface ProcessingStatusResponse {
  fingerprintData: FingerprintData[];
}

export const client = new ApolloClient({
  cache,
  link,
});

const CREATE_FINGERPRINT = gql`
  mutation createFingerprint($input: CreateFingerprintInput!) {
    createFingerprint(input: $input) {
      id
    }
  }
`;

const FETCH_FINGERPRINT = gql`
  query getFingerprintByFilename($fileKey: String!) {
    fingerprintByFileKey(fileKey: $fileKey) {
      fingerprintData {
        acrid
        title
        score
        label
        offset
        duration_ms
        release_date
        timestamp_utc
        album {
          name
        }
        artists {
          name
          isni
        }
      }
    }
  }
`;

export async function saveFingerprints(fingerprints: FingerprintDataInput[], fileKey: string): Promise<void> {
  const results = await client.mutate({
    variables: { input: { fingerprintData: fingerprints, fileKey } },
    mutation: CREATE_FINGERPRINT,
  });

  logger.debug({ message: 'Fingerprints saved successfully.', data: results.data });
}

export async function fetchFingerprintsByFileKey(fileKey: string): Promise<ProcessingStatusResponse> {
  const { data } = await client.query({
    query: FETCH_FINGERPRINT,
    variables: {
      fileKey,
    },
  });

  logger.debug({ message: 'Successfully fetched fingerprints', fileKey });

  return data;
}
