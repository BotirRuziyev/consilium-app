// ** React Imports
import { useEffect, useMemo } from 'react'

// ** Config
import authConfig from 'src/configs/auth'
import uploaderConfig from 'src/configs/uploader'

// ** Modules Imports
import Cookies from 'js-cookie'
import Uppy from '@uppy/core'
import GoldenRetriever from '@uppy/golden-retriever'
import Tus from '@uppy/tus'

const useUppy = ({
  id = 'UppyUploader',
  accept = { '*': [] },
  options,
  onFilesAdd = () => {
    /* Empty */
  },
  onProgress = () => {
    /* Empty */
  },
  onUploading = () => {
    /* Empty */
  },
  onFailed = () => {
    /* Empty */
  },
  onComplete = () => {
    /* Empty */
  },
  onCancelAll = () => {
    /* Empty */
  }
}) => {
  const uppy = useMemo(() => {
    const allowedFileTypes = Object.entries(accept).reduce(
      (a, [mimeType, ext]) => [...a, mimeType, ...ext],
      []
    )

    const core = new Uppy({
      id,
      restrictions: { allowedFileTypes },
      onBeforeFileAdded: currentFile => {
        const modifiedFile = {
          ...currentFile,
          meta: {
            ...currentFile.meta,
            name: encodeURIComponent(currentFile.meta.name)
          }
        }

        return modifiedFile
      }
    })

    const storedToken = Cookies.get(authConfig.storageTokenKeyName)

    core.use(Tus, {
      id: `${id}_Tus`,
      removeFingerprintOnSuccess: true,
      limit: 10,
      endpoint: uploaderConfig.tus.endpoint(),
      chunkSize: uploaderConfig.tus.chunkSize,
      headers: {
        Authorization: `${authConfig.headerTokenKeyName} ${storedToken}`
      }
    })

    if (uploaderConfig.goldenRetreaver.enabled) {
      core.use(GoldenRetriever, {
        id: `${id}_GoldenRetriever`,
        serviceWorker: uploaderConfig.goldenRetreaver.serviceWorker
      })

      Object.keys(core.getState().currentUploads).forEach(uploadId => {
        core.restore(uploadId)
      })
    }

    return core
  }, [])

  useEffect(() => {
    if ('serviceWorker' in navigator && uploaderConfig.goldenRetreaver.serviceWorker) {
      navigator.serviceWorker
        .register('/js/sw.js')
        .then(registration => {
          console.log('ServiceWorker registration successful with scope: ', registration.scope)
        })
        .catch(error => {
          console.log(`Registration failed with ${error}`)
        })
    }
  }, [])

  useEffect(() => {
    uppy.on('files-added', onFilesAdd)
    uppy.on('progress', onProgress)
    uppy.on('upload', onUploading)
    uppy.on('error', onFailed)
    uppy.on('complete', onComplete)
    uppy.on('cancel-all', onCancelAll)

    return () => {
      uppy.off('files-added', onFilesAdd)
      uppy.off('progress', onProgress)
      uppy.off('upload', onUploading)
      uppy.off('error', onFailed)
      uppy.off('complete', onComplete)
      uppy.off('cancel-all', onCancelAll)
    }
  }, [uppy, onFilesAdd, onProgress, onUploading, onFailed, onComplete, onCancelAll])

  return uppy
}

export default useUppy
