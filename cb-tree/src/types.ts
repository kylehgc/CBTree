export type Mood = {
  mood: string,
  moodRating: number
}
export const isKeyOfThoughtRecord =
  (question: string, thoughtRecord: ThoughtRecord): question is keyof ThoughtRecord => {
    return question in thoughtRecord
  }
export const isQuestion = (pathname: any): pathname is QuestionType => {
  return (question.includes(pathname))
}

export type FormValues = String | Mood[] | Thoughts | ThoughtRecord

export const question = [
  "/emotion",
  "/situationquestion",
  "/mood",
  "/thoughts",
  "/evidencefor",
  "/evidenceagainst",
  "/alternativethought",
  "/rerateemotion",
  "/submit"
] as const

export type QuestionType = typeof question[number]

export const thoughtRecordData = {
  "/emotion": { label: "How do you feel?", type: "Emotion" },
  "/situationquestion": { label: "What is the Situation?", type: "Text" },
  "/mood": { label: "Add any emotions you felt and rate them", type: "Mood" },
  "/thoughts": { label: "List any thoughts and rate your Belief", type: "Thoughts" },
  "/evidencefor": { label: "What is the Evidence for", type: "Text" },
  "/evidenceagainst": { label: "What is the Evidence Against", type: "Text" },
  "/alternativethought": { label: "", type: "Text" },
  "/rerateemotion": { label: "How do you feel?", type: "Emotion" },
  "/submit": { label: "something", type: "Submit" }
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
    "evidenceagainst",
    "alternativethought"
  ]


export interface Thoughts {
  thoughts: Mood[],
  hotThought: string
}

export const isThoughtRecord = (record: any): record is ThoughtRecord => {
  if (record) {
    return "timeCreated" in record
  }
  return false
}
export const isFullThoughtRecord = (record: any): record is FullThoughtRecord => {
  if (!record) {
    return false
  }
  const keys = Object.keys(record)
  for (let key of keys) {
    if (!thoughtRecordKeys.includes(key)) {
      return false
    }
  }
  return true
}

export const isToken = (obj: any): obj is Token => {
  return obj.token_type === 'bearer' && 'access_token' in obj
}

export interface Token {
  access_token: string
  token_type: 'bearer'
}

export interface User {
  activeThoughtRecord: string | null
  thoughtRecords: string[]
  username: string
  firstName?: string
  lastName?: string
}
export type FullThoughtRecord = Required<ThoughtRecord>

export interface ThoughtRecord {
  userKey: string
  key: string
  timeCreated: number,
  emotion?: string,
  mood?: Mood[],
  thoughts?: Thoughts
  answer?: string,
  rerateemotion?: string,
  situationquestion?: string,
  evidencefor?: string,
  evidenceagainst?: string
  alternativethought?: Mood[]
}  