// ** Modules Imports
import parse from 'html-react-parser'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'

const DocumentViewComments = ({ details }) => {
  const comment = details?.['Комментарий'] || 'У данного документа нет комментария'

  return (
    <div className="document-view__comments">
      <Tabs className="g-tabs">
        <TabList className="g-tabs__list">
          <Tab className="g-tabs__item">Комментарий</Tab>
          <Tab className="g-tabs__item">Оглавление</Tab>
        </TabList>
        <TabPanel className="g-tabs__content-item">
          {parse(comment)}
        </TabPanel>
        <TabPanel className="g-tabs__content-item">
          <ul className="document-view__comments-titles">
            <li className="document-view__comments-title">Приложение № 1 - Правила осуществления медицинской эвакуации при оказании скорой, в том числе скорой специализированной, медицинской помощи</li>
            <li className="document-view__comments-title">Приложение № 2 - Правила организации деятельности выездной бригады скорой медицинской помощи</li>
            <li className="document-view__comments-title">Приложение № 3 - Правила организации деятельности станции скорой медицинской помощи, отделения скорой медицинской помощи</li>
            <li className="document-view__comments-title">Приложение № 4 - Рекомендуемые штатные нормативыстанции скорой медицинской помощи, отделения скорой медицинской помощи</li>
            <li className="document-view__comments-title">Приложение № 5 - Стандарт оснащения станции скорой медицинской помощи, отделения скорой медицинской помощи</li>
            <li className="document-view__comments-title">Приложение № 6 - Правила организации деятельности оперативного отдела медицинской организации, оказывающей скорую медицинскую помощь вне медицинской организации</li>
            <li className="document-view__comments-title">Приложение № 7 - Рекомендуемые штатные нормативы оперативного отдела медицинской организации, оказывающей скорую медицинскую помощь вне медицинской организации*</li>
            <li className="document-view__comments-title">Приложение № 8 - Стандарт оснащения оперативного отдела медицинской организации, оказывающей скорую медицинскую помощь вне медицинской организации</li>
            <li className="document-view__comments-title">Приложение № 9 - Правила организации деятельности стационарного отделения скорой медицинской помощи</li>
          </ul>
        </TabPanel>
      </Tabs>
    </div>
  )
}

export default DocumentViewComments