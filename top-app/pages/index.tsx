import {Button} from "../components";
import {Tag} from "../components/Tag/Tag";
import {useState} from "react";
import {Rating} from "../components/Rating/Rating";


export default function Home() {

  const [counter, setCounter] = useState<number>(0);

  const plus = () => {
    setCounter(prev => prev + 1);
  }

  const minus = () => {
    setCounter(prev => prev - 1);
  }

  return (
      <>
        <Tag color='red'>{counter}</Tag>
        <Button onClick={plus}>+1</Button>
        <Button onClick={minus}>-1</Button>
        <Rating rating={4}></Rating>
      </>
  )
}
