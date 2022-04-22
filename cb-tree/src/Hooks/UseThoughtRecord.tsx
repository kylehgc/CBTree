import { useToast } from "@chakra-ui/react"
import { useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { Mood } from "../Components/types"
import {useThoughtRecordApi} from './useThoughtRecordApi'

interface UseThoughtRecordReturn {
  label: string,
  onSubmit: (data: FormValues) => void, 
  isLoading: boolean}

const question = [
  "/situationquestion",
  "/mood",
  "/thoughts",
  "/evidencefor",
  "/evidenceagainst",
  "/alternativethought",
  "/rerateMoods",
  "/Submit"
] as const

export type QuestionType = typeof question[number]

const thoughtRecordData = {
  "/situationquestion": {label:"What is the Situation?", type: "Text"},
  "/mood": {label:"Add any emotions you felt and rate them", type: "Mood"},
  "/thoughts": {label:"List any thoughts and rate your Belief", type: "Thoughts"},
  "/evidencefor":{label: "What is the Evidence for", type: "Text"},
  "/evidenceagainst": {label:"What is the Evidence Against", type: "Text"},
  "/alternativethought":{label: "List any alternative thoughts and rate them",type: "Text"},
  "/rerateMoods": {label:"rerate your moods",type:"Mood"},
  "/Submit": {label:"something", type:"Submit"}
} 

interface Thoughts {
  thoughts: Mood[],
  hotThought: string
}
export type FormValues = String | Mood[] | Thoughts  
export interface ThoughtRecord {
  timeCreated: number,
  moods?: Mood[],
  thoughts?: Thoughts 
  answer?: string,
  rerateMoods?: Mood[],
  situationQuestion?: string,
  evidenceFor?: string,
  evidenceAgainst?: string
  alternativeThoughts?: Mood[]
}  
const isQuestion = (pathname: any): pathname is QuestionType => {
  return(question.includes(pathname))
}
const UseThoughtRecord = (): UseThoughtRecordReturn | never => {
  const [isLoading, setIsLoading] = useState(false)
  const toast = useToast()
  const navigate = useNavigate()
  const {pathname} = useLocation()
  if(!isQuestion(pathname)) {
    throw Error
  }
  const {updateThoughtRecord, thoughtRecord} = useThoughtRecordApi(pathname)
  const submitGenerator = () => {
    const NextLinkIndex = question.indexOf(pathname) + 1
    return async (data: FormValues) => {
      setIsLoading(true)
      try {
        await updateThoughtRecord(data)
        setIsLoading(false)
        navigate(question[NextLinkIndex])
      } catch {
        toast({
          status: 'error', 
          description: 'problem with update'
        })
      }
    }
  }
  const label = thoughtRecordData[pathname].label
  return {
    label: label, 
    onSubmit: submitGenerator(), 
    isLoading: isLoading
  }
}
export default UseThoughtRecord