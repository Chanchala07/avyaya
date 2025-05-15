import './homePage.css'

const HomePage = () => {
  return (
    <>
      <div className='content'>
        <div className='row'>
          <div className='col-lg-3 col-sm-6 col-md-6'>
            <div className='card custom-card d-flex align-items-start justify-content-center'>
              <div className="mb-3 ms-3">
                <i className="fas fa-user fs-5 text-white"></i>
              </div>
              <div className="mb-1 text-white">Chromeleon</div>
              <div className="fw-bold fs-4 text-white">345</div>
            </div>
          </div>
          <div className='col-lg-3 col-sm-6 col-md-6'>
            <div className='card custom-card d-flex align-items-start justify-content-center'>
              <div className="mb-3 ms-3">
                <i className="fas fa-user fs-5 text-white"></i>
              </div>
              <div className="mb-1 text-white">Lab Solutions</div>
              <div className="fw-bold fs-4 text-white">193</div>
            </div>
          </div>
          <div className='col-lg-3 col-sm-6 col-md-6'>
            <div className='card custom-card d-flex align-items-start justify-content-center'>
              <div className="mb-3 ms-3">
                <i className="fas fa-users fs-5 text-white"></i>
              </div>
              <div className="mb-1 text-white">ICDAS ins</div>
              <div className="fw-bold fs-4 text-white">349</div>
            </div>
          </div>
          <div className='col-lg-3 col-sm-6 col-md-6'>
            <div className='card custom-card d-flex align-items-start justify-content-center'>
              <div className="mb-3 ms-3">
                <i className="fas fa-user fs-5 text-white"></i>
              </div>
              <div className="mb-1 text-white">LIMS ins</div>
              <div className="fw-bold fs-4 text-white">500</div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default HomePage
