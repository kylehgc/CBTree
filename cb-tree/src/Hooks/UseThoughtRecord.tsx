import { useEffect } from "react"
import { useLocation, useNavigate } from "react-router-dom"

const rootUrl = "/thoughtrecord/"

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


const UseThoughtRecord= (): [string,() => void] => {
  const navigate = useNavigate()
  const pathName = useLocation().pathname as typeof question[number]
  console.log(pathName)
  const label = labels[pathName]
  console.log(label)

  
  
  

  const submitGenerator = () => {
    const NextLinkIndex = question.indexOf(pathName) + 1
    return () => navigate(question[NextLinkIndex])
  }
  
  

  
  useEffect(() => {

  },[])

  
  return [label, submitGenerator()]
}

export default UseThoughtRecord