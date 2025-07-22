import React, {useState, useEffect, useRef} from 'react';
import axios from "axios";

//------------🎯interface 선언-----------------
interface PokemonList {
    name : string;
    image: string;
    type: string[];
}
//---------------------------------------------

function Pokemon(){
    const [pokemonList, setPokemonList] = useState<PokemonList[]>([]);
    // Type별 BackGround 색상 정의
    const typeColor = [
        {type: "Grass", color: "bg-green-500"},
        {type: "Poison", color: "bg-purple-500"}
    ]
    // 렌더링 2번 방지용
    const didRun = useRef(false);
    const fetchPokemon = async () => {
        try{
            const res = await axios.get("https://pokeapi.co/api/v2/pokemon/Bulbasaur");
            // 가장 처음 앞 글자 대문자로 변환
            const resName: string = res.data.name[0].toUpperCase() + res.data.name.slice(1,)
            const resImage: string = res.data.sprites.other['official-artwork'].front_default;
            // 위와 동일
            const resType: string[] = res.data.types.map((t: any) => t.type.name[0].toUpperCase() + t.type.name.slice(1,));

            setPokemonList(prev => [...prev, {name: resName, image: resImage, type: resType}])
        }
        catch(err){
            alert("error 발생!")
        }
    }

    useEffect(() => {
        if(didRun.current) return;
        didRun.current = true;
        fetchPokemon();
    })

    return(
        <div className="flex justify-center items-center gap-4">
            {pokemonList.map((pokemon) => (
                <div className="rounded-xl shadow-xl w-48">
                    <img src={pokemon.image} alt={pokemon.name} className="w-36 h-36 mx-auto"/>
                    <p className="text-center font-bold text-2xl">{pokemon.name}</p>
                    <div className="grid grid-cols-2 gap-1 m-2 place-items-center place-content-center">
                        {pokemon.type.map((type) => {
                            const founded = typeColor.find((t) => t.type === type);
                            const bgColor = founded ? founded.color : "bg-white";
                            return(
                                <div key={type} className={`${bgColor} w-full flex justify-center items-center font-semibold rounded-lg p-1`}>
                                    {type}
                                </div>
                            )
                        })}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Pokemon;