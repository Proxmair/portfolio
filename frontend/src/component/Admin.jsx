import React, { useEffect, useState } from 'react'
import { GrUpdate, GrAdd } from 'react-icons/gr'
import { AiOutlineLogout, AiOutlineDelete } from 'react-icons/ai'
import { useAlert } from 'react-alert'
import { useDispatch } from 'react-redux'
import axios from 'axios';
import { logout } from '../actions/user';
let innitialUser = {
  email: "",
  about: {
    text: "",
    list: [{ image: "", url: "" }]
  },
  work: {
    text: "",
    list: [{ name: "", description: "", image: "", url: "" }]
  },
  service: {
    text: "",
    list: [{ name: "", description: "" }]
  },
  socials: {
    whatsApp: {
      image: "",
      url: "",
    },
    faceBook: "",
    gitHub: "",
    hackerRank: "",
    linkedIn: ""
  }
}

const Admin = () => {
  const dispatch = useDispatch();
  const alert = useAlert();
  const [activeDataBtn, setactiveDataBtn] = useState(-1);
  const headings = ['About', 'Work', 'Service', 'Socials'];
  const [name, setname] = useState(innitialUser.name);
  const [email, setemail] = useState(innitialUser.email);
  const [aboutText, setaboutText] = useState(innitialUser.about.text);
  const [aboutList, setaboutList] = useState(innitialUser.about.list);
  const [workText, setworkText] = useState(innitialUser.work.text);
  const [workList, setworkList] = useState(innitialUser.work.list)
  const [serviceText, setserviceText] = useState(innitialUser.service.text);
  const [serviceList, setserviceList] = useState(innitialUser.service.list)
  const [socialsText, setsocialsText] = useState(innitialUser.socials.text);
  const [socialsList, setsocialsList] = useState(innitialUser.socials.list);
  const [whatsApp, setwhatsApp] = useState(innitialUser.socials.whatsApp);
  const [faceBook, setfaceBook] = useState(innitialUser.socials.faceBook);
  const [gitHub, setgitHub] = useState(innitialUser.socials.gitHub);
  const [hackerRank, sethackerRank] = useState(innitialUser.socials.hackerRank);
  const [linkedIn, setlinkedIn] = useState(innitialUser.socials.linkedIn);
  useEffect(() => {
    getUser();
  }, [])
  const getUser = async () => {
    try {
      const { data } = await axios.get("/api/v1/user");
      innitialUser = data.user;
      setname(data.user.name);
      setemail(data.user.email);
      setaboutText(data.user.about.text);
      setaboutList(data.user.about.list);
      setworkText(data.user.work.text);
      setworkList(data.user.work.list);
      setserviceText(data.user.service.text);
      setserviceList(data.user.service.list);
      setsocialsText(data.user.socials.text);
      setsocialsList(data.user.socials.list);
      setwhatsApp(data.user.socials.whatsApp);
      setfaceBook(data.user.socials.faceBook);
      setgitHub(data.user.socials.gitHub);
      sethackerRank(data.user.socials.hackerRank);
      setlinkedIn(data.user.socials.linkedIn);
    } catch (error) {
    }
  }
  const updateProfileHandler = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "/api/v1/update",
        {
          email,
          aboutText,
          aboutList,
          workText,
          workList,
          serviceText,
          serviceList,
          socialsText,
          socialsList,
          whatsApp,
          faceBook,
          hackerRank,
          linkedIn,
          gitHub
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      alert.success(data.message);
    } catch (error) {
      alert.error(error);
    }
  }
  const logoutHandler = () => {
    dispatch(logout());
  }
  const emailChangeHandler = (e) => {
    setemail(e.target.value)
  }
  const textChangeHandler = (e) => {
    if (activeDataBtn === 1) {
      setaboutText(e.target.value);
    }
    else if (activeDataBtn === 2) {
      setworkText(e.target.value)
    }
    else if (activeDataBtn === 3) {
      setserviceText(e.target.value)
    }
    else {
      setsocialsText(e.target.value)
    }

  }
  const imageChangeHandler = (e, val, index) => {
    const file = e.target.files[0];
    const Reader = new FileReader();
    Reader.readAsDataURL(file);
    Reader.onload = () => {
      if (Reader.readyState === 2) {
        if (val === 'whatsApp') {
          setwhatsApp({ ...whatsApp, image: Reader.result })
        }
        else if (val === 'aboutList') {
          innitialUser.about.list[index].image = Reader.result;
          setaboutList([...innitialUser.about.list])
        }
        else if (val === 'workList') {
          innitialUser.work.list[index].image = Reader.result;
          setworkList([...innitialUser.work.list])
        }

      }
    };
  }
  const urlChangeHandler = (e, val, index) => {
    if (val === 'whatsApp') {
      setwhatsApp({ ...whatsApp, url: e.target.value });
    }
    else if (val === 'faceBook') {
      setfaceBook(e.target.value)
    }
    else if (val === 'linkedIn') {
      setlinkedIn(e.target.value)
    }
    else if (val === 'hackerRank') {
      sethackerRank(e.target.value)
    }
    else if (val === 'gitHub') {
      setgitHub(e.target.value)
    }
    else if (val === 'aboutUrl') {
      innitialUser.about.list[index].url = e.target.value;
      setaboutList([...innitialUser.about.list])
    }
    else if (val === 'workUrl') {
      innitialUser.work.list[index].url = e.target.value;
      setworkList([...innitialUser.work.list])
    }
  }
  const nameChangeHandler = (e, val, index) => {
    if (val === 'workName') {
      innitialUser.work.list[index].name = e.target.value;
      setworkList([...innitialUser.work.list])
    }
    else if (val === 'serviceName') {
      console.log('asdf');
      innitialUser.service.list[index].name = e.target.value;
      setserviceList([...innitialUser.service.list])
    }
  }
  const descriptionChangeHandler = (e, val, index) => {
    if (val === 'workDescription') {
      innitialUser.work.list[index].description = e.target.value;
      setworkList([...innitialUser.work.list])
    }
    else if (val === 'serviceDescription') {
      innitialUser.service.list[index].description = e.target.value;
      setserviceList([...innitialUser.service.list])
    }
  }
  const dataActiveBtnHandler = (e) => {
    if (parseInt(e.target.id) === activeDataBtn) {
      setactiveDataBtn(-1);
    }
    else {
      setactiveDataBtn(parseInt(e.target.id));
    }
  }
  const listAddHandler = () => {
    if (activeDataBtn === 1) {
      innitialUser.about.list.push({ image: "Enter Image", url: "Enter Url" })
      setaboutList([...innitialUser.about.list])
    }
    else if (activeDataBtn === 2) {
      innitialUser.work.list.push({ name: "Enter Name", description: "Enter Description", image: "Enter Image", url: "Enter Url" })
      setworkList([...innitialUser.work.list])
    }
    else if (activeDataBtn === 3) {
      innitialUser.service.list.push({ name: "Enter Name", description: "Enter Description" })
      setserviceList([...innitialUser.service.list])
    }
  }
  const listDeleteHandler = (index) => {
    if (activeDataBtn === 1) {
      innitialUser.about.list = [...innitialUser.about.list.slice(0, index), ...innitialUser.about.list.slice(index + 1)]
      setaboutList([...innitialUser.about.list])
    }
    else if (activeDataBtn === 2) {
      innitialUser.work.list = [...innitialUser.work.list.slice(0, index), ...innitialUser.work.list.slice(index + 1)]
      setworkList([...innitialUser.work.list])
    }
    else if (activeDataBtn === 3) {
      innitialUser.service.list = [...innitialUser.service.list.slice(0, index), ...innitialUser.service.list.slice(index + 1)]
      setserviceList([...innitialUser.service.list])
    }
  }
  return (
    <div className='container admin-container'>
      <h1>Admin Panel</h1>
      <div>
        <button onClick={logoutHandler} className='btn' id="btn-logout"><AiOutlineLogout />Logout</button>
        <button onClick={updateProfileHandler} className='btn btn-update'><GrUpdate />Update</button>
      </div>
      <div className='admin-dashboard'>
        <div className='admin-data-btn' >
          <div id='1' onClick={dataActiveBtnHandler} className={activeDataBtn === 1 ? "btn-active" : ""} >About</div>
          <div id='2' onClick={dataActiveBtnHandler} className={activeDataBtn === 2 ? "btn-active" : ""} >Work</div>
          <div id='3' onClick={dataActiveBtnHandler} className={activeDataBtn === 3 ? "btn-active" : ""} >Service</div>
          <div id='4' onClick={dataActiveBtnHandler} className={activeDataBtn === 4 ? "btn-active" : ""} >Socials</div>
        </div>
        <div className='admin-data-view' >
          <div>
            <h2>{name}'s Profile</h2>
            <input type='text' onChange={emailChangeHandler} value={email} />
          </div>
          {activeDataBtn !== -1 ? (
            <>
              <div className='admin-data-view-heaading'>
                <h3>{headings[activeDataBtn - 1]}</h3>
                <div>
                  <textarea onChange={textChangeHandler} value={activeDataBtn === 1 ? aboutText : activeDataBtn === 2 ? workText : activeDataBtn === 3 ? serviceText : socialsText}></textarea>
                </div>
              </div>
              <table className='admin-data-view-collections'>
                <thead>
                  <tr>
                    <th>S.no</th>
                    {(activeDataBtn === 2 || activeDataBtn === 3 || activeDataBtn === 4) ? <th>Name</th> : null}
                    {(activeDataBtn === 2 || activeDataBtn === 3) ? <th>Description</th> : null}
                    {(activeDataBtn !== 3) ? <th>Image</th> : null}
                    {(activeDataBtn !== 3) ? <th>Link</th> : null}
                    {(activeDataBtn !== 4) ? <th>Delete</th> : null}
                  </tr>
                </thead>
                {activeDataBtn === 4 ?
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>WhatsApp</td>
                      <td>
                        <input onChange={(e) => imageChangeHandler(e, 'whatsApp', 0)} accept="image/*" type="file" id={`${headings[activeDataBtn]}_image${0}`} />
                        <label htmlFor={`${headings[activeDataBtn]}_image${0}`}><img src={whatsApp.image} alt="skill_image" /></label>
                      </td>
                      <td><input onChange={(e) => urlChangeHandler(e, 'whatsApp')} type="url" id={`${headings[activeDataBtn]}_url${0}`} value={whatsApp.url} /></td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>FaceBook</td>
                      <td>No Image</td>
                      <td><input onChange={(e) => urlChangeHandler(e, 'faceBook', 0)} type="url" id={`${headings[activeDataBtn]}_url${1}`} value={faceBook} /></td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>LinkedIn</td>
                      <td>No Image</td>
                      <td><input onChange={(e) => urlChangeHandler(e, 'linkedIn', 0)} type="url" id={`${headings[activeDataBtn]}_url${2}`} value={linkedIn} /></td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>HackerRank</td>
                      <td>No Image</td>
                      <td><input onChange={(e) => urlChangeHandler(e, 'hackerRank', 0)} type="url" id={`${headings[activeDataBtn]}_url${3}`} value={hackerRank} /></td>
                    </tr>
                    <tr>
                      <td>5</td>
                      <td>GitHub</td>
                      <td>No Image</td>
                      <td><input onChange={(e) => urlChangeHandler(e, 'gitHub', 0)} type="url" id={`${headings[activeDataBtn]}_url${4}`} value={gitHub} /></td>
                    </tr>
                  </tbody>
                  :
                  activeDataBtn === 1 ?
                    <tbody>
                      {(aboutList.map((item, index) => (
                        <tr key={`aboutlist${index}`}>
                          <td>{index + 1}</td>
                          <td>
                            <input onChange={(e) => imageChangeHandler(e, `aboutList`, index)} type="file" id={`${headings[activeDataBtn]}_image${index}`} />
                            <label htmlFor={`${headings[activeDataBtn]}_image${index}`}><img src={item.image} alt="skill_image" /></label>
                          </td>
                          <td>
                            <input onChange={(e) => urlChangeHandler(e, 'aboutUrl', index)} type="url" id={`${headings[activeDataBtn]}_url${index}`} value={item.url} />
                          </td>
                          <td><button onClick={() => listDeleteHandler(index)} ><AiOutlineDelete /></button></td>
                        </tr>
                      )))}
                    </tbody>
                    :
                    activeDataBtn === 2 ?
                      <tbody>
                        {(workList.map((item, index) => (
                          <tr key={`worklist${index}`} >
                            <td>{index + 1}</td>
                            <td>
                              <input onChange={(e) => nameChangeHandler(e, 'workName', index)} type="text" id={`${headings[activeDataBtn]}_name${index}`} value={item.name} />
                            </td>
                            <td>
                              <textarea onChange={(e) => descriptionChangeHandler(e, 'workDescription', index)} id={`${headings[activeDataBtn]}_description${index}`} value={item.description} />
                            </td>
                            <td>
                              <input onChange={(e) => imageChangeHandler(e, `workList`, index)} type="file" id={`${headings[activeDataBtn]}_image${index}`} />
                              <label htmlFor={`${headings[activeDataBtn]}_image${index}`}><img src={item.image} alt="skill_image" /></label>
                            </td>
                            <td>
                              <input onChange={(e) => urlChangeHandler(e, 'workUrl', index)} type="url" id={`${headings[activeDataBtn]}_url${index}`} value={item.url} />
                            </td>
                            <td><button onClick={() => listDeleteHandler(index)} ><AiOutlineDelete /></button></td>
                          </tr>
                        )))}
                      </tbody>
                      :
                      activeDataBtn === 3 ?
                        <tbody>
                          {(serviceList.map((item, index) => (
                            <tr key={`servicelist${index}`}>
                              <td>{index + 1}</td>
                              <td>
                                <input onChange={(e) => nameChangeHandler(e, 'serviceName', index)} type="text" id={`${headings[activeDataBtn]}_name${index}`} value={item.name} />
                              </td>
                              <td>
                                <textarea onChange={(e) => descriptionChangeHandler(e, 'serviceDescription', index)} id={`${headings[activeDataBtn]}_description${index}`} value={item.description} />
                              </td>
                              <td><button onClick={() => listDeleteHandler(index)} ><AiOutlineDelete /></button></td>
                            </tr>
                          )))}
                        </tbody>
                        : null
                }
              </table>
              {activeDataBtn !== 4 ? <button onClick={listAddHandler} className='btn btn-add'><GrAdd /></button> : null}
            </>
          ) : (
            <p className='admin-no-data'>no data is selected</p>
          )}
        </div>
      </div>
    </div>
  )
}

export default Admin

