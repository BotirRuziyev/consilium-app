import arrowdown from '@assets/icons/arrow-down.svg'
const ScheduleTableMedics = () => {
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
              <td className="m-left-border m-center">6</td>
              <td className="m-left-border m-center">7</td>
              <td className="m-left-border m-center">8</td>
              <td className="m-left-border m-center">9</td>
              <td className="m-left-border m-center red-error">10</td>
              <td className="m-left-border m-center red-error">11</td>
              <td className="m-left-border m-center">12</td>
              <td className="m-left-border m-center">13</td>
              <td className="m-left-border m-center">14</td>
              <td className="m-left-border m-center">15</td>
              <td className="m-left-border m-center">16</td>
              <td className="m-left-border m-center">17</td>
              <td className="m-left-border m-center">18</td>
              <td className="m-left-border m-center">19</td>
              <td className="m-left-border m-center">20</td>
              <td className="m-left-border m-center">21</td>
              <td className="m-left-border m-center">22</td>
              <td className="m-left-border m-center">23</td>
              <td className="m-left-border m-center">24</td>
              <td className="m-left-border m-center">25</td>
              <td className="m-left-border m-center red-error">26</td>
              <td className="m-left-border m-center red-error">27</td>
              <td className="m-left-border m-center">28</td>
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
              <td colSpan={2} className='schedule-table__brigade-cell schedule-table-accordion-btn'>
              <span>Индикаторы</span> <img src={arrowdown} alt="" />
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
            <tr>
            <td colSpan={2} className='schedule-table__checkbox-cell'></td>
              <td colSpan={4} className='schedule-table__brigade-cell m-right-border'>
              Количество сотрудников
              </td>
              <td className=" m-position-relative"><span className='m-employees m-center'></span></td>
              <td className="m-left-border m-position-relative"><span className='m-employees m-center'></span></td>
              <td className="m-left-border m-position-relative"><span className='m-employees m-center'></span></td>
              <td className="m-left-border m-position-relative"><span className='m-employees m-center'></span></td>
              <td className="m-left-border m-position-relative"><span className='m-employees m-center'></span></td>
              <td className="m-left-border m-position-relative"><span className='m-employees m-center'></span></td>
              <td className="m-left-border m-position-relative"><span className='m-employees m-center'></span></td>
              <td className="m-left-border m-position-relative"><span className='m-employees m-center'></span></td>
              <td className="m-left-border m-position-relative"><span className='m-employees m-center'></span></td>
              <td className="m-left-border red-error">-4</td>
              <td className="m-left-border red-error">-1</td>
              <td className="m-left-border m-position-relative"><span className='m-employees m-center'></span></td>
              <td className="m-left-border m-position-relative"><span className='m-employees m-center'></span></td>
              <td className="m-left-border m-position-relative"><span className='m-employees m-center'></span></td>
              <td className="m-left-border m-position-relative"><span className='m-employees m-center'></span></td>
              <td className="m-left-border m-position-relative"><span className='m-employees m-center'></span></td>
              <td className="m-left-border m-position-relative"><span className='m-employees m-center'></span></td>
              <td className="m-left-border m-position-relative"><span className='m-employees m-center'></span></td>
              <td className="m-left-border m-position-relative"><span className='m-employees m-center'></span></td>
              <td className="m-left-border m-position-relative"><span className='m-employees m-center'></span></td>
              <td className="m-left-border m-position-relative"><span className='m-employees m-center'></span></td>
              <td className="m-left-border m-position-relative"><span className='m-employees m-center'></span></td>
              <td className="m-left-border m-position-relative"><span className='m-employees m-center'></span></td>
              <td className="m-left-border m-position-relative"><span className='m-employees m-center'></span></td>
              <td className="m-left-border m-position-relative"><span className='m-employees m-center'></span></td>
              <td className="m-left-border m-position-relative"><span className='m-employees m-center'></span></td>
              <td className="m-left-border m-position-relative"><span className='m-employees m-center'></span></td>
              <td className="m-left-border red-error">-1</td>
              <td className="m-left-border red-error">-2</td>
              <td className="m-left-border m-position-relative"><span className='m-employees m-center'></span></td>
              <td className="m-left-border m-position-relative"><span className='m-employees m-center'></span></td>
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
              <td className=" m-position-relative"><span className='m-employees m-center'></span></td>
              <td className="m-left-border m-position-relative"><span className='m-employees m-center'></span></td>
              <td className="m-left-border m-position-relative"><span className='m-employees m-center'></span></td>
              <td className="m-left-border m-position-relative"><span className='m-employees m-center'></span></td>
              <td className="m-left-border m-position-relative"><span className='m-employees m-center'></span></td>
              <td className="m-left-border m-position-relative"><span className='m-employees m-center'></span></td>
              <td className="m-left-border m-position-relative"><span className='m-employees m-center'></span></td>
              <td className="m-left-border m-position-relative"><span className='m-employees m-center'></span></td>
              <td className="m-left-border m-position-relative"><span className='m-employees m-center'></span></td>
              <td className="m-left-border red-error">-2</td>
              <td className="m-left-border m-position-relative"><span className='m-employees m-center'></span></td>
              <td className="m-left-border m-position-relative"><span className='m-employees m-center'></span></td>
              <td className="m-left-border m-position-relative"><span className='m-employees m-center'></span></td>
              <td className="m-left-border m-position-relative"><span className='m-employees m-center'></span></td>
              <td className="m-left-border m-position-relative"><span className='m-employees m-center'></span></td>
              <td className="m-left-border m-position-relative"><span className='m-employees m-center'></span></td>
              <td className="m-left-border m-position-relative"><span className='m-employees m-center'></span></td>
              <td className="m-left-border m-position-relative"><span className='m-employees m-center'></span></td>
              <td className="m-left-border m-position-relative"><span className='m-employees m-center'></span></td>
              <td className="m-left-border m-position-relative"><span className='m-employees m-center'></span></td>
              <td className="m-left-border m-position-relative"><span className='m-employees m-center'></span></td>
              <td className="m-left-border m-position-relative"><span className='m-employees m-center'></span></td>
              <td className="m-left-border m-position-relative"><span className='m-employees m-center'></span></td>
              <td className="m-left-border m-position-relative"><span className='m-employees m-center'></span></td>
              <td className="m-left-border m-position-relative"><span className='m-employees m-center'></span></td>
              <td className="m-left-border m-position-relative"><span className='m-employees m-center'></span></td>
              <td className="m-left-border m-position-relative"><span className='m-employees m-center'></span></td>
              <td className="m-left-border m-position-relative"><span className='m-employees m-center'></span></td>
              <td className="m-left-border m-position-relative"><span className='m-employees m-center'></span></td>
              <td className="m-left-border m-position-relative"><span className='m-employees m-center'></span></td>
              <td className="m-left-border m-position-relative"><span className='m-employees m-center'></span></td>
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
              <td className=" m-position-relative"><span className='m-employees m-center'></span></td>
              <td className="m-left-border m-position-relative"><span className='m-employees m-center'></span></td>
              <td className="m-left-border m-position-relative"><span className='m-employees m-center'></span></td>
              <td className="m-left-border m-position-relative"><span className='m-employees m-center'></span></td>
              <td className="m-left-border m-position-relative"><span className='m-employees m-center'></span></td>
              <td className="m-left-border m-position-relative"><span className='m-employees m-center'></span></td>
              <td className="m-left-border m-position-relative"><span className='m-employees m-center'></span></td>
              <td className="m-left-border m-position-relative"><span className='m-employees m-center'></span></td>
              <td className="m-left-border m-position-relative"><span className='m-employees m-center'></span></td>
              <td className="m-left-border m-position-relative"><span className='m-employees m-center'></span></td>
              <td className="m-left-border m-position-relative"><span className='m-employees m-center'></span></td>
              <td className="m-left-border m-position-relative"><span className='m-employees m-center'></span></td>
              <td className="m-left-border m-position-relative"><span className='m-employees m-center'></span></td>
              <td className="m-left-border m-position-relative"><span className='m-employees m-center'></span></td>
              <td className="m-left-border m-position-relative"><span className='m-employees m-center'></span></td>
              <td className="m-left-border m-position-relative"><span className='m-employees m-center'></span></td>
              <td className="m-left-border m-position-relative"><span className='m-employees m-center'></span></td>
              <td className="m-left-border m-position-relative"><span className='m-employees m-center'></span></td>
              <td className="m-left-border m-position-relative"><span className='m-employees m-center'></span></td>
              <td className="m-left-border m-position-relative"><span className='m-employees m-center'></span></td>
              <td className="m-left-border m-position-relative"><span className='m-employees m-center'></span></td>
              <td className="m-left-border m-position-relative"><span className='m-employees m-center'></span></td>
              <td className="m-left-border m-position-relative"><span className='m-employees m-center'></span></td>
              <td className="m-left-border m-position-relative"><span className='m-employees m-center'></span></td>
              <td className="m-left-border m-position-relative"><span className='m-employees m-center'></span></td>
              <td className="m-left-border red-error">-1</td>
              <td className="m-left-border m-position-relative"><span className='m-employees m-center'></span></td>
              <td className="m-left-border m-position-relative"><span className='m-employees m-center'></span></td>
              <td className="m-left-border m-position-relative"><span className='m-employees m-center'></span></td>
              <td className="m-left-border m-position-relative"><span className='m-employees m-center'></span></td>
              <td className="m-left-border m-position-relative"><span className='m-employees m-center'></span></td>
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
              <td className=" m-position-relative"><span className='m-employees m-center'></span></td>
              <td className="m-left-border m-position-relative"><span className='m-employees m-center'></span></td>
              <td className="m-left-border m-position-relative"><span className='m-employees m-center'></span></td>
              <td className="m-left-border m-position-relative"><span className='m-employees m-center'></span></td>
              <td className="m-left-border m-position-relative"><span className='m-employees m-center'></span></td>
              <td className="m-left-border m-position-relative"><span className='m-employees m-center'></span></td>
              <td className="m-left-border m-position-relative"><span className='m-employees m-center'></span></td>
              <td className="m-left-border m-position-relative"><span className='m-employees m-center'></span></td>
              <td className="m-left-border m-position-relative"><span className='m-employees m-center'></span></td>
              <td className="m-left-border m-position-relative"><span className='m-employees m-center'></span></td>
              <td className="m-left-border red-error">-1</td>
              <td className="m-left-border m-position-relative"><span className='m-employees m-center'></span></td>
              <td className="m-left-border m-position-relative"><span className='m-employees m-center'></span></td>
              <td className="m-left-border m-position-relative"><span className='m-employees m-center'></span></td>
              <td className="m-left-border m-position-relative"><span className='m-employees m-center'></span></td>
              <td className="m-left-border m-position-relative"><span className='m-employees m-center'></span></td>
              <td className="m-left-border m-position-relative"><span className='m-employees m-center'></span></td>
              <td className="m-left-border m-position-relative"><span className='m-employees m-center'></span></td>
              <td className="m-left-border m-position-relative"><span className='m-employees m-center'></span></td>
              <td className="m-left-border m-position-relative"><span className='m-employees m-center'></span></td>
              <td className="m-left-border m-position-relative"><span className='m-employees m-center'></span></td>
              <td className="m-left-border m-position-relative"><span className='m-employees m-center'></span></td>
              <td className="m-left-border m-position-relative"><span className='m-employees m-center'></span></td>
              <td className="m-left-border m-position-relative"><span className='m-employees m-center'></span></td>
              <td className="m-left-border m-position-relative"><span className='m-employees m-center'></span></td>
              <td className="m-left-border m-position-relative"><span className='m-employees m-center'></span></td>
              <td className="m-left-border m-position-relative"><span className='m-employees m-center'></span></td>
              <td className="m-left-border m-position-relative"><span className='m-employees m-center'></span></td>
              <td className="m-left-border m-position-relative"><span className='m-employees m-center'></span></td>
              <td className="m-left-border m-position-relative"><span className='m-employees m-center'></span></td>
              <td className="m-left-border m-position-relative"><span className='m-employees m-center'></span></td>
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
              <td className=" m-position-relative"><span className='m-employees m-center'></span></td>
              <td className="m-left-border m-position-relative"><span className='m-employees m-center'></span></td>
              <td className="m-left-border m-position-relative"><span className='m-employees m-center'></span></td>
              <td className="m-left-border m-position-relative"><span className='m-employees m-center'></span></td>
              <td className="m-left-border m-position-relative"><span className='m-employees m-center'></span></td>
              <td className="m-left-border m-position-relative"><span className='m-employees m-center'></span></td>
              <td className="m-left-border m-position-relative"><span className='m-employees m-center'></span></td>
              <td className="m-left-border m-position-relative"><span className='m-employees m-center'></span></td>
              <td className="m-left-border m-position-relative"><span className='m-employees m-center'></span></td>
              <td className="m-left-border red-error">-2</td>
              <td className="m-left-border m-position-relative"><span className='m-employees m-center'></span></td>
              <td className="m-left-border m-position-relative"><span className='m-employees m-center'></span></td>
              <td className="m-left-border m-position-relative"><span className='m-employees m-center'></span></td>
              <td className="m-left-border m-position-relative"><span className='m-employees m-center'></span></td>
              <td className="m-left-border m-position-relative"><span className='m-employees m-center'></span></td>
              <td className="m-left-border m-position-relative"><span className='m-employees m-center'></span></td>
              <td className="m-left-border m-position-relative"><span className='m-employees m-center'></span></td>
              <td className="m-left-border m-position-relative"><span className='m-employees m-center'></span></td>
              <td className="m-left-border m-position-relative"><span className='m-employees m-center'></span></td>
              <td className="m-left-border m-position-relative"><span className='m-employees m-center'></span></td>
              <td className="m-left-border m-position-relative"><span className='m-employees m-center'></span></td>
              <td className="m-left-border m-position-relative"><span className='m-employees m-center'></span></td>
              <td className="m-left-border m-position-relative"><span className='m-employees m-center'></span></td>
              <td className="m-left-border m-position-relative"><span className='m-employees m-center'></span></td>
              <td className="m-left-border m-position-relative"><span className='m-employees m-center'></span></td>
              <td className="m-left-border m-position-relative"><span className='m-employees m-center'></span></td>
              <td className="m-left-border m-position-relative"><span className='m-employees m-center'></span></td>
              <td className="m-left-border m-position-relative"><span className='m-employees m-center'></span></td>
              <td className="m-left-border m-position-relative"><span className='m-employees m-center'></span></td>
              <td className="m-left-border m-position-relative"><span className='m-employees m-center'></span></td>
              <td className="m-left-border m-position-relative"><span className='m-employees m-center'></span></td>
              <td className="m-left-border"></td>
              <td ></td>
              <td ></td>
              <td ></td>
            </tr>
            <tr>
            <td colSpan="2" className="schedule-table__checkbox-cell m-left-border">
                <input type="checkbox" />
              </td>
              <td colSpan={2} className='schedule-table__brigade-cell schedule-table-accordion-btn'>
              <span>Бригада 301</span> <img src={arrowdown} alt="" />
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
              <td></td>
            </tr>
            <tr>
              <td colSpan="2" className="schedule-table__checkbox-cell m-left-border">
                <input type="checkbox" />
              </td>
              <td colSpan="2" className="schedule-table__brigade-cell">Яблочкин Я.П.</td>
              <td colSpan="2" className="schedule-table__profile-cell m-right-border">Врач</td>
              <td className="m-center">7/7</td>
              <td className="m-left-border m-center"></td>
              <td className="m-left-border m-center"></td>
              <td className="m-left-border m-center">7/7</td>
              <td className="m-left-border m-center"></td>
              <td className="m-left-border m-center"></td>
              <td className="m-left-border m-center">7/7</td>
              <td className="m-left-border m-center"></td>
              <td className="m-left-border m-center"></td>
              <td className="m-left-border m-center red-error">7/7</td>
              <td className="m-left-border m-center red-error"></td>
              <td className="m-left-border m-center"></td>
              <td className="m-left-border m-center">7/7</td>
              <td className="m-left-border m-center"></td>
              <td className="m-left-border m-center"></td>
              <td className="m-left-border m-center">7/7</td>
              <td className="m-left-border m-center"></td>
              <td className="m-left-border m-center"></td>
              <td className="m-left-border m-center">7/7</td>
              <td className="m-left-border m-center"></td>
              <td className="m-left-border m-center"></td>
              <td className="m-left-border m-center m-active m-first-active">0</td>
              <td className="m-left-border m-center m-active">0</td>
              <td className="m-left-border m-center m-active">0</td>
              <td className="m-left-border m-center m-active">0</td>
              <td className="m-left-border m-center m-active red-error">0</td>
              <td className="m-left-border m-center m-active red-error">0</td>
              <td className="m-left-border m-center m-active">0</td>
              <td className="m-left-border m-center m-active">0</td>
              <td className="m-left-border m-center m-active">0</td>
              <td className="m-left-border m-center m-active m-last-active">0</td>
              <td className='m-left-border'>155</td>
              <td>180</td>
              <td>180</td>
              <td>0</td>
            </tr>
            <tr>
              <td colSpan="2" className="schedule-table__checkbox-cell m-left-border">
                <input type="checkbox" />
              </td>
              <td colSpan="2" className="schedule-table__brigade-cell">Яблочкин Я.П.</td>
              <td colSpan="2" className="schedule-table__profile-cell m-right-border">Врач</td>
              <td className="m-center">7/7</td>
              <td className="m-left-border m-center"></td>
              <td className="m-left-border m-center"></td>
              <td className="m-left-border m-center">7/7</td>
              <td className="m-left-border m-center"></td>
              <td className="m-left-border m-center"></td>
              <td className="m-left-border m-center">7/7</td>
              <td className="m-left-border m-center"></td>
              <td className="m-left-border m-center"></td>
              <td className="m-left-border m-center red-error">7/7</td>
              <td className="m-left-border m-center red-error"></td>
              <td className="m-left-border m-center"></td>
              <td className="m-left-border m-center">7/7</td>
              <td className="m-left-border m-center"></td>
              <td className="m-left-border m-center"></td>
              <td className="m-left-border m-center">7/7</td>
              <td className="m-left-border m-center"></td>
              <td className="m-left-border m-center"></td>
              <td className="m-left-border m-center">7/7</td>
              <td className="m-left-border m-center"></td>
              <td className="m-left-border m-center"></td>
              <td className="m-left-border m-center red-error">7/7</td>
              <td className="m-left-border m-center red-error"></td>
              <td className="m-left-border m-center"></td>
              <td className="m-left-border m-center">7/7</td>
              <td className="m-left-border m-center"></td>
              <td className="m-left-border m-center"></td>
              <td className="m-left-border m-center">7/7</td>
              <td className="m-left-border m-center"></td>
              <td className="m-left-border m-center"></td>
              <td className="m-left-border m-center">7/7</td>
              <td className='m-left-border'>155</td>
              <td>180</td>
              <td>180</td>
              <td>0</td>
            </tr>
            <tr>
              <td colSpan="2" className="schedule-table__checkbox-cell m-left-border">
                <input type="checkbox" />
              </td>
              <td colSpan="2" className="schedule-table__brigade-cell">Иванов И.И.</td>
              <td colSpan="2" className="schedule-table__profile-cell m-right-border">Фельдшер</td>
              <td className="m-center"></td>
              <td className="m-left-border m-center">7/7</td>
              <td className="m-left-border m-center"></td>
              <td className="m-left-border m-center"></td>
              <td className="m-left-border m-center">7/7</td>
              <td className="m-left-border m-center"></td>
              <td className="m-left-border m-center"></td>
              <td className="m-left-border m-center">7/7</td>
              <td className="m-left-border m-center"></td>
              <td className="m-left-border m-center"></td>
              <td className="m-left-border m-center red-error">7/7</td>
              <td className="m-left-border m-center red-error"></td>
              <td className="m-left-border m-center"></td>
              <td className="m-left-border m-center">7/7</td>
              <td className="m-left-border m-center"></td>
              <td className="m-left-border m-center"></td>
              <td className="m-left-border m-center">7/7</td>
              <td className="m-left-border m-center"></td>
              <td className="m-left-border m-center"></td>
              <td className="m-left-border m-center">7/7</td>
              <td className="m-left-border m-center"></td>
              <td className="m-left-border m-center"></td>
              <td className="m-left-border m-center red-error">7/7</td>
              <td className="m-left-border m-center red-error"></td>
              <td className="m-left-border m-center"></td>
              <td className="m-left-border m-center">7/7</td>
              <td className="m-left-border m-center"></td>
              <td className="m-left-border m-center"></td>
              <td className="m-left-border m-center">7/7</td>
              <td className="m-left-border m-center"></td>
              <td className="m-left-border m-center"></td>
              {/* <td className="m-left-border m-center">7/7</td> */}
              <td className='m-left-border'>155</td>
              <td>180</td>
              <td>180</td>
              <td>0</td>
            </tr>
            <tr>
              <td colSpan="2" className="schedule-table__checkbox-cell m-left-border">
                <input type="checkbox" />
              </td>
              <td colSpan="2" className="schedule-table__brigade-cell">Николаев Н.Н.</td>
              <td colSpan="2" className="schedule-table__profile-cell m-right-border">Врач</td>
              <td className="m-center"></td>
              <td className="m-left-border m-center">7/7</td>
              <td className="m-left-border m-center"></td>
              <td className="m-left-border m-center"></td>
              <td className="m-left-border m-center">7/7</td>
              <td className="m-left-border m-center"></td>
              <td className="m-left-border m-center"></td>
              <td className="m-left-border m-center">7/7</td>
              <td className="m-left-border m-center"></td>
              <td className="m-left-border m-center"></td>
              <td className="m-left-border m-center red-error">7/7</td>
              <td className="m-left-border m-center red-error"></td>
              <td className="m-left-border m-center"></td>
              <td className="m-left-border m-center">7/7</td>
              <td className="m-left-border m-center"></td>
              <td className="m-left-border m-center"></td>
              <td className="m-left-border m-center">7/7</td>
              <td className="m-left-border m-center"></td>
              <td className="m-left-border m-center"></td>
              <td className="m-left-border m-center">7/7</td>
              <td className="m-left-border m-center"></td>
              <td className="m-left-border m-center"></td>
              <td className="m-left-border m-center red-error">7/7</td>
              <td className="m-left-border m-center red-error"></td>
              <td className="m-left-border m-center"></td>
              <td className="m-left-border m-center">7/7</td>
              <td className="m-left-border m-center"></td>
              <td className="m-left-border m-center"></td>
              <td className="m-left-border m-center">7/7</td>
              <td className="m-left-border m-center"></td>
              <td className="m-left-border m-center"></td>
              {/* <td className="m-left-border m-center">7/7</td> */}
              <td className='m-left-border'>155</td>
              <td>180</td>
              <td>180</td>
              <td>0</td>
            </tr>
            <tr>
            <td colSpan="2" className="schedule-table__checkbox-cell m-left-border">
                <input type="checkbox" />
              </td>
              <td colSpan={2} className='schedule-table__brigade-cell schedule-table-accordion-btn'>
              <span>Бригада 302</span> <img src={arrowdown} alt="" />
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
              <td></td>
            </tr>
            <tr>
              <td colSpan="2" className="schedule-table__checkbox-cell m-left-border">
                <input type="checkbox" />
              </td>
              <td colSpan="2" className="schedule-table__brigade-cell">Яблочкин Я.П.</td>
              <td colSpan="2" className="schedule-table__profile-cell m-right-border">Врач</td>
              <td className="m-center">7/7</td>
              <td className="m-left-border m-center"></td>
              <td className="m-left-border m-center"></td>
              <td className="m-left-border m-center">7/7</td>
              <td className="m-left-border m-center"></td>
              <td className="m-left-border m-center"></td>
              <td className="m-left-border m-center">7/7</td>
              <td className="m-left-border m-center"></td>
              <td className="m-left-border m-center"></td>
              <td className="m-left-border m-center red-error">7/7</td>
              <td className="m-left-border m-center red-error"></td>
              <td className="m-left-border m-center"></td>
              <td className="m-left-border m-center">7/7</td>
              <td className="m-left-border m-center"></td>
              <td className="m-left-border m-center"></td>
              <td className="m-left-border m-center">7/7</td>
              <td className="m-left-border m-center"></td>
              <td className="m-left-border m-center"></td>
              <td className="m-left-border m-center">7/7</td>
              <td className="m-left-border m-center"></td>
              <td className="m-left-border m-center"></td>
              <td className="m-left-border m-center m-active m-first-active">0</td>
              <td className="m-left-border m-center m-active">0</td>
              <td className="m-left-border m-center m-active">0</td>
              <td className="m-left-border m-center m-active">0</td>
              <td className="m-left-border m-center m-active red-error">0</td>
              <td className="m-left-border m-center m-active red-error">0</td>
              <td className="m-left-border m-center m-active">0</td>
              <td className="m-left-border m-center m-active">0</td>
              <td className="m-left-border m-center m-active">0</td>
              <td className="m-left-border m-center m-active m-last-active">0</td>
              <td className='m-left-border'>155</td>
              <td>180</td>
              <td>180</td>
              <td>0</td>
            </tr>
            <tr>
              <td colSpan="2" className="schedule-table__checkbox-cell m-left-border">
                <input type="checkbox" />
              </td>
              <td colSpan="2" className="schedule-table__brigade-cell">Яблочкин Я.П.</td>
              <td colSpan="2" className="schedule-table__profile-cell m-right-border">Врач</td>
              <td className="m-center">7/7</td>
              <td className="m-left-border m-center"></td>
              <td className="m-left-border m-center"></td>
              <td className="m-left-border m-center">7/7</td>
              <td className="m-left-border m-center"></td>
              <td className="m-left-border m-center"></td>
              <td className="m-left-border m-center">7/7</td>
              <td className="m-left-border m-center"></td>
              <td className="m-left-border m-center"></td>
              <td className="m-left-border m-center red-error">7/7</td>
              <td className="m-left-border m-center red-error"></td>
              <td className="m-left-border m-center"></td>
              <td className="m-left-border m-center">7/7</td>
              <td className="m-left-border m-center"></td>
              <td className="m-left-border m-center"></td>
              <td className="m-left-border m-center">7/7</td>
              <td className="m-left-border m-center"></td>
              <td className="m-left-border m-center"></td>
              <td className="m-left-border m-center">7/7</td>
              <td className="m-left-border m-center"></td>
              <td className="m-left-border m-center"></td>
              <td className="m-left-border m-center red-error">7/7</td>
              <td className="m-left-border m-center red-error"></td>
              <td className="m-left-border m-center"></td>
              <td className="m-left-border m-center">7/7</td>
              <td className="m-left-border m-center"></td>
              <td className="m-left-border m-center"></td>
              <td className="m-left-border m-center">7/7</td>
              <td className="m-left-border m-center"></td>
              <td className="m-left-border m-center"></td>
              <td className="m-left-border m-center">7/7</td>
              <td className='m-left-border'>155</td>
              <td>180</td>
              <td>180</td>
              <td>0</td>
            </tr>
            <tr>
              <td colSpan="2" className="schedule-table__checkbox-cell m-left-border">
                <input type="checkbox" />
              </td>
              <td colSpan="2" className="schedule-table__brigade-cell">Грушина Г.П.</td>
              <td colSpan="2" className="schedule-table__profile-cell m-right-border">Фельдшер</td>
              <td className="m-center"></td>
              <td className="m-left-border m-center">7/7</td>
              <td className="m-left-border m-center"></td>
              <td className="m-left-border m-center"></td>
              <td className="m-left-border m-center">7/7</td>
              <td className="m-left-border m-center"></td>
              <td className="m-left-border m-center"></td>
              <td className="m-left-border m-center">7/7</td>
              <td className="m-left-border m-center"></td>
              <td className="m-left-border m-center"></td>
              <td className="m-left-border m-center red-error">7/7</td>
              <td className="m-left-border m-center red-error"></td>
              <td className="m-left-border m-center"></td>
              <td className="m-left-border m-center">7/7</td>
              <td className="m-left-border m-center"></td>
              <td className="m-left-border m-center"></td>
              <td className="m-left-border m-center">7/7</td>
              <td className="m-left-border m-center"></td>
              <td className="m-left-border m-center"></td>
              <td className="m-left-border m-center">7/7</td>
              <td className="m-left-border m-center"></td>
              <td className="m-left-border m-center"></td>
              <td className="m-left-border m-center red-error">7/7</td>
              <td className="m-left-border m-center red-error"></td>
              <td className="m-left-border m-center"></td>
              <td className="m-left-border m-center">7/7</td>
              <td className="m-left-border m-center"></td>
              <td className="m-left-border m-center"></td>
              <td className="m-left-border m-center">7/7</td>
              <td className="m-left-border m-center"></td>
              <td className="m-left-border m-center"></td>
              <td className='m-left-border'>155</td>
              <td>180</td>
              <td>180</td>
              <td>0</td>
            </tr>
            <tr>
              <td colSpan="2" className="schedule-table__checkbox-cell m-left-border">
                <input type="checkbox" />
              </td>
              <td colSpan="2" className="schedule-table__brigade-cell">Персиков П.П.</td>
              <td colSpan="2" className="schedule-table__profile-cell m-right-border">Врач</td>
              <td className="m-center"></td>
              <td className="m-left-border m-center">7/7</td>
              <td className="m-left-border m-center"></td>
              <td className="m-left-border m-center"></td>
              <td className="m-left-border m-center">7/7</td>
              <td className="m-left-border m-center"></td>
              <td className="m-left-border m-center"></td>
              <td className="m-left-border m-center">7/7</td>
              <td className="m-left-border m-center"></td>
              <td className="m-left-border m-center"></td>
              <td className="m-left-border m-center red-error">7/7</td>
              <td className="m-left-border m-center red-error"></td>
              <td className="m-left-border m-center"></td>
              <td className="m-left-border m-center">7/7</td>
              <td className="m-left-border m-center"></td>
              <td className="m-left-border m-center"></td>
              <td className="m-left-border m-center">7/7</td>
              <td className="m-left-border m-center"></td>
              <td className="m-left-border m-center"></td>
              <td className="m-left-border m-center">7/7</td>
              <td className="m-left-border m-center"></td>
              <td className="m-left-border m-center"></td>
              <td className="m-left-border m-center red-error">7/7</td>
              <td className="m-left-border m-center red-error"></td>
              <td className="m-left-border m-center"></td>
              <td className="m-left-border m-center">7/7</td>
              <td className="m-left-border m-center"></td>
              <td className="m-left-border m-center"></td>
              <td className="m-left-border m-center">7/7</td>
              <td className="m-left-border m-center"></td>
              <td className="m-left-border m-center"></td>
              <td className='m-left-border'>155</td>
              <td>180</td>
              <td>180</td>
              <td>0</td>
            </tr>
            <tr>
              <td colSpan="2" className="schedule-table__checkbox-cell m-left-border">
                <input type="checkbox" />
              </td>
              <td colSpan="2" className="schedule-table__brigade-cell">Персиков П.П.</td>
              <td colSpan="2" className="schedule-table__profile-cell m-right-border">Врач</td>
              <td className="m-center"></td>
              <td className="m-left-border m-center"></td>
              <td className="m-left-border m-center">7/7</td>
              <td className="m-left-border m-center"></td>
              <td className="m-left-border m-center"></td>
              <td className="m-left-border m-center">7/7</td>
              <td className="m-left-border m-center"></td>
              <td className="m-left-border m-center m-active m-first-active">k</td>
              <td className="m-left-border m-center m-active">k</td>
              <td className="m-left-border m-center m-active">k</td>
              <td className="m-left-border m-center m-active">k</td>
              <td className="m-left-border m-center m-active m-last-active">k</td>
              <td className="m-left-border m-center red-error"></td>
              <td className="m-left-border m-center"></td>
              <td className="m-left-border m-center">7/7</td>
              <td className="m-left-border m-center"></td>
              <td className="m-left-border m-center"></td>
              <td className="m-left-border m-center">7/7</td>
              <td className="m-left-border m-center"></td>
              <td className="m-left-border m-center"></td>
              <td className="m-left-border m-center">7/7</td>
              <td className="m-left-border m-center"></td>
              <td className="m-left-border m-center"></td>
              <td className="m-left-border m-center red-error">7/7</td>
              <td className="m-left-border m-center red-error"></td>
              <td className="m-left-border m-center"></td>
              <td className="m-left-border m-center">7/7</td>
              <td className="m-left-border m-center"></td>
              <td className="m-left-border m-center"></td>
              <td className="m-left-border m-center">7/7</td>
              <td className="m-left-border m-center"></td>
              <td className='m-left-border'>155</td>
              <td>180</td>
              <td>180</td>
              <td>0</td>
            </tr>
            <tr>
              <td colSpan="2" className="schedule-table__checkbox-cell m-left-border">
                <input type="checkbox" />
              </td>
              <td colSpan="2" className="schedule-table__brigade-cell">Персиков П.П.</td>
              <td colSpan="2" className="schedule-table__profile-cell m-right-border">Врач</td>
              <td className="m-center"></td>
              <td className="m-left-border m-center"></td>
              <td className="m-left-border m-center">7/7</td>
              <td className="m-left-border m-center"></td>
              <td className="m-left-border m-center"></td>
              <td className="m-left-border m-center">7/7</td>
              <td className="m-left-border m-center"></td>
              <td className="m-left-border m-center m-active m-first-active">k</td>
              <td className="m-left-border m-center m-active">k</td>
              <td className="m-left-border m-center m-active">k</td>
              <td className="m-left-border m-center m-active">k</td>
              <td className="m-left-border m-center m-active m-last-active">k</td>
              <td className="m-left-border m-center red-error"></td>
              <td className="m-left-border m-center"></td>
              <td className="m-left-border m-center">7/7</td>
              <td className="m-left-border m-center"></td>
              <td className="m-left-border m-center"></td>
              <td className="m-left-border m-center">7/7</td>
              <td className="m-left-border m-center"></td>
              <td className="m-left-border m-center"></td>
              <td className="m-left-border m-center">7/7</td>
              <td className="m-left-border m-center"></td>
              <td className="m-left-border m-center"></td>
              <td className="m-left-border m-center red-error">7/7</td>
              <td className="m-left-border m-center red-error"></td>
              <td className="m-left-border m-center"></td>
              <td className="m-left-border m-center">7/7</td>
              <td className="m-left-border m-center"></td>
              <td className="m-left-border m-center"></td>
              <td className="m-left-border m-center">7/7</td>
              <td className="m-left-border m-center"></td>
              <td className='m-left-border'>155</td>
              <td>180</td>
              <td>180</td>
              <td>0</td>
            </tr>
            <tr>
            <td colSpan="2" className="schedule-table__checkbox-cell m-left-border">
                <input type="checkbox" />
              </td>
              <td colSpan={2} className='schedule-table__brigade-cell schedule-table-accordion-btn'>
              <span>Бригада 302</span> <img src={arrowdown} alt="" />
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
              <td></td>
            </tr>
            <tr>
              <td colSpan="2" className="schedule-table__checkbox-cell m-left-border">
                <input type="checkbox" />
              </td>
              <td colSpan="2" className="schedule-table__brigade-cell">Яблочкин Я.П.</td>
              <td colSpan="2" className="schedule-table__profile-cell m-right-border">Врач</td>
              <td className="m-center">7/7</td>
              <td className="m-left-border m-center"></td>
              <td className="m-left-border m-center"></td>
              <td className="m-left-border m-center">7/7</td>
              <td className="m-left-border m-center"></td>
              <td className="m-left-border m-center"></td>
              <td className="m-left-border m-center">7/7</td>
              <td className="m-left-border m-center"></td>
              <td className="m-left-border m-center"></td>
              <td className="m-left-border m-center red-error">7/7</td>
              <td className="m-left-border m-center red-error"></td>
              <td className="m-left-border m-center"></td>
              <td className="m-left-border m-center">7/7</td>
              <td className="m-left-border m-center"></td>
              <td className="m-left-border m-center"></td>
              <td className="m-left-border m-center">7/7</td>
              <td className="m-left-border m-center"></td>
              <td className="m-left-border m-center"></td>
              <td className="m-left-border m-center">7/7</td>
              <td className="m-left-border m-center"></td>
              <td className="m-left-border m-center"></td>
              <td className="m-left-border m-center red-error">7/7</td>
              <td className="m-left-border m-center red-error"></td>
              <td className="m-left-border m-center"></td>
              <td className="m-left-border m-center">7/7</td>
              <td className="m-left-border m-center"></td>
              <td className="m-left-border m-center"></td>
              <td className="m-left-border m-center">7/7</td>
              <td className="m-left-border m-center"></td>
              <td className="m-left-border m-center"></td>
              <td className="m-left-border m-center">7/7</td>
              <td className='m-left-border'>155</td>
              <td>180</td>
              <td>180</td>
              <td>0</td>
            </tr>
            <tr>
              <td colSpan="2" className="schedule-table__checkbox-cell m-left-border">
                <input type="checkbox" />
              </td>
              <td colSpan="2" className="schedule-table__brigade-cell">Яблочкин Я.П.</td>
              <td colSpan="2" className="schedule-table__profile-cell m-right-border">Врач</td>
              <td className="m-center">7/7</td>
              <td className="m-left-border m-center"></td>
              <td className="m-left-border m-center"></td>
              <td className="m-left-border m-center">7/7</td>
              <td className="m-left-border m-center"></td>
              <td className="m-left-border m-center"></td>
              <td className="m-left-border m-center">7/7</td>
              <td className="m-left-border m-center"></td>
              <td className="m-left-border m-center"></td>
              <td className="m-left-border m-center red-error">7/7</td>
              <td className="m-left-border m-center red-error"></td>
              <td className="m-left-border m-center"></td>
              <td className="m-left-border m-center">7/7</td>
              <td className="m-left-border m-center"></td>
              <td className="m-left-border m-center"></td>
              <td className="m-left-border m-center">7/7</td>
              <td className="m-left-border m-center"></td>
              <td className="m-left-border m-center"></td>
              <td className="m-left-border m-center">7/7</td>
              <td className="m-left-border m-center"></td>
              <td className="m-left-border m-center"></td>
              <td className="m-left-border m-center red-error">7/7</td>
              <td className="m-left-border m-center red-error"></td>
              <td className="m-left-border m-center"></td>
              <td className="m-left-border m-center">7/7</td>
              <td className="m-left-border m-center"></td>
              <td className="m-left-border m-center"></td>
              <td className="m-left-border m-center">7/7</td>
              <td className="m-left-border m-center"></td>
              <td className="m-left-border m-center"></td>
              <td className="m-left-border m-center">7/7</td>
              <td className='m-left-border'>155</td>
              <td>180</td>
              <td>180</td>
              <td>0</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
  
  export default ScheduleTableMedics