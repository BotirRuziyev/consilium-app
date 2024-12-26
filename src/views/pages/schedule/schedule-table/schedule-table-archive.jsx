import arrowdown from '@assets/icons/arrow-down.svg'
const ScheduleTableArchive = () => {
  return (
    <div className="schedule__table-wrapper">
      <table className="schedule-table schedule-table-archive">
        <thead>
          <tr>
            <th colSpan="2" className="schedule-table__checkbox m-left-border"></th>
            <th colSpan="2" >ФИО <img className='arrow-down__img' src={arrowdown} alt="" /></th>
            <th className="m-right-border">Должность</th>
            <td className="m-center">1</td>
            <td className="m-left-border m-center">2</td>
            <td className="m-left-border m-center">3</td>
            <td className="m-left-border m-center">4</td>
            <td className="m-left-border m-center">5</td>
            <td className="m-left-border m-center m-selected">6</td>
            <td className="m-left-border m-center m-selected">7</td>
            <td className="m-left-border m-center">8</td>
            <td className="m-left-border m-center">9</td>
            <td className="m-left-border m-center">10</td>
            <td className="m-left-border m-center">11</td>
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
            <td className="m-left-border m-center">26</td>
            <td className="m-left-border m-center m-selected">27</td>
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
            <td colSpan={2} className='schedule-table__checkbox-cell m-bottom-border'></td>
            <td colSpan={2} className='schedule-table__brigade-cell'>
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
          </tr>
          <span className='currently-empty'>
            На данный момент таблица пуста.
          </span>
        </tbody>
      </table>
    </div>
  )
}

export default ScheduleTableArchive