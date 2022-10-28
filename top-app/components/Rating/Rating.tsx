import {DetailedHTMLProps, HTMLAttributes, useState} from "react";
import StarIcon from 'star.svg'

interface RatingProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  isEditable?: boolean;
  rating: number;
  setRating?: (rating: number) => void;
}

export const Rating = ({isEditable = false, rating, setRating, className, ...props}: RatingProps) => {

  const [ratingArr, setRatingArr] = useState<string[]>(new Array(5).fill(<></>));

  const constructRating = (currentRating:number) => {
    const updatedArr = ratingArr.map(e => '*')
    setRatingArr(updatedArr);
  }

  return <div {...props}>
    {ratingArr.map((e,i) => <span key={i}>{e}</span>)}
  </div>
}
