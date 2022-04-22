import { useEffect, useState } from "react"
import {QuestionType, FormValues, ThoughtRecord} from "./UseThoughtRecord"
import {thoughtRecordEndPoint, getAuthHeader, getUserEndPoint, getToken} from "../utils/api"
import useAuth, { Token, User } from "./useAuth"
import { useToast } from "@chakra-ui/react"
import { useLocation, useNavigate } from "react-router-dom"
/* returns a function that takes in the current path and active thought record 
to update and a piece of state that shows if the data is currently being fetched */


const isThoughtRecord = (record: any): record is ThoughtRecord => {
  if(record) {
    return "timeCreated" in record
  } 
  return false
}

export const useThoughtRecordApi = (pathName: QuestionType) => {
  const toast = useToast()
  const [thoughtRecord, setThoughtRecord] = useState<ThoughtRecord>()
  const {currentUser, getUser} = useAuth()
  const navigate = useNavigate() 
  const token = getToken() 
  let {state} = useLocation()
  if(!currentUser) {
    throw Error("no user")
  }
  if(!token) {
    throw Error("no token")
  }
  const getActiveThoughtRecord = async(token:Token, currentThoughtRecord: string): Promise<ThoughtRecord> => {
    const response = await fetch(
      `${thoughtRecordEndPoint}/${currentThoughtRecord}`,{
        headers: { 
          'Authorization': getAuthHeader(token)
        }
      }    
    )
    if(response.ok){
      const data = await response.json()
      if(isThoughtRecord(data)) {
        return data
      }
      throw Error("not a thought record") 
    } else {
      throw Error("bad response")
    } 
  }
  const getNewThoughtRecord = async (token:Token) => {
    const response = await fetch(thoughtRecordEndPoint, {
      headers: { 
        'Authorization': getAuthHeader(token)
      }
    })
    if(response.ok) {
      await getUser(token)
      const thoughtRecord: ThoughtRecord = await response.json()
      navigate("/situationquestion", {state: thoughtRecord})
    }
  }
  const getCurrentThoughtRecord = async (currentUser: User, token: Token) => {
    const activeThoughtRecordString = currentUser.activeThoughtRecord  
      ? currentUser.activeThoughtRecord
      : getNewThoughtRecord(token)
  
    if(activeThoughtRecordString === typeof 'string'){
      const currentThoughtRecord = await getActiveThoughtRecord(token,activeThoughtRecordString)
      setThoughtRecord(currentThoughtRecord)
    }
  }
  if(isThoughtRecord(state) && !thoughtRecord) {
    setThoughtRecord(state)
  } else {
    getCurrentThoughtRecord(currentUser, token)
  }
  
 
  if(isThoughtRecord(state)) {
    setThoughtRecord(state)
  } else {
    const activeThoughtRecordString = currentUser.activeThoughtRecord  
      ? currentUser.activeThoughtRecord
      : getNewThoughtRecord(token)

    if(activeThoughtRecordString === typeof 'string'){
      getActiveThoughtRecord(token,activeThoughtRecordString)
    }
  }


  const updateOptions: RequestInit = {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': getAuthHeader(token)
    },
    method: "PATCH"
  }

  //keys in thoughtrecord match the pathName of questions without leading slash
  const updateKey = pathName.slice(1) 
  const updateThoughtRecord = async (data: FormValues) => {
    updateOptions.body = JSON.stringify({[updateKey]: data})
    const response = await fetch(`${thoughtRecordEndPoint}/${currentUser.activeThoughtRecord}`, updateOptions)
    if(response.ok) {
      toast({
        status: "success",
        description: "Question Submitted"
      })
      return await response.json()
    }
  }    
  return {updateThoughtRecord, thoughtRecord}
}



