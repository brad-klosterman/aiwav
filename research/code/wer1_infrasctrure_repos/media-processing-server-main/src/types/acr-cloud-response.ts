export interface ACRCloudResponse {
  file: string;
  offset: number;
  result: {
    status: {
      msg: string;
      version: string;
      code: number;
    };
    metadata?: {
      timestamp_utc: string;
      music: {
        acrid: string;
        album?: {
          name: string;
          langs?: Record<string, string>[];
        };
        artists?: { name: string; isni?: string }[];
        title?: string;
        label?: string;
        release_date?: string;
        genres?: [{ name: string; id?: number }];
        db_begin_time_offset_ms: number; // Position of beginning of the recognition on database file in ACR
        db_end_time_offset_ms: number; // Position of end of the recognition on database file in ACR
        sample_begin_time_offset_ms: number; // Position of beginning of the recognition in sample file sent by us
        sample_end_time_offset_ms: number; // Position of end of the recognition in sample file sent by us
        play_offset_ms: number; // The time position of the audio/song being played
        duration_ms: number; // Track duration
        result_from: number;
        score: number;
        external_ids: object;
        external_metadata: object;
      }[];
    };
    result_type?: number;
    cost_time?: number;
  };
}
