const DetailTableDrivers = () => {
  return (
    <div className="detail__table-wrapper">
      <table className="detail-table m-drivers">
        <thead>
          <tr>
            <th className="detail-table__checkbox m-left-border"></th>
            <th className="detail-table__brigade">Бригада</th>
            <th className="detail-table__profile">Профиль</th>
            <th className="detail-table__plate m-right-border">Номер машины</th>
            <th className="detail-table__time">Смена</th>
            <th className="detail-table__name">ФИО</th>
            <th className="detail-table__number">Таб. номер</th>
            <th className="detail-table__number">Переработка</th>
            <th className="detail-table__status m-left-border"></th>
            <th className="detail-table__comment m-left-border m-right-border">Комментарий</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td rowSpan="2" className="detail-table__checkbox-cell m-left-border">
              <input type="checkbox" />
            </td>
            <td rowSpan="2" className="detail-table__brigade-cell">301</td>
            <td rowSpan="2" className="detail-table__profile-cell">А</td>
            <td rowSpan="2" className="detail-table__plate-cell m-right-border">а000аа72</td>
            <td>07:00 - 19:00</td>
            <td>Газов Г.Г</td>
            <td>132</td>
            <td>0</td>
            <td className="m-left-border">
              <div className="g-icon-warning"></div>
            </td>
            <td rowSpan="2" className="m-left-border m-right-border">С 7:00 по 14:00 работают на поддержке марафона</td>
          </tr>
          <tr>
            <td>19:00 - 07:00</td>
            <td>Тормозов Т.Т.</td>
            <td>133</td>
            <td>0</td>
            <td className="m-left-border"></td>
          </tr>

          <tr>
            <td rowSpan="2" className="detail-table__checkbox-cell m-left-border">
              <input type="checkbox" />
            </td>
            <td rowSpan="2" className="detail-table__brigade-cell">302</td>
            <td rowSpan="2" className="detail-table__profile-cell">И</td>
            <td rowSpan="2" className="detail-table__plate-cell m-right-border">а000аа72</td>
            <td> 12:00 - 00:00</td>
            <td>Светафоро С.С.</td>
            <td>136</td>
            <td>0</td>
            <td className="m-left-border"></td>
            <td className="m-left-border m-right-border"></td>
          </tr>
          <tr>
            <td>00:00 - 12:00</td>
            <td>Гудков Г.Г.</td>
            <td>137</td>
            <td>0</td>
            <td className="m-left-border"></td>
            <td className="m-left-border m-right-border"></td>
          </tr>

          <tr>
            <td rowSpan="2" className="detail-table__checkbox-cell m-left-border">
              <input type="checkbox" />
            </td>
            <td rowSpan="2" className="detail-table__brigade-cell">303</td>
            <td rowSpan="2" className="detail-table__profile-cell">Г</td>
            <td rowSpan="2" className="detail-table__plate-cell m-right-border">а000аа72</td>
            <td>09:00 - 21:00</td>
            <td>Скоростной С.С.</td>
            <td>134</td>
            <td>9</td>
            <td className="m-left-border"></td>
            <td className="m-left-border m-right-border"></td>
          </tr>
          <tr>
            <td>21:00 - 09:00</td>
            <td>Фуров Ф.Ф.</td>
            <td>133</td>
            <td>0</td>
            <td className="m-left-border"></td>
            <td className="m-left-border m-right-border"></td>
          </tr>

          <tr>
            <td rowSpan="2" className="detail-table__checkbox-cell m-last m-left-border">
              <input type="checkbox" />
            </td>
            <td rowSpan="2" className="detail-table__brigade-cell m-last">303</td>
            <td rowSpan="2" className="detail-table__profile-cell m-last">Г</td>
            <td rowSpan="2" className="detail-table__plate-cell m-last m-right-border">а000аа72</td>
            <td>09:00 - 21:00</td>
            <td>Скоростной С.С.</td>
            <td>134</td>
            <td>9</td>
            <td className="m-left-border"></td>
            <td className="m-left-border m-right-border"></td>
          </tr>
          <tr>
            <td>21:00 - 09:00</td>
            <td>Фуров Ф.Ф.</td>
            <td>133</td>
            <td>0</td>
            <td className="m-left-border"></td>
            <td className="m-left-border m-right-border"></td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default DetailTableDrivers