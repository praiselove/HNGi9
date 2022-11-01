import './App.css';
import profile from './profile__img.png'
import share_btn from './share-con.png'
import share_dot from './sharedot.png'
import github from './github.png'
import I4G from './I4G.png'
import vector from './Vector.png'
import slack from './Slack_icon.png'

function App() {
  return (
    <>
    <div className="treelink">

      {/* Share Button Start */}
      <div className="share-button">
        <img src={share_btn} alt="" className='share'/>
        <img src={share_dot} alt="" className='dot'/>
      </div>
      {/* Share Button end */}

      {/* Profile Section start */}
      <div className="profile-section">
          <img src={profile} alt="" id="profile__img"/>
          <h2 id="twitter">Tobel2005</h2>
          <h2 id="slack" hidden>Tobi-Tech</h2>
      </div>
      {/* Profile Section end */}

        {/* Link section Start */}
      <div className="link-section">
          <a href="https://twitter.com/Tobel2005" rel="Twitter link">Twitter Link</a>
          <a href="https://training.zuri.team/" id="btn__zuri">Zuri Team</a>
          <a href="http://books.zuri.team" id="books" title="This is where you find books about design and coding">Zuri Books</a>
          <a href="https://books.zuri.team/python-for-beginners?ref_id=LibertyTech" id="book__python" title='Buy my Python book for beginners'>Python Books</a>
          <a href="https://background.zuri.team" id="pitch" title='Do a background check on a coder here'>Background Check for Code</a>
          <a href="https://books.zuri.team/design-rules" id="book__design" title='Get a free design book offered by Zuri.'>Design Books</a>
      </div>
      {/* Link section ends */}


      {/* Social Section Start */}
      <div className="social-section">
          <img src={slack} alt="" height="30"/>
          <img src={github} alt="" height="30"/>
      </div>
      {/* Social Section end */}

      {/* Footer Section start */}
      <div className="footer">
          <div className="sub-container">
            <img src={vector} alt="" height="30" />
            <p>HNG Internship 9 Frontend Task</p>
            <img src={I4G} alt="" height="30"/>
          </div>
      </div>
      {/* Footer Section end */}

    </div>
    </>
  );
}

export default App;
