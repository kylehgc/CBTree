import { useEffect } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { Mood } from "../Components/FeelingSlider"



const question = [
  "/situationquestion" ,
  "/mood",
  "/thoughts",
  "/evidencefor",
  "/evidenceagainst",
  "/alternativethought",
  "/reratemood",
  "/Submit"
] as const

const labels = {
  "/situationquestion": "What is the Situation?",
  "/mood": "Add any emotions you felt and rate them",
  "/thoughts": "List any thoughts and rate your Belief",
  "/evidencefor": "What is the Evidence for",
  "/evidenceagainst": "What is the Evidence Against",
  "/alternativethought": "List any alternative thoughts and rate them",
  "/reratemood": "rerate your moods",
  "/Submit": "something"
} 

export interface ThoughtRecordState {
  moods?: Mood[],
  hotThought?: string,
  answer?: string

}

const UseThoughtRecord= (recordState: ThoughtRecordState): [string,() => void] => {
  const navigate = useNavigate()
  const pathName = useLocation().pathname as typeof question[number]
  console.log(pathName)
  const label = labels[pathName]
  console.log(label)
  
  useEffect(() => {
    window.localStorage.setItem(pathName, JSON.stringify(recordState))
    console.log(pathName,  window.localStorage.getItem(pathName))
  },[recordState, pathName])
  
  const submitGenerator = () => {
    const NextLinkIndex = question.indexOf(pathName) + 1
    return () => navigate(question[NextLinkIndex])
  }
  
  

  

  
  return [label, submitGenerator()]
}

export default UseThoughtRecord