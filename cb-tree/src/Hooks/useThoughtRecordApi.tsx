import { useEffect, useState } from "react"
import {QuestionType, FormValues} from "./UseThoughtRecord"
import {thoughtRecordEndPoint, getAuthHeader, getUserEndPoint, getToken} from "../utils/api"
import useAuth, { Token, User } from "./useAuth"
import {ThoughtRecord, isThoughtRecord} from '../Components/types'
import { useToast } from "@chakra-ui/react"
/* returns a function that takes in the current path and active thought record 
to update and a piece of state that shows if the data is currently being fetched */



export const useThoughtRecordApi = () => {
  const {logout} = useAuth() 
  const toast = useToast()
  const authHeader = getAuthHeader()  
  const handleFetch = async (endPoint: string, fetchOptions: RequestInit) => {
    const response = await fetch(endPoint, fetchOptions)
    if(response.ok) {
      const data = await response.json()
      return data
    }
    if(response.status === 401 || 403) {
      logout()
    } else throw Error(response.statusText)
  }

  const getActiveThoughtRecord = async(token:Token): Promise<ThoughtRecord> => {
    
    const data = await handleFetch(thoughtRecordEndPoint,authHeader)
    if(isThoughtRecord(data)) {
      return data
    }
    throw Error("not a thought record") 
  }
  const getNewThoughtRecord = async (token:Token) => {
    const options = {method: "POST", ...authHeader}
    const thoughtRecord = await handleFetch(thoughtRecordEndPoint, options)
   
    if(isThoughtRecord(thoughtRecord)) {
      return thoughtRecord
    } else {
      throw Error('response isnt valid')
    }   
  }
  const updateThoughtRecord = async (
    data: FormValues
    , activeThoughtRecord: string, token: Token, updateKey: string) => {
    const updateOptions: RequestInit = {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        ...authHeader.headers
      },
      method: "PATCH"
    }
    updateOptions.body = JSON.stringify({[updateKey]: data})
    const response = await fetch(`${thoughtRecordEndPoint}/${activeThoughtRecord}`, updateOptions)
    if(response.ok) {
      toast({
        status: "success",
        description: "Question Submitted",
        duration: 2000
      })
      return await response.json()
    }
  }    
  return {updateThoughtRecord, getActiveThoughtRecord, getNewThoughtRecord}
}



