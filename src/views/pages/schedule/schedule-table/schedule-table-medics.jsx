import arrowdown from '@assets/icons/arrow-down.svg'
import TableTdMenu from '@core/components/table-td-menu'
import React, { useState } from 'react';

const ScheduleTableMedics = ({ onSend }) => {
  const brigades = [
    {
      id: 1,
      checked: false,
      brigadeName: "Бригада 301",
      brigadeList: [
        {
          _id: 1,
          checked: false,
          name: "Петров П.П.",
          position: "Врач",
          listDays: [
            { id: 1, day: '7/7' },
            { id: 2, day: '' }, { id: 3, day: '' },
            { id: 4, day: '7/7' }, { id: 5, day: '' },
            { id: 6, day: '' },
            { id: 7, day: '7/7' },
            { id: 8, day: '' },
            { id: 9, day: '' },
            { id: 10, error: true, day: '7/7' },
            { id: 11, error: true, day: '' },
            { id: 12, day: '' },
            { id: 13, day: '7/7' },
            { id: 14, day: '' },
            { id: 15, day: '' },
            { id: 16, day: '7/7' },
            { id: 17, day: '' },
            { id: 18, day: '' },
            { id: 19, day: '7/7' },
            { id: 20, day: '' },
            { id: 21, day: '' },
            { id: 22, day: '0', active: true, first: true, },
            { id: 23, day: '0', active: true },
            { id: 24, day: '0', active: true },
            { id: 25, day: '0', active: true },
            { id: 26, error: true, day: '0', active: true },
            { id: 27, error: true, day: '0', active: true },
            { id: 28, day: '0', active: true },
            { id: 29, day: '0', active: true },
            { id: 30, day: '0', active: true },
            { id: 31, day: '0', active: true, last: true, },
          ],
          norm: 155,
          plan: 180,
          fact: 180,
          deviation: 0,
        },
        {
          _id: 2,
          checked: false,
          name: "Иванов И.И.",
          position: "Фельдшер",
          listDays: [{ id: 1, day: '7/7' },
          { id: 2, day: '' },
          { id: 3, day: '' },
          { id: 4, day: '7/7' },
          { id: 5, day: '' },
          { id: 6, day: '' },
          { id: 7, day: '7/7' },
          { id: 8, day: '' },
          { id: 9, day: '' },
          { id: 10, error: true, day: '7/7' },
          { id: 11, error: true, day: '' },
          { id: 12, day: '' },
          { id: 13, day: '7/7' },
          { id: 14, day: '' },
          { id: 15, day: '' },
          { id: 16, day: '7/7' },
          { id: 17, day: '' },
          { id: 18, day: '' },
          { id: 19, day: '7/7' },
          { id: 20, day: '' },
          { id: 21, day: '' },
          { id: 22, day: '7/7', },
          { id: 23, day: '' },
          { id: 24, day: '' },
          { id: 25, day: '7/7' },
          { id: 26, error: true, day: '' },
          { id: 27, error: true, day: '' },
          { id: 28, day: '7/7' },
          { id: 29, day: '' },
          { id: 30, day: '' },
          { id: 31, day: '7/7', },
          ],
          norm: 155,
          plan: 200,
          fact: 170,
          deviation: 0,
        },
        {
          _id: 3,
          checked: false,
          name: "Николаев Н.Н.",
          position: "Врач",
          listDays: [{ id: 1, day: '' },
          { id: 2, day: '7/7' },
          { id: 3, day: '' },
          { id: 4, day: '' },
          { id: 5, day: '7/7' },
          { id: 6, day: '' },
          { id: 7, day: '' },
          { id: 8, day: '7/7' },
          { id: 9, day: '' },
          { id: 10, error: true, day: '' },
          { id: 11, error: true, day: '7/7' },
          { id: 12, day: '' },
          { id: 13, day: '' },
          { id: 14, day: '7/7' },
          { id: 15, day: '' },
          { id: 16, day: '' },
          { id: 17, day: '7/7' },
          { id: 18, day: '' },
          { id: 19, day: '' },
          { id: 20, day: '7/7' },
          { id: 21, day: '' },
          { id: 22, day: '' },
          { id: 23, day: '7/7', },
          { id: 24, day: '' },
          { id: 25, day: '' },
          { id: 26, error: true, day: '7/7' },
          { id: 27, error: true, day: '' },
          { id: 28, day: '' },
          { id: 29, day: '7/7' },
          { id: 30, day: '' },
          { id: 31, day: '' },
          ],
          norm: 140,
          plan: 200,
          fact: 180,
          deviation: 0,
        }
      ]
    },
    {
      id: 2,
      checked: false,
      brigadeName: "Бригада 302",
      brigadeList: [
        {
          _id: 1,
          checked: false,
          name: "Петров П.П.",
          position: "Врач",
          listDays: [
            { id: 1, day: '7/7' },
            { id: 2, day: '' }, { id: 3, day: '' },
            { id: 4, day: '7/7' }, { id: 5, day: '' },
            { id: 6, day: '' },
            { id: 7, day: '7/7' },
            { id: 8, day: '' },
            { id: 9, day: '' },
            { id: 10, error: true, day: '7/7' },
            { id: 11, error: true, day: '' },
            { id: 12, day: '' },
            { id: 13, day: '7/7' },
            { id: 14, day: '' },
            { id: 15, day: '' },
            { id: 16, day: '7/7' },
            { id: 17, day: '' },
            { id: 18, day: '' },
            { id: 19, day: '7/7' },
            { id: 20, day: '' },
            { id: 21, day: '' },
            { id: 22, day: '0', active: true, first: true, },
            { id: 23, day: '0', active: true },
            { id: 24, day: '0', active: true },
            { id: 25, day: '0', active: true },
            { id: 26, error: true, day: '0', active: true },
            { id: 27, error: true, day: '0', active: true },
            { id: 28, day: '0', active: true },
            { id: 29, day: '0', active: true },
            { id: 30, day: '0', active: true },
            { id: 31, day: '0', active: true, last: true, },
          ],
          norm: 155,
          plan: 180,
          fact: 180,
          deviation: 0,
        },
        {
          _id: 2,
          checked: false,
          name: "Иванов И.И.",
          position: "Фельдшер",
          listDays: [{ id: 1, day: '7/7' },
          { id: 2, day: '' },
          { id: 3, day: '' },
          { id: 4, day: '7/7' },
          { id: 5, day: '' },
          { id: 6, day: '' },
          { id: 7, day: '7/7' },
          { id: 8, day: '' },
          { id: 9, day: '' },
          { id: 10, error: true, day: '7/7' },
          { id: 11, error: true, day: '' },
          { id: 12, day: '' },
          { id: 13, day: '7/7' },
          { id: 14, day: '' },
          { id: 15, day: '' },
          { id: 16, day: '7/7' },
          { id: 17, day: '' },
          { id: 18, day: '' },
          { id: 19, day: '7/7' },
          { id: 20, day: '' },
          { id: 21, day: '' },
          { id: 22, day: '7/7', },
          { id: 23, day: '' },
          { id: 24, day: '' },
          { id: 25, day: '7/7' },
          { id: 26, error: true, day: '' },
          { id: 27, error: true, day: '' },
          { id: 28, day: '7/7' },
          { id: 29, day: '' },
          { id: 30, day: '' },
          { id: 31, day: '7/7', },
          ],
          norm: 155,
          plan: 180,
          fact: 180,
          deviation: 0,
        },
        {
          _id: 3,
          checked: false,
          name: "Николаев Н.Н.",
          position: "Врач",
          listDays: [{ id: 1, day: '' },
          { id: 2, day: '7/7' },
          { id: 3, day: '' },
          { id: 4, day: '' },
          { id: 5, day: '7/7' },
          { id: 6, day: '' },
          { id: 7, day: '' },
          { id: 8, day: '7/7' },
          { id: 9, day: '' },
          { id: 10, error: true, day: '' },
          { id: 11, error: true, day: '7/7' },
          { id: 12, day: '' },
          { id: 13, day: '' },
          { id: 14, day: '7/7' },
          { id: 15, day: '' },
          { id: 16, day: '' },
          { id: 17, day: '7/7' },
          { id: 18, day: '' },
          { id: 19, day: '' },
          { id: 20, day: '7/7' },
          { id: 21, day: '' },
          { id: 22, day: '' },
          { id: 23, day: '7/7', },
          { id: 24, day: '' },
          { id: 25, day: '' },
          { id: 26, error: true, day: '7/7' },
          { id: 27, error: true, day: '' },
          { id: 28, day: '' },
          { id: 29, day: '7/7' },
          { id: 30, day: '' },
          { id: 31, day: '' },
          ],
          norm: 155,
          plan: 180,
          fact: 180,
          deviation: 0,
        }
      ]
    },
    {
      id: 3,
      checked: false,
      brigadeName: "Без Бригада",
      brigadeList: [
        {
          _id: 1,
          checked: false,
          name: "Петров П.П.",
          position: "Врач",
          listDays: [
            { id: 1, day: '7/7' },
            { id: 2, day: '' }, { id: 3, day: '' },
            { id: 4, day: '7/7' }, { id: 5, day: '' },
            { id: 6, day: '' },
            { id: 7, day: '7/7' },
            { id: 8, day: '' },
            { id: 9, day: '' },
            { id: 10, error: true, day: '7/7' },
            { id: 11, error: true, day: '' },
            { id: 12, day: '' },
            { id: 13, day: '7/7' },
            { id: 14, day: '' },
            { id: 15, day: '' },
            { id: 16, day: '7/7' },
            { id: 17, day: '' },
            { id: 18, day: '' },
            { id: 19, day: '7/7' },
            { id: 20, day: '' },
            { id: 21, day: '' },
            { id: 22, day: '0', active: true, first: true, },
            { id: 23, day: '0', active: true },
            { id: 24, day: '0', active: true },
            { id: 25, day: '0', active: true },
            { id: 26, error: true, day: '0', active: true },
            { id: 27, error: true, day: '0', active: true },
            { id: 28, day: '0', active: true },
            { id: 29, day: '0', active: true },
            { id: 30, day: '0', active: true },
            { id: 31, day: '0', active: true, last: true, },
          ],
          norm: 155,
          plan: 180,
          fact: 180,
          deviation: 0,
        },
        {
          _id: 2,
          checked: false,
          name: "Иванов И.И.",
          position: "Фельдшер",
          listDays: [{ id: 1, day: '7/7' },
          { id: 2, day: '' },
          { id: 3, day: '' },
          { id: 4, day: '7/7' },
          { id: 5, day: '' },
          { id: 6, day: '' },
          { id: 7, day: '7/7' },
          { id: 8, day: '' },
          { id: 9, day: '' },
          { id: 10, error: true, day: '7/7' },
          { id: 11, error: true, day: '' },
          { id: 12, day: '' },
          { id: 13, day: '7/7' },
          { id: 14, day: '' },
          { id: 15, day: '' },
          { id: 16, day: '7/7' },
          { id: 17, day: '' },
          { id: 18, day: '' },
          { id: 19, day: '7/7' },
          { id: 20, day: '' },
          { id: 21, day: '' },
          { id: 22, day: '7/7', },
          { id: 23, day: '' },
          { id: 24, day: '' },
          { id: 25, day: '7/7' },
          { id: 26, error: true, day: '' },
          { id: 27, error: true, day: '' },
          { id: 28, day: '7/7' },
          { id: 29, day: '' },
          { id: 30, day: '' },
          { id: 31, day: '7/7', },
          ],
          norm: 155,
          plan: 180,
          fact: 180,
          deviation: 0,
        },
        {
          _id: 3,
          checked: false,
          name: "Николаев Н.Н.",
          position: "Врач",
          listDays: [{ id: 1, day: '' },
          { id: 2, day: '7/7' },
          { id: 3, day: '' },
          { id: 4, day: '' },
          { id: 5, day: '7/7' },
          { id: 6, day: '' },
          { id: 7, day: '' },
          { id: 8, day: '7/7' },
          { id: 9, day: '' },
          { id: 10, error: true, day: '' },
          { id: 11, error: true, day: '7/7' },
          { id: 12, day: '' },
          { id: 13, day: '' },
          { id: 14, day: '7/7' },
          { id: 15, day: '' },
          { id: 16, day: '' },
          { id: 17, day: '7/7' },
          { id: 18, day: '' },
          { id: 19, day: '' },
          { id: 20, day: '7/7' },
          { id: 21, day: '' },
          { id: 22, day: '' },
          { id: 23, day: '7/7', },
          { id: 24, day: '' },
          { id: 25, day: '' },
          { id: 26, error: true, day: '7/7' },
          { id: 27, error: true, day: '' },
          { id: 28, day: '' },
          { id: 29, day: '7/7' },
          { id: 30, day: '' },
          { id: 31, day: '' },
          ],
          norm: 155,
          plan: 180,
          fact: 180,
          deviation: 0,
        }
      ]
    },
  ]
  const [brigadesState, setBrigadesState] = useState(brigades);
  const handleInputChange = (outerId, innerId, field, e) => {
    const newBrigadesState = brigadesState.map(outer => {
      if (outer.id === outerId) {
        const updatedFields = outer.brigadeList.map(inner => {
          if (inner._id === innerId) {
            return { ...inner, [field]: e.target.value };
          }
          return inner;
        });
        return { ...outer, brigadeList: updatedFields };
      }
      return outer;
    });
    setBrigadesState(newBrigadesState);
  };
  const handleCheckedChange = (brigadeId, brigadeMemberId) => {
    const updatedBrigades = brigadesState.map((brigade) => {
      if (brigade.id === brigadeId) {
        const updatedBrigadeList = brigade.brigadeList.map((member) => {
          if (member._id === brigadeMemberId) {
            return {
              ...member,
              checked: !member.checked,
            };
          }
          return member;
        });
        const allChecked = updatedBrigadeList.every((member) => member.checked === true);

        return {
          ...brigade,
          checked: allChecked,
          brigadeList: updatedBrigadeList,
        };
      }
      return brigade;
    });

    setBrigadesState(updatedBrigades);

    updatedBrigades.find((outer) => {
      const brigade = outer.brigadeList.find(inner => inner.checked === true);
      if (brigade) {
        onSend(true)
      } else {
        onSend(false)
      }
      return outer
    })
  };

  const [openIndexes, setOpenIndexes] = useState([1, 2, 3, 4, 10]);
  const toggleAccordion = (index) => {
    if (Array.isArray(openIndexes) && openIndexes.includes(index)) {
      setOpenIndexes(openIndexes.filter((i) => i !== index));
    } else {
      setOpenIndexes([...openIndexes, index]);
    }
  };
  return (
    <div className="schedule__table-wrapper">
      <table className="schedule-table">
        <thead>
          <tr>
            <th colSpan="2" className="schedule-table__checkbox m-left-border"></th>
            <th colSpan="2" className="schedule-table__brigade">ФИО <img className='arrow-down__img' src={arrowdown} alt="" /></th>
            <th colSpan="2" className="schedule-table__profile m-right-border">Должность</th>
            <td className="m-center">1</td>
            <td className="m-left-border m-center">2</td>
            <td className="m-left-border m-center">3</td>
            <td className="m-left-border m-center">4</td>
            <td className="m-left-border m-center">5</td>
            <td className="m-left-border m-center m-selected">6</td>
            <td className="m-left-border m-center m-selected">7</td>
            <td className="m-left-border m-center">8</td>
            <td className="m-left-border m-center">9</td>
            <td className="m-left-border m-center red-error">10</td>
            <td className="m-left-border m-center red-error">11</td>
            <td className="m-left-border m-center">12</td>
            <td className="m-left-border m-center m-selected">13</td>
            <td className="m-left-border m-center m-selected">14</td>
            <td className="m-left-border m-center">15</td>
            <td className="m-left-border m-center">16</td>
            <td className="m-left-border m-center">17</td>
            <td className="m-left-border m-center">18</td>
            <td className="m-left-border m-center">19</td>
            <td className="m-left-border m-center m-selected">20</td>
            <td className="m-left-border m-center m-selected">21</td>
            <td className="m-left-border m-center">22</td>
            <td className="m-left-border m-center">23</td>
            <td className="m-left-border m-center">24</td>
            <td className="m-left-border m-center">25</td>
            <td className="m-left-border m-center red-error">26</td>
            <td className="m-left-border m-center red-error m-selected">27</td>
            <td className="m-left-border m-center m-selected">28</td>
            <td className="m-left-border m-center">29</td>
            <td className="m-left-border m-center">30</td>
            <td className="m-left-border m-center">31</td>
            <th className="m-left-border m-center">Норма</th>
            <th className="m-center">План</th>
            <th className="m-center">Факт</th>
            <th className="m-center">Отклонение <img src={arrowdown} alt="" /></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan={2} className='schedule-table__checkbox-cell m-left-border'></td>
            <td colSpan={2} className='schedule-table__brigade-cell schedule-table-accordion-btn' onClick={() => toggleAccordion(10)}>
              <span className='m-selected'>Индикаторы</span> <img src={arrowdown} alt="" />
            </td>
            <td colSpan={2}></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td className='m-deviations'><span className='m-deviations__in'>4 отклонения</span></td>
          </tr>
          {Array.isArray(openIndexes) && openIndexes.includes(10) && (
            <>
              <tr>
                <td colSpan={2} className='schedule-table__checkbox-cell'></td>
                <td colSpan={4} className='schedule-table__brigade-cell m-right-border'>
                  Количество сотрудников
                </td>
                <td className=" m-position-relative m-center">5</td>
                <td className="m-left-border m-position-relative m-center">5</td>
                <td className="m-left-border m-position-relative m-center">5</td>
                <td className="m-left-border m-position-relative m-center">5</td>
                <td className="m-left-border m-position-relative m-center">5</td>
                <td className="m-left-border m-position-relative m-selected m-center">5</td>
                <td className="m-left-border m-position-relative m-selected m-center">5</td>
                <td className="m-left-border m-position-relative m-center">5</td>
                <td className="m-left-border m-position-relative m-center">5</td>
                <td className="m-left-border red-error m-center">-4</td>
                <td className="m-left-border red-error m-center">-1</td>
                <td className="m-left-border m-position-relative m-center">5</td>
                <td className="m-left-border m-position-relative m-selected m-center">5</td>
                <td className="m-left-border m-position-relative m-selected m-center">5</td>
                <td className="m-left-border m-position-relative m-center">5</td>
                <td className="m-left-border m-position-relative m-center">5</td>
                <td className="m-left-border m-position-relative m-center">5</td>
                <td className="m-left-border m-position-relative m-center">5</td>
                <td className="m-left-border m-position-relative m-center">5</td>
                <td className="m-left-border m-position-relative m-selected m-center">5</td>
                <td className="m-left-border m-position-relative m-selected  m-center">5</td>
                <td className="m-left-border m-position-relative m-center">5</td>
                <td className="m-left-border m-position-relative m-center">5</td>
                <td className="m-left-border m-position-relative m-center">5</td>
                <td className="m-left-border m-position-relative m-center">5</td>
                <td className="m-left-border m-position-relative m-center">5</td>
                <td className="m-left-border m-position-relative m-selected m-center">5</td>
                <td className="m-left-border red-error m-center m-selected">-1</td>
                <td className="m-left-border red-error m-center">-2</td>
                <td className="m-left-border m-position-relative m-center">5</td>
                <td className="m-left-border m-position-relative m-center">5</td>
                <td className="m-left-border"></td>
                <td ></td>
                <td ></td>
                <td ></td>
              </tr>
              <tr>
                <td colSpan={2} className='schedule-table__checkbox-cell'></td>
                <td colSpan={4} className='schedule-table__brigade-cell m-right-border'>
                  Количество бригад
                </td>
                <td className=" m-position-relative m-center">5</td>
                <td className="m-left-border m-position-relative m-center">5</td>
                <td className="m-left-border m-position-relative m-center">5</td>
                <td className="m-left-border m-position-relative m-center">5</td>
                <td className="m-left-border m-position-relative m-center">5</td>
                <td className="m-left-border m-position-relative m-selected m-center">5</td>
                <td className="m-left-border m-position-relative m-selected m-center">5</td>
                <td className="m-left-border m-position-relative m-center">5</td>
                <td className="m-left-border m-position-relative m-center">5</td>
                <td className="m-left-border red-error m-center">-2</td>
                <td className="m-left-border m-position-relative m-center">5</td>
                <td className="m-left-border m-position-relative m-center">5</td>
                <td className="m-left-border m-position-relative m-selected m-center">5</td>
                <td className="m-left-border m-position-relative m-selected m-center">5</td>
                <td className="m-left-border m-position-relative m-center">5</td>
                <td className="m-left-border m-position-relative m-center">5</td>
                <td className="m-left-border m-position-relative m-center">5</td>
                <td className="m-left-border m-position-relative m-center">5</td>
                <td className="m-left-border m-position-relative m-center">5</td>
                <td className="m-left-border m-position-relative m-selected m-center">5</td>
                <td className="m-left-border m-position-relative m-selected m-center">5</td>
                <td className="m-left-border m-position-relative m-center">5</td>
                <td className="m-left-border m-position-relative m-center">5</td>
                <td className="m-left-border m-position-relative m-center">5</td>
                <td className="m-left-border m-position-relative m-center">5</td>
                <td className="m-left-border m-position-relative m-center">5</td>
                <td className="m-left-border m-position-relative m-selected m-center">5</td>
                <td className="m-left-border m-position-relative m-selected m-center">5</td>
                <td className="m-left-border m-position-relative m-center">5</td>
                <td className="m-left-border m-position-relative m-center">5</td>
                <td className="m-left-border m-position-relative m-center">5</td>
                <td className="m-left-border"></td>
                <td ></td>
                <td ></td>
                <td ></td>
              </tr>
              <tr>
                <td colSpan={2} className='schedule-table__checkbox-cell'></td>
                <td colSpan={4} className='schedule-table__brigade-cell m-right-border'>
                  Количество врачебных бригад
                </td>
                <td className=" m-position-relative m-center">5</td>
                <td className="m-left-border m-position-relative m-center">5</td>
                <td className="m-left-border m-position-relative m-center">5</td>
                <td className="m-left-border m-position-relative m-center">5</td>
                <td className="m-left-border m-position-relative m-center">5</td>
                <td className="m-left-border m-position-relative m-selected m-center">5</td>
                <td className="m-left-border m-position-relative m-selected m-center">5</td>
                <td className="m-left-border m-position-relative m-center">5</td>
                <td className="m-left-border m-position-relative m-center">5</td>
                <td className="m-left-border m-position-relative m-center">5</td>
                <td className="m-left-border m-position-relative m-center">5</td>
                <td className="m-left-border m-position-relative m-center">5</td>
                <td className="m-left-border m-position-relative m-selected m-center">5</td>
                <td className="m-left-border m-position-relative m-selected m-center">5</td>
                <td className="m-left-border m-position-relative m-center">5</td>
                <td className="m-left-border m-position-relative m-center">5</td>
                <td className="m-left-border m-position-relative m-center">5</td>
                <td className="m-left-border m-position-relative m-center">5</td>
                <td className="m-left-border m-position-relative m-center">5</td>
                <td className="m-left-border m-position-relative m-selected m-center">5</td>
                <td className="m-left-border m-position-relative m-selected m-center">5</td>
                <td className="m-left-border m-position-relative m-center">5</td>
                <td className="m-left-border m-position-relative m-center">5</td>
                <td className="m-left-border m-position-relative m-center">5</td>
                <td className="m-left-border m-position-relative m-center">5</td>
                <td className="m-left-border red-error m-center">-1</td>
                <td className="m-left-border m-position-relative m-selected m-center">5</td>
                <td className="m-left-border m-position-relative m-selected m-center">5</td>
                <td className="m-left-border m-position-relative m-center">5</td>
                <td className="m-left-border m-position-relative m-center">5</td>
                <td className="m-left-border m-position-relative m-center">5</td>
                <td className="m-left-border"></td>
                <td ></td>
                <td ></td>
                <td ></td>
              </tr>
              <tr>
                <td colSpan={2} className='schedule-table__checkbox-cell'></td>
                <td colSpan={4} className='schedule-table__brigade-cell m-right-border'>
                  Количество реанимационных бригад
                </td>
                <td className=" m-position-relative m-center">5</td>
                <td className="m-left-border m-position-relative m-center">5</td>
                <td className="m-left-border m-position-relative m-center">5</td>
                <td className="m-left-border m-position-relative m-center">5</td>
                <td className="m-left-border m-position-relative m-center">5</td>
                <td className="m-left-border m-position-relative m-selected m-center">5</td>
                <td className="m-left-border m-position-relative m-selected m-center">5</td>
                <td className="m-left-border m-position-relative m-center">5</td>
                <td className="m-left-border m-position-relative m-center">5</td>
                <td className="m-left-border m-position-relative m-center">5</td>
                <td className="m-left-border red-error m-center">-1</td>
                <td className="m-left-border m-position-relative m-center">5</td>
                <td className="m-left-border m-position-relative m-selected m-center">5</td>
                <td className="m-left-border m-position-relative m-selected m-center">5</td>
                <td className="m-left-border m-position-relative m-center">5</td>
                <td className="m-left-border m-position-relative m-center">5</td>
                <td className="m-left-border m-position-relative m-center">5</td>
                <td className="m-left-border m-position-relative m-center">5</td>
                <td className="m-left-border m-position-relative m-center">5</td>
                <td className="m-left-border m-position-relative m-selected m-center">5</td>
                <td className="m-left-border m-position-relative m-selected m-center">5</td>
                <td className="m-left-border m-position-relative m-center">5</td>
                <td className="m-left-border m-position-relative m-center">5</td>
                <td className="m-left-border m-position-relative m-center">5</td>
                <td className="m-left-border m-position-relative m-center">5</td>
                <td className="m-left-border m-position-relative m-center">5</td>
                <td className="m-left-border m-position-relative m-selected m-center">5</td>
                <td className="m-left-border m-position-relative m-selected m-center">5</td>
                <td className="m-left-border m-position-relative m-center">5</td>
                <td className="m-left-border m-position-relative m-center">5</td>
                <td className="m-left-border m-position-relative m-center">5</td>
                <td className="m-left-border"></td>
                <td ></td>
                <td ></td>
                <td ></td>
              </tr>
              <tr>
                <td colSpan={2} className='schedule-table__checkbox-cell'></td>
                <td colSpan={4} className='schedule-table__brigade-cell m-right-border'>
                  Количество педиатрических бригад
                </td>
                <td className=" m-position-relative m-center">5</td>
                <td className="m-left-border m-position-relative m-center">5</td>
                <td className="m-left-border m-position-relative m-center">5</td>
                <td className="m-left-border m-position-relative m-center">5</td>
                <td className="m-left-border m-position-relative m-center">5</td>
                <td className="m-left-border m-position-relative m-selected m-center">5</td>
                <td className="m-left-border m-position-relative m-selected m-center">5</td>
                <td className="m-left-border m-position-relative m-center">5</td>
                <td className="m-left-border m-position-relative m-center">5</td>
                <td className="m-left-border red-error m-center">-2</td>
                <td className="m-left-border m-position-relative m-center">5</td>
                <td className="m-left-border m-position-relative m-center">5</td>
                <td className="m-left-border m-position-relative m-selected m-center">5</td>
                <td className="m-left-border m-position-relative m-selected m-center">5</td>
                <td className="m-left-border m-position-relative m-center">5</td>
                <td className="m-left-border m-position-relative m-center">5</td>
                <td className="m-left-border m-position-relative m-center">5</td>
                <td className="m-left-border m-position-relative m-center">5</td>
                <td className="m-left-border m-position-relative m-center">5</td>
                <td className="m-left-border m-position-relative m-selected m-center">5</td>
                <td className="m-left-border m-position-relative m-selected m-center">5</td>
                <td className="m-left-border m-position-relative m-center">5</td>
                <td className="m-left-border m-position-relative m-center">5</td>
                <td className="m-left-border m-position-relative m-center">5</td>
                <td className="m-left-border m-position-relative m-center">5</td>
                <td className="m-left-border m-position-relative m-center">5</td>
                <td className="m-left-border m-position-relative m-selected m-center">5</td>
                <td className="m-left-border m-position-relative m-selected m-center">5</td>
                <td className="m-left-border m-position-relative m-center">5</td>
                <td className="m-left-border m-position-relative m-center">5</td>
                <td className="m-left-border m-position-relative m-center">5</td>
                <td className="m-left-border"></td>
                <td ></td>
                <td ></td>
                <td ></td>
              </tr>
            </>
          )}

          {brigadesState.map(brigade => {
            return (
              <React.Fragment key={brigade.id}>
                <tr>
                  <td colSpan="2" className="schedule-table__checkbox-cell m-left-border">
                    <input type="checkbox" checked={brigade.checked}
                      onChange={() => {
                        const allChecked = brigade.brigadeList.every((member) => member.checked === true);
                        onSend(!allChecked)
                        setBrigadesState((prevState) =>
                          prevState.map((b) =>
                            b.id === brigade.id
                              ? {

                                ...b,
                                checked: !allChecked,
                                brigadeList: b.brigadeList.map((member) => ({
                                  ...member,
                                  checked: !allChecked,
                                })),
                              }
                              : b
                          )
                        );
                      }}
                    />
                  </td>
                  <td colSpan="10" className='schedule-table__brigade-cell schedule-table-accordion-btn' onClick={() => toggleAccordion(brigade.id)}>
                    <span>{brigade.brigadeName}</span> <img src={arrowdown} alt="" />
                  </td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>

                {
                  Array.isArray(openIndexes) && openIndexes.includes(brigade.id) && (
                    brigade.brigadeList.map((member) => {
                      return (
                        <tr key={member._id} className={(member.checked ? 'm-active ' : ' ') + (((Number(member.fact) > Number(member.plan)) || (Number(member.fact) < Number(member.norm))) ? 'm-error' : '')}>
                          <td colSpan="2" className="schedule-table__checkbox-cell m-left-border">
                            <input type="checkbox" checked={brigade.checked ? member.checked === true : member.checked} onChange={() => handleCheckedChange(brigade.id, member._id)} />
                          </td>
                          <td colSpan="2" className="schedule-table__brigade-cell">
                            <input type="text" value={member.name} onChange={(e) => handleInputChange(brigade.id, member._id, 'name', e)} disabled={!member.checked} />
                            <span className="focus-after"></span>
                          </td>
                          <td colSpan="2" className="schedule-table__profile-cell m-right-border">
                            <input type="text" value={member.position} onChange={(e) => handleInputChange(brigade.id, member._id, 'position', e)} disabled={!member.checked} />
                            <span className="focus-after"></span>
                          </td>
                          {member.listDays.map(day => {
                            return (
                              <React.Fragment key={day.id}>
                                <td key={day.id} className={"m-center " + (member.checked && !day.active ? ' m-td-active' : '') + (day.id !== 1 ? ' m-left-border' : '') + (day.error ? ' red-error' : '') + (day.active ? ' m-active' : '') + (day.first ? ' m-first-active' : '') + (day.last ? ' m-last-active' : '')
                                }>
                                  {
                                    !day.active && day.day !== '' ? <TableTdMenu btnval={day.day} checked={member.checked} /> : ''
                                  }
                                  {day.active ? day.day : ''}
                                </td >
                              </React.Fragment>
                            )
                          })}
                          <td className='m-left-border m-center'>
                            <input type="number" value={member.norm} onChange={(e) => handleInputChange(brigade.id, member._id, 'norm', e)} disabled={!member.checked} />
                          </td>
                          <td className='m-center'><input type="number" value={member.plan} onChange={(e) => handleInputChange(brigade.id, member._id, 'plan', e)} disabled={!member.checked} /></td>
                          <td className='m-center'>{member.fact}</td>
                          <td className='m-center'>{Number(member.plan) - Number(member.fact)}</td>
                        </tr >
                      )
                    })
                  )
                }
              </React.Fragment>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default ScheduleTableMedics;