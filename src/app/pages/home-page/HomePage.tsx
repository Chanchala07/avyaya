import './homePage.css';
import paperImg from '../../assets/Images/Paper.png';
import activiyImg from '../../assets/Images/Activity.png';
import users from '../../assets/Images/3 User.png';
import bagImg from '../../assets/Images/Bag.png';
import sendImg from '../../assets/Images/send.png';

const HomePage = () => {
  return (
    <>
      <div className='content'>
        <div className='row'>
          <div className='col-lg-3 col-sm-6 col-md-6'>
            <div className='card custom-card d-flex align-items-start justify-content-center'>
              <img src={sendImg} className='send-img' />
              <div className="mb-3 ms-3">
                <img src={paperImg} />
              </div>
              <div className="mb-1 text-white card-text">Chromeleon</div>
              <div className="text-white counter">345</div>
            </div>
          </div>
          <div className='col-lg-3 col-sm-6 col-md-6'>
            <div className='card custom-card d-flex align-items-start justify-content-center'>
              <img src={sendImg} className='send-img' />
              <div className="mb-3 ms-3">
                <img src={activiyImg} />
              </div>
              <div className="mb-1 text-white card-text">Lab Solutions</div>
              <div className="text-white counter">193</div>
            </div>
          </div>
          <div className='col-lg-3 col-sm-6 col-md-6'>
            <div className='card custom-card d-flex align-items-start justify-content-center'>
              <img src={sendImg} className='send-img' />
              <div className="mb-3 ms-3">
                <img src={users} />
              </div>
              <div className="mb-1 text-white card-text">ICDAS ins</div>
              <div className="text-white counter">349</div>
            </div>
          </div>
          <div className='col-lg-3 col-sm-6 col-md-6'>
            <div className='card custom-card d-flex align-items-start justify-content-center'>
              <img src={sendImg} className='send-img' />
              <div className="mb-3 ms-3">
                <img src={bagImg} />
              </div>
              <div className="mb-1 text-white card-text">LIMS ins</div>
              <div className="text-white counter">500</div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default HomePage
