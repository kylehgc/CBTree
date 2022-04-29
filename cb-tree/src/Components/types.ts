export type Mood = {
  mood: string,
  moodRating: number
}
export const isKeyOfThoughtRecord = 
  (question: string, thoughtRecord: ThoughtRecord): question is keyof ThoughtRecord => {
    return question in thoughtRecord
  }

export interface Thoughts {
  thoughts: Mood[],
  hotThought: string
}

export const isThoughtRecord = (record: any): record is ThoughtRecord => {
  if(record) {
    return "timeCreated" in record 
  } 
  return false
}

export interface ThoughtRecord {
  key: string
  timeCreated: number,
  mood?: Mood[],
  thoughts?: Thoughts 
  answer?: string,
  reratemoods?: Mood[],
  situationQuestion?: string,
  evidencefor?: string,
  evidenceagainst?: string
  alternativeThoughts?: Mood[]
}  