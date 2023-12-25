import React from 'react'
import { useState } from "react";
import { Tab } from "@headlessui/react";

export default function Authorization() {
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  };

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) =>{
      e.preventDefault();
      console.log(email);
      console.log(password);
  }


  return (
    <div className='container'>
      <Tab.Group>
        <Tab.List className="tab_list">
          <Tab className={toggleState === 1 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(1)}>Авторизация</Tab>
          <Tab className={toggleState === 2 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(2)}>Регистрация</Tab>
        </Tab.List>
        <Tab.Panels>
                <Tab.Panel>
                  <form  className={toggleState === 1 ? "content  active-content" : "content"} onSubmit={handleSubmit}>
                      <input type="email" required="" name="email" placeholder="Электронная почта" onChange={(e) => setEmail(e.target.value)}></input>
                      <input type="password" required="" name="password" placeholder="Пароль" onChange={(e) => setPassword(e.target.value)}></input>             
                      <button className="button" type='submit'>Войти</button> 
                  </form>
                              
                </Tab.Panel>
                <Tab.Panel  className={toggleState === 2 ? "content  active-content" : "content"}>
                  <form>
                    <div>
                      <input type="text" required="" name="name" placeholder="ФИО" ></input>
                      <input type="tel" required="" name="tel" placeholder="Контактный телефон"></input>
                      <input type="email" required="" name="email" placeholder="Электронная почта" ></input>
                      <input type="password" required="" name="password" placeholder="Пароль"></input> 
                    </div>
                  </form>
                  <button className="button">Зарегистрироваться</button>
                </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  )
}
