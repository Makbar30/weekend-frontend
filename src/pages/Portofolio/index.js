import React from 'react';
import PortofolioCard from '../../components/PortofolioCard'

const objPortofolio = [
  {
    id: 1,
    title: 'Rekonsialiasi - Web',
    desc: 'CMS to track transaction in Infaq menu, to see if transaction in DB muslimpocket is matched or not with transaction from payment channel.',
    image: 'Rekons.png',
    url: 'https://github.com/Makbar30/Rekons-App'
  },
  {
    id: 2,
    title: 'Nominatif - Web',
    desc: 'A web-based application that is used for internal reimbursement',
    image: 'Nominatif.PNG',
    url: 'https://github.com/Makbar30/nominatif-app'
  },
  {
    id: 3,
    title: 'Belikan - Mobile',
    desc: 'An android-based Thesis application for Jasa titip in Indonesia',
    image: 'Belikan.png',
    url: 'https://expo.io/@akbarbar30/Belikan'
  }

]

function WorksPage() {
  return (
    <div className="works">
      <div className="container">
        {objPortofolio.map((obj,index) => {
          console.log(obj)
          return (
            <PortofolioCard key={index} objPortofolio={obj} />
          )
        }
        )}
      </div>
    </div>
  )
}

export default WorksPage;