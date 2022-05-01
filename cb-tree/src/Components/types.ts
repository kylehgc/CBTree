export type Mood = {
  mood: string,
  moodRating: number
}
export const isKeyOfThoughtRecord = 
  (question: string, thoughtRecord: ThoughtRecord): question is keyof ThoughtRecord => {
    return question in thoughtRecord
  }
const thoughtRecordKeys =
 [
   "key",
   "emotion",
   "userKey",
   "timeCreated",
   "mood",
   "thoughts",
   "answer",
   "rerateemotion",
   "situationquestion",
   "evidencefor",
   "evidenceagainst", "alternativethought"
 ]


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
export const isFullThoughtRecord = (record: any): record is FullThoughtRecord => {
  if(!record) {
    return false
  }
  const keys = Object.keys(record)
  for(let key of keys) {
    if(!thoughtRecordKeys.includes(key)) {
      return false
    } 
  }
  return true
}
  


export type FullThoughtRecord = Required<ThoughtRecord>

export interface ThoughtRecord {
  userKey: string
  key: string
  timeCreated: number,
  emotion?:string,
  mood?: Mood[],
  thoughts?: Thoughts 
  answer?: string,
  rerateemotion?: string,
  situationquestion?: string,
  evidencefor?: string,
  evidenceagainst?: string
  alternativethought?: Mood[]
}  