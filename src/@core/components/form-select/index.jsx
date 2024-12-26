import React, { useState } from 'react'
import arrow from '@assets/icons/arrow-down.svg'

const FromSelect = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleDropdown = ({ value }) => {
        setIsOpen(!isOpen);
    };

    const handleSelect = (option, index) => {
        setSelectedOption(option);
        setActiveIndex(index);
        setIsOpen(false);
    };
    return (
        <div className='form-select'>
            <button className={'select-btn ' + (activeIndex !== null ? '' : 'none')}>
                {selectedOption ? selectedOption : 'Выберите бригаду'}
                <button className="select-icon" onClick={toggleDropdown}>
                    <img src={arrow} alt="" />
                </button>
            </button>
            <div className={"select-menu " + (isOpen ? 'show' : '')}>
                <div className="select-menu__in">
                    <div className={"select-option " + (activeIndex === 1 ? 'selected' : '')} onClick={() => handleSelect('302', 1)} >
                        302
                    </div>
                    <div className={"select-option " + (activeIndex === 2 ? 'selected' : '')} onClick={() => handleSelect('303', 2)} >
                        303
                    </div>
                    <div className={"select-option " + (activeIndex === 3 ? 'selected' : '')} onClick={() => handleSelect('304', 3)} >
                        304
                    </div>
                    <div className={"select-option " + (activeIndex === 4 ? 'selected' : '')} onClick={() => handleSelect('305', 4)} >
                        305
                    </div>
                    <div className={"select-option " + (activeIndex === 5 ? 'selected' : '')} onClick={() => handleSelect('306', 5)} >
                        306
                    </div>
                    <div className={"select-option " + (activeIndex === 6 ? 'selected' : '')} onClick={() => handleSelect('307', 6)} >
                        307
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FromSelect