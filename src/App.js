import './App.css';
import Button from './Components/Button/Button';
import Card from './Components/Card/Card';

const {getData} = require("./db/db");

const foods = getData();

function App() {
  return (
    <>
      I'm Here !
      <Button title={'Добавить'} disable={false} type={'add'}/>
      <Button title={'Удалить'} disable={false} type={'remove'}/>
      <Button title={'Проверка'} disable={false} type={'checkout'}/>
      {foods.map(food => {
        return <Card food={food} key={food.id}/>
      })}
    </>
  );
}

export default App;
