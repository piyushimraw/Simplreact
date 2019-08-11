import element from './element';
interface props {
  id: string,
  [key:string]: any,
  children: Array<element>,
}

export default props;