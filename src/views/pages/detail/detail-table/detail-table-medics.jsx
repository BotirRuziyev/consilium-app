const DetailTableMedics = () => {
  return (
    <div className="detail__table-wrapper">
      <table className="detail-table">
        <thead>
          <tr>
            <th rowSpan="2" className="detail-table__checkbox m-left-border"></th>
            <th rowSpan="2" className="detail-table__brigade">Бригада</th>
            <th rowSpan="2" className="detail-table__profile">Профиль</th>
            <th rowSpan="2" className="detail-table__plate m-right-border">Номер машины</th>
            <th colSpan="4" className="m-center">Старший бригады</th>
            <th colSpan="4" className="m-left-border m-center">Второй работник</th>
            <th colSpan="4" className="m-left-border m-center">Третий работник</th>
            <th rowSpan="2" className="detail-table__status m-left-border"></th>
            <th rowSpan="2" className="detail-table__status m-left-border m-right-border">Комментарий</th>
          </tr>
          <tr>
            <th className="detail-table__time">Смена</th>
            <th className="detail-table__name">ФИО</th>
            <th className="detail-table__number">Таб. номер</th>
            <th className="detail-table__number">Переработка</th>
            <th className="detail-table__time m-left-border">Смена</th>
            <th className="detail-table__name">ФИО</th>
            <th className="detail-table__number">Таб. номер</th>
            <th className="detail-table__number">Переработка</th>
            <th className="detail-table__time m-left-border">Смена</th>
            <th className="detail-table__name">ФИО</th>
            <th className="detail-table__number">Таб. номер</th>
            <th className="detail-table__number">Переработка</th>
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
            <td>Яблочкин Я.П.</td>
            <td>123</td>
            <td>4</td>
            <td className="m-left-border">12:00 - 00:00</td>
            <td>Грушина Г.П.</td>
            <td>127</td>
            <td>0</td>
            <td className="m-left-border">12:00 - 00:00</td>
            <td>Грушина Г.П.</td>
            <td>127</td>
            <td>0</td>
            <td className="m-left-border">
              <div className="g-icon-warning"></div>
            </td>
            <td className="m-left-border m-right-border"></td>
          </tr>
          <tr>
            <td>07:00 - 19:00</td>
            <td>Яблочкин Я.П.</td>
            <td>123</td>
            <td>4</td>
            <td className="m-left-border">12:00 - 00:00</td>
            <td>Грушина Г.П.</td>
            <td>127</td>
            <td>0</td>
            <td className="m-left-border">12:00 - 00:00</td>
            <td>Грушина Г.П.</td>
            <td>127</td>
            <td>0</td>
            <td className="m-left-border"></td>
            <td className="m-left-border m-right-border"></td>
          </tr>
          <tr>
            <td rowSpan="2" className="detail-table__checkbox-cell m-left-border">
              <input type="checkbox" />
            </td>
            <td rowSpan="2" className="detail-table__brigade-cell">302</td>
            <td rowSpan="2" className="detail-table__profile-cell">Г</td>
            <td rowSpan="2" className="detail-table__plate-cell m-right-border">а111аа72</td>
            <td>09:00 - 21:00</td>
            <td>Звёздочкин З.В.</td>
            <td>124</td>
            <td>2</td>
            <td className="m-left-border">12:00 - 00:00</td>
            <td>Астрономов А.А</td>
            <td>128</td>
            <td>4</td>
            <td className="m-left-border">12:00 - 00:00</td>
            <td>Астрономов А.А</td>
            <td>128</td>
            <td>0</td>
            <td className="m-left-border">
              <div className="g-icon-warning"></div>
            </td>
            <td className="m-left-border m-right-border"></td>
          </tr>
          <tr>
            <td>07:00 - 19:00</td>
            <td>Звёздочкин З.В.</td>
            <td>124</td>
            <td>2</td>
            <td className="m-left-border">12:00 - 00:00</td>
            <td>Астрономов А.А</td>
            <td>128</td>
            <td>4</td>
            <td className="m-left-border">12:00 - 00:00</td>
            <td>Астрономов А.А</td>
            <td>128</td>
            <td>0</td>
            <td className="m-left-border"></td>
            <td className="m-left-border m-right-border"></td>
          </tr>
          <tr>
            <td rowSpan="2" className="detail-table__checkbox-cell m-left-border">
              <input type="checkbox" />
            </td>
            <td rowSpan="2" className="detail-table__brigade-cell">301</td>
            <td rowSpan="2" className="detail-table__profile-cell">А</td>
            <td rowSpan="2" className="detail-table__plate-cell m-right-border">а000аа72</td>
            <td>07:00 - 19:00</td>
            <td>Яблочкин Я.П.</td>
            <td>123</td>
            <td>4</td>
            <td className="m-left-border">12:00 - 00:00</td>
            <td>Грушина Г.П.</td>
            <td>127</td>
            <td>0</td>
            <td className="m-left-border">12:00 - 00:00</td>
            <td>Грушина Г.П.</td>
            <td>127</td>
            <td>0</td>
            <td className="m-left-border">
              <div className="g-icon-warning"></div>
            </td>
            <td className="m-left-border m-right-border"></td>
          </tr>
          <tr>
            <td>07:00 - 19:00</td>
            <td>Яблочкин Я.П.</td>
            <td>123</td>
            <td>4</td>
            <td className="m-left-border">12:00 - 00:00</td>
            <td>Грушина Г.П.</td>
            <td>127</td>
            <td>0</td>
            <td className="m-left-border">12:00 - 00:00</td>
            <td>Грушина Г.П.</td>
            <td>127</td>
            <td>0</td>
            <td className="m-left-border"></td>
            <td className="m-left-border m-right-border"></td>
          </tr>
          <tr>
            <td rowSpan="2" className="detail-table__checkbox-cell m-left-border">
              <input type="checkbox" />
            </td>
            <td rowSpan="2" className="detail-table__brigade-cell">302</td>
            <td rowSpan="2" className="detail-table__profile-cell">Г</td>
            <td rowSpan="2" className="detail-table__plate-cell m-right-border">а111аа72</td>
            <td>09:00 - 21:00</td>
            <td>Звёздочкин З.В.</td>
            <td>124</td>
            <td>2</td>
            <td className="m-left-border">12:00 - 00:00</td>
            <td>Астрономов А.А</td>
            <td>128</td>
            <td>4</td>
            <td className="m-left-border">12:00 - 00:00</td>
            <td>Астрономов А.А</td>
            <td>128</td>
            <td>0</td>
            <td className="m-left-border">
              <div className="g-icon-warning"></div>
            </td>
            <td className="m-left-border m-right-border"></td>
          </tr>
          <tr>
            <td>07:00 - 19:00</td>
            <td>Звёздочкин З.В.</td>
            <td>124</td>
            <td>2</td>
            <td className="m-left-border">12:00 - 00:00</td>
            <td>Астрономов А.А</td>
            <td>128</td>
            <td>4</td>
            <td className="m-left-border">12:00 - 00:00</td>
            <td>Астрономов А.А</td>
            <td>128</td>
            <td>0</td>
            <td className="m-left-border"></td>
            <td className="m-left-border m-right-border"></td>
          </tr>
          <tr>
            <td rowSpan="2" className="detail-table__checkbox-cell m-left-border">
              <input type="checkbox" />
            </td>
            <td rowSpan="2" className="detail-table__brigade-cell">301</td>
            <td rowSpan="2" className="detail-table__profile-cell">А</td>
            <td rowSpan="2" className="detail-table__plate-cell m-right-border">а000аа72</td>
            <td>07:00 - 19:00</td>
            <td>Яблочкин Я.П.</td>
            <td>123</td>
            <td>4</td>
            <td className="m-left-border">12:00 - 00:00</td>
            <td>Грушина Г.П.</td>
            <td>127</td>
            <td>0</td>
            <td className="m-left-border">12:00 - 00:00</td>
            <td>Грушина Г.П.</td>
            <td>127</td>
            <td>0</td>
            <td className="m-left-border">
              <div className="g-icon-warning"></div>
            </td>
            <td className="m-left-border m-right-border"></td>
          </tr>
          <tr>
            <td>07:00 - 19:00</td>
            <td>Яблочкин Я.П.</td>
            <td>123</td>
            <td>4</td>
            <td className="m-left-border">12:00 - 00:00</td>
            <td>Грушина Г.П.</td>
            <td>127</td>
            <td>0</td>
            <td className="m-left-border">12:00 - 00:00</td>
            <td>Грушина Г.П.</td>
            <td>127</td>
            <td>0</td>
            <td className="m-left-border"></td>
            <td className="m-left-border m-right-border"></td>
          </tr>
          <tr>
            <td rowSpan="2" className="detail-table__checkbox-cell m-left-border">
              <input type="checkbox" />
            </td>
            <td rowSpan="2" className="detail-table__brigade-cell">302</td>
            <td rowSpan="2" className="detail-table__profile-cell">Г</td>
            <td rowSpan="2" className="detail-table__plate-cell m-right-border">а111аа72</td>
            <td>09:00 - 21:00</td>
            <td>Звёздочкин З.В.</td>
            <td>124</td>
            <td>2</td>
            <td className="m-left-border">12:00 - 00:00</td>
            <td>Астрономов А.А</td>
            <td>128</td>
            <td>4</td>
            <td className="m-left-border">12:00 - 00:00</td>
            <td>Астрономов А.А</td>
            <td>128</td>
            <td>0</td>
            <td className="m-left-border">
              <div className="g-icon-warning"></div>
            </td>
            <td className="m-left-border m-right-border"></td>
          </tr>
          <tr>
            <td>07:00 - 19:00</td>
            <td>Звёздочкин З.В.</td>
            <td>124</td>
            <td>2</td>
            <td className="m-left-border">12:00 - 00:00</td>
            <td>Астрономов А.А</td>
            <td>128</td>
            <td>4</td>
            <td className="m-left-border">12:00 - 00:00</td>
            <td>Астрономов А.А</td>
            <td>128</td>
            <td>0</td>
            <td className="m-left-border"></td>
            <td className="m-left-border m-right-border"></td>
          </tr>
          <tr>
            <td rowSpan="2" className="detail-table__checkbox-cell m-left-border m-last">
              <input type="checkbox" />
            </td>
            <td rowSpan="2" className="detail-table__brigade-cell m-last">302</td>
            <td rowSpan="2" className="detail-table__profile-cell m-last">Г</td>
            <td rowSpan="2" className="detail-table__plate-cell m-last m-right-border">а111аа72</td>
            <td>09:00 - 21:00</td>
            <td>Звёздочкин З.В.</td>
            <td>124</td>
            <td>2</td>
            <td className="m-left-border">12:00 - 00:00</td>
            <td>Астрономов А.А</td>
            <td>128</td>
            <td>4</td>
            <td className="m-left-border">12:00 - 00:00</td>
            <td>Астрономов А.А</td>
            <td>128</td>
            <td>0</td>
            <td className="m-left-border">
              <div className="g-icon-warning"></div>
            </td>
            <td className="m-left-border m-right-border"></td>
          </tr>
          <tr>
            <td>07:00 - 19:00</td>
            <td>Звёздочкин З.В.</td>
            <td>124</td>
            <td>2</td>
            <td className="m-left-border">12:00 - 00:00</td>
            <td>Астрономов А.А</td>
            <td>128</td>
            <td>4</td>
            <td className="m-left-border">12:00 - 00:00</td>
            <td>Астрономов А.А</td>
            <td>128</td>
            <td>0</td>
            <td className="m-left-border"></td>
            <td className="m-left-border m-right-border"></td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default DetailTableMedics