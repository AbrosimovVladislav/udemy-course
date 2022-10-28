import {Button, Htag, Ptag} from "../components";
import {Tag} from "../components/Tag/Tag";


export default function Home() {
  return (
    <>
      <Htag tag='h1'>
            Hello
      </Htag>
        <Button arrow={"right"} appearance='primary'>
            Hello
        </Button>
      <Ptag size='s'>
          Hello PP
      </Ptag>
      <Tag size='s' color='red'>Henlo</Tag>
      <Tag size='m' color='green'>Henlo</Tag>
    </>
  )
}
