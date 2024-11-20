const DetailTableAdministration = () => {
  return (
    <div className="detail__table-wrapper">
      <table className="g-table">
        <thead>
          <tr>
            <th></th>
            <th>АХЧ</th>
            <th>ФИО</th>
            <th>Таб. номер</th>
            <th>Должность</th>
            <th>Интервал работы</th>
            <th>Переработка</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <input type="checkbox" />
            </td>
            <td>Диспетчерская</td>
            <td>Ёлкин Я.П.</td>
            <td>126</td>
            <td>Диспетчер</td>
            <td>09:00 - 09:00</td>
            <td>0</td>
            <td>
              <div className="g-icon-warning"></div>
            </td>
          </tr>

          <tr>
            <td>
              <input type="checkbox" />
            </td>
            <td>Дежурная комната</td>
            <td>Палкин П.П.</td>
            <td>127</td>
            <td>Старшая мед. сестра</td>
            <td>19:00 - 07:00</td>
            <td>0</td>
            <td></td>
          </tr>

          <tr>
            <td>
              <input type="checkbox" />
            </td>
            <td>Предрейсовый осмотр</td>
            <td>Лесов Г.П.</td>
            <td>128</td>
            <td>Врач</td>
            <td>09:00 - 21:00</td>
            <td>0</td>
            <td></td>
          </tr>

          <tr>
            <td>
              <input type="checkbox" />
            </td>
            <td>Предрейсовый осмотр</td>
            <td>Густой А.В.</td>
            <td>129</td>
            <td>Врач</td>
            <td>21:00 - 09:00</td>
            <td>0</td>
            <td></td>
          </tr>

          <tr>
            <td>
              <input type="checkbox" />
            </td>
            <td>Подсобное помещение</td>
            <td>Лешев П.П.</td>
            <td>130</td>
            <td>Уборщица</td>
            <td>21:00 - 09:00</td>
            <td>0</td>
            <td></td>
          </tr>

          <tr>
            <td>
              <input type="checkbox" />
            </td>
            <td>Предрейсовый осмотр</td>
            <td>Холостой Я.П.</td>
            <td>135</td>
            <td>Завхоз</td>
            <td>11:00 - 11:00</td>
            <td>0</td>
            <td></td>
          </tr>
        </tbody>

      </table>
    </div>
  )
}

export default DetailTableAdministration