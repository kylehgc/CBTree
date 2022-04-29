import { useToast } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { Mood, Thoughts, ThoughtRecord, isThoughtRecord } from "../Components/types"
import { getToken } from "../utils/api"
import {useThoughtRecordApi} from './useThoughtRecordApi'

interface UseThoughtRecordReturn {
  label: string,
  onSubmit: (data: FormValues) => void, 
  isSubmitting: boolean, 
  currentQuestion: string,
  thoughtRecord: ThoughtRecord | undefined}

const question = [
  "/situationquestion",
  "/mood",
  "/thoughts",
  "/evidencefor",
  "/evidenceagainst",
  "/alternativethought",
  "/reratemoods",
  "/Submit"
] as const

export type QuestionType = typeof question[number]

const thoughtRecordData = {
  "/situationquestion": {label:"What is the Situation?", type: "Text"},
  "/mood": {label:"Add any emotions you felt and rate them", type: "Mood"},
  "/thoughts": {label:"List any thoughts and rate your Belief", type: "Thoughts"},
  "/evidencefor":{label: "What is the Evidence for", type: "Text"},
  "/evidenceagainst": {label:"What is the Evidence Against", type: "Text"},
  "/alternativethought":{label: "", type: "Text"},
  "/reratemoods": {label:"Rerate Your Moods",type:"Mood"},
  "/Submit": {label:"something", type:"Submit"}
} 

export type FormValues = String | Mood[] | Thoughts  

const isQuestion = (pathname: any): pathname is QuestionType => {
  return(question.includes(pathname))
}

const UseThoughtRecord = (): UseThoughtRecordReturn | never => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const toast = useToast()
  const navigate = useNavigate()
  const {pathname, state} = useLocation()
  const [thoughtRecord, setThoughtRecord] = useState<ThoughtRecord>()
  const {updateThoughtRecord, getActiveThoughtRecord} = useThoughtRecordApi()
  const token = getToken()
  if(!token) {
    throw Error
  } 
  if(!isQuestion(pathname)) {
    throw Error
  }
  useEffect(() => {
    const getThoughtRecord = async () => {
      if(!thoughtRecord) {
        if(isThoughtRecord(state)) {
          setThoughtRecord(state)
        } else {
          setThoughtRecord(await getActiveThoughtRecord(token))
        }
      }
    }
    getThoughtRecord()
  },[getActiveThoughtRecord, state, thoughtRecord, token])
  
  const onSubmit = async (data: FormValues) => {
    const updateKey = pathname.slice(1)
    const activeThoughtRecord: string = isThoughtRecord(thoughtRecord) ? thoughtRecord.key : "" 
    const NextLinkIndex = question.indexOf(pathname) + 1
    setIsSubmitting(true)
    try {
      await updateThoughtRecord(data, activeThoughtRecord, token, updateKey)
      setIsSubmitting(false)
      navigate(question[NextLinkIndex])
    } catch {
      toast({
        status: 'error', 
        description: 'problem with update'
      })
    }
  }

  const label = thoughtRecordData[pathname].label
  const currentQuestion = pathname.slice(1)
  return {
    label: label, 
    onSubmit: onSubmit, 
    isSubmitting: isSubmitting,
    currentQuestion: currentQuestion, 
    thoughtRecord: thoughtRecord
  }
}
export default UseThoughtRecord