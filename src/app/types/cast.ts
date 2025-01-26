interface Person {
  id: number;
  name: string;
  gender?: number;
  profile_path?: string;
  known_for_department: string;
  popularity: number;
  original_name?: string;
  character?: string;
  credit_id: string;
  job?: string; 
  department?: string; 
  order?: number;
}

export interface Cast {
  id: number;
  cast: Person[];
  crew: Person[];
}
