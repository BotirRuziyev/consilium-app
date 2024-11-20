// ** React Imports
import { useState, useEffect, useCallback }from 'react'

// ** Modules Imports
import * as tus from 'tus-js-client'
import Cookies from 'js-cookie'
import { v4 as uuidv4 } from 'uuid'

// ** Config
import authConfig from 'src/configs/auth'
import uploaderConfig from 'src/configs/uploader'

const useEMDUploader = ({
  onBeforeUpload = () => true,
  onUpdate
})  => {
  const [observedfiles, setObservedFiles] = useState([])

  useEffect(() => {
    onUpdate(observedfiles)
  }, [observedfiles])

  const uploadFiles = useCallback((files) => {
    const uploadFile = (file, fileId) => {
      const storedToken = Cookies.get(authConfig.storageTokenKeyName)

      const upload = new tus.Upload(file, {
        endpoint: uploaderConfig.tus.endpoint(),
        retryDelays: [0, 3000, 5000, 10000, 20000],
        headers: {
          Authorization: `${authConfig.headerTokenKeyName} ${storedToken}`
        },
        metadata: {
          filename: file.name,
          filetype: file.type,
        },
        onError: (error) => {
          setObservedFiles((state) => {
            return state.map((item) => {
              if (item.id === fileId) return {
                ...item,
                status: 'failed',
                error,
              }
  
              return item
            })
          })
        },
        onProgress: (bytesUploaded, bytesTotal) => {
          const progress= ((bytesUploaded / bytesTotal) * 100).toFixed(2)
          
          setObservedFiles((state) => {
            return state.map((item) => {
              if (item.id === fileId) return {
                ...item,
                status: 'progress',
                progress,
                bytesUploaded,
                bytesTotal
              }
  
              return item
            })
          })
        },
        onSuccess: () => {
          setObservedFiles((state) => {
            return state.map((item) => {
              if (item.id === fileId) {
                const fileUrl = `${uploaderConfig.fileUrl()}/${upload.url.split('/').pop()}`

                return {
                  ...item,
                  name: item.name,
                  status: 'success',
                  fileName: upload.file.name,
                  fileUrl
                }
              }
  
              return item
            })
          })
        },
      })
  
      return upload
    }

    const isContinue = onBeforeUpload(files)

    if (!isContinue) return

    setObservedFiles(
      files.map((file) => {
        const id = uuidv4()

        const upload = uploadFile(file, id)
        upload.start()

        const stop = () => {
          upload.abort()
          setObservedFiles((state) => {
            return state.filter((item) => item.id !== id)
          })
        }
  
        return {
          id,
          methods: { stop },
          fileName: file.name,
          status: 'started',
          progress: 0
        }
      })
    )
  }, [onBeforeUpload])

  return { uploadFiles }
}

export default useEMDUploader
