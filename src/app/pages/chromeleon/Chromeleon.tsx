import './chromeleon.css';
import sendImg from '../../assets/Images/send.png';
import sequenceImg from '../../assets/Images/Group 289848.png';
import activitImg from '../../assets/Images/Activity (1).png';
import vectorImg from '../../assets/Images/Vector (1).png';

const Chromeleon = () => {
    return (
        <>
            <div className='content'>
                <div className='row'>
                    <div className='col-lg-4 col-sm-6 col-md-6'>
                        <div className='card custom-card-chrome d-flex align-items-start justify-content-center'>
                              <img src={sendImg} className='send-img' />
                            <div className="mb-3 ms-3">
                               <img src={sequenceImg}/>
                            </div>
                            <div className="mb-1 text-white card-text">Sequence Audit Trail</div>                         
                        </div>
                    </div>
                    <div className='col-lg-4 col-sm-6 col-md-6'>
                        <div className='card custom-card-chrome d-flex align-items-start justify-content-center'>
                              <img src={sendImg} className='send-img' />
                            <div className="mb-3 ms-3">
                                <img src={vectorImg}/>
                            </div>
                            <div className="mb-1 text-white card-text">Injection</div>
                        </div>
                    </div>
                    <div className='col-lg-4 col-sm-6 col-md-6'>
                        <div className='card custom-card-chrome d-flex align-items-start justify-content-center'>
                              <img src={sendImg} className='send-img' />
                            <div className="mb-3 ms-3">
                                <img src={activitImg}/>
                            </div>
                            <div className="mb-1 text-white card-text">Dashboard</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Chromeleon
