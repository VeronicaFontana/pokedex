import { Stack } from "../atoms.styled";
import EvolutionCard from "../EvolutionCard";

export default function Evolution(props){
    const {image, name} = props;

    return(
        <Stack flexDirection="row" justifyContent="space-between" style={{width:"100%"}}>
            <EvolutionCard 
                image={image}
                name={name}
            />
            freccia
            <EvolutionCard />
            freccia
            <EvolutionCard />
        </Stack>
    );
}