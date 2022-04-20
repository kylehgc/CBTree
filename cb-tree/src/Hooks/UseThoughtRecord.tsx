import { useState } from "react"
import { useForm, UseFormRegister } from "react-hook-form"
import { useLocation, useNavigate } from "react-router-dom"
import { Mood } from "../Components/types"


const questionTypes =  [
  "/situationquestion" ,
  "/mood",
  "/thoughts",
  "/evidencefor",
  "/evidenceagainst",
  "/alternativethought",
  "/rerateMoods",
  "/Submit"
] as const

const question = [
  "/situationquestion" ,
  "/mood",
  "/thoughts",
  "/evidencefor",
  "/evidenceagainst",
  "/alternativethought",
  "/rerateMoods",
  "/Submit"
] as const

const data = {
  "/situationquestion": {label:"What is the Situation?", type: "Text"},
  "/mood": {label:"Add any emotions you felt and rate them", type: "Mood"},
  "/thoughts": {label:"List any thoughts and rate your Belief", type: "Thoughts"},
  "/evidencefor":{label: "What is the Evidence for", type: "Text"},
  "/evidenceagainst": {label:"What is the Evidence Against", type: "Text"},
  "/alternativethought":{label: "List any alternative thoughts and rate them",type: "Text"},
  "/rerateMoods": {label:"rerate your moods",type:"Mood"},
  "/Submit": {label:"something", type:"Submit"}
} 

interface Moods {
  Moods: Mood[]
}
interface Thoughts {
  thoughts: Mood[],
  hotThought: string
}

interface TextFieldValues {
  value: string
}


type formValues = TextFieldValues | Moods | Thoughts  


export interface ThoughtRecord {
  timeCreated?: number,
  moods?: Mood[],
  thoughts?: Thoughts 
  answer?: string,
  rerateMoods?: Mood[],
  situationQuestion?: string,
  evidenceFor?: string,
  evidenceAgainst?: string
  alternativeThoughts?: Mood[]
} 
const getRegisterValues = (register: UseFormRegister<formValues>, pathName: typeof question[number]) => {
  const type = data[pathName].type
  if(type === "text") {
    return [register(
      "value", {required: true, minLength:{value: 1, message: "Too short"}} )]
  }
  if(type === "Mood") {
    return [register("Moods")]
  }
  if(type === "thoughts") {
    const register_thoughts = register("thoughts")
    const register_hotThought = register("hotThought")
    return [register_thoughts, register_hotThought] as const
  }
  if(type === "Submit") {
    return [register("value")]
  }
  throw Error
}
const isQuestion = (pathname: any): pathname is typeof question[number] => {
  return(question.includes(pathname))
}

const UseThoughtRecord = (): [string,() => void] | never => {
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()
  const pathName = useLocation().pathname
  const {register, handleSubmit, formState: {isSubmitting}} = useForm<formValues>()

  if(!isQuestion(pathName)) {
    throw Error
  }
  const label = data[pathName].label
  const submitGenerator = () => {
    const NextLinkIndex = question.indexOf(pathName) + 1
    return () => navigate(question[NextLinkIndex])
  }
  return [label, submitGenerator()]
}

export default UseThoughtRecord