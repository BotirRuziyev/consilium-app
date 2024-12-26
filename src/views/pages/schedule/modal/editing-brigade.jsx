import React from 'react'
import './editing-brigade.scss'
import Datepicker from '../../../../@core/components/datepicker'
import { useState } from 'react'
import FromSelect from '../../../../@core/components/form-select'

const EditingBrigade = () => {
    const [isTab, setIsTab] = useState(1)
    const tabPanel = (panel) => {
        setIsTab(panel)
    }
    return (
        <div>
            <div className="title">Редактирование бригады</div>
            <div className="modal-content">
                <div className="date">
                    <div className="label">Дата</div>
                    <Datepicker />
                </div>
                <div className="madal-tab">
                    <div className="tab-head">
                        <button className={'tab-btn ' + (isTab === 1 ? 'active' : '')} onClick={() => tabPanel(1)}>Состав бригады</button>
                        <button className={'tab-btn ' + (isTab === 2 ? 'active' : '')} onClick={() => tabPanel(2)}>Комментарии</button>
                        <button className={'tab-btn ' + (isTab === 3 ? 'active' : '')} onClick={() => tabPanel(3)}>Замечания</button>
                    </div>
                    {
                        isTab === 1 ?
                            <div className="tab-content">
                                <div className="tab-content__head">
                                    <div className="form-control">
                                        <div className="label">
                                            Номер бригады <span className='required'>*</span>
                                        </div>
                                        <FromSelect />
                                    </div>
                                    <div className="form-control">
                                        <div className="label">
                                            Профиль бригады <span className='required'>*</span>
                                        </div>
                                        <FromSelect />
                                    </div>
                                    <div className="form-control">
                                        <div className="label">
                                            Номер машины <span className='required'>*</span>
                                        </div>
                                        <FromSelect />
                                    </div>
                                </div>
                            </div> : null
                    }

                </div>
            </div>
        </div>
    )
}

export default EditingBrigade