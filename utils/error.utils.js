 import { toTitleCase } from "./string.util"
 export const handleErrorToasts = (error,toast) => {

    if(Array.isArray(error)){
    error.forEach((err) => {
      toast({
        title: toTitleCase(err.msg),
        position: 'bottom-right',
        status: 'error',
        duration: 2000,
        isClosable: true,
      })
      console.log(err.msg)
    })
    }
    else{
        error.msg &&
        toast({
            title: toTitleCase(error.msg),
            position: 'bottom-right',
            status: 'error',
            duration: 2000,
            isClosable: true,
          })
          console.log('error',error)
    }
      }