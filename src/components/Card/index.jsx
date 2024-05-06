import { CardComp } from "../Card/card.styled";
import { Stack } from "../atoms.styled";
import { useHistory } from "react-router-dom";

export default function Card(props) {
  const { id, name, image, type, color, width, onClick, pokedexNum } = props;

  let history = useHistory();
  function handleClick(){
    console.log("premuto")
    if(onClick){
      onClick();
    }
    
  }

  console.log(type)

  return (
      <CardComp alignItems="center" style={{width}} onClick={handleClick}>
        <Stack flexDirection="row" justifyContent="center" alignItems="center" className="card__text">
          <p style={{fontSize: "1.7rem"}}>{name} - #{pokedexNum}</p>
        </Stack>
        <Stack
          flexDirection="row"
          justifyContent="center"
          alignItems="center"
          className="card__img"
          style={{
            backgroundColor: color
          }}
        >
          <div style={{padding: "20px", borderRadius: "50%", border:"1px solid black", backgroundColor: "white"}}>
            <img src={image} />
          </div>
        </Stack>
        <Stack flexDirection="row" justifyContent="space-evenly" alignItems="center" className="card__badges">
          {type && type.length > 0 && 
            type.map((item, index) => (
              <div key={index} className="badge">
                {item}
              </div>
            )
          )}
        </Stack>
      </CardComp>
  );
}
