import { useState } from 'react'


const DocumentViewConfirmation = () => {
  const [confirm, setConfirm] = useState(false)

  const handleChange = () => {
    setConfirm(!confirm)
  }

  return (
    <div className="document-view__confirmation">
      <p className="document-view__confirmation-text">Подтвердите ознакомление с документом</p>
      <label className="g-checkbox">
        <input type="checkbox" defaultChecked={confirm} onChange={handleChange} />
        Я ознакомился с документом
      </label>
      <div className="document-view__confirmation-button">
        <button className="g-button m-blue" disabled={!confirm} type="button" name="button">Подтвердить</button>
      </div>
    </div>
  )
}

export default DocumentViewConfirmation