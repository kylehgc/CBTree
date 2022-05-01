import { IconButton, useColorModeValue } from "@chakra-ui/react"
import { Dispatch, SetStateAction } from "react"
import { IconType } from "react-icons"
import UseThemeColors from "../Hooks/useThemeColors"

export interface Emotion {
  icon: IconType,
  emotionColor: string,
  emotionName: string

}

interface EmotionButtonProps {
  emotion: Emotion
  setSelected: Dispatch<SetStateAction<string>>,
  selected: string}

const EmotionButton: React.FC<EmotionButtonProps> = ({emotion, setSelected, selected}) => {
  const {backgroundColor} = UseThemeColors()
  const {emotionName, emotionColor, icon} = emotion
  const iconColor = useColorModeValue("black","white")
  const getIconColor = (emotionName: string) => {
    if(selected && emotionName !== selected) {
      return iconColor
    } else {
      return emotionColor
    }
  }
  const handleOnClick = (emotionName: string) => {
    if(emotionName === selected) {
      setSelected("")
    } else {
      setSelected(emotionName)
    }
  }
  return (
    <>
      <IconButton 
        size={"lg"}
        _hover={{background:backgroundColor}}
        _active={{background:backgroundColor}}
        onClick={() => handleOnClick(emotionName)}
        aria-label={`${emotionName} button`}  
        as={icon} 
        bg={backgroundColor}
        color={getIconColor(emotionName)}
        
      />
    </>
  )
}

export default EmotionButton